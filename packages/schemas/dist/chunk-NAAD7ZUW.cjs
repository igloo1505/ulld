"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDATXXKYWcjs = require('./chunk-DATXXKYW.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/ReadingListArgsSchema.ts
var _zod = require('zod');
var ReadingListArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkDATXXKYWcjs.ReadingListSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.ReadingListIncludeSchema).optional()
}).strict();
var ReadingListArgsSchema_default = ReadingListArgsSchema;




exports.ReadingListArgsSchema = ReadingListArgsSchema; exports.ReadingListArgsSchema_default = ReadingListArgsSchema_default;
//# sourceMappingURL=chunk-NAAD7ZUW.cjs.map