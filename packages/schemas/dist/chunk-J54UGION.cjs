"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/SequentialNoteListUncheckedCreateInputSchema.ts
var _zod = require('zod');
var SequentialNoteListUncheckedCreateInputSchema = _zod.z.object({
  sequentialKey: _zod.z.string(),
  MdxNote: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
var SequentialNoteListUncheckedCreateInputSchema_default = SequentialNoteListUncheckedCreateInputSchema;




exports.SequentialNoteListUncheckedCreateInputSchema = SequentialNoteListUncheckedCreateInputSchema; exports.SequentialNoteListUncheckedCreateInputSchema_default = SequentialNoteListUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-J54UGION.cjs.map