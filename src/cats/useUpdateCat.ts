import { useMutation } from "@apollo/client";
import {
  UpdateCatDocument,
  UpdateCatInput,
  GetCatsDocument,
  Cat,
} from "../graphql/graphql";

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
        refetchQueries: [GetCatsDocument],
        // NOTE: update mecanism replaces refetch but it is more complicated
        // update(cache, { data: mutationData }) {
        //   cache.updateQuery(
        //     {
        //       query: GetCatsDocument,
        //     },
        //     (data) => {
        //       const newCat = mutationData?.catsMutations.create.cat;
        //       if (data && newCat) {
        //         return {
        //           ...data,
        //           catsNamespace: {
        //             ...data.catsNamespace,
        //             cats: [...data.catsNamespace.cats, newCat],
        //           },
        //         };
        //       }
        //     }
        //   );
        // },
      });
    },
  };
};
