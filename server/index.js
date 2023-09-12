const express = require("express");
const colors = require("colors");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//  Connecting to MONGO DB
connectDB();
//  CORS
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(
  port,
  console.log(`
Server is running on http://localhost:${port}
`)
);
