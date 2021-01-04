/*! 
 * Cake string library 1.0.0
 * https://github.com/olton/cake
 *
 * Copyright 2020-2021 Serhii Pimenov
 * Released under the MIT license
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.cake = {}));
}(this, (function (exports) { 'use strict';

    var isNull = function isNull(val) {
      return val === undefined || val === null;
    };

    /**
     * A regular expression string matching digits
     */
    var digit = '\\d';
    /**
     * A regular expression string matching whitespace
     */

    var whitespace = "\\s\\uFEFF\\xA0";
    /**
     * A regular expression string matching diacritical mark
     */

    var diacriticalMark = "\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F";
    /**
     * A regular expression to match the General Punctuation Unicode block
     */

    var generalPunctuationBlock = "\\u2000-\\u206F";
    /**
     * A regular expression to match non characters from from Basic Latin and Latin-1 Supplement Unicode blocks
     */

    var nonCharacter = '\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7';
    /**
     * A regular expression to match the dingbat Unicode block
     */

    var dingbatBlock = "\\u2700-\\u27BF";
    /**
     * A regular expression string that matches lower case letters: LATIN
     */

    var lowerCaseLetter = "a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F";
    /**
     * A regular expression string that matches upper case letters: LATIN
     */

    var upperCaseLetter = "\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e";

    /**
     * Regular expression to match whitespaces from the left side
     */

    var REGEXP_TRIM_LEFT = new RegExp('^[' + whitespace + ']+');
    /**
     * Regular expression to match whitespaces from the right side
     */

    var REGEXP_TRIM_RIGHT = new RegExp('[' + whitespace + ']+$');
    /**
     * Regular expression to match digit characters
     */

    var REGEXP_DIGIT = new RegExp('^' + digit + '+$');
    /**
     * Regular expression to match HTML special characters.
     */

    var REGEXP_HTML_SPECIAL_CHARACTERS = /[<>&"'`]/g;
    var REGEXP_TAGS = /(<([^>]+)>)/ig;
    /**
     * Regular expression to match Unicode words
     */

    var REGEXP_WORD = new RegExp('(?:[' + upperCaseLetter + '][' + diacriticalMark + ']*)?(?:[' + lowerCaseLetter + '][' + diacriticalMark + ']*)+|\
(?:[' + upperCaseLetter + '][' + diacriticalMark + ']*)+(?![' + lowerCaseLetter + '])|\
[' + digit + ']+|\
[' + dingbatBlock + ']|\
[^' + nonCharacter + generalPunctuationBlock + whitespace + ']+', 'g');
    /**
     * Regular expression to match words from Basic Latin and Latin-1 Supplement blocks
     */

    var REGEXP_LATIN_WORD = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
    /**
     * Regular expression to match alpha characters
     */

    var REGEXP_ALPHA = new RegExp('^(?:[' + lowerCaseLetter + upperCaseLetter + '][' + diacriticalMark + ']*)+$');
    /**
     * Regular expression to match alpha and digit characters
     */

    var REGEXP_ALPHA_DIGIT = new RegExp('^((?:[' + lowerCaseLetter + upperCaseLetter + '][' + diacriticalMark + ']*)|[' + digit + '])+$');
    /**
     * Regular expression to match Extended ASCII characters, i.e. the first 255
     */

    var REGEXP_EXTENDED_ASCII = /^[\x01-\xFF]*$/;

    function nvl(val, def) {
      return isNull(val) ? def : val;
    }

    function toStr(val) {
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (isNull(val)) return def;
      if (typeof val === "string") return val;
      if (Array.isArray(val)) return val.join("");
      return JSON.stringify(val);
    }

    /*
    * Split string to words. You can set specified patter to split
    * */

    function words(s, pattern, flags) {
      var regexp;

      if (isNull(pattern)) {
        regexp = REGEXP_EXTENDED_ASCII.test(s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
      } else if (pattern instanceof RegExp) {
        regexp = pattern;
      } else {
        regexp = new RegExp(pattern, nvl(flags, ''));
      }

      return nvl(toStr(s).match(regexp), []);
    }

    function capitalize(s) {
      var _s = toStr(s);

      return _s.substr(0, 1).toUpperCase() + _s.substr(1).toLowerCase();
    }

    function camelCase(s) {
      return words(toStr(s)).map(function (el, i) {
        return i === 0 ? el.toLowerCase() : capitalize(el);
      }).join("");
    }

    function dashedName(s) {
      return words(toStr(s)).map(function (el) {
        return el.toLowerCase();
      }).join("-");
    }

    function decapitalize(s) {
      var _s = toStr(s);

      return _s.substr(0, 1).toLowerCase() + _s.substr(1);
    }

    function kebab(s) {
      return words(toStr(s)).map(function (el) {
        return el.toLowerCase();
      }).join("-");
    }

    function lower(s) {
      return toStr(s).toLowerCase();
    }

    /*
    * Split string to chars array with ignores
    * */

    function chars(s) {
      var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return toStr(s).split("").filter(function (el) {
        return !ignore.includes(el);
      });
    }

    function reverse(s, ignore) {
      return chars(toStr(s), ignore).reverse().join("");
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function shuffleArray (a) {
      var _a = _toConsumableArray(a);

      var i = _a.length,
          t,
          r;

      while (0 !== i) {
        r = Math.floor(Math.random() * i);
        i -= 1;
        t = _a[i];
        _a[i] = _a[r];
        _a[r] = t;
      }

      return _a;
    }

    function shuffle(s) {
      var _s = toStr(s);

      return shuffleArray(_s.split("")).join("");
    }

    function snake(s) {
      return words(toStr(s)).map(function (el) {
        return el.toLowerCase();
      }).join("_");
    }

    var _swap = function _swap(swapped, _char) {
      var lc = _char.toLowerCase();

      var uc = _char.toUpperCase();

      return swapped + (_char === lc ? uc : lc);
    };

    function swap(s) {
      return toStr(s).split("").reduce(_swap, '');
    }

    function title(s, noSplit) {
      var _s = toStr(s);

      var regexp = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
      var noSplitArray = Array.isArray(noSplit) ? noSplit : isNull(noSplit) ? [] : noSplit.split();
      return s.replace(regexp, function (w, i) {
        var isNoSplit = i && noSplitArray.includes(_s[i - 1]);
        return isNoSplit ? lower(w) : capitalize(w);
      });
    }

    function upper(s) {
      return toStr(s).toUpperCase();
    }

    function wrapTag(s) {
      var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
      return "<".concat(tag, ">").concat(toStr(s), "</").concat(tag, ">");
    }

    function wrap(s) {
      var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      return before + toStr(s) + after;
    }

    /*
    * Get string length
    * */

    function count(s) {
      return toStr(s).length;
    }

    function un (a) {
      var _a = _toConsumableArray(a);

      for (var i = 0; i < _a.length; ++i) {
        for (var j = i + 1; j < _a.length; ++j) {
          if (_a[i] === _a[j]) _a.splice(j--, 1);
        }
      }

      return _a;
    }

    function countChars(s, ignore) {
      return chars(s, ignore).length;
    }
    function countUniqueChars(s, ignore) {
      return un(chars(s, ignore)).length;
    }

    function countSubstr(s, sub) {
      var _s = toStr(s);

      var _sub = toStr(sub);

      return _s === '' || _sub === '' ? 0 : _s.split(_sub).length - 1;
    }

    function countWords(s, pattern, flags) {
      return words(s, pattern, flags).length;
    }
    function countUniqueWords(s, pattern, flags) {
      return un(words(s, pattern, flags)).length;
    }

    var escapeCharactersMap = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    };

    function replaceSpecialCharacter(character) {
      return escapeCharactersMap[character];
    }

    function escapeHtml(s) {
      return toStr(s).replace(REGEXP_HTML_SPECIAL_CHARACTERS, replaceSpecialCharacter);
    }

    var unescapeCharsMap = {
      '<': /(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,
      '>': /(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,
      '&': /(&amp;)|(&#x0*26;)|(&#0*38;)/gi,
      '"': /(&quot;)|(&#x0*22;)|(&#0*34;)/gi,
      "'": /(&#x0*27;)|(&#0*39;)/gi,
      '`': /(&#x0*60;)|(&#0*96;)/gi
    };
    var chars$1 = Object.keys(unescapeCharsMap);

    function reduceUnescapedString(string, key) {
      return string.replace(unescapeCharsMap[key], key);
    }

    function unescapeHtml(s) {
      return chars$1.reduce(reduceUnescapedString, toStr(s));
    }

    function unique(s, ignore) {
      return un(chars(s, ignore)).join("");
    }

    /*
    * Get substring from string.
    * */

    function substr(s, start, len) {
      var _s = toStr(s);

      return _s.substr(start, len);
    }

    /*
    * Get N first chars from string.
    * */

    function first(s, len) {
      var _s = toStr(s);

      return _s ? substr(_s, 0, len) : '';
    }

    /*
    * Get N last chars from string.
    * */

    function last(s, len) {
      var _s = toStr(s);

      return _s ? substr(_s, _s.length - len) : '';
    }

    var MAX_SAFE_INTEGER = 0x1fffffffffffff;

    function clip(val, min) {
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MAX_SAFE_INTEGER;
      if (val < min) return min;
      if (val > max) return max;
      return val;
    }

    function toInt(val) {
      if (val === Infinity) return MAX_SAFE_INTEGER;
      if (val === -Infinity) return -MAX_SAFE_INTEGER;
      return ~~val;
    }

    /*
    * Truncates `subject` to a new `length` with specified ending.
    * */

    function truncate(s, len) {
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

      var _s = toStr(s);

      var _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);

      return substr(_s, 0, _len) + (_s.length === _len ? '' : end);
    }

    /*
    * Slice string to N parts.
    * */

    function slice(s) {
      var parts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var _s = toStr(s);

      var res = [];
      var len = Math.round(_s.length / parts);

      for (var i = 0; i < parts; i++) {
        res.push(substr(_s, i * len, len));
      }

      return res;
    }

    /*
    * Truncates `subject` to a new `length` and does not break the words with specified ending.
    * */

    function prune(s, len) {
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      var _s = toStr(s);

      var _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);

      var _truncatedLen = 0;
      var pattern = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;

      _s.replace(pattern, function (word, offset) {
        var wordLength = offset + word.length;

        if (wordLength <= _len - end.length) {
          _truncatedLen = wordLength;
        }
      });

      return _s.substr(0, _truncatedLen) + end;
    }

    function repeat(s, times) {
      var _s = toStr(s);

      var _times = isNull(times) || isNaN(times) ? _s.length : clip(toInt(times), 0, MAX_SAFE_INTEGER);

      var _origin = _s;

      if (times === 0) {
        return "";
      }

      for (var i = 0; i < _times - 1; i++) {
        _s += _origin;
      }

      return _s;
    }

    function padBuilder(pad, len) {
      var padLength = pad.length;
      var length = len - padLength;
      return repeat(pad, length + 1).substr(0, len);
    }

    function pad(s, len) {
      var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

      var _s = toStr(s);

      var _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);

      var _padLen = pad.length;

      var _paddingLen = _len - _s.length;

      var _sideLen = toInt(_paddingLen / 2); //?


      var _remainingLen = _paddingLen % 2; //?


      if (_paddingLen <= 0 || _padLen === 0) {
        return _s;
      }

      return padBuilder(pad, _sideLen) + _s + padBuilder(pad, _sideLen + _remainingLen); //?
    }
    function lpad(s, len) {
      var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

      var _s = toStr(s);

      var _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);

      var _padLen = pad.length;

      var _paddingLen = _len - _s.length;

      var _sideLen = _paddingLen;

      if (_paddingLen <= 0 || _padLen === 0) {
        return _s;
      }

      return padBuilder(pad, _sideLen) + _s;
    }
    function rpad(s, len) {
      var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

      var _s = toStr(s);

      var _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);

      var _padLen = pad.length;

      var _paddingLen = _len - _s.length;

      var _sideLen = _paddingLen;

      if (_paddingLen <= 0 || _padLen === 0) {
        return _s;
      }

      return _s + padBuilder(pad, _sideLen);
    }

    function insert(s) {
      var sbj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var _s = toStr(s);

      return _s.substr(0, pos) + sbj + _s.substr(pos);
    }

    function includes(s, search) {
      return countSubstr(s, search) > 0;
    }

    var reduce = Array.prototype.reduce;
    var reduceRight = Array.prototype.reduceRight;
    function trim(s, ws) {
      return ltrim(rtrim(s, ws), ws);
    }
    function ltrim(s, ws) {
      var _s = toStr(s);

      if (isNull(ws)) {
        return _s.replace(REGEXP_TRIM_LEFT, '');
      }

      if (ws === '' || _s === '') {
        return _s;
      }

      if (typeof ws !== "string") {
        ws = '';
      }

      var match = true;
      return reduce.call(_s, function (trimmed, _char) {
        if (match && includes(ws, _char)) {
          return trimmed;
        }

        match = false;
        return trimmed + _char;
      }, '');
    }
    function rtrim(s, ws) {
      var _s = toStr(s);

      if (isNull(ws)) {
        return _s.replace(REGEXP_TRIM_RIGHT, '');
      }

      if (ws === '' || _s === '') {
        return _s;
      }

      if (typeof ws !== "string") {
        ws = '';
      }

      var match = true;
      return reduceRight.call(_s, function (trimmed, _char2) {
        if (match && includes(ws, _char2)) {
          return trimmed;
        }

        match = false;
        return _char2 + trimmed;
      }, '');
    }

    function endsWith(s, end, pos) {
      var _s = toStr(s);

      return _s.endsWith(end, pos);
    }

    function isAlpha(s) {
      return REGEXP_ALPHA.test(toStr(s));
    }

    function isAlphaDigit(s) {
      return REGEXP_ALPHA_DIGIT.test(toStr(s));
    }

    function isAlphaDigit$1(s) {
      return REGEXP_DIGIT.test(toStr(s));
    }

    function isBlank(s) {
      return trim(s).length === 0;
    }

    function isEmpty(s) {
      return toStr(s).length === 0;
    }

    function isLower(s) {
      var _s = toStr(s);

      return _s.toLowerCase() === _s;
    }

    function isUpper(s) {
      var _s = toStr(s);

      return _s.toUpperCase() === _s;
    }

    function startWith(s, start, pos) {
      var _s = toStr(s);

      return _s.startsWith(start, pos);
    }

    function stripTagsAll(s) {
      var _s = toStr(s);

      return _s.replace(REGEXP_TAGS, '');
    }
    function stripTags(s) {
      var allowed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _s = toStr(s);

      var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
      return _s.replace(tags, function ($0, $1) {

        return allowed.includes($1) ? $0 : '';
      });
    }

    var functions = {
      camelCase: camelCase,
      capitalize: capitalize,
      chars: chars,
      count: count,
      countChars: countChars,
      countUniqueChars: countUniqueChars,
      countSubstr: countSubstr,
      countWords: countWords,
      countUniqueWords: countUniqueWords,
      dashedName: dashedName,
      decapitalize: decapitalize,
      kebab: kebab,
      lower: lower,
      reverse: reverse,
      shuffle: shuffle,
      snake: snake,
      swap: swap,
      title: title,
      upper: upper,
      words: words,
      wrap: wrap,
      wrapTag: wrapTag,
      escapeHtml: escapeHtml,
      unescapeHtml: unescapeHtml,
      unique: unique,
      substr: substr,
      first: first,
      last: last,
      truncate: truncate,
      slice: slice,
      prune: prune,
      repeat: repeat,
      pad: pad,
      lpad: lpad,
      rpad: rpad,
      insert: insert,
      includes: includes,
      trim: trim,
      ltrim: ltrim,
      rtrim: rtrim,
      endsWith: endsWith,
      isAlpha: isAlpha,
      isAlphaDigit: isAlphaDigit,
      isDigit: isAlphaDigit$1,
      isBlank: isBlank,
      isEmpty: isEmpty,
      isLower: isLower,
      isUpper: isUpper,
      startWith: startWith,
      stripTags: stripTags,
      stripTagsAll: stripTagsAll
    };

    var _Symbol$toPrimitive, _Symbol$toStringTag;
    _Symbol$toPrimitive = Symbol.toPrimitive;
    _Symbol$toStringTag = Symbol.toStringTag;

    var Cake = /*#__PURE__*/function () {
      function Cake() {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, Cake);

        _defineProperty(this, "_value", void 0);

        this._value = "" + s;
      }

      _createClass(Cake, [{
        key: _Symbol$toPrimitive,
        value: function value(hint) {
          if (hint === "number") {
            return +this.value;
          }

          return this.value;
        }
      }, {
        key: "toString",
        value: function toString() {
          return this.value;
        }
        /* escape */

      }, {
        key: "escapeHtml",
        value: function escapeHtml() {
          this.value = functions.escapeHtml(this.value);
          return this;
        }
      }, {
        key: "unescapeHtml",
        value: function unescapeHtml() {
          this.value = functions.unescapeHtml(this.value);
          return this;
        }
        /* end of escape */

      }, {
        key: "camelCase",
        value: function camelCase() {
          this.value = functions.camelCase(this.value);
          return this;
        }
      }, {
        key: "capitalize",
        value: function capitalize() {
          this.value = functions.capitalize(this.value);
          return this;
        }
      }, {
        key: "chars",
        value: function chars() {
          return functions.chars(this.value);
        }
      }, {
        key: "count",
        value: function count() {
          return functions.count(this.value);
        }
      }, {
        key: "countChars",
        value: function countChars(ignore) {
          return functions.countChars(this.value, ignore);
        }
      }, {
        key: "countUniqueChars",
        value: function countUniqueChars(ignore) {
          return functions.countUniqueChars(this.value, ignore);
        }
      }, {
        key: "countSubstr",
        value: function countSubstr(sub) {
          return functions.countSubstr(this.value, sub);
        }
      }, {
        key: "countWords",
        value: function countWords(pattern, flags) {
          return functions.countWords(this.value, pattern, flags);
        }
      }, {
        key: "countUniqueWords",
        value: function countUniqueWords(pattern, flags) {
          return functions.countUniqueWords(this.value, pattern, flags);
        }
      }, {
        key: "dashedName",
        value: function dashedName() {
          this.value = functions.dashedName(this.value);
          return this;
        }
      }, {
        key: "decapitalize",
        value: function decapitalize() {
          this.value = functions.decapitalize(this.value);
          return this;
        }
      }, {
        key: "kebab",
        value: function kebab() {
          this.value = functions.kebab(this.value);
          return this;
        }
      }, {
        key: "lower",
        value: function lower() {
          this.value = functions.lower(this.value);
          return this;
        }
      }, {
        key: "reverse",
        value: function reverse() {
          this.value = functions.reverse(this.value);
          return this;
        }
      }, {
        key: "shuffle",
        value: function shuffle() {
          this.value = functions.shuffle(this.value);
          return this;
        }
      }, {
        key: "snake",
        value: function snake() {
          this.value = functions.snake(this.value);
          return this;
        }
      }, {
        key: "swap",
        value: function swap() {
          this.value = functions.swap(this.value);
          return this;
        }
      }, {
        key: "title",
        value: function title() {
          this.value = functions.title(this.value);
          return this;
        }
      }, {
        key: "upper",
        value: function upper() {
          this.value = functions.upper(this.value);
          return this;
        }
      }, {
        key: "words",
        value: function words(pattern, flags) {
          return functions.words(this.value, pattern, flags);
        }
      }, {
        key: "wrap",
        value: function wrap(a, b) {
          this.value = functions.wrap(this.value, a, b);
          return this;
        }
      }, {
        key: "wrapTag",
        value: function wrapTag(t) {
          this.value = functions.wrapTag(this.value, t);
          return this;
        }
      }, {
        key: "pad",
        value: function pad(len, _pad) {
          this.value = functions.pad(this.value, len, _pad);
          return this;
        }
      }, {
        key: "lpad",
        value: function lpad(len, pad) {
          this.value = functions.lpad(this.value, len, pad);
          return this;
        }
      }, {
        key: "rpad",
        value: function rpad(len, pad) {
          this.value = functions.rpad(this.value, len, pad);
          return this;
        }
      }, {
        key: "repeat",
        value: function repeat(times) {
          this.value = functions.repeat(this.value, times);
          return this;
        }
      }, {
        key: "prune",
        value: function prune(len, end) {
          this.value = functions.prune(this.value, len, end);
          return this;
        }
      }, {
        key: "slice",
        value: function slice(parts) {
          return functions.slice(this.value, parts);
        }
      }, {
        key: "truncate",
        value: function truncate(len, end) {
          this.value = functions.truncate(this.value, len, end);
          return this;
        }
      }, {
        key: "last",
        value: function last(len) {
          this.value = functions.last(this.value, len);
          return this;
        }
      }, {
        key: "first",
        value: function first(len) {
          this.value = functions.first(this.value, len);
          return this;
        }
      }, {
        key: "substr",
        value: function substr(start, len) {
          this.value = functions.substr(this.value, start, len);
          return this;
        }
      }, {
        key: "unique",
        value: function unique(ignore) {
          this.value = functions.unique(this.value, ignore);
          return this;
        }
      }, {
        key: "insert",
        value: function insert(sbj, pos) {
          this.value = functions.insert(this.value, sbj, pos);
          return this;
        }
      }, {
        key: "includes",
        value: function includes(sub) {
          return functions.includes(this.value, sub);
        }
      }, {
        key: "trim",
        value: function trim(ws) {
          this.value = functions.trim(this.value, ws);
          return this;
        }
      }, {
        key: "ltrim",
        value: function ltrim(ws) {
          this.value = functions.ltrim(this.value, ws);
          return this;
        }
      }, {
        key: "rtrim",
        value: function rtrim(ws) {
          this.value = functions.rtrim(this.value, ws);
          return this;
        }
      }, {
        key: "endsWith",
        value: function endsWith(end, pos) {
          return functions.endsWith(this.value, end, pos);
        }
      }, {
        key: "startWith",
        value: function startWith(start, pos) {
          return functions.startWith(this.value, start, pos);
        }
      }, {
        key: "isAlpha",
        value: function isAlpha() {
          return functions.isAlpha(this.value);
        }
      }, {
        key: "isAlphaDigit",
        value: function isAlphaDigit() {
          return functions.isAlphaDigit(this.value);
        }
      }, {
        key: "isDigit",
        value: function isDigit() {
          return functions.isDigit(this.value);
        }
      }, {
        key: "isBlank",
        value: function isBlank() {
          return functions.isBlank(this.value);
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return functions.isEmpty(this.value);
        }
      }, {
        key: "isLower",
        value: function isLower() {
          return functions.isLower(this.value);
        }
      }, {
        key: "isUpper",
        value: function isUpper() {
          return functions.isUpper(this.value);
        }
      }, {
        key: "stripTagsAll",
        value: function stripTagsAll() {
          this.value = functions.stripTagsAll(this.value);
          return this;
        }
      }, {
        key: "stripTags",
        value: function stripTags(allowed) {
          this.value = functions.stripTags(this.value, allowed);
          return this;
        }
      }, {
        key: _Symbol$toStringTag,
        get: function get() {
          return "Cake";
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(s) {
          this._value = s;
        }
      }, {
        key: "length",
        get: function get() {
          return this._value.length;
        }
      }]);

      return Cake;
    }();

    var cake = function cake(s) {
      return new Cake(s);
    };

    Object.assign(Cake, functions);

    exports.cake = cake;
    exports.default = Cake;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
