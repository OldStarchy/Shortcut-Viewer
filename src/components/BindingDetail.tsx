import * as React from 'react';

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
			<div className="binding-detail">
				<span className="input">{this.props.input}</span>
				<span className="command">{this.props.command}</span>
				<span className="when">{this.props.when}</span>
			</div>
		);
	}
}
