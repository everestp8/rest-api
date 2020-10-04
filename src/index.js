const App = require('./app')()
const config = require('./config/server')

App.app.listen(config.port, () => {
	console.log('[server] Server online on '+config.port)
})