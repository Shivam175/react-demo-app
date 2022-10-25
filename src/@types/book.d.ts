export interface BookInterface {
    id: string;
    name: string;
    age: number;
}

export type BookContextType = {
    books: BookInterface[];
    modalState: boolean;
    deleteID: string;
    addBook: (book: BookInterface) => void;
    updateBook: (book: BookInterface) => void;
    deleteBook: (id: string) => void;
    toggle: () => void;
    saveDeleteID: (id: string) => void;
};