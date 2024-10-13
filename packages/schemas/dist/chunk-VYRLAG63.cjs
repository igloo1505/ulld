"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWNMTGTGNcjs = require('./chunk-WNMTGTGN.cjs');


var _chunkMX4UNEJJcjs = require('./chunk-MX4UNEJJ.cjs');


var _chunkPP2DVWWYcjs = require('./chunk-PP2DVWWY.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMX4UNEJJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPP2DVWWYcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkWNMTGTGNcjs.ToDoUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoUpdateManyWithWhereWithoutTagsInputSchema;




exports.ToDoUpdateManyWithWhereWithoutTagsInputSchema = ToDoUpdateManyWithWhereWithoutTagsInputSchema; exports.ToDoUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-VYRLAG63.cjs.map