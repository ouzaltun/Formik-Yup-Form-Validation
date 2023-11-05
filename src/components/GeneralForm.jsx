import React from "react";
import { useFormik } from "formik";
import { basicsSchema } from "../schemas";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicsSchema,
      onSubmit,
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Mail adresinizi giriniz..."
            className={errors.email ? "input-error" : ""}
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            onChange={handleChange}
            value={values.age}
            placeholder="Yaşınızı giriniz..."
            className={errors.age ? "input-error" : ""}
          />
        </div>
        {errors.age && <p className="error">{errors.age}</p>}
        <div className="inputDiv">
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Şifrenizi giriniz..."
            className={errors.password ? "input-error" : ""}
          />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
        <div className="inputDiv">
          <label>Şifre Tekrar</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
            placeholder="Şifrenizi tekrar giriniz..."
            className={errors.confirmPassword ? "input-error" : ""}
          />
        </div>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button disabled={isSubmitting} type="submit">
          Kaydet
        </button>
        <Link to={"/portal"}>Portal forma git.</Link>
      </form>
    </div>
  );
}

export default GeneralForm;
