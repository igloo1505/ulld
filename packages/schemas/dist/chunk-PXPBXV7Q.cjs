"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkJKLDMFUYcjs = require('./chunk-JKLDMFUY.cjs');


var _chunkXICSFWCZcjs = require('./chunk-XICSFWCZ.cjs');


var _chunkS3AMXT2Zcjs = require('./chunk-S3AMXT2Z.cjs');


var _chunkW3PKPHZUcjs = require('./chunk-W3PKPHZU.cjs');


var _chunkTT7YWZV6cjs = require('./chunk-TT7YWZV6.cjs');


var _chunkE6WNRJ6Fcjs = require('./chunk-E6WNRJ6F.cjs');


var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/MdxNoteUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var MdxNoteUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
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
  sequentialKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
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
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  ReadingList: _zod.z.lazy(() => _chunk642YCHOVcjs.ReadingListUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk642YCHOVcjs.EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  definitions: _zod.z.lazy(() => _chunkJKLDMFUYcjs.DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUncheckedUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();
var MdxNoteUncheckedUpdateInputSchema_default = MdxNoteUncheckedUpdateInputSchema;




exports.MdxNoteUncheckedUpdateInputSchema = MdxNoteUncheckedUpdateInputSchema; exports.MdxNoteUncheckedUpdateInputSchema_default = MdxNoteUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-PXPBXV7Q.cjs.map