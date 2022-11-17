import React from "react";
import { Formik, Field, Form, FieldAttributes, useField } from "formik";
import { Button, Checkbox, FormControlLabel, Radio, TextField } from "@material-ui/core";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

function App() {
  return (
    <>
      <Formik
        initialValues={{ firstName: "Gytis", lastName: "Leo", isTall: false, cookies: [], yogurt: [] }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log("Submit: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <Field
                placeholder="first name"
                name="firstName"
                type="input"
                as={TextField}
              />
              <Field
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <Field name="isTall" type="checkbox" as={Checkbox} />
            <div>Cookies</div>
            <Field name="cookies" type="checkbox" value="chocoloate chip" as={Checkbox} />
            <Field name="cookies" type="checkbox" value="snikers" as={Checkbox} />
            <Field name="cookies" type="checkbox" value="mars" as={Checkbox} />
            <div>Yogurt</div>
            <MyRadio name="yogurt" type="radio" value="peach" label="peach" />
            <MyRadio name="yogurt" type="radio" value="banana" label="banana" />
            <MyRadio name="yogurt" type="radio" value="blueberry" label="blueberry" />
            {/* <Field name="yogurt" type="radio" value="peach" as={Radio} />
            <Field name="yogurt" type="radio" value="banana" as={Radio} />
            <Field name="yogurt" type="radio" value="blueberry" as={Radio} /> */}
            <div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
