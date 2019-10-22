import * as React from 'react';
import './Checkbox.scss';

export class CheckBox extends React.Component<
	{
		label: string;
		checked?: boolean;
		id: string;
		onChange: (checked: boolean) => void;
	},
	{
		checked: boolean;
	}
> {
	state = { checked: this.props.checked || false };

	public render() {
		return (
			<div className="checkbox">
				<input
					defaultChecked={this.props.checked || false}
					id={this.props.id}
					type="checkbox"
					onChange={e => this.props.onChange(e.target.checked)}
				/>
				<label htmlFor={this.props.id}>{this.props.label}</label>
			</div>
		);
	}
}
