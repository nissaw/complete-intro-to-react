const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  // statics: { // this is a place you can write functions to the 'prototype' all instances of search will share this same method, this might make them easier to test (Search.myFilter) but a better idea might be to put these methods in their own module and require them in
  //   myFilter: function(){}
  // },
  propTypes: { // with createClass we can put propTypes right here, with stateless components and 'class' components they have to be below
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm }) // < es6 object initializing same as saying { searchTerm: searchTerm }
  },
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
            ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
