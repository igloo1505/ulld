"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3DJT3TC6cjs = require('./chunk-3DJT3TC6.cjs');

// src/zod/build/database/database.ts
var _zod = require('zod');
var ulldSupportedDatabases = [
  "postgres",
  "sqlite"
];
var databaseBuildSchema = _zod.z.object({
  type: _zod.z.enum(ulldSupportedDatabases).default("postgres"),
  postgres: _chunk3DJT3TC6cjs.postgresConfigSchema,
  prioritize: _zod.z.union([_zod.z.literal("speed"), _zod.z.literal("size")]).default("speed")
}).default({}).refine(
  (data) => !Boolean(data.type === "postgres" && !data.postgres),
  {
    message: "If you set the database type to 'Postgres', you must also provide a postgres configuration with either a port number and a database name, or a connection URI."
  }
);




exports.ulldSupportedDatabases = ulldSupportedDatabases; exports.databaseBuildSchema = databaseBuildSchema;
//# sourceMappingURL=chunk-5CNM4RYT.cjs.map