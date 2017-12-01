module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": 0,
        "indent": [
            "error",
            "tab"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "no-unused-vars": "off",
        "semi": [
            "error",
            "always"
        ]
    }
};