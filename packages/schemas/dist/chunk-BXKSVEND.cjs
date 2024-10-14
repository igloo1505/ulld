"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6CL3JEFVcjs = require('./chunk-6CL3JEFV.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk6CL3JEFVcjs.TagUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutEquationsInputSchema_default = TagUpdateManyWithWhereWithoutEquationsInputSchema;




exports.TagUpdateManyWithWhereWithoutEquationsInputSchema = TagUpdateManyWithWhereWithoutEquationsInputSchema; exports.TagUpdateManyWithWhereWithoutEquationsInputSchema_default = TagUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-BXKSVEND.cjs.map