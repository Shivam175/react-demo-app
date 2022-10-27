import React, { useState, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BookInterface, BookContextType } from '../@types/book';
import Modal from './modal';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { saveDeleteID, toggle } from '../actions/appAction';
import { State } from '../reducers/appReducer';
import { useStoreActions, useStoreState } from '../store/hooks';

interface BookProp extends BookInterface{
  handleRemoveBook: (id: string) => void;
}

const Book = ({ id, name, age, handleRemoveBook }: BookProp) => {
  const history = useHistory();
  const saveDeleteID = useStoreActions((actions) => actions.saveDeleteID);
  const toggle = useStoreActions((actions) => actions.toggle);
  
  const modalState = useStoreState((state: State) => state.modalState);
  // const dispatch = useDispatch();
  const delUser = () => {
    // dispatch(toggle());
    toggle();
    handleRemoveBook(id);
  }

  const toggleLocal = () => {
    // let book = {
    //   'id': id,
    //   'name': name,
    //   'age': age
    // }
    // dispatch(saveDeleteID(book));
    saveDeleteID(id);
    // dispatch(toggle());
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
            <Modal show={modalState} delID={id} close={() => toggle()} deleteUser={delUser}></Modal>
          </div>
       </>
  );
};

export default Book;
