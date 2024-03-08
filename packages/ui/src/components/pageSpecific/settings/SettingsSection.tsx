import React from 'react'
import SettingsSectionHeading, { SettingsSectionHeadingProps } from './SectionHeading'



interface SettingsSectionProps {
    titleProps: SettingsSectionHeadingProps
    children: React.ReactNode
}

const SettingsSection = (props: SettingsSectionProps) => {
    return (
        <div className={"space-y-12 my-6"}>
            <SettingsSectionHeading {...props.titleProps} />
            {props.children}
        </div>
    )
}


SettingsSection.displayName = "SettingsSection"


export default SettingsSection;
