"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK7Z2KDSLcjs = require('./chunk-K7Z2KDSL.cjs');


var _chunkQOZ4VIARcjs = require('./chunk-QOZ4VIAR.cjs');


var _chunkTKXKCQMXcjs = require('./chunk-TKXKCQMX.cjs');

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var QAPairUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQOZ4VIARcjs.QAPairScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTKXKCQMXcjs.QAPairUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkK7Z2KDSLcjs.QAPairUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutSubjectsInputSchema_default = QAPairUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.QAPairUpdateManyWithWhereWithoutSubjectsInputSchema = QAPairUpdateManyWithWhereWithoutSubjectsInputSchema; exports.QAPairUpdateManyWithWhereWithoutSubjectsInputSchema_default = QAPairUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-BX2K7VPA.cjs.map