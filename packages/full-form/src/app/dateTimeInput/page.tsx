"use client"
import React from 'react'
import LocalDevelopmentPageWrapper from "@ulld/utilities/localDevelopmentPageWrapper"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DateInput } from '../../fullFormDateInput'
import { Form } from "@ulld/tailwind/form"

interface DateTimeInputTestPageProps {

}

const testSchema = z.object({
    date: z.date()
})

const DateTimeInputTestPage = (props: DateTimeInputTestPageProps) => {
    const form = useForm<z.infer<typeof testSchema>>({
        resolver: zodResolver(testSchema)
    })
    return (
        <LocalDevelopmentPageWrapper>
            <Form {...form}>
                <DateInput
                    name="date"
                    timePosition='button-side-by-side'
                    timeProps={{
                        hideLabel: true
                    }}
                />
            </Form>
        </LocalDevelopmentPageWrapper>
    )
}


DateTimeInputTestPage.displayName = "DateTimeInputTestPage"


export default DateTimeInputTestPage;
