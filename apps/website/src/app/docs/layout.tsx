import { docsLayoutOptions } from "#/fumaDocs/layoutOptions";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { GraduationCapIcon, TerminalIcon } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            {...docsLayoutOptions}
            containerProps={{
                id: "test-id",
                className: "relative [&_#nd-sidebar]:sticky [&_#nd-sidebar]:top-0",
            }}
            sidebar={{
                banner: (
                    <RootToggle
                        options={[
                            {
                                title: "User",
                                description: "User Documentation",
                                url: "/docs/user",
                                icon: <GraduationCapIcon />,
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
