import { useQuery } from "@apollo/client";
import { GetCatDocument } from "../graphql/graphql";

export const useCat = (catId: string) => {
  const { loading, data } = useQuery(GetCatDocument, {
    variables: {
      id: catId,
    },
  });

  return {
    loading,
    cat: data?.catsNamespace.cat,
  };
};
