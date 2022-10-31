import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import { BookContextType, BookInterface } from '../@types/book';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteBook } from '../actions/appAction';
import { State } from '../reducers/appReducer';
import { useStoreActions, useStoreState } from '../store/hooks';
import { useStoreRehydrated } from 'easy-peasy';

const BooksList = () => {
  const deleteBook = useStoreActions((actions) => actions.deleteBook);

  // const books = useSelector((state: State) => state.books);
  // const dispatch = useDispatch();
  const books = useStoreState((state) => state.books);
  const isRehydrated = useStoreRehydrated();
  const handleRemoveBook = (id: string) => {
    // dispatch(deleteBook());
    deleteBook();
  };

  const BookProp = {
    handleRemoveBook: handleRemoveBook
  }

  return (
    <React.Fragment>
      <>
        {
          isRehydrated ?
          <div className="book-list">
            {!_.isEmpty(books) ? (
              books.map((book: BookInterface) => (
                <Book key={book.id} {...book} {...BookProp} />
              ))
            ) : (
              <p className="message">No users available. Please add some users.</p>
            )}
          </div> :
          <div className="row justify-content-md-center">
            <p>Loading...</p>
          </div>
        }
      </>
    </React.Fragment>
  );
};

export default BooksList;
