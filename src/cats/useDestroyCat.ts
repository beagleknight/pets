import { useMutation } from "@apollo/client";
import { DestroyCatDocument } from "../graphql/graphql";

export const useDestroyCat = () => {
  const [destroyCat, { loading }] = useMutation(DestroyCatDocument);

  return {
    loading,
    destroy(id: string) {
      return destroyCat({
        variables: {
          id,
        },
      });
    },
  };
};
