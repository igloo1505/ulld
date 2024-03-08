"use client"
import { onEnter } from '#/actions/listeners'
import clsx from 'clsx'
import React, { ChangeEventHandler, useId } from 'react'



interface TextInputProps {
    placeholder?: string
    label?: string
    onChange: ChangeEventHandler<HTMLInputElement>
    onUpdate: () => void
    value: string
    helperText?: string
    type?: "text" | "email" | "password"
    classes?: {
        container?: string
        input?: string
    }
}

const TextInput = ({ label, classes, helperText, onUpdate, type, placeholder, value, onChange }: TextInputProps) => {
    const id = useId()
    return (
        <div className={clsx("", classes?.container && classes.container)}>
            {label && <label htmlFor={id} className="block text-sm">{label}</label>}
            <input type={type || "text"} onKeyDown={(e) => onEnter(e, onUpdate)} value={value} onChange={onChange} placeholder={placeholder || ""} className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            {helperText && <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">{helperText}</p>
            }
        </div>
    )
}


TextInput.displayName = "TextInput"


export default TextInput;
