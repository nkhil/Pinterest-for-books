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
    const bookIds = Object.keys(this.state.books)
    const displayBooks = bookIds.map(key => {
      const book = this.state.books[key]
      return (
        <li key={key}>
          <Flex column alignCenter>
            <img
              src={book.bookUrl}
              alt={book.bookName}
              width="200px"
              height="300px"
            />
            <Heading h5>{book.bookName}</Heading>
          </Flex>
        </li>
      )
    })
    return (
      <Fragment>
        <GlobalStyles />
        <Container>
          <Flex column>
            <Heading>Pocket Lists</Heading>
            <Heading h2>Nikhil's favourite books</Heading>
            <p>
              A list of my favourite science fiction books from the 70's and
              80's.
            </p>
            <Form addBookToState={this.addBookToState} />
            <Flex contentBetween>{displayBooks}</Flex>
          </Flex>
        </Container>
      </Fragment>
    )
  }
}

export default App
