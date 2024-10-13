"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE7UGCMCLcjs = require('./chunk-E7UGCMCL.cjs');


var _chunkMX4UNEJJcjs = require('./chunk-MX4UNEJJ.cjs');


var _chunkPP2DVWWYcjs = require('./chunk-PP2DVWWY.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMX4UNEJJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPP2DVWWYcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkE7UGCMCLcjs.ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema_default = ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema;




exports.ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema = ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema; exports.ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema_default = ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema_default;
//# sourceMappingURL=chunk-CPDUZ3IY.cjs.map