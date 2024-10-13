"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2CSMUKN7cjs = require('./chunk-2CSMUKN7.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutToDoInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutToDoInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk2CSMUKN7cjs.TagUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutToDoInputSchema_default = TagUpdateManyWithWhereWithoutToDoInputSchema;




exports.TagUpdateManyWithWhereWithoutToDoInputSchema = TagUpdateManyWithWhereWithoutToDoInputSchema; exports.TagUpdateManyWithWhereWithoutToDoInputSchema_default = TagUpdateManyWithWhereWithoutToDoInputSchema_default;
//# sourceMappingURL=chunk-BKDFVUZC.cjs.map