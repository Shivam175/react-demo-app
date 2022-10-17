import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id,
  name,
  age,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{name}</Card.Title>
        <div className="book-details">
          <div>Name: {name}</div>
          <div>Age: {age} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => {
            let confirmDelete = window.confirm("Do you wish to delete User?");
            if(confirmDelete) handleRemoveBook(id);
            return;
          }}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
