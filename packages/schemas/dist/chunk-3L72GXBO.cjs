"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZXSJE5VVcjs = require('./chunk-ZXSJE5VV.cjs');

// src/database/outputTypeSchemas/BibEntryCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var BibEntryCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkZXSJE5VVcjs.BibEntryCountOutputTypeSelectSchema).nullish()
}).strict();
var BibEntryCountOutputTypeArgsSchema_default = _chunkZXSJE5VVcjs.BibEntryCountOutputTypeSelectSchema;




exports.BibEntryCountOutputTypeArgsSchema = BibEntryCountOutputTypeArgsSchema; exports.BibEntryCountOutputTypeArgsSchema_default = BibEntryCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-3L72GXBO.cjs.map