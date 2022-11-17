import React from "react";
import { Formik } from "formik";
import { TextField } from "@material-ui/core";

function App() {
  return (
    <>
      <Formik
        initialValues={{ firstName: "bob" }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
