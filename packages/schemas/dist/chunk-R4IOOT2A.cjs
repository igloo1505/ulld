"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/QAPairScalarWhereInputSchema.ts
var _zod = require('zod');
var QAPairScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QAPairScalarWhereInputSchema), _zod.z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QAPairScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QAPairScalarWhereInputSchema), _zod.z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  question: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  answer: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional()
}).strict();
var QAPairScalarWhereInputSchema_default = QAPairScalarWhereInputSchema;




exports.QAPairScalarWhereInputSchema = QAPairScalarWhereInputSchema; exports.QAPairScalarWhereInputSchema_default = QAPairScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-R4IOOT2A.cjs.map