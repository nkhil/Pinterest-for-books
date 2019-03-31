import React, { Component, Fragment } from 'react'
import A from './components/elements/A'

class App extends Component {
  state = {}

  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <p>
          This is{' '}
          <A href="http://nikhilvijayan.com">a link I'd like to visit.</A>
        </p>
      </Fragment>
    )
  }
}

export default App
