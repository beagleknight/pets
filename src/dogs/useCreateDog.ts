import { useMutation } from "urql";
import { CreateDogDocument, CreateDogInput } from "../graphql/graphql";

export const useCreateDog = () => {
  const [{ fetching }, createDog] = useMutation(CreateDogDocument);

  return {
    loading: fetching,
    create(input: CreateDogInput) {
      return createDog({
        input,
      });
    },
  };
};
