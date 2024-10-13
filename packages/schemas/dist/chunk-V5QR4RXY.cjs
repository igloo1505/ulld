"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3PFPPHFLcjs = require('./chunk-3PFPPHFL.cjs');

// src/database/inputTypeSchemas/NestedEnumImageAlignmentFilterSchema.ts
var _zod = require('zod');
var NestedEnumImageAlignmentFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).optional(),
  in: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema), _zod.z.lazy(() => NestedEnumImageAlignmentFilterSchema)]).optional()
}).strict();
var NestedEnumImageAlignmentFilterSchema_default = NestedEnumImageAlignmentFilterSchema;




exports.NestedEnumImageAlignmentFilterSchema = NestedEnumImageAlignmentFilterSchema; exports.NestedEnumImageAlignmentFilterSchema_default = NestedEnumImageAlignmentFilterSchema_default;
//# sourceMappingURL=chunk-V5QR4RXY.cjs.map