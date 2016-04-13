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
running tests

// run in terminal:  mocha --require test/helpers/setup.js
// adds Nyan cat:  mocha -R nyan --require test/helpers/setup.js

// npm install --save-dev babel-polyfill
// can be written
// npm i -D babel-polyfill
