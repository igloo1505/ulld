import cp from "child_process"
import chalk from "chalk"

export class ShellManager {
    constructor(){}
    tempFiles: string[] = []

    log(val: any, ...vals: any){
        console.log(val, ...vals)
    }

    ulld(){
        return `${chalk.hex("#0ba5e9")("U")}LLD`
    }

    // async genTempFile(content: string){
    //     let fileName  = "ulld_"
    //     Array(12).fill(0).forEach(() => fileName += validChars[Math.floor(Math.random() * validChars.length)])
    //     let tempDir = os.tmpdir()
    //     await fs.promises.writeFile(path.join(tempDir, ))
    // }

    clearLastTempFile(){
        if(this.tempFiles.length === 0){
            return
        }
        this.tempFiles = this.tempFiles.slice(0, this.tempFiles.length - 1)
    }

    // TODO: Handle this and route all shell commands through here
    async exec(val: string, cwd?: string){
        cp.execSync(val, {cwd})
    }
}
