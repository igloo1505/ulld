"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk665GVJ5Vcjs = require('./chunk-665GVJ5V.cjs');

// src/database/inputTypeSchemas/BoolFilterSchema.ts
var _zod = require('zod');
var BoolFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk665GVJ5Vcjs.NestedBoolFilterSchema)]).optional()
}).strict();
var BoolFilterSchema_default = BoolFilterSchema;




exports.BoolFilterSchema = BoolFilterSchema; exports.BoolFilterSchema_default = BoolFilterSchema_default;
//# sourceMappingURL=chunk-OVUGA3P5.cjs.map