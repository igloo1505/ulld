"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5YUMPL66cjs = require('./chunk-5YUMPL66.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/ReadingListArgsSchema.ts
var _zod = require('zod');
var ReadingListArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk5YUMPL66cjs.ReadingListSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.ReadingListIncludeSchema).optional()
}).strict();
var ReadingListArgsSchema_default = ReadingListArgsSchema;




exports.ReadingListArgsSchema = ReadingListArgsSchema; exports.ReadingListArgsSchema_default = ReadingListArgsSchema_default;
//# sourceMappingURL=chunk-XWIN6VHK.cjs.map