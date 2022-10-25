import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import { BookInterface } from '../@types/book';

type BookFormProps = {
    book?: BookInterface,
    handleOnSubmit: (book: BookInterface) => void
};

const BookForm = (props: BookFormProps) => {   
  let [book, setBooks] = useState(() => {
    //console.log('hit',props.book);
    return {
      name: props.book ? props.book.name : '',
      age: props.book ? props.book.age : '',
    };
  });

  React.useEffect(() => {
    if (props.book !== undefined) {
      setBooks(state => ({ ...state, 
        name: props.book ? props.book.name : '',
        age: props.book ? props.book.age : '',
        id: props.book ? props.book.id : ''}));
      // console.log(props, props.book, book.name);
    }
  }, [props.book]);

  const [errorMsg, setErrorMsg] = useState('');
  let { name, age } = book;

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = [name, age];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      age = Number(age);
      const book : BookInterface = {
        id: props.book ? props.book.id : uuidv4(), 
        name,
        age,
      };
      props.handleOnSubmit(book);
      setBooks(prevState => ({ ...prevState,
        name: '',
        age: ''
      }));
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'age':
        if (value === '' || parseInt(value) === +value) {
          setBooks((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBooks((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBooks((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div>
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <BooksList />
        </div>
        <div className="col-md-6">
          <div className="row justify-content-md-center">
            <Card style={{ width: '30rem' }} className="book rounded overflow-hidden shadow-lg">
              <Card.Body>
                <Card.Title className="font-bold text-xl mb-2">{props.book ? "Edit " : "Create "}User</Card.Title>
                <div className="book-details text-gray-700 text-base">
                  <hr/>
                  <div className="main-form">
                    {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                    <Form onSubmit={handleOnSubmit}>
                      <Form.Group controlId="name">
                        <Form.Label><span className="block text-gray-700 text-lg font-bold">User Name</span>
                        </Form.Label>
                        <Form.Control
                          className="input-control"
                          type="text"
                          name="name"
                          value={name}
                          //{props.book ? props.book.name : ''}
                          placeholder="Enter name of user"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="age">
                        <Form.Label><span className="block text-gray-700 text-lg font-bold">Age</span>
                        </Form.Label>
                        <Form.Control
                          className="input-control"
                          type="number"
                          name="age"
                          value={age}
                          //{props.book ? props.book.age : ''}
                          placeholder="Enter age of user"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="bg-snowWhite hover:bg-blue-500 hover:text-white text-blue-700 font-semibold border border-blue-500 hover:border-transparent rounded">
                        {props.book ? "Save Changes" : "Submit"}
                      </Button>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
