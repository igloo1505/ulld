"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5ALUGBZ5cjs = require('./chunk-5ALUGBZ5.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5ALUGBZ5cjs.SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema_default = SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema;




exports.SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema = SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema; exports.SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema_default = SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-A3AJNWPV.cjs.map