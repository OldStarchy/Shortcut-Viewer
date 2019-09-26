import * as React from 'react';
import { Key } from '../keys/Key';

export const Button = ({ scale, keyData: key }: { keyData: Key; scale: number }) => (
	<div
		style={{
			width: key.width * scale,
			height: key.height * scale,
			left: key.x * scale,
			top: key.y * scale,
		}}
		className="key"
	>
		{key.key}
	</div>
);
