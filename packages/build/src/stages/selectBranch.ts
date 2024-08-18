import { branchOptionValues, BranchValue } from "../utils/options"
import { prompt } from "enquirer";

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
