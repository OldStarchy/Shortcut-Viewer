import { Key } from '../keys/Key';
import { ButtonKey } from '../keys/KeyName';

export class Layout {
	readonly buttons: Key[] = [];
	push(key: ButtonKey, x: number, y: number, width = 1, height = 1) {
		this.buttons.push(new Key(key, x, y, width, height));
	}
}
