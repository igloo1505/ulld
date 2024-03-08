"use client"
import React from 'react'
import { UseFormReturn } from 'react-hook-form';
import { QAPairInput } from './flipcardTypes';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from '#/components/shad/ui/form'
import { Textarea } from '#/components/shad/ui/textarea';
import { Input } from '#/components/shad/ui/input';
import { onEnter } from '#/actions/listeners';
import { Badge } from '#/components/shad/ui/badge';
import { Button } from '#/components/shad/ui/button';
import { Prisma } from "@prisma/client"
import { client } from '#/trpc/client';
import { useToast } from '#/components/shad/ui/use-toast';
import { BadgeContainer } from '#/components/inputs/formFieldWithBadgeList';
import { getRandomId } from '#/utils/ui';


interface FlipCardFormProps {
    form: UseFormReturn<QAPairInput & {
        tagInput: string;
        topicInput: string;
        subjectInput: string;
    }, any, undefined>
}


const FlipCardForm = ({ form }: FlipCardFormProps) => {
    const { toast } = useToast()
    const saveFlipcard = async () => {
        let v = form.getValues()
        let res = await client.saveQA.mutate({
            id: v.id as string || getRandomId(20) as string,
            answer: v.answer,
            question: v.question,
            description: v.description,
            tags: v.tags || [],
            topic: v.topic || [],
            subject: v.subject || []
        })
        toast({
            title: "Success!",
            description: "Question & Answer card saved successfully."
        })
        form.reset()
    }

    return (
        <div className={"w-full h-full flex flex-col items-start justify-center gap-3"}>
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                        <FormItem className={"w-full"}>
                            <FormLabel>Question</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Question"
                                    className="w-full"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                />
                <FormField
                    control={form.control}
                    name="answer"
                    render={({ field }) => (
                        <FormItem className={"w-full"}>
                            <FormLabel>Answer</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Answer"
                                    className=""
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className={"w-full"}>
                            <FormLabel>Description (Optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Description"
                                    className=""
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Optional.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                />
                <BadgeContainer
                    badges={form.watch("tags")}
                    onClick={(i: number) => {
                        form.setValue("tags", form.getValues("tags").filter((t, idx) => idx !== i))
                    }}
                />
                <FormField
                    control={form.control}
                    name="tagInput"
                    render={({ field }) => (
                        <FormItem className={"w-full"}>
                            <FormLabel>Tags (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Tag"
                                    className=""
                                    {...field}
                                    onKeyDown={(e) => onEnter(e, (e) => {
                                        let val = form.getValues("tagInput")
                                        if (val === "") return
                                        e.preventDefault()
                                        form.setValue("tags", [...form.getValues("tags"), val])
                                        form.setValue("tagInput", "")
                                    })}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                />
                <BadgeContainer
                    badges={form.watch("topic")}
                    onClick={(i: number) => {
                        form.setValue("topic", form.getValues("topic").filter((t, idx) => idx !== i))
                    }}
                />
                <FormField
                    control={form.control}
                    name="topicInput"
                    render={({ field }) => (
                        <FormItem className={"w-full"}>
                            <FormLabel>Topics (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Topic"
                                    className=""
                                    {...field}
                                    onKeyDown={(e) => onEnter(e, (e) => {
                                        let val = form.getValues("topicInput")
                                        if (val === "") return
                                        e.preventDefault()
                                        form.setValue("topic", [...form.getValues("topic"), val])
                                        form.setValue("topicInput", "")
                                    })}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                />
                <BadgeContainer
                    badges={form.watch("subject")}
                    onClick={(i: number) => {
                        form.setValue("subject", form.getValues("subject").filter((t, idx) => idx !== i))
                    }}
                />
                <FormField
                    control={form.control}
                    name="subjectInput"
                    render={({ field }) => (
                        <FormItem className={"w-full"}>
                            <FormLabel>Subjects (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Subject"
                                    className=""
                                    {...field}
                                    onKeyDown={(e) => onEnter(e, (e) => {
                                        let val = form.getValues("subjectInput")
                                        if (val === "") return
                                        e.preventDefault()
                                        form.setValue("subject", [...form.getValues("subject"), val])
                                        form.setValue("subjectInput", "")
                                    })}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                />
            </Form>
            <div className={"w-full flex flex-row justify-end items-center py-3"}><Button onClick={saveFlipcard}>Save</Button></div>
        </div>
    )
}


FlipCardForm.displayName = "FlipCardForm"


export default FlipCardForm;
