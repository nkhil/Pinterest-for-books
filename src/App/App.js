import React, { Component, Fragment } from 'react'
import GlobalStyles from './components/styles/GlobalStyles'
import A from './components/elements/A'
import Container from './components/elements/Container'
import Flex from './components/elements/Flex'
import Heading from './components/elements/Heading'
import Form from './components/Form'
import sampleBooks from '../sample_data/books'

class App extends Component {
  state = {
    books: {},
  }

  componentWillMount() {
    this.loadSampleBooks()
  }

  loadSampleBooks = () => {
    const books = sampleBooks
    this.setState({ books })
  }

  addBookToState = book => {
    const books = { ...this.state.books }
    books[`book${Date.now()}`] = book
    this.setState({ books })
    console.log(this.state.details)
  }

  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <Container>
          <Flex column contentCenter alignCenter>
            <Heading>Hello World</Heading>
            <p>
              This is{' '}
              <A href="http://nikhilvijayan.com">a link I'd like to visit.</A> I
              want to know what exactly is happening when a long sentence is
              parsed in What you are about to see is real; the litigants on the
              screen are not actors. They are genuine citizens who, having filed
              their claims in a real small claims court, have been persuaded to
              drop their suits there and have them settled here, in this
              forum... the People's Court.
            </p>
            <Form addBookToState={this.addBookToState} />
          </Flex>
        </Container>
        <div>
          <Container>
            <Heading>Container</Heading>
          </Container>
          <Container>
            <div style={{ backgroundColor: '#fff' }}>
              <Heading h2>Default Container</Heading>
              <p>
                What you are about to see is real; the litigants on the screen
                are not actors. They are genuine citizens who, having filed
                their claims in a real small claims court, have been persuaded
                to drop their suits there and have them settled here, in this
                forum... the People's Court.
              </p>
            </div>
          </Container>
          <Container fullVertical style={{ backgroundColor: '#008BF8' }}>
            <div style={{ height: 300, backgroundColor: '#5CB5FA' }}>
              <Heading h2>Full Vertical Container</Heading>
            </div>
          </Container>
          <Container full small style={{ backgroundColor: '#71CF00' }}>
            <div style={{ height: 300, backgroundColor: '#D4FDA2' }}>
              <Heading h2>Full Small Container</Heading>
            </div>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default App
