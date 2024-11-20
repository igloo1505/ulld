import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumTERTIARY_TOGGLEWithAggregatesFilterSchema } from './EnumTERTIARY_TOGGLEWithAggregatesFilterSchema';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { EnumDIETARY_GOALNullableListFilterSchema } from './EnumDIETARY_GOALNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const DietScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DietScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DietScalarWhereWithAggregatesInputSchema),z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DietScalarWhereWithAggregatesInputSchema),z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  summary: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  activelyFollowing: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  gf: z.union([ z.lazy(() => EnumTERTIARY_TOGGLEWithAggregatesFilterSchema),z.lazy(() => TERTIARY_TOGGLESchema) ]).optional(),
  vegan: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  pescatarian: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  vegetarian: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  fasting: z.union([ z.lazy(() => EnumTERTIARY_TOGGLEWithAggregatesFilterSchema),z.lazy(() => TERTIARY_TOGGLESchema) ]).optional(),
  cardioTraining: z.union([ z.lazy(() => EnumTERTIARY_TOGGLEWithAggregatesFilterSchema),z.lazy(() => TERTIARY_TOGGLESchema) ]).optional(),
  weightTraining: z.union([ z.lazy(() => EnumTERTIARY_TOGGLEWithAggregatesFilterSchema),z.lazy(() => TERTIARY_TOGGLESchema) ]).optional(),
  carb: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  pro: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  fat: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  goals: z.lazy(() => EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DietScalarWhereWithAggregatesInputSchema;
