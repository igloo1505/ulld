import React from 'react';
import type { Props } from 'ink-markdown';
import { Alert } from '@inkjs/ui';
import fs from 'fs';
import path from 'path';

type MarkdownProps = Omit<Props, 'children'> &
    (
        | {
            /** filePath relative to the developer-cli package root directory. */
            filePath: string;
        }
        | {
            content: string;
        }
    );

const Markdown = (props: MarkdownProps) => {
    let content =
        'content' in props
            ? props.content
            : fs.readFileSync(
                path.join(
                    path.resolve(import.meta.dirname, '../../../'),
                    props.filePath,
                ),
                { encoding: 'utf-8' },
            );
    let mdProps: Props = {
        children: content,
    };
    return (
        <>
            <Alert variant="success">Howdy Partner...</Alert>
            {/* <InkMarkdown {...mdProps} /> */}
        </>
    );
};

Markdown.displayName = 'Markdown';

export default Markdown;
