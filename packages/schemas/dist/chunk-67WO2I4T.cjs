"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');

// src/database/inputTypeSchemas/PracticeExamScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var PracticeExamScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  date: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var PracticeExamScalarWhereWithAggregatesInputSchema_default = PracticeExamScalarWhereWithAggregatesInputSchema;




exports.PracticeExamScalarWhereWithAggregatesInputSchema = PracticeExamScalarWhereWithAggregatesInputSchema; exports.PracticeExamScalarWhereWithAggregatesInputSchema_default = PracticeExamScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-67WO2I4T.cjs.map