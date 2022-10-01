import { Formik } from "formik";
import useSWR from "swr";

const Formulario = () => {
  const SUPPORTED_FORMATS = ["application/vnd.ms-excel"];

  return (
    <>
      <Formik
        initialValues={{
          image: "",
        }}
        validate={({ image }) => {
          let errors = {};

          console.log(image);

          if (!image) {
            errors.image = "Ingrese una imagen";
          } else if (!SUPPORTED_FORMATS.includes(image.type)) {
            errors.image = "Solo se permiten arcivos con formato CSV.";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values);
        }}
      >
        {({ errors, handleSubmit, handleBlur, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <p className="m-2 text-center text-success">Formulario enviado!</p>
            <label className="form-label" htmlFor="image">
              Imatge
            </label>
            <input
              className="form-control mb-2"
              type="file"
              onChange={(event) => {
                setFieldValue("image", event.target.files[0]);
              }}
              onBlur={handleBlur}
            />
            {errors.image && <p className="text-danger">{errors.image}</p>}
            {errors.image ? (
              <button className="btn btn-primary mt-2" type="submit" disabled>
                Enviar!
              </button>
            ) : (
              <button className="btn btn-primary mt-2" type="submit">
                Enviar!
              </button>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
