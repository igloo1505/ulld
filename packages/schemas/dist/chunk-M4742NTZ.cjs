"use strict";Object.defineProperty(exports, "__esModule", {value: true});






var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunk7Y6KONUScjs = require('./chunk-7Y6KONUS.cjs');


var _chunkTZWQEQZScjs = require('./chunk-TZWQEQZS.cjs');


var _chunk327YRYTEcjs = require('./chunk-327YRYTE.cjs');


var _chunkTT7YWZV6cjs = require('./chunk-TT7YWZV6.cjs');


var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkMB3XNPS2cjs = require('./chunk-MB3XNPS2.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/IpynbUpdateInputSchema.ts
var _zod = require('zod');
var IpynbUpdateInputSchema = _zod.z.object({
  rootRelativePath: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  isProtected: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkTT7YWZV6cjs.NullableBoolFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  latexTitle: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunk327YRYTEcjs.IpynbUpdatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkTZWQEQZScjs.IpynbUpdateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  href: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunk7Y6KONUScjs.IpynbUpdateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  raw: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkMB3XNPS2cjs.BytesFieldUpdateOperationsInputSchema)]).optional(),
  sequentialIndex: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  sequentialList: _zod.z.lazy(() => _chunk642YCHOVcjs.SequentialNoteListUpdateOneWithoutIpynbNestedInputSchema).optional(),
  readingList: _zod.z.lazy(() => _chunk642YCHOVcjs.ReadingListUpdateManyWithoutIpynbNotesNestedInputSchema).optional()
}).strict();
var IpynbUpdateInputSchema_default = IpynbUpdateInputSchema;




exports.IpynbUpdateInputSchema = IpynbUpdateInputSchema; exports.IpynbUpdateInputSchema_default = IpynbUpdateInputSchema_default;
//# sourceMappingURL=chunk-M4742NTZ.cjs.map