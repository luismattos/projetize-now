import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",

  db: {
    protocol: process.env.DB_PROTOCOL,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    name: process.env.DB_NAME,
    uri: `${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // autoIndex: true,
    },
  },

  server: {
    protocol: process.env.SERVER_PROTOCOL,
    host: process.env.SERVER_HOST,
    port: Number(process.env.SERVER_PORT),
    url: `${process.env.SERVER_PROTOCOL}://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,

    pepper: process.env.SERVER_PEPPER,
  },
};

export default config;
