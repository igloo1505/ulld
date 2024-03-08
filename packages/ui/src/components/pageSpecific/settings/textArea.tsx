import React, { ChangeEventHandler } from 'react'



interface SettingsTextAreaProps {
    value: string
    label: string
    description?: string
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const SettingsTextArea = ({ value, label, onChange, description }: SettingsTextAreaProps) => {
    return (
        <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    onChange={onChange}
                    value={value}
                    className="block w-full rounded-md border-0 py-1.5 inputBase"
                />
            </div>
            {description && (
                <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
            )}
        </div>
    )
}



SettingsTextArea.displayName = "SettingsTextArea"


export default SettingsTextArea;
