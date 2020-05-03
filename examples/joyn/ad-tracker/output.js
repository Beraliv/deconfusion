
  (function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId]["exports"];
      }
      var module = (installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {},
      });
      modules[moduleId]["call"](
        module["exports"],
        module,
        module["exports"],
        __webpack_require__
      );
      module["l"] = true;
      return module["exports"];
    }
    __webpack_require__["m"] = modules;
    __webpack_require__["c"] = installedModules;
    __webpack_require__["d"] = function (exports, name, getter) {
      if (!__webpack_require__["o"](exports, name)) {
        Object["defineProperty"](exports, name, {
          configurable: false,
          enumerable: true,
          get: getter,
        });
      }
    };
    __webpack_require__["n"] = function (module) {
      var getter =
        module && module["__esModule"]
          ? function getDefault() {
              return module["default"];
            }
          : function getModuleExports() {
              return module;
            };
      __webpack_require__["d"](getter, "a", getter);
      return getter;
    };
    __webpack_require__["o"] = function (object, property) {
      return Object["prototype"]["hasOwnProperty"]["call"](object, property);
    };
    __webpack_require__["p"] = "";
    return __webpack_require__((__webpack_require__["s"] = 100));
  })([
    function (module, exports) {
      var core = (module["exports"] = {
        version: "2.6.11",
      });
      if (typeof __e == "number") __e = core;
    },
    function (module, exports) {
      var global = (module["exports"] =
        typeof window != "undefined" && window["Math"] == Math
          ? window
          : typeof self != "undefined" && self["Math"] == Math
          ? self
          : Function("return this")());
      if (typeof __g == "number") __g = global;
    },
    function (module, exports, __webpack_require__) {
      var store = __webpack_require__(48)("wks");
      var uid = __webpack_require__(31);
      var Symbol = __webpack_require__(1)["Symbol"];
      var USE_SYMBOL = typeof Symbol == "function";
      var $exports = (module["exports"] = function (name) {
        return (
          store[name] ||
          (store[name] =
            (USE_SYMBOL && Symbol[name]) ||
            (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
        );
      });
      $exports["store"] = store;
    },
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);
      var core = __webpack_require__(0);
      var ctx = __webpack_require__(20);
      var hide = __webpack_require__(7);
      var has = __webpack_require__(9);
      var PROTOTYPE = "prototype";
      var $export = function (type, name, source) {
        var IS_FORCED = type & $export["F"];
        var IS_GLOBAL = type & $export["G"];
        var IS_STATIC = type & $export["S"];
        var IS_PROTO = type & $export["P"];
        var IS_BIND = type & $export["B"];
        var IS_WRAP = type & $export["W"];
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports[PROTOTYPE];
        var target = IS_GLOBAL
          ? global
          : IS_STATIC
          ? global[name]
          : (global[name] || {})[PROTOTYPE];
        var key, own, out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          own = !IS_FORCED && target && target[key] !== undefined;
          if (own && has(exports, key)) continue;
          out = own ? target[key] : source[key];
          exports[key] =
            IS_GLOBAL && typeof target[key] != "function"
              ? source[key]
              : IS_BIND && own
              ? ctx(out, global)
              : IS_WRAP && target[key] == out
              ? (function (C) {
                  var F = function (a, b, c) {
                    if (this instanceof C) {
                      switch (arguments["length"]) {
                        case 0:
                          return new C();
                        case 1:
                          return new C(a);
                        case 2:
                          return new C(a, b);
                      }
                      return new C(a, b, c);
                    }
                    return C["apply"](this, arguments);
                  };
                  F[PROTOTYPE] = C[PROTOTYPE];
                  return F;
                })(out)
              : IS_PROTO && typeof out == "function"
              ? ctx(Function["call"], out)
              : out;
          if (IS_PROTO) {
            (exports["virtual"] || (exports["virtual"] = {}))[key] = out;
            if (type & $export["R"] && expProto && !expProto[key])
              hide(expProto, key, out);
          }
        }
      };
      $export["F"] = 1;
      $export["G"] = 2;
      $export["S"] = 4;
      $export["P"] = 8;
      $export["B"] = 16;
      $export["W"] = 32;
      $export["U"] = 64;
      $export["R"] = 128;
      module["exports"] = $export;
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(5);
      var IE8_DOM_DEFINE = __webpack_require__(68);
      var toPrimitive = __webpack_require__(44);
      var dP = Object["defineProperty"];
      exports["f"] = __webpack_require__(6)
        ? Object["defineProperty"]
        : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE)
              try {
                return dP(O, P, Attributes);
              } catch (e) {}
            if ("get" in Attributes || "set" in Attributes)
              throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes["value"];
            return O;
          };
    },
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(8);
      module["exports"] = function (it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it;
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = !__webpack_require__(21)(function () {
        return (
          Object["defineProperty"]({}, "a", {
            get: function () {
              return 7;
            },
          })["a"] != 7
        );
      });
    },
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(4);
      var createDesc = __webpack_require__(22);
      module["exports"] = __webpack_require__(6)
        ? function (object, key, value) {
            return dP["f"](object, key, createDesc(1, value));
          }
        : function (object, key, value) {
            object[key] = value;
            return object;
          };
    },
    function (module, exports) {
      module["exports"] = function (it) {
        return typeof it === "object"
          ? it !== null
          : typeof it === "function";
      };
    },
    function (module, exports) {
      var hasOwnProperty = {}["hasOwnProperty"];
      module["exports"] = function (it, key) {
        return hasOwnProperty["call"](it, key);
      };
    },
    function (module, exports, __webpack_require__) {
      var store = __webpack_require__(88)("wks");
      var uid = __webpack_require__(89);
      var Symbol = __webpack_require__(24)["Symbol"];
      var USE_SYMBOL = typeof Symbol == "function";
      var $exports = (module["exports"] = function (name) {
        return (
          store[name] ||
          (store[name] =
            (USE_SYMBOL && Symbol[name]) ||
            (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
        );
      });
      $exports["store"] = store;
    },
    function (module, exports) {
      module["exports"] = {};
    },
    function (module, exports, __webpack_require__) {
      var IObject = __webpack_require__(71);
      var defined = __webpack_require__(42);
      module["exports"] = function (it) {
        return IObject(defined(it));
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["__esModule"] = true;
      exports["default"] = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["__esModule"] = true;
      var _defineProperty = __webpack_require__(80);
      var _defineProperty2 = _interopRequireDefault(_defineProperty);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      exports["default"] = (function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props["length"]; i++) {
            var descriptor = props[i];
            descriptor["enumerable"] = descriptor["enumerable"] || false;
            descriptor["configurable"] = true;
            if ("value" in descriptor) descriptor["writable"] = true;
            (0, _defineProperty2["default"])(
              target,
              descriptor["key"],
              descriptor
            );
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor["prototype"], protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var _xmldom = __webpack_require__(156);
      var Util = {
        logging: false,
        hmsToSecondsOnly: function hmsToSecondsOnly(str) {
          var p = str["split"](":"),
            s = 0,
            m = 1;
          while (p["length"] > 0) {
            s += m * parseFloat(p["pop"](), 10);
            m *= 60;
          }
          return s;
        },
        dom2xmlString: function dom2xmlString(dom) {
          return this["_getXmlSerializer"]()["serializeToString"](dom);
        },
        xml2dom: function xml2dom(string) {
          return this["_getDomParser"]()["parseFromString"](string, "application/xml");
        },
        _getXmlSerializer: function _getXmlSerializer() {
          if (typeof XMLSerializer === "function") {
            Util["log"]("[AdTracker.Util] Using Browser XML serializer");
            return new XMLSerializer();
          } else {
            Util["log"]("[AdTracker.Util] Using XMLDOM XML Serializer");
            return new _xmldom["XMLSerializer"]();
          }
        },
        _getDomParser: function _getDomParser() {
          if (typeof DOMParser === "function") {
            Util["log"]("[AdTracker.Util] Using Browser DOMParser");
            return new DOMParser();
          } else {
            Util["log"]("[AdTracker.Util] Using XMLDOM DOMParser");
            return new _xmldom["DOMParser"]();
          }
        },
        log: function log(message, object) {
          if (this["logging"]) {
            if (object) console["log"](message, object);
            else console["log"](message);
          }
        },
      };
      exports["default"] = Util;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = __webpack_require__(101);
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["__esModule"] = true;
      var _promise = __webpack_require__(28);
      var _promise2 = _interopRequireDefault(_promise);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      exports["default"] = function (fn) {
        return function () {
          var gen = fn["apply"](this, arguments);
          return new _promise2["default"](function (resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info["value"];
              } catch (error) {
                reject(error);
                return;
              }
              if (info["done"]) {
                resolve(value);
              } else {
                return _promise2["default"]["resolve"](value)["then"](
                  function (value) {
                    step("next", value);
                  },
                  function (err) {
                    step("throw", err);
                  }
                );
              }
            }
            return step("next");
          });
        };
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var $at = __webpack_require__(104)(true);
      __webpack_require__(67)(
        String,
        "String",
        function (iterated) {
          this["_t"] = String(iterated);
          this["_i"] = 0;
        },
        function () {
          var O = this["_t"];
          var index = this["_i"];
          var point;
          if (index >= O["length"])
            return {
              value: undefined,
              done: true,
            };
          point = $at(O, index);
          this["_i"] += point["length"];
          return {
            value: point,
            done: false,
          };
        }
      );
    },
    function (module, exports) {
      module["exports"] = true;
    },
    function (module, exports, __webpack_require__) {
      var aFunction = __webpack_require__(29);
      module["exports"] = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn["call"](that, a);
            };
          case 2:
            return function (a, b) {
              return fn["call"](that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn["call"](that, a, b, c);
            };
        }
        return function () {
          return fn["apply"](that, arguments);
        };
      };
    },
    function (module, exports) {
      module["exports"] = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    },
    function (module, exports) {
      module["exports"] = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value,
        };
      };
    },
    function (module, exports) {
      var toString = {}["toString"];
      module["exports"] = function (it) {
        return toString["call"](it)["slice"](8, -1);
      };
    },
    function (module, exports) {
      var global = (module["exports"] =
        typeof window != "undefined" && window["Math"] == Math
          ? window
          : typeof self != "undefined" && self["Math"] == Math
          ? self
          : Function("return this")());
      if (typeof __g == "number") __g = global;
    },
    function (module, exports) {
      var core = (module["exports"] = {
        version: "2.6.11",
      });
      if (typeof __e == "number") __e = core;
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(36);
      var IE8_DOM_DEFINE = __webpack_require__(132);
      var toPrimitive = __webpack_require__(133);
      var dP = Object["defineProperty"];
      exports["f"] = __webpack_require__(27)
        ? Object["defineProperty"]
        : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE)
              try {
                return dP(O, P, Attributes);
              } catch (e) {}
            if ("get" in Attributes || "set" in Attributes)
              throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes["value"];
            return O;
          };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = !__webpack_require__(83)(function () {
        return (
          Object["defineProperty"]({}, "a", {
            get: function () {
              return 7;
            },
          })["a"] != 7
        );
      });
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(103),
        __esModule: true,
      };
    },
    function (module, exports) {
      module["exports"] = function (it) {
        if (typeof it != "function") throw TypeError(it + " is not a function!");
        return it;
      };
    },
    function (module, exports, __webpack_require__) {
      var $keys = __webpack_require__(70);
      var enumBugKeys = __webpack_require__(49);
      module["exports"] =
        Object["keys"] ||
        function keys(O) {
          return $keys(O, enumBugKeys);
        };
    },
    function (module, exports) {
      var id = 0;
      var px = Math["random"]();
      module["exports"] = function (key) {
        return "Symbol("["concat"](
          key === undefined ? "" : key,
          ")_",
          (++id + px)["toString"](36)
        );
      };
    },
    function (module, exports, __webpack_require__) {
      var def = __webpack_require__(4)["f"];
      var has = __webpack_require__(9);
      var TAG = __webpack_require__(2)("toStringTag");
      module["exports"] = function (it, tag, stat) {
        if (it && !has((it = stat ? it : it["prototype"]), TAG))
          def(it, TAG, {
            configurable: true,
            value: tag,
          });
      };
    },
    function (module, exports, __webpack_require__) {
      var defined = __webpack_require__(42);
      module["exports"] = function (it) {
        return Object(defined(it));
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(110);
      var global = __webpack_require__(1);
      var hide = __webpack_require__(7);
      var Iterators = __webpack_require__(11);
      var TO_STRING_TAG = __webpack_require__(2)("toStringTag");
      var DOMIterables = ("CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList," +
        "DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement," +
        "MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList," +
        "SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList," +
        "TextTrackList,TouchList")["split"](",");
      for (var i = 0; i < DOMIterables["length"]; i++) {
        var NAME = DOMIterables[i];
        var Collection = global[NAME];
        var proto = Collection && Collection["prototype"];
        if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = Iterators["Array"];
      }
    },
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(26);
      var createDesc = __webpack_require__(57);
      module["exports"] = __webpack_require__(27)
        ? function (object, key, value) {
            return dP["f"](object, key, createDesc(1, value));
          }
        : function (object, key, value) {
            object[key] = value;
            return object;
          };
    },
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(56);
      module["exports"] = function (it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it;
      };
    },
    function (module, exports) {
      var hasOwnProperty = {}["hasOwnProperty"];
      module["exports"] = function (it, key) {
        return hasOwnProperty["call"](it, key);
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var _events = __webpack_require__(161);
      var _events2 = _interopRequireDefault(_events);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      if (!window["VOD_EVENT_BUS"])
        window["VOD_EVENT_BUS"] = new _events2["default"]["EventEmitter"]();
      window["VOD_EVENT_BUS"]["setMaxListeners"](100);
      exports["default"] = window["VOD_EVENT_BUS"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _iterator = __webpack_require__(60);
      var _iterator2 = _interopRequireDefault(_iterator);
      var _symbol = __webpack_require__(62);
      var _symbol2 = _interopRequireDefault(_symbol);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      function _typeof(obj) {
        if (
          typeof _symbol2["default"] === "function" &&
          typeof _iterator2["default"] === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof _symbol2["default"] === "function" &&
              obj["constructor"] === _symbol2["default"] &&
              obj !== _symbol2["default"]["prototype"]
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }
      var root;
      if (typeof window !== "undefined") {
        root = window;
      } else if (typeof self === "undefined") {
        console["warn"]("Using browser-only version of superagent in non-browser environment");
        root = void 0;
      } else {
        root = self;
      }
      var Emitter = __webpack_require__(177);
      var safeStringify = __webpack_require__(178);
      var RequestBase = __webpack_require__(179);
      var isObject = __webpack_require__(98);
      var ResponseBase = __webpack_require__(180);
      var Agent = __webpack_require__(182);
      function noop() {}
      module["exports"] = function (method, url) {
        if (typeof url === "function") {
          return new exports["Request"]("GET", method)["end"](
            url
          );
        }
        if (arguments["length"] === 1) {
          return new exports["Request"]("GET", method);
        }
        return new exports["Request"](method, url);
      };
      exports = module["exports"];
      var request = exports;
      exports["Request"] = Request;
      request["getXHR"] = function () {
        if (
          root["XMLHttpRequest"] &&
          (!root["location"] ||
            root["location"]["protocol"] !== "file:" ||
            !root["ActiveXObject"])
        ) {
          return new XMLHttpRequest();
        }
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (_unused) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (_unused2) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (_unused3) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (_unused4) {}
        throw new Error("Browser-only version of superagent could not find XHR");
      };
      var trim = ""["trim"]
        ? function (s) {
            return s["trim"]();
          }
        : function (s) {
            return s["replace"](/(^\s*|\s*$)/g, "");
          };
      function serialize(obj) {
        if (!isObject(obj)) return obj;
        var pairs = [];
        for (var key in obj) {
          if (Object["prototype"]["hasOwnProperty"]["call"](obj, key))
            pushEncodedKeyValuePair(pairs, key, obj[key]);
        }
        return pairs["join"]("&");
      }
      function pushEncodedKeyValuePair(pairs, key, val) {
        if (val === undefined) return;
        if (val === null) {
          pairs["push"](encodeURI(key));
          return;
        }
        if (Array["isArray"](val)) {
          val["forEach"](function (v) {
            pushEncodedKeyValuePair(pairs, key, v);
          });
        } else if (isObject(val)) {
          for (var subkey in val) {
            if (Object["prototype"]["hasOwnProperty"]["call"](val, subkey))
              pushEncodedKeyValuePair(
                pairs,
                ""
                  ["concat"](key, "[")
                  ["concat"](subkey, "]"),
                val[subkey]
              );
          }
        } else {
          pairs["push"](
            encodeURI(key) + "=" + encodeURIComponent(val)
          );
        }
      }
      request["serializeObject"] = serialize;
      function parseString(str) {
        var obj = {};
        var pairs = str["split"]("&");
        var pair;
        var pos;
        for (var i = 0, len = pairs["length"]; i < len; ++i) {
          pair = pairs[i];
          pos = pair["indexOf"]("=");
          if (pos === -1) {
            obj[decodeURIComponent(pair)] = "";
          } else {
            obj[
              decodeURIComponent(pair["slice"](0, pos))
            ] = decodeURIComponent(pair["slice"](pos + 1));
          }
        }
        return obj;
      }
      request["parseString"] = parseString;
      request["types"] = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded",
      };
      request["serialize"] = {
        "application/x-www-form-urlencoded": serialize,
        "application/json": safeStringify,
      };
      request["parse"] = {
        "application/x-www-form-urlencoded": parseString,
        "application/json": JSON["parse"],
      };
      function parseHeader(str) {
        var lines = str["split"](/\r?\n/);
        var fields = {};
        var index;
        var line;
        var field;
        var val;
        for (var i = 0, len = lines["length"]; i < len; ++i) {
          line = lines[i];
          index = line["indexOf"](":");
          if (index === -1) {
            continue;
          }
          field = line["slice"](0, index)["toLowerCase"]();
          val = trim(line["slice"](index + 1));
          fields[field] = val;
        }
        return fields;
      }
      function isJSON(mime) {
        return /[/+]json($|[^-\w])/["test"](mime);
      }
      function Response(req) {
        this["req"] = req;
        this["xhr"] = this["req"]["xhr"];
        this["text"] =
          (this["req"]["method"] !== "HEAD" &&
            (this["xhr"]["responseType"] === "" ||
              this["xhr"]["responseType"] === "text")) ||
          typeof this["xhr"]["responseType"] === "undefined"
            ? this["xhr"]["responseText"]
            : null;
        this["statusText"] = this["req"]["xhr"]["statusText"];
        var status = this["xhr"]["status"];
        if (status === 1223) {
          status = 204;
        }
        this["_setStatusProperties"](status);
        this["headers"] = parseHeader(this["xhr"]["getAllResponseHeaders"]());
        this["header"] = this["headers"];
        this["header"]["content-type"] = this["xhr"]["getResponseHeader"](
          "content-type"
        );
        this["_setHeaderProperties"](this["header"]);
        if (this["text"] === null && req["_responseType"]) {
          this["body"] = this["xhr"]["response"];
        } else {
          this["body"] =
            this["req"]["method"] === "HEAD"
              ? null
              : this["_parseBody"](
                  this["text"]
                    ? this["text"]
                    : this["xhr"]["response"]
                );
        }
      }
      ResponseBase(Response["prototype"]);
      Response["prototype"]["_parseBody"] = function (str) {
        var parse = request["parse"][this["type"]];
        if (this["req"]["_parser"]) {
          return this["req"]["_parser"](this, str);
        }
        if (!parse && isJSON(this["type"])) {
          parse = request["parse"]["application/json"];
        }
        return parse && str && (str["length"] > 0 || str instanceof Object)
          ? parse(str)
          : null;
      };
      Response["prototype"]["toError"] = function () {
        var req = this["req"];
        var method = req["method"];
        var url = req["url"];
        var msg = "cannot "
          ["concat"](method, " ")
          ["concat"](url, " (")
          ["concat"](this["status"], ")");
        var err = new Error(msg);
        err["status"] = this["status"];
        err["method"] = method;
        err["url"] = url;
        return err;
      };
      request["Response"] = Response;
      function Request(method, url) {
        var self = this;
        this["_query"] = this["_query"] || [];
        this["method"] = method;
        this["url"] = url;
        this["header"] = {};
        this["_header"] = {};
        this["on"]("end", function () {
          var err = null;
          var res = null;
          try {
            res = new Response(self);
          } catch (err_) {
            err = new Error("Parser is unable to parse the response");
            err["parse"] = true;
            err["original"] = err_;
            if (self["xhr"]) {
              err["rawResponse"] =
                typeof self["xhr"]["responseType"] === "undefined"
                  ? self["xhr"]["responseText"]
                  : self["xhr"]["response"];
              err["status"] = self["xhr"]["status"]
                ? self["xhr"]["status"]
                : null;
              err["statusCode"] = err["status"];
            } else {
              err["rawResponse"] = null;
              err["status"] = null;
            }
            return self["callback"](err);
          }
          self["emit"]("response", res);
          var new_err;
          try {
            if (!self["_isResponseOK"](res)) {
              new_err = new Error(
                res["statusText"] || res["text"] || "Unsuccessful HTTP response"
              );
            }
          } catch (err_) {
            new_err = err_;
          }
          if (new_err) {
            new_err["original"] = err;
            new_err["response"] = res;
            new_err["status"] = res["status"];
            self["callback"](new_err, res);
          } else {
            self["callback"](null, res);
          }
        });
      }
      Emitter(Request["prototype"]);
      RequestBase(Request["prototype"]);
      Request["prototype"]["type"] = function (type) {
        this["set"]("Content-Type", request["types"][type] || type);
        return this;
      };
      Request["prototype"]["accept"] = function (type) {
        this["set"]("Accept", request["types"][type] || type);
        return this;
      };
      Request["prototype"]["auth"] = function (user, pass, options) {
        if (arguments["length"] === 1) pass = "";
        if (_typeof(pass) === "object" && pass !== null) {
          options = pass;
          pass = "";
        }
        if (!options) {
          options = {
            type: typeof btoa === "function" ? "basic" : "auto",
          };
        }
        var encoder = function encoder(string) {
          if (typeof btoa === "function") {
            return btoa(string);
          }
          throw new Error("Cannot use basic auth, btoa is not a function");
        };
        return this["_auth"](user, pass, options, encoder);
      };
      Request["prototype"]["query"] = function (val) {
        if (typeof val !== "string") val = serialize(val);
        if (val) this["_query"]["push"](val);
        return this;
      };
      Request["prototype"]["attach"] = function (field, file, options) {
        if (file) {
          if (this["_data"]) {
            throw new Error("superagent can't mix .send() and .attach()");
          }
          this["_getFormData"]()["append"](
            field,
            file,
            options || file["name"]
          );
        }
        return this;
      };
      Request["prototype"]["_getFormData"] = function () {
        if (!this["_formData"]) {
          this["_formData"] = new root["FormData"]();
        }
        return this["_formData"];
      };
      Request["prototype"]["callback"] = function (err, res) {
        if (this["_shouldRetry"](err, res)) {
          return this["_retry"]();
        }
        var fn = this["_callback"];
        this["clearTimeout"]();
        if (err) {
          if (this["_maxRetries"]) err["retries"] = this["_retries"] - 1;
          this["emit"]("error", err);
        }
        fn(err, res);
      };
      Request["prototype"]["crossDomainError"] = function () {
        var err = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        err["crossDomain"] = true;
        err["status"] = this["status"];
        err["method"] = this["method"];
        err["url"] = this["url"];
        this["callback"](err);
      };
      Request["prototype"]["agent"] = function () {
        console["warn"]("This is not supported in browser version of superagent");
        return this;
      };
      Request["prototype"]["ca"] = Request["prototype"]["agent"];
      Request["prototype"]["buffer"] = Request["prototype"]["ca"];
      Request["prototype"]["write"] = function () {
        throw new Error("Streaming is not supported in browser version of superagent");
      };
      Request["prototype"]["pipe"] = Request["prototype"]["write"];
      Request["prototype"]["_isHost"] = function (obj) {
        return (
          obj &&
          _typeof(obj) === "object" &&
          !Array["isArray"](obj) &&
          Object["prototype"]["toString"]["call"](obj) !== "[object Object]"
        );
      };
      Request["prototype"]["end"] = function (fn) {
        if (this["_endCalled"]) {
          console["warn"]("Warning: .end() was called twice. This is not supported in superagent");
        }
        this["_endCalled"] = true;
        this["_callback"] = fn || noop;
        this["_finalizeQueryString"]();
        this["_end"]();
      };
      Request["prototype"]["_setUploadTimeout"] = function () {
        var self = this;
        if (this["_uploadTimeout"] && !this["_uploadTimeoutTimer"]) {
          this["_uploadTimeoutTimer"] = setTimeout(function () {
            self["_timeoutError"]("Upload timeout of ", self["_uploadTimeout"], "ETIMEDOUT");
          }, this["_uploadTimeout"]);
        }
      };
      Request["prototype"]["_end"] = function () {
        if (this["_aborted"])
          return this["callback"](new Error("The request has been aborted even before .end() was called"));
        var self = this;
        this["xhr"] = request["getXHR"]();
        var xhr = this["xhr"];
        var data = this["_formData"] || this["_data"];
        this["_setTimeouts"]();
        xhr["onreadystatechange"] = function () {
          var readyState = xhr["readyState"];
          if (readyState >= 2 && self["_responseTimeoutTimer"]) {
            clearTimeout(self["_responseTimeoutTimer"]);
          }
          if (readyState !== 4) {
            return;
          }
          var status;
          try {
            status = xhr["status"];
          } catch (_unused5) {
            status = 0;
          }
          if (!status) {
            if (self["timedout"] || self["_aborted"]) return;
            return self["crossDomainError"]();
          }
          self["emit"]("end");
        };
        var handleProgress = function handleProgress(direction, e) {
          if (e["total"] > 0) {
            e["percent"] = (e["loaded"] / e["total"]) * 100;
            if (e["percent"] === 100) {
              clearTimeout(self["_uploadTimeoutTimer"]);
            }
          }
          e["direction"] = direction;
          self["emit"]("progress", e);
        };
        if (this["hasListeners"]("progress")) {
          try {
            xhr["addEventListener"](
              "progress",
              handleProgress["bind"](null, "download")
            );
            if (xhr["upload"]) {
              xhr["upload"]["addEventListener"](
                "progress",
                handleProgress["bind"](null, "upload")
              );
            }
          } catch (_unused6) {}
        }
        if (xhr["upload"]) {
          this["_setUploadTimeout"]();
        }
        try {
          if (this["username"] && this["password"]) {
            xhr["open"](
              this["method"],
              this["url"],
              true,
              this["username"],
              this["password"]
            );
          } else {
            xhr["open"](this["method"], this["url"], true);
          }
        } catch (err) {
          return this["callback"](err);
        }
        if (this["_withCredentials"]) xhr["withCredentials"] = true;
        if (
          !this["_formData"] &&
          this["method"] !== "GET" &&
          this["method"] !== "HEAD" &&
          typeof data !== "string" &&
          !this["_isHost"](data)
        ) {
          var contentType = this["_header"]["content-type"];
          var _serialize =
            this["_serializer"] ||
            request["serialize"][
              contentType
                ? contentType["split"](";")[0]
                : ""
            ];
          if (!_serialize && isJSON(contentType)) {
            _serialize = request["serialize"]["application/json"];
          }
          if (_serialize) data = _serialize(data);
        }
        for (var field in this["header"]) {
          if (this["header"][field] === null) continue;
          if (
            Object["prototype"]["hasOwnProperty"]["call"](
              this["header"],
              field
            )
          )
            xhr["setRequestHeader"](field, this["header"][field]);
        }
        if (this["_responseType"]) {
          xhr["responseType"] = this["_responseType"];
        }
        this["emit"]("request", this);
        xhr["send"](typeof data === "undefined" ? null : data);
      };
      request["agent"] = function () {
        return new Agent();
      };
      [
        "GET",
        "POST",
        "OPTIONS",
        "PATCH",
        "PUT",
        "DELETE",
      ]["forEach"](function (method) {
        Agent["prototype"][method["toLowerCase"]()] = function (url, fn) {
          var req = new request["Request"](method, url);
          this["_setDefaults"](req);
          if (fn) {
            req["end"](fn);
          }
          return req;
        };
      });
      Agent["prototype"]["del"] = Agent["prototype"]["delete"];
      request["get"] = function (url, data, fn) {
        var req = request("GET", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data) req["query"](data);
        if (fn) req["end"](fn);
        return req;
      };
      request["head"] = function (url, data, fn) {
        var req = request("HEAD", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data) req["query"](data);
        if (fn) req["end"](fn);
        return req;
      };
      request["options"] = function (url, data, fn) {
        var req = request("OPTIONS", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data) req["send"](data);
        if (fn) req["end"](fn);
        return req;
      };
      function del(url, data, fn) {
        var req = request("DELETE", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data) req["send"](data);
        if (fn) req["end"](fn);
        return req;
      }
      request["del"] = del;
      request["delete"] = del;
      request["patch"] = function (url, data, fn) {
        var req = request("PATCH", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data) req["send"](data);
        if (fn) req["end"](fn);
        return req;
      };
      request["post"] = function (url, data, fn) {
        var req = request("POST", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data) req["send"](data);
        if (fn) req["end"](fn);
        return req;
      };
      request["put"] = function (url, data, fn) {
        var req = request("PUT", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data) req["send"](data);
        if (fn) req["end"](fn);
        return req;
      };
    },
    function (module, exports) {
      exports["f"] = {}["propertyIsEnumerable"];
    },
    function (module, exports) {
      var ceil = Math["ceil"];
      var floor = Math["floor"];
      module["exports"] = function (it) {
        return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    },
    function (module, exports) {
      module["exports"] = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
    },
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(8);
      var document = __webpack_require__(1)["document"];
      var is = isObject(document) && isObject(document["createElement"]);
      module["exports"] = function (it) {
        return is ? document["createElement"](it) : {};
      };
    },
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(8);
      module["exports"] = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (
          S &&
          typeof (fn = it["toString"]) == "function" &&
          !isObject((val = fn["call"](it)))
        )
          return val;
        if (
          typeof (fn = it["valueOf"]) == "function" &&
          !isObject((val = fn["call"](it)))
        )
          return val;
        if (
          !S &&
          typeof (fn = it["toString"]) == "function" &&
          !isObject((val = fn["call"](it)))
        )
          return val;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(5);
      var dPs = __webpack_require__(106);
      var enumBugKeys = __webpack_require__(49);
      var IE_PROTO = __webpack_require__(47)("IE_PROTO");
      var Empty = function () {};
      var PROTOTYPE = "prototype";
      var createDict = function () {
        var iframe = __webpack_require__(43)("iframe");
        var i = enumBugKeys["length"];
        var lt = "<";
        var gt = ">";
        var iframeDocument;
        iframe["style"]["display"] = "none";
        __webpack_require__(72)["appendChild"](iframe);
        iframe["src"] = "javascript:";
        iframeDocument = iframe["contentWindow"]["document"];
        iframeDocument["open"]();
        iframeDocument["write"](
          lt + "script" + gt + "document.F=Object" + lt + "/script" + gt
        );
        iframeDocument["close"]();
        createDict = iframeDocument["F"];
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };
      module["exports"] =
        Object["create"] ||
        function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else result = createDict();
          return Properties === undefined ? result : dPs(result, Properties);
        };
    },
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(41);
      var min = Math["min"];
      module["exports"] = function (it) {
        return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
      };
    },
    function (module, exports, __webpack_require__) {
      var shared = __webpack_require__(48)("keys");
      var uid = __webpack_require__(31);
      module["exports"] = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };
    },
    function (module, exports, __webpack_require__) {
      var core = __webpack_require__(0);
      var global = __webpack_require__(1);
      var SHARED = "__core-js_shared__";
      var store = global[SHARED] || (global[SHARED] = {});
      (module["exports"] = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })("versions", [])["push"]({
        version: core["version"],
        mode: __webpack_require__(19) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (module, exports) {
      module["exports"] = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf"["split"](",");
    },
    function (module, exports, __webpack_require__) {
      var cof = __webpack_require__(23);
      var TAG = __webpack_require__(2)("toStringTag");
      var ARG =
        cof(
          (function () {
            return arguments;
          })()
        ) == "Arguments";
      var tryGet = function (it, key) {
        try {
          return it[key];
        } catch (e) {}
      };
      module["exports"] = function (it) {
        var O, T, B;
        return it === undefined
          ? "Undefined"
          : it === null
          ? "Null"
          : typeof (T = tryGet((O = Object(it)), TAG)) == "string"
          ? T
          : ARG
          ? cof(O)
          : (B = cof(O)) == "Object" &&
            typeof O["callee"] == "function"
          ? "Arguments"
          : B;
      };
    },
    function (module, exports, __webpack_require__) {
      var classof = __webpack_require__(50);
      var ITERATOR = __webpack_require__(2)("iterator");
      var Iterators = __webpack_require__(11);
      module["exports"] = __webpack_require__(0)["getIteratorMethod"] = function (
        it
      ) {
        if (it != undefined)
          return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var aFunction = __webpack_require__(29);
      function PromiseCapability(C) {
        var resolve, reject;
        this["promise"] = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined)
            throw TypeError("Bad Promise constructor");
          resolve = $$resolve;
          reject = $$reject;
        });
        this["resolve"] = aFunction(resolve);
        this["reject"] = aFunction(reject);
      }
      module["exports"]["f"] = function (C) {
        return new PromiseCapability(C);
      };
    },
    function (module, exports) {
      var ceil = Math["ceil"];
      var floor = Math["floor"];
      module["exports"] = function (it) {
        return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    },
    function (module, exports) {
      module["exports"] = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
    },
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(24);
      var core = __webpack_require__(25);
      var ctx = __webpack_require__(82);
      var hide = __webpack_require__(35);
      var has = __webpack_require__(37);
      var PROTOTYPE = "prototype";
      var $export = function (type, name, source) {
        var IS_FORCED = type & $export["F"];
        var IS_GLOBAL = type & $export["G"];
        var IS_STATIC = type & $export["S"];
        var IS_PROTO = type & $export["P"];
        var IS_BIND = type & $export["B"];
        var IS_WRAP = type & $export["W"];
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports[PROTOTYPE];
        var target = IS_GLOBAL
          ? global
          : IS_STATIC
          ? global[name]
          : (global[name] || {})[PROTOTYPE];
        var key, own, out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          own = !IS_FORCED && target && target[key] !== undefined;
          if (own && has(exports, key)) continue;
          out = own ? target[key] : source[key];
          exports[key] =
            IS_GLOBAL && typeof target[key] != "function"
              ? source[key]
              : IS_BIND && own
              ? ctx(out, global)
              : IS_WRAP && target[key] == out
              ? (function (C) {
                  var F = function (a, b, c) {
                    if (this instanceof C) {
                      switch (arguments["length"]) {
                        case 0:
                          return new C();
                        case 1:
                          return new C(a);
                        case 2:
                          return new C(a, b);
                      }
                      return new C(a, b, c);
                    }
                    return C["apply"](this, arguments);
                  };
                  F[PROTOTYPE] = C[PROTOTYPE];
                  return F;
                })(out)
              : IS_PROTO && typeof out == "function"
              ? ctx(Function["call"], out)
              : out;
          if (IS_PROTO) {
            (exports["virtual"] || (exports["virtual"] = {}))[key] = out;
            if (type & $export["R"] && expProto && !expProto[key])
              hide(expProto, key, out);
          }
        }
      };
      $export["F"] = 1;
      $export["G"] = 2;
      $export["S"] = 4;
      $export["P"] = 8;
      $export["B"] = 16;
      $export["W"] = 32;
      $export["U"] = 64;
      $export["R"] = 128;
      module["exports"] = $export;
    },
    function (module, exports) {
      module["exports"] = function (it) {
        return typeof it === "object"
          ? it !== null
          : typeof it === "function";
      };
    },
    function (module, exports) {
      module["exports"] = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value,
        };
      };
    },
    function (module, exports) {
      module["exports"] = {};
    },
    function (module, exports, __webpack_require__) {
      var shared = __webpack_require__(88)("keys");
      var uid = __webpack_require__(89);
      module["exports"] = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(167),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      exports["f"] = __webpack_require__(2);
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(168),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);
      var core = __webpack_require__(0);
      var LIBRARY = __webpack_require__(19);
      var wksExt = __webpack_require__(61);
      var defineProperty = __webpack_require__(4)["f"];
      module["exports"] = function (name) {
        var $Symbol =
          core["Symbol"] ||
          (core["Symbol"] = LIBRARY ? {} : global["Symbol"] || {});
        if (name["charAt"](0) != "_" && !(name in $Symbol))
          defineProperty($Symbol, name, {
            value: wksExt["f"](name),
          });
      };
    },
    function (module, exports) {
      exports["f"] = Object["getOwnPropertySymbols"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var _regenerator = __webpack_require__(16);
      var _regenerator2 = _interopRequireDefault(_regenerator);
      var _asyncToGenerator2 = __webpack_require__(17);
      var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
      var _classCallCheck2 = __webpack_require__(13);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(14);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _vmapJsNode = __webpack_require__(125);
      var _vmapJsNode2 = _interopRequireDefault(_vmapJsNode);
      var _vastClient = __webpack_require__(155);
      var _util = __webpack_require__(15);
      var _util2 = _interopRequireDefault(_util);
      var _eventbus = __webpack_require__(38);
      var _eventbus2 = _interopRequireDefault(_eventbus);
      var _timeline = __webpack_require__(162);
      var _timeline2 = _interopRequireDefault(_timeline);
      var _clientDataAugmenter = __webpack_require__(163);
      var _clientDataAugmenter2 = _interopRequireDefault(_clientDataAugmenter);
      var _superagent = __webpack_require__(39);
      var _superagent2 = _interopRequireDefault(_superagent);
      var _jsCookie = __webpack_require__(96);
      var _jsCookie2 = _interopRequireDefault(_jsCookie);
      var _omit = __webpack_require__(189);
      var _omit2 = _interopRequireDefault(_omit);
      var _adblockerDetector = __webpack_require__(193);
      var _adblockerDetector2 = _interopRequireDefault(_adblockerDetector);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      if (!window["Array"]["from"])
        Array["from"] = __webpack_require__(194);
      var AdTracker = (function () {
        function AdTracker(adSource) {
          var config =
            arguments["length"] > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var contentResource =
            arguments["length"] > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          (0, _classCallCheck3["default"])(this, AdTracker);
          this["_ads"] = [];
          this["_adBreaks"] = [];
          this["contentResource"] = contentResource;
          this["config"] = config;
          _util2["default"]["logging"] = config["logging"];
          this["AdCompletionTolerance"] = 1;
          this["playerEventEmitter"] = {};
          this["_detectAdSource"](adSource);
          this["_adblockDetector"] = new _adblockerDetector2["default"](
            this["config"]
          );
          this["clientEvents"] = [];
          this["_omitsHandlerForBreakWithoutAds"] = new _omit2["default"]();
        }
        (0, _createClass3["default"])(
          AdTracker,
          [
            {
              key: "dispose",
              value: function dispose() {
                _util2["default"]["log"]("[AdTracker]: DISPOSING EVENTS");
                this["clientEvents"]["forEach"](function (evt) {
                  _eventbus2["default"]["removeListener"](
                    evt["eventName"],
                    evt["clientEvent"]
                  );
                });
              },
            },
            {
              key: "_detectAdSource",
              value: function _detectAdSource(adSource) {
                if (!adSource) {
                  _util2["default"]["log"]("[AdTracker]: Empty Ad Source");
                } else if (
                  typeof adSource === "string" &&
                  adSource["indexOf"]("http") === 0
                ) {
                  _util2["default"]["log"]("[AdTracker]: Detected VAST Url");
                  this["vmapUrl"] = adSource;
                } else if (typeof adSource === "object") {
                  this["vastXml"] = adSource["vastXml"];
                  this["omits"] = adSource["omits"];
                } else {
                  _util2["default"]["log"]("[AdTracker]: Parsing VMAP");
                  var vmapXml = _util2["default"]["xml2dom"](adSource);
                  this["vmap"] = new _vmapJsNode2["default"](vmapXml);
                  this["vmap"]["adBreaks"]["sort"](function (
                    a,
                    b
                  ) {
                    return _util2["default"]["hmsToSecondsOnly"](a["timeOffset"]) >
                      _util2["default"]["hmsToSecondsOnly"](b["timeOffset"])
                      ? 1
                      : _util2["default"]["hmsToSecondsOnly"](b["timeOffset"]) >
                        _util2["default"]["hmsToSecondsOnly"](a["timeOffset"])
                      ? -1
                      : 0;
                  });
                }
              },
            },
            {
              key: "startAdTracking",
              value: (function () {
                var _ref = (0, _asyncToGenerator3["default"])(
                  _regenerator2["default"]["mark"](function _callee() {
                    return _regenerator2["default"]["wrap"](
                      function _callee$(_context) {
                        while (1) {
                          switch (
                            (_context["prev"] = _context["next"])
                          ) {
                            case 0:
                              if (!this["vmapUrl"]) {
                                _context["next"] = 4;
                                break;
                              }
                              _context["next"] = 3;
                              return this["_loadAndParseVMAP"](this["vmapUrl"]);
                            case 3:
                              this["vmap"] = _context["sent"];
                            case 4:
                              if (
                                !(
                                  this["vmap"] &&
                                  this["vmap"]["adBreaks"]
                                )
                              ) {
                                _context["next"] = 9;
                                break;
                              }
                              _context["next"] = 7;
                              return this["_trackAdsFromVmap"]();
                            case 7:
                              _context["next"] = 15;
                              break;
                            case 9:
                              if (!this["vastXml"]) {
                                _context["next"] = 14;
                                break;
                              }
                              _context["next"] = 12;
                              return this["_trackAdsFromVastXml"]();
                            case 12:
                              _context["next"] = 15;
                              break;
                            case 14:
                              _util2["default"]["log"]("[AdTracker]: Nothing to track");
                            case 15:
                              this["_bindClientEvents"]();
                              _eventbus2["default"]["emit"](
                                "adtrackerready"
                              );
                            case 17:
                            case "end":
                              return _context["stop"]();
                          }
                        }
                      },
                      _callee,
                      this
                    );
                  })
                );
                function startAdTracking() {
                  return _ref["apply"](this, arguments);
                }
                return startAdTracking;
              })(),
            },
            {
              key: "areTrackingUrlsReachable",
              value: (function () {
                var _ref2 = (0, _asyncToGenerator3["default"])(
                  _regenerator2["default"]["mark"](function _callee2() {
                    return _regenerator2["default"]["wrap"](
                      function _callee2$(_context2) {
                        while (1) {
                          switch (
                            (_context2["prev"] = _context2["next"])
                          ) {
                            case 0:
                              _context2["next"] = 2;
                              return this["_adblockDetector"]["areTrackingUrlsReachable"]();
                            case 2:
                              return _context2["abrupt"](
                                "return",
                                _context2["sent"]
                              );
                            case 3:
                            case "end":
                              return _context2["stop"]();
                          }
                        }
                      },
                      _callee2,
                      this
                    );
                  })
                );
                function areTrackingUrlsReachable() {
                  return _ref2["apply"](this, arguments);
                }
                return areTrackingUrlsReachable;
              })(),
            },
            {
              key: "trackAdOmitsNow",
              value: (function () {
                var _ref3 = (0, _asyncToGenerator3["default"])(
                  _regenerator2["default"]["mark"](function _callee3(
                    adOmitsJson,
                    adPodPosition
                  ) {
                    return _regenerator2["default"]["wrap"](
                      function _callee3$(_context3) {
                        while (1) {
                          switch (
                            (_context3["prev"] = _context3["next"])
                          ) {
                            case 0:
                              _context3["next"] = 2;
                              return this["_omitsHandlerForBreakWithoutAds"]["trackNow"](
                                adOmitsJson,
                                adPodPosition
                              );
                            case 2:
                            case "end":
                              return _context3["stop"]();
                          }
                        }
                      },
                      _callee3,
                      this
                    );
                  })
                );
                function trackAdOmitsNow(_x3, _x4) {
                  return _ref3["apply"](this, arguments);
                }
                return trackAdOmitsNow;
              })(),
            },
            {
              key: "_trackAdsFromVastXml",
              value: (function () {
                var _ref4 = (0, _asyncToGenerator3["default"])(
                  _regenerator2["default"]["mark"](function _callee4() {
                    var vastParser, xmlDoc, vast;
                    return _regenerator2["default"]["wrap"](
                      function _callee4$(_context4) {
                        while (1) {
                          switch (
                            (_context4["prev"] = _context4["next"])
                          ) {
                            case 0:
                              _context4["prev"] = 0;
                              _util2["default"]["log"]("[AdTracker]: Parsing XML document...");
                              vastParser = new _vastClient["VASTParser"]();
                              xmlDoc = _util2["default"]["xml2dom"](
                                this["vastXml"]
                              );
                              _context4["next"] = 6;
                              return vastParser["parseVAST"](xmlDoc);
                            case 6:
                              vast = _context4["sent"];
                              if (
                                this["omits"] &&
                                this["omits"]["length"]
                              ) {
                                _util2["default"]["log"]("[AdTracker]: Tracking omits from object...");
                                this["_trackOmitsFromObject"]();
                              }
                              if (!vast["ads"]["length"]) {
                                _context4["next"] = 14;
                                break;
                              }
                              _util2["default"]["log"](
                                "[AdTracker]: VAST has " +
                                  vast["ads"]["length"] +
                                  " ads"
                              );
                              _context4["next"] = 12;
                              return this["_trackAdBreaks"](vast, 0);
                            case 12:
                              _context4["next"] = 15;
                              break;
                            case 14:
                              _util2["default"]["log"]("[AdTracker]: Resolved VAST with no Ad breaks");
                            case 15:
                              _context4["next"] = 20;
                              break;
                            case 17:
                              _context4["prev"] = 17;
                              _context4["t0"] = _context4["catch"](
                                0
                              );
                              _util2["default"]["log"](
                                "[AdTracker]: Error while tracking ads from VAST : " + _context4["t0"]
                              );
                            case 20:
                            case "end":
                              return _context4["stop"]();
                          }
                        }
                      },
                      _callee4,
                      this,
                      [[0, 17]]
                    );
                  })
                );
                function _trackAdsFromVastXml() {
                  return _ref4["apply"](this, arguments);
                }
                return _trackAdsFromVastXml;
              })(),
            },
            {
              key: "_trackAdsFromVmap",
              value: (function () {
                var _ref5 = (0, _asyncToGenerator3["default"])(
                  _regenerator2["default"]["mark"](function _callee5() {
                    var timeOffset, j, adBreak, vast;
                    return _regenerator2["default"]["wrap"](
                      function _callee5$(_context5) {
                        while (1) {
                          switch (
                            (_context5["prev"] = _context5["next"])
                          ) {
                            case 0:
                              timeOffset = 0;
                              this["_trackOmits"](this["vmap"]);
                              _util2["default"]["log"](
                                "[AdTracker]: VMAP has " +
                                  this["vmap"]["adBreaks"][
                                    "length"
                                  ] +
                                  " ad breaks"
                              );
                              j = 0;
                            case 4:
                              if (
                                !(
                                  j <
                                  this["vmap"]["adBreaks"]["length"]
                                )
                              ) {
                                _context5["next"] = 19;
                                break;
                              }
                              adBreak = this["vmap"]["adBreaks"][j];
                              if (!(!adBreak || !adBreak["adSource"])) {
                                _context5["next"] = 8;
                                break;
                              }
                              return _context5["abrupt"]("return");
                            case 8:
                              timeOffset = 0;
                              timeOffset +=
                                _util2["default"]["hmsToSecondsOnly"](
                                  adBreak["timeOffset"]
                                ) || 0;
                              _context5["next"] = 12;
                              return this["_parseVAST"](adBreak);
                            case 12:
                              vast = _context5["sent"];
                              _context5["next"] = 15;
                              return this["_trackAdBreaks"](vast, timeOffset);
                            case 15:
                              _util2["default"]["log"](
                                "[AdTracker]: Break " +
                                  (j + 1) +
                                  " has " +
                                  vast["ads"]["length"] +
                                  " ads"
                              );
                            case 16:
                              j++;
                              _context5["next"] = 4;
                              break;
                            case 19:
                            case "end":
                              return _context5["stop"]();
                          }
                        }
                      },
                      _callee5,
                      this
                    );
                  })
                );
                function _trackAdsFromVmap() {
                  return _ref5["apply"](this, arguments);
                }
                return _trackAdsFromVmap;
              })(),
            },
            {
              key: "_trackOmits",
              value: function _trackOmits(ads) {
                new _omit2["default"](ads)["track"](this["AdCompletionTolerance"]);
              },
            },
            {
              key: "_trackOmitsFromObject",
              value: function _trackOmitsFromObject() {
                var omits = new _omit2["default"]();
                omits["setOmits"](this["omits"]);
                omits["track"](this["AdCompletionTolerance"]);
              },
            },
            {
              key: "getCurrentTimeWithoutAds",
              value: function getCurrentTimeWithoutAds() {
                return this["adTimeline"]["getCurrentTimeWithoutAds"]();
              },
            },
            {
              key: "getDurationWithoutAds",
              value: function getDurationWithoutAds(totalDuration) {
                return this["adTimeline"]["getDurationWithoutAds"](totalDuration);
              },
            },
            {
              key: "on",
              value: function on(eventName, callback) {
                _eventbus2["default"]["on"](eventName, callback);
              },
            },
            {
              key: "off",
              value: function off(eventName, callback) {
                _eventbus2["default"]["removeListener"](eventName, callback);
              },
            },
            {
              key: "updateCurrentTime",
              value: function updateCurrentTime(time) {
                _eventbus2["default"]["emit"]("timeupdate", {
                  currentTime: time,
                });
              },
            },
            {
              key: "track",
              value: function track(userEvent, data) {
                _util2["default"]["log"]("[AdTracker]: Tracking event " + userEvent);
                _eventbus2["default"]["emit"](userEvent, data);
              },
            },
            {
              key: "_parseVAST",
              value: (function () {
                var _ref6 = (0, _asyncToGenerator3["default"])(
                  _regenerator2["default"]["mark"](function _callee6(
                    adBreak
                  ) {
                    var vastParser, xmlString, xmlDocument;
                    return _regenerator2["default"]["wrap"](
                      function _callee6$(_context6) {
                        while (1) {
                          switch (
                            (_context6["prev"] = _context6["next"])
                          ) {
                            case 0:
                              vastParser = new _vastClient["VASTParser"]();
                              xmlString = adBreak["adSource"]["vastAdData"][
                                "outerHTML"
                              ]
                                ? adBreak["adSource"]["vastAdData"][
                                    "outerHTML"
                                  ]
                                : _util2["default"]["dom2xmlString"](
                                    adBreak["adSource"]["vastAdData"]
                                  );
                              xmlDocument = _util2["default"]["xml2dom"](
                                xmlString
                              );
                              _context6["next"] = 5;
                              return vastParser["parseVAST"](xmlDocument);
                            case 5:
                              return _context6["abrupt"](
                                "return",
                                _context6["sent"]
                              );
                            case 6:
                            case "end":
                              return _context6["stop"]();
                          }
                        }
                      },
                      _callee6,
                      this
                    );
                  })
                );
                function _parseVAST(_x5) {
                  return _ref6["apply"](this, arguments);
                }
                return _parseVAST;
              })(),
            },
            {
              key: "_loadAndParseVMAP",
              value: (function () {
                var _ref7 = (0, _asyncToGenerator3["default"])(
                  _regenerator2["default"]["mark"](function _callee7(
                    vastUrl
                  ) {
                    var resp, xmlDocument, vmap;
                    return _regenerator2["default"]["wrap"](
                      function _callee7$(_context7) {
                        while (1) {
                          switch (
                            (_context7["prev"] = _context7["next"])
                          ) {
                            case 0:
                              _util2["default"]["log"]("[AdTracker]: Fetching VAST XML...");
                              _context7["next"] = 3;
                              return _superagent2["default"]["get"](
                                vastUrl
                              );
                            case 3:
                              resp = _context7["sent"];
                              _util2["default"]["log"](
                                "[AdTracker]: VAST XML: " + resp["text"]
                              );
                              xmlDocument = _util2["default"]["xml2dom"](
                                resp["text"]
                              );
                              _util2["default"]["log"]("[AdTracker]: Parsing XML document...");
                              vmap = new _vmapJsNode2["default"](xmlDocument);
                              if (vmap["adBreaks"][0]) {
                                vmap["adBreaks"][0]["timeOffset"] =
                                  "00:00:00.000";
                              }
                              return _context7["abrupt"](
                                "return",
                                vmap
                              );
                            case 10:
                            case "end":
                              return _context7["stop"]();
                          }
                        }
                      },
                      _callee7,
                      this
                    );
                  })
                );
                function _loadAndParseVMAP(_x6) {
                  return _ref7["apply"](this, arguments);
                }
                return _loadAndParseVMAP;
              })(),
            },
            {
              key: "_trackAdBreaks",
              value: function _trackAdBreaks(vast, timeOffset) {
                var breakDuration = this["_getBreakDuration"](vast["ads"]);
                var breakInfo = {};
                breakInfo["start"] = timeOffset;
                breakInfo["viewed"] = false;
                var expectedPrerollOffset =
                  this["contentResource"]["clientData"] &&
                  this["contentResource"]["clientData"]["startTime"]
                    ? this["contentResource"]["clientData"]["startTime"]
                    : 0;
                var adType =
                  Math["abs"](timeOffset - expectedPrerollOffset) <= 3
                    ? "preroll"
                    : "midroll";
                vast["ads"]["forEach"](
                  function (ad, i) {
                    var adData = {
                      start: timeOffset,
                    };
                    adData["meta"] = {};
                    adData["meta"]["ad_sequence"] =
                      this["_ads"]["length"] + 1;
                    adData["meta"]["ad_asset_id"] = ad["id"];
                    adData["meta"]["ad_type"] = adType;
                    adData["meta"]["ad_pod_position"] = i + 1;
                    adData["meta"]["ad_duration"] =
                      ad["creatives"][0]["duration"];
                    adData["meta"]["ad_pod_size"] =
                      vast["ads"]["length"];
                    adData["meta"]["ad_clickthrough_url"] =
                      ad["creatives"][0]["videoClickThroughURLTemplate"] &&
                      ad["creatives"][0]["videoClickThroughURLTemplate"]["url"];
                    adData["meta"]["ad_pod_duration"] = breakDuration;
                    if (ad["adVerifications"]["length"]) {
                      adData["meta"]["ad_verifications"] = ad["adVerifications"][
                        "map"
                      ](function (_ref8) {
                        var vendor = _ref8["vendor"],
                          resource = _ref8["resource"],
                          parameters = _ref8["parameters"],
                          apiFramework = _ref8["apiFramework"];
                        return {
                          vendor: vendor,
                          resource: resource,
                          parameters: parameters,
                          apiFramework: apiFramework,
                        };
                      });
                    }
                    var vastTracker = new _vastClient["VASTTracker"](
                      null,
                      ad,
                      ad["creatives"][0]
                    );
                    adData["tracker"] = vastTracker;
                    adData["end"] =
                      adData["start"] + ad["creatives"][0]["duration"];
                    this["_ads"]["push"](adData);
                    timeOffset += adData["meta"]["ad_duration"];
                    this["_bindTrackerEvents"](
                      vastTracker,
                      adData["meta"],
                      breakInfo
                    );
                  }["bind"](this)
                );
                breakInfo["end"] =
                  breakInfo["start"] + breakDuration;
                this["_adBreaks"]["push"](breakInfo);
                _util2["default"]["log"](
                  "[AdTracker]: start: " +
                    breakInfo["start"] +
                    ", end: " +
                    breakInfo["end"]
                );
              },
            },
            {
              key: "_bindTrackerEvents",
              value: function _bindTrackerEvents(vastTracker, meta, breakInfo) {
                vastTracker["on"]("creativeView", function () {
                  _util2["default"]["log"](
                    "[AdTracker]: CREATIVE_VIEW [" +
                      meta["ad_pod_position"] +
                      "/" +
                      meta["ad_pod_size"] +
                      "] >>",
                    meta
                  );
                });
                vastTracker["on"]("start", function () {
                  _util2["default"]["log"](
                    "[AdTracker]: START [" +
                      meta["ad_pod_position"] +
                      "/" +
                      meta["ad_pod_size"] +
                      "] >>",
                    meta
                  );
                  vastTracker["trackImpression"]();
                  _eventbus2["default"]["emit"]("adstart", {
                    ad: meta,
                  });
                  vastTracker["on"]("clickthrough", function (url) {
                    _util2["default"]["log"]("[AdTracker]: CLICKTHROUGH tracked. URL: " + url);
                  });
                });
                vastTracker["on"](
                  "complete",
                  function () {
                    _util2["default"]["log"](
                      "[AdTracker]: COMPLETE  [" +
                        meta["ad_pod_position"] +
                        "/" +
                        meta["ad_pod_size"] +
                        "] <<"
                    );
                    _eventbus2["default"]["emit"]("adcomplete", {
                      ad: meta,
                    });
                    this["_processAdCooldown"](meta);
                    this["_updateAdBreakViewState"](meta, breakInfo);
                  }["bind"](this)
                );
                vastTracker["on"]("firstQuartile", function () {
                  _util2["default"]["log"](
                    "[AdTracker]: 1QUARTILE [" +
                      meta["ad_pod_position"] +
                      "/" +
                      meta["ad_pod_size"] +
                      "]"
                  );
                  _eventbus2["default"]["emit"]("adfirstquartile", {
                    ad: meta,
                  });
                });
                vastTracker["on"]("midpoint", function () {
                  _util2["default"]["log"](
                    "[AdTracker]: MIDPOINT  [" +
                      meta["ad_pod_position"] +
                      "/" +
                      meta["ad_pod_size"] +
                      "]"
                  );
                  _eventbus2["default"]["emit"]("admidpoint", {
                    ad: meta,
                  });
                });
                vastTracker["on"]("thirdQuartile", function () {
                  _util2["default"]["log"](
                    "[AdTracker]: 3QUARTILE [" +
                      meta["ad_pod_position"] +
                      "/" +
                      meta["ad_pod_size"] +
                      "]"
                  );
                  _eventbus2["default"]["emit"]("adthirdquartile", {
                    ad: meta,
                  });
                });
              },
            },
            {
              key: "_getBreakDuration",
              value: function _getBreakDuration(ads) {
                var duration = 0;
                ads["forEach"](function (ad) {
                  duration += ad["creatives"][0]["duration"];
                });
                return duration;
              },
            },
            {
              key: "_bindClientEvents",
              value: function _bindClientEvents() {
                this["adTimeline"] = new _timeline2["default"](
                  this["_adBreaks"],
                  this["_ads"],
                  this["config"]
                );
                this["_trackClientEvent"]("timeupdate", this["_onTimeUpdate"]);
                this["_trackClientEvent"]("timeline_timeupdate", this["_onTimelineTimeUpdate"]);
                this["_trackClientEvent"]("adclicked", this["_onAdClicked"]);
                this["_trackClientEvent"]("muted", this["_onMuted"]);
                this["_trackClientEvent"]("pause", this["_onPause"]);
                this["_trackClientEvent"]("play", this["_onPlay"]);
                this["_trackClientEvent"]("fullscreen", this["_onFullscreen"]);
                this["_trackClientEvent"]("close", this["_onClose"]);
              },
            },
            {
              key: "_onAdClicked",
              value: function _onAdClicked(ad) {
                ad["tracker"]["click"]();
              },
            },
            {
              key: "_onMuted",
              value: function _onMuted(ad, event) {
                ad["tracker"]["setMuted"](event["muted"]);
              },
            },
            {
              key: "_onPause",
              value: function _onPause(ad) {
                ad["tracker"]["setPaused"](true);
              },
            },
            {
              key: "_onPlay",
              value: function _onPlay(ad) {
                ad["tracker"]["setPaused"](false);
              },
            },
            {
              key: "_onFullscreen",
              value: function _onFullscreen(ad, event) {
                ad["tracker"]["setFullscreen"](event["fullscreen"]);
              },
            },
            {
              key: "_onClose",
              value: function _onClose(ad) {
                ad["tracker"]["close"]();
              },
            },
            {
              key: "_onTimeUpdate",
              value: function _onTimeUpdate(_, e) {
                this["adTimeline"]["update"](e["currentTime"]);
              },
            },
            {
              key: "_onTimelineTimeUpdate",
              value: function _onTimelineTimeUpdate(ad) {
                var duration = ad["meta"]["ad_duration"];
                var vastTracker = ad["tracker"];
                var progress =
                  this["adTimeline"]["currentTime"] - ad["start"];
                if (progress <= duration) {
                  if (
                    !vastTracker["completed"] &&
                    Math["abs"](progress - duration) < this["AdCompletionTolerance"]
                  ) {
                    vastTracker["complete"]();
                    vastTracker["completed"] = true;
                  } else vastTracker["setProgress"](progress);
                }
              },
            },
            {
              key: "_trackClientEvent",
              value: function _trackClientEvent(eventName, handler) {
                var _this = this;
                var clientEvent = function clientEvent(event) {
                  if (eventName === "timeupdate") {
                    handler["call"](_this, null, event);
                  } else {
                    eventName === "timeline_timeupdate" &&
                      _this["_checkAdStart"](event["currentTime"]);
                    var ad = _this["adTimeline"]["getCurrentAd"]();
                    if (ad) {
                      handler["call"](_this, ad, event);
                      _util2["default"]["log"](
                        "[AdTracker]: Event " +
                          eventName +
                          " of ad " +
                          ad["meta"]["ad_sequence"] +
                          " is tracked"
                      );
                    }
                  }
                };
                _eventbus2["default"]["on"](eventName, clientEvent);
                this["clientEvents"]["push"]({
                  eventName: eventName,
                  clientEvent: clientEvent,
                });
              },
            },
            {
              key: "_processAdCooldown",
              value: function _processAdCooldown(adMeta) {
                _util2["default"]["log"]("[AdTracker]: Checking ad cooldown");
                if (
                  this["contentResource"]["contentType"] === "live" &&
                  adMeta["ad_type"] === "preroll" &&
                  adMeta["ad_pod_position"] === adMeta["ad_pod_size"]
                ) {
                  var now = Date["now"]();
                  _util2["default"]["log"](
                    "[AdTracker]: Preroll completed. Starting Ad cooldown " + new Date(now)
                  );
                  _jsCookie2["default"]["set"]("at_lvp", now, {
                    expires: 999,
                  });
                }
              },
            },
            {
              key: "_updateAdBreakViewState",
              value: function _updateAdBreakViewState(admeta, breakInfo) {
                if (admeta["ad_pod_position"] === admeta["ad_pod_size"]) {
                  _util2["default"]["log"]("[AdTracker]: Ad Break watched completely");
                  breakInfo["viewed"] = true;
                  _eventbus2["default"]["emit"]("adbreakcomplete");
                }
              },
            },
            {
              key: "_checkAdStart",
              value: function _checkAdStart(currentTime) {
                var nextAd =
                  this["adTimeline"]["getNextAd"](currentTime) || {};
                var adStartOffset = nextAd["start"] || 0;
                if (
                  currentTime < adStartOffset &&
                  adStartOffset - currentTime < 1
                ) {
                  var now = Date["now"]();
                  if (!this["lastAdPreStartEvent"] || now - this["lastAdPreStartEvent"] > 1e3) {
                    _eventbus2["default"]["emit"]("adprestart", {
                      adStart: adStartOffset,
                    });
                    this["lastAdPreStartEvent"] = Date["now"]();
                  }
                }
              },
            },
            {
              key: "ads",
              get: function get() {
                return this["_ads"];
              },
            },
          ],
          [
            {
              key: "augmentClientData",
              value: (function () {
                var _ref9 = (0, _asyncToGenerator3["default"])(
                  _regenerator2["default"]["mark"](function _callee8(
                    contentResource
                  ) {
                    var config =
                      arguments["length"] > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};
                    var augmentationOptions =
                      arguments["length"] > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : {
                            augmentNuggVars: true,
                          };
                    return _regenerator2["default"]["wrap"](
                      function _callee8$(_context8) {
                        while (1) {
                          switch (
                            (_context8["prev"] = _context8["next"])
                          ) {
                            case 0:
                              _context8["next"] = 2;
                              return new _clientDataAugmenter2["default"](
                                contentResource,
                                config
                              )["augment"](augmentationOptions);
                            case 2:
                              return _context8["abrupt"](
                                "return",
                                _context8["sent"]
                              );
                            case 3:
                            case "end":
                              return _context8["stop"]();
                          }
                        }
                      },
                      _callee8,
                      this
                    );
                  })
                );
                function augmentClientData(_x9) {
                  return _ref9["apply"](this, arguments);
                }
                return augmentClientData;
              })(),
            },
          ]
        );
        return AdTracker;
      })();
      exports["default"] = AdTracker;
    },
    function (module, exports) {},
    function (module, exports, __webpack_require__) {
      "use strict";
      var LIBRARY = __webpack_require__(19);
      var $export = __webpack_require__(3);
      var redefine = __webpack_require__(69);
      var hide = __webpack_require__(7);
      var Iterators = __webpack_require__(11);
      var $iterCreate = __webpack_require__(105);
      var setToStringTag = __webpack_require__(32);
      var getPrototypeOf = __webpack_require__(109);
      var ITERATOR = __webpack_require__(2)("iterator");
      var BUGGY = !([]["keys"] && "next" in []["keys"]());
      var FF_ITERATOR = "@@iterator";
      var KEYS = "keys";
      var VALUES = "values";
      var returnThis = function () {
        return this;
      };
      module["exports"] = function (
        Base,
        NAME,
        Constructor,
        next,
        DEFAULT,
        IS_SET,
        FORCED
      ) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function (kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }
          return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME + " Iterator";
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base["prototype"];
        var $native =
          proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT
          ? !DEF_VALUES
            ? $default
            : getMethod("entries")
          : undefined;
        var $anyNative =
          NAME == "Array" ? proto["entries"] || $native : $native;
        var methods, key, IteratorPrototype;
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf(
            $anyNative["call"](new Base())
          );
          if (
            IteratorPrototype !== Object["prototype"] &&
            IteratorPrototype["next"]
          ) {
            setToStringTag(IteratorPrototype, TAG, true);
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
              hide(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        if (DEF_VALUES && $native && $native["name"] !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native["call"](this);
          };
        }
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries,
          };
          if (FORCED)
            for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            }
          else
            $export(
              $export["P"] +
                $export["F"] * (BUGGY || VALUES_BUG),
              NAME,
              methods
            );
        }
        return methods;
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] =
        !__webpack_require__(6) &&
        !__webpack_require__(21)(function () {
          return (
            Object["defineProperty"](
              __webpack_require__(43)("div"),
              "a",
              {
                get: function () {
                  return 7;
                },
              }
            )["a"] != 7
          );
        });
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = __webpack_require__(7);
    },
    function (module, exports, __webpack_require__) {
      var has = __webpack_require__(9);
      var toIObject = __webpack_require__(12);
      var arrayIndexOf = __webpack_require__(107)(false);
      var IE_PROTO = __webpack_require__(47)("IE_PROTO");
      module["exports"] = function (object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          if (key != IE_PROTO) has(O, key) && result["push"](key);
        while (names["length"] > i)
          if (has(O, (key = names[i++]))) {
            ~arrayIndexOf(result, key) || result["push"](key);
          }
        return result;
      };
    },
    function (module, exports, __webpack_require__) {
      var cof = __webpack_require__(23);
      module["exports"] = Object("z")["propertyIsEnumerable"](0)
        ? Object
        : function (it) {
            return cof(it) == "String"
              ? it["split"]("")
              : Object(it);
          };
    },
    function (module, exports, __webpack_require__) {
      var document = __webpack_require__(1)["document"];
      module["exports"] = document && document["documentElement"];
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(5);
      module["exports"] = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (e) {
          var ret = iterator["return"];
          if (ret !== undefined) anObject(ret["call"](iterator));
          throw e;
        }
      };
    },
    function (module, exports, __webpack_require__) {
      var Iterators = __webpack_require__(11);
      var ITERATOR = __webpack_require__(2)("iterator");
      var ArrayProto = Array["prototype"];
      module["exports"] = function (it) {
        return (
          it !== undefined &&
          (Iterators["Array"] === it || ArrayProto[ITERATOR] === it)
        );
      };
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(5);
      var aFunction = __webpack_require__(29);
      var SPECIES = __webpack_require__(2)("species");
      module["exports"] = function (O, D) {
        var C = anObject(O)["constructor"];
        var S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined
          ? D
          : aFunction(S);
      };
    },
    function (module, exports, __webpack_require__) {
      var ctx = __webpack_require__(20);
      var invoke = __webpack_require__(116);
      var html = __webpack_require__(72);
      var cel = __webpack_require__(43);
      var global = __webpack_require__(1);
      var process = global["process"];
      var setTask = global["setImmediate"];
      var clearTask = global["clearImmediate"];
      var MessageChannel = global["MessageChannel"];
      var Dispatch = global["Dispatch"];
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = "onreadystatechange";
      var defer, channel, port;
      var run = function () {
        var id = +this;
        if (queue["hasOwnProperty"](id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var listener = function (event) {
        run["call"](event["data"]);
      };
      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn) {
          var args = [];
          var i = 1;
          while (arguments["length"] > i) args["push"](arguments[i++]);
          queue[++counter] = function () {
            invoke(typeof fn == "function" ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearTask = function clearImmediate(id) {
          delete queue[id];
        };
        if (__webpack_require__(23)(process) == "process") {
          defer = function (id) {
            process["nextTick"](ctx(run, id, 1));
          };
        } else if (Dispatch && Dispatch["now"]) {
          defer = function (id) {
            Dispatch["now"](ctx(run, id, 1));
          };
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel["port2"];
          channel["port1"]["onmessage"] = listener;
          defer = ctx(port["postMessage"], port, 1);
        } else if (
          global["addEventListener"] &&
          typeof postMessage == "function" &&
          !global["importScripts"]
        ) {
          defer = function (id) {
            global["postMessage"](id + "", "*");
          };
          global["addEventListener"]("message", listener, false);
        } else if (ONREADYSTATECHANGE in cel("script")) {
          defer = function (id) {
            html["appendChild"](cel("script"))[
              ONREADYSTATECHANGE
            ] = function () {
              html["removeChild"](this);
              run["call"](id);
            };
          };
        } else {
          defer = function (id) {
            setTimeout(ctx(run, id, 1), 0);
          };
        }
      }
      module["exports"] = {
        set: setTask,
        clear: clearTask,
      };
    },
    function (module, exports) {
      module["exports"] = function (exec) {
        try {
          return {
            e: false,
            v: exec(),
          };
        } catch (e) {
          return {
            e: true,
            v: e,
          };
        }
      };
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(5);
      var isObject = __webpack_require__(8);
      var newPromiseCapability = __webpack_require__(52);
      module["exports"] = function (C, x) {
        anObject(C);
        if (isObject(x) && x["constructor"] === C) return x;
        var promiseCapability = newPromiseCapability["f"](C);
        var resolve = promiseCapability["resolve"];
        resolve(x);
        return promiseCapability["promise"];
      };
    },
    function (module, exports, __webpack_require__) {
      var ITERATOR = __webpack_require__(2)("iterator");
      var SAFE_CLOSING = false;
      try {
        var riter = [7][ITERATOR]();
        riter["return"] = function () {
          SAFE_CLOSING = true;
        };
        Array["from"](riter, function () {
          throw 2;
        });
      } catch (e) {}
      module["exports"] = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;
        try {
          var arr = [7];
          var iter = arr[ITERATOR]();
          iter["next"] = function () {
            return {
              done: (safe = true),
            };
          };
          arr[ITERATOR] = function () {
            return iter;
          };
          exec(arr);
        } catch (e) {}
        return safe;
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(123),
        __esModule: true,
      };
    },
    function (module, exports) {
      module["exports"] = true;
    },
    function (module, exports, __webpack_require__) {
      var aFunction = __webpack_require__(131);
      module["exports"] = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn["call"](that, a);
            };
          case 2:
            return function (a, b) {
              return fn["call"](that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn["call"](that, a, b, c);
            };
        }
        return function () {
          return fn["apply"](that, arguments);
        };
      };
    },
    function (module, exports) {
      module["exports"] = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    },
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(56);
      var document = __webpack_require__(24)["document"];
      var is = isObject(document) && isObject(document["createElement"]);
      module["exports"] = function (it) {
        return is ? document["createElement"](it) : {};
      };
    },
    function (module, exports, __webpack_require__) {
      var IObject = __webpack_require__(140);
      var defined = __webpack_require__(54);
      module["exports"] = function (it) {
        return IObject(defined(it));
      };
    },
    function (module, exports) {
      var toString = {}["toString"];
      module["exports"] = function (it) {
        return toString["call"](it)["slice"](8, -1);
      };
    },
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(53);
      var min = Math["min"];
      module["exports"] = function (it) {
        return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
      };
    },
    function (module, exports, __webpack_require__) {
      var core = __webpack_require__(25);
      var global = __webpack_require__(24);
      var SHARED = "__core-js_shared__";
      var store = global[SHARED] || (global[SHARED] = {});
      (module["exports"] = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })("versions", [])["push"]({
        version: core["version"],
        mode: __webpack_require__(81) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (module, exports) {
      var id = 0;
      var px = Math["random"]();
      module["exports"] = function (key) {
        return "Symbol("["concat"](
          key === undefined ? "" : key,
          ")_",
          (++id + px)["toString"](36)
        );
      };
    },
    function (module, exports) {
      module["exports"] = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf"["split"](",");
    },
    function (module, exports, __webpack_require__) {
      var def = __webpack_require__(26)["f"];
      var has = __webpack_require__(37);
      var TAG = __webpack_require__(10)("toStringTag");
      module["exports"] = function (it, tag, stat) {
        if (it && !has((it = stat ? it : it["prototype"]), TAG))
          def(it, TAG, {
            configurable: true,
            value: tag,
          });
      };
    },
    function (module, exports, __webpack_require__) {
      var defined = __webpack_require__(54);
      module["exports"] = function (it) {
        return Object(defined(it));
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _defineProperty = __webpack_require__(80);
      var _defineProperty2 = _interopRequireDefault(_defineProperty);
      var _create = __webpack_require__(158);
      var _create2 = _interopRequireDefault(_create);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      function copy(src, dest) {
        for (var p in src) {
          dest[p] = src[p];
        }
      }
      function _extends(Class, Super) {
        var pt = Class["prototype"];
        if (_create2["default"]) {
          var ppt = (0, _create2["default"])(Super["prototype"]);
          pt["__proto__"] = ppt;
        }
        if (!(pt instanceof Super)) {
          var t = function t() {};
          t["prototype"] = Super["prototype"];
          t = new t();
          copy(pt, t);
          Class["prototype"] = pt = t;
        }
        if (pt["constructor"] != Class) {
          if (typeof Class != "function") {
            console["error"]("unknow Class:" + Class);
          }
          pt["constructor"] = Class;
        }
      }
      var htmlns = "http://www.w3.org/1999/xhtml";
      var NodeType = {};
      var ELEMENT_NODE = (NodeType["ELEMENT_NODE"] = 1);
      var ATTRIBUTE_NODE = (NodeType["ATTRIBUTE_NODE"] = 2);
      var TEXT_NODE = (NodeType["TEXT_NODE"] = 3);
      var CDATA_SECTION_NODE = (NodeType["CDATA_SECTION_NODE"] = 4);
      var ENTITY_REFERENCE_NODE = (NodeType["ENTITY_REFERENCE_NODE"] = 5);
      var ENTITY_NODE = (NodeType["ENTITY_NODE"] = 6);
      var PROCESSING_INSTRUCTION_NODE = (NodeType["PROCESSING_INSTRUCTION_NODE"] = 7);
      var COMMENT_NODE = (NodeType["COMMENT_NODE"] = 8);
      var DOCUMENT_NODE = (NodeType["DOCUMENT_NODE"] = 9);
      var DOCUMENT_TYPE_NODE = (NodeType["DOCUMENT_TYPE_NODE"] = 10);
      var DOCUMENT_FRAGMENT_NODE = (NodeType["DOCUMENT_FRAGMENT_NODE"] = 11);
      var NOTATION_NODE = (NodeType["NOTATION_NODE"] = 12);
      var ExceptionCode = {};
      var ExceptionMessage = {};
      var INDEX_SIZE_ERR = (ExceptionCode["INDEX_SIZE_ERR"] =
        ((ExceptionMessage[1] = "Index size error"), 1));
      var DOMSTRING_SIZE_ERR = (ExceptionCode["DOMSTRING_SIZE_ERR"] =
        ((ExceptionMessage[2] = "DOMString size error"), 2));
      var HIERARCHY_REQUEST_ERR = (ExceptionCode["HIERARCHY_REQUEST_ERR"] =
        ((ExceptionMessage[3] = "Hierarchy request error"), 3));
      var WRONG_DOCUMENT_ERR = (ExceptionCode["WRONG_DOCUMENT_ERR"] =
        ((ExceptionMessage[4] = "Wrong document"), 4));
      var INVALID_CHARACTER_ERR = (ExceptionCode["INVALID_CHARACTER_ERR"] =
        ((ExceptionMessage[5] = "Invalid character"), 5));
      var NO_DATA_ALLOWED_ERR = (ExceptionCode["NO_DATA_ALLOWED_ERR"] =
        ((ExceptionMessage[6] = "No data allowed"), 6));
      var NO_MODIFICATION_ALLOWED_ERR = (ExceptionCode["NO_MODIFICATION_ALLOWED_ERR"] =
        ((ExceptionMessage[7] = "No modification allowed"), 7));
      var NOT_FOUND_ERR = (ExceptionCode["NOT_FOUND_ERR"] =
        ((ExceptionMessage[8] = "Not found"), 8));
      var NOT_SUPPORTED_ERR = (ExceptionCode["NOT_SUPPORTED_ERR"] =
        ((ExceptionMessage[9] = "Not supported"), 9));
      var INUSE_ATTRIBUTE_ERR = (ExceptionCode["INUSE_ATTRIBUTE_ERR"] =
        ((ExceptionMessage[10] = "Attribute in use"), 10));
      var INVALID_STATE_ERR = (ExceptionCode["INVALID_STATE_ERR"] =
        ((ExceptionMessage[11] = "Invalid state"), 11));
      var SYNTAX_ERR = (ExceptionCode["SYNTAX_ERR"] =
        ((ExceptionMessage[12] = "Syntax error"), 12));
      var INVALID_MODIFICATION_ERR = (ExceptionCode["INVALID_MODIFICATION_ERR"] =
        ((ExceptionMessage[13] = "Invalid modification"), 13));
      var NAMESPACE_ERR = (ExceptionCode["NAMESPACE_ERR"] =
        ((ExceptionMessage[14] = "Invalid namespace"), 14));
      var INVALID_ACCESS_ERR = (ExceptionCode["INVALID_ACCESS_ERR"] =
        ((ExceptionMessage[15] = "Invalid access"), 15));
      function DOMException(code, message) {
        if (message instanceof Error) {
          var error = message;
        } else {
          error = this;
          Error["call"](this, ExceptionMessage[code]);
          this["message"] = ExceptionMessage[code];
          if (Error["captureStackTrace"]) Error["captureStackTrace"](this, DOMException);
        }
        error["code"] = code;
        if (message)
          this["message"] = this["message"] + ": " + message;
        return error;
      }
      DOMException["prototype"] = Error["prototype"];
      copy(ExceptionCode, DOMException);
      function NodeList() {}
      NodeList["prototype"] = {
        length: 0,
        item: function item(index) {
          return this[index] || null;
        },
        toString: function toString(isHTML, nodeFilter) {
          for (var buf = [], i = 0; i < this["length"]; i++) {
            serializeToString(this[i], buf, isHTML, nodeFilter);
          }
          return buf["join"]("");
        },
      };
      function LiveNodeList(node, refresh) {
        this["_node"] = node;
        this["_refresh"] = refresh;
        _updateLiveList(this);
      }
      function _updateLiveList(list) {
        var inc =
          list["_node"]["_inc"] ||
          list["_node"]["ownerDocument"]["_inc"];
        if (list["_inc"] != inc) {
          var ls = list["_refresh"](list["_node"]);
          __set__(list, "length", ls["length"]);
          copy(ls, list);
          list["_inc"] = inc;
        }
      }
      LiveNodeList["prototype"]["item"] = function (i) {
        _updateLiveList(this);
        return this[i];
      };
      _extends(LiveNodeList, NodeList);
      function NamedNodeMap() {}
      function _findNodeIndex(list, node) {
        var i = list["length"];
        while (i--) {
          if (list[i] === node) {
            return i;
          }
        }
      }
      function _addNamedNode(el, list, newAttr, oldAttr) {
        if (oldAttr) {
          list[_findNodeIndex(list, oldAttr)] = newAttr;
        } else {
          list[list["length"]++] = newAttr;
        }
        if (el) {
          newAttr["ownerElement"] = el;
          var doc = el["ownerDocument"];
          if (doc) {
            oldAttr && _onRemoveAttribute(doc, el, oldAttr);
            _onAddAttribute(doc, el, newAttr);
          }
        }
      }
      function _removeNamedNode(el, list, attr) {
        var i = _findNodeIndex(list, attr);
        if (i >= 0) {
          var lastIndex = list["length"] - 1;
          while (i < lastIndex) {
            list[i] = list[++i];
          }
          list["length"] = lastIndex;
          if (el) {
            var doc = el["ownerDocument"];
            if (doc) {
              _onRemoveAttribute(doc, el, attr);
              attr["ownerElement"] = null;
            }
          }
        } else {
          throw DOMException(
            NOT_FOUND_ERR,
            new Error(el["tagName"] + "@" + attr)
          );
        }
      }
      NamedNodeMap["prototype"] = {
        length: 0,
        item: NodeList["prototype"]["item"],
        getNamedItem: function getNamedItem(key) {
          var i = this["length"];
          while (i--) {
            var attr = this[i];
            if (attr["nodeName"] == key) {
              return attr;
            }
          }
        },
        setNamedItem: function setNamedItem(attr) {
          var el = attr["ownerElement"];
          if (el && el != this["_ownerElement"]) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          var oldAttr = this["getNamedItem"](attr["nodeName"]);
          _addNamedNode(this["_ownerElement"], this, attr, oldAttr);
          return oldAttr;
        },
        setNamedItemNS: function setNamedItemNS(attr) {
          var el = attr["ownerElement"],
            oldAttr;
          if (el && el != this["_ownerElement"]) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          oldAttr = this["getNamedItemNS"](attr["namespaceURI"], attr["localName"]);
          _addNamedNode(this["_ownerElement"], this, attr, oldAttr);
          return oldAttr;
        },
        removeNamedItem: function removeNamedItem(key) {
          var attr = this["getNamedItem"](key);
          _removeNamedNode(this["_ownerElement"], this, attr);
          return attr;
        },
        removeNamedItemNS: function removeNamedItemNS(namespaceURI, localName) {
          var attr = this["getNamedItemNS"](namespaceURI, localName);
          _removeNamedNode(this["_ownerElement"], this, attr);
          return attr;
        },
        getNamedItemNS: function getNamedItemNS(namespaceURI, localName) {
          var i = this["length"];
          while (i--) {
            var node = this[i];
            if (
              node["localName"] == localName &&
              node["namespaceURI"] == namespaceURI
            ) {
              return node;
            }
          }
          return null;
        },
      };
      function DOMImplementation(features) {
        this["_features"] = {};
        if (features) {
          for (var feature in features) {
            this["_features"] = features[feature];
          }
        }
      }
      DOMImplementation["prototype"] = {
        hasFeature: function hasFeature(feature, version) {
          var versions = this["_features"][feature["toLowerCase"]()];
          if (versions && (!version || version in versions)) {
            return true;
          } else {
            return false;
          }
        },
        createDocument: function createDocument(
          namespaceURI,
          qualifiedName,
          doctype
        ) {
          var doc = new Document();
          doc["implementation"] = this;
          doc["childNodes"] = new NodeList();
          doc["doctype"] = doctype;
          if (doctype) {
            doc["appendChild"](doctype);
          }
          if (qualifiedName) {
            var root = doc["createElementNS"](namespaceURI, qualifiedName);
            doc["appendChild"](root);
          }
          return doc;
        },
        createDocumentType: function createDocumentType(
          qualifiedName,
          publicId,
          systemId
        ) {
          var node = new DocumentType();
          node["name"] = qualifiedName;
          node["nodeName"] = qualifiedName;
          node["publicId"] = publicId;
          node["systemId"] = systemId;
          return node;
        },
      };
      function Node() {}
      Node["prototype"] = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function insertBefore(newChild, refChild) {
          return _insertBefore(this, newChild, refChild);
        },
        replaceChild: function replaceChild(newChild, oldChild) {
          this["insertBefore"](newChild, oldChild);
          if (oldChild) {
            this["removeChild"](oldChild);
          }
        },
        removeChild: function removeChild(oldChild) {
          return _removeChild(this, oldChild);
        },
        appendChild: function appendChild(newChild) {
          return this["insertBefore"](newChild, null);
        },
        hasChildNodes: function hasChildNodes() {
          return this["firstChild"] != null;
        },
        cloneNode: function cloneNode(deep) {
          return _cloneNode(this["ownerDocument"] || this, this, deep);
        },
        normalize: function normalize() {
          var child = this["firstChild"];
          while (child) {
            var next = child["nextSibling"];
            if (
              next &&
              next["nodeType"] == TEXT_NODE &&
              child["nodeType"] == TEXT_NODE
            ) {
              this["removeChild"](next);
              child["appendData"](next["data"]);
            } else {
              child["normalize"]();
              child = next;
            }
          }
        },
        isSupported: function isSupported(feature, version) {
          return this["ownerDocument"]["implementation"]["hasFeature"](
            feature,
            version
          );
        },
        hasAttributes: function hasAttributes() {
          return this["attributes"]["length"] > 0;
        },
        lookupPrefix: function lookupPrefix(namespaceURI) {
          var el = this;
          while (el) {
            var map = el["_nsMap"];
            if (map) {
              for (var n in map) {
                if (map[n] == namespaceURI) {
                  return n;
                }
              }
            }
            el =
              el["nodeType"] == ATTRIBUTE_NODE
                ? el["ownerDocument"]
                : el["parentNode"];
          }
          return null;
        },
        lookupNamespaceURI: function lookupNamespaceURI(prefix) {
          var el = this;
          while (el) {
            var map = el["_nsMap"];
            if (map) {
              if (prefix in map) {
                return map[prefix];
              }
            }
            el =
              el["nodeType"] == ATTRIBUTE_NODE
                ? el["ownerDocument"]
                : el["parentNode"];
          }
          return null;
        },
        isDefaultNamespace: function isDefaultNamespace(namespaceURI) {
          var prefix = this["lookupPrefix"](namespaceURI);
          return prefix == null;
        },
      };
      function _xmlEncoder(c) {
        return (
          (c == "<" && "&lt;") ||
          (c == ">" && "&gt;") ||
          (c == "&" && "&amp;") ||
          (c == '"' && "&quot;") ||
          "&#" + c["charCodeAt"]() + ";"
        );
      }
      copy(NodeType, Node);
      copy(NodeType, Node["prototype"]);
      function _visitNode(node, callback) {
        if (callback(node)) {
          return true;
        }
        if ((node = node["firstChild"])) {
          do {
            if (_visitNode(node, callback)) {
              return true;
            }
          } while ((node = node["nextSibling"]));
        }
      }
      function Document() {}
      function _onAddAttribute(doc, el, newAttr) {
        doc && doc["_inc"]++;
        var ns = newAttr["namespaceURI"];
        if (ns == "http://www.w3.org/2000/xmlns/") {
          el["_nsMap"][
            newAttr["prefix"] ? newAttr["localName"] : ""
          ] = newAttr["value"];
        }
      }
      function _onRemoveAttribute(doc, el, newAttr, remove) {
        doc && doc["_inc"]++;
        var ns = newAttr["namespaceURI"];
        if (ns == "http://www.w3.org/2000/xmlns/") {
          delete el["_nsMap"][
            newAttr["prefix"] ? newAttr["localName"] : ""
          ];
        }
      }
      function _onUpdateChild(doc, el, newChild) {
        if (doc && doc["_inc"]) {
          doc["_inc"]++;
          var cs = el["childNodes"];
          if (newChild) {
            cs[cs["length"]++] = newChild;
          } else {
            var child = el["firstChild"];
            var i = 0;
            while (child) {
              cs[i++] = child;
              child = child["nextSibling"];
            }
            cs["length"] = i;
          }
        }
      }
      function _removeChild(parentNode, child) {
        var previous = child["previousSibling"];
        var next = child["nextSibling"];
        if (previous) {
          previous["nextSibling"] = next;
        } else {
          parentNode["firstChild"] = next;
        }
        if (next) {
          next["previousSibling"] = previous;
        } else {
          parentNode["lastChild"] = previous;
        }
        _onUpdateChild(parentNode["ownerDocument"], parentNode);
        return child;
      }
      function _insertBefore(parentNode, newChild, nextChild) {
        var cp = newChild["parentNode"];
        if (cp) {
          cp["removeChild"](newChild);
        }
        if (newChild["nodeType"] === DOCUMENT_FRAGMENT_NODE) {
          var newFirst = newChild["firstChild"];
          if (newFirst == null) {
            return newChild;
          }
          var newLast = newChild["lastChild"];
        } else {
          newFirst = newLast = newChild;
        }
        var pre = nextChild
          ? nextChild["previousSibling"]
          : parentNode["lastChild"];
        newFirst["previousSibling"] = pre;
        newLast["nextSibling"] = nextChild;
        if (pre) {
          pre["nextSibling"] = newFirst;
        } else {
          parentNode["firstChild"] = newFirst;
        }
        if (nextChild == null) {
          parentNode["lastChild"] = newLast;
        } else {
          nextChild["previousSibling"] = newLast;
        }
        do {
          newFirst["parentNode"] = parentNode;
        } while (newFirst !== newLast && (newFirst = newFirst["nextSibling"]));
        _onUpdateChild(parentNode["ownerDocument"] || parentNode, parentNode);
        if (newChild["nodeType"] == DOCUMENT_FRAGMENT_NODE) {
          newChild["firstChild"] = newChild["lastChild"] = null;
        }
        return newChild;
      }
      function _appendSingleChild(parentNode, newChild) {
        var cp = newChild["parentNode"];
        if (cp) {
          var pre = parentNode["lastChild"];
          cp["removeChild"](newChild);
          var pre = parentNode["lastChild"];
        }
        var pre = parentNode["lastChild"];
        newChild["parentNode"] = parentNode;
        newChild["previousSibling"] = pre;
        newChild["nextSibling"] = null;
        if (pre) {
          pre["nextSibling"] = newChild;
        } else {
          parentNode["firstChild"] = newChild;
        }
        parentNode["lastChild"] = newChild;
        _onUpdateChild(parentNode["ownerDocument"], parentNode, newChild);
        return newChild;
      }
      Document["prototype"] = {
        nodeName: "#document",
        nodeType: DOCUMENT_NODE,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function insertBefore(newChild, refChild) {
          if (newChild["nodeType"] == DOCUMENT_FRAGMENT_NODE) {
            var child = newChild["firstChild"];
            while (child) {
              var next = child["nextSibling"];
              this["insertBefore"](child, refChild);
              child = next;
            }
            return newChild;
          }
          if (
            this["documentElement"] == null &&
            newChild["nodeType"] == ELEMENT_NODE
          ) {
            this["documentElement"] = newChild;
          }
          return (
            _insertBefore(this, newChild, refChild),
            (newChild["ownerDocument"] = this),
            newChild
          );
        },
        removeChild: function removeChild(oldChild) {
          if (this["documentElement"] == oldChild) {
            this["documentElement"] = null;
          }
          return _removeChild(this, oldChild);
        },
        importNode: function importNode(importedNode, deep) {
          return _importNode(this, importedNode, deep);
        },
        getElementById: function getElementById(id) {
          var rtv = null;
          _visitNode(this["documentElement"], function (node) {
            if (node["nodeType"] == ELEMENT_NODE) {
              if (node["getAttribute"]("id") == id) {
                rtv = node;
                return true;
              }
            }
          });
          return rtv;
        },
        createElement: function createElement(tagName) {
          var node = new Element();
          node["ownerDocument"] = this;
          node["nodeName"] = tagName;
          node["tagName"] = tagName;
          node["childNodes"] = new NodeList();
          var attrs = (node["attributes"] = new NamedNodeMap());
          attrs["_ownerElement"] = node;
          return node;
        },
        createDocumentFragment: function createDocumentFragment() {
          var node = new DocumentFragment();
          node["ownerDocument"] = this;
          node["childNodes"] = new NodeList();
          return node;
        },
        createTextNode: function createTextNode(data) {
          var node = new Text();
          node["ownerDocument"] = this;
          node["appendData"](data);
          return node;
        },
        createComment: function createComment(data) {
          var node = new Comment();
          node["ownerDocument"] = this;
          node["appendData"](data);
          return node;
        },
        createCDATASection: function createCDATASection(data) {
          var node = new CDATASection();
          node["ownerDocument"] = this;
          node["appendData"](data);
          return node;
        },
        createProcessingInstruction: function createProcessingInstruction(
          target,
          data
        ) {
          var node = new ProcessingInstruction();
          node["ownerDocument"] = this;
          node["tagName"] = node["target"] = target;
          node["nodeValue"] = node["data"] = data;
          return node;
        },
        createAttribute: function createAttribute(name) {
          var node = new Attr();
          node["ownerDocument"] = this;
          node["name"] = name;
          node["nodeName"] = name;
          node["localName"] = name;
          node["specified"] = true;
          return node;
        },
        createEntityReference: function createEntityReference(name) {
          var node = new EntityReference();
          node["ownerDocument"] = this;
          node["nodeName"] = name;
          return node;
        },
        createElementNS: function createElementNS(namespaceURI, qualifiedName) {
          var node = new Element();
          var pl = qualifiedName["split"](":");
          var attrs = (node["attributes"] = new NamedNodeMap());
          node["childNodes"] = new NodeList();
          node["ownerDocument"] = this;
          node["nodeName"] = qualifiedName;
          node["tagName"] = qualifiedName;
          node["namespaceURI"] = namespaceURI;
          if (pl["length"] == 2) {
            node["prefix"] = pl[0];
            node["localName"] = pl[1];
          } else {
            node["localName"] = qualifiedName;
          }
          attrs["_ownerElement"] = node;
          return node;
        },
        createAttributeNS: function createAttributeNS(
          namespaceURI,
          qualifiedName
        ) {
          var node = new Attr();
          var pl = qualifiedName["split"](":");
          node["ownerDocument"] = this;
          node["nodeName"] = qualifiedName;
          node["name"] = qualifiedName;
          node["namespaceURI"] = namespaceURI;
          node["specified"] = true;
          if (pl["length"] == 2) {
            node["prefix"] = pl[0];
            node["localName"] = pl[1];
          } else {
            node["localName"] = qualifiedName;
          }
          return node;
        },
      };
      _extends(Document, Node);
      function Element() {
        this["_nsMap"] = {};
      }
      Element["prototype"] = {
        nodeType: ELEMENT_NODE,
        hasAttribute: function hasAttribute(name) {
          return this["getAttributeNode"](name) != null;
        },
        getAttribute: function getAttribute(name) {
          var attr = this["getAttributeNode"](name);
          return (attr && attr["value"]) || "";
        },
        getAttributeNode: function getAttributeNode(name) {
          return this["attributes"]["getNamedItem"](name);
        },
        setAttribute: function setAttribute(name, value) {
          var attr = this["ownerDocument"]["createAttribute"](name);
          attr["value"] = attr["nodeValue"] = "" + value;
          this["setAttributeNode"](attr);
        },
        removeAttribute: function removeAttribute(name) {
          var attr = this["getAttributeNode"](name);
          attr && this["removeAttributeNode"](attr);
        },
        appendChild: function appendChild(newChild) {
          if (newChild["nodeType"] === DOCUMENT_FRAGMENT_NODE) {
            return this["insertBefore"](newChild, null);
          } else {
            return _appendSingleChild(this, newChild);
          }
        },
        setAttributeNode: function setAttributeNode(newAttr) {
          return this["attributes"]["setNamedItem"](newAttr);
        },
        setAttributeNodeNS: function setAttributeNodeNS(newAttr) {
          return this["attributes"]["setNamedItemNS"](newAttr);
        },
        removeAttributeNode: function removeAttributeNode(oldAttr) {
          return this["attributes"]["removeNamedItem"](oldAttr["nodeName"]);
        },
        removeAttributeNS: function removeAttributeNS(namespaceURI, localName) {
          var old = this["getAttributeNodeNS"](namespaceURI, localName);
          old && this["removeAttributeNode"](old);
        },
        hasAttributeNS: function hasAttributeNS(namespaceURI, localName) {
          return this["getAttributeNodeNS"](namespaceURI, localName) != null;
        },
        getAttributeNS: function getAttributeNS(namespaceURI, localName) {
          var attr = this["getAttributeNodeNS"](namespaceURI, localName);
          return (attr && attr["value"]) || "";
        },
        setAttributeNS: function setAttributeNS(
          namespaceURI,
          qualifiedName,
          value
        ) {
          var attr = this["ownerDocument"]["createAttributeNS"](
            namespaceURI,
            qualifiedName
          );
          attr["value"] = attr["nodeValue"] = "" + value;
          this["setAttributeNode"](attr);
        },
        getAttributeNodeNS: function getAttributeNodeNS(
          namespaceURI,
          localName
        ) {
          return this["attributes"]["getNamedItemNS"](namespaceURI, localName);
        },
        getElementsByTagName: function getElementsByTagName(tagName) {
          return new LiveNodeList(this, function (base) {
            var ls = [];
            _visitNode(base, function (node) {
              if (
                node !== base &&
                node["nodeType"] == ELEMENT_NODE &&
                (tagName === "*" || node["tagName"] == tagName)
              ) {
                ls["push"](node);
              }
            });
            return ls;
          });
        },
        getElementsByTagNameNS: function getElementsByTagNameNS(
          namespaceURI,
          localName
        ) {
          return new LiveNodeList(this, function (base) {
            var ls = [];
            _visitNode(base, function (node) {
              if (
                node !== base &&
                node["nodeType"] === ELEMENT_NODE &&
                (namespaceURI === "*" ||
                  node["namespaceURI"] === namespaceURI) &&
                (localName === "*" || node["localName"] == localName)
              ) {
                ls["push"](node);
              }
            });
            return ls;
          });
        },
      };
      Document["prototype"]["getElementsByTagName"] = Element["prototype"]["getElementsByTagName"];
      Document["prototype"]["getElementsByTagNameNS"] = Element["prototype"]["getElementsByTagNameNS"];
      _extends(Element, Node);
      function Attr() {}
      Attr["prototype"]["nodeType"] = ATTRIBUTE_NODE;
      _extends(Attr, Node);
      function CharacterData() {}
      CharacterData["prototype"] = {
        data: "",
        substringData: function substringData(offset, count) {
          return this["data"]["substring"](offset, offset + count);
        },
        appendData: function appendData(text) {
          text = this["data"] + text;
          this["nodeValue"] = this["data"] = text;
          this["length"] = text["length"];
        },
        insertData: function insertData(offset, text) {
          this["replaceData"](offset, 0, text);
        },
        appendChild: function appendChild(newChild) {
          throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
        },
        deleteData: function deleteData(offset, count) {
          this["replaceData"](offset, count, "");
        },
        replaceData: function replaceData(offset, count, text) {
          var start = this["data"]["substring"](0, offset);
          var end = this["data"]["substring"](offset + count);
          text = start + text + end;
          this["nodeValue"] = this["data"] = text;
          this["length"] = text["length"];
        },
      };
      _extends(CharacterData, Node);
      function Text() {}
      Text["prototype"] = {
        nodeName: "#text",
        nodeType: TEXT_NODE,
        splitText: function splitText(offset) {
          var text = this["data"];
          var newText = text["substring"](offset);
          text = text["substring"](0, offset);
          this["data"] = this["nodeValue"] = text;
          this["length"] = text["length"];
          var newNode = this["ownerDocument"]["createTextNode"](newText);
          if (this["parentNode"]) {
            this["parentNode"]["insertBefore"](newNode, this["nextSibling"]);
          }
          return newNode;
        },
      };
      _extends(Text, CharacterData);
      function Comment() {}
      Comment["prototype"] = {
        nodeName: "#comment",
        nodeType: COMMENT_NODE,
      };
      _extends(Comment, CharacterData);
      function CDATASection() {}
      CDATASection["prototype"] = {
        nodeName: "#cdata-section",
        nodeType: CDATA_SECTION_NODE,
      };
      _extends(CDATASection, CharacterData);
      function DocumentType() {}
      DocumentType["prototype"]["nodeType"] = DOCUMENT_TYPE_NODE;
      _extends(DocumentType, Node);
      function Notation() {}
      Notation["prototype"]["nodeType"] = NOTATION_NODE;
      _extends(Notation, Node);
      function Entity() {}
      Entity["prototype"]["nodeType"] = ENTITY_NODE;
      _extends(Entity, Node);
      function EntityReference() {}
      EntityReference["prototype"]["nodeType"] = ENTITY_REFERENCE_NODE;
      _extends(EntityReference, Node);
      function DocumentFragment() {}
      DocumentFragment["prototype"]["nodeName"] = "#document-fragment";
      DocumentFragment["prototype"]["nodeType"] = DOCUMENT_FRAGMENT_NODE;
      _extends(DocumentFragment, Node);
      function ProcessingInstruction() {}
      ProcessingInstruction["prototype"][
        "nodeType"
      ] = PROCESSING_INSTRUCTION_NODE;
      _extends(ProcessingInstruction, Node);
      function XMLSerializer() {}
      XMLSerializer["prototype"]["serializeToString"] = function (
        node,
        isHtml,
        nodeFilter
      ) {
        return nodeSerializeToString["call"](node, isHtml, nodeFilter);
      };
      Node["prototype"]["toString"] = nodeSerializeToString;
      function nodeSerializeToString(isHtml, nodeFilter) {
        var buf = [];
        var refNode = this["nodeType"] == 9 ? this["documentElement"] : this;
        var prefix = refNode["prefix"];
        var uri = refNode["namespaceURI"];
        if (uri && prefix == null) {
          var prefix = refNode["lookupPrefix"](uri);
          if (prefix == null) {
            var visibleNamespaces = [
              {
                namespace: uri,
                prefix: null,
              },
            ];
          }
        }
        serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
        return buf["join"]("");
      }
      function needNamespaceDefine(node, isHTML, visibleNamespaces) {
        var prefix = node["prefix"] || "";
        var uri = node["namespaceURI"];
        if (!prefix && !uri) {
          return false;
        }
        if (
          (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace") ||
          uri == "http://www.w3.org/2000/xmlns/"
        ) {
          return false;
        }
        var i = visibleNamespaces["length"];
        while (i--) {
          var ns = visibleNamespaces[i];
          if (ns["prefix"] == prefix) {
            return ns["namespace"] != uri;
          }
        }
        return true;
      }
      function serializeToString(
        node,
        buf,
        isHTML,
        nodeFilter,
        visibleNamespaces
      ) {
        if (nodeFilter) {
          node = nodeFilter(node);
          if (node) {
            if (typeof node == "string") {
              buf["push"](node);
              return;
            }
          } else {
            return;
          }
        }
        switch (node["nodeType"]) {
          case ELEMENT_NODE:
            if (!visibleNamespaces) visibleNamespaces = [];
            var startVisibleNamespaces = visibleNamespaces["length"];
            var attrs = node["attributes"];
            var len = attrs["length"];
            var child = node["firstChild"];
            var nodeName = node["tagName"];
            isHTML = htmlns === node["namespaceURI"] || isHTML;
            buf["push"]("<", nodeName);
            for (var i = 0; i < len; i++) {
              var attr = attrs["item"](i);
              if (attr["prefix"] == "xmlns") {
                visibleNamespaces["push"]({
                  prefix: attr["localName"],
                  namespace: attr["value"],
                });
              } else if (attr["nodeName"] == "xmlns") {
                visibleNamespaces["push"]({
                  prefix: "",
                  namespace: attr["value"],
                });
              }
            }
            for (var i = 0; i < len; i++) {
              var attr = attrs["item"](i);
              if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
                var prefix = attr["prefix"] || "";
                var uri = attr["namespaceURI"];
                var ns = prefix ? " xmlns:" + prefix : " xmlns";
                buf["push"](ns, '="', uri, '"');
                visibleNamespaces["push"]({
                  prefix: prefix,
                  namespace: uri,
                });
              }
              serializeToString(
                attr,
                buf,
                isHTML,
                nodeFilter,
                visibleNamespaces
              );
            }
            if (needNamespaceDefine(node, isHTML, visibleNamespaces)) {
              var prefix = node["prefix"] || "";
              var uri = node["namespaceURI"];
              var ns = prefix ? " xmlns:" + prefix : " xmlns";
              buf["push"](ns, '="', uri, '"');
              visibleNamespaces["push"]({
                prefix: prefix,
                namespace: uri,
              });
            }
            if (
              child ||
              (isHTML &&
                !/^(?:meta|link|img|br|hr|input)$/i["test"](nodeName))
            ) {
              buf["push"](">");
              if (isHTML && /^script$/i["test"](nodeName)) {
                while (child) {
                  if (child["data"]) {
                    buf["push"](child["data"]);
                  } else {
                    serializeToString(
                      child,
                      buf,
                      isHTML,
                      nodeFilter,
                      visibleNamespaces
                    );
                  }
                  child = child["nextSibling"];
                }
              } else {
                while (child) {
                  serializeToString(
                    child,
                    buf,
                    isHTML,
                    nodeFilter,
                    visibleNamespaces
                  );
                  child = child["nextSibling"];
                }
              }
              buf["push"]("</", nodeName, ">");
            } else {
              buf["push"]("/>");
            }
            return;
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            var child = node["firstChild"];
            while (child) {
              serializeToString(
                child,
                buf,
                isHTML,
                nodeFilter,
                visibleNamespaces
              );
              child = child["nextSibling"];
            }
            return;
          case ATTRIBUTE_NODE:
            return buf["push"](
              " ",
              node["name"],
              '="',
              node["value"]["replace"](/[<&"]/g, _xmlEncoder),
              '"'
            );
          case TEXT_NODE:
            return buf["push"](
              node["data"]["replace"](/[<&]/g, _xmlEncoder)
            );
          case CDATA_SECTION_NODE:
            return buf["push"](
              "<![CDATA[",
              node["data"],
              "]]>"
            );
          case COMMENT_NODE:
            return buf["push"](
              "\x3c!--",
              node["data"],
              "--\x3e"
            );
          case DOCUMENT_TYPE_NODE:
            var pubid = node["publicId"];
            var sysid = node["systemId"];
            buf["push"]("<!DOCTYPE ", node["name"]);
            if (pubid) {
              buf["push"](' PUBLIC "', pubid);
              if (sysid && sysid != ".") {
                buf["push"]('" "', sysid);
              }
              buf["push"]('">');
            } else if (sysid && sysid != ".") {
              buf["push"](' SYSTEM "', sysid, '">');
            } else {
              var sub = node["internalSubset"];
              if (sub) {
                buf["push"](" [", sub, "]");
              }
              buf["push"](">");
            }
            return;
          case PROCESSING_INSTRUCTION_NODE:
            return buf["push"](
              "<?",
              node["target"],
              " ",
              node["data"],
              "?>"
            );
          case ENTITY_REFERENCE_NODE:
            return buf["push"](
              "&",
              node["nodeName"],
              ";"
            );
          default:
            buf["push"]("??", node["nodeName"]);
        }
      }
      function _importNode(doc, node, deep) {
        var node2;
        switch (node["nodeType"]) {
          case ELEMENT_NODE:
            node2 = node["cloneNode"](false);
            node2["ownerDocument"] = doc;
          case DOCUMENT_FRAGMENT_NODE:
            break;
          case ATTRIBUTE_NODE:
            deep = true;
            break;
        }
        if (!node2) {
          node2 = node["cloneNode"](false);
        }
        node2["ownerDocument"] = doc;
        node2["parentNode"] = null;
        if (deep) {
          var child = node["firstChild"];
          while (child) {
            node2["appendChild"](_importNode(doc, child, deep));
            child = child["nextSibling"];
          }
        }
        return node2;
      }
      function _cloneNode(doc, node, deep) {
        var node2 = new node["constructor"]();
        for (var n in node) {
          var v = node[n];
          if (typeof v != "object") {
            if (v != node2[n]) {
              node2[n] = v;
            }
          }
        }
        if (node["childNodes"]) {
          node2["childNodes"] = new NodeList();
        }
        node2["ownerDocument"] = doc;
        switch (node2["nodeType"]) {
          case ELEMENT_NODE:
            var attrs = node["attributes"];
            var attrs2 = (node2["attributes"] = new NamedNodeMap());
            var len = attrs["length"];
            attrs2["_ownerElement"] = node2;
            for (var i = 0; i < len; i++) {
              node2["setAttributeNode"](
                _cloneNode(doc, attrs["item"](i), true)
              );
            }
            break;
          case ATTRIBUTE_NODE:
            deep = true;
        }
        if (deep) {
          var child = node["firstChild"];
          while (child) {
            node2["appendChild"](_cloneNode(doc, child, deep));
            child = child["nextSibling"];
          }
        }
        return node2;
      }
      function __set__(object, key, value) {
        object[key] = value;
      }
      try {
        if (_defineProperty2["default"]) {
          var getTextContent = function getTextContent(node) {
            switch (node["nodeType"]) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                var buf = [];
                node = node["firstChild"];
                while (node) {
                  if (node["nodeType"] !== 7 && node["nodeType"] !== 8) {
                    buf["push"](getTextContent(node));
                  }
                  node = node["nextSibling"];
                }
                return buf["join"]("");
              default:
                return node["nodeValue"];
            }
          };
          Object["defineProperty"](LiveNodeList["prototype"], "length", {
            get: function get() {
              _updateLiveList(this);
              return this["$length"];
            },
          });
          Object["defineProperty"](Node["prototype"], "textContent", {
            get: function get() {
              return getTextContent(this);
            },
            set: function set(data) {
              switch (this["nodeType"]) {
                case ELEMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                  while (this["firstChild"]) {
                    this["removeChild"](this["firstChild"]);
                  }
                  if (data || String(data)) {
                    this["appendChild"](this["ownerDocument"]["createTextNode"](data));
                  }
                  break;
                default:
                  this["data"] = data;
                  this["value"] = data;
                  this["nodeValue"] = data;
              }
            },
          });
          __set__ = function __set__(object, key, value) {
            object["$" + key] = value;
          };
        }
      } catch (e) {}
      exports["DOMImplementation"] = DOMImplementation;
      exports["XMLSerializer"] = XMLSerializer;
    },
    function (module, exports) {
      var getRandomValues =
        (typeof crypto != "undefined" &&
          crypto["getRandomValues"] &&
          crypto["getRandomValues"]["bind"](crypto)) ||
        (typeof msCrypto != "undefined" &&
          typeof window["msCrypto"]["getRandomValues"] == "function" &&
          msCrypto["getRandomValues"]["bind"](msCrypto));
      if (getRandomValues) {
        var rnds8 = new Uint8Array(16);
        module["exports"] = function whatwgRNG() {
          getRandomValues(rnds8);
          return rnds8;
        };
      } else {
        var rnds = new Array(16);
        module["exports"] = function mathRNG() {
          for (var i = 0, r; i < 16; i++) {
            if ((i & 3) === 0) r = Math["random"]() * 4294967296;
            rnds[i] = (r >>> ((i & 3) << 3)) & 255;
          }
          return rnds;
        };
      }
    },
    function (module, exports) {
      var byteToHex = [];
      for (var i = 0; i < 256; ++i) {
        byteToHex[i] = (i + 256)["toString"](16)["substr"](1);
      }
      function bytesToUuid(buf, offset) {
        var i = offset || 0;
        var bth = byteToHex;
        return [
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          "-",
          bth[buf[i++]],
          bth[buf[i++]],
          "-",
          bth[buf[i++]],
          bth[buf[i++]],
          "-",
          bth[buf[i++]],
          bth[buf[i++]],
          "-",
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
        ]["join"]("");
      }
      module["exports"] = bytesToUuid;
    },
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      (function (factory) {
        var registeredInModuleLoader;
        if (true) {
          !((__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
          (__WEBPACK_AMD_DEFINE_RESULT__ =
            typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
              ? __WEBPACK_AMD_DEFINE_FACTORY__["call"](
                  exports,
                  __webpack_require__,
                  exports,
                  module
                )
              : __WEBPACK_AMD_DEFINE_FACTORY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
            (module["exports"] = __WEBPACK_AMD_DEFINE_RESULT__));
          registeredInModuleLoader = true;
        }
        if (true) {
          module["exports"] = factory();
          registeredInModuleLoader = true;
        }
        if (!registeredInModuleLoader) {
          var OldCookies = window["Cookies"];
          var api = (window["Cookies"] = factory());
          api["noConflict"] = function () {
            window["Cookies"] = OldCookies;
            return api;
          };
        }
      })(function () {
        function extend() {
          var i = 0;
          var result = {};
          for (; i < arguments["length"]; i++) {
            var attributes = arguments[i];
            for (var key in attributes) {
              result[key] = attributes[key];
            }
          }
          return result;
        }
        function decode(s) {
          return s["replace"](/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        function init(converter) {
          function api() {}
          function set(key, value, attributes) {
            if (typeof document === "undefined") {
              return;
            }
            attributes = extend(
              {
                path: "/",
              },
              api["defaults"],
              attributes
            );
            if (typeof attributes["expires"] === "number") {
              attributes["expires"] = new Date(
                new Date() * 1 + attributes["expires"] * 864e5
              );
            }
            attributes["expires"] = attributes["expires"]
              ? attributes["expires"]["toUTCString"]()
              : "";
            try {
              var result = JSON["stringify"](value);
              if (/^[\{\[]/["test"](result)) {
                value = result;
              }
            } catch (e) {}
            value = converter["write"]
              ? converter["write"](value, key)
              : encodeURIComponent(String(value))["replace"](
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                );
            key = encodeURIComponent(String(key))
              ["replace"](/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              ["replace"](/[\(\)]/g, escape);
            var stringifiedAttributes = "";
            for (var attributeName in attributes) {
              if (!attributes[attributeName]) {
                continue;
              }
              stringifiedAttributes += "; " + attributeName;
              if (attributes[attributeName] === true) {
                continue;
              }
              stringifiedAttributes +=
                "=" +
                attributes[attributeName]["split"](";")[0];
            }
            return (document["cookie"] =
              key + "=" + value + stringifiedAttributes);
          }
          function get(key, json) {
            if (typeof document === "undefined") {
              return;
            }
            var jar = {};
            var cookies = document["cookie"]
              ? document["cookie"]["split"]("; ")
              : [];
            var i = 0;
            for (; i < cookies["length"]; i++) {
              var parts = cookies[i]["split"]("=");
              var cookie = parts["slice"](1)["join"]("=");
              if (!json && cookie["charAt"](0) === '"') {
                cookie = cookie["slice"](1, -1);
              }
              try {
                var name = decode(parts[0]);
                cookie =
                  (converter["read"] || converter)(cookie, name) ||
                  decode(cookie);
                if (json) {
                  try {
                    cookie = JSON["parse"](cookie);
                  } catch (e) {}
                }
                jar[name] = cookie;
                if (key === name) {
                  break;
                }
              } catch (e) {}
            }
            return key ? jar[key] : jar;
          }
          api["set"] = set;
          api["get"] = function (key) {
            return get(key, false);
          };
          api["getJSON"] = function (key) {
            return get(key, true);
          };
          api["remove"] = function (key, attributes) {
            set(
              key,
              "",
              extend(attributes, {
                expires: -1,
              })
            );
          };
          api["defaults"] = {};
          api["withConverter"] = init;
          return api;
        }
        return init(function () {});
      });
    },
    function (module, exports, __webpack_require__) {
      var $keys = __webpack_require__(70);
      var hiddenKeys = __webpack_require__(49)["concat"](
        "length",
        "prototype"
      );
      exports["f"] =
        Object["getOwnPropertyNames"] ||
        function getOwnPropertyNames(O) {
          return $keys(O, hiddenKeys);
        };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _iterator = __webpack_require__(60);
      var _iterator2 = _interopRequireDefault(_iterator);
      var _symbol = __webpack_require__(62);
      var _symbol2 = _interopRequireDefault(_symbol);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      function _typeof(obj) {
        if (
          typeof _symbol2["default"] === "function" &&
          typeof _iterator2["default"] === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof _symbol2["default"] === "function" &&
              obj["constructor"] === _symbol2["default"] &&
              obj !== _symbol2["default"]["prototype"]
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }
      function isObject(obj) {
        return obj !== null && _typeof(obj) === "object";
      }
      module["exports"] = isObject;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(183),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _adTracker = __webpack_require__(65);
      var _adTracker2 = _interopRequireDefault(_adTracker);
      var _adInserter = __webpack_require__(196);
      var _adInserter2 = _interopRequireDefault(_adInserter);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      window["AdTracker"] = _adTracker2["default"];
      window["AdInserter"] = _adInserter2["default"];
    },
    function (module, exports, __webpack_require__) {
      var g =
        (function () {
          return this;
        })() || Function("return this")();
      var hadRuntime =
        g["regeneratorRuntime"] &&
        Object["getOwnPropertyNames"](g)["indexOf"]("regeneratorRuntime") >= 0;
      var oldRuntime = hadRuntime && g["regeneratorRuntime"];
      g["regeneratorRuntime"] = undefined;
      module["exports"] = __webpack_require__(102);
      if (hadRuntime) {
        g["regeneratorRuntime"] = oldRuntime;
      } else {
        try {
          delete g["regeneratorRuntime"];
        } catch (e) {
          g["regeneratorRuntime"] = undefined;
        }
      }
    },
    function (module, exports) {
      !(function (global) {
        "use strict";
        var Op = Object["prototype"];
        var hasOwn = Op["hasOwnProperty"];
        var undefined;
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol["iterator"] || "@@iterator";
        var asyncIteratorSymbol = $Symbol["asyncIterator"] || "@@asyncIterator";
        var toStringTagSymbol = $Symbol["toStringTag"] || "@@toStringTag";
        var inModule = typeof module === "object";
        var runtime = global["regeneratorRuntime"];
        if (runtime) {
          if (inModule) {
            module["exports"] = runtime;
          }
          return;
        }
        runtime = global["regeneratorRuntime"] = inModule ? module["exports"] : {};
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator =
            outerFn && outerFn["prototype"] instanceof Generator
              ? outerFn
              : Generator;
          var generator = Object["create"](protoGenerator["prototype"]);
          var context = new Context(tryLocsList || []);
          generator["_invoke"] = makeInvokeMethod(innerFn, self, context);
          return generator;
        }
        runtime["wrap"] = wrap;
        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn["call"](obj, arg),
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err,
            };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };
        var getProto = Object["getPrototypeOf"];
        var NativeIteratorPrototype =
          getProto && getProto(getProto(values([])));
        if (
          NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn["call"](NativeIteratorPrototype, iteratorSymbol)
        ) {
          IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = (GeneratorFunctionPrototype["prototype"] = Generator[
          "prototype"
        ] = Object["create"](IteratorPrototype));
        GeneratorFunction["prototype"] = Gp[
          "constructor"
        ] = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype["constructor"] = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction[
          "displayName"
        ] = "GeneratorFunction";
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"]["forEach"](function (
            method
          ) {
            prototype[method] = function (arg) {
              return this["_invoke"](method, arg);
            };
          });
        }
        runtime["isGeneratorFunction"] = function (genFun) {
          var ctor = typeof genFun === "function" && genFun["constructor"];
          return ctor
            ? ctor === GeneratorFunction ||
                (ctor["displayName"] || ctor["name"]) === "GeneratorFunction"
            : false;
        };
        runtime["mark"] = function (genFun) {
          if (Object["setPrototypeOf"]) {
            Object["setPrototypeOf"](genFun, GeneratorFunctionPrototype);
          } else {
            genFun["__proto__"] = GeneratorFunctionPrototype;
            if (!(toStringTagSymbol in genFun)) {
              genFun[toStringTagSymbol] = "GeneratorFunction";
            }
          }
          genFun["prototype"] = Object["create"](Gp);
          return genFun;
        };
        runtime["awrap"] = function (arg) {
          return {
            __await: arg,
          };
        };
        function AsyncIterator(generator) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record["type"] === "throw") {
              reject(record["arg"]);
            } else {
              var result = record["arg"];
              var value = result["value"];
              if (
                value &&
                typeof value === "object" &&
                hasOwn["call"](value, "__await")
              ) {
                return Promise["resolve"](value["__await"])["then"](
                  function (value) {
                    invoke("next", value, resolve, reject);
                  },
                  function (err) {
                    invoke("throw", err, resolve, reject);
                  }
                );
              }
              return Promise["resolve"](value)["then"](function (
                unwrapped
              ) {
                result["value"] = unwrapped;
                resolve(result);
              },
              reject);
            }
          }
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new Promise(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return (previousPromise = previousPromise
              ? previousPromise["then"](
                  callInvokeWithMethodAndArg,
                  callInvokeWithMethodAndArg
                )
              : callInvokeWithMethodAndArg());
          }
          this["_invoke"] = enqueue;
        }
        defineIteratorMethods(AsyncIterator["prototype"]);
        AsyncIterator["prototype"][asyncIteratorSymbol] = function () {
          return this;
        };
        runtime["AsyncIterator"] = AsyncIterator;
        runtime["async"] = function (innerFn, outerFn, self, tryLocsList) {
          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList)
          );
          return runtime["isGeneratorFunction"](outerFn)
            ? iter
            : iter["next"]()["then"](function (result) {
                return result["done"]
                  ? result["value"]
                  : iter["next"]();
              });
        };
        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }
            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }
              return doneResult();
            }
            context["method"] = method;
            context["arg"] = arg;
            while (true) {
              var delegate = context["delegate"];
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if (context["method"] === "next") {
                context["sent"] = context["_sent"] =
                  context["arg"];
              } else if (context["method"] === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context["arg"];
                }
                context["dispatchException"](context["arg"]);
              } else if (context["method"] === "return") {
                context["abrupt"]("return", context["arg"]);
              }
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);
              if (record["type"] === "normal") {
                state = context["done"]
                  ? GenStateCompleted
                  : GenStateSuspendedYield;
                if (record["arg"] === ContinueSentinel) {
                  continue;
                }
                return {
                  value: record["arg"],
                  done: context["done"],
                };
              } else if (record["type"] === "throw") {
                state = GenStateCompleted;
                context["method"] = "throw";
                context["arg"] = record["arg"];
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate["iterator"][context["method"]];
          if (method === undefined) {
            context["delegate"] = null;
            if (context["method"] === "throw") {
              if (delegate["iterator"]["return"]) {
                context["method"] = "return";
                context["arg"] = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context["method"] === "throw") {
                  return ContinueSentinel;
                }
              }
              context["method"] = "throw";
              context["arg"] = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
          }
          var record = tryCatch(
            method,
            delegate["iterator"],
            context["arg"]
          );
          if (record["type"] === "throw") {
            context["method"] = "throw";
            context["arg"] = record["arg"];
            context["delegate"] = null;
            return ContinueSentinel;
          }
          var info = record["arg"];
          if (!info) {
            context["method"] = "throw";
            context["arg"] = new TypeError("iterator result is not an object");
            context["delegate"] = null;
            return ContinueSentinel;
          }
          if (info["done"]) {
            context[delegate["resultName"]] = info["value"];
            context["next"] = delegate["nextLoc"];
            if (context["method"] !== "return") {
              context["method"] = "next";
              context["arg"] = undefined;
            }
          } else {
            return info;
          }
          context["delegate"] = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        Gp[toStringTagSymbol] = "Generator";
        Gp[iteratorSymbol] = function () {
          return this;
        };
        Gp["toString"] = function () {
          return "[object Generator]";
        };
        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0],
          };
          if (1 in locs) {
            entry["catchLoc"] = locs[1];
          }
          if (2 in locs) {
            entry["finallyLoc"] = locs[2];
            entry["afterLoc"] = locs[3];
          }
          this["tryEntries"]["push"](entry);
        }
        function resetTryEntry(entry) {
          var record = entry["completion"] || {};
          record["type"] = "normal";
          delete record["arg"];
          entry["completion"] = record;
        }
        function Context(tryLocsList) {
          this["tryEntries"] = [
            {
              tryLoc: "root",
            },
          ];
          tryLocsList["forEach"](pushTryEntry, this);
          this["reset"](true);
        }
        runtime["keys"] = function (object) {
          var keys = [];
          for (var key in object) {
            keys["push"](key);
          }
          keys["reverse"]();
          return function next() {
            while (keys["length"]) {
              var key = keys["pop"]();
              if (key in object) {
                next["value"] = key;
                next["done"] = false;
                return next;
              }
            }
            next["done"] = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod["call"](iterable);
            }
            if (typeof iterable["next"] === "function") {
              return iterable;
            }
            if (!isNaN(iterable["length"])) {
              var i = -1,
                next = function next() {
                  while (++i < iterable["length"]) {
                    if (hasOwn["call"](iterable, i)) {
                      next["value"] = iterable[i];
                      next["done"] = false;
                      return next;
                    }
                  }
                  next["value"] = undefined;
                  next["done"] = true;
                  return next;
                };
              return (next["next"] = next);
            }
          }
          return {
            next: doneResult,
          };
        }
        runtime["values"] = values;
        function doneResult() {
          return {
            value: undefined,
            done: true,
          };
        }
        Context["prototype"] = {
          constructor: Context,
          reset: function (skipTempReset) {
            this["prev"] = 0;
            this["next"] = 0;
            this["sent"] = this["_sent"] = undefined;
            this["done"] = false;
            this["delegate"] = null;
            this["method"] = "next";
            this["arg"] = undefined;
            this["tryEntries"]["forEach"](resetTryEntry);
            if (!skipTempReset) {
              for (var name in this) {
                if (
                  name["charAt"](0) === "t" &&
                  hasOwn["call"](this, name) &&
                  !isNaN(+name["slice"](1))
                ) {
                  this[name] = undefined;
                }
              }
            }
          },
          stop: function () {
            this["done"] = true;
            var rootEntry = this["tryEntries"][0];
            var rootRecord = rootEntry["completion"];
            if (rootRecord["type"] === "throw") {
              throw rootRecord["arg"];
            }
            return this["rval"];
          },
          dispatchException: function (exception) {
            if (this["done"]) {
              throw exception;
            }
            var context = this;
            function handle(loc, caught) {
              record["type"] = "throw";
              record["arg"] = exception;
              context["next"] = loc;
              if (caught) {
                context["method"] = "next";
                context["arg"] = undefined;
              }
              return !!caught;
            }
            for (var i = this["tryEntries"]["length"] - 1; i >= 0; --i) {
              var entry = this["tryEntries"][i];
              var record = entry["completion"];
              if (entry["tryLoc"] === "root") {
                return handle("end");
              }
              if (entry["tryLoc"] <= this["prev"]) {
                var hasCatch = hasOwn["call"](entry, "catchLoc");
                var hasFinally = hasOwn["call"](entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this["prev"] < entry["catchLoc"]) {
                    return handle(entry["catchLoc"], true);
                  } else if (this["prev"] < entry["finallyLoc"]) {
                    return handle(entry["finallyLoc"]);
                  }
                } else if (hasCatch) {
                  if (this["prev"] < entry["catchLoc"]) {
                    return handle(entry["catchLoc"], true);
                  }
                } else if (hasFinally) {
                  if (this["prev"] < entry["finallyLoc"]) {
                    return handle(entry["finallyLoc"]);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function (type, arg) {
            for (var i = this["tryEntries"]["length"] - 1; i >= 0; --i) {
              var entry = this["tryEntries"][i];
              if (
                entry["tryLoc"] <= this["prev"] &&
                hasOwn["call"](entry, "finallyLoc") &&
                this["prev"] < entry["finallyLoc"]
              ) {
                var finallyEntry = entry;
                break;
              }
            }
            if (
              finallyEntry &&
              (type === "break" || type === "continue") &&
              finallyEntry["tryLoc"] <= arg &&
              arg <= finallyEntry["finallyLoc"]
            ) {
              finallyEntry = null;
            }
            var record = finallyEntry ? finallyEntry["completion"] : {};
            record["type"] = type;
            record["arg"] = arg;
            if (finallyEntry) {
              this["method"] = "next";
              this["next"] = finallyEntry["finallyLoc"];
              return ContinueSentinel;
            }
            return this["complete"](record);
          },
          complete: function (record, afterLoc) {
            if (record["type"] === "throw") {
              throw record["arg"];
            }
            if (
              record["type"] === "break" ||
              record["type"] === "continue"
            ) {
              this["next"] = record["arg"];
            } else if (record["type"] === "return") {
              this["rval"] = this["arg"] = record["arg"];
              this["method"] = "return";
              this["next"] = "end";
            } else if (record["type"] === "normal" && afterLoc) {
              this["next"] = afterLoc;
            }
            return ContinueSentinel;
          },
          finish: function (finallyLoc) {
            for (var i = this["tryEntries"]["length"] - 1; i >= 0; --i) {
              var entry = this["tryEntries"][i];
              if (entry["finallyLoc"] === finallyLoc) {
                this["complete"](entry["completion"], entry["afterLoc"]);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          catch: function (tryLoc) {
            for (var i = this["tryEntries"]["length"] - 1; i >= 0; --i) {
              var entry = this["tryEntries"][i];
              if (entry["tryLoc"] === tryLoc) {
                var record = entry["completion"];
                if (record["type"] === "throw") {
                  var thrown = record["arg"];
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (iterable, resultName, nextLoc) {
            this["delegate"] = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc,
            };
            if (this["method"] === "next") {
              this["arg"] = undefined;
            }
            return ContinueSentinel;
          },
        };
      })(
        (function () {
          return this;
        })() || Function("return this")()
      );
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(66);
      __webpack_require__(18);
      __webpack_require__(34);
      __webpack_require__(113);
      __webpack_require__(121);
      __webpack_require__(122);
      module["exports"] = __webpack_require__(0)["Promise"];
    },
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(41);
      var defined = __webpack_require__(42);
      module["exports"] = function (TO_STRING) {
        return function (that, pos) {
          var s = String(defined(that));
          var i = toInteger(pos);
          var l = s["length"];
          var a, b;
          if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
          a = s["charCodeAt"](i);
          return a < 55296 ||
            a > 56319 ||
            i + 1 === l ||
            (b = s["charCodeAt"](i + 1)) < 56320 ||
            b > 57343
            ? TO_STRING
              ? s["charAt"](i)
              : a
            : TO_STRING
            ? s["slice"](i, i + 2)
            : ((a - 55296) << 10) + (b - 56320) + 65536;
        };
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var create = __webpack_require__(45);
      var descriptor = __webpack_require__(22);
      var setToStringTag = __webpack_require__(32);
      var IteratorPrototype = {};
      __webpack_require__(7)(
        IteratorPrototype,
        __webpack_require__(2)("iterator"),
        function () {
          return this;
        }
      );
      module["exports"] = function (Constructor, NAME, next) {
        Constructor["prototype"] = create(IteratorPrototype, {
          next: descriptor(1, next),
        });
        setToStringTag(Constructor, NAME + " Iterator");
      };
    },
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(4);
      var anObject = __webpack_require__(5);
      var getKeys = __webpack_require__(30);
      module["exports"] = __webpack_require__(6)
        ? Object["defineProperties"]
        : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys["length"];
            var i = 0;
            var P;
            while (length > i)
              dP["f"](O, (P = keys[i++]), Properties[P]);
            return O;
          };
    },
    function (module, exports, __webpack_require__) {
      var toIObject = __webpack_require__(12);
      var toLength = __webpack_require__(46);
      var toAbsoluteIndex = __webpack_require__(108);
      module["exports"] = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O["length"]);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value) return true;
            }
          else
            for (; length > index; index++)
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
          return !IS_INCLUDES && -1;
        };
      };
    },
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(41);
      var max = Math["max"];
      var min = Math["min"];
      module["exports"] = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
    },
    function (module, exports, __webpack_require__) {
      var has = __webpack_require__(9);
      var toObject = __webpack_require__(33);
      var IE_PROTO = __webpack_require__(47)("IE_PROTO");
      var ObjectProto = Object["prototype"];
      module["exports"] =
        Object["getPrototypeOf"] ||
        function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];
          if (
            typeof O["constructor"] == "function" &&
            O instanceof O["constructor"]
          ) {
            return O["constructor"]["prototype"];
          }
          return O instanceof Object ? ObjectProto : null;
        };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var addToUnscopables = __webpack_require__(111);
      var step = __webpack_require__(112);
      var Iterators = __webpack_require__(11);
      var toIObject = __webpack_require__(12);
      module["exports"] = __webpack_require__(67)(
        Array,
        "Array",
        function (iterated, kind) {
          this["_t"] = toIObject(iterated);
          this["_i"] = 0;
          this["_k"] = kind;
        },
        function () {
          var O = this["_t"];
          var kind = this["_k"];
          var index = this["_i"]++;
          if (!O || index >= O["length"]) {
            this["_t"] = undefined;
            return step(1);
          }
          if (kind == "keys") return step(0, index);
          if (kind == "values") return step(0, O[index]);
          return step(0, [index, O[index]]);
        },
        "values"
      );
      Iterators["Arguments"] = Iterators["Array"];
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
    },
    function (module, exports) {
      module["exports"] = function () {};
    },
    function (module, exports) {
      module["exports"] = function (done, value) {
        return {
          value: value,
          done: !!done,
        };
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var LIBRARY = __webpack_require__(19);
      var global = __webpack_require__(1);
      var ctx = __webpack_require__(20);
      var classof = __webpack_require__(50);
      var $export = __webpack_require__(3);
      var isObject = __webpack_require__(8);
      var aFunction = __webpack_require__(29);
      var anInstance = __webpack_require__(114);
      var forOf = __webpack_require__(115);
      var speciesConstructor = __webpack_require__(75);
      var task = __webpack_require__(76)["set"];
      var microtask = __webpack_require__(117)();
      var newPromiseCapabilityModule = __webpack_require__(52);
      var perform = __webpack_require__(77);
      var userAgent = __webpack_require__(118);
      var promiseResolve = __webpack_require__(78);
      var PROMISE = "Promise";
      var TypeError = global["TypeError"];
      var process = global["process"];
      var versions = process && process["versions"];
      var v8 = (versions && versions["v8"]) || "";
      var $Promise = global[PROMISE];
      var isNode = classof(process) == "process";
      var empty = function () {};
      var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
      var newPromiseCapability = (newGenericPromiseCapability =
        newPromiseCapabilityModule["f"]);
      var USE_NATIVE = !!(function () {
        try {
          var promise = $Promise["resolve"](1);
          var FakePromise = ((promise["constructor"] = {})[
            __webpack_require__(2)("species")
          ] = function (exec) {
            exec(empty, empty);
          });
          return (
            (isNode || typeof PromiseRejectionEvent == "function") &&
            promise["then"](empty) instanceof FakePromise &&
            v8["indexOf"]("6.6") !== 0 &&
            userAgent["indexOf"]("Chrome/66") === -1
          );
        } catch (e) {}
      })();
      var isThenable = function (it) {
        var then;
        return isObject(it) && typeof (then = it["then"]) == "function"
          ? then
          : false;
      };
      var notify = function (promise, isReject) {
        if (promise["_n"]) return;
        promise["_n"] = true;
        var chain = promise["_c"];
        microtask(function () {
          var value = promise["_v"];
          var ok = promise["_s"] == 1;
          var i = 0;
          var run = function (reaction) {
            var handler = ok ? reaction["ok"] : reaction["fail"];
            var resolve = reaction["resolve"];
            var reject = reaction["reject"];
            var domain = reaction["domain"];
            var result, then, exited;
            try {
              if (handler) {
                if (!ok) {
                  if (promise["_h"] == 2) onHandleUnhandled(promise);
                  promise["_h"] = 1;
                }
                if (handler === true) result = value;
                else {
                  if (domain) domain["enter"]();
                  result = handler(value);
                  if (domain) {
                    domain["exit"]();
                    exited = true;
                  }
                }
                if (result === reaction["promise"]) {
                  reject(TypeError("Promise-chain cycle"));
                } else if ((then = isThenable(result))) {
                  then["call"](result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (e) {
              if (domain && !exited) domain["exit"]();
              reject(e);
            }
          };
          while (chain["length"] > i) run(chain[i++]);
          promise["_c"] = [];
          promise["_n"] = false;
          if (isReject && !promise["_h"]) onUnhandled(promise);
        });
      };
      var onUnhandled = function (promise) {
        task["call"](global, function () {
          var value = promise["_v"];
          var unhandled = isUnhandled(promise);
          var result, handler, console;
          if (unhandled) {
            result = perform(function () {
              if (isNode) {
                process["emit"]("unhandledRejection", value, promise);
              } else if ((handler = global["onunhandledrejection"])) {
                handler({
                  promise: promise,
                  reason: value,
                });
              } else if (
                (console = global["console"]) &&
                console["error"]
              ) {
                console["error"]("Unhandled promise rejection", value);
              }
            });
            promise["_h"] = isNode || isUnhandled(promise) ? 2 : 1;
          }
          promise["_a"] = undefined;
          if (unhandled && result["e"]) throw result["v"];
        });
      };
      var isUnhandled = function (promise) {
        return (
          promise["_h"] !== 1 &&
          (promise["_a"] || promise["_c"])["length"] === 0
        );
      };
      var onHandleUnhandled = function (promise) {
        task["call"](global, function () {
          var handler;
          if (isNode) {
            process["emit"]("rejectionHandled", promise);
          } else if ((handler = global["onrejectionhandled"])) {
            handler({
              promise: promise,
              reason: promise["_v"],
            });
          }
        });
      };
      var $reject = function (value) {
        var promise = this;
        if (promise["_d"]) return;
        promise["_d"] = true;
        promise = promise["_w"] || promise;
        promise["_v"] = value;
        promise["_s"] = 2;
        if (!promise["_a"])
          promise["_a"] = promise["_c"]["slice"]();
        notify(promise, true);
      };
      var $resolve = function (value) {
        var promise = this;
        var then;
        if (promise["_d"]) return;
        promise["_d"] = true;
        promise = promise["_w"] || promise;
        try {
          if (promise === value) throw TypeError("Promise can't be resolved itself");
          if ((then = isThenable(value))) {
            microtask(function () {
              var wrapper = {
                _w: promise,
                _d: false,
              };
              try {
                then["call"](
                  value,
                  ctx($resolve, wrapper, 1),
                  ctx($reject, wrapper, 1)
                );
              } catch (e) {
                $reject["call"](wrapper, e);
              }
            });
          } else {
            promise["_v"] = value;
            promise["_s"] = 1;
            notify(promise, false);
          }
        } catch (e) {
          $reject["call"](
            {
              _w: promise,
              _d: false,
            },
            e
          );
        }
      };
      if (!USE_NATIVE) {
        $Promise = function Promise(executor) {
          anInstance(this, $Promise, PROMISE, "_h");
          aFunction(executor);
          Internal["call"](this);
          try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
          } catch (err) {
            $reject["call"](this, err);
          }
        };
        Internal = function Promise(executor) {
          this["_c"] = [];
          this["_a"] = undefined;
          this["_s"] = 0;
          this["_d"] = false;
          this["_v"] = undefined;
          this["_h"] = 0;
          this["_n"] = false;
        };
        Internal["prototype"] = __webpack_require__(119)(
          $Promise["prototype"],
          {
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(
                speciesConstructor(this, $Promise)
              );
              reaction["ok"] =
                typeof onFulfilled == "function" ? onFulfilled : true;
              reaction["fail"] =
                typeof onRejected == "function" && onRejected;
              reaction["domain"] = isNode
                ? process["domain"]
                : undefined;
              this["_c"]["push"](reaction);
              if (this["_a"])
                this["_a"]["push"](reaction);
              if (this["_s"]) notify(this, false);
              return reaction["promise"];
            },
            catch: function (onRejected) {
              return this["then"](undefined, onRejected);
            },
          }
        );
        OwnPromiseCapability = function () {
          var promise = new Internal();
          this["promise"] = promise;
          this["resolve"] = ctx($resolve, promise, 1);
          this["reject"] = ctx($reject, promise, 1);
        };
        newPromiseCapabilityModule[
          "f"
        ] = newPromiseCapability = function (C) {
          return C === $Promise || C === Wrapper
            ? new OwnPromiseCapability(C)
            : newGenericPromiseCapability(C);
        };
      }
      $export(
        $export["G"] +
          $export["W"] +
          $export["F"] * !USE_NATIVE,
        {
          Promise: $Promise,
        }
      );
      __webpack_require__(32)($Promise, PROMISE);
      __webpack_require__(120)(PROMISE);
      Wrapper = __webpack_require__(0)[PROMISE];
      $export(
        $export["S"] + $export["F"] * !USE_NATIVE,
        PROMISE,
        {
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            var $$reject = capability["reject"];
            $$reject(r);
            return capability["promise"];
          },
        }
      );
      $export(
        $export["S"] + $export["F"] * (LIBRARY || !USE_NATIVE),
        PROMISE,
        {
          resolve: function resolve(x) {
            return promiseResolve(
              LIBRARY && this === Wrapper ? $Promise : this,
              x
            );
          },
        }
      );
      $export(
        $export["S"] +
          $export["F"] *
            !(
              USE_NATIVE &&
              __webpack_require__(79)(function (iter) {
                $Promise["all"](iter)["catch"](empty);
              })
            ),
        PROMISE,
        {
          all: function all(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var resolve = capability["resolve"];
            var reject = capability["reject"];
            var result = perform(function () {
              var values = [];
              var index = 0;
              var remaining = 1;
              forOf(iterable, false, function (promise) {
                var $index = index++;
                var alreadyCalled = false;
                values["push"](undefined);
                remaining++;
                C["resolve"](promise)["then"](function (value) {
                  if (alreadyCalled) return;
                  alreadyCalled = true;
                  values[$index] = value;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (result["e"]) reject(result["v"]);
            return capability["promise"];
          },
          race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var reject = capability["reject"];
            var result = perform(function () {
              forOf(iterable, false, function (promise) {
                C["resolve"](promise)["then"](
                  capability["resolve"],
                  reject
                );
              });
            });
            if (result["e"]) reject(result["v"]);
            return capability["promise"];
          },
        }
      );
    },
    function (module, exports) {
      module["exports"] = function (it, Constructor, name, forbiddenField) {
        if (
          !(it instanceof Constructor) ||
          (forbiddenField !== undefined && forbiddenField in it)
        ) {
          throw TypeError(name + ": incorrect invocation!");
        }
        return it;
      };
    },
    function (module, exports, __webpack_require__) {
      var ctx = __webpack_require__(20);
      var call = __webpack_require__(73);
      var isArrayIter = __webpack_require__(74);
      var anObject = __webpack_require__(5);
      var toLength = __webpack_require__(46);
      var getIterFn = __webpack_require__(51);
      var BREAK = {};
      var RETURN = {};
      var exports = (module["exports"] = function (
        iterable,
        entries,
        fn,
        that,
        ITERATOR
      ) {
        var iterFn = ITERATOR
          ? function () {
              return iterable;
            }
          : getIterFn(iterable);
        var f = ctx(fn, that, entries ? 2 : 1);
        var index = 0;
        var length, step, iterator, result;
        if (typeof iterFn != "function")
          throw TypeError(iterable + " is not iterable!");
        if (isArrayIter(iterFn))
          for (
            length = toLength(iterable["length"]);
            length > index;
            index++
          ) {
            result = entries
              ? f(anObject((step = iterable[index]))[0], step[1])
              : f(iterable[index]);
            if (result === BREAK || result === RETURN) return result;
          }
        else
          for (
            iterator = iterFn["call"](iterable);
            !(step = iterator["next"]())["done"];

          ) {
            result = call(iterator, f, step["value"], entries);
            if (result === BREAK || result === RETURN) return result;
          }
      });
      exports["BREAK"] = BREAK;
      exports["RETURN"] = RETURN;
    },
    function (module, exports) {
      module["exports"] = function (fn, args, that) {
        var un = that === undefined;
        switch (args["length"]) {
          case 0:
            return un ? fn() : fn["call"](that);
          case 1:
            return un ? fn(args[0]) : fn["call"](that, args[0]);
          case 2:
            return un
              ? fn(args[0], args[1])
              : fn["call"](that, args[0], args[1]);
          case 3:
            return un
              ? fn(args[0], args[1], args[2])
              : fn["call"](that, args[0], args[1], args[2]);
          case 4:
            return un
              ? fn(args[0], args[1], args[2], args[3])
              : fn["call"](that, args[0], args[1], args[2], args[3]);
        }
        return fn["apply"](that, args);
      };
    },
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);
      var macrotask = __webpack_require__(76)["set"];
      var Observer = global["MutationObserver"] || global["WebKitMutationObserver"];
      var process = global["process"];
      var Promise = global["Promise"];
      var isNode = __webpack_require__(23)(process) == "process";
      module["exports"] = function () {
        var head, last, notify;
        var flush = function () {
          var parent, fn;
          if (isNode && (parent = process["domain"]))
            parent["exit"]();
          while (head) {
            fn = head["fn"];
            head = head["next"];
            try {
              fn();
            } catch (e) {
              if (head) notify();
              else last = undefined;
              throw e;
            }
          }
          last = undefined;
          if (parent) parent["enter"]();
        };
        if (isNode) {
          notify = function () {
            process["nextTick"](flush);
          };
        } else if (
          Observer &&
          !(global["navigator"] && global["navigator"]["standalone"])
        ) {
          var toggle = true;
          var node = document["createTextNode"]("");
          new Observer(flush)["observe"](node, {
            characterData: true,
          });
          notify = function () {
            node["data"] = toggle = !toggle;
          };
        } else if (Promise && Promise["resolve"]) {
          var promise = Promise["resolve"](undefined);
          notify = function () {
            promise["then"](flush);
          };
        } else {
          notify = function () {
            macrotask["call"](global, flush);
          };
        }
        return function (fn) {
          var task = {
            fn: fn,
            next: undefined,
          };
          if (last) last["next"] = task;
          if (!head) {
            head = task;
            notify();
          }
          last = task;
        };
      };
    },
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);
      var navigator = global["navigator"];
      module["exports"] =
        (navigator && navigator["userAgent"]) || "";
    },
    function (module, exports, __webpack_require__) {
      var hide = __webpack_require__(7);
      module["exports"] = function (target, src, safe) {
        for (var key in src) {
          if (safe && target[key]) target[key] = src[key];
          else hide(target, key, src[key]);
        }
        return target;
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var global = __webpack_require__(1);
      var core = __webpack_require__(0);
      var dP = __webpack_require__(4);
      var DESCRIPTORS = __webpack_require__(6);
      var SPECIES = __webpack_require__(2)("species");
      module["exports"] = function (KEY) {
        var C = typeof core[KEY] == "function" ? core[KEY] : global[KEY];
        if (DESCRIPTORS && C && !C[SPECIES])
          dP["f"](C, SPECIES, {
            configurable: true,
            get: function () {
              return this;
            },
          });
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var $export = __webpack_require__(3);
      var core = __webpack_require__(0);
      var global = __webpack_require__(1);
      var speciesConstructor = __webpack_require__(75);
      var promiseResolve = __webpack_require__(78);
      $export($export["P"] + $export["R"], "Promise", {
        finally: function (onFinally) {
          var C = speciesConstructor(
            this,
            core["Promise"] || global["Promise"]
          );
          var isFunction = typeof onFinally == "function";
          return this["then"](
            isFunction
              ? function (x) {
                  return promiseResolve(C, onFinally())["then"](
                    function () {
                      return x;
                    }
                  );
                }
              : onFinally,
            isFunction
              ? function (e) {
                  return promiseResolve(C, onFinally())["then"](
                    function () {
                      throw e;
                    }
                  );
                }
              : onFinally
          );
        },
      });
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var $export = __webpack_require__(3);
      var newPromiseCapability = __webpack_require__(52);
      var perform = __webpack_require__(77);
      $export($export["S"], "Promise", {
        try: function (callbackfn) {
          var promiseCapability = newPromiseCapability["f"](this);
          var result = perform(callbackfn);
          (result["e"]
            ? promiseCapability["reject"]
            : promiseCapability["resolve"])(result["v"]);
          return promiseCapability["promise"];
        },
      });
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(124);
      var $Object = __webpack_require__(0)["Object"];
      module["exports"] = function defineProperty(it, key, desc) {
        return $Object["defineProperty"](it, key, desc);
      };
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(3);
      $export(
        $export["S"] + $export["F"] * !__webpack_require__(6),
        "Object",
        {
          defineProperty: __webpack_require__(4)["f"],
        }
      );
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _from = __webpack_require__(126);
      var _from2 = _interopRequireDefault(_from);
      var _defineProperty = __webpack_require__(152);
      var _defineProperty2 = _interopRequireDefault(_defineProperty);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var classCallCheck = function classCallCheck(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        createClass = (function () {
          function e(e, t) {
            for (var a = 0; a < t["length"]; a++) {
              var r = t[a];
              (r["enumerable"] = r["enumerable"] || !1),
                (r["configurable"] = !0),
                "value" in r && (r["writable"] = !0),
                (0, _defineProperty2["default"])(e, r["key"], r);
            }
          }
          return function (t, a, r) {
            return a && e(t["prototype"], a), r && e(t, r), t;
          };
        })(),
        toConsumableArray = function toConsumableArray(e) {
          if (Array["isArray"](e)) {
            for (
              var t = 0, a = Array(e["length"]);
              t < e["length"];
              t++
            ) {
              a[t] = e[t];
            }
            return a;
          }
          return (0, _from2["default"])(e);
        },
        VMAPAdSource = function e(t) {
          for (var a in (classCallCheck(this, e),
          (this["id"] = t["getAttribute"]("id")),
          (this["allowMultipleAds"] = t["getAttribute"]("allowMultipleAds")),
          (this["followRedirects"] = t["getAttribute"]("followRedirects")),
          (this["vastAdData"] = null),
          (this["adTagURI"] = null),
          (this["customData"] = null),
          t["childNodes"])) {
            var r = t["childNodes"][a];
            switch (r["localName"]) {
              case "AdTagURI":
                this["adTagURI"] = {
                  templateType: r["getAttribute"]("templateType"),
                  uri: (r["textContent"] || r["text"] || "")[
                    "trim"
                  ](),
                };
                break;
              case "VASTAdData":
                for (
                  this["vastAdData"] = r["firstChild"];
                  this["vastAdData"] && 1 !== this["vastAdData"]["nodeType"];

                ) {
                  this["vastAdData"] = this["vastAdData"]["nextSibling"];
                }
                break;
              case "CustomAdData":
                this["customData"] = r;
            }
          }
        };
      function childrenByName(e, t) {
        return []
          ["concat"](toConsumableArray(e["childNodes"]))
          ["filter"](function (e) {
            return (
              e["nodeName"] === t ||
              t === "vmap:" + e["nodeName"] ||
              e["nodeName"] === "vmap:" + t
            );
          });
      }
      function parseNodeValue(e) {
        var t =
          e &&
          e["childNodes"] &&
          []["concat"](toConsumableArray(e["childNodes"]));
        if (!t) return {};
        var a = t["filter"](function (e) {
          return "#cdata-section" === e["nodeName"];
        });
        if (a && a["length"] > 0)
          try {
            return JSON["parse"](a[0]["data"]);
          } catch (e) {}
        return t["reduce"](function (e, t) {
          var a = "";
          switch (t["nodeName"]) {
            case "#text":
              a = t["textContent"]["trim"]();
              break;
            case "#cdata-section":
              a = t["data"];
          }
          return e + a;
        }, "");
      }
      function parseXMLNode(e) {
        var t = {
          attributes: {},
          children: {},
          value: {},
        };
        return (
          (t["value"] = parseNodeValue(e)),
          e["attributes"] &&
            []
              ["concat"](toConsumableArray(e["attributes"]))
              ["forEach"](function (e) {
                e["nodeName"] &&
                  void 0 !== e["nodeValue"] &&
                  null !== e["nodeValue"] &&
                  (t["attributes"][e["nodeName"]] = e["nodeValue"]);
              }),
          e["childNodes"] &&
            []
              ["concat"](toConsumableArray(e["childNodes"]))
              ["filter"](function (e) {
                return "#" !== e["nodeName"]["substring"](0, 1);
              })
              ["forEach"](function (e) {
                t["children"][e["nodeName"]] = parseXMLNode(e);
              }),
          t
        );
      }
      var VMAPAdBreak = (function () {
          function e(t) {
            for (var a in (classCallCheck(this, e),
            (this["timeOffset"] = t["getAttribute"]("timeOffset")),
            (this["breakType"] = t["getAttribute"]("breakType")),
            (this["breakId"] = t["getAttribute"]("breakId")),
            (this["repeatAfter"] = t["getAttribute"]("repeatAfter")),
            (this["adSource"] = null),
            (this["trackingEvents"] = []),
            (this["extensions"] = []),
            t["childNodes"])) {
              var r = t["childNodes"][a];
              switch (r["localName"]) {
                case "AdSource":
                  this["adSource"] = new VMAPAdSource(r);
                  break;
                case "TrackingEvents":
                  for (var n in r["childNodes"]) {
                    var i = r["childNodes"][n];
                    "Tracking" === i["localName"] &&
                      this["trackingEvents"]["push"]({
                        event: i["getAttribute"]("event"),
                        uri: (i["textContent"] ||
                          i["text"] ||
                          "")["trim"](),
                      });
                  }
                  break;
                case "Extensions":
                  this["extensions"] = childrenByName(r, "Extension")[
                    "map"
                  ](function (e) {
                    return parseXMLNode(e);
                  });
              }
            }
          }
          return (
            createClass(e, [
              {
                key: "track",
                value: function value(e, t) {
                  for (var a in this["trackingEvents"]) {
                    var r = this["trackingEvents"][a];
                    if (r["event"] === e) {
                      var n = r["uri"];
                      "error" === r["event"] &&
                        (n = n["replace"]("[ERRORCODE]", t)),
                        this["tracker"](n);
                    }
                  }
                },
              },
              {
                key: "tracker",
                value: function value(e) {
                  "undefined" != typeof window &&
                    null !== window &&
                    (new Image()["src"] = e);
                },
              },
            ]),
            e
          );
        })(),
        VMAP = function e(t) {
          if (
            (classCallCheck(this, e),
            !t ||
              !t["documentElement"] ||
              "VMAP" !== t["documentElement"]["localName"])
          )
            throw new Error("Not a VMAP document");
          for (var a in ((this["version"] = t["documentElement"]["getAttribute"](
            "version"
          )),
          (this["adBreaks"] = []),
          (this["extensions"] = []),
          t["documentElement"]["childNodes"])) {
            var r = t["documentElement"]["childNodes"][a];
            switch (r["localName"]) {
              case "AdBreak":
                this["adBreaks"]["push"](new VMAPAdBreak(r));
                break;
              case "Extensions":
                this["extensions"] = childrenByName(r, "Extension")[
                  "map"
                ](function (e) {
                  return parseXMLNode(e);
                });
            }
          }
        };
      module["exports"] = VMAP;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(127),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(128);
      __webpack_require__(145);
      module["exports"] = __webpack_require__(25)["Array"]["from"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var $at = __webpack_require__(129)(true);
      __webpack_require__(130)(
        String,
        "String",
        function (iterated) {
          this["_t"] = String(iterated);
          this["_i"] = 0;
        },
        function () {
          var O = this["_t"];
          var index = this["_i"];
          var point;
          if (index >= O["length"])
            return {
              value: undefined,
              done: true,
            };
          point = $at(O, index);
          this["_i"] += point["length"];
          return {
            value: point,
            done: false,
          };
        }
      );
    },
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(53);
      var defined = __webpack_require__(54);
      module["exports"] = function (TO_STRING) {
        return function (that, pos) {
          var s = String(defined(that));
          var i = toInteger(pos);
          var l = s["length"];
          var a, b;
          if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
          a = s["charCodeAt"](i);
          return a < 55296 ||
            a > 56319 ||
            i + 1 === l ||
            (b = s["charCodeAt"](i + 1)) < 56320 ||
            b > 57343
            ? TO_STRING
              ? s["charAt"](i)
              : a
            : TO_STRING
            ? s["slice"](i, i + 2)
            : ((a - 55296) << 10) + (b - 56320) + 65536;
        };
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var LIBRARY = __webpack_require__(81);
      var $export = __webpack_require__(55);
      var redefine = __webpack_require__(134);
      var hide = __webpack_require__(35);
      var Iterators = __webpack_require__(58);
      var $iterCreate = __webpack_require__(135);
      var setToStringTag = __webpack_require__(91);
      var getPrototypeOf = __webpack_require__(144);
      var ITERATOR = __webpack_require__(10)("iterator");
      var BUGGY = !([]["keys"] && "next" in []["keys"]());
      var FF_ITERATOR = "@@iterator";
      var KEYS = "keys";
      var VALUES = "values";
      var returnThis = function () {
        return this;
      };
      module["exports"] = function (
        Base,
        NAME,
        Constructor,
        next,
        DEFAULT,
        IS_SET,
        FORCED
      ) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function (kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }
          return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME + " Iterator";
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base["prototype"];
        var $native =
          proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT
          ? !DEF_VALUES
            ? $default
            : getMethod("entries")
          : undefined;
        var $anyNative =
          NAME == "Array" ? proto["entries"] || $native : $native;
        var methods, key, IteratorPrototype;
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf(
            $anyNative["call"](new Base())
          );
          if (
            IteratorPrototype !== Object["prototype"] &&
            IteratorPrototype["next"]
          ) {
            setToStringTag(IteratorPrototype, TAG, true);
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
              hide(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        if (DEF_VALUES && $native && $native["name"] !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native["call"](this);
          };
        }
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries,
          };
          if (FORCED)
            for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            }
          else
            $export(
              $export["P"] +
                $export["F"] * (BUGGY || VALUES_BUG),
              NAME,
              methods
            );
        }
        return methods;
      };
    },
    function (module, exports) {
      module["exports"] = function (it) {
        if (typeof it != "function") throw TypeError(it + " is not a function!");
        return it;
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] =
        !__webpack_require__(27) &&
        !__webpack_require__(83)(function () {
          return (
            Object["defineProperty"](
              __webpack_require__(84)("div"),
              "a",
              {
                get: function () {
                  return 7;
                },
              }
            )["a"] != 7
          );
        });
    },
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(56);
      module["exports"] = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (
          S &&
          typeof (fn = it["toString"]) == "function" &&
          !isObject((val = fn["call"](it)))
        )
          return val;
        if (
          typeof (fn = it["valueOf"]) == "function" &&
          !isObject((val = fn["call"](it)))
        )
          return val;
        if (
          !S &&
          typeof (fn = it["toString"]) == "function" &&
          !isObject((val = fn["call"](it)))
        )
          return val;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = __webpack_require__(35);
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var create = __webpack_require__(136);
      var descriptor = __webpack_require__(57);
      var setToStringTag = __webpack_require__(91);
      var IteratorPrototype = {};
      __webpack_require__(35)(
        IteratorPrototype,
        __webpack_require__(10)("iterator"),
        function () {
          return this;
        }
      );
      module["exports"] = function (Constructor, NAME, next) {
        Constructor["prototype"] = create(IteratorPrototype, {
          next: descriptor(1, next),
        });
        setToStringTag(Constructor, NAME + " Iterator");
      };
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(36);
      var dPs = __webpack_require__(137);
      var enumBugKeys = __webpack_require__(90);
      var IE_PROTO = __webpack_require__(59)("IE_PROTO");
      var Empty = function () {};
      var PROTOTYPE = "prototype";
      var createDict = function () {
        var iframe = __webpack_require__(84)("iframe");
        var i = enumBugKeys["length"];
        var lt = "<";
        var gt = ">";
        var iframeDocument;
        iframe["style"]["display"] = "none";
        __webpack_require__(143)["appendChild"](iframe);
        iframe["src"] = "javascript:";
        iframeDocument = iframe["contentWindow"]["document"];
        iframeDocument["open"]();
        iframeDocument["write"](
          lt + "script" + gt + "document.F=Object" + lt + "/script" + gt
        );
        iframeDocument["close"]();
        createDict = iframeDocument["F"];
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };
      module["exports"] =
        Object["create"] ||
        function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else result = createDict();
          return Properties === undefined ? result : dPs(result, Properties);
        };
    },
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(26);
      var anObject = __webpack_require__(36);
      var getKeys = __webpack_require__(138);
      module["exports"] = __webpack_require__(27)
        ? Object["defineProperties"]
        : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys["length"];
            var i = 0;
            var P;
            while (length > i)
              dP["f"](O, (P = keys[i++]), Properties[P]);
            return O;
          };
    },
    function (module, exports, __webpack_require__) {
      var $keys = __webpack_require__(139);
      var enumBugKeys = __webpack_require__(90);
      module["exports"] =
        Object["keys"] ||
        function keys(O) {
          return $keys(O, enumBugKeys);
        };
    },
    function (module, exports, __webpack_require__) {
      var has = __webpack_require__(37);
      var toIObject = __webpack_require__(85);
      var arrayIndexOf = __webpack_require__(141)(false);
      var IE_PROTO = __webpack_require__(59)("IE_PROTO");
      module["exports"] = function (object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          if (key != IE_PROTO) has(O, key) && result["push"](key);
        while (names["length"] > i)
          if (has(O, (key = names[i++]))) {
            ~arrayIndexOf(result, key) || result["push"](key);
          }
        return result;
      };
    },
    function (module, exports, __webpack_require__) {
      var cof = __webpack_require__(86);
      module["exports"] = Object("z")["propertyIsEnumerable"](0)
        ? Object
        : function (it) {
            return cof(it) == "String"
              ? it["split"]("")
              : Object(it);
          };
    },
    function (module, exports, __webpack_require__) {
      var toIObject = __webpack_require__(85);
      var toLength = __webpack_require__(87);
      var toAbsoluteIndex = __webpack_require__(142);
      module["exports"] = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O["length"]);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value) return true;
            }
          else
            for (; length > index; index++)
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
          return !IS_INCLUDES && -1;
        };
      };
    },
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(53);
      var max = Math["max"];
      var min = Math["min"];
      module["exports"] = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
    },
    function (module, exports, __webpack_require__) {
      var document = __webpack_require__(24)["document"];
      module["exports"] = document && document["documentElement"];
    },
    function (module, exports, __webpack_require__) {
      var has = __webpack_require__(37);
      var toObject = __webpack_require__(92);
      var IE_PROTO = __webpack_require__(59)("IE_PROTO");
      var ObjectProto = Object["prototype"];
      module["exports"] =
        Object["getPrototypeOf"] ||
        function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];
          if (
            typeof O["constructor"] == "function" &&
            O instanceof O["constructor"]
          ) {
            return O["constructor"]["prototype"];
          }
          return O instanceof Object ? ObjectProto : null;
        };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var ctx = __webpack_require__(82);
      var $export = __webpack_require__(55);
      var toObject = __webpack_require__(92);
      var call = __webpack_require__(146);
      var isArrayIter = __webpack_require__(147);
      var toLength = __webpack_require__(87);
      var createProperty = __webpack_require__(148);
      var getIterFn = __webpack_require__(149);
      $export(
        $export["S"] +
          $export["F"] *
            !__webpack_require__(151)(function (iter) {
              Array["from"](iter);
            }),
        "Array",
        {
          from: function from(arrayLike) {
            var O = toObject(arrayLike);
            var C = typeof this == "function" ? this : Array;
            var aLen = arguments["length"];
            var mapfn = aLen > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var index = 0;
            var iterFn = getIterFn(O);
            var length, result, step, iterator;
            if (mapping)
              mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
            if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
              for (
                iterator = iterFn["call"](O), result = new C();
                !(step = iterator["next"]())["done"];
                index++
              ) {
                createProperty(
                  result,
                  index,
                  mapping
                    ? call(iterator, mapfn, [step["value"], index], true)
                    : step["value"]
                );
              }
            } else {
              length = toLength(O["length"]);
              for (result = new C(length); length > index; index++) {
                createProperty(
                  result,
                  index,
                  mapping ? mapfn(O[index], index) : O[index]
                );
              }
            }
            result["length"] = index;
            return result;
          },
        }
      );
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(36);
      module["exports"] = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (e) {
          var ret = iterator["return"];
          if (ret !== undefined) anObject(ret["call"](iterator));
          throw e;
        }
      };
    },
    function (module, exports, __webpack_require__) {
      var Iterators = __webpack_require__(58);
      var ITERATOR = __webpack_require__(10)("iterator");
      var ArrayProto = Array["prototype"];
      module["exports"] = function (it) {
        return (
          it !== undefined &&
          (Iterators["Array"] === it || ArrayProto[ITERATOR] === it)
        );
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var $defineProperty = __webpack_require__(26);
      var createDesc = __webpack_require__(57);
      module["exports"] = function (object, index, value) {
        if (index in object)
          $defineProperty["f"](object, index, createDesc(0, value));
        else object[index] = value;
      };
    },
    function (module, exports, __webpack_require__) {
      var classof = __webpack_require__(150);
      var ITERATOR = __webpack_require__(10)("iterator");
      var Iterators = __webpack_require__(58);
      module["exports"] = __webpack_require__(25)["getIteratorMethod"] = function (
        it
      ) {
        if (it != undefined)
          return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
      };
    },
    function (module, exports, __webpack_require__) {
      var cof = __webpack_require__(86);
      var TAG = __webpack_require__(10)("toStringTag");
      var ARG =
        cof(
          (function () {
            return arguments;
          })()
        ) == "Arguments";
      var tryGet = function (it, key) {
        try {
          return it[key];
        } catch (e) {}
      };
      module["exports"] = function (it) {
        var O, T, B;
        return it === undefined
          ? "Undefined"
          : it === null
          ? "Null"
          : typeof (T = tryGet((O = Object(it)), TAG)) == "string"
          ? T
          : ARG
          ? cof(O)
          : (B = cof(O)) == "Object" &&
            typeof O["callee"] == "function"
          ? "Arguments"
          : B;
      };
    },
    function (module, exports, __webpack_require__) {
      var ITERATOR = __webpack_require__(10)("iterator");
      var SAFE_CLOSING = false;
      try {
        var riter = [7][ITERATOR]();
        riter["return"] = function () {
          SAFE_CLOSING = true;
        };
        Array["from"](riter, function () {
          throw 2;
        });
      } catch (e) {}
      module["exports"] = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;
        try {
          var arr = [7];
          var iter = arr[ITERATOR]();
          iter["next"] = function () {
            return {
              done: (safe = true),
            };
          };
          arr[ITERATOR] = function () {
            return iter;
          };
          exec(arr);
        } catch (e) {}
        return safe;
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(153),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(154);
      var $Object = __webpack_require__(25)["Object"];
      module["exports"] = function defineProperty(it, key, desc) {
        return $Object["defineProperty"](it, key, desc);
      };
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(55);
      $export(
        $export["S"] + $export["F"] * !__webpack_require__(27),
        "Object",
        {
          defineProperty: __webpack_require__(26)["f"],
        }
      );
    },
    function (module, exports, __webpack_require__) {
      !(function (e, t) {
        true
          ? t(exports)
          : "function" == typeof define && define["amd"]
          ? define(["exports"], t)
          : t(((e = e || self)["VAST"] = {}));
      })(this, function (e) {
        "use strict";
        function r(e) {
          return (r =
            "function" == typeof Symbol &&
            "symbol" == typeof Symbol["iterator"]
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e["constructor"] === Symbol &&
                    e !== Symbol["prototype"]
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function l(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
          for (var r = 0; r < t["length"]; r++) {
            var i = t[r];
            (i["enumerable"] = i["enumerable"] || !1),
              (i["configurable"] = !0),
              "value" in i && (i["writable"] = !0),
              Object["defineProperty"](e, i["key"], i);
          }
        }
        function n(e, t, r) {
          return t && i(e["prototype"], t), r && i(e, r), e;
        }
        function a(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
          (e["prototype"] = Object["create"](t && t["prototype"], {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0,
            },
          })),
            t && s(e, t);
        }
        function u(e) {
          return (u = Object["setPrototypeOf"]
            ? Object["getPrototypeOf"]
            : function (e) {
                return e["__proto__"] || Object["getPrototypeOf"](e);
              })(e);
        }
        function s(e, t) {
          return (s =
            Object["setPrototypeOf"] ||
            function (e, t) {
              return (e["__proto__"] = t), e;
            })(e, t);
        }
        function c(e, t) {
          return !t || ("object" != typeof t && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
              })(e)
            : t;
        }
        function p() {
          var e =
            0 < arguments["length"] && void 0 !== arguments[0]
              ? arguments[0]
              : {};
          return {
            id: e["id"] || null,
            adId: e["adId"] || null,
            sequence: e["sequence"] || null,
            apiFramework: e["apiFramework"] || null,
            universalAdId: {
              value: null,
              idRegistry: "unknown",
            },
            creativeExtensions: [],
          };
        }
        var o = [
          "CONTENTPLAYHEAD",
          "ADPLAYHEAD",
          "MEDIAPLAYHEAD",
          "ADPLAYHEAD",
          "ASSETURI",
          "PODSEQUENCE",
          "UNIVERSALADID",
          "CONTENTURI",
          "CONTENTID",
          "VERIFICATIONVENDORS",
          "EXTENSIONS",
          "DEVICEIP",
          "SERVERSIDE",
          "CLIENTUA",
          "SERVERUA",
          "DEVICEUA",
          "TRANSACTIONID",
          "ADCOUNT",
          "BREAKPOSITION",
          "PLACEMENTTYPE",
          "IFA",
          "IFATYPE",
          "LATLONG",
          "DOMAIN",
          "PAGEURL",
          "APPBUNDLE",
          "VASTVERSIONS",
          "APIFRAMEWORKS",
          "MEDIAMIME",
          "PLAYERCAPABILITIES",
          "CLICKTYPE",
          "PLAYERSTATE",
          "INVENTORYSTATE",
          "CLICKPOS",
          "PLAYERSIZE",
          "LIMITADTRACKING",
          "REGULATIONS",
          "GDPRCONSENT",
          "BLOCKEDADCATEGORIES",
          "ADCATEGORIES",
          "ADTYPE",
          "ADSERVINGID",
        ];
        function d(e) {
          var t =
              1 < arguments["length"] && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r =
              2 < arguments["length"] && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = [],
            n = m(e);
          for (var a in (!t["ERRORCODE"] ||
            r["isCustomCode"] ||
            /^[0-9]{3}$/["test"](t["ERRORCODE"]) ||
            (t["ERRORCODE"] = 900),
          (t["CACHEBUSTING"] = y(
            Math["round"](1e8 * Math["random"]())["toString"]()
          )),
          (t["TIMESTAMP"] = new Date()["toISOString"]()),
          (t["RANDOM"] = t["random"] = t["CACHEBUSTING"]),
          t))
            t[a] = T(t[a]);
          for (var s in n) {
            var o = n[s];
            "string" == typeof o && i["push"](h(o, t));
          }
          return i;
        }
        function h(e, t) {
          var r = (e = v(e, t))["match"](/[^[\]]+(?=])/g);
          if (!r) return e;
          var i = r["filter"](function (e) {
            return -1 < o["indexOf"](e);
          });
          return 0 === i["length"]
            ? e
            : v(
                e,
                (i = i["reduce"](function (e, t) {
                  return (e[t] = -1), e;
                }, {}))
              );
        }
        function v(e, t) {
          var r = e;
          for (var i in t) {
            var n = t[i];
            r = r["replace"](
              new RegExp(
                "(?:\\[|%%)("["concat"](i, ")(?:\\]|%%)"),
                "g"
              ),
              n
            );
          }
          return r;
        }
        function m(e) {
          return Array["isArray"](e)
            ? e["map"](function (e) {
                return e && e["hasOwnProperty"]("url") ? e["url"] : e;
              })
            : e;
        }
        function f(e, t) {
          for (var r = 0; r < t["length"]; r++) if (g(t[r], e)) return !0;
          return !1;
        }
        function g(e, t) {
          if (e && t) {
            var r = Object["getOwnPropertyNames"](e),
              i = Object["getOwnPropertyNames"](t);
            return (
              r["length"] === i["length"] &&
              e["id"] === t["id"] &&
              e["url"] === t["url"]
            );
          }
          return !1;
        }
        function T(e) {
          return encodeURIComponent(e)["replace"](/[!'()*]/g, function (e) {
            return "%"["concat"](
              e["charCodeAt"](0)["toString"](16)
            );
          });
        }
        function y(e) {
          return e["length"] < 8
            ? t(0, 8 - e["length"], !1)
                ["map"](function () {
                  return "0";
                })
                ["join"]("") + e
            : e;
        }
        function t(e, t, r) {
          for (
            var i = [], n = e < t, a = r ? (n ? t + 1 : t - 1) : t, s = e;
            n ? s < a : a < s;
            n ? s++ : s--
          )
            i["push"](s);
          return i;
        }
        var k = {
          track: function (e, t, r) {
            d(e, t, r)["forEach"](function (e) {
              "undefined" != typeof window &&
                null !== window &&
                (new Image()["src"] = e);
            });
          },
          resolveURLTemplates: d,
          extractURLsFromTemplates: m,
          containsTemplateObject: f,
          isTemplateObjectEqual: g,
          encodeURIComponentRFC3986: T,
          replaceUrlMacros: h,
          leftpad: y,
          range: t,
          isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          },
          flatten: function r(e) {
            return e["reduce"](function (e, t) {
              return e["concat"](Array["isArray"](t) ? r(t) : t);
            }, []);
          },
          joinArrayOfUniqueTemplateObjs: function () {
            var e =
                0 < arguments["length"] && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t =
                1 < arguments["length"] && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              r = Array["isArray"](e) ? e : [],
              i = Array["isArray"](t) ? t : [];
            return r["concat"](i)["reduce"](function (e, t) {
              return f(t, e) || e["push"](t), e;
            }, []);
          },
        };
        function A(e) {
          return (
            -1 !==
            ["true", "TRUE", "True", "1"][
              "indexOf"
            ](e)
          );
        }
        var R = {
          childByName: function (e, t) {
            var r = e["childNodes"];
            for (var i in r) {
              var n = r[i];
              if (n["nodeName"] === t) return n;
            }
          },
          childrenByName: function (e, t) {
            var r = [],
              i = e["childNodes"];
            for (var n in i) {
              var a = i[n];
              a["nodeName"] === t && r["push"](a);
            }
            return r;
          },
          resolveVastAdTagURI: function (e, t) {
            if (!t) return e;
            if (0 === e["indexOf"]("//")) {
              var r = location["protocol"];
              return ""["concat"](r)["concat"](e);
            }
            if (-1 !== e["indexOf"]("://")) return e;
            var i = t["slice"](0, t["lastIndexOf"]("/"));
            return ""["concat"](i, "/")["concat"](e);
          },
          parseBoolean: A,
          parseNodeText: function (e) {
            return (
              e &&
              (e["textContent"] || e["text"] || "")[
                "trim"
              ]()
            );
          },
          copyNodeAttribute: function (e, t, r) {
            var i = t["getAttribute"](e);
            i && r["setAttribute"](e, i);
          },
          parseAttributes: function (e) {
            for (
              var t = e["attributes"], r = {}, i = 0;
              i < t["length"];
              i++
            )
              r[t[i]["nodeName"]] = t[i]["nodeValue"];
            return r;
          },
          parseDuration: function (e) {
            if (null == e) return -1;
            if (k["isNumeric"](e)) return parseInt(e);
            var t = e["split"](":");
            if (3 !== t["length"]) return -1;
            var r = t[2]["split"]("."),
              i = parseInt(r[0]);
            2 === r["length"] &&
              (i += parseFloat("0."["concat"](r[1])));
            var n = parseInt(60 * t[1]),
              a = parseInt(60 * t[0] * 60);
            return isNaN(a) || isNaN(n) || isNaN(i) || 3600 < n || 60 < i
              ? -1
              : a + n + i;
          },
          splitVAST: function (i) {
            var n = [],
              a = null;
            return (
              i["forEach"](function (e, t) {
                if (
                  (e["sequence"] &&
                    (e["sequence"] = parseInt(e["sequence"], 10)),
                  1 < e["sequence"])
                ) {
                  var r = i[t - 1];
                  if (r && r["sequence"] === e["sequence"] - 1)
                    return void (a && a["push"](e));
                  delete e["sequence"];
                }
                (a = [e]), n["push"](a);
              }),
              n
            );
          },
          assignAttributes: function (e, t) {
            if (e)
              for (var r in e) {
                var i = e[r];
                if (
                  i["nodeName"] &&
                  i["nodeValue"] &&
                  t["hasOwnProperty"](i["nodeName"])
                ) {
                  var n = i["nodeValue"];
                  "boolean" == typeof t[i["nodeName"]] && (n = A(n)),
                    (t[i["nodeName"]] = n);
                }
              }
          },
          mergeWrapperAdData: function (e, i) {
            (e["errorURLTemplates"] = i["errorURLTemplates"]["concat"](e["errorURLTemplates"])),
              (e["impressionURLTemplates"] = i["impressionURLTemplates"]["concat"](e["impressionURLTemplates"])),
              (e["extensions"] = i["extensions"]["concat"](e["extensions"]));
            var t = (i["creatives"] || [])["filter"](function (e) {
                return e && "companion" === e["type"];
              }),
              n = t["reduce"](function (t, e) {
                return (
                  (e["variations"] || [])["forEach"](function (e) {
                    (e["companionClickTrackingURLTemplates"] || [])["forEach"](function (e) {
                      k["containsTemplateObject"](e, t) || t["push"](e);
                    });
                  }),
                  t
                );
              }, []);
            e["creatives"] = t["concat"](e["creatives"]);
            var a = i["videoClickTrackingURLTemplates"] && i["videoClickTrackingURLTemplates"]["length"],
              s = i["videoCustomClickURLTemplates"] && i["videoCustomClickURLTemplates"]["length"];
            e["creatives"]["forEach"](function (e) {
              if (i["trackingEvents"] && i["trackingEvents"][e["type"]])
                for (var t in i["trackingEvents"][e["type"]]) {
                  var r = i["trackingEvents"][e["type"]][t];
                  Array["isArray"](e["trackingEvents"][t]) ||
                    (e["trackingEvents"][t] = []),
                    (e["trackingEvents"][t] = e["trackingEvents"][t]["concat"](r));
                }
              "linear" === e["type"] &&
                (a &&
                  (e["videoClickTrackingURLTemplates"] = e["videoClickTrackingURLTemplates"]["concat"](
                    i["videoClickTrackingURLTemplates"]
                  )),
                s &&
                  (e["videoCustomClickURLTemplates"] = e["videoCustomClickURLTemplates"]["concat"](
                    i["videoCustomClickURLTemplates"]
                  )),
                !i["videoClickThroughURLTemplate"] ||
                  (null !== e["videoClickThroughURLTemplate"] && void 0 !== e["videoClickThroughURLTemplate"]) ||
                  (e["videoClickThroughURLTemplate"] = i["videoClickThroughURLTemplate"])),
                "companion" === e["type"] &&
                  n["length"] &&
                  (e["variations"] || [])["forEach"](function (e) {
                    e["companionClickTrackingURLTemplates"] = k["joinArrayOfUniqueTemplateObjs"](e["companionClickTrackingURLTemplates"], n);
                  });
            });
          },
        };
        function E(e, t) {
          var r = (function () {
            var e = p(
              0 < arguments["length"] && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            );
            return {
              id: e["id"],
              adId: e["adId"],
              sequence: e["sequence"],
              apiFramework: e["apiFramework"],
              type: "companion",
              required: null,
              variations: [],
            };
          })(t);
          return (
            (r["required"] = e["getAttribute"]("required") || null),
            (r["variations"] = R["childrenByName"](e, "Companion")["map"](
              function (e) {
                var i = (function () {
                  var e =
                    0 < arguments["length"] && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    id: e["id"] || null,
                    adType: "companionAd",
                    width: e["width"] || 0,
                    height: e["height"] || 0,
                    assetWidth: e["assetWidth"] || null,
                    assetHeight: e["assetHeight"] || null,
                    expandedWidth: e["expandedWidth"] || null,
                    expandedHeight: e["expandedHeight"] || null,
                    apiFramework: e["apiFramework"] || null,
                    adSlotID: e["adSlotID"] || null,
                    pxratio: e["pxratio"] || "1",
                    renderingMode: e["renderingMode"] || "default",
                    staticResources: [],
                    htmlResources: [],
                    iframeResources: [],
                    adParameters: null,
                    xmlEncoded: null,
                    altText: null,
                    companionClickThroughURLTemplate: null,
                    companionClickTrackingURLTemplates: [],
                    trackingEvents: {},
                  };
                })(R["parseAttributes"](e));
                (i["htmlResources"] = R["childrenByName"](e, "HTMLResource")[
                  "reduce"
                ](function (e, t) {
                  var r = R["parseNodeText"](t);
                  return r ? e["concat"](r) : e;
                }, [])),
                  (i["iframeResources"] = R["childrenByName"](e, "IFrameResource")[
                    "reduce"
                  ](function (e, t) {
                    var r = R["parseNodeText"](t);
                    return r ? e["concat"](r) : e;
                  }, [])),
                  (i["staticResources"] = R["childrenByName"](e, "StaticResource")[
                    "reduce"
                  ](function (e, t) {
                    var r = R["parseNodeText"](t);
                    return r
                      ? e["concat"]({
                          url: r,
                          creativeType: t["getAttribute"]("creativeType") || null,
                        })
                      : e;
                  }, [])),
                  (i["altText"] =
                    R["parseNodeText"](R["childByName"](e, "AltText")) || null);
                var t = R["childByName"](e, "TrackingEvents");
                t &&
                  R["childrenByName"](t, "Tracking")["forEach"](function (e) {
                    var t = e["getAttribute"]("event"),
                      r = R["parseNodeText"](e);
                    t &&
                      r &&
                      (Array["isArray"](i["trackingEvents"][t]) ||
                        (i["trackingEvents"][t] = []),
                      i["trackingEvents"][t]["push"](r));
                  }),
                  (i["companionClickTrackingURLTemplates"] = R["childrenByName"](e, "CompanionClickTracking")[
                    "map"
                  ](function (e) {
                    return {
                      id: e["getAttribute"]("id") || null,
                      url: R["parseNodeText"](e),
                    };
                  })),
                  (i["companionClickThroughURLTemplate"] =
                    R["parseNodeText"](R["childByName"](e, "CompanionClickThrough")) || null);
                var r = R["childByName"](e, "AdParameters");
                return (
                  r &&
                    ((i["adParameters"] = R["parseNodeText"](r)),
                    (i["xmlEncoded"] = r["getAttribute"]("xmlEncoded") || null)),
                  i
                );
              }
            )),
            r
          );
        }
        function N(e, t) {
          var i,
            d = (function () {
              var e = p(
                0 < arguments["length"] && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              );
              return {
                id: e["id"],
                adId: e["adId"],
                sequence: e["sequence"],
                apiFramework: e["apiFramework"],
                type: "linear",
                duration: 0,
                skipDelay: null,
                mediaFiles: [],
                mezzanine: null,
                interactiveCreativeFile: null,
                closedCaptionFiles: [],
                videoClickThroughURLTemplate: null,
                videoClickTrackingURLTemplates: [],
                videoCustomClickURLTemplates: [],
                adParameters: null,
                icons: [],
                trackingEvents: {},
              };
            })(t);
          d["duration"] = R["parseDuration"](
            R["parseNodeText"](R["childByName"](e, "Duration"))
          );
          var r = e["getAttribute"]("skipoffset");
          if (null == r) d["skipDelay"] = null;
          else if (
            "%" === r["charAt"](r["length"] - 1) &&
            -1 !== d["duration"]
          ) {
            var n = parseInt(r, 10);
            d["skipDelay"] = d["duration"] * (n / 100);
          } else d["skipDelay"] = R["parseDuration"](r);
          var a = R["childByName"](e, "VideoClicks");
          if (a) {
            var s = R["childByName"](a, "ClickThrough");
            (d["videoClickThroughURLTemplate"] = s
              ? {
                  id: s["getAttribute"]("id") || null,
                  url: R["parseNodeText"](s),
                }
              : null),
              R["childrenByName"](a, "ClickTracking")["forEach"](function (e) {
                d["videoClickTrackingURLTemplates"]["push"]({
                  id: e["getAttribute"]("id") || null,
                  url: R["parseNodeText"](e),
                });
              }),
              R["childrenByName"](a, "CustomClick")["forEach"](function (e) {
                d["videoCustomClickURLTemplates"]["push"]({
                  id: e["getAttribute"]("id") || null,
                  url: R["parseNodeText"](e),
                });
              });
          }
          var o = R["childByName"](e, "AdParameters");
          o && (d["adParameters"] = R["parseNodeText"](o)),
            R["childrenByName"](e, "TrackingEvents")["forEach"](function (e) {
              R["childrenByName"](e, "Tracking")["forEach"](function (e) {
                var t = e["getAttribute"]("event"),
                  r = R["parseNodeText"](e);
                if (t && r) {
                  if ("progress" === t) {
                    if (!(i = e["getAttribute"]("offset"))) return;
                    t =
                      "%" === i["charAt"](i["length"] - 1)
                        ? "progress-"["concat"](i)
                        : "progress-"["concat"](
                            Math["round"](R["parseDuration"](i))
                          );
                  }
                  Array["isArray"](d["trackingEvents"][t]) ||
                    (d["trackingEvents"][t] = []),
                    d["trackingEvents"][t]["push"](r);
                }
              });
            }),
            R["childrenByName"](e, "MediaFiles")["forEach"](function (e) {
              R["childrenByName"](e, "MediaFile")["forEach"](function (e) {
                d["mediaFiles"]["push"](
                  (function (e) {
                    var t = {
                      id: null,
                      fileURL: null,
                      fileSize: 0,
                      deliveryType: "progressive",
                      mimeType: null,
                      mediaType: null,
                      codec: null,
                      bitrate: 0,
                      minBitrate: 0,
                      maxBitrate: 0,
                      width: 0,
                      height: 0,
                      apiFramework: null,
                      scalable: null,
                      maintainAspectRatio: null,
                    };
                    (t["id"] = e["getAttribute"]("id")),
                      (t["fileURL"] = R["parseNodeText"](e)),
                      (t["deliveryType"] = e["getAttribute"]("delivery")),
                      (t["codec"] = e["getAttribute"]("codec")),
                      (t["mimeType"] = e["getAttribute"]("type")),
                      (t["mediaType"] =
                        e["getAttribute"]("mediaType") || "2D"),
                      (t["apiFramework"] = e["getAttribute"]("apiFramework")),
                      (t["fileSize"] = parseInt(
                        e["getAttribute"]("fileSize") || 0
                      )),
                      (t["bitrate"] = parseInt(
                        e["getAttribute"]("bitrate") || 0
                      )),
                      (t["minBitrate"] = parseInt(
                        e["getAttribute"]("minBitrate") || 0
                      )),
                      (t["maxBitrate"] = parseInt(
                        e["getAttribute"]("maxBitrate") || 0
                      )),
                      (t["width"] = parseInt(
                        e["getAttribute"]("width") || 0
                      )),
                      (t["height"] = parseInt(
                        e["getAttribute"]("height") || 0
                      ));
                    var r = e["getAttribute"]("scalable");
                    r &&
                      "string" == typeof r &&
                      (t["scalable"] = R["parseBoolean"](r));
                    var i = e["getAttribute"]("maintainAspectRatio");
                    i &&
                      "string" == typeof i &&
                      (t["maintainAspectRatio"] = R["parseBoolean"](i));
                    return t;
                  })(e)
                );
              });
              var t,
                r,
                i = R["childByName"](e, "InteractiveCreativeFile");
              i &&
                (d["interactiveCreativeFile"] =
                  ((t = i),
                  ((r = (function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      type: e["type"] || null,
                      apiFramework: e["apiFramework"] || null,
                      variableDuration: R["parseBoolean"](e["variableDuration"]),
                      fileURL: null,
                    };
                  })(R["parseAttributes"](t)))["fileURL"] = R["parseNodeText"](t)),
                  r));
              var n = R["childByName"](e, "ClosedCaptionFiles");
              n &&
                R["childrenByName"](n, "ClosedCaptionFile")["forEach"](function (e) {
                  var t = (function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      type: e["type"] || null,
                      language: e["language"] || null,
                      fileURL: null,
                    };
                  })(R["parseAttributes"](e));
                  (t["fileURL"] = R["parseNodeText"](e)),
                    d["closedCaptionFiles"]["push"](t);
                });
              var a,
                s,
                o,
                l = R["childByName"](e, "Mezzanine"),
                u =
                  ((a = l),
                  (o = !(s = {})),
                  ["delivery", "type", "width", "height"][
                    "forEach"
                  ](function (e) {
                    a && a["getAttribute"](e)
                      ? (s[e] = a["getAttribute"](e))
                      : (o = !0);
                  }),
                  o ? null : s);
              if (u) {
                var c = {
                  id: null,
                  fileURL: null,
                  delivery: null,
                  codec: null,
                  type: null,
                  width: 0,
                  height: 0,
                  fileSize: 0,
                  mediaType: "2D",
                };
                (c["id"] = l["getAttribute"]("id")),
                  (c["fileURL"] = R["parseNodeText"](l)),
                  (c["delivery"] = u["delivery"]),
                  (c["codec"] = l["getAttribute"]("codec")),
                  (c["type"] = u["type"]),
                  (c["width"] = parseInt(u["width"], 10)),
                  (c["height"] = parseInt(u["height"], 10)),
                  (c["fileSize"] = parseInt(
                    l["getAttribute"]("fileSize"),
                    10
                  )),
                  (c["mediaType"] =
                    l["getAttribute"]("mediaType") || "2D"),
                  (d["mezzanine"] = c);
              }
            });
          var l = R["childByName"](e, "Icons");
          return (
            l &&
              R["childrenByName"](l, "Icon")["forEach"](function (e) {
                d["icons"]["push"](
                  (function (e) {
                    var t = {
                      program: null,
                      height: 0,
                      width: 0,
                      xPosition: 0,
                      yPosition: 0,
                      apiFramework: null,
                      offset: null,
                      duration: 0,
                      type: null,
                      staticResource: null,
                      htmlResource: null,
                      iframeResource: null,
                      pxratio: "1",
                      iconClickThroughURLTemplate: null,
                      iconClickTrackingURLTemplates: [],
                      iconViewTrackingURLTemplate: null,
                    };
                    (t["program"] = e["getAttribute"]("program")),
                      (t["height"] = parseInt(
                        e["getAttribute"]("height") || 0
                      )),
                      (t["width"] = parseInt(
                        e["getAttribute"]("width") || 0
                      )),
                      (t["xPosition"] =
                        ((i = e["getAttribute"]("xPosition")),
                        -1 === ["left", "right"]["indexOf"](i)
                          ? parseInt(i || 0)
                          : i)),
                      (t["yPosition"] =
                        ((r = e["getAttribute"]("yPosition")),
                        -1 === ["top", "bottom"]["indexOf"](r)
                          ? parseInt(r || 0)
                          : r)),
                      (t["apiFramework"] = e["getAttribute"]("apiFramework")),
                      (t["pxratio"] =
                        e["getAttribute"]("pxratio") || "1"),
                      (t["offset"] = R["parseDuration"](
                        e["getAttribute"]("offset")
                      )),
                      (t["duration"] = R["parseDuration"](
                        e["getAttribute"]("duration")
                      )),
                      R["childrenByName"](e, "HTMLResource")["forEach"](function (
                        e
                      ) {
                        (t["type"] =
                          e["getAttribute"]("creativeType") || "text/html"),
                          (t["htmlResource"] = R["parseNodeText"](e));
                      }),
                      R["childrenByName"](e, "IFrameResource")["forEach"](function (
                        e
                      ) {
                        (t["type"] = e["getAttribute"]("creativeType") || 0),
                          (t["iframeResource"] = R["parseNodeText"](e));
                      }),
                      R["childrenByName"](e, "StaticResource")["forEach"](function (
                        e
                      ) {
                        (t["type"] = e["getAttribute"]("creativeType") || 0),
                          (t["staticResource"] = R["parseNodeText"](e));
                      });
                    var r;
                    var i;
                    var n = R["childByName"](e, "IconClicks");
                    n &&
                      ((t["iconClickThroughURLTemplate"] = R["parseNodeText"](
                        R["childByName"](n, "IconClickThrough")
                      )),
                      R["childrenByName"](n, "IconClickTracking")["forEach"](function (
                        e
                      ) {
                        t["iconClickTrackingURLTemplates"]["push"]({
                          id: e["getAttribute"]("id") || null,
                          url: R["parseNodeText"](e),
                        });
                      }));
                    return (
                      (t["iconViewTrackingURLTemplate"] = R["parseNodeText"](
                        R["childByName"](e, "IconViewTracking")
                      )),
                      t
                    );
                  })(e)
                );
              }),
            d
          );
        }
        function L(e, t) {
          var i = (function () {
            var e = p(
              0 < arguments["length"] && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            );
            return {
              id: e["id"],
              adId: e["adId"],
              sequence: e["sequence"],
              apiFramework: e["apiFramework"],
              type: "nonlinear",
              variations: [],
              trackingEvents: {},
            };
          })(t);
          return (
            R["childrenByName"](e, "TrackingEvents")["forEach"](function (e) {
              var t, r;
              R["childrenByName"](e, "Tracking")["forEach"](function (e) {
                (t = e["getAttribute"]("event")),
                  (r = R["parseNodeText"](e)),
                  t &&
                    r &&
                    (Array["isArray"](i["trackingEvents"][t]) ||
                      (i["trackingEvents"][t] = []),
                    i["trackingEvents"][t]["push"](r));
              });
            }),
            R["childrenByName"](e, "NonLinear")["forEach"](function (e) {
              var t = {
                id: null,
                width: 0,
                height: 0,
                expandedWidth: 0,
                expandedHeight: 0,
                scalable: !0,
                maintainAspectRatio: !0,
                minSuggestedDuration: 0,
                apiFramework: "static",
                adType: "nonLinearAd",
                type: null,
                staticResource: null,
                htmlResource: null,
                iframeResource: null,
                nonlinearClickThroughURLTemplate: null,
                nonlinearClickTrackingURLTemplates: [],
                adParameters: null,
              };
              (t["id"] = e["getAttribute"]("id") || null),
                (t["width"] = e["getAttribute"]("width")),
                (t["height"] = e["getAttribute"]("height")),
                (t["expandedWidth"] = e["getAttribute"]("expandedWidth")),
                (t["expandedHeight"] = e["getAttribute"]("expandedHeight")),
                (t["scalable"] = R["parseBoolean"](
                  e["getAttribute"]("scalable")
                )),
                (t["maintainAspectRatio"] = R["parseBoolean"](
                  e["getAttribute"]("maintainAspectRatio")
                )),
                (t["minSuggestedDuration"] = R["parseDuration"](
                  e["getAttribute"]("minSuggestedDuration")
                )),
                (t["apiFramework"] = e["getAttribute"]("apiFramework")),
                R["childrenByName"](e, "HTMLResource")["forEach"](function (e) {
                  (t["type"] =
                    e["getAttribute"]("creativeType") || "text/html"),
                    (t["htmlResource"] = R["parseNodeText"](e));
                }),
                R["childrenByName"](e, "IFrameResource")["forEach"](function (e) {
                  (t["type"] = e["getAttribute"]("creativeType") || 0),
                    (t["iframeResource"] = R["parseNodeText"](e));
                }),
                R["childrenByName"](e, "StaticResource")["forEach"](function (e) {
                  (t["type"] = e["getAttribute"]("creativeType") || 0),
                    (t["staticResource"] = R["parseNodeText"](e));
                });
              var r = R["childByName"](e, "AdParameters");
              r && (t["adParameters"] = R["parseNodeText"](r)),
                (t["nonlinearClickThroughURLTemplate"] = R["parseNodeText"](
                  R["childByName"](e, "NonLinearClickThrough")
                )),
                R["childrenByName"](e, "NonLinearClickTracking")["forEach"](function (e) {
                  t["nonlinearClickTrackingURLTemplates"]["push"]({
                    id: e["getAttribute"]("id") || null,
                    url: R["parseNodeText"](e),
                  });
                }),
                i["variations"]["push"](t);
            }),
            i
          );
        }
        function b(e) {
          var r = [];
          return (
            e["forEach"](function (e) {
              var t = (function e(t) {
                if ("#comment" === t["nodeName"]) return null;
                var r = {
                  name: null,
                  value: null,
                  attributes: {},
                  children: [],
                };
                var i = t["attributes"];
                var n = t["childNodes"];
                r["name"] = t["nodeName"];
                if (t["attributes"])
                  for (var a in i)
                    if (i["hasOwnProperty"](a)) {
                      var s = i[a];
                      s["nodeName"] &&
                        s["nodeValue"] &&
                        (r["attributes"][s["nodeName"]] = s["nodeValue"]);
                    }
                for (var o in n)
                  if (n["hasOwnProperty"](o)) {
                    var l = e(n[o]);
                    l && r["children"]["push"](l);
                  }
                if (
                  0 === r["children"]["length"] ||
                  (1 === r["children"]["length"] &&
                    0 <=
                      ["#cdata-section", "#text"]["indexOf"](
                        r["children"][0]["name"]
                      ))
                ) {
                  var u = R["parseNodeText"](t);
                  "" !== u && (r["value"] = u),
                    (r["children"] = []);
                }
                return (
                  (c = r),
                  null === c["value"] &&
                  0 === Object["keys"](c["attributes"])["length"] &&
                  0 === c["children"]["length"]
                    ? null
                    : r
                );
                var c;
              })(e);
              t && r["push"](t);
            }),
            r
          );
        }
        function U(e) {
          var c = [];
          return (
            e["forEach"](function (e) {
              var t,
                r,
                i,
                n = {
                  id: e["getAttribute"]("id") || null,
                  adId:
                    ((t = e),
                    t["getAttribute"]("AdID") ||
                      t["getAttribute"]("adID") ||
                      t["getAttribute"]("adId") ||
                      null),
                  sequence: e["getAttribute"]("sequence") || null,
                  apiFramework: e["getAttribute"]("apiFramework") || null,
                },
                a = R["childByName"](e, "UniversalAdId");
              a &&
                (r = {
                  idRegistry: a["getAttribute"]("idRegistry") || "unknown",
                  value: R["parseNodeText"](a),
                });
              var s = R["childByName"](e, "CreativeExtensions");
              for (var o in (s && (i = b(R["childrenByName"](s, "CreativeExtension"))),
              e["childNodes"])) {
                var l = e["childNodes"][o],
                  u = void 0;
                switch (l["nodeName"]) {
                  case "Linear":
                    u = N(l, n);
                    break;
                  case "NonLinearAds":
                    u = L(l, n);
                    break;
                  case "CompanionAds":
                    u = E(l, n);
                }
                u &&
                  (r && (u["universalAdId"] = r),
                  i && (u["creativeExtensions"] = i),
                  c["push"](u));
              }
            }),
            c
          );
        }
        var C = {
          Wrapper: {
            subElements: ["VASTAdTagURI", "Impression"],
          },
          BlockedAdCategories: {
            attributes: ["authority"],
          },
          InLine: {
            subElements: [
              "AdSystem",
              "AdTitle",
              "Impression",
              "AdServingId",
              "Creatives",
            ],
          },
          Category: {
            attributes: ["authority"],
          },
          Pricing: {
            attributes: ["model", "currency"],
          },
          Verification: {
            oneOfinLineResources: ["JavaScriptResource", "ExecutableResource"],
            attributes: ["vendor"],
          },
          UniversalAdId: {
            attributes: ["idRegistry"],
          },
          JavaScriptResource: {
            attributes: ["apiFramework", "browserOptional"],
          },
          ExecutableResource: {
            attributes: ["apiFramework", "type"],
          },
          Tracking: {
            attributes: ["event"],
          },
          Creatives: {
            subElements: ["Creative"],
          },
          Creative: {
            subElements: ["UniversalAdId"],
          },
          Linear: {
            subElements: ["MediaFiles", "Duration"],
          },
          MediaFiles: {
            subElements: ["MediaFile"],
          },
          MediaFile: {
            attributes: [
              "delivery",
              "type",
              "width",
              "height",
            ],
          },
          Mezzanine: {
            attributes: [
              "delivery",
              "type",
              "width",
              "height",
            ],
          },
          NonLinear: {
            oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"],
            attributes: ["width", "height"],
          },
          Companion: {
            oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"],
            attributes: ["width", "height"],
          },
          StaticResource: {
            attributes: ["creativeType"],
          },
          Icons: {
            subElements: ["Icon"],
          },
          Icon: {
            oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"],
          },
        };
        function w(t, e) {
          if (C[t["nodeName"]] && C[t["nodeName"]]["attributes"]) {
            var r = C[t["nodeName"]]["attributes"]["filter"](function (
              e
            ) {
              return !t["getAttribute"](e);
            });
            0 < r["length"] &&
              S(
                {
                  name: t["nodeName"],
                  parentName: t["parentNode"]["nodeName"],
                  attributes: r,
                },
                e
              );
          }
        }
        function I(t, e, r) {
          var i = C[t["nodeName"]],
            n = !r && "Wrapper" !== t["nodeName"];
          if (i && !n) {
            if (i["subElements"]) {
              var a = i["subElements"]["filter"](function (e) {
                return !R["childByName"](t, e);
              });
              0 < a["length"] &&
                S(
                  {
                    name: t["nodeName"],
                    parentName: t["parentNode"]["nodeName"],
                    subElements: a,
                  },
                  e
                );
            }
            if (r && i["oneOfinLineResources"])
              i["oneOfinLineResources"]["some"](function (e) {
                return R["childByName"](t, e);
              }) ||
                S(
                  {
                    name: t["nodeName"],
                    parentName: t["parentNode"]["nodeName"],
                    oneOfResources: i["oneOfinLineResources"],
                  },
                  e
                );
          }
        }
        function x(e) {
          return e["children"] && 0 !== e["children"]["length"];
        }
        function S(e, t) {
          var r = e["name"],
            i = e["parentName"],
            n = e["attributes"],
            a = e["subElements"],
            s = e["oneOfResources"],
            o = "Element '"["concat"](r, "'");
          t("VAST-warning", {
            message: (o += n
              ? " missing required attribute(s) '"["concat"](
                  n["join"](", "),
                  _x31526[1e3]
                )
              : a
              ? " missing required sub element(s) '"["concat"](
                  a["join"](", "),
                  _x31526[1e3]
                )
              : s
              ? " must provide one of the following '"["concat"](
                  s["join"](", "),
                  _x31526[1e3]
                )
              : " is empty"),
            parentElement: i,
            specVersion: 4.1,
          });
        }
        var D = {
          verifyRequiredValues: function e(t, r, i) {
            if (t && t["nodeName"])
              if (
                ("InLine" === t["nodeName"] && (i = !0), w(t, r), x(t))
              ) {
                I(t, r, i);
                for (var n = 0; n < t["children"]["length"]; n++)
                  e(t["children"][n], r, i);
              } else
                0 === R["parseNodeText"](t)["length"] &&
                  S(
                    {
                      name: t["nodeName"],
                      parentName: t["parentNode"]["nodeName"],
                    },
                    r
                  );
          },
          hasSubElements: x,
          emitMissingValueWarning: S,
          verifyRequiredAttributes: w,
          verifyRequiredSubElements: I,
        };
        function O(e, t) {
          var r,
            i,
            n = e["childNodes"];
          for (var a in n) {
            var s = n[a];
            if (
              -1 !==
              ["Wrapper", "InLine"]["indexOf"](s["nodeName"])
            ) {
              if (
                (R["copyNodeAttribute"]("id", e, s),
                R["copyNodeAttribute"]("sequence", e, s),
                R["copyNodeAttribute"]("adType", e, s),
                "Wrapper" === s["nodeName"])
              )
                return {
                  ad: V(s, t),
                  type: "WRAPPER",
                };
              if ("InLine" === s["nodeName"])
                return {
                  ad: ((r = s), (i = t), P(r, i)),
                  type: "INLINE",
                };
            }
          }
        }
        function P(e, t) {
          t && D["verifyRequiredValues"](e, t);
          var r = e["childNodes"],
            i = (function () {
              var e =
                0 < arguments["length"] && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                id: e["id"] || null,
                sequence: e["sequence"] || null,
                adType: e["adType"] || null,
                adServingId: null,
                categories: [],
                expires: null,
                viewableImpression: {},
                system: null,
                title: null,
                description: null,
                advertiser: null,
                pricing: null,
                survey: null,
                errorURLTemplates: [],
                impressionURLTemplates: [],
                creatives: [],
                extensions: [],
                adVerifications: [],
              };
            })(R["parseAttributes"](e));
          for (var n in r) {
            var a = r[n];
            switch (a["nodeName"]) {
              case "Error":
                i["errorURLTemplates"]["push"](R["parseNodeText"](a));
                break;
              case "Impression":
                i["impressionURLTemplates"]["push"]({
                  id: a["getAttribute"]("id") || null,
                  url: R["parseNodeText"](a),
                });
                break;
              case "Creatives":
                i["creatives"] = U(R["childrenByName"](a, "Creative"));
                break;
              case "Extensions":
                i["extensions"] = b(R["childrenByName"](a, "Extension"));
                break;
              case "AdVerifications":
                i["adVerifications"] = F(R["childrenByName"](a, "Verification"));
                break;
              case "AdSystem":
                i["system"] = {
                  value: R["parseNodeText"](a),
                  version: a["getAttribute"]("version") || null,
                };
                break;
              case "AdTitle":
                i["title"] = R["parseNodeText"](a);
                break;
              case "AdServingId":
                i["adServingId"] = R["parseNodeText"](a);
                break;
              case "Category":
                i["categories"]["push"]({
                  authority: a["getAttribute"]("authority") || null,
                  value: R["parseNodeText"](a),
                });
                break;
              case "Expires":
                i["expires"] = parseInt(R["parseNodeText"](a), 10);
                break;
              case "ViewableImpression":
                i["viewableImpression"] = B(a);
                break;
              case "Description":
                i["description"] = R["parseNodeText"](a);
                break;
              case "Advertiser":
                i["advertiser"] = {
                  id: a["getAttribute"]("id") || null,
                  value: R["parseNodeText"](a),
                };
                break;
              case "Pricing":
                i["pricing"] = {
                  value: R["parseNodeText"](a),
                  model: a["getAttribute"]("model") || null,
                  currency: a["getAttribute"]("currency") || null,
                };
                break;
              case "Survey":
                i["survey"] = R["parseNodeText"](a);
            }
          }
          return i;
        }
        function V(e, t) {
          var i = P(e, t),
            r = R["childByName"](e, "VASTAdTagURI");
          if (
            (r
              ? (i["nextWrapperURL"] = R["parseNodeText"](r))
              : (r = R["childByName"](e, "VASTAdTagURL")) &&
                (i["nextWrapperURL"] = R["parseNodeText"](
                  R["childByName"](r, "URL")
                )),
            i["creatives"]["forEach"](function (r) {
              if (
                -1 !==
                ["linear", "nonlinear"]["indexOf"](r["type"])
              ) {
                if (r["trackingEvents"]) {
                  i["trackingEvents"] || (i["trackingEvents"] = {}),
                    i["trackingEvents"][r["type"]] ||
                      (i["trackingEvents"][r["type"]] = {});
                  var e = function (t) {
                    var e = r["trackingEvents"][t];
                    Array["isArray"](i["trackingEvents"][r["type"]][t]) ||
                      (i["trackingEvents"][r["type"]][t] = []),
                      e["forEach"](function (e) {
                        i["trackingEvents"][r["type"]][t]["push"](e);
                      });
                  };
                  for (var t in r["trackingEvents"]) e(t);
                }
                r["videoClickTrackingURLTemplates"] &&
                  (Array["isArray"](i["videoClickTrackingURLTemplates"]) ||
                    (i["videoClickTrackingURLTemplates"] = []),
                  r["videoClickTrackingURLTemplates"]["forEach"](function (e) {
                    i["videoClickTrackingURLTemplates"]["push"](e);
                  })),
                  r["videoClickThroughURLTemplate"] && (i["videoClickThroughURLTemplate"] = r["videoClickThroughURLTemplate"]),
                  r["videoCustomClickURLTemplates"] &&
                    (Array["isArray"](i["videoCustomClickURLTemplates"]) ||
                      (i["videoCustomClickURLTemplates"] = []),
                    r["videoCustomClickURLTemplates"]["forEach"](function (e) {
                      i["videoCustomClickURLTemplates"]["push"](e);
                    }));
              }
            }),
            i["nextWrapperURL"])
          )
            return i;
        }
        function F(e) {
          var s = [];
          return (
            e["forEach"](function (e) {
              var i = {
                  resource: null,
                  vendor: null,
                  browserOptional: !1,
                  apiFramework: null,
                  type: null,
                  parameters: null,
                  trackingEvents: {},
                },
                t = e["childNodes"];
              for (var r in (R["assignAttributes"](e["attributes"], i), t)) {
                var n = t[r];
                switch (n["nodeName"]) {
                  case "JavaScriptResource":
                  case "ExecutableResource":
                    (i["resource"] = R["parseNodeText"](n)),
                      R["assignAttributes"](n["attributes"], i);
                    break;
                  case "VerificationParameters":
                    i["parameters"] = R["parseNodeText"](n);
                }
              }
              var a = R["childByName"](e, "TrackingEvents");
              a &&
                R["childrenByName"](a, "Tracking")["forEach"](function (e) {
                  var t = e["getAttribute"]("event"),
                    r = R["parseNodeText"](e);
                  t &&
                    r &&
                    (Array["isArray"](i["trackingEvents"][t]) ||
                      (i["trackingEvents"][t] = []),
                    i["trackingEvents"][t]["push"](r));
                }),
                s["push"](i);
            }),
            s
          );
        }
        function B(e) {
          var t = {};
          t["id"] = e["getAttribute"]("id") || null;
          var r = e["childNodes"];
          for (var i in r) {
            var n = r[i],
              a = n["nodeName"],
              s = R["parseNodeText"](n);
            if (
              ("Viewable" === a ||
                "NotViewable" === a ||
                "ViewUndetermined" === a) &&
              s
            ) {
              var o = a["toLowerCase"]();
              Array["isArray"](t[o]) || (t[o] = []), t[o]["push"](s);
            }
          }
          return t;
        }
        var M = (function () {
          function e() {
            l(this, e), (this["_handlers"] = []);
          }
          return (
            n(e, [
              {
                key: "on",
                value: function (e, t) {
                  if ("function" != typeof t)
                    throw new TypeError("The handler argument must be of type Function. Received type "["concat"](r(t)));
                  if (!e) throw new TypeError("The event argument must be of type String. Received type "["concat"](r(e)));
                  return (
                    this["_handlers"]["push"]({
                      event: e,
                      handler: t,
                    }),
                    this
                  );
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  return this["on"](
                    e,
                    (function (e, t, r) {
                      var i = {
                        fired: !1,
                        wrapFn: void 0,
                      };
                      function n() {
                        i["fired"] ||
                          (e["off"](t, i["wrapFn"]),
                          (i["fired"] = !0),
                          r["bind"](e)["apply"](void 0, arguments));
                      }
                      return (i["wrapFn"] = n);
                    })(this, e, t)
                  );
                },
              },
              {
                key: "off",
                value: function (t, r) {
                  return (
                    (this["_handlers"] = this["_handlers"]["filter"](
                      function (e) {
                        return e["event"] !== t || e["handler"] !== r;
                      }
                    )),
                    this
                  );
                },
              },
              {
                key: "emit",
                value: function (t) {
                  for (
                    var e = arguments["length"],
                      r = new Array(1 < e ? e - 1 : 0),
                      i = 1;
                    i < e;
                    i++
                  )
                    r[i - 1] = arguments[i];
                  var n = !1;
                  return (
                    this["_handlers"]["forEach"](function (e) {
                      "*" === e["event"] &&
                        ((n = !0),
                        e["handler"]["apply"](e, [t]["concat"](r))),
                        e["event"] === t &&
                          ((n = !0), e["handler"]["apply"](e, r));
                    }),
                    n
                  );
                },
              },
              {
                key: "removeAllListeners",
                value: function (t) {
                  return (
                    (this["_handlers"] = t
                      ? this["_handlers"]["filter"](function (e) {
                          return e["event"] !== t;
                        })
                      : []),
                    this
                  );
                },
              },
              {
                key: "listenerCount",
                value: function (t) {
                  return this["_handlers"]["filter"](function (e) {
                    return e["event"] === t;
                  })["length"];
                },
              },
              {
                key: "listeners",
                value: function (r) {
                  return this["_handlers"]["reduce"](function (e, t) {
                    return (
                      t["event"] === r &&
                        e["push"](t["handler"]),
                      e
                    );
                  }, []);
                },
              },
              {
                key: "eventNames",
                value: function () {
                  return this["_handlers"]["map"](function (e) {
                    return e["event"];
                  });
                },
              },
            ]),
            e
          );
        })();
        var H = {
          get: function (e, t, r) {
            r(new Error("Please bundle the library for node to use the node urlHandler"));
          },
        };
        function q() {
          try {
            var e = new window["XMLHttpRequest"]();
            return "withCredentials" in e ? e : null;
          } catch (e) {
            return null;
          }
        }
        function W(e, t, r) {
          var i = r ? 408 : e["status"],
            n = r
              ? "XHRURLHandler: Request timed out after "
                  ["concat"](e["timeout"], " ms (")
                  ["concat"](i, ")")
              : "XHRURLHandler: "
                  ["concat"](e["statusText"], " (")
                  ["concat"](i, ")");
          t(new Error(n), null, {
            statusCode: i,
          });
        }
        var j = {
          get: function (e, t, r) {
            if (
              "https:" === window["location"]["protocol"] &&
              0 === e["indexOf"]("http://")
            )
              return r(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
            try {
              var i = q();
              i["open"]("GET", e),
                (i["timeout"] = t["timeout"] || 12e4),
                (i["withCredentials"] = t["withCredentials"] || !1),
                i["overrideMimeType"] && i["overrideMimeType"]("text/xml"),
                (i["onload"] = function () {
                  return (
                    (t = r),
                    void (200 === (e = i)["status"]
                      ? t(null, e["responseXML"], {
                          byteLength: e["response"]["length"],
                          statusCode: e["status"],
                        })
                      : W(e, t, !1))
                  );
                  var e, t;
                }),
                (i["onerror"] = function () {
                  return W(i, r, !1);
                }),
                (i["onabort"] = function () {
                  return W(i, r, !1);
                }),
                (i["ontimeout"] = function () {
                  return W(i, r, !0);
                }),
                i["send"]();
            } catch (e) {
              r(new Error("XHRURLHandler: Unexpected error"));
            }
          },
          supported: function () {
            return !!q();
          },
        };
        var _ = {
          get: function (e, t, r) {
            return (
              r || ("function" == typeof t && (r = t), (t = {})),
              "undefined" == typeof window || null === window
                ? H["get"](e, t, r)
                : j["supported"]()
                ? j["get"](e, t, r)
                : r(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))
            );
          },
        };
        var Y = {
            ERRORCODE: 900,
            extensions: [],
          },
          z = (function (e) {
            function t() {
              var e;
              return (
                l(this, t),
                ((e = c(this, u(t)["call"](this)))["remainingAds"] = []),
                (e["parentURLs"] = []),
                (e["errorURLTemplates"] = []),
                (e["rootErrorURLTemplates"] = []),
                (e["maxWrapperDepth"] = null),
                (e["URLTemplateFilters"] = []),
                (e["fetchingOptions"] = {}),
                e
              );
            }
            return (
              a(t, M),
              n(t, [
                {
                  key: "addURLTemplateFilter",
                  value: function (e) {
                    "function" == typeof e &&
                      this["URLTemplateFilters"]["push"](e);
                  },
                },
                {
                  key: "removeURLTemplateFilter",
                  value: function () {
                    this["URLTemplateFilters"]["pop"]();
                  },
                },
                {
                  key: "countURLTemplateFilters",
                  value: function () {
                    return this["URLTemplateFilters"]["length"];
                  },
                },
                {
                  key: "clearURLTemplateFilters",
                  value: function () {
                    this["URLTemplateFilters"] = [];
                  },
                },
                {
                  key: "trackVastError",
                  value: function (e, t) {
                    for (
                      var r = arguments["length"],
                        i = new Array(2 < r ? r - 2 : 0),
                        n = 2;
                      n < r;
                      n++
                    )
                      i[n - 2] = arguments[n];
                    this["emit"](
                      "VAST-error",
                      Object["assign"]["apply"](
                        Object,
                        [Y, t]["concat"](i)
                      )
                    ),
                      k["track"](e, t);
                  },
                },
                {
                  key: "getErrorURLTemplates",
                  value: function () {
                    return this["rootErrorURLTemplates"]["concat"](this["errorURLTemplates"]);
                  },
                },
                {
                  key: "fetchVAST",
                  value: function (l) {
                    var u = this,
                      c =
                        1 < arguments["length"] && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      d =
                        2 < arguments["length"] && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    return new Promise(function (a, s) {
                      u["URLTemplateFilters"]["forEach"](function (e) {
                        l = e(l);
                      }),
                        u["parentURLs"]["push"](l);
                      var o = Date["now"]();
                      u["emit"]("VAST-resolving", {
                        url: l,
                        previousUrl: d,
                        wrapperDepth: c,
                        maxWrapperDepth: u["maxWrapperDepth"],
                        timeout: u["fetchingOptions"]["timeout"],
                      }),
                        u["urlHandler"]["get"](
                          l,
                          u["fetchingOptions"],
                          function (e, t) {
                            var r =
                                2 < arguments["length"] &&
                                void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {},
                              i = Math["round"](Date["now"]() - o),
                              n = Object["assign"](
                                {
                                  url: l,
                                  previousUrl: d,
                                  wrapperDepth: c,
                                  error: e,
                                  duration: i,
                                },
                                r
                              );
                            u["emit"]("VAST-resolved", n), e ? s(e) : a(t);
                          }
                        );
                    });
                  },
                },
                {
                  key: "initParsingStatus",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this["rootURL"] = ""),
                      (this["remainingAds"] = []),
                      (this["parentURLs"] = []),
                      (this["errorURLTemplates"] = []),
                      (this["rootErrorURLTemplates"] = []),
                      (this["maxWrapperDepth"] = e["wrapperLimit"] || 10),
                      (this["fetchingOptions"] = {
                        timeout: e["timeout"] || 12e4,
                        withCredentials: e["withCredentials"],
                      }),
                      (this["urlHandler"] =
                        e["urlHandler"] || e["urlhandler"] || _),
                      (this["vastVersion"] = null);
                  },
                },
                {
                  key: "getRemainingAds",
                  value: function (e) {
                    var t = this;
                    if (0 === this["remainingAds"]["length"])
                      return Promise["reject"](new Error("No more ads are available for the given VAST"));
                    var r = e
                      ? k["flatten"](this["remainingAds"])
                      : this["remainingAds"]["shift"]();
                    return (
                      (this["errorURLTemplates"] = []),
                      (this["parentURLs"] = []),
                      this["resolveAds"](r, {
                        wrapperDepth: 0,
                        url: this["rootURL"],
                      })["then"](function (e) {
                        return t["buildVASTResponse"](e);
                      })
                    );
                  },
                },
                {
                  key: "getAndParseVAST",
                  value: function (t) {
                    var r = this,
                      i =
                        1 < arguments["length"] && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      this["initParsingStatus"](i),
                      this["URLTemplateFilters"]["forEach"](function (e) {
                        t = e(t);
                      }),
                      (this["rootURL"] = t),
                      this["fetchVAST"](t)["then"](function (e) {
                        return (
                          (i["previousUrl"] = t),
                          (i["isRootVAST"] = !0),
                          (i["url"] = t),
                          r["parse"](e, i)["then"](function (e) {
                            return r["buildVASTResponse"](e);
                          })
                        );
                      })
                    );
                  },
                },
                {
                  key: "parseVAST",
                  value: function (e) {
                    var t = this,
                      r =
                        1 < arguments["length"] && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      this["initParsingStatus"](r),
                      (r["isRootVAST"] = !0),
                      this["parse"](e, r)["then"](function (e) {
                        return t["buildVASTResponse"](e);
                      })
                    );
                  },
                },
                {
                  key: "buildVASTResponse",
                  value: function (e) {
                    var t,
                      r = {
                        ads:
                          (t = {
                            ads: e,
                            errorURLTemplates: this["getErrorURLTemplates"](),
                            version: this["vastVersion"],
                          })["ads"] || [],
                        errorURLTemplates: t["errorURLTemplates"] || [],
                        version: t["version"] || null,
                      };
                    return this["completeWrapperResolving"](r), r;
                  },
                },
                {
                  key: "parseVastXml",
                  value: function (e, t) {
                    var r = t["isRootVAST"],
                      i = void 0 !== r && r,
                      n = t["url"],
                      a = void 0 === n ? null : n,
                      s = t["wrapperDepth"],
                      o = void 0 === s ? 0 : s;
                    if (
                      !e ||
                      !e["documentElement"] ||
                      "VAST" !== e["documentElement"]["nodeName"]
                    )
                      throw (
                        (this["emit"]("VAST-ad-parsed", {
                          type: "ERROR",
                          url: a,
                          wrapperDepth: o,
                        }),
                        new Error("Invalid VAST XMLDocument"))
                      );
                    var l = [],
                      u = e["documentElement"]["childNodes"],
                      c = e["documentElement"]["getAttribute"]("version");
                    for (var d in (i && c && (this["vastVersion"] = c), u)) {
                      var p = u[d];
                      if ("Error" === p["nodeName"]) {
                        var h = R["parseNodeText"](p);
                        i
                          ? this["rootErrorURLTemplates"]["push"](h)
                          : this["errorURLTemplates"]["push"](h);
                      } else if ("Ad" === p["nodeName"]) {
                        var v = O(p, this["emit"]["bind"](this));
                        v["ad"]
                          ? (l["push"](v["ad"]),
                            this["emit"]("VAST-ad-parsed", {
                              type: v["type"],
                              url: a,
                              wrapperDepth: o,
                              adIndex: l["length"] - 1,
                              vastVersion: c,
                            }))
                          : this["trackVastError"](this["getErrorURLTemplates"](), {
                              ERRORCODE: 101,
                            });
                      }
                    }
                    return l;
                  },
                },
                {
                  key: "parse",
                  value: function (e, t) {
                    var r = t["url"],
                      i = void 0 === r ? null : r,
                      n = t["resolveAll"],
                      a = void 0 === n || n,
                      s = t["wrapperSequence"],
                      o = void 0 === s ? null : s,
                      l = t["previousUrl"],
                      u = void 0 === l ? null : l,
                      c = t["wrapperDepth"],
                      d = void 0 === c ? 0 : c,
                      p = t["isRootVAST"],
                      h = void 0 !== p && p,
                      v = [];
                    try {
                      v = this["parseVastXml"](e, {
                        isRootVAST: h,
                        url: i,
                        wrapperDepth: d,
                      });
                    } catch (e) {
                      return Promise["reject"](e);
                    }
                    var m = v["length"],
                      f = v[m - 1];
                    return (
                      1 === m &&
                        null != o &&
                        f &&
                        !f["sequence"] &&
                        (f["sequence"] = o),
                      !1 === a &&
                        ((this["remainingAds"] = R["splitVAST"](v)),
                        (v = this["remainingAds"]["shift"]())),
                      this["resolveAds"](v, {
                        wrapperDepth: d,
                        previousUrl: u,
                        url: i,
                      })
                    );
                  },
                },
                {
                  key: "resolveAds",
                  value: function () {
                    var i = this,
                      e =
                        0 < arguments["length"] && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      t = 1 < arguments["length"] ? arguments[1] : void 0,
                      n = t["wrapperDepth"],
                      a = t["previousUrl"],
                      s = t["url"],
                      r = [];
                    return (
                      (a = s),
                      e["forEach"](function (e) {
                        var t = i["resolveWrappers"](e, n, a);
                        r["push"](t);
                      }),
                      Promise["all"](r)["then"](function (e) {
                        var t = k["flatten"](e);
                        if (!t && 0 < i["remainingAds"]["length"]) {
                          var r = i["remainingAds"]["shift"]();
                          return i["resolveAds"](r, {
                            wrapperDepth: n,
                            previousUrl: a,
                            url: s,
                          });
                        }
                        return t;
                      })
                    );
                  },
                },
                {
                  key: "resolveWrappers",
                  value: function (i, n, a) {
                    var s = this;
                    return new Promise(function (t) {
                      if ((n++, !i["nextWrapperURL"]))
                        return delete i["nextWrapperURL"], t(i);
                      if (
                        n >= s["maxWrapperDepth"] ||
                        -1 !== s["parentURLs"]["indexOf"](i["nextWrapperURL"])
                      )
                        return (
                          (i["errorCode"] = 302),
                          delete i["nextWrapperURL"],
                          t(i)
                        );
                      (i["nextWrapperURL"] = R["resolveVastAdTagURI"](
                        i["nextWrapperURL"],
                        a
                      )),
                        s["URLTemplateFilters"]["forEach"](function (e) {
                          i["nextWrapperURL"] = e(i["nextWrapperURL"]);
                        });
                      var r = i["sequence"];
                      s["fetchVAST"](i["nextWrapperURL"], n, a)
                        ["then"](function (e) {
                          return s["parse"](e, {
                            url: i["nextWrapperURL"],
                            previousUrl: a,
                            wrapperSequence: r,
                            wrapperDepth: n,
                          })["then"](function (e) {
                            if ((delete i["nextWrapperURL"], 0 === e["length"]))
                              return (i["creatives"] = []), t(i);
                            e["forEach"](function (e) {
                              e && R["mergeWrapperAdData"](e, i);
                            }),
                              t(e);
                          });
                        })
                        ["catch"](function (e) {
                          (i["errorCode"] = 301),
                            (i["errorMessage"] = e["message"]),
                            t(i);
                        });
                    });
                  },
                },
                {
                  key: "completeWrapperResolving",
                  value: function (e) {
                    if (0 === e["ads"]["length"])
                      this["trackVastError"](e["errorURLTemplates"], {
                        ERRORCODE: 303,
                      });
                    else
                      for (
                        var t = e["ads"]["length"] - 1;
                        0 <= t;
                        t--
                      ) {
                        var r = e["ads"][t];
                        (r["errorCode"] ||
                          0 === r["creatives"]["length"]) &&
                          (this["trackVastError"](
                            r["errorURLTemplates"]["concat"](e["errorURLTemplates"]),
                            {
                              ERRORCODE: r["errorCode"] || 303,
                            },
                            {
                              ERRORMESSAGE: r["errorMessage"] || "",
                            },
                            {
                              extensions: r["extensions"],
                            },
                            {
                              system: r["system"],
                            }
                          ),
                          e["ads"]["splice"](t, 1));
                      }
                  },
                },
              ]),
              t
            );
          })(),
          G = null,
          Q = {
            data: {},
            length: 0,
            getItem: function (e) {
              return this["data"][e];
            },
            setItem: function (e, t) {
              (this["data"][e] = t),
                (this["length"] = Object["keys"](this["data"])[
                  "length"
                ]);
            },
            removeItem: function (e) {
              delete this["data"][e],
                (this["length"] = Object["keys"](this["data"])[
                  "length"
                ]);
            },
            clear: function () {
              (this["data"] = {}), (this["length"] = 0);
            },
          },
          X = (function () {
            function e() {
              l(this, e), (this["storage"] = this["initStorage"]());
            }
            return (
              n(e, [
                {
                  key: "initStorage",
                  value: function () {
                    if (G) return G;
                    try {
                      G =
                        "undefined" != typeof window && null !== window
                          ? window["localStorage"] || window["sessionStorage"]
                          : null;
                    } catch (e) {
                      G = null;
                    }
                    return (
                      (G && !this["isStorageDisabled"](G)) ||
                        (G = Q)["clear"](),
                      G
                    );
                  },
                },
                {
                  key: "isStorageDisabled",
                  value: function (e) {
                    var t = "__VASTStorage__";
                    try {
                      if ((e["setItem"](t, t), e["getItem"](t) !== t))
                        return e["removeItem"](t), !0;
                    } catch (e) {
                      return !0;
                    }
                    return e["removeItem"](t), !1;
                  },
                },
                {
                  key: "getItem",
                  value: function (e) {
                    return this["storage"]["getItem"](e);
                  },
                },
                {
                  key: "setItem",
                  value: function (e, t) {
                    return this["storage"]["setItem"](e, t);
                  },
                },
                {
                  key: "removeItem",
                  value: function (e) {
                    return this["storage"]["removeItem"](e);
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    return this["storage"]["clear"]();
                  },
                },
              ]),
              e
            );
          })(),
          K = (function () {
            function i(e, t, r) {
              l(this, i),
                (this["cappingFreeLunch"] = e || 0),
                (this["cappingMinimumTimeInterval"] = t || 0),
                (this["defaultOptions"] = {
                  withCredentials: !1,
                  timeout: 0,
                }),
                (this["vastParser"] = new z()),
                (this["storage"] = r || new X()),
                void 0 === this["lastSuccessfulAd"] && (this["lastSuccessfulAd"] = 0),
                void 0 === this["totalCalls"] && (this["totalCalls"] = 0),
                void 0 === this["totalCallsTimeout"] && (this["totalCallsTimeout"] = 0);
            }
            return (
              n(i, [
                {
                  key: "getParser",
                  value: function () {
                    return this["vastParser"];
                  },
                },
                {
                  key: "hasRemainingAds",
                  value: function () {
                    return 0 < this["vastParser"]["remainingAds"]["length"];
                  },
                },
                {
                  key: "getNextAds",
                  value: function (e) {
                    return this["vastParser"]["getRemainingAds"](e);
                  },
                },
                {
                  key: "get",
                  value: function (i) {
                    var n = this,
                      a =
                        1 < arguments["length"] && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      s = Date["now"]();
                    return (
                      (a = Object["assign"](this["defaultOptions"], a))[
                        "hasOwnProperty"
                      ]("resolveAll") || (a["resolveAll"] = !1),
                      this["totalCallsTimeout"] < s
                        ? ((this["totalCalls"] = 1),
                          (this["totalCallsTimeout"] = s + 36e5))
                        : this["totalCalls"]++,
                      new Promise(function (t, r) {
                        if (n["cappingFreeLunch"] >= n["totalCalls"])
                          return r(
                            new Error(
                              "VAST call canceled – FreeLunch capping not reached yet "
                                ["concat"](n["totalCalls"], "/")
                                ["concat"](n["cappingFreeLunch"])
                            )
                          );
                        var e = s - n["lastSuccessfulAd"];
                        if (e < 0) n["lastSuccessfulAd"] = 0;
                        else if (e < n["cappingMinimumTimeInterval"])
                          return r(
                            new Error(
                              "VAST call canceled – ("["concat"](
                                n["cappingMinimumTimeInterval"],
                                ")ms minimum interval reached"
                              )
                            )
                          );
                        n["vastParser"]
                          ["getAndParseVAST"](i, a)
                          ["then"](function (e) {
                            return t(e);
                          })
                          ["catch"](function (e) {
                            return r(e);
                          });
                      })
                    );
                  },
                },
                {
                  key: "lastSuccessfulAd",
                  get: function () {
                    return this["storage"]["getItem"]("vast-client-last-successful-ad");
                  },
                  set: function (e) {
                    this["storage"]["setItem"]("vast-client-last-successful-ad", e);
                  },
                },
                {
                  key: "totalCalls",
                  get: function () {
                    return this["storage"]["getItem"]("vast-client-total-calls");
                  },
                  set: function (e) {
                    this["storage"]["setItem"]("vast-client-total-calls", e);
                  },
                },
                {
                  key: "totalCallsTimeout",
                  get: function () {
                    return this["storage"]["getItem"]("vast-client-total-calls-timeout");
                  },
                  set: function (e) {
                    this["storage"]["setItem"]("vast-client-total-calls-timeout", e);
                  },
                },
              ]),
              i
            );
          })(),
          J = (function (e) {
            function o(e, t, r) {
              var i,
                n =
                  3 < arguments["length"] && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
              for (var a in (l(this, o),
              ((i = c(this, u(o)["call"](this)))["ad"] = t),
              (i["creative"] = r),
              (i["variation"] = n),
              (i["muted"] = !1),
              (i["impressed"] = !1),
              (i["skippable"] = !1),
              (i["trackingEvents"] = {}),
              (i["_alreadyTriggeredQuartiles"] = {}),
              (i["emitAlwaysEvents"] = [
                "creativeView",
                "start",
                "firstQuartile",
                "midpoint",
                "thirdQuartile",
                "complete",
                "resume",
                "pause",
                "rewind",
                "skip",
                "closeLinear",
                "close",
              ]),
              i["creative"]["trackingEvents"])) {
                var s = i["creative"]["trackingEvents"][a];
                i["trackingEvents"][a] = s["slice"](0);
              }
              return (
                "linear" === i["creative"]["type"]
                  ? i["_initLinearTracking"]()
                  : i["_initVariationTracking"](),
                e &&
                  i["on"]("start", function () {
                    e["lastSuccessfulAd"] = Date["now"]();
                  }),
                i
              );
            }
            return (
              a(o, M),
              n(o, [
                {
                  key: "_initLinearTracking",
                  value: function () {
                    (this["linear"] = !0),
                      (this["skipDelay"] = this["creative"]["skipDelay"]),
                      this["setDuration"](this["creative"]["duration"]),
                      (this["clickThroughURLTemplate"] = this["creative"]["videoClickThroughURLTemplate"]),
                      (this["clickTrackingURLTemplates"] = this["creative"]["videoClickTrackingURLTemplates"]);
                  },
                },
                {
                  key: "_initVariationTracking",
                  value: function () {
                    if (
                      ((this["linear"] = !1),
                      (this["skipDelay"] = -1),
                      this["variation"])
                    ) {
                      for (var e in this["variation"]["trackingEvents"]) {
                        var t = this["variation"]["trackingEvents"][e];
                        this["trackingEvents"][e]
                          ? (this["trackingEvents"][e] = this["trackingEvents"][e][
                              "concat"
                            ](t["slice"](0)))
                          : (this["trackingEvents"][e] = t["slice"](0));
                      }
                      "nonLinearAd" === this["variation"]["adType"]
                        ? ((this["clickThroughURLTemplate"] = this["variation"][
                            "nonlinearClickThroughURLTemplate"
                          ]),
                          (this["clickTrackingURLTemplates"] = this["variation"][
                            "nonlinearClickTrackingURLTemplates"
                          ]),
                          this["setDuration"](
                            this["variation"]["minSuggestedDuration"]
                          ))
                        : "companionAd" === this["variation"]["adType"] &&
                          ((this["clickThroughURLTemplate"] = this["variation"][
                            "companionClickThroughURLTemplate"
                          ]),
                          (this["clickTrackingURLTemplates"] = this["variation"][
                            "companionClickTrackingURLTemplates"
                          ]));
                    }
                  },
                },
                {
                  key: "setDuration",
                  value: function (e) {
                    (this["assetDuration"] = e),
                      (this["quartiles"] = {
                        firstQuartile:
                          Math["round"](25 * this["assetDuration"]) / 100,
                        midpoint:
                          Math["round"](50 * this["assetDuration"]) / 100,
                        thirdQuartile:
                          Math["round"](75 * this["assetDuration"]) / 100,
                      });
                  },
                },
                {
                  key: "setProgress",
                  value: function (e) {
                    var t = this,
                      r =
                        1 < arguments["length"] && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      i = this["skipDelay"] || -1;
                    if (
                      (-1 === i ||
                        this["skippable"] ||
                        (e < i
                          ? this["emit"]("skip-countdown", i - e)
                          : ((this["skippable"] = !0),
                            this["emit"]("skip-countdown", 0))),
                      0 < this["assetDuration"])
                    ) {
                      var n = [];
                      if (0 < e) {
                        var a = Math["round"](
                          (e / this["assetDuration"]) * 100
                        );
                        for (var s in (n["push"]("start"),
                        n["push"](
                          "progress-"["concat"](a, "%")
                        ),
                        n["push"](
                          "progress-"["concat"](Math["round"](e))
                        ),
                        this["quartiles"]))
                          this["isQuartileReached"](s, this["quartiles"][s], e) &&
                            (n["push"](s), (this["_alreadyTriggeredQuartiles"][s] = !0));
                      }
                      n["forEach"](function (e) {
                        t["track"](e, {
                          macros: r,
                          once: !0,
                        });
                      }),
                        e < this["progress"] &&
                          this["track"]("rewind", {
                            macros: r,
                          });
                    }
                    this["progress"] = e;
                  },
                },
                {
                  key: "isQuartileReached",
                  value: function (e, t, r) {
                    var i = !1;
                    return t <= r && !this["_alreadyTriggeredQuartiles"][e] && (i = !0), i;
                  },
                },
                {
                  key: "setMuted",
                  value: function (e) {
                    var t =
                      1 < arguments["length"] && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    this["muted"] !== e &&
                      this["track"](e ? "mute" : "unmute", {
                        macros: t,
                      }),
                      (this["muted"] = e);
                  },
                },
                {
                  key: "setPaused",
                  value: function (e) {
                    var t =
                      1 < arguments["length"] && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    this["paused"] !== e &&
                      this["track"](e ? "pause" : "resume", {
                        macros: t,
                      }),
                      (this["paused"] = e);
                  },
                },
                {
                  key: "setFullscreen",
                  value: function (e) {
                    var t =
                      1 < arguments["length"] && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    this["fullscreen"] !== e &&
                      this["track"](e ? "fullscreen" : "exitFullscreen", {
                        macros: t,
                      }),
                      (this["fullscreen"] = e);
                  },
                },
                {
                  key: "setExpand",
                  value: function (e) {
                    var t =
                      1 < arguments["length"] && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    this["expanded"] !== e &&
                      (this["track"](e ? "expand" : "collapse", {
                        macros: t,
                      }),
                      this["track"](e ? "playerExpand" : "playerCollapse", {
                        macros: t,
                      })),
                      (this["expanded"] = e);
                  },
                },
                {
                  key: "setSkipDelay",
                  value: function (e) {
                    "number" == typeof e && (this["skipDelay"] = e);
                  },
                },
                {
                  key: "trackImpression",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["impressed"] ||
                      ((this["impressed"] = !0),
                      this["trackURLs"](this["ad"]["impressionURLTemplates"]),
                      this["track"]("creativeView", {
                        macros: e,
                      }));
                  },
                },
                {
                  key: "errorWithCode",
                  value: function (e) {
                    var t =
                      1 < arguments["length"] &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    this["trackURLs"](
                      this["ad"]["errorURLTemplates"],
                      {
                        ERRORCODE: e,
                      },
                      {
                        isCustomCode: t,
                      }
                    );
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("complete", {
                      macros: e,
                    });
                  },
                },
                {
                  key: "notUsed",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("notUsed", {
                      macros: e,
                    }),
                      (this["trackingEvents"] = []);
                  },
                },
                {
                  key: "otherAdInteraction",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("otherAdInteraction", {
                      macros: e,
                    });
                  },
                },
                {
                  key: "acceptInvitation",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("acceptInvitation", {
                      macros: e,
                    });
                  },
                },
                {
                  key: "adExpand",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("adExpand", {
                      macros: e,
                    });
                  },
                },
                {
                  key: "adCollapse",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("adCollapse", {
                      macros: e,
                    });
                  },
                },
                {
                  key: "minimize",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("minimize", {
                      macros: e,
                    });
                  },
                },
                {
                  key: "verificationNotExecuted",
                  value: function () {
                    var r = this,
                      i =
                        0 < arguments["length"] && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                    if (
                      !this["ad"] ||
                      !this["ad"]["adVerifications"] ||
                      !this["ad"]["adVerifications"]["length"]
                    )
                      throw new Error("No adVerifications provided");
                    this["ad"]["adVerifications"]["forEach"](function (
                      e
                    ) {
                      if (e["trackingEvents"] && e["trackingEvents"]["verificationNotExecuted"]) {
                        var t = e["trackingEvents"]["verificationNotExecuted"];
                        r["trackURLs"](t, i),
                          r["emit"]("verificationNotExecuted", {
                            trackingURLTemplates: t,
                          });
                      }
                    });
                  },
                },
                {
                  key: "overlayViewDuration",
                  value: function (e) {
                    var t =
                      1 < arguments["length"] && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    (t["CONTENTPLAYHEAD"] = e),
                      (t["MEDIAPLAYHEAD"] = t["ADPLAYHEAD"] = t["CONTENTPLAYHEAD"]),
                      this["track"]("overlayViewDuration", {
                        macros: t,
                      });
                  },
                },
                {
                  key: "close",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"](
                      this["linear"] ? "closeLinear" : "close",
                      {
                        macros: e,
                      }
                    );
                  },
                },
                {
                  key: "skip",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("skip", {
                      macros: e,
                    });
                  },
                },
                {
                  key: "load",
                  value: function () {
                    var e =
                      0 < arguments["length"] && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this["track"]("loaded", {
                      macros: e,
                    });
                  },
                },
                {
                  key: "click",
                  value: function () {
                    var e =
                        0 < arguments["length"] && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        1 < arguments["length"] && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    this["clickTrackingURLTemplates"] &&
                      this["clickTrackingURLTemplates"]["length"] &&
                      this["trackURLs"](this["clickTrackingURLTemplates"], t);
                    var r = this["clickThroughURLTemplate"] || e;
                    if (r) {
                      this["linear"] &&
                        ((t["CONTENTPLAYHEAD"] = this["progressFormatted"]()),
                        (t["MEDIAPLAYHEAD"] = t["ADPLAYHEAD"] = t["CONTENTPLAYHEAD"]));
                      var i = k["resolveURLTemplates"]([r], t)[0];
                      this["emit"]("clickthrough", i);
                    }
                  },
                },
                {
                  key: "track",
                  value: function (e, t) {
                    var r = t["macros"],
                      i = void 0 === r ? {} : r,
                      n = t["once"],
                      a = void 0 !== n && n;
                    "closeLinear" === e &&
                      !this["trackingEvents"][e] &&
                      this["trackingEvents"]["close"] &&
                      (e = "close");
                    var s = this["trackingEvents"][e],
                      o = -1 < this["emitAlwaysEvents"]["indexOf"](e);
                    s
                      ? (this["emit"](e, {
                          trackingURLTemplates: s,
                        }),
                        this["trackURLs"](s, i))
                      : o && this["emit"](e, null),
                      a &&
                        (delete this["trackingEvents"][e],
                        o &&
                          this["emitAlwaysEvents"]["splice"](
                            this["emitAlwaysEvents"]["indexOf"](e),
                            1
                          ));
                  },
                },
                {
                  key: "trackURLs",
                  value: function (e) {
                    var t =
                        1 < arguments["length"] && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r =
                        2 < arguments["length"] && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    this["linear"] &&
                      (this["creative"] &&
                        this["creative"]["mediaFiles"] &&
                        this["creative"]["mediaFiles"][0] &&
                        this["creative"]["mediaFiles"][0]["fileURL"] &&
                        (t["ASSETURI"] = this["creative"]["mediaFiles"][0][
                          "fileURL"
                        ]),
                      !t["CONTENTPLAYHEAD"] &&
                        this["progress"] &&
                        ((t["CONTENTPLAYHEAD"] = this["progressFormatted"]()),
                        (t["MEDIAPLAYHEAD"] = t["ADPLAYHEAD"] = t["CONTENTPLAYHEAD"]))),
                      this["creative"] &&
                        this["creative"]["universalAdId"] &&
                        this["creative"]["universalAdId"]["idRegistry"] &&
                        this["creative"]["universalAdId"]["value"] &&
                        (t["UNIVERSALADID"] = ""
                          ["concat"](
                            this["creative"]["universalAdId"]["idRegistry"],
                            " "
                          )
                          ["concat"](
                            this["creative"]["universalAdId"]["value"]
                          )),
                      this["ad"] &&
                        this["ad"]["sequence"] &&
                        (t["PODSEQUENCE"] = this["ad"]["sequence"]),
                      k["track"](e, t, r);
                  },
                },
                {
                  key: "progressFormatted",
                  value: function () {
                    var e = parseInt(this["progress"]),
                      t = e / 3600;
                    t["length"] < 2 && (t = "0"["concat"](t));
                    var r = (e / 60) % 60;
                    r["length"] < 2 && (r = "0"["concat"](r));
                    var i = e % 60;
                    i["length"] < 2 && (i = "0"["concat"](r));
                    var n = parseInt(100 * (this["progress"] - e));
                    return ""
                      ["concat"](t, ":")
                      ["concat"](r, ":")
                      ["concat"](i, ".")
                      ["concat"](n);
                  },
                },
              ]),
              o
            );
          })();
        (e["VASTClient"] = K),
          (e["VASTParser"] = z),
          (e["VASTTracker"] = J),
          Object["defineProperty"](e, "__esModule", {
            value: !0,
          });
      });
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      function DOMParser(options) {
        this["options"] = options || {
          locator: {},
        };
      }
      DOMParser["prototype"]["parseFromString"] = function (source, mimeType) {
        var options = this["options"];
        var sax = new XMLReader();
        var domBuilder = options["domBuilder"] || new DOMHandler();
        var errorHandler = options["errorHandler"];
        var locator = options["locator"];
        var defaultNSMap = options["xmlns"] || {};
        var entityMap = {
          lt: "<",
          gt: ">",
          amp: "&",
          quot: '"',
          apos: "'",
        };
        if (locator) {
          domBuilder["setDocumentLocator"](locator);
        }
        sax["errorHandler"] = buildErrorHandler(
          errorHandler,
          domBuilder,
          locator
        );
        sax["domBuilder"] = options["domBuilder"] || domBuilder;
        if (/\/x?html?$/["test"](mimeType)) {
          entityMap["nbsp"] = " ";
          entityMap["copy"] = "©";
          defaultNSMap[""] = "http://www.w3.org/1999/xhtml";
        }
        defaultNSMap["xml"] = defaultNSMap["xml"] || "http://www.w3.org/XML/1998/namespace";
        if (source) {
          sax["parse"](source, defaultNSMap, entityMap);
        } else {
          sax["errorHandler"]["error"]("invalid doc source");
        }
        return domBuilder["doc"];
      };
      function buildErrorHandler(errorImpl, domBuilder, locator) {
        if (!errorImpl) {
          if (domBuilder instanceof DOMHandler) {
            return domBuilder;
          }
          errorImpl = domBuilder;
        }
        var errorHandler = {};
        var isCallback = errorImpl instanceof Function;
        locator = locator || {};
        function build(key) {
          var fn = errorImpl[key];
          if (!fn && isCallback) {
            fn =
              errorImpl["length"] == 2
                ? function (msg) {
                    errorImpl(key, msg);
                  }
                : errorImpl;
          }
          errorHandler[key] =
            (fn &&
              function (msg) {
                fn(
                  "[xmldom " + key + "]\t" + msg + _locator(locator)
                );
              }) ||
            function () {};
        }
        build("warning");
        build("error");
        build("fatalError");
        return errorHandler;
      }
      function DOMHandler() {
        this["cdata"] = false;
      }
      function position(locator, node) {
        node["lineNumber"] = locator["lineNumber"];
        node["columnNumber"] = locator["columnNumber"];
      }
      DOMHandler["prototype"] = {
        startDocument: function startDocument() {
          this["doc"] = new DOMImplementation()["createDocument"](
            null,
            null,
            null
          );
          if (this["locator"]) {
            this["doc"]["documentURI"] = this["locator"][
              "systemId"
            ];
          }
        },
        startElement: function startElement(
          namespaceURI,
          localName,
          qName,
          attrs
        ) {
          var doc = this["doc"];
          var el = doc["createElementNS"](namespaceURI, qName || localName);
          var len = attrs["length"];
          appendElement(this, el);
          this["currentElement"] = el;
          this["locator"] && position(this["locator"], el);
          for (var i = 0; i < len; i++) {
            var namespaceURI = attrs["getURI"](i);
            var value = attrs["getValue"](i);
            var qName = attrs["getQName"](i);
            var attr = doc["createAttributeNS"](namespaceURI, qName);
            this["locator"] && position(attrs["getLocator"](i), attr);
            attr["value"] = attr["nodeValue"] = value;
            el["setAttributeNode"](attr);
          }
        },
        endElement: function endElement(namespaceURI, localName, qName) {
          var current = this["currentElement"];
          var tagName = current["tagName"];
          this["currentElement"] = current["parentNode"];
        },
        startPrefixMapping: function startPrefixMapping(prefix, uri) {},
        endPrefixMapping: function endPrefixMapping(prefix) {},
        processingInstruction: function processingInstruction(target, data) {
          var ins = this["doc"]["createProcessingInstruction"](target, data);
          this["locator"] && position(this["locator"], ins);
          appendElement(this, ins);
        },
        ignorableWhitespace: function ignorableWhitespace(ch, start, length) {},
        characters: function characters(chars, start, length) {
          chars = _toString["apply"](this, arguments);
          if (chars) {
            if (this["cdata"]) {
              var charNode = this["doc"]["createCDATASection"](chars);
            } else {
              var charNode = this["doc"]["createTextNode"](chars);
            }
            if (this["currentElement"]) {
              this["currentElement"]["appendChild"](charNode);
            } else if (/^\s*$/["test"](chars)) {
              this["doc"]["appendChild"](charNode);
            }
            this["locator"] && position(this["locator"], charNode);
          }
        },
        skippedEntity: function skippedEntity(name) {},
        endDocument: function endDocument() {
          this["doc"]["normalize"]();
        },
        setDocumentLocator: function setDocumentLocator(locator) {
          if ((this["locator"] = locator)) {
            locator["lineNumber"] = 0;
          }
        },
        comment: function comment(chars, start, length) {
          chars = _toString["apply"](this, arguments);
          var comm = this["doc"]["createComment"](chars);
          this["locator"] && position(this["locator"], comm);
          appendElement(this, comm);
        },
        startCDATA: function startCDATA() {
          this["cdata"] = true;
        },
        endCDATA: function endCDATA() {
          this["cdata"] = false;
        },
        startDTD: function startDTD(name, publicId, systemId) {
          var impl = this["doc"]["implementation"];
          if (impl && impl["createDocumentType"]) {
            var dt = impl["createDocumentType"](name, publicId, systemId);
            this["locator"] && position(this["locator"], dt);
            appendElement(this, dt);
          }
        },
        warning: function warning(error) {
          console["warn"](
            "[xmldom warning]\t" + error,
            _locator(this["locator"])
          );
        },
        error: function error(_error) {
          console["error"](
            "[xmldom error]\t" + _error,
            _locator(this["locator"])
          );
        },
        fatalError: function fatalError(error) {
          console["error"](
            "[xmldom fatalError]\t" + error,
            _locator(this["locator"])
          );
          throw error;
        },
      };
      function _locator(l) {
        if (l) {
          return (
            "\n@" +
            (l["systemId"] || "") +
            "#[line:" +
            l["lineNumber"] +
            ",col:" +
            l["columnNumber"] +
            "]"
          );
        }
      }
      function _toString(chars, start, length) {
        if (typeof chars == "string") {
          return chars["substr"](start, length);
        } else {
          if (chars["length"] >= start + length || start) {
            return (
              new java["lang"]["String"](chars, start, length) +
              ""
            );
          }
          return chars;
        }
      }
      "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl"["replace"](/\w+/g, function (key) {
        DOMHandler["prototype"][key] = function () {
          return null;
        };
      });
      function appendElement(hander, node) {
        if (!hander["currentElement"]) {
          hander["doc"]["appendChild"](node);
        } else {
          hander["currentElement"]["appendChild"](node);
        }
      }
      var XMLReader = __webpack_require__(157)["XMLReader"];
      var DOMImplementation = (exports["DOMImplementation"] = __webpack_require__(93)[
        "DOMImplementation"
      ]);
      exports["XMLSerializer"] = __webpack_require__(93)["XMLSerializer"];
      exports["DOMParser"] = DOMParser;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameChar = new RegExp(
        "[\\-\\.0-9" +
          nameStartChar["source"]["slice"](1, -1) +
          "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"
      );
      var tagNamePattern = new RegExp(
        "^" +
          nameStartChar["source"] +
          nameChar["source"] +
          "*(?::" +
          nameStartChar["source"] +
          nameChar["source"] +
          "*)?$"
      );
      var S_TAG = 0;
      var S_ATTR = 1;
      var S_ATTR_SPACE = 2;
      var S_EQ = 3;
      var S_ATTR_NOQUOT_VALUE = 4;
      var S_ATTR_END = 5;
      var S_TAG_SPACE = 6;
      var S_TAG_CLOSE = 7;
      function XMLReader() {}
      XMLReader["prototype"] = {
        parse: function parse(source, defaultNSMap, entityMap) {
          var domBuilder = this["domBuilder"];
          domBuilder["startDocument"]();
          _copy(defaultNSMap, (defaultNSMap = {}));
          _parse(
            source,
            defaultNSMap,
            entityMap,
            domBuilder,
            this["errorHandler"]
          );
          domBuilder["endDocument"]();
        },
      };
      function _parse(
        source,
        defaultNSMapCopy,
        entityMap,
        domBuilder,
        errorHandler
      ) {
        function fixedFromCharCode(code) {
          if (code > 65535) {
            code -= 65536;
            var surrogate1 = 55296 + (code >> 10),
              surrogate2 = 56320 + (code & 1023);
            return String["fromCharCode"](surrogate1, surrogate2);
          } else {
            return String["fromCharCode"](code);
          }
        }
        function entityReplacer(a) {
          var k = a["slice"](1, -1);
          if (k in entityMap) {
            return entityMap[k];
          } else if (k["charAt"](0) === "#") {
            return fixedFromCharCode(
              parseInt(
                k["substr"](1)["replace"]("x", "0x")
              )
            );
          } else {
            errorHandler["error"]("entity not found:" + a);
            return a;
          }
        }
        function appendText(end) {
          if (end > start) {
            var xt = source["substring"](start, end)["replace"](
              /&#?\w+;/g,
              entityReplacer
            );
            locator && position(start);
            domBuilder["characters"](xt, 0, end - start);
            start = end;
          }
        }
        function position(p, m) {
          while (p >= lineEnd && (m = linePattern["exec"](source))) {
            lineStart = m["index"];
            lineEnd = lineStart + m[0]["length"];
            locator["lineNumber"]++;
          }
          locator["columnNumber"] = p - lineStart + 1;
        }
        var lineStart = 0;
        var lineEnd = 0;
        var linePattern = /.*(?:\r\n?|\n)|.*$/g;
        var locator = domBuilder["locator"];
        var parseStack = [
          {
            currentNSMap: defaultNSMapCopy,
          },
        ];
        var closeMap = {};
        var start = 0;
        while (true) {
          try {
            var tagStart = source["indexOf"]("<", start);
            if (tagStart < 0) {
              if (!source["substr"](start)["match"](/^\s*$/)) {
                var doc = domBuilder["doc"];
                var text = doc["createTextNode"](source["substr"](start));
                doc["appendChild"](text);
                domBuilder["currentElement"] = text;
              }
              return;
            }
            if (tagStart > start) {
              appendText(tagStart);
            }
            switch (source["charAt"](tagStart + 1)) {
              case "/":
                var end = source["indexOf"](">", tagStart + 3);
                var tagName = source["substring"](tagStart + 2, end);
                var config = parseStack["pop"]();
                if (end < 0) {
                  tagName = source["substring"](tagStart + 2)["replace"](
                    /[\s<].*/,
                    ""
                  );
                  errorHandler["error"](
                    "end tag name: " +
                      tagName +
                      " is not complete:" +
                      config["tagName"]
                  );
                  end = tagStart + 1 + tagName["length"];
                } else if (tagName["match"](/\s</)) {
                  tagName = tagName["replace"](/[\s<].*/, "");
                  errorHandler["error"](
                    "end tag name: " + tagName + " maybe not complete"
                  );
                  end = tagStart + 1 + tagName["length"];
                }
                var localNSMap = config["localNSMap"];
                var endMatch = config["tagName"] == tagName;
                var endIgnoreCaseMach =
                  endMatch ||
                  (config["tagName"] &&
                    config["tagName"]["toLowerCase"]() ==
                      tagName["toLowerCase"]());
                if (endIgnoreCaseMach) {
                  domBuilder["endElement"](
                    config["uri"],
                    config["localName"],
                    tagName
                  );
                  if (localNSMap) {
                    for (var prefix in localNSMap) {
                      domBuilder["endPrefixMapping"](prefix);
                    }
                  }
                  if (!endMatch) {
                    errorHandler["fatalError"](
                      "end tag name: " +
                        tagName +
                        " is not match the current start tagName:" +
                        config["tagName"]
                    );
                  }
                } else {
                  parseStack["push"](config);
                }
                end++;
                break;
              case "?":
                locator && position(tagStart);
                end = parseInstruction(source, tagStart, domBuilder);
                break;
              case "!":
                locator && position(tagStart);
                end = parseDCC(source, tagStart, domBuilder, errorHandler);
                break;
              default:
                locator && position(tagStart);
                var el = new ElementAttributes();
                var currentNSMap =
                  parseStack[parseStack["length"] - 1]["currentNSMap"];
                var end = parseElementStartPart(
                  source,
                  tagStart,
                  el,
                  currentNSMap,
                  entityReplacer,
                  errorHandler
                );
                var len = el["length"];
                if (
                  !el["closed"] &&
                  fixSelfClosed(source, end, el["tagName"], closeMap)
                ) {
                  el["closed"] = true;
                  if (!entityMap["nbsp"]) {
                    errorHandler["warning"]("unclosed xml attribute");
                  }
                }
                if (locator && len) {
                  var locator2 = copyLocator(locator, {});
                  for (var i = 0; i < len; i++) {
                    var a = el[i];
                    position(a["offset"]);
                    a["locator"] = copyLocator(locator, {});
                  }
                  domBuilder["locator"] = locator2;
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack["push"](el);
                  }
                  domBuilder["locator"] = locator;
                } else {
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack["push"](el);
                  }
                }
                if (el["uri"] === "http://www.w3.org/1999/xhtml" && !el["closed"]) {
                  end = parseHtmlSpecialContent(
                    source,
                    end,
                    el["tagName"],
                    entityReplacer,
                    domBuilder
                  );
                } else {
                  end++;
                }
            }
          } catch (e) {
            errorHandler["error"]("element parse error: " + e);
            end = -1;
          }
          if (end > start) {
            start = end;
          } else {
            appendText(Math["max"](tagStart, start) + 1);
          }
        }
      }
      function copyLocator(f, t) {
        t["lineNumber"] = f["lineNumber"];
        t["columnNumber"] = f["columnNumber"];
        return t;
      }
      function parseElementStartPart(
        source,
        start,
        el,
        currentNSMap,
        entityReplacer,
        errorHandler
      ) {
        var attrName;
        var value;
        var p = ++start;
        var s = S_TAG;
        while (true) {
          var c = source["charAt"](p);
          switch (c) {
            case "=":
              if (s === S_ATTR) {
                attrName = source["slice"](start, p);
                s = S_EQ;
              } else if (s === S_ATTR_SPACE) {
                s = S_EQ;
              } else {
                throw new Error("attribute equal must after attrName");
              }
              break;
            case "'":
            case '"':
              if (s === S_EQ || s === S_ATTR) {
                if (s === S_ATTR) {
                  errorHandler["warning"]('attribute value must after "="');
                  attrName = source["slice"](start, p);
                }
                start = p + 1;
                p = source["indexOf"](c, start);
                if (p > 0) {
                  value = source["slice"](start, p)["replace"](
                    /&#?\w+;/g,
                    entityReplacer
                  );
                  el["add"](attrName, value, start - 1);
                  s = S_ATTR_END;
                } else {
                  throw new Error("attribute value no end '" + c + "' match");
                }
              } else if (s == S_ATTR_NOQUOT_VALUE) {
                value = source["slice"](start, p)["replace"](
                  /&#?\w+;/g,
                  entityReplacer
                );
                el["add"](attrName, value, start);
                errorHandler["warning"](
                  'attribute "' + attrName + '" missed start quot(' + c + ")!!"
                );
                start = p + 1;
                s = S_ATTR_END;
              } else {
                throw new Error('attribute value must after "="');
              }
              break;
            case "/":
              switch (s) {
                case S_TAG:
                  el["setTagName"](source["slice"](start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  s = S_TAG_CLOSE;
                  el["closed"] = true;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                case S_ATTR_SPACE:
                  break;
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              errorHandler["error"]("unexpected end of input");
              if (s == S_TAG) {
                el["setTagName"](source["slice"](start, p));
              }
              return p;
            case ">":
              switch (s) {
                case S_TAG:
                  el["setTagName"](source["slice"](start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  break;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                  value = source["slice"](start, p);
                  if (value["slice"](-1) === "/") {
                    el["closed"] = true;
                    value = value["slice"](0, -1);
                  }
                case S_ATTR_SPACE:
                  if (s === S_ATTR_SPACE) {
                    value = attrName;
                  }
                  if (s == S_ATTR_NOQUOT_VALUE) {
                    errorHandler["warning"](
                      'attribute "' + value + '" missed quot(")!!'
                    );
                    el["add"](
                      attrName,
                      value["replace"](/&#?\w+;/g, entityReplacer),
                      start
                    );
                  } else {
                    if (
                      currentNSMap[""] !== "http://www.w3.org/1999/xhtml" ||
                      !value["match"](/^(?:disabled|checked|selected)$/i)
                    ) {
                      errorHandler["warning"](
                        'attribute "' +
                          value +
                          '" missed value!! "' +
                          value +
                          '" instead!!'
                      );
                    }
                    el["add"](value, value, start);
                  }
                  break;
                case S_EQ:
                  throw new Error("attribute value missed!!");
              }
              return p;
            case "":
              c = " ";
            default:
              if (c <= " ") {
                switch (s) {
                  case S_TAG:
                    el["setTagName"](source["slice"](start, p));
                    s = S_TAG_SPACE;
                    break;
                  case S_ATTR:
                    attrName = source["slice"](start, p);
                    s = S_ATTR_SPACE;
                    break;
                  case S_ATTR_NOQUOT_VALUE:
                    var value = source["slice"](start, p)["replace"](
                      /&#?\w+;/g,
                      entityReplacer
                    );
                    errorHandler["warning"](
                      'attribute "' + value + '" missed quot(")!!'
                    );
                    el["add"](attrName, value, start);
                  case S_ATTR_END:
                    s = S_TAG_SPACE;
                    break;
                }
              } else {
                switch (s) {
                  case S_ATTR_SPACE:
                    var tagName = el["tagName"];
                    if (
                      currentNSMap[""] !== "http://www.w3.org/1999/xhtml" ||
                      !attrName["match"](
                        /^(?:disabled|checked|selected)$/i
                      )
                    ) {
                      errorHandler["warning"](
                        'attribute "' +
                          attrName +
                          '" missed value!! "' +
                          attrName +
                          '" instead2!!'
                      );
                    }
                    el["add"](attrName, attrName, start);
                    start = p;
                    s = S_ATTR;
                    break;
                  case S_ATTR_END:
                    errorHandler["warning"](
                      'attribute space is required"' + attrName + '"!!'
                    );
                  case S_TAG_SPACE:
                    s = S_ATTR;
                    start = p;
                    break;
                  case S_EQ:
                    s = S_ATTR_NOQUOT_VALUE;
                    start = p;
                    break;
                  case S_TAG_CLOSE:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
              }
          }
          p++;
        }
      }
      function appendElement(el, domBuilder, currentNSMap) {
        var tagName = el["tagName"];
        var localNSMap = null;
        var i = el["length"];
        while (i--) {
          var a = el[i];
          var qName = a["qName"];
          var value = a["value"];
          var nsp = qName["indexOf"](":");
          if (nsp > 0) {
            var prefix = (a["prefix"] = qName["slice"](0, nsp));
            var localName = qName["slice"](nsp + 1);
            var nsPrefix = prefix === "xmlns" && localName;
          } else {
            localName = qName;
            prefix = null;
            nsPrefix = qName === "xmlns" && "";
          }
          a["localName"] = localName;
          if (nsPrefix !== false) {
            if (localNSMap == null) {
              localNSMap = {};
              _copy(currentNSMap, (currentNSMap = {}));
            }
            currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
            a["uri"] = "http://www.w3.org/2000/xmlns/";
            domBuilder["startPrefixMapping"](nsPrefix, value);
          }
        }
        var i = el["length"];
        while (i--) {
          a = el[i];
          var prefix = a["prefix"];
          if (prefix) {
            if (prefix === "xml") {
              a["uri"] = "http://www.w3.org/XML/1998/namespace";
            }
            if (prefix !== "xmlns") {
              a["uri"] = currentNSMap[prefix || ""];
            }
          }
        }
        var nsp = tagName["indexOf"](":");
        if (nsp > 0) {
          prefix = el["prefix"] = tagName["slice"](0, nsp);
          localName = el["localName"] = tagName["slice"](nsp + 1);
        } else {
          prefix = null;
          localName = el["localName"] = tagName;
        }
        var ns = (el["uri"] = currentNSMap[prefix || ""]);
        domBuilder["startElement"](ns, localName, tagName, el);
        if (el["closed"]) {
          domBuilder["endElement"](ns, localName, tagName);
          if (localNSMap) {
            for (prefix in localNSMap) {
              domBuilder["endPrefixMapping"](prefix);
            }
          }
        } else {
          el["currentNSMap"] = currentNSMap;
          el["localNSMap"] = localNSMap;
          return true;
        }
      }
      function parseHtmlSpecialContent(
        source,
        elStartEnd,
        tagName,
        entityReplacer,
        domBuilder
      ) {
        if (/^(?:script|textarea)$/i["test"](tagName)) {
          var elEndStart = source["indexOf"](
            "</" + tagName + ">",
            elStartEnd
          );
          var text = source["substring"](elStartEnd + 1, elEndStart);
          if (/[&<]/["test"](text)) {
            if (/^script$/i["test"](tagName)) {
              domBuilder["characters"](text, 0, text["length"]);
              return elEndStart;
            }
            text = text["replace"](/&#?\w+;/g, entityReplacer);
            domBuilder["characters"](text, 0, text["length"]);
            return elEndStart;
          }
        }
        return elStartEnd + 1;
      }
      function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
        var pos = closeMap[tagName];
        if (pos == null) {
          pos = source["lastIndexOf"]("</" + tagName + ">");
          if (pos < elStartEnd) {
            pos = source["lastIndexOf"]("</" + tagName);
          }
          closeMap[tagName] = pos;
        }
        return pos < elStartEnd;
      }
      function _copy(source, target) {
        for (var n in source) {
          target[n] = source[n];
        }
      }
      function parseDCC(source, start, domBuilder, errorHandler) {
        var next = source["charAt"](start + 2);
        switch (next) {
          case "-":
            if (source["charAt"](start + 3) === "-") {
              var end = source["indexOf"]("--\x3e", start + 4);
              if (end > start) {
                domBuilder["comment"](source, start + 4, end - start - 4);
                return end + 3;
              } else {
                errorHandler["error"]("Unclosed comment");
                return -1;
              }
            } else {
              return -1;
            }
          default:
            if (source["substr"](start + 3, 6) == "CDATA[") {
              var end = source["indexOf"]("]]>", start + 9);
              domBuilder["startCDATA"]();
              domBuilder["characters"](source, start + 9, end - start - 9);
              domBuilder["endCDATA"]();
              return end + 3;
            }
            var matchs = split(source, start);
            var len = matchs["length"];
            if (len > 1 && /!doctype/i["test"](matchs[0][0])) {
              var name = matchs[1][0];
              var pubid =
                len > 3 &&
                /^public$/i["test"](matchs[2][0]) &&
                matchs[3][0];
              var sysid = len > 4 && matchs[4][0];
              var lastMatch = matchs[len - 1];
              domBuilder["startDTD"](
                name,
                pubid && pubid["replace"](/^(['"])(.*?)\1$/, "$2"),
                sysid && sysid["replace"](/^(['"])(.*?)\1$/, "$2")
              );
              domBuilder["endDTD"]();
              return lastMatch["index"] + lastMatch[0]["length"];
            }
        }
        return -1;
      }
      function parseInstruction(source, start, domBuilder) {
        var end = source["indexOf"]("?>", start);
        if (end) {
          var match = source["substring"](start, end)["match"](
            /^<\?(\S*)\s*([\s\S]*?)\s*$/
          );
          if (match) {
            var len = match[0]["length"];
            domBuilder["processingInstruction"](match[1], match[2]);
            return end + 2;
          } else {
            return -1;
          }
        }
        return -1;
      }
      function ElementAttributes(source) {}
      ElementAttributes["prototype"] = {
        setTagName: function setTagName(tagName) {
          if (!tagNamePattern["test"](tagName)) {
            throw new Error("invalid tagName:" + tagName);
          }
          this["tagName"] = tagName;
        },
        add: function add(qName, value, offset) {
          if (!tagNamePattern["test"](qName)) {
            throw new Error("invalid attribute:" + qName);
          }
          this[this["length"]++] = {
            qName: qName,
            value: value,
            offset: offset,
          };
        },
        length: 0,
        getLocalName: function getLocalName(i) {
          return this[i]["localName"];
        },
        getLocator: function getLocator(i) {
          return this[i]["locator"];
        },
        getQName: function getQName(i) {
          return this[i]["qName"];
        },
        getURI: function getURI(i) {
          return this[i]["uri"];
        },
        getValue: function getValue(i) {
          return this[i]["value"];
        },
      };
      function _set_proto_(thiz, parent) {
        thiz["__proto__"] = parent;
        return thiz;
      }
      if (!(_set_proto_({}, _set_proto_["prototype"]) instanceof _set_proto_)) {
        _set_proto_ = function _set_proto_(thiz, parent) {
          function p() {}
          p["prototype"] = parent;
          p = new p();
          for (parent in thiz) {
            p[parent] = thiz[parent];
          }
          return p;
        };
      }
      function split(source, start) {
        var match;
        var buf = [];
        var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
        reg["lastIndex"] = start;
        reg["exec"](source);
        while ((match = reg["exec"](source))) {
          buf["push"](match);
          if (match[1]) return buf;
        }
      }
      exports["XMLReader"] = XMLReader;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(159),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(160);
      var $Object = __webpack_require__(0)["Object"];
      module["exports"] = function create(P, D) {
        return $Object["create"](P, D);
      };
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(3);
      $export($export["S"], "Object", {
        create: __webpack_require__(45),
      });
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var R = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply =
        R && typeof R["apply"] === "function"
          ? R["apply"]
          : function ReflectApply(target, receiver, args) {
              return Function["prototype"]["apply"]["call"](
                target,
                receiver,
                args
              );
            };
      var ReflectOwnKeys;
      if (R && typeof R["ownKeys"] === "function") {
        ReflectOwnKeys = R["ownKeys"];
      } else if (Object["getOwnPropertySymbols"]) {
        ReflectOwnKeys = function ReflectOwnKeys(target) {
          return Object["getOwnPropertyNames"](target)["concat"](
            Object["getOwnPropertySymbols"](target)
          );
        };
      } else {
        ReflectOwnKeys = function ReflectOwnKeys(target) {
          return Object["getOwnPropertyNames"](target);
        };
      }
      function ProcessEmitWarning(warning) {
        if (console && console["warn"]) console["warn"](warning);
      }
      var NumberIsNaN =
        Number["isNaN"] ||
        function NumberIsNaN(value) {
          return value !== value;
        };
      function EventEmitter() {
        EventEmitter["init"]["call"](this);
      }
      module["exports"] = EventEmitter;
      EventEmitter["EventEmitter"] = EventEmitter;
      EventEmitter["prototype"]["_events"] = undefined;
      EventEmitter["prototype"]["_eventsCount"] = 0;
      EventEmitter["prototype"]["_maxListeners"] = undefined;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }
      Object["defineProperty"](EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: function () {
          return defaultMaxListeners;
        },
        set: function (arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        },
      });
      EventEmitter["init"] = function () {
        if (
          this["_events"] === undefined ||
          this["_events"] === Object["getPrototypeOf"](this)["_events"]
        ) {
          this["_events"] = Object["create"](null);
          this["_eventsCount"] = 0;
        }
        this["_maxListeners"] = this["_maxListeners"] || undefined;
      };
      EventEmitter["prototype"]["setMaxListeners"] = function setMaxListeners(n) {
        if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        }
        this["_maxListeners"] = n;
        return this;
      };
      function _getMaxListeners(that) {
        if (that["_maxListeners"] === undefined)
          return EventEmitter["defaultMaxListeners"];
        return that["_maxListeners"];
      }
      EventEmitter["prototype"]["getMaxListeners"] = function getMaxListeners() {
        return _getMaxListeners(this);
      };
      EventEmitter["prototype"]["emit"] = function emit(type) {
        var args = [];
        for (var i = 1; i < arguments["length"]; i++)
          args["push"](arguments[i]);
        var doError = type === "error";
        var events = this["_events"];
        if (events !== undefined)
          doError = doError && events["error"] === undefined;
        else if (!doError) return false;
        if (doError) {
          var er;
          if (args["length"] > 0) er = args[0];
          if (er instanceof Error) {
            throw er;
          }
          var err = new Error(
            "Unhandled error." +
              (er
                ? " (" + er["message"] + ")"
                : "")
          );
          err["context"] = er;
          throw err;
        }
        var handler = events[type];
        if (handler === undefined) return false;
        if (typeof handler === "function") {
          ReflectApply(handler, this, args);
        } else {
          var len = handler["length"];
          var listeners = arrayClone(handler, len);
          for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
        }
        return true;
      };
      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        checkListener(listener);
        events = target["_events"];
        if (events === undefined) {
          events = target["_events"] = Object["create"](null);
          target["_eventsCount"] = 0;
        } else {
          if (events["newListener"] !== undefined) {
            target["emit"](
              "newListener",
              type,
              listener["listener"] ? listener["listener"] : listener
            );
            events = target["_events"];
          }
          existing = events[type];
        }
        if (existing === undefined) {
          existing = events[type] = listener;
          ++target["_eventsCount"];
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend
              ? [listener, existing]
              : [existing, listener];
          } else if (prepend) {
            existing["unshift"](listener);
          } else {
            existing["push"](listener);
          }
          m = _getMaxListeners(target);
          if (m > 0 && existing["length"] > m && !existing["warned"]) {
            existing["warned"] = true;
            var w = new Error(
              "Possible EventEmitter memory leak detected. " +
                existing["length"] +
                " " +
                String(type) +
                " listeners " +
                "added. Use emitter.setMaxListeners() to " +
                "increase limit"
            );
            w["name"] = "MaxListenersExceededWarning";
            w["emitter"] = target;
            w["type"] = type;
            w["count"] = existing["length"];
            ProcessEmitWarning(w);
          }
        }
        return target;
      }
      EventEmitter["prototype"]["addListener"] = function addListener(
        type,
        listener
      ) {
        return _addListener(this, type, listener, false);
      };
      EventEmitter["prototype"]["on"] =
        EventEmitter["prototype"]["addListener"];
      EventEmitter["prototype"]["prependListener"] = function prependListener(
        type,
        listener
      ) {
        return _addListener(this, type, listener, true);
      };
      function onceWrapper() {
        if (!this["fired"]) {
          this["target"]["removeListener"](
            this["type"],
            this["wrapFn"]
          );
          this["fired"] = true;
          if (arguments["length"] === 0)
            return this["listener"]["call"](this["target"]);
          return this["listener"]["apply"](
            this["target"],
            arguments
          );
        }
      }
      function _onceWrap(target, type, listener) {
        var state = {
          fired: false,
          wrapFn: undefined,
          target: target,
          type: type,
          listener: listener,
        };
        var wrapped = onceWrapper["bind"](state);
        wrapped["listener"] = listener;
        state["wrapFn"] = wrapped;
        return wrapped;
      }
      EventEmitter["prototype"]["once"] = function once(type, listener) {
        checkListener(listener);
        this["on"](type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter["prototype"]["prependOnceListener"] = function prependOnceListener(
        type,
        listener
      ) {
        checkListener(listener);
        this["prependListener"](type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter["prototype"]["removeListener"] = function removeListener(
        type,
        listener
      ) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this["_events"];
        if (events === undefined) return this;
        list = events[type];
        if (list === undefined) return this;
        if (list === listener || list["listener"] === listener) {
          if (--this["_eventsCount"] === 0)
            this["_events"] = Object["create"](null);
          else {
            delete events[type];
            if (events["removeListener"])
              this["emit"](
                "removeListener",
                type,
                list["listener"] || listener
              );
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i = list["length"] - 1; i >= 0; i--) {
            if (list[i] === listener || list[i]["listener"] === listener) {
              originalListener = list[i]["listener"];
              position = i;
              break;
            }
          }
          if (position < 0) return this;
          if (position === 0) list["shift"]();
          else {
            spliceOne(list, position);
          }
          if (list["length"] === 1) events[type] = list[0];
          if (events["removeListener"] !== undefined)
            this["emit"](
              "removeListener",
              type,
              originalListener || listener
            );
        }
        return this;
      };
      EventEmitter["prototype"]["off"] =
        EventEmitter["prototype"]["removeListener"];
      EventEmitter["prototype"]["removeAllListeners"] = function removeAllListeners(
        type
      ) {
        var listeners, events, i;
        events = this["_events"];
        if (events === undefined) return this;
        if (events["removeListener"] === undefined) {
          if (arguments["length"] === 0) {
            this["_events"] = Object["create"](null);
            this["_eventsCount"] = 0;
          } else if (events[type] !== undefined) {
            if (--this["_eventsCount"] === 0)
              this["_events"] = Object["create"](null);
            else delete events[type];
          }
          return this;
        }
        if (arguments["length"] === 0) {
          var keys = Object["keys"](events);
          var key;
          for (i = 0; i < keys["length"]; ++i) {
            key = keys[i];
            if (key === "removeListener") continue;
            this["removeAllListeners"](key);
          }
          this["removeAllListeners"]("removeListener");
          this["_events"] = Object["create"](null);
          this["_eventsCount"] = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this["removeListener"](type, listeners);
        } else if (listeners !== undefined) {
          for (i = listeners["length"] - 1; i >= 0; i--) {
            this["removeListener"](type, listeners[i]);
          }
        }
        return this;
      };
      function _listeners(target, type, unwrap) {
        var events = target["_events"];
        if (events === undefined) return [];
        var evlistener = events[type];
        if (evlistener === undefined) return [];
        if (typeof evlistener === "function")
          return unwrap
            ? [evlistener["listener"] || evlistener]
            : [evlistener];
        return unwrap
          ? unwrapListeners(evlistener)
          : arrayClone(evlistener, evlistener["length"]);
      }
      EventEmitter["prototype"]["listeners"] = function listeners(type) {
        return _listeners(this, type, true);
      };
      EventEmitter["prototype"]["rawListeners"] = function rawListeners(type) {
        return _listeners(this, type, false);
      };
      EventEmitter["listenerCount"] = function (emitter, type) {
        if (typeof emitter["listenerCount"] === "function") {
          return emitter["listenerCount"](type);
        } else {
          return listenerCount["call"](emitter, type);
        }
      };
      EventEmitter["prototype"]["listenerCount"] = listenerCount;
      function listenerCount(type) {
        var events = this["_events"];
        if (events !== undefined) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== undefined) {
            return evlistener["length"];
          }
        }
        return 0;
      }
      EventEmitter["prototype"]["eventNames"] = function eventNames() {
        return this["_eventsCount"] > 0
          ? ReflectOwnKeys(this["_events"])
          : [];
      };
      function arrayClone(arr, n) {
        var copy = new Array(n);
        for (var i = 0; i < n; ++i) copy[i] = arr[i];
        return copy;
      }
      function spliceOne(list, index) {
        for (; index + 1 < list["length"]; index++)
          list[index] = list[index + 1];
        list["pop"]();
      }
      function unwrapListeners(arr) {
        var ret = new Array(arr["length"]);
        for (var i = 0; i < ret["length"]; ++i) {
          ret[i] = arr[i]["listener"] || arr[i];
        }
        return ret;
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var _classCallCheck2 = __webpack_require__(13);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(14);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _util = __webpack_require__(15);
      var _util2 = _interopRequireDefault(_util);
      var _eventbus = __webpack_require__(38);
      var _eventbus2 = _interopRequireDefault(_eventbus);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var Timeline = (function () {
        function Timeline() {
          var adBreaks =
            arguments["length"] > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];
          var ads = arguments[1];
          var config =
            arguments["length"] > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          (0, _classCallCheck3["default"])(this, Timeline);
          this["_adBreaks"] = adBreaks;
          this["_ads"] = ads;
          this["currentTime"] = 0;
          this["startTimestampOfLive"];
          this["currentYearTimestamp"] = 1546297200;
          this["jumpDetectionThreshold"] = 2;
          this["lastReceivedTime"] = 0;
          this["config"] = config;
          this["config"]["adStartThreshold"] =
            this["config"]["adStartThreshold"] || 0.4;
          _eventbus2["default"]["on"](
            "adprestart",
            this["_onAdPreStart"]["bind"](this)
          );
          this["isPlayingContent"] = false;
          _util2["default"]["logging"] = config["logging"];
        }
        (0, _createClass3["default"])(Timeline, [
          {
            key: "update",
            value: function update(time) {
              var requestedTime = this["_normaliseTime"](time);
              var currentAdBreak = this["getAdBreak"](
                requestedTime,
                this["config"]["adStartThreshold"]
              );
              if (this["_isValidPosition"](requestedTime, currentAdBreak)) {
                this["lastReceivedTime"] = requestedTime;
                this["_checkAdExpectation"](currentAdBreak);
                this["_setCurrentTime"](requestedTime);
                this["_checkContentStarted"]();
              }
            },
          },
          {
            key: "getCurrentTimeWithoutAds",
            value: function getCurrentTimeWithoutAds() {
              return this["_getTimeWithoutAds"](this["currentTime"]);
            },
          },
          {
            key: "getDurationWithoutAds",
            value: function getDurationWithoutAds(videoDuration) {
              return this["_getTimeWithoutAds"](videoDuration);
            },
          },
          {
            key: "getAdBreak",
            value: function getAdBreak(time) {
              var startThreshold =
                arguments["length"] > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : 0;
              if (this["_adBreaks"]) {
                for (var i = 0; i < this["_adBreaks"]["length"]; i++) {
                  var adBreak = this["_adBreaks"][i];
                  if (this["_isInAdBreak"](time, adBreak, startThreshold)) {
                    return adBreak;
                  }
                }
              }
            },
          },
          {
            key: "getCurrentAd",
            value: function getCurrentAd() {
              for (var i = 0; i < this["_ads"]["length"]; i++) {
                var ad = this["_ads"][i];
                if (this["_isInAdBreak"](this["currentTime"], ad)) return ad;
              }
            },
          },
          {
            key: "getNextAd",
            value: function getNextAd(currentTime) {
              for (var i = 0; i < this["_ads"]["length"]; i++) {
                var ad = this["_ads"][i];
                if (ad["start"] >= currentTime) {
                  return ad;
                }
              }
            },
          },
          {
            key: "_getAdSeekPosition",
            value: function _getAdSeekPosition(
              currentAdBreak,
              jumpDetection,
              requestedTime
            ) {
              var validPosition = 0;
              if (currentAdBreak["viewed"]) {
                validPosition =
                  jumpDetection["interval"] >= 0
                    ? currentAdBreak["end"] +
                      (requestedTime - currentAdBreak["start"])
                    : currentAdBreak["start"] -
                      (currentAdBreak["end"] - requestedTime);
                if (validPosition < 0)
                  validPosition = currentAdBreak["end"] + 0.001;
              } else {
                validPosition = currentAdBreak["start"];
              }
              return validPosition;
            },
          },
          {
            key: "_handleJump",
            value: function _handleJump(
              jumpDetection,
              requestedTime,
              currentAdBreak
            ) {
              _util2["default"]["log"](
                "[Timeline]: Detected large jump in timeline. prevTime: " +
                  this["lastReceivedTime"] +
                  " currTime: " +
                  requestedTime
              );
              if (currentAdBreak) {
                _util2["default"]["log"](
                  "[Timeline]: Detected jump " +
                    (jumpDetection["interval"] >= 0
                      ? "FORWARDs"
                      : "BACKWARDS") +
                    " from content into Ad break"
                );
                this["lastReceivedTime"] = requestedTime;
                var validPosition = this["_getAdSeekPosition"](
                  currentAdBreak,
                  jumpDetection,
                  requestedTime
                );
                _eventbus2["default"]["emit"]("adseektoposition", {
                  position: validPosition,
                });
                this["expectedAd"] = null;
                return false;
              } else {
                _util2["default"]["log"]("[Timeline]: Currently in content.");
                return true;
              }
            },
          },
          {
            key: "_checkAdExpectation",
            value: function _checkAdExpectation(currentAdBreak) {
              this["currentAdBreak"] = currentAdBreak;
              if (
                this["expectedAd"] &&
                this["currentAdBreak"] === this["expectedAd"]
              ) {
                _util2["default"]["log"]("[Timeline]: Expecting adbreak");
                if (this["expectedAd"]["viewed"]) {
                  _util2["default"]["log"](
                    "[Timeline]: Playing into already watched ad. Skipping to end of ad " + (this["expectedAd"]["end"] + 0.001)
                  );
                  this["currentAdBreak"] = null;
                  _eventbus2["default"]["emit"]("adseektoposition", {
                    position: this["expectedAd"]["end"] + 0.001,
                  });
                } else {
                  _util2["default"]["log"]("[Timeline]: Expecting an Ad break which has not been viewed");
                }
                this["expectedAd"] = null;
              }
            },
          },
          {
            key: "_isValidPosition",
            value: function _isValidPosition(requestedTime, currentAdBreak) {
              var isValid = true;
              var jumpDetection = this["_detectJump"](requestedTime);
              if (jumpDetection["isJump"]) {
                isValid = this["_handleJump"](
                  jumpDetection,
                  requestedTime,
                  currentAdBreak
                );
              }
              return isValid;
            },
          },
          {
            key: "_setCurrentTime",
            value: function _setCurrentTime(normalisedTime) {
              this["currentTime"] = normalisedTime;
              _eventbus2["default"]["emit"]("timeline_timeupdate", {
                currentTime: this["currentTime"],
              });
            },
          },
          {
            key: "_normaliseTime",
            value: function _normaliseTime(time) {
              var normalisedTime = 0;
              if (time > this["currentYearTimestamp"]) {
                if (!this["startTimestampOfLive"]) {
                  this["startTimestampOfLive"] = time;
                  _util2["default"]["log"](
                    "[Timeline]: Detected Current time as timestamp. Start time: " +
                      this["startTimestampOfLive"] +
                      ", " +
                      new Date(this["startTimestampOfLive"] * 1e3)
                  );
                }
                normalisedTime = time - this["startTimestampOfLive"];
              } else {
                normalisedTime = time;
              }
              return normalisedTime["toFixed"](3);
            },
          },
          {
            key: "_isInAdBreak",
            value: function _isInAdBreak(time, adBreak) {
              var startThreshold =
                arguments["length"] > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : 0;
              return (
                time >= adBreak["start"] - startThreshold &&
                time <= adBreak["end"]
              );
            },
          },
          {
            key: "_getTimeWithoutAds",
            value: function _getTimeWithoutAds() {
              var currentTime =
                arguments["length"] > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 0;
              var totalBreaksDuration = 0;
              for (var i = 0; i < this["_adBreaks"]["length"]; i++) {
                var brk = this["_adBreaks"][i];
                if (
                  currentTime >= brk["start"] &&
                  currentTime <= brk["end"]
                ) {
                  return brk["start"] - totalBreaksDuration;
                }
                if (currentTime < brk["start"]) {
                  return currentTime - totalBreaksDuration;
                }
                totalBreaksDuration +=
                  brk["end"] - brk["start"] || 0;
              }
              return currentTime - totalBreaksDuration;
            },
          },
          {
            key: "_detectJump",
            value: function _detectJump(time) {
              var res = {};
              res["interval"] = time - this["lastReceivedTime"];
              res["isJump"] =
                Math["abs"](res["interval"]) > this["jumpDetectionThreshold"];
              return res;
            },
          },
          {
            key: "_prepareForAdBreak",
            value: function _prepareForAdBreak(adStartTime) {
              if (!this["expectedAd"]) {
                this["expectedAd"] = this["getAdBreak"](adStartTime);
              }
            },
          },
          {
            key: "_onAdPreStart",
            value: function _onAdPreStart(event) {
              this["_prepareForAdBreak"](event["adStart"]);
            },
          },
          {
            key: "_checkContentStarted",
            value: function _checkContentStarted() {
              var wasPreviouslyInContent = this["isPlayingContent"];
              this["isPlayingContent"] = !this["currentAdBreak"];
              if (this["isPlayingContent"] && !wasPreviouslyInContent) {
                _eventbus2["default"]["emit"]("contentstart", {
                  position: this["currentTime"],
                });
              }
            },
          },
          {
            key: "dispose",
            value: function dispose() {
              _eventbus2["default"]["removeListener"](
                "adprestart",
                this["_onAdPreStart"]
              );
            },
          },
        ]);
        return Timeline;
      })();
      exports["default"] = Timeline;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var _regenerator = __webpack_require__(16);
      var _regenerator2 = _interopRequireDefault(_regenerator);
      var _asyncToGenerator2 = __webpack_require__(17);
      var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
      var _classCallCheck2 = __webpack_require__(13);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(14);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _uuid = __webpack_require__(164);
      var _uuid2 = _interopRequireDefault(_uuid);
      var _jsCookie = __webpack_require__(96);
      var _jsCookie2 = _interopRequireDefault(_jsCookie);
      var _superagent = __webpack_require__(39);
      var _superagent2 = _interopRequireDefault(_superagent);
      var _util = __webpack_require__(15);
      var _util2 = _interopRequireDefault(_util);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var ClientDataAugmenter = (function () {
        function ClientDataAugmenter(contentResource, config) {
          (0, _classCallCheck3["default"])(this, ClientDataAugmenter);
          this["AD_COOLDOWN_PERIOD"] = 480;
          _util2["default"]["logging"] =
            config["settings"] && config["settings"]["logging"];
          this["contentResource"] = contentResource || {};
          this["contentResource"]["clientData"] =
            this["contentResource"]["clientData"] || {};
          this["contentResource"]["clientData"]["npa"] =
            this["contentResource"]["clientData"]["npa"] || false;
          this["contentResource"]["clientData"]["idfa"] =
            this["contentResource"]["clientData"]["idfa"] || "0";
          this["contentResource"]["clientData"]["videoId"] = this["contentResource"][
            "id"
          ];
          this["contentResource"]["clientData"]["duration"] = this["contentResource"][
            "duration"
          ];
          this["contentResource"]["clientData"]["brand"] = this["contentResource"][
            "brand"
          ];
          this["contentResource"]["clientData"]["genre"] = this["contentResource"][
            "genre"
          ];
          this["contentResource"]["clientData"]["tvshowid"] = this["contentResource"][
            "tvshowid"
          ];
        }
        (0, _createClass3["default"])(ClientDataAugmenter, [
          {
            key: "augment",
            value: (function () {
              var _ref = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee(
                  augmentationOptions
                ) {
                  return _regenerator2["default"]["wrap"](
                    function _callee$(_context) {
                      while (1) {
                        switch (
                          (_context["prev"] = _context["next"])
                        ) {
                          case 0:
                            this["_createUuid"]();
                            this["_augmentPpid"]();
                            this["_augmentIdfa"]();
                            if (!augmentationOptions["augmentNuggVars"]) {
                              _context["next"] = 8;
                              break;
                            }
                            _context["next"] = 6;
                            return this["_augmentNuggvars"]()["catch"](
                              function (error) {
                                return _util2["default"]["log"](
                                  "[ClientDataAugmenter]: Error resolving Nuggvars: " + error
                                );
                              }
                            );
                          case 6:
                            _context["next"] = 9;
                            break;
                          case 8:
                            delete this["contentResource"]["clientData"][
                              "nuggvars"
                            ];
                          case 9:
                            this["contentResource"]["contentType"] &&
                              this["contentResource"]["contentType"] ===
                                "live" &&
                              this["_augmentAdExclude"]();
                            return _context["abrupt"](
                              "return",
                              this["contentResource"]
                            );
                          case 11:
                          case "end":
                            return _context["stop"]();
                        }
                      }
                    },
                    _callee,
                    this
                  );
                })
              );
              function augment(_x) {
                return _ref["apply"](this, arguments);
              }
              return augment;
            })(),
          },
          {
            key: "_createUuid",
            value: function _createUuid() {
              var cookieUuid = _jsCookie2["default"]["get"](
                "at_uuid"
              );
              if (!cookieUuid) {
                cookieUuid =
                  this["_convertOldPpid"]() || (0, _uuid2["default"])();
                _jsCookie2["default"]["set"](
                  "at_uuid",
                  cookieUuid,
                  {
                    expires: 999,
                  }
                );
              }
              this["uuid"] = cookieUuid;
            },
          },
          {
            key: "_convertOldPpid",
            value: function _convertOldPpid() {
              var ppid =
                _jsCookie2["default"]["get"]("at_ppid") ||
                "";
              return ppid["replace"](
                /(.{8})(.{4})(.{4})(.{4})(.{12})/,
                "$1-$2-$3-$4-$5"
              );
            },
          },
          {
            key: "_augmentPpid",
            value: function _augmentPpid() {
              if (!this["contentResource"]["clientData"]["ppid"]) {
                this["contentResource"]["clientData"]["ppid"] = this[
                  "uuid"
                ]["replace"](/-/g, "");
              }
            },
          },
          {
            key: "_augmentIdfa",
            value: function _augmentIdfa() {
              if (this["contentResource"]["clientData"]["npa"]) {
                this["contentResource"]["clientData"]["idfa"] = "0";
              } else if (
                this["contentResource"]["clientData"]["idfa"]["indexOf"](
                  "-"
                ) === -1
              ) {
                this["contentResource"]["clientData"]["idfa"] = this[
                  "uuid"
                ];
              }
            },
          },
          {
            key: "_augmentNuggvars",
            value: (function () {
              var _ref2 = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee2() {
                  var url, resp, found, query;
                  return _regenerator2["default"]["wrap"](
                    function _callee2$(_context2) {
                      while (1) {
                        switch (
                          (_context2["prev"] = _context2["next"])
                        ) {
                          case 0:
                            if (
                              !this["contentResource"]["clientData"]["npa"]
                            ) {
                              _context2["next"] = 4;
                              break;
                            }
                            this["contentResource"]["clientData"]["nuggvars"] =
                              "bt=0";
                            _context2["next"] = 11;
                            break;
                          case 4:
                            if (
                              this["contentResource"]["clientData"]["nuggvars"]
                            ) {
                              _context2["next"] = 11;
                              break;
                            }
                            this["contentResource"]["clientData"]["nuggvars"] =
                              "bt=0";
                            url = this["_buildNuggUrl"]();
                            _context2["next"] = 9;
                            return _superagent2["default"]
                              ["get"](url)
                              ["timeout"](5e3)
                              ["catch"](function (e) {
                                _util2["default"]["log"](
                                  "[ClientDataAugmenter]: Error:",
                                  e
                                );
                              });
                          case 9:
                            resp = _context2["sent"];
                            if (resp) {
                              found = resp["text"]["match"](
                                /nuggdfp='(.*?)'/
                              );
                              if (found[1]) {
                                query = found[1]["replace"](
                                  /;/g,
                                  "&"
                                );
                                this["contentResource"]["clientData"][
                                  "nuggvars"
                                ] = query;
                              }
                            }
                          case 11:
                          case "end":
                            return _context2["stop"]();
                        }
                      }
                    },
                    _callee2,
                    this
                  );
                })
              );
              function _augmentNuggvars() {
                return _ref2["apply"](this, arguments);
              }
              return _augmentNuggvars;
            })(),
          },
          {
            key: "_buildNuggUrl",
            value: function _buildNuggUrl() {
              return "https://71i.nuggad.net/rc?&nuggn=1272195681&nuggsid=982165934&nuggtg=7tv_%brand%%pageReferrerPath%____video&nuggrid=&ios=0"
                ["replace"](
                  "%brand%",
                  this["contentResource"]["metadata"]
                    ? this["contentResource"]["metadata"]["brand"] ||
                        ""
                    : ""
                )
                ["replace"](
                  "%pageReferrerPath%",
                  document["location"]["pathname"]["replace"](
                    /\//g,
                    "_"
                  )
                );
            },
          },
          {
            key: "_augmentAdExclude",
            value: function _augmentAdExclude() {
              if (this["contentResource"]["clientData"]["noAdCooldown"]) {
                _util2["default"]["log"]("[ClientDataAugmenter]: Ad cooldown disabled");
                return;
              }
              if (this["contentResource"]["clientData"]["adExclude"]) {
                var match = this["contentResource"]["clientData"]["adExclude"][
                  "match"
                ](/#all|#preContent/g);
                if (match && match["length"] > 0) {
                  _util2["default"]["log"]("[ClientDataAugmenter]: Ad exclude contains #all or #preContent. Bypass cooldown check.");
                  return;
                }
              }
              var cookie = _jsCookie2["default"]["get"]("at_lvp");
              if (
                cookie &&
                Date["now"]() - cookie <= this["AD_COOLDOWN_PERIOD"] * 1e3
              ) {
                _util2["default"]["log"]("[ClientDataAugmenter]: Within Ad cooldown period. Appending #preContent.");
                if (this["contentResource"]["clientData"]["adExclude"]) {
                  this["contentResource"]["clientData"]["adExclude"] +=
                    ", #preContent";
                } else
                  this["contentResource"]["clientData"]["adExclude"] =
                    "#preContent";
              } else {
                _util2["default"]["log"]("[ClientDataAugmenter]: Ad cooldown period expired");
              }
            },
          },
        ]);
        return ClientDataAugmenter;
      })();
      exports["default"] = ClientDataAugmenter;
    },
    function (module, exports, __webpack_require__) {
      var v1 = __webpack_require__(165);
      var v4 = __webpack_require__(166);
      var uuid = v4;
      uuid["v1"] = v1;
      uuid["v4"] = v4;
      module["exports"] = uuid;
    },
    function (module, exports, __webpack_require__) {
      var rng = __webpack_require__(94);
      var bytesToUuid = __webpack_require__(95);
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1(options, buf, offset) {
        var i = (buf && offset) || 0;
        var b = buf || [];
        options = options || {};
        var node = options["node"] || _nodeId;
        var clockseq =
          options["clockseq"] !== undefined
            ? options["clockseq"]
            : _clockseq;
        if (node == null || clockseq == null) {
          var seedBytes = rng();
          if (node == null) {
            node = _nodeId = [
              seedBytes[0] | 1,
              seedBytes[1],
              seedBytes[2],
              seedBytes[3],
              seedBytes[4],
              seedBytes[5],
            ];
          }
          if (clockseq == null) {
            clockseq = _clockseq = ((seedBytes[6] << 8) | seedBytes[7]) & 16383;
          }
        }
        var msecs =
          options["msecs"] !== undefined
            ? options["msecs"]
            : new Date()["getTime"]();
        var nsecs =
          options["nsecs"] !== undefined
            ? options["nsecs"]
            : _lastNSecs + 1;
        var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && options["clockseq"] === undefined) {
          clockseq = (clockseq + 1) & 16383;
        }
        if (
          (dt < 0 || msecs > _lastMSecs) &&
          options["nsecs"] === undefined
        ) {
          nsecs = 0;
        }
        if (nsecs >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 122192928e5;
        var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
        b[i++] = (tl >>> 24) & 255;
        b[i++] = (tl >>> 16) & 255;
        b[i++] = (tl >>> 8) & 255;
        b[i++] = tl & 255;
        var tmh = ((msecs / 4294967296) * 1e4) & 268435455;
        b[i++] = (tmh >>> 8) & 255;
        b[i++] = tmh & 255;
        b[i++] = ((tmh >>> 24) & 15) | 16;
        b[i++] = (tmh >>> 16) & 255;
        b[i++] = (clockseq >>> 8) | 128;
        b[i++] = clockseq & 255;
        for (var n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf ? buf : bytesToUuid(b);
      }
      module["exports"] = v1;
    },
    function (module, exports, __webpack_require__) {
      var rng = __webpack_require__(94);
      var bytesToUuid = __webpack_require__(95);
      function v4(options, buf, offset) {
        var i = (buf && offset) || 0;
        if (typeof options == "string") {
          buf = options === "binary" ? new Array(16) : null;
          options = null;
        }
        options = options || {};
        var rnds = options["random"] || (options["rng"] || rng)();
        rnds[6] = (rnds[6] & 15) | 64;
        rnds[8] = (rnds[8] & 63) | 128;
        if (buf) {
          for (var ii = 0; ii < 16; ++ii) {
            buf[i + ii] = rnds[ii];
          }
        }
        return buf || bytesToUuid(rnds);
      }
      module["exports"] = v4;
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(18);
      __webpack_require__(34);
      module["exports"] = __webpack_require__(61)["f"]("iterator");
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(169);
      __webpack_require__(66);
      __webpack_require__(175);
      __webpack_require__(176);
      module["exports"] = __webpack_require__(0)["Symbol"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var global = __webpack_require__(1);
      var has = __webpack_require__(9);
      var DESCRIPTORS = __webpack_require__(6);
      var $export = __webpack_require__(3);
      var redefine = __webpack_require__(69);
      var META = __webpack_require__(170)["KEY"];
      var $fails = __webpack_require__(21);
      var shared = __webpack_require__(48);
      var setToStringTag = __webpack_require__(32);
      var uid = __webpack_require__(31);
      var wks = __webpack_require__(2);
      var wksExt = __webpack_require__(61);
      var wksDefine = __webpack_require__(63);
      var enumKeys = __webpack_require__(171);
      var isArray = __webpack_require__(172);
      var anObject = __webpack_require__(5);
      var isObject = __webpack_require__(8);
      var toObject = __webpack_require__(33);
      var toIObject = __webpack_require__(12);
      var toPrimitive = __webpack_require__(44);
      var createDesc = __webpack_require__(22);
      var _create = __webpack_require__(45);
      var gOPNExt = __webpack_require__(173);
      var $GOPD = __webpack_require__(174);
      var $GOPS = __webpack_require__(64);
      var $DP = __webpack_require__(4);
      var $keys = __webpack_require__(30);
      var gOPD = $GOPD["f"];
      var dP = $DP["f"];
      var gOPN = gOPNExt["f"];
      var $Symbol = global["Symbol"];
      var $JSON = global["JSON"];
      var _stringify = $JSON && $JSON["stringify"];
      var PROTOTYPE = "prototype";
      var HIDDEN = wks("_hidden");
      var TO_PRIMITIVE = wks("toPrimitive");
      var isEnum = {}["propertyIsEnumerable"];
      var SymbolRegistry = shared("symbol-registry");
      var AllSymbols = shared("symbols");
      var OPSymbols = shared("op-symbols");
      var ObjectProto = Object[PROTOTYPE];
      var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS["f"];
      var QObject = global["QObject"];
      var setter =
        !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE]["findChild"];
      var setSymbolDesc =
        DESCRIPTORS &&
        $fails(function () {
          return (
            _create(
              dP({}, "a", {
                get: function () {
                  return dP(this, "a", {
                    value: 7,
                  })["a"];
                },
              })
            )["a"] != 7
          );
        })
          ? function (it, key, D) {
              var protoDesc = gOPD(ObjectProto, key);
              if (protoDesc) delete ObjectProto[key];
              dP(it, key, D);
              if (protoDesc && it !== ObjectProto)
                dP(ObjectProto, key, protoDesc);
            }
          : dP;
      var wrap = function (tag) {
        var sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]));
        sym["_k"] = tag;
        return sym;
      };
      var isSymbol =
        USE_NATIVE && typeof $Symbol["iterator"] == "symbol"
          ? function (it) {
              return typeof it == "symbol";
            }
          : function (it) {
              return it instanceof $Symbol;
            };
      var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
          if (!D["enumerable"]) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, {
              enumerable: createDesc(0, false),
            });
          }
          return setSymbolDesc(it, key, D);
        }
        return dP(it, key, D);
      };
      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys((P = toIObject(P)));
        var i = 0;
        var l = keys["length"];
        var key;
        while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
        return it;
      };
      var $create = function create(it, P) {
        return P === undefined
          ? _create(it)
          : $defineProperties(_create(it), P);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum["call"](this, (key = toPrimitive(key, true)));
        if (
          this === ObjectProto &&
          has(AllSymbols, key) &&
          !has(OPSymbols, key)
        )
          return false;
        return E ||
          !has(this, key) ||
          !has(AllSymbols, key) ||
          (has(this, HIDDEN) && this[HIDDEN][key])
          ? E
          : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(
        it,
        key
      ) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
          return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
          D["enumerable"] = true;
        return D;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names["length"] > i) {
          if (
            !has(AllSymbols, (key = names[i++])) &&
            key != HIDDEN &&
            key != META
          )
            result["push"](key);
        }
        return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto;
        var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names["length"] > i) {
          if (
            has(AllSymbols, (key = names[i++])) &&
            (IS_OP ? has(ObjectProto, key) : true)
          )
            result["push"](AllSymbols[key]);
        }
        return result;
      };
      if (!USE_NATIVE) {
        $Symbol = function Symbol() {
          if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
          var tag = uid(arguments["length"] > 0 ? arguments[0] : undefined);
          var $set = function (value) {
            if (this === ObjectProto) $set["call"](OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag))
              this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };
          if (DESCRIPTORS && setter)
            setSymbolDesc(ObjectProto, tag, {
              configurable: true,
              set: $set,
            });
          return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], "toString", function toString() {
          return this["_k"];
        });
        $GOPD["f"] = $getOwnPropertyDescriptor;
        $DP["f"] = $defineProperty;
        __webpack_require__(97)["f"] = gOPNExt[
          "f"
        ] = $getOwnPropertyNames;
        __webpack_require__(40)["f"] = $propertyIsEnumerable;
        $GOPS["f"] = $getOwnPropertySymbols;
        if (DESCRIPTORS && !__webpack_require__(19)) {
          redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
        }
        wksExt["f"] = function (name) {
          return wrap(wks(name));
        };
      }
      $export(
        $export["G"] +
          $export["W"] +
          $export["F"] * !USE_NATIVE,
        {
          Symbol: $Symbol,
        }
      );
      for (
        var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables"["split"](","), j = 0;
        es6Symbols["length"] > j;

      )
        wks(es6Symbols[j++]);
      for (
        var wellKnownSymbols = $keys(wks["store"]), k = 0;
        wellKnownSymbols["length"] > k;

      )
        wksDefine(wellKnownSymbols[k++]);
      $export(
        $export["S"] + $export["F"] * !USE_NATIVE,
        "Symbol",
        {
          for: function (key) {
            return has(SymbolRegistry, (key += ""))
              ? SymbolRegistry[key]
              : (SymbolRegistry[key] = $Symbol(key));
          },
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
            for (var key in SymbolRegistry)
              if (SymbolRegistry[key] === sym) return key;
          },
          useSetter: function () {
            setter = true;
          },
          useSimple: function () {
            setter = false;
          },
        }
      );
      $export(
        $export["S"] + $export["F"] * !USE_NATIVE,
        "Object",
        {
          create: $create,
          defineProperty: $defineProperty,
          defineProperties: $defineProperties,
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          getOwnPropertyNames: $getOwnPropertyNames,
          getOwnPropertySymbols: $getOwnPropertySymbols,
        }
      );
      var FAILS_ON_PRIMITIVES = $fails(function () {
        $GOPS["f"](1);
      });
      $export(
        $export["S"] + $export["F"] * FAILS_ON_PRIMITIVES,
        "Object",
        {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return $GOPS["f"](toObject(it));
          },
        }
      );
      $JSON &&
        $export(
          $export["S"] +
            $export["F"] *
              (!USE_NATIVE ||
                $fails(function () {
                  var S = $Symbol();
                  return (
                    _stringify([S]) != "[null]" ||
                    _stringify({
                      a: S,
                    }) != "{}" ||
                    _stringify(Object(S)) != "{}"
                  );
                })),
          "JSON",
          {
            stringify: function stringify(it) {
              var args = [it];
              var i = 1;
              var replacer, $replacer;
              while (arguments["length"] > i)
                args["push"](arguments[i++]);
              $replacer = replacer = args[1];
              if ((!isObject(replacer) && it === undefined) || isSymbol(it))
                return;
              if (!isArray(replacer))
                replacer = function (key, value) {
                  if (typeof $replacer == "function")
                    value = $replacer["call"](this, key, value);
                  if (!isSymbol(value)) return value;
                };
              args[1] = replacer;
              return _stringify["apply"]($JSON, args);
            },
          }
        );
      $Symbol[PROTOTYPE][TO_PRIMITIVE] ||
        __webpack_require__(7)(
          $Symbol[PROTOTYPE],
          TO_PRIMITIVE,
          $Symbol[PROTOTYPE]["valueOf"]
        );
      setToStringTag($Symbol, "Symbol");
      setToStringTag(Math, "Math", true);
      setToStringTag(global["JSON"], "JSON", true);
    },
    function (module, exports, __webpack_require__) {
      var META = __webpack_require__(31)("meta");
      var isObject = __webpack_require__(8);
      var has = __webpack_require__(9);
      var setDesc = __webpack_require__(4)["f"];
      var id = 0;
      var isExtensible =
        Object["isExtensible"] ||
        function () {
          return true;
        };
      var FREEZE = !__webpack_require__(21)(function () {
        return isExtensible(Object["preventExtensions"]({}));
      });
      var setMeta = function (it) {
        setDesc(it, META, {
          value: {
            i: "O" + ++id,
            w: {},
          },
        });
      };
      var fastKey = function (it, create) {
        if (!isObject(it))
          return typeof it == "symbol"
            ? it
            : (typeof it == "string" ? "S" : "P") + it;
        if (!has(it, META)) {
          if (!isExtensible(it)) return "F";
          if (!create) return "E";
          setMeta(it);
        }
        return it[META]["i"];
      };
      var getWeak = function (it, create) {
        if (!has(it, META)) {
          if (!isExtensible(it)) return true;
          if (!create) return false;
          setMeta(it);
        }
        return it[META]["w"];
      };
      var onFreeze = function (it) {
        if (FREEZE && meta["NEED"] && isExtensible(it) && !has(it, META))
          setMeta(it);
        return it;
      };
      var meta = (module["exports"] = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze,
      });
    },
    function (module, exports, __webpack_require__) {
      var getKeys = __webpack_require__(30);
      var gOPS = __webpack_require__(64);
      var pIE = __webpack_require__(40);
      module["exports"] = function (it) {
        var result = getKeys(it);
        var getSymbols = gOPS["f"];
        if (getSymbols) {
          var symbols = getSymbols(it);
          var isEnum = pIE["f"];
          var i = 0;
          var key;
          while (symbols["length"] > i)
            if (isEnum["call"](it, (key = symbols[i++])))
              result["push"](key);
        }
        return result;
      };
    },
    function (module, exports, __webpack_require__) {
      var cof = __webpack_require__(23);
      module["exports"] =
        Array["isArray"] ||
        function isArray(arg) {
          return cof(arg) == "Array";
        };
    },
    function (module, exports, __webpack_require__) {
      var toIObject = __webpack_require__(12);
      var gOPN = __webpack_require__(97)["f"];
      var toString = {}["toString"];
      var windowNames =
        typeof window == "object" && window && Object["getOwnPropertyNames"]
          ? Object["getOwnPropertyNames"](window)
          : [];
      var getWindowNames = function (it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames["slice"]();
        }
      };
      module["exports"]["f"] = function getOwnPropertyNames(it) {
        return windowNames && toString["call"](it) == "[object Window]"
          ? getWindowNames(it)
          : gOPN(toIObject(it));
      };
    },
    function (module, exports, __webpack_require__) {
      var pIE = __webpack_require__(40);
      var createDesc = __webpack_require__(22);
      var toIObject = __webpack_require__(12);
      var toPrimitive = __webpack_require__(44);
      var has = __webpack_require__(9);
      var IE8_DOM_DEFINE = __webpack_require__(68);
      var gOPD = Object["getOwnPropertyDescriptor"];
      exports["f"] = __webpack_require__(6)
        ? gOPD
        : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE)
              try {
                return gOPD(O, P);
              } catch (e) {}
            if (has(O, P))
              return createDesc(!pIE["f"]["call"](O, P), O[P]);
          };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(63)("asyncIterator");
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(63)("observable");
    },
    function (module, exports, __webpack_require__) {
      if (true) {
        module["exports"] = Emitter;
      }
      function Emitter(obj) {
        if (obj) return mixin(obj);
      }
      function mixin(obj) {
        for (var key in Emitter["prototype"]) {
          obj[key] = Emitter["prototype"][key];
        }
        return obj;
      }
      Emitter["prototype"]["on"] = Emitter["prototype"][
        "addEventListener"
      ] = function (event, fn) {
        this["_callbacks"] = this["_callbacks"] || {};
        (this["_callbacks"]["$" + event] =
          this["_callbacks"]["$" + event] || [])["push"](fn);
        return this;
      };
      Emitter["prototype"]["once"] = function (event, fn) {
        function on() {
          this["off"](event, on);
          fn["apply"](this, arguments);
        }
        on["fn"] = fn;
        this["on"](event, on);
        return this;
      };
      Emitter["prototype"]["off"] = Emitter["prototype"][
        "removeListener"
      ] = Emitter["prototype"]["removeAllListeners"] = Emitter["prototype"][
        "removeEventListener"
      ] = function (event, fn) {
        this["_callbacks"] = this["_callbacks"] || {};
        if (0 == arguments["length"]) {
          this["_callbacks"] = {};
          return this;
        }
        var callbacks = this["_callbacks"]["$" + event];
        if (!callbacks) return this;
        if (1 == arguments["length"]) {
          delete this["_callbacks"]["$" + event];
          return this;
        }
        var cb;
        for (var i = 0; i < callbacks["length"]; i++) {
          cb = callbacks[i];
          if (cb === fn || cb["fn"] === fn) {
            callbacks["splice"](i, 1);
            break;
          }
        }
        if (callbacks["length"] === 0) {
          delete this["_callbacks"]["$" + event];
        }
        return this;
      };
      Emitter["prototype"]["emit"] = function (event) {
        this["_callbacks"] = this["_callbacks"] || {};
        var args = new Array(arguments["length"] - 1),
          callbacks = this["_callbacks"]["$" + event];
        for (var i = 1; i < arguments["length"]; i++) {
          args[i - 1] = arguments[i];
        }
        if (callbacks) {
          callbacks = callbacks["slice"](0);
          for (var i = 0, len = callbacks["length"]; i < len; ++i) {
            callbacks[i]["apply"](this, args);
          }
        }
        return this;
      };
      Emitter["prototype"]["listeners"] = function (event) {
        this["_callbacks"] = this["_callbacks"] || {};
        return this["_callbacks"]["$" + event] || [];
      };
      Emitter["prototype"]["hasListeners"] = function (event) {
        return !!this["listeners"](event)["length"];
      };
    },
    function (module, exports) {
      module["exports"] = stringify;
      stringify["default"] = stringify;
      stringify["stable"] = deterministicStringify;
      stringify["stableStringify"] = deterministicStringify;
      var arr = [];
      var replacerStack = [];
      function stringify(obj, replacer, spacer) {
        decirc(obj, "", [], undefined);
        var res;
        if (replacerStack["length"] === 0) {
          res = JSON["stringify"](obj, replacer, spacer);
        } else {
          res = JSON["stringify"](obj, replaceGetterValues(replacer), spacer);
        }
        while (arr["length"] !== 0) {
          var part = arr["pop"]();
          if (part["length"] === 4) {
            Object["defineProperty"](part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
        return res;
      }
      function decirc(val, k, stack, parent) {
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack["length"]; i++) {
            if (stack[i] === val) {
              var propertyDescriptor = Object["getOwnPropertyDescriptor"](parent, k);
              if (propertyDescriptor["get"] !== undefined) {
                if (propertyDescriptor["configurable"]) {
                  Object["defineProperty"](parent, k, {
                    value: "[Circular]",
                  });
                  arr["push"]([parent, k, val, propertyDescriptor]);
                } else {
                  replacerStack["push"]([val, k]);
                }
              } else {
                parent[k] = "[Circular]";
                arr["push"]([parent, k, val]);
              }
              return;
            }
          }
          stack["push"](val);
          if (Array["isArray"](val)) {
            for (i = 0; i < val["length"]; i++) {
              decirc(val[i], i, stack, val);
            }
          } else {
            var keys = Object["keys"](val);
            for (i = 0; i < keys["length"]; i++) {
              var key = keys[i];
              decirc(val[key], key, stack, val);
            }
          }
          stack["pop"]();
        }
      }
      function compareFunction(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
      function deterministicStringify(obj, replacer, spacer) {
        var tmp = deterministicDecirc(obj, "", [], undefined) || obj;
        var res;
        if (replacerStack["length"] === 0) {
          res = JSON["stringify"](tmp, replacer, spacer);
        } else {
          res = JSON["stringify"](tmp, replaceGetterValues(replacer), spacer);
        }
        while (arr["length"] !== 0) {
          var part = arr["pop"]();
          if (part["length"] === 4) {
            Object["defineProperty"](part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
        return res;
      }
      function deterministicDecirc(val, k, stack, parent) {
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack["length"]; i++) {
            if (stack[i] === val) {
              var propertyDescriptor = Object["getOwnPropertyDescriptor"](parent, k);
              if (propertyDescriptor["get"] !== undefined) {
                if (propertyDescriptor["configurable"]) {
                  Object["defineProperty"](parent, k, {
                    value: "[Circular]",
                  });
                  arr["push"]([parent, k, val, propertyDescriptor]);
                } else {
                  replacerStack["push"]([val, k]);
                }
              } else {
                parent[k] = "[Circular]";
                arr["push"]([parent, k, val]);
              }
              return;
            }
          }
          if (typeof val["toJSON"] === "function") {
            return;
          }
          stack["push"](val);
          if (Array["isArray"](val)) {
            for (i = 0; i < val["length"]; i++) {
              deterministicDecirc(val[i], i, stack, val);
            }
          } else {
            var tmp = {};
            var keys = Object["keys"](val)["sort"](compareFunction);
            for (i = 0; i < keys["length"]; i++) {
              var key = keys[i];
              deterministicDecirc(val[key], key, stack, val);
              tmp[key] = val[key];
            }
            if (parent !== undefined) {
              arr["push"]([parent, k, val]);
              parent[k] = tmp;
            } else {
              return tmp;
            }
          }
          stack["pop"]();
        }
      }
      function replaceGetterValues(replacer) {
        replacer =
          replacer !== undefined
            ? replacer
            : function (k, v) {
                return v;
              };
        return function (key, val) {
          if (replacerStack["length"] > 0) {
            for (var i = 0; i < replacerStack["length"]; i++) {
              var part = replacerStack[i];
              if (part[1] === key && part[0] === val) {
                val = "[Circular]";
                replacerStack["splice"](i, 1);
                break;
              }
            }
          }
          return replacer["call"](this, key, val);
        };
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _promise = __webpack_require__(28);
      var _promise2 = _interopRequireDefault(_promise);
      var _iterator = __webpack_require__(60);
      var _iterator2 = _interopRequireDefault(_iterator);
      var _symbol = __webpack_require__(62);
      var _symbol2 = _interopRequireDefault(_symbol);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      function _typeof(obj) {
        if (
          typeof _symbol2["default"] === "function" &&
          typeof _iterator2["default"] === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof _symbol2["default"] === "function" &&
              obj["constructor"] === _symbol2["default"] &&
              obj !== _symbol2["default"]["prototype"]
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }
      var isObject = __webpack_require__(98);
      module["exports"] = RequestBase;
      function RequestBase(obj) {
        if (obj) return mixin(obj);
      }
      function mixin(obj) {
        for (var key in RequestBase["prototype"]) {
          if (
            Object["prototype"]["hasOwnProperty"]["call"](
              RequestBase["prototype"],
              key
            )
          )
            obj[key] = RequestBase["prototype"][key];
        }
        return obj;
      }
      RequestBase["prototype"]["clearTimeout"] = function () {
        clearTimeout(this["_timer"]);
        clearTimeout(this["_responseTimeoutTimer"]);
        clearTimeout(this["_uploadTimeoutTimer"]);
        delete this["_timer"];
        delete this["_responseTimeoutTimer"];
        delete this["_uploadTimeoutTimer"];
        return this;
      };
      RequestBase["prototype"]["parse"] = function (fn) {
        this["_parser"] = fn;
        return this;
      };
      RequestBase["prototype"]["responseType"] = function (val) {
        this["_responseType"] = val;
        return this;
      };
      RequestBase["prototype"]["serialize"] = function (fn) {
        this["_serializer"] = fn;
        return this;
      };
      RequestBase["prototype"]["timeout"] = function (options) {
        if (!options || _typeof(options) !== "object") {
          this["_timeout"] = options;
          this["_responseTimeout"] = 0;
          this["_uploadTimeout"] = 0;
          return this;
        }
        for (var option in options) {
          if (Object["prototype"]["hasOwnProperty"]["call"](options, option)) {
            switch (option) {
              case "deadline":
                this["_timeout"] = options["deadline"];
                break;
              case "response":
                this["_responseTimeout"] = options["response"];
                break;
              case "upload":
                this["_uploadTimeout"] = options["upload"];
                break;
              default:
                console["warn"]("Unknown timeout option", option);
            }
          }
        }
        return this;
      };
      RequestBase["prototype"]["retry"] = function (count, fn) {
        if (arguments["length"] === 0 || count === true) count = 1;
        if (count <= 0) count = 0;
        this["_maxRetries"] = count;
        this["_retries"] = 0;
        this["_retryCallback"] = fn;
        return this;
      };
      var ERROR_CODES = [
        "ECONNRESET",
        "ETIMEDOUT",
        "EADDRINFO",
        "ESOCKETTIMEDOUT",
      ];
      RequestBase["prototype"]["_shouldRetry"] = function (err, res) {
        if (!this["_maxRetries"] || this["_retries"]++ >= this["_maxRetries"]) {
          return false;
        }
        if (this["_retryCallback"]) {
          try {
            var override = this["_retryCallback"](err, res);
            if (override === true) return true;
            if (override === false) return false;
          } catch (err_) {
            console["error"](err_);
          }
        }
        if (
          res &&
          res["status"] &&
          res["status"] >= 500 &&
          res["status"] !== 501
        )
          return true;
        if (err) {
          if (
            err["code"] &&
            ERROR_CODES["includes"](err["code"])
          )
            return true;
          if (err["timeout"] && err["code"] === "ECONNABORTED")
            return true;
          if (err["crossDomain"]) return true;
        }
        return false;
      };
      RequestBase["prototype"]["_retry"] = function () {
        this["clearTimeout"]();
        if (this["req"]) {
          this["req"] = null;
          this["req"] = this["request"]();
        }
        this["_aborted"] = false;
        this["timedout"] = false;
        this["timedoutError"] = null;
        return this["_end"]();
      };
      RequestBase["prototype"]["then"] = function (resolve, reject) {
        var _this = this;
        if (!this["_fullfilledPromise"]) {
          var self = this;
          if (this["_endCalled"]) {
            console["warn"]("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
          }
          this["_fullfilledPromise"] = new _promise2["default"](function (
            resolve,
            reject
          ) {
            self["on"]("abort", function () {
              if (_this["timedout"] && _this["timedoutError"]) {
                reject(_this["timedoutError"]);
                return;
              }
              var err = new Error("Aborted");
              err["code"] = "ABORTED";
              err["status"] = _this["status"];
              err["method"] = _this["method"];
              err["url"] = _this["url"];
              reject(err);
            });
            self["end"](function (err, res) {
              if (err) reject(err);
              else resolve(res);
            });
          });
        }
        return this["_fullfilledPromise"]["then"](resolve, reject);
      };
      RequestBase["prototype"]["catch"] = function (cb) {
        return this["then"](undefined, cb);
      };
      RequestBase["prototype"]["use"] = function (fn) {
        fn(this);
        return this;
      };
      RequestBase["prototype"]["ok"] = function (cb) {
        if (typeof cb !== "function") throw new Error("Callback required");
        this["_okCallback"] = cb;
        return this;
      };
      RequestBase["prototype"]["_isResponseOK"] = function (res) {
        if (!res) {
          return false;
        }
        if (this["_okCallback"]) {
          return this["_okCallback"](res);
        }
        return res["status"] >= 200 && res["status"] < 300;
      };
      RequestBase["prototype"]["get"] = function (field) {
        return this["_header"][field["toLowerCase"]()];
      };
      RequestBase["prototype"]["getHeader"] =
        RequestBase["prototype"]["get"];
      RequestBase["prototype"]["set"] = function (field, val) {
        if (isObject(field)) {
          for (var key in field) {
            if (Object["prototype"]["hasOwnProperty"]["call"](field, key))
              this["set"](key, field[key]);
          }
          return this;
        }
        this["_header"][field["toLowerCase"]()] = val;
        this["header"][field] = val;
        return this;
      };
      RequestBase["prototype"]["unset"] = function (field) {
        delete this["_header"][field["toLowerCase"]()];
        delete this["header"][field];
        return this;
      };
      RequestBase["prototype"]["field"] = function (name, val) {
        if (name === null || undefined === name) {
          throw new Error(".field(name, val) name can not be empty");
        }
        if (this["_data"]) {
          throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        }
        if (isObject(name)) {
          for (var key in name) {
            if (Object["prototype"]["hasOwnProperty"]["call"](name, key))
              this["field"](key, name[key]);
          }
          return this;
        }
        if (Array["isArray"](val)) {
          for (var i in val) {
            if (Object["prototype"]["hasOwnProperty"]["call"](val, i))
              this["field"](name, val[i]);
          }
          return this;
        }
        if (val === null || undefined === val) {
          throw new Error(".field(name, val) val can not be empty");
        }
        if (typeof val === "boolean") {
          val = String(val);
        }
        this["_getFormData"]()["append"](name, val);
        return this;
      };
      RequestBase["prototype"]["abort"] = function () {
        if (this["_aborted"]) {
          return this;
        }
        this["_aborted"] = true;
        if (this["xhr"]) this["xhr"]["abort"]();
        if (this["req"]) this["req"]["abort"]();
        this["clearTimeout"]();
        this["emit"]("abort");
        return this;
      };
      RequestBase["prototype"]["_auth"] = function (
        user,
        pass,
        options,
        base64Encoder
      ) {
        switch (options["type"]) {
          case "basic":
            this["set"](
              "Authorization",
              "Basic "["concat"](
                base64Encoder(
                  ""["concat"](user, ":")["concat"](pass)
                )
              )
            );
            break;
          case "auto":
            this["username"] = user;
            this["password"] = pass;
            break;
          case "bearer":
            this["set"]("Authorization", "Bearer "["concat"](user));
            break;
          default:
            break;
        }
        return this;
      };
      RequestBase["prototype"]["withCredentials"] = function (on) {
        if (on === undefined) on = true;
        this["_withCredentials"] = on;
        return this;
      };
      RequestBase["prototype"]["redirects"] = function (n) {
        this["_maxRedirects"] = n;
        return this;
      };
      RequestBase["prototype"]["maxResponseSize"] = function (n) {
        if (typeof n !== "number") {
          throw new TypeError("Invalid argument");
        }
        this["_maxResponseSize"] = n;
        return this;
      };
      RequestBase["prototype"]["toJSON"] = function () {
        return {
          method: this["method"],
          url: this["url"],
          data: this["_data"],
          headers: this["_header"],
        };
      };
      RequestBase["prototype"]["send"] = function (data) {
        var isObj = isObject(data);
        var type = this["_header"]["content-type"];
        if (this["_formData"]) {
          throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        }
        if (isObj && !this["_data"]) {
          if (Array["isArray"](data)) {
            this["_data"] = [];
          } else if (!this["_isHost"](data)) {
            this["_data"] = {};
          }
        } else if (
          data &&
          this["_data"] &&
          this["_isHost"](this["_data"])
        ) {
          throw new Error("Can't merge these send calls");
        }
        if (isObj && isObject(this["_data"])) {
          for (var key in data) {
            if (Object["prototype"]["hasOwnProperty"]["call"](data, key))
              this["_data"][key] = data[key];
          }
        } else if (typeof data === "string") {
          if (!type) this["type"]("form");
          type = this["_header"]["content-type"];
          if (type === "application/x-www-form-urlencoded") {
            this["_data"] = this["_data"]
              ? ""
                  ["concat"](this["_data"], "&")
                  ["concat"](data)
              : data;
          } else {
            this["_data"] = (this["_data"] || "") + data;
          }
        } else {
          this["_data"] = data;
        }
        if (!isObj || this["_isHost"](data)) {
          return this;
        }
        if (!type) this["type"]("json");
        return this;
      };
      RequestBase["prototype"]["sortQuery"] = function (sort) {
        this["_sort"] = typeof sort === "undefined" ? true : sort;
        return this;
      };
      RequestBase["prototype"]["_finalizeQueryString"] = function () {
        var query = this["_query"]["join"]("&");
        if (query) {
          this["url"] +=
            (this["url"]["includes"]("?")
              ? "&"
              : "?") + query;
        }
        this["_query"]["length"] = 0;
        if (this["_sort"]) {
          var index = this["url"]["indexOf"]("?");
          if (index >= 0) {
            var queryArr = this["url"]
              ["slice"](index + 1)
              ["split"]("&");
            if (typeof this["_sort"] === "function") {
              queryArr["sort"](this["_sort"]);
            } else {
              queryArr["sort"]();
            }
            this["url"] =
              this["url"]["slice"](0, index) +
              "?" +
              queryArr["join"]("&");
          }
        }
      };
      RequestBase["prototype"]["_appendQueryString"] = function () {
        console["warn"]("Unsupported");
      };
      RequestBase["prototype"]["_timeoutError"] = function (
        reason,
        timeout,
        errno
      ) {
        if (this["_aborted"]) {
          return;
        }
        var err = new Error(
          ""["concat"](reason + timeout, "ms exceeded")
        );
        err["timeout"] = timeout;
        err["code"] = "ECONNABORTED";
        err["errno"] = errno;
        this["timedout"] = true;
        this["timedoutError"] = err;
        this["abort"]();
        this["callback"](err);
      };
      RequestBase["prototype"]["_setTimeouts"] = function () {
        var self = this;
        if (this["_timeout"] && !this["_timer"]) {
          this["_timer"] = setTimeout(function () {
            self["_timeoutError"](
              "Timeout of ",
              self["_timeout"],
              "ETIME"
            );
          }, this["_timeout"]);
        }
        if (this["_responseTimeout"] && !this["_responseTimeoutTimer"]) {
          this["_responseTimeoutTimer"] = setTimeout(function () {
            self["_timeoutError"](
              "Response timeout of ",
              self["_responseTimeout"],
              "ETIMEDOUT"
            );
          }, this["_responseTimeout"]);
        }
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var utils = __webpack_require__(181);
      module["exports"] = ResponseBase;
      function ResponseBase(obj) {
        if (obj) return mixin(obj);
      }
      function mixin(obj) {
        for (var key in ResponseBase["prototype"]) {
          if (
            Object["prototype"]["hasOwnProperty"]["call"](
              ResponseBase["prototype"],
              key
            )
          )
            obj[key] = ResponseBase["prototype"][key];
        }
        return obj;
      }
      ResponseBase["prototype"]["get"] = function (field) {
        return this["header"][field["toLowerCase"]()];
      };
      ResponseBase["prototype"]["_setHeaderProperties"] = function (header) {
        var ct = header["content-type"] || "";
        this["type"] = utils["type"](ct);
        var params = utils["params"](ct);
        for (var key in params) {
          if (Object["prototype"]["hasOwnProperty"]["call"](params, key))
            this[key] = params[key];
        }
        this["links"] = {};
        try {
          if (header["link"]) {
            this["links"] = utils["parseLinks"](header["link"]);
          }
        } catch (_unused) {}
      };
      ResponseBase["prototype"]["_setStatusProperties"] = function (status) {
        var type = (status / 100) | 0;
        this["statusCode"] = status;
        this["status"] = this["statusCode"];
        this["statusType"] = type;
        this["info"] = type === 1;
        this["ok"] = type === 2;
        this["redirect"] = type === 3;
        this["clientError"] = type === 4;
        this["serverError"] = type === 5;
        this["error"] =
          type === 4 || type === 5 ? this["toError"]() : false;
        this["created"] = status === 201;
        this["accepted"] = status === 202;
        this["noContent"] = status === 204;
        this["badRequest"] = status === 400;
        this["unauthorized"] = status === 401;
        this["notAcceptable"] = status === 406;
        this["forbidden"] = status === 403;
        this["notFound"] = status === 404;
        this["unprocessableEntity"] = status === 422;
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["type"] = function (str) {
        return str["split"](/ *; */)["shift"]();
      };
      exports["params"] = function (str) {
        return str["split"](/ *; */)["reduce"](function (obj, str) {
          var parts = str["split"](/ *= */);
          var key = parts["shift"]();
          var val = parts["shift"]();
          if (key && val) obj[key] = val;
          return obj;
        }, {});
      };
      exports["parseLinks"] = function (str) {
        return str["split"](/ *, */)["reduce"](function (obj, str) {
          var parts = str["split"](/ *; */);
          var url = parts[0]["slice"](1, -1);
          var rel = parts[1]["split"](/ *= */)[1]["slice"](1, -1);
          obj[rel] = url;
          return obj;
        }, {});
      };
      exports["cleanHeader"] = function (header, changesOrigin) {
        delete header["content-type"];
        delete header["content-length"];
        delete header["transfer-encoding"];
        delete header["host"];
        if (changesOrigin) {
          delete header["authorization"];
          delete header["cookie"];
        }
        return header;
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _from = __webpack_require__(99);
      var _from2 = _interopRequireDefault(_from);
      var _isIterable2 = __webpack_require__(186);
      var _isIterable3 = _interopRequireDefault(_isIterable2);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _nonIterableSpread()
        );
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _iterableToArray(iter) {
        if (
          (0, _isIterable3["default"])(Object(iter)) ||
          Object["prototype"]["toString"]["call"](iter) === "[object Arguments]"
        )
          return (0, _from2["default"])(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array["isArray"](arr)) {
          for (
            var i = 0, arr2 = new Array(arr["length"]);
            i < arr["length"];
            i++
          ) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function Agent() {
        this["_defaults"] = [];
      }
      [
        "use",
        "on",
        "once",
        "set",
        "query",
        "type",
        "accept",
        "auth",
        "withCredentials",
        "sortQuery",
        "retry",
        "ok",
        "redirects",
        "timeout",
        "buffer",
        "serialize",
        "parse",
        "ca",
        "key",
        "pfx",
        "cert",
        "disableTLSCerts",
      ]["forEach"](function (fn) {
        Agent["prototype"][fn] = function () {
          for (
            var _len = arguments["length"], args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }
          this["_defaults"]["push"]({
            fn: fn,
            args: args,
          });
          return this;
        };
      });
      Agent["prototype"]["_setDefaults"] = function (req) {
        this["_defaults"]["forEach"](function (def) {
          req[def["fn"]]["apply"](
            req,
            _toConsumableArray(def["args"])
          );
        });
      };
      module["exports"] = Agent;
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(18);
      __webpack_require__(184);
      module["exports"] = __webpack_require__(0)["Array"]["from"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var ctx = __webpack_require__(20);
      var $export = __webpack_require__(3);
      var toObject = __webpack_require__(33);
      var call = __webpack_require__(73);
      var isArrayIter = __webpack_require__(74);
      var toLength = __webpack_require__(46);
      var createProperty = __webpack_require__(185);
      var getIterFn = __webpack_require__(51);
      $export(
        $export["S"] +
          $export["F"] *
            !__webpack_require__(79)(function (iter) {
              Array["from"](iter);
            }),
        "Array",
        {
          from: function from(arrayLike) {
            var O = toObject(arrayLike);
            var C = typeof this == "function" ? this : Array;
            var aLen = arguments["length"];
            var mapfn = aLen > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var index = 0;
            var iterFn = getIterFn(O);
            var length, result, step, iterator;
            if (mapping)
              mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
            if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
              for (
                iterator = iterFn["call"](O), result = new C();
                !(step = iterator["next"]())["done"];
                index++
              ) {
                createProperty(
                  result,
                  index,
                  mapping
                    ? call(iterator, mapfn, [step["value"], index], true)
                    : step["value"]
                );
              }
            } else {
              length = toLength(O["length"]);
              for (result = new C(length); length > index; index++) {
                createProperty(
                  result,
                  index,
                  mapping ? mapfn(O[index], index) : O[index]
                );
              }
            }
            result["length"] = index;
            return result;
          },
        }
      );
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var $defineProperty = __webpack_require__(4);
      var createDesc = __webpack_require__(22);
      module["exports"] = function (object, index, value) {
        if (index in object)
          $defineProperty["f"](object, index, createDesc(0, value));
        else object[index] = value;
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(187),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(34);
      __webpack_require__(18);
      module["exports"] = __webpack_require__(188);
    },
    function (module, exports, __webpack_require__) {
      var classof = __webpack_require__(50);
      var ITERATOR = __webpack_require__(2)("iterator");
      var Iterators = __webpack_require__(11);
      module["exports"] = __webpack_require__(0)["isIterable"] = function (
        it
      ) {
        var O = Object(it);
        return (
          O[ITERATOR] !== undefined ||
          "@@iterator" in O ||
          Iterators["hasOwnProperty"](classof(O))
        );
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var _promise = __webpack_require__(28);
      var _promise2 = _interopRequireDefault(_promise);
      var _getIterator2 = __webpack_require__(190);
      var _getIterator3 = _interopRequireDefault(_getIterator2);
      var _regenerator = __webpack_require__(16);
      var _regenerator2 = _interopRequireDefault(_regenerator);
      var _asyncToGenerator2 = __webpack_require__(17);
      var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
      var _classCallCheck2 = __webpack_require__(13);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(14);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _eventbus = __webpack_require__(38);
      var _eventbus2 = _interopRequireDefault(_eventbus);
      var _superagent = __webpack_require__(39);
      var _superagent2 = _interopRequireDefault(_superagent);
      var _util = __webpack_require__(15);
      var _util2 = _interopRequireDefault(_util);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var Omit = (function () {
        function Omit(ads) {
          (0, _classCallCheck3["default"])(this, Omit);
          this["omits"] = ads ? this["_getOmits"](ads) : [];
          this["adPodPosition"] = 1;
        }
        (0, _createClass3["default"])(Omit, [
          {
            key: "setOmits",
            value: function setOmits(omits) {
              omits["forEach"](function (om) {
                return (om["timeOffset"] = _util2["default"]["hmsToSecondsOnly"](
                  om["timeOffset"]
                ));
              });
              this["omits"] = omits;
            },
          },
          {
            key: "track",
            value: function track(tolerance) {
              var _this = this;
              if (this["omits"]) {
                _eventbus2["default"]["on"](
                  "timeline_timeupdate",
                  (function () {
                    var _ref = (0, _asyncToGenerator3["default"])(
                      _regenerator2["default"]["mark"](function _callee(
                        e
                      ) {
                        var time, block;
                        return _regenerator2["default"]["wrap"](
                          function _callee$(_context) {
                            while (1) {
                              switch (
                                (_context["prev"] = _context["next"])
                              ) {
                                case 0:
                                  time = e["currentTime"];
                                  block = _this["_findBlock"](
                                    _this["omits"],
                                    time,
                                    tolerance
                                  );
                                  if (!block) {
                                    _context["next"] = 5;
                                    break;
                                  }
                                  _context["next"] = 5;
                                  return _this["_fireTrackingForBlock"](block);
                                case 5:
                                case "end":
                                  return _context["stop"]();
                              }
                            }
                          },
                          _callee,
                          _this
                        );
                      })
                    );
                    return function (_x) {
                      return _ref["apply"](this, arguments);
                    };
                  })()
                );
              }
            },
          },
          {
            key: "trackNow",
            value: (function () {
              var _ref2 = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee2(
                  omits
                ) {
                  var adPodPosition =
                    arguments["length"] > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : 1;
                  var _iteratorNormalCompletion,
                    _didIteratorError,
                    _iteratorError,
                    _iterator,
                    _step,
                    omit;
                  return _regenerator2["default"]["wrap"](
                    function _callee2$(_context2) {
                      while (1) {
                        switch (
                          (_context2["prev"] = _context2["next"])
                        ) {
                          case 0:
                            _util2["default"]["log"]("[Omit] : Tracking Omits NOW");
                            this["setOmits"](omits);
                            this["adPodPosition"] = adPodPosition;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context2["prev"] = 6;
                            _iterator = (0, _getIterator3["default"])(
                              this["omits"]
                            );
                          case 8:
                            if (
                              (_iteratorNormalCompletion = (_step = _iterator[
                                "next"
                              ]())["done"])
                            ) {
                              _context2["next"] = 21;
                              break;
                            }
                            omit = _step["value"];
                            _context2["prev"] = 10;
                            _context2["next"] = 13;
                            return this["_fireTrackingForBlock"](omit);
                          case 13:
                            _context2["next"] = 18;
                            break;
                          case 15:
                            _context2["prev"] = 15;
                            _context2["t0"] = _context2["catch"](
                              10
                            );
                            _util2["default"]["log"](
                              "[Omit] : Failed to track omit. Error: " + _context2["t0"]
                            );
                          case 18:
                            _iteratorNormalCompletion = true;
                            _context2["next"] = 8;
                            break;
                          case 21:
                            _context2["next"] = 27;
                            break;
                          case 23:
                            _context2["prev"] = 23;
                            _context2["t1"] = _context2["catch"](
                              6
                            );
                            _didIteratorError = true;
                            _iteratorError = _context2["t1"];
                          case 27:
                            _context2["prev"] = 27;
                            _context2["prev"] = 28;
                            if (
                              !_iteratorNormalCompletion &&
                              _iterator["return"]
                            ) {
                              _iterator["return"]();
                            }
                          case 30:
                            _context2["prev"] = 30;
                            if (!_didIteratorError) {
                              _context2["next"] = 33;
                              break;
                            }
                            throw _iteratorError;
                          case 33:
                            return _context2["finish"](30);
                          case 34:
                            return _context2["finish"](27);
                          case 35:
                          case "end":
                            return _context2["stop"]();
                        }
                      }
                    },
                    _callee2,
                    this,
                    [
                      [6, 23, 27, 35],
                      [10, 15],
                      [28, , 30, 34],
                    ]
                  );
                })
              );
              function trackNow(_x3) {
                return _ref2["apply"](this, arguments);
              }
              return trackNow;
            })(),
          },
          {
            key: "_fireTrackingForBlock",
            value: (function () {
              var _ref3 = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee3(
                  block
                ) {
                  var meta;
                  return _regenerator2["default"]["wrap"](
                    function _callee3$(_context3) {
                      while (1) {
                        switch (
                          (_context3["prev"] = _context3["next"])
                        ) {
                          case 0:
                            meta = this["_buildMetadata"](block);
                            _context3["next"] = 3;
                            return this["_fireTracking"](
                              block["tracking"],
                              meta
                            );
                          case 3:
                          case "end":
                            return _context3["stop"]();
                        }
                      }
                    },
                    _callee3,
                    this
                  );
                })
              );
              function _fireTrackingForBlock(_x4) {
                return _ref3["apply"](this, arguments);
              }
              return _fireTrackingForBlock;
            })(),
          },
          {
            key: "_buildMetadata",
            value: function _buildMetadata(block) {
              return {
                ad_asset_id: block["id"],
                ad_type: block["breakType"] || "midroll",
                ad_pod_position: block["adPosition"] || this["adPodPosition"],
              };
            },
          },
          {
            key: "_findBlock",
            value: function _findBlock(adBreaks, time, tolerance) {
              for (var i = 0; i < adBreaks["length"]; i++) {
                var breakTime = adBreaks[i]["timeOffset"];
                if (Math["abs"](breakTime - time) <= tolerance) {
                  var block = adBreaks[i];
                  adBreaks["splice"](i, 1);
                  return block;
                }
              }
              return false;
            },
          },
          {
            key: "_getOmits",
            value: function _getOmits(collection) {
              var omits = false;
              if (!Array["isArray"](collection)) {
                collection = [collection];
              }
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;
              try {
                for (
                  var _iterator2 = (0, _getIterator3["default"])(collection),
                    _step2;
                  !(_iteratorNormalCompletion2 = (_step2 = _iterator2[
                    "next"
                  ]())["done"]);
                  _iteratorNormalCompletion2 = true
                ) {
                  var vmap = _step2["value"];
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;
                  try {
                    for (
                      var _iterator3 = (0, _getIterator3["default"])(
                          vmap["extensions"]
                        ),
                        _step3;
                      !(_iteratorNormalCompletion3 = (_step3 = _iterator3[
                        "next"
                      ]())["done"]);
                      _iteratorNormalCompletion3 = true
                    ) {
                      var ext = _step3["value"];
                      if (ext && ext["children"]) {
                        if (!Array["isArray"](ext["children"])) {
                          ext["children"] = [ext["children"]];
                        }
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;
                        try {
                          for (
                            var _iterator4 = (0, _getIterator3["default"])(
                                ext["children"]
                              ),
                              _step4;
                            !(_iteratorNormalCompletion4 = (_step4 = _iterator4[
                              "next"
                            ]())["done"]);
                            _iteratorNormalCompletion4 = true
                          ) {
                            var child = _step4["value"];
                            if (
                              child["Omits"] ||
                              child["name"] === "Omits"
                            ) {
                              omits =
                                child["value"] ||
                                child["Omits"]["value"];
                            }
                          }
                        } catch (err) {
                          _didIteratorError4 = true;
                          _iteratorError4 = err;
                        } finally {
                          try {
                            if (
                              !_iteratorNormalCompletion4 &&
                              _iterator4["return"]
                            ) {
                              _iterator4["return"]();
                            }
                          } finally {
                            if (_didIteratorError4) {
                              throw _iteratorError4;
                            }
                          }
                        }
                      }
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (
                        !_iteratorNormalCompletion3 &&
                        _iterator3["return"]
                      ) {
                        _iterator3["return"]();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
              if (omits) {
                _util2["default"]["log"]("[Omit] found omits ", omits);
                try {
                  if (typeof omits === "string") {
                    omits = JSON["parse"](omits);
                  }
                  omits["forEach"](function (adBreak) {
                    return (adBreak["timeOffset"] = _util2["default"][
                      "hmsToSecondsOnly"
                    ](adBreak["timeOffset"]));
                  });
                } catch (e) {
                  _util2["default"]["log"](
                    "[Omit] ERROR could not parse omits from xml  " + (e && e["stack"]),
                    omits
                  );
                }
              }
              return omits;
            },
          },
          {
            key: "_fireTracking",
            value: (function () {
              var _ref4 = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee4(
                  urls,
                  meta
                ) {
                  var requests,
                    _iteratorNormalCompletion5,
                    _didIteratorError5,
                    _iteratorError5,
                    _iterator5,
                    _step5,
                    url,
                    req;
                  return _regenerator2["default"]["wrap"](
                    function _callee4$(_context4) {
                      while (1) {
                        switch (
                          (_context4["prev"] = _context4["next"])
                        ) {
                          case 0:
                            requests = [];
                            _iteratorNormalCompletion5 = true;
                            _didIteratorError5 = false;
                            _iteratorError5 = undefined;
                            _context4["prev"] = 4;
                            for (
                              _iterator5 = (0, _getIterator3["default"])(
                                urls
                              );
                              !(_iteratorNormalCompletion5 = (_step5 = _iterator5[
                                "next"
                              ]())["done"]);
                              _iteratorNormalCompletion5 = true
                            ) {
                              url = _step5["value"];
                              req = _superagent2["default"]
                                ["get"](url)
                                ["catch"](function (e) {
                                  return e;
                                })
                                ["then"](function () {
                                  return _eventbus2["default"]["emit"](
                                    "adomit",
                                    {
                                      ad: meta,
                                    }
                                  );
                                });
                              requests["push"](req);
                            }
                            _context4["next"] = 12;
                            break;
                          case 8:
                            _context4["prev"] = 8;
                            _context4["t0"] = _context4["catch"](
                              4
                            );
                            _didIteratorError5 = true;
                            _iteratorError5 = _context4["t0"];
                          case 12:
                            _context4["prev"] = 12;
                            _context4["prev"] = 13;
                            if (
                              !_iteratorNormalCompletion5 &&
                              _iterator5["return"]
                            ) {
                              _iterator5["return"]();
                            }
                          case 15:
                            _context4["prev"] = 15;
                            if (!_didIteratorError5) {
                              _context4["next"] = 18;
                              break;
                            }
                            throw _iteratorError5;
                          case 18:
                            return _context4["finish"](15);
                          case 19:
                            return _context4["finish"](12);
                          case 20:
                            return _context4["abrupt"](
                              "return",
                              _promise2["default"]["all"](requests)
                            );
                          case 21:
                          case "end":
                            return _context4["stop"]();
                        }
                      }
                    },
                    _callee4,
                    this,
                    [
                      [4, 8, 12, 20],
                      [13, , 15, 19],
                    ]
                  );
                })
              );
              function _fireTracking(_x5, _x6) {
                return _ref4["apply"](this, arguments);
              }
              return _fireTracking;
            })(),
          },
        ]);
        return Omit;
      })();
      exports["default"] = Omit;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(191),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(34);
      __webpack_require__(18);
      module["exports"] = __webpack_require__(192);
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(5);
      var get = __webpack_require__(51);
      module["exports"] = __webpack_require__(0)["getIterator"] = function (
        it
      ) {
        var iterFn = get(it);
        if (typeof iterFn != "function") throw TypeError(it + " is not iterable!");
        return anObject(iterFn["call"](it));
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var _regenerator = __webpack_require__(16);
      var _regenerator2 = _interopRequireDefault(_regenerator);
      var _promise = __webpack_require__(28);
      var _promise2 = _interopRequireDefault(_promise);
      var _asyncToGenerator2 = __webpack_require__(17);
      var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
      var _classCallCheck2 = __webpack_require__(13);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(14);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _superagent = __webpack_require__(39);
      var _superagent2 = _interopRequireDefault(_superagent);
      var _util = __webpack_require__(15);
      var _util2 = _interopRequireDefault(_util);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var AdBlockerDetector = (function () {
        function AdBlockerDetector(config) {
          (0, _classCallCheck3["default"])(this, AdBlockerDetector);
          this["trackingHosts"] = ["https://securepubads.g.doubleclick.net/pcs/view/"]["concat"](
            config["trackingHosts"] && config["trackingHosts"]["length"]
              ? config["trackingHosts"]
              : []
          );
          _util2["default"]["logging"] = config["logging"];
        }
        (0, _createClass3["default"])(AdBlockerDetector, [
          {
            key: "areTrackingUrlsReachable",
            value: (function () {
              var _ref = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee() {
                  var promises, i, host;
                  return _regenerator2["default"]["wrap"](
                    function _callee$(_context) {
                      while (1) {
                        switch (
                          (_context["prev"] = _context["next"])
                        ) {
                          case 0:
                            promises = [];
                            for (
                              i = 0;
                              i < this["trackingHosts"]["length"];
                              i++
                            ) {
                              host = this["trackingHosts"][i];
                              _util2["default"]["log"](
                                "[AdBlockerDetector]: Checking if " + host + " is reachable"
                              );
                              promises["push"](this["_isHostReachable"](host));
                            }
                            _context["prev"] = 2;
                            _context["next"] = 5;
                            return _promise2["default"]["all"](
                              promises
                            );
                          case 5:
                            _util2["default"]["log"]("[AdBlockerDetector]: All tracking hosts reachable");
                            return _context["abrupt"]("return", true);
                          case 9:
                            _context["prev"] = 9;
                            _context["t0"] = _context["catch"](2);
                            _util2["default"]["log"](
                              "[AdBlockerDetector]: Failed to reach tracking URL. Error : " + _context["t0"]
                            );
                            return _context["abrupt"]("return", false);
                          case 13:
                          case "end":
                            return _context["stop"]();
                        }
                      }
                    },
                    _callee,
                    this,
                    [[2, 9]]
                  );
                })
              );
              function areTrackingUrlsReachable() {
                return _ref["apply"](this, arguments);
              }
              return areTrackingUrlsReachable;
            })(),
          },
          {
            key: "_isHostReachable",
            value: (function () {
              var _ref2 = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee2(
                  host
                ) {
                  return _regenerator2["default"]["wrap"](
                    function _callee2$(_context2) {
                      while (1) {
                        switch (
                          (_context2["prev"] = _context2["next"])
                        ) {
                          case 0:
                            _context2["prev"] = 0;
                            _context2["next"] = 3;
                            return _superagent2["default"]["get"](host);
                          case 3:
                            _context2["next"] = 9;
                            break;
                          case 5:
                            _context2["prev"] = 5;
                            _context2["t0"] = _context2["catch"](
                              0
                            );
                            _util2["default"]["log"](
                              "[AdBlockerDetector]: Failed to reach tracking URL. " + _context2["t0"]
                            );
                            throw new Error(host);
                          case 9:
                          case "end":
                            return _context2["stop"]();
                        }
                      }
                    },
                    _callee2,
                    this,
                    [[0, 5]]
                  );
                })
              );
              function _isHostReachable(_x) {
                return _ref2["apply"](this, arguments);
              }
              return _isHostReachable;
            })(),
          },
        ]);
        return AdBlockerDetector;
      })();
      exports["default"] = AdBlockerDetector;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] =
        typeof Array["from"] === "function"
          ? Array["from"]
          : __webpack_require__(195);
    },
    function (module, exports) {
      module["exports"] = (function () {
        var isCallable = function (fn) {
          return typeof fn === "function";
        };
        var toInteger = function (value) {
          var number = Number(value);
          if (isNaN(number)) {
            return 0;
          }
          if (number === 0 || !isFinite(number)) {
            return number;
          }
          return (
            (number > 0 ? 1 : -1) *
            Math["floor"](Math["abs"](number))
          );
        };
        var maxSafeInteger = Math["pow"](2, 53) - 1;
        var toLength = function (value) {
          var len = toInteger(value);
          return Math["min"](Math["max"](len, 0), maxSafeInteger);
        };
        var iteratorProp = function (value) {
          if (value != null) {
            if (
              ["string", "number", "boolean", "symbol"][
                "indexOf"
              ](typeof value) > -1
            ) {
              return Symbol["iterator"];
            } else if (
              typeof Symbol !== "undefined" &&
              "iterator" in Symbol &&
              Symbol["iterator"] in value
            ) {
              return Symbol["iterator"];
            } else if ("@@iterator" in value) {
              return "@@iterator";
            }
          }
        };
        var getMethod = function (O, P) {
          if (O != null && P != null) {
            var func = O[P];
            if (func == null) {
              return void 0;
            }
            if (!isCallable(func)) {
              throw new TypeError(func + " is not a function");
            }
            return func;
          }
        };
        var iteratorStep = function (iterator) {
          var result = iterator["next"]();
          var done = Boolean(result["done"]);
          if (done) {
            return false;
          }
          return result;
        };
        return function from(items) {
          "use strict";
          var C = this;
          var mapFn = arguments["length"] > 1 ? arguments[1] : void 0;
          var T;
          if (typeof mapFn !== "undefined") {
            if (!isCallable(mapFn)) {
              throw new TypeError("Array.from: when provided, the second argument must be a function");
            }
            if (arguments["length"] > 2) {
              T = arguments[2];
            }
          }
          var A, k;
          var usingIterator = getMethod(items, iteratorProp(items));
          if (usingIterator !== void 0) {
            A = isCallable(C) ? Object(new C()) : [];
            var iterator = usingIterator["call"](items);
            if (iterator == null) {
              throw new TypeError("Array.from requires an array-like or iterable object");
            }
            k = 0;
            var next, nextValue;
            while (true) {
              next = iteratorStep(iterator);
              if (!next) {
                A["length"] = k;
                return A;
              }
              nextValue = next["value"];
              if (mapFn) {
                A[k] = mapFn["call"](T, nextValue, k);
              } else {
                A[k] = nextValue;
              }
              k++;
            }
          } else {
            var arrayLike = Object(items);
            if (items == null) {
              throw new TypeError("Array.from requires an array-like object - not null or undefined");
            }
            var len = toLength(arrayLike["length"]);
            A = isCallable(C) ? Object(new C(len)) : new Array(len);
            k = 0;
            var kValue;
            while (k < len) {
              kValue = arrayLike[k];
              if (mapFn) {
                A[k] = mapFn["call"](T, kValue, k);
              } else {
                A[k] = kValue;
              }
              k++;
            }
            A["length"] = len;
          }
          return A;
        };
      })();
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      exports["extensionToMimeType"] = exports["AdInserterStatus"] = undefined;
      var _toConsumableArray2 = __webpack_require__(197);
      var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
      var _regenerator = __webpack_require__(16);
      var _regenerator2 = _interopRequireDefault(_regenerator);
      var _asyncToGenerator2 = __webpack_require__(17);
      var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
      var _extends2 = __webpack_require__(198);
      var _extends3 = _interopRequireDefault(_extends2);
      var _stringify = __webpack_require__(203);
      var _stringify2 = _interopRequireDefault(_stringify);
      var _classCallCheck2 = __webpack_require__(13);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(14);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _lodash = __webpack_require__(205);
      var _lodash2 = _interopRequireDefault(_lodash);
      var _eventbus = __webpack_require__(38);
      var _eventbus2 = _interopRequireDefault(_eventbus);
      var _adTracker = __webpack_require__(65);
      var _adTracker2 = _interopRequireDefault(_adTracker);
      var _util = __webpack_require__(15);
      var _util2 = _interopRequireDefault(_util);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var AdInserterStatus = (exports["AdInserterStatus"] = {
        INITIALIZED: "INITIALIZED",
        PLAYING_CONTENT: "PLAYING_CONTENT",
        PLAYING_AD: "PLAYING_AD",
      });
      var extensionToMimeType = (exports["extensionToMimeType"] = {
        mpd: "application/dash+xml",
        m3u8: "application/x-mpegURL",
      });
      var AdInserter = (function () {
        function AdInserter(config, eventProxyMap) {
          (0, _classCallCheck3["default"])(this, AdInserter);
          this["_adTracker"] = null;
          this["_omitsTracker"] = null;
          this["_isPlayerReady"] = false;
          this["_contentResource"] = {};
          this["_config"] = config || {};
          this["_config"]["webPlayer"] =
            this["_config"]["webPlayer"] || {};
          this["_eventListeners"] = [];
          this["_eventProxyMap"] = eventProxyMap || {};
        }
        (0, _createClass3["default"])(AdInserter, [
          {
            key: "init",
            value: function init(playRequest, player, contentResource) {
              _util2["default"]["log"]("[AdInserter] Initializing");
              this["dispose"]();
              this["_initProperties"](playRequest, player, contentResource);
              this["_registerEventHandlers"]();
            },
          },
          {
            key: "_getMappedEventName",
            value: function _getMappedEventName(eventName) {
              return this["_eventProxyMap"][eventName] || eventName;
            },
          },
          {
            key: "_initProperties",
            value: function _initProperties(
              playRequest,
              player,
              contentResource
            ) {
              this["_playerInstance"] = player;
              this["_contentPlayRequest"] = (0, _lodash2["default"])(playRequest);
              this["_contentPlayRequest"]["source"]["manifestUrl"] = this[
                "_contentPlayRequest"
              ]["source"]["url"];
              this["_contentResource"] = contentResource;
              this["_contentResumePosition"] =
                this["_contentPlayRequest"]["source"]["startTime"] || 0;
              this["setStatus"](AdInserterStatus["INITIALIZED"]);
              _util2["default"]["logging"] = this["_config"][
                "logging"
              ];
            },
          },
          {
            key: "_onNoPreroll",
            value: function _onNoPreroll() {
              _util2["default"]["log"](
                "[AdInserter] Nopreroll event is received. Will play content :",
                this["_contentPlayRequest"]
              );
              this["_setStatusOnPlayerReady"](AdInserterStatus["PLAYING_CONTENT"]);
              this["_startWithInit"](this["_contentPlayRequest"]);
            },
          },
          {
            key: "_setStatusOnPlayerReady",
            value: function _setStatusOnPlayerReady(status) {
              var _this = this;
              _eventbus2["default"]["once"](
                this["_getMappedEventName"]("playerready"),
                function () {
                  _this["setStatus"](status);
                }
              );
            },
          },
          {
            key: "_onPlayerReady",
            value: function _onPlayerReady(e) {
              _util2["default"]["log"]("[AdInserter] playerready event");
              if (!this["_isPlayerReady"]) {
                _eventbus2["default"]["emit"]("playerready", e);
                this["_isPlayerReady"] = true;
              }
            },
          },
          {
            key: "_onEnded",
            value: function _onEnded(e) {
              _util2["default"]["log"](
                "[AdInserter] ended event. Status",
                this["status"]
              );
              if (this["isAdPlaying"]()) {
                this["_resumeContent"](this["_contentPlayRequest"]);
              } else {
                _eventbus2["default"]["emit"]("ended", e);
              }
            },
          },
          {
            key: "_onError",
            value: function _onError(e) {
              _util2["default"]["log"](
                "[AdInserter] error event. Status",
                this["status"]
              );
              if (this["isAdPlaying"]()) {
                this["_resumeContent"](this["_contentPlayRequest"]);
              } else {
                _eventbus2["default"]["emit"]("error", e);
              }
            },
          },
          {
            key: "_startWithInit",
            value: function _startWithInit(playRequest) {
              _util2["default"]["log"](
                "[AdInserter] Initting player" + (0, _stringify2["default"])(playRequest)
              );
              var source = this["_buildSourceForPlayer"](playRequest["source"]);
              this["_playerInstance"]["init"](source);
            },
          },
          {
            key: "_insertAd",
            value: function _insertAd(adInformation) {
              this["_setStatusOnPlayerReady"](AdInserterStatus["PLAYING_AD"]);
              var breakType = adInformation["breakType"],
                breakUrl = adInformation["breakUrl"];
              var mimetype = this["_findMimeTypeFromFileUrl"](breakUrl);
              var sourceForPlayer = this["_buildSourceForPlayer"]({
                manifestUrl: breakUrl,
                mimetype: mimetype,
                startTime: 0,
              });
              if (breakType === "preroll") {
                _util2["default"]["log"]("[AdInserter] inserting preroll", adInformation);
                this["_startWithInit"]({
                  source: sourceForPlayer,
                });
              } else {
                _util2["default"]["log"]("[AdInserter] saving currenttime", adInformation);
                this["_contentResumePosition"] = this["_playerInstance"]["getCurrentTime"]();
                _util2["default"]["log"](
                  "[AdInserter] inserting midroll. Saving content resume time:",
                  this["_contentResumePosition"]
                );
                this["_playerInstance"]["changeSource"](sourceForPlayer);
              }
            },
          },
          {
            key: "_buildSourceForPlayer",
            value: function _buildSourceForPlayer(source) {
              return (0, _extends3["default"])(
                {},
                source,
                this["_config"]["webPlayer"]
              );
            },
          },
          {
            key: "_resumeContent",
            value: function _resumeContent(playRequest) {
              this["disposeAdTracker"]();
              this["_setStatusOnPlayerReady"](AdInserterStatus["PLAYING_CONTENT"]);
              var startTime = playRequest["source"]["startTime"];
              if (parseInt(startTime) > -1) {
                playRequest["source"]["startTime"] = this["_contentResumePosition"];
              }
              _util2["default"]["log"]("[AdInserter] resuming content", playRequest);
              var source = this["_buildSourceForPlayer"](playRequest["source"]);
              this["_playerInstance"]["changeSource"](source);
            },
          },
          {
            key: "_onAdSchedulerInsertAd",
            value: (function () {
              var _ref = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee(
                  adInformation
                ) {
                  return _regenerator2["default"]["wrap"](
                    function _callee$(_context) {
                      while (1) {
                        switch (
                          (_context["prev"] = _context["next"])
                        ) {
                          case 0:
                            _context["prev"] = 0;
                            if (
                              !(
                                adInformation["breakUrl"] &&
                                adInformation["vastXml"]
                              )
                            ) {
                              _context["next"] = 8;
                              break;
                            }
                            this["_adTracker"] = this["_adTrackerFactory"](
                              adInformation,
                              this["_config"],
                              this["_contentResource"]
                            );
                            _context["next"] = 5;
                            return this["_adTracker"]["startAdTracking"]();
                          case 5:
                            this["_insertAd"](adInformation);
                            _context["next"] = 10;
                            break;
                          case 8:
                            _util2["default"]["log"](
                              "[AdInserter] required ad information for adbreak was not provided, will continue with content",
                              adInformation
                            );
                            if (
                              this["status"] ===
                                AdInserterStatus["INITIALIZED"] ||
                              (adInformation["breakType"] &&
                                adInformation["breakType"] === "preroll")
                            ) {
                              this["_startWithInit"](this["_contentPlayRequest"]);
                            }
                          case 10:
                            _context["next"] = 16;
                            break;
                          case 12:
                            _context["prev"] = 12;
                            _context["t0"] = _context["catch"](0);
                            _util2["default"]["log"](
                              "[AdInserter] An error happened while inserting the ad. Switching to content",
                              _context["t0"]
                            );
                            this["_resumeContent"](this["_contentPlayRequest"]);
                          case 16:
                          case "end":
                            return _context["stop"]();
                        }
                      }
                    },
                    _callee,
                    this,
                    [[0, 12]]
                  );
                })
              );
              function _onAdSchedulerInsertAd(_x) {
                return _ref["apply"](this, arguments);
              }
              return _onAdSchedulerInsertAd;
            })(),
          },
          {
            key: "_onTrackEmptyBreak",
            value: (function () {
              var _ref2 = (0, _asyncToGenerator3["default"])(
                _regenerator2["default"]["mark"](function _callee2(
                  omitInformation
                ) {
                  return _regenerator2["default"]["wrap"](
                    function _callee2$(_context2) {
                      while (1) {
                        switch (
                          (_context2["prev"] = _context2["next"])
                        ) {
                          case 0:
                            _context2["prev"] = 0;
                            this["disposeOmitsTracker"]();
                            this["_omitsTracker"] = this["_adTrackerFactory"](
                              null,
                              this["_config"],
                              this["_contentResource"]
                            );
                            _context2["next"] = 5;
                            return this["_omitsTracker"]["trackAdOmitsNow"](
                              omitInformation["omits"],
                              omitInformation["adPodPosition"]
                            );
                          case 5:
                            _context2["next"] = 10;
                            break;
                          case 7:
                            _context2["prev"] = 7;
                            _context2["t0"] = _context2["catch"](
                              0
                            );
                            _util2["default"]["log"](
                              "[AdInserter] An error happened tracking omits",
                              _context2["t0"]
                            );
                          case 10:
                            _context2["prev"] = 10;
                            this["disposeOmitsTracker"]();
                            return _context2["finish"](10);
                          case 13:
                          case "end":
                            return _context2["stop"]();
                        }
                      }
                    },
                    _callee2,
                    this,
                    [[0, 7, 10, 13]]
                  );
                })
              );
              function _onTrackEmptyBreak(_x2) {
                return _ref2["apply"](this, arguments);
              }
              return _onTrackEmptyBreak;
            })(),
          },
          {
            key: "_registerEventHandlers",
            value: function _registerEventHandlers() {
              this["_eventListeners"] = [
                ["adSchedulerInsertAd", this["_onAdSchedulerInsertAd"]["bind"](this)],
                ["adSchedulerNoPreroll", this["_onNoPreroll"]["bind"](this)],
                ["adSchedulerTrackEmptyBreak", this["_onTrackEmptyBreak"]["bind"](this)],
                [
                  this["_getMappedEventName"]("playerready"),
                  this["_onPlayerReady"]["bind"](this),
                ],
                [
                  this["_getMappedEventName"]("ended"),
                  this["_onEnded"]["bind"](this),
                ],
                [
                  this["_getMappedEventName"]("error"),
                  this["_onError"]["bind"](this),
                ],
              ];
              this["_eventListeners"]["forEach"](function (item) {
                return _eventbus2["default"]["on"]["apply"](
                  _eventbus2["default"],
                  (0, _toConsumableArray3["default"])(item)
                );
              });
            },
          },
          {
            key: "dispose",
            value: function dispose() {
              this["disposeAdTracker"]();
              this["_eventListeners"]["forEach"](function (item) {
                return _eventbus2["default"]["removeListener"]["apply"](
                  _eventbus2["default"],
                  (0, _toConsumableArray3["default"])(item)
                );
              });
            },
          },
          {
            key: "disposeAdTracker",
            value: function disposeAdTracker() {
              _util2["default"]["log"]("[AdInserter] Disposing AdTracker");
              if (this["_adTracker"]) {
                this["_adTracker"]["dispose"]();
              }
              this["_adTracker"] = null;
            },
          },
          {
            key: "disposeOmitsTracker",
            value: function disposeOmitsTracker() {
              _util2["default"]["log"]("[AdInserter] Disposing OmitsTracker");
              if (this["_omitsTracker"]) {
                this["_omitsTracker"]["dispose"]();
              }
              this["_omitsTracker"] = null;
            },
          },
          {
            key: "_adTrackerFactory",
            value: function _adTrackerFactory(
              vastXml,
              adTrackerConfig,
              contentResource
            ) {
              var clonedConfig = (0, _lodash2["default"])(adTrackerConfig);
              return new _adTracker2["default"](
                vastXml,
                clonedConfig,
                contentResource
              );
            },
          },
          {
            key: "_findMimeTypeFromFileUrl",
            value: function _findMimeTypeFromFileUrl() {
              var fileUrl =
                arguments["length"] > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : "";
              var foundMimeType = "";
              var matchedExtension = /^.+\/.+(?:\.(m3u8|mpd))/i["exec"](
                fileUrl
              );
              if (
                Array["isArray"](matchedExtension) &&
                matchedExtension["length"] === 2
              ) {
                foundMimeType = extensionToMimeType[matchedExtension[1]];
              }
              return foundMimeType;
            },
          },
          {
            key: "setStatus",
            value: function setStatus(status) {
              _util2["default"]["log"]("[AdInserter] Setting status to", status);
              this["_status"] = status;
            },
          },
          {
            key: "isAdPlaying",
            value: function isAdPlaying() {
              return this["status"] === AdInserterStatus["PLAYING_AD"];
            },
          },
          {
            key: "isContentPlaying",
            value: function isContentPlaying() {
              return this["status"] === AdInserterStatus["PLAYING_CONTENT"];
            },
          },
          {
            key: "status",
            get: function get() {
              return this["_status"];
            },
          },
        ]);
        return AdInserter;
      })();
      exports["default"] = AdInserter;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["__esModule"] = true;
      var _from = __webpack_require__(99);
      var _from2 = _interopRequireDefault(_from);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      exports["default"] = function (arr) {
        if (Array["isArray"](arr)) {
          for (
            var i = 0, arr2 = Array(arr["length"]);
            i < arr["length"];
            i++
          ) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return (0, _from2["default"])(arr);
        }
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["__esModule"] = true;
      var _assign = __webpack_require__(199);
      var _assign2 = _interopRequireDefault(_assign);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      exports["default"] =
        _assign2["default"] ||
        function (target) {
          for (var i = 1; i < arguments["length"]; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object["prototype"]["hasOwnProperty"]["call"](source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(200),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(201);
      module["exports"] = __webpack_require__(0)["Object"]["assign"];
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(3);
      $export($export["S"] + $export["F"], "Object", {
        assign: __webpack_require__(202),
      });
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var DESCRIPTORS = __webpack_require__(6);
      var getKeys = __webpack_require__(30);
      var gOPS = __webpack_require__(64);
      var pIE = __webpack_require__(40);
      var toObject = __webpack_require__(33);
      var IObject = __webpack_require__(71);
      var $assign = Object["assign"];
      module["exports"] =
        !$assign ||
        __webpack_require__(21)(function () {
          var A = {};
          var B = {};
          var S = Symbol();
          var K = "abcdefghijklmnopqrst";
          A[S] = 7;
          K["split"]("")["forEach"](function (k) {
            B[k] = k;
          });
          return (
            $assign({}, A)[S] != 7 ||
            Object["keys"]($assign({}, B))["join"]("") != K
          );
        })
          ? function assign(target, source) {
              var T = toObject(target);
              var aLen = arguments["length"];
              var index = 1;
              var getSymbols = gOPS["f"];
              var isEnum = pIE["f"];
              while (aLen > index) {
                var S = IObject(arguments[index++]);
                var keys = getSymbols
                  ? getKeys(S)["concat"](getSymbols(S))
                  : getKeys(S);
                var length = keys["length"];
                var j = 0;
                var key;
                while (length > j) {
                  key = keys[j++];
                  if (!DESCRIPTORS || isEnum["call"](S, key))
                    T[key] = S[key];
                }
              }
              return T;
            }
          : $assign;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(204),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      var core = __webpack_require__(0);
      var $JSON =
        core["JSON"] ||
        (core["JSON"] = {
          stringify: JSON["stringify"],
        });
      module["exports"] = function stringify(it) {
        return $JSON["stringify"]["apply"]($JSON, arguments);
      };
    },
    function (module, exports, __webpack_require__) {
      (function (global, module) {
        var LARGE_ARRAY_SIZE = 200;
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_SAFE_INTEGER = 9007199254740991;
        var argsTag = "[object Arguments]",
          arrayTag = "[object Array]",
          boolTag = "[object Boolean]",
          dateTag = "[object Date]",
          errorTag = "[object Error]",
          funcTag = "[object Function]",
          genTag = "[object GeneratorFunction]",
          mapTag = "[object Map]",
          numberTag = "[object Number]",
          objectTag = "[object Object]",
          promiseTag = "[object Promise]",
          regexpTag = "[object RegExp]",
          setTag = "[object Set]",
          stringTag = "[object String]",
          symbolTag = "[object Symbol]",
          weakMapTag = "[object WeakMap]";
        var arrayBufferTag = "[object ArrayBuffer]",
          dataViewTag = "[object DataView]",
          float32Tag = "[object Float32Array]",
          float64Tag = "[object Float64Array]",
          int8Tag = "[object Int8Array]",
          int16Tag = "[object Int16Array]",
          int32Tag = "[object Int32Array]",
          uint8Tag = "[object Uint8Array]",
          uint8ClampedTag = "[object Uint8ClampedArray]",
          uint16Tag = "[object Uint16Array]",
          uint32Tag = "[object Uint32Array]";
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reFlags = /\w*$/;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[
          arrayBufferTag
        ] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[
          dateTag
        ] = cloneableTags[float32Tag] = cloneableTags[
          float64Tag
        ] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[
          int32Tag
        ] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[
          objectTag
        ] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[
          stringTag
        ] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[
          uint8ClampedTag
        ] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[
          weakMapTag
        ] = false;
        var freeGlobal =
          typeof global == "object" &&
          global &&
          global["Object"] === Object &&
          global;
        var freeSelf =
          typeof self == "object" &&
          self &&
          self["Object"] === Object &&
          self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports =
          typeof exports == "object" &&
          exports &&
          !exports["nodeType"] &&
          exports;
        var freeModule =
          freeExports &&
          typeof module == "object" &&
          module &&
          !module["nodeType"] &&
          module;
        var moduleExports =
          freeModule && freeModule["exports"] === freeExports;
        function addMapEntry(map, pair) {
          map["set"](pair[0], pair[1]);
          return map;
        }
        function addSetEntry(set, value) {
          set["add"](value);
          return set;
        }
        function arrayEach(array, iteratee) {
          var index = -1,
            length = array ? array["length"] : 0;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayPush(array, values) {
          var index = -1,
            length = values["length"],
            offset = array["length"];
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1,
            length = array ? array["length"] : 0;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function baseTimes(n, iteratee) {
          var index = -1,
            result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }
        function isHostObject(value) {
          var result = false;
          if (value != null && typeof value["toString"] != "function") {
            try {
              result = !!(value + "");
            } catch (e) {}
          }
          return result;
        }
        function mapToArray(map) {
          var index = -1,
            result = Array(map["size"]);
          map["forEach"](function (value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function (arg) {
            return func(transform(arg));
          };
        }
        function setToArray(set) {
          var index = -1,
            result = Array(set["size"]);
          set["forEach"](function (value) {
            result[++index] = value;
          });
          return result;
        }
        var arrayProto = Array["prototype"],
          funcProto = Function["prototype"],
          objectProto = Object["prototype"];
        var coreJsData = root["__core-js_shared__"];
        var maskSrcKey = (function () {
          var uid = /[^.]+$/["exec"](
            (coreJsData &&
              coreJsData["keys"] &&
              coreJsData["keys"]["IE_PROTO"]) ||
              ""
          );
          return uid ? "Symbol(src)_1." + uid : "";
        })();
        var funcToString = funcProto["toString"];
        var hasOwnProperty = objectProto["hasOwnProperty"];
        var objectToString = objectProto["toString"];
        var reIsNative = RegExp(
          "^" +
            funcToString["call"](hasOwnProperty)
              ["replace"](reRegExpChar, "\\_x31526[1636]")
              ["replace"](
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
        var Buffer = moduleExports ? root["Buffer"] : undefined,
          Symbol = root["Symbol"],
          Uint8Array = root["Uint8Array"],
          getPrototype = overArg(Object["getPrototypeOf"], Object),
          objectCreate = Object["create"],
          propertyIsEnumerable = objectProto["propertyIsEnumerable"],
          splice = arrayProto["splice"];
        var nativeGetSymbols = Object["getOwnPropertySymbols"],
          nativeIsBuffer = Buffer ? Buffer["isBuffer"] : undefined,
          nativeKeys = overArg(Object["keys"], Object);
        var DataView = getNative(root, "DataView"),
          Map = getNative(root, "Map"),
          Promise = getNative(root, "Promise"),
          Set = getNative(root, "Set"),
          WeakMap = getNative(root, "WeakMap"),
          nativeCreate = getNative(Object, "create");
        var dataViewCtorString = toSource(DataView),
          mapCtorString = toSource(Map),
          promiseCtorString = toSource(Promise),
          setCtorString = toSource(Set),
          weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol["prototype"] : undefined,
          symbolValueOf = symbolProto ? symbolProto["valueOf"] : undefined;
        function Hash(entries) {
          var index = -1,
            length = entries ? entries["length"] : 0;
          this["clear"]();
          while (++index < length) {
            var entry = entries[index];
            this["set"](entry[0], entry[1]);
          }
        }
        function hashClear() {
          this["__data__"] = nativeCreate ? nativeCreate(null) : {};
        }
        function hashDelete(key) {
          return this["has"](key) && delete this["__data__"][key];
        }
        function hashGet(key) {
          var data = this["__data__"];
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty["call"](data, key) ? data[key] : undefined;
        }
        function hashHas(key) {
          var data = this["__data__"];
          return nativeCreate
            ? data[key] !== undefined
            : hasOwnProperty["call"](data, key);
        }
        function hashSet(key, value) {
          var data = this["__data__"];
          data[key] =
            nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }
        Hash["prototype"]["clear"] = hashClear;
        Hash["prototype"]["delete"] = hashDelete;
        Hash["prototype"]["get"] = hashGet;
        Hash["prototype"]["has"] = hashHas;
        Hash["prototype"]["set"] = hashSet;
        function ListCache(entries) {
          var index = -1,
            length = entries ? entries["length"] : 0;
          this["clear"]();
          while (++index < length) {
            var entry = entries[index];
            this["set"](entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this["__data__"] = [];
        }
        function listCacheDelete(key) {
          var data = this["__data__"],
            index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data["length"] - 1;
          if (index == lastIndex) {
            data["pop"]();
          } else {
            splice["call"](data, index, 1);
          }
          return true;
        }
        function listCacheGet(key) {
          var data = this["__data__"],
            index = assocIndexOf(data, key);
          return index < 0 ? undefined : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this["__data__"], key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this["__data__"],
            index = assocIndexOf(data, key);
          if (index < 0) {
            data["push"]([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache["prototype"]["clear"] = listCacheClear;
        ListCache["prototype"]["delete"] = listCacheDelete;
        ListCache["prototype"]["get"] = listCacheGet;
        ListCache["prototype"]["has"] = listCacheHas;
        ListCache["prototype"]["set"] = listCacheSet;
        function MapCache(entries) {
          var index = -1,
            length = entries ? entries["length"] : 0;
          this["clear"]();
          while (++index < length) {
            var entry = entries[index];
            this["set"](entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this["__data__"] = {
            hash: new Hash(),
            map: new (Map || ListCache)(),
            string: new Hash(),
          };
        }
        function mapCacheDelete(key) {
          return getMapData(this, key)["delete"](key);
        }
        function mapCacheGet(key) {
          return getMapData(this, key)["get"](key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key)["has"](key);
        }
        function mapCacheSet(key, value) {
          getMapData(this, key)["set"](key, value);
          return this;
        }
        MapCache["prototype"]["clear"] = mapCacheClear;
        MapCache["prototype"]["delete"] = mapCacheDelete;
        MapCache["prototype"]["get"] = mapCacheGet;
        MapCache["prototype"]["has"] = mapCacheHas;
        MapCache["prototype"]["set"] = mapCacheSet;
        function Stack(entries) {
          this["__data__"] = new ListCache(entries);
        }
        function stackClear() {
          this["__data__"] = new ListCache();
        }
        function stackDelete(key) {
          return this["__data__"]["delete"](key);
        }
        function stackGet(key) {
          return this["__data__"]["get"](key);
        }
        function stackHas(key) {
          return this["__data__"]["has"](key);
        }
        function stackSet(key, value) {
          var cache = this["__data__"];
          if (cache instanceof ListCache) {
            var pairs = cache["__data__"];
            if (!Map || pairs["length"] < LARGE_ARRAY_SIZE - 1) {
              pairs["push"]([key, value]);
              return this;
            }
            cache = this["__data__"] = new MapCache(pairs);
          }
          cache["set"](key, value);
          return this;
        }
        Stack["prototype"]["clear"] = stackClear;
        Stack["prototype"]["delete"] = stackDelete;
        Stack["prototype"]["get"] = stackGet;
        Stack["prototype"]["has"] = stackHas;
        Stack["prototype"]["set"] = stackSet;
        function arrayLikeKeys(value, inherited) {
          var result =
            isArray(value) || isArguments(value)
              ? baseTimes(value["length"], String)
              : [];
          var length = result["length"],
            skipIndexes = !!length;
          for (var key in value) {
            if (
              (inherited || hasOwnProperty["call"](value, key)) &&
              !(skipIndexes && (key == "length" || isIndex(key, length)))
            ) {
              result["push"](key);
            }
          }
          return result;
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (
            !(hasOwnProperty["call"](object, key) && eq(objValue, value)) ||
            (value === undefined && !(key in object))
          ) {
            object[key] = value;
          }
        }
        function assocIndexOf(array, key) {
          var length = array["length"];
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseClone(
          value,
          isDeep,
          isFull,
          customizer,
          key,
          object,
          stack
        ) {
          var result;
          if (customizer) {
            result = object
              ? customizer(value, key, object, stack)
              : customizer(value);
          }
          if (result !== undefined) {
            return result;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result);
            }
          } else {
            var tag = getTag(value),
              isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
              if (isHostObject(value)) {
                return object ? value : {};
              }
              result = initCloneObject(isFunc ? {} : value);
              if (!isDeep) {
                return copySymbols(value, baseAssign(result, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result = initCloneByTag(value, tag, baseClone, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack["get"](value);
          if (stacked) {
            return stacked;
          }
          stack["set"](value, result);
          if (!isArr) {
            var props = isFull ? getAllKeys(value) : keys(value);
          }
          arrayEach(props || value, function (subValue, key) {
            if (props) {
              key = subValue;
              subValue = value[key];
            }
            assignValue(
              result,
              key,
              baseClone(subValue, isDeep, isFull, customizer, key, value, stack)
            );
          });
          return result;
        }
        function baseCreate(proto) {
          return isObject(proto) ? objectCreate(proto) : {};
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object)
            ? result
            : arrayPush(result, symbolsFunc(object));
        }
        function baseGetTag(value) {
          return objectToString["call"](value);
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern =
            isFunction(value) || isHostObject(value)
              ? reIsNative
              : reIsHostCtor;
          return pattern["test"](toSource(value));
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result = [];
          for (var key in Object(object)) {
            if (hasOwnProperty["call"](object, key) && key != "constructor") {
              result["push"](key);
            }
          }
          return result;
        }
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer["slice"]();
          }
          var result = new buffer["constructor"](buffer["length"]);
          buffer["copy"](result);
          return result;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer["constructor"](arrayBuffer["byteLength"]);
          new Uint8Array(result)["set"](new Uint8Array(arrayBuffer));
          return result;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep
            ? cloneArrayBuffer(dataView["buffer"])
            : dataView["buffer"];
          return new dataView["constructor"](
            buffer,
            dataView["byteOffset"],
            dataView["byteLength"]
          );
        }
        function cloneMap(map, isDeep, cloneFunc) {
          var array = isDeep
            ? cloneFunc(mapToArray(map), true)
            : mapToArray(map);
          return arrayReduce(array, addMapEntry, new map["constructor"]());
        }
        function cloneRegExp(regexp) {
          var result = new regexp["constructor"](
            regexp["source"],
            reFlags["exec"](regexp)
          );
          result["lastIndex"] = regexp["lastIndex"];
          return result;
        }
        function cloneSet(set, isDeep, cloneFunc) {
          var array = isDeep
            ? cloneFunc(setToArray(set), true)
            : setToArray(set);
          return arrayReduce(array, addSetEntry, new set["constructor"]());
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object(symbolValueOf["call"](symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep
            ? cloneArrayBuffer(typedArray["buffer"])
            : typedArray["buffer"];
          return new typedArray["constructor"](
            buffer,
            typedArray["byteOffset"],
            typedArray["length"]
          );
        }
        function copyArray(source, array) {
          var index = -1,
            length = source["length"];
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          object || (object = {});
          var index = -1,
            length = props["length"];
          while (++index < length) {
            var key = props[index];
            var newValue = customizer
              ? customizer(object[key], source[key], key, object, source)
              : undefined;
            assignValue(
              object,
              key,
              newValue === undefined ? source[key] : newValue
            );
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getMapData(map, key) {
          var data = map["__data__"];
          return isKeyable(key)
            ? data[typeof key == "string" ? "string" : "hash"]
            : data["map"];
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }
        var getSymbols = nativeGetSymbols
          ? overArg(nativeGetSymbols, Object)
          : stubArray;
        var getTag = baseGetTag;
        if (
          (DataView &&
            getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
          (Map && getTag(new Map()) != mapTag) ||
          (Promise && getTag(Promise["resolve"]()) != promiseTag) ||
          (Set && getTag(new Set()) != setTag) ||
          (WeakMap && getTag(new WeakMap()) != weakMapTag)
        ) {
          getTag = function (value) {
            var result = objectToString["call"](value),
              Ctor = result == objectTag ? value["constructor"] : undefined,
              ctorString = Ctor ? toSource(Ctor) : undefined;
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        function initCloneArray(array) {
          var length = array["length"],
            result = array["constructor"](length);
          if (
            length &&
            typeof array[0] == "string" &&
            hasOwnProperty["call"](array, "index")
          ) {
            result["index"] = array["index"];
            result["input"] = array["input"];
          }
          return result;
        }
        function initCloneObject(object) {
          return typeof object["constructor"] == "function" &&
            !isPrototype(object)
            ? baseCreate(getPrototype(object))
            : {};
        }
        function initCloneByTag(object, tag, cloneFunc, isDeep) {
          var Ctor = object["constructor"];
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return cloneMap(object, isDeep, cloneFunc);
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return cloneSet(object, isDeep, cloneFunc);
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function isIndex(value, length) {
          length = length == null ? MAX_SAFE_INTEGER : length;
          return (
            !!length &&
            (typeof value == "number" || reIsUint["test"](value)) &&
            value > -1 &&
            value % 1 == 0 &&
            value < length
          );
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" ||
            type == "number" ||
            type == "symbol" ||
            type == "boolean"
            ? value !== "__proto__"
            : value === null;
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        function isPrototype(value) {
          var Ctor = value && value["constructor"],
            proto =
              (typeof Ctor == "function" && Ctor["prototype"]) || objectProto;
          return value === proto;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString["call"](func);
            } catch (e) {}
            try {
              return func + "";
            } catch (e) {}
          }
          return "";
        }
        function cloneDeep(value) {
          return baseClone(value, true, true);
        }
        function eq(value, other) {
          return value === other || (value !== value && other !== other);
        }
        function isArguments(value) {
          return (
            isArrayLikeObject(value) &&
            hasOwnProperty["call"](value, "callee") &&
            (!propertyIsEnumerable["call"](value, "callee") ||
              objectToString["call"](value) == argsTag)
          );
        }
        var isArray = Array["isArray"];
        function isArrayLike(value) {
          return (
            value != null && isLength(value["length"]) && !isFunction(value)
          );
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        function isFunction(value) {
          var tag = isObject(value)
            ? objectToString["call"](value)
            : "";
          return tag == funcTag || tag == genTag;
        }
        function isLength(value) {
          return (
            typeof value == "number" &&
            value > -1 &&
            value % 1 == 0 &&
            value <= MAX_SAFE_INTEGER
          );
        }
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        module["exports"] = cloneDeep;
      }["call"](
        exports,
        __webpack_require__(206),
        __webpack_require__(207)(module)
      ));
    },
    function (module, exports) {
      var g;
      g = (function () {
        return this;
      })();
      try {
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        if (typeof window === "object") g = window;
      }
      module["exports"] = g;
    },
    function (module, exports) {
      module["exports"] = function (module) {
        if (!module["webpackPolyfill"]) {
          module["deprecate"] = function () {};
          module["paths"] = [];
          if (!module["children"]) module["children"] = [];
          Object["defineProperty"](module, "loaded", {
            enumerable: true,
            get: function () {
              return module["l"];
            },
          });
          Object["defineProperty"](module, "id", {
            enumerable: true,
            get: function () {
              return module["i"];
            },
          });
          module["webpackPolyfill"] = 1;
        }
        return module;
      };
    },
  ]);
