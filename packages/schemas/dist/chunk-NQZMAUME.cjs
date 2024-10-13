"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkCZ52P6PMcjs = require('./chunk-CZ52P6PM.cjs');


var _chunkDRVRPLXLcjs = require('./chunk-DRVRPLXL.cjs');


var _chunkNHT2VH4Mcjs = require('./chunk-NHT2VH4M.cjs');


var _chunkZM67UDBUcjs = require('./chunk-ZM67UDBU.cjs');


var _chunkQRVT4RN5cjs = require('./chunk-QRVT4RN5.cjs');


var _chunkT7BWXFP5cjs = require('./chunk-T7BWXFP5.cjs');


var _chunkNAPXQQJ3cjs = require('./chunk-NAPXQQJ3.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/MdxNoteUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var MdxNoteUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  isProtected: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkQRVT4RN5cjs.NullableBoolFieldUpdateOperationsInputSchema)]).optional().nullable(),
  dietSummaryKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  latexTitle: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  rootRelativePath: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  noteType: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  formatted: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  summary: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunkZM67UDBUcjs.MdxNoteUpdatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkNHT2VH4Mcjs.MdxNoteUpdateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  imageSrc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  href: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  sequentialKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  floatImages: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  remoteUrl: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  trackRemote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunkDRVRPLXLcjs.MdxNoteUpdateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  quickLink: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  ReadingList: _zod.z.lazy(() => _chunkF67HEIG4cjs.ReadingListUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkF67HEIG4cjs.EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  definitions: _zod.z.lazy(() => _chunkCZ52P6PMcjs.DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUncheckedUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();
var MdxNoteUncheckedUpdateInputSchema_default = MdxNoteUncheckedUpdateInputSchema;




exports.MdxNoteUncheckedUpdateInputSchema = MdxNoteUncheckedUpdateInputSchema; exports.MdxNoteUncheckedUpdateInputSchema_default = MdxNoteUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-NQZMAUME.cjs.map