import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          catsNamespace: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming);
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
    },
  },
});

export const RootPage = () => {
  return (
    <ApolloProvider client={client}>
      <section>
        <header>
          <h1>Cats</h1>
        </header>
        <Outlet />
      </section>
    </ApolloProvider>
  );
};
