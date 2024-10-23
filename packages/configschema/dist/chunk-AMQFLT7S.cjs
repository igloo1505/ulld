"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/build/database/postgres.ts
var _zod = require('zod');
var postgresConfigSchema = _zod.z.object({
  port: _zod.z.coerce.number().int().default(5432),
  dbName: _zod.z.string().default("ulld"),
  connectionURI: _zod.z.string().default("")
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
var postgresConfigSchemaOutput = _zod.z.union([
  _zod.z.object({ connectionURI: _zod.z.string() }),
  _zod.z.object({
    port: _zod.z.number().int(),
    dbName: _zod.z.string()
  })
]);




exports.postgresConfigSchema = postgresConfigSchema; exports.postgresConfigSchemaOutput = postgresConfigSchemaOutput;
//# sourceMappingURL=chunk-AMQFLT7S.cjs.map