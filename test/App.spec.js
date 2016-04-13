// this tells eslint to know it is working with mocha here

/* eslint-env mocha */

const { expect } = require('chai')

describe('<Search />', () => {
  it('should pass', () => {
    expect(2).to.equal(5);
  })
  // it('should pass', () => {
    //  can write more here under the same describe block
  // })
})


// run in terminal:  mocha --require test/helpers/setup.js
// adds Nyan cat:  mocha -R nyan --require test/helpers/setup.js

// npm install --save-dev babel-polyfill
// can be written
// npm i -D babel-polyfill
