import app from './app'

const serve = () => console.log(`${app.get('env')}: Running at http://localhost:${app.get('port')}`)

export default app.listen(app.get('port'), () => serve)
