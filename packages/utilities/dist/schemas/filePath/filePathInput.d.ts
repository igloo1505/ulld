import { z } from "zod";
export declare const filePathGlobPropsSchema: z.ZodObject<{
    glob: z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>;
    type: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"dirs">, z.ZodLiteral<"files">, z.ZodLiteral<"dirsAndFiles">]>>;
    ignore: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>>;
    returnAs: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"absolute">, z.ZodLiteral<"rootRelative">]>>;
}, "strip", z.ZodTypeAny, {
    type: "files" | "dirs" | "dirsAndFiles";
    glob: string;
    returnAs: "absolute" | "rootRelative";
    ignore?: string | string[] | null | undefined;
}, {
    glob?: string | undefined;
    type?: "files" | "dirs" | "dirsAndFiles" | undefined;
    ignore?: string | string[] | null | undefined;
    returnAs?: "absolute" | "rootRelative" | undefined;
}>;
//# sourceMappingURL=filePathInput.d.ts.map