"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIKSV4MZScjs = require('./chunk-IKSV4MZS.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/BibUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var BibUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  filename: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  entries: _zod.z.lazy(() => _chunkIKSV4MZScjs.BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema).optional()
}).strict();
var BibUncheckedUpdateInputSchema_default = BibUncheckedUpdateInputSchema;




exports.BibUncheckedUpdateInputSchema = BibUncheckedUpdateInputSchema; exports.BibUncheckedUpdateInputSchema_default = BibUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-DMS6OPAL.cjs.map