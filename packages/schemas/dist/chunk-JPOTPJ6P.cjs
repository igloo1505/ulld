"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5OM3VDNHcjs = require('./chunk-5OM3VDNH.cjs');


var _chunkXX657GIFcjs = require('./chunk-XX657GIF.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/DietUpdateManyArgsSchema.ts
var _zod = require('zod');
var DietUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkXX657GIFcjs.DietUpdateManyMutationInputSchema, _chunk5OM3VDNHcjs.DietUncheckedUpdateManyInputSchema]),
  where: _chunk4QJOIHDOcjs.DietWhereInputSchema.optional()
}).strict();
var DietUpdateManyArgsSchema_default = DietUpdateManyArgsSchema;




exports.DietUpdateManyArgsSchema = DietUpdateManyArgsSchema; exports.DietUpdateManyArgsSchema_default = DietUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-JPOTPJ6P.cjs.map