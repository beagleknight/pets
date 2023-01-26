var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var cors = require("cors");
var fs = require("fs");
var path = require("path");

const readDatabase = (dbName) => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "db", `${dbName}.json`), "utf-8")
  )[dbName];
};

const writeDatabase = (dbName, dbContent) => {
  fs.writeFileSync(
    path.join(__dirname, "db", `${dbName}.json`),
    JSON.stringify({ [dbName]: dbContent }, 2, 2)
  );
};

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    dogsNamespace: DogsNamespace!
    catsNamespace: CatsNamespace!
  }

  type Mutation {
    dogsMutations: DogsMutations!
    catsMutations: CatsMutations!
  }

  type DogsNamespace {
    dogs: [Dog!]!
    dog(id: ID!): Dog
  }

  type DogsMutations {
    create(input: CreateDogInput!): DogPayload!
    destroy(id: ID!): DogPayload!
  }

  input CreateDogInput {
    name: String!
    happiness: Int!
    birthDate: String!
  }

  type DogPayload {
    dog: Dog
    errors: [Error!]!
  }

  type CatsMutations {
    create(input: CreateCatInput!): CatPayload!
    update(id: ID!, input: UpdateCatInput!): CatPayload!
    destroy(id: ID!): CatPayload!
  }

  input CreateCatInput {
    name: String!
    color: String!
  }

  input UpdateCatInput {
    name: String!
    color: String!
  }

  type CatPayload {
    cat: Cat
    errors: [Error!]!
  }

  type Error {
    message: String!
  }

  type CatsNamespace {
    cats: [Cat!]!
    cat(id: ID!): Cat
  }

  type Dog {
    id: ID!
    name: String!
    happiness: Int!
    birthDate: String!
  }

  type Cat {
    id: ID!
    name: String!
    color: String!
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  dogsNamespace: () => {
    return {
      dogs: () => {
        return readDatabase("dogs");
      },
      dog: ({ id }) => {
        return readDatabase("dogs").find((dog) => dog.id === id);
      },
    };
  },
  catsNamespace: () => {
    return {
      cats: () => {
        return readDatabase("cats");
      },
      cat: ({ id }) => {
        return readDatabase("cats").find((cat) => cat.id === id);
      },
    };
  },
  dogsMutations: () => {
    return {
      create({ input }) {
        const dogs = readDatabase("dogs");
        const { name, happiness, birthDate } = input;
        const newDog = {
          id: String(dogs.length + 1),
          name,
          happiness,
          birthDate,
        };
        writeDatabase("dogs", [...dogs, newDog]);
        return {
          dog: newDog,
          errors: [],
        };
      },
      destroy({ id }) {
        const dogs = readDatabase("dogs");
        const byeDog = dogs.find((dog) => dog.id === id);
        writeDatabase(
          "dogs",
          dogs.filter((dog) => dog.id !== id)
        );

        return {
          dog: byeDog,
          errors: [],
        };
      },
    };
  },
  catsMutations: () => {
    return {
      create({ input }) {
        const cats = readDatabase("cats");
        const { name, color } = input;
        const newCat = {
          id: String(cats.length + 1),
          name,
          color,
        };
        writeDatabase("cats", [...cats, newCat]);
        return {
          cat: newCat,
          errors: [],
        };
      },
      destroy({ id }) {
        const cats = readDatabase("cats");
        const byeCat = cats.find((cat) => cat.id === id);
        writeDatabase(
          "cats",
          cats.filter((cat) => cat.id !== id)
        );

        return {
          cat: byeCat,
          errors: [],
        };
      },
      update({ id, input }) {
        const cats = readDatabase("cats");
        let updatedCat;

        writeDatabase("cats", [
          cats.map((cat) => {
            if (cat.id === id) {
              updatedCat = {
                ...cat,
                ...input,
              };
              return updatedCat;
            }
            return cat;
          }),
        ]);
        return {
          cat: updatedCat,
          errors: [],
        };
      },
    };
  },
};

var app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
