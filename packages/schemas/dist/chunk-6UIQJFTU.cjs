"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');

// src/database/inputTypeSchemas/PracticeExamScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var PracticeExamScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  date: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var PracticeExamScalarWhereWithAggregatesInputSchema_default = PracticeExamScalarWhereWithAggregatesInputSchema;




exports.PracticeExamScalarWhereWithAggregatesInputSchema = PracticeExamScalarWhereWithAggregatesInputSchema; exports.PracticeExamScalarWhereWithAggregatesInputSchema_default = PracticeExamScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-6UIQJFTU.cjs.map