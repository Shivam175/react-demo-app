import { action } from "easy-peasy";
import { AppModelInterface } from "../interface";
import { BookInterface } from "../../@types/book";

const AppModel: AppModelInterface = {
  books: [],
  modalState: false,
  deleteID: '',

  addBook: action((state, payload) => { state.books = [payload, ...state.books] }),

  updateBook: action((state, payload) => {
    state.books[state.books.findIndex((bookElement: BookInterface) => bookElement['id'] === payload.id)]
         = payload;
  }),

  saveDeleteID: action((state, payload) => { state.deleteID = payload }),

  deleteBook: action((state) => {
    state.books = state.books.filter((book: BookInterface) => book.id !== state.deleteID);
  }),

  toggle: action((state) => { state.modalState = !state.modalState }),
  
};
export default AppModel;