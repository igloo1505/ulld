"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEFKELPUCcjs = require('./chunk-EFKELPUC.cjs');


var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');

// src/database/inputTypeSchemas/EnumImageAlignmentFilterSchema.ts
var _zod = require('zod');
var EnumImageAlignmentFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).optional(),
  in: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema), _zod.z.lazy(() => _chunkEFKELPUCcjs.NestedEnumImageAlignmentFilterSchema)]).optional()
}).strict();
var EnumImageAlignmentFilterSchema_default = EnumImageAlignmentFilterSchema;




exports.EnumImageAlignmentFilterSchema = EnumImageAlignmentFilterSchema; exports.EnumImageAlignmentFilterSchema_default = EnumImageAlignmentFilterSchema_default;
//# sourceMappingURL=chunk-PUUCVPZ6.cjs.map