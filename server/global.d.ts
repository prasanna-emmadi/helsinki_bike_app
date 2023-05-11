import { Secret } from "jsonwebtoken";

export namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    MONGO_URI: string;
    JWT_SECRET: Secret;
  }
}
