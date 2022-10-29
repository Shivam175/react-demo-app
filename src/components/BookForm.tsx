import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './booksList';
import { BookInterface } from '../@types/book';
import { ReactForm } from 'react-forms';
import * as Yup from 'yup';
import { ButtonProps } from "@material-ui/core/Button";

type BookFormProps = {
    book?: BookInterface,
    handleOnSubmit: (book: BookInterface) => void
};

type formBook = {
  name : string,
  age : string | number
}

const BookForm = (props: BookFormProps) => {
  let [book, setBooks] = useState(() => {
    //console.log('hit',props.book);
    return {
      name: props.book ? props.book.name : '',
      age: props.book ? props.book.age : '',
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  let { name, age } = book;
  
  const formValidation = Yup.object({
    name: Yup.string()
    .required('Please enter your name')
    .min(3, "Name should be atleast 3 characters long")
    .max(30, "Name cannot be longer than 30 characters"),
    age: Yup.number()
    .required('Please enter your age')
    .min(1)
    .max(120)
  });  

  let initValUndefined : any = undefined;
  let myConfig = [
		{
			type : 'text',
			valueKey : 'name',
      fieldProps : { label: 'Enter name of user', fullWidth: true, required: true,
       inputProps: { value: initValUndefined } }
    },
    {
			type : 'text',
			valueKey : 'age',
      fieldProps : { label: 'Enter age of user', fullWidth: true, required: true,
       inputProps: { value: initValUndefined } },
		} 
  ];
  let myInitialValues = { name : '', age : ''};
  
  const submitButtonPropVar: ButtonProps = {
    color: "secondary"
  }

  window.onload = () => {
    // console.info( "window-page reload");
    if (props.book !== undefined) {
      const book : BookInterface = {
        id: 'null',
        name: '',
        age: 1,
      };
      setBooks(prevState => ({ ...prevState,
        name: '',
        age: ''
      }));
      props.handleOnSubmit(book);
    }
  };

  const handleOnSubmit = (object: formBook) => {
    const values = [object.name, object.age];
    let errorMsg = '';
    // console.log(values);
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

  const submitReactForm = () => {
    // console.log('hi');
  }

  const inputFormBody = (
    <>
      <ReactForm
        formId="Input Form"
        config={myConfig}
        initialValues={myInitialValues}
        validationSchema={formValidation}
        onSubmit={(values: formBook) => {
          // console.log(values);
          ({ name, age } = values);
          handleOnSubmit(values);
          return;
        }}
        actionConfig={{
          submitButtonText: "Submit Form",
          submitButtonLayout: "center",
          submitButtonProps: submitButtonPropVar,
          loaderProps: { color: "secondary" },
          actionContent: (
            <>
              <br />
              <Button
                variant="primary"
                type="submit"
                onClick={() => submitReactForm()}
                className="bg-snowWhite hover:bg-blue-500 hover:text-white text-blue-700 font-semibold border border-blue-500 hover:border-transparent rounded"
              >
                {props.book ? "Save Changes" : "Submit"}
              </Button>
            </>
          )
        }}
      />
    </>
  );

  React.useEffect(() => {
    if (props.book !== undefined) {
      setBooks(state => ({ ...state, 
        name: props.book ? props.book.name : '',
        age: props.book ? props.book.age : '',
        id: props.book ? props.book.id : ''}));

        const {name: tempName, age: tempAge} = props.book;
        myConfig[0].fieldProps.inputProps.value = tempName;
        myConfig[1].fieldProps.inputProps.value = tempAge.toString();
        myInitialValues.name = tempName;
        myInitialValues.age = tempAge.toString();
        // console.log(myConfig[0].fieldProps.inputProps.value, props.book.name);
    }
  }, [props.book]);

  React.useEffect(() => {
    if (book.name === '') {
        setTimeout(() => {
          myConfig.forEach((ele) => ele.fieldProps.inputProps.value = initValUndefined);
        }, 2);
        myConfig.forEach((ele) => ele.fieldProps.inputProps.value = '');
        // console.log(myConfig[0].fieldProps.inputProps.value, book.name);
    }
  }, [book]);

  return (
    <div>
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <BooksList />
        </div>
        <div className="col-md-6">
          <div className="row justify-content-md-center">
            <Card
              style={{ width: "30rem" }}
              className="book rounded overflow-hidden shadow-lg">
              <Card.Body>
                <Card.Title className="font-bold text-xl mb-2">
                  {props.book ? "Edit " : "Create "}User
                </Card.Title>
                <div className="book-details text-gray-700 text-base">
                  <hr />
                  <div style={{ width: "22rem", margin: 'auto' }}>
                    <div>

                      {inputFormBody}

                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br />
              
            {/* <Card
              style={{ width: "30rem" }}
              className="book rounded overflow-hidden shadow-lg">
              <Card.Body>
                <Card.Title className="font-bold text-xl mb-2">
                  {props.book ? "Edit " : "Create "}User
                </Card.Title>
                <div className="book-details text-gray-700 text-base">
                  <hr />
                   <div className="main-form">
                    {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                    <Form onSubmit={handleOnSubmit}>
                      <Form.Group controlId="name">
                        <Form.Label>
                          <span className="block text-gray-700 text-lg font-bold">
                            User Name
                          </span>
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
                        <Form.Label>
                          <span className="block text-gray-700 text-lg font-bold">
                            Age
                          </span>
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
                        className="bg-snowWhite hover:bg-blue-500 hover:text-white text-blue-700 font-semibold border border-blue-500 hover:border-transparent rounded"
                      >
                        {props.book ? "Save Changes" : "Submit"}
                      </Button>
                    </Form>
                  </div> 
                </div>
              </Card.Body>  
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
