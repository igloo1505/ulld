"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkAMQFLT7Scjs = require('./chunk-AMQFLT7S.cjs');

// src/zod/build/database/database.ts
var _zod = require('zod');
var ulldSupportedDatabases = [
  "postgres",
  "sqlite"
];
var databaseBuildSchema = _zod.z.object({
  type: _zod.z.enum(ulldSupportedDatabases).default("postgres"),
  postgres: _chunkAMQFLT7Scjs.postgresConfigSchema,
  prioritize: _zod.z.union([_zod.z.literal("speed"), _zod.z.literal("size")]).default("speed")
}).default({}).refine(
  (data) => !Boolean(data.type === "postgres" && !data.postgres),
  {
    message: "If you set the database type to 'Postgres', you must also provide a postgres configuration with either a port number and a database name, or a connection URI."
  }
);
var databaseBuildSchemaOutput = _zod.z.object({
  type: _zod.z.enum(ulldSupportedDatabases),
  postgres: _chunkAMQFLT7Scjs.postgresConfigSchemaOutput,
  prioritize: _zod.z.union([_zod.z.literal("speed"), _zod.z.literal("size")])
});





exports.ulldSupportedDatabases = ulldSupportedDatabases; exports.databaseBuildSchema = databaseBuildSchema; exports.databaseBuildSchemaOutput = databaseBuildSchemaOutput;
//# sourceMappingURL=chunk-ZKCGUJQB.cjs.map