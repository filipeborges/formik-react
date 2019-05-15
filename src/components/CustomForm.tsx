import React from 'react';

import { Formik, Field, Form, FormikActions, FormikProps, ErrorMessage } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  age: number;
}

const formInitialValues: FormValues = {
  firstName: '',
  lastName: '',
  age: 0,
}

export default function CustomForm() {
  return (
    <Formik
      initialValues={formInitialValues}
      validate={ (values: FormValues) => {
        let errors: any = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length < 2) {
          errors.firstName = 'Too short name';
        }
        if (values.age <= 0) {
          errors.age = 'Invalid age';
        }
        return errors;
      }}
      onSubmit={(values: FormValues, formikActions: FormikActions<FormValues>) => {
        setTimeout(() => {
          formikActions.setSubmitting(false)
        }, 1000)
      }}
      validateOnChange={false}
    >
      {(props: FormikProps<FormValues>) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <Field id="firstName" name="firstName" placeholder="Insert" type="text" />
          </div>
          <ErrorMessage name="firstName" component="div" />

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field id="lastName" name="lastName" placeholder="Insert" type="text" />
          </div>
          <ErrorMessage name="lastName" component="div" />

          <div>
            <label htmlFor="age">Age:</label>
            <Field id="age" name="age" type="number" />
          </div>
          <ErrorMessage name="age" component="div" />

          <button disabled={props.isSubmitting || !props.isValid} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
