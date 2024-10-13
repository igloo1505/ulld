"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWBLGHXQAcjs = require('./chunk-WBLGHXQA.cjs');


var _chunkB2IKYOMUcjs = require('./chunk-B2IKYOMU.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanbanUpdateManyArgsSchema.ts
var _zod = require('zod');
var KanbanUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkB2IKYOMUcjs.KanbanUpdateManyMutationInputSchema, _chunkWBLGHXQAcjs.KanbanUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.KanbanWhereInputSchema.optional()
}).strict();
var KanbanUpdateManyArgsSchema_default = KanbanUpdateManyArgsSchema;




exports.KanbanUpdateManyArgsSchema = KanbanUpdateManyArgsSchema; exports.KanbanUpdateManyArgsSchema_default = KanbanUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-QEMZ7VNE.cjs.map