import path from "path";
import { FileData } from "../../packages/utilities/src/classes/file/main";

let root = process.env.ULLD_DEV_ROOT


if(!root){
    throw new Error("No ULLD_DEV_ROOT env variable found.")
}

let input = new FileData(path.join(
    root,
    "node_modules/.prisma/client/index.d.ts",
))

input.throwIfNotExists()

let content = input.getContent()

let file = new FileData(path.join(root, "packages/types/src/database.d.ts"), false)

file.writeContent(content)
