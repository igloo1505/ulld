import { docsOptions } from "#/fumaDocs/layoutOptions";
import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layout";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            {...docsOptions}
            containerProps={{
                id: "test-id",
                className: "relative [&_#nd-sidebar]:sticky [&_#nd-sidebar]:top-0"
            }}
        >
            {children}
        </DocsLayout>
    );
}
