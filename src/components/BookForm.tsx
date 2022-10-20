import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import PropTypes from 'prop-types';

type BookFormProps = {
    book?: {
      id: string, 
      name: string, 
      age: number
    };
    handleOnSubmit: any
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
    if (props.book != undefined) {
      setBooks(state => ({ ...state, 
        name: props.book ? props.book.name : '',
        age: props.book ? props.book.age : '',
        id: props.book ? props.book.id : ''}));
      // console.log(props, props.book, book.name);
    }
  }, [props.book]);

  const [errorMsg, setErrorMsg] = useState('');
  const { name, age } = book;

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
                  //{props.book ? props.book.name : ''}
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
                  //{props.book ? props.book.age : ''}
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

// BookForm.propTypes = {
//   props: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       age: PropTypes.number
//     })
//   ])
// }

export default BookForm;
