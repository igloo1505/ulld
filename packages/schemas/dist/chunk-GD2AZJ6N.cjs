"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/RandomImageUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var RandomImageUpdateManyMutationInputSchema = _zod.z.object({
  path: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var RandomImageUpdateManyMutationInputSchema_default = RandomImageUpdateManyMutationInputSchema;




exports.RandomImageUpdateManyMutationInputSchema = RandomImageUpdateManyMutationInputSchema; exports.RandomImageUpdateManyMutationInputSchema_default = RandomImageUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-GD2AZJ6N.cjs.map