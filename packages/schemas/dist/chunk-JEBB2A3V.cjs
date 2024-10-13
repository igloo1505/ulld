"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2UEMVSTCcjs = require('./chunk-2UEMVSTC.cjs');

// src/database/outputTypeSchemas/KanbanCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var KanbanCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk2UEMVSTCcjs.KanbanCreateManyInputSchema, _chunk2UEMVSTCcjs.KanbanCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanbanCreateManyAndReturnArgsSchema_default = KanbanCreateManyAndReturnArgsSchema;




exports.KanbanCreateManyAndReturnArgsSchema = KanbanCreateManyAndReturnArgsSchema; exports.KanbanCreateManyAndReturnArgsSchema_default = KanbanCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-JEBB2A3V.cjs.map