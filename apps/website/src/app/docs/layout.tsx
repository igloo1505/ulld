import { docsLayoutOptions } from "#/fumaDocs/layoutOptions";
import { DocsLayout } from "fumadocs-ui/layout";
/* import 'fumadocs-ui/style.css'; */
import type { ReactNode } from "react";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { TerminalIcon, UserIcon } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            {...docsLayoutOptions}
            containerProps={{
                className: "relative [&_#nd-sidebar]:sticky [&_#nd-sidebar]:top-0 bg-background text-foreground",
            }}
            sidebar={{
                footerProps: {
                    className: "[&_.lucide-sun]:hidden [&_.lucide-moon]:hidden"
                },
                banner: (
                    <RootToggle
                        options={[
                            {
                                title: "User",
                                description: "User Documentation",
                                url: "/docs/user",
                                icon: <UserIcon />,
                            },
                            {
                                title: "Developer",
                                description: "Developer Documentation",
                                url: "/docs/developer",
                                icon: <TerminalIcon />,
                            },
                        ]}
                    />
                ),
            }}
        >
            {children}
        </DocsLayout>
    );
}
