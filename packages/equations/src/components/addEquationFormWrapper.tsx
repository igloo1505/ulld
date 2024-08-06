"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import AddEquationForm from './addEquationForm'
import AddEquationDisplay from './addEquationDisplay'
import { AddEquationSchema } from './types'
import type { serverClient } from '@ulld/api/serverClient'
import { FullFormSidePanelLayout } from '@ulld/full-form/layout/sidePanel';


export type EditEquationItem = Awaited<ReturnType<typeof serverClient.equations.getEquationById>>

interface AddEquationFormWrapperProps {
    edit?: EditEquationItem
}


/* TODO: Come back and add dynamic math input here as well. Package is listed in NotesAppToDo.mdx */

const AddEquationFormWrapper = ({ edit }: AddEquationFormWrapperProps) => {
    const form = useForm<z.infer<typeof AddEquationSchema>>({
        resolver: zodResolver(AddEquationSchema),
        defaultValues: edit ? {
            id: edit.id,
            equationId: edit.equationId || "",
            title: edit.title,
            desc: edit.desc || "",
            content: edit.content,
            tags: edit.tags.map((t) => t.value),
            tagInput: "",
            variables: edit.variables || [],
            variableInput: "",
            relatedValues: edit.relatedValues as any || [],
            asPython: edit.asPython || "",
            keywords: edit.keywords || [],
            keywordInput: "",
        } : {
            title: "",
            desc: "",
            content: "",
            tags: [],
            tagInput: "",
            variableInput: "",
            keywordInput: "",
            asPython: "",
            keywords: [],
            relatedValues: [],
            variables: [],
        }
    })

    return (
        <FullFormSidePanelLayout
            panel={<AddEquationDisplay form={form} />}
            centerPanel
            form={form}
            title="Add Equation"
        >
            <AddEquationForm form={form} />
        </FullFormSidePanelLayout>
    )
}


AddEquationFormWrapper.displayName = "AddEquationFormWrapper"


export default AddEquationFormWrapper;
