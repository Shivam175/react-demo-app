import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import {BooksProvider} from '../context/BooksContext';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <div className="container">
            <BooksProvider>
              <Switch>
                <Route component={AddBook} path="/" exact={true} />
                <Route component={EditBook} path="/edit/:id" />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            </BooksProvider>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
