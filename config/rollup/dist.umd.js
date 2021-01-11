import babel from 'rollup-plugin-babel';
import banner from '../banner';

import { DIST_UNIVERSAL, SRC } from '../const';

export default {
    input: `${SRC}/browser.js`,
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
    output: {
        file: `${DIST_UNIVERSAL}/cake.js`,
        format: 'iife',
        name: '__cake',
        sourcemap: false,
        banner: banner,
    },
};