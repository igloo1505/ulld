import { docsOptions } from "#/fumaDocs/layoutOptions";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout {...docsOptions}>{children}</DocsLayout>
    );
}
