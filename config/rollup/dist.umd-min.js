import babel from 'rollup-plugin-babel';

import banner from '../banner';
import { uglify } from 'rollup-plugin-uglify';
import { DIST_UNIVERSAL, SRC } from '../const';

export default {
    input: `${SRC}/index.js`,
    plugins: [
        babel(),
        uglify({
            output: {
                comments: /^!/,
            },
        }),
    ],
    output: {
        file: `${DIST_UNIVERSAL}/cake.min.js`,
        format: 'umd',
        name: 'cake',
        sourcemap: true,
        banner: banner,
    },
};