"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/QAPairScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var QAPairScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  question: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  answer: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional()
}).strict();
var QAPairScalarWhereWithAggregatesInputSchema_default = QAPairScalarWhereWithAggregatesInputSchema;




exports.QAPairScalarWhereWithAggregatesInputSchema = QAPairScalarWhereWithAggregatesInputSchema; exports.QAPairScalarWhereWithAggregatesInputSchema_default = QAPairScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-M3EUTZFQ.cjs.map