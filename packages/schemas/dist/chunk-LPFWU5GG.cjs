"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV5QR4RXYcjs = require('./chunk-V5QR4RXY.cjs');


var _chunk3PFPPHFLcjs = require('./chunk-3PFPPHFL.cjs');

// src/database/inputTypeSchemas/EnumImageAlignmentFilterSchema.ts
var _zod = require('zod');
var EnumImageAlignmentFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).optional(),
  in: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema), _zod.z.lazy(() => _chunkV5QR4RXYcjs.NestedEnumImageAlignmentFilterSchema)]).optional()
}).strict();
var EnumImageAlignmentFilterSchema_default = EnumImageAlignmentFilterSchema;




exports.EnumImageAlignmentFilterSchema = EnumImageAlignmentFilterSchema; exports.EnumImageAlignmentFilterSchema_default = EnumImageAlignmentFilterSchema_default;
//# sourceMappingURL=chunk-LPFWU5GG.cjs.map