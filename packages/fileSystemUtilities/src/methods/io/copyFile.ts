import fs from 'fs'
import path from 'path'

export const copyFile = async (inputPath: string, outputPath: string): Promise<void> => {
    return fs.promises.copyFile(inputPath, outputPath)
}


/** Both input path and output path should be relative to the ULLD_DEV_ROOT env variable. */
export const copyDevRootFile = async (inputPath: string, outputPath: string): Promise<void> => {    
const rootDir = process.env.ULLD_DEV_ROOT

if(!rootDir){
    throw new Error("You need to set the ULLD_DEV_ROOT env variable to continue.")
}
    return copyFile(path.join(rootDir, inputPath), path.join(rootDir, outputPath))
}
