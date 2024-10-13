"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX56T5H5Xcjs = require('./chunk-X56T5H5X.cjs');

// src/database/inputTypeSchemas/ToDoCreateManyParentInputEnvelopeSchema.ts
var _zod = require('zod');
var ToDoCreateManyParentInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkX56T5H5Xcjs.ToDoCreateManyParentInputSchema), _zod.z.lazy(() => _chunkX56T5H5Xcjs.ToDoCreateManyParentInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoCreateManyParentInputEnvelopeSchema_default = ToDoCreateManyParentInputEnvelopeSchema;




exports.ToDoCreateManyParentInputEnvelopeSchema = ToDoCreateManyParentInputEnvelopeSchema; exports.ToDoCreateManyParentInputEnvelopeSchema_default = ToDoCreateManyParentInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-7FOA2ZUW.cjs.map