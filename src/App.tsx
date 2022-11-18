import React from "react";
import { Formik, Field, Form, FieldAttributes, useField } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  TextField,
} from "@material-ui/core";
import * as yup from "yup";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required(),
    })
  ),
});

function App() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          isTall: false,
          cookies: [],
          yogurt: "",
          pets: [{ type: "cat", name: "jarvis", id: "" + Math.random() }],
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true); // kad nepaspaustu submit daug kartu.
          console.log("Submit: ", data);
          setSubmitting(false);
        }}
        validate={(values) => {
          const errors: Record<string, string> = {};

          if (values.firstName.includes("bob")) {
            errors.firstName = "no bob";
          }
          return errors;
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <MyTextField placeholder="first name" name="firstName" />
            <div>
              <Field
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <Field name="isTall" type="checkbox" as={Checkbox} />
            <div>Cookies</div>
            <Field
              name="cookies"
              type="checkbox"
              value="chocoloate chip"
              as={Checkbox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="snikers"
              as={Checkbox}
            />
            <Field name="cookies" type="checkbox" value="mars" as={Checkbox} />
            <div>Yogurt</div>
            <MyRadio name="yogurt" type="radio" value="peach" label="peach" />
            <MyRadio name="yogurt" type="radio" value="banana" label="banana" />
            <MyRadio
              name="yogurt"
              type="radio"
              value="blueberry"
              label="blueberry"
            />
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
