import * as React from 'react';
import { Binding } from './App';
import { BindingDetail } from './BindingDetail';

export const BindingList = ({ items }: { items: Binding[] }) => (
	<ul>
		{items.map((item, index) => (
			<li key={index}>
				<BindingDetail {...item} active={false} />
			</li>
		))}
	</ul>
);
