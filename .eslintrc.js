module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 4],
        "@typescript-eslint/indent": [2, 4],
        "react/jsx-filename-extension": [2, {extensions: ['.js', '.jsx', '.tsx']}],
        "import/no-unresolved": "off",
        "import/prefer-default-export": 'off',
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "react/no-deprecated": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/prefer-ts-expect-error": "off",
    },
    "globals": {
        "__IS__DEV__": true,
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
