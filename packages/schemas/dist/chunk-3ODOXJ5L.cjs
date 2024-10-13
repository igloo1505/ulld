"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3NLFHEOQcjs = require('./chunk-3NLFHEOQ.cjs');


var _chunkJKL65NEEcjs = require('./chunk-JKL65NEE.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/DietaryItemUpdateManyArgsSchema.ts
var _zod = require('zod');
var DietaryItemUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkJKL65NEEcjs.DietaryItemUpdateManyMutationInputSchema, _chunk3NLFHEOQcjs.DietaryItemUncheckedUpdateManyInputSchema]),
  where: _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema.optional()
}).strict();
var DietaryItemUpdateManyArgsSchema_default = DietaryItemUpdateManyArgsSchema;




exports.DietaryItemUpdateManyArgsSchema = DietaryItemUpdateManyArgsSchema; exports.DietaryItemUpdateManyArgsSchema_default = DietaryItemUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-3ODOXJ5L.cjs.map