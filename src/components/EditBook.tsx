import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import { BookContextType, BookInterface } from '../@types/book';
import { RouteComponentProps } from 'react-router-dom';
import { updateBook } from '../actions/appAction';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../reducers/appReducer';
import { useStoreActions, useStoreState } from '../store/hooks';

interface EditBookComponentProps extends RouteComponentProps<any> {}

const EditBook: React.FunctionComponent<EditBookComponentProps> = ({ history }) => {
  // const books = useSelector((state: State) => state.books);
  const books = useStoreState((state) => state.books);
  const { id } = useParams();
  const bookToEdit = books.find((book: BookInterface) => book.id === id);
  const updateBook = useStoreActions((actions) => actions.updateBook);
  // const dispatch = useDispatch();

  const handleOnSubmitParent = (book: BookInterface) => {
    updateBook(book);
    // dispatch(updateBook(book));
    history.push('/');
  };

  const BookFormProp1 = {
    book: bookToEdit
  }
  const BookFormProp2 = {
    handleOnSubmit: handleOnSubmitParent
  }

  return (
    <div>
      <BookForm {...BookFormProp1} {...BookFormProp2}/>
      {/* <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmitParent}/> */}
    </div>
  );
};

export default EditBook;




