"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHFGI5CVIcjs = require('./chunk-HFGI5CVI.cjs');

// src/api/prismaMdxRelations/readingList/classProps.ts
var _zod = require('zod');
var readingListZodObject = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().nullable(),
  bibEntries: _zod.z.any().array(),
  mdxNotes: _zod.z.any().array().default([]),
  ipynbNotes: _zod.z.any().array().default([]),
  createdAt: _zod.z.union([_zod.z.string().datetime(), _zod.z.date()]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform),
  lastUpdate: _zod.z.union([_zod.z.string().datetime(), _zod.z.date()]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform)
});



exports.readingListZodObject = readingListZodObject;
//# sourceMappingURL=chunk-4U2KQM45.cjs.map