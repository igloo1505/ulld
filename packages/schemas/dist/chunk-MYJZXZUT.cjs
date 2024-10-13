"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXXZRA6QOcjs = require('./chunk-XXZRA6QO.cjs');


var _chunkBLNJLJTOcjs = require('./chunk-BLNJLJTO.cjs');


var _chunkAUZHGVMKcjs = require('./chunk-AUZHGVMK.cjs');


var _chunkUMJSYVHXcjs = require('./chunk-UMJSYVHX.cjs');

// src/database/inputTypeSchemas/KanbanCreateNestedOneWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanCreateNestedOneWithoutListsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkBLNJLJTOcjs.KanbanCreateWithoutListsInputSchema), _zod.z.lazy(() => _chunkAUZHGVMKcjs.KanbanUncheckedCreateWithoutListsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkXXZRA6QOcjs.KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkUMJSYVHXcjs.KanbanWhereUniqueInputSchema).optional()
}).strict();
var KanbanCreateNestedOneWithoutListsInputSchema_default = KanbanCreateNestedOneWithoutListsInputSchema;




exports.KanbanCreateNestedOneWithoutListsInputSchema = KanbanCreateNestedOneWithoutListsInputSchema; exports.KanbanCreateNestedOneWithoutListsInputSchema_default = KanbanCreateNestedOneWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-MYJZXZUT.cjs.map