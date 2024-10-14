"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6Z7CI7W2cjs = require('./chunk-6Z7CI7W2.cjs');


var _chunkY6DPRYUTcjs = require('./chunk-Y6DPRYUT.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY6DPRYUTcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk6Z7CI7W2cjs.MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema = MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-W4EZMI4H.cjs.map