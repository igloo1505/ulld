"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV22ZS6UAcjs = require('./chunk-V22ZS6UA.cjs');

// src/database/outputTypeSchemas/ReadingListCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var ReadingListCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkV22ZS6UAcjs.ReadingListCountOutputTypeSelectSchema).nullish()
}).strict();
var ReadingListCountOutputTypeArgsSchema_default = _chunkV22ZS6UAcjs.ReadingListCountOutputTypeSelectSchema;




exports.ReadingListCountOutputTypeArgsSchema = ReadingListCountOutputTypeArgsSchema; exports.ReadingListCountOutputTypeArgsSchema_default = ReadingListCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-BXDUF2KZ.cjs.map