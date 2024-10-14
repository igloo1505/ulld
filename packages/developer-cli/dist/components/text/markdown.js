import React from 'react';
import { Alert } from '@inkjs/ui';
import fs from 'fs';
import path from 'path';
const Markdown = (props) => {
    let content = 'content' in props
        ? props.content
        : fs.readFileSync(path.join(path.resolve(import.meta.dirname, '../../../'), props.filePath), { encoding: 'utf-8' });
    let mdProps = {
        children: content,
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Alert, { variant: "success" }, "Howdy Partner...")));
};
Markdown.displayName = 'Markdown';
export default Markdown;
//# sourceMappingURL=markdown.js.map