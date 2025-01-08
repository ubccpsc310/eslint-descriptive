module.exports = Object.freeze({
    rules: Object.freeze({
        "@ubccpsc310/eslint-plugin-descriptive/adjacent-overload-signatures": "error",
        "@ubccpsc310/eslint-plugin-descriptive/array-type": "error",
        "@ubccpsc310/eslint-plugin-descriptive/await-thenable": "error",
        "@ubccpsc310/eslint-plugin-descriptive/ban-tslint-comment": "error",
        "@ubccpsc310/eslint-plugin-descriptive/consistent-generic-constructors": "error",
        "@ubccpsc310/eslint-plugin-descriptive/consistent-indexed-object-style": "error",
        "@ubccpsc310/eslint-plugin-descriptive/consistent-type-assertions": "error",
        "@ubccpsc310/eslint-plugin-descriptive/consistent-type-definitions": "error",
        "@ubccpsc310/eslint-plugin-descriptive/curly": "error",
        "@ubccpsc310/eslint-plugin-descriptive/dot-notation": "error",
        "@ubccpsc310/eslint-plugin-descriptive/eqeqeq": "error",
        "@ubccpsc310/eslint-plugin-descriptive/explicit-function-return-type": "error",
        "@ubccpsc310/eslint-plugin-descriptive/explicit-member-accessibility": [
			"error",
			{
				"overrides": {
					"constructors": "off"
				}
			}
		],
        "@ubccpsc310/eslint-plugin-descriptive/for-direction": "error",
        "@ubccpsc310/eslint-plugin-descriptive/max-len": [
			"error",
			{
				"code": 120,
				"ignoreComments": true,
				"ignoreUrls": true,
				"ignoreStrings": true
			}
		],
        "@ubccpsc310/eslint-plugin-descriptive/max-lines": [
			"error",
			{
				"max": 300,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
        "@ubccpsc310/eslint-plugin-descriptive/max-lines-per-function": [
			"error",
			{
				"max": 35,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
        "@ubccpsc310/eslint-plugin-descriptive/max-nested-callbacks": ["error", 2],
        "@ubccpsc310/eslint-plugin-descriptive/max-statements-per-line": "error",
        "@ubccpsc310/eslint-plugin-descriptive/naming-convention": [
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
        "@ubccpsc310/eslint-plugin-descriptive/no-async-promise-executor": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-await-in-loop": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-bitwise": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-case-declarations": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-class-assign": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-compare-neg-zero": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-cond-assign": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-confusing-non-null-assertion": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-console": "warn",
        "@ubccpsc310/eslint-plugin-descriptive/no-constant-binary-expression": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-constant-condition": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-control-regex": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-debugger": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-delete-var": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-dupe-else-if": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-duplicate-case": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-empty": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-empty-character-class": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-empty-function": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-empty-pattern": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-empty-static-block": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-eval": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-ex-assign": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-extra-boolean-cast": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-fallthrough": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-floating-promises": [
			"error",
			{
				"ignoreIIFE": true
			}
		],
        "@ubccpsc310/eslint-plugin-descriptive/no-for-in-array": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-global-assign": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-inferrable-types": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-invalid-regexp": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-labels": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-loss-of-precision": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-magic-numbers": [
			"error",
			{
				"ignoreClassFieldInitialValues": true,
				"ignoreDefaultValues": true,
				"ignore": [-1, 0, 1]
			}
		],
        "@ubccpsc310/eslint-plugin-descriptive/no-misleading-character-class": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-misused-promises": [
			"error",
			{
				"checksConditionals": true,
				"checksVoidReturn": false
			}
		],
        "@ubccpsc310/eslint-plugin-descriptive/no-nonoctal-decimal-escape": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-octal": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-prototype-builtins": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-regex-spaces": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-self-assign": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-shadow": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-shadow-restricted-names": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-throw-literal": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-unsafe-finally": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-unsafe-optional-chaining": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-unused-expressions": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-unused-labels": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-unused-private-class-members": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-unused-vars": [
            "error",
            {
                "args": "all",
                "argsIgnorePattern": "^_",
                "caughtErrors": "all",
                "caughtErrorsIgnorePattern": "^_",
                "destructuredArrayIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "ignoreRestSiblings": true
            }
        ],
        "@ubccpsc310/eslint-plugin-descriptive/no-useless-backreference": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-useless-catch": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-useless-escape": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-var": "error",
        "@ubccpsc310/eslint-plugin-descriptive/no-with": "error",
        "@ubccpsc310/eslint-plugin-descriptive/prefer-const": "error",
        // "@ubccpsc310/eslint-plugin-descriptive/prefer-find": "error",
        "@ubccpsc310/eslint-plugin-descriptive/prefer-for-of": "error",
        "@ubccpsc310/eslint-plugin-descriptive/prefer-function-type": "error",
        "@ubccpsc310/eslint-plugin-descriptive/prefer-optional-chain": "error",
        "@ubccpsc310/eslint-plugin-descriptive/prefer-spread": "error",
        "@ubccpsc310/eslint-plugin-descriptive/promise-function-async": "error",
        "@ubccpsc310/eslint-plugin-descriptive/radix": "error",
        // "@ubccpsc310/eslint-plugin-descriptive/require-await": "error",
        "@ubccpsc310/eslint-plugin-descriptive/unified-signatures": "error",
        "@ubccpsc310/eslint-plugin-descriptive/use-isnan": "error"
    })
});
