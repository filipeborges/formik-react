import React from 'react';

import { Formik, Field, Form, FormikActions, FormikProps } from 'formik';

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
      onSubmit={(values: FormValues, formikActions: FormikActions<FormValues>) => {
        setTimeout(() => {
          formikActions.setSubmitting(false)
        }, 1000)
      }}
      validateOnChange={false}
    >
      {(props: FormikProps<FormValues>) => (
        <Form>
          <label htmlFor="firstName">First Name:</label>
          <Field id="firstName" name="firstName" placeholder="Insert" type="text" />

          <label htmlFor="lastName">Last Name:</label>
          <Field id="lastName" name="lastName" placeholder="Insert" type="text" />

          <label htmlFor="age">Age:</label>
          <Field id="age" name="age" type="number" />

          <button disabled={props.isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
