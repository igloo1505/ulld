"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5U32MAL7cjs = require('./chunk-5U32MAL7.cjs');


var _chunkY6DPRYUTcjs = require('./chunk-Y6DPRYUT.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY6DPRYUTcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5U32MAL7cjs.MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema = MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-72QSO5P7.cjs.map