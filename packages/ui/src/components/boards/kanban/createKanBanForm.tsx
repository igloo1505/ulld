"use client"
import FormFieldWithBadgeList from '#/components/inputs/formFieldWithBadgeList'
import { Button } from '#/components/shad/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '#/components/shad/ui/form'
import { Input } from '#/components/shad/ui/input'
import { client } from '#/trpc/client'
import { CreateKanBanFormDataSchemaWithInputs, createKanBanFormDataSchema, createKanBanSchema } from '#/types/contentTypeSpecific/vancun'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { MouseEvent } from 'react'
import { useForm } from 'react-hook-form'


interface CreateKanBanFormProps {

}


const CreateKanBanForm = (props: CreateKanBanFormProps) => {
    const form = useForm<CreateKanBanFormDataSchemaWithInputs>({
        resolver: zodResolver(createKanBanSchema),
        defaultValues: {
            title: "",
            subjects: [],
            topics: [],
            tags: [],
        }
    })

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        let data = form.getValues()
        let newData = createKanBanFormDataSchema.parse(data)
        console.log("data: ", newData)
        let res = await client.boards.createNewBoard.mutate(newData)
        console.log("res: ", res)
        if (res.id) {
            window.location.pathname = `/boards/${res.id}`
        }
    }

    return (
        <Form
            {...form}
        >
            <form className="space-y-8 max-w-screen-sm w-5/6">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Do Work..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Title for entire board.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormFieldWithBadgeList
                    form={form}
                    badgeFormKey="topics"
                    inputFormKey="topicInput"
                    inputLabel="Topics"
                />
                <FormFieldWithBadgeList
                    form={form}
                    badgeFormKey="tags"
                    inputFormKey="tagInput"
                    inputLabel="Tags"
                />
                <FormFieldWithBadgeList
                    form={form}
                    badgeFormKey="subjects"
                    inputFormKey="subjectInput"
                    inputLabel="Subjects"
                />
                <Button
                    onClick={handleSubmit}
                >Submit</Button>
            </form>
        </Form>

    )
}


CreateKanBanForm.displayName = "CreateKanBanForm"


export default CreateKanBanForm;
