const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.h1

// jsx style
const MyTitle = React.createClass({
  render () { // ES6 alt to render: function(){
    return (
      <div>
      // this is an object inside a js-expression interpolater
        <h1 style={ {color: this.props.color} }>
        {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
