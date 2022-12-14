import { useContext } from 'react';
import * as React from "react";
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';
import { BookContextType, BookInterface } from '../@types/book';
import { RouteComponentProps } from 'react-router-dom';

interface AddBookComponentProps extends RouteComponentProps<any> {}

const AddBook: React.FunctionComponent<AddBookComponentProps> = ({ history }) => {
  const { addBook } = useContext(BooksContext) as BookContextType;

  const handleOnSubmit = (book : BookInterface) => addBook(book);

  const BookFormProps = {
    handleOnSubmit: handleOnSubmit
  }

  return (
    <React.Fragment>
      <BookForm {...BookFormProps} />
      {/* <BookForm handleOnSubmit={handleOnSubmit} /> */}
    </React.Fragment>
  );
};

export default AddBook;
