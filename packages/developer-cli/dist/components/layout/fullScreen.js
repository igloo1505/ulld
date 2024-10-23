import { Box } from 'ink';
import React, { useEffect, useState } from 'react';
const FullScreen = ({ children, applyHeight = true, }) => {
    const [size, setSize] = useState({
        columns: process.stdout.columns,
        rows: process.stdout.rows,
    });
    useEffect(() => {
        function onResize() {
            setSize({
                columns: process.stdout.columns,
                rows: process.stdout.rows,
            });
        }
        process.stdout.on('resize', onResize);
        process.stdout.write('\x1b[?1049h');
        return () => {
            process.stdout.off('resize', onResize);
            process.stdout.write('\x1b[?1049l');
        };
    }, []);
    return (React.createElement(Box, { width: size.columns, height: applyHeight ? size.rows : undefined }, children));
};
FullScreen.displayName = 'FullScreen';
export default FullScreen;
//# sourceMappingURL=fullScreen.js.map