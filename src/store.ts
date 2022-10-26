import { createStore, Store, applyMiddleware } from "redux";
import BookReducer from "./reducers/appReducer";
import { configureStore } from '@reduxjs/toolkit'
import { AppState, AppAction, DispatchType } from "./@types/book";
import thunk from "redux-thunk";


const store: Store<AppState, AppAction> = createStore(BookReducer, applyMiddleware(thunk));

// const store = configureStore({
//     reducer: {
//         Books: BookReducer,
//         // comments: commentsReducer,
//         // users: usersReducer,
//     },
// });
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;