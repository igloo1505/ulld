"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDYUIWNO7cjs = require('./chunk-DYUIWNO7.cjs');


var _chunkY6DPRYUTcjs = require('./chunk-Y6DPRYUT.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY6DPRYUTcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkDYUIWNO7cjs.MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema = MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default;
//# sourceMappingURL=chunk-YHMZREKG.cjs.map