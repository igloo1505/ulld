"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2X2IAWNUcjs = require('./chunk-2X2IAWNU.cjs');


var _chunkV5QR4RXYcjs = require('./chunk-V5QR4RXY.cjs');


var _chunk3PFPPHFLcjs = require('./chunk-3PFPPHFL.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

// src/database/inputTypeSchemas/EnumImageAlignmentWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumImageAlignmentWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).optional(),
  in: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema), _zod.z.lazy(() => _chunk2X2IAWNUcjs.NestedEnumImageAlignmentWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkV5QR4RXYcjs.NestedEnumImageAlignmentFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkV5QR4RXYcjs.NestedEnumImageAlignmentFilterSchema).optional()
}).strict();
var EnumImageAlignmentWithAggregatesFilterSchema_default = EnumImageAlignmentWithAggregatesFilterSchema;




exports.EnumImageAlignmentWithAggregatesFilterSchema = EnumImageAlignmentWithAggregatesFilterSchema; exports.EnumImageAlignmentWithAggregatesFilterSchema_default = EnumImageAlignmentWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-AMDZF4SQ.cjs.map