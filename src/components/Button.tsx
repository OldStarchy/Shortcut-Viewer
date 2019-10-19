import * as React from 'react';
import { Key } from '../keys/Key';
import './Button.scss';

export class Button extends React.Component<
	{
		keyData: Key;
		scale: number;
		keyEnter: (key: string) => void;
		onClick: (key: Key) => void;
		selected: boolean;
	},
	{
		hovered: boolean;
	}
> {
	state = { hovered: false, selected: this.props.selected || false };

	public render() {
		const { keyData: key, scale, keyEnter, onClick } = this.props;
		const styles: React.CSSProperties = {};
		if (this.state.hovered) {
			styles.backgroundColor = '#eee';
		}
		if (this.props.selected) {
			styles.borderColor = 'black';
			styles.zIndex = 1;
		}
		return (
			<div
				style={{
					width: key.width * scale,
					height: key.height * scale,
					left: key.x * scale,
					top: key.y * scale,
					...styles,
				}}
				className="button"
				onMouseEnter={() => {
					this.setState({ hovered: true });
					keyEnter(key.bindingName);
				}}
				onMouseLeave={() => {
					this.setState({ hovered: false });
				}}
				onClick={() => onClick(key)}
			>
				{key.key}
			</div>
		);
	}
}
