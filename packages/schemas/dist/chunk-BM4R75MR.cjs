"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2UTLPTAScjs = require('./chunk-2UTLPTAS.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/WhiteboardScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var WhiteboardScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2UTLPTAScjs.BytesWithAggregatesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict();
var WhiteboardScalarWhereWithAggregatesInputSchema_default = WhiteboardScalarWhereWithAggregatesInputSchema;




exports.WhiteboardScalarWhereWithAggregatesInputSchema = WhiteboardScalarWhereWithAggregatesInputSchema; exports.WhiteboardScalarWhereWithAggregatesInputSchema_default = WhiteboardScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-BM4R75MR.cjs.map