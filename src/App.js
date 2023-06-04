import React from "react";
import './index.css';
import BookList from "./BookList";


const booksData = [
  { id: 1, title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2021-01-01' },
  { id: 2, title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2021-02-01' },
  { id: 3, title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2021-03-01' },
  { id: 4, title: 'Book 4', author: 'Author 4', subject: 'Subject 4', publishDate: '2021-04-01' },
  { id: 5, title: 'Book 5', author: 'Author 5', subject: 'Subject 5', publishDate: '2021-05-01' },
  { id: 6, title: 'Book 6', author: 'Author 6', subject: 'Subject 6', publishDate: '2021-06-01' },
  { id: 7, title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2021-01-01' },
  { id: 8, title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2021-02-01' },
  { id: 9, title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2021-03-01' },
  { id: 10, title: 'Book 4', author: 'Author 4', subject: 'Subject 4', publishDate: '2021-04-01' },
  { id: 11, title: 'Book 5', author: 'Author 5', subject: 'Subject 5', publishDate: '2021-05-01' },
  { id: 12, title: 'Book 6', author: 'Author 6', subject: 'Subject 6', publishDate: '2021-06-01' },
  { id: 13, title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2021-01-01' },
  { id: 14, title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2021-02-01' },
  { id: 15, title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2021-03-01' },
  { id: 16, title: 'Book 4', author: 'Author 4', subject: 'Subject 4', publishDate: '2021-04-01' },
  { id: 17, title: 'Book 5', author: 'Author 5', subject: 'Subject 5', publishDate: '2021-05-01' },
  { id: 18, title: 'Book 6', author: 'Author 6', subject: 'Subject 6', publishDate: '2021-06-01' },
  { id: 19, title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2021-01-01' },
  { id: 20, title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2021-02-01' },
  { id: 21, title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2021-03-01' },
  { id: 22, title: 'Book 4', author: 'Author 4', subject: 'Subject 4', publishDate: '2021-04-01' },
  { id: 23, title: 'Book 5', author: 'Author 5', subject: 'Subject 5', publishDate: '2021-05-01' },
  { id: 24, title: 'Book 6', author: 'Author 6', subject: 'Subject 6', publishDate: '2021-06-01' },
  { id: 25, title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2021-01-01' },
  { id: 26, title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2021-02-01' },
  { id: 27, title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2021-03-01' },
  { id: 28, title: 'Book 4', author: 'Author 4', subject: 'Subject 4', publishDate: '2021-04-01' },
  { id: 29, title: 'Book 5', author: 'Author 5', subject: 'Subject 5', publishDate: '2021-05-01' },
  { id: 30, title: 'Book 6', author: 'Author 6', subject: 'Subject 6', publishDate: '2021-06-01' },
  { id: 31, title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2021-01-01' },
  { id: 32, title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2021-02-01' },
  { id: 33, title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2021-03-01' },
  { id: 34, title: 'Book 4', author: 'Author 4', subject: 'Subject 4', publishDate: '2021-04-01' },
  { id: 35, title: 'Book 5', author: 'Author 5', subject: 'Subject 5', publishDate: '2021-05-01' },
  { id: 36, title: 'Book 6', author: 'Author 6', subject: 'Subject 6', publishDate: '2021-06-01' },
  { id: 37, title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2021-01-01' },
  { id: 38, title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2021-02-01' },
  { id: 39, title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2021-03-01' },
  { id: 40, title: 'Book 4', author: 'Author 4', subject: 'Subject 4', publishDate: '2021-04-01' },
  { id: 41, title: 'Book 5', author: 'Author 5', subject: 'Subject 5', publishDate: '2021-05-01' },
  { id: 42, title: 'Book 6', author: 'Author 6', subject: 'Subject 6', publishDate: '2021-06-01' }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
      filters: {
        title: '',
        author: '',
        subject: '',
        publishDate: '',
      },
    };
  }

  handleFilterChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: value,
      },
    }));
  };

  filterBooks = () => {
    const { books, filters } = this.state;
    const filteredBooks = books.filter((book) => {
      const { title, author, subject, publishDate } = filters;
      return (
        book.title.toLowerCase().includes(title.toLowerCase()) &&
        book.author.toLowerCase().includes(author.toLowerCase()) &&
        book.subject.toLowerCase().includes(subject.toLowerCase()) &&
        book.publishDate.includes(publishDate)
      );
    });
    return filteredBooks;
  };

  render() {
    const { title, author, subject, publishDate } = this.state.filters;
    const filteredBooks = this.filterBooks();

    return (
      <div className="container">
        <h1>Library Management Page</h1>
        <div className="filters">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Filter by title"
            onChange={this.handleFilterChange}
          />
          <input
            type="text"
            name="author"
            value={author}
            placeholder="Filter by author"
            onChange={this.handleFilterChange}
          />
          <input
            type="text"
            name="subject"
            value={subject}
            placeholder="Filter by subject"
            onChange={this.handleFilterChange}
          />
          <input
            type="text"
            name="publishDate"
            value={publishDate}
            placeholder="Filter by publish date"
            onChange={this.handleFilterChange}
          />
        </div>
        <div>
          <strong>Total Books:</strong> {filteredBooks.length}
        </div>
        <br></br>
        {/* <div className="head">
          <strong>TITLE</strong>
          <strong>AUTHOR</strong>
          <strong>SUBJECT</strong>
          <strong>PUBLISH DATE</strong>
        </div> */}
        <BookList books={filteredBooks} />
      </div>
    );
  }
}



export default App;