"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5FEYY4HDcjs = require('./chunk-5FEYY4HD.cjs');


var _chunk3ZXTHZM5cjs = require('./chunk-3ZXTHZM5.cjs');


var _chunkVD3LYJVPcjs = require('./chunk-VD3LYJVP.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3ZXTHZM5cjs.PracticeExamScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVD3LYJVPcjs.PracticeExamUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5FEYY4HDcjs.PracticeExamUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutTagsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTagsInputSchema;




exports.PracticeExamUpdateManyWithWhereWithoutTagsInputSchema = PracticeExamUpdateManyWithWhereWithoutTagsInputSchema; exports.PracticeExamUpdateManyWithWhereWithoutTagsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-MXOHMPQ4.cjs.map