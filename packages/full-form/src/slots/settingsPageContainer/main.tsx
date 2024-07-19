import React from 'react'
import { SettingsPageContainerProps } from '../slotTypes';
import { Separator } from '@ulld/tailwind/separator';


const SettingsPageContainer = ({title, subtitle, children}: SettingsPageContainerProps) => {
return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">{title}</h3>
                {subtitle && <p className="text-sm text-muted-foreground">
                   {subtitle} 
                </p>}
            </div>
            <Separator />
            {children}
        </div>
)
}


SettingsPageContainer.displayName = "SettingsPageContainer"


export default SettingsPageContainer;
