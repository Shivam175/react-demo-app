export interface BookInterface {
    id: string;
    name: string;
    age: number;
}

export type BookContextType = {
    books: BookInterface[];
    addBook: (book: BookInterface) => void;
    updateBook: (book: BookInterface, id: string) => void;
    deleteBook: (id: string) => void;
    // setBooks: (books: BookInterface[]) => void;
};