export interface BookInterface {
    id: string;
    name: string;
    age: number;
}

export interface AppState {
    books: BookInterface[];
    modalState: boolean;
    deleteID: string;
}

export interface AppAction {
    type: string;
    payload: BookInterface;
}
  
type DispatchType = (args: AppAction) => AppAction;

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