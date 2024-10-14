"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSTHMJB6Ycjs = require('./chunk-STHMJB6Y.cjs');


var _chunkY6DPRYUTcjs = require('./chunk-Y6DPRYUT.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY6DPRYUTcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkSTHMJB6Ycjs.MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema = MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default;
//# sourceMappingURL=chunk-KVLRESMQ.cjs.map