export interface BookInterface {
    id: string;
    name: string;
    age: number;
}

export type BookContextType = {
    books: BookInterface[];
    setBooks: (books: BookInterface[]) => void;
    //updateBooks: (id: number) => void;
};