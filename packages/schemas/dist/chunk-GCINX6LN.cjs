"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBWRU6AVZcjs = require('./chunk-BWRU6AVZ.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutTodoListInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutTodoListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkBWRU6AVZcjs.TagUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutTodoListInputSchema_default = TagUpdateManyWithWhereWithoutTodoListInputSchema;




exports.TagUpdateManyWithWhereWithoutTodoListInputSchema = TagUpdateManyWithWhereWithoutTodoListInputSchema; exports.TagUpdateManyWithWhereWithoutTodoListInputSchema_default = TagUpdateManyWithWhereWithoutTodoListInputSchema_default;
//# sourceMappingURL=chunk-GCINX6LN.cjs.map