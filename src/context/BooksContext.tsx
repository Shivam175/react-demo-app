import React from 'react';
import { BookContextType, BookInterface } from '../@types/book';
import useLocalStorage from '../hooks/useLocalStorage';

interface Props {
    children: React.ReactNode;
}
const BooksContext = React.createContext<BookContextType | {}>({});

export const BooksProvider: React.FC<Props> = ({ children }) => {
    const [books, setBooks] = useLocalStorage('books', []);

    const addBook = (book: BookInterface) => {
      setBooks([book, ...books]);
    };

    const deleteBook = (id: string) => {
      setBooks(books.filter((book: BookInterface) => book.id !== id));
    };

    const updateBook = (book: BookInterface, id: string) => {
      let index = books.findIndex((bookElement: BookInterface) => bookElement['id'] === id);
      // console.log(books, index, book.id);
      books[index] = book;
      books[index].id = id;
      setBooks([...books]);
    };
    return <BooksContext.Provider value={{ books, addBook, deleteBook, updateBook }}>{children}</BooksContext.Provider>;
};

export default BooksContext;
