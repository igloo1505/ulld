import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const file = req.nextUrl.searchParams.get("file");
    const fsRoot = req.nextUrl.searchParams.get("fsRoot");
    if (!file || !fsRoot)
      return new NextResponse(
        JSON.stringify({
          success: false,
          msg: file ? "No fsRoot provided" : "No file provided",
        }),
      );
    const fp = path.join(fsRoot, file);
    if (!fs.existsSync(fp)) {
      return new NextResponse(
        JSON.stringify({ success: "false", msg: `No model found at ${file}` }),
      );
    }
    const stat = fs.statSync(fp);
    const data = fs.readFileSync(fp);
    let blob = new Blob([data]);
    let res = new NextResponse(blob, {
      status: 200,
    });
    res.headers.set("Content-Type", "application/octet-stream");
    res.headers.set("Content-Disposition", `attachment; filename=${file}`);
    res.headers.set("Content-Length", `${stat.size}`);
    return res;
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ success: false }));
  }
}
