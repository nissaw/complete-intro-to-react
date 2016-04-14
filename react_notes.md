props (data) down => actions up
one way data binding


const { Router, Route, hashHistory } = require('react-router')

// the following 4 lines are summarized by line4 'destructuring'
// const ReactRouter = require('react-router')
// const Router = require('router');
// const Route = require('route');
// const hashHistory = require('hashHistory');

JSON.stringify(the data you want to display, a replacer function, indentations)

const { string } = React.PropTypes // with destructuring
const string = React.PropTypes.string // without destructuring

hashHistory is =the easier way to keep track of back/forward button Use - will be replaced by browser history when we get to the node side of things

One index route per nesting

  {/* this is how you do comments in jsx */}   

/*
  introducing State
  createClass

  const Search = React.createClass({ // auto binding of this context
  class Search extends React.Component {
    constructor(props){
      super(props)

      this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    }


  render is run A LOT so it needs to be a very performant function
  ( using => to auto bind this with class is very expensive and not allowed/recommend )


  // putting this comment (below) at the top of your spec tells eslint to know it is working with mocha here
  /* eslint-env mocha */

/*
## Running Tests

> run in terminal:  mocha --require test/helpers/setup.js
> adds Nyan cat:  mocha -R nyan --require test/helpers/setup.js

>  npm install --save-dev babel-polyfill
// can be written
> npm i -D babel-polyfill

make an package script test

step 16
** test coverage NYC ( nyc is a wrapper for istanbul )
npm install -g nyc // and it pretty much does the rest!
nyc --reporter=lcov --reporter=text --reporter=html --require babel-register --extension .jsx npm test
cd into coverage (ls -la b/c its a hidden file) then open index.html for visual display
// for some reason when this is added to package.json as a 'cover' command the output is different

<!-- this.setState({ searchTerm }) // < es6 object initializing same as saying { searchTerm: searchTerm } -->

// with createClass we can put propTypes inside the component, with stateless components and 'class' components they have to be below

## A Debbuging Tool to see everything getting passed down to your component also for Debbuging state
```
<div style={{textAlign: 'left'}}className='container'>
  <pre>
    <code>
      {JSON.stringify(this.props, null, 4)}
    </code>
  </pre>
</div>
```

## Data Tunneling Problem
2 different components need the same data but they don't care about each other - instead of making each of them go get the data individually, push it at the closest common Ancestor and pass is down to both of them via props
in parent App shows = {shows}
in search
set propTypes
this.props.route.shows

## Component organization best practices
 - 1st getInitialState
 - life Cycle events
 - personal added methods
 - last: render

## After Lunch Day 2
  Going to make the header more flexible. On the search page it should show search input on the details page is should show a back button

## React Dev Tools
- have to allow access to file urls in extensions manager
- $r is whatever you have selected in the React Dev Tools

## Redux
- not large, but very dense
- use Redux to manage state when it grows out of hand
- Flux was first, Elm took Flux and simplified it, made it really cool new functional language to write front-end UI's in,  
  - Dan Abramov took Elm architechture and ported that to React in general and made it Redux
- so we have this one-way data flow, props passing down props, passing down props. Children never pass data up to parents. Parents are the one source of truth
- in Flux you have a data-store.
34:34

## One store with a tree like data structure
- as opposed to Flux which had many many stores
- all data lives in one store
- cannot modify the data directly can only fire off events that do things to modify the data
- emit an action, goes to the root reducer and it's going to dispactch to a sub-reducers (reducer is the function passed to a reduce function)
- reducer takes one state( a state object ), does a transformation on it ( without modifying it ) and returns a new state ( state object )
- don't follow organization for reducx in this demo

## Refactor to Redux - only changed Search.jsx and store.jsx
