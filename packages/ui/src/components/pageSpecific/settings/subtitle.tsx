import React from 'react'



interface SettingsSubtitleProps {
    children: string
}

const SettingsSubtitle = ({ children }: SettingsSubtitleProps) => {
    return (
        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
            {children}
        </p>
    )
}


SettingsSubtitle.displayName = "SettingsSubtitle"


export default SettingsSubtitle;
