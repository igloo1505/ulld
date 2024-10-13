"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP2KDMTUKcjs = require('./chunk-P2KDMTUK.cjs');


var _chunkTMKIIRIDcjs = require('./chunk-TMKIIRID.cjs');


var _chunkJTAZDJIFcjs = require('./chunk-JTAZDJIF.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkTMKIIRIDcjs.PracticeExamScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJTAZDJIFcjs.PracticeExamUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkP2KDMTUKcjs.PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema;




exports.PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema = PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema; exports.PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default;
//# sourceMappingURL=chunk-YP3WIRZ5.cjs.map