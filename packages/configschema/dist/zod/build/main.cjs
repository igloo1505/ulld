'use strict';

var zod = require('zod');

// src/zod/build/main.ts
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
var validImageExtends = ["jpg", "jpeg", "svg", "png", "webp"];
var validFaviconExtensions = ["ico", "png", "jpg", "svg"];
var additionalUserContent = zod.z.object({
  css: zod.z.string().optional(),
  favicon: zod.z.string().refine(
    (s) => {
      let _s = s.split(".").at(-1);
      if (!_s)
        return false;
      return validFaviconExtensions.includes(_s);
    },
    {
      message: `Your favicon must be of a valid favicon type. Currently supported extensions are:
${validFaviconExtensions.join("\n")}`
    }
  ).optional(),
  logo: zod.z.string().refine(
    (s) => {
      let _s = s.split(".").at(-1);
      if (!_s)
        return false;
      return validImageExtends.includes(_s);
    },
    {
      message: `Your logo must be of a valid image type. Currently supported image extensions are:
${validImageExtends.join("\n")}`
    }
  ).optional()
}).default({});

// src/zod/build/main.ts
var buildOnlySchema = zod.z.object({
  database: databaseBuildSchema.default({}),
  additionalUserContent
}).default({});

exports.buildOnlySchema = buildOnlySchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map