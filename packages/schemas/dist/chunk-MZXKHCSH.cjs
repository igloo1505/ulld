"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR2GMKW2Wcjs = require('./chunk-R2GMKW2W.cjs');

// src/database/inputTypeSchemas/DietUpdategoalsInputSchema.ts
var _zod = require('zod');
var DietUpdategoalsInputSchema = _zod.z.object({
  set: _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).array().optional(),
  push: _zod.z.union([_zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema), _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).array()]).optional()
}).strict();
var DietUpdategoalsInputSchema_default = DietUpdategoalsInputSchema;




exports.DietUpdategoalsInputSchema = DietUpdategoalsInputSchema; exports.DietUpdategoalsInputSchema_default = DietUpdategoalsInputSchema_default;
//# sourceMappingURL=chunk-MZXKHCSH.cjs.map