import {REGEXP_FLAGS} from "./regexp";

export const getRegExpFlag = regExp => regExp.toString().match(REGEXP_FLAGS)[0]
export const addFlagToRegExp = (pattern, flag) => {
    const flags = getRegExpFlag(pattern);

    if (!flags.includes(flag)) {
        return new RegExp(pattern.source, flags + flag);
    }

    return pattern;
}