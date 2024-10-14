import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutBibInputSchema } from './BibEntryCreateWithoutBibInputSchema';
import { BibEntryUncheckedCreateWithoutBibInputSchema } from './BibEntryUncheckedCreateWithoutBibInputSchema';
import { BibEntryCreateOrConnectWithoutBibInputSchema } from './BibEntryCreateOrConnectWithoutBibInputSchema';
import { BibEntryCreateManyBibInputEnvelopeSchema } from './BibEntryCreateManyBibInputEnvelopeSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';

export const BibEntryCreateNestedManyWithoutBibInputSchema: z.ZodType<Prisma.BibEntryCreateNestedManyWithoutBibInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutBibInputSchema),z.lazy(() => BibEntryCreateWithoutBibInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BibEntryCreateNestedManyWithoutBibInputSchema;
