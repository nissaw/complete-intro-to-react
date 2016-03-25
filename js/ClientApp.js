var div = React.DOM.div
var h1 = React.DOM.h1

// this is a reusable component
var MyTitle = React.createClass({
  // all components must have a render method and it must return a component
  render () { // ES6 alt to render: function(){
    return (
      div(null,
        h1(null, this.props.title))
    )
  }
})

//  factory - you;ll never use this with JSX
var MyTitleFactory = React.createFactory(MyTitle)

var ce = React.createElement

//here we are creating instances of the component we built above
var MyFirstComponent = (
  div({style: {color: 'red', backgroundColor: 'pink'}},
  // the next three lines are equivilent
    MyTitleFactory({title: 'Props are great!'}),
    React.createElement(MyTitle, {title: 'Use Props Everywhere!'}),
    ce(MyTitle, {title: 'Props are the Best!'}),


    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)

  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
