"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX3IUE4SZcjs = require('./chunk-X3IUE4SZ.cjs');


var _chunkBIWA4KBMcjs = require('./chunk-BIWA4KBM.cjs');


var _chunk2OGHJHKWcjs = require('./chunk-2OGHJHKW.cjs');


var _chunkOWZ2G26Ucjs = require('./chunk-OWZ2G26U.cjs');


var _chunkXXZRA6QOcjs = require('./chunk-XXZRA6QO.cjs');


var _chunkBLNJLJTOcjs = require('./chunk-BLNJLJTO.cjs');


var _chunkAUZHGVMKcjs = require('./chunk-AUZHGVMK.cjs');


var _chunkUMJSYVHXcjs = require('./chunk-UMJSYVHX.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/KanbanUpdateOneWithoutListsNestedInputSchema.ts
var _zod = require('zod');
var KanbanUpdateOneWithoutListsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkBLNJLJTOcjs.KanbanCreateWithoutListsInputSchema), _zod.z.lazy(() => _chunkAUZHGVMKcjs.KanbanUncheckedCreateWithoutListsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkXXZRA6QOcjs.KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkBIWA4KBMcjs.KanbanUpsertWithoutListsInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkUMJSYVHXcjs.KanbanWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkX3IUE4SZcjs.KanbanUpdateToOneWithWhereWithoutListsInputSchema), _zod.z.lazy(() => _chunkOWZ2G26Ucjs.KanbanUpdateWithoutListsInputSchema), _zod.z.lazy(() => _chunk2OGHJHKWcjs.KanbanUncheckedUpdateWithoutListsInputSchema)]).optional()
}).strict();
var KanbanUpdateOneWithoutListsNestedInputSchema_default = KanbanUpdateOneWithoutListsNestedInputSchema;




exports.KanbanUpdateOneWithoutListsNestedInputSchema = KanbanUpdateOneWithoutListsNestedInputSchema; exports.KanbanUpdateOneWithoutListsNestedInputSchema_default = KanbanUpdateOneWithoutListsNestedInputSchema_default;
//# sourceMappingURL=chunk-LQQ43QUS.cjs.map