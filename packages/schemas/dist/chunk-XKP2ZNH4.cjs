"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLEPRWGF4cjs = require('./chunk-LEPRWGF4.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkLEPRWGF4cjs.TagUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TagUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.TagUpdateManyWithWhereWithoutMdxNotesInputSchema = TagUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.TagUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TagUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-XKP2ZNH4.cjs.map