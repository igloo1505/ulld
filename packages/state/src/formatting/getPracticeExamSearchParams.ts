export interface PracticeExamSearchParams {
    tags?: string[]
    subjects?: string[]
    topics?: string[]
    timeLimit?: number | string
}


export const getPracticeExamSearchParams = (data: Omit<PracticeExamSearchParams, "timeLimit"> & { timeLimit?: number }) => {
    let p = new URLSearchParams()
    for (const k of ["tags", "subjects", "topics"]) {
        if (data[k as keyof PracticeExamSearchParams]) {
            let d = data[k as keyof Omit<PracticeExamSearchParams, "timeLimit">] as string[]
            d.forEach((t) => {
                p.append(k, t)
            })
        }
    }
    if (data.timeLimit) {
        p.set("timeLimit", `${data.timeLimit}`)
    }
    return p.toString()
}
