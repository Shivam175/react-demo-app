import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';
import { BookContextType, BookInterface } from '../@types/book';
import { RouteComponentProps } from 'react-router-dom';

interface EditBookComponentProps extends RouteComponentProps<any> {}

const EditBook: React.FunctionComponent<EditBookComponentProps> = ({ history }) => {
  const { books, updateBook } = useContext(BooksContext) as BookContextType;
  const { id } = useParams();
  const bookToEdit = books.find((book: BookInterface) => book.id === id);

  const handleOnSubmitParent = (book: BookInterface) => {
    updateBook(book, id);
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




