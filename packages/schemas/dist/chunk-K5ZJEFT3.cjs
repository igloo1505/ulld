"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZQM5UUFKcjs = require('./chunk-ZQM5UUFK.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutBibEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkZQM5UUFKcjs.TagUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TagUpdateManyWithWhereWithoutBibEntriesInputSchema;




exports.TagUpdateManyWithWhereWithoutBibEntriesInputSchema = TagUpdateManyWithWhereWithoutBibEntriesInputSchema; exports.TagUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TagUpdateManyWithWhereWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-K5ZJEFT3.cjs.map