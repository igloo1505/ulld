import { z } from 'zod';
export declare const settingBooleanKeySchema: z.ZodEnum<["tooltips", "cleanOnSync", "summary_showTags", "summary_showCitations"]>;
export declare const settingsRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    getSettings: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _ctx_out: object;
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
    }, {
        id: number;
        tooltips: boolean;
        title: string;
        summary_showCitations: boolean;
        summary_showTags: boolean;
        landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
        lockedLandingImage: string | null;
        cleanOnSync: boolean;
        firstSync: Date;
        lastSync: Date;
    } | null>;
    toggleBooleanSetting: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: "tooltips" | "cleanOnSync" | "summary_showTags" | "summary_showCitations";
        _input_out: "tooltips" | "cleanOnSync" | "summary_showTags" | "summary_showCitations";
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: number;
        tooltips: boolean;
        title: string;
        summary_showCitations: boolean;
        summary_showTags: boolean;
        landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
        lockedLandingImage: string | null;
        cleanOnSync: boolean;
        firstSync: Date;
        lastSync: Date;
    } | undefined>;
    lockCurrentLandingImage: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: string;
        _input_out: string;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        lockedLandingImage: string | null;
    } | undefined>;
    updateSettings: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: import(".prisma/client").Prisma.SettingsCreateInput;
        _input_out: import(".prisma/client").Prisma.SettingsCreateInput;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: number;
        tooltips: boolean;
        title: string;
        summary_showCitations: boolean;
        summary_showTags: boolean;
        landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
        lockedLandingImage: string | null;
        cleanOnSync: boolean;
        firstSync: Date;
        lastSync: Date;
    } | undefined>;
}>;
//# sourceMappingURL=settings.d.ts.map