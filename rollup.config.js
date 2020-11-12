import { terser } from "rollup-plugin-terser";

export default [
  {
    input: 'src/index.js',
    output: [{
      file: 'dist/vtw.min.js',
      format: 'iife',
    plugins: [
      terser()
    ],
    },
    {
      file: 'dist/vtw.esm.js',
      format: 'esm',
    }
    ],
    external: ['tailwindcss'],
  },
];
