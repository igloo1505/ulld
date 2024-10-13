"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/JsonNullValueInputSchema.ts
var _zod = require('zod');
var _client = require('@prisma/client');
var JsonNullValueInputSchema = _zod.z.enum(["JsonNull"]).transform((value) => value === "JsonNull" ? _client.Prisma.JsonNull : value);



exports.JsonNullValueInputSchema = JsonNullValueInputSchema;
//# sourceMappingURL=chunk-TD2WYWGA.cjs.map