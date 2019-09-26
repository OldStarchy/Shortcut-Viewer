import * as React from 'react';
import { Layout } from '../layouts/Layout';
import { Button } from './Button';

export const Keyboard = ({ scale, layout }: { scale: number; layout: Layout }) => (
	<div
		className="keyboard"
		style={{
			width: layout.buttons.reduce((max, current) => Math.max(max, current.x + current.width), 0) * scale,
			height: layout.buttons.reduce((max, current) => Math.max(max, current.y + current.height), 0) * scale,
		}}
	>
		{layout.buttons.map((key, id) => (
			<Button keyData={key} key={id} scale={scale} />
		))}
	</div>
);
