"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU2D6LPEOcjs = require('./chunk-U2D6LPEO.cjs');

// src/database/inputTypeSchemas/DietUpdategoalsInputSchema.ts
var _zod = require('zod');
var DietUpdategoalsInputSchema = _zod.z.object({
  set: _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).array().optional(),
  push: _zod.z.union([_zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema), _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).array()]).optional()
}).strict();
var DietUpdategoalsInputSchema_default = DietUpdategoalsInputSchema;




exports.DietUpdategoalsInputSchema = DietUpdategoalsInputSchema; exports.DietUpdategoalsInputSchema_default = DietUpdategoalsInputSchema_default;
//# sourceMappingURL=chunk-MT2G3375.cjs.map