import {
  bibEntryPropsSchema
} from "../../../chunk-KVTGM2DO.js";
import "../../../chunk-3WNGPE7M.js";
import {
  todoTaskZodObject
} from "../../../chunk-E2RAG7YE.js";
import "../../../chunk-DGXESPMP.js";
import {
  taggableFields
} from "../../../chunk-5XGYGHAO.js";
import "../../../chunk-M5VWJQBY.js";
import "../../../chunk-I6ZKXDT5.js";
import {
  dateTimeStringTransform
} from "../../../chunk-YVRRK3PZ.js";

// src/api/prismaMdxRelations/mdxNote/classProps.ts
import { z } from "zod";
import { withForwardSlash } from "@ulld/utilities/fsUtils";
import { sequentialListPropsSchema } from "@ulld/api/generalPrismaSchemas";
import {
  makeValidIdOnlyLetters
} from "@ulld/utilities/utils/identity";
var mdxNotePropsSchema = z.object({
  content: z.string().nullish(),
  id: z.number().nullish(),
  title: z.string().nullish(),
  latexTitle: z.string().nullish(),
  raw: z.string(),
  floatImages: z.boolean().default(false),
  formatted: z.string().nullish(),
  citations: bibEntryPropsSchema.array().default([]),
  importantValues: z.number().array().default([]),
  bookmarked: z.boolean().default(false),
  quickLinkId: z.string().nullish(),
  href: z.string().nullish(),
  citationsListOrder: z.string().array().default([]),
  outgoingQuickLinks: z.string().array().default([]),
  rootRelativePath: z.string().nullish().transform((a) => typeof a === "string" ? withForwardSlash(a) : a),
  equationIds: z.string().array().default([]),
  isProtected: z.boolean().nullish().default(false),
  sequentialKey: z.string().nullish(),
  sequentialIndex: z.number().nullish(),
  sequentialList: sequentialListPropsSchema.optional(),
  remoteUrl: z.string().nullish(),
  noLog: z.boolean().default(true),
  saveFormatted: z.boolean().default(true),
  noteType: z.string().transform(makeValidIdOnlyLetters),
  trackRemote: z.boolean().default(false),
  toDo: todoTaskZodObject.array().default([]),
  summary: z.string().nullish(),
  firstSync: z.union([
    z.string().datetime().transform((a) => new Date(a)),
    z.date()
  ]).nullish().transform(dateTimeStringTransform),
  lastSync: z.union([
    z.string().datetime().transform((a) => new Date(a)),
    z.date()
  ]).nullish().transform(dateTimeStringTransform)
}).merge(taggableFields);
export {
  mdxNotePropsSchema
};
//# sourceMappingURL=classProps.js.map