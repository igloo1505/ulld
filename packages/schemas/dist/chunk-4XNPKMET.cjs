"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXQQC2RRBcjs = require('./chunk-XQQC2RRB.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/BibUpdateInputSchema.ts
var _zod = require('zod');
var BibUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  filename: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  entries: _zod.z.lazy(() => _chunkXQQC2RRBcjs.BibEntryUpdateManyWithoutBibNestedInputSchema).optional()
}).strict();
var BibUpdateInputSchema_default = BibUpdateInputSchema;




exports.BibUpdateInputSchema = BibUpdateInputSchema; exports.BibUpdateInputSchema_default = BibUpdateInputSchema_default;
//# sourceMappingURL=chunk-4XNPKMET.cjs.map