import { useNavigate, useParams } from "react-router-dom";
import { useCat } from "./useCat";
import { useDestroyCat } from "./useDestroyCat";

export const ShowPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { destroy } = useDestroyCat();

  if (!id) {
    throw new Error("ID not defined");
  }

  const { cat } = useCat(id);

  return cat ? (
    <section>
      <header>
        <h1>{cat.name}'s page</h1>
        {cat.name === "Uhura" ? null : (
          <button
            onClick={async (event) => {
              event.preventDefault();
              event.stopPropagation();
              await destroy(cat.id);
              navigate("/cats");
            }}
          >
            Destroy
          </button>
        )}
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
