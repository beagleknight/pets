import { useMutation } from "urql";
import { DestroyDogDocument } from "../graphql/graphql";

export const useDestroyDog = () => {
  const [{ fetching }, destroyDog] = useMutation(DestroyDogDocument);

  return {
    loading: fetching,
    destroy(id: string) {
      return destroyDog({
        id,
      });
    },
  };
};
