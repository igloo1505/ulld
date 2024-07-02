import fs from 'fs'
import path from 'path'
import {globby} from 'globby'

export const generateComponentMaps = async () => {
     const files = await globby(`${path.join(process.cwd(), "/src/docs")}/*.mdx`)
    console.log("files: ", files)
}
