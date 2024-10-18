import React from 'react';
import type { Props } from 'ink-markdown';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import chalk from 'chalk';
import TerminalRenderer, {
    markedTerminal,
    TerminalRendererOptions,
} from 'marked-terminal';
import { ulldBlue } from '../../staticData/main.js';
import { Box, Text } from 'ink';

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

interface InkMarkdownProps {
    content: string;
    options?: TerminalRendererOptions;
    highlightOptions?: any;
}

const defaultTerminalMdOptions: TerminalRendererOptions = {
    firstHeading: chalk.hex(ulldBlue),
    emoji: true
};

const InkMarkdown = ({
    content,
    options = defaultTerminalMdOptions,
    highlightOptions = {
        /* theme: "tomorrow-night" */
    },
}: InkMarkdownProps) => {
    /* TODO: This works well for now, but look into using glow or another cli markdown renderer that supports themeing, as the theming in marked-terminal isn't functioning properly. */
    marked.setOptions({
        /* renderer: new TerminalRenderer({ */
        /*     blockquote: chalk.hex(ulldBlue) */
        /* }), */
        gfm: true,
    });
    marked.use(markedTerminal(options, highlightOptions));
    const parsedContent = marked.parse(content);

    return (
        <Box paddingX={4}>
            <Text>{parsedContent}</Text>
        </Box>
    );
};

const Markdown = (props: MarkdownProps) => {
    let content =
        'content' in props
            ? props.content
            : fs.readFileSync(
                path.join(
                    path.resolve(import.meta.dirname, '../../markdown'),
                    props.filePath,
                ),
                { encoding: 'utf-8' },
            );

    let mdProps: InkMarkdownProps = {
        content,
    };
    return (
        <InkMarkdown {...mdProps} />
    );
};

Markdown.displayName = 'Markdown';

export default Markdown;
