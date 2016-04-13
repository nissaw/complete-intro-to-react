const React = require('react')
const Header = require('./header')

class Details extends React.Component {
  render () {
    const params = this.props.params || {} // these two lines set up defaults for params incase they're not passed in
    const { title, description, year, poster, trailer } = params // this lets us say 'description' instead of params.description etc...
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img className='video-poster' src={`public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}
const { object } = React.PropTypes

Details.propTypes = {
  params: object.isRequired
}

module.exports = Details
