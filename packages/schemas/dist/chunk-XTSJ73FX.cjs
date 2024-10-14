"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEFKELPUCcjs = require('./chunk-EFKELPUC.cjs');


var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/NestedEnumImageAlignmentWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedEnumImageAlignmentWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).optional(),
  in: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema), _zod.z.lazy(() => NestedEnumImageAlignmentWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkEFKELPUCcjs.NestedEnumImageAlignmentFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkEFKELPUCcjs.NestedEnumImageAlignmentFilterSchema).optional()
}).strict();
var NestedEnumImageAlignmentWithAggregatesFilterSchema_default = NestedEnumImageAlignmentWithAggregatesFilterSchema;




exports.NestedEnumImageAlignmentWithAggregatesFilterSchema = NestedEnumImageAlignmentWithAggregatesFilterSchema; exports.NestedEnumImageAlignmentWithAggregatesFilterSchema_default = NestedEnumImageAlignmentWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-XTSJ73FX.cjs.map