"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk2UTLPTAScjs = require('./chunk-2UTLPTAS.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/DJTScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DJTScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2UTLPTAScjs.BytesWithAggregatesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict();
var DJTScalarWhereWithAggregatesInputSchema_default = DJTScalarWhereWithAggregatesInputSchema;




exports.DJTScalarWhereWithAggregatesInputSchema = DJTScalarWhereWithAggregatesInputSchema; exports.DJTScalarWhereWithAggregatesInputSchema_default = DJTScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-VBQO3RS4.cjs.map