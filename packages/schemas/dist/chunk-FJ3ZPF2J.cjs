"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2SIZKWRKcjs = require('./chunk-2SIZKWRK.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutQAPairInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutQAPairInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk2SIZKWRKcjs.TagUncheckedUpdateManyWithoutQAPairInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutQAPairInputSchema_default = TagUpdateManyWithWhereWithoutQAPairInputSchema;




exports.TagUpdateManyWithWhereWithoutQAPairInputSchema = TagUpdateManyWithWhereWithoutQAPairInputSchema; exports.TagUpdateManyWithWhereWithoutQAPairInputSchema_default = TagUpdateManyWithWhereWithoutQAPairInputSchema_default;
//# sourceMappingURL=chunk-FJ3ZPF2J.cjs.map