'use strict';

var zod = require('zod');

// src/zod/build/database/postgres.ts
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

exports.postgresConfigSchema = postgresConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=postgres.cjs.map