import { useQuery } from "urql";
import { GetDogDocument } from "../graphql/graphql";

export const useDog = (dogId: string) => {
  const [{ fetching, data }] = useQuery({
    query: GetDogDocument,
    variables: {
      id: dogId,
    },
  });

  return {
    loading: fetching,
    dog: data?.dogsNamespace.dog,
  };
};
