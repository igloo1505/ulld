"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV34JJPFLcjs = require('./chunk-V34JJPFL.cjs');


var _chunkR4IOOT2Acjs = require('./chunk-R4IOOT2A.cjs');


var _chunk2BQ62HRTcjs = require('./chunk-2BQ62HRT.cjs');

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkR4IOOT2Acjs.QAPairScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2BQ62HRTcjs.QAPairUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkV34JJPFLcjs.QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema_default = QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema;




exports.QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema = QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema; exports.QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema_default = QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-6IUPEKNC.cjs.map