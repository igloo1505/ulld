'use strict';

var zod = require('zod');

// src/configUtilityTypes/docTypes.ts
var topicZodObject = zod.z.object({
  value: zod.z.string()
});
var subjectZodObject = zod.z.object({
  value: zod.z.string()
});
var _tagZodObject = zod.z.object({
  value: zod.z.string(),
  kanbanId: zod.z.union([zod.z.number().int(), zod.z.null(), zod.z.undefined()]).optional()
});
var tagZodObject = zod.z.union([
  _tagZodObject,
  zod.z.string().transform((a) => _tagZodObject.parse({ value: a }))
]);

exports.subjectZodObject = subjectZodObject;
exports.tagZodObject = tagZodObject;
exports.topicZodObject = topicZodObject;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=docTypes.cjs.map