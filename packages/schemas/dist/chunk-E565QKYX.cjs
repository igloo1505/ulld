"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOYXIYFIRcjs = require('./chunk-OYXIYFIR.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkOYXIYFIRcjs.TagUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TagUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.TagUpdateManyWithWhereWithoutMdxNotesInputSchema = TagUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.TagUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TagUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-E565QKYX.cjs.map