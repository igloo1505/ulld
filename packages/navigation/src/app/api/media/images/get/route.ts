import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { readAppConfig } from "@ulld/developer/readAppConfig";


export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    try {
        const internalConfig = await readAppConfig();
        const filename = req.nextUrl.searchParams.get("file");
        if (!filename) {
            return new NextResponse(
                JSON.stringify({
                    success: false,
                    msg: "Filename not found in params",
                }),
                { status: 500 },
            );
        }
        const fp = path.join(internalConfig.fsRoot, filename);
        const stat = fs.statSync(fp);
        let extension = fp.split(".").at(-1);
        if (!stat || !extension) {
            return new NextResponse(
                JSON.stringify({
                    success: false,
                    msg: `File or file extension not found for path ${fp}`,
                }),
            );
        }
        const data = await fs.promises.readFile(fp);
        const blob = new Blob([data]);
        // let buffer = await blob.arrayBuffer()
        let res = new NextResponse(blob, {
            status: 200,
        });
        res.headers.set(
            "Content-Type",
            `image/${extension.slice(1, extension.length)}`,
        );
        res.headers.set("Content-Length", `${stat.size}`);
        return res;
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
}
