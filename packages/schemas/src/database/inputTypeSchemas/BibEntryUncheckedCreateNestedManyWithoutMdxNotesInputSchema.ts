import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutMdxNotesInputSchema } from './BibEntryCreateWithoutMdxNotesInputSchema';
import { BibEntryUncheckedCreateWithoutMdxNotesInputSchema } from './BibEntryUncheckedCreateWithoutMdxNotesInputSchema';
import { BibEntryCreateOrConnectWithoutMdxNotesInputSchema } from './BibEntryCreateOrConnectWithoutMdxNotesInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';

export const BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryUncheckedCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema;
