/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "mutation CreateCat($input: CreateCatInput!) {\n  catsMutations {\n    create(input: $input) {\n      cat {\n        id\n        name\n      }\n      errors {\n        message\n      }\n    }\n  }\n}": types.CreateCatDocument,
    "mutation DestroyCat($id: ID!) {\n  catsMutations {\n    destroy(id: $id) {\n      cat {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}": types.DestroyCatDocument,
    "query GetCat($id: ID!) {\n  catsNamespace {\n    cat(id: $id) {\n      id\n      name\n      color\n    }\n  }\n}": types.GetCatDocument,
    "query GetCats {\n  catsNamespace {\n    cats {\n      id\n      name\n    }\n  }\n}": types.GetCatsDocument,
    "mutation UpdateCat($id: ID!, $input: UpdateCatInput!) {\n  catsMutations {\n    update(id: $id, input: $input) {\n      cat {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}": types.UpdateCatDocument,
    "mutation CreateDog($input: CreateDogInput!) {\n  dogsMutations {\n    create(input: $input) {\n      dog {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}": types.CreateDogDocument,
    "mutation DestroyDog($id: ID!) {\n  dogsMutations {\n    destroy(id: $id) {\n      dog {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}": types.DestroyDogDocument,
    "query GetDog($id: ID!) {\n  dogsNamespace {\n    dog(id: $id) {\n      id\n      name\n      happiness\n      birthDate\n    }\n  }\n}": types.GetDogDocument,
    "query GetDogs {\n  dogsNamespace {\n    dogs {\n      id\n      name\n      birthDate\n    }\n  }\n}": types.GetDogsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCat($input: CreateCatInput!) {\n  catsMutations {\n    create(input: $input) {\n      cat {\n        id\n        name\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"): (typeof documents)["mutation CreateCat($input: CreateCatInput!) {\n  catsMutations {\n    create(input: $input) {\n      cat {\n        id\n        name\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DestroyCat($id: ID!) {\n  catsMutations {\n    destroy(id: $id) {\n      cat {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"): (typeof documents)["mutation DestroyCat($id: ID!) {\n  catsMutations {\n    destroy(id: $id) {\n      cat {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCat($id: ID!) {\n  catsNamespace {\n    cat(id: $id) {\n      id\n      name\n      color\n    }\n  }\n}"): (typeof documents)["query GetCat($id: ID!) {\n  catsNamespace {\n    cat(id: $id) {\n      id\n      name\n      color\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCats {\n  catsNamespace {\n    cats {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query GetCats {\n  catsNamespace {\n    cats {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateCat($id: ID!, $input: UpdateCatInput!) {\n  catsMutations {\n    update(id: $id, input: $input) {\n      cat {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"): (typeof documents)["mutation UpdateCat($id: ID!, $input: UpdateCatInput!) {\n  catsMutations {\n    update(id: $id, input: $input) {\n      cat {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateDog($input: CreateDogInput!) {\n  dogsMutations {\n    create(input: $input) {\n      dog {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"): (typeof documents)["mutation CreateDog($input: CreateDogInput!) {\n  dogsMutations {\n    create(input: $input) {\n      dog {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DestroyDog($id: ID!) {\n  dogsMutations {\n    destroy(id: $id) {\n      dog {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"): (typeof documents)["mutation DestroyDog($id: ID!) {\n  dogsMutations {\n    destroy(id: $id) {\n      dog {\n        id\n      }\n      errors {\n        message\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetDog($id: ID!) {\n  dogsNamespace {\n    dog(id: $id) {\n      id\n      name\n      happiness\n      birthDate\n    }\n  }\n}"): (typeof documents)["query GetDog($id: ID!) {\n  dogsNamespace {\n    dog(id: $id) {\n      id\n      name\n      happiness\n      birthDate\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetDogs {\n  dogsNamespace {\n    dogs {\n      id\n      name\n      birthDate\n    }\n  }\n}"): (typeof documents)["query GetDogs {\n  dogsNamespace {\n    dogs {\n      id\n      name\n      birthDate\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;