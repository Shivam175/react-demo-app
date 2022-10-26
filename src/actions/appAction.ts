import * as actionTypes from "../actionTypes/actionTypes";
import { BookInterface } from "../@types/book";

const addBook = (book: BookInterface) => {
  return {
    payload: book,
    type: actionTypes.ADD_BOOK,
  };
};

const updateBook = (book: BookInterface) => {
  return {
    payload: book,
    type: actionTypes.UPDATE_BOOK,
  };
};

const saveDeleteID = (book: BookInterface) => {
  return {
    payload: book,
    type: actionTypes.SAVE_DELETEID,
  };
};

const deleteBook = () => {
  return {
    payload: {},
    type: actionTypes.DELETE_BOOK,
  };
};

const toggle = () => {
  return {
    payload: {},
    type: actionTypes.SET_MODALSTATE,
  };
};

export { addBook, updateBook, deleteBook, saveDeleteID, toggle };