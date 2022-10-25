import React, { useState, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BookInterface, BookContextType } from '../@types/book';
import Modal from './Modal';
import BooksContext from '../context/BooksContext';

interface BookProp extends BookInterface{
  handleRemoveBook: (id: string) => void;
}

const Book = ({ id, name, age, handleRemoveBook }: BookProp) => {
  const history = useHistory();
  const { modalState, toggle, saveDeleteID } = useContext(BooksContext) as BookContextType;
  const delUser = () => {
    toggle(); 
    handleRemoveBook(id);
  }
  const toggleLocal = () => {
    saveDeleteID(id);
    toggle();
  }


return (
        <>
          <div>
            <Card style={{ width: '18rem' }} className="book rounded overflow-hidden shadow-lg">
              <Card.Body>
                <Card.Title className="font-bold text-xl mb-2">{name}</Card.Title>
                <div className="book-details text-gray-700 text-base">
                  <div><span className="book-details font-semibold text-black text-base">Name:</span> {name}</div>
                  <div><span className="book-details font-semibold text-black text-base">Age:</span> {age} </div>
                </div>
                <Button variant="primary"
                className="bg-snowWhite hover:bg-blue-500 hover:text-white text-blue-700 font-semibold border border-blue-500 hover:border-transparent rounded"
                onClick={() => history.push(`/edit/${id}`)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" className="bg-snowWhite hover:bg-red-600 hover:text-white text-red-600 font-semibold border border-red-600 hover:border-transparent rounded"
                onClick={() => toggleLocal()}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Modal show={modalState} delID={id} close={toggle} deleteUser={delUser}></Modal>
          </div>
       </>
  );
};
// bg-red-600 hover:bg-red-700

export default Book;
