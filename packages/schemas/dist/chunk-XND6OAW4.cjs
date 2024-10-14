"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFO4EZ2V4cjs = require('./chunk-FO4EZ2V4.cjs');


var _chunkY6DPRYUTcjs = require('./chunk-Y6DPRYUT.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY6DPRYUTcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkFO4EZ2V4cjs.MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema = MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default;
//# sourceMappingURL=chunk-XND6OAW4.cjs.map