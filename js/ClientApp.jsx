const React = require('react')
const Layout = require('./Layout')
const { Router, browserHistory } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux') // anytime you use the connector is automatically connects to the redux store

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')// makes node-ensure calls syncronous - shim for node.js
  }
}

// async routing must use a config object, can't use componets like myRoutes
const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
  // hey whenever you want my index route call getcomponent and I'll get it for you - have to remove them from the require above
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

// prev
// const myRoutes = () => (
//   <Route path='/' component={Layout}>
//     <IndexRoute component={Landing} />
//     <Route path='/search' component={Search} />
//     <Route path='/details/:id' component={Details} />
//   </Route>
// )

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

App.Routes = rootRoute
App.history = browserHistory
module.exports = App
