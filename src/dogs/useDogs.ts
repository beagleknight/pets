import { useQuery } from "urql";
import { GetDogsDocument } from "../graphql/graphql";

export const useDogs = () => {
  const [{ fetching, data }] = useQuery({
    query: GetDogsDocument,
  });

  return {
    loading: fetching,
    dogs: data ? data.dogsNamespace.dogs : [],
  };
};
