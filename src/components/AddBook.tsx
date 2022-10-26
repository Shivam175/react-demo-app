import { useContext } from 'react';
import * as React from "react";
import BookForm from './bookForm';
import BooksContext from '../context/booksContext';
import { BookContextType, BookInterface } from '../@types/book';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../actions/appAction';

interface AddBookComponentProps extends RouteComponentProps<any> {}

const AddBook: React.FunctionComponent<AddBookComponentProps> = ({ history }) => {
  const state = useSelector((state) => state);
  // console.log("store", state);
  const dispatch = useDispatch();
  // const { addBook } = useContext(BooksContext) as BookContextType;

  const handleOnSubmit = (book : BookInterface) => {
    // addBook(book);
    dispatch(addBook(book));
  };

  const BookFormProps = {
    handleOnSubmit: handleOnSubmit
  }

  return (
    <React.Fragment>
      <BookForm {...BookFormProps} />
    </React.Fragment>
  );
};

export default AddBook;
