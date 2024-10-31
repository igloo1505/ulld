import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { parseBibFile } from "bibtex";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { BibCore } from "@ulld/api/classes/prismaMdxRelations/Bib";
import { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { prisma } from "@ulld/database";
import { bibCoreSchema } from "@ulld/api/generalPrismaSchemas";



export async function POST(req: NextRequest) {
    try {
        const appConfig = await readAppConfig();
        const { filename, bibId }: { filename: string; bibId?: number } =
            await req.json();
        let fn = filename
            ? `${filename}${filename.endsWith(".bib") ? "" : ".bib"}`
            : "citations.bib";
        const fp = path.join(appConfig.fsRoot, fn);
        const exists = fs.existsSync(fp);
        if (exists) {
            let content = fs.readFileSync(fp, { encoding: "utf-8" });
            let params = bibCoreSchema.parse({
                id: bibId,
                filename: fn,
            });
            let bibCore = new BibCore(params);
            let parsed = parseBibFile(content);
            bibCore.addEntries(BibEntry.fromFsList(parsed.entries_raw));
            let upsertArgs = bibCore.upsertArgs();
            let bib: any = {};
            if (upsertArgs) {
                bib = await prisma.bib.upsert(upsertArgs);
            }
            return new NextResponse(JSON.stringify({ bib, success: true }));
        }
        return new NextResponse(
            JSON.stringify({
                success: false,
                internalMsg: "Bib File does not appear to exist.",
            }),
        );
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
}
