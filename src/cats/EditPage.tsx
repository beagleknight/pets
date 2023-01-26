import { FormikErrors, useFormik } from "formik";
import { UpdateCatFormValues, useUpdateCat } from "./useUpdateCat";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ShowLayoutContext } from "./ShowLayout";

export const EditPage = () => {
  const { cat } = useOutletContext<ShowLayoutContext>();
  const navigate = useNavigate();
  const { update } = useUpdateCat();

  const formik = useFormik<UpdateCatFormValues>({
    initialValues: {
      name: cat.name,
      color: cat.color,
    },
    validate(values) {
      const errors: FormikErrors<UpdateCatFormValues> = {};

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.color) {
        errors.color = "Required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      const { name, color } = values;
      if (cat) {
        await update(cat, {
          name,
          color,
        });
      }
      navigate("/cats");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className="nes-input"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      <label htmlFor="color">Color</label>
      <input
        className="nes-input"
        id="color"
        name="color"
        onChange={formik.handleChange}
        value={formik.values.color}
      />
      <br />
      <br />
      <button className="nes-btn is-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
