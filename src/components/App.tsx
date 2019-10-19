import * as React from 'react';
import { KeyBindings } from '../KeyboardShortcuts';
import { Key } from '../keys/Key';
import { Layout } from '../layouts/Layout';
import { BindingList } from './BindingList';
import { CheckBox } from './Checkbox';
import { Keyboard } from './Keyboard';

export type Binding = {
	input: string;
	command: string;
	when: string;
};
type AppState = {
	searchKey: string;
	modifiers: string[];
};
export class App extends React.Component<
	{
		keyBindings: KeyBindings;
		layout: Layout;
	},
	AppState
> {
	state: AppState = { searchKey: '', modifiers: [] };

	filterItems(key: string) {
		this.setState({
			...this.state,
			searchKey: key,
		});
	}

	resetFilter() {
		this.setState({
			...this.state,
			searchKey: '',
		});
	}

	bindingsToItems(
		bindings: {
			key: string;
			commands: {
				[propName: string]: string;
			};
		}[],
	) {
		return bindings.reduce(
			(list, binding) => {
				for (const command in binding.commands) {
					if (binding.commands.hasOwnProperty(command)) {
						const when = binding.commands[command];
						list.push({
							input: binding.key,
							command,
							when,
						});
					}
				}
				return list;
			},
			[] as Binding[],
		);
	}

	onClick(key: Key) {
		const modifiers = this.state.modifiers;

		if (modifiers.includes(key.bindingName)) {
			modifiers.splice(modifiers.indexOf(key.bindingName), 1);
		} else {
			modifiers.push(key.bindingName);
		}

		this.setState({
			...this.state,
			modifiers,
		});
	}

	componentDidMount() {
		document.addEventListener('keyup', e => {
			const btn = this.props.layout.buttons.find(b => b.key.toLowerCase() == e.key.toLowerCase());

			if (btn) {
				this.onClick(btn);
				e.preventDefault();
			}
		});
	}

	render() {
		const { modifiers } = this.state;

		return (
			<div className="app">
				<Keyboard
					layout={this.props.layout}
					scale={48}
					keyEnter={(key: string) => this.filterItems(key)}
					onClick={(key: Key) => {
						this.onClick(key);
					}}
					keyLeave={() => this.resetFilter()}
					selectedKeys={modifiers}
				/>
				<div className="left-right">
					<div style={{ flexGrow: 1 }}>
						<h2>Search</h2>
						<p>Search Keys: {this.state.searchKey}</p>
						<p>Modifiers:</p>
						<ul>
							{this.state.modifiers.map((modifier, index) => (
								<li key={index}>{modifier}</li>
							))}
						</ul>

						<h2>Bindings</h2>
						<BindingList
							items={this.bindingsToItems(
								this.props.keyBindings.filter(...this.state.modifiers.concat(this.state.searchKey)),
							)}
						/>
					</div>
					<div style={{ flexShrink: 1 }}>
						<h2>Conditions (NYI)</h2>
						{this.props.keyBindings.conditions.map((cond, index) => (
							<CheckBox key={index} id={`Condition${index}`} label={cond} onChange={() => {}} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
