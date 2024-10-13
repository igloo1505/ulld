"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2UEMVSTCcjs = require('./chunk-2UEMVSTC.cjs');

// src/database/outputTypeSchemas/KanbanCreateManyArgsSchema.ts
var _zod = require('zod');
var KanbanCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk2UEMVSTCcjs.KanbanCreateManyInputSchema, _chunk2UEMVSTCcjs.KanbanCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanbanCreateManyArgsSchema_default = KanbanCreateManyArgsSchema;




exports.KanbanCreateManyArgsSchema = KanbanCreateManyArgsSchema; exports.KanbanCreateManyArgsSchema_default = KanbanCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-AVGR3YQY.cjs.map