"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXTSJ73FXcjs = require('./chunk-XTSJ73FX.cjs');


var _chunkEFKELPUCcjs = require('./chunk-EFKELPUC.cjs');


var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/EnumImageAlignmentWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumImageAlignmentWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).optional(),
  in: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema), _zod.z.lazy(() => _chunkXTSJ73FXcjs.NestedEnumImageAlignmentWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkEFKELPUCcjs.NestedEnumImageAlignmentFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkEFKELPUCcjs.NestedEnumImageAlignmentFilterSchema).optional()
}).strict();
var EnumImageAlignmentWithAggregatesFilterSchema_default = EnumImageAlignmentWithAggregatesFilterSchema;




exports.EnumImageAlignmentWithAggregatesFilterSchema = EnumImageAlignmentWithAggregatesFilterSchema; exports.EnumImageAlignmentWithAggregatesFilterSchema_default = EnumImageAlignmentWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-WO6J2IR6.cjs.map