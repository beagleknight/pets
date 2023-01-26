import { useParams } from "react-router-dom";
import { useDog } from "./useDog";

export const ShowPage = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("ID not defined");
  }

  const { dog } = useDog(id);

  return dog ? (
    <section>
      <header>
        <h1>{dog.name}'s page</h1>
      </header>
      <ul>
        <li>ID: {dog.id}</li>
        <li>Happiness: {dog.happiness}</li>
        <li>Birth date: {dog.birthDate}</li>
      </ul>
    </section>
  ) : (
    <p>Not found</p>
  );
};
