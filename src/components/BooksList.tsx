import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id: any) => {
    setBooks(books.filter((book: any) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book: any) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No users available. Please add some users.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
