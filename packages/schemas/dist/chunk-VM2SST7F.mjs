import {
  bibCoreSchema
} from "./chunk-YR3RF4NV.mjs";
import {
  readingListZodObject
} from "./chunk-S4E7CFL7.mjs";
import {
  subjectZodObject,
  tagZodObject,
  topicZodObject
} from "./chunk-GD4DYU2D.mjs";
import {
  dateTimeStringTransform
} from "./chunk-H5MIN45W.mjs";

// src/api/prismaMdxRelations/bib/bibEntry/classProps.ts
import { z } from "zod";
var citationGroupSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  entries: z.any().array()
});
var bibEntryPropsSchemaInner = z.object({
  Bib: bibCoreSchema.optional(),
  BibId: z.number().int().default(1),
  readingList: readingListZodObject.array().default([]),
  topics: topicZodObject.array().default([]),
  subjects: subjectZodObject.array().default([]),
  tags: tagZodObject.array().default([]),
  id: z.string().toLowerCase(),
  type: z.string().nullish(),
  htmlCitation: z.string().nullish(),
  PdfPath: z.string().nullish(),
  address: z.string().nullish(),
  annote: z.string().nullish(),
  author: z.string().nullish(),
  booktitle: z.string().nullish(),
  chapter: z.string().nullish(),
  crossref: z.string().nullish(),
  doi: z.string().nullish(),
  edition: z.string().nullish(),
  editor: z.string().nullish(),
  email: z.string().nullish(),
  howpublished: z.string().nullish(),
  institution: z.string().nullish(),
  journal: z.string().nullish(),
  month: z.string().nullish(),
  note: z.string().nullish(),
  number: z.string().nullish(),
  organization: z.string().nullish(),
  pages: z.string().nullish(),
  publisher: z.string().nullish(),
  school: z.string().nullish(),
  series: z.string().nullish(),
  title: z.string().nullish(),
  volume: z.string().nullish(),
  year: z.string().nullish(),
  numpages: z.string().nullish(),
  url: z.string().nullish(),
  issue: z.string().nullish(),
  issn: z.string().nullish(),
  abstract: z.string().nullish(),
  urldate: z.string().nullish(),
  keywords: z.string().nullish(),
  copyright: z.string().nullish(),
  tempPageIndex: z.number().int().nullish(),
  read: z.boolean().default(false),
  OwnWork: z.boolean().default(false),
  ColleaguesWork: z.boolean().default(false),
  MdxNotes: z.any().array().nullish(),
  createdAt: z.union([z.string().datetime(), z.date(), z.string()]).nullish().transform(dateTimeStringTransform),
  lastAccess: z.union([z.string().datetime(), z.date(), z.string()]).nullish().transform(dateTimeStringTransform),
  citationGroups: citationGroupSchema.array().default([]),
  added: z.union([z.string().datetime(), z.date(), z.string()]).nullish().transform(dateTimeStringTransform)
});
var bibEntryTransform = (x) => {
  return {
    ...x,
    BibId: x.BibId === 1 && x.Bib ? x.Bib.id : x.BibId
  };
};
var bibEntryPropsSchema = bibEntryPropsSchemaInner.catchall(z.string()).transform(bibEntryTransform);

export {
  citationGroupSchema,
  bibEntryTransform,
  bibEntryPropsSchema
};
//# sourceMappingURL=chunk-VM2SST7F.mjs.map