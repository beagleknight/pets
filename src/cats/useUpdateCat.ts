import { useMutation } from "@apollo/client";
import { UpdateCatDocument, UpdateCatInput } from "../graphql/graphql";
import { Cat } from "./useCat";

export type UpdateCatFormValues = UpdateCatInput;

export const useUpdateCat = () => {
  const [updateCat, { loading }] = useMutation(UpdateCatDocument);

  return {
    loading,
    update(cat: Cat, input: UpdateCatFormValues) {
      return updateCat({
        variables: {
          id: cat.id,
          input,
        },
      });
    },
  };
};
