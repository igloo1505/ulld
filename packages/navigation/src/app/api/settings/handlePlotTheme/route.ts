import { NextResponse } from "next/server";
import { UlldPlotTheme } from "@ulld/utilities/types";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const theme: UlldPlotTheme = (body.theme as UlldPlotTheme) || "bright";
        const res = new NextResponse(JSON.stringify({ success: true }));
        res.cookies.set("ulld-plot-theme", theme || "");
        return res;
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
}
