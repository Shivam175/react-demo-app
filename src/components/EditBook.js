import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmitParent = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmitParent}/>
      {/* bookId = "bookToEdit.id" bookName = "bookToEdit.name" bookAge = "bookToEdit.age" */}
    </div>
  );
};

export default EditBook;




