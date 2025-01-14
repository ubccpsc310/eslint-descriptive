module.exports = Object.freeze({
    rules: Object.freeze({
        "@ubccpsc310/descriptive/adjacent-overload-signatures": "error",
        "@ubccpsc310/descriptive/array-type": "error",
        "@ubccpsc310/descriptive/await-thenable": "error",
        "@ubccpsc310/descriptive/ban-tslint-comment": "error",
        "@ubccpsc310/descriptive/consistent-generic-constructors": "error",
        "@ubccpsc310/descriptive/consistent-indexed-object-style": "error",
        "@ubccpsc310/descriptive/consistent-type-assertions": "error",
        "@ubccpsc310/descriptive/consistent-type-definitions": "error",
        "@ubccpsc310/descriptive/curly": "error",
        "@ubccpsc310/descriptive/dot-notation": "error",
        "@ubccpsc310/descriptive/eqeqeq": "error",
        "@ubccpsc310/descriptive/explicit-function-return-type": "error",
        "@ubccpsc310/descriptive/explicit-member-accessibility": [
			"error",
			{
				"overrides": {
					"constructors": "off"
				}
			}
		],
        "@ubccpsc310/descriptive/for-direction": "error",
        "@ubccpsc310/descriptive/max-len": [
			"error",
			{
				"code": 120,
				"ignoreComments": true,
				"ignoreUrls": true,
				"ignoreStrings": true
			}
		],
        "@ubccpsc310/descriptive/max-lines": [
			"error",
			{
				"max": 300,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
        "@ubccpsc310/descriptive/max-lines-per-function": [
			"error",
			{
				"max": 35,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
        "@ubccpsc310/descriptive/max-nested-callbacks": ["error", 2],
        "@ubccpsc310/descriptive/max-statements-per-line": "error",
        "@ubccpsc310/descriptive/naming-convention": [
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
        "@ubccpsc310/descriptive/no-async-promise-executor": "error",
        "@ubccpsc310/descriptive/no-await-in-loop": "error",
        "@ubccpsc310/descriptive/no-bitwise": "error",
        "@ubccpsc310/descriptive/no-case-declarations": "error",
        "@ubccpsc310/descriptive/no-class-assign": "error",
        "@ubccpsc310/descriptive/no-compare-neg-zero": "error",
        "@ubccpsc310/descriptive/no-cond-assign": "error",
        "@ubccpsc310/descriptive/no-confusing-non-null-assertion": "error",
        "@ubccpsc310/descriptive/no-console": "warn",
        "@ubccpsc310/descriptive/no-constant-binary-expression": "error",
        "@ubccpsc310/descriptive/no-constant-condition": "error",
        "@ubccpsc310/descriptive/no-control-regex": "error",
        "@ubccpsc310/descriptive/no-debugger": "error",
        "@ubccpsc310/descriptive/no-delete-var": "error",
        "@ubccpsc310/descriptive/no-dupe-else-if": "error",
        "@ubccpsc310/descriptive/no-duplicate-case": "error",
        "@ubccpsc310/descriptive/no-empty": "error",
        "@ubccpsc310/descriptive/no-empty-character-class": "error",
        "@ubccpsc310/descriptive/no-empty-function": "error",
        "@ubccpsc310/descriptive/no-empty-pattern": "error",
        "@ubccpsc310/descriptive/no-empty-static-block": "error",
        "@ubccpsc310/descriptive/no-eval": "error",
        "@ubccpsc310/descriptive/no-ex-assign": "error",
        "@ubccpsc310/descriptive/no-extra-boolean-cast": "error",
        "@ubccpsc310/descriptive/no-fallthrough": "error",
        "@ubccpsc310/descriptive/no-floating-promises": [
			"error",
			{
				"ignoreIIFE": true
			}
		],
        "@ubccpsc310/descriptive/no-for-in-array": "error",
        "@ubccpsc310/descriptive/no-global-assign": "error",
        "@ubccpsc310/descriptive/no-inferrable-types": "error",
        "@ubccpsc310/descriptive/no-invalid-regexp": "error",
        "@ubccpsc310/descriptive/no-labels": "error",
        "@ubccpsc310/descriptive/no-loss-of-precision": "error",
        "@ubccpsc310/descriptive/no-magic-numbers": [
			"error",
			{
				"ignoreClassFieldInitialValues": true,
				"ignoreDefaultValues": true,
				"ignore": [-2, -1, 0, 1, 2, 10, 100],
                "ignoreArrayIndexes": true,
			}
		],
        "@ubccpsc310/descriptive/no-misleading-character-class": "error",
        "@ubccpsc310/descriptive/no-misused-promises": [
			"error",
			{
				"checksConditionals": true,
				"checksVoidReturn": false
			}
		],
        "@ubccpsc310/descriptive/no-nonoctal-decimal-escape": "error",
        "@ubccpsc310/descriptive/no-octal": "error",
        "@ubccpsc310/descriptive/no-prototype-builtins": "error",
        "@ubccpsc310/descriptive/no-regex-spaces": "error",
        "@ubccpsc310/descriptive/no-self-assign": "error",
        "@ubccpsc310/descriptive/no-shadow": "error",
        "@ubccpsc310/descriptive/no-shadow-restricted-names": "error",
        "@ubccpsc310/descriptive/no-throw-literal": "error",
        "@ubccpsc310/descriptive/no-unsafe-finally": "error",
        "@ubccpsc310/descriptive/no-unsafe-optional-chaining": "error",
        "@ubccpsc310/descriptive/no-unused-expressions": "error",
        "@ubccpsc310/descriptive/no-unused-labels": "error",
        "@ubccpsc310/descriptive/no-unused-private-class-members": "error",
        "@ubccpsc310/descriptive/no-unused-vars": [
            "error",
            {
                "args": "none",
                "argsIgnorePattern": "^_",
                "caughtErrors": "all",
                "caughtErrorsIgnorePattern": "^_",
                "destructuredArrayIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "ignoreRestSiblings": true
            }
        ],
        "@ubccpsc310/descriptive/no-useless-backreference": "error",
        "@ubccpsc310/descriptive/no-useless-catch": "error",
        "@ubccpsc310/descriptive/no-useless-escape": "error",
        "@ubccpsc310/descriptive/no-var": "error",
        "@ubccpsc310/descriptive/no-with": "error",
        "@ubccpsc310/descriptive/prefer-const": "error",
        "@ubccpsc310/descriptive/prefer-for-of": "error",
        "@ubccpsc310/descriptive/prefer-function-type": "error",
        "@ubccpsc310/descriptive/prefer-optional-chain": "error",
        "@ubccpsc310/descriptive/prefer-spread": "error",
        "@ubccpsc310/descriptive/promise-function-async": "error",
        "@ubccpsc310/descriptive/radix": "error",
        "@ubccpsc310/descriptive/unified-signatures": "error",
        "@ubccpsc310/descriptive/use-isnan": "error"
    })
});
