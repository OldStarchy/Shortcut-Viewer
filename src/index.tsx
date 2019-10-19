import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CurrentBinding } from './bindings/CurrentBinding';
import { DefaultBinding } from './bindings/DefaultBinding';
import { App } from './components/App';
import { KeyBindings } from './KeyboardShortcuts';
import { USLayout } from './layouts/USLayout';
import './styles/styles.scss';

function init() {
	const container = document.getElementsByClassName('app')[0];
	if (!container) {
		console.error('Missing app container');
		return;
	}

	const keyBindings = new KeyBindings();

	keyBindings.load(DefaultBinding);
	keyBindings.load(CurrentBinding);

	const layout = new USLayout();

	ReactDOM.render(<App keyBindings={keyBindings} layout={layout} />, container);
}

init();
