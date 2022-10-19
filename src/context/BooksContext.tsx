import React from 'react';
import { BookContextType, BookInterface } from '../@types/book';

const BooksContext = React.createContext<BookContextType | null>(null); 
//React.createContext<any>({} as any);

export default BooksContext;
