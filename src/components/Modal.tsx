import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/esm/Card';
import { Button } from 'react-bootstrap';

interface ModalProps{
  show: boolean;
  delID: string;
  close: () => void;
  deleteUser: () => void;
}

const Modal = ({ show, delID, close, deleteUser } : ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        show ? (
           <>
            <div className="modalOuterBox">
              <Card style={{ width: '18rem' }} className="book rounded overflow-hidden shadow-lg">
                <Card.Body>
                  <Card.Title className="font-bold text-xl mb-2">Delete User</Card.Title>
                  <div className="book-details text-gray-700 text-base">
                    <div><span className="book-details font-semibold text-black text-base">Do you wish to delete user?</span></div>
                  </div>
                  <Button variant="primary"
                  className="bg-white text-gray-600 hover:bg-gray-300 hover:text-gray-900 font-semibold border border-gray-400 rounded shadow"
                  onClick={() => close()}>
                    Cancel
                  </Button>{' '}
                  <Button variant="danger" className="bg-red-600 hover:bg-red-700 font-semibold border border-gray-400 rounded shadow" 
                  onClick={() => deleteUser()}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </>
        ) : null,
        document.getElementById("modal")!
      )}
    </>
  );
};


export default Modal;
