import React, { Component, Fragment } from 'react'

class Form extends Component {
  bookNameRef = React.createRef()
  bookImgRef = React.createRef()

  handleSubmit = e => {
    e.preventDefault()
    const book = {
      bookName: this.bookNameRef.current.value,
      bookUrl: this.bookImgRef.current.value,
    }
    this.props.addBookToState(book)
    e.currentTarget.reset()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="bookname"
          ref={this.bookNameRef}
          type="text"
          placeholder="Book title"
        />
        <input
          name="bookimage"
          ref={this.bookImgRef}
          type="text"
          placeholder="Book cover URL"
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default Form
