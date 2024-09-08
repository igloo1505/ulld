// src/configUtilityTypes/docTypes.ts
import { z } from "zod";
var topicZodObject = z.object({
  value: z.string()
});
var subjectZodObject = z.object({
  value: z.string()
});
var _tagZodObject = z.object({
  value: z.string(),
  kanbanId: z.union([z.number().int(), z.null(), z.undefined()]).optional()
});
var tagZodObject = z.union([
  _tagZodObject,
  z.string().transform((a) => _tagZodObject.parse({ value: a }))
]);
export {
  subjectZodObject,
  tagZodObject,
  topicZodObject
};
//# sourceMappingURL=docTypes.js.map