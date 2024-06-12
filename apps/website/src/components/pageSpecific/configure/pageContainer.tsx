import { Separator } from "@ulld/tailwind/separator";
import React, { ReactNode } from "react";

interface ConfigurationFormPageContainerProps {
    children: ReactNode;
    title: ReactNode
    subtitle: ReactNode
}

const ConfigurationFormPageContainer = ({
    children,
    title, 
    subtitle
}: ConfigurationFormPageContainerProps) => {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-sm text-muted-foreground">
                   {subtitle} 
                </p>
            </div>
            <Separator />
            {children}
        </div>
    );
};

ConfigurationFormPageContainer.displayName = "ConfigurationFormPageContainer";

export default ConfigurationFormPageContainer;
