import { useContext } from 'react';
import * as React from "react";
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const AddBook = ({ history} : any) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book : any) => {
    setBooks([book, ...books]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
