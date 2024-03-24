"use client"
import { Form } from '@ulld/tailwind/form'
import React from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import {MainHeading} from '../../ui/mainHeading'
import FullFormSidePanel from './sidePanel'
import clsx from 'clsx'



interface FullPageFormWrapperProps<T extends FieldValues> {
    form: UseFormReturn<T>
    asideItems?: string[]
    title?: string
    children?: React.ReactNode
    subtitle?: string
    noMaxWidth?: boolean
}


export const FullPageFormWrapper= <T extends FieldValues>({ form, asideItems, title, children, subtitle, noMaxWidth }: FullPageFormWrapperProps<T>) => {
    return (
        <Form {...form}>
            <div className={clsx("ulld-fullForm space-y-6 p-10 pb-16", (!asideItems || asideItems?.length === 0) ? clsx(" w-full px-16 md:px-8", !noMaxWidth && "max-w-screen-md") : clsx("w-full px-8 md:px-16", !noMaxWidth && "max-w-screen-lg"))}>
                {title && <MainHeading subtitle={subtitle}>{title}</MainHeading>}
                <div className={"flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0"}>
                    {asideItems && <FullFormSidePanel items={asideItems} />}
                    {children}
                </div>
            </div>
        </Form>
    )
}


FullPageFormWrapper.displayName = "FullPageFormWrapper"

