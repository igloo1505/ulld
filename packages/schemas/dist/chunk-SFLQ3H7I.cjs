"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkNG2S6FNVcjs = require('./chunk-NG2S6FNV.cjs');


var _chunkP4OXBUFFcjs = require('./chunk-P4OXBUFF.cjs');


var _chunk4H3UIJMScjs = require('./chunk-4H3UIJMS.cjs');


var _chunkQRVT4RN5cjs = require('./chunk-QRVT4RN5.cjs');


var _chunkNAPXQQJ3cjs = require('./chunk-NAPXQQJ3.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/IpynbUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var IpynbUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  rootRelativePath: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  isProtected: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkQRVT4RN5cjs.NullableBoolFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  latexTitle: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunk4H3UIJMScjs.IpynbUpdatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkP4OXBUFFcjs.IpynbUpdateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  href: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunkNG2S6FNVcjs.IpynbUpdateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  raw: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional(),
  sequentialKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  readingList: _zod.z.lazy(() => _chunkF67HEIG4cjs.ReadingListUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional()
}).strict();
var IpynbUncheckedUpdateInputSchema_default = IpynbUncheckedUpdateInputSchema;




exports.IpynbUncheckedUpdateInputSchema = IpynbUncheckedUpdateInputSchema; exports.IpynbUncheckedUpdateInputSchema_default = IpynbUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-SFLQ3H7I.cjs.map