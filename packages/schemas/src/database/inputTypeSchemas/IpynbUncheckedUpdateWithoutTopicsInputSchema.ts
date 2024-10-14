import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { IpynbUpdatecitationsListOrderInputSchema } from './IpynbUpdatecitationsListOrderInputSchema.js';
import { IpynbUpdateimportantValuesInputSchema } from './IpynbUpdateimportantValuesInputSchema.js';
import { IpynbUpdateoutgoingQuickLinksInputSchema } from './IpynbUpdateoutgoingQuickLinksInputSchema.js';
import { BytesFieldUpdateOperationsInputSchema } from './BytesFieldUpdateOperationsInputSchema.js';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema.js';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { TagUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema } from './TagUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema.js';
import { ReadingListUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema } from './ReadingListUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema.js';
export const IpynbUncheckedUpdateWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbUncheckedUpdateWithoutTopicsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rootRelativePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isProtected: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  latexTitle: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  citationsListOrder: z.union([ z.lazy(() => IpynbUpdatecitationsListOrderInputSchema),z.string().array() ]).optional(),
  importantValues: z.union([ z.lazy(() => IpynbUpdateimportantValuesInputSchema),z.number().array() ]).optional(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  outgoingQuickLinks: z.union([ z.lazy(() => IpynbUpdateoutgoingQuickLinksInputSchema),z.string().array() ]).optional(),
  raw: z.union([ z.instanceof(Buffer),z.lazy(() => BytesFieldUpdateOperationsInputSchema) ]).optional(),
  sequentialKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sequentialIndex: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookmarked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  firstSync: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSync: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  citations: z.lazy(() => BibEntryUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  readingList: z.lazy(() => ReadingListUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema).optional()
}).strict();
export default IpynbUncheckedUpdateWithoutTopicsInputSchema;