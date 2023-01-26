import { Link, Outlet } from "react-router-dom";
import { devtoolsExchange } from "@urql/devtools";
import {
  createClient,
  Provider,
  defaultExchanges,
  errorExchange,
  dedupExchange,
  fetchExchange,
  // cacheExchange,
} from "urql";
import { retryExchange } from "@urql/exchange-retry";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import { cacheExchange } from "@urql/exchange-graphcache";
import { GetDogsDocument } from "../graphql/graphql";

// console.log(defaultExchanges);
// ...defaultExchanges,
// retryExchange({
//   initialDelayMs: 1000,
//   maxDelayMs: 15000,
//   randomDelay: true,
//   maxNumberAttempts: 2,
//   retryIf: (err) => !!(err && err.networkError),
// }),
// errorExchange({
//   onError: (error, operation) => {
//     // eslint-disable-next-line no-console
//     console.log("Urql GraphQL client error", error, operation);
//   },
// }),

const client = createClient({
  url: "http://localhost:4000/graphql",
  requestPolicy: "cache-first",
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange({
      // updates: {
      //   Mutation: {
      //     dogsMutations(result, _variables, cache) {
      //       if ((result.dogsMutations as any).create) {
      //         cache.updateQuery({ query: GetDogsDocument }, (data: any) => {
      //           console.log(data);
      //           if (data) {
      //             const newDog = (result.dogsMutations as any).create.dog;
      //             if (newDog) {
      //               return {
      //                 ...data,
      //                 dogsNamespace: {
      //                   ...data.dogsNamespace,
      //                   dogs: [...data.dogsNamespace.dogs, newDog],
      //                 },
      //               };
      //             }
      //           }
      //         });
      //       }
      //     },
      //   },
      // },
    }),
    fetchExchange,
  ],
});

export const RootPage = () => {
  return (
    <Provider value={client}>
      <section className="air">
        <header>
          <h1>Dogs</h1>
          <Link className="nes-btn is-success" to="new">New dog</Link>
        </header>
        <Outlet />
      </section>
    </Provider>
  );
};
