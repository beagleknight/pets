import { useMutation } from "@apollo/client";
import {
  CreateCatDocument,
  CreateCatInput,
  GetCatsDocument,
} from "../graphql/graphql";

export const useUpdateCat = () => {
  const [createCat, { loading }] = useMutation(UpdateCatMutation);

  return {
    loading,
    create(input: CreateCatInput) {
      return createCat({
        variables: {
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
