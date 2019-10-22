import * as React from 'react';
import { Binding } from './App';
import { BindingDetail } from './BindingDetail';

export const BindingList = ({ items }: { items: Array<Binding & { active: boolean }> }) => (
	<ul>
		{items
			.sort((a, b) => {
				if (a.active != b.active) {
					return a.active ? -1 : 1;
				}
				if (a.command === b.command) {
					return 0;
				}
				if (a.command < b.command) {
					return -1;
				}
				return 1;
			})
			.map((item, index) => (
				<li key={index}>
					<BindingDetail {...item} />
				</li>
			))}
	</ul>
);
