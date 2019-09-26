module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
	},
	plugins: ['prettier', 'react'],
	rules: {
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
