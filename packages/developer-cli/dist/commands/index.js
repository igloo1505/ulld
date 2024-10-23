import React from 'react';
import MainBanner from '../components/text/mainBanner.js';
import InkMarkdown from '../components/text/markdown.js';
export default function Index(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(MainBanner, { textProps: {
                font: 'simple',
            }, subTitle: "Internal development cli" }, "Uh Little Less Dum"),
        React.createElement(InkMarkdown, { filePath: "mainHelp.md" })));
}
//# sourceMappingURL=index.js.map