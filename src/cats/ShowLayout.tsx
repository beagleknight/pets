import { Outlet, useParams } from "react-router-dom";
import { Cat, useCat } from "./useCat";

export interface ShowLayoutContext {
  cat: Cat;
}

export const ShowLayout = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("ID not defined");
  }

  const { loading, cat } = useCat(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!cat) {
    throw new Error("Cat not found!");
  }

  const context: ShowLayoutContext = { cat };

  return <Outlet context={context} />;
};
