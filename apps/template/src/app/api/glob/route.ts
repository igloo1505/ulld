import { readAppConfig } from "@ulld/developer/readAppConfig";
import { NextResponse } from "next/server";
import { getGlobServerSide } from "@ulld/utilities/getGlobServerSide";

export async function POST(req: Request) {
  let body = await req.json();

  try {
    let appConfig = await readAppConfig();
    let res = await getGlobServerSide(body, appConfig);

    return new NextResponse(
      JSON.stringify({
        filePaths: res,
      }),
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ msg: "Unable to gather fsRoot glob paths" }),
      { status: 500 },
    );
  }
}
