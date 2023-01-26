import { useFormik } from "formik";
import { useCreateDog } from "./useCreateDog";
import { redirect } from "react-router-dom";

export const NewPage = () => {
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
      redirect("/dogs");
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
      <label htmlFor="happiness">Happiness</label>
      <input
        id="happiness"
        name="happiness"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.happiness}
      />
      <br />
      <label htmlFor="birthDate">Birth date</label>
      <input
        id="birthDate"
        name="birthDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthDate}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
