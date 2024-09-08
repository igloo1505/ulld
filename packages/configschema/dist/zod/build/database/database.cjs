'use strict';

var zod = require('zod');

// src/zod/build/database/database.ts
var postgresConfigSchema = zod.z.object({
  port: zod.z.coerce.number().int().default(5432),
  dbName: zod.z.string().default("ulld"),
  connectionURI: zod.z.string().default("")
}).default({}).refine(
  (data) => Boolean(data.connectionURI !== "" || data.port && data.dbName)
).transform((data) => {
  if (data.connectionURI && data.connectionURI !== "") {
    return {
      connectionURI: data.connectionURI
    };
  }
  return {
    port: data.port,
    dbName: data.dbName
  };
});

// src/zod/build/database/database.ts
var ulldSupportedDatabases = [
  "postgres",
  "sqlite"
];
var databaseBuildSchema = zod.z.object({
  type: zod.z.enum(ulldSupportedDatabases).default("postgres"),
  postgres: postgresConfigSchema,
  prioritize: zod.z.union([zod.z.literal("speed"), zod.z.literal("size")]).default("speed")
}).default({}).refine(
  (data) => !Boolean(data.type === "postgres" && !data.postgres),
  {
    message: "If you set the database type to 'Postgres', you must also provide a postgres configuration with either a port number and a database name, or a connection URI."
  }
);

exports.databaseBuildSchema = databaseBuildSchema;
exports.ulldSupportedDatabases = ulldSupportedDatabases;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=database.cjs.map