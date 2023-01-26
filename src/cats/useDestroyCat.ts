import { useMutation } from "@apollo/client";
import { DestroyCatDocument, DestroyCatMutation } from "../graphql/graphql";

export type Cat = NonNullable<
  DestroyCatMutation["catsMutations"]["destroy"]["cat"]
>;

export const useDestroyCat = () => {
  const [destroyCat, { loading }] = useMutation(DestroyCatDocument);

  return {
    loading,
    destroy(cat: Cat) {
      return destroyCat({
        variables: {
          id: cat.id,
        },
        update(cache) {
          cache.evict({ id: cache.identify(cat) });
        },
      });
    },
  };
};
