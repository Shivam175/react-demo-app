import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import { BookInterface } from '../@types/book';
import { ReactForm } from 'react-forms-lite';
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
  const [errorMsg, setErrorMsg] = useState('');
  
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

  const myConfig = [
		{
			type : 'text',
			valueKey : 'name',
      fieldProps : { label: 'Enter name of user', fullWidth: true, required: true }
    },
    {
			type : 'text',
			valueKey : 'age',
      fieldProps : { label: 'Enter age of user', fullWidth: true, required: true }
		} 
  ];
  const myInitialValues = { name : props.book ? props.book.name : '', age : props.book ? props.book.age : ''};
  
  const submitButtonPropVar: ButtonProps = {
    color: "secondary"
  }

  const handleOnSubmitLocal = (object: formBook, resetFormFunction: any) => {
    const values = [object.name, object.age];
    let errorMsg = '';
    // console.log(values);
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      let [name, age] = [object.name, Number(object.age)];
      const book : BookInterface = {
        id: props.book ? props.book.id : uuidv4(), 
        name,
        age,
      };
      props.handleOnSubmit(book);
      resetFormFunction(myInitialValues);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
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
        enableReinitialize={true}
        onSubmit={(values: formBook, {resetForm} : any) => {
          // console.log(values);
          handleOnSubmitLocal(values, resetForm);
          return;
        }}
        actionConfig={{
          // submitButtonText: "Submit Form",
          // submitButtonLayout: "center",
          // submitButtonProps: submitButtonPropVar,
          // loaderProps: { color: "secondary" },
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
