var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

// this is a reusable component
var MyTitle = React.createClass({
  // all components must have a render method and it must return a component
  // it should also be a pure function with no side effects
  render () { // ES6 alt to render: function(){
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title))
    )
  }
})

module.exports = MyTitle
