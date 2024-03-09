"use client"
import React from 'react'
import { Prisma } from '@prisma/client'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form, Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea, Input, Badge, useToast } from '@ulld/tailwind/base'
import { UseFormReturn } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"
import { client } from '@ulld/api'
import { onEnter } from '@ulld/state'
import FullFormCodeEditorWithModal from '../../menus/fullForm/fullFormCodeEditor'
import { technologiesNameMap } from '@ulld/utilities'




type FormType = UseFormReturn<Required<Prisma.SnippetCreateInput> & {
    keywordInput?: string | undefined
    id?: number
}, any, undefined>

interface AddSnippetFormProps {
    form: FormType
}



const AddSnippetForm = ({ form }: AddSnippetFormProps) => {
    const { toast } = useToast()
    const handleSubmit = async () => {
        let data = form.getValues()
        delete data.keywordInput
        let success = await client.snippets.saveSnippet.mutate(data)
        if (success) {
            if (data.id) {
                /* router. */
            } else {
                form.reset()
                toast({
                    title: "Success",
                    description: "Snippet was added successfully",
                })
            }
        }
    }

    const getKeywords = (): string[] => {
        return form.getValues("keywords") as string[]
    }

    const appendKeyword = () => {
        const currentValue = getKeywords() || [] as string[]
        form.setValue("keywords", [...currentValue, form.getValues("keywordInput") || ""])
        form.setValue("keywordInput", "")
    }

    const removeKeyword = (content: string) => {
        const currentValue = getKeywords() || []
        form.setValue("keywords", currentValue.filter((f: string) => f !== content))
    }

    return (
        <Form {...form}>
            <form className="space-y-8">
                <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Language</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.keys(technologiesNameMap).map((k) => {
                                                return <SelectItem key={k} value={k}>{technologiesNameMap[k as keyof typeof technologiesNameMap]}</SelectItem>
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>
                                    Primary technology snippet belongs to.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                />
                <FullFormCodeEditorWithModal
                    label="Content"
                    desc="Snippet Content"
                    name="content"
                    language={form.watch("language")}
                    placeholder="Snippet content goes here"
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="A short description."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Description of what this snippet does.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                />
                <FormField
                    control={form.control}
                    name="keywordInput"
                    render={(props) => {
                        let _keywords = form.watch("keywords") as string[]
                        return (
                            <>
                                {_keywords?.length > 0 && (<div className={"w-full h-fit flex flex-row justify-start items-center gap-2 flex-wrap"}>
                                    {_keywords?.map((w: string, i: number) => {
                                        return <Badge onClick={() => removeKeyword(w)} variant="secondary" className={"cursor-pointer"} key={`kw-${i}`}>{w}</Badge>
                                    })}
                                </div>)}
                                <Input placeholder="Tags" {...props.field} onKeyDown={(e) => onEnter(e, () => appendKeyword(), "onEnter")} />
                            </>
                        )
                    }}
                />
                <Button onClick={handleSubmit}>Submit</Button>
                <DevTool control={form.control} />
            </form>
        </Form>
    )
}


AddSnippetForm.displayName = "AddSnippetForm"


export default AddSnippetForm;
