import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';

const EditBook = ({ history }: any) => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book: any) => book.id === id);

  const handleOnSubmitParent = (book: any) => {
    // const filteredBooks = books.filter((book: any) => book.id !== id);
    let index = 0;
    books.forEach((book: any, idx: any) => {
      if(book['id'].toString() === id.toString()) index = idx;
    });
    // console.log(books, index);
    books[index].name = book.name;
    books[index].age = book.age;
    setBooks([...books]);
    history.push('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmitParent}/>
    </div>
  );
};

export default EditBook;




