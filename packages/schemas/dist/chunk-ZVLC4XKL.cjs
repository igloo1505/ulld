"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk5WBGMMOXcjs = require('./chunk-5WBGMMOX.cjs');

// src/api/prismaMdxRelations/taggables/taggableFields.ts
var _zod = require('zod');
var taggableFields = _zod.z.object({
  topics: _chunk5WBGMMOXcjs.topicZodObject.array().default([]),
  subjects: _chunk5WBGMMOXcjs.subjectZodObject.array().default([]),
  tags: _chunk5WBGMMOXcjs.tagZodObject.array().default([])
});



exports.taggableFields = taggableFields;
//# sourceMappingURL=chunk-ZVLC4XKL.cjs.map