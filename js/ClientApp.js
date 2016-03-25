var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div
//  factory - you;ll never use this with JSX
var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

// here we are creating instances of the component we built above
var MyFirstComponent = (
  div({style: {color: 'red', backgroundColor: 'mediumaquamarine'}},
  // the next three lines are equivilent
    MyTitleFactory({title: 'Props are great!', color: 'peru'}),
    React.createElement(MyTitle, {title: 'Use Props Everywhere!', color: 'rebeccapurple'}),
    ce(MyTitle, {title: 'Props are the Best!', color: 'papayawhip'}),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
