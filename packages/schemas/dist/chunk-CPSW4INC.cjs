"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/InputJsonValueSchema.ts
var _zod = require('zod');
var InputJsonValueSchema = _zod.z.lazy(
  () => _zod.z.union([
    _zod.z.string(),
    _zod.z.number(),
    _zod.z.boolean(),
    _zod.z.object({ toJSON: _zod.z.function(_zod.z.tuple([]), _zod.z.any()) }),
    _zod.z.record(_zod.z.lazy(() => _zod.z.union([InputJsonValueSchema, _zod.z.literal(null)]))),
    _zod.z.array(_zod.z.lazy(() => _zod.z.union([InputJsonValueSchema, _zod.z.literal(null)])))
  ])
);
var InputJsonValueSchema_default = InputJsonValueSchema;




exports.InputJsonValueSchema = InputJsonValueSchema; exports.InputJsonValueSchema_default = InputJsonValueSchema_default;
//# sourceMappingURL=chunk-CPSW4INC.cjs.map