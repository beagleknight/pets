import { useNavigate, useOutletContext } from "react-router-dom";
import { ShowLayoutContext } from "./ShowLayout";
import { useDestroyCat } from "./useDestroyCat";

export const ShowPage = () => {
  const { cat } = useOutletContext<ShowLayoutContext>();
  const navigate = useNavigate();
  const { destroy } = useDestroyCat();

  return (
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
  );
};
