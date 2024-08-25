import { branchOptionValues, BranchValue } from "../utils/options.js"
import enq from "enquirer";

const { prompt } = enq;

export const getBranchSelection = async (): Promise<BranchValue> => {
    let res = await prompt({
        type: "select",
        name: "branch",
        message: "Which branch?",
        initial: "main",
        /* @ts-ignore */
        choices: branchOptionValues
    })
    return (res && "branch" in res) ? res.branch as BranchValue : "main"
}
