"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/WaitlistRequestUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var WaitlistRequestUpdateManyMutationInputSchema = _zod.z.object({
  email: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  receivedOn: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  emailsSent: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WaitlistRequestUpdateManyMutationInputSchema_default = WaitlistRequestUpdateManyMutationInputSchema;




exports.WaitlistRequestUpdateManyMutationInputSchema = WaitlistRequestUpdateManyMutationInputSchema; exports.WaitlistRequestUpdateManyMutationInputSchema_default = WaitlistRequestUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-CMIG2TTI.cjs.map