import { serverClient } from "@ulld/api"

export interface FlipCardParams {
    tags?: string[] | string
}


export interface QAPairInput {
    question: string
    answer: string
    description: string
    tags: string[]
    topic: string[]
    subject: string[]
    id?: string
}

export type FlipCardReturnItem = Awaited<ReturnType<typeof serverClient.qa.getSpecificQA>>
