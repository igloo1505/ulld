"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/BibUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var BibUpdateManyMutationInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  filename: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var BibUpdateManyMutationInputSchema_default = BibUpdateManyMutationInputSchema;




exports.BibUpdateManyMutationInputSchema = BibUpdateManyMutationInputSchema; exports.BibUpdateManyMutationInputSchema_default = BibUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-3W3U32JI.cjs.map