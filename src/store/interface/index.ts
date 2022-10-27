import { Action } from "easy-peasy";
import { BookInterface } from "../../@types/book";

export interface AppModelInterface {
    books: BookInterface[];
    modalState: boolean;
    deleteID: string;

    // actions
    addBook: Action<AppModelInterface, BookInterface>;
    updateBook: Action<AppModelInterface, BookInterface>;
    saveDeleteID: Action<AppModelInterface, string>;
    deleteBook: Action<AppModelInterface>;
    toggle: Action<AppModelInterface>;
}

export interface StoreModel extends AppModelInterface {} 