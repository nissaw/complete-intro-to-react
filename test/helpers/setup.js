// From Kent C. Dodds using jsdom to create a 'fake' browser environment for our tests to run in node

require('babel-register')
require('babel-polyfill')

// global is node version of the window of the browser environment
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
