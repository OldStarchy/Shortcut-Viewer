import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CurrentBinding } from './bindings/CurrentBinding';
import { DefaultBinding } from './bindings/DefaultBinding';
import { App } from './components/App';
import { KeyBindings } from './KeyboardShortcuts';
import { USLayout } from './layouts/USLayout';

function init() {
	const container = document.getElementsByClassName('app')[0];
	if (!container) {
		console.error('Missing app container');
		return;
	}

	const kbsh = new KeyBindings();

	kbsh.load(DefaultBinding);
	kbsh.load(CurrentBinding);

	const layout = new USLayout();

	ReactDOM.render(<App keyBindings={kbsh} layout={layout} />, container);
}

init();
