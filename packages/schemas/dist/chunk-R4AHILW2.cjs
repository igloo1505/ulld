"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/TagUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var TagUncheckedUpdateManyInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TagUncheckedUpdateManyInputSchema_default = TagUncheckedUpdateManyInputSchema;




exports.TagUncheckedUpdateManyInputSchema = TagUncheckedUpdateManyInputSchema; exports.TagUncheckedUpdateManyInputSchema_default = TagUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-R4AHILW2.cjs.map