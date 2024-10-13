"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLZYU55DMcjs = require('./chunk-LZYU55DM.cjs');


var _chunkTMKIIRIDcjs = require('./chunk-TMKIIRID.cjs');


var _chunkJTAZDJIFcjs = require('./chunk-JTAZDJIF.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkTMKIIRIDcjs.PracticeExamScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJTAZDJIFcjs.PracticeExamUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkLZYU55DMcjs.PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema = PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema; exports.PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-R7E62E5P.cjs.map