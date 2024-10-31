import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from "fs";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { ensureRootRelative } from "@ulld/utilities/fsUtils";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const appConfig = await readAppConfig();
    try {
        const file = req.nextUrl.searchParams.get("file");
        if (!file) {
            return new NextResponse(
                JSON.stringify({
                    msg: "file not found",
                    toastDescription: "File was not found.",
                    toastVariant: "destructive",
                }),
            );
        }
        let f = ensureRootRelative(file, appConfig.fsRoot);
        let fileContent = await fs.promises.readFile(`${appConfig.fsRoot}${f}`, {
            encoding: "utf-8",
        });
        return new NextResponse(JSON.stringify({ fileContent, success: true }));
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
}
