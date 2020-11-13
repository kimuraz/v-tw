import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/vtw.min.js',
                name: 'vtw',
                format: 'iife',
            },
            {
                name: 'vtw',
                file: 'dist/vtw.esm.js',
                format: 'esm',
            },
        ],
        plugins: [
            terser(),
            babel({ babelHelpers: 'bundled', exclude: 'node_modules' }),
        ],
    },
];
