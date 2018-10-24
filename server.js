const express = require('express')
const path = require('path')
const app = express()
const bodyparser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

require('./routes/apiRoutes.js')(app)

app.listen(4000, () => console.log('http://localhost:4000'))