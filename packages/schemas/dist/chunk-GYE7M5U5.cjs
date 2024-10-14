"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/RandomImageUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var RandomImageUncheckedUpdateManyInputSchema = _zod.z.object({
  path: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var RandomImageUncheckedUpdateManyInputSchema_default = RandomImageUncheckedUpdateManyInputSchema;




exports.RandomImageUncheckedUpdateManyInputSchema = RandomImageUncheckedUpdateManyInputSchema; exports.RandomImageUncheckedUpdateManyInputSchema_default = RandomImageUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-GYE7M5U5.cjs.map