import { useFormik } from "formik";
import { useUpdateCat } from "./useCreateCat";
import { useNavigate } from "react-router-dom";

export const EditPage = () => {
  const navigate = useNavigate();
  const { update } = useUpdateCat();

  const formik = useFormik({
    initialValues: {
      name: "",
      color: "",
    },
    onSubmit: async (values) => {
      const { name, color } = values;
      await update({
        name,
        color,
      });
      navigate("/cats");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      <label htmlFor="color">Color</label>
      <input
        id="color"
        name="color"
        onChange={formik.handleChange}
        value={formik.values.color}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
};
