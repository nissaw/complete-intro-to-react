// sometimes called server.js
// this app does not get transpiled
// but everything it requires in does get transpiled
require('babel-register')

const express = require('express')
const React = require('react')
// needed to render the React into a string
const ReactDOMServer = require('react-dom/server')
// this syntax won't work in node have to write it out  :(
// const { match, RouterContext } = require('react-router')
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
// const { Provider } = require('react-redux')
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
// need to specify .jsx b/c won't be resolved by webpack
// const { store } = require('./js/Store.jsx')
const Store = require('./js/Store.jsx')
const store = Store.store
//needed for templating in index.html
const _ = require('lodash')
// have to read index.html from the file system
const fs = require('fs')
const port = 5050
const baseTemplate = fs.readFileSync('./index.html')
// creates a new function that creates a new string using this template
const template = _.template(baseTemplate)
const ClientApp = require('./js/ClientApp.jsx')
const Routes = ClientApp.Routes

const app = express()

// @ 1: 04
// whenever someone requests something directly  // also automagically sets all the headers
app.use('/public', express.static('./public'))

// anything that doesn't match public will use this
// request is anyting the user is sending to use, everything you want to send back goes into response
app.use((req, res) => {
  // where does match come from?
  match({ routes: Routes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      // React gave me a redirect and I want you to do something with it
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // the happy path, if we found something
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store},
          React.createElement(RouterContext, renderProps)
        )
      )
      // insert the body into the template tag in index.html
      res.status(200).send(template({body}))
    } else {
      // can also send your 404 page here
      res.status(404).send('Not Found')
    }
  })
})

console.log('listening on port ' + port);
app.listen(port)

// node app.js to run
