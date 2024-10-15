import { z } from 'zod';
import type { DietWithRelations } from './DietSchema.js';
import type { DietPartialWithRelations } from './DietSchema.js';
export declare const TimePeriodSchema: z.ZodObject<{
    id: z.ZodNumber;
    start: z.ZodDate;
    end: z.ZodNullable<z.ZodDate>;
    dietId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    dietId: string | null;
    start: Date;
    end: Date | null;
}, {
    id: number;
    dietId: string | null;
    start: Date;
    end: Date | null;
}>;
export type TimePeriod = z.infer<typeof TimePeriodSchema>;
export declare const TimePeriodPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    start: z.ZodOptional<z.ZodDate>;
    end: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    dietId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    dietId?: string | null | undefined;
    start?: Date | undefined;
    end?: Date | null | undefined;
}, {
    id?: number | undefined;
    dietId?: string | null | undefined;
    start?: Date | undefined;
    end?: Date | null | undefined;
}>;
export type TimePeriodPartial = z.infer<typeof TimePeriodPartialSchema>;
export type TimePeriodRelations = {
    Diet?: DietWithRelations | null;
};
export type TimePeriodWithRelations = z.infer<typeof TimePeriodSchema> & TimePeriodRelations;
export declare const TimePeriodWithRelationsSchema: z.ZodType<TimePeriodWithRelations>;
export type TimePeriodPartialRelations = {
    Diet?: DietPartialWithRelations | null;
};
export type TimePeriodPartialWithRelations = z.infer<typeof TimePeriodPartialSchema> & TimePeriodPartialRelations;
export declare const TimePeriodPartialWithRelationsSchema: z.ZodType<TimePeriodPartialWithRelations>;
export type TimePeriodWithPartialRelations = z.infer<typeof TimePeriodSchema> & TimePeriodPartialRelations;
export declare const TimePeriodWithPartialRelationsSchema: z.ZodType<TimePeriodWithPartialRelations>;
export default TimePeriodSchema;
//# sourceMappingURL=TimePeriodSchema.d.ts.map