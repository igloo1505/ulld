import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";


export async function POST(req: NextRequest){
        try {
            const { query } = await req.json()
            const qm = new NoteFilter("all", query)
            const config = await readAppConfig()
            await qm.getResults(config)
            return new NextResponse(JSON.stringify({
                results: qm.flattenForClient(),
                success: true
            }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
}
