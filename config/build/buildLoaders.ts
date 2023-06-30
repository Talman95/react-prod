import {RuleSetRule} from "webpack";

export function buildLoaders(): RuleSetRule[] {
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        styleLoader,
        typescriptLoader,
    ]
}
