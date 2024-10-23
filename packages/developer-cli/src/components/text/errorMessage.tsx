import { Box, Newline, Text } from 'ink';
import React from 'react';
import { FixedSpacer } from '../layout/spacer.js';

type ErrorMessageProperties = {
    readonly text: string;
};

export const ErrorMessage: React.FC<ErrorMessageProperties> = ({ text }) => {
    return (
        <Box>
            <Text bold color="red">
                ›
                <FixedSpacer size={1} />
            </Text>
            <Text dimColor>{text}</Text>
            <Newline count={2} />
        </Box>
    );
};
