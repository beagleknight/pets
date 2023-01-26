import { useMutation } from "@apollo/client";
import {
  UpdateCatDocument,
  UpdateCatInput,
  GetCatsDocument,
} from "../graphql/graphql";

export const useUpdateCat = () => {
  const [createCat, { loading }] = useMutation(UpdateCatDocument);

  return {
    loading,
    update(cat: any, input: UpdateCatInput) {
      return createCat({
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
