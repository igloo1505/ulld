"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkTDJCCTB6cjs = require('./chunk-TDJCCTB6.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/DJTScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DJTScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTDJCCTB6cjs.BytesWithAggregatesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict();
var DJTScalarWhereWithAggregatesInputSchema_default = DJTScalarWhereWithAggregatesInputSchema;




exports.DJTScalarWhereWithAggregatesInputSchema = DJTScalarWhereWithAggregatesInputSchema; exports.DJTScalarWhereWithAggregatesInputSchema_default = DJTScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-3H7II5AU.cjs.map