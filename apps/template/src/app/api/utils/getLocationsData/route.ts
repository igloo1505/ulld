import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { formatLocationData } from "@ulld/state/formatting/formatLocationData"


export async function GET(req: NextRequest){ 
        try {
            let data = formatLocationData()
            return new NextResponse(JSON.stringify({ data }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
}
