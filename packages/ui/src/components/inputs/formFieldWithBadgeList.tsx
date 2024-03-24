import React from 'react'
import { FieldValues } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@ulld/tailwind/form';
import {  Input} from '@ulld/tailwind/input';
import { Badge} from '@ulld/tailwind/badge';
import { onEnter } from '@ulld/state/listeners/keydown';


export type FormFieldWithBadgeListProps<T extends FieldValues> = {
    form: T
    badgeFormKey: string
    inputLabel?: string
    inputFormKey?: string
    inputPlaceHolder?: string
    onInputChange?: (s: string) => void
    inputValue?: string
    desc?: string
}


export const BadgeContainer = ({ badges, onClick }: { badges: string[], onClick: (idx: number) => void }) => {
    return (
        <div className={"flex flex-row justify-start items-start flex-wrap gap-2 md:gap-3"}>
            {
                badges.map((t, i) => <Badge className={"cursor-pointer"} onClick={() => onClick(i)} key={`tag-${i}`}>{t}</Badge>)
            }</div>
    )
}



export const FormFieldWithBadgeList = <T extends FieldValues>({ inputLabel, badgeFormKey, inputFormKey, form, desc, inputPlaceHolder, onInputChange, inputValue }: FormFieldWithBadgeListProps<T>) => {
    const externalControl = onInputChange && inputValue
    if (!externalControl && !inputFormKey) {
        console.error("No external control props and no necessary form keys supplied to TagInput")
        return null
    }
    return (
        <div className={"w-full flex flex-col justify-center items-start gap-2"}>
            <BadgeContainer
                badges={form.watch(badgeFormKey)}
                onClick={(i: number) => {
                    form.setValue(badgeFormKey, form.getValues(badgeFormKey).filter((t: string, idx: number) => idx !== i))
                }}
            />
            {externalControl ? (
                <FormItem className={"w-full"}>
                    {inputLabel && <FormLabel>{inputLabel}</FormLabel>}
                    <FormControl>
                        <Input
                            placeholder={inputPlaceHolder || ""}
                            className=""
                            onChange={(e) => onInputChange(e.target.value)}
                            onKeyDown={(e) => onEnter(e, (e) => {
                                let val = inputValue
                                if (val === "") return
                                e.preventDefault()
                                form.setValue(badgeFormKey, [...form.getValues(badgeFormKey), val])
                                onInputChange && onInputChange("")
                            })}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            ) : (<FormField
                control={form.control}
                name={inputFormKey as string}
                render={({ field }) => (
                    <FormItem className={"w-full"}>
                        <FormLabel>{inputLabel}</FormLabel>
                        <FormControl>
                            <Input
                                placeholder={inputPlaceHolder || ""}
                                className=""
                                {...field}
                                onKeyDown={(e) => onEnter(e, (e) => {
                                    let val = form.getValues(inputFormKey)
                                    if (val === "") return
                                    e.preventDefault()
                                    form.setValue(badgeFormKey, [...form.getValues(badgeFormKey), val])
                                    form.setValue(inputFormKey, "")
                                })}
                            />
                        </FormControl>
                        {desc && <FormDescription>
                            {desc}
                        </FormDescription>}
                        <FormMessage />
                    </FormItem>
                )
                }
            />)}
        </div>
    )
}


FormFieldWithBadgeList.displayName = "FormFieldWithBadgeList"
