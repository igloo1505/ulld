import React, { ChangeEventHandler } from 'react'



interface SettingsMultiStateToggleProps {
    label: string
    subtitle: string
    options: { value: boolean, label: string, id: string }[]
    onChange: ChangeEventHandler<HTMLInputElement>
}

const SettingsMultiStateToggle = (props: SettingsMultiStateToggleProps) => {
    return (
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">{props.label}</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">{props.subtitle}</p>
            <div className="mt-6 space-y-6">
                {props.options.map((o, i) => {
                    return (
                        <div className="flex items-center gap-x-3" key={`option-${i}`}>
                            <input
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                checked={o.value}
                                id={o.id}
                                onChange={props.onChange}
                            />
                            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                                {o.label}
                            </label>
                        </div>
                    )
                })}
            </div>
        </fieldset>
    )
}


SettingsMultiStateToggle.displayName = "SettingsMultiStateToggle"


export default SettingsMultiStateToggle;
