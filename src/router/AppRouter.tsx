import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/header';
import AddBook from '../components/addBook';
import EditBook from '../components/editBook';
import {BooksProvider} from '../context/booksContext';
import { Provider } from "react-redux";
import store from "../store/index";
import { StoreProvider } from 'easy-peasy';
import storeRedux from '../store';


const AppRouter = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <div className="container">
            {/* <BooksProvider> */}
              {/* <Provider store={storeRedux}> */}
                <StoreProvider store={store}>
                  <Switch>
                    <Route component={AddBook} path="/" exact={true} />
                    <Route component={EditBook} path="/edit/:id" />
                    <Route component={() => <Redirect to="/" />} />
                  </Switch>
                 </StoreProvider>
              {/* </Provider> */}
            {/* </BooksProvider> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
