"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFLKSRUNOcjs = require('./chunk-FLKSRUNO.cjs');


var _chunk3ZXTHZM5cjs = require('./chunk-3ZXTHZM5.cjs');


var _chunkVD3LYJVPcjs = require('./chunk-VD3LYJVP.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3ZXTHZM5cjs.PracticeExamScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVD3LYJVPcjs.PracticeExamUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkFLKSRUNOcjs.PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema;




exports.PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema = PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema; exports.PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-TDW5URRK.cjs.map