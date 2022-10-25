import React from 'react';
import { BookContextType, BookInterface } from '../@types/book';
import useLocalStorage from '../hooks/useLocalStorage';

interface Props {
    children: React.ReactNode;
}
const BooksContext = React.createContext<BookContextType | {}>({});

export const BooksProvider: React.FC<Props> = ({ children }) => {
    const [books, setBooks] = useLocalStorage('books', []);
    const [modalState, setModalState] = useLocalStorage('modalState', false);
    const [deleteID, setDeleteID] = useLocalStorage('deleteID', '');

    const addBook = (book: BookInterface) => {
      setBooks([book, ...books]);
    };

    const deleteBook = (id: string) => {
      setBooks(books.filter((book: BookInterface) => book.id !== deleteID));
    };

    const updateBook = (book: BookInterface) => {
      books[books.findIndex((bookElement: BookInterface) => bookElement['id'] === book.id)] = book;
      // console.log(books, book);
      setBooks([...books]);
    };

    const toggle = () => setModalState(!modalState);
    const saveDeleteID = (id: string) => setDeleteID(id);
    return <BooksContext.Provider value={{ books, addBook, deleteBook, updateBook, modalState, toggle, deleteID, saveDeleteID }}>
    {children}</BooksContext.Provider>;
};

export default BooksContext;
