
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
    return __webpack_require__((__webpack_require__["s"] = 0));
  })([
    function (module, exports) {
      module["exports"] = (function (modules) {
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
        return __webpack_require__((__webpack_require__["s"] = 106));
      })([
        function (module, exports) {
          var core = (module["exports"] = {
            version: "2.5.7",
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
          var store = __webpack_require__(26)("wks");
          var uid = __webpack_require__(18);
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
          var anObject = __webpack_require__(6);
          var IE8_DOM_DEFINE = __webpack_require__(41);
          var toPrimitive = __webpack_require__(25);
          var dP = Object["defineProperty"];
          exports["f"] = __webpack_require__(4)
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
          module["exports"] = !__webpack_require__(16)(function () {
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
          "use strict";
          var buffer = __webpack_require__(28);
          var Buffer = buffer["Buffer"];
          function copyProps(src, dst) {
            for (var key in src) {
              dst[key] = src[key];
            }
          }
          if (
            Buffer["from"] &&
            Buffer["alloc"] &&
            Buffer["allocUnsafe"] &&
            Buffer["allocUnsafeSlow"]
          ) {
            module["exports"] = buffer;
          } else {
            copyProps(buffer, exports);
            exports["Buffer"] = SafeBuffer;
          }
          function SafeBuffer(arg, encodingOrOffset, length) {
            return Buffer(arg, encodingOrOffset, length);
          }
          copyProps(Buffer, SafeBuffer);
          SafeBuffer["from"] = function (arg, encodingOrOffset, length) {
            if (typeof arg === "number") {
              throw new TypeError("Argument must not be a number");
            }
            return Buffer(arg, encodingOrOffset, length);
          };
          SafeBuffer["alloc"] = function (size, fill, encoding) {
            if (typeof size !== "number") {
              throw new TypeError("Argument must be a number");
            }
            var buf = Buffer(size);
            if (fill !== undefined) {
              if (typeof encoding === "string") {
                buf["fill"](fill, encoding);
              } else {
                buf["fill"](fill);
              }
            } else {
              buf["fill"](0);
            }
            return buf;
          };
          SafeBuffer["allocUnsafe"] = function (size) {
            if (typeof size !== "number") {
              throw new TypeError("Argument must be a number");
            }
            return Buffer(size);
          };
          SafeBuffer["allocUnsafeSlow"] = function (size) {
            if (typeof size !== "number") {
              throw new TypeError("Argument must be a number");
            }
            return buffer["SlowBuffer"](size);
          };
        },
        function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__(7);
          module["exports"] = function (it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
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
          var global = __webpack_require__(1);
          var core = __webpack_require__(0);
          var ctx = __webpack_require__(24);
          var hide = __webpack_require__(15);
          var has = __webpack_require__(8);
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
                (exports["virtual"] || (exports["virtual"] = {}))[
                  key
                ] = out;
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
          "use strict";
          exports["__esModule"] = true;
          exports["default"] = function (instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          };
        },
        function (module, exports) {
          if (typeof Object["create"] === "function") {
            module["exports"] = function inherits(ctor, superCtor) {
              ctor["super_"] = superCtor;
              ctor["prototype"] = Object["create"](superCtor["prototype"], {
                constructor: {
                  value: ctor,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              });
            };
          } else {
            module["exports"] = function inherits(ctor, superCtor) {
              ctor["super_"] = superCtor;
              var TempCtor = function () {};
              TempCtor["prototype"] = superCtor["prototype"];
              ctor["prototype"] = new TempCtor();
              ctor["prototype"]["constructor"] = ctor;
            };
          }
        },
        function (module, exports, __webpack_require__) {
          var Buffer = __webpack_require__(5)["Buffer"];
          function Hash(blockSize, finalSize) {
            this["_block"] = Buffer["alloc"](blockSize);
            this["_finalSize"] = finalSize;
            this["_blockSize"] = blockSize;
            this["_len"] = 0;
          }
          Hash["prototype"]["update"] = function (data, enc) {
            if (typeof data === "string") {
              enc = enc || "utf8";
              data = Buffer["from"](data, enc);
            }
            var block = this["_block"];
            var blockSize = this["_blockSize"];
            var length = data["length"];
            var accum = this["_len"];
            for (var offset = 0; offset < length; ) {
              var assigned = accum % blockSize;
              var remainder = Math["min"](
                length - offset,
                blockSize - assigned
              );
              for (var i = 0; i < remainder; i++) {
                block[assigned + i] = data[offset + i];
              }
              accum += remainder;
              offset += remainder;
              if (accum % blockSize === 0) {
                this["_update"](block);
              }
            }
            this["_len"] += length;
            return this;
          };
          Hash["prototype"]["digest"] = function (enc) {
            var rem = this["_len"] % this["_blockSize"];
            this["_block"][rem] = 128;
            this["_block"]["fill"](0, rem + 1);
            if (rem >= this["_finalSize"]) {
              this["_update"](this["_block"]);
              this["_block"]["fill"](0);
            }
            var bits = this["_len"] * 8;
            if (bits <= 4294967295) {
              this["_block"]["writeUInt32BE"](bits, this["_blockSize"] - 4);
            } else {
              var lowBits = (bits & 4294967295) >>> 0;
              var highBits = (bits - lowBits) / 4294967296;
              this["_block"]["writeUInt32BE"](highBits, this["_blockSize"] - 8);
              this["_block"]["writeUInt32BE"](lowBits, this["_blockSize"] - 4);
            }
            this["_update"](this["_block"]);
            var hash = this["_hash"]();
            return enc ? hash["toString"](enc) : hash;
          };
          Hash["prototype"]["_update"] = function () {
            throw new Error("_update must be implemented by subclass");
          };
          module["exports"] = Hash;
        },
        function (module, exports, __webpack_require__) {
          var IObject = __webpack_require__(56);
          var defined = __webpack_require__(40);
          module["exports"] = function (it) {
            return IObject(defined(it));
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["__esModule"] = true;
          var _defineProperty = __webpack_require__(45);
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
          var dP = __webpack_require__(3);
          var createDesc = __webpack_require__(19);
          module["exports"] = __webpack_require__(4)
            ? function (object, key, value) {
                return dP["f"](object, key, createDesc(1, value));
              }
            : function (object, key, value) {
                object[key] = value;
                return object;
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
          module["exports"] = true;
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
          module["exports"] = function (bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value: value,
            };
          };
        },
        function (module, exports, __webpack_require__) {
          var $keys = __webpack_require__(44);
          var enumBugKeys = __webpack_require__(27);
          module["exports"] =
            Object["keys"] ||
            function keys(O) {
              return $keys(O, enumBugKeys);
            };
        },
        function (module, exports) {
          var toString = {}["toString"];
          module["exports"] = function (it) {
            return toString["call"](it)["slice"](8, -1);
          };
        },
        function (module, exports, __webpack_require__) {
          exports["f"] = __webpack_require__(2);
        },
        function (module, exports) {
          exports["f"] = {}["propertyIsEnumerable"];
        },
        function (module, exports, __webpack_require__) {
          var aFunction = __webpack_require__(31);
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
        function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__(7);
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
          var core = __webpack_require__(0);
          var global = __webpack_require__(1);
          var SHARED = "__core-js_shared__";
          var store = global[SHARED] || (global[SHARED] = {});
          (module["exports"] = function (key, value) {
            return (
              store[key] || (store[key] = value !== undefined ? value : {})
            );
          })("versions", [])["push"]({
            version: core["version"],
            mode: __webpack_require__(17) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
          });
        },
        function (module, exports) {
          module["exports"] = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf"["split"](",");
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          (function (global) {
            var _defineProperty = __webpack_require__(45);
            var _defineProperty2 = _interopRequireDefault(_defineProperty);
            var _species = __webpack_require__(73);
            var _species2 = _interopRequireDefault(_species);
            var _symbol = __webpack_require__(60);
            var _symbol2 = _interopRequireDefault(_symbol);
            function _interopRequireDefault(obj) {
              return obj && obj["__esModule"]
                ? obj
                : {
                    default: obj,
                  };
            }
            var base64 = __webpack_require__(83);
            var ieee754 = __webpack_require__(84);
            var isArray = __webpack_require__(85);
            exports["Buffer"] = Buffer;
            exports["SlowBuffer"] = SlowBuffer;
            exports["INSPECT_MAX_BYTES"] = 50;
            Buffer["TYPED_ARRAY_SUPPORT"] =
              global["TYPED_ARRAY_SUPPORT"] !== undefined
                ? global["TYPED_ARRAY_SUPPORT"]
                : typedArraySupport();
            exports["kMaxLength"] = kMaxLength();
            function typedArraySupport() {
              try {
                var arr = new Uint8Array(1);
                arr["__proto__"] = {
                  __proto__: Uint8Array["prototype"],
                  foo: function foo() {
                    return 42;
                  },
                };
                return (
                  arr["foo"]() === 42 &&
                  typeof arr["subarray"] === "function" &&
                  arr["subarray"](1, 1)["byteLength"] === 0
                );
              } catch (e) {
                return false;
              }
            }
            function kMaxLength() {
              return Buffer["TYPED_ARRAY_SUPPORT"] ? 2147483647 : 1073741823;
            }
            function createBuffer(that, length) {
              if (kMaxLength() < length) {
                throw new RangeError("Invalid typed array length");
              }
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                that = new Uint8Array(length);
                that["__proto__"] = Buffer["prototype"];
              } else {
                if (that === null) {
                  that = new Buffer(length);
                }
                that["length"] = length;
              }
              return that;
            }
            function Buffer(arg, encodingOrOffset, length) {
              if (!Buffer["TYPED_ARRAY_SUPPORT"] && !(this instanceof Buffer)) {
                return new Buffer(arg, encodingOrOffset, length);
              }
              if (typeof arg === "number") {
                if (typeof encodingOrOffset === "string") {
                  throw new Error("If encoding is specified then the first argument must be a string");
                }
                return allocUnsafe(this, arg);
              }
              return from(this, arg, encodingOrOffset, length);
            }
            Buffer["poolSize"] = 8192;
            Buffer["_augment"] = function (arr) {
              arr["__proto__"] = Buffer["prototype"];
              return arr;
            };
            function from(that, value, encodingOrOffset, length) {
              if (typeof value === "number") {
                throw new TypeError('"value" argument must not be a number');
              }
              if (
                typeof ArrayBuffer !== "undefined" &&
                value instanceof ArrayBuffer
              ) {
                return fromArrayBuffer(that, value, encodingOrOffset, length);
              }
              if (typeof value === "string") {
                return fromString(that, value, encodingOrOffset);
              }
              return fromObject(that, value);
            }
            Buffer["from"] = function (value, encodingOrOffset, length) {
              return from(null, value, encodingOrOffset, length);
            };
            if (Buffer["TYPED_ARRAY_SUPPORT"]) {
              Buffer["prototype"]["__proto__"] = Uint8Array["prototype"];
              Buffer["__proto__"] = Uint8Array;
              if (
                typeof _symbol2["default"] !== "undefined" &&
                _species2["default"] &&
                Buffer[_species2["default"]] === Buffer
              ) {
                (0, _defineProperty2["default"])(
                  Buffer,
                  _species2["default"],
                  {
                    value: null,
                    configurable: true,
                  }
                );
              }
            }
            function assertSize(size) {
              if (typeof size !== "number") {
                throw new TypeError('"size" argument must be a number');
              } else if (size < 0) {
                throw new RangeError('"size" argument must not be negative');
              }
            }
            function alloc(that, size, fill, encoding) {
              assertSize(size);
              if (size <= 0) {
                return createBuffer(that, size);
              }
              if (fill !== undefined) {
                return typeof encoding === "string"
                  ? createBuffer(that, size)["fill"](fill, encoding)
                  : createBuffer(that, size)["fill"](fill);
              }
              return createBuffer(that, size);
            }
            Buffer["alloc"] = function (size, fill, encoding) {
              return alloc(null, size, fill, encoding);
            };
            function allocUnsafe(that, size) {
              assertSize(size);
              that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
              if (!Buffer["TYPED_ARRAY_SUPPORT"]) {
                for (var i = 0; i < size; ++i) {
                  that[i] = 0;
                }
              }
              return that;
            }
            Buffer["allocUnsafe"] = function (size) {
              return allocUnsafe(null, size);
            };
            Buffer["allocUnsafeSlow"] = function (size) {
              return allocUnsafe(null, size);
            };
            function fromString(that, string, encoding) {
              if (typeof encoding !== "string" || encoding === "") {
                encoding = "utf8";
              }
              if (!Buffer["isEncoding"](encoding)) {
                throw new TypeError('"encoding" must be a valid string encoding');
              }
              var length = byteLength(string, encoding) | 0;
              that = createBuffer(that, length);
              var actual = that["write"](string, encoding);
              if (actual !== length) {
                that = that["slice"](0, actual);
              }
              return that;
            }
            function fromArrayLike(that, array) {
              var length =
                array["length"] < 0 ? 0 : checked(array["length"]) | 0;
              that = createBuffer(that, length);
              for (var i = 0; i < length; i += 1) {
                that[i] = array[i] & 255;
              }
              return that;
            }
            function fromArrayBuffer(that, array, byteOffset, length) {
              array["byteLength"];
              if (byteOffset < 0 || array["byteLength"] < byteOffset) {
                throw new RangeError("'offset' is out of bounds");
              }
              if (array["byteLength"] < byteOffset + (length || 0)) {
                throw new RangeError("'length' is out of bounds");
              }
              if (byteOffset === undefined && length === undefined) {
                array = new Uint8Array(array);
              } else if (length === undefined) {
                array = new Uint8Array(array, byteOffset);
              } else {
                array = new Uint8Array(array, byteOffset, length);
              }
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                that = array;
                that["__proto__"] = Buffer["prototype"];
              } else {
                that = fromArrayLike(that, array);
              }
              return that;
            }
            function fromObject(that, obj) {
              if (Buffer["isBuffer"](obj)) {
                var len = checked(obj["length"]) | 0;
                that = createBuffer(that, len);
                if (that["length"] === 0) {
                  return that;
                }
                obj["copy"](that, 0, 0, len);
                return that;
              }
              if (obj) {
                if (
                  (typeof ArrayBuffer !== "undefined" &&
                    obj["buffer"] instanceof ArrayBuffer) ||
                  "length" in obj
                ) {
                  if (
                    typeof obj["length"] !== "number" ||
                    isnan(obj["length"])
                  ) {
                    return createBuffer(that, 0);
                  }
                  return fromArrayLike(that, obj);
                }
                if (
                  obj["type"] === "Buffer" &&
                  isArray(obj["data"])
                ) {
                  return fromArrayLike(that, obj["data"]);
                }
              }
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }
            function checked(length) {
              if (length >= kMaxLength()) {
                throw new RangeError(
                  "Attempt to allocate Buffer larger than maximum " +
                    "size: 0x" +
                    kMaxLength()["toString"](16) +
                    " bytes"
                );
              }
              return length | 0;
            }
            function SlowBuffer(length) {
              if (+length != length) {
                length = 0;
              }
              return Buffer["alloc"](+length);
            }
            Buffer["isBuffer"] = function isBuffer(b) {
              return !!(b != null && b["_isBuffer"]);
            };
            Buffer["compare"] = function compare(a, b) {
              if (!Buffer["isBuffer"](a) || !Buffer["isBuffer"](b)) {
                throw new TypeError("Arguments must be Buffers");
              }
              if (a === b) return 0;
              var x = a["length"];
              var y = b["length"];
              for (var i = 0, len = Math["min"](x, y); i < len; ++i) {
                if (a[i] !== b[i]) {
                  x = a[i];
                  y = b[i];
                  break;
                }
              }
              if (x < y) return -1;
              if (y < x) return 1;
              return 0;
            };
            Buffer["isEncoding"] = function isEncoding(encoding) {
              switch (String(encoding)["toLowerCase"]()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            };
            Buffer["concat"] = function concat(list, length) {
              if (!isArray(list)) {
                throw new TypeError('"list" argument must be an Array of Buffers');
              }
              if (list["length"] === 0) {
                return Buffer["alloc"](0);
              }
              var i;
              if (length === undefined) {
                length = 0;
                for (i = 0; i < list["length"]; ++i) {
                  length += list[i]["length"];
                }
              }
              var buffer = Buffer["allocUnsafe"](length);
              var pos = 0;
              for (i = 0; i < list["length"]; ++i) {
                var buf = list[i];
                if (!Buffer["isBuffer"](buf)) {
                  throw new TypeError('"list" argument must be an Array of Buffers');
                }
                buf["copy"](buffer, pos);
                pos += buf["length"];
              }
              return buffer;
            };
            function byteLength(string, encoding) {
              if (Buffer["isBuffer"](string)) {
                return string["length"];
              }
              if (
                typeof ArrayBuffer !== "undefined" &&
                typeof ArrayBuffer["isView"] === "function" &&
                (ArrayBuffer["isView"](string) ||
                  string instanceof ArrayBuffer)
              ) {
                return string["byteLength"];
              }
              if (typeof string !== "string") {
                string = "" + string;
              }
              var len = string["length"];
              if (len === 0) return 0;
              var loweredCase = false;
              for (;;) {
                switch (encoding) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return len;
                  case "utf8":
                  case "utf-8":
                  case undefined:
                    return utf8ToBytes(string)["length"];
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return len * 2;
                  case "hex":
                    return len >>> 1;
                  case "base64":
                    return base64ToBytes(string)["length"];
                  default:
                    if (loweredCase) return utf8ToBytes(string)["length"];
                    encoding = ("" + encoding)["toLowerCase"]();
                    loweredCase = true;
                }
              }
            }
            Buffer["byteLength"] = byteLength;
            function slowToString(encoding, start, end) {
              var loweredCase = false;
              if (start === undefined || start < 0) {
                start = 0;
              }
              if (start > this["length"]) {
                return "";
              }
              if (end === undefined || end > this["length"]) {
                end = this["length"];
              }
              if (end <= 0) {
                return "";
              }
              end >>>= 0;
              start >>>= 0;
              if (end <= start) {
                return "";
              }
              if (!encoding) encoding = "utf8";
              while (true) {
                switch (encoding) {
                  case "hex":
                    return hexSlice(this, start, end);
                  case "utf8":
                  case "utf-8":
                    return utf8Slice(this, start, end);
                  case "ascii":
                    return asciiSlice(this, start, end);
                  case "latin1":
                  case "binary":
                    return latin1Slice(this, start, end);
                  case "base64":
                    return base64Slice(this, start, end);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return utf16leSlice(this, start, end);
                  default:
                    if (loweredCase)
                      throw new TypeError("Unknown encoding: " + encoding);
                    encoding = (encoding + "")["toLowerCase"]();
                    loweredCase = true;
                }
              }
            }
            Buffer["prototype"]["_isBuffer"] = true;
            function swap(b, n, m) {
              var i = b[n];
              b[n] = b[m];
              b[m] = i;
            }
            Buffer["prototype"]["swap16"] = function swap16() {
              var len = this["length"];
              if (len % 2 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 16-bits");
              }
              for (var i = 0; i < len; i += 2) {
                swap(this, i, i + 1);
              }
              return this;
            };
            Buffer["prototype"]["swap32"] = function swap32() {
              var len = this["length"];
              if (len % 4 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 32-bits");
              }
              for (var i = 0; i < len; i += 4) {
                swap(this, i, i + 3);
                swap(this, i + 1, i + 2);
              }
              return this;
            };
            Buffer["prototype"]["swap64"] = function swap64() {
              var len = this["length"];
              if (len % 8 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 64-bits");
              }
              for (var i = 0; i < len; i += 8) {
                swap(this, i, i + 7);
                swap(this, i + 1, i + 6);
                swap(this, i + 2, i + 5);
                swap(this, i + 3, i + 4);
              }
              return this;
            };
            Buffer["prototype"]["toString"] = function toString() {
              var length = this["length"] | 0;
              if (length === 0) return "";
              if (arguments["length"] === 0)
                return utf8Slice(this, 0, length);
              return slowToString["apply"](this, arguments);
            };
            Buffer["prototype"]["equals"] = function equals(b) {
              if (!Buffer["isBuffer"](b)) throw new TypeError("Argument must be a Buffer");
              if (this === b) return true;
              return Buffer["compare"](this, b) === 0;
            };
            Buffer["prototype"]["inspect"] = function inspect() {
              var str = "";
              var max = exports["INSPECT_MAX_BYTES"];
              if (this["length"] > 0) {
                str = this["toString"]("hex", 0, max)
                  ["match"](/.{2}/g)
                  ["join"](" ");
                if (this["length"] > max) str += " ... ";
              }
              return "<Buffer " + str + ">";
            };
            Buffer["prototype"]["compare"] = function compare(
              target,
              start,
              end,
              thisStart,
              thisEnd
            ) {
              if (!Buffer["isBuffer"](target)) {
                throw new TypeError("Argument must be a Buffer");
              }
              if (start === undefined) {
                start = 0;
              }
              if (end === undefined) {
                end = target ? target["length"] : 0;
              }
              if (thisStart === undefined) {
                thisStart = 0;
              }
              if (thisEnd === undefined) {
                thisEnd = this["length"];
              }
              if (
                start < 0 ||
                end > target["length"] ||
                thisStart < 0 ||
                thisEnd > this["length"]
              ) {
                throw new RangeError("out of range index");
              }
              if (thisStart >= thisEnd && start >= end) {
                return 0;
              }
              if (thisStart >= thisEnd) {
                return -1;
              }
              if (start >= end) {
                return 1;
              }
              start >>>= 0;
              end >>>= 0;
              thisStart >>>= 0;
              thisEnd >>>= 0;
              if (this === target) return 0;
              var x = thisEnd - thisStart;
              var y = end - start;
              var len = Math["min"](x, y);
              var thisCopy = this["slice"](thisStart, thisEnd);
              var targetCopy = target["slice"](start, end);
              for (var i = 0; i < len; ++i) {
                if (thisCopy[i] !== targetCopy[i]) {
                  x = thisCopy[i];
                  y = targetCopy[i];
                  break;
                }
              }
              if (x < y) return -1;
              if (y < x) return 1;
              return 0;
            };
            function bidirectionalIndexOf(
              buffer,
              val,
              byteOffset,
              encoding,
              dir
            ) {
              if (buffer["length"] === 0) return -1;
              if (typeof byteOffset === "string") {
                encoding = byteOffset;
                byteOffset = 0;
              } else if (byteOffset > 2147483647) {
                byteOffset = 2147483647;
              } else if (byteOffset < -2147483648) {
                byteOffset = -2147483648;
              }
              byteOffset = +byteOffset;
              if (isNaN(byteOffset)) {
                byteOffset = dir ? 0 : buffer["length"] - 1;
              }
              if (byteOffset < 0) byteOffset = buffer["length"] + byteOffset;
              if (byteOffset >= buffer["length"]) {
                if (dir) return -1;
                else byteOffset = buffer["length"] - 1;
              } else if (byteOffset < 0) {
                if (dir) byteOffset = 0;
                else return -1;
              }
              if (typeof val === "string") {
                val = Buffer["from"](val, encoding);
              }
              if (Buffer["isBuffer"](val)) {
                if (val["length"] === 0) {
                  return -1;
                }
                return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
              } else if (typeof val === "number") {
                val = val & 255;
                if (
                  Buffer["TYPED_ARRAY_SUPPORT"] &&
                  typeof Uint8Array["prototype"]["indexOf"] === "function"
                ) {
                  if (dir) {
                    return Uint8Array["prototype"]["indexOf"]["call"](
                      buffer,
                      val,
                      byteOffset
                    );
                  } else {
                    return Uint8Array["prototype"]["lastIndexOf"]["call"](
                      buffer,
                      val,
                      byteOffset
                    );
                  }
                }
                return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
              }
              throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
              var indexSize = 1;
              var arrLength = arr["length"];
              var valLength = val["length"];
              if (encoding !== undefined) {
                encoding = String(encoding)["toLowerCase"]();
                if (
                  encoding === "ucs2" ||
                  encoding === "ucs-2" ||
                  encoding === "utf16le" ||
                  encoding === "utf-16le"
                ) {
                  if (arr["length"] < 2 || val["length"] < 2) {
                    return -1;
                  }
                  indexSize = 2;
                  arrLength /= 2;
                  valLength /= 2;
                  byteOffset /= 2;
                }
              }
              function read(buf, i) {
                if (indexSize === 1) {
                  return buf[i];
                } else {
                  return buf["readUInt16BE"](i * indexSize);
                }
              }
              var i;
              if (dir) {
                var foundIndex = -1;
                for (i = byteOffset; i < arrLength; i++) {
                  if (
                    read(arr, i) ===
                    read(val, foundIndex === -1 ? 0 : i - foundIndex)
                  ) {
                    if (foundIndex === -1) foundIndex = i;
                    if (i - foundIndex + 1 === valLength)
                      return foundIndex * indexSize;
                  } else {
                    if (foundIndex !== -1) i -= i - foundIndex;
                    foundIndex = -1;
                  }
                }
              } else {
                if (byteOffset + valLength > arrLength)
                  byteOffset = arrLength - valLength;
                for (i = byteOffset; i >= 0; i--) {
                  var found = true;
                  for (var j = 0; j < valLength; j++) {
                    if (read(arr, i + j) !== read(val, j)) {
                      found = false;
                      break;
                    }
                  }
                  if (found) return i;
                }
              }
              return -1;
            }
            Buffer["prototype"]["includes"] = function includes(
              val,
              byteOffset,
              encoding
            ) {
              return this["indexOf"](val, byteOffset, encoding) !== -1;
            };
            Buffer["prototype"]["indexOf"] = function indexOf(
              val,
              byteOffset,
              encoding
            ) {
              return bidirectionalIndexOf(
                this,
                val,
                byteOffset,
                encoding,
                true
              );
            };
            Buffer["prototype"]["lastIndexOf"] = function lastIndexOf(
              val,
              byteOffset,
              encoding
            ) {
              return bidirectionalIndexOf(
                this,
                val,
                byteOffset,
                encoding,
                false
              );
            };
            function hexWrite(buf, string, offset, length) {
              offset = Number(offset) || 0;
              var remaining = buf["length"] - offset;
              if (!length) {
                length = remaining;
              } else {
                length = Number(length);
                if (length > remaining) {
                  length = remaining;
                }
              }
              var strLen = string["length"];
              if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
              if (length > strLen / 2) {
                length = strLen / 2;
              }
              for (var i = 0; i < length; ++i) {
                var parsed = parseInt(string["substr"](i * 2, 2), 16);
                if (isNaN(parsed)) return i;
                buf[offset + i] = parsed;
              }
              return i;
            }
            function utf8Write(buf, string, offset, length) {
              return blitBuffer(
                utf8ToBytes(string, buf["length"] - offset),
                buf,
                offset,
                length
              );
            }
            function asciiWrite(buf, string, offset, length) {
              return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function latin1Write(buf, string, offset, length) {
              return asciiWrite(buf, string, offset, length);
            }
            function base64Write(buf, string, offset, length) {
              return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
              return blitBuffer(
                utf16leToBytes(string, buf["length"] - offset),
                buf,
                offset,
                length
              );
            }
            Buffer["prototype"]["write"] = function write(
              string,
              offset,
              length,
              encoding
            ) {
              if (offset === undefined) {
                encoding = "utf8";
                length = this["length"];
                offset = 0;
              } else if (
                length === undefined &&
                typeof offset === "string"
              ) {
                encoding = offset;
                length = this["length"];
                offset = 0;
              } else if (isFinite(offset)) {
                offset = offset | 0;
                if (isFinite(length)) {
                  length = length | 0;
                  if (encoding === undefined) encoding = "utf8";
                } else {
                  encoding = length;
                  length = undefined;
                }
              } else {
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              }
              var remaining = this["length"] - offset;
              if (length === undefined || length > remaining)
                length = remaining;
              if (
                (string["length"] > 0 && (length < 0 || offset < 0)) ||
                offset > this["length"]
              ) {
                throw new RangeError("Attempt to write outside buffer bounds");
              }
              if (!encoding) encoding = "utf8";
              var loweredCase = false;
              for (;;) {
                switch (encoding) {
                  case "hex":
                    return hexWrite(this, string, offset, length);
                  case "utf8":
                  case "utf-8":
                    return utf8Write(this, string, offset, length);
                  case "ascii":
                    return asciiWrite(this, string, offset, length);
                  case "latin1":
                  case "binary":
                    return latin1Write(this, string, offset, length);
                  case "base64":
                    return base64Write(this, string, offset, length);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return ucs2Write(this, string, offset, length);
                  default:
                    if (loweredCase)
                      throw new TypeError("Unknown encoding: " + encoding);
                    encoding = ("" + encoding)["toLowerCase"]();
                    loweredCase = true;
                }
              }
            };
            Buffer["prototype"]["toJSON"] = function toJSON() {
              return {
                type: "Buffer",
                data: Array["prototype"]["slice"]["call"](
                  this["_arr"] || this,
                  0
                ),
              };
            };
            function base64Slice(buf, start, end) {
              if (start === 0 && end === buf["length"]) {
                return base64["fromByteArray"](buf);
              } else {
                return base64["fromByteArray"](buf["slice"](start, end));
              }
            }
            function utf8Slice(buf, start, end) {
              end = Math["min"](buf["length"], end);
              var res = [];
              var i = start;
              while (i < end) {
                var firstByte = buf[i];
                var codePoint = null;
                var bytesPerSequence =
                  firstByte > 239
                    ? 4
                    : firstByte > 223
                    ? 3
                    : firstByte > 191
                    ? 2
                    : 1;
                if (i + bytesPerSequence <= end) {
                  var secondByte, thirdByte, fourthByte, tempCodePoint;
                  switch (bytesPerSequence) {
                    case 1:
                      if (firstByte < 128) {
                        codePoint = firstByte;
                      }
                      break;
                    case 2:
                      secondByte = buf[i + 1];
                      if ((secondByte & 192) === 128) {
                        tempCodePoint =
                          ((firstByte & 31) << 6) | (secondByte & 63);
                        if (tempCodePoint > 127) {
                          codePoint = tempCodePoint;
                        }
                      }
                      break;
                    case 3:
                      secondByte = buf[i + 1];
                      thirdByte = buf[i + 2];
                      if (
                        (secondByte & 192) === 128 &&
                        (thirdByte & 192) === 128
                      ) {
                        tempCodePoint =
                          ((firstByte & 15) << 12) |
                          ((secondByte & 63) << 6) |
                          (thirdByte & 63);
                        if (
                          tempCodePoint > 2047 &&
                          (tempCodePoint < 55296 || tempCodePoint > 57343)
                        ) {
                          codePoint = tempCodePoint;
                        }
                      }
                      break;
                    case 4:
                      secondByte = buf[i + 1];
                      thirdByte = buf[i + 2];
                      fourthByte = buf[i + 3];
                      if (
                        (secondByte & 192) === 128 &&
                        (thirdByte & 192) === 128 &&
                        (fourthByte & 192) === 128
                      ) {
                        tempCodePoint =
                          ((firstByte & 15) << 18) |
                          ((secondByte & 63) << 12) |
                          ((thirdByte & 63) << 6) |
                          (fourthByte & 63);
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                          codePoint = tempCodePoint;
                        }
                      }
                  }
                }
                if (codePoint === null) {
                  codePoint = 65533;
                  bytesPerSequence = 1;
                } else if (codePoint > 65535) {
                  codePoint -= 65536;
                  res["push"](((codePoint >>> 10) & 1023) | 55296);
                  codePoint = 56320 | (codePoint & 1023);
                }
                res["push"](codePoint);
                i += bytesPerSequence;
              }
              return decodeCodePointsArray(res);
            }
            var MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
              var len = codePoints["length"];
              if (len <= MAX_ARGUMENTS_LENGTH) {
                return String["fromCharCode"]["apply"](String, codePoints);
              }
              var res = "";
              var i = 0;
              while (i < len) {
                res += String["fromCharCode"]["apply"](
                  String,
                  codePoints["slice"](i, (i += MAX_ARGUMENTS_LENGTH))
                );
              }
              return res;
            }
            function asciiSlice(buf, start, end) {
              var ret = "";
              end = Math["min"](buf["length"], end);
              for (var i = start; i < end; ++i) {
                ret += String["fromCharCode"](buf[i] & 127);
              }
              return ret;
            }
            function latin1Slice(buf, start, end) {
              var ret = "";
              end = Math["min"](buf["length"], end);
              for (var i = start; i < end; ++i) {
                ret += String["fromCharCode"](buf[i]);
              }
              return ret;
            }
            function hexSlice(buf, start, end) {
              var len = buf["length"];
              if (!start || start < 0) start = 0;
              if (!end || end < 0 || end > len) end = len;
              var out = "";
              for (var i = start; i < end; ++i) {
                out += toHex(buf[i]);
              }
              return out;
            }
            function utf16leSlice(buf, start, end) {
              var bytes = buf["slice"](start, end);
              var res = "";
              for (var i = 0; i < bytes["length"]; i += 2) {
                res += String["fromCharCode"](bytes[i] + bytes[i + 1] * 256);
              }
              return res;
            }
            Buffer["prototype"]["slice"] = function slice(start, end) {
              var len = this["length"];
              start = ~~start;
              end = end === undefined ? len : ~~end;
              if (start < 0) {
                start += len;
                if (start < 0) start = 0;
              } else if (start > len) {
                start = len;
              }
              if (end < 0) {
                end += len;
                if (end < 0) end = 0;
              } else if (end > len) {
                end = len;
              }
              if (end < start) end = start;
              var newBuf;
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                newBuf = this["subarray"](start, end);
                newBuf["__proto__"] = Buffer["prototype"];
              } else {
                var sliceLen = end - start;
                newBuf = new Buffer(sliceLen, undefined);
                for (var i = 0; i < sliceLen; ++i) {
                  newBuf[i] = this[i + start];
                }
              }
              return newBuf;
            };
            function checkOffset(offset, ext, length) {
              if (offset % 1 !== 0 || offset < 0)
                throw new RangeError("offset is not uint");
              if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer["prototype"]["readUIntLE"] = function readUIntLE(
              offset,
              byteLength,
              noAssert
            ) {
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) checkOffset(offset, byteLength, this["length"]);
              var val = this[offset];
              var mul = 1;
              var i = 0;
              while (++i < byteLength && (mul *= 256)) {
                val += this[offset + i] * mul;
              }
              return val;
            };
            Buffer["prototype"]["readUIntBE"] = function readUIntBE(
              offset,
              byteLength,
              noAssert
            ) {
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) {
                checkOffset(offset, byteLength, this["length"]);
              }
              var val = this[offset + --byteLength];
              var mul = 1;
              while (byteLength > 0 && (mul *= 256)) {
                val += this[offset + --byteLength] * mul;
              }
              return val;
            };
            Buffer["prototype"]["readUInt8"] = function readUInt8(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 1, this["length"]);
              return this[offset];
            };
            Buffer["prototype"]["readUInt16LE"] = function readUInt16LE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 2, this["length"]);
              return this[offset] | (this[offset + 1] << 8);
            };
            Buffer["prototype"]["readUInt16BE"] = function readUInt16BE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 2, this["length"]);
              return (this[offset] << 8) | this[offset + 1];
            };
            Buffer["prototype"]["readUInt32LE"] = function readUInt32LE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 4, this["length"]);
              return (
                (this[offset] |
                  (this[offset + 1] << 8) |
                  (this[offset + 2] << 16)) +
                this[offset + 3] * 16777216
              );
            };
            Buffer["prototype"]["readUInt32BE"] = function readUInt32BE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 4, this["length"]);
              return (
                this[offset] * 16777216 +
                ((this[offset + 1] << 16) |
                  (this[offset + 2] << 8) |
                  this[offset + 3])
              );
            };
            Buffer["prototype"]["readIntLE"] = function readIntLE(
              offset,
              byteLength,
              noAssert
            ) {
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) checkOffset(offset, byteLength, this["length"]);
              var val = this[offset];
              var mul = 1;
              var i = 0;
              while (++i < byteLength && (mul *= 256)) {
                val += this[offset + i] * mul;
              }
              mul *= 128;
              if (val >= mul) val -= Math["pow"](2, 8 * byteLength);
              return val;
            };
            Buffer["prototype"]["readIntBE"] = function readIntBE(
              offset,
              byteLength,
              noAssert
            ) {
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) checkOffset(offset, byteLength, this["length"]);
              var i = byteLength;
              var mul = 1;
              var val = this[offset + --i];
              while (i > 0 && (mul *= 256)) {
                val += this[offset + --i] * mul;
              }
              mul *= 128;
              if (val >= mul) val -= Math["pow"](2, 8 * byteLength);
              return val;
            };
            Buffer["prototype"]["readInt8"] = function readInt8(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 1, this["length"]);
              if (!(this[offset] & 128)) return this[offset];
              return (255 - this[offset] + 1) * -1;
            };
            Buffer["prototype"]["readInt16LE"] = function readInt16LE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 2, this["length"]);
              var val = this[offset] | (this[offset + 1] << 8);
              return val & 32768 ? val | 4294901760 : val;
            };
            Buffer["prototype"]["readInt16BE"] = function readInt16BE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 2, this["length"]);
              var val = this[offset + 1] | (this[offset] << 8);
              return val & 32768 ? val | 4294901760 : val;
            };
            Buffer["prototype"]["readInt32LE"] = function readInt32LE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 4, this["length"]);
              return (
                this[offset] |
                (this[offset + 1] << 8) |
                (this[offset + 2] << 16) |
                (this[offset + 3] << 24)
              );
            };
            Buffer["prototype"]["readInt32BE"] = function readInt32BE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 4, this["length"]);
              return (
                (this[offset] << 24) |
                (this[offset + 1] << 16) |
                (this[offset + 2] << 8) |
                this[offset + 3]
              );
            };
            Buffer["prototype"]["readFloatLE"] = function readFloatLE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 4, this["length"]);
              return ieee754["read"](this, offset, true, 23, 4);
            };
            Buffer["prototype"]["readFloatBE"] = function readFloatBE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 4, this["length"]);
              return ieee754["read"](this, offset, false, 23, 4);
            };
            Buffer["prototype"]["readDoubleLE"] = function readDoubleLE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 8, this["length"]);
              return ieee754["read"](this, offset, true, 52, 8);
            };
            Buffer["prototype"]["readDoubleBE"] = function readDoubleBE(
              offset,
              noAssert
            ) {
              if (!noAssert) checkOffset(offset, 8, this["length"]);
              return ieee754["read"](this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
              if (!Buffer["isBuffer"](buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (value > max || value < min)
                throw new RangeError('"value" argument is out of bounds');
              if (offset + ext > buf["length"])
                throw new RangeError("Index out of range");
            }
            Buffer["prototype"]["writeUIntLE"] = function writeUIntLE(
              value,
              offset,
              byteLength,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) {
                var maxBytes = Math["pow"](2, 8 * byteLength) - 1;
                checkInt(this, value, offset, byteLength, maxBytes, 0);
              }
              var mul = 1;
              var i = 0;
              this[offset] = value & 255;
              while (++i < byteLength && (mul *= 256)) {
                this[offset + i] = (value / mul) & 255;
              }
              return offset + byteLength;
            };
            Buffer["prototype"]["writeUIntBE"] = function writeUIntBE(
              value,
              offset,
              byteLength,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) {
                var maxBytes = Math["pow"](2, 8 * byteLength) - 1;
                checkInt(this, value, offset, byteLength, maxBytes, 0);
              }
              var i = byteLength - 1;
              var mul = 1;
              this[offset + i] = value & 255;
              while (--i >= 0 && (mul *= 256)) {
                this[offset + i] = (value / mul) & 255;
              }
              return offset + byteLength;
            };
            Buffer["prototype"]["writeUInt8"] = function writeUInt8(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
              if (!Buffer["TYPED_ARRAY_SUPPORT"]) value = Math["floor"](value);
              this[offset] = value & 255;
              return offset + 1;
            };
            function objectWriteUInt16(buf, value, offset, littleEndian) {
              if (value < 0) value = 65535 + value + 1;
              for (
                var i = 0, j = Math["min"](buf["length"] - offset, 2);
                i < j;
                ++i
              ) {
                buf[offset + i] =
                  (value & (255 << (8 * (littleEndian ? i : 1 - i)))) >>>
                  ((littleEndian ? i : 1 - i) * 8);
              }
            }
            Buffer["prototype"]["writeUInt16LE"] = function writeUInt16LE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
              } else {
                objectWriteUInt16(this, value, offset, true);
              }
              return offset + 2;
            };
            Buffer["prototype"]["writeUInt16BE"] = function writeUInt16BE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
              } else {
                objectWriteUInt16(this, value, offset, false);
              }
              return offset + 2;
            };
            function objectWriteUInt32(buf, value, offset, littleEndian) {
              if (value < 0) value = 4294967295 + value + 1;
              for (
                var i = 0, j = Math["min"](buf["length"] - offset, 4);
                i < j;
                ++i
              ) {
                buf[offset + i] =
                  (value >>> ((littleEndian ? i : 3 - i) * 8)) & 255;
              }
            }
            Buffer["prototype"]["writeUInt32LE"] = function writeUInt32LE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                this[offset + 3] = value >>> 24;
                this[offset + 2] = value >>> 16;
                this[offset + 1] = value >>> 8;
                this[offset] = value & 255;
              } else {
                objectWriteUInt32(this, value, offset, true);
              }
              return offset + 4;
            };
            Buffer["prototype"]["writeUInt32BE"] = function writeUInt32BE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
              } else {
                objectWriteUInt32(this, value, offset, false);
              }
              return offset + 4;
            };
            Buffer["prototype"]["writeIntLE"] = function writeIntLE(
              value,
              offset,
              byteLength,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) {
                var limit = Math["pow"](2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit);
              }
              var i = 0;
              var mul = 1;
              var sub = 0;
              this[offset] = value & 255;
              while (++i < byteLength && (mul *= 256)) {
                if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                  sub = 1;
                }
                this[offset + i] = (((value / mul) >> 0) - sub) & 255;
              }
              return offset + byteLength;
            };
            Buffer["prototype"]["writeIntBE"] = function writeIntBE(
              value,
              offset,
              byteLength,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) {
                var limit = Math["pow"](2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit);
              }
              var i = byteLength - 1;
              var mul = 1;
              var sub = 0;
              this[offset + i] = value & 255;
              while (--i >= 0 && (mul *= 256)) {
                if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                  sub = 1;
                }
                this[offset + i] = (((value / mul) >> 0) - sub) & 255;
              }
              return offset + byteLength;
            };
            Buffer["prototype"]["writeInt8"] = function writeInt8(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
              if (!Buffer["TYPED_ARRAY_SUPPORT"]) value = Math["floor"](value);
              if (value < 0) value = 255 + value + 1;
              this[offset] = value & 255;
              return offset + 1;
            };
            Buffer["prototype"]["writeInt16LE"] = function writeInt16LE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
              } else {
                objectWriteUInt16(this, value, offset, true);
              }
              return offset + 2;
            };
            Buffer["prototype"]["writeInt16BE"] = function writeInt16BE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
              } else {
                objectWriteUInt16(this, value, offset, false);
              }
              return offset + 2;
            };
            Buffer["prototype"]["writeInt32LE"] = function writeInt32LE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert)
                checkInt(this, value, offset, 4, 2147483647, -2147483648);
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                this[offset + 2] = value >>> 16;
                this[offset + 3] = value >>> 24;
              } else {
                objectWriteUInt32(this, value, offset, true);
              }
              return offset + 4;
            };
            Buffer["prototype"]["writeInt32BE"] = function writeInt32BE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset | 0;
              if (!noAssert)
                checkInt(this, value, offset, 4, 2147483647, -2147483648);
              if (value < 0) value = 4294967295 + value + 1;
              if (Buffer["TYPED_ARRAY_SUPPORT"]) {
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
              } else {
                objectWriteUInt32(this, value, offset, false);
              }
              return offset + 4;
            };
            function checkIEEE754(buf, value, offset, ext, max, min) {
              if (offset + ext > buf["length"])
                throw new RangeError("Index out of range");
              if (offset < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
              if (!noAssert) {
                checkIEEE754(
                  buf,
                  value,
                  offset,
                  4,
                  34028234663852886e22,
                  -34028234663852886e22
                );
              }
              ieee754["write"](buf, value, offset, littleEndian, 23, 4);
              return offset + 4;
            }
            Buffer["prototype"]["writeFloatLE"] = function writeFloatLE(
              value,
              offset,
              noAssert
            ) {
              return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer["prototype"]["writeFloatBE"] = function writeFloatBE(
              value,
              offset,
              noAssert
            ) {
              return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
              if (!noAssert) {
                checkIEEE754(
                  buf,
                  value,
                  offset,
                  8,
                  17976931348623157e292,
                  -17976931348623157e292
                );
              }
              ieee754["write"](buf, value, offset, littleEndian, 52, 8);
              return offset + 8;
            }
            Buffer["prototype"]["writeDoubleLE"] = function writeDoubleLE(
              value,
              offset,
              noAssert
            ) {
              return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer["prototype"]["writeDoubleBE"] = function writeDoubleBE(
              value,
              offset,
              noAssert
            ) {
              return writeDouble(this, value, offset, false, noAssert);
            };
            Buffer["prototype"]["copy"] = function copy(
              target,
              targetStart,
              start,
              end
            ) {
              if (!start) start = 0;
              if (!end && end !== 0) end = this["length"];
              if (targetStart >= target["length"])
                targetStart = target["length"];
              if (!targetStart) targetStart = 0;
              if (end > 0 && end < start) end = start;
              if (end === start) return 0;
              if (target["length"] === 0 || this["length"] === 0)
                return 0;
              if (targetStart < 0) {
                throw new RangeError("targetStart out of bounds");
              }
              if (start < 0 || start >= this["length"])
                throw new RangeError("sourceStart out of bounds");
              if (end < 0) throw new RangeError("sourceEnd out of bounds");
              if (end > this["length"]) end = this["length"];
              if (target["length"] - targetStart < end - start) {
                end = target["length"] - targetStart + start;
              }
              var len = end - start;
              var i;
              if (this === target && start < targetStart && targetStart < end) {
                for (i = len - 1; i >= 0; --i) {
                  target[i + targetStart] = this[i + start];
                }
              } else if (len < 1e3 || !Buffer["TYPED_ARRAY_SUPPORT"]) {
                for (i = 0; i < len; ++i) {
                  target[i + targetStart] = this[i + start];
                }
              } else {
                Uint8Array["prototype"]["set"]["call"](
                  target,
                  this["subarray"](start, start + len),
                  targetStart
                );
              }
              return len;
            };
            Buffer["prototype"]["fill"] = function fill(
              val,
              start,
              end,
              encoding
            ) {
              if (typeof val === "string") {
                if (typeof start === "string") {
                  encoding = start;
                  start = 0;
                  end = this["length"];
                } else if (typeof end === "string") {
                  encoding = end;
                  end = this["length"];
                }
                if (val["length"] === 1) {
                  var code = val["charCodeAt"](0);
                  if (code < 256) {
                    val = code;
                  }
                }
                if (encoding !== undefined && typeof encoding !== "string") {
                  throw new TypeError("encoding must be a string");
                }
                if (
                  typeof encoding === "string" &&
                  !Buffer["isEncoding"](encoding)
                ) {
                  throw new TypeError("Unknown encoding: " + encoding);
                }
              } else if (typeof val === "number") {
                val = val & 255;
              }
              if (
                start < 0 ||
                this["length"] < start ||
                this["length"] < end
              ) {
                throw new RangeError("Out of range index");
              }
              if (end <= start) {
                return this;
              }
              start = start >>> 0;
              end = end === undefined ? this["length"] : end >>> 0;
              if (!val) val = 0;
              var i;
              if (typeof val === "number") {
                for (i = start; i < end; ++i) {
                  this[i] = val;
                }
              } else {
                var bytes = Buffer["isBuffer"](val)
                  ? val
                  : utf8ToBytes(new Buffer(val, encoding)["toString"]());
                var len = bytes["length"];
                for (i = 0; i < end - start; ++i) {
                  this[i + start] = bytes[i % len];
                }
              }
              return this;
            };
            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
            function base64clean(str) {
              str = stringtrim(str)["replace"](
                INVALID_BASE64_RE,
                ""
              );
              if (str["length"] < 2) return "";
              while (str["length"] % 4 !== 0) {
                str = str + "=";
              }
              return str;
            }
            function stringtrim(str) {
              if (str["trim"]) return str["trim"]();
              return str["replace"](/^\s+|\s+$/g, "");
            }
            function toHex(n) {
              if (n < 16) return "0" + n["toString"](16);
              return n["toString"](16);
            }
            function utf8ToBytes(string, units) {
              units = units || Infinity;
              var codePoint;
              var length = string["length"];
              var leadSurrogate = null;
              var bytes = [];
              for (var i = 0; i < length; ++i) {
                codePoint = string["charCodeAt"](i);
                if (codePoint > 55295 && codePoint < 57344) {
                  if (!leadSurrogate) {
                    if (codePoint > 56319) {
                      if ((units -= 3) > -1) bytes["push"](239, 191, 189);
                      continue;
                    } else if (i + 1 === length) {
                      if ((units -= 3) > -1) bytes["push"](239, 191, 189);
                      continue;
                    }
                    leadSurrogate = codePoint;
                    continue;
                  }
                  if (codePoint < 56320) {
                    if ((units -= 3) > -1) bytes["push"](239, 191, 189);
                    leadSurrogate = codePoint;
                    continue;
                  }
                  codePoint =
                    (((leadSurrogate - 55296) << 10) | (codePoint - 56320)) +
                    65536;
                } else if (leadSurrogate) {
                  if ((units -= 3) > -1) bytes["push"](239, 191, 189);
                }
                leadSurrogate = null;
                if (codePoint < 128) {
                  if ((units -= 1) < 0) break;
                  bytes["push"](codePoint);
                } else if (codePoint < 2048) {
                  if ((units -= 2) < 0) break;
                  bytes["push"](
                    (codePoint >> 6) | 192,
                    (codePoint & 63) | 128
                  );
                } else if (codePoint < 65536) {
                  if ((units -= 3) < 0) break;
                  bytes["push"](
                    (codePoint >> 12) | 224,
                    ((codePoint >> 6) & 63) | 128,
                    (codePoint & 63) | 128
                  );
                } else if (codePoint < 1114112) {
                  if ((units -= 4) < 0) break;
                  bytes["push"](
                    (codePoint >> 18) | 240,
                    ((codePoint >> 12) & 63) | 128,
                    ((codePoint >> 6) & 63) | 128,
                    (codePoint & 63) | 128
                  );
                } else {
                  throw new Error("Invalid code point");
                }
              }
              return bytes;
            }
            function asciiToBytes(str) {
              var byteArray = [];
              for (var i = 0; i < str["length"]; ++i) {
                byteArray["push"](str["charCodeAt"](i) & 255);
              }
              return byteArray;
            }
            function utf16leToBytes(str, units) {
              var c, hi, lo;
              var byteArray = [];
              for (var i = 0; i < str["length"]; ++i) {
                if ((units -= 2) < 0) break;
                c = str["charCodeAt"](i);
                hi = c >> 8;
                lo = c % 256;
                byteArray["push"](lo);
                byteArray["push"](hi);
              }
              return byteArray;
            }
            function base64ToBytes(str) {
              return base64["toByteArray"](base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
              for (var i = 0; i < length; ++i) {
                if (i + offset >= dst["length"] || i >= src["length"])
                  break;
                dst[i + offset] = src[i];
              }
              return i;
            }
            function isnan(val) {
              return val !== val;
            }
          }["call"](exports, __webpack_require__(47)));
        },
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);
          var core = __webpack_require__(0);
          var LIBRARY = __webpack_require__(17);
          var wksExt = __webpack_require__(22);
          var defineProperty = __webpack_require__(3)["f"];
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
          var ceil = Math["ceil"];
          var floor = Math["floor"];
          module["exports"] = function (it) {
            return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
          };
        },
        function (module, exports) {
          module["exports"] = function (it) {
            if (typeof it != "function") throw TypeError(it + " is not a function!");
            return it;
          };
        },
        function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__(7);
          var document = __webpack_require__(1)["document"];
          var is = isObject(document) && isObject(document["createElement"]);
          module["exports"] = function (it) {
            return is ? document["createElement"](it) : {};
          };
        },
        function (module, exports, __webpack_require__) {
          var shared = __webpack_require__(26)("keys");
          var uid = __webpack_require__(18);
          module["exports"] = function (key) {
            return shared[key] || (shared[key] = uid(key));
          };
        },
        function (module, exports, __webpack_require__) {
          var def = __webpack_require__(3)["f"];
          var has = __webpack_require__(8);
          var TAG = __webpack_require__(2)("toStringTag");
          module["exports"] = function (it, tag, stat) {
            if (it && !has((it = stat ? it : it["prototype"]), TAG))
              def(it, TAG, {
                configurable: true,
                value: tag,
              });
          };
        },
        function (module, exports) {
          exports["f"] = Object["getOwnPropertySymbols"];
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          (function (Buffer) {
            var _classCallCheck2 = __webpack_require__(10);
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = __webpack_require__(14);
            var _createClass3 = _interopRequireDefault(_createClass2);
            function _interopRequireDefault(obj) {
              return obj && obj["__esModule"]
                ? obj
                : {
                    default: obj,
                  };
            }
            var xxtea = __webpack_require__(89);
            var Crypto = (function () {
              function Crypto(key) {
                (0, _classCallCheck3["default"])(this, Crypto);
                this["secret"] = key["toUpperCase"]();
              }
              (0, _createClass3["default"])(Crypto, [
                {
                  key: "decrypt",
                  value: function decrypt(string) {
                    var decodedString;
                    try {
                      decodedString = Buffer["from"](
                        decodeURIComponent(string),
                        "hex"
                      )["toString"]("utf8");
                    } catch (e) {
                      decodedString = string;
                    }
                    return xxtea["decrypt"](
                      decodedString,
                      this["secret"]
                    );
                  },
                },
                {
                  key: "encrypt",
                  value: function encrypt(string) {
                    return encodeURIComponent(
                      Buffer["from"](
                        xxtea["encrypt"](string, this["secret"])
                      )["toString"]("hex")
                    );
                  },
                },
              ]);
              return Crypto;
            })();
            module["exports"] = Crypto;
          }["call"](exports, __webpack_require__(28)["Buffer"]));
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(91),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          module["exports"] = __webpack_require__(108);
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["__esModule"] = true;
          var _promise = __webpack_require__(63);
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
                    return _promise2["default"]
                      ["resolve"](value)
                      ["then"](
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
        function (module, exports) {
          module["exports"] = function (it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
          };
        },
        function (module, exports, __webpack_require__) {
          module["exports"] =
            !__webpack_require__(4) &&
            !__webpack_require__(16)(function () {
              return (
                Object["defineProperty"](
                  __webpack_require__(32)("div"),
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
        function (module, exports) {
          module["exports"] = {};
        },
        function (module, exports, __webpack_require__) {
          var anObject = __webpack_require__(6);
          var dPs = __webpack_require__(64);
          var enumBugKeys = __webpack_require__(27);
          var IE_PROTO = __webpack_require__(33)("IE_PROTO");
          var Empty = function () {};
          var PROTOTYPE = "prototype";
          var createDict = function () {
            var iframe = __webpack_require__(32)("iframe");
            var i = enumBugKeys["length"];
            var lt = "<";
            var gt = ">";
            var iframeDocument;
            iframe["style"]["display"] = "none";
            __webpack_require__(58)["appendChild"](iframe);
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
              return Properties === undefined
                ? result
                : dPs(result, Properties);
            };
        },
        function (module, exports, __webpack_require__) {
          var has = __webpack_require__(8);
          var toIObject = __webpack_require__(13);
          var arrayIndexOf = __webpack_require__(65)(false);
          var IE_PROTO = __webpack_require__(33)("IE_PROTO");
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
          module["exports"] = {
            default: __webpack_require__(69),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _exports = (module["exports"] = function SHA(algorithm) {
            algorithm = algorithm["toLowerCase"]();
            var Algorithm = _exports[algorithm];
            if (!Algorithm) throw new Error(algorithm + " is not supported (we accept pull requests)");
            return new Algorithm();
          });
          _exports["sha"] = __webpack_require__(72);
          _exports["sha1"] = __webpack_require__(86);
          _exports["sha224"] = __webpack_require__(87);
          _exports["sha256"] = __webpack_require__(49);
          _exports["sha384"] = __webpack_require__(88);
          _exports["sha512"] = __webpack_require__(50);
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
        function (module, exports, __webpack_require__) {
          var $keys = __webpack_require__(44);
          var hiddenKeys = __webpack_require__(27)["concat"](
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
          var inherits = __webpack_require__(11);
          var Hash = __webpack_require__(12);
          var Buffer = __webpack_require__(5)["Buffer"];
          var K = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ];
          var W = new Array(64);
          function Sha256() {
            this["init"]();
            this["_w"] = W;
            Hash["call"](this, 64, 56);
          }
          inherits(Sha256, Hash);
          Sha256["prototype"]["init"] = function () {
            this["_a"] = 1779033703;
            this["_b"] = 3144134277;
            this["_c"] = 1013904242;
            this["_d"] = 2773480762;
            this["_e"] = 1359893119;
            this["_f"] = 2600822924;
            this["_g"] = 528734635;
            this["_h"] = 1541459225;
            return this;
          };
          function ch(x, y, z) {
            return z ^ (x & (y ^ z));
          }
          function maj(x, y, z) {
            return (x & y) | (z & (x | y));
          }
          function sigma0(x) {
            return (
              ((x >>> 2) | (x << 30)) ^
              ((x >>> 13) | (x << 19)) ^
              ((x >>> 22) | (x << 10))
            );
          }
          function sigma1(x) {
            return (
              ((x >>> 6) | (x << 26)) ^
              ((x >>> 11) | (x << 21)) ^
              ((x >>> 25) | (x << 7))
            );
          }
          function gamma0(x) {
            return (
              ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3)
            );
          }
          function gamma1(x) {
            return (
              ((x >>> 17) | (x << 15)) ^ ((x >>> 19) | (x << 13)) ^ (x >>> 10)
            );
          }
          Sha256["prototype"]["_update"] = function (M) {
            var W = this["_w"];
            var a = this["_a"] | 0;
            var b = this["_b"] | 0;
            var c = this["_c"] | 0;
            var d = this["_d"] | 0;
            var e = this["_e"] | 0;
            var f = this["_f"] | 0;
            var g = this["_g"] | 0;
            var h = this["_h"] | 0;
            for (var i = 0; i < 16; ++i) W[i] = M["readInt32BE"](i * 4);
            for (; i < 64; ++i)
              W[i] =
                (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) |
                0;
            for (var j = 0; j < 64; ++j) {
              var T1 = (h + sigma1(e) + ch(e, f, g) + K[j] + W[j]) | 0;
              var T2 = (sigma0(a) + maj(a, b, c)) | 0;
              h = g;
              g = f;
              f = e;
              e = (d + T1) | 0;
              d = c;
              c = b;
              b = a;
              a = (T1 + T2) | 0;
            }
            this["_a"] = (a + this["_a"]) | 0;
            this["_b"] = (b + this["_b"]) | 0;
            this["_c"] = (c + this["_c"]) | 0;
            this["_d"] = (d + this["_d"]) | 0;
            this["_e"] = (e + this["_e"]) | 0;
            this["_f"] = (f + this["_f"]) | 0;
            this["_g"] = (g + this["_g"]) | 0;
            this["_h"] = (h + this["_h"]) | 0;
          };
          Sha256["prototype"]["_hash"] = function () {
            var H = Buffer["allocUnsafe"](32);
            H["writeInt32BE"](this["_a"], 0);
            H["writeInt32BE"](this["_b"], 4);
            H["writeInt32BE"](this["_c"], 8);
            H["writeInt32BE"](this["_d"], 12);
            H["writeInt32BE"](this["_e"], 16);
            H["writeInt32BE"](this["_f"], 20);
            H["writeInt32BE"](this["_g"], 24);
            H["writeInt32BE"](this["_h"], 28);
            return H;
          };
          module["exports"] = Sha256;
        },
        function (module, exports, __webpack_require__) {
          var inherits = __webpack_require__(11);
          var Hash = __webpack_require__(12);
          var Buffer = __webpack_require__(5)["Buffer"];
          var K = [
            1116352408,
            3609767458,
            1899447441,
            602891725,
            3049323471,
            3964484399,
            3921009573,
            2173295548,
            961987163,
            4081628472,
            1508970993,
            3053834265,
            2453635748,
            2937671579,
            2870763221,
            3664609560,
            3624381080,
            2734883394,
            310598401,
            1164996542,
            607225278,
            1323610764,
            1426881987,
            3590304994,
            1925078388,
            4068182383,
            2162078206,
            991336113,
            2614888103,
            633803317,
            3248222580,
            3479774868,
            3835390401,
            2666613458,
            4022224774,
            944711139,
            264347078,
            2341262773,
            604807628,
            2007800933,
            770255983,
            1495990901,
            1249150122,
            1856431235,
            1555081692,
            3175218132,
            1996064986,
            2198950837,
            2554220882,
            3999719339,
            2821834349,
            766784016,
            2952996808,
            2566594879,
            3210313671,
            3203337956,
            3336571891,
            1034457026,
            3584528711,
            2466948901,
            113926993,
            3758326383,
            338241895,
            168717936,
            666307205,
            1188179964,
            773529912,
            1546045734,
            1294757372,
            1522805485,
            1396182291,
            2643833823,
            1695183700,
            2343527390,
            1986661051,
            1014477480,
            2177026350,
            1206759142,
            2456956037,
            344077627,
            2730485921,
            1290863460,
            2820302411,
            3158454273,
            3259730800,
            3505952657,
            3345764771,
            106217008,
            3516065817,
            3606008344,
            3600352804,
            1432725776,
            4094571909,
            1467031594,
            275423344,
            851169720,
            430227734,
            3100823752,
            506948616,
            1363258195,
            659060556,
            3750685593,
            883997877,
            3785050280,
            958139571,
            3318307427,
            1322822218,
            3812723403,
            1537002063,
            2003034995,
            1747873779,
            3602036899,
            1955562222,
            1575990012,
            2024104815,
            1125592928,
            2227730452,
            2716904306,
            2361852424,
            442776044,
            2428436474,
            593698344,
            2756734187,
            3733110249,
            3204031479,
            2999351573,
            3329325298,
            3815920427,
            3391569614,
            3928383900,
            3515267271,
            566280711,
            3940187606,
            3454069534,
            4118630271,
            4000239992,
            116418474,
            1914138554,
            174292421,
            2731055270,
            289380356,
            3203993006,
            460393269,
            320620315,
            685471733,
            587496836,
            852142971,
            1086792851,
            1017036298,
            365543100,
            1126000580,
            2618297676,
            1288033470,
            3409855158,
            1501505948,
            4234509866,
            1607167915,
            987167468,
            1816402316,
            1246189591,
          ];
          var W = new Array(160);
          function Sha512() {
            this["init"]();
            this["_w"] = W;
            Hash["call"](this, 128, 112);
          }
          inherits(Sha512, Hash);
          Sha512["prototype"]["init"] = function () {
            this["_ah"] = 1779033703;
            this["_bh"] = 3144134277;
            this["_ch"] = 1013904242;
            this["_dh"] = 2773480762;
            this["_eh"] = 1359893119;
            this["_fh"] = 2600822924;
            this["_gh"] = 528734635;
            this["_hh"] = 1541459225;
            this["_al"] = 4089235720;
            this["_bl"] = 2227873595;
            this["_cl"] = 4271175723;
            this["_dl"] = 1595750129;
            this["_el"] = 2917565137;
            this["_fl"] = 725511199;
            this["_gl"] = 4215389547;
            this["_hl"] = 327033209;
            return this;
          };
          function Ch(x, y, z) {
            return z ^ (x & (y ^ z));
          }
          function maj(x, y, z) {
            return (x & y) | (z & (x | y));
          }
          function sigma0(x, xl) {
            return (
              ((x >>> 28) | (xl << 4)) ^
              ((xl >>> 2) | (x << 30)) ^
              ((xl >>> 7) | (x << 25))
            );
          }
          function sigma1(x, xl) {
            return (
              ((x >>> 14) | (xl << 18)) ^
              ((x >>> 18) | (xl << 14)) ^
              ((xl >>> 9) | (x << 23))
            );
          }
          function Gamma0(x, xl) {
            return (
              ((x >>> 1) | (xl << 31)) ^ ((x >>> 8) | (xl << 24)) ^ (x >>> 7)
            );
          }
          function Gamma0l(x, xl) {
            return (
              ((x >>> 1) | (xl << 31)) ^
              ((x >>> 8) | (xl << 24)) ^
              ((x >>> 7) | (xl << 25))
            );
          }
          function Gamma1(x, xl) {
            return (
              ((x >>> 19) | (xl << 13)) ^ ((xl >>> 29) | (x << 3)) ^ (x >>> 6)
            );
          }
          function Gamma1l(x, xl) {
            return (
              ((x >>> 19) | (xl << 13)) ^
              ((xl >>> 29) | (x << 3)) ^
              ((x >>> 6) | (xl << 26))
            );
          }
          function getCarry(a, b) {
            return a >>> 0 < b >>> 0 ? 1 : 0;
          }
          Sha512["prototype"]["_update"] = function (M) {
            var W = this["_w"];
            var ah = this["_ah"] | 0;
            var bh = this["_bh"] | 0;
            var ch = this["_ch"] | 0;
            var dh = this["_dh"] | 0;
            var eh = this["_eh"] | 0;
            var fh = this["_fh"] | 0;
            var gh = this["_gh"] | 0;
            var hh = this["_hh"] | 0;
            var al = this["_al"] | 0;
            var bl = this["_bl"] | 0;
            var cl = this["_cl"] | 0;
            var dl = this["_dl"] | 0;
            var el = this["_el"] | 0;
            var fl = this["_fl"] | 0;
            var gl = this["_gl"] | 0;
            var hl = this["_hl"] | 0;
            for (var i = 0; i < 32; i += 2) {
              W[i] = M["readInt32BE"](i * 4);
              W[i + 1] = M["readInt32BE"](i * 4 + 4);
            }
            for (; i < 160; i += 2) {
              var xh = W[i - 15 * 2];
              var xl = W[i - 15 * 2 + 1];
              var gamma0 = Gamma0(xh, xl);
              var gamma0l = Gamma0l(xl, xh);
              xh = W[i - 2 * 2];
              xl = W[i - 2 * 2 + 1];
              var gamma1 = Gamma1(xh, xl);
              var gamma1l = Gamma1l(xl, xh);
              var Wi7h = W[i - 7 * 2];
              var Wi7l = W[i - 7 * 2 + 1];
              var Wi16h = W[i - 16 * 2];
              var Wi16l = W[i - 16 * 2 + 1];
              var Wil = (gamma0l + Wi7l) | 0;
              var Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0;
              Wil = (Wil + gamma1l) | 0;
              Wih = (Wih + gamma1 + getCarry(Wil, gamma1l)) | 0;
              Wil = (Wil + Wi16l) | 0;
              Wih = (Wih + Wi16h + getCarry(Wil, Wi16l)) | 0;
              W[i] = Wih;
              W[i + 1] = Wil;
            }
            for (var j = 0; j < 160; j += 2) {
              Wih = W[j];
              Wil = W[j + 1];
              var majh = maj(ah, bh, ch);
              var majl = maj(al, bl, cl);
              var sigma0h = sigma0(ah, al);
              var sigma0l = sigma0(al, ah);
              var sigma1h = sigma1(eh, el);
              var sigma1l = sigma1(el, eh);
              var Kih = K[j];
              var Kil = K[j + 1];
              var chh = Ch(eh, fh, gh);
              var chl = Ch(el, fl, gl);
              var t1l = (hl + sigma1l) | 0;
              var t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0;
              t1l = (t1l + chl) | 0;
              t1h = (t1h + chh + getCarry(t1l, chl)) | 0;
              t1l = (t1l + Kil) | 0;
              t1h = (t1h + Kih + getCarry(t1l, Kil)) | 0;
              t1l = (t1l + Wil) | 0;
              t1h = (t1h + Wih + getCarry(t1l, Wil)) | 0;
              var t2l = (sigma0l + majl) | 0;
              var t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0;
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = (dl + t1l) | 0;
              eh = (dh + t1h + getCarry(el, dl)) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = (t1l + t2l) | 0;
              ah = (t1h + t2h + getCarry(al, t1l)) | 0;
            }
            this["_al"] = (this["_al"] + al) | 0;
            this["_bl"] = (this["_bl"] + bl) | 0;
            this["_cl"] = (this["_cl"] + cl) | 0;
            this["_dl"] = (this["_dl"] + dl) | 0;
            this["_el"] = (this["_el"] + el) | 0;
            this["_fl"] = (this["_fl"] + fl) | 0;
            this["_gl"] = (this["_gl"] + gl) | 0;
            this["_hl"] = (this["_hl"] + hl) | 0;
            this["_ah"] =
              (this["_ah"] + ah + getCarry(this["_al"], al)) | 0;
            this["_bh"] =
              (this["_bh"] + bh + getCarry(this["_bl"], bl)) | 0;
            this["_ch"] =
              (this["_ch"] + ch + getCarry(this["_cl"], cl)) | 0;
            this["_dh"] =
              (this["_dh"] + dh + getCarry(this["_dl"], dl)) | 0;
            this["_eh"] =
              (this["_eh"] + eh + getCarry(this["_el"], el)) | 0;
            this["_fh"] =
              (this["_fh"] + fh + getCarry(this["_fl"], fl)) | 0;
            this["_gh"] =
              (this["_gh"] + gh + getCarry(this["_gl"], gl)) | 0;
            this["_hh"] =
              (this["_hh"] + hh + getCarry(this["_hl"], hl)) | 0;
          };
          Sha512["prototype"]["_hash"] = function () {
            var H = Buffer["allocUnsafe"](64);
            function writeInt64BE(h, l, offset) {
              H["writeInt32BE"](h, offset);
              H["writeInt32BE"](l, offset + 4);
            }
            writeInt64BE(this["_ah"], this["_al"], 0);
            writeInt64BE(this["_bh"], this["_bl"], 8);
            writeInt64BE(this["_ch"], this["_cl"], 16);
            writeInt64BE(this["_dh"], this["_dl"], 24);
            writeInt64BE(this["_eh"], this["_el"], 32);
            writeInt64BE(this["_fh"], this["_fl"], 40);
            writeInt64BE(this["_gh"], this["_gl"], 48);
            writeInt64BE(this["_hh"], this["_hl"], 56);
            return H;
          };
          module["exports"] = Sha512;
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(138),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["__esModule"] = true;
          var _typeof2 = __webpack_require__(103);
          var _typeof3 = _interopRequireDefault(_typeof2);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          exports["default"] = function (self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call &&
              ((typeof call === "undefined"
                ? "undefined"
                : (0, _typeof3["default"])(call)) === "object" ||
                typeof call === "function")
              ? call
              : self;
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["__esModule"] = true;
          var _setPrototypeOf = __webpack_require__(143);
          var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
          var _create = __webpack_require__(147);
          var _create2 = _interopRequireDefault(_create);
          var _typeof2 = __webpack_require__(103);
          var _typeof3 = _interopRequireDefault(_typeof2);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          exports["default"] = function (subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  (typeof superClass === "undefined"
                    ? "undefined"
                    : (0, _typeof3["default"])(superClass))
              );
            }
            subClass["prototype"] = (0, _create2["default"])(
              superClass && superClass["prototype"],
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              _setPrototypeOf2["default"]
                ? (0, _setPrototypeOf2["default"])(subClass, superClass)
                : (subClass["__proto__"] = superClass);
          };
        },
        function (module, exports) {},
        function (module, exports, __webpack_require__) {
          module["exports"] = __webpack_require__(15);
        },
        function (module, exports, __webpack_require__) {
          var cof = __webpack_require__(21);
          module["exports"] = Object("z")["propertyIsEnumerable"](0)
            ? Object
            : function (it) {
                return cof(it) == "String"
                  ? it["split"]("")
                  : Object(it);
              };
        },
        function (module, exports, __webpack_require__) {
          var toInteger = __webpack_require__(30);
          var min = Math["min"];
          module["exports"] = function (it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
          };
        },
        function (module, exports, __webpack_require__) {
          var document = __webpack_require__(1)["document"];
          module["exports"] = document && document["documentElement"];
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var shajs = __webpack_require__(46);
          var crypto = __webpack_require__(36);
          module["exports"] = {
            x: function x() {
              return (
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "3" +
                "8" +
                "3" +
                "6" +
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "6" +
                "4" +
                "6" +
                "6" +
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "6" +
                "6" +
                "3" +
                "8" +
                "2" +
                "6" +
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "3" +
                "0" +
                "6" +
                "4" +
                "5" +
                "9" +
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "3" +
                "9" +
                "3" +
                "5" +
                "2" +
                "4" +
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "6" +
                "5" +
                "3" +
                "9" +
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "3" +
                "8" +
                "3" +
                "2" +
                "3" +
                (![] + [])[+[]] +
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "6" +
                "6" +
                "3" +
                "3" +
                "3" +
                ([] + [] + [][[]])[+!+[] + +!+[]] +
                "3" +
                (typeof [])[+!+[]] +
                "5" +
                (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] +
                "7" +
                "8" +
                "3" +
                "8" +
                "6" +
                "6" +
                "3" +
                "5"
              );
            },
            generateTenantToken: function generateTenantToken(tenantId) {
              var cryptoHandler = new crypto(
                this["x"]()["toUpperCase"]()
              );
              var tenantIdCipher = cryptoHandler["encrypt"](tenantId);
              var sha1 = new shajs["sha1"]();
              sha1["update"](tenantIdCipher);
              var token = sha1["digest"]("hex");
              return token;
            },
          };
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(75),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          var pIE = __webpack_require__(23);
          var createDesc = __webpack_require__(19);
          var toIObject = __webpack_require__(13);
          var toPrimitive = __webpack_require__(25);
          var has = __webpack_require__(8);
          var IE8_DOM_DEFINE = __webpack_require__(41);
          var gOPD = Object["getOwnPropertyDescriptor"];
          exports["f"] = __webpack_require__(4)
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
          "use strict";
          var _stringify = __webpack_require__(37);
          var _stringify2 = _interopRequireDefault(_stringify);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var secret = __webpack_require__(59)["x"]()["toUpperCase"]();
          var shajs = __webpack_require__(46);
          var cryptoHandler = __webpack_require__(36);
          var crypto = new cryptoHandler(secret);
          var decrypt = crypto["decrypt"]["bind"](crypto);
          var encrypt = crypto["encrypt"]["bind"](crypto);
          exports = module["exports"] = function (configObject) {
            return encrypt((0, _stringify2["default"])(configObject));
          };
          exports["secret"] = function (secret) {
            return encodeHex(printableString(secret));
          };
          exports["generateSignature"] = function (data) {
            var sha1Input = new String()["concat"](
              data["join"](),
              encodeHex(printableString(secret))
            );
            var sha1 = new shajs["sha1"]();
            sha1["update"](sha1Input);
            var hash = sha1["digest"]("hex");
            return hash;
          };
          function isPrintable(character) {
            return (
              -1 !==
              ("0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "!#$%&()*+,-./:;<=>?@[]^_`{|}~")[
                "indexOf"
              ](character)
            );
          }
          function encodeHex(string) {
            return mapString(string, function (character) {
              return hex(character)["toUpperCase"]();
            });
          }
          function hex(character) {
            return ("0" + character["charCodeAt"](0)["toString"](16))[
              "slice"
            ](-2);
          }
          function printableChar(character) {
            return isPrintable(character)
              ? character
              : "\\x" + hex(character);
          }
          function printableString(string) {
            return mapString(string, printableChar);
          }
          function toUtf8(string) {
            return unescape(encodeURIComponent(string));
          }
          function mapString(string, callback) {
            var mapped = [];
            for (
              var i = 0, character;
              (character = string["charAt"](i));
              i++
            ) {
              mapped["push"](callback(character));
            }
            return mapped["join"]("");
          }
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(110),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          var dP = __webpack_require__(3);
          var anObject = __webpack_require__(6);
          var getKeys = __webpack_require__(20);
          module["exports"] = __webpack_require__(4)
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
          var toIObject = __webpack_require__(13);
          var toLength = __webpack_require__(57);
          var toAbsoluteIndex = __webpack_require__(66);
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
          "use strict";
          var toInteger = __webpack_require__(30);
          var max = Math["max"];
          var min = Math["min"];
          module["exports"] = function (index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
          };
        },
        function (module, exports, __webpack_require__) {
          var defined = __webpack_require__(40);
          module["exports"] = function (it) {
            return Object(defined(it));
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var aFunction = __webpack_require__(31);
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
        function (module, exports, __webpack_require__) {
          __webpack_require__(70);
          var $Object = __webpack_require__(0)["Object"];
          module["exports"] = function defineProperty(it, key, desc) {
            return $Object["defineProperty"](it, key, desc);
          };
        },
        function (module, exports, __webpack_require__) {
          var $export = __webpack_require__(9);
          $export(
            $export["S"] +
              $export["F"] * !__webpack_require__(4),
            "Object",
            {
              defineProperty: __webpack_require__(3)["f"],
            }
          );
        },
        function (module, exports, __webpack_require__) {
          var root;
          if (typeof window !== "undefined") {
            root = window;
          } else if (typeof self !== "undefined") {
            root = self;
          } else {
            console["warn"]("Using browser-only version of superagent in non-browser environment");
            root = this;
          }
          var Emitter = __webpack_require__(132);
          var RequestBase = __webpack_require__(133);
          var isObject = __webpack_require__(101);
          var ResponseBase = __webpack_require__(134);
          var Agent = __webpack_require__(136);
          function noop() {}
          var request = (exports = module["exports"] = function (method, url) {
            if ("function" == typeof url) {
              return new exports["Request"]("GET", method)[
                "end"
              ](url);
            }
            if (1 == arguments["length"]) {
              return new exports["Request"]("GET", method);
            }
            return new exports["Request"](method, url);
          });
          exports["Request"] = Request;
          request["getXHR"] = function () {
            if (
              root["XMLHttpRequest"] &&
              (!root["location"] ||
                "file:" != root["location"]["protocol"] ||
                !root["ActiveXObject"])
            ) {
              return new XMLHttpRequest();
            } else {
              try {
                return new ActiveXObject("Microsoft.XMLHTTP");
              } catch (e) {}
              try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
              } catch (e) {}
              try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
              } catch (e) {}
              try {
                return new ActiveXObject("Msxml2.XMLHTTP");
              } catch (e) {}
            }
            throw Error("Browser-only version of superagent could not find XHR");
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
              pushEncodedKeyValuePair(pairs, key, obj[key]);
            }
            return pairs["join"]("&");
          }
          function pushEncodedKeyValuePair(pairs, key, val) {
            if (val != null) {
              if (Array["isArray"](val)) {
                val["forEach"](function (v) {
                  pushEncodedKeyValuePair(pairs, key, v);
                });
              } else if (isObject(val)) {
                for (var subkey in val) {
                  pushEncodedKeyValuePair(
                    pairs,
                    key + "[" + subkey + "]",
                    val[subkey]
                  );
                }
              } else {
                pairs["push"](
                  encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(val)
                );
              }
            } else if (val === null) {
              pairs["push"](encodeURIComponent(key));
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
              if (pos == -1) {
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
            "application/json": JSON["stringify"],
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
            return /[\/+]json($|[^-\w])/["test"](mime);
          }
          function Response(req) {
            this["req"] = req;
            this["xhr"] = this["req"]["xhr"];
            this["text"] =
              (this["req"]["method"] != "HEAD" &&
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
            this["header"] = this["headers"] = parseHeader(
              this["xhr"]["getAllResponseHeaders"]()
            );
            this["header"]["content-type"] = this["xhr"]["getResponseHeader"](
              "content-type"
            );
            this["_setHeaderProperties"](this["header"]);
            if (null === this["text"] && req["_responseType"]) {
              this["body"] = this["xhr"]["response"];
            } else {
              this["body"] =
                this["req"]["method"] != "HEAD"
                  ? this["_parseBody"](
                      this["text"]
                        ? this["text"]
                        : this["xhr"]["response"]
                    )
                  : null;
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
            return parse && str && (str["length"] || str instanceof Object)
              ? parse(str)
              : null;
          };
          Response["prototype"]["toError"] = function () {
            var req = this["req"];
            var method = req["method"];
            var url = req["url"];
            var msg =
              "cannot " +
              method +
              " " +
              url +
              " (" +
              this["status"] +
              ")";
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
              } catch (e) {
                err = new Error("Parser is unable to parse the response");
                err["parse"] = true;
                err["original"] = e;
                if (self["xhr"]) {
                  err["rawResponse"] =
                    typeof self["xhr"]["responseType"] == "undefined"
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
                  new_err = new Error(res["statusText"] || "Unsuccessful HTTP response");
                }
              } catch (custom_err) {
                new_err = custom_err;
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
            this["set"](
              "Content-Type",
              request["types"][type] || type
            );
            return this;
          };
          Request["prototype"]["accept"] = function (type) {
            this["set"](
              "Accept",
              request["types"][type] || type
            );
            return this;
          };
          Request["prototype"]["auth"] = function (user, pass, options) {
            if (1 === arguments["length"]) pass = "";
            if (typeof pass === "object" && pass !== null) {
              options = pass;
              pass = "";
            }
            if (!options) {
              options = {
                type: "function" === typeof btoa ? "basic" : "auto",
              };
            }
            var encoder = function (string) {
              if ("function" === typeof btoa) {
                return btoa(string);
              }
              throw new Error("Cannot use basic auth, btoa is not a function");
            };
            return this["_auth"](user, pass, options, encoder);
          };
          Request["prototype"]["query"] = function (val) {
            if ("string" != typeof val) val = serialize(val);
            if (val) this["_query"]["push"](val);
            return this;
          };
          Request["prototype"]["attach"] = function (field, file, options) {
            if (file) {
              if (this["_data"]) {
                throw Error("superagent can't mix .send() and .attach()");
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
              if (this["_maxRetries"])
                err["retries"] = this["_retries"] - 1;
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
          Request["prototype"]["buffer"] = Request["prototype"][
            "ca"
          ] = Request["prototype"]["agent"] = function () {
            console["warn"]("This is not supported in browser version of superagent");
            return this;
          };
          Request["prototype"]["pipe"] = Request["prototype"][
            "write"
          ] = function () {
            throw Error("Streaming is not supported in browser version of superagent");
          };
          Request["prototype"]["_isHost"] = function _isHost(obj) {
            return (
              obj &&
              "object" === typeof obj &&
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
            return this["_end"]();
          };
          Request["prototype"]["_end"] = function () {
            var self = this;
            var xhr = (this["xhr"] = request["getXHR"]());
            var data = this["_formData"] || this["_data"];
            this["_setTimeouts"]();
            xhr["onreadystatechange"] = function () {
              var readyState = xhr["readyState"];
              if (readyState >= 2 && self["_responseTimeoutTimer"]) {
                clearTimeout(self["_responseTimeoutTimer"]);
              }
              if (4 != readyState) {
                return;
              }
              var status;
              try {
                status = xhr["status"];
              } catch (e) {
                status = 0;
              }
              if (!status) {
                if (self["timedout"] || self["_aborted"]) return;
                return self["crossDomainError"]();
              }
              self["emit"]("end");
            };
            var handleProgress = function (direction, e) {
              if (e["total"] > 0) {
                e["percent"] = (e["loaded"] / e["total"]) * 100;
              }
              e["direction"] = direction;
              self["emit"]("progress", e);
            };
            if (this["hasListeners"]("progress")) {
              try {
                xhr["onprogress"] = handleProgress["bind"](
                  null,
                  "download"
                );
                if (xhr["upload"]) {
                  xhr["upload"]["onprogress"] = handleProgress[
                    "bind"
                  ](null, "upload");
                }
              } catch (e) {}
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
              "GET" != this["method"] &&
              "HEAD" != this["method"] &&
              "string" != typeof data &&
              !this["_isHost"](data)
            ) {
              var contentType = this["_header"]["content-type"];
              var serialize =
                this["_serializer"] ||
                request["serialize"][
                  contentType
                    ? contentType["split"](";")[0]
                    : ""
                ];
              if (!serialize && isJSON(contentType)) {
                serialize = request["serialize"]["application/json"];
              }
              if (serialize) data = serialize(data);
            }
            for (var field in this["header"]) {
              if (null == this["header"][field]) continue;
              if (this["header"]["hasOwnProperty"](field))
                xhr["setRequestHeader"](field, this["header"][field]);
            }
            if (this["_responseType"]) {
              xhr["responseType"] = this["_responseType"];
            }
            this["emit"]("request", this);
            xhr["send"](typeof data !== "undefined" ? data : null);
            return this;
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
            if ("function" == typeof data) (fn = data), (data = null);
            if (data) req["query"](data);
            if (fn) req["end"](fn);
            return req;
          };
          request["head"] = function (url, data, fn) {
            var req = request("HEAD", url);
            if ("function" == typeof data) (fn = data), (data = null);
            if (data) req["query"](data);
            if (fn) req["end"](fn);
            return req;
          };
          request["options"] = function (url, data, fn) {
            var req = request("OPTIONS", url);
            if ("function" == typeof data) (fn = data), (data = null);
            if (data) req["send"](data);
            if (fn) req["end"](fn);
            return req;
          };
          function del(url, data, fn) {
            var req = request("DELETE", url);
            if ("function" == typeof data) (fn = data), (data = null);
            if (data) req["send"](data);
            if (fn) req["end"](fn);
            return req;
          }
          request["del"] = del;
          request["delete"] = del;
          request["patch"] = function (url, data, fn) {
            var req = request("PATCH", url);
            if ("function" == typeof data) (fn = data), (data = null);
            if (data) req["send"](data);
            if (fn) req["end"](fn);
            return req;
          };
          request["post"] = function (url, data, fn) {
            var req = request("POST", url);
            if ("function" == typeof data) (fn = data), (data = null);
            if (data) req["send"](data);
            if (fn) req["end"](fn);
            return req;
          };
          request["put"] = function (url, data, fn) {
            var req = request("PUT", url);
            if ("function" == typeof data) (fn = data), (data = null);
            if (data) req["send"](data);
            if (fn) req["end"](fn);
            return req;
          };
        },
        function (module, exports, __webpack_require__) {
          var inherits = __webpack_require__(11);
          var Hash = __webpack_require__(12);
          var Buffer = __webpack_require__(5)["Buffer"];
          var K = [1518500249, 1859775393, 2400959708 | 0, 3395469782 | 0];
          var W = new Array(80);
          function Sha() {
            this["init"]();
            this["_w"] = W;
            Hash["call"](this, 64, 56);
          }
          inherits(Sha, Hash);
          Sha["prototype"]["init"] = function () {
            this["_a"] = 1732584193;
            this["_b"] = 4023233417;
            this["_c"] = 2562383102;
            this["_d"] = 271733878;
            this["_e"] = 3285377520;
            return this;
          };
          function rotl5(num) {
            return (num << 5) | (num >>> 27);
          }
          function rotl30(num) {
            return (num << 30) | (num >>> 2);
          }
          function ft(s, b, c, d) {
            if (s === 0) return (b & c) | (~b & d);
            if (s === 2) return (b & c) | (b & d) | (c & d);
            return b ^ c ^ d;
          }
          Sha["prototype"]["_update"] = function (M) {
            var W = this["_w"];
            var a = this["_a"] | 0;
            var b = this["_b"] | 0;
            var c = this["_c"] | 0;
            var d = this["_d"] | 0;
            var e = this["_e"] | 0;
            for (var i = 0; i < 16; ++i) W[i] = M["readInt32BE"](i * 4);
            for (; i < 80; ++i)
              W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            for (var j = 0; j < 80; ++j) {
              var s = ~~(j / 20);
              var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0;
              e = d;
              d = c;
              c = rotl30(b);
              b = a;
              a = t;
            }
            this["_a"] = (a + this["_a"]) | 0;
            this["_b"] = (b + this["_b"]) | 0;
            this["_c"] = (c + this["_c"]) | 0;
            this["_d"] = (d + this["_d"]) | 0;
            this["_e"] = (e + this["_e"]) | 0;
          };
          Sha["prototype"]["_hash"] = function () {
            var H = Buffer["allocUnsafe"](20);
            H["writeInt32BE"](this["_a"] | 0, 0);
            H["writeInt32BE"](this["_b"] | 0, 4);
            H["writeInt32BE"](this["_c"] | 0, 8);
            H["writeInt32BE"](this["_d"] | 0, 12);
            H["writeInt32BE"](this["_e"] | 0, 16);
            return H;
          };
          module["exports"] = Sha;
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(74),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = __webpack_require__(22)["f"](
            "species"
          );
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          __webpack_require__(76);
          __webpack_require__(54);
          __webpack_require__(81);
          __webpack_require__(82);
          module["exports"] = __webpack_require__(0)["Symbol"];
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var global = __webpack_require__(1);
          var has = __webpack_require__(8);
          var DESCRIPTORS = __webpack_require__(4);
          var $export = __webpack_require__(9);
          var redefine = __webpack_require__(55);
          var META = __webpack_require__(77)["KEY"];
          var $fails = __webpack_require__(16);
          var shared = __webpack_require__(26);
          var setToStringTag = __webpack_require__(34);
          var uid = __webpack_require__(18);
          var wks = __webpack_require__(2);
          var wksExt = __webpack_require__(22);
          var wksDefine = __webpack_require__(29);
          var enumKeys = __webpack_require__(78);
          var isArray = __webpack_require__(79);
          var anObject = __webpack_require__(6);
          var isObject = __webpack_require__(7);
          var toIObject = __webpack_require__(13);
          var toPrimitive = __webpack_require__(25);
          var createDesc = __webpack_require__(19);
          var _create = __webpack_require__(43);
          var gOPNExt = __webpack_require__(80);
          var $GOPD = __webpack_require__(61);
          var $DP = __webpack_require__(3);
          var $keys = __webpack_require__(20);
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
          var USE_NATIVE = typeof $Symbol == "function";
          var QObject = global["QObject"];
          var setter =
            !QObject ||
            !QObject[PROTOTYPE] ||
            !QObject[PROTOTYPE]["findChild"];
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
            if (
              it === ObjectProto &&
              has(AllSymbols, key) &&
              !has(OPSymbols, key)
            )
              return;
            var D = gOPD(it, key);
            if (
              D &&
              has(AllSymbols, key) &&
              !(has(it, HIDDEN) && it[HIDDEN][key])
            )
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
              var tag = uid(
                arguments["length"] > 0 ? arguments[0] : undefined
              );
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
            __webpack_require__(48)["f"] = gOPNExt[
              "f"
            ] = $getOwnPropertyNames;
            __webpack_require__(23)["f"] = $propertyIsEnumerable;
            __webpack_require__(35)["f"] = $getOwnPropertySymbols;
            if (DESCRIPTORS && !__webpack_require__(17)) {
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
            __webpack_require__(15)(
              $Symbol[PROTOTYPE],
              TO_PRIMITIVE,
              $Symbol[PROTOTYPE]["valueOf"]
            );
          setToStringTag($Symbol, "Symbol");
          setToStringTag(Math, "Math", true);
          setToStringTag(global["JSON"], "JSON", true);
        },
        function (module, exports, __webpack_require__) {
          var META = __webpack_require__(18)("meta");
          var isObject = __webpack_require__(7);
          var has = __webpack_require__(8);
          var setDesc = __webpack_require__(3)["f"];
          var id = 0;
          var isExtensible =
            Object["isExtensible"] ||
            function () {
              return true;
            };
          var FREEZE = !__webpack_require__(16)(function () {
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
            if (
              FREEZE &&
              meta["NEED"] &&
              isExtensible(it) &&
              !has(it, META)
            )
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
          var getKeys = __webpack_require__(20);
          var gOPS = __webpack_require__(35);
          var pIE = __webpack_require__(23);
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
          var cof = __webpack_require__(21);
          module["exports"] =
            Array["isArray"] ||
            function isArray(arg) {
              return cof(arg) == "Array";
            };
        },
        function (module, exports, __webpack_require__) {
          var toIObject = __webpack_require__(13);
          var gOPN = __webpack_require__(48)["f"];
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
          __webpack_require__(29)("asyncIterator");
        },
        function (module, exports, __webpack_require__) {
          __webpack_require__(29)("observable");
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["byteLength"] = byteLength;
          exports["toByteArray"] = toByteArray;
          exports["fromByteArray"] = fromByteArray;
          var lookup = [];
          var revLookup = [];
          var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
          var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          for (var i = 0, len = code["length"]; i < len; ++i) {
            lookup[i] = code[i];
            revLookup[code["charCodeAt"](i)] = i;
          }
          revLookup["-"["charCodeAt"](0)] = 62;
          revLookup["_"["charCodeAt"](0)] = 63;
          function getLens(b64) {
            var len = b64["length"];
            if (len % 4 > 0) {
              throw new Error("Invalid string. Length must be a multiple of 4");
            }
            var validLen = b64["indexOf"]("=");
            if (validLen === -1) validLen = len;
            var placeHoldersLen = validLen === len ? 0 : 4 - (validLen % 4);
            return [validLen, placeHoldersLen];
          }
          function byteLength(b64) {
            var lens = getLens(b64);
            var validLen = lens[0];
            var placeHoldersLen = lens[1];
            return ((validLen + placeHoldersLen) * 3) / 4 - placeHoldersLen;
          }
          function _byteLength(b64, validLen, placeHoldersLen) {
            return ((validLen + placeHoldersLen) * 3) / 4 - placeHoldersLen;
          }
          function toByteArray(b64) {
            var tmp;
            var lens = getLens(b64);
            var validLen = lens[0];
            var placeHoldersLen = lens[1];
            var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
            var curByte = 0;
            var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
            for (var i = 0; i < len; i += 4) {
              tmp =
                (revLookup[b64["charCodeAt"](i)] << 18) |
                (revLookup[b64["charCodeAt"](i + 1)] << 12) |
                (revLookup[b64["charCodeAt"](i + 2)] << 6) |
                revLookup[b64["charCodeAt"](i + 3)];
              arr[curByte++] = (tmp >> 16) & 255;
              arr[curByte++] = (tmp >> 8) & 255;
              arr[curByte++] = tmp & 255;
            }
            if (placeHoldersLen === 2) {
              tmp =
                (revLookup[b64["charCodeAt"](i)] << 2) |
                (revLookup[b64["charCodeAt"](i + 1)] >> 4);
              arr[curByte++] = tmp & 255;
            }
            if (placeHoldersLen === 1) {
              tmp =
                (revLookup[b64["charCodeAt"](i)] << 10) |
                (revLookup[b64["charCodeAt"](i + 1)] << 4) |
                (revLookup[b64["charCodeAt"](i + 2)] >> 2);
              arr[curByte++] = (tmp >> 8) & 255;
              arr[curByte++] = tmp & 255;
            }
            return arr;
          }
          function tripletToBase64(num) {
            return (
              lookup[(num >> 18) & 63] +
              lookup[(num >> 12) & 63] +
              lookup[(num >> 6) & 63] +
              lookup[num & 63]
            );
          }
          function encodeChunk(uint8, start, end) {
            var tmp;
            var output = [];
            for (var i = start; i < end; i += 3) {
              tmp =
                ((uint8[i] << 16) & 16711680) +
                ((uint8[i + 1] << 8) & 65280) +
                (uint8[i + 2] & 255);
              output["push"](tripletToBase64(tmp));
            }
            return output["join"]("");
          }
          function fromByteArray(uint8) {
            var tmp;
            var len = uint8["length"];
            var extraBytes = len % 3;
            var parts = [];
            var maxChunkLength = 16383;
            for (
              var i = 0, len2 = len - extraBytes;
              i < len2;
              i += maxChunkLength
            ) {
              parts["push"](
                encodeChunk(
                  uint8,
                  i,
                  i + maxChunkLength > len2 ? len2 : i + maxChunkLength
                )
              );
            }
            if (extraBytes === 1) {
              tmp = uint8[len - 1];
              parts["push"](
                lookup[tmp >> 2] + lookup[(tmp << 4) & 63] + "=="
              );
            } else if (extraBytes === 2) {
              tmp = (uint8[len - 2] << 8) + uint8[len - 1];
              parts["push"](
                lookup[tmp >> 10] +
                  lookup[(tmp >> 4) & 63] +
                  lookup[(tmp << 2) & 63] +
                  "="
              );
            }
            return parts["join"]("");
          }
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["read"] = function (
            buffer,
            offset,
            isLE,
            mLen,
            nBytes
          ) {
            var e, m;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var nBits = -7;
            var i = isLE ? nBytes - 1 : 0;
            var d = isLE ? -1 : 1;
            var s = buffer[offset + i];
            i += d;
            e = s & ((1 << -nBits) - 1);
            s >>= -nBits;
            nBits += eLen;
            for (
              ;
              nBits > 0;
              e = e * 256 + buffer[offset + i], i += d, nBits -= 8
            ) {}
            m = e & ((1 << -nBits) - 1);
            e >>= -nBits;
            nBits += mLen;
            for (
              ;
              nBits > 0;
              m = m * 256 + buffer[offset + i], i += d, nBits -= 8
            ) {}
            if (e === 0) {
              e = 1 - eBias;
            } else if (e === eMax) {
              return m ? NaN : (s ? -1 : 1) * Infinity;
            } else {
              m = m + Math["pow"](2, mLen);
              e = e - eBias;
            }
            return (s ? -1 : 1) * m * Math["pow"](2, e - mLen);
          };
          exports["write"] = function (
            buffer,
            value,
            offset,
            isLE,
            mLen,
            nBytes
          ) {
            var e, m, c;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var rt =
              mLen === 23
                ? Math["pow"](2, -24) - Math["pow"](2, -77)
                : 0;
            var i = isLE ? 0 : nBytes - 1;
            var d = isLE ? 1 : -1;
            var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
            value = Math["abs"](value);
            if (isNaN(value) || value === Infinity) {
              m = isNaN(value) ? 1 : 0;
              e = eMax;
            } else {
              e = Math["floor"](
                Math["log"](value) / Math["LN2"]
              );
              if (value * (c = Math["pow"](2, -e)) < 1) {
                e--;
                c *= 2;
              }
              if (e + eBias >= 1) {
                value += rt / c;
              } else {
                value += rt * Math["pow"](2, 1 - eBias);
              }
              if (value * c >= 2) {
                e++;
                c /= 2;
              }
              if (e + eBias >= eMax) {
                m = 0;
                e = eMax;
              } else if (e + eBias >= 1) {
                m = (value * c - 1) * Math["pow"](2, mLen);
                e = e + eBias;
              } else {
                m =
                  value *
                  Math["pow"](2, eBias - 1) *
                  Math["pow"](2, mLen);
                e = 0;
              }
            }
            for (
              ;
              mLen >= 8;
              buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8
            ) {}
            e = (e << mLen) | m;
            eLen += mLen;
            for (
              ;
              eLen > 0;
              buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8
            ) {}
            buffer[offset + i - d] |= s * 128;
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var toString = {}["toString"];
          module["exports"] =
            Array["isArray"] ||
            function (arr) {
              return toString["call"](arr) == "[object Array]";
            };
        },
        function (module, exports, __webpack_require__) {
          var inherits = __webpack_require__(11);
          var Hash = __webpack_require__(12);
          var Buffer = __webpack_require__(5)["Buffer"];
          var K = [1518500249, 1859775393, 2400959708 | 0, 3395469782 | 0];
          var W = new Array(80);
          function Sha1() {
            this["init"]();
            this["_w"] = W;
            Hash["call"](this, 64, 56);
          }
          inherits(Sha1, Hash);
          Sha1["prototype"]["init"] = function () {
            this["_a"] = 1732584193;
            this["_b"] = 4023233417;
            this["_c"] = 2562383102;
            this["_d"] = 271733878;
            this["_e"] = 3285377520;
            return this;
          };
          function rotl1(num) {
            return (num << 1) | (num >>> 31);
          }
          function rotl5(num) {
            return (num << 5) | (num >>> 27);
          }
          function rotl30(num) {
            return (num << 30) | (num >>> 2);
          }
          function ft(s, b, c, d) {
            if (s === 0) return (b & c) | (~b & d);
            if (s === 2) return (b & c) | (b & d) | (c & d);
            return b ^ c ^ d;
          }
          Sha1["prototype"]["_update"] = function (M) {
            var W = this["_w"];
            var a = this["_a"] | 0;
            var b = this["_b"] | 0;
            var c = this["_c"] | 0;
            var d = this["_d"] | 0;
            var e = this["_e"] | 0;
            for (var i = 0; i < 16; ++i) W[i] = M["readInt32BE"](i * 4);
            for (; i < 80; ++i)
              W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);
            for (var j = 0; j < 80; ++j) {
              var s = ~~(j / 20);
              var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0;
              e = d;
              d = c;
              c = rotl30(b);
              b = a;
              a = t;
            }
            this["_a"] = (a + this["_a"]) | 0;
            this["_b"] = (b + this["_b"]) | 0;
            this["_c"] = (c + this["_c"]) | 0;
            this["_d"] = (d + this["_d"]) | 0;
            this["_e"] = (e + this["_e"]) | 0;
          };
          Sha1["prototype"]["_hash"] = function () {
            var H = Buffer["allocUnsafe"](20);
            H["writeInt32BE"](this["_a"] | 0, 0);
            H["writeInt32BE"](this["_b"] | 0, 4);
            H["writeInt32BE"](this["_c"] | 0, 8);
            H["writeInt32BE"](this["_d"] | 0, 12);
            H["writeInt32BE"](this["_e"] | 0, 16);
            return H;
          };
          module["exports"] = Sha1;
        },
        function (module, exports, __webpack_require__) {
          var inherits = __webpack_require__(11);
          var Sha256 = __webpack_require__(49);
          var Hash = __webpack_require__(12);
          var Buffer = __webpack_require__(5)["Buffer"];
          var W = new Array(64);
          function Sha224() {
            this["init"]();
            this["_w"] = W;
            Hash["call"](this, 64, 56);
          }
          inherits(Sha224, Sha256);
          Sha224["prototype"]["init"] = function () {
            this["_a"] = 3238371032;
            this["_b"] = 914150663;
            this["_c"] = 812702999;
            this["_d"] = 4144912697;
            this["_e"] = 4290775857;
            this["_f"] = 1750603025;
            this["_g"] = 1694076839;
            this["_h"] = 3204075428;
            return this;
          };
          Sha224["prototype"]["_hash"] = function () {
            var H = Buffer["allocUnsafe"](28);
            H["writeInt32BE"](this["_a"], 0);
            H["writeInt32BE"](this["_b"], 4);
            H["writeInt32BE"](this["_c"], 8);
            H["writeInt32BE"](this["_d"], 12);
            H["writeInt32BE"](this["_e"], 16);
            H["writeInt32BE"](this["_f"], 20);
            H["writeInt32BE"](this["_g"], 24);
            return H;
          };
          module["exports"] = Sha224;
        },
        function (module, exports, __webpack_require__) {
          var inherits = __webpack_require__(11);
          var SHA512 = __webpack_require__(50);
          var Hash = __webpack_require__(12);
          var Buffer = __webpack_require__(5)["Buffer"];
          var W = new Array(160);
          function Sha384() {
            this["init"]();
            this["_w"] = W;
            Hash["call"](this, 128, 112);
          }
          inherits(Sha384, SHA512);
          Sha384["prototype"]["init"] = function () {
            this["_ah"] = 3418070365;
            this["_bh"] = 1654270250;
            this["_ch"] = 2438529370;
            this["_dh"] = 355462360;
            this["_eh"] = 1731405415;
            this["_fh"] = 2394180231;
            this["_gh"] = 3675008525;
            this["_hh"] = 1203062813;
            this["_al"] = 3238371032;
            this["_bl"] = 914150663;
            this["_cl"] = 812702999;
            this["_dl"] = 4144912697;
            this["_el"] = 4290775857;
            this["_fl"] = 1750603025;
            this["_gl"] = 1694076839;
            this["_hl"] = 3204075428;
            return this;
          };
          Sha384["prototype"]["_hash"] = function () {
            var H = Buffer["allocUnsafe"](48);
            function writeInt64BE(h, l, offset) {
              H["writeInt32BE"](h, offset);
              H["writeInt32BE"](l, offset + 4);
            }
            writeInt64BE(this["_ah"], this["_al"], 0);
            writeInt64BE(this["_bh"], this["_bl"], 8);
            writeInt64BE(this["_ch"], this["_cl"], 16);
            writeInt64BE(this["_dh"], this["_dl"], 24);
            writeInt64BE(this["_eh"], this["_el"], 32);
            writeInt64BE(this["_fh"], this["_fl"], 40);
            return H;
          };
          module["exports"] = Sha384;
        },
        function (module, exports, __webpack_require__) {
          (function (Buffer) {
            var delta = 2654435769;
            function longArrayToString(data, includeLength) {
              var length = data["length"],
                n = (length - 1) << 2;
              if (includeLength) {
                var m = data[length - 1];
                if (m < n - 3 || m > n) return null;
                n = m;
              }
              for (var i = 0; i < length; ++i) {
                data[i] = String["fromCharCode"](
                  data[i] & 255,
                  (data[i] >>> 8) & 255,
                  (data[i] >>> 16) & 255,
                  (data[i] >>> 24) & 255
                );
              }
              if (includeLength) {
                return data["join"]("")["substring"](0, n);
              } else {
                return data["join"]("");
              }
            }
            function stringToLongArray(string, includeLength) {
              var length = string["length"];
              var result = [];
              for (var i = 0; i < length; i += 4) {
                result[i >> 2] =
                  string["charCodeAt"](i) |
                  (string["charCodeAt"](i + 1) << 8) |
                  (string["charCodeAt"](i + 2) << 16) |
                  (string["charCodeAt"](i + 3) << 24);
              }
              if (includeLength) {
                result[result["length"]] = length;
              }
              return result;
            }
            function encrypt(string, key) {
              if (string == "") {
                return "";
              }
              string = new Buffer(string)["toString"]("base64");
              var v = stringToLongArray(string, true),
                k = stringToLongArray(key, false),
                n = v["length"] - 1,
                z = v[n],
                y = v[0],
                mx,
                e,
                p,
                q = Math["floor"](6 + 52 / (n + 1)),
                sum = 0;
              if (k["length"] < 4) {
                k["length"] = 4;
              }
              while (0 <= --q) {
                sum = (sum + delta) & 4294967295;
                e = (sum >>> 2) & 3;
                for (p = 0; p < n; ++p) {
                  y = v[p + 1];
                  mx =
                    (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
                    ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
                  z = v[p] = (v[p] + mx) & 4294967295;
                }
                y = v[0];
                mx =
                  (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
                  ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
                z = v[n] = (v[n] + mx) & 4294967295;
              }
              return longArrayToString(v, false);
            }
            function decrypt(string, key) {
              if (string == "") {
                return "";
              }
              var v = stringToLongArray(string, false);
              var k = stringToLongArray(key, false);
              if (k["length"] < 4) {
                k["length"] = 4;
              }
              var n = v["length"] - 1;
              var z = v[n - 1],
                y = v[0];
              var mx,
                e,
                p,
                q = Math["floor"](6 + 52 / (n + 1)),
                sum = (q * delta) & 4294967295;
              while (sum != 0) {
                e = (sum >>> 2) & 3;
                for (p = n; p > 0; --p) {
                  z = v[p - 1];
                  mx =
                    (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
                    ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
                  y = v[p] = (v[p] - mx) & 4294967295;
                }
                z = v[n];
                mx =
                  (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
                  ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
                y = v[0] = (v[0] - mx) & 4294967295;
                sum = (sum - delta) & 4294967295;
              }
              return new Buffer(longArrayToString(v, true), "base64")[
                "toString"
              ]();
            }
            exports["encrypt"] = encrypt;
            exports["decrypt"] = decrypt;
          }["call"](exports, __webpack_require__(28)["Buffer"]));
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          "use_strict";
          var _regenerator = __webpack_require__(38);
          var _regenerator2 = _interopRequireDefault(_regenerator);
          var _asyncToGenerator2 = __webpack_require__(39);
          var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var AccessProviderBase = (function () {
            function AccessProviderBase() {
              (0, _classCallCheck3["default"])(this, AccessProviderBase);
            }
            (0, _createClass3["default"])(AccessProviderBase, [
              {
                key: "checkEntitlement",
                value: (function () {
                  var _ref = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](
                      function _callee() {
                        return _regenerator2["default"]["wrap"](
                          function _callee$(_context) {
                            while (1) {
                              switch (
                                (_context["prev"] =
                                  _context["next"])
                              ) {
                                case 0:
                                  throw new Error("checkEntitlement is not implemented for this provider");
                                case 1:
                                case "end":
                                  return _context["stop"]();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      }
                    )
                  );
                  function checkEntitlement() {
                    return _ref["apply"](this, arguments);
                  }
                  return checkEntitlement;
                })(),
              },
              {
                key: "getUrl",
                value: (function () {
                  var _ref2 = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](function _callee2(
                      entitlementResponse
                    ) {
                      return _regenerator2["default"]["wrap"](
                        function _callee2$(_context2) {
                          while (1) {
                            switch (
                              (_context2["prev"] =
                                _context2["next"])
                            ) {
                              case 0:
                                throw new Error("getUrl is not implemented for this provider");
                              case 1:
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
                  function getUrl(_x) {
                    return _ref2["apply"](this, arguments);
                  }
                  return getUrl;
                })(),
              },
              {
                key: "formatOutput",
                value: function formatOutput(
                  entitlementResponse,
                  getUrlResponse
                ) {
                  throw new Error("formatOutput is not implemented for this provider");
                },
              },
              {
                key: "formatPsfError",
                value: function formatPsfError(error) {
                  throw new Error("formatPsfError is not implemented for this provider");
                },
              },
              {
                key: "isJwToken",
                value: function isJwToken(serverToken) {
                  var jwtParts = serverToken["split"](".");
                  if (jwtParts["length"] == 3) {
                    return true;
                  }
                  return false;
                },
              },
            ]);
            return AccessProviderBase;
          })();
          module["exports"] = AccessProviderBase;
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
          "use strict";
          var $at = __webpack_require__(111)(true);
          __webpack_require__(93)(
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
          "use strict";
          var LIBRARY = __webpack_require__(17);
          var $export = __webpack_require__(9);
          var redefine = __webpack_require__(55);
          var hide = __webpack_require__(15);
          var Iterators = __webpack_require__(42);
          var $iterCreate = __webpack_require__(112);
          var setToStringTag = __webpack_require__(34);
          var getPrototypeOf = __webpack_require__(94);
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
              proto[ITERATOR] ||
              proto[FF_ITERATOR] ||
              (DEFAULT && proto[DEFAULT]);
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
                if (
                  !LIBRARY &&
                  typeof IteratorPrototype[ITERATOR] != "function"
                )
                  hide(IteratorPrototype, ITERATOR, returnThis);
              }
            }
            if (DEF_VALUES && $native && $native["name"] !== VALUES) {
              VALUES_BUG = true;
              $default = function values() {
                return $native["call"](this);
              };
            }
            if (
              (!LIBRARY || FORCED) &&
              (BUGGY || VALUES_BUG || !proto[ITERATOR])
            ) {
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
          var has = __webpack_require__(8);
          var toObject = __webpack_require__(67);
          var IE_PROTO = __webpack_require__(33)("IE_PROTO");
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
          __webpack_require__(113);
          var global = __webpack_require__(1);
          var hide = __webpack_require__(15);
          var Iterators = __webpack_require__(42);
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
            if (proto && !proto[TO_STRING_TAG])
              hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = Iterators["Array"];
          }
        },
        function (module, exports, __webpack_require__) {
          var cof = __webpack_require__(21);
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
          var anObject = __webpack_require__(6);
          var aFunction = __webpack_require__(31);
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
          var ctx = __webpack_require__(24);
          var invoke = __webpack_require__(122);
          var html = __webpack_require__(58);
          var cel = __webpack_require__(32);
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
              while (arguments["length"] > i)
                args["push"](arguments[i++]);
              queue[++counter] = function () {
                invoke(typeof fn == "function" ? fn : Function(fn), args);
              };
              defer(counter);
              return counter;
            };
            clearTask = function clearImmediate(id) {
              delete queue[id];
            };
            if (__webpack_require__(21)(process) == "process") {
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
          var anObject = __webpack_require__(6);
          var isObject = __webpack_require__(7);
          var newPromiseCapability = __webpack_require__(68);
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
          "use strict";
          function isObject(obj) {
            return null !== obj && "object" === typeof obj;
          }
          module["exports"] = isObject;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _getPrototypeOf = __webpack_require__(51);
          var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _possibleConstructorReturn2 = __webpack_require__(52);
          var _possibleConstructorReturn3 = _interopRequireDefault(
            _possibleConstructorReturn2
          );
          var _inherits2 = __webpack_require__(53);
          var _inherits3 = _interopRequireDefault(_inherits2);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var PsfError = (function (_Error) {
            (0, _inherits3["default"])(PsfError, _Error);
            function PsfError(standardErrorCode) {
              var nativeErrorCode =
                arguments["length"] > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : "";
              var message =
                arguments["length"] > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : "";
              (0, _classCallCheck3["default"])(this, PsfError);
              var _this = (0, _possibleConstructorReturn3["default"])(
                this,
                (PsfError["__proto__"] ||
                  (0, _getPrototypeOf2["default"])(PsfError))["call"](
                  this,
                  nativeErrorCode
                )
              );
              _this["code"] = nativeErrorCode;
              _this["type"] = standardErrorCode;
              _this["message"] = message;
              return _this;
            }
            return PsfError;
          })(Error);
          module["exports"] = PsfError;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["__esModule"] = true;
          var _iterator = __webpack_require__(141);
          var _iterator2 = _interopRequireDefault(_iterator);
          var _symbol = __webpack_require__(60);
          var _symbol2 = _interopRequireDefault(_symbol);
          var _typeof =
            typeof _symbol2["default"] === "function" &&
            typeof _iterator2["default"] === "symbol"
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    typeof _symbol2["default"] === "function" &&
                    obj["constructor"] === _symbol2["default"] &&
                    obj !== _symbol2["default"]["prototype"]
                    ? "symbol"
                    : typeof obj;
                };
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          exports["default"] =
            typeof _symbol2["default"] === "function" &&
            _typeof(_iterator2["default"]) === "symbol"
              ? function (obj) {
                  return typeof obj === "undefined"
                    ? "undefined"
                    : _typeof(obj);
                }
              : function (obj) {
                  return obj &&
                    typeof _symbol2["default"] === "function" &&
                    obj["constructor"] === _symbol2["default"] &&
                    obj !== _symbol2["default"]["prototype"]
                    ? "symbol"
                    : typeof obj === "undefined"
                    ? "undefined"
                    : _typeof(obj);
                };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          Object["defineProperty"](exports, "__esModule", {
            value: true,
          });
          var ErrorType = (exports["ErrorType"] = {
            UNKNOWN: "unknown",
            CONTENT_UNKNOWN: "content_unknown",
            CONTENT_YOUTH_PROTECTED: "content_youth_protected",
            CONTENT_GEOBLOCKING: "content_geoblocking",
            CONTENT_UNAVAILABLE: "content_unavailable",
            CONTENT_TAKEDOWN: "content_takedown",
          });
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var FormatterBase = (function () {
            function FormatterBase() {
              (0, _classCallCheck3["default"])(this, FormatterBase);
            }
            (0, _createClass3["default"])(FormatterBase, [
              {
                key: "getMimeType",
                value: function getMimeType(protocol) {
                  switch (protocol) {
                    case "progressive":
                      return "video/mp4";
                    case "dash":
                      return "application/dash+xml";
                    case "hls":
                      return "application/x-mpegURL";
                    case "hss":
                      return "application/vnd.ms-sstr+xml";
                  }
                },
              },
            ]);
            return FormatterBase;
          })();
          module["exports"] = FormatterBase;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _playbackSourceFetcher = __webpack_require__(107);
          var _playbackSourceFetcher2 = _interopRequireDefault(
            _playbackSourceFetcher
          );
          var _encode = __webpack_require__(62);
          var _encode2 = _interopRequireDefault(_encode);
          var _formatterBase = __webpack_require__(105);
          var _formatterBase2 = _interopRequireDefault(_formatterBase);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          window["PlaybackSourceFetcher"] = _playbackSourceFetcher2["default"];
          window["psfEncodeConfig"] = _encode2["default"];
          window["PsfFormatterBase"] = _formatterBase2["default"];
          module["exports"] = {
            PlaybackSourceFetcher: _playbackSourceFetcher2["default"],
            encodeConfig: _encode2["default"],
            formatterBase: _formatterBase2["default"],
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          Object["defineProperty"](exports, "__esModule", {
            value: true,
          });
          var _regenerator = __webpack_require__(38);
          var _regenerator2 = _interopRequireDefault(_regenerator);
          var _asyncToGenerator2 = __webpack_require__(39);
          var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          var _util = __webpack_require__(130);
          var _util2 = _interopRequireDefault(_util);
          var _superagent = __webpack_require__(71);
          var _superagent2 = _interopRequireDefault(_superagent);
          var _decode = __webpack_require__(137);
          var _decode2 = _interopRequireDefault(_decode);
          var _psfError = __webpack_require__(102);
          var _psfError2 = _interopRequireDefault(_psfError);
          var _errorType = __webpack_require__(104);
          var _configparser = __webpack_require__(150);
          var _configparser2 = _interopRequireDefault(_configparser);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var MonetisationProvider = __webpack_require__(151);
          var SkipProvider = __webpack_require__(153);
          var PsaProvider = __webpack_require__(154);
          var tenantConfigServerUrlTemplate = "https://static.<prefix>-vod-playout-<env>.aws.route71.net/playback-source-fetcher/config/";
          function getContentType(contentResource) {
            var contentType = contentResource["contentType"];
            if (
              typeof contentType === "string" &&
              contentType["toLowerCase"]() === "live"
            ) {
              return "live";
            }
            return "vod";
          }
          function isPlayableAsset(contentResource) {
            if (getContentType(contentResource) === "live") {
              return true;
            }
            var id = contentResource["id"];
            if (typeof id !== "string") {
              return false;
            }
            var prefixLength = 2;
            var idPrefix = id["substring"](0, prefixLength);
            var supportedPrefixes = ["a_", "v_"];
            return supportedPrefixes["indexOf"](idPrefix) > -1;
          }
          var PlaybackSourceFetcher = (function () {
            function PlaybackSourceFetcher(encryptedClientConfig, environment) {
              (0, _classCallCheck3["default"])(this, PlaybackSourceFetcher);
              _util2["default"]["log"](
                "[PlaybackSourceFetcher]: constructor. Version:" + _util2["default"]["getVersion"]()
              );
              this["environment"] = environment;
              this["accessProviders"] = {};
              this["clientConfig"] = {};
              try {
                this["clientConfig"] =
                  typeof encryptedClientConfig === "string"
                    ? (0, _decode2["default"])(encryptedClientConfig)
                    : encryptedClientConfig;
              } catch (error) {
                _util2["default"]["log"]("PSF Client Config Error");
                throw new _psfError2["default"](
                  _errorType["ErrorType"]["UNKNOWN"],
                  "PSF_CLIENT_CONFIG_ERROR",
                  error["message"]
                );
              }
            }
            (0, _createClass3["default"])(PlaybackSourceFetcher, [
              {
                key: "getPlaybackUrl",
                value: (function () {
                  var _ref = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](function _callee(
                      contentResource
                    ) {
                      var entitlementResponse,
                        formatError,
                        getUrlsResponse,
                        output;
                      return _regenerator2["default"]["wrap"](
                        function _callee$(_context) {
                          while (1) {
                            switch (
                              (_context["prev"] = _context["next"])
                            ) {
                              case 0:
                                if (isPlayableAsset(contentResource)) {
                                  _context["next"] = 2;
                                  break;
                                }
                                throw new Error(
                                  "Unsupported asset with ID " + contentResource["id"]
                                );
                              case 2:
                                _context["next"] = 4;
                                return this["getEntitlementToken"](contentResource);
                              case 4:
                                entitlementResponse = _context["sent"];
                                entitlementResponse["clientData"] =
                                  contentResource["clientData"] || {};
                                entitlementResponse["connectionType"] =
                                  contentResource["connectionType"];
                                formatError = this["accessProviders"]["playoutProvider"][
                                  "formatErrorObject"
                                ];
                                _context["prev"] = 8;
                                _context["next"] = 11;
                                return this["accessProviders"]["playoutProvider"][
                                  "getUrl"
                                ](entitlementResponse, contentResource);
                              case 11:
                                getUrlsResponse = _context["sent"];
                                output = this["accessProviders"]["playoutProvider"][
                                  "formatOutput"
                                ](entitlementResponse, getUrlsResponse);
                                return _context["abrupt"](
                                  "return",
                                  output
                                );
                              case 16:
                                _context["prev"] = 16;
                                _context["t0"] = _context["catch"](
                                  8
                                );
                                _util2["default"]["log"](
                                  _context["t0"]
                                );
                                if (
                                  !(
                                    _context["t0"] instanceof
                                    _psfError2["default"]
                                  )
                                ) {
                                  _context["next"] = 21;
                                  break;
                                }
                                throw _context["t0"];
                              case 21:
                                throw formatError(_context["t0"]);
                              case 22:
                              case "end":
                                return _context["stop"]();
                            }
                          }
                        },
                        _callee,
                        this,
                        [[8, 16]]
                      );
                    })
                  );
                  function getPlaybackUrl(_x) {
                    return _ref["apply"](this, arguments);
                  }
                  return getPlaybackUrl;
                })(),
              },
              {
                key: "getEntitlementToken",
                value: (function () {
                  var _ref2 = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](function _callee2(
                      contentResource
                    ) {
                      var formatError;
                      return _regenerator2["default"]["wrap"](
                        function _callee2$(_context2) {
                          while (1) {
                            switch (
                              (_context2["prev"] =
                                _context2["next"])
                            ) {
                              case 0:
                                _context2["next"] = 2;
                                return this["init"](contentResource);
                              case 2:
                                if (!contentResource["entitlementToken"]) {
                                  _context2["next"] = 4;
                                  break;
                                }
                                return _context2["abrupt"](
                                  "return",
                                  contentResource["entitlementToken"]
                                );
                              case 4:
                                formatError = this["accessProviders"]["entitlementProvider"][
                                  "formatErrorObject"
                                ];
                                _context2["prev"] = 5;
                                _context2["next"] = 8;
                                return this["accessProviders"]["entitlementProvider"][
                                  "checkEntitlement"
                                ](contentResource);
                              case 8:
                                return _context2["abrupt"](
                                  "return",
                                  _context2["sent"]
                                );
                              case 11:
                                _context2["prev"] = 11;
                                _context2["t0"] = _context2[
                                  "catch"
                                ](5);
                                _util2["default"]["log"](
                                  _context2["t0"]
                                );
                                if (
                                  !(
                                    _context2["t0"] instanceof
                                    _psfError2["default"]
                                  )
                                ) {
                                  _context2["next"] = 16;
                                  break;
                                }
                                throw _context2["t0"];
                              case 16:
                                throw formatError(_context2["t0"]);
                              case 17:
                              case "end":
                                return _context2["stop"]();
                            }
                          }
                        },
                        _callee2,
                        this,
                        [[5, 11]]
                      );
                    })
                  );
                  function getEntitlementToken(_x2) {
                    return _ref2["apply"](this, arguments);
                  }
                  return getEntitlementToken;
                })(),
              },
              {
                key: "init",
                value: (function () {
                  var _ref3 = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](function _callee3(
                      contentResource
                    ) {
                      return _regenerator2["default"]["wrap"](
                        function _callee3$(_context3) {
                          while (1) {
                            switch (
                              (_context3["prev"] =
                                _context3["next"])
                            ) {
                              case 0:
                                if (this["serverConfig"]) {
                                  _context3["next"] = 14;
                                  break;
                                }
                                _context3["prev"] = 1;
                                this["parseContentRequest"](contentResource);
                                _context3["next"] = 5;
                                return this["loadServerConfig"]();
                              case 5:
                                this["initProviders"]();
                                _context3["next"] = 12;
                                break;
                              case 8:
                                _context3["prev"] = 8;
                                _context3["t0"] = _context3[
                                  "catch"
                                ](1);
                                _util2["default"]["log"](
                                  _context3["t0"]
                                );
                                throw new _psfError2["default"](
                                  _errorType["ErrorType"]["CONTENT_UNKNOWN"],
                                  "PSF_INITIALISATION_ERROR",
                                  _context3["t0"]["message"]
                                );
                              case 12:
                                _context3["next"] = 15;
                                break;
                              case 14:
                                _util2["default"]["log"]("Use cached server config");
                              case 15:
                                _util2["default"]["log"](
                                  "[PlaybackSourceFetcher]: ",
                                  this["serverConfig"]
                                );
                              case 16:
                              case "end":
                                return _context3["stop"]();
                            }
                          }
                        },
                        _callee3,
                        this,
                        [[1, 8]]
                      );
                    })
                  );
                  function init(_x3) {
                    return _ref3["apply"](this, arguments);
                  }
                  return init;
                })(),
              },
              {
                key: "getConfigFileName",
                value: function getConfigFileName() {
                  if (this["clientConfig"]["configFileName"]) {
                    return this["clientConfig"]["configFileName"];
                  }
                  return "psf.json";
                },
              },
              {
                key: "loadServerConfig",
                value: (function () {
                  var _ref4 = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](
                      function _callee4() {
                        var prodPrefix,
                          nonProdPrefix,
                          prefix,
                          tenantConfigServerUrl,
                          configUrl,
                          serverConfig;
                        return _regenerator2["default"]["wrap"](
                          function _callee4$(_context4) {
                            while (1) {
                              switch (
                                (_context4["prev"] =
                                  _context4["next"])
                              ) {
                                case 0:
                                  prodPrefix = "t1p";
                                  nonProdPrefix = "t1d";
                                  prefix =
                                    this["environment"] === "prod"
                                      ? prodPrefix
                                      : nonProdPrefix;
                                  tenantConfigServerUrl = tenantConfigServerUrlTemplate[
                                    "replace"
                                  ](
                                    "-<env>",
                                    "-" + this["environment"]
                                  )["replace"](
                                    "<prefix>-",
                                    prefix + "-"
                                  );
                                  configUrl =
                                    "" +
                                    tenantConfigServerUrl +
                                    this["getConfigFileName"]();
                                  _context4["next"] = 7;
                                  return _superagent2["default"]["get"](
                                    configUrl
                                  );
                                case 7:
                                  serverConfig = _context4["sent"];
                                  if (!serverConfig["error"]) {
                                    _context4["next"] = 11;
                                    break;
                                  }
                                  _util2["default"]["log"](
                                    "Request error: ",
                                    serverConfig["error"]
                                  );
                                  throw new Error("PSF_SERVER_CONFIG_LOAD_ERROR");
                                case 11:
                                  this["serverConfig"] = _configparser2[
                                    "default"
                                  ]["parse"](
                                    serverConfig["body"],
                                    this["clientConfig"]["accessId"] ||
                                      this["clientConfig"]["token"]
                                  );
                                case 12:
                                case "end":
                                  return _context4["stop"]();
                              }
                            }
                          },
                          _callee4,
                          this
                        );
                      }
                    )
                  );
                  function loadServerConfig() {
                    return _ref4["apply"](this, arguments);
                  }
                  return loadServerConfig;
                })(),
              },
              {
                key: "initProviders",
                value: function initProviders() {
                  var ProviderMapping = {
                    Monetisation: MonetisationProvider,
                    Psa: PsaProvider,
                    Skip: SkipProvider,
                  };
                  var entitlementConfig = this["serverConfig"][
                    this["sourceRequest"]["contentType"]
                  ];
                  var playoutConfig = this["serverConfig"][
                    this["sourceRequest"]["contentType"]
                  ];
                  this["accessProviders"]["entitlementProvider"] = new ProviderMapping[
                    entitlementConfig["entitlementProvider"]
                  ](entitlementConfig, this["clientConfig"]);
                  this["accessProviders"]["playoutProvider"] = new ProviderMapping[
                    playoutConfig["playoutProvider"]
                  ](playoutConfig, this["clientConfig"]);
                },
              },
              {
                key: "parseContentRequest",
                value: function parseContentRequest(contentResource) {
                  var sourceRequest = {};
                  if (contentResource["id"]) {
                    sourceRequest = contentResource;
                  } else {
                    sourceRequest["id"] = contentResource;
                  }
                  sourceRequest["contentType"] = getContentType(contentResource);
                  switch (sourceRequest["contentType"]) {
                    case "live":
                      sourceRequest["clientLocation"] =
                        contentResource["clientLocation"] || "";
                      break;
                    case "vod":
                    default:
                      if (contentResource["start"]) {
                        sourceRequest["start"] =
                          contentResource["start"];
                        sourceRequest["end"] =
                          contentResource["end"];
                      }
                      break;
                  }
                  this["sourceRequest"] = sourceRequest;
                },
              },
              {
                key: "destroy",
                value: function destroy() {
                  _util2["default"]["log"]("[PlaybackSourceFetcher]: destroying...");
                },
              },
            ]);
            return PlaybackSourceFetcher;
          })();
          exports["default"] = PlaybackSourceFetcher;
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
          module["exports"] = __webpack_require__(109);
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
              generator["_invoke"] = makeInvokeMethod(
                innerFn,
                self,
                context
              );
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
              ["next", "throw", "return"]["forEach"](
                function (method) {
                  prototype[method] = function (arg) {
                    return this["_invoke"](method, arg);
                  };
                }
              );
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
                    return Promise["resolve"](value["__await"])[
                      "then"
                    ](
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
            runtime["async"] = function (
              innerFn,
              outerFn,
              self,
              tryLocsList
            ) {
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
                  this["rval"] = this["arg"] =
                    record["arg"];
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
                    this["complete"](
                      entry["completion"],
                      entry["afterLoc"]
                    );
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
          __webpack_require__(54);
          __webpack_require__(92);
          __webpack_require__(95);
          __webpack_require__(116);
          __webpack_require__(128);
          __webpack_require__(129);
          module["exports"] = __webpack_require__(0)["Promise"];
        },
        function (module, exports, __webpack_require__) {
          var toInteger = __webpack_require__(30);
          var defined = __webpack_require__(40);
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
          var create = __webpack_require__(43);
          var descriptor = __webpack_require__(19);
          var setToStringTag = __webpack_require__(34);
          var IteratorPrototype = {};
          __webpack_require__(15)(
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
          "use strict";
          var addToUnscopables = __webpack_require__(114);
          var step = __webpack_require__(115);
          var Iterators = __webpack_require__(42);
          var toIObject = __webpack_require__(13);
          module["exports"] = __webpack_require__(93)(
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
          var LIBRARY = __webpack_require__(17);
          var global = __webpack_require__(1);
          var ctx = __webpack_require__(24);
          var classof = __webpack_require__(96);
          var $export = __webpack_require__(9);
          var isObject = __webpack_require__(7);
          var aFunction = __webpack_require__(31);
          var anInstance = __webpack_require__(117);
          var forOf = __webpack_require__(118);
          var speciesConstructor = __webpack_require__(97);
          var task = __webpack_require__(98)["set"];
          var microtask = __webpack_require__(123)();
          var newPromiseCapabilityModule = __webpack_require__(68);
          var perform = __webpack_require__(99);
          var userAgent = __webpack_require__(124);
          var promiseResolve = __webpack_require__(100);
          var PROMISE = "Promise";
          var TypeError = global["TypeError"];
          var process = global["process"];
          var versions = process && process["versions"];
          var v8 = (versions && versions["v8"]) || "";
          var $Promise = global[PROMISE];
          var isNode = classof(process) == "process";
          var empty = function () {};
          var Internal,
            newGenericPromiseCapability,
            OwnPromiseCapability,
            Wrapper;
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
            return isObject(it) &&
              typeof (then = it["then"]) == "function"
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
                var handler = ok
                  ? reaction["ok"]
                  : reaction["fail"];
                var resolve = reaction["resolve"];
                var reject = reaction["reject"];
                var domain = reaction["domain"];
                var result, then, exited;
                try {
                  if (handler) {
                    if (!ok) {
                      if (promise["_h"] == 2)
                        onHandleUnhandled(promise);
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
              (promise["_a"] || promise["_c"])["length"] ===
                0
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
            Internal["prototype"] = __webpack_require__(125)(
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
          __webpack_require__(34)($Promise, PROMISE);
          __webpack_require__(126)(PROMISE);
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
            $export["S"] +
              $export["F"] * (LIBRARY || !USE_NATIVE),
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
                  __webpack_require__(127)(function (iter) {
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
          module["exports"] = function (
            it,
            Constructor,
            name,
            forbiddenField
          ) {
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
          var ctx = __webpack_require__(24);
          var call = __webpack_require__(119);
          var isArrayIter = __webpack_require__(120);
          var anObject = __webpack_require__(6);
          var toLength = __webpack_require__(57);
          var getIterFn = __webpack_require__(121);
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
        function (module, exports, __webpack_require__) {
          var anObject = __webpack_require__(6);
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
          var Iterators = __webpack_require__(42);
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
          var classof = __webpack_require__(96);
          var ITERATOR = __webpack_require__(2)("iterator");
          var Iterators = __webpack_require__(42);
          module["exports"] = __webpack_require__(0)["getIteratorMethod"] = function (
            it
          ) {
            if (it != undefined)
              return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
          };
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
          var macrotask = __webpack_require__(98)["set"];
          var Observer = global["MutationObserver"] || global["WebKitMutationObserver"];
          var process = global["process"];
          var Promise = global["Promise"];
          var isNode = __webpack_require__(21)(process) == "process";
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
          var hide = __webpack_require__(15);
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
          var dP = __webpack_require__(3);
          var DESCRIPTORS = __webpack_require__(4);
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
          "use strict";
          var $export = __webpack_require__(9);
          var core = __webpack_require__(0);
          var global = __webpack_require__(1);
          var speciesConstructor = __webpack_require__(97);
          var promiseResolve = __webpack_require__(100);
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
          var $export = __webpack_require__(9);
          var newPromiseCapability = __webpack_require__(68);
          var perform = __webpack_require__(99);
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
          "use strict";
          Object["defineProperty"](exports, "__esModule", {
            value: true,
          });
          var _package = __webpack_require__(131);
          var Util = {
            log: function log(message, object) {
              var forceLogging =
                arguments["length"] > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : false;
              if (forceLogging) {
                if (object) {
                  console["log"](message, object);
                } else {
                  console["log"](message);
                }
              }
            },
            getVersion: function getVersion() {
              return _package["version"];
            },
          };
          exports["default"] = Util;
        },
        function (module, exports) {
          module["exports"] = {
            name: "@vod/playback-source-fetcher",
            version: "0.0.72",
            description: "This library provides an API for fetching VoD and live video URLs",
            main: "lib/playback-source-fetcher.js",
            authors: ["Bernhard Widtmann <bernhard.widtmann@prosiebensat1digital.de>", "Oscar Prabhakar <oscar.prabhakar@prosiebensat1digital.de>"],
            devDependencies: {
              "babel-core": "^6.26.0",
              "babel-loader": "^7.1.1",
              "babel-plugin-transform-object-rest-spread": "^6.26.0",
              "babel-plugin-transform-runtime": "^6.23.0",
              "babel-preset-env": "^1.7.0",
              chai: "^4.2.0",
              "chai-as-promised": "^7.1.1",
              confusion: "^0.1.1",
              eslint: "6.8.0",
              "eslint-config-joyn": "0.4.1",
              "eslint-plugin-array-func": "3.1.4",
              "eslint-plugin-eslint-comments": "3.1.2",
              "eslint-plugin-import": "2.20.2",
              "eslint-plugin-mocha": "6.3.0",
              "eslint-plugin-no-secrets": "0.6.5",
              "eslint-plugin-node": "11.1.0",
              "eslint-plugin-optimize-regex": "1.1.7",
              "eslint-plugin-prettier": "3.1.2",
              "eslint-plugin-promise": "4.2.1",
              "eslint-plugin-unicorn": "18.0.1",
              istanbul: "^1.0.0-alpha.2",
              jsdom: "^9.12.0",
              "jsdom-global": "2.1.0",
              mocha: "^3.0.2",
              nock: "^9.3.2",
              prettier: "^2.0.2",
              sinon: "^9.0.0",
              "sinon-chai": "^3.5.0",
              superagent: "3.8.3",
              "uglify-js": "^3.4.0",
              "url-parse": "^1.4.3",
              webpack: "^3.8.1",
              xxtea: "^0.2.0",
            },
            scripts: {
              build: "node_modules/webpack/bin/webpack.js --config=lib-webpack.config.js  && node_modules/webpack/bin/webpack.js --config=dist-webpack.config.js",
              postbuild: "sh ./postbuild.sh",
              "build-config-gen": "node_modules/webpack/bin/webpack.js --config ./generator/webpack.config.js",
              lint: "eslint .",
              "lint:fix": "eslint --fix .",
              test: "node_modules/istanbul/lib/cli.js cover node_modules/mocha/bin/_mocha",
              version: "npm run build && git add -A dist lib",
              postversion: "git push && git push --tags",
              release: "npm version patch --force",
            },
            publishConfig: {
              "@vod:registry": "https://t1p-nexus.t1p-cc.aws.route71.net/repository/vod-playout/",
            },
            dependencies: {
              "js-base64": "^2.5.1",
              "sha.js": "^2.4.11",
            },
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
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
            return this;
          };
          Emitter["prototype"]["emit"] = function (event) {
            this["_callbacks"] = this["_callbacks"] || {};
            var args = []["slice"]["call"](arguments, 1),
              callbacks = this["_callbacks"]["$" + event];
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
        function (module, exports, __webpack_require__) {
          "use strict";
          var _promise = __webpack_require__(63);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var isObject = __webpack_require__(101);
          module["exports"] = RequestBase;
          function RequestBase(obj) {
            if (obj) return mixin(obj);
          }
          function mixin(obj) {
            for (var key in RequestBase["prototype"]) {
              obj[key] = RequestBase["prototype"][key];
            }
            return obj;
          }
          RequestBase["prototype"]["clearTimeout"] = function _clearTimeout() {
            clearTimeout(this["_timer"]);
            clearTimeout(this["_responseTimeoutTimer"]);
            delete this["_timer"];
            delete this["_responseTimeoutTimer"];
            return this;
          };
          RequestBase["prototype"]["parse"] = function parse(fn) {
            this["_parser"] = fn;
            return this;
          };
          RequestBase["prototype"]["responseType"] = function (val) {
            this["_responseType"] = val;
            return this;
          };
          RequestBase["prototype"]["serialize"] = function serialize(fn) {
            this["_serializer"] = fn;
            return this;
          };
          RequestBase["prototype"]["timeout"] = function timeout(options) {
            if (!options || "object" !== typeof options) {
              this["_timeout"] = options;
              this["_responseTimeout"] = 0;
              return this;
            }
            for (var option in options) {
              switch (option) {
                case "deadline":
                  this["_timeout"] = options["deadline"];
                  break;
                case "response":
                  this["_responseTimeout"] = options["response"];
                  break;
                default:
                  console["warn"]("Unknown timeout option", option);
              }
            }
            return this;
          };
          RequestBase["prototype"]["retry"] = function retry(count, fn) {
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
            if (
              !this["_maxRetries"] ||
              this["_retries"]++ >= this["_maxRetries"]
            ) {
              return false;
            }
            if (this["_retryCallback"]) {
              try {
                var override = this["_retryCallback"](err, res);
                if (override === true) return true;
                if (override === false) return false;
              } catch (e) {
                console["error"](e);
              }
            }
            if (
              res &&
              res["status"] &&
              res["status"] >= 500 &&
              res["status"] != 501
            )
              return true;
            if (err) {
              if (
                err["code"] &&
                ~ERROR_CODES["indexOf"](err["code"])
              )
                return true;
              if (err["timeout"] && err["code"] == "ECONNABORTED")
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
            return this["_end"]();
          };
          RequestBase["prototype"]["then"] = function then(
            resolve,
            reject
          ) {
            if (!this["_fullfilledPromise"]) {
              var self = this;
              if (this["_endCalled"]) {
                console["warn"]("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
              }
              this["_fullfilledPromise"] = new _promise2["default"](function (
                innerResolve,
                innerReject
              ) {
                self["end"](function (err, res) {
                  if (err) innerReject(err);
                  else innerResolve(res);
                });
              });
            }
            return this["_fullfilledPromise"]["then"](resolve, reject);
          };
          RequestBase["prototype"]["catch"] = function (cb) {
            return this["then"](undefined, cb);
          };
          RequestBase["prototype"]["use"] = function use(fn) {
            fn(this);
            return this;
          };
          RequestBase["prototype"]["ok"] = function (cb) {
            if ("function" !== typeof cb) throw Error("Callback required");
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
            if (null === name || undefined === name) {
              throw new Error(".field(name, val) name can not be empty");
            }
            if (this["_data"]) {
              console["error"](".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
            }
            if (isObject(name)) {
              for (var key in name) {
                this["field"](key, name[key]);
              }
              return this;
            }
            if (Array["isArray"](val)) {
              for (var i in val) {
                this["field"](name, val[i]);
              }
              return this;
            }
            if (null === val || undefined === val) {
              throw new Error(".field(name, val) val can not be empty");
            }
            if ("boolean" === typeof val) {
              val = "" + val;
            }
            this["_getFormData"]()["append"](name, val);
            return this;
          };
          RequestBase["prototype"]["abort"] = function () {
            if (this["_aborted"]) {
              return this;
            }
            this["_aborted"] = true;
            this["xhr"] && this["xhr"]["abort"]();
            this["req"] && this["req"]["abort"]();
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
                  "Basic " + base64Encoder(user + ":" + pass)
                );
                break;
              case "auto":
                this["username"] = user;
                this["password"] = pass;
                break;
              case "bearer":
                this["set"]("Authorization", "Bearer " + user);
                break;
            }
            return this;
          };
          RequestBase["prototype"]["withCredentials"] = function (on) {
            if (on == undefined) on = true;
            this["_withCredentials"] = on;
            return this;
          };
          RequestBase["prototype"]["redirects"] = function (n) {
            this["_maxRedirects"] = n;
            return this;
          };
          RequestBase["prototype"]["maxResponseSize"] = function (n) {
            if ("number" !== typeof n) {
              throw TypeError("Invalid argument");
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
              console["error"](".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
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
              throw Error("Can't merge these send calls");
            }
            if (isObj && isObject(this["_data"])) {
              for (var key in data) {
                this["_data"][key] = data[key];
              }
            } else if ("string" == typeof data) {
              if (!type) this["type"]("form");
              type = this["_header"]["content-type"];
              if ("application/x-www-form-urlencoded" == type) {
                this["_data"] = this["_data"]
                  ? this["_data"] + "&" + data
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
                (this["url"]["indexOf"]("?") >= 0
                  ? "&"
                  : "?") + query;
            }
            this["_query"]["length"] = 0;
            if (this["_sort"]) {
              var index = this["url"]["indexOf"]("?");
              if (index >= 0) {
                var queryArr = this["url"]
                  ["substring"](index + 1)
                  ["split"]("&");
                if ("function" === typeof this["_sort"]) {
                  queryArr["sort"](this["_sort"]);
                } else {
                  queryArr["sort"]();
                }
                this["url"] =
                  this["url"]["substring"](0, index) +
                  "?" +
                  queryArr["join"]("&");
              }
            }
          };
          RequestBase["prototype"]["_appendQueryString"] = function () {
            console["trace"]("Unsupported");
          };
          RequestBase["prototype"]["_timeoutError"] = function (
            reason,
            timeout,
            errno
          ) {
            if (this["_aborted"]) {
              return;
            }
            var err = new Error(reason + timeout + "ms exceeded");
            err["timeout"] = timeout;
            err["code"] = "ECONNABORTED";
            err["errno"] = errno;
            this["timedout"] = true;
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
          var utils = __webpack_require__(135);
          module["exports"] = ResponseBase;
          function ResponseBase(obj) {
            if (obj) return mixin(obj);
          }
          function mixin(obj) {
            for (var key in ResponseBase["prototype"]) {
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
            for (var key in params) this[key] = params[key];
            this["links"] = {};
            try {
              if (header["link"]) {
                this["links"] = utils["parseLinks"](header["link"]);
              }
            } catch (err) {}
          };
          ResponseBase["prototype"]["_setStatusProperties"] = function (status) {
            var type = (status / 100) | 0;
            this["status"] = this["statusCode"] = status;
            this["statusType"] = type;
            this["info"] = 1 == type;
            this["ok"] = 2 == type;
            this["redirect"] = 3 == type;
            this["clientError"] = 4 == type;
            this["serverError"] = 5 == type;
            this["error"] =
              4 == type || 5 == type ? this["toError"]() : false;
            this["created"] = 201 == status;
            this["accepted"] = 202 == status;
            this["noContent"] = 204 == status;
            this["badRequest"] = 400 == status;
            this["unauthorized"] = 401 == status;
            this["notAcceptable"] = 406 == status;
            this["forbidden"] = 403 == status;
            this["notFound"] = 404 == status;
            this["unprocessableEntity"] = 422 == status;
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
        function (module, exports) {
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
          ]["forEach"](function (fn) {
            Agent["prototype"][fn] = function () {
              this["_defaults"]["push"]({
                fn: fn,
                arguments: arguments,
              });
              return this;
            };
          });
          Agent["prototype"]["_setDefaults"] = function (req) {
            this["_defaults"]["forEach"](function (def) {
              req[def["fn"]]["apply"](req, def["arguments"]);
            });
          };
          module["exports"] = Agent;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var secret = __webpack_require__(59)["x"]()["toUpperCase"]();
          var cryptoHandler = __webpack_require__(36);
          var crypto = new cryptoHandler(secret);
          var decrypt = crypto["decrypt"]["bind"](crypto);
          var encrypt = crypto["encrypt"]["bind"](crypto);
          var BACKSLASH = 92;
          var X = 120;
          exports = module["exports"] = function (encodedConfigObject) {
            return JSON["parse"](decrypt(encodedConfigObject));
          };
          exports["secret"] = function (secret) {
            var decoded = decodeURIComponent(
              "%" +
                secret["split"](/(?=(?:.{2})+$)/)["join"](
                  "%"
                )
            );
            return unescape(decoded);
          };
          function unescape(string) {
            var charCodes = [];
            for (
              var i = 0, charCode;
              (charCode = string["charCodeAt"](i));
              i++
            ) {
              if (charCode === BACKSLASH && string["charCodeAt"](i + 1) === X) {
                i = parseHexByte(string, i + 2, charCodes);
              } else {
                charCodes["push"](charCode & 255);
              }
            }
            return String["fromCharCode"]["apply"](String, charCodes);
          }
          function parseHexByte(string, start, buffer) {
            buffer["push"](parseInt(string["substr"](start, 2), 16));
            return start + 1;
          }
          function fromUtf8(string) {
            return decodeURIComponent(escape(string));
          }
        },
        function (module, exports, __webpack_require__) {
          __webpack_require__(139);
          module["exports"] = __webpack_require__(0)["Object"][
            "getPrototypeOf"
          ];
        },
        function (module, exports, __webpack_require__) {
          var toObject = __webpack_require__(67);
          var $getPrototypeOf = __webpack_require__(94);
          __webpack_require__(140)("getPrototypeOf", function () {
            return function getPrototypeOf(it) {
              return $getPrototypeOf(toObject(it));
            };
          });
        },
        function (module, exports, __webpack_require__) {
          var $export = __webpack_require__(9);
          var core = __webpack_require__(0);
          var fails = __webpack_require__(16);
          module["exports"] = function (KEY, exec) {
            var fn = (core["Object"] || {})[KEY] || Object[KEY];
            var exp = {};
            exp[KEY] = exec(fn);
            $export(
              $export["S"] +
                $export["F"] *
                  fails(function () {
                    fn(1);
                  }),
              "Object",
              exp
            );
          };
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(142),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          __webpack_require__(92);
          __webpack_require__(95);
          module["exports"] = __webpack_require__(22)["f"](
            "iterator"
          );
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(144),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          __webpack_require__(145);
          module["exports"] = __webpack_require__(0)["Object"][
            "setPrototypeOf"
          ];
        },
        function (module, exports, __webpack_require__) {
          var $export = __webpack_require__(9);
          $export($export["S"], "Object", {
            setPrototypeOf: __webpack_require__(146)["set"],
          });
        },
        function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__(7);
          var anObject = __webpack_require__(6);
          var check = function (O, proto) {
            anObject(O);
            if (!isObject(proto) && proto !== null)
              throw TypeError(proto + ": can't set as prototype!");
          };
          module["exports"] = {
            set:
              Object["setPrototypeOf"] ||
              ("__proto__" in {}
                ? (function (test, buggy, set) {
                    try {
                      set = __webpack_require__(24)(
                        Function["call"],
                        __webpack_require__(61)["f"](
                          Object["prototype"],
                          "__proto__"
                        )["set"],
                        2
                      );
                      set(test, []);
                      buggy = !(test instanceof Array);
                    } catch (e) {
                      buggy = true;
                    }
                    return function setPrototypeOf(O, proto) {
                      check(O, proto);
                      if (buggy) O["__proto__"] = proto;
                      else set(O, proto);
                      return O;
                    };
                  })({}, false)
                : undefined),
            check: check,
          };
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(148),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          __webpack_require__(149);
          var $Object = __webpack_require__(0)["Object"];
          module["exports"] = function create(P, D) {
            return $Object["create"](P, D);
          };
        },
        function (module, exports, __webpack_require__) {
          var $export = __webpack_require__(9);
          $export($export["S"], "Object", {
            create: __webpack_require__(43),
          });
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var ConfigParser = (function () {
            function ConfigParser() {
              (0, _classCallCheck3["default"])(this, ConfigParser);
            }
            (0, _createClass3["default"])(ConfigParser, null, [
              {
                key: "parse",
                value: function parse(serverConfig, accessId) {
                  var defaultConfig = serverConfig["default"];
                  var clientOverride = serverConfig["overrides"][accessId];
                  return clientOverride
                    ? ConfigParser["overrideProperties"](clientOverride, defaultConfig)
                    : defaultConfig;
                },
              },
              {
                key: "overrideProperties",
                value: function overrideProperties(client, defaultConf) {
                  var property = "";
                  for (var _prop in client) {
                    property = _prop;
                    defaultConf[property] =
                      typeof client[property] == "object" &&
                      defaultConf[property]
                        ? ConfigParser["overrideProperties"](
                            client[property],
                            defaultConf[property]
                          )
                        : client[property];
                  }
                  return defaultConf;
                },
              },
            ]);
            return ConfigParser;
          })();
          module["exports"] = ConfigParser;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _regenerator = __webpack_require__(38);
          var _regenerator2 = _interopRequireDefault(_regenerator);
          var _asyncToGenerator2 = __webpack_require__(39);
          var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
          var _getPrototypeOf = __webpack_require__(51);
          var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          var _possibleConstructorReturn2 = __webpack_require__(52);
          var _possibleConstructorReturn3 = _interopRequireDefault(
            _possibleConstructorReturn2
          );
          var _inherits2 = __webpack_require__(53);
          var _inherits3 = _interopRequireDefault(_inherits2);
          var _superagent = __webpack_require__(71);
          var _superagent2 = _interopRequireDefault(_superagent);
          var _base = __webpack_require__(90);
          var _base2 = _interopRequireDefault(_base);
          var _monetisationErrorHandler = __webpack_require__(152);
          var _monetisationErrorHandler2 = _interopRequireDefault(
            _monetisationErrorHandler
          );
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var MonetisationProvider = (function (_AccessProviderBase) {
            (0, _inherits3["default"])(
              MonetisationProvider,
              _AccessProviderBase
            );
            function MonetisationProvider(serverConfig, clientConfig) {
              (0, _classCallCheck3["default"])(this, MonetisationProvider);
              var _this = (0, _possibleConstructorReturn3["default"])(
                this,
                (MonetisationProvider["__proto__"] ||
                  (0, _getPrototypeOf2["default"])(MonetisationProvider))[
                  "call"
                ](this)
              );
              _this["serverConfig"] = serverConfig;
              _this["clientConfig"] = clientConfig;
              return _this;
            }
            (0, _createClass3["default"])(MonetisationProvider, [
              {
                key: "checkEntitlement",
                value: (function () {
                  var _ref = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](function _callee(
                      contentResource
                    ) {
                      var postBody, headers, requestUrl, resp;
                      return _regenerator2["default"]["wrap"](
                        function _callee$(_context) {
                          while (1) {
                            switch (
                              (_context["prev"] = _context["next"])
                            ) {
                              case 0:
                                postBody = {};
                                postBody["access_id"] = this["clientConfig"][
                                  "accessId"
                                ];
                                if (contentResource["fskPin"]) {
                                  postBody["pin"] =
                                    contentResource["fskPin"];
                                }
                                postBody["content_id"] =
                                  contentResource["id"];
                                postBody["content_type"] = contentResource[
                                  "contentType"
                                ]["toUpperCase"]();
                                headers = {
                                  "Content-Type": "application/json",
                                  accept: "*/*",
                                  "x-api-key": this["serverConfig"]["apiGatewayKey"],
                                };
                                requestUrl =
                                  this["serverConfig"]["entitlementBaseUrl"] +
                                  "entitlement-token";
                                headers["Authorization"] =
                                  "Bearer " + contentResource["userToken"];
                                _context["next"] = 10;
                                return _superagent2["default"]
                                  ["post"](requestUrl)
                                  ["set"](headers)
                                  ["send"](postBody);
                              case 10:
                                resp = _context["sent"];
                                return _context["abrupt"](
                                  "return",
                                  this["buildEntitlementResponse"](resp["body"])
                                );
                              case 12:
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
                  function checkEntitlement(_x) {
                    return _ref["apply"](this, arguments);
                  }
                  return checkEntitlement;
                })(),
              },
              {
                key: "buildEntitlementResponse",
                value: function buildEntitlementResponse(serviceResponse) {
                  var resp = {
                    server_token:
                      serviceResponse["entitlement_token"] ||
                      serviceResponse["server_token"],
                  };
                  return resp;
                },
              },
              {
                key: "formatErrorObject",
                value: function formatErrorObject(error) {
                  return new _monetisationErrorHandler2["default"](error)[
                    "getStandardError"
                  ]();
                },
              },
            ]);
            return MonetisationProvider;
          })(_base2["default"]);
          module["exports"] = MonetisationProvider;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _stringify = __webpack_require__(37);
          var _stringify2 = _interopRequireDefault(_stringify);
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          var _errorType = __webpack_require__(104);
          var _psfError = __webpack_require__(102);
          var _psfError2 = _interopRequireDefault(_psfError);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var MonetisationErrorHandler = (function () {
            function MonetisationErrorHandler(errorResponse) {
              (0, _classCallCheck3["default"])(
                this,
                MonetisationErrorHandler
              );
              this["errorCode"] = errorResponse["number"] || "-1";
              this["errorTitle"] = errorResponse["message"] || "Unknown Error";
              if (errorResponse["response"]) {
                try {
                  var _parseErrorResponse2 = this["_parseErrorResponse"](
                      errorResponse["response"]
                    ),
                    code = _parseErrorResponse2["code"],
                    msg = _parseErrorResponse2["msg"];
                  this["errorCode"] = code;
                  this["errorTitle"] = msg;
                } catch (error) {
                  this["errorTitle"] = (0, _stringify2["default"])(
                    errorResponse["response"]
                  );
                }
              }
            }
            (0, _createClass3["default"])(MonetisationErrorHandler, [
              {
                key: "_parseErrorResponse",
                value: function _parseErrorResponse(response) {
                  this["errorObj"] = JSON["parse"](
                    response["text"]
                  );
                  if (
                    Array["isArray"](this["errorObj"]) ||
                    Array["isArray"](this["errorObj"]["errors"])
                  ) {
                    var errors =
                      this["errorObj"][0] ||
                      this["errorObj"]["errors"][0];
                    return {
                      code: errors["code"],
                      msg: errors["msg"],
                    };
                  } else {
                    return {
                      code: this["errorObj"]["code"],
                      msg: this["errorObj"]["msg"],
                    };
                  }
                },
              },
              {
                key: "getMappedErrorCode",
                value: function getMappedErrorCode() {
                  switch (this["errorCode"]) {
                    case "ENT_AgeRatingDoesNotMatch":
                      return _errorType["ErrorType"]["CONTENT_YOUTH_PROTECTED"];
                    case "ENT_AssetNotAvailableInCountry":
                      return _errorType["ErrorType"]["CONTENT_GEOBLOCKING"];
                    case "ENT_PublishingRightsNotUsable":
                      return _errorType["ErrorType"]["CONTENT_UNAVAILABLE"];
                    case "ENT_AssetNotFound":
                      return _errorType["ErrorType"]["CONTENT_TAKEDOWN"];
                    case "ENT_ClientProfileNotFound":
                    default:
                      if (
                        typeof this["errorCode"] === "string" &&
                        this["errorCode"]["substring"](0, 4) === "ENT_"
                      ) {
                        return this["errorCode"];
                      }
                      return _errorType["ErrorType"]["CONTENT_UNKNOWN"];
                  }
                },
              },
              {
                key: "getStandardError",
                value: function getStandardError() {
                  return new _psfError2["default"](
                    this["getMappedErrorCode"](),
                    this["errorCode"],
                    this["errorTitle"]
                  );
                },
              },
            ]);
            return MonetisationErrorHandler;
          })();
          module["exports"] = MonetisationErrorHandler;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _regenerator = __webpack_require__(38);
          var _regenerator2 = _interopRequireDefault(_regenerator);
          var _promise = __webpack_require__(63);
          var _promise2 = _interopRequireDefault(_promise);
          var _asyncToGenerator2 = __webpack_require__(39);
          var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
          var _getPrototypeOf = __webpack_require__(51);
          var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          var _possibleConstructorReturn2 = __webpack_require__(52);
          var _possibleConstructorReturn3 = _interopRequireDefault(
            _possibleConstructorReturn2
          );
          var _inherits2 = __webpack_require__(53);
          var _inherits3 = _interopRequireDefault(_inherits2);
          var _base = __webpack_require__(90);
          var _base2 = _interopRequireDefault(_base);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var SkipProvider = (function (_AccessProviderBase) {
            (0, _inherits3["default"])(SkipProvider, _AccessProviderBase);
            function SkipProvider(serverConfig, clientConfig) {
              (0, _classCallCheck3["default"])(this, SkipProvider);
              return (0, _possibleConstructorReturn3["default"])(
                this,
                (SkipProvider["__proto__"] ||
                  (0, _getPrototypeOf2["default"])(SkipProvider))["call"](
                  this
                )
              );
            }
            (0, _createClass3["default"])(SkipProvider, [
              {
                key: "checkEntitlement",
                value: (function () {
                  var _ref = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](
                      function _callee() {
                        return _regenerator2["default"]["wrap"](
                          function _callee$(_context) {
                            while (1) {
                              switch (
                                (_context["prev"] =
                                  _context["next"])
                              ) {
                                case 0:
                                  return _context["abrupt"](
                                    "return",
                                    new _promise2["default"](function (
                                      res,
                                      rej
                                    ) {
                                      res({
                                        server_token: "eyJhbGciOiJSUzI1NiJ9.eyJhY2Nlc3NJZCI6InhfMTVtMnl1eXJtMGs4IiwiY29udGVudElkIjoidl8xNXlwMjc3YjNjYWQiLCJleHAiOjE1MzcyNzkxNTUsImlhdCI6MTUzNzI3OTAzNSwiZHJtIjpmYWxzZX0.AztKhIF8B9uDRLX42_ZCd9q4mfUfvqDQfowr6rb4AyD1z7ik_ia-Y879L1PrZY7jWzVrcaecXrwlynVzgAhT2wokmRyuzrCDkCWSPWaua2Vr1C4d76SKX8FwE_sQWBfX1ArM25pYiAoZc2lzpwnmYRnxpyNgyJirRUwpKkfOeh4HHNa79XG2RXEf3uExqDrEnp3ta1rxaNe6N4EuOx7vvWPxyrG2DbGEiBTXDWY_1E3A6HcWk4FZIo83fMNCeb8hEbzu6Gy6yXIryjaUX_Ft1ll0sNSUhNu9dm071pHzNKAghTsepY5diQVYZYTMLQ4qyPknS5KitF39Bw7a0_aYGg",
                                      });
                                    })
                                  );
                                case 1:
                                case "end":
                                  return _context["stop"]();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      }
                    )
                  );
                  function checkEntitlement() {
                    return _ref["apply"](this, arguments);
                  }
                  return checkEntitlement;
                })(),
              },
            ]);
            return SkipProvider;
          })(_base2["default"]);
          module["exports"] = SkipProvider;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _stringify = __webpack_require__(37);
          var _stringify2 = _interopRequireDefault(_stringify);
          var _regenerator = __webpack_require__(38);
          var _regenerator2 = _interopRequireDefault(_regenerator);
          var _asyncToGenerator2 = __webpack_require__(39);
          var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
          var _getPrototypeOf = __webpack_require__(51);
          var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          var _possibleConstructorReturn2 = __webpack_require__(52);
          var _possibleConstructorReturn3 = _interopRequireDefault(
            _possibleConstructorReturn2
          );
          var _inherits2 = __webpack_require__(53);
          var _inherits3 = _interopRequireDefault(_inherits2);
          var _jsBase = __webpack_require__(155);
          var _superagent = __webpack_require__(71);
          var _superagent2 = _interopRequireDefault(_superagent);
          var _base = __webpack_require__(90);
          var _base2 = _interopRequireDefault(_base);
          var _urlParse = __webpack_require__(156);
          var _urlParse2 = _interopRequireDefault(_urlParse);
          var _psaFormatter = __webpack_require__(159);
          var _psaFormatter2 = _interopRequireDefault(_psaFormatter);
          var _encode = __webpack_require__(62);
          var _encode2 = _interopRequireDefault(_encode);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          var PSAProvider = (function (_AccessProviderBase) {
            (0, _inherits3["default"])(PSAProvider, _AccessProviderBase);
            function PSAProvider(serverConfig, clientConfig) {
              (0, _classCallCheck3["default"])(this, PSAProvider);
              var _this = (0, _possibleConstructorReturn3["default"])(
                this,
                (PSAProvider["__proto__"] ||
                  (0, _getPrototypeOf2["default"])(PSAProvider))["call"](
                  this
                )
              );
              _this["serverConfig"] = serverConfig;
              _this["clientConfig"] = clientConfig;
              return _this;
            }
            (0, _createClass3["default"])(PSAProvider, [
              {
                key: "getUrl",
                value: (function () {
                  var _ref = (0, _asyncToGenerator3["default"])(
                    _regenerator2["default"]["mark"](function _callee(
                      entitlementResponse,
                      contentResource
                    ) {
                      var url, headers, resp;
                      return _regenerator2["default"]["wrap"](
                        function _callee$(_context) {
                          while (1) {
                            switch (
                              (_context["prev"] = _context["next"])
                            ) {
                              case 0:
                                url = this["buildUrl"](
                                  entitlementResponse,
                                  contentResource["contentType"] === "live"
                                    ? "playout/channel"
                                    : "playout/video",
                                  contentResource
                                );
                                headers = {};
                                if (
                                  contentResource["userAgent"] &&
                                  typeof contentResource["userAgent"] ===
                                    "string"
                                ) {
                                  headers["User-Agent"] = headers[
                                    "x-user-agent"
                                  ] = contentResource["userAgent"];
                                }
                                if (
                                  contentResource["appVersion"] &&
                                  typeof contentResource["appVersion"] ===
                                    "string"
                                ) {
                                  headers["P7s1-App-Version"] =
                                    contentResource["appVersion"];
                                }
                                if (entitlementResponse["connectionType"]) {
                                  headers["x-connection-type"] =
                                    entitlementResponse["connectionType"];
                                }
                                _context["next"] = 7;
                                return _superagent2["default"]
                                  ["post"](url)
                                  ["send"](contentResource["adSource"])
                                  ["set"](headers);
                              case 7:
                                resp = _context["sent"];
                                return _context["abrupt"](
                                  "return",
                                  JSON["parse"](resp["text"])
                                );
                              case 9:
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
                  function getUrl(_x, _x2) {
                    return _ref["apply"](this, arguments);
                  }
                  return getUrl;
                })(),
              },
              {
                key: "buildUrl",
                value: function buildUrl(
                  entitlementResponse,
                  apiName,
                  contentResource
                ) {
                  var baseUrl = "";
                  var searchParams = {};
                  var serverToken = entitlementResponse["server_token"];
                  if (this["isJwToken"](serverToken)) {
                    searchParams["entitlement_token"] = serverToken;
                  }
                  if (contentResource["clientData"]) {
                    searchParams["clientData"] = this["_formatUserData"](
                      contentResource["clientData"]
                    );
                  }
                  searchParams["sig"] = _encode2["default"][
                    "generateSignature"
                  ]([
                    contentResource["id"],
                    serverToken,
                    searchParams["clientData"],
                  ]);
                  baseUrl = this["serverConfig"]["playoutBaseUrl"];
                  var reqUrl = new _urlParse2["default"](
                    baseUrl +
                      apiName +
                      "/" +
                      contentResource["id"]
                  );
                  reqUrl["query"] = searchParams;
                  return reqUrl["toString"]();
                },
              },
              {
                key: "formatOutput",
                value: function formatOutput(
                  checkEntitlementResponse,
                  getUrlResponse
                ) {
                  return new _psaFormatter2["default"]()["formatOutput"](
                    checkEntitlementResponse,
                    getUrlResponse
                  );
                },
              },
              {
                key: "_formatUserData",
                value: function _formatUserData(clientData) {
                  return _jsBase["Base64"]["encodeURI"](
                    (0, _stringify2["default"])(clientData)
                  );
                },
              },
              {
                key: "formatErrorObject",
                value: function formatErrorObject(error) {
                  return error;
                },
              },
            ]);
            return PSAProvider;
          })(_base2["default"]);
          module["exports"] = PSAProvider;
        },
        function (module, exports, __webpack_require__) {
          (function (global) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (function (global, factory) {
              true
                ? (module["exports"] = factory(global))
                : typeof define === "function" && define["amd"]
                ? define(factory)
                : factory(global);
            })(
              typeof self !== "undefined"
                ? self
                : typeof window !== "undefined"
                ? window
                : typeof global !== "undefined"
                ? global
                : this,
              function (global) {
                "use strict";
                global = global || {};
                var _Base64 = global["Base64"];
                var version = "2.5.1";
                var buffer;
                if (typeof module !== "undefined" && module["exports"]) {
                  try {
                    buffer = eval("require('buffer').Buffer");
                  } catch (err) {
                    buffer = undefined;
                  }
                }
                var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var b64tab = (function (bin) {
                  var t = {};
                  for (var i = 0, l = bin["length"]; i < l; i++)
                    t[bin["charAt"](i)] = i;
                  return t;
                })(b64chars);
                var fromCharCode = String["fromCharCode"];
                var cb_utob = function (c) {
                  if (c["length"] < 2) {
                    var cc = c["charCodeAt"](0);
                    return cc < 128
                      ? c
                      : cc < 2048
                      ? fromCharCode(192 | (cc >>> 6)) +
                        fromCharCode(128 | (cc & 63))
                      : fromCharCode(224 | ((cc >>> 12) & 15)) +
                        fromCharCode(128 | ((cc >>> 6) & 63)) +
                        fromCharCode(128 | (cc & 63));
                  } else {
                    var cc =
                      65536 +
                      (c["charCodeAt"](0) - 55296) * 1024 +
                      (c["charCodeAt"](1) - 56320);
                    return (
                      fromCharCode(240 | ((cc >>> 18) & 7)) +
                      fromCharCode(128 | ((cc >>> 12) & 63)) +
                      fromCharCode(128 | ((cc >>> 6) & 63)) +
                      fromCharCode(128 | (cc & 63))
                    );
                  }
                };
                var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
                var utob = function (u) {
                  return u["replace"](re_utob, cb_utob);
                };
                var cb_encode = function (ccc) {
                  var padlen = [0, 2, 1][ccc["length"] % 3],
                    ord =
                      (ccc["charCodeAt"](0) << 16) |
                      ((ccc["length"] > 1 ? ccc["charCodeAt"](1) : 0) << 8) |
                      (ccc["length"] > 2 ? ccc["charCodeAt"](2) : 0),
                    chars = [
                      b64chars["charAt"](ord >>> 18),
                      b64chars["charAt"]((ord >>> 12) & 63),
                      padlen >= 2
                        ? "="
                        : b64chars["charAt"]((ord >>> 6) & 63),
                      padlen >= 1
                        ? "="
                        : b64chars["charAt"](ord & 63),
                    ];
                  return chars["join"]("");
                };
                var btoa = global["btoa"]
                  ? function (b) {
                      return global["btoa"](b);
                    }
                  : function (b) {
                      return b["replace"](/[\s\S]{1,3}/g, cb_encode);
                    };
                var _encode = buffer
                  ? buffer["from"] &&
                    Uint8Array &&
                    buffer["from"] !== Uint8Array["from"]
                    ? function (u) {
                        return (u["constructor"] === buffer["constructor"]
                          ? u
                          : buffer["from"](u))["toString"]("base64");
                      }
                    : function (u) {
                        return (u["constructor"] === buffer["constructor"]
                          ? u
                          : new buffer(u))["toString"]("base64");
                      }
                  : function (u) {
                      return btoa(utob(u));
                    };
                var encode = function (u, urisafe) {
                  return !urisafe
                    ? _encode(String(u))
                    : _encode(String(u))
                        ["replace"](/[+\/]/g, function (m0) {
                          return m0 == "+"
                            ? "-"
                            : "_";
                        })
                        ["replace"](/=/g, "");
                };
                var encodeURI = function (u) {
                  return encode(u, true);
                };
                var re_btou = new RegExp(
                  ["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"]["join"](
                    "|"
                  ),
                  "g"
                );
                var cb_btou = function (cccc) {
                  switch (cccc["length"]) {
                    case 4:
                      var cp =
                          ((7 & cccc["charCodeAt"](0)) << 18) |
                          ((63 & cccc["charCodeAt"](1)) << 12) |
                          ((63 & cccc["charCodeAt"](2)) << 6) |
                          (63 & cccc["charCodeAt"](3)),
                        offset = cp - 65536;
                      return (
                        fromCharCode((offset >>> 10) + 55296) +
                        fromCharCode((offset & 1023) + 56320)
                      );
                    case 3:
                      return fromCharCode(
                        ((15 & cccc["charCodeAt"](0)) << 12) |
                          ((63 & cccc["charCodeAt"](1)) << 6) |
                          (63 & cccc["charCodeAt"](2))
                      );
                    default:
                      return fromCharCode(
                        ((31 & cccc["charCodeAt"](0)) << 6) |
                          (63 & cccc["charCodeAt"](1))
                      );
                  }
                };
                var btou = function (b) {
                  return b["replace"](re_btou, cb_btou);
                };
                var cb_decode = function (cccc) {
                  var len = cccc["length"],
                    padlen = len % 4,
                    n =
                      (len > 0 ? b64tab[cccc["charAt"](0)] << 18 : 0) |
                      (len > 1 ? b64tab[cccc["charAt"](1)] << 12 : 0) |
                      (len > 2 ? b64tab[cccc["charAt"](2)] << 6 : 0) |
                      (len > 3 ? b64tab[cccc["charAt"](3)] : 0),
                    chars = [
                      fromCharCode(n >>> 16),
                      fromCharCode((n >>> 8) & 255),
                      fromCharCode(n & 255),
                    ];
                  chars["length"] -= [0, 0, 2, 1][padlen];
                  return chars["join"]("");
                };
                var _atob = global["atob"]
                  ? function (a) {
                      return global["atob"](a);
                    }
                  : function (a) {
                      return a["replace"](/\S{1,4}/g, cb_decode);
                    };
                var atob = function (a) {
                  return _atob(
                    String(a)["replace"](/[^A-Za-z0-9\+\/]/g, "")
                  );
                };
                var _decode = buffer
                  ? buffer["from"] &&
                    Uint8Array &&
                    buffer["from"] !== Uint8Array["from"]
                    ? function (a) {
                        return (a["constructor"] === buffer["constructor"]
                          ? a
                          : buffer["from"](a, "base64"))[
                          "toString"
                        ]();
                      }
                    : function (a) {
                        return (a["constructor"] === buffer["constructor"]
                          ? a
                          : new buffer(a, "base64"))["toString"]();
                      }
                  : function (a) {
                      return btou(_atob(a));
                    };
                var decode = function (a) {
                  return _decode(
                    String(a)
                      ["replace"](/[-_]/g, function (m0) {
                        return m0 == "-" ? "+" : "/";
                      })
                      ["replace"](/[^A-Za-z0-9\+\/]/g, "")
                  );
                };
                var noConflict = function () {
                  var Base64 = global["Base64"];
                  global["Base64"] = _Base64;
                  return Base64;
                };
                global["Base64"] = {
                  VERSION: version,
                  atob: atob,
                  btoa: btoa,
                  fromBase64: decode,
                  toBase64: encode,
                  utob: utob,
                  encode: encode,
                  encodeURI: encodeURI,
                  btou: btou,
                  decode: decode,
                  noConflict: noConflict,
                  __buffer__: buffer,
                };
                if (typeof Object["defineProperty"] === "function") {
                  var noEnum = function (v) {
                    return {
                      value: v,
                      enumerable: false,
                      writable: true,
                      configurable: true,
                    };
                  };
                  global["Base64"]["extendString"] = function () {
                    Object["defineProperty"](
                      String["prototype"],
                      "fromBase64",
                      noEnum(function () {
                        return decode(this);
                      })
                    );
                    Object["defineProperty"](
                      String["prototype"],
                      "toBase64",
                      noEnum(function (urisafe) {
                        return encode(this, urisafe);
                      })
                    );
                    Object["defineProperty"](
                      String["prototype"],
                      "toBase64URI",
                      noEnum(function () {
                        return encode(this, true);
                      })
                    );
                  };
                }
                if (global["Meteor"]) {
                  Base64 = global["Base64"];
                }
                if (typeof module !== "undefined" && module["exports"]) {
                  module["exports"]["Base64"] = global["Base64"];
                } else if (true) {
                  !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                  (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return global["Base64"];
                  }["apply"](exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
                  __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                    (module["exports"] = __WEBPACK_AMD_DEFINE_RESULT__));
                }
                return {
                  Base64: global["Base64"],
                };
              }
            );
          }["call"](exports, __webpack_require__(47)));
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          (function (global) {
            var required = __webpack_require__(157),
              qs = __webpack_require__(158),
              protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
              slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
            var rules = [
              ["#", "hash"],
              ["?", "query"],
              function sanitize(address) {
                return address["replace"]("\\", "/");
              },
              ["/", "pathname"],
              ["@", "auth", 1],
              [NaN, "host", undefined, 1, 1],
              [/:(\d+)$/, "port", undefined, 1],
              [NaN, "hostname", undefined, 1, 1],
            ];
            var ignore = {
              hash: 1,
              query: 1,
            };
            function lolcation(loc) {
              var globalVar;
              if (typeof window !== "undefined") globalVar = window;
              else if (typeof global !== "undefined") globalVar = global;
              else if (typeof self !== "undefined") globalVar = self;
              else globalVar = {};
              var location = globalVar["location"] || {};
              loc = loc || location;
              var finaldestination = {},
                type = typeof loc,
                key;
              if ("blob:" === loc["protocol"]) {
                finaldestination = new Url(unescape(loc["pathname"]), {});
              } else if ("string" === type) {
                finaldestination = new Url(loc, {});
                for (key in ignore) {
                  delete finaldestination[key];
                }
              } else if ("object" === type) {
                for (key in loc) {
                  if (key in ignore) continue;
                  finaldestination[key] = loc[key];
                }
                if (finaldestination["slashes"] === undefined) {
                  finaldestination["slashes"] = slashes["test"](
                    loc["href"]
                  );
                }
              }
              return finaldestination;
            }
            function extractProtocol(address) {
              var match = protocolre["exec"](address);
              return {
                protocol: match[1] ? match[1]["toLowerCase"]() : "",
                slashes: !!match[2],
                rest: match[3],
              };
            }
            function resolve(relative, base) {
              var path = (base || "/")
                  ["split"]("/")
                  ["slice"](0, -1)
                  ["concat"](relative["split"]("/")),
                i = path["length"],
                last = path[i - 1],
                unshift = false,
                up = 0;
              while (i--) {
                if (path[i] === ".") {
                  path["splice"](i, 1);
                } else if (path[i] === "..") {
                  path["splice"](i, 1);
                  up++;
                } else if (up) {
                  if (i === 0) unshift = true;
                  path["splice"](i, 1);
                  up--;
                }
              }
              if (unshift) path["unshift"]("");
              if (last === "." || last === "..")
                path["push"]("");
              return path["join"]("/");
            }
            function Url(address, location, parser) {
              if (!(this instanceof Url)) {
                return new Url(address, location, parser);
              }
              var relative,
                extracted,
                parse,
                instruction,
                index,
                key,
                instructions = rules["slice"](),
                type = typeof location,
                url = this,
                i = 0;
              if ("object" !== type && "string" !== type) {
                parser = location;
                location = null;
              }
              if (parser && "function" !== typeof parser)
                parser = qs["parse"];
              location = lolcation(location);
              extracted = extractProtocol(address || "");
              relative = !extracted["protocol"] && !extracted["slashes"];
              url["slashes"] =
                extracted["slashes"] || (relative && location["slashes"]);
              url["protocol"] =
                extracted["protocol"] ||
                location["protocol"] ||
                "";
              address = extracted["rest"];
              if (!extracted["slashes"])
                instructions[3] = [/(.*)/, "pathname"];
              for (; i < instructions["length"]; i++) {
                instruction = instructions[i];
                if (typeof instruction === "function") {
                  address = instruction(address);
                  continue;
                }
                parse = instruction[0];
                key = instruction[1];
                if (parse !== parse) {
                  url[key] = address;
                } else if ("string" === typeof parse) {
                  if (~(index = address["indexOf"](parse))) {
                    if ("number" === typeof instruction[2]) {
                      url[key] = address["slice"](0, index);
                      address = address["slice"](index + instruction[2]);
                    } else {
                      url[key] = address["slice"](index);
                      address = address["slice"](0, index);
                    }
                  }
                } else if ((index = parse["exec"](address))) {
                  url[key] = index[1];
                  address = address["slice"](0, index["index"]);
                }
                url[key] =
                  url[key] ||
                  (relative && instruction[3]
                    ? location[key] || ""
                    : "");
                if (instruction[4]) url[key] = url[key]["toLowerCase"]();
              }
              if (parser) url["query"] = parser(url["query"]);
              if (
                relative &&
                location["slashes"] &&
                url["pathname"]["charAt"](0) !== "/" &&
                (url["pathname"] !== "" ||
                  location["pathname"] !== "")
              ) {
                url["pathname"] = resolve(
                  url["pathname"],
                  location["pathname"]
                );
              }
              if (!required(url["port"], url["protocol"])) {
                url["host"] = url["hostname"];
                url["port"] = "";
              }
              url["username"] = url["password"] = "";
              if (url["auth"]) {
                instruction = url["auth"]["split"](":");
                url["username"] = instruction[0] || "";
                url["password"] = instruction[1] || "";
              }
              url["origin"] =
                url["protocol"] &&
                url["host"] &&
                url["protocol"] !== "file:"
                  ? url["protocol"] + "//" + url["host"]
                  : "null";
              url["href"] = url["toString"]();
            }
            function set(part, value, fn) {
              var url = this;
              switch (part) {
                case "query":
                  if ("string" === typeof value && value["length"]) {
                    value = (fn || qs["parse"])(value);
                  }
                  url[part] = value;
                  break;
                case "port":
                  url[part] = value;
                  if (!required(value, url["protocol"])) {
                    url["host"] = url["hostname"];
                    url[part] = "";
                  } else if (value) {
                    url["host"] =
                      url["hostname"] + ":" + value;
                  }
                  break;
                case "hostname":
                  url[part] = value;
                  if (url["port"])
                    value += ":" + url["port"];
                  url["host"] = value;
                  break;
                case "host":
                  url[part] = value;
                  if (/:\d+$/["test"](value)) {
                    value = value["split"](":");
                    url["port"] = value["pop"]();
                    url["hostname"] = value["join"](":");
                  } else {
                    url["hostname"] = value;
                    url["port"] = "";
                  }
                  break;
                case "protocol":
                  url["protocol"] = value["toLowerCase"]();
                  url["slashes"] = !fn;
                  break;
                case "pathname":
                case "hash":
                  if (value) {
                    var char =
                      part === "pathname" ? "/" : "#";
                    url[part] =
                      value["charAt"](0) !== char ? char + value : value;
                  } else {
                    url[part] = value;
                  }
                  break;
                default:
                  url[part] = value;
              }
              for (var i = 0; i < rules["length"]; i++) {
                var ins = rules[i];
                if (ins[4]) url[ins[1]] = url[ins[1]]["toLowerCase"]();
              }
              url["origin"] =
                url["protocol"] &&
                url["host"] &&
                url["protocol"] !== "file:"
                  ? url["protocol"] + "//" + url["host"]
                  : "null";
              url["href"] = url["toString"]();
              return url;
            }
            function toString(stringify) {
              if (!stringify || "function" !== typeof stringify)
                stringify = qs["stringify"];
              var query,
                url = this,
                protocol = url["protocol"];
              if (
                protocol &&
                protocol["charAt"](protocol["length"] - 1) !==
                  ":"
              )
                protocol += ":";
              var result =
                protocol + (url["slashes"] ? "//" : "");
              if (url["username"]) {
                result += url["username"];
                if (url["password"])
                  result += ":" + url["password"];
                result += "@";
              }
              result += url["host"] + url["pathname"];
              query =
                "object" === typeof url["query"]
                  ? stringify(url["query"])
                  : url["query"];
              if (query)
                result +=
                  "?" !== query["charAt"](0)
                    ? "?" + query
                    : query;
              if (url["hash"]) result += url["hash"];
              return result;
            }
            Url["prototype"] = {
              set: set,
              toString: toString,
            };
            Url["extractProtocol"] = extractProtocol;
            Url["location"] = lolcation;
            Url["qs"] = qs;
            module["exports"] = Url;
          }["call"](exports, __webpack_require__(47)));
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          module["exports"] = function required(port, protocol) {
            protocol = protocol["split"](":")[0];
            port = +port;
            if (!port) return false;
            switch (protocol) {
              case "http":
              case "ws":
                return port !== 80;
              case "https":
              case "wss":
                return port !== 443;
              case "ftp":
                return port !== 21;
              case "gopher":
                return port !== 70;
              case "file":
                return false;
            }
            return port !== 0;
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var has = Object["prototype"]["hasOwnProperty"],
            undef;
          function decode(input) {
            return decodeURIComponent(input["replace"](/\+/g, " "));
          }
          function querystring(query) {
            var parser = /([^=?&]+)=?([^&]*)/g,
              result = {},
              part;
            while ((part = parser["exec"](query))) {
              var key = decode(part[1]),
                value = decode(part[2]);
              if (key in result) continue;
              result[key] = value;
            }
            return result;
          }
          function querystringify(obj, prefix) {
            prefix = prefix || "";
            var pairs = [],
              value,
              key;
            if ("string" !== typeof prefix) prefix = "?";
            for (key in obj) {
              if (has["call"](obj, key)) {
                value = obj[key];
                if (
                  !value &&
                  (value === null || value === undef || isNaN(value))
                ) {
                  value = "";
                }
                pairs["push"](
                  encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(value)
                );
              }
            }
            return pairs["length"]
              ? prefix + pairs["join"]("&")
              : "";
          }
          exports["stringify"] = querystringify;
          exports["parse"] = querystring;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var _extends2 = __webpack_require__(160);
          var _extends3 = _interopRequireDefault(_extends2);
          var _objectWithoutProperties2 = __webpack_require__(165);
          var _objectWithoutProperties3 = _interopRequireDefault(
            _objectWithoutProperties2
          );
          var _getPrototypeOf = __webpack_require__(51);
          var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
          var _classCallCheck2 = __webpack_require__(10);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(14);
          var _createClass3 = _interopRequireDefault(_createClass2);
          var _possibleConstructorReturn2 = __webpack_require__(52);
          var _possibleConstructorReturn3 = _interopRequireDefault(
            _possibleConstructorReturn2
          );
          var _inherits2 = __webpack_require__(53);
          var _inherits3 = _interopRequireDefault(_inherits2);
          var _stringify = __webpack_require__(37);
          var _stringify2 = _interopRequireDefault(_stringify);
          var _formatterBase = __webpack_require__(105);
          var _formatterBase2 = _interopRequireDefault(_formatterBase);
          function _interopRequireDefault(obj) {
            return obj && obj["__esModule"]
              ? obj
              : {
                  default: obj,
                };
          }
          function removeUndefinedProperties(object) {
            return JSON["parse"]((0, _stringify2["default"])(object));
          }
          var PSAFormatter = (function (_FormatterBase) {
            (0, _inherits3["default"])(PSAFormatter, _FormatterBase);
            function PSAFormatter() {
              (0, _classCallCheck3["default"])(this, PSAFormatter);
              return (0, _possibleConstructorReturn3["default"])(
                this,
                (PSAFormatter["__proto__"] ||
                  (0, _getPrototypeOf2["default"])(PSAFormatter))["call"](
                  this
                )
              );
            }
            (0, _createClass3["default"])(PSAFormatter, [
              {
                key: "formatOutput",
                value: function formatOutput(
                  checkEntitlementResponse,
                  getUrlResponse
                ) {
                  var videoUrl = getUrlResponse["videoUrl"],
                    streamingFormat = getUrlResponse["streamingFormat"],
                    vastUrl = getUrlResponse["vastUrl"],
                    vmap = getUrlResponse["vmap"],
                    drm = getUrlResponse["drm"],
                    licenseUrl = getUrlResponse["licenseUrl"],
                    certificateUrl = getUrlResponse["certificateUrl"],
                    remainingPSAProperties = (0,
                    _objectWithoutProperties3["default"])(getUrlResponse, [
                      "videoUrl",
                      "streamingFormat",
                      "vastUrl",
                      "vmap",
                      "drm",
                      "licenseUrl",
                      "certificateUrl",
                    ]);
                  var source = (0, _extends3["default"])(
                    {
                      url: videoUrl,
                      mimetype: this["getMimeType"](streamingFormat),
                      entitlementJwt: checkEntitlementResponse["server_token"],
                      adSource: vastUrl || vmap,
                    },
                    remainingPSAProperties
                  );
                  if (drm) {
                    source["drm"] = this["buildDrmInfo"](
                      drm,
                      licenseUrl,
                      certificateUrl
                    );
                  }
                  return [removeUndefinedProperties(source)];
                },
              },
              {
                key: "buildDrmInfo",
                value: function buildDrmInfo(
                  drmName,
                  licenseUrl,
                  certificateUrl
                ) {
                  var drmInfo = {};
                  if (drmName) {
                    drmInfo[drmName] = {
                      licenseUrl: licenseUrl,
                      certificateUrl: certificateUrl,
                    };
                  }
                  return drmInfo;
                },
              },
            ]);
            return PSAFormatter;
          })(_formatterBase2["default"]);
          module["exports"] = PSAFormatter;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["__esModule"] = true;
          var _assign = __webpack_require__(161);
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
                  if (
                    Object["prototype"]["hasOwnProperty"]["call"](source, key)
                  ) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
        },
        function (module, exports, __webpack_require__) {
          module["exports"] = {
            default: __webpack_require__(162),
            __esModule: true,
          };
        },
        function (module, exports, __webpack_require__) {
          __webpack_require__(163);
          module["exports"] = __webpack_require__(0)["Object"][
            "assign"
          ];
        },
        function (module, exports, __webpack_require__) {
          var $export = __webpack_require__(9);
          $export($export["S"] + $export["F"], "Object", {
            assign: __webpack_require__(164),
          });
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var getKeys = __webpack_require__(20);
          var gOPS = __webpack_require__(35);
          var pIE = __webpack_require__(23);
          var toObject = __webpack_require__(67);
          var IObject = __webpack_require__(56);
          var $assign = Object["assign"];
          module["exports"] =
            !$assign ||
            __webpack_require__(16)(function () {
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
                Object["keys"]($assign({}, B))["join"](
                  ""
                ) != K
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
                    while (length > j)
                      if (isEnum["call"](S, (key = keys[j++])))
                        T[key] = S[key];
                  }
                  return T;
                }
              : $assign;
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          exports["__esModule"] = true;
          exports["default"] = function (obj, keys) {
            var target = {};
            for (var i in obj) {
              if (keys["indexOf"](i) >= 0) continue;
              if (!Object["prototype"]["hasOwnProperty"]["call"](obj, i))
                continue;
              target[i] = obj[i];
            }
            return target;
          };
        },
      ]);
    },
  ]);
