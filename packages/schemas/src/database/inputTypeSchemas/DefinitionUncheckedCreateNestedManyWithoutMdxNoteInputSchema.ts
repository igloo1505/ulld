import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefinitionCreateWithoutMdxNoteInputSchema } from './DefinitionCreateWithoutMdxNoteInputSchema';
import { DefinitionUncheckedCreateWithoutMdxNoteInputSchema } from './DefinitionUncheckedCreateWithoutMdxNoteInputSchema';
import { DefinitionCreateOrConnectWithoutMdxNoteInputSchema } from './DefinitionCreateOrConnectWithoutMdxNoteInputSchema';
import { DefinitionCreateManyMdxNoteInputEnvelopeSchema } from './DefinitionCreateManyMdxNoteInputEnvelopeSchema';
import { DefinitionWhereUniqueInputSchema } from './DefinitionWhereUniqueInputSchema';

export const DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionUncheckedCreateNestedManyWithoutMdxNoteInput> = z.object({
  create: z.union([ z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema).array(),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema),z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DefinitionWhereUniqueInputSchema),z.lazy(() => DefinitionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema;
