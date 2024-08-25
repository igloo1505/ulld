import { globSync } from "glob";
import path from "path";
import { FileData } from "../../packages/utilities/src/classes/file/main";

const createTypeTunnel = (tunnelFile: string, overWrite: boolean = false, _dir?: string) => {
    if(!process.env.ULLD_DEV_ROOT){
        console.error("No process.env.ULLD_DEV_ROOT variable. Cannot continue.")
        return
    }

    console.log("tunnelFile: ", tunnelFile)
    if(!tunnelFile.includes(process.env.ULLD_DEV_ROOT!)){
        tunnelFile = path.join(process.env.ULLD_DEV_ROOT!, tunnelFile)
    }
    console.log("tunnelFile: ", tunnelFile)
    let dir = _dir ? _dir : path.dirname(tunnelFile);

    let files = globSync("**/*.ts", {
        cwd: dir,
        nodir: true,
    })

    const content = files.filter((x) => x !== tunnelFile).map((x) => {
        return `export type * from "./${x}";`
    }).join("\n")


    let f = new FileData(tunnelFile)

    let existingContent = f.exists() ? `${f.getContent()}\n` : ""


   let newContent = overWrite ? content : `${existingContent}${content}`

    console.log("newContent: ", newContent)

    f.writeContent(newContent)
     
};


createTypeTunnel("/Users/bigsexy/Desktop/current/ulld/packages/utilities/types/main.d.ts", true)
