import { useNavigate, useOutletContext } from "react-router-dom";
import { ShowLayoutContext } from "./ShowLayout";
import { Cat } from "./useCat";
import { useDestroyCat } from "./useDestroyCat";
import { usePetCat } from "./usePetCat";

const PetButton = ({ cat }: { cat: Cat }) => {
  const { pet } = usePetCat();

  if (cat.isPetted) {
    return null;
  }

  return <button onClick={() => pet(cat)}>Pet</button>;
};

export const ShowPage = () => {
  const { cat } = useOutletContext<ShowLayoutContext>();
  const navigate = useNavigate();
  const { destroy } = useDestroyCat();

  return (
    <section className="nes-container">
      <header>
        <h1>
          {cat.name}'s page <PetButton cat={cat} />
        </h1>
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
        <li>Petted at: {cat.pettedAt}</li>
        <li>Is Petted: {cat.isPetted ? "YES" : "NO"}</li>
      </ul>
    </section>
  );
};
