const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

// this is a stateless component
// arrow function with an implicit return
const MyFirstComponent = (props) => (
    <div>
    // capitalized means I created it and is required, lowercase is for native tags
      <MyTitle title='Whatevs' color='rebeccapurple' />
      <MyTitle title='LOL' color='papayawhip' />
      <MyTitle title='OMGLOLWTFBBQ' color='#f06d06' />
    </div>
)
// your main file - entry point for webpack - doesn't have an export
ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
