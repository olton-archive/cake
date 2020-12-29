import {REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD} from "../helpers/regexp/regexp";
import {isNull} from "../helpers/null/is_null";
import capitalize from "./capitalize";
import lower from "./lower";

export default function title(s, noSplit){
    const regexp = REGEXP_EXTENDED_ASCII.test(s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
    const noSplitArray = Array.isArray(noSplit) ? noSplit : isNull(noSplit) ?  [] : noSplit.split();

    return s.replace(regexp, (w, i) => {
        const isNoSplit = i && noSplitArray.includes(s[i - 1]);
        return isNoSplit ? lower(w) : capitalize(w);
    })
}
