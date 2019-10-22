import * as React from 'react';
import './BindingDetail.scss';

export class BindingDetail extends React.Component<
	{
		input: string;
		command: string;
		when: string;
		active: boolean;
	},
	{}
> {
	public render() {
		return (
			<div className={`binding-detail ${this.props.active ? 'active' : 'inactive'}`}>
				<span className="command">{this.props.command}</span>
				<span className="input">{this.props.input}</span>
				<span className="when">{this.props.when}</span>
			</div>
		);
	}
}
