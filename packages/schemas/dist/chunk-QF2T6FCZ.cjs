"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/JsonValueSchema.ts
var _zod = require('zod');
var JsonValueSchema = _zod.z.lazy(
  () => _zod.z.union([
    _zod.z.string(),
    _zod.z.number(),
    _zod.z.boolean(),
    _zod.z.literal(null),
    _zod.z.record(_zod.z.lazy(() => JsonValueSchema.optional())),
    _zod.z.array(_zod.z.lazy(() => JsonValueSchema))
  ])
);
var JsonValueSchema_default = JsonValueSchema;




exports.JsonValueSchema = JsonValueSchema; exports.JsonValueSchema_default = JsonValueSchema_default;
//# sourceMappingURL=chunk-QF2T6FCZ.cjs.map