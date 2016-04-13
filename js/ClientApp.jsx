const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { shows } = require('../public/data')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const App = React.createClass({   // because we needed to add a method (assignShow) - we need to convert this from a stateless function to createClass or es6 class
  assignShow (nextState, replace) { // replace comes from react-router. onEnter comes from there too, everytime the router goes to run this route onEnter will run
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)

    // console.log('nextState', nextState, 'showArray', showArray) // debugging

    if (showArray.length < 1) {
      return replace('/')
    }
    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
