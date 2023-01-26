/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: 'Cat';
  color: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CatsNamespace = {
  __typename?: 'CatsNamespace';
  cat?: Maybe<Cat>;
  cats: Array<Cat>;
};


export type CatsNamespaceCatArgs = {
  id: Scalars['ID'];
};

export type CreateDogInput = {
  birthDate: Scalars['String'];
  happiness: Scalars['Int'];
  name: Scalars['String'];
};

export type Dog = {
  __typename?: 'Dog';
  birthDate: Scalars['String'];
  happiness: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DogPayload = {
  __typename?: 'DogPayload';
  dog?: Maybe<Dog>;
  errors?: Maybe<Array<Error>>;
};

export type DogsMutations = {
  __typename?: 'DogsMutations';
  create: DogPayload;
};


export type DogsMutationsCreateArgs = {
  input: CreateDogInput;
};

export type DogsNamespace = {
  __typename?: 'DogsNamespace';
  dog?: Maybe<Dog>;
  dogs: Array<Dog>;
};


export type DogsNamespaceDogArgs = {
  id: Scalars['ID'];
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  dogsMutations: DogsMutations;
};

export type Query = {
  __typename?: 'Query';
  catsNamespace: CatsNamespace;
  dogsNamespace: DogsNamespace;
};

export type GetCatQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCatQuery = { __typename?: 'Query', catsNamespace: { __typename?: 'CatsNamespace', cat?: { __typename?: 'Cat', id: string, name: string, color: string } | null } };

export type GetCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCatsQuery = { __typename?: 'Query', catsNamespace: { __typename?: 'CatsNamespace', cats: Array<{ __typename?: 'Cat', id: string, name: string }> } };

export type CreateDogMutationVariables = Exact<{
  input: CreateDogInput;
}>;


export type CreateDogMutation = { __typename?: 'Mutation', dogsMutations: { __typename?: 'DogsMutations', create: { __typename?: 'DogPayload', dog?: { __typename?: 'Dog', id: string } | null, errors?: Array<{ __typename?: 'Error', message: string }> | null } } };

export type GetDogQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDogQuery = { __typename?: 'Query', dogsNamespace: { __typename?: 'DogsNamespace', dog?: { __typename?: 'Dog', id: string, name: string, happiness: number, birthDate: string } | null } };

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogsNamespace: { __typename?: 'DogsNamespace', dogs: Array<{ __typename?: 'Dog', id: string, name: string, birthDate: string }> } };


export const GetCatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catsNamespace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<GetCatQuery, GetCatQueryVariables>;
export const GetCatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catsNamespace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCatsQuery, GetCatsQueryVariables>;
export const CreateDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDogInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogsMutations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateDogMutation, CreateDogMutationVariables>;
export const GetDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogsNamespace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"happiness"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetDogQuery, GetDogQueryVariables>;
export const GetDogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogsNamespace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetDogsQuery, GetDogsQueryVariables>;