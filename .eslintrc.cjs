module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['airbnb-typescript/base', "plugin:import/recommended"],
	plugins: ['svelte3', '@typescript-eslint', "import"],
	ignorePatterns: ['*.cjs', "scripts/*", "svelte.config.js", "vite.config.js"],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'import/core-modules': ['svelte']
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		"no-console": "off",
		"no-continue": "off",
		"dot-notation": "off",
		"@typescript-eslint/dot-notation": "off",
		"@typescript-eslint/indent": [
			"error",
			4
		],
		"object-curly-newline": [
			"error",
			{
				"ObjectExpression": { "multiline": true, "minProperties": 3 },
				"ObjectPattern": { "multiline": true },
				"ImportDeclaration": { "multiline": true, "minProperties": 4 },
				"ExportDeclaration": "never"
			}
		],
		"max-len": [
			"error",
			{
				"code": 140,
				"ignoreStrings": true
			}
		],
		"linebreak-style": "off",
		"no-await-in-loop": "off",
		"no-restricted-syntax": [
			"error",
			{
				"selector": "ForInStatement",
				"message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
			},
			{
				"selector": "LabeledStatement",
				"message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
			},
			{
				"selector": "WithStatement",
				"message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
			}
		],
		"implicit-arrow-linebreak": "off",
		"import/no-extraneous-dependencies": "off",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				"argsIgnorePattern": "^_"
			}
		],
		"@typescript-eslint/quotes": ["error", "double"]
	},
	globals: {
		"NodeJS": true
	},
};
