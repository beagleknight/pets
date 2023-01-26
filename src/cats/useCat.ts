import { useQuery } from "@apollo/client";
import { GetCatDocument, GetCatQuery } from "../graphql/graphql";

export type Cat = NonNullable<GetCatQuery["catsNamespace"]["cat"]>;

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
