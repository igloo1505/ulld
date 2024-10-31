import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { BibCore } from "@ulld/api/classes/prismaMdxRelations/Bib";

export const dynamic = 'force-dynamic'


export async function GET(req: NextRequest){

        try {
            const params = req.nextUrl.searchParams
            console.log("Isbn Search Params: ", params)
            const manager = new BibCore()
            let results = await manager.queryIsbn(params.toString())
            return new NextResponse(JSON.stringify({ results, success: true }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
}

