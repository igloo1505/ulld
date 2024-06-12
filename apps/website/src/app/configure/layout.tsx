import { Metadata } from "next";
import ConfigureSidebar from "#/components/pageSpecific/configure/sidebar";
import { LogoAsText } from "#/components/general/logoAsText";
import { Separator } from "@ulld/tailwind/separator";
import { sidebarNavItems } from "#/components/pageSpecific/configure/staticData";
import ConfigureFormWrapper from "#/components/pageSpecific/configure/formWrapper";

export const metadata: Metadata = {
    title: "Configure Uh Little Less Dum",
    description:
        "Use the online configurator to set up your personal Uh Little Less Dum environment.",
};

interface SettingsLayoutProps {
    children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <div className="space-y-6 p-10 pb-16 mt-[76px] min-h-screen-noNav">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Configuration</h2>
                <p className="text-muted-foreground">
                    Let <LogoAsText /> help you generate a configuration file.
                </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">
                    <ConfigureSidebar items={sidebarNavItems} />
                </aside>
                <div className="flex-1 lg:max-w-2xl">
                    <ConfigureFormWrapper>{children}</ConfigureFormWrapper>
                </div>
            </div>
        </div>
    );
}
