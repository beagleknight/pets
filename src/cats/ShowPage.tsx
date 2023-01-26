import { useNavigate, useParams } from "react-router-dom";
import { useCat } from "./useCat";
import { useDestroyCat } from "./useDestroyCat";

export const ShowPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    throw new Error("ID not defined");
  }

  const { cat } = useCat(id);
  const { destroy } = useDestroyCat();

  return cat ? (
    <section className="nes-container">
      <header>
        <h1>{cat.name}'s page</h1>
        {cat.name === "Curri" ? null : (
          <button
            className="nes-btn is-error"
            onClick={async (event) => {
              event.preventDefault();
              event.stopPropagation();
              await destroy(cat);
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
