import React from "react";
import { Formik, Field } from "formik";
import { Button, TextField } from "@material-ui/core";

function App() {
  return (
    <>
      <Formik
        initialValues={{ firstName: "Gytis", lastName: "Leo" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('Submit: ', data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" type="input" as={TextField} />
            <Field name="lastName" type="input" as={TextField} />
            <div>
              <Button disabled={isSubmitting} type="submit">Submit</Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
