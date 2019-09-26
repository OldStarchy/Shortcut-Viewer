import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Keyboard } from './components/Keyboard';
import { USLayout } from './layouts/USLayout';

function init() {
	const container = document.getElementsByClassName('app')[0];
	if (!container) {
		console.error('Missing app container');
		return;
	}

	ReactDOM.render(<Keyboard layout={new USLayout()} scale={48} />, container);
}

init();
