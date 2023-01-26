import { Link, Outlet } from "react-router-dom";
import { devtoolsExchange } from "@urql/devtools";
import { createClient, Provider, defaultExchanges } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  requestPolicy: "cache-first",
  exchanges: [devtoolsExchange, ...defaultExchanges],
});

export const RootPage = () => {
  return (
    <Provider value={client}>
      <section>
        <header>
          <h1>Dogs</h1>
          <Link to="new">New dog</Link>
        </header>
        <Outlet />
      </section>
    </Provider>
  );
};
