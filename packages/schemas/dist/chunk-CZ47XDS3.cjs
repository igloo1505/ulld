"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEBLHCTYOcjs = require('./chunk-EBLHCTYO.cjs');


var _chunk3ZXTHZM5cjs = require('./chunk-3ZXTHZM5.cjs');


var _chunkVD3LYJVPcjs = require('./chunk-VD3LYJVP.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3ZXTHZM5cjs.PracticeExamScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVD3LYJVPcjs.PracticeExamUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkEBLHCTYOcjs.PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema;




exports.PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema = PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema; exports.PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default;
//# sourceMappingURL=chunk-CZ47XDS3.cjs.map