"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkABZ44MJBcjs = require('./chunk-ABZ44MJB.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkABZ44MJBcjs.SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema_default = SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema;




exports.SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema = SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema; exports.SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema_default = SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-QZUPV6GE.cjs.map