import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <BooksContext.Provider value={{ books, setBooks }}>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-6"><BooksList /></div>
              <div className="col-md-6"><AddBook /></div>
            </div>
          </div>
        </BooksContext.Provider> */}
        <div className="main-content">
          <div className="container">
            <BooksContext.Provider value={{ books, setBooks }}>
              <Switch>
                <Route component={AddBook} path="/" exact={true} />
                {/* <Route component={AddBook} path="/add" /> */}
                <Route component={EditBook} path="/edit/:id" />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            </BooksContext.Provider>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
