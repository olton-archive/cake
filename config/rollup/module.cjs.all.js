import babel from 'rollup-plugin-babel';
import glob from 'glob';

import { DIST_MODULE_CJS, SRC } from '../const';

function modulesPaths() {
    return glob.sync(SRC + '/*/*.js', {
        ignore: [
            SRC + '/helpers/**/*.js',
            SRC + '/functions.js',
            SRC + '/type.js',
            SRC + '/index.js',
        ],
    });
}

export default {
    input: modulesPaths(),
    plugins: [babel()],
    output: {
        exports: "auto",
        dir: DIST_MODULE_CJS,
        format: 'cjs',
        chunkFileNames: 'internal/[name].js',
    },
};