"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/QAPairScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var QAPairScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  question: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  answer: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional()
}).strict();
var QAPairScalarWhereWithAggregatesInputSchema_default = QAPairScalarWhereWithAggregatesInputSchema;




exports.QAPairScalarWhereWithAggregatesInputSchema = QAPairScalarWhereWithAggregatesInputSchema; exports.QAPairScalarWhereWithAggregatesInputSchema_default = QAPairScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-HOROLBEQ.cjs.map