import React, {useMemo, useState, type ReactNode} from 'react';
import {Box, useInput, useStdin} from 'ink';
import {UlldMultiSelectItem} from './item.js';
import {MultiSelectOption} from './types.js';

interface UlldSlicedSelectListProps<T> {
	options: MultiSelectOption<T>[];
	/** Number of list items to show at once */
	showCount?: number;
	selectedIds: string[];
}

/* TODO: Need to handle this much better, but it's not the most important thing for right now. */
/**
 * @params
 * nToTake: The number of items to include in the slice.
 */
const getSliceIndices = (
	arrLength: number,
	focusedIndex: number,
	nToTake: number,
): [number, number] => {
	let vals: [number, number] = [
		Math.ceil(focusedIndex - nToTake / 2),
		Math.ceil(focusedIndex + nToTake / 2),
	];
	if (vals[1] > arrLength) {
		vals = [Math.max(0, arrLength - nToTake - 1), arrLength - 1];
	} else if (vals[0] < 0) {
		vals = [0, Math.min(arrLength - 1, nToTake)];
	}
	return vals;
};

const getSlicedList = <T extends unknown>(
	arr: T[],
	focusedIndex: number,
	maxItems: number,
): T[] => {
	let indices = getSliceIndices(arr.length, focusedIndex, maxItems);
	/* console.log('indices: ', indices); */
	return arr.slice(...indices);
};

export const UlldSlicedSelectList = <T extends unknown>({
	options,
	showCount,
	selectedIds,
}: UlldSlicedSelectListProps<T>): ReactNode => {
	const [focusedIndex, setFocusedIndex] = useState(0);
	const slicedItems = useMemo(
		() => getSlicedList(options, focusedIndex, showCount || 10),
		[showCount, options, focusedIndex],
	);

	const cycleIndex = (dir: -1 | 1): void => {
		let _n = focusedIndex + dir;
		if (_n > options.length) {
			_n = 0;
		} else if (_n < 0) {
			_n = options.length - 1;
		}
		setFocusedIndex(_n);
	};

	const handleInput = (l: string) => {
		if (l === 'j') {
			return cycleIndex(1);
		}
		if (l === 'k') {
			return cycleIndex(-1);
		}
	};

	useInput(handleInput);

	const x = useStdin();
	x.internal_eventEmitter.setMaxListeners(0);

	useInput(handleInput);

	return (
		<Box
			flexDirection="column"
			alignItems="flex-start"
			justifyContent="flex-start"
			height={'100%'}
		>
			{slicedItems.map((n, i) => {
				return (
					<UlldMultiSelectItem
						key={n.id}
						item={n}
						focused={i === focusedIndex}
						checked={selectedIds.includes(n.id)}
						index={i}
						setFocusedIndex={() => setFocusedIndex(i)}
					/>
				);
			})}
		</Box>
	);
};

UlldSlicedSelectList.displayName = 'UlldSlicedSelectList';
