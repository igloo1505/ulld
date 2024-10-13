"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPYHEKERRcjs = require('./chunk-PYHEKERR.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutPracticeExamInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkPYHEKERRcjs.TopicUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TopicUpdateManyWithWhereWithoutPracticeExamInputSchema;




exports.TopicUpdateManyWithWhereWithoutPracticeExamInputSchema = TopicUpdateManyWithWhereWithoutPracticeExamInputSchema; exports.TopicUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TopicUpdateManyWithWhereWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-HXYQC6ZG.cjs.map