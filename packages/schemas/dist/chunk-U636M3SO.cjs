"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');


var _chunk67ZJ6VSOcjs = require('./chunk-67ZJ6VSO.cjs');


var _chunkNEZY6R6Ccjs = require('./chunk-NEZY6R6C.cjs');


var _chunkCARRIJSVcjs = require('./chunk-CARRIJSV.cjs');

// src/database/inputTypeSchemas/MdxNoteCreateWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteCreateWithoutDefinitionsInputSchema = _zod.z.object({
  isProtected: _zod.z.boolean().optional().nullable(),
  dietSummaryKey: _zod.z.string().optional().nullable(),
  title: _zod.z.string(),
  latexTitle: _zod.z.string().optional().nullable(),
  rootRelativePath: _zod.z.string(),
  noteType: _zod.z.string(),
  content: _zod.z.string(),
  formatted: _zod.z.string().optional().nullable(),
  summary: _zod.z.string().optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunkCARRIJSVcjs.MdxNoteCreatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkNEZY6R6Ccjs.MdxNoteCreateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  imageSrc: _zod.z.string().optional().nullable(),
  href: _zod.z.string(),
  sequentialIndex: _zod.z.number().optional().nullable(),
  floatImages: _zod.z.boolean().optional(),
  remoteUrl: _zod.z.string().optional().nullable(),
  trackRemote: _zod.z.boolean().optional(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunk67ZJ6VSOcjs.MdxNoteCreateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  quickLink: _zod.z.string().optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  sequentialList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SequentialNoteListCreateNestedOneWithoutMdxNoteInputSchema).optional(),
  ReadingList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ReadingListCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.EquationCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoCreateNestedManyWithoutAssociatedNotesInputSchema).optional()
}).strict();
var MdxNoteCreateWithoutDefinitionsInputSchema_default = MdxNoteCreateWithoutDefinitionsInputSchema;




exports.MdxNoteCreateWithoutDefinitionsInputSchema = MdxNoteCreateWithoutDefinitionsInputSchema; exports.MdxNoteCreateWithoutDefinitionsInputSchema_default = MdxNoteCreateWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-U636M3SO.cjs.map