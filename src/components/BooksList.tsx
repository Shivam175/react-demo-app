import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';
import { BookContextType, BookInterface } from '../@types/book';

const BooksList = () => {
  const { books, deleteBook } = useContext(BooksContext) as BookContextType;

  const handleRemoveBook = (id: string) => deleteBook(id);

  const BookProp = {
    handleRemoveBook: handleRemoveBook
  }

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book: BookInterface) => (
            <Book key={book.id} {...book} {...BookProp} />
          ))
        ) : (
          <p className="message">No users available. Please add some users.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
