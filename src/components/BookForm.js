import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';


const BookForm = (props) => {   //{b, bookName, bookAge}
  const [book, setBook] = useState(() => {
    //console.log('hit',props.book);
    return {
      name: props.book ? props.book.name : '',
      age: props.book ? props.book.age : '',
    };
  });


  // const [book, setBook] = useState({
  //   name: props.book ? props.book.name : '',
  //   age: props.book ? props.book.age : '',
  // });

  // React.useEffect(() => {
  //   if (book != undefined) {
  //     console.log(book);
  //   } else {
  //     //document.title = 'No threshold reached.';
  //   }
  // }, [book]);

  const [errorMsg, setErrorMsg] = useState('');
  const { name, age } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, age];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        name,
        age,
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'age':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div>
      <div className="row justify-content-md-center">
        <div className="col-md-6"><BooksList /></div>
        <div className="col-md-6">
          <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
              <Form.Group controlId="name">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  className="input-control"
                  type="text"
                  name="name"
                  value={name}
                  // {props ? this.props.bookName : ''}
                  placeholder="Enter name of user"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  className="input-control"
                  type="number"
                  name="age"
                  value={age}
                  // value={props ? this.props.bookAge : ''}
                  placeholder="Enter age of user"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-btn">
                {props.book ? 'Save Changes' : 'Submit'}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
