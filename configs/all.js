module.exports = Object.freeze({
    rules: Object.freeze({
        "eslint-descriptive/adjacent-overload-signatures": "error",
        "eslint-descriptive/array-type": "error",
        "eslint-descriptive/await-thenable": "error",
        "eslint-descriptive/ban-tslint-comment": "error",
        "eslint-descriptive/consistent-generic-constructors": "error",
        "eslint-descriptive/consistent-indexed-object-style": "error",
        "eslint-descriptive/consistent-type-assertions": "error",
        "eslint-descriptive/consistent-type-definitions": "error",
        "eslint-descriptive/curly": "error",
        "eslint-descriptive/dot-notation": ["error", { "allowKeywords": false }],
        "eslint-descriptive/eqeqeq": "error",
        "eslint-descriptive/explicit-function-return-type": "error",
        "eslint-descriptive/explicit-member-accessibility": [
			"error",
			{
				"overrides": {
					"constructors": "off"
				}
			}
		],
        "eslint-descriptive/for-direction": "error",
        "eslint-descriptive/max-len": [
			"error",
			{
				"code": 120,
				"ignoreComments": true,
				"ignoreUrls": true,
				"ignoreStrings": true
			}
		],
        "eslint-descriptive/max-lines": [
			"error",
			{
				"max": 300,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
        "eslint-descriptive/max-lines-per-function": [
			"error",
			{
				"max": 30,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
        "eslint-descriptive/max-nested-callbacks": ["error", 2],
        "eslint-descriptive/max-statements-per-line": "error",
        "eslint-descriptive/naming-convention": [
			"error",
			{
				"selector": "typeLike",
				"format": ["PascalCase"]
			},
			{
				"selector": "variable",
				"format": ["camelCase", "PascalCase", "UPPER_CASE"],
			}
		],
        "eslint-descriptive/no-async-promise-executor": "error",
        "eslint-descriptive/no-await-in-loop": "error",
        "eslint-descriptive/no-bitwise": "error",
        "eslint-descriptive/no-case-declarations": "error",
        "eslint-descriptive/no-class-assign": "error",
        "eslint-descriptive/no-compare-neg-zero": "error",
        "eslint-descriptive/no-cond-assign": "error",
        "eslint-descriptive/no-confusing-non-null-assertion": "error",
        "eslint-descriptive/no-console": "error",
        "eslint-descriptive/no-constant-binary-expression": "error",
        "eslint-descriptive/no-constant-condition": "error",
        "eslint-descriptive/no-control-regex": "error",
        "eslint-descriptive/no-debugger": "error",
        "eslint-descriptive/no-delete-var": "error",
        "eslint-descriptive/no-dupe-else-if": "error",
        "eslint-descriptive/no-duplicate-case": "error",
        "eslint-descriptive/no-empty": "error",
        "eslint-descriptive/no-empty-character-class": "error",
        "eslint-descriptive/no-empty-function": "error",
        "eslint-descriptive/no-empty-pattern": "error",
        "eslint-descriptive/no-empty-static-block": "error",
        "eslint-descriptive/no-eval": "error",
        "eslint-descriptive/no-ex-assign": "error",
        "eslint-descriptive/no-extra-boolean-cast": "error",
        "eslint-descriptive/no-fallthrough": "error",
        "eslint-descriptive/no-floating-promises": [
			"error",
			{
				"ignoreIIFE": true
			}
		],
        "eslint-descriptive/no-for-in-array": "error",
        "eslint-descriptive/no-global-assign": "error",
        "eslint-descriptive/no-inferrable-types": "error",
        "eslint-descriptive/no-invalid-regexp": "error",
        "eslint-descriptive/no-labels": "error",
        "eslint-descriptive/no-loss-of-precision": "error",
        "eslint-descriptive/no-magic-numbers": [
			"error",
			{
				"ignoreClassFieldInitialValues": true,
				"ignoreDefaultValues": true,
				"ignore": [-1, 0, 1]
			}
		],
        "eslint-descriptive/no-misleading-character-class": "error",
        "eslint-descriptive/no-misused-promises": [
			"error",
			{
				"checksConditionals": true,
				"checksVoidReturn": false
			}
		],
        "eslint-descriptive/no-nonoctal-decimal-escape": "error",
        "eslint-descriptive/no-octal": "error",
        "eslint-descriptive/no-prototype-builtins": "error",
        "eslint-descriptive/no-regex-spaces": "error",
        "eslint-descriptive/no-self-assign": "error",
        "eslint-descriptive/no-shadow": "error",
        "eslint-descriptive/no-shadow-restricted-names": "error",
        "eslint-descriptive/no-throw-literal": "error",
        "eslint-descriptive/no-unsafe-finally": "error",
        "eslint-descriptive/no-unsafe-optional-chaining": "error",
        "eslint-descriptive/no-unused-expressions": "error",
        "eslint-descriptive/no-unused-labels": "error",
        "eslint-descriptive/no-unused-private-class-members": "error",
        "eslint-descriptive/no-unused-vars": "error",
        "eslint-descriptive/no-useless-backreference": "error",
        "eslint-descriptive/no-useless-catch": "error",
        "eslint-descriptive/no-useless-escape": "error",
        "eslint-descriptive/no-var": "error",
        "eslint-descriptive/no-with": "error",
        "eslint-descriptive/prefer-const": "error",
        "eslint-descriptive/prefer-find": "error",
        "eslint-descriptive/prefer-for-of": "error",
        "eslint-descriptive/prefer-function-type": "error",
        "eslint-descriptive/prefer-optional-chain": "error",
        "eslint-descriptive/prefer-spread": "error",
        "eslint-descriptive/promise-function-async": "error",
        "eslint-descriptive/radix": "error",
        "eslint-descriptive/require-await": "error",
        "eslint-descriptive/unified-signatures": "error",
        "eslint-descriptive/use-isnan": "error"
    })
});
