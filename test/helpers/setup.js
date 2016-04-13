// From Kent C. Dodds using jsdom to create a 'fake' browser environment for our tests to run in node

require('babel-register')
require('babel-polyfill')

// global is node version of the window of the browser environment
// becuase our tests are run server side we need to mock out the browser env.
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
