module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        // if you don't turn this off, you can get wierd eslint errors everywhere
        ecmaFeatures: {
            jsx: false,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
    ],
    // add your custom rules here
    // it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        // disallow noused methods to help clean out dead methods properties
        'vue/no-unused-properties': [
            'error',
            {
                groups: ['methods', 'data'],
                deepData: false,
                ignorePublicMembers: false,
            },
        ],
        'vue/multi-word-component-names': ['off'],
        // turn off this option to allow multiple elements in el-table or some other components
        'vue/prop-name-casing': [0, 'camelCase' | 'snake_case'],
        'vue/order-in-components': [
            1,
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'emits',
                    'setup',
                    'asyncData',
                    'data',
                    'fetch',
                    'head',
                    'computed',
                    'watch',
                    'watchQuery',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
        'vue/attributes-order': [
            0,
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: false,
            },
        ],
        'vue/no-parsing-error': [
            1,
            {
                'abrupt-closing-of-empty-comment': true,
                'absence-of-digits-in-numeric-character-reference': true,
                'cdata-in-html-content': true,
                'character-reference-outside-unicode-range': true,
                'control-character-in-input-stream': true,
                'control-character-reference': true,
                'eof-before-tag-name': true,
                'eof-in-cdata': true,
                'eof-in-comment': true,
                'eof-in-tag': true,
                'incorrectly-closed-comment': true,
                'incorrectly-opened-comment': true,
                'invalid-first-character-of-tag-name': true,
                'missing-attribute-value': true,
                'missing-end-tag-name': true,
                'missing-semicolon-after-character-reference': true,
                'missing-whitespace-between-attributes': true,
                'nested-comment': false,
                'noncharacter-character-reference': true,
                'noncharacter-in-input-stream': true,
                'null-character-reference': true,
                'surrogate-character-reference': true,
                'surrogate-in-input-stream': true,
                'unexpected-character-in-attribute-name': true,
                'unexpected-character-in-unquoted-attribute-value': true,
                'unexpected-equals-sign-before-attribute-name': true,
                'unexpected-null-character': true,
                'unexpected-question-mark-instead-of-tag-name': true,
                'unexpected-solidus-in-tag': true,
                'unknown-named-character-reference': true,
                'end-tag-with-attributes': true,
                'duplicate-attribute': true,
                'end-tag-with-trailing-solidus': true,
                'non-void-html-element-start-tag-with-trailing-solidus': false,
                'x-invalid-end-tag': true,
                'x-invalid-namespace': true,
            },
        ],

        'vue/html-self-closing': [
            0,
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'never',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-indent': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/name-property-casing': ['error', 'PascalCase'],
        'vue/no-v-html': 'off',
        'accessor-pairs': 2,
        'arrow-spacing': [
            2,
            {
                before: true,
                after: true,
            },
        ],
        'block-spacing': [2, 'always'],
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        camelcase: [
            0,
            {
                properties: 'always',
            },
        ],
        'comma-spacing': [
            2,
            {
                before: false,
                after: true,
            },
        ],
        'object-curly-spacing': 'off',
        'comma-style': [2, 'last'],
        'constructor-super': 2,
        curly: [2, 'multi-line'],
        'dot-location': [2, 'property'],
        'eol-last': 2,
        eqeqeq: [1, 'always', { null: 'ignore' }],
        'generator-star-spacing': [
            2,
            {
                before: true,
                after: true,
            },
        ],
        'handle-callback-err': [2, '^(err|error)$'],
        indent: [
            0,
            4,
            {
                SwitchCase: 1,
            },
        ],
        'jsx-quotes': [2, 'prefer-single'],
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true,
            },
        ],
        'new-cap': [
            2,
            {
                newIsCap: true,
                capIsNew: false,
            },
        ],
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-caller': 2,
        'no-console': 'off',
        'no-class-assign': 2,
        'no-cond-assign': 2,
        'no-const-assign': 2,
        'no-control-regex': 0,
        'no-delete-var': 2,
        'no-dupe-args': 2,
        'no-dupe-class-members': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty-pattern': 2,
        'no-eval': 2,
        'no-ex-assign': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': [2, 'functions'],
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-func-assign': 2,
        'no-implied-eval': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-iterator': 2,
        'no-label-var': 2,
        'no-labels': [
            2,
            {
                allowLoop: false,
                allowSwitch: false,
            },
        ],
        'no-lone-blocks': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-multiple-empty-lines': [
            2,
            {
                max: 1,
            },
        ],
        'no-native-reassign': 2,
        'no-negated-in-lhs': 2,
        'no-new-object': 2,
        'no-new-require': 2,
        'no-new-symbol': 2,
        'no-new-wrappers': 2,
        'no-obj-calls': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-path-concat': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-regex-spaces': 2,
        'no-return-assign': [2, 'except-parens'],
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow-restricted-names': 2,
        'no-spaced-func': 2,
        'no-sparse-arrays': 2,
        'no-this-before-super': 2,
        'no-throw-literal': 2,
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-unexpected-multiline': 2,
        'no-unmodified-loop-condition': 2,
        'no-unneeded-ternary': [
            2,
            {
                defaultAssignment: false,
            },
        ],
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unused-vars': [
            2,
            {
                vars: 'all',
                args: 'none',
            },
        ],
        'no-useless-call': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-escape': 0,
        'no-whitespace-before-property': 2,
        'no-with': 2,
        'one-var': [
            2,
            {
                initialized: 'never',
            },
        ],
        'operator-linebreak': [
            2,
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'padded-blocks': [2, 'never'],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        semi: [0, 'never'],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true,
            },
        ],
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [0, 'never'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [
            1,
            {
                words: true,
                nonwords: false,
            },
        ],
        'spaced-comment': [
            2,
            'always',
            {
                markers: [
                    'global',
                    'globals',
                    'eslint',
                    'eslint-disable',
                    '*package',
                    '!',
                    ',',
                ],
            },
        ],
        'template-curly-spacing': [2, 'never'],
        'use-isnan': 2,
        'valid-typeof': 2,
        'wrap-iife': [2, 'any'],
        'yield-star-spacing': [2, 'both'],
        yoda: [2, 'never'],
        'prefer-const': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'object-curly-spacing': [
            2,
            'always',
            {
                objectsInObjects: false,
            },
        ],
        'array-bracket-spacing': [2, 'never'],
    },
};
