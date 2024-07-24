import { z } from "zod";
export declare const AutoPropertyFormSchema: z.ZodObject<{
    glob: z.ZodString;
    value: z.ZodString;
    type: z.ZodNativeEnum<{
        tag: "tag";
        topic: "topic";
        subject: "subject";
    }>;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "tag" | "topic" | "subject";
    value: string;
    glob: string;
    id?: number | undefined;
}, {
    type: "tag" | "topic" | "subject";
    value: string;
    glob: string;
    id?: number | undefined;
}>;
//# sourceMappingURL=autoPropertyFormSchema.d.ts.map