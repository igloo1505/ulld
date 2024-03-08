"use client"
import React, { useState } from 'react'
import { FieldValues, useFormContext } from 'react-hook-form';
import { BaseFullFormInputProps } from './types';
import FormFieldWithBadgeList, { FormFieldWithBadgeListProps } from '#/components/inputs/formFieldWithBadgeList';




interface FullFormTagInputProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
}


const FullFormTagInput = <T extends FieldValues>({ label, desc, name, ...props }: FullFormTagInputProps<T, HTMLTextAreaElement> & FormFieldWithBadgeListProps<T>) => {
    const [inputValue, setInputValue] = useState("")
    const form = useFormContext<T>()
    return (
        <FormFieldWithBadgeList
            {...props}
            form={form}
            inputLabel={label}
            badgeFormKey={name}
            onInputChange={setInputValue}
            inputValue={inputValue}
            desc={desc}
        />
    )
}


FullFormTagInput.displayName = "FullFormTagInput"


export default FullFormTagInput;
