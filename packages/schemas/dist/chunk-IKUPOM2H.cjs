"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/TagUncheckedUpdateManyWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var TagUncheckedUpdateManyWithoutBibEntriesInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TagUncheckedUpdateManyWithoutBibEntriesInputSchema_default = TagUncheckedUpdateManyWithoutBibEntriesInputSchema;




exports.TagUncheckedUpdateManyWithoutBibEntriesInputSchema = TagUncheckedUpdateManyWithoutBibEntriesInputSchema; exports.TagUncheckedUpdateManyWithoutBibEntriesInputSchema_default = TagUncheckedUpdateManyWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-IKUPOM2H.cjs.map