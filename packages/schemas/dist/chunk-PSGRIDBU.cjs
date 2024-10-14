"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/ReadingListUpdateInputSchema.ts
var _zod = require('zod');
var ReadingListUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  bibEntries: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUpdateManyWithoutReadingListNestedInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUpdateManyWithoutReadingListNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.IpynbUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();
var ReadingListUpdateInputSchema_default = ReadingListUpdateInputSchema;




exports.ReadingListUpdateInputSchema = ReadingListUpdateInputSchema; exports.ReadingListUpdateInputSchema_default = ReadingListUpdateInputSchema_default;
//# sourceMappingURL=chunk-PSGRIDBU.cjs.map