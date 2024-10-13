"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/JsonNullValueFilterSchema.ts
var _zod = require('zod');
var _client = require('@prisma/client');
var JsonNullValueFilterSchema = _zod.z.enum(["DbNull", "JsonNull", "AnyNull"]).transform((value) => value === "JsonNull" ? _client.Prisma.JsonNull : value === "DbNull" ? _client.Prisma.JsonNull : value === "AnyNull" ? _client.Prisma.AnyNull : value);



exports.JsonNullValueFilterSchema = JsonNullValueFilterSchema;
//# sourceMappingURL=chunk-IKX7G3IH.cjs.map