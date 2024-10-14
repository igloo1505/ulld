import React from 'react';
import type { Props } from 'ink-markdown';
type MarkdownProps = Omit<Props, 'children'> & ({
    /** filePath relative to the developer-cli package root directory. */
    filePath: string;
} | {
    content: string;
});
declare const Markdown: {
    (props: MarkdownProps): React.JSX.Element;
    displayName: string;
};
export default Markdown;
