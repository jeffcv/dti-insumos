const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jasonwebtoken')

const registerUser = async (req, res) => {
    const { username, email, password } = req.body

    const existingUser = await User.findOne({ where: { email } })

    if(existingUser) {
        return res.status(400).send('E-mail já cadastrado.')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({
        username,
        email,
        password: hashedPassword
    })

    res.status(201).send('Usuário registrado com sucesso!')
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } })
        
        if(!user) {
            return res.status(400).send({ message: 'Usuário não encontrado'})
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(400).send({ message: 'Senha incorreta' })
        }

        const token = jwt.sign({ id: user.id, email: user.email }, 'secreta', {
            expiresIn: '1h',
        })

        return res.status(200).send({ message: 'Login bem-sucedido', token})      
    } catch (error) {
        return res.status(500).send({ message: 'Erro no servidor', error })
    }
}

module.exports = { login }