"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5SXLXQ2Zcjs = require('./chunk-5SXLXQ2Z.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutPracticeExamInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5SXLXQ2Zcjs.TagUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TagUpdateManyWithWhereWithoutPracticeExamInputSchema;




exports.TagUpdateManyWithWhereWithoutPracticeExamInputSchema = TagUpdateManyWithWhereWithoutPracticeExamInputSchema; exports.TagUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TagUpdateManyWithWhereWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-36BGIMM2.cjs.map