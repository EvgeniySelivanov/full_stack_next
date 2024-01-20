CREATE TABLE "users"(
  "id" serial PRIMARY KEY,
  "firstName" VARCHAR(64) NOT NULL CHECK ("firstName" != ''),
  "lastName" VARCHAR(64) NOT NULL CHECK ("lastName" != ''),
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
