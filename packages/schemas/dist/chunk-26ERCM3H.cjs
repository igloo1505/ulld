"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR4AHILW2cjs = require('./chunk-R4AHILW2.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/TagUpdateManyArgsSchema.ts
var _zod = require('zod');
var TagUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema, _chunkR4AHILW2cjs.TagUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.TagWhereInputSchema.optional()
}).strict();
var TagUpdateManyArgsSchema_default = TagUpdateManyArgsSchema;




exports.TagUpdateManyArgsSchema = TagUpdateManyArgsSchema; exports.TagUpdateManyArgsSchema_default = TagUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-26ERCM3H.cjs.map