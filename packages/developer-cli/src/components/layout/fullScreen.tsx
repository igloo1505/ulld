import {Box, BoxProps} from 'ink';
import React, {useEffect, useState, type ReactNode} from 'react';

interface FullScreenProps extends BoxProps {
	children: ReactNode;
	applyHeight?: boolean;
}

const FullScreen = ({
	children,
	applyHeight = true,
	...props
}: FullScreenProps): ReactNode => {
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

	return (
		<Box
			{...props}
			width={size.columns}
			height={applyHeight ? size.rows : undefined}
		>
			{children}
		</Box>
	);
};

FullScreen.displayName = 'FullScreen';

export default FullScreen;
