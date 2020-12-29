import babel from 'rollup-plugin-babel';
import banner from '../banner';

import { DIST_UNIVERSAL, SRC } from '../const';

export default {
    input: `${SRC}/index.js`,
    plugins: [babel()],
    output: {
        file: `${DIST_UNIVERSAL}/cake.js`,
        format: 'umd',
        name: 'cake',
        sourcemap: false,
        banner: banner,
    },
};