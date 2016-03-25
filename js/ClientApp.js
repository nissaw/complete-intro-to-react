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

//  factory - you;ll never use this with JSX
var MyTitleFactory = React.createFactory(MyTitle)

var ce = React.createElement

//here we are creating instances of the component we built above
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
