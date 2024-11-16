import MultipageSidebar from "#/components/slots/navigation/multipageSidebar";
import { Separator } from "@ulld/tailwind/separator";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";
import React, { ReactNode } from "react";
import buildData from "buildData"

interface SettingsLayoutProps {
    children: ReactNode;
}

const SettingsLayout = ({children}: SettingsLayoutProps) => {
    return (
        <div className="space-y-6 p-10 pb-16 min-h-screen-noNav">
          <DisableBookmark />
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">
                    <MultipageSidebar 
                        items={buildData.settingPages}
                    />
                </aside>
                <div className="flex-1 lg:max-w-[min(1080px,100%)]">
                    {children}
                </div>
            </div>
        </div>
    );
};

SettingsLayout.displayName = "SettingsLayout";

export default SettingsLayout;
