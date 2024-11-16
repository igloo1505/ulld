import { z } from 'zod';
export declare const themeSchema: z.ZodUnion<[z.ZodLiteral<"blue">, z.ZodLiteral<"gray">, z.ZodLiteral<"green">, z.ZodLiteral<"neutral">, z.ZodLiteral<"orange">, z.ZodLiteral<"red">, z.ZodLiteral<"rose">, z.ZodLiteral<"slate">, z.ZodLiteral<"stone">, z.ZodLiteral<"violet">, z.ZodLiteral<"yellow">, z.ZodLiteral<"zinc">, z.ZodLiteral<"ulld">]>;
export type ThemeOptions = z.output<typeof themeSchema>;
export declare const getColorMap: (theme: ThemeOptions, raw?: boolean) => Promise<any>;
//# sourceMappingURL=themeUtils.d.ts.map