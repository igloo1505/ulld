"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGS5SIMMRcjs = require('./chunk-GS5SIMMR.cjs');

// src/database/inputTypeSchemas/ToDoCreateManyParentInputEnvelopeSchema.ts
var _zod = require('zod');
var ToDoCreateManyParentInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkGS5SIMMRcjs.ToDoCreateManyParentInputSchema), _zod.z.lazy(() => _chunkGS5SIMMRcjs.ToDoCreateManyParentInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoCreateManyParentInputEnvelopeSchema_default = ToDoCreateManyParentInputEnvelopeSchema;




exports.ToDoCreateManyParentInputEnvelopeSchema = ToDoCreateManyParentInputEnvelopeSchema; exports.ToDoCreateManyParentInputEnvelopeSchema_default = ToDoCreateManyParentInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-EDC5Q2AM.cjs.map