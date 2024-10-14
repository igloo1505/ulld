"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZMG354LMcjs = require('./chunk-ZMG354LM.cjs');


var _chunkNOHWQLUIcjs = require('./chunk-NOHWQLUI.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanbanUpdateManyArgsSchema.ts
var _zod = require('zod');
var KanbanUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkNOHWQLUIcjs.KanbanUpdateManyMutationInputSchema, _chunkZMG354LMcjs.KanbanUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.KanbanWhereInputSchema.optional()
}).strict();
var KanbanUpdateManyArgsSchema_default = KanbanUpdateManyArgsSchema;




exports.KanbanUpdateManyArgsSchema = KanbanUpdateManyArgsSchema; exports.KanbanUpdateManyArgsSchema_default = KanbanUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-JHHXBRBO.cjs.map