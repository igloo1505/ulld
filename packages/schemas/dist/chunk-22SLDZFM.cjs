"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR2GMKW2Wcjs = require('./chunk-R2GMKW2W.cjs');

// src/database/inputTypeSchemas/DietCreategoalsInputSchema.ts
var _zod = require('zod');
var DietCreategoalsInputSchema = _zod.z.object({
  set: _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).array()
}).strict();
var DietCreategoalsInputSchema_default = DietCreategoalsInputSchema;




exports.DietCreategoalsInputSchema = DietCreategoalsInputSchema; exports.DietCreategoalsInputSchema_default = DietCreategoalsInputSchema_default;
//# sourceMappingURL=chunk-22SLDZFM.cjs.map