import {use} from "../index";
import {isNull} from "../helpers/null/is_null";
import {REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD} from "../helpers/regexp/regexp";
import {nvl} from "../helpers/null/nvl";

use({
    words(pattern, flags){
        let regexp;

        if (isNull(pattern)) {
            regexp = REGEXP_EXTENDED_ASCII.test(this.value) ? REGEXP_LATIN_WORD : REGEXP_WORD;
        } else if (pattern instanceof RegExp) {
            regexp = pattern;
        } else {
            regexp = new RegExp(pattern, nvl(flags, ''))
        }

        return nvl(this.value.match(regexp), []);
    }
});
