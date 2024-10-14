"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE7QFOSD5cjs = require('./chunk-E7QFOSD5.cjs');


var _chunk3ZXTHZM5cjs = require('./chunk-3ZXTHZM5.cjs');


var _chunkVD3LYJVPcjs = require('./chunk-VD3LYJVP.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3ZXTHZM5cjs.PracticeExamScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVD3LYJVPcjs.PracticeExamUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkE7QFOSD5cjs.PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema = PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema; exports.PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-MPMLB7UE.cjs.map