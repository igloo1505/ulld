"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXBS6SUFIcjs = require('./chunk-XBS6SUFI.cjs');


var _chunkQOZ4VIARcjs = require('./chunk-QOZ4VIAR.cjs');


var _chunkTKXKCQMXcjs = require('./chunk-TKXKCQMX.cjs');

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQOZ4VIARcjs.QAPairScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTKXKCQMXcjs.QAPairUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkXBS6SUFIcjs.QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema_default = QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema;




exports.QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema = QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema; exports.QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema_default = QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-TQO45RYO.cjs.map