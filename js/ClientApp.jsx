const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const { Router, Route, hashHistory } = require('react-router')

// the following 4 lines are summarized by line4 'destructuring'
// const ReactRouter = require('react-router')
// const Router = require('router');
// const Route = require('route');
// const hashHistory = require('hashHistory');

const App = () => (
  // this is the easier way to keeo track of back/forward button Use - will be replaced by browser histroty when we get to the node side of things
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
