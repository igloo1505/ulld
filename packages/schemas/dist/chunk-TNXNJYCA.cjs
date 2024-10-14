"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU2D6LPEOcjs = require('./chunk-U2D6LPEO.cjs');

// src/database/inputTypeSchemas/DietCreategoalsInputSchema.ts
var _zod = require('zod');
var DietCreategoalsInputSchema = _zod.z.object({
  set: _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).array()
}).strict();
var DietCreategoalsInputSchema_default = DietCreategoalsInputSchema;




exports.DietCreategoalsInputSchema = DietCreategoalsInputSchema; exports.DietCreategoalsInputSchema_default = DietCreategoalsInputSchema_default;
//# sourceMappingURL=chunk-TNXNJYCA.cjs.map