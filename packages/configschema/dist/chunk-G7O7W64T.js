import {
  postgresConfigSchema
} from "./chunk-XXHV3QPY.js";

// src/zod/build/database/database.ts
import { z } from "zod";
var ulldSupportedDatabases = [
  "postgres",
  "sqlite"
];
var databaseBuildSchema = z.object({
  type: z.enum(ulldSupportedDatabases).default("postgres"),
  postgres: postgresConfigSchema,
  prioritize: z.union([z.literal("speed"), z.literal("size")]).default("speed")
}).default({}).refine(
  (data) => !Boolean(data.type === "postgres" && !data.postgres),
  {
    message: "If you set the database type to 'Postgres', you must also provide a postgres configuration with either a port number and a database name, or a connection URI."
  }
);

export {
  ulldSupportedDatabases,
  databaseBuildSchema
};
//# sourceMappingURL=chunk-G7O7W64T.js.map