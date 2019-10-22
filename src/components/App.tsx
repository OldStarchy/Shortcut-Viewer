import * as React from 'react';
import { appliesToCondition, KeyBindings } from '../KeyboardShortcuts';
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
	conditions: Condition[];
};
export type Condition =
	| {
			type: 'boolean';
			condition: string;
	  }
	| {
			type: 'string';
			variable: string;
			value: string;
	  };
export class App extends React.Component<
	{
		keyBindings: KeyBindings;
		layout: Layout;
	},
	AppState
> {
	state: AppState = {
		searchKey: '',
		modifiers: [],
		conditions: [
			{
				type: 'boolean',
				condition: '*',
			},
		],
	};

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
							active: appliesToCondition(when, ...this.state.conditions),
						});
					}
				}
				return list;
			},
			[] as Array<Binding & { active: boolean }>,
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

	onChangeCondition(condition: string, value: string | boolean) {
		if (typeof value === 'string') {
			return;
		}

		if (value) {
			if (this.state.conditions.findIndex(c => c.type == 'boolean' && c.condition == condition) === -1) {
				this.setState({
					...this.state,
					conditions: [
						...this.state.conditions,
						{
							type: 'boolean',
							condition: condition,
						},
					],
				});
			}
		} else {
			const index = this.state.conditions.findIndex(c => c.type == 'boolean' && c.condition == condition);
			if (index !== -1) {
				const conds = this.state.conditions.slice();
				conds.splice(index, 1);

				this.setState({
					...this.state,
					conditions: conds,
				});
			}
		}
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
							items={this.props.keyBindings.filter(
								this.state.conditions,
								...this.state.modifiers.concat(this.state.searchKey),
							)}
						/>
					</div>
					<div style={{ flexShrink: 1 }}>
						<h2>Conditions</h2>
						<CheckBox
							id="_all"
							label="*"
							onChange={checked => {
								this.onChangeCondition('*', checked);
							}}
							checked={true}
						/>
						{this.props.keyBindings.conditions.map((cond, index) => (
							<CheckBox
								key={index}
								id={`Condition${index}`}
								label={cond}
								onChange={checked => {
									this.onChangeCondition(cond, checked);
								}}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
