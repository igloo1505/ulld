import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";



export async function POST(req: NextRequest){
        try {
            let { preferFs }: { preferFs?: boolean | "toggle" } = await req.json()
            let cur = req.cookies.get("preferFs")?.value
            let res = new NextResponse(JSON.stringify({ success: true, ns: preferFs === "toggle" ? !Boolean(cur) : !preferFs }));
            if (preferFs === "toggle") {
                if (cur) {
                    preferFs = false
                } else {
                    preferFs = true
                }
            }
            if (preferFs) {
                res.cookies.set("preferFs", "true")
            } else {
                res.cookies.delete("preferFs")
            }
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
}
