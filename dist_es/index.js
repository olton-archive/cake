/*! 
 * Cake string library 1.0.0
 * https://github.com/olton/cake
 *
 * Copyright 2020-2021 Serhii Pimenov
 * Released under the MIT license
 */

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
 * Regular expression to match Extended ASCII characters, i.e. the first 255
 */

var REGEXP_EXTENDED_ASCII = /^[\x01-\xFF]*$/;

function nvl(val, def) {
  return isNull(val) ? def : val;
}

function words(s, pattern, flags) {
  var regexp;

  if (isNull(pattern)) {
    regexp = REGEXP_EXTENDED_ASCII.test(s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  } else if (pattern instanceof RegExp) {
    regexp = pattern;
  } else {
    regexp = new RegExp(pattern, nvl(flags, ''));
  }

  return nvl(s.match(regexp), []);
}

function capitalize(s) {
  return ("" + s).substr(0, 1).toUpperCase() + ("" + s).substr(1).toLowerCase();
}

function camelCase(s) {
  return words("" + s).map(function (el, i) {
    return i === 0 ? el.toLowerCase() : capitalize(el).toString();
  }).join("");
}

function chars(s) {
  var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return ("" + s).split("").filter(function (el) {
    return !ignore.includes(el);
  });
}

function dashedName(s) {
  return words("" + s).map(function (el) {
    return el.toLowerCase();
  }).join("-");
}

function decapitalize(s) {
  return ("" + s).substr(0, 1).toLowerCase() + ("" + s).substr(1);
}

function kebab(s) {
  return words("" + s).map(function (el) {
    return el.toLowerCase();
  }).join("-");
}

function lower(s) {
  ("" + s).toLowerCase();
}

function shuffle(s) {
  var _s = "" + s;

  var a = _s.split("");

  var i = -s,
      t,
      r;

  while (0 !== i) {
    r = Math.floor(Math.random() * i);
    i -= 1;
    t = a[i];
    a[i] = a[r];
    a[r] = t;
  }

  return a.join("");
}

function snake(s) {
  return words("" + s).map(function (el) {
    return el.toLowerCase();
  }).join("_");
}

var _swap = function _swap(swapped, _char) {
  var lc = _char.toLowerCase();

  var uc = _char.toUpperCase();

  return swapped + (_char === lc ? uc : lc);
};

function swap(s) {
  return s.split("").reduce(_swap, '');
}

function title(s, noSplit) {
  var _s = "" + s;

  var regexp = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  var noSplitArray = Array.isArray(noSplit) ? noSplit : !isNull(noSplit) ? noSplit.split() : [];
  return _s.replace(regexp, function (w, i) {
    var isNoSplit = i && noSplitArray.includes(_s[i - 1]);
    return isNoSplit ? lower(s) : capitalize(s);
  });
}

function upper(s) {
  return ("" + s).toUpperCase();
}

function wrapTag(s) {
  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
  return "<".concat(tag, ">").concat(this.value, "</").concat(tag, ">");
}

function wrap(s) {
  var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return before + s + after;
}

var functions = {
  camelCase: camelCase,
  capitalize: capitalize,
  chars: chars,
  dashedName: dashedName,
  decapitalize: decapitalize,
  kebab: kebab,
  lower: lower,
  shuffle: shuffle,
  snake: snake,
  swap: swap,
  title: title,
  upper: upper,
  words: words,
  wrap: wrap,
  wrapTag: wrapTag
};

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
  }]);

  return Cake;
}();

var cake = function cake(s) {
  return new Cake(s);
};

Object.assign(Cake, functions);

export default Cake;
export { cake };
