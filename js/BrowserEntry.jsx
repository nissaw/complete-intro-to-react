const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./ClientApp')
const { match } = require('react-router')

// to work with webpack chunking and server-side rendering, when it renders for the first time, it needs to wait
match({ history: App.History, routes: App.Routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('BrowserEntry error', error)
  }
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})

 // ReactDOM.render(<App/>, document.getElementById('app'))
