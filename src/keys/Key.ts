import { ButtonKey as KeyName } from './KeyName';
export class Key {
	constructor(
		readonly key: KeyName,
		readonly x: number,
		readonly y: number,
		readonly width: number = 1,
		readonly height: number = 1,
	) {}
}
