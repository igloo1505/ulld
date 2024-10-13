"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSOXZAWGDcjs = require('./chunk-SOXZAWGD.cjs');


var _chunkTMKIIRIDcjs = require('./chunk-TMKIIRID.cjs');


var _chunkJTAZDJIFcjs = require('./chunk-JTAZDJIF.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkTMKIIRIDcjs.PracticeExamScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJTAZDJIFcjs.PracticeExamUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkSOXZAWGDcjs.PracticeExamUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutTagsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTagsInputSchema;




exports.PracticeExamUpdateManyWithWhereWithoutTagsInputSchema = PracticeExamUpdateManyWithWhereWithoutTagsInputSchema; exports.PracticeExamUpdateManyWithWhereWithoutTagsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-6TCWOYQM.cjs.map