import { createStore, Store, applyMiddleware } from "redux";
import BookReducer, { State } from "./reducers/appReducer";
import { AppState, AppAction } from "./@types/book";
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
const storeRedux: Store<AppState, AppAction> = createStore(BookReducer, persistedState, applyMiddleware(thunk));

storeRedux.subscribe(throttle(() => saveState(storeRedux.getState().books), 500));

export default storeRedux;