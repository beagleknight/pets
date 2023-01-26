import { useFormik } from "formik";
import { useCreateDog } from "./useCreateDog";
import { useNavigate } from "react-router-dom";

export const NewPage = () => {
  const navigate = useNavigate();
  const { create } = useCreateDog();

  const formik = useFormik({
    initialValues: {
      name: "",
      happiness: 0,
      birthDate: "",
    },
    onSubmit: async (values) => {
      const { name, happiness, birthDate } = values;
      await create({
        name,
        happiness,
        birthDate,
      });
      navigate("/dogs");
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
      <label htmlFor="happiness">Happiness</label>
      <input
        className="nes-input"
        id="happiness"
        name="happiness"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.happiness}
      />
      <br />
      <label htmlFor="birthDate">Birth date</label>
      <input
        className="nes-input"
        id="birthDate"
        name="birthDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthDate}
      />
      <br />
      <br />
      <button className="nes-btn is-primary" type="submit">Submit</button>
    </form>
  );
};
