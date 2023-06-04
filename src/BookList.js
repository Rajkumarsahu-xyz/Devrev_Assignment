import React from "react";
import { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      booksPerPage: 10,
    };
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { books } = this.props;
    const { currentPage, booksPerPage } = this.state;

    // Logic for displaying books
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    console.log(currentBooks);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>

        <div className="head">
          <strong>TITLE</strong>
          <strong>AUTHOR</strong>
          <strong>SUBJECT</strong>
          <strong>PUBLISH DATE</strong>
        </div>

        {currentBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}

        <div className="pagination">
          {pageNumbers.map((number) => (
            <button
              key={number}
              id={number}
              className={currentPage === number ? "active" : ""}
              onClick={this.handleClick}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default BookList;
