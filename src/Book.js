function Book({ book }) {
  return (
    <>
      <div className="book-item">
        <div>{book.title}</div>
        <div>{book.author}</div>
        <div>{book.subject}</div>
        <div>{book.publishDate}</div>
      </div>
    </>
  );
}

export default Book;
