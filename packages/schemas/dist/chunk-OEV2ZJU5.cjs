"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOHZRU3WOcjs = require('./chunk-OHZRU3WO.cjs');

// src/database/outputTypeSchemas/KanBanCardCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var KanBanCardCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkOHZRU3WOcjs.KanBanCardCreateManyInputSchema, _chunkOHZRU3WOcjs.KanBanCardCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanCardCreateManyAndReturnArgsSchema_default = KanBanCardCreateManyAndReturnArgsSchema;




exports.KanBanCardCreateManyAndReturnArgsSchema = KanBanCardCreateManyAndReturnArgsSchema; exports.KanBanCardCreateManyAndReturnArgsSchema_default = KanBanCardCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-OEV2ZJU5.cjs.map