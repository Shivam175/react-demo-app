import React, { useContext } from 'react';
import BookForm from './bookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/booksContext';
import { BookContextType, BookInterface } from '../@types/book';
import { RouteComponentProps } from 'react-router-dom';
import { updateBook2 } from '../actions/appAction';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../reducers/appReducer';

interface EditBookComponentProps extends RouteComponentProps<any> {}

const EditBook: React.FunctionComponent<EditBookComponentProps> = ({ history }) => {
  // const { books, updateBook } = useContext(BooksContext) as BookContextType;
  
  const books = useSelector((state: State) => state.books);
  const { id } = useParams();
  const bookToEdit = books.find((book: BookInterface) => book.id === id);
  const dispatch = useDispatch();

  const handleOnSubmitParent = (book: BookInterface) => {
    // updateBook(book);
    dispatch(updateBook2(book));
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




