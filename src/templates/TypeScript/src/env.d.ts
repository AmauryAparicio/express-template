declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PORT: number;
    readonly DB_CNN: string;
    readonly SECRET_JWT_SEED: string;
  }
}
