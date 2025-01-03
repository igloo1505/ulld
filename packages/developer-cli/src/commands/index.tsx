import React from 'react';
import MainBanner from '../components/text/mainBanner.js';
import InkMarkdown from '../components/text/markdown.js';

/* export const options = zod.object({ */
/*     name: zod.string().default('Stranger').describe('Name'), */
/* }); */

type Props = {
	/* options: zod.infer<typeof options>; */
};

export default function Index(props: Props) {
	return (
		<>
			<MainBanner
				textProps={{
					font: 'simple',
				}}
				subTitle="Internal development cli"
			>
				Uh Little Less Dum
			</MainBanner>
			<InkMarkdown filePath="mainHelp.md" />
		</>
	);
}
