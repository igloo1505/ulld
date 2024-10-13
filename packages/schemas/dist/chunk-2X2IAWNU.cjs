"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV5QR4RXYcjs = require('./chunk-V5QR4RXY.cjs');


var _chunk3PFPPHFLcjs = require('./chunk-3PFPPHFL.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

// src/database/inputTypeSchemas/NestedEnumImageAlignmentWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedEnumImageAlignmentWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).optional(),
  in: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema), _zod.z.lazy(() => NestedEnumImageAlignmentWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkV5QR4RXYcjs.NestedEnumImageAlignmentFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkV5QR4RXYcjs.NestedEnumImageAlignmentFilterSchema).optional()
}).strict();
var NestedEnumImageAlignmentWithAggregatesFilterSchema_default = NestedEnumImageAlignmentWithAggregatesFilterSchema;




exports.NestedEnumImageAlignmentWithAggregatesFilterSchema = NestedEnumImageAlignmentWithAggregatesFilterSchema; exports.NestedEnumImageAlignmentWithAggregatesFilterSchema_default = NestedEnumImageAlignmentWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-2X2IAWNU.cjs.map