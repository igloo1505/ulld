import React from 'react'



interface CheckboxGroupProps {
    children: React.ReactNode
    label: string
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
    return (
        <div className="space-y-10">
            <fieldset>
                {props.label && <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">{props.label}</legend>}
                <div className="mt-6 space-y-6">
                    {props.children}
                </div>
            </fieldset>
        </div>
    )
}


CheckboxGroup.displayName = "CheckboxGroup"


export default CheckboxGroup;
