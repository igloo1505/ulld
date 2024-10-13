"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2OGHJHKWcjs = require('./chunk-2OGHJHKW.cjs');


var _chunkOWZ2G26Ucjs = require('./chunk-OWZ2G26U.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/KanbanUpdateToOneWithWhereWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanUpdateToOneWithWhereWithoutListsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOWZ2G26Ucjs.KanbanUpdateWithoutListsInputSchema), _zod.z.lazy(() => _chunk2OGHJHKWcjs.KanbanUncheckedUpdateWithoutListsInputSchema)])
}).strict();
var KanbanUpdateToOneWithWhereWithoutListsInputSchema_default = KanbanUpdateToOneWithWhereWithoutListsInputSchema;




exports.KanbanUpdateToOneWithWhereWithoutListsInputSchema = KanbanUpdateToOneWithWhereWithoutListsInputSchema; exports.KanbanUpdateToOneWithWhereWithoutListsInputSchema_default = KanbanUpdateToOneWithWhereWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-X3IUE4SZ.cjs.map