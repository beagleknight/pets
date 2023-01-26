import { useParams } from "react-router-dom";
import { useCat } from "./useCat";

export const ShowPage = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("ID not defined");
  }

  const { cat } = useCat(id);

  return cat ? (
    <section>
      <header>
        <h1>{cat.name}'s page</h1>
      </header>
      <ul>
        <li>ID: {cat.id}</li>
        <li>Color: {cat.color}</li>
      </ul>
    </section>
  ) : (
    <p>Not found</p>
  );
};
