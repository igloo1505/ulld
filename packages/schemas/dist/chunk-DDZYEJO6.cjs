"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOHZRU3WOcjs = require('./chunk-OHZRU3WO.cjs');

// src/database/outputTypeSchemas/KanBanCardCreateManyArgsSchema.ts
var _zod = require('zod');
var KanBanCardCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkOHZRU3WOcjs.KanBanCardCreateManyInputSchema, _chunkOHZRU3WOcjs.KanBanCardCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanCardCreateManyArgsSchema_default = KanBanCardCreateManyArgsSchema;




exports.KanBanCardCreateManyArgsSchema = KanBanCardCreateManyArgsSchema; exports.KanBanCardCreateManyArgsSchema_default = KanBanCardCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-DDZYEJO6.cjs.map