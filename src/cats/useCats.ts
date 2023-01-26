import { useQuery } from "@apollo/client";
import { GetCatsDocument } from "../graphql/graphql";

export const useCats = () => {
  const { loading, data } = useQuery(GetCatsDocument);

  return {
    loading,
    cats: data ? data.catsNamespace.cats : [],
  };
};
