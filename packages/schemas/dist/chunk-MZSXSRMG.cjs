"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDDYGEHLVcjs = require('./chunk-DDYGEHLV.cjs');

// src/database/outputTypeSchemas/KanBanListCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var KanBanListCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkDDYGEHLVcjs.KanBanListCountOutputTypeSelectSchema).nullish()
}).strict();
var KanBanListCountOutputTypeArgsSchema_default = _chunkDDYGEHLVcjs.KanBanListCountOutputTypeSelectSchema;




exports.KanBanListCountOutputTypeArgsSchema = KanBanListCountOutputTypeArgsSchema; exports.KanBanListCountOutputTypeArgsSchema_default = KanBanListCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-MZSXSRMG.cjs.map