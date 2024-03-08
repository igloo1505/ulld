import React from 'react'



export interface SettingsSectionHeadingProps {
    title: string
    subtitle?: string
}

const SettingsSectionHeading = ({ title, subtitle }: SettingsSectionHeadingProps) => {
    return (
        <div className={"mb-2"}>
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
                {subtitle}
            </p>
        </div>
    )
}


SettingsSectionHeading.displayName = "SettingsSectionHeading"


export default SettingsSectionHeading;
