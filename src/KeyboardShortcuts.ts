import { Condition } from './components/App';

export interface IKeyBinding {
	key: string;
	command: string;
	when?: string;
	args?: Record<string, any>;
}

type Operand =
	| {
			type: 'truthy';
			condition: string;
			negate: boolean;
	  }
	| {
			type: 'equal';
			variable: string;
			negate: boolean;
			value: string;
	  }
	| {
			type: 'match';
			variable: string;
			regex: string;
	  };

export function appliesToCondition(when: string, ...conditions: Condition[]) {
	// Parse "when" parameter
	// TODO: cache this result

	const operands: Operand[] = [];

	//TODO: Doesn't handle spacey strings
	const tokens = when.split(' ');

	const xRule = /(?<negate>!)?(?<condition>\w+|\*)/;
	while (tokens.length > 0) {
		const token = tokens.shift()!;
		let match: RegExpExecArray | null;

		if ((match = xRule.exec(token)) !== null) {
			operands.push({
				type: 'truthy',
				negate: match.groups!.negate !== undefined,
				condition: match.groups!.condition,
			});
		} else
			switch (token) {
				case '==':
				case '!=': {
					const last = operands.pop();
					if (!last || last.type != 'truthy' || last.negate === true) {
						throw 'invalid condition';
					}

					const next = tokens.shift();
					if (!next) {
						throw 'missing comparator';
					}
					operands.push({
						type: 'equal',
						variable: last.condition,
						negate: token == '!=',
						value: next.replace(/(^'|^"|'$|"$)/g, ''),
					});
					break;
				}

				case '=~': {
					const last = operands.pop();
					if (!last || last.type != 'truthy' || last.negate === true) {
						throw 'invalid condition';
					}

					const next = tokens.shift();
					if (!next) {
						throw 'missing regex';
					}
					operands.push({
						type: 'match',
						variable: last.condition,
						regex: next,
					});
					break;
				}

				case '>':
				case '<':
				case '>=':
				case '<=':
				case '&&':
				case '||': {
					//pass
					break;
				}
				default: {
					throw `Unrecognised token in when clause "${token}"`;
				}
			}
	}

	for (const operand of operands) {
		switch (operand.type) {
			case 'equal': {
				const cond = conditions.find(c => c.type == 'string') as
					| {
							type: 'string';
							variable: string;
							value: string;
					  }
					| undefined;

				// TODO: too many negatives is confusing
				if (cond === undefined) {
					if (!operand.negate && operand.value !== '') {
						return false;
					}
				} else {
					if (cond.type == 'string') {
						if (cond.value !== operand.value) {
							return false;
						}
					} else {
						return false;
					}
				}

				continue;
			}
			case 'match': {
				const cond = conditions.find(c => c.type == 'string') as
					| {
							type: 'string';
							variable: string;
							value: string;
					  }
					| undefined;
				let val = '';

				// TODO: too many negatives is confusing
				if (cond) {
					if (cond.variable === operand.variable) {
						val = cond.value;
					}
				}

				if (!new RegExp(operand.regex).test(val)) {
					return false;
				}

				continue;
			}
			case 'truthy': {
				if (operand.negate) {
					if (conditions.findIndex(c => c.type == 'boolean' && c.condition === operand.condition) !== -1) {
						return false;
					}
				} else {
					if (conditions.findIndex(c => c.type == 'boolean' && c.condition === operand.condition) === -1) {
						return false;
					}
				}

				continue;
			}
		}
	}
	return true;
}

export class KeyBindings {
	activeBindings: {
		[propName: string]: { key: string; commands: { [propName: string]: string } };
	} = {};

	conditions: string[] = [];

	load(bindings: IKeyBinding[]) {
		bindings.forEach(binding => {
			const kbd =
				this.activeBindings[binding.key] || (this.activeBindings[binding.key] = { commands: {}, key: binding.key });

			let remove = false;
			if (binding.command.startsWith('-')) {
				remove = true;
			}

			if (remove) {
				delete kbd.commands[binding.command];
			} else {
				kbd.commands[binding.command] = binding.when || '*';
			}
			if (binding.when) this.parseWhen(binding.when);
		});

		this.conditions = this.conditions.sort();
	}

	parseWhen(when: string) {
		const conditions = when.split('&&').map(p => p.trim());

		for (let condition of conditions) {
			if (condition.startsWith('!')) condition = condition.substring(1);

			if (condition.includes('!=')) {
				condition = condition.split('!=')[0];
			}
			if (condition.includes('==')) {
				condition = condition.split('==')[0];
			}
			if (!this.conditions.includes(condition)) {
				this.conditions.push(condition);
			}
		}
	}

	filter(conditions: Condition[], ...search: string[]) {
		const result = [];
		search = search.filter(sch => sch);

		for (const key in this.activeBindings) {
			if (this.activeBindings.hasOwnProperty(key)) {
				const binding = this.activeBindings[key];

				const keys = key
					.split(' ')
					.join('+')
					.split('+');

				for (const command in binding.commands) {
					if (binding.commands.hasOwnProperty(command)) {
						const when = binding.commands[command];

						if (search.findIndex(sch => !keys.includes(sch)) === -1) {
							result.push({
								input: binding.key,
								command: command,
								when: when,
								active: appliesToCondition(when, ...conditions),
							});
						}
					}
				}
			}
		}

		return result;
	}
}
