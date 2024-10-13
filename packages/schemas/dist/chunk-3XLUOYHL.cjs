"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkGRNJV34Zcjs = require('./chunk-GRNJV34Z.cjs');


var _chunkV3XIVWDWcjs = require('./chunk-V3XIVWDW.cjs');


var _chunkHYWZYQPPcjs = require('./chunk-HYWZYQPP.cjs');


var _chunk3NTT6R66cjs = require('./chunk-3NTT6R66.cjs');

// src/database/inputTypeSchemas/MdxNoteCreateInputSchema.ts
var _zod = require('zod');
var MdxNoteCreateInputSchema = _zod.z.object({
  isProtected: _zod.z.boolean().optional().nullable(),
  dietSummaryKey: _zod.z.string().optional().nullable(),
  title: _zod.z.string(),
  latexTitle: _zod.z.string().optional().nullable(),
  rootRelativePath: _zod.z.string(),
  noteType: _zod.z.string(),
  content: _zod.z.string(),
  formatted: _zod.z.string().optional().nullable(),
  summary: _zod.z.string().optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunk3NTT6R66cjs.MdxNoteCreatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkHYWZYQPPcjs.MdxNoteCreateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  imageSrc: _zod.z.string().optional().nullable(),
  href: _zod.z.string(),
  sequentialIndex: _zod.z.number().optional().nullable(),
  floatImages: _zod.z.boolean().optional(),
  remoteUrl: _zod.z.string().optional().nullable(),
  trackRemote: _zod.z.boolean().optional(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunkV3XIVWDWcjs.MdxNoteCreateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  quickLink: _zod.z.string().optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  sequentialList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SequentialNoteListCreateNestedOneWithoutMdxNoteInputSchema).optional(),
  ReadingList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ReadingListCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.EquationCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  definitions: _zod.z.lazy(() => _chunkGRNJV34Zcjs.DefinitionCreateNestedManyWithoutMdxNoteInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoCreateNestedManyWithoutAssociatedNotesInputSchema).optional()
}).strict();
var MdxNoteCreateInputSchema_default = MdxNoteCreateInputSchema;




exports.MdxNoteCreateInputSchema = MdxNoteCreateInputSchema; exports.MdxNoteCreateInputSchema_default = MdxNoteCreateInputSchema_default;
//# sourceMappingURL=chunk-3XLUOYHL.cjs.map