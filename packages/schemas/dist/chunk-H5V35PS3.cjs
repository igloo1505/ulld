"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDXFGLFRCcjs = require('./chunk-DXFGLFRC.cjs');

// src/database/inputTypeSchemas/ToDoCreateManyToDoListInputEnvelopeSchema.ts
var _zod = require('zod');
var ToDoCreateManyToDoListInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkDXFGLFRCcjs.ToDoCreateManyToDoListInputSchema), _zod.z.lazy(() => _chunkDXFGLFRCcjs.ToDoCreateManyToDoListInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoCreateManyToDoListInputEnvelopeSchema_default = ToDoCreateManyToDoListInputEnvelopeSchema;




exports.ToDoCreateManyToDoListInputEnvelopeSchema = ToDoCreateManyToDoListInputEnvelopeSchema; exports.ToDoCreateManyToDoListInputEnvelopeSchema_default = ToDoCreateManyToDoListInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-H5V35PS3.cjs.map