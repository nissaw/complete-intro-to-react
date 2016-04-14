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
- Stores and actions are just big objects
- as opposed to Flux which had many many stores
- In Redux all data lives in one store - in a tree, instead of adding a store you add a property
- cannot modify the data directly can only fire off events that do things to modify the data
- emit an action, goes to the root reducer and it's going to dispactch to a sub-reducers (reducer is the function passed to a reduce function)
- reducer takes one state( a state object ), does a transformation on it ( without modifying it ) and returns a new state ( state object )
- don't follow organization for redux in this demo - there's probably better organization styles out there

## Refactor to Redux - only changed Search.jsx and store.jsx // but needed to change ClientApp.jsx

- view state, what I have in the form, is this checkbox checked - keep view state in REact, while app state (user info, show data) in Redux

## Redux Dev Tools
- needs some setup in Store.jsx
- also needs to come from a server, not the filesystem
  - npm i -g http-server
  - http -p 8080 ./

## Testing Redux
the reducers are what we are testing in redux. going from state a to state b

## Universal Rendering
- holy grail most compelling reason to use Node and React together
- Universal Rendering sends down the initial payload the rendered app, then the Javascript that makes your page interactive
- aka "server-side rendering" "isomorphic rendering"
- If you don't include react router ( with just react it's like 26 lines) [github.com/btholt/es6-react-pres app.js]
- First move all shows to Redux to it's no longer getting passed around everywhere
- onEnter was handling the passing around of shows but now Redux is passing it around
- why did we separate browser entry from the app? can't refer to document in the node environment. need to separate what is our app vs what is rendering our app to the DOM (BrowserEntry)

## LifeCycle methods
- add live IMDB rating to the details page
- axios is an ajax request library that uses promises
- setInitalState/constructor is called when a component is created
- componentWillMount is called right before it goes in the DOM - runs both in the browser and in Node
- componentDidMount called in brower not in node - this is where you make your AJAX calls!
- componentWillUnmount called right before exiting the dom. Used to not leak memory, de-allocation, clean-up. remove eventlisteners, unsubscribe from an observable


## Web-pack Chunking
- @1:40
- bundle is enormous
- sucks to have to load all the js for all the pages long before you ever navigate to that page
- so webpack knows what each page needs and when set up loads just what the page needs
- webpack.config = where to put all the chunks /public/ chunks true
- then use node-ensure to introduce our routing to async retrieval : ClientApp
