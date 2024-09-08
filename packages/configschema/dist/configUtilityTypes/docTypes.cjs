"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/configUtilityTypes/docTypes.ts
var _zod = require('zod');
var topicZodObject = _zod.z.object({
  value: _zod.z.string()
});
var subjectZodObject = _zod.z.object({
  value: _zod.z.string()
});
var _tagZodObject = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.null(), _zod.z.undefined()]).optional()
});
var tagZodObject = _zod.z.union([
  _tagZodObject,
  _zod.z.string().transform((a) => _tagZodObject.parse({ value: a }))
]);




exports.subjectZodObject = subjectZodObject; exports.tagZodObject = tagZodObject; exports.topicZodObject = topicZodObject;
//# sourceMappingURL=docTypes.cjs.map