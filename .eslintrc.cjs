module.exports = {
	root: true,
	extends: ["plugin:svelte/recommended", "plugin:import/recommended"],
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	ignorePatterns: ["*.cjs", "scripts/*", "svelte.config.js", "vite.config.js"],
	settings: {
		"import/core-modules": ["svelte", "@sveltejs/kit", "$app/stores"],
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			"typescript": {
			  "alwaysTryTypes": true
			}
		}
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		project: "./tsconfig.json",
	  	extraFileExtensions: [".svelte"] // This is a required setting in `@typescript-eslint/parser` v4.24.0.
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
	  {
		files: ["*.svelte"],
		parser: "svelte-eslint-parser",
		// Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
		parserOptions: {
		  parser: "@typescript-eslint/parser"
		}
	  }
	],
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
		"import/no-named-as-default": "off",
		"import/no-named-as-default-member": "off",
		"import/default": "off",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				"argsIgnorePattern": "^_"
			}
		],
		"@typescript-eslint/quotes": ["error", "double"]
	}
  };
