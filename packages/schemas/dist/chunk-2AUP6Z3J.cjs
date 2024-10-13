"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2RRBYOODcjs = require('./chunk-2RRBYOOD.cjs');

// src/database/outputTypeSchemas/TagCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var TagCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk2RRBYOODcjs.TagCountOutputTypeSelectSchema).nullish()
}).strict();
var TagCountOutputTypeArgsSchema_default = _chunk2RRBYOODcjs.TagCountOutputTypeSelectSchema;




exports.TagCountOutputTypeArgsSchema = TagCountOutputTypeArgsSchema; exports.TagCountOutputTypeArgsSchema_default = TagCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-2AUP6Z3J.cjs.map