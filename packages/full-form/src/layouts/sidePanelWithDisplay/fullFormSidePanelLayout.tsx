"use client"
import { Form } from '@ulld/tailwind/form'
import React from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { FullFormSidePanel, FullFormSidePanelProps } from './fullFormSidePanel'
import clsx from 'clsx'



interface FullFormContainerProps<T extends FieldValues, H extends UseFormReturn<T, any, any>> extends Omit<FullFormSidePanelProps, "children">{
    form: H
    children?: React.ReactNode
    panel: React.ReactNode
    formContainerClasses?: string
    centerPanel?: boolean
}


export const FullFormSidePanelLayout = <T extends FieldValues>({ form, title, children, subtitle, panel, formContainerClasses, centerPanel }: FullFormContainerProps<T, any>) => {
    return (
        <Form {...form}>
            <div className={clsx("ulld-fullForm space-y-6 p-10 pb-16")}>
                <div className={"flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0"}>
                    <FullFormSidePanel
                        title={title}
                        subtitle={subtitle}
                        className={formContainerClasses}
                    >
                    {children}
                    </FullFormSidePanel>
                    <div className={centerPanel ? "w-full h-full flex flex-col justify-center items-center gap-6 p-6" : undefined}>
                        {panel}
                    </div>
                </div>
            </div>
        </Form>
    )
}


FullFormSidePanelLayout.displayName = "FullFormContainer"
