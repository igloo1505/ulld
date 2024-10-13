"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/api/prismaMdxRelations/mdxNote/mdxNoteFieldSchemas.ts
var _zod = require('zod');
var sequentialListPropsSchema = _zod.z.object({
  sequentialKey: _zod.z.string(),
  MdxNote: _zod.z.any().array().default([]),
  Ipynb: _zod.z.any().array().default([])
});


exports.sequentialListPropsSchema = sequentialListPropsSchema;
//# sourceMappingURL=mdxNoteFieldSchemas.cjs.map