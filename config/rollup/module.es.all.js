import babel from 'rollup-plugin-babel';
import glob from 'glob';

import { DIST_MODULE_ES, SRC } from '../const';

function modulesPaths() {
    return glob.sync(SRC + '/*/*.js', {
        ignore: [
            SRC + '/helper/**/*.js',
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
        dir: DIST_MODULE_ES,
        format: 'es',
        chunkFileNames: 'internal/[name].js',
    },
};