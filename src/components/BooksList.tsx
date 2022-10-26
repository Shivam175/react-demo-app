import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './book';
import BooksContext from '../context/booksContext';
import { BookContextType, BookInterface } from '../@types/book';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteBook } from '../actions/appAction';
import { State } from '../reducers/appReducer';

const BooksList = () => {
  // const { books, deleteBook } = useContext(BooksContext) as BookContextType;

  const books = useSelector((state: State) => state.books);
  const dispatch = useDispatch();
  const handleRemoveBook = (id: string) => {
    dispatch(deleteBook());
    // deleteBook(id);
  };

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
