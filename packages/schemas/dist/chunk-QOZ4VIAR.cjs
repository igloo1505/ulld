"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/QAPairScalarWhereInputSchema.ts
var _zod = require('zod');
var QAPairScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QAPairScalarWhereInputSchema), _zod.z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QAPairScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QAPairScalarWhereInputSchema), _zod.z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  question: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  answer: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional()
}).strict();
var QAPairScalarWhereInputSchema_default = QAPairScalarWhereInputSchema;




exports.QAPairScalarWhereInputSchema = QAPairScalarWhereInputSchema; exports.QAPairScalarWhereInputSchema_default = QAPairScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-QOZ4VIAR.cjs.map