"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYJNLTULQcjs = require('./chunk-YJNLTULQ.cjs');



var _chunk66M3LRRGcjs = require('./chunk-66M3LRRG.cjs');

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
  created: _chunk66M3LRRGcjs.zodOptStr,
  updated: _chunk66M3LRRGcjs.zodOptStr,
  summary: _chunk66M3LRRGcjs.zodOptStr,
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
  id: _chunk66M3LRRGcjs.zodOptStr,
  sequential: _chunk66M3LRRGcjs.zodOptNum,
  sequentialKey: _chunk66M3LRRGcjs.zodOptStr,
  tableStyles: _chunkYJNLTULQcjs.zodFrontMatterTableStylesObject.optional()
});
var extendedFrontMatterSchema = frontMatterSchema.and(_zod.z.record(_zod.z.string(), jsonSerializableValue));





exports.jsonSerializableValue = jsonSerializableValue; exports.frontMatterSchema = frontMatterSchema; exports.extendedFrontMatterSchema = extendedFrontMatterSchema;
//# sourceMappingURL=chunk-NYX3ITR4.cjs.map