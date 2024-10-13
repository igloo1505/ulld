"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRFJB3LZHcjs = require('./chunk-RFJB3LZH.cjs');

// src/database/inputTypeSchemas/ToDoCreateManyToDoListInputEnvelopeSchema.ts
var _zod = require('zod');
var ToDoCreateManyToDoListInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkRFJB3LZHcjs.ToDoCreateManyToDoListInputSchema), _zod.z.lazy(() => _chunkRFJB3LZHcjs.ToDoCreateManyToDoListInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoCreateManyToDoListInputEnvelopeSchema_default = ToDoCreateManyToDoListInputEnvelopeSchema;




exports.ToDoCreateManyToDoListInputEnvelopeSchema = ToDoCreateManyToDoListInputEnvelopeSchema; exports.ToDoCreateManyToDoListInputEnvelopeSchema_default = ToDoCreateManyToDoListInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-HGYHYY6K.cjs.map