import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Link, Outlet } from "react-router-dom";
import { resolvers } from "./resolvers";
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
  resolvers,
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
    },
  },
});

export const RootPage = () => {
  return (
    <ApolloProvider client={client}>
      <section className="air">
        <header>
          <h1>Cats</h1>
          <Link className="nes-btn is-success" to="new">
            New cat
          </Link>
        </header>
        <Outlet />
      </section>
    </ApolloProvider>
  );
};
