import React from 'react';
import { Text } from 'ink';
import z from 'zod';
import { ulldBlue } from '../../staticData/general.js';
import { argument, option } from 'pastel';

export const options = z.object({
	name: z
		.string()
		.default('Handsome')
		.describe(
			option({
				description: 'Some name',
				alias: 'n',
			}),
		),
});

/* export const args = z.string().array().describe("test") // or tuple. */

type Props = {
	options: z.infer<typeof options>;
};

export default function Build({ options }: Props) {
	return (
		<Text>
			Hello, <Text color={ulldBlue}>{options.name}</Text>
		</Text>
	);
}
