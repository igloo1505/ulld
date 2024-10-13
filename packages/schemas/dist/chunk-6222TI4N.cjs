"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5NUMVONBcjs = require('./chunk-5NUMVONB.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5NUMVONBcjs.TagUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutEquationsInputSchema_default = TagUpdateManyWithWhereWithoutEquationsInputSchema;




exports.TagUpdateManyWithWhereWithoutEquationsInputSchema = TagUpdateManyWithWhereWithoutEquationsInputSchema; exports.TagUpdateManyWithWhereWithoutEquationsInputSchema_default = TagUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-6222TI4N.cjs.map