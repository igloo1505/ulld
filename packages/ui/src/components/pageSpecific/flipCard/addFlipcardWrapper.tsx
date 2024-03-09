"use client"
import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FlipCardReturnItem, QAPairInput } from './flipcardTypes';
import FlipCardForm from './flipCardForm';
import FlipcardLiveEditDisplay from './flipcardLiveEditDisplay';


interface AddQAWrapperProps {
    item: null | FlipCardReturnItem
}



const QaCardSchema: z.ZodType<QAPairInput & { tagInput: string, topicInput: string, subjectInput: string }> = z
    .object({
        question: z.string(),
        answer: z.string(),
        description: z.string(),
        tags: z.string().array(),
        topic: z.string().array(),
        subject: z.string().array(),
        tagInput: z.string(),
        topicInput: z.string(),
        subjectInput: z.string(),
        id: z.string()
    })
    .strict();


const AddQAWrapper = ({ item }: AddQAWrapperProps) => {
    const form = useForm<z.infer<typeof QaCardSchema>>({
        resolver: zodResolver(QaCardSchema),
        defaultValues: {
            question: item?.question || "",
            answer: item?.answer || "",
            description: item?.description || "",
            tags: item?.tags.map((t: { value: string }) => t.value) || [],
            topic: item?.topics.map((t) => t.value) || [],
            subject: item?.subjects.map((t) => t.value) || [],
            tagInput: "",
            topicInput: "",
            subjectInput: "",
            ...(item?.id && { id: item.id })
        },
    })
    return (
        <div className={"w-full flex flex-col-reverse md:grid md:grid-cols-[1fr_600px] md:gap-6 mt-6"}>
            <FlipCardForm form={form} />
            <FlipcardLiveEditDisplay
                question={form.watch("question")}
                answer={form.watch("answer")}
                description={form.watch("description")}
                tags={form.watch("tags")}
                topic={form.watch("topic")}
                subject={form.watch("subject")}
            />
        </div>
    )


}


AddQAWrapper.displayName = "AddQAWrapper"


export default AddQAWrapper;
