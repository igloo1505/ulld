"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFQ7XF3QVcjs = require('./chunk-FQ7XF3QV.cjs');

// src/database/outputTypeSchemas/MdxNoteCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var MdxNoteCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkFQ7XF3QVcjs.MdxNoteCountOutputTypeSelectSchema).nullish()
}).strict();
var MdxNoteCountOutputTypeArgsSchema_default = _chunkFQ7XF3QVcjs.MdxNoteCountOutputTypeSelectSchema;




exports.MdxNoteCountOutputTypeArgsSchema = MdxNoteCountOutputTypeArgsSchema; exports.MdxNoteCountOutputTypeArgsSchema_default = MdxNoteCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-K6436L76.cjs.map