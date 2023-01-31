import { useMutation } from "@apollo/client";
import { PetCatDocument } from "../graphql/graphql";
import { Cat } from "./useCat";

export const usePetCat = () => {
  const [petCat, { loading }] = useMutation(PetCatDocument);

  return {
    loading,
    pet(cat: Cat) {
      return petCat({
        variables: {
          id: cat.id,
        },
      });
    },
  };
};
