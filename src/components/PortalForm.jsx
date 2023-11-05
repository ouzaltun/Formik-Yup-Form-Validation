import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function PortalForm() {
  return (
    <Formik
      initialValues={{ username: "", university: "", isAccepted: false }}
      onSubmit={onSubmit}
      validationSchema={advancedSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Kullanıcı Adı"
            name="username"
            type="text"
            placeholder="Kullanıcı Adınızı Giriniz"
          ></CustomInput>
          <CustomSelect
            label="Okulunuz"
            name="university"
            placeholder="Lütfen üniversitenizi seçin"
          >
            <h2>sa</h2>
            <option value="" defaultValue={true} disabled="true">
              Lütfen üniversitenizi seçin.
            </option>
            <option value="bogazici">Boğazici</option>
            <option value="gsu">GSU</option>
            <option value="odtü">ODTU</option>
            <option value="itü">İTU</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="isAccepted"></CustomCheckbox>
          <button isSubmitting={isSubmitting} type="submit">
            Gönder
          </button>
          <Link to={"/"}>Ana forma git.</Link>
        </Form>
      )}
    </Formik>
  );
}
export default PortalForm;
