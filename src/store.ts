import { createStore, Store, applyMiddleware } from "redux";
import BookReducer, { State } from "./reducers/appReducer";
import { AppState, AppAction, DispatchType } from "./@types/book";
import thunk from "redux-thunk";
import { throttle } from "lodash";
import { loadState, saveState } from "./localStorage";


const loadBooks = loadState();
const persistedState : State = {
    books: loadBooks,
    modalState: false,
    deleteID: ''
};
// console.log(persistedState);
const store: Store<AppState, AppAction> = createStore(BookReducer, persistedState, applyMiddleware(thunk));

store.subscribe(throttle(() => saveState(store.getState().books), 500));

export default store;