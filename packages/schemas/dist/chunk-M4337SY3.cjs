"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIET3UREJcjs = require('./chunk-IET3UREJ.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutTodoListInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutTodoListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkIET3UREJcjs.TagUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutTodoListInputSchema_default = TagUpdateManyWithWhereWithoutTodoListInputSchema;




exports.TagUpdateManyWithWhereWithoutTodoListInputSchema = TagUpdateManyWithWhereWithoutTodoListInputSchema; exports.TagUpdateManyWithWhereWithoutTodoListInputSchema_default = TagUpdateManyWithWhereWithoutTodoListInputSchema_default;
//# sourceMappingURL=chunk-M4337SY3.cjs.map