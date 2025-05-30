const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const authRoutes = require('./routes/routes')

const app = express()

const conn = require('./db/conn')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.use(
  session({
    name: 'session',
    secret: 'chaveforteparasesecure',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: './sessions',
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
)

app.use('/auth', authRoutes)


app.use(flash())

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))