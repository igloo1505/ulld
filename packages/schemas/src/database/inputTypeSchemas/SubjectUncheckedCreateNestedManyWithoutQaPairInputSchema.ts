import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutQaPairInputSchema } from '../SubjectCreateWithoutQaPairInputSchema.js';
import { SubjectUncheckedCreateWithoutQaPairInputSchema } from '../SubjectUncheckedCreateWithoutQaPairInputSchema.js';
import { SubjectCreateOrConnectWithoutQaPairInputSchema } from '../SubjectCreateOrConnectWithoutQaPairInputSchema.js';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
export const SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutQaPairInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutQaPairInputSchema),z.lazy(() => SubjectCreateWithoutQaPairInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutQaPairInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutQaPairInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema;