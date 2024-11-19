import fs from 'fs'
import path from 'path'

const rootDir = process.env.ULLD_DEV_ROOT

if(!rootDir){
    throw new Error("You need to set the ULLD_DEV_ROOT env variable to continue.")
}

const content = fs.readFileSync(path.join(rootDir, "packages/database/prisma/schema.prisma"), {
    encoding: "utf-8"
})


let lines = content.split("\n")

const splitIndex = lines.findIndex((x) => x.includes("<<CUT-HERE>>"))

if(splitIndex > 0) {
   lines = lines.slice(0, splitIndex)
}

fs.writeFileSync(path.join(rootDir, "apps/template/src/database/schema.prisma"), lines.join("\n"), {
    encoding: "utf-8"
})

// eslint-disable-next-line no-console -- Just a build script #MoveToLoggerPackage
console.info("Copied database schema to the template app sucessfully.")
