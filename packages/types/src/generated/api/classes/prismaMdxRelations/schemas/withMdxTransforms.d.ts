import { z } from 'zod';
export declare const mdxNoteSummaryWithMdxTransforms: z.ZodObject<{
    tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        value: z.ZodString;
        kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kanbanId: number | null;
    }, {
        value: string;
        kanbanId?: number | null | undefined;
    }>, z.ZodEffects<z.ZodString, {
        value: string;
        kanbanId: number | null;
    }, string>]>, "many">>, import("../tag").Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
    id: z.ZodNullable<z.ZodNumber>;
    href: z.ZodNullable<z.ZodString>;
    noteType: z.ZodBranded<z.ZodEffects<z.ZodString, string, string>, "DocTypeName">;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    isProtected: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    latexTitle: z.ZodNullable<z.ZodString>;
    rootRelativePath: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    formatted: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    citationsListOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    importantValues: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    sequentialIndex: z.ZodNullable<z.ZodNumber>;
    floatImages: z.ZodDefault<z.ZodBoolean>;
    remoteUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    trackRemote: z.ZodDefault<z.ZodBoolean>;
    outgoingQuickLinks: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    lastSync: z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>;
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, import("../topic").Topic[], {
        value: string;
    }[] | undefined>;
    sequentialList: z.ZodOptional<z.ZodNullable<z.ZodObject<Pick<{
        sequentialKey: z.ZodString;
        MdxNote: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        Ipynb: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    }, "sequentialKey">, "strip", z.ZodTypeAny, {
        sequentialKey: string;
    }, {
        sequentialKey: string;
    }>>>;
    sequentialKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, import("../subject").Subject[], {
        value: string;
    }[] | undefined>;
    quickLinkId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    equationIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    noLog: z.ZodDefault<z.ZodBoolean>;
    saveFormatted: z.ZodDefault<z.ZodBoolean>;
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tags: import("../tag").Tag[];
    id: number | null;
    href: string | null;
    title: string;
    noteType: string & z.BRAND<"DocTypeName">;
    bookmarked: boolean;
    isProtected: boolean | null;
    latexTitle: string | null;
    summary: string | null;
    citationsListOrder: string[];
    importantValues: number[];
    sequentialIndex: number | null;
    floatImages: boolean;
    trackRemote: boolean;
    outgoingQuickLinks: string[];
    lastSync: Date | null;
    topics: import("../topic").Topic[];
    subjects: import("../subject").Subject[];
    equationIds: string[];
    noLog: boolean;
    saveFormatted: boolean;
    rootRelativePath?: string | null | undefined;
    formatted?: string | null | undefined;
    remoteUrl?: string | null | undefined;
    firstSync?: Date | null | undefined;
    sequentialList?: {
        sequentialKey: string;
    } | null | undefined;
    sequentialKey?: string | null | undefined;
    quickLinkId?: string | null | undefined;
}, {
    id: number | null;
    href: string | null;
    title: string;
    noteType: string;
    latexTitle: string | null;
    summary: string | null;
    sequentialIndex: number | null;
    lastSync: ((string | Date) & (string | Date | undefined)) | null;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    bookmarked?: boolean | undefined;
    isProtected?: boolean | null | undefined;
    rootRelativePath?: string | null | undefined;
    formatted?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    importantValues?: number[] | undefined;
    floatImages?: boolean | undefined;
    remoteUrl?: string | null | undefined;
    trackRemote?: boolean | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    sequentialList?: {
        sequentialKey: string;
    } | null | undefined;
    sequentialKey?: string | null | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    quickLinkId?: string | null | undefined;
    equationIds?: string[] | undefined;
    noLog?: boolean | undefined;
    saveFormatted?: boolean | undefined;
}>;
export type MdxNoteSummaryOutputWithMdxTransforms = z.output<typeof mdxNoteSummaryWithMdxTransforms>;
//# sourceMappingURL=withMdxTransforms.d.ts.map