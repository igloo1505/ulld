import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IpynbUpdatecitationsListOrderInputSchema } from './IpynbUpdatecitationsListOrderInputSchema';
import { IpynbUpdateimportantValuesInputSchema } from './IpynbUpdateimportantValuesInputSchema';
import { IpynbUpdateoutgoingQuickLinksInputSchema } from './IpynbUpdateoutgoingQuickLinksInputSchema';
import { BytesFieldUpdateOperationsInputSchema } from './BytesFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const IpynbUncheckedUpdateManyWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbUncheckedUpdateManyWithoutCitationsInput> = z.object({
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
}).strict();

export default IpynbUncheckedUpdateManyWithoutCitationsInputSchema;
