import {use, cake} from "../index";
import {REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD} from "../helpers/regexp/regexp";
import {isNull} from "../helpers/null/is_null";
import "./capitalize";

use({
    title(noSplit){
        const regexp = REGEXP_EXTENDED_ASCII.test(this.value) ? REGEXP_LATIN_WORD : REGEXP_WORD;
        const noSplitArray = Array.isArray(noSplit) ? noSplit : !isNull(noSplit) ? noSplit.split() : [];

        this.value = this.value.replace(regexp, (w, i) => {
            const isNoSplit = i && noSplitArray.includes(this.value[i - 1]);
            return isNoSplit ? w.toLowerCase() : cake(w).capitalize();
        })

        return this;
    }
});
