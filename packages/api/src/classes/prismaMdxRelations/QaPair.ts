import { Prisma } from '@prisma/client'
import { prisma } from '@ulld/database/db'
import { serverLogger } from '@ulld/logger/server'


interface QAFlashCardProps {
    question: string
    answer: string
    description?: string
    secondaryLabel?: string
    topic?: string[]
    subject?: string[]
    tags?: string[]
    referenceId: string
}

export class QuestionAnswerFlashCard implements QAFlashCardProps {
    question: string
    answer: string
    description?: string
    secondaryLabel?: string
    topic?: string[]
    subject?: string[]
    tags?: string[]
    referenceId: string
    constructor(props: QAFlashCardProps, referenceId: string) {
        this.question = props.question
        this.answer = props.answer
        this.description = props.description
        this.secondaryLabel = props.secondaryLabel
        this.topic = props.topic
        this.subject = props.subject
        this.referenceId = props.referenceId || referenceId
        this.tags = props.tags
    }
    createInput() {
        let data = {
            id: this.referenceId,
            question: this.question,
            answer: this.answer,
            description: this.description,
            secondaryLabel: this.secondaryLabel,
            ...(this.tags && {
                tags: {
                    connectOrCreate: this.tags.map((t) => ({
                        where: {
                            value: t
                        },
                        create: {
                            value: t
                        }
                    }))
                }
            }),
            ...(this.subject && {
                subject: {
                    connectOrCreate: this.subject.map((t) => ({
                        where: {
                            value: t
                        },
                        create: {
                            value: t
                        }
                    }))
                }
            }),
            ...(this.topic && {
                topic: {
                    connectOrCreate: this.topic.map((t) => ({
                        where: {
                            name: t
                        },
                        create: {
                            name: t
                        }
                    }))
                }
            }),
        } satisfies Prisma.QAPairCreateInput
        return data
    }
    async upsert() {
        let create = this.createInput()
        if (!create) {
            serverLogger.error(`${this.referenceId || this.question} does not meet the neccessary requirements to seed into the database.`)
            return
        }
        await prisma.qAPair.upsert({
            where: {
                id: this.referenceId,
            },
            create: create,
            update: create
        })
    }
}
