"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQVI3DT6Ucjs = require('./chunk-QVI3DT6U.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutQAPairInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutQAPairInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkQVI3DT6Ucjs.TagUncheckedUpdateManyWithoutQAPairInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutQAPairInputSchema_default = TagUpdateManyWithWhereWithoutQAPairInputSchema;




exports.TagUpdateManyWithWhereWithoutQAPairInputSchema = TagUpdateManyWithWhereWithoutQAPairInputSchema; exports.TagUpdateManyWithWhereWithoutQAPairInputSchema_default = TagUpdateManyWithWhereWithoutQAPairInputSchema_default;
//# sourceMappingURL=chunk-E43J335H.cjs.map