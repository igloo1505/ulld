"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDZMYDVTOcjs = require('./chunk-DZMYDVTO.cjs');


var _chunkFSPKHZ3Xcjs = require('./chunk-FSPKHZ3X.cjs');


var _chunk4ASRITDCcjs = require('./chunk-4ASRITDC.cjs');


var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkHE3TXQGOcjs = require('./chunk-HE3TXQGO.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/DietaryItemScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DietaryItemScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunkFSPKHZ3Xcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  glutenFree: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  minimalFructose: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  natural: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  organic: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  impactScore: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional()
}).strict();
var DietaryItemScalarWhereWithAggregatesInputSchema_default = DietaryItemScalarWhereWithAggregatesInputSchema;




exports.DietaryItemScalarWhereWithAggregatesInputSchema = DietaryItemScalarWhereWithAggregatesInputSchema; exports.DietaryItemScalarWhereWithAggregatesInputSchema_default = DietaryItemScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-C53BY72M.cjs.map