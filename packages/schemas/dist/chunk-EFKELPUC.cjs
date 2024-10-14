"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');

// src/database/inputTypeSchemas/NestedEnumImageAlignmentFilterSchema.ts
var _zod = require('zod');
var NestedEnumImageAlignmentFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).optional(),
  in: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema), _zod.z.lazy(() => NestedEnumImageAlignmentFilterSchema)]).optional()
}).strict();
var NestedEnumImageAlignmentFilterSchema_default = NestedEnumImageAlignmentFilterSchema;




exports.NestedEnumImageAlignmentFilterSchema = NestedEnumImageAlignmentFilterSchema; exports.NestedEnumImageAlignmentFilterSchema_default = NestedEnumImageAlignmentFilterSchema_default;
//# sourceMappingURL=chunk-EFKELPUC.cjs.map