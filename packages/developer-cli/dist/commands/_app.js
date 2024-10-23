import React, { useState } from 'react';
import FullScreen from '../components/layout/fullScreen.js';
process.stdout.write('\x1b[?1049h'); // enter alternate buffer
process.on('exit', () => {
    process.stdout.write('\x1b[?1049l'); // leave alternate buffer
});
export default function App({ Component, commandProps }) {
    const [windowSize, setWindowSize] = useState([process.stdout.columns, process.stdout.rows]);
    process.stdout.on('resize', function () {
        setWindowSize([process.stdout.columns, process.stdout.rows]);
    });
    return (React.createElement(FullScreen, { applyHeight: false },
        React.createElement(Component, { ...commandProps })));
}
//# sourceMappingURL=_app.js.map