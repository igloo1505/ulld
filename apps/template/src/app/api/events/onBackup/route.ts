import { prisma } from "@ulld/database";
import { NextResponse } from "next/server";
import onBackupMethods from "#/methods/events/methodLists/backupMethods";
import superjson from "superjson";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { readBuildData } from "@ulld/developer/readBuildData";
import { OnBackupReturnData } from "@ulld/types";

export async function GET(req: Request) {
    let appConfig = await readAppConfig();
    let buildData = await readBuildData();
    try {
        let data: Record<string, any> = {};
        for await (const f of onBackupMethods) {
            let pluginData = await f.func(appConfig, buildData, prisma);
            if (pluginData) {
                data[f.pluginId] = pluginData;
            }
        }
        let backupData: OnBackupReturnData = {
            success: true,
            backupData: superjson.stringify(data),
        };
        return new NextResponse(JSON.stringify(backupData), { status: 200 });
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }), {
            status: 500,
        });
    }
}
