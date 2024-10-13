"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ446KC4Vcjs = require('./chunk-J446KC4V.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutPracticeExamInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkJ446KC4Vcjs.TagUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TagUpdateManyWithWhereWithoutPracticeExamInputSchema;




exports.TagUpdateManyWithWhereWithoutPracticeExamInputSchema = TagUpdateManyWithWhereWithoutPracticeExamInputSchema; exports.TagUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TagUpdateManyWithWhereWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-DLUTGXP2.cjs.map