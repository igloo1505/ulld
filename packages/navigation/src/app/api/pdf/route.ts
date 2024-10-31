import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from "fs";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { getCorsHeaders, optionsMethodResponse } from "@ulld/utilities/cors";
import { makeAbsolute } from "@ulld/utilities/pathUtilsServerSide";


export async function GET(req: NextRequest) {
  try {
    const appConfig = await readAppConfig();
    const file = req.nextUrl.searchParams.get("file");
    if (!file)
      return new NextResponse(
        JSON.stringify({ success: false, toastError: "PDF was not found." }),
        { status: 404 },
      );
    let fp = makeAbsolute(file, appConfig.fsRoot)
    if (!fs.existsSync(fp)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          toastMsg: `The pdf at ${fp} was not found.`,
          toastTitle: "Uh Oh.",
          toastVariant: "destructive",
        }),
      );
    }
    var stat = fs.statSync(fp);
    const data = await fs.promises.readFile(fp);
    let blob = new Blob([data]);
    let res = new NextResponse(blob, getCorsHeaders(req, 200));
    res.headers.set("Content-Type", "application/octet-stream");
    res.headers.set("Content-Disposition", `attachment; filename=${file}`);
    res.headers.set("Content-Length", `${stat.size}`);
    return res;
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ success: false }));
  }
}

export const OPTIONS = optionsMethodResponse;
