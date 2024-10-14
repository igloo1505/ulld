"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH2XYFRHFcjs = require('./chunk-H2XYFRHF.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutToDoInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutToDoInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkH2XYFRHFcjs.TagUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutToDoInputSchema_default = TagUpdateManyWithWhereWithoutToDoInputSchema;




exports.TagUpdateManyWithWhereWithoutToDoInputSchema = TagUpdateManyWithWhereWithoutToDoInputSchema; exports.TagUpdateManyWithWhereWithoutToDoInputSchema_default = TagUpdateManyWithWhereWithoutToDoInputSchema_default;
//# sourceMappingURL=chunk-B5IHUGCV.cjs.map