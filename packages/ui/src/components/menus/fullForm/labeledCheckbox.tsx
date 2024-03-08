import { Checkbox } from '#/components/shad/ui/checkbox'
import React from 'react'


interface LabeledCheckboxProps {
    label: string
    subtitle?: string
    name: string
    value: boolean
    onChange: () => void
}


const LabeledCheckbox = ({ label, name, subtitle, value, onChange }: LabeledCheckboxProps) => {
    return (
        <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
                <Checkbox
                    name={name}
                    checked={value}
                    onClick={onChange}
                />
            </div>
            <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900 dark:text-gray-200">
                    {label}
                </label>
                {subtitle && <p className="text-gray-500">{subtitle}</p>}
            </div>
        </div>
    )
}


LabeledCheckbox.displayName = "LabeledCheckbox"


export default LabeledCheckbox;
