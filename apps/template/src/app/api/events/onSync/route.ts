import { prisma } from "@ulld/database";
import { cleanDatabase } from "@ulld/api/trpcInternalMethods/maintenance/cleanDatabase";
import { getAutoSettingsWithRegex } from "@ulld/api/trpcInternalMethods/settings/autoSettings/getAutosettingWithRegex";
import { syncAutoSettings } from "@ulld/api/trpcInternalMethods/settings/autoSettings/syncAutoSettings";
import { syncConfig } from "@ulld/api/trpcInternalMethods/syncing/config/syncConfig";
import {
    syncDirRecursively,
    UniversalMdxProps,
} from "@ulld/api/trpcInternalMethods/syncing/mdx/syncDirRecursively";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { readBuildData } from "@ulld/developer/readBuildData";
import { syncOptionsSchema } from "@ulld/api/schemas/syncing/syncOptions";
import { UlldGlob } from "@ulld/utilities/glob";
import onSyncMethods from "#/methods/events/methodLists/syncMethods";
import { NextResponse } from "next/server";
import { unifiedMdxParser } from "#/methods/parsers/mdxParser";
import { syncBib } from "@ulld/api/trpcInternalMethods/bib/syncBib"

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
    let data = await req.json();
    let errorNotifications: {errorKey: string}[] = []
    try {

        let opts = syncOptionsSchema.parse(data);

        let config = await readAppConfig();

        let buildData = await readBuildData();
        

        if (opts?.cleanBeforeSync && process.env.NODE_ENV === "development") {
            await cleanDatabase(prisma);
        }

        const _autoSettings = await getAutoSettingsWithRegex(prisma, config);

        let universalMdxProps: Omit<UniversalMdxProps, "bookmarked" | "rootRelativePath"> = {
            autoSettings: _autoSettings,
            opts: opts,
            appConfig: config,
            buildData: buildData,
            unifiedMdxParser: unifiedMdxParser,
            prisma: prisma,
        };

        await syncAutoSettings(prisma, config);
        let glob = new UlldGlob(config.fsRoot);
        for await (const f of onSyncMethods) {
            console.log(`Calling ${f.pluginId}'s onSync method...`)
            await f.func(opts, config, buildData, glob, _autoSettings, prisma);
        }
        let res = await syncBib(config, opts.bibId)
        if("errorKey" in res && res.errorKey){
            errorNotifications.push(res)
        }
        await syncDirRecursively(universalMdxProps);
        await syncConfig();
        return new NextResponse(
            JSON.stringify({
                success: true,
                errorNotifications
            }),
            {
                status: 200,
            },
        );
    } catch (err) {
        console.error(err);
        return new NextResponse(
            JSON.stringify({
                success: false,
            }),
            {
                status: 500,
            },
        );
    }
}
