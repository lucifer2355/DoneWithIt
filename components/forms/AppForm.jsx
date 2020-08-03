import React from "react";
import { Formik } from "formik";

const AppForm = ({ initialValue, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValue={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
