export interface IKeyBinding {
	key: string;
	command: string;
	when?: string;
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

	filter(...search: string[]) {
		const result = [];
		search = search.filter(sch => sch);

		for (const key in this.activeBindings) {
			if (this.activeBindings.hasOwnProperty(key)) {
				const binding = this.activeBindings[key];

				const keys = key
					.split(' ')
					.join('+')
					.split('+');

				if (search.findIndex(sch => !keys.includes(sch)) === -1) {
					result.push(binding);
				}
			}
		}

		return result;
	}
}
