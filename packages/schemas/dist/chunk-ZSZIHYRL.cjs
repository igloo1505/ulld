"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYH4S4PLFcjs = require('./chunk-YH4S4PLF.cjs');

// src/database/outputTypeSchemas/BibEntryCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var BibEntryCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkYH4S4PLFcjs.BibEntryCountOutputTypeSelectSchema).nullish()
}).strict();
var BibEntryCountOutputTypeArgsSchema_default = _chunkYH4S4PLFcjs.BibEntryCountOutputTypeSelectSchema;




exports.BibEntryCountOutputTypeArgsSchema = BibEntryCountOutputTypeArgsSchema; exports.BibEntryCountOutputTypeArgsSchema_default = BibEntryCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-ZSZIHYRL.cjs.map