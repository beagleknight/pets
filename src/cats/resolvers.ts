import { Cat } from "../graphql/graphql";

export const resolvers = {
  Cat: {
    isPetted(cat: Cat) {
      return !!cat.pettedAt;
    },
  },
};
