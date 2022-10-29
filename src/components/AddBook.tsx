import * as React from "react";
import BookForm from './bookForm';
import { BookContextType, BookInterface } from '../@types/book';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../actions/appAction';
import { useStoreState, useStoreActions } from '../store/hooks';

interface AddBookComponentProps extends RouteComponentProps<any> {}

const AddBook: React.FunctionComponent<AddBookComponentProps> = ({ history }) => {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  const state = useStoreState((state) => state);
  const addBook = useStoreActions((actions) => actions.addBook);
  // console.log("store", state);

  const handleOnSubmit = (book : BookInterface) => {
    addBook(book);
    // dispatch(addBook(book));
    // history.push('/');
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
