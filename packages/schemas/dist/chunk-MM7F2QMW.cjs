"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNIE5M4GScjs = require('./chunk-NIE5M4GS.cjs');


var _chunkTMKIIRIDcjs = require('./chunk-TMKIIRID.cjs');


var _chunkJTAZDJIFcjs = require('./chunk-JTAZDJIF.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkTMKIIRIDcjs.PracticeExamScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJTAZDJIFcjs.PracticeExamUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkNIE5M4GScjs.PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema;




exports.PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema = PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema; exports.PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-MM7F2QMW.cjs.map