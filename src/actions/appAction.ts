import * as actionTypes from "../actionTypes/actionTypes";
import { BookInterface } from "../@types/book";

const addBook2 = (book: BookInterface) => {
  return {
    payload: book,
    type: actionTypes.ADD_BOOK,
  };
};

const updateBook2 = (book: BookInterface) => {
  return {
    payload: book,
    type: actionTypes.UPDATE_BOOK,
  };
};

const saveDeleteID2 = (book: BookInterface) => {
  return {
    payload: book,
    type: actionTypes.SAVE_DELETEID,
  };
};

const deleteBook2 = () => {
  return {
    payload: {},
    type: actionTypes.DELETE_BOOK,
  };
};

const toggle2 = () => {
  return {
    payload: {},
    type: actionTypes.SET_MODALSTATE,
  };
};

export { addBook2, updateBook2, deleteBook2, saveDeleteID2, toggle2 };