import React, { type ReactNode } from "react";
import { Separator } from "@ulld/tailwind/separator";
import NavigationSettingsPage from "../../pages/settingPage/main";
import MultipageSidebar from "../../components/multipageSidebar/main";


const TestSettingsWrapper = ({ children }: {children: ReactNode}): ReactNode => {
    return (
        <div className="space-y-6 p-10 pb-16 min-h-screen-noNav">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                {/* <p className="text-muted-foreground">Settings</p> */}
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">
                    <MultipageSidebar
                        items={[
                            { label: "Navigation", href: "/settings", id: "someUselessId" },
                        ]}
                    />
                </aside>
                <div className="flex-1 lg:max-w-[min(1080px,100%)]">{children}</div>
            </div>
        </div>
    );
};

const SettingsPage = (): ReactNode => {
    return (
        <TestSettingsWrapper>
            <NavigationSettingsPage />
        </TestSettingsWrapper>
    );
};

SettingsPage.displayName = "SettingsPage";

export default SettingsPage;
