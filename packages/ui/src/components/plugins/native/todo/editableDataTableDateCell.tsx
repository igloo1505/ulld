import { Button } from '@ulld/tailwind/button'
import {  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@ulld/tailwind/dialog'
import { Form } from '@ulld/tailwind/form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import dayjs, { Dayjs } from 'dayjs'
import { PlusIcon } from 'lucide-react'
import React, { MouseEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DateInput } from '@ulld/full-form/dateInput'



interface EditableDataTableDateCellProps {
    value?: Dayjs
    onValueChange: (newDate: Date | null) => void
    label?: string
    className?: string
    formatString?: string
}

const laziestSchemaEver = z.object({
    value: z.string()
})


/* TODO: Figure out why the DialogHeader and DialogFooter components are rendering outside of the closed Dialog component when back on wifi. Check out the syntax in Shadcn's docs about a controlled dialog component. */
export const EditableDataTableDateCell = ({ label, value, onValueChange, formatString }: EditableDataTableDateCellProps) => {
    const formatDate = (d: string | number | Date | dayjs.Dayjs | null | undefined) => {
        return dayjs(d).format(formatString || "MMM Do, YYYY")
    }
    let valueString = value?.isValid() ? formatDate(value) : null
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof laziestSchemaEver>>({
        resolver: zodResolver(laziestSchemaEver),
        defaultValues: {
            value: value?.toISOString()
        }
    })

    const resetModal = () => {
        form.reset()
        setOpen(false)
    }

    const getDateValue = () => {
        const formValues = form.getValues()
        let dateValue = formValues.value ? laziestSchemaEver.parse(formValues).value : undefined
        if (!dateValue) return
        let newDateValue = dayjs(dateValue)
        if (dateValue && dateValue !== valueString && newDateValue.isValid()) {
            return newDateValue
        }
        return
    }


    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        let internalValue = getDateValue()
        if (internalValue) {
            onValueChange(internalValue.toDate())
            resetModal()
        }
    }

    const clearDueDate = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        onValueChange(null)
        resetModal()
    }


    return (
        <>
            <Dialog
                open={open}
                onOpenChange={setOpen}
            >
                <DialogTrigger asChild>
                    <div
                        aria-expanded={open}
                        role="button"
                        onClick={() => setOpen(true)}
                        className={clsx("max-w-[200px]", !valueString && "flex flex-row justify-start items-center gap-1 text-muted-foreground fill-muted-foreground hover:text-foreground hover:fill-foreground transition-colors duration-150")}
                    >
                        {valueString ? valueString : (
                            <>
                                <PlusIcon className={"w-3 h-3"} />
                                <span className={"text-sm"}>
                                    Add
                                </span>
                            </>
                        )}
                    </div>
                </DialogTrigger>
                <Form {...form} >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Update Date
                            </DialogTitle>
                        </DialogHeader>
                        <DateInput
                            name="value"
                            label="Due Date"
                            onChangeValueConverter={(a: any) => {
                                let d = dayjs(a)
                                if (d.isValid()) {
                                    return d.toISOString()
                                }
                                return "abortChange"
                            }}
                        />
                        <DialogFooter>
                            <Button onClick={clearDueDate}>Clear</Button>
                            <Button onClick={handleSubmit}>Save</Button>
                        </DialogFooter>
                    </DialogContent>
                </Form>
            </Dialog>
        </>
    )
}


EditableDataTableDateCell.displayName = "EditableDataTableDateCell"
