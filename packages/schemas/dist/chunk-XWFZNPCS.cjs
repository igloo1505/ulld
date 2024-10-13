"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2X62PCXRcjs = require('./chunk-2X62PCXR.cjs');

// src/database/outputTypeSchemas/TagCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var TagCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk2X62PCXRcjs.TagCreateManyInputSchema, _chunk2X62PCXRcjs.TagCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TagCreateManyAndReturnArgsSchema_default = TagCreateManyAndReturnArgsSchema;




exports.TagCreateManyAndReturnArgsSchema = TagCreateManyAndReturnArgsSchema; exports.TagCreateManyAndReturnArgsSchema_default = TagCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-XWFZNPCS.cjs.map