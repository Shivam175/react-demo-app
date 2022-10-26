import * as actionTypes from "../actionTypes/actionTypes";
import { BookInterface, AppAction } from "../@types/book";

export type State = {
  books: BookInterface[];
  modalState: boolean;
  deleteID: string;
};

const initialState : State = {
    books: [],
    modalState: false,
    deleteID: ''
};

const BookReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return {
        ...state,
        books : [action.payload, ...state.books],
      };
    case actionTypes.UPDATE_BOOK:
        const book = <BookInterface> action.payload;
        state.books[state.books.findIndex((bookElement: BookInterface) => bookElement['id'] === book.id)]
         = book;
      return {
          ...state,
      };
    case actionTypes.SAVE_DELETEID:
      return {
        ...state,
        deleteID: action.payload.id
      };
    case actionTypes.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book: BookInterface) => book.id !== state.deleteID)
      };
    case actionTypes.SET_MODALSTATE:
      return {
        ...state,
        modalState: !state.modalState
      };
    default:
      return state;
  }
};

export default BookReducer;