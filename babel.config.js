/** @type {import('@babel/core').TransformOptions} */
const babelConfig = {
    env: {
        'test': {
            presets: [
                ['@babel/preset-env', {targets: {node: 'current'}}],
                '@babel/preset-typescript',
            ],
            // sourceMaps: 'inline'
        }
    }
};

module.exports = babelConfig