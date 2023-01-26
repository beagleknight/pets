import { useMutation } from "@apollo/client";
import { CreateCatDocument, CreateCatInput } from "../graphql/graphql";

export const useCreateCat = () => {
  const [createCat, { loading }] = useMutation(CreateCatDocument);

  return {
    loading,
    create(input: CreateCatInput) {
      return createCat({
        variables: {
          input,
        },
      });
    },
  };
};
