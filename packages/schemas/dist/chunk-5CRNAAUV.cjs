"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSVTJASREcjs = require('./chunk-SVTJASRE.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkSVTJASREcjs.TagUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TagUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.TagUpdateManyWithWhereWithoutIpynbNotesInputSchema = TagUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.TagUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TagUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-5CRNAAUV.cjs.map