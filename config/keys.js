// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  // if you're using project on your local machine, be sure to make dev.js with keys listed in prod
  module.exports = require('./dev');
}
