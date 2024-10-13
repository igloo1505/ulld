"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkITI6PDBIcjs = require('./chunk-ITI6PDBI.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkITI6PDBIcjs.TagUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TagUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.TagUpdateManyWithWhereWithoutIpynbNotesInputSchema = TagUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.TagUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TagUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-TNZRW6U4.cjs.map