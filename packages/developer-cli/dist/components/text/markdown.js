import React from 'react';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import chalk from 'chalk';
import { markedTerminal, } from 'marked-terminal';
import { ulldBlue } from '../../staticData/main.js';
import { Box, Text } from 'ink';
const defaultTerminalMdOptions = {
    firstHeading: chalk.hex(ulldBlue),
    emoji: true,
};
const InkMarkdown = ({ content, options = defaultTerminalMdOptions, highlightOptions = {
/* theme: "tomorrow-night" */
}, }) => {
    /* TODO: This works well for now, but look into using glow or another cli markdown renderer that supports themeing, as the theming in marked-terminal isn't functioning properly. */
    marked.setOptions({
        /* renderer: new TerminalRenderer({ */
        /*     blockquote: chalk.hex(ulldBlue) */
        /* }), */
        gfm: true,
    });
    /* @ts-ignore */
    marked.use(markedTerminal(options, highlightOptions));
    const parsedContent = marked.parse(content);
    return (React.createElement(Box, { paddingX: 4 },
        React.createElement(Text, null, parsedContent)));
};
const getPath = (filePath) => {
    console.log(import.meta.dirname);
    return path.join(import.meta.dirname.endsWith('dist')
        ? path.join(import.meta.dirname, 'markdown')
        : path.resolve(import.meta.dirname, '../../markdown'), filePath);
};
const Markdown = (props) => {
    console.log('import.meta.dirname: ', import.meta.dirname);
    let content = 'content' in props
        ? props.content
        : fs.readFileSync(getPath(props.filePath), { encoding: 'utf-8' });
    let mdProps = {
        content,
    };
    return React.createElement(InkMarkdown, { ...mdProps });
};
Markdown.displayName = 'Markdown';
export default Markdown;
//# sourceMappingURL=markdown.js.map