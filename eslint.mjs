import js from '@eslint/js';
import ts from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importsPlugin from 'eslint-plugin-import';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
        arrowParens: false,
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
        quoteProps: "as-needed",
    }),
    {
        files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
        languageOptions: {
            parser: ts.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooksPlugin,
            import: importsPlugin,
        },
        rules: {
            '@stylistic/max-len': ['warn', {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreComments: true,
            }],
            '@stylistic/no-trailing-spaces': 'off',
            'no-nested-ternary': 'error',
            'no-undef': 'off',
            '@typescript-eslint/prefer-for-of': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/no-empty-function': ['warn', { allow: [] }],
            '@typescript-eslint/consistent-type-definitions': 'warn',
            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            'import/no-duplicates': [
                'error',
                {
                    'prefer-inline': true,
                },
            ],
            'import/no-mutable-exports': 'error',
        },
    },
];