const redux = require('redux')
const reactRedux = require('react-redux')

// makes all of your actions constants
const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: ''
}
// this is our root reducer
// rootReducer is going to get called once when we initialize, so we provide it the default value for initialState.
// usually don't make your own rootReducer, redux has a method (compose?) that makes it for you
const rootReducer = (state = initialState, action) => {
  // console.log(state, action) // debugging
  switch (action.type) {
    case SET_SEARCH_TERM:
    // if we only had the root reducer this would happen here
      // const newState = {}
      // // everything from state gets added to newstate and searchTerm gets overwritten with the new action
      // Object.assign(newState, state, {searchTerm: action.value})
      // return newState

      // this example we're passing it down to a sub-reducer
      return reduceSearchTerm(state, action)
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}
// this is also setting up our middleware to get redux dev tools to work
const store = redux.createStore(rootReducer, initialState, redux.compose(
    typeof window === 'object' && typeof window.devtoolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}
// const mapStateToProps = (state) => ({ return { searchTerm: state.searchTerm }) ES6 implicit return

// dispatch will feed the action in to the rootReducer and also provide it the previous state
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({ type: SET_SEARCH_TERM, value: searchTerm })
    }
  }
}

// will typically have many connectors for many different components and you'll just pass the ones components care about to them
// this connector can also be in your component? what would you name them if you had multiple?
const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }

// todo middleware
