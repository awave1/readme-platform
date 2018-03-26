const app = require('./app')

const serve = () => console.log(`${app.get('env')}: Running at http://localhost:${app.get('port')}`)

const server = app.listen(app.get('port'), () => serve)

module.exports = server
