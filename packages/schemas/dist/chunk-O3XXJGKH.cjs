"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEVVC275Fcjs = require('./chunk-EVVC275F.cjs');




var _chunk5WBGMMOXcjs = require('./chunk-5WBGMMOX.cjs');


var _chunk4U2KQM45cjs = require('./chunk-4U2KQM45.cjs');


var _chunkHFGI5CVIcjs = require('./chunk-HFGI5CVI.cjs');

// src/api/prismaMdxRelations/bib/bibEntry/classProps.ts
var _zod = require('zod');
var citationGroupSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().nullish(),
  entries: _zod.z.any().array()
});
var bibEntryPropsSchemaInner = _zod.z.object({
  Bib: _chunkEVVC275Fcjs.bibCoreSchema.optional(),
  BibId: _zod.z.number().int().default(1),
  readingList: _chunk4U2KQM45cjs.readingListZodObject.array().default([]),
  topics: _chunk5WBGMMOXcjs.topicZodObject.array().default([]),
  subjects: _chunk5WBGMMOXcjs.subjectZodObject.array().default([]),
  tags: _chunk5WBGMMOXcjs.tagZodObject.array().default([]),
  id: _zod.z.string().toLowerCase(),
  type: _zod.z.string().nullish(),
  htmlCitation: _zod.z.string().nullish(),
  PdfPath: _zod.z.string().nullish(),
  address: _zod.z.string().nullish(),
  annote: _zod.z.string().nullish(),
  author: _zod.z.string().nullish(),
  booktitle: _zod.z.string().nullish(),
  chapter: _zod.z.string().nullish(),
  crossref: _zod.z.string().nullish(),
  doi: _zod.z.string().nullish(),
  edition: _zod.z.string().nullish(),
  editor: _zod.z.string().nullish(),
  email: _zod.z.string().nullish(),
  howpublished: _zod.z.string().nullish(),
  institution: _zod.z.string().nullish(),
  journal: _zod.z.string().nullish(),
  month: _zod.z.string().nullish(),
  note: _zod.z.string().nullish(),
  number: _zod.z.string().nullish(),
  organization: _zod.z.string().nullish(),
  pages: _zod.z.string().nullish(),
  publisher: _zod.z.string().nullish(),
  school: _zod.z.string().nullish(),
  series: _zod.z.string().nullish(),
  title: _zod.z.string().nullish(),
  volume: _zod.z.string().nullish(),
  year: _zod.z.string().nullish(),
  numpages: _zod.z.string().nullish(),
  url: _zod.z.string().nullish(),
  issue: _zod.z.string().nullish(),
  issn: _zod.z.string().nullish(),
  abstract: _zod.z.string().nullish(),
  urldate: _zod.z.string().nullish(),
  keywords: _zod.z.string().nullish(),
  copyright: _zod.z.string().nullish(),
  tempPageIndex: _zod.z.number().int().nullish(),
  read: _zod.z.boolean().default(false),
  OwnWork: _zod.z.boolean().default(false),
  ColleaguesWork: _zod.z.boolean().default(false),
  MdxNotes: _zod.z.any().array().nullish(),
  createdAt: _zod.z.union([_zod.z.string().datetime(), _zod.z.date(), _zod.z.string()]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform),
  lastAccess: _zod.z.union([_zod.z.string().datetime(), _zod.z.date(), _zod.z.string()]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform),
  citationGroups: citationGroupSchema.array().default([]),
  added: _zod.z.union([_zod.z.string().datetime(), _zod.z.date(), _zod.z.string()]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform)
});
var bibEntryTransform = (x) => {
  return {
    ...x,
    BibId: x.BibId === 1 && x.Bib ? x.Bib.id : x.BibId
  };
};
var bibEntryPropsSchema = bibEntryPropsSchemaInner.catchall(_zod.z.string()).transform(bibEntryTransform);





exports.citationGroupSchema = citationGroupSchema; exports.bibEntryTransform = bibEntryTransform; exports.bibEntryPropsSchema = bibEntryPropsSchema;
//# sourceMappingURL=chunk-O3XXJGKH.cjs.map