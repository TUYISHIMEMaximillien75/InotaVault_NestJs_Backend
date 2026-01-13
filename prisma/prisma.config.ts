import { defineConfig } from "prisma/config";

export default defineConfig({
  migrations: {
    path: "prisma/migrations",
  },
  schema: "prisma/schema.prisma",
  datasource: {
    // provider: "postgresql",
    url: process.env.DATABASE_URL!,
  },
});
