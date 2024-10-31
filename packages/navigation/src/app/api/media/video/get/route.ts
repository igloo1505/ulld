import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import parseRange from "range-parser";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { streamFile } from "@ulld/utilities/streamFile";


export const dynamic = "force-dynamic";

const mb = 10 ** 6;

const getFileQueryOrReturn = (req: NextRequest, extraBody?: object) => {
  let file = req.nextUrl.searchParams.get("file");
  let output =
    file ||
    new NextResponse(
      JSON.stringify({
        ...extraBody,
        success: false,
        msg: "No file provided to " + req.url,
      }),
    );
  return {
    success: Boolean(file),
    output,
  };
};

export async function GET(req: NextRequest) {
  const appConfig = await readAppConfig();
  try {
    const range = req.headers.get("range");
    if (!range) {
      console.log("Range headers not found");
      return new NextResponse(
        JSON.stringify({ success: false, msg: "A range header is required." }),
        {
          status: 500,
        },
      );
    }
    const { success, output } = getFileQueryOrReturn(req);
    if (!success) return output;
    const fp = path.join(appConfig.fsRoot, `${output}`);
    var stat = await fs.promises.stat(fp);
    let parsedRange = parseRange(stat.size, range);
    /// @ts-ignore
    const start = parsedRange[0].start as number;
    /// @ts-ignore
    const end = parsedRange[0].end as number;
    const contentLength = end - start + 1;
    const videoStream = streamFile(fp, { start, end });
    const res = new NextResponse(videoStream, { status: 206 });
    res.headers.set("Content-Range", `bytes ${start}-${end}/${stat.size}`);
    res.headers.set("Accept-Ranges", "bytes");
    res.headers.set("Content-Length", `${contentLength}`);
    res.headers.set("Content-Type", "video/mp4");
    return res;
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ success: false }));
  }
}
