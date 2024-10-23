"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYJNLTULQcjs = require('./chunk-YJNLTULQ.cjs');



var _chunk3DSSYCJGcjs = require('./chunk-3DSSYCJG.cjs');

// src/mdx/frontMatter/main.ts
var _zod = require('zod');
var jsonSerializableQuantity = _zod.z.union([
  _zod.z.boolean(),
  _zod.z.string(),
  _zod.z.number(),
  _zod.z.null()
]);
var superJsonSerializableQuantity = jsonSerializableQuantity.or(_zod.z.union([
  _zod.z.undefined(),
  _zod.z.date(),
  _zod.z.instanceof(RegExp),
  _zod.z.instanceof(Error),
  _zod.z.instanceof(URL)
]));
var jsonSerializableValue = _zod.z.union([
  jsonSerializableQuantity,
  _zod.z.record(_zod.z.string(), jsonSerializableQuantity),
  _zod.z.record(_zod.z.string(), _zod.z.record(_zod.z.string(), jsonSerializableQuantity)),
  _zod.z.record(_zod.z.string(), jsonSerializableQuantity).array(),
  jsonSerializableQuantity.array(),
  jsonSerializableQuantity.array().array()
]);
var frontMatterSchema = _zod.z.object({
  title: _zod.z.string().nullish(),
  created: _chunk3DSSYCJGcjs.zodOptStr,
  updated: _chunk3DSSYCJGcjs.zodOptStr,
  summary: _chunk3DSSYCJGcjs.zodOptStr,
  subjects: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).transform(
    (a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]
  ).default([]),
  topics: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).transform(
    (a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]
  ).default([]),
  tags: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).transform(
    (a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]
  ).default([]),
  importantValues: _zod.z.number().array().default([]),
  id: _chunk3DSSYCJGcjs.zodOptStr,
  sequential: _chunk3DSSYCJGcjs.zodOptNum,
  sequentialKey: _chunk3DSSYCJGcjs.zodOptStr,
  tableStyles: _chunkYJNLTULQcjs.zodFrontMatterTableStylesObject.optional()
});
var extendedFrontMatterSchema = frontMatterSchema.and(_zod.z.record(_zod.z.string(), jsonSerializableValue));





exports.jsonSerializableValue = jsonSerializableValue; exports.frontMatterSchema = frontMatterSchema; exports.extendedFrontMatterSchema = extendedFrontMatterSchema;
//# sourceMappingURL=chunk-E2INLS7K.cjs.map