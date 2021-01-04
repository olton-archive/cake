import {digit, whitespace, highSurrogate, lowSurrogate, diacriticalMark, base, generalPunctuationBlock, nonCharacter, dingbatBlock, lowerCaseLetter, upperCaseLetter} from "./const"

/**
 * Regular expression to match combining marks
 */
export const REGEXP_COMBINING_MARKS = new RegExp(
    '([' +
    base +
    ']|[' +
    highSurrogate +
    '][' +
    lowSurrogate +
    ']|[' +
    highSurrogate +
    '](?![' +
    lowSurrogate +
    '])|(?:[^' +
    highSurrogate +
    ']|^)[' +
    lowSurrogate +
    '])([' +
    diacriticalMark +
    ']+)',
    'g'
)

/**
 * Regular expression to match surrogate pairs
 */
export const REGEXP_SURROGATE_PAIRS = new RegExp('([' + highSurrogate + '])([' + lowSurrogate + '])', 'g')

/**
 * Regular expression to match a unicode character
 */
export const REGEXP_UNICODE_CHARACTER = new RegExp(
    '((?:[' +
    base +
    ']|[' +
    highSurrogate +
    '][' +
    lowSurrogate +
    ']|[' +
    highSurrogate +
    '](?![' +
    lowSurrogate +
    '])|(?:[^' +
    highSurrogate +
    ']|^)[' +
    lowSurrogate +
    '])(?:[' +
    diacriticalMark +
    ']+))|\
([' +
    highSurrogate +
    '][' +
    lowSurrogate +
    '])|\
([\\n\\r\\u2028\\u2029])|\
(.)',
    'g'
)

/**
 * Regular expression to match whitespaces
 */
export const REGEXP_WHITESPACE = new RegExp('[' + whitespace + ']')

/**
 * Regular expression to match whitespaces from the left side
 */
export const REGEXP_TRIM_LEFT = new RegExp('^[' + whitespace + ']+')

/**
 * Regular expression to match whitespaces from the right side
 */
export const REGEXP_TRIM_RIGHT = new RegExp('[' + whitespace + ']+$')

/**
 * Regular expression to match digit characters
 */
export const REGEXP_DIGIT = new RegExp('^' + digit + '+$')

/**
 * Regular expression to match regular expression special characters
 */
export const REGEXP_SPECIAL_CHARACTERS = /[-[\]{}()*+!<=:?./\\^$|#,]/g

/**
 * Regular expression to match not latin characters
 */
export const REGEXP_NON_LATIN = /[^A-Za-z0-9]/g

/**
 * Regular expression to match HTML special characters.
 */
export const REGEXP_HTML_SPECIAL_CHARACTERS = /[<>&"'`]/g

/**
 * Regular expression to match sprintf format string
 */
export const REGEXP_CONVERSION_SPECIFICATION = /(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g

/**
 * Regular expression to match trailing zeros in a number
 */
export const REGEXP_TRAILING_ZEROS = /\.?0+$/g

/**
 * Regular expression to match flags from a regular expression.
 */
export const REGEXP_FLAGS = /[gimuy]*$/

/**
 * Regular expression to match a list of tags.
 */
export const REGEXP_TAG_LIST = /<([A-Za-z0-9]+)>/g
export const REGEXP_TAGS = /(<([^>]+)>)/ig

/**
 * Regular expression to match Unicode words
 */
export const REGEXP_WORD = new RegExp(
    '(?:[' +
    upperCaseLetter +
    '][' +
    diacriticalMark +
    ']*)?(?:[' +
    lowerCaseLetter +
    '][' +
    diacriticalMark +
    ']*)+|\
(?:[' +
    upperCaseLetter +
    '][' +
    diacriticalMark +
    ']*)+(?![' +
    lowerCaseLetter +
    '])|\
[' +
    digit +
    ']+|\
[' +
    dingbatBlock +
    ']|\
[^' +
    nonCharacter +
    generalPunctuationBlock +
    whitespace +
    ']+',
    'g'
)

/**
 * Regular expression to match words from Basic Latin and Latin-1 Supplement blocks
 */
export const REGEXP_LATIN_WORD = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g

/**
 * Regular expression to match alpha characters
 */
export const REGEXP_ALPHA = new RegExp('^(?:[' + lowerCaseLetter + upperCaseLetter + '][' + diacriticalMark + ']*)+$')

/**
 * Regular expression to match alpha and digit characters
 */
export const REGEXP_ALPHA_DIGIT = new RegExp(
    '^((?:[' + lowerCaseLetter + upperCaseLetter + '][' + diacriticalMark + ']*)|[' + digit + '])+$'
)

/**
 * Regular expression to match Extended ASCII characters, i.e. the first 255
 */
export const REGEXP_EXTENDED_ASCII = /^[\x01-\xFF]*$/