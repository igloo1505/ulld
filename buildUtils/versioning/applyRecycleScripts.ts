import fs from 'fs'
import { globSync } from 'glob'
import path from 'path'
import { JsonFile } from '../../packages/utilities/src/classes/file/jsonFile'

const targetRoot = "/Users/bigsexy/Desktop/current/ulld"
const recycleRoot = "/Users/bigsexy/Desktop/current/ulldRecycle/"

interface PathItem {
   targetPath: string
    recyclePath: string
    } 

let items: PathItem[] = []

const packageJsonFiles = globSync("{apps,packages}/*/package.json", {
    cwd: targetRoot,
    ignore: "**node_modules**"
})

for (const p of packageJsonFiles) {
    items.push({
        targetPath: path.join(targetRoot, p),
        recyclePath: path.join(recycleRoot, p),
    })
}


for (const item of items) {
      let input = new JsonFile(item.recyclePath)
      let targetOutput = new JsonFile(item.targetPath)
    if(input.exists() && targetOutput.exists()){
        let outputContent = targetOutput.getJsonContent()
        let inputContent = input.getJsonContent()
        outputContent.version = inputContent.version
        // outputContent.scripts = inputContent.scripts
        // outputContent.exports = inputContent.exports
        targetOutput.writeContent(outputContent)
    }
}
