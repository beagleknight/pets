import { useFormik } from "formik";
import { useCreateCat } from "./useCreateCat";
import { useNavigate } from "react-router-dom";

export const NewPage = () => {
  const navigate = useNavigate();
  const { create } = useCreateCat();

  const formik = useFormik({
    initialValues: {
      name: "",
      color: "",
    },
    onSubmit: async (values) => {
      const { name, color } = values;
      await create({
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
      <button className="nes-btn is-primary" type="submit">Submit</button>
    </form>
  );
};
