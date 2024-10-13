"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZQG2YPX5cjs = require('./chunk-ZQG2YPX5.cjs');


var _chunkR4IOOT2Acjs = require('./chunk-R4IOOT2A.cjs');


var _chunk2BQ62HRTcjs = require('./chunk-2BQ62HRT.cjs');

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var QAPairUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkR4IOOT2Acjs.QAPairScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2BQ62HRTcjs.QAPairUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkZQG2YPX5cjs.QAPairUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutSubjectsInputSchema_default = QAPairUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.QAPairUpdateManyWithWhereWithoutSubjectsInputSchema = QAPairUpdateManyWithWhereWithoutSubjectsInputSchema; exports.QAPairUpdateManyWithWhereWithoutSubjectsInputSchema_default = QAPairUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-4U52L735.cjs.map