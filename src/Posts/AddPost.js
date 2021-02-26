import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";

//tworzenie inputa na bazie useField(props) zaebane z official tutoriala formika XD

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        rows="5"
        cols="33"
        className="textarea"
        {...field}
        {...props}
      ></textarea>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
//tworzenie selecta na bazie formika useField(props)
const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const AddPost = () => {
  return (
    <>
      <h1>Dodaj Post</h1>
      <Formik
        initialValues={{
          postHead: "",
          postBody: "",
          Author: "",
          password: "",
        }}
        validationSchema={Yup.object({
          postHead: Yup.string()
            .min(8, "Musi posiadać minimum 8 znaków")
            .max(160, "Maksymalnie 160 znaków")
            .required("Required"),
          postBody: Yup.string()
            .min(20, "Musi mieć minimum 20 znaków")
            .max(255, "Maksymalnie 255 znaków")
            .required("Required"),
          Author: Yup.string()
            .oneOf(["Maro", "Rado", "Mihau"], "Nie wybrałeś autora")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          resetForm();
          await axios.post("/post", values);
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="Tytuł: "
            name="postHead"
            type="text"
            placeholder="Tytuł"
          />

          <MyTextArea
            label="Treść newsa: "
            name="postBody"
            type="text"
            placeholder="Treść"
          />
          <MyTextInput
            label="Hasełko"
            name="password"
            type="text"
            placeholder="Podaj hasło"
          />

          <MySelect label="Autor" name="Author">
            <option value="Wybierz">Wybierz autora</option>
            <option value="Rado">Rado</option>
            <option value="Maro">Maro</option>
            <option value="Mihau">Mihau</option>
          </MySelect>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddPost;
