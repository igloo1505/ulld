"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkISCJLZH5cjs = require('./chunk-ISCJLZH5.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutPracticeExamInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkISCJLZH5cjs.TopicUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TopicUpdateManyWithWhereWithoutPracticeExamInputSchema;




exports.TopicUpdateManyWithWhereWithoutPracticeExamInputSchema = TopicUpdateManyWithWhereWithoutPracticeExamInputSchema; exports.TopicUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TopicUpdateManyWithWhereWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-SWURI4MT.cjs.map