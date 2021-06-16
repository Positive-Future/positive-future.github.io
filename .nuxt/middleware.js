const middleware = {}

middleware['redirect'] = require('../middleware/redirect.js')
middleware['redirect'] = middleware['redirect'].default || middleware['redirect']

export default middleware
