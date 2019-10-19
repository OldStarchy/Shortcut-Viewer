import { Layout } from './Layout';

export class USLayout extends Layout {
	constructor() {
		super();

		this.push('Escape', 0, 0, 1, 0.75);

		this.push('F1', 2, 0, 1, 0.75);
		this.push('F2', 3, 0, 1, 0.75);
		this.push('F3', 4, 0, 1, 0.75);
		this.push('F4', 5, 0, 1, 0.75);
		this.push('F5', 6.5, 0, 1, 0.75);
		this.push('F6', 7.5, 0, 1, 0.75);
		this.push('F7', 8.5, 0, 1, 0.75);
		this.push('F8', 9.5, 0, 1, 0.75);
		this.push('F9', 11, 0, 1, 0.75);
		this.push('F10', 12, 0, 1, 0.75);
		this.push('F11', 13, 0, 1, 0.75);
		this.push('F12', 14, 0, 1, 0.75);

		this.push('Print Screen', 15.5, 0, 1, 0.75);
		this.push('Scroll Lock', 16.5, 0, 1, 0.75);
		this.push('Pause Break', 17.5, 0, 1, 0.75);

		this.push('~', 0, 1);
		this.push('1', 1, 1);
		this.push('2', 2, 1);
		this.push('3', 3, 1);
		this.push('4', 4, 1);
		this.push('5', 5, 1);
		this.push('6', 6, 1);
		this.push('7', 7, 1);
		this.push('8', 8, 1);
		this.push('9', 9, 1);
		this.push('0', 10, 1);
		this.push('-', 11, 1);
		this.push('=', 12, 1);
		this.push('\\', 13, 1);
		this.push('Backspace', 14, 1);

		this.push('Insert', 15.5, 1);
		this.push('Home', 16.5, 1);
		this.push('Page Up', 17.5, 1);

		this.push('Tab', 0, 2, 1.5);
		this.push('Q', 1.5, 2);
		this.push('W', 2.5, 2);
		this.push('E', 3.5, 2);
		this.push('R', 4.5, 2);
		this.push('T', 5.5, 2);
		this.push('Y', 6.5, 2);
		this.push('U', 7.5, 2);
		this.push('I', 8.5, 2);
		this.push('O', 9.5, 2);
		this.push('P', 10.5, 2);
		this.push('[', 11.5, 2);
		this.push(']', 12.5, 2);

		this.push('Delete', 15.5, 2);
		this.push('End', 16.5, 2);
		this.push('Page Down', 17.5, 2);

		this.push('Caps Lock', 0, 3, 1.75);
		this.push('A', 1.75, 3);
		this.push('S', 2.75, 3);
		this.push('D', 3.75, 3);
		this.push('F', 4.75, 3);
		this.push('G', 5.75, 3);
		this.push('H', 6.75, 3);
		this.push('J', 7.75, 3);
		this.push('K', 8.75, 3);
		this.push('L', 9.75, 3);
		this.push(';', 10.75, 3);
		this.push("'", 11.75, 3);
		this.push('Enter', 12.75, 3, 2.25);

		this.push('Shift', 0, 4, 2, undefined, 'shift');
		this.push('Z', 2, 4);
		this.push('X', 3, 4);
		this.push('C', 4, 4);
		this.push('V', 5, 4);
		this.push('B', 6, 4);
		this.push('N', 7, 4);
		this.push('M', 8, 4);
		this.push(',', 9, 4);
		this.push('.', 10, 4, undefined, undefined, 'oem_period');
		this.push('/', 11, 4);
		this.push('Shift', 12, 4, 3, undefined, 'shift');

		this.push('Control', 0, 5, 1.25, undefined, 'ctrl');
		this.push('OEM', 1.25, 5, 1.25, undefined, 'win');
		this.push('Alt', 2.5, 5, 1.25, undefined, 'alt');
		this.push('Space', 3.75, 5, 11.25 - 3.75);
		this.push('Alt', 11.25, 5, 1.25, undefined, 'alt');
		this.push('OEM', 12.5, 5, 1.25, undefined, 'win');
		this.push('Control', 13.75, 5, 1.25, undefined, 'ctrl');

		this.push('Up', 16.5, 4);
		this.push('Left', 15.5, 5);
		this.push('Down', 16.5, 5);
		this.push('Right', 17.5, 5);

		this.push('Num Lock', 19, 1);
		this.push('Numpad /', 20, 1);
		this.push('Numpad *', 21, 1);
		this.push('Numpad -', 22, 1);

		this.push('Numpad 7', 19, 2);
		this.push('Numpad 8', 20, 2);
		this.push('Numpad 9', 21, 2);
		this.push('Numpad +', 22, 2, 1, 2);

		this.push('Numpad 4', 19, 3);
		this.push('Numpad 5', 20, 3);
		this.push('Numpad 6', 21, 3);

		this.push('Numpad 1', 19, 4);
		this.push('Numpad 2', 20, 4);
		this.push('Numpad 3', 21, 4);
		this.push('Numpad Enter', 22, 4, 1, 2);

		this.push('Numpad 0', 19, 5, 2);
		this.push('Numpad .', 21, 5);
	}
}
