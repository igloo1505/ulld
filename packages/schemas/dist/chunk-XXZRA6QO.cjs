"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBLNJLJTOcjs = require('./chunk-BLNJLJTO.cjs');


var _chunkAUZHGVMKcjs = require('./chunk-AUZHGVMK.cjs');


var _chunkUMJSYVHXcjs = require('./chunk-UMJSYVHX.cjs');

// src/database/inputTypeSchemas/KanbanCreateOrConnectWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanCreateOrConnectWithoutListsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUMJSYVHXcjs.KanbanWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkBLNJLJTOcjs.KanbanCreateWithoutListsInputSchema), _zod.z.lazy(() => _chunkAUZHGVMKcjs.KanbanUncheckedCreateWithoutListsInputSchema)])
}).strict();
var KanbanCreateOrConnectWithoutListsInputSchema_default = KanbanCreateOrConnectWithoutListsInputSchema;




exports.KanbanCreateOrConnectWithoutListsInputSchema = KanbanCreateOrConnectWithoutListsInputSchema; exports.KanbanCreateOrConnectWithoutListsInputSchema_default = KanbanCreateOrConnectWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-XXZRA6QO.cjs.map