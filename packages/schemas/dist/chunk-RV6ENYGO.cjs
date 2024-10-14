"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXQXWRAAIcjs = require('./chunk-XQXWRAAI.cjs');

// src/database/outputTypeSchemas/ReadingListCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var ReadingListCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkXQXWRAAIcjs.ReadingListCountOutputTypeSelectSchema).nullish()
}).strict();
var ReadingListCountOutputTypeArgsSchema_default = _chunkXQXWRAAIcjs.ReadingListCountOutputTypeSelectSchema;




exports.ReadingListCountOutputTypeArgsSchema = ReadingListCountOutputTypeArgsSchema; exports.ReadingListCountOutputTypeArgsSchema_default = ReadingListCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-RV6ENYGO.cjs.map