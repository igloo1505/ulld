"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFLCOPKDUcjs = require('./chunk-FLCOPKDU.cjs');

// src/database/outputTypeSchemas/DietaryItemCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var DietaryItemCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkFLCOPKDUcjs.DietaryItemCountOutputTypeSelectSchema).nullish()
}).strict();
var DietaryItemCountOutputTypeArgsSchema_default = _chunkFLCOPKDUcjs.DietaryItemCountOutputTypeSelectSchema;




exports.DietaryItemCountOutputTypeArgsSchema = DietaryItemCountOutputTypeArgsSchema; exports.DietaryItemCountOutputTypeArgsSchema_default = DietaryItemCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-3LSJ2GR3.cjs.map