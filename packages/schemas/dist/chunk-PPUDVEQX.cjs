"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/JsonNullValueFilterSchema.ts
var _zod = require('zod');
var _db = require('@ulld/database/db');
var JsonNullValueFilterSchema = _zod.z.enum(["DbNull", "JsonNull", "AnyNull"]).transform((value) => value === "JsonNull" ? _db.Prisma.JsonNull : value === "DbNull" ? _db.Prisma.JsonNull : value === "AnyNull" ? _db.Prisma.AnyNull : value);



exports.JsonNullValueFilterSchema = JsonNullValueFilterSchema;
//# sourceMappingURL=chunk-PPUDVEQX.cjs.map