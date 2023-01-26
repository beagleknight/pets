import type { CodegenConfig } from "@graphql-codegen/cli";

const resourcesNamingConvention = {
  avoidOptionals: true,
  transformUnderscore: true,
  enumValues: "upper-case#upperCase",
  typenames: "pascal-case#pascalCase",
  addTypename: true,
  nonOptionalTypename: true,
  strictScalars: true,
};

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["./src/**/*.graphql"],
  generates: {
    "src/graphql/": {
      preset: "client",
      plugins: [],
      config: {
        namingConvention: resourcesNamingConvention,
        useTypeImports: true,
        strictScalars: true,
        arrayInputCoercion: false,
      },
    },
  },
};

export default config;
