"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDV3VCJV4cjs = require('./chunk-DV3VCJV4.cjs');


var _chunkY6DPRYUTcjs = require('./chunk-Y6DPRYUT.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY6DPRYUTcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkDV3VCJV4cjs.MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema = MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-YJZ53AO6.cjs.map