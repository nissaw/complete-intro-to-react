const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const { Router, Route, hashHistory } = require('react-router')

// the following 4 lines are summarized by line4 'destructuring'
// const ReactRouter = require('react-router')
// const Router = require('router');
// const Route = require('route');
// const hashHistory = require('hashHistory');

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
