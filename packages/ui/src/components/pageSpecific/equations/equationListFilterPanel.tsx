"use client"
import React, { useEffect, useState } from 'react'
import { EquationSearchParams, formatEquationSearchParams } from './utils'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Button, buttonVariants } from '@ulld/tailwind/base'
import { useForm } from 'react-hook-form'
import EquationTagComboBox from './equationTagComboBox'
import EquationVariableComboBox from './equationVariableComboBox'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import StringBadgeList from '../../inputs/stringBadgeList'
import { ArrayUtilities } from '@ulld/utilities'



interface EquationFilterPanelProps {
    searchParams: EquationSearchParams
    tags: { value: string }[]
    variables: string[]
}


const equationFilterSchema = z.object({
    query: z.string().optional(),
    tags: z.string().array().optional(),
    variables: z.string().array().optional()
})




const EquationFilterPanel = ({ tags, searchParams, variables }: EquationFilterPanelProps) => {
    const router = useRouter()
    const [formHasData, setFormHasData] = useState(false)
    const form = useForm<z.infer<typeof equationFilterSchema>>({
        resolver: zodResolver(equationFilterSchema),
        defaultValues: {
            query: "",
            tags: [],
            variables: []
        }
    })

    const formData = form.watch()

    useEffect(() => {
        if (searchParams.query) {
            form.setValue("query", searchParams.query)
        }
        if (searchParams.tags) {
            form.setValue("tags", ArrayUtilities.beArray(searchParams.tags))
        }
        if (searchParams.variables) {
            form.setValue("variables", ArrayUtilities.beArray(searchParams.variables))
        }
    }, [searchParams])


    useEffect(() => {
        setFormHasData(!Boolean(formData.query === "" && formData.tags?.length === 0 && formData.variables?.length === 0))
    }, [formData])



    const onSubmit = () => {
        /* TODO: Come back and implement a 'by value' search and sort method here, as well as in the UI once `relatedValues` key is being populated in the `/equations/add...` page. */
        const vals = form.getValues()
        let params = formatEquationSearchParams({
            tags: vals.tags,
            variables: vals.variables,
            query: vals.query === "" ? undefined : vals.query
        })
        router.push(`/equations?${params}`)
    }

    return (
        <div className={"w-fit h-fit bg-card text-card-foreground px-5 py-3 rounded-lg border shadow-md"}>
            <Form {...form}>
                <form className="flex flex-col lgr:flex-row justify-center items-start lgr:justify-between lgr:items-center gap-4">
                    <FormField
                        control={form.control}
                        name="query"
                        render={({ field }) => (
                            <FormItem
                                className={"w-full lgr:w-fit"}
                            >
                                <FormLabel>Search</FormLabel>
                                <FormControl>
                                    <Input placeholder="search..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Search based on a case insensitive text regex.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className={"flex flex-row justify-start items-start gap-4 mt-3"}>
                        <EquationTagComboBox
                            form={form}
                            tags={tags}
                            toggle={(t: string) => {
                                let cur = form.getValues("tags") || []
                                let nv = cur.includes(t) ? cur.filter((l) => l !== t) : [...cur, t]
                                form.setValue("tags", nv)
                            }}
                        />
                        <EquationVariableComboBox
                            form={form}
                            vars={variables}
                            toggle={(t: string) => {
                                let cur = form.getValues("variables") || []
                                let nv = cur.includes(t) ? cur.filter((l) => l !== t) : [...cur, t]
                                form.setValue("variables", nv)
                            }}
                        />
                    </div>
                </form>
                <StringBadgeList
                    items={form.watch("tags") || []}
                    label="Tags"
                    hideIfNone
                    uniqueKeyPrefix='tag'
                    onClick={(s, i) => {
                        form.setValue("tags", form.getValues("tags")?.filter((_s, idx) => idx !== i) || [])
                    }}
                />
                <StringBadgeList
                    items={form.watch("variables") || []}
                    label="Variables"
                    hideIfNone
                    uniqueKeyPrefix='var'
                    onClick={(s, i) => {
                        form.setValue("variables", form.getValues("variables")?.filter((_v, idx) => idx !== i) || [])
                    }}
                />
                <div className={"flex flex-row justify-end items-center mt-3 gap-4"}>
                    {formHasData && <Link
                        onClick={() => form.reset()}
                        className={buttonVariants({ variant: "destructive" })} href="/equations">Clear</Link>}
                    <Button onClick={form.handleSubmit(onSubmit)}>Search</Button>
                </div>
            </Form>
        </div>
    )
}


EquationFilterPanel.displayName = "EquationFilterPanel"


export default EquationFilterPanel;
