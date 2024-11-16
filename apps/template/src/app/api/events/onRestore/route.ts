import { prisma } from "@ulld/database";
import { NextResponse } from "next/server";
import onRestoreMethods from "#/methods/events/methodLists/restoreMethods";
import { OnRestoreReturnData } from "@ulld/types";

export async function POST(req: Request) {
    let body = await req.json();
    if (!body.restoreData) {
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: "Could not restore data. No data was provided.",
            } satisfies OnRestoreReturnData),
            {
                status: 500,
            },
        );
    }
    try {
        for await (const f of onRestoreMethods) {
            if (body.restoreData[f.pluginId]) {
                await f.func(body.restoreData[f.pluginId], prisma);
            }
        }
        return new NextResponse(JSON.stringify({ success: true } satisfies OnRestoreReturnData), { status: 200 });
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false } satisfies OnRestoreReturnData), {
            status: 500,
        });
    }
}
