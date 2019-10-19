import * as React from 'react';
import { Key } from '../keys/Key';
import { Layout } from '../layouts/Layout';
import { Button } from './Button';
import './Keyboard.scss';

export const Keyboard = ({
	scale,
	layout,
	keyEnter,
	keyLeave,
	onClick,
	selectedKeys,
}: {
	scale: number;
	layout: Layout;
	keyEnter: (key: string) => void;
	keyLeave: () => void;
	onClick: (key: Key) => void;
	selectedKeys: string[];
}) => (
	<div
		className="keyboard"
		style={{
			width: layout.buttons.reduce((max, current) => Math.max(max, current.x + current.width), 0) * scale,
			height: layout.buttons.reduce((max, current) => Math.max(max, current.y + current.height), 0) * scale,
		}}
		onMouseOut={() => keyLeave()}
	>
		{layout.buttons.map((key, id) => (
			<Button
				keyData={key}
				key={id}
				scale={scale}
				keyEnter={keyEnter}
				onClick={onClick}
				selected={selectedKeys.includes(key.bindingName)}
			/>
		))}
	</div>
);
