// this tells eslint to know it is working with mocha here

/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search') // this is what we're going to run our tests against
const ShowCard = require('../js/ShowCard')
const { shows } = require ('../public/data')
const { shallow, mount } = require('enzyme') // enzyme is our testing helper made by AirBnB, right now we just need shallow feature ( later mount )// shallow will just render Search, not all the children - ie it won't render showCard. which is good because if showcard caused a failure in our search test that would be bad, we will test showCard seperately later. shallow will 'stub' out showCard. It is also a lot faster
const { store, rootReducer } = require('../js/Store')

describe('<Search />', () => {
  xit('should pass', () => {
    expect(5).to.equal(5);
  })
  xit('should render the brand', () => {
    const wrapper = shallow(<Search />)
    // console.log(wrapper.debug()) // this will spit out all the info wrapper gets
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true // contains is part of enzyme
  })
  xit('should render all shows for which data exists', () => {
    const wrapper = shallow(<Search/>)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })
  xit('should filter correctly given a new state', () => {
    const wrapper = mount(<Search/>)
    const input = wrapper.find('.search-input') // jQuery like syntax finds our node in jsx so we can programatically interact with it
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2) // mount 1. is slower but allows you to simulate events and interact  2. mount can't use the find class like wrapper on ln24 have to use css class.
  })
})


describe('Store', () => {
  it ('should Bootstap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT' })
    expect(state).to.deep.equal({ searchTerm: '' })
  })
  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({ searchTerm: 'some random string' }, { type: 'setSearchTerm', value: 'correct string' })
    expect(state).to.deep.equal({ searchTerm: 'correct string'})
  })
})

// run in terminal:  mocha --require test/helpers/setup.js
// adds Nyan cat:  mocha -R nyan --require test/helpers/setup.js
