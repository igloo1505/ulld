"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2OGHJHKWcjs = require('./chunk-2OGHJHKW.cjs');


var _chunkOWZ2G26Ucjs = require('./chunk-OWZ2G26U.cjs');


var _chunkBLNJLJTOcjs = require('./chunk-BLNJLJTO.cjs');


var _chunkAUZHGVMKcjs = require('./chunk-AUZHGVMK.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/KanbanUpsertWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanUpsertWithoutListsInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkOWZ2G26Ucjs.KanbanUpdateWithoutListsInputSchema), _zod.z.lazy(() => _chunk2OGHJHKWcjs.KanbanUncheckedUpdateWithoutListsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkBLNJLJTOcjs.KanbanCreateWithoutListsInputSchema), _zod.z.lazy(() => _chunkAUZHGVMKcjs.KanbanUncheckedCreateWithoutListsInputSchema)]),
  where: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema).optional()
}).strict();
var KanbanUpsertWithoutListsInputSchema_default = KanbanUpsertWithoutListsInputSchema;




exports.KanbanUpsertWithoutListsInputSchema = KanbanUpsertWithoutListsInputSchema; exports.KanbanUpsertWithoutListsInputSchema_default = KanbanUpsertWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-BIWA4KBM.cjs.map