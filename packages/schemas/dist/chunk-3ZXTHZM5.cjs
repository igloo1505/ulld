"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/PracticeExamScalarWhereInputSchema.ts
var _zod = require('zod');
var PracticeExamScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => PracticeExamScalarWhereInputSchema), _zod.z.lazy(() => PracticeExamScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => PracticeExamScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => PracticeExamScalarWhereInputSchema), _zod.z.lazy(() => PracticeExamScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  date: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var PracticeExamScalarWhereInputSchema_default = PracticeExamScalarWhereInputSchema;




exports.PracticeExamScalarWhereInputSchema = PracticeExamScalarWhereInputSchema; exports.PracticeExamScalarWhereInputSchema_default = PracticeExamScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-3ZXTHZM5.cjs.map