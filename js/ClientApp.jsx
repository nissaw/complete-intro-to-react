const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux') // anytime you use the connector is automatically connects to the redux store

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} />
          <Route path='/details/:id' component={Details} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(
(
  <Provider store={store}>
    <App />
  </Provider>
),
document.getElementById('app')
)
