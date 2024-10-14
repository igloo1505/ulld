"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkXICSFWCZcjs = require('./chunk-XICSFWCZ.cjs');


var _chunkS3AMXT2Zcjs = require('./chunk-S3AMXT2Z.cjs');


var _chunkW3PKPHZUcjs = require('./chunk-W3PKPHZU.cjs');


var _chunkTT7YWZV6cjs = require('./chunk-TT7YWZV6.cjs');


var _chunkE6WNRJ6Fcjs = require('./chunk-E6WNRJ6F.cjs');


var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateWithoutDefinitionsInputSchema = _zod.z.object({
  isProtected: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkTT7YWZV6cjs.NullableBoolFieldUpdateOperationsInputSchema)]).optional().nullable(),
  dietSummaryKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  latexTitle: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  rootRelativePath: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  noteType: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  formatted: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  summary: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunkW3PKPHZUcjs.MdxNoteUpdatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkS3AMXT2Zcjs.MdxNoteUpdateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  imageSrc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  href: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  sequentialIndex: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  floatImages: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  remoteUrl: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  trackRemote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunkXICSFWCZcjs.MdxNoteUpdateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  quickLink: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  sequentialList: _zod.z.lazy(() => _chunk642YCHOVcjs.SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema).optional(),
  ReadingList: _zod.z.lazy(() => _chunk642YCHOVcjs.ReadingListUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk642YCHOVcjs.EquationUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();
var MdxNoteUpdateWithoutDefinitionsInputSchema_default = MdxNoteUpdateWithoutDefinitionsInputSchema;




exports.MdxNoteUpdateWithoutDefinitionsInputSchema = MdxNoteUpdateWithoutDefinitionsInputSchema; exports.MdxNoteUpdateWithoutDefinitionsInputSchema_default = MdxNoteUpdateWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-ZJXPP7P6.cjs.map