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
  return JSON.parse(
    fs.writeFileSync(
      path.join(__dirname, "db", `${dbName}`.json),
      { [dbName]: dbContent }.toJSON()
    )
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
  }

  type DogsNamespace {
    dogs: [Dog!]!
    dog(id: ID!): Dog
  }

  type DogsMutations {
    create(input: CreateDogInput!): DogPayload!
  }

  input CreateDogInput {
    name: String!
    happiness: Int!
    birthDate: String!
  }

  type DogPayload {
    dog: Dog
    errors: [Error!]
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
          name,
          happiness,
          birthDate,
        };
        writeDatabase([...dogs, newDog]);
        return {
          dog: newDog,
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
