import { useNavigate, useParams } from "react-router-dom";
import { useDestroyDog } from "./useDestroyDog";
import { useDog } from "./useDog";

export const ShowPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { destroy } = useDestroyDog();

  if (!id) {
    throw new Error("ID not defined");
  }

  const { dog } = useDog(id);

  return dog ? (
    <section className="nes-container">
      <header>
        <h1>{dog.name}'s page</h1>
        {dog.name === "Boira" ? null : (
          <button
            className="nes-btn is-error"
            onClick={async (event) => {
              event.preventDefault();
              event.stopPropagation();
              await destroy(dog.id);
              navigate("/dogs");
            }}
          >
            Destroy
          </button>
        )}
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
