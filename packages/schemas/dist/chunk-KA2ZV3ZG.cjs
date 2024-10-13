"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZTACBGTHcjs = require('./chunk-ZTACBGTH.cjs');

// src/database/outputTypeSchemas/BibCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var BibCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkZTACBGTHcjs.BibCountOutputTypeSelectSchema).nullish()
}).strict();
var BibCountOutputTypeArgsSchema_default = _chunkZTACBGTHcjs.BibCountOutputTypeSelectSchema;




exports.BibCountOutputTypeArgsSchema = BibCountOutputTypeArgsSchema; exports.BibCountOutputTypeArgsSchema_default = BibCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-KA2ZV3ZG.cjs.map