import { Box, Newline, Text } from 'ink';
import React from 'react';
import { FixedSpacer } from '../layout/spacer.js';
export const ErrorMessage = ({ text }) => {
    return (React.createElement(Box, null,
        React.createElement(Text, { bold: true, color: "red" },
            "\u203A",
            React.createElement(FixedSpacer, { size: 1 })),
        React.createElement(Text, { dimColor: true }, text),
        React.createElement(Newline, { count: 2 })));
};
//# sourceMappingURL=errorMessage.js.map