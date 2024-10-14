"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/JsonNullValueInputSchema.ts
var _zod = require('zod');
var _db = require('@ulld/database/db');
var JsonNullValueInputSchema = _zod.z.enum(["JsonNull"]).transform((value) => value === "JsonNull" ? _db.Prisma.JsonNull : value);



exports.JsonNullValueInputSchema = JsonNullValueInputSchema;
//# sourceMappingURL=chunk-ZI4N5EPR.cjs.map