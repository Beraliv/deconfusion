
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
    return __webpack_require__((__webpack_require__["s"] = 46));
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
      module["exports"] = !__webpack_require__(8)(function () {
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
      var global = __webpack_require__(1);
      var core = __webpack_require__(0);
      var ctx = __webpack_require__(34);
      var hide = __webpack_require__(6);
      var has = __webpack_require__(5);
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
      var anObject = __webpack_require__(11);
      var IE8_DOM_DEFINE = __webpack_require__(35);
      var toPrimitive = __webpack_require__(22);
      var dP = Object["defineProperty"];
      exports["f"] = __webpack_require__(2)
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
    function (module, exports) {
      var hasOwnProperty = {}["hasOwnProperty"];
      module["exports"] = function (it, key) {
        return hasOwnProperty["call"](it, key);
      };
    },
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(4);
      var createDesc = __webpack_require__(13);
      module["exports"] = __webpack_require__(2)
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
      module["exports"] = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    },
    function (module, exports, __webpack_require__) {
      var IObject = __webpack_require__(38);
      var defined = __webpack_require__(23);
      module["exports"] = function (it) {
        return IObject(defined(it));
      };
    },
    function (module, exports, __webpack_require__) {
      var store = __webpack_require__(26)("wks");
      var uid = __webpack_require__(17);
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
      var isObject = __webpack_require__(7);
      module["exports"] = function (it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it;
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
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var Util = {
        logging: false,
        log: function log(message, object) {
          if (this["logging"]) {
            message = "[PlaybackMonitoring]: " + message;
            if (object) console["log"](message, object);
            else console["log"](message);
          }
        },
      };
      exports["default"] = Util;
    },
    function (module, exports, __webpack_require__) {
      var $keys = __webpack_require__(37);
      var enumBugKeys = __webpack_require__(27);
      module["exports"] =
        Object["keys"] ||
        function keys(O) {
          return $keys(O, enumBugKeys);
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
      exports["f"] = {}["propertyIsEnumerable"];
    },
    function (module, exports, __webpack_require__) {
      var defined = __webpack_require__(23);
      module["exports"] = function (it) {
        return Object(defined(it));
      };
    },
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      !(function (a, b) {
        if (
          (true
            ? !((__WEBPACK_AMD_DEFINE_FACTORY__ = b),
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
                (module["exports"] = __WEBPACK_AMD_DEFINE_RESULT__))
            : "object" == typeof exports && (module["exports"] = b()),
          "undefined" != typeof a)
        ) {
          if (void 0 !== a["Conviva"]) return;
          if (a["ConvivaLoading"]) return;
          (a["ConvivaLoading"] = !0), (a["Conviva"] = b()), delete a["ConvivaLoading"];
        }
      })(this, function () {
        var a = {};
        return (
          (function () {
            "use strict";
            var b = {};
            !(function () {
              var c = (a["Client"] = function (b, g) {
                function i(a, b) {
                  if (!(a instanceof d)) throw new Error("clientSettings parameter should be an instance of ClientSettings.");
                  if (!(b instanceof f)) throw new Error("systemFactory parameter should be an instance of SystemFactory.");
                  (a["gatewayUrl"] == d["_httpsProtocol"] + d["defaultProductionGatewayDNS"] ||
                    a["gatewayUrl"] == d["_httpProtocol"] + d["defaultProductionGatewayDNS"]) &&
                    (this["defaultGatewayURLError"] = !0),
                    (this["_settings"] = a["clone"]()),
                    (this["_systemFactory"] = b),
                    this["_systemFactory"]["configure"]("SDK", this["_settings"]),
                    (this["_exceptionCatcher"] = this["_systemFactory"]["buildExceptionCatcher"]()),
                    this["_exceptionCatcher"]["runProtected"](
                      "Client.init",
                      function () {
                        (j["_id"] = F["uinteger32"]()),
                          (j["_logger"] = j["_systemFactory"]["buildLogger"]()),
                          j["_logger"]["setModuleName"]("Client"),
                          j["defaultGatewayURLError"] &&
                            j["_logger"]["info"]("Gateway URL should not be set to https://cws.conviva.com or http://cws.conviva.com, therefore this call is ignored"),
                          j["_logger"]["info"](
                            "init(): url=" +
                              j["_settings"]["gatewayUrl"] +
                              " customerKey=" +
                              j["_settings"]["customerKey"]
                          ),
                          (j["_config"] = j["_systemFactory"]["buildConfig"]()),
                          j["_config"]["load"](),
                          (j["_sessionFactory"] = j["_systemFactory"]["buildSessionFactory"](
                            j,
                            j["_settings"],
                            j["_config"]
                          )),
                          j["_logger"]["info"]("init(): done.");
                      },
                      function (a) {
                        throw new Error("Client constructor failed: " + a["message"]);
                      }
                    );
                }
                var j = this;
                (this["defaultGatewayURLError"] = !1),
                  (this["_logger"] = null),
                  (this["_sessionFactory"] = null),
                  (this["_systemFactory"] = null),
                  (this["_globalSessionKey"] = -1),
                  (this["_settings"] = null),
                  (this["_systemSettings"] = null),
                  (this["_exceptionCatcher"] = null),
                  (this["_config"] = null),
                  (this["_id"] = -1),
                  (this["_released"] = !1),
                  i["apply"](this, arguments),
                  (this["release"] = function () {
                    this["_released"] ||
                      this["_exceptionCatcher"]["runProtected"]("Client.release", function () {
                        j["_logger"]["info"]("release()"),
                          j["_sessionFactory"]["cleanup"](),
                          (j["_sessionFactory"] = null),
                          (j["_globalSessionKey"] = -1),
                          (j["_logger"] = null),
                          (j["_id"] = -1),
                          (j["_exceptionCatcher"] = null),
                          (j["_settings"] = null),
                          (j["_systemSettings"] = null),
                          (j["_systemFactory"] = null),
                          (j["_released"] = !0);
                      });
                  }),
                  (this["createSession"] = function (a) {
                    var b = c["NO_SESSION_KEY"];
                    return this["_released"]
                      ? b
                      : null == a || a instanceof e
                      ? (this["_exceptionCatcher"]["runProtected"]("Client.createSession", function () {
                          b = j["_sessionFactory"]["makeVideoSession"](
                            a,
                            u["SESSION_TYPE"]["VIDEO"]
                          );
                        }),
                        b)
                      : (j["_logger"]["error"]("createSession(): expecting an instance of ContentMetadata for contentMetadata parameter"), b);
                  }),
                  (this["createAdSession"] = function (a, b) {
                    var d = c["NO_SESSION_KEY"];
                    return this["_released"]
                      ? d
                      : null == b || b instanceof e
                      ? (this["_exceptionCatcher"]["runProtected"]("Client.createAdSession", function () {
                          var c = j["_sessionFactory"]["getVideoSession"](a);
                          null != c &&
                            (null == b && (b = new e()),
                            (null == b["applicationName"] ||
                              null == b["viewerId"]) &&
                              (null == b["viewerId"] &&
                                null != c["_contentMetadata"]["viewerId"] &&
                                (b["viewerId"] = c["_contentMetadata"]["viewerId"]),
                              null == b["applicationName"] &&
                                null != c["_contentMetadata"]["applicationName"] &&
                                (b["applicationName"] = c["_contentMetadata"]["applicationName"])),
                            (b["custom"]["c3.csid"] = C["ToString"](
                              c["_id"]
                            ))),
                            (d = j["_sessionFactory"]["makeVideoSession"](
                              b,
                              u["SESSION_TYPE"]["AD"]
                            ));
                        }),
                        d)
                      : (j["_logger"]["error"]("createAdSession(): expecting an instance of ContentMetadata for adMetadata parameter"), d);
                  }),
                  (this["reportError"] = function (b, c, d) {
                    return this["_released"]
                      ? void 0
                      : C["isValidString"](c)
                      ? d !== a["Client"]["ErrorSeverity"]["FATAL"] &&
                        d !== a["Client"]["ErrorSeverity"]["WARNING"]
                        ? void this["_logger"]["error"]("reportError(): invalid error severity: " + d)
                        : void this["_exceptionCatcher"]["runProtected"](
                            "Client.reportError",
                            function () {
                              var a = j["_sessionFactory"]["getVideoSession"](b);
                              null != a && a["reportError"](c, d);
                            }
                          )
                      : void this["_logger"]["error"]("reportError(): invalid error message string: " + c);
                  }),
                  (this["updateContentMetadata"] = function (a, b) {
                    return this["_released"]
                      ? void 0
                      : b instanceof e
                      ? void this["_exceptionCatcher"]["runProtected"](
                          "Client.updateContentMetadata",
                          function () {
                            var c = j["_sessionFactory"]["getVideoSession"](a);
                            if (null != c) {
                              var d = b["clone"]();
                              c["updateContentMetadata"](d);
                            }
                          }
                        )
                      : void j["_logger"]["error"]("updateContentMetadata(): expecting an instance of ContentMetadata for contentMetadata parameter");
                  }),
                  (this["detachPlayer"] = function (a) {
                    this["_released"] ||
                      this["_exceptionCatcher"]["runProtected"]("Client.detachPlayer", function () {
                        var b = j["_sessionFactory"]["getVideoSession"](a);
                        null != b && b["detachPlayer"]();
                      });
                  }),
                  (this["attachPlayer"] = function (a, b) {
                    return this["_released"]
                      ? void 0
                      : b instanceof h
                      ? void this["_exceptionCatcher"]["runProtected"](
                          "Client.attachPlayer",
                          function () {
                            var c = j["_sessionFactory"]["getVideoSession"](a);
                            null != c && c["attachPlayer"](b);
                          }
                        )
                      : void j["_logger"]["error"]("attachPlayer(): expecting an instance of PlayerStateManager for playerStateManager parameter");
                  }),
                  (this["contentPreload"] = function (a) {
                    this["_released"] ||
                      this["_exceptionCatcher"]["runProtected"]("Client.contentPreload", function () {
                        var b = j["_sessionFactory"]["getVideoSession"](a);
                        null != b && b["contentPreload"]();
                      });
                  }),
                  (this["contentStart"] = function (a) {
                    this["_released"] ||
                      this["_exceptionCatcher"]["runProtected"]("Client.contentStart", function () {
                        var b = j["_sessionFactory"]["getVideoSession"](a);
                        null != b && b["contentStart"]();
                      });
                  }),
                  (this["sendCustomEvent"] = function (a, b, d) {
                    return this["_released"]
                      ? void 0
                      : C["isValidString"](b)
                      ? void this["_exceptionCatcher"]["runProtected"](
                          "Client.sendCustomEvent",
                          function () {
                            if (a == c["NO_SESSION_KEY"]) {
                              if (j["_globalSessionKey"] < 0) {
                                var f = new e();
                                j["_globalSessionKey"] = j["_sessionFactory"]["makeGlobalSession"](
                                  f,
                                  null
                                );
                              }
                              a = j["_globalSessionKey"];
                            }
                            var g = C["sanitizeStringToStringObject"](d),
                              h = j["_sessionFactory"]["getSession"](a);
                            null != h && h["sendCustomEvent"](b, g);
                          }
                        )
                      : void j["_logger"]["error"]("sendCustomEvent(): eventName parameter must be a valid string.");
                  }),
                  (this["adStart"] = function (a, b, d, e) {
                    return this["_released"]
                      ? void 0
                      : b !== c["AdStream"]["CONTENT"] &&
                        b !== c["AdStream"]["SEPARATE"]
                      ? void this["_logger"]["error"]("adStart(): ignored, invalid value for adStream parameter: " + b)
                      : d !== c["AdPlayer"]["CONTENT"] &&
                        d !== c["AdPlayer"]["SEPARATE"]
                      ? void this["_logger"]["error"]("adStart(): ignored, invalid value for adPlayer parameter: " + d)
                      : e !== c["AdPosition"]["BUMPER"] &&
                        e !== c["AdPosition"]["PREROLL"] &&
                        e !== c["AdPosition"]["MIDROLL"] &&
                        e !== c["AdPosition"]["POSTROLL"]
                      ? void this["_logger"]["error"]("adStart(): ignored, invalid value for adPosition parameter: " + e)
                      : void this["_exceptionCatcher"]["runProtected"](
                          "Client.adStart",
                          function () {
                            var c = j["_sessionFactory"]["getVideoSession"](a);
                            null != c && c["adStart"](b, d, e);
                          }
                        );
                  }),
                  (this["adEnd"] = function (a) {
                    this["_released"] ||
                      this["_exceptionCatcher"]["runProtected"]("Client.adEnd", function () {
                        var b = j["_sessionFactory"]["getVideoSession"](a);
                        null != b && b["adEnd"]();
                      });
                  }),
                  (this["cleanupSession"] = function (a) {
                    return this["_released"]
                      ? void 0
                      : a === c["NO_SESSION_KEY"]
                      ? void this["_logger"]["warning"]("cleanupSession(): ignored, can't cleanup Client.NO_SESSION_KEY")
                      : void this["_exceptionCatcher"]["runProtected"](
                          "Client.cleanupSession",
                          function () {
                            var b = j["_sessionFactory"]["getVideoSession"](a);
                            null != b && j["_sessionFactory"]["cleanupSession"](a);
                          }
                        );
                  }),
                  (this["getAttachedPlayer"] = function (a) {
                    var b = null;
                    return this["_released"]
                      ? b
                      : a === c["NO_SESSION_KEY"]
                      ? (this["_logger"]["warning"]("getAttachedPlayer(): ignored for Client.NO_SESSION_KEY"), b)
                      : (this["_exceptionCatcher"]["runProtected"]("Client.getAttachedPlayer", function () {
                          var c = j["_sessionFactory"]["getVideoSession"](a);
                          null != c && (b = c["getPlayerStateManager"]());
                        }),
                        b);
                  }),
                  (this["isPlayerAttached"] = function (a) {
                    return this["_released"]
                      ? !1
                      : null !== this["getAttachedPlayer"](a)
                      ? !0
                      : !1;
                  }),
                  (this["getPlayerStateManager"] = function () {
                    if (this["_released"]) throw new Error("This instance of Conviva.Client has been released.");
                    return new h(this["_systemFactory"]);
                  }),
                  (this["releasePlayerStateManager"] = function (a) {
                    if (this["_released"]) throw new Error("This instance of Conviva.Client has been released.");
                    this["_exceptionCatcher"]["runProtected"]("Client.releasePlayerStateManager", function () {
                      a instanceof h && a["release"]();
                    });
                  }),
                  (this["getSettings"] = function () {
                    return this["_settings"];
                  }),
                  (this["getId"] = function () {
                    return this["_id"];
                  });
              });
              (c["version"] = "2.151.0.36981"),
                (c["NO_SESSION_KEY"] = -2),
                (c["AdPosition"] = {
                  BUMPER: "BUMPER",
                  PREROLL: "PREROLL",
                  MIDROLL: "MIDROLL",
                  POSTROLL: "POSTROLL",
                }),
                (c["AdStream"] = {
                  CONTENT: "CONTENT",
                  SEPARATE: "SEPARATE",
                }),
                (c["AdPlayer"] = {
                  CONTENT: "CONTENT",
                  SEPARATE: "SEPARATE",
                }),
                (c["ErrorSeverity"] = {
                  FATAL: 0,
                  WARNING: 1,
                }),
                (c["DeviceType"] = {
                  DESKTOP: "DESKTOP",
                  CONSOLE: "Console",
                  SETTOP: "Settop",
                  MOBILE: "Mobile",
                  TABLET: "Tablet",
                  SMARTTV: "SmartTV",
                }),
                (c["AdTechnology"] = {
                  CLIENT_SIDE: "Client Side",
                  SERVER_SIDE: "Server Side",
                }),
                (c["AdType"] = {
                  BLACKOUT_SLATE: "Blackout slate",
                  TECHNICAL_DIFFICULTIES_SLATE: "Technical Difficulties slate",
                  COMMERCIAL_SLATE: "Commercial Break slate",
                  OTHER_SLATE: "Other slate",
                  VPAID: "VPAID",
                  REGULAR: "Regular Ad",
                }),
                (c["AdServingType"] = {
                  INLINE: "Inline",
                  WRAPPER: "Wrapper",
                }),
                (c["DeviceCategory"] = {
                  ANDROID_DEVICE: "AND",
                  APPLE_DEVICE: "APL",
                  CHROMECAST: "CHR",
                  DESKTOP_APP: "DSKAPP",
                  DEVICE_SIMULATOR: "SIMULATOR",
                  LG_TV: "LGTV",
                  NINTENDO: "NINTENDO",
                  PLAYSTATION: "PS",
                  ROKU: "RK",
                  SAMSUNG_TV: "SAMSUNGTV",
                  SMART_TV: "TV",
                  SET_TOP_BOX: "STB",
                  TIVO: "TIVO",
                  WEB: "WEB",
                  WINDOWS_DEVICE: "WIN",
                  XBOX: "XB",
                });
              var d = (a["ClientSettings"] = function (a) {
                function b(a) {
                  if (!C["isValidString"](a)) throw new Error("customerKey must be valid");
                  this["customerKey"] = a;
                }
                function c(a) {
                  if (C["isValidString"](a)) {
                    var b = a["split"]("://");
                    if (
                      "cws.conviva.com" != b[1] &&
                      ("https" == b[0] || "http" == b[0])
                    )
                      return a;
                  }
                  return (
                    "https://" + e["customerKey"] + "." + d["defaultProductionGatewayDNS"]
                  );
                }
                var e = this;
                (this["_customerKey"] = null),
                  C["defGet"](this, "customerKey", function () {
                    return this["_customerKey"];
                  }),
                  C["defSet"](this, "customerKey", function (a) {
                    C["isValidString"](a) && (this["_customerKey"] = a);
                  }),
                  (this["_heartbeatInterval"] = d["defaultProductionHeartbeatInterval"]),
                  C["defGet"](this, "heartbeatInterval", function () {
                    return this["_heartbeatInterval"];
                  }),
                  C["defSet"](this, "heartbeatInterval", function (a) {
                    if ("number" == typeof a) {
                      var b = C["NumberToUnsignedInt"](a);
                      b === a && (this["_heartbeatInterval"] = b);
                    }
                  }),
                  (this["_gatewayUrl"] = null),
                  C["defGet"](this, "gatewayUrl", function () {
                    return this["_gatewayUrl"];
                  }),
                  C["defSet"](this, "gatewayUrl", function (a) {
                    C["isValidString"](a) && (this["_gatewayUrl"] = a);
                  }),
                  b["apply"](this, arguments),
                  (this["equals"] = function (a) {
                    return (
                      this["customerKey"] === a["customerKey"] &&
                      this["gatewayUrl"] === a["gatewayUrl"] &&
                      this["heartbeatInterval"] === a["heartbeatInterval"]
                    );
                  }),
                  (this["clone"] = function () {
                    var a = new d(this["customerKey"]);
                    return (
                      (a["gatewayUrl"] = c(this["gatewayUrl"])),
                      (a["heartbeatInterval"] = this["heartbeatInterval"]),
                      a
                    );
                  });
              });
              (d["defaultDevelopmentGatewayUrl"] = "https://conviva.testonly.conviva.com"),
                (d["defaultProductionGatewayUrl"] = "https://cws.conviva.com"),
                (d["defaultProductionGatewayDNS"] = "cws.conviva.com"),
                (d["defaultDevelopmentGatewayDNS"] = "conviva.testonly.conviva.com"),
                (d["_httpsProtocol"] = "https://"),
                (d["_httpProtocol"] = "http://"),
                (d["defaultDevelopmentHeartbeatInterval"] = 5),
                (d["defaultProductionHeartbeatInterval"] = 20);
              var e = (a["ContentMetadata"] = function () {
                function a() {
                  return this["_assetName"];
                }
                function b(a) {
                  "string" == typeof a && (this["_assetName"] = a);
                }
                function c() {
                  return this["_custom"];
                }
                function d(a) {
                  "object" == typeof a &&
                    (this["_custom"] = C["sanitizeStringToStringObject"](a));
                }
                function f() {
                  return this["_defaultResource"];
                }
                function g(a) {
                  "string" == typeof a && (this["_defaultResource"] = a);
                }
                function h() {
                  return this["_viewerId"];
                }
                function i(a) {
                  "string" == typeof a && (this["_viewerId"] = a);
                }
                function j() {
                  return this["_applicationName"];
                }
                function k(a) {
                  "string" == typeof a && (this["_applicationName"] = a);
                }
                function l() {
                  return this["_streamUrl"];
                }
                function m(a) {
                  "string" == typeof a && (this["_streamUrl"] = a);
                }
                function n() {
                  return this["_streamType"];
                }
                function o(a) {
                  (a === e["StreamType"]["UNKNOWN"] ||
                    a === e["StreamType"]["VOD"] ||
                    a === e["StreamType"]["LIVE"]) &&
                    (this["_streamType"] = a);
                }
                function p() {
                  return this["_duration"];
                }
                function q(a) {
                  this["_duration"] = G["sanitizeSpecialIntegerValue"](a);
                }
                function r() {
                  return this["_encodedFrameRate"];
                }
                function s(a) {
                  this["_encodedFrameRate"] = G["sanitizeSpecialIntegerValue"](a);
                }
                function t() {}
                (this["_assetName"] = null),
                  C["defGet"](this, "assetName", a),
                  C["defSet"](this, "assetName", b),
                  (this["_custom"] = {}),
                  C["defGet"](this, "custom", c),
                  C["defSet"](this, "custom", d),
                  (this["_defaultResource"] = null),
                  C["defGet"](this, "defaultResource", f),
                  C["defSet"](this, "defaultResource", g),
                  (this["_viewerId"] = null),
                  C["defGet"](this, "viewerId", h),
                  C["defSet"](this, "viewerId", i),
                  (this["_applicationName"] = null),
                  C["defGet"](this, "applicationName", j),
                  C["defSet"](this, "applicationName", k),
                  (this["_streamUrl"] = null),
                  C["defGet"](this, "streamUrl", l),
                  C["defSet"](this, "streamUrl", m),
                  (this["_streamType"] = e["StreamType"]["UNKNOWN"]),
                  C["defGet"](this, "streamType", n),
                  C["defSet"](this, "streamType", o),
                  (this["_duration"] = -1),
                  C["defGet"](this, "duration", p),
                  C["defSet"](this, "duration", q),
                  (this["_encodedFrameRate"] = -1),
                  C["defGet"](this, "encodedFrameRate", r),
                  C["defSet"](this, "encodedFrameRate", s),
                  t["apply"](this, arguments),
                  (this["clone"] = function () {
                    var a = new e();
                    (a["assetName"] = this["assetName"]),
                      (a["applicationName"] = this["applicationName"]),
                      (a["streamUrl"] = this["streamUrl"]),
                      (a["viewerId"] = this["viewerId"]),
                      (a["defaultResource"] = this["defaultResource"]),
                      (a["streamType"] = this["streamType"]),
                      (a["duration"] = this["duration"]),
                      (a["encodedFrameRate"] = this["encodedFrameRate"]);
                    for (var b in this["custom"])
                      a["custom"][b] = this["custom"][b];
                    return a;
                  });
              });
              e["StreamType"] = {
                UNKNOWN: "UNKNOWN",
                LIVE: "LIVE",
                VOD: "VOD",
              };
              var f =
                  ((a["ErrorType"] = {
                    ERROR_UNKNOWN: "ERROR_UNKNOWN",
                    ERROR_IO: "ERROR_IO",
                    ERROR_TIMEOUT: "ERROR_TIMEOUT",
                    ERROR_NULL_ASSET: "ERROR_NULL_ASSET",
                    ERROR_MISSING_PARAMETER: "ERROR_MISSING_PARAMETER",
                    ERROR_NO_AD_AVAILABLE: "ERROR_NO_AD_AVAILABLE",
                    ERROR_PARSE: "ERROR_PARSE",
                    ERROR_INVALID_VALUE: "ERROR_INVALID_VALUE",
                    ERROR_INVALID_SLOT: "ERROR_INVALID_SLOT",
                    ERROR_3P_COMPONENT: "ERROR_3P_COMPONENT",
                    ERROR_UNSUPPORTED_3P_FEATURE: "ERROR_UNSUPPORTED_3P_FEATURE",
                    ERROR_DEVICE_LIMIT: "ERROR_DEVICE_LIMIT",
                    ERROR_UNMATCHED_SLOT_SIZE: "ERROR_UNMATCHED_SLOT_SIZE",
                  }),
                  (a["Events"] = {
                    AD_REQUESTED: "Conviva.AdRequested",
                    AD_RESPONSE: "Conviva.AdResponse",
                    AD_SLOT_STARTED: "Conviva.SlotStarted",
                    AD_ATTEMPTED: "Conviva.AdAttempted",
                    AD_SLOT_ENDED: "Conviva.SlotEnded",
                    AD_IMPRESSION_START: "Conviva.AdImpression",
                    AD_START: "Conviva.AdStart",
                    AD_FIRST_QUARTILE: "Conviva.AdFirstQuartile",
                    AD_MID_QUARTILE: "Conviva.AdMidQuartile",
                    AD_THIRD_QUARTILE: "Conviva.AdThirdQuartile",
                    AD_COMPLETE: "Conviva.AdComplete",
                    AD_END: "Conviva.AdEnd",
                    AD_IMPRESSION_END: "Conviva.AdImpressionEnd",
                    AD_SKIPPED: "Conviva.AdSkipped",
                    AD_ERROR: "Conviva.AdError",
                    AD_PROGRESS: "Conviva.AdProgress",
                    AD_CLOSE: "Conviva.AdClose",
                    CONTENT_PAUSED: "Conviva.PauseContent",
                    CONTENT_RESUMED: "Conviva.ResumeContent",
                    POD_START: "Conviva.PodStart",
                    POD_END: "Conviva.PodEnd",
                  }),
                  (a["SystemFactory"] = function (a, b) {
                    function c(a, b) {
                      if (!(a instanceof m)) throw new Error("systemInterface parameter should be an instance of SystemInterface.");
                      (this["_systemInterface"] = a),
                        (this["_timeInterface"] = this["_systemInterface"]["_timeInterface"]),
                        (this["_timerInterface"] = this["_systemInterface"]["_timerInterface"]),
                        (this["_httpInterface"] = this["_systemInterface"]["_httpInterface"]),
                        (this["_storageInterface"] = this["_systemInterface"]["_storageInterface"]),
                        (this["_metadataInterface"] = this["_systemInterface"]["_metadataInterface"]),
                        (this["_loggingInterface"] = this["_systemInterface"]["_loggingInterface"]),
                        b instanceof g
                          ? (this["_settings"] = b["clone"]())
                          : (this["_settings"] = new g());
                    }
                    var d = this;
                    c["apply"](this, arguments),
                      (this["configure"] = function (a, b) {
                        (this["_packageName"] = a), (this["_clientSettings"] = b);
                      }),
                      (this["release"] = function () {
                        this["_systemInterface"]["release"](),
                          (this["_systemInterface"] = null),
                          (this["_packageName"] = null),
                          (this["_settings"] = null),
                          (this["_logBuffer"] = null);
                      });
                    var e = {
                      build: function () {
                        return new I(
                          d["_loggingInterface"],
                          d["_timeInterface"],
                          d["getSettings"](),
                          d["_logBuffer"],
                          d["_packageName"]
                        );
                      },
                    };
                    (this["buildLogger"] = function () {
                      return e["build"]();
                    }),
                      (this["buildSessionFactory"] = function (a, b, c) {
                        return new w(a, b, c, this);
                      }),
                      (this["buildPing"] = function () {
                        return new E(
                          this["buildLogger"](),
                          this["buildHttpClient"](),
                          this["_clientSettings"]
                        );
                      }),
                      (this["buildCallbackWithTimeout"] = function () {
                        return new x(this["buildTimer"]());
                      }),
                      (this["buildCallbackWithTimeoutNoPing"] = function () {
                        var a = null,
                          b = new A(this["buildLogger"](), a, this["getSettings"]()),
                          c = new M(this["buildLogger"](), this["_timerInterface"], b);
                        return new x(c);
                      }),
                      (this["buildHttpClient"] = function () {
                        return new H(
                          this["buildLogger"](),
                          this["_httpInterface"],
                          this["buildCallbackWithTimeoutNoPing"](),
                          this["getSettings"]()
                        );
                      }),
                      (this["buildExceptionCatcher"] = function () {
                        return new A(
                          this["buildLogger"](),
                          this["buildPing"](),
                          this["getSettings"]()
                        );
                      }),
                      (this["buildTime"] = function () {
                        return new L(this["_timeInterface"], this["buildLogger"]());
                      }),
                      (this["buildTimer"] = function () {
                        return new M(
                          this["buildLogger"](),
                          this["_timerInterface"],
                          this["buildExceptionCatcher"]()
                        );
                      }),
                      (this["buildStorage"] = function () {
                        return new J(
                          this["buildLogger"](),
                          this["_storageInterface"],
                          this["buildCallbackWithTimeout"](),
                          this["getSettings"]()
                        );
                      }),
                      (this["buildConfig"] = function () {
                        return new y(
                          this["buildLogger"](),
                          this["buildStorage"](),
                          this["buildJsonInterface"]()
                        );
                      }),
                      (this["buildSystemMetadata"] = function () {
                        return new K(
                          this["buildLogger"](),
                          this["_metadataInterface"],
                          this["buildExceptionCatcher"]()
                        );
                      }),
                      (this["buildCwsProtocol"] = function () {
                        return new r();
                      }),
                      (this["buildGatewayControl"] = function (a) {
                        return new B(
                          a,
                          this["buildLogger"](),
                          this["buildHttpClient"](),
                          this["buildJsonInterface"]()
                        );
                      }),
                      (this["buildCwsSession"] = function (a, b, c) {
                        var d = this["buildGatewayControl"](b);
                        return new u(
                          this["buildEventQueue"](),
                          a,
                          b,
                          this["buildLogger"](),
                          this["buildExceptionCatcher"](),
                          this["buildTimer"](),
                          d,
                          this["buildCwsProtocol"](),
                          this["buildTime"](),
                          this["getLogBuffer"](),
                          c
                        );
                      }),
                      (this["buildSession"] = function (a, b, c, d, e, f) {
                        var g = this["buildExceptionCatcher"](),
                          h = this["buildLogger"](),
                          i = b["clone"](),
                          j = this["buildCwsSession"](a, i, c);
                        return new v(d, e, f, c, this["buildSystemMetadata"](), j, g, h);
                      }),
                      (this["buildEventQueue"] = function () {
                        return new z();
                      }),
                      (this["buildJsonInterface"] = function () {
                        return new s();
                      }),
                      (this["getLogBuffer"] = function () {
                        return this["_logBuffer"];
                      }),
                      (this["getSettings"] = function () {
                        return this["_settings"];
                      }),
                      (this["_logBuffer"] = new D());
                  })),
                g = (a["SystemSettings"] = function () {
                  function a() {}
                  (this["_logLevel"] = g["defaultProductionLogLevel"]),
                    C["defGet"](this, "logLevel", function () {
                      return this["_logLevel"];
                    }),
                    C["defSet"](this, "logLevel", function (a) {
                      if ("number" == typeof a) {
                        var b = C["NumberToUnsignedInt"](a);
                        b === a &&
                          b >= g["LogLevel"]["DEBUG"] &&
                          b <= g["LogLevel"]["ERROR"] &&
                          (this["_logLevel"] = b);
                      }
                    }),
                    (this["_allowUncaughtExceptions"] = g["defaultProductionAllowUncaughtExceptions"]),
                    C["defGet"](this, "allowUncaughtExceptions", function () {
                      return this["_allowUncaughtExceptions"];
                    }),
                    C["defSet"](this, "allowUncaughtExceptions", function (a) {
                      C["isBoolean"](a) && (this["_allowUncaughtExceptions"] = a);
                    }),
                    (this["_storageTimeout"] = g["defaultStorageTimeout"]),
                    C["defGet"](this, "storageTimeout", function () {
                      return this["_storageTimeout"];
                    }),
                    C["defSet"](this, "storageTimeout", function (a) {
                      if ("number" == typeof a) {
                        var b = C["NumberToUnsignedInt"](a);
                        b === a && (this["_storageTimeout"] = b);
                      }
                    }),
                    (this["_httpTimeout"] = g["defaultHttpTimeout"]),
                    C["defGet"](this, "httpTimeout", function () {
                      return this["_httpTimeout"];
                    }),
                    C["defSet"](this, "httpTimeout", function (a) {
                      if ("number" == typeof a) {
                        var b = C["NumberToUnsignedInt"](a);
                        b === a && (this["_httpTimeout"] = b);
                      }
                    }),
                    a["apply"](this, arguments),
                    (this["equals"] = function (a) {
                      return (
                        this["logLevel"] === a["logLevel"] &&
                        this["allowUncaughtExceptions"] === a["allowUncaughtExceptions"] &&
                        this["storageTimeout"] === a["storageTimeout"] &&
                        this["httpTimeout"] === a["httpTimeout"]
                      );
                    }),
                    (this["clone"] = function () {
                      var a = new g();
                      return (
                        (a["logLevel"] = this["logLevel"]),
                        (a["allowUncaughtExceptions"] = this["allowUncaughtExceptions"]),
                        (a["storageTimeout"] = this["storageTimeout"]),
                        (a["httpTimeout"] = this["httpTimeout"]),
                        a
                      );
                    });
                });
              (g["LogLevel"] = {
                DEBUG: 0,
                INFO: 1,
                WARNING: 2,
                ERROR: 3,
                NONE: 4,
              }),
                (g["defaultDevelopmentLogLevel"] = g["LogLevel"]["DEBUG"]),
                (g["defaultProductionLogLevel"] = g["LogLevel"]["ERROR"]),
                (g["defaultDevelopmentAllowUncaughtExceptions"] = !0),
                (g["defaultProductionAllowUncaughtExceptions"] = !1),
                (g["defaultStorageTimeout"] = 10),
                (g["defaultHttpTimeout"] = 10);
              var h = (a["PlayerStateManager"] = function (c) {
                function d(a) {
                  (e["_systemFactory"] = a),
                    (e["_logger"] = e["_systemFactory"]["buildLogger"]()),
                    e["_logger"]["setModuleName"]("PlayerStateManager"),
                    (e["_exceptionCatcher"] = e["_systemFactory"]["buildExceptionCatcher"]());
                }
                var e = this;
                (e["_monitorNotifier"] = null),
                  (e["_bitrateKbps"] = -2),
                  (e["_playerState"] = h["PlayerState"]["UNKNOWN"]),
                  (e["_currentMetadata"] = {}),
                  (e["_renderedFrameRate"] = -2),
                  (e["_encodedFrameRate"] = -2),
                  (e["_duration"] = -2),
                  (e["_playerVersion"] = null),
                  (e["_playerType"] = null),
                  (e["_streamUrl"] = null),
                  (e["_moduleName"] = null),
                  (e["_moduleVersion"] = null),
                  (e["_width"] = -1),
                  (e["_height"] = -1),
                  (e["_connectionType"] = null),
                  (e["_linkEncryption"] = null),
                  (e["_lastError"] = null),
                  (e["_pendingErrors"] = []),
                  (e["_released"] = !1),
                  (this["release"] = function () {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.release", function () {
                        null != e["_monitorNotifier"] && e["_monitorNotifier"]["onRelease"](),
                          e["removeMonitoringNotifier"](),
                          (e["_systemFactory"] = null),
                          (e["_logger"] = null),
                          (e["_exceptionCatcher"] = null),
                          (e["_released"] = !0);
                      });
                  }),
                  (this["setPlayheadTime"] = function (a) {}),
                  (this["setBufferLength"] = function (a) {}),
                  (this["setRenderedFrameRate"] = function (a) {}),
                  (this["getEncodedFrameRate"] = function () {
                    return e["_encodedFrameRate"];
                  }),
                  (this["setEncodedFrameRate"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setEncodedFrameRate", function () {
                        var b = G["sanitizeSpecialIntegerValue"](a);
                        b >= -1 &&
                          ((e["_encodedFrameRate"] = b),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onEncodedFrameRateChange"](e["_encodedFrameRate"]));
                      });
                  }),
                  (this["getDuration"] = function () {
                    return e["_duration"];
                  }),
                  (this["setClientMeasureInterface"] = function (b) {
                    C["validateInterface"](b, new a["ClientMeasureInterface"](), "ClientMeasureInterface"),
                      (this["_playerInterface"] = b);
                  }),
                  (this["getPHT"] = function () {
                    return this["_playerInterface"] &&
                      "function" == typeof this["_playerInterface"]["getPHT"]
                      ? this["_playerInterface"]["getPHT"]()
                      : h["DEFAULT_PHT"];
                  }),
                  (this["getBufferLength"] = function () {
                    return this["_playerInterface"] &&
                      "function" == typeof this["_playerInterface"]["getBufferLength"]
                      ? this["_playerInterface"]["getBufferLength"]()
                      : h["DEFAULT_BUFFER_LENGTH"];
                  }),
                  (this["getSignalStrength"] = function () {
                    return this["_playerInterface"] &&
                      "function" == typeof this["_playerInterface"]["getSignalStrength"]
                      ? this["_playerInterface"]["getSignalStrength"]()
                      : h["DEFAULT_SIGNAL_STRENGTH"];
                  }),
                  (this["getRenderedFrameRate"] = function () {
                    return this["_playerInterface"] &&
                      "function" == typeof this["_playerInterface"]["getRenderedFrameRate"]
                      ? this["_playerInterface"]["getRenderedFrameRate"]()
                      : h["DEFAULT_RENDERED_FRAME_RATE"];
                  }),
                  (this["setDuration"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setDuration", function () {
                        var b = G["sanitizeSpecialIntegerValue"](a);
                        b >= -1 &&
                          ((e["_duration"] = b),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onContentLengthChange"](e["_duration"]));
                      });
                  }),
                  (this["getStreamUrl"] = function () {
                    return e["_streamUrl"];
                  }),
                  (this["setStreamUrl"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setStreamUrl", function () {
                        null != a &&
                          ((e["_streamUrl"] = a),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onStreamUrlChange"](e["_streamUrl"]));
                      });
                  }),
                  (this["getModuleName"] = function () {
                    return e["_moduleName"];
                  }),
                  (this["getModuleVersion"] = function () {
                    return e["_moduleVersion"];
                  }),
                  (this["setModuleNameAndVersion"] = function (a, b) {
                    (e["_moduleName"] = a), (e["_moduleVersion"] = b);
                  }),
                  (this["getPlayerType"] = function () {
                    return e["_playerType"];
                  }),
                  (this["setPlayerType"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setPlayerType", function () {
                        (e["_playerType"] = a),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onPlayerTypeChange"](e["_playerType"]);
                      });
                  }),
                  (this["getPlayerVersion"] = function () {
                    return e["_playerVersion"];
                  }),
                  (this["setPlayerVersion"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setPlayerVersion", function () {
                        (e["_playerVersion"] = a),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onPlayerVersionChange"](e["_playerVersion"]);
                      });
                  }),
                  (this["setMonitoringNotifier"] = function (a, b) {
                    return e["_released"]
                      ? void 0
                      : null != e["_monitorNotifier"]
                      ? !1
                      : ((e["_monitorNotifier"] = a),
                        e["_logger"]["setSessionId"](b),
                        !0);
                  }),
                  (this["removeMonitoringNotifier"] = function () {
                    e["_released"] ||
                      ((e["_monitorNotifier"] = null),
                      e["_logger"]["setSessionId"](null));
                  }),
                  (this["pushCurrentState"] = function () {
                    e["setPlayerState"](e["getPlayerState"]()),
                      e["setBitrateKbps"](e["getBitrateKbps"]()),
                      e["setDuration"](e["getDuration"]()),
                      e["setEncodedFrameRate"](e["getEncodedFrameRate"]()),
                      e["setStreamUrl"](e["getStreamUrl"]()),
                      e["setPlayerType"](e["getPlayerType"]()),
                      e["setPlayerVersion"](e["getPlayerVersion"]());
                    for (var a = 0; a < e["_pendingErrors"]["length"]; a++) {
                      var b = e["_pendingErrors"][a];
                      e["setError"](b);
                    }
                    e["_pendingErrors"] = [];
                  }),
                  (this["getPlayerState"] = function () {
                    return e["_playerState"];
                  }),
                  (this["setPlayerState"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setPlayerState", function () {
                        h["isValidPlayerState"](a)
                          ? ((e["_playerState"] = a),
                            null != e["_monitorNotifier"] &&
                              e["_monitorNotifier"]["onPlayerStateChange"](e["_playerState"]))
                          : e["_logger"]["error"]("PlayerStateManager.SetPlayerState(): invalid state: " + a);
                      });
                  }),
                  (this["getBitrateKbps"] = function () {
                    return e["_bitrateKbps"];
                  }),
                  (this["setBitrateKbps"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setBitrateKbps", function () {
                        var b = G["sanitizeSpecialIntegerValue"](a);
                        b >= -1 &&
                          ((e["_bitrateKbps"] = b),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onBitrateChange"](e["_bitrateKbps"]));
                      });
                  }),
                  (this["setPlayerSeekStart"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setPlayerSeekStart()", function () {
                        null != e["_monitorNotifier"] &&
                          e["_monitorNotifier"]["onSeekEvent"](
                            h["SEEK_ACTIONS_TYPE"]["SEEK_START"],
                            a
                          );
                      });
                  }),
                  (this["setPlayerSeekEnd"] = function () {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setPlayerSeekEnd()", function () {
                        null != e["_monitorNotifier"] &&
                          e["_monitorNotifier"]["onSeekEvent"](
                            h["SEEK_ACTIONS_TYPE"]["SEEK_END"],
                            -1
                          );
                      });
                  }),
                  (this["setUserSeekButtonUp"] = function () {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setUserSeekButtonUp()", function () {
                        null != e["_monitorNotifier"] &&
                          e["_monitorNotifier"]["onSeekEvent"](
                            h["SEEK_ACTIONS_TYPE"]["BUTTON_UP"],
                            -1
                          );
                      });
                  }),
                  (this["setUserSeekButtonDown"] = function () {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setUserSeekButtonDown()", function () {
                        null != e["_monitorNotifier"] &&
                          e["_monitorNotifier"]["onSeekEvent"](
                            h["SEEK_ACTIONS_TYPE"]["BUTTON_DOWN"],
                            -1
                          );
                      });
                  }),
                  (this["setVideoResolutionWidth"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setVideoResolutionWidth()", function () {
                        var b = G["sanitizeSpecialIntegerValue"](a);
                        b > 0 && (e["_width"] = b),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onStreamResolutionWidthChange"](e["_width"]);
                      });
                  }),
                  (this["setVideoResolutionHeight"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setVideoResolutionHeight()", function () {
                        var b = G["sanitizeSpecialIntegerValue"](a);
                        b > 0 && (e["_height"] = b),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onStreamResolutionHeightChange"](e["_height"]);
                      });
                  }),
                  (this["setConnectionType"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setConnectionType()", function () {
                        (e["_connectionType"] = a),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onConnectionTypeChange"](e["_connectionType"]);
                      });
                  }),
                  (this["setLinkEncryption"] = function (a) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.setLinkEncryption()", function () {
                        (e["_linkEncryption"] = a),
                          null != e["_monitorNotifier"] &&
                            e["_monitorNotifier"]["onLinkEncryptionChange"](e["_linkEncryption"]);
                      });
                  }),
                  (this["setSignalStrength"] = function (a) {}),
                  (this["setError"] = function (a) {
                    if (((e["_lastError"] = a), null != e["_monitorNotifier"])) {
                      var b = a["errorCode"],
                        c = a["severity"];
                      e["_monitorNotifier"]["onError"](b, c);
                    } else e["_pendingErrors"]["push"](a);
                  }),
                  (this["sendError"] = function (a, c) {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.sendError", function () {
                        var d = new b["StreamerError"](a, c);
                        e["setError"](d);
                      });
                  }),
                  (this["reset"] = function () {
                    e["_released"] ||
                      e["_exceptionCatcher"]["runProtected"]("PlayerStateManager.reset", function () {
                        (e["_bitrateKbps"] = -2),
                          (e["_playerState"] = h["PlayerState"]["UNKNOWN"]),
                          (e["_currentMetadata"] = {}),
                          (e["_renderedFrameRate"] = -1),
                          (e["_encodedFrameRate"] = -1),
                          (e["_duration"] = -1),
                          (e["_playerVersion"] = null),
                          (e["_playerType"] = null),
                          (e["_streamUrl"] = null),
                          (e["_lastError"] = null),
                          (e["_pendingErrors"] = []);
                      });
                  }),
                  (this["getError"] = function () {
                    return e["_lastError"];
                  }),
                  d["apply"](e, arguments),
                  (h["DEFAULT_SIGNAL_STRENGTH"] = 1e3),
                  (h["DEFAULT_RENDERED_FRAME_RATE"] = -1),
                  (h["DEFAULT_BUFFER_LENGTH"] = -1),
                  (h["DEFAULT_PHT"] = -1);
              });
              (h["PlayerState"] = {
                STOPPED: "STOPPED",
                PLAYING: "PLAYING",
                BUFFERING: "BUFFERING",
                PAUSED: "PAUSED",
                UNKNOWN: "UNKNOWN",
                NOT_MONITORED: "NOT_MONITORED",
              }),
                (h["isValidPlayerState"] = function (a) {
                  return a === h["PlayerState"]["STOPPED"] ||
                    a === h["PlayerState"]["PLAYING"] ||
                    a === h["PlayerState"]["BUFFERING"] ||
                    a === h["PlayerState"]["PAUSED"] ||
                    a === h["PlayerState"]["UNKNOWN"] ||
                    a === h["PlayerState"]["NOT_MONITORED"]
                    ? !0
                    : !1;
                }),
                (h["SEEK_ACTIONS_TYPE"] = {
                  SEEK_START: "pss",
                  SEEK_END: "pse",
                  BUTTON_UP: "bu",
                  BUTTON_DOWN: "bd",
                });
              var i =
                  ((a["ClientMeasureInterface"] = function () {
                    (this["getPHT"] = function () {}),
                      (this["getBufferLength"] = function () {}),
                      (this["getSignalStrength"] = function () {}),
                      (this["getRenderedFrameRate"] = function () {});
                  }),
                  (a["HttpInterface"] = function () {
                    (this["makeRequest"] = function (a, b, c, d, e, f) {}),
                      (this["release"] = function () {});
                  })),
                j = (a["LoggingInterface"] = function () {
                  (this["consoleLog"] = function (a, b) {}),
                    (this["release"] = function () {});
                }),
                k = (a["MetadataInterface"] = function () {
                  (this["getBrowserName"] = function () {}),
                    (this["getBrowserVersion"] = function () {}),
                    (this["getDeviceBrand"] = function () {}),
                    (this["getDeviceManufacturer"] = function () {}),
                    (this["getDeviceModel"] = function () {}),
                    (this["getDeviceType"] = function () {}),
                    (this["getDeviceVersion"] = function () {}),
                    (this["getFrameworkName"] = function () {}),
                    (this["getFrameworkVersion"] = function () {}),
                    (this["getOperatingSystemName"] = function () {}),
                    (this["getOperatingSystemVersion"] = function () {}),
                    (this["getDeviceCategory"] = function () {}),
                    (this["release"] = function () {});
                }),
                l = (a["StorageInterface"] = function () {
                  (this["saveData"] = function (a, b, c, d) {}),
                    (this["loadData"] = function (a, b, c) {}),
                    (this["release"] = function () {});
                }),
                m = (a["SystemInterface"] = function (a, b, c, d, e, f) {
                  function g(a, b, c, d, e, f) {
                    C["validateInterface"](a, new n(), "TimeInterface"),
                      C["validateInterface"](b, new o(), "TimerInterface"),
                      C["validateInterface"](c, new i(), "HttpInterface"),
                      C["validateInterface"](d, new l(), "StorageInterface"),
                      C["validateInterface"](e, new k(), "MetadataInterface"),
                      C["validateInterface"](f, new j(), "LoggingInterface"),
                      (this["_timeInterface"] = a),
                      (this["_timerInterface"] = b),
                      (this["_httpInterface"] = c),
                      (this["_storageInterface"] = d),
                      (this["_metadataInterface"] = e),
                      (this["_loggingInterface"] = f);
                  }
                  g["apply"](this, arguments),
                    (this["release"] = function () {
                      this["_timeInterface"]["release"](),
                        (this["_timeInterface"] = null),
                        this["_timerInterface"]["release"](),
                        (this["_timerInterface"] = null),
                        this["_httpInterface"]["release"](),
                        (this["_httpInterface"] = null),
                        this["_storageInterface"]["release"](),
                        (this["_storageInterface"] = null),
                        this["_metadataInterface"]["release"](),
                        (this["_metadataInterface"] = null),
                        this["_loggingInterface"]["release"](),
                        (this["_loggingInterface"] = null);
                    });
                }),
                n = (a["TimeInterface"] = function () {
                  (this["getEpochTimeMs"] = function () {}),
                    (this["release"] = function () {});
                }),
                o = (a["TimerInterface"] = function () {
                  (this["createTimer"] = function (a, b, c) {}),
                    (this["release"] = function () {});
                }),
                p = (b["JSON2"] = {});
              !(function () {
                function a(a) {
                  return 10 > a ? "0" + a : a;
                }
                function b(a) {
                  return (
                    (d["lastIndex"] = 0),
                    d["test"](a)
                      ? '"' +
                        a["replace"](d, function (a) {
                          var b = g[a];
                          return "string" == typeof b
                            ? b
                            : "\\u" +
                                ("0000" +
                                  a["charCodeAt"](0)["toString"](16))[
                                  "slice"
                                ](-4);
                        }) +
                        '"'
                      : '"' + a + '"'
                  );
                }
                function c(a, d) {
                  var g,
                    i,
                    j,
                    k,
                    l,
                    m = e,
                    n = d[a];
                  switch (
                    (n &&
                      "object" == typeof n &&
                      "function" == typeof n["toJSON"] &&
                      (n = n["toJSON"](a)),
                    "function" == typeof h && (n = h["call"](d, a, n)),
                    typeof n)
                  ) {
                    case "string":
                      return b(n);
                    case "number":
                      return isFinite(n) ? String(n) : "null";
                    case "boolean":
                    case "null":
                      return String(n);
                    case "object":
                      if (!n) return "null";
                      if (
                        ((e += f),
                        (l = []),
                        Object["prototype"]["toString"]["apply"](n) ===
                          Object["prototype"]["toString"]["apply"]([]))
                      ) {
                        for (k = n["length"], g = 0; k > g; g += 1)
                          l[g] = c(g, n) || "null";
                        return (
                          (j =
                            0 === l["length"]
                              ? "[]"
                              : e
                              ? "[\n" +
                                e +
                                l["join"](",\n" + e) +
                                "\n" +
                                m +
                                "]"
                              : "[" +
                                l["join"](",") +
                                "]"),
                          (e = m),
                          j
                        );
                      }
                      if (h && "object" == typeof h)
                        for (k = h["length"], g = 0; k > g; g += 1)
                          "string" == typeof h[g] &&
                            ((i = h[g]),
                            (j = c(i, n)),
                            j &&
                              l["push"](
                                b(i) + (e ? ": " : ":") + j
                              ));
                      else
                        for (i in n)
                          Object["prototype"]["hasOwnProperty"]["call"](n, i) &&
                            ((j = c(i, n)),
                            j &&
                              l["push"](
                                b(i) + (e ? ": " : ":") + j
                              ));
                      return (
                        (j =
                          0 === l["length"]
                            ? "{}"
                            : e
                            ? "{\n" +
                              e +
                              l["join"](",\n" + e) +
                              "\n" +
                              m +
                              "}"
                            : "{" +
                              l["join"](",") +
                              "}"),
                        (e = m),
                        j
                      );
                  }
                }
                "function" != typeof Date["prototype"]["toJSON"] &&
                  ((Date["prototype"]["toJSON"] = function () {
                    return isFinite(this["valueOf"]())
                      ? this["getUTCFullYear"]() +
                          "-" +
                          a(this["getUTCMonth"]() + 1) +
                          "-" +
                          a(this["getUTCDate"]()) +
                          "T" +
                          a(this["getUTCHours"]()) +
                          ":" +
                          a(this["getUTCMinutes"]()) +
                          ":" +
                          a(this["getUTCSeconds"]()) +
                          "Z"
                      : null;
                  }),
                  (String["prototype"]["toJSON"] = Number["prototype"][
                    "toJSON"
                  ] = Boolean["prototype"]["toJSON"] = function () {
                    return this["valueOf"]();
                  }));
                var d, e, f, g, h;
                "function" != typeof p["stringify"] &&
                  ((d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
                  (g = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\",
                  }),
                  (p["stringify"] = function (a, b, d) {
                    var g;
                    if (
                      ((e = ""),
                      (f = ""),
                      "number" == typeof d)
                    )
                      for (g = 0; d > g; g += 1) f += " ";
                    else "string" == typeof d && (f = d);
                    if (
                      ((h = b),
                      b &&
                        "function" != typeof b &&
                        ("object" != typeof b ||
                          "number" != typeof b["length"]))
                    )
                      throw new Error("JSON2.stringify");
                    return c("", {
                      "": a,
                    });
                  }));
              })();
              var q = (b["JsonParse"] = (function () {
                  var a,
                    b,
                    c,
                    d,
                    e = {
                      '"': '"',
                      "\\": "\\",
                      "/": "/",
                      b: "\b",
                      f: "\f",
                      n: "\n",
                      r: "\r",
                      t: "\t",
                    },
                    f = function (b) {
                      throw {
                        name: "SyntaxError",
                        message: b,
                        at: a,
                        text: c,
                      };
                    },
                    g = function (d) {
                      return (
                        d &&
                          d !== b &&
                          f("Expected '" + d + "' instead of '" + b + "'"),
                        (b = c["charAt"](a)),
                        (a += 1),
                        b
                      );
                    },
                    h = function () {
                      var a,
                        c = "";
                      for (
                        "-" === b &&
                        ((c = "-"), g("-"));
                        b >= "0" && "9" >= b;

                      )
                        (c += b), g();
                      if ("." === b)
                        for (
                          c += ".";
                          g() && b >= "0" && "9" >= b;

                        )
                          c += b;
                      if ("e" === b || "E" === b)
                        for (
                          c += b,
                            g(),
                            ("-" === b || "+" === b) &&
                              ((c += b), g());
                          b >= "0" && "9" >= b;

                        )
                          (c += b), g();
                      return (a = +c), isNaN(a) ? void f("Bad number") : a;
                    },
                    i = function () {
                      var a,
                        c,
                        d,
                        h = "";
                      if ('"' === b)
                        for (; g(); ) {
                          if ('"' === b) return g(), h;
                          if ("\\" === b)
                            if ((g(), "u" === b)) {
                              for (
                                d = 0, c = 0;
                                4 > c && ((a = parseInt(g(), 16)), isFinite(a));
                                c += 1
                              )
                                d = 16 * d + a;
                              h += String["fromCharCode"](d);
                            } else {
                              if ("string" != typeof e[b]) break;
                              h += e[b];
                            }
                          else h += b;
                        }
                      f("Bad string");
                    },
                    j = function () {
                      for (; b && " " >= b; ) g();
                    },
                    k = function () {
                      switch (b) {
                        case "t":
                          return (
                            g("t"),
                            g("r"),
                            g("u"),
                            g("e"),
                            !0
                          );
                        case "f":
                          return (
                            g("f"),
                            g("a"),
                            g("l"),
                            g("s"),
                            g("e"),
                            !1
                          );
                        case "n":
                          return (
                            g("n"),
                            g("u"),
                            g("l"),
                            g("l"),
                            null
                          );
                      }
                      f("Unexpected '" + b + "'");
                    },
                    l = function () {
                      var a = [];
                      if ("[" === b) {
                        if ((g("["), j(), "]" === b))
                          return g("]"), a;
                        for (; b; ) {
                          if ((a["push"](d()), j(), "]" === b))
                            return g("]"), a;
                          g(","), j();
                        }
                      }
                      f("Bad array");
                    },
                    m = function () {
                      var a,
                        c = {};
                      if ("{" === b) {
                        if ((g("{"), j(), "}" === b))
                          return g("}"), c;
                        for (; b; ) {
                          if (
                            ((a = i()),
                            j(),
                            g(":"),
                            Object["hasOwnProperty"]["call"](c, a) &&
                              f('Duplicate key "' + a + '"'),
                            (c[a] = d()),
                            j(),
                            "}" === b)
                          )
                            return g("}"), c;
                          g(","), j();
                        }
                      }
                      f("Bad object");
                    };
                  return (
                    (d = function () {
                      switch ((j(), b)) {
                        case "{":
                          return m();
                        case "[":
                          return l();
                        case '"':
                          return i();
                        case "-":
                          return h();
                        default:
                          return b >= "0" && "9" >= b
                            ? h()
                            : k();
                      }
                    }),
                    function (e, g) {
                      var h;
                      return (
                        (c = e),
                        (a = 0),
                        (b = " "),
                        (h = d()),
                        j(),
                        b && f("Syntax error"),
                        "function" == typeof g
                          ? (function i(a, b) {
                              var c,
                                d,
                                e = a[b];
                              if (e && "object" == typeof e)
                                for (c in e)
                                  Object["hasOwnProperty"]["call"](e, c) &&
                                    ((d = i(e, c)),
                                    void 0 !== d ? (e[c] = d) : delete e[c]);
                              return g["call"](a, b, e);
                            })(
                              {
                                "": h,
                              },
                              ""
                            )
                          : h
                      );
                    }
                  );
                })()),
                r = (b["CwsProtocol"] = function () {
                  (this["generateEvent"] = function (a, b, c, d) {
                    return (
                      (d["seq"] = a),
                      (d["st"] = b),
                      (d["t"] = c),
                      d
                    );
                  }),
                    (this["generateSessionEndEvent"] = function (a, b) {
                      var c = r["EVENT_TYPE_SESSION_END"],
                        d = {};
                      return this["generateEvent"](a, b, c, d);
                    });
                });
              (r["version"] = "2.4"),
                (r["gatewayPath"] = "/0/wsg"),
                (r["DEFAULT_CLIENT_ID"] = "0"),
                (r["DEFAULT_MAX_HEARTBEAT_INFOS"] = 0),
                (r["DEFAULT_PLAYHEAD_TIME"] = -1),
                (r["DEFAULT_BUFFER_LENGTH"] = -1),
                (r["DEFAULT_SIGNAL_STRENGTH"] = 1e3),
                (r["SDK_METADATA_SCHEMA"] = "sdk.js.1"),
                (r["EVENT_TYPE_STATE_CHANGE"] = "CwsStateChangeEvent"),
                (r["EVENT_TYPE_ERROR"] = "CwsErrorEvent"),
                (r["EVENT_TYPE_SESSION_END"] = "CwsSessionEndEvent"),
                (r["EVENT_TYPE_CUSTOM"] = "CwsCustomEvent"),
                (r["EVENT_TYPE_SEEK"] = "CwsSeekEvent"),
                (r["EVENT_TYPE_DATA_SAMPLE"] = "CwsDataSamplesEvent"),
                (r["RESPONSE_STATUS_NO_ERRORS"] = "ok"),
                (r["RESPONSE_KEY_STATUS"] = "err"),
                (r["RESPONSE_KEY_CLIENT_ID"] = "clid"),
                (r["RESPONSE_KEY_CONFIG"] = "cfg"),
                (r["RESPONSE_KEY_EVENTS"] = "evs"),
                (r["RESPONSE_CONFIG_KEY_MAX_HEARTBEAT_INFOS"] = "maxhbinfos"),
                (r["RESPONSE_CONFIG_KEY_SEND_LOGS"] = "slg"),
                (r["RESPONSE_CONFIG_KEY_HEARTBEAT_INTERVAL"] = "hbi"),
                (r["RESPONSE_CONFIG_KEY_GATEWAY_URL"] = "gw"),
                (r["MESSAGE_TYPE_SESSION_HEARTBEAT"] = "CwsSessionHb"),
                (r["REQUEST_KEY_MESSAGE_TYPE"] = "t"),
                (r["REQUEST_KEY_SESSION_TIME"] = "st"),
                (r["REQUEST_KEY_SESSION_START_TIME"] = "sst"),
                (r["REQUEST_KEY_IS_LIVE"] = "lv"),
                (r["REQUEST_KEY_SEQUENCE_NUMBER"] = "seq"),
                (r["REQUEST_KEY_CUSTOMER_KEY"] = "cid"),
                (r["REQUEST_KEY_CLIENT_ID"] = "clid"),
                (r["REQUEST_KEY_CLIENT_VERSION"] = "clv"),
                (r["REQUEST_KEY_PROTOCOL_VERSION"] = "pver"),
                (r["REQUEST_KEY_INSTANCE_ID"] = "iid"),
                (r["REQUEST_KEY_SESSION_ID"] = "sid"),
                (r["REQUEST_KEY_VIEWER_ID"] = "vid"),
                (r["REQUEST_KEY_ASSET_NAME"] = "an"),
                (r["REQUEST_KEY_PLAYER_NAME"] = "pn"),
                (r["REQUEST_KEY_TAGS"] = "tags"),
                (r["REQUEST_KEY_SESSION_FLAGS"] = "sf"),
                (r["REQUEST_KEY_EVENTS"] = "evs"),
                (r["REQUEST_KEY_LOGS"] = "lg"),
                (r["REQUEST_KEY_HEARTBEAT_INFOS"] = "hbinfos"),
                (r["REQUEST_KEY_IS_SDK_CLIENT"] = "sdk"),
                (r["REQUEST_KEY_PAUSE_JOIN"] = "pj"),
                (r["REQUEST_KEY_PLAYER_STATE"] = "ps"),
                (r["REQUEST_KEY_BITRATE"] = "br"),
                (r["REQUEST_KEY_CONTENT_LENGTH"] = "cl"),
                (r["REQUEST_KEY_ENCODED_FRAME_RATE"] = "efps"),
                (r["REQUEST_KEY_AVERAGE_FRAME_RATE"] = "afps"),
                (r["REQUEST_KEY_RFPS_TOTAL"] = "rfpstot"),
                (r["REQUEST_KEY_RFPS_COUNT"] = "rfpscnt"),
                (r["REQUEST_KEY_RESOURCE"] = "rs"),
                (r["REQUEST_KEY_PLAYHEAD_TIME"] = "pht"),
                (r["REQUEST_KEY_BUFFER_LENGTH"] = "bl"),
                (r["REQUEST_KEY_STREAM_URL"] = "url"),
                (r["REQUEST_KEY_CAPABILITIES"] = "caps"),
                (r["REQUEST_KEY_PLATFORM_METADATA"] = "pm"),
                (r["REQUEST_KEY_VIDEO_WIDTH"] = "w"),
                (r["REQUEST_KEY_VIDEO_HEIGHT"] = "h"),
                (r["REQUEST_KEY_CONNECTION_TYPE"] = "ct"),
                (r["REQUEST_KEY_LINK_ENCRYPTION"] = "le"),
                (r["REQUEST_KEY_SIGNAL_STRENGTH"] = "ss"),
                (r["REQUEST_KEY_STREAM_METADATA_CHANGE"] = "strmetadata"),
                (r["REQUEST_PLATFORM_METADATA_KEY_SCHEMA"] = "sch"),
                (r["REQUEST_PLATFORM_METADATA_KEY_BROWSER_NAME"] = "br"),
                (r["REQUEST_PLATFORM_METADATA_KEY_BROWSER_VERSION"] = "brv"),
                (r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_BRAND"] = "dvb"),
                (r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_MANUFACTURER"] = "dvma"),
                (r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_MODEL"] = "dvm"),
                (r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_TYPE"] = "dvt"),
                (r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_VERSION"] = "dvv"),
                (r["REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_NAME"] = "fw"),
                (r["REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_VERSION"] = "fwv"),
                (r["REQUEST_PLATFORM_METADATA_KEY_CLIENT_CONFIGURATION"] = "cc"),
                (r["REQUEST_PLATFORM_METADATA_KEY_MODULE_NAME"] = "mn"),
                (r["REQUEST_PLATFORM_METADATA_KEY_MODULE_VERSION"] = "mv"),
                (r["REQUEST_PLATFORM_METADATA_KEY_OPERATING_SYSTEM_NAME"] = "os"),
                (r["REQUEST_PLATFORM_METADATA_KEY_OPERATING_SYSTEM_VERSION"] = "osv"),
                (r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_CATEGORY"] = "cat"),
                (r["REQUEST_KEY_PROTOCOL_CAPP"] = "caps"),
                (r["REQUEST_EVENT_KEY_TYPE"] = "t"),
                (r["REQUEST_EVENT_KEY_SEQUENCE_NUMBER"] = "seq"),
                (r["REQUEST_EVENT_KEY_SESSION_TIME"] = "st"),
                (r["REQUEST_EVENT_KEY_SEEK_ACT_TYPE"] = "act"),
                (r["REQUEST_EVENT_KEY_SEEK_TO_POS"] = "skto"),
                (r["REQUEST_ERROR_EVENT_KEY_MESSAGE"] = "err"),
                (r["REQUEST_ERROR_EVENT_KEY_FATAL"] = "ft"),
                (r["REQUEST_STATE_CHANGE_EVENT_KEY_NEW"] = "new"),
                (r["REQUEST_STATE_CHANGE_EVENT_KEY_OLD"] = "old"),
                (r["REQUEST_CUSTOM_EVENT_KEY_NAME"] = "name"),
                (r["REQUEST_CUSTOM_EVENT_KEY_ATTRIBUTES"] = "attr"),
                (r["REQUEST_HEARTBEAT_INFO_KEY_SEQUENCE_NUMBER"] = "seq"),
                (r["REQUEST_HEARTBEAT_INFO_KEY_STATUS"] = "err"),
                (r["REQUEST_HEARTBEAT_INFO_KEY_ROUNDTRIP_TIME"] = "rtt"),
                (r["REQUEST_KEY_IS_AD_SESSION"] = "ad"),
                (r["convertPlayerState"] = function (a) {
                  switch (a) {
                    case h["PlayerState"]["STOPPED"]:
                      return r["eStopped"];
                    case h["PlayerState"]["PLAYING"]:
                      return r["ePlaying"];
                    case h["PlayerState"]["BUFFERING"]:
                      return r["eBuffering"];
                    case h["PlayerState"]["PAUSED"]:
                      return r["ePaused"];
                    case h["PlayerState"]["NOT_MONITORED"]:
                      return r["eNotMonitored"];
                    default:
                      return r["eUnknown"];
                  }
                }),
                (r["eStopped"] = 1),
                (r["ePlaying"] = 3),
                (r["eBuffering"] = 6),
                (r["ePaused"] = 12),
                (r["eNotMonitored"] = 98),
                (r["eUnknown"] = 100),
                (r["SessionFlags"] = {
                  GLOBAL: 0,
                  VIDEO: 1,
                  QUALITY_METRICS: 2,
                  BITRATE_METRICS: 4,
                }),
                (r["Capabilities"] = {
                  INSIGHTS: 0,
                });
              var s =
                  ((b["JSONInterface"] = function () {
                    (this["encode"] = function (a) {}),
                      (this["decode"] = function (a) {});
                  }),
                  (b["LibJSONInterface"] = function () {
                    (this["encode"] = function (a) {
                      var b = null;
                      try {
                        b = p["stringify"](a);
                      } catch (c) {}
                      return b;
                    }),
                      (this["decode"] = function (a) {
                        var b = null;
                        try {
                          b = q(a);
                        } catch (c) {}
                        return C["isObject"](b) || (b = null), b;
                      });
                  })),
                t = (b["CwsHeartbeat"] = function () {
                  function a() {}
                  (this["_data"] = {}),
                    a["apply"](this, arguments),
                    (this["get"] = function () {
                      return this["_data"];
                    }),
                    (this["setField"] = function (a, b) {
                      this["_data"][a] = b;
                    }),
                    (this["setInnerField"] = function (a, b, c) {
                      this["_data"][a] || (this["_data"][a] = {}),
                        (this["_data"][a][b] = c);
                    }),
                    (this["setMessageType"] = function (a) {
                      this["setField"](r["REQUEST_KEY_MESSAGE_TYPE"], a);
                    }),
                    (this["setSessionTime"] = function (a) {
                      this["setField"](r["REQUEST_KEY_SESSION_TIME"], a);
                    }),
                    (this["setSessionStartTime"] = function (a) {
                      this["setField"](r["REQUEST_KEY_SESSION_START_TIME"], a);
                    }),
                    (this["setIsLive"] = function (a) {
                      this["setField"](r["REQUEST_KEY_IS_LIVE"], a);
                    }),
                    (this["setSequenceNumber"] = function (a) {
                      this["setField"](r["REQUEST_KEY_SEQUENCE_NUMBER"], a);
                    }),
                    (this["setCustomerKey"] = function (a) {
                      this["setField"](r["REQUEST_KEY_CUSTOMER_KEY"], a);
                    }),
                    (this["setClientId"] = function (a) {
                      this["setField"](r["REQUEST_KEY_CLIENT_ID"], a);
                    }),
                    (this["setClientVersion"] = function (a) {
                      this["setField"](r["REQUEST_KEY_CLIENT_VERSION"], a);
                    }),
                    (this["setProtocolVersion"] = function (a) {
                      this["setField"](r["REQUEST_KEY_PROTOCOL_VERSION"], a);
                    }),
                    (this["setCapfield"] = function (a) {
                      this["setField"](r["REQUEST_KEY_PROTOCOL_CAPP"], a);
                    }),
                    (this["setSessionId"] = function (a) {
                      this["setField"](r["REQUEST_KEY_SESSION_ID"], a);
                    }),
                    (this["setInstanceId"] = function (a) {
                      this["setField"](r["REQUEST_KEY_INSTANCE_ID"], a);
                    }),
                    (this["setViewerId"] = function (a) {
                      this["setField"](r["REQUEST_KEY_VIEWER_ID"], a);
                    }),
                    (this["setAssetName"] = function (a) {
                      this["setField"](r["REQUEST_KEY_ASSET_NAME"], a);
                    }),
                    (this["setPlayerName"] = function (a) {
                      this["setField"](r["REQUEST_KEY_PLAYER_NAME"], a);
                    }),
                    (this["setTags"] = function (a) {
                      this["setField"](r["REQUEST_KEY_TAGS"], a);
                    }),
                    (this["setSessionFlags"] = function (a) {
                      this["setField"](r["REQUEST_KEY_SESSION_FLAGS"], a);
                    }),
                    (this["setCapabilities"] = function (a) {
                      this["setField"](r["REQUEST_KEY_CAPABILITIES"], a);
                    }),
                    (this["setEvents"] = function (a) {
                      this["setField"](r["REQUEST_KEY_EVENTS"], a);
                    }),
                    (this["setIsSdkClient"] = function (a) {
                      this["setField"](r["REQUEST_KEY_IS_SDK_CLIENT"], a);
                    }),
                    (this["setLogs"] = function (a) {
                      this["setField"](r["REQUEST_KEY_LOGS"], a);
                    }),
                    (this["setHeartbeatInfos"] = function (a) {
                      this["setField"](r["REQUEST_KEY_HEARTBEAT_INFOS"], a);
                    }),
                    (this["setPlayerState"] = function (a) {
                      this["setField"](r["REQUEST_KEY_PLAYER_STATE"], a);
                    }),
                    (this["setPauseJoin"] = function (a) {
                      this["setField"](r["REQUEST_KEY_PAUSE_JOIN"], a);
                    }),
                    (this["setContentLength"] = function (a) {
                      this["setField"](r["REQUEST_KEY_CONTENT_LENGTH"], a);
                    }),
                    (this["setBitrate"] = function (a) {
                      this["setField"](r["REQUEST_KEY_BITRATE"], a);
                    }),
                    (this["setResource"] = function (a) {
                      this["setField"](r["REQUEST_KEY_RESOURCE"], a);
                    }),
                    (this["setEncodedFrameRate"] = function (a) {
                      this["setField"](r["REQUEST_KEY_ENCODED_FRAME_RATE"], a);
                    }),
                    (this["setAverageFrameRate"] = function (a) {
                      this["setField"](r["REQUEST_KEY_AVERAGE_FRAME_RATE"], a);
                    }),
                    (this["setRfpsObservationCount"] = function (a) {
                      this["setField"](r["REQUEST_KEY_RFPS_COUNT"], a);
                    }),
                    (this["setRfpsTotal"] = function (a) {
                      this["setField"](r["REQUEST_KEY_RFPS_TOTAL"], a);
                    }),
                    (this["setPlatformMetadataSchema"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_SCHEMA"], a);
                    }),
                    (this["setBrowserName"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_BROWSER_NAME"], a);
                    }),
                    (this["setBrowserVersion"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_BROWSER_VERSION"], a);
                    }),
                    (this["setDeviceBrand"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_BRAND"], a);
                    }),
                    (this["setDeviceManufacturer"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_MANUFACTURER"], a);
                    }),
                    (this["setDeviceModel"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_MODEL"], a);
                    }),
                    (this["setDeviceType"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_TYPE"], a);
                    }),
                    (this["setDeviceVersion"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_VERSION"], a);
                    }),
                    (this["setFrameworkName"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_NAME"], a),
                        this["setField"](r["REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_NAME"], a);
                    }),
                    (this["setFrameworkVersion"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_VERSION"], a),
                        this["setField"](r["REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_VERSION"], a);
                    }),
                    (this["setOperatingSystemName"] = function (a) {
                      this["setInnerField"](
                        r["REQUEST_KEY_PLATFORM_METADATA"],
                        r["REQUEST_PLATFORM_METADATA_KEY_OPERATING_SYSTEM_NAME"],
                        a["toUpperCase"]()
                      );
                    }),
                    (this["setOperatingSystemVersion"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_OPERATING_SYSTEM_VERSION"], a);
                    }),
                    (this["setDeviceCategory"] = function (a) {
                      this["setInnerField"](r["REQUEST_KEY_PLATFORM_METADATA"], r["REQUEST_PLATFORM_METADATA_KEY_DEVICE_CATEGORY"], a);
                    }),
                    (this["setPlayheadTime"] = function (a) {
                      this["setField"](r["REQUEST_KEY_PLAYHEAD_TIME"], a);
                    }),
                    (this["setBufferLength"] = function (a) {
                      this["setField"](r["REQUEST_KEY_BUFFER_LENGTH"], a);
                    }),
                    (this["setStreamUrl"] = function (a) {
                      this["setField"](r["REQUEST_KEY_STREAM_URL"], a);
                    }),
                    (this["setStreamWidth"] = function (a) {
                      this["setField"](r["REQUEST_KEY_VIDEO_WIDTH"], a);
                    }),
                    (this["setStreamHeight"] = function (a) {
                      this["setField"](r["REQUEST_KEY_VIDEO_HEIGHT"], a);
                    }),
                    (this["setConnectionType"] = function (a) {
                      this["setField"](r["REQUEST_KEY_CONNECTION_TYPE"], a);
                    }),
                    (this["setLinkEncryption"] = function (a) {
                      this["setField"](r["REQUEST_KEY_LINK_ENCRYPTION"], a);
                    }),
                    (this["setIsAdSession"] = function () {
                      this["setField"](r["REQUEST_KEY_IS_AD_SESSION"], !0);
                    }),
                    (this["setSignalStrength"] = function (a) {
                      this["setField"](r["REQUEST_KEY_SIGNAL_STRENGTH"], a);
                    }),
                    (this["setModuleName"] = function (a) {
                      this["setInnerField"](r["REQUEST_PLATFORM_METADATA_KEY_CLIENT_CONFIGURATION"], r["REQUEST_PLATFORM_METADATA_KEY_MODULE_NAME"], a);
                    }),
                    (this["setModuleVersion"] = function (a) {
                      this["setInnerField"](r["REQUEST_PLATFORM_METADATA_KEY_CLIENT_CONFIGURATION"], r["REQUEST_PLATFORM_METADATA_KEY_MODULE_VERSION"], a);
                    });
                }),
                u = (b["CwsSession"] = function (
                  a,
                  b,
                  d,
                  e,
                  f,
                  g,
                  i,
                  j,
                  k,
                  l,
                  m
                ) {
                  function n(a, b, c, d, e, f, g, h, i, j, k) {
                    (this["_eventQueue"] = a),
                      (this["_client"] = b),
                      (this["_clientSettings"] = c),
                      (this["_logger"] = d),
                      this["_logger"]["setModuleName"]("CwsSession"),
                      (this["_exceptionCatcher"] = e),
                      (this["_timer"] = f),
                      (this["_gatewayControl"] = g),
                      (this["_cwsProtocol"] = h),
                      (this["_time"] = i),
                      (this["_logBuffer"] = j),
                      (this["_clientConfig"] = k);
                  }
                  var o = this;
                  (o["_heartbeatTimerCancel"] = null),
                    (o["_startTimeMs"] = 0),
                    (o["_heartbeatSequenceNumber"] = 0),
                    (o["_sessionFlags"] = r["SessionFlags"]["GLOBAL"]),
                    (o["_capabilities"] = r["Capabilities"]["INSIGHTS"]),
                    (o["_heartbeatInfos"] = []),
                    (o["_lastRequestSentMs"] = -1),
                    (o["_bitrateKbps"] = -2),
                    (o["_resource"] = null),
                    (o["_playerState"] = h["PlayerState"]["NOT_MONITORED"]),
                    (o["_encodedFrameRate"] = -1),
                    (o["_contentLengthSec"] = -1),
                    (o["_streamUrl"] = null),
                    (o["_width"] = -1),
                    (o["_height"] = -1),
                    (o["_playerStateManager"] = null),
                    (o["_assetName"] = null),
                    (o["_viewerId"] = null),
                    (o["_playerName"] = null),
                    (o["_isLive"] = null),
                    (o["_tags"] = {}),
                    (o["_browserName"] = null),
                    (o["_browserVersion"] = null),
                    (o["_deviceBrand"] = null),
                    (o["_deviceManufacturer"] = null),
                    (o["_deviceModel"] = null),
                    (o["_deviceType"] = null),
                    (o["_deviceVersion"] = null),
                    (o["_frameworkName"] = null),
                    (o["_frameworkVersion"] = null),
                    (o["_operatingSystemName"] = null),
                    (o["_operatingSystemVersion"] = null),
                    (o["_deviceCategory"] = null),
                    (o["_moduleName"] = null),
                    (o["_moduleVersion"] = null),
                    (o["_connectionType"] = null),
                    (o["_linkEncryption"] = null),
                    (o["_pauseJoin"] = !1),
                    (o["_hasJoined"] = !1),
                    (o["_cleanedUp"] = !1),
                    (o["_willEndSoon"] = !1),
                    (o["_rfpsTimerCancel"] = null),
                    (o["_rfpsTimerInterval"] = 1e3),
                    (o["_playingFpsObservationCount"] = 0),
                    (o["_playingFpsTotal"] = 0),
                    n["apply"](this, arguments),
                    (this["cleanup"] = function () {
                      (this["_clientConfig"] = null),
                        (this["_logBuffer"] = null),
                        (this["_systemSettings"] = null),
                        (this["_time"] = null),
                        (this["_cwsProtocol"] = null),
                        (this["_gatewayControl"] = null),
                        (this["_timer"] = null),
                        (this["_exceptionCatcher"] = null),
                        (this["_logger"] = null),
                        (this["_clientSettings"] = null),
                        (this["_client"] = null),
                        this["_eventQueue"]["flush"](),
                        (this["_eventQueue"] = null),
                        (this["_cleanedUp"] = !0);
                    }),
                    (this["start"] = function (a) {
                      (this["_session"] = a),
                        (this["_global"] = this["_session"]["_global"]),
                        this["_logger"]["setSessionId"](
                          this["_session"]["_id"]
                        ),
                        (this["_startTimeMs"] = this["_time"]["current"]()),
                        (this["isVideoSession"]() || this["isAdSession"]()) &&
                          (this["_sessionFlags"] += u["DEFAULT_VIDEO_SESSION_FLAGS"]);
                    }),
                    (this["willEndSoon"] = function () {
                      this["_willEndSoon"] = !0;
                    }),
                    (this["initialize"] = function () {
                      this["_logger"]["debug"]("initialize()");
                    }),
                    (this["end"] = function () {
                      (this["isVideoSession"]() || this["isAdSession"]()) &&
                        (this["_logger"]["debug"](
                          "end(): schedule the last hb before session cleanup" + o["sessionTypeTag"]()
                        ),
                        this["enqueueSessionEndEvent"]()),
                        this["cancelHeartbeatTimer"](),
                        this["sendHeartbeat"]();
                    }),
                    (this["startSendingHeartbeats"] = function () {
                      this["_willEndSoon"] ||
                        (this["sendHeartbeat"](), this["resetHeartbeatTimer"]());
                    }),
                    (this["setBrowserName"] = function (a) {
                      o["_logger"]["debug"]("setBrowserName(): " + a);
                      var b = o["_browserName"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change browserName from " + b + " to " + a
                        ),
                        (o["_browserName"] = a));
                    }),
                    (this["setBrowserVersion"] = function (a) {
                      o["_logger"]["debug"]("setBrowserVersion(): " + a);
                      var b = o["_browserVersion"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change browserVersion from " + b + " to " + a
                        ),
                        (o["_browserVersion"] = a));
                    }),
                    (this["setDeviceBrand"] = function (a) {
                      o["_logger"]["debug"]("setDeviceBrand(): " + a);
                      var b = o["_deviceBrand"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change deviceBrand from " + b + " to " + a
                        ),
                        (o["_deviceBrand"] = a));
                    }),
                    (this["setDeviceManufacturer"] = function (a) {
                      o["_logger"]["debug"]("setDeviceManufacturer(): " + a);
                      var b = o["_deviceManufacturer"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change deviceManufacturer from " + b + " to " + a
                        ),
                        (o["_deviceManufacturer"] = a));
                    }),
                    (this["setDeviceModel"] = function (a) {
                      o["_logger"]["debug"]("setDeviceModel(): " + a);
                      var b = o["_deviceModel"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change deviceModel from " + b + " to " + a
                        ),
                        (o["_deviceModel"] = a));
                    }),
                    (this["setDeviceType"] = function (a) {
                      o["_logger"]["debug"]("setDeviceBrand(): " + a);
                      var b = o["_deviceType"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change deviceType from " + b + " to " + a
                        ),
                        (o["_deviceType"] = a));
                    }),
                    (this["setDeviceVersion"] = function (a) {
                      o["_logger"]["debug"]("setDeviceVersion(): " + a);
                      var b = o["_deviceVersion"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change deviceVersion from " + b + " to " + a
                        ),
                        (o["_deviceVersion"] = a));
                    }),
                    (this["setOperatingSystemName"] = function (a) {
                      o["_logger"]["debug"]("setOperatingSystemName(): " + a);
                      var b = o["_operatingSystemName"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change operatingSystemName from " + b + " to " + a
                        ),
                        (o["_operatingSystemName"] = a));
                    }),
                    (this["setOperatingSystemVersion"] = function (a) {
                      o["_logger"]["debug"]("setOperatingSystemVersion(): " + a);
                      var b = o["_operatingSystemVersion"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change operatingSystemVersion from " + b + " to " + a
                        ),
                        (o["_operatingSystemVersion"] = a));
                    }),
                    (this["setDeviceCategory"] = function (a) {
                      o["_logger"]["debug"]("setDeviceCategory(): " + a);
                      var b = o["_deviceCategory"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change operatingSystemVersion from " + b + " to " + a
                        ),
                        (o["_deviceCategory"] = a));
                    }),
                    (this["getFrameworkName"] = function () {
                      return o["_frameworkName"];
                    }),
                    (this["setFrameworkName"] = function (a) {
                      o["_logger"]["debug"]("setFrameworkName(): " + a);
                      var b = o["_frameworkName"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change frameworkName from " + b + " to " + a
                        ),
                        (o["_frameworkName"] = a));
                    }),
                    (this["getFrameworkVersion"] = function () {
                      return o["_frameworkVersion"];
                    }),
                    (this["setFrameworkVersion"] = function (a) {
                      o["_logger"]["debug"]("setFrameworkVersion(): " + a);
                      var b = o["_frameworkVersion"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change frameworkVersion from " + b + " to " + a
                        ),
                        (o["_frameworkVersion"] = a));
                    }),
                    (this["setStreamUrl"] = function (a) {
                      o["_logger"]["debug"]("setStreamUrl(): " + a);
                      var b = o["_streamUrl"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change stream url from " + b + " to " + a
                        ),
                        (o["_streamUrl"] = a));
                    }),
                    (this["setBitrateKbps"] = function (a) {
                      o["_logger"]["debug"]("setBitrateKbps(): " + a);
                      var b = o["_bitrateKbps"];
                      b !== a &&
                        a > 0 &&
                        (o["_logger"]["info"](
                          "Change bitrate from " + b + " to " + a
                        ),
                        o["enqueueBitrateChangeEvent"](b, a),
                        (o["_bitrateKbps"] = a));
                    }),
                    (this["setResource"] = function (a) {
                      o["_logger"]["debug"]("setResource(): " + a);
                      var b = o["_resource"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["info"](
                          "Change resource from " + b + " to " + a
                        ),
                        (o["_resource"] = a));
                    }),
                    (this["setAssetName"] = function (a) {
                      o["_logger"]["debug"]("setAssetName(): " + a),
                        o["_assetName"] !== a &&
                          null != a &&
                          (o["_logger"]["info"](
                            "Change assetName from " + o["_assetName"] + " to " + a
                          ),
                          (o["_assetName"] = a));
                    }),
                    (this["setIsLive"] = function (a) {
                      o["_logger"]["debug"]("setIsLive(): " + a);
                      var b = o["_isLive"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["info"](
                          "Change isLive from " + b + " to " + a
                        ),
                        (o["_isLive"] = a));
                    }),
                    (this["setViewerId"] = function (a) {
                      o["_logger"]["debug"]("setViewerId(): " + a);
                      var b = o["_viewerId"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["info"](
                          "Change viewerId from " + b + " to " + a
                        ),
                        (o["_viewerId"] = a));
                    }),
                    (this["setPlayerName"] = function (a) {
                      o["_logger"]["debug"]("setPlayerName(): " + a);
                      var b = o["_playerName"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["info"](
                          "Change playerName from " + b + " to " + a
                        ),
                        (o["_playerName"] = a));
                    }),
                    (this["setTags"] = function (a) {
                      o["_logger"]["debug"]("setTags()");
                      var b = o["_tags"];
                      C["ObjectShallowEquals"](b, a) ||
                        null == a ||
                        (o["_logger"]["info"](
                          "Change tags from " +
                            C["ObjectToString"](b) +
                            " to " +
                            C["ObjectToString"](a)
                        ),
                        (o["_tags"] = a));
                    }),
                    (this["setEncodedFrameRate"] = function (a) {
                      o["_logger"]["debug"]("setEncodedFrameRate(): " + a),
                        (o["_encodedFrameRate"] = a);
                    }),
                    (this["setContentLength"] = function (a) {
                      o["_logger"]["debug"]("setContentLength(): " + a),
                        (o["_contentLengthSec"] = a);
                    }),
                    (this["setPlayerState"] = function (a) {
                      if (
                        (o["_logger"]["debug"]("setPlayerState(): " + a),
                        o["_hasJoined"] ||
                          a != h["PlayerState"]["PLAYING"] ||
                          (o["togglePauseJoin"](!1), (o["_hasJoined"] = !0)),
                        o["_playerState"] !== a)
                      ) {
                        var b = o["_playerState"];
                        o["_logger"]["info"](
                          "setPlayerState(): changing player state from " + b + " to " + a
                        ),
                          o["enqueuePlayerStateChangeEvent"](b, a),
                          (o["_playerState"] = a);
                      }
                    }),
                    (this["setStreamResolutionWidth"] = function (a) {
                      o["_logger"]["debug"]("setStreamResolutionWidth(): " + a);
                      var b = o["_width"];
                      b !== a &&
                        a > 0 &&
                        (o["_logger"]["debug"](
                          "Change stream resolution width from " + b + " to " + a
                        ),
                        o["enqueueResolutionWidthChangeEvent"](b, a),
                        (o["_width"] = a));
                    }),
                    (this["setStreamResolutionHeight"] = function (a) {
                      o["_logger"]["debug"]("setStreamResolutionHeight(): " + a);
                      var b = o["_height"];
                      b !== a &&
                        a > 0 &&
                        (o["_logger"]["debug"](
                          "Change stream resolution height from " + b + " to " + a
                        ),
                        o["enqueueResolutionHeightChangeEvent"](b, a),
                        (o["_height"] = a));
                    }),
                    (this["setConnectionType"] = function (a) {
                      o["_logger"]["debug"]("setConnectionType(): " + a);
                      var b = o["_connectionType"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change network connection type from " + b + " to " + a
                        ),
                        o["enqueueConnectionTypeChangeEvent"](b, a),
                        (o["_connectionType"] = a));
                    }),
                    (this["setLinkEncryption"] = function (a) {
                      o["_logger"]["debug"]("setLinkEncryption(): " + a);
                      var b = o["_linkEncryption"];
                      b !== a &&
                        null != a &&
                        (o["_logger"]["debug"](
                          "Change network link encryption from " + b + " to " + a
                        ),
                        o["enqueueLinkEncryptionChangeEvent"](b, a),
                        (o["_linkEncryption"] = a));
                    }),
                    (this["togglePauseJoin"] = function (a) {
                      if (
                        (o["_logger"]["debug"]("togglePauseJoin()"),
                        o["_pauseJoin"] === a)
                      )
                        return void o["_logger"]["debug"]("togglePauseJoin(): same value, ignoring");
                      var b = o["_pauseJoin"],
                        c = !o["_pauseJoin"];
                      o["enqueuePauseJoinChangeEvent"](b, c), (o["_pauseJoin"] = !o["_pauseJoin"]);
                    }),
                    (this["sendError"] = function (a, b) {
                      o["enqueueErrorEvent"](a, b);
                    }),
                    (this["enqueueEvent"] = function (a, b) {
                      if (
                        ((b[r["REQUEST_EVENT_KEY_TYPE"]] = a),
                        (b[r["REQUEST_EVENT_KEY_SESSION_TIME"]] = this["getSessionTime"]()),
                        (b[r["REQUEST_EVENT_KEY_SEQUENCE_NUMBER"]] = this["_eventQueue"]["getNumber"]()),
                        this["_playerStateManager"])
                      ) {
                        var c = G["Integer"](
                            this["_playerStateManager"]["getPHT"](),
                            0,
                            null,
                            -1
                          ),
                          d = G["Integer"](
                            this["_playerStateManager"]["getBufferLength"](),
                            0,
                            null,
                            -1
                          );
                        c >= 0 && (b[r["REQUEST_KEY_PLAYHEAD_TIME"]] = c),
                          d > 0 && (b[r["REQUEST_KEY_BUFFER_LENGTH"]] = d);
                      }
                      this["_eventQueue"]["enqueue"](b);
                    }),
                    (this["setPlayerStateManager"] = function (a) {
                      (o["_playerStateManager"] = a),
                        null != o["_playerStateManager"]
                          ? o["startRfpsTimer"]()
                          : o["cancelRfpsTimer"]();
                    }),
                    (this["enqueueSessionEndEvent"] = function () {
                      var a = this["getSessionTime"](),
                        b = this["getNextEventNumber"](),
                        c = this["_cwsProtocol"]["generateSessionEndEvent"](b, a);
                      this["_eventQueue"]["enqueue"](c);
                    }),
                    (this["enqueueErrorEvent"] = function (a, b) {
                      var c = {};
                      (c[r["REQUEST_ERROR_EVENT_KEY_MESSAGE"]] = a),
                        (c[r["REQUEST_ERROR_EVENT_KEY_FATAL"]] = b),
                        this["enqueueEvent"](r["EVENT_TYPE_ERROR"], c);
                    }),
                    (this["enqueueBitrateChangeEvent"] = function (a, b) {
                      var c = {},
                        d = {};
                      a > 0 && (d[r["REQUEST_KEY_BITRATE"]] = a),
                        (c[r["REQUEST_KEY_BITRATE"]] = b),
                        this["declareStateChange"](c, d);
                    }),
                    (this["enqueueSeekEvent"] = function (a, b) {
                      var c = {};
                      (c[r["REQUEST_EVENT_KEY_SEEK_ACT_TYPE"]] = a),
                        b >= 0 && (c[r["REQUEST_EVENT_KEY_SEEK_TO_POS"]] = b),
                        this["enqueueEvent"](r["EVENT_TYPE_SEEK"], c);
                    }),
                    (this["enqueueResolutionWidthChangeEvent"] = function (a, b) {
                      var c = {},
                        d = {};
                      -1 !== a && (d[r["REQUEST_KEY_VIDEO_WIDTH"]] = a),
                        (c[r["REQUEST_KEY_VIDEO_WIDTH"]] = b),
                        this["declareStateChange"](c, d);
                    }),
                    (this["enqueueResolutionHeightChangeEvent"] = function (a, b) {
                      var c = {},
                        d = {};
                      -1 !== a && (d[r["REQUEST_KEY_VIDEO_HEIGHT"]] = a),
                        (c[r["REQUEST_KEY_VIDEO_HEIGHT"]] = b),
                        this["declareStateChange"](c, d);
                    }),
                    (this["enqueueConnectionTypeChangeEvent"] = function (a, b) {
                      var c = {},
                        d = {};
                      null !== a && (d[r["REQUEST_KEY_CONNECTION_TYPE"]] = a),
                        (c[r["REQUEST_KEY_CONNECTION_TYPE"]] = b),
                        this["declareStateChange"](c, d);
                    }),
                    (this["enqueueLinkEncryptionChangeEvent"] = function (a, b) {
                      var c = {},
                        d = {};
                      null !== a && (d[r["REQUEST_KEY_LINK_ENCRYPTION"]] = a),
                        (c[r["REQUEST_KEY_LINK_ENCRYPTION"]] = b),
                        this["declareStateChange"](c, d);
                    }),
                    (this["enqueuePauseJoinChangeEvent"] = function (a, b) {
                      var c = {},
                        d = {};
                      (d[r["REQUEST_KEY_PAUSE_JOIN"]] = a),
                        (c[r["REQUEST_KEY_PAUSE_JOIN"]] = b),
                        this["declareStateChange"](c, d);
                    }),
                    (this["enqueuePlayerStateChangeEvent"] = function (a, b) {
                      var c = {},
                        d = {};
                      (c[r["REQUEST_KEY_PLAYER_STATE"]] = r["convertPlayerState"](b)),
                        (d[r["REQUEST_KEY_PLAYER_STATE"]] = r["convertPlayerState"](a)),
                        this["declareStateChange"](c, d);
                    }),
                    (this["declareStateChange"] = function (a, b) {
                      var c = {};
                      (c[r["REQUEST_STATE_CHANGE_EVENT_KEY_NEW"]] = a),
                        null != b &&
                          C["dictCount"](b) > 0 &&
                          (c[r["REQUEST_STATE_CHANGE_EVENT_KEY_OLD"]] = b),
                        this["enqueueEvent"](r["EVENT_TYPE_STATE_CHANGE"], c);
                    }),
                    (this["enqueueCustomEvent"] = function (a, b) {
                      var c = {};
                      (c[r["REQUEST_CUSTOM_EVENT_KEY_NAME"]] = a),
                        (c[r["REQUEST_CUSTOM_EVENT_KEY_ATTRIBUTES"]] = b),
                        this["enqueueEvent"](r["EVENT_TYPE_CUSTOM"], c);
                    }),
                    (this["cancelHeartbeatTimer"] = function () {
                      null != o["_heartbeatTimerCancel"] &&
                        (o["_heartbeatTimerCancel"](), (o["_heartbeatTimerCancel"] = null));
                    }),
                    (this["resetHeartbeatTimer"] = function () {
                      o["cancelHeartbeatTimer"]();
                      var a = 1e3 * o["_clientSettings"]["heartbeatInterval"];
                      o["_heartbeatTimerCancel"] = o["_timer"]["create"](
                        o["sendHeartbeat"],
                        a,
                        "Session.sendHeartbeat"
                      );
                    }),
                    (this["cancelRfpsTimer"] = function () {
                      null != o["_rfpsTimerCancel"] &&
                        (o["_rfpsTimerCancel"](), (o["_rfpsTimerCancel"] = null));
                    }),
                    (this["startRfpsTimer"] = function () {
                      o["cancelRfpsTimer"](),
                        (o["_rfpsTimerCancel"] = o["_timer"]["create"](
                          o["countRfps"],
                          o["_rfpsTimerInterval"],
                          "Session.startRfpsTimer"
                        ));
                    }),
                    (this["createHeartbeatInfo"] = function () {
                      var a = {};
                      (a["err"] = "pending"),
                        (a["seq"] = o["_heartbeatSequenceNumber"] - 1),
                        (a["sentAt"] = o["getSessionTime"]()),
                        (a["rtt"] = -1),
                        o["_heartbeatInfos"]["push"](a);
                    }),
                    (this["updateHeartbeatInfoOnFailure"] = function (a, b) {
                      for (var c = 0; c < o["_heartbeatInfos"]["length"]; c++) {
                        var d = o["_heartbeatInfos"][c],
                          e = d["seq"];
                        e === a &&
                          ((d["rtt"] = o["getSessionTime"]() - d["sentAt"]),
                          (d["err"] = b));
                      }
                    }),
                    (this["updateHeartbeatInfoOnSuccess"] = function (a) {
                      for (var b = 0; b < o["_heartbeatInfos"]["length"]; b++) {
                        var c = o["_heartbeatInfos"][b],
                          d = c["seq"];
                        d === a &&
                          ((c["rtt"] = o["getSessionTime"]() - c["sentAt"]),
                          (c["err"] = "ok"));
                      }
                    }),
                    (this["removeOutdatedHeartbeatInfos"] = function () {
                      for (
                        var a,
                          b,
                          c = o["_clientConfig"]["get"](y["CONFIG_KEY_MAX_HEARTBEAT_INFOS"]),
                          d = [],
                          e = 0;
                        e < o["_heartbeatInfos"]["length"];
                        e++
                      )
                        (b = o["_heartbeatInfos"][e]),
                          (a = b["seq"]),
                          a < o["_heartbeatSequenceNumber"] - c && d["push"](e);
                      for (
                        var f = [], g = 0;
                        g < o["_heartbeatInfos"]["length"];
                        g++
                      )
                        (b = o["_heartbeatInfos"][g]),
                          (a = b["seq"]),
                          d["indexOf"](g) < 0 &&
                            f["push"](o["_heartbeatInfos"][g]);
                      o["_heartbeatInfos"] = f;
                    }),
                    (this["compileHeartbeatInfos"] = function () {
                      o["removeOutdatedHeartbeatInfos"]();
                      for (
                        var a = [], b = 0;
                        b < o["_heartbeatInfos"]["length"];
                        b++
                      ) {
                        var c = o["_heartbeatInfos"][b],
                          d = {};
                        (d[r["REQUEST_HEARTBEAT_INFO_KEY_SEQUENCE_NUMBER"]] = c["seq"]),
                          (d[r["REQUEST_HEARTBEAT_INFO_KEY_ROUNDTRIP_TIME"]] = c["rtt"]),
                          (d[r["REQUEST_HEARTBEAT_INFO_KEY_STATUS"]] = c["err"]),
                          a["push"](d);
                      }
                      return a;
                    }),
                    (this["makeHeartbeat"] = function () {
                      var a = o["_eventQueue"]["flush"]();
                      if (o["isGlobalSession"]() && 0 === a["length"]) return null;
                      var b = new t();
                      if (
                        (b["setMessageType"](r["MESSAGE_TYPE_SESSION_HEARTBEAT"]),
                        b["setCustomerKey"](o["_clientSettings"]["customerKey"]),
                        b["setClientId"](
                          o["_clientConfig"]["get"](y["CONFIG_KEY_CLIENT_ID"])
                        ),
                        b["setSessionId"](o["_session"]["_id"]),
                        b["setSequenceNumber"](o["_heartbeatSequenceNumber"]),
                        b["setProtocolVersion"](r["version"]),
                        b["setClientVersion"](c["version"]),
                        b["setInstanceId"](o["_client"]["getId"]()),
                        b["setCapfield"](0),
                        null != o["_connectionType"] &&
                          b["setConnectionType"](o["_connectionType"]),
                        null != o["_linkEncryption"] &&
                          b["setLinkEncryption"](o["_linkEncryption"]),
                        b["setPlatformMetadataSchema"](r["SDK_METADATA_SCHEMA"]),
                        null != o["_browserName"] &&
                          b["setBrowserName"](o["_browserName"]),
                        null != o["_browserVersion"] &&
                          b["setBrowserVersion"](o["_browserVersion"]),
                        null != o["_deviceBrand"] &&
                          b["setDeviceBrand"](o["_deviceBrand"]),
                        null != o["_deviceManufacturer"] &&
                          b["setDeviceManufacturer"](o["_deviceManufacturer"]),
                        null != o["_deviceModel"] &&
                          b["setDeviceModel"](o["_deviceModel"]),
                        null != o["_deviceType"] &&
                          b["setDeviceType"](o["_deviceType"]),
                        null != o["_deviceVersion"] &&
                          b["setDeviceVersion"](o["_deviceVersion"]),
                        null != o["_frameworkName"] &&
                          b["setFrameworkName"](o["_frameworkName"]),
                        null != o["_frameworkVersion"] &&
                          b["setFrameworkVersion"](o["_frameworkVersion"]),
                        null != o["_operatingSystemName"] &&
                          b["setOperatingSystemName"](o["_operatingSystemName"]),
                        null != o["_operatingSystemVersion"] &&
                          b["setOperatingSystemVersion"](o["_operatingSystemVersion"]),
                        null != o["_deviceCategory"] &&
                          b["setDeviceCategory"](o["_deviceCategory"]),
                        null != o["_playerStateManager"] &&
                          ((o["_moduleName"] = o["_playerStateManager"]["getModuleName"]()),
                          null != o["_moduleName"] &&
                            b["setModuleName"](o["_moduleName"])),
                        null != o["_playerStateManager"] &&
                          ((o["_moduleVersion"] = o["_playerStateManager"]["getModuleVersion"]()),
                          null != o["_moduleVersion"] &&
                            b["setModuleVersion"](o["_moduleVersion"])),
                        null != o["_viewerId"] &&
                          b["setViewerId"](o["_viewerId"]),
                        C["dictCount"](o["_tags"]) > 0 &&
                          b["setTags"](o["_tags"]),
                        o["isVideoSession"]() || o["isAdSession"]())
                      ) {
                        o["isAdSession"]() && b["setIsAdSession"](),
                          null != o["_assetName"] &&
                            b["setAssetName"](o["_assetName"]),
                          b["setSessionFlags"](o["_sessionFlags"]);
                        var d = r["convertPlayerState"](o["_playerState"]);
                        b["setPlayerState"](d),
                          b["setPauseJoin"](o["_pauseJoin"]),
                          null != o["_playerName"] &&
                            b["setPlayerName"](o["_playerName"]),
                          null != o["_isLive"] &&
                            b["setIsLive"](o["_isLive"]),
                          o["_contentLengthSec"] > 0 && b["setContentLength"](o["_contentLengthSec"]),
                          o["_bitrateKbps"] > 0 && b["setBitrate"](o["_bitrateKbps"]),
                          null !== o["_resource"] &&
                            b["setResource"](o["_resource"]),
                          o["_encodedFrameRate"] > 0 && b["setEncodedFrameRate"](o["_encodedFrameRate"]);
                        var e, f, g;
                        null != o["_playerStateManager"] &&
                          ((e = G["Integer"](
                            o["_playerStateManager"]["getPHT"](),
                            0,
                            null,
                            -1
                          )),
                          (f = G["Integer"](
                            o["_playerStateManager"]["getBufferLength"](),
                            0,
                            null,
                            -1
                          )),
                          (g = o["_playerStateManager"]["getSignalStrength"]())),
                          e >= 0 && b["setPlayheadTime"](e),
                          f > 0 && b["setBufferLength"](f);
                        var h = o["updateAverageFrameRate"]();
                        h > 0 && b["setAverageFrameRate"](h),
                          o["_playingFpsTotal"] > 0 &&
                            b["setRfpsTotal"](
                              G["Integer"](o["_playingFpsTotal"], 0, null, -1)
                            ),
                          o["_playingFpsObservationCount"] > 0 &&
                            b["setRfpsObservationCount"](
                              G["Integer"](o["_playingFpsObservationCount"], 0, null, -1)
                            ),
                          0 >= g && b["setSignalStrength"](g),
                          null != o["_streamUrl"] &&
                            b["setStreamUrl"](o["_streamUrl"]),
                          o["_width"] > 0 && b["setStreamWidth"](o["_width"]),
                          o["_height"] > 0 && b["setStreamHeight"](o["_height"]);
                      } else b["setSessionFlags"](r["SessionFlags"]["GLOBAL"]);
                      if (
                        (a["length"] > 0 && b["setEvents"](a),
                        b["setCapabilities"](o["_capabilities"]),
                        b["setIsSdkClient"](!0),
                        o["_clientConfig"]["get"](y["CONFIG_KEY_SEND_LOGS"]) &&
                          b["setLogs"](o["_logBuffer"]["flush"]()),
                        o["_clientConfig"]["get"](y["CONFIG_KEY_MAX_HEARTBEAT_INFOS"]) > 0)
                      ) {
                        var i = o["compileHeartbeatInfos"]();
                        i["length"] > 0 && b["setHeartbeatInfos"](i);
                      }
                      return (
                        b["setSessionStartTime"](o["_startTimeMs"]),
                        b["setSessionTime"](o["getSessionTime"]()),
                        o["_heartbeatSequenceNumber"]++,
                        b["get"]()
                      );
                    }),
                    (this["sendHeartbeat"] = function () {
                      if (!o["_cleanedUp"]) {
                        var a = o["makeHeartbeat"]();
                        null != a && o["postHeartbeat"](a);
                      }
                    }),
                    (this["countRfps"] = function () {
                      if (o["_playerState"] === h["PlayerState"]["PLAYING"]) {
                        var a = o["_playerStateManager"]["getRenderedFrameRate"]();
                        a >= 0 && ((o["_playingFpsTotal"] += a), o["_playingFpsObservationCount"]++);
                      }
                    }),
                    (this["updateAverageFrameRate"] = function () {
                      if (o["_playerState"] === h["PlayerState"]["PLAYING"]) {
                        var a = o["_playerStateManager"]["getRenderedFrameRate"]();
                        if (a >= 0) {
                          (o["_playingFpsTotal"] += a), o["_playingFpsObservationCount"]++;
                          var b = C["Int32"]["Cast"](
                            (1 * o["_playingFpsTotal"]) / o["_playingFpsObservationCount"]
                          );
                          return b;
                        }
                        return -1;
                      }
                      return -1;
                    }),
                    (this["postHeartbeat"] = function (a) {
                      o["createHeartbeatInfo"]();
                      var b = o["_heartbeatSequenceNumber"] - 1;
                      o["_logger"]["info"](
                        "postHeartbeat(): Send HB[" + b + "]" + o["sessionTypeTag"]()
                      );
                      var c = function (a, c) {
                        o["onHeartbeatResponse"](a, c, b);
                      };
                      o["_gatewayControl"]["send"](a, c);
                    }),
                    (this["onHeartbeatResponse"] = function (a, b, c) {
                      o["_cleanedUp"] ||
                        o["_exceptionCatcher"]["runProtected"]("onHeartbeatResponse", function () {
                          if (a) {
                            var d = b;
                            if (null != d) {
                              o["_logger"]["debug"](
                                "onHeartbeatResponse(): received valid response for HB[" + c + "]"
                              ),
                                o["updateHeartbeatInfoOnSuccess"](c);
                              var e = d[r["RESPONSE_KEY_CLIENT_ID"]];
                              null != e &&
                                e !=
                                  o["_clientConfig"]["get"](y["CONFIG_KEY_CLIENT_ID"]) &&
                                (o["_logger"]["debug"](
                                  "onHeartbeatResponse(): setting the client id to " + e + " (from gateway)"
                                ),
                                o["_clientConfig"]["set"](y["CONFIG_KEY_CLIENT_ID"], e),
                                o["_clientConfig"]["save"]());
                              var f = d[r["RESPONSE_KEY_STATUS"]];
                              null != f &&
                                f != r["RESPONSE_STATUS_NO_ERRORS"] &&
                                o["_logger"]["error"]("onHeartbeatResponse(): error from gateway: " + f);
                              var g = d[r["RESPONSE_KEY_CONFIG"]];
                              if ("object" == typeof g) {
                                var h = g[r["RESPONSE_CONFIG_KEY_MAX_HEARTBEAT_INFOS"]];
                                null != h &&
                                  o["_clientConfig"]["get"](y["CONFIG_KEY_MAX_HEARTBEAT_INFOS"]) !==
                                    h &&
                                  (o["_logger"]["debug"](
                                    "onHeartbeatResponse(): setting Maximum Heartbeat Infos to " + h + " (from gateway)"
                                  ),
                                  o["_clientConfig"]["set"](
                                    y["CONFIG_KEY_MAX_HEARTBEAT_INFOS"],
                                    h
                                  ));
                                var i = g[r["RESPONSE_CONFIG_KEY_SEND_LOGS"]],
                                  j = null != i ? C["AsBoolean"](i) : !1;
                                j !==
                                  o["_clientConfig"]["get"](y["CONFIG_KEY_SEND_LOGS"]) &&
                                  (o["_logger"]["debug"](
                                    "onHeartbeatResponse(): turning " +
                                      (j ? "on" : "off") +
                                      " sending of logs"
                                  ),
                                  o["_clientConfig"]["set"](
                                    y["CONFIG_KEY_SEND_LOGS"],
                                    j
                                  ));
                                var k = g[r["RESPONSE_CONFIG_KEY_HEARTBEAT_INTERVAL"]];
                                if (null != k) {
                                  var l = C["Int32"]["Cast"](k),
                                    m = l;
                                  m != o["_clientSettings"]["heartbeatInterval"] &&
                                    (o["_logger"]["debug"](
                                      "onHeartbeatResponse(): received hbIntervalMs from gateway: " + m
                                    ),
                                    (o["_clientSettings"]["heartbeatInterval"] = m),
                                    null != o["_heartbeatTimerCancel"] && o["resetHeartbeatTimer"]());
                                }
                                var n = g[r["RESPONSE_CONFIG_KEY_GATEWAY_URL"]];
                                null != n &&
                                  n != o["_clientSettings"]["gatewayUrl"] &&
                                  (o["_logger"]["debug"]("onHeartbeatResponse(): received gatewayUrl from gateway: " + n),
                                  (o["_clientSettings"]["gatewayUrl"] = n));
                              }
                            } else o["_logger"]["warning"]("onHeartbeatResponse(): decoded heartbeat response is null.");
                          } else {
                            var p = b;
                            C["isValidString"](p)
                              ? C["stringStartsWith"](p, "HTTP timeout")
                                ? o["_logger"]["warning"]("onHeartbeatResponse(): " + p)
                                : o["_logger"]["error"]("onHeartbeatResponse(): failed to send heartbeat: " + p)
                              : ((p = v["DEFAULT_HEARTBEAT_ERROR_MESSAGE"]),
                                o["_logger"]["error"]("onHeartbeatResponse(): " + p)),
                              o["updateHeartbeatInfoOnFailure"](c, p);
                          }
                        });
                    }),
                    (this["getSessionTime"] = function () {
                      var a = C["Int32"]["Cast"](
                        o["_time"]["current"]() - o["_startTimeMs"]
                      );
                      return a;
                    }),
                    (this["getNextEventNumber"] = function () {
                      return this["_eventQueue"]["getNumber"]();
                    }),
                    (this["sessionTypeTag"] = function () {
                      return this["isGlobalSession"]() ? " (global session)" : "";
                    }),
                    (this["isGlobalSession"] = function () {
                      return this["_global"] == u["SESSION_TYPE"]["GLOBAL"];
                    }),
                    (this["isVideoSession"] = function () {
                      return this["_global"] == u["SESSION_TYPE"]["VIDEO"];
                    }),
                    (this["isAdSession"] = function () {
                      return this["_global"] == u["SESSION_TYPE"]["AD"];
                    });
                });
              (u["DEFAULT_VIDEO_SESSION_FLAGS"] =
                r["SessionFlags"]["VIDEO"] +
                r["SessionFlags"]["QUALITY_METRICS"] +
                r["SessionFlags"]["BITRATE_METRICS"]),
                (u["SESSION_TYPE"] = {
                  VIDEO: "Video",
                  GLOBAL: "Global",
                  AD: "Ad",
                });
              var v =
                ((b["IMonitor"] = function () {
                  (this["onPlayerStateChange"] = function (a) {}),
                    (this["onBitrateChange"] = function (a) {}),
                    (this["onSeekEvent"] = function (a, b) {}),
                    (this["onEncodedFrameRateChange"] = function (a) {}),
                    (this["onRenderedFrameRateChange"] = function (a) {}),
                    (this["onContentLengthChange"] = function (a) {}),
                    (this["onPlayheadTimeChange"] = function (a) {}),
                    (this["onStreamUrlChange"] = function (a) {}),
                    (this["onBufferLengthChange"] = function (a) {}),
                    (this["onPlayerTypeChange"] = function (a) {}),
                    (this["onPlayerVersionChange"] = function (a) {}),
                    (this["onStreamResolutionWidthChange"] = function (a) {}),
                    (this["onStreamResolutionHeightChange"] = function (a) {}),
                    (this["onConnectionTypeChange"] = function (a) {}),
                    (this["onLinkEncryptionChange"] = function (a) {}),
                    (this["onSignalStrengthChange"] = function (a) {}),
                    (this["onError"] = function (a, b) {}),
                    (this["onRelease"] = function () {});
                }),
                (b["Session"] = function () {
                  function b(a, b, c, d, e, f, g, h) {
                    (this["_id"] = a),
                      (this["_global"] = b),
                      (this["_contentMetadata"] = c),
                      (this["_clientConfig"] = d),
                      (this["_systemMetadata"] = e),
                      (this[_x8302[1e3]] = f),
                      (this["_exceptionCatcher"] = g),
                      (this["_logger"] = h),
                      this["_logger"]["setModuleName"]("Session"),
                      this["_logger"]["setSessionId"](
                        C["ToString"](this["_id"])
                      );
                  }
                  var c = this;
                  (c["_contentMetadata"] = null),
                    (c["_playerStateManager"] = null),
                    (c["_id"] = 0),
                    (c["_global"] = u["SESSION_TYPE"]["VIDEO"]),
                    (c["_cleaningUp"] = !1),
                    (c["_cleanedUp"] = !1),
                    (c["_adPlaying"] = !1),
                    (c["_adStream"] = null),
                    (c["_adPlayer"] = null),
                    (c["_adPosition"] = null),
                    (c["_ignorePlayerState"] = !1),
                    (c["_pooledPlayerState"] = h["PlayerState"]["NOT_MONITORED"]),
                    (c["_ignoreBitrateAndResource"] = !1),
                    (c["_ignorePlayheadTimeandBufferLength"] = !1),
                    (c["_ignoreEncodedFrameRateAndDuration"] = !1),
                    (c["_ignoreError"] = !1),
                    b["apply"](c, arguments),
                    (this["start"] = function () {
                      if (
                        (c["isVideoSession"]() || c["isAdSession"]()
                          ? c["_logger"]["info"](
                              "start(): assetName=" + c["_contentMetadata"]["assetName"]
                            )
                          : c["_logger"]["info"](
                              "start()" + c["sessionTypeTag"]()
                            ),
                        c[_x8302[1e3]]["start"](this),
                        c["_clientConfig"]["isReady"]())
                      )
                        c["initiateSession"]();
                      else {
                        var a = function () {
                          c["initiateSession"]();
                        };
                        c["_clientConfig"]["register"](a);
                      }
                    }),
                    (this["cleanup"] = function () {
                      if (
                        (c["_logger"]["info"](
                          "cleanup()" + c["sessionTypeTag"]()
                        ),
                        (c["_cleaningUp"] = !0),
                        c[_x8302[1e3]]["willEndSoon"](),
                        c["_clientConfig"]["isReady"]())
                      )
                        c["endCwsSessionAndCleanupAll"]();
                      else {
                        var a = function () {
                          c["endCwsSessionAndCleanupAll"]();
                        };
                        c["_clientConfig"]["register"](a);
                      }
                    }),
                    (this["cleanupAll"] = function () {
                      c["_logger"]["debug"](
                        "cleanupAll()" + c["sessionTypeTag"]()
                      ),
                        (c["isVideoSession"]() || c["isAdSession"]()) &&
                          null != c["_playerStateManager"] &&
                          c["detachPlayer"](),
                        (c["_contentMetadata"] = null),
                        c["_logger"]["setSessionId"](null),
                        (c["_logger"] = null),
                        (c["_exceptionCatcher"] = null),
                        (c["_client"] = null),
                        (c["_clientConfig"] = null),
                        (c["_systemMetadata"] = null),
                        c[_x8302[1e3]]["cleanup"](),
                        (c[_x8302[1e3]] = null),
                        (c["_cleanedUp"] = !0);
                    }),
                    (this["endCwsSessionAndCleanupAll"] = function () {
                      c[_x8302[1e3]]["end"](), c["cleanupAll"]();
                    }),
                    (this["initiateSession"] = function () {
                      c[_x8302[1e3]]["initialize"](),
                        c["setStatesFromSystemMetadata"](),
                        (c["isVideoSession"]() || c["isAdSession"]()) &&
                          (c["setStatesFromContentMetadata"](), c["enqueueEventForContentMetadata"]()),
                        c[_x8302[1e3]]["startSendingHeartbeats"]();
                    }),
                    (this["enqueueEventForContentMetadata"] = function () {
                      var b = {};
                      if (
                        (null != c["_contentMetadata"]["assetName"]
                          ? (b[r["REQUEST_KEY_ASSET_NAME"]] = c["_contentMetadata"]["assetName"])
                          : c["_logger"]["warning"]("enqueueEventForContentMetadata(): assetName was not set."),
                        null != c["_contentMetadata"]["applicationName"]
                          ? ("undefined" == typeof b[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] &&
                              (b[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] = {}),
                            (b[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]][r["REQUEST_KEY_PLAYER_NAME"]] =
                              c["_contentMetadata"]["applicationName"]))
                          : c["_logger"]["warning"]("enqueueEventForContentMetadata(): applicationName was not set."),
                        null != c["_contentMetadata"]["streamUrl"]
                          ? (b[r["REQUEST_KEY_STREAM_URL"]] = c["_contentMetadata"]["streamUrl"])
                          : c["_logger"]["warning"]("enqueueEventForContentMetadata(): streamUrl was not set."),
                        null != c["_contentMetadata"]["viewerId"]
                          ? ("undefined" == typeof b[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] &&
                              (b[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] = {}),
                            (b[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]][r["REQUEST_KEY_VIEWER_ID"]] =
                              c["_contentMetadata"]["viewerId"]))
                          : c["_logger"]["warning"]("enqueueEventForContentMetadata(): viewerId was not set."),
                        null != c["_contentMetadata"]["defaultResource"]
                          ? (b[r["REQUEST_KEY_RESOURCE"]] = c["_contentMetadata"]["defaultResource"])
                          : c["_logger"]["warning"]("enqueueEventForContentMetadata(): defaultResource was not set."),
                        c["_contentMetadata"]["duration"] > -1
                          ? (b[r["REQUEST_KEY_CONTENT_LENGTH"]] = c["_contentMetadata"]["duration"])
                          : c["_logger"]["warning"]("enqueueEventForContentMetadata(): duration was not set."),
                        c["_contentMetadata"]["encodedFrameRate"] > -1
                          ? (b[r["REQUEST_KEY_ENCODED_FRAME_RATE"]] = c["_contentMetadata"]["encodedFrameRate"])
                          : c["_logger"]["warning"]("enqueueEventForContentMetadata(): encodedFrameRate was not set."),
                        c["_contentMetadata"]["streamType"] !=
                        e["StreamType"]["UNKNOWN"]
                          ? c["_contentMetadata"]["streamType"] ==
                            a["ContentMetadata"]["StreamType"]["LIVE"]
                            ? (b[r["REQUEST_KEY_IS_LIVE"]] = !0)
                            : (b[r["REQUEST_KEY_IS_LIVE"]] = !1)
                          : c["_logger"]["warning"]("enqueueEventForContentMetadata(): streamType was not set."),
                        C["dictCount"](c["_contentMetadata"]["custom"]) > 0)
                      ) {
                        b[r["REQUEST_KEY_TAGS"]] = {};
                        for (var d in c["_contentMetadata"]["custom"])
                          b[r["REQUEST_KEY_TAGS"]][d] = c["_contentMetadata"]["custom"][d];
                      } else c["_logger"]["warning"]("enqueueEventForContentMetadata(): custom tags were not set.");
                      C["dictCount"](b) > 0 &&
                        c[_x8302[1e3]]["declareStateChange"](b, null);
                    }),
                    (this["setStatesFromSystemMetadata"] = function () {
                      c["_logger"]["debug"]("setStatesFromSystemMetadata()");
                      var a = c["_systemMetadata"]["get"](),
                        b = a[K["BROWSER_NAME"]];
                      null != b && c[_x8302[1e3]]["setBrowserName"](b);
                      var d = a[K["BROWSER_VERSION"]];
                      null != d && c[_x8302[1e3]]["setBrowserVersion"](d);
                      var e = a[K["DEVICE_BRAND"]];
                      null != e && c[_x8302[1e3]]["setDeviceBrand"](e);
                      var f = a[K["DEVICE_MANUFACTURER"]];
                      null != f && c[_x8302[1e3]]["setDeviceManufacturer"](f);
                      var g = a[K["DEVICE_MODEL"]];
                      null != g && c[_x8302[1e3]]["setDeviceModel"](g);
                      var h = a[K["DEVICE_TYPE"]];
                      null != h && c[_x8302[1e3]]["setDeviceType"](h);
                      var i = a[K["DEVICE_VERSION"]];
                      null != i && c[_x8302[1e3]]["setDeviceVersion"](i);
                      var j = a[K["FRAMEWORK_NAME"]];
                      null != j && c[_x8302[1e3]]["setFrameworkName"](j);
                      var k = a[K["FRAMEWORK_VERSION"]];
                      null != k && c[_x8302[1e3]]["setFrameworkVersion"](k);
                      var l = a[K["OPERATING_SYSTEM_NAME"]];
                      null != l && c[_x8302[1e3]]["setOperatingSystemName"](l);
                      var m = a[K["OPERATING_SYSTEM_VERSION"]];
                      null != m && c[_x8302[1e3]]["setOperatingSystemVersion"](m);
                      var n = a[K["DEVICE_CATEGORY"]];
                      null != n && c[_x8302[1e3]]["setDeviceCategory"](n);
                    }),
                    (this["setStatesFromContentMetadata"] = function () {
                      if (
                        (c["_logger"]["debug"]("setStatesFromContentMetadata()"),
                        null != c["_contentMetadata"]["defaultResource"] &&
                          c[_x8302[1e3]]["setResource"](
                            c["_contentMetadata"]["defaultResource"]
                          ),
                        null != c["_contentMetadata"]["streamUrl"] &&
                          c[_x8302[1e3]]["setStreamUrl"](
                            c["_contentMetadata"]["streamUrl"]
                          ),
                        c["_contentMetadata"]["duration"] > 0 &&
                          c[_x8302[1e3]]["setContentLength"](
                            c["_contentMetadata"]["duration"]
                          ),
                        c["_contentMetadata"]["encodedFrameRate"] > 0 &&
                          c[_x8302[1e3]]["setEncodedFrameRate"](
                            c["_contentMetadata"]["encodedFrameRate"]
                          ),
                        c["_contentMetadata"]["streamType"] !==
                          e["StreamType"]["UNKNOWN"])
                      ) {
                        var a =
                          c["_contentMetadata"]["streamType"] ===
                          e["StreamType"]["LIVE"];
                        c[_x8302[1e3]]["setIsLive"](a);
                      }
                      null != c["_contentMetadata"]["assetName"] &&
                        c[_x8302[1e3]]["setAssetName"](
                          c["_contentMetadata"]["assetName"]
                        ),
                        null != c["_contentMetadata"]["viewerId"] &&
                          c[_x8302[1e3]]["setViewerId"](
                            c["_contentMetadata"]["viewerId"]
                          ),
                        null != c["_contentMetadata"]["applicationName"] &&
                          c[_x8302[1e3]]["setPlayerName"](
                            c["_contentMetadata"]["applicationName"]
                          ),
                        C["dictCount"](c["_contentMetadata"]["custom"]) > 0 &&
                          c[_x8302[1e3]]["setTags"](
                            c["_contentMetadata"]["custom"]
                          );
                    }),
                    (this["onPlayerStateChange"] = function (a) {
                      return (
                        c["_logger"]["debug"]("onPlayerStateChange(): " + a),
                        c[_x8302[1e3]]["_playerState"] != a
                          ? (c[_x8302[1e3]]["_playerState"] ==
                              h["PlayerState"]["NOT_MONITORED"] &&
                              a != h["PlayerState"]["NOT_MONITORED"] &&
                              (c["_pooledPlayerState"] = a),
                            c["_ignorePlayerState"]
                              ? void c["_logger"]["debug"](
                                  "onPlayerStateChange(): " +
                                    a +
                                    " (pooled, " +
                                    (c["_adPlaying"]
                                      ? "ad playing"
                                      : "preloading") +
                                    ")"
                                )
                              : void c[_x8302[1e3]]["setPlayerState"](a))
                          : void 0
                      );
                    }),
                    (this["onBitrateChange"] = function (a) {
                      return (
                        c["_logger"]["debug"]("onBitrateChange(): " + a),
                        c["_ignoreBitrateAndResource"]
                          ? void c["_logger"]["info"]("onBitrateChange(): ignored")
                          : void c[_x8302[1e3]]["setBitrateKbps"](a)
                      );
                    }),
                    (this["onSeekEvent"] = function (a, b) {
                      null == b ||
                        C["isInteger"](b) ||
                        (c["_logger"]["error"]("onSeekEvent(): Ignored non-integer seekToPosition data: " + b),
                        (b = -1)),
                        c[_x8302[1e3]]["enqueueSeekEvent"](a, b);
                    }),
                    (this["onEncodedFrameRateChange"] = function (a) {
                      c["_logger"]["debug"]("onEncodedFrameRateChange(): " + a),
                        c["_contentMetadata"]["encodedFrameRate"] > 0 ||
                          (a > 0
                            ? c["_ignoreEncodedFrameRateAndDuration"]
                              ? c["_logger"]["info"](
                                  "onEncodedFrameRateChange(): Ignored encoded frame rate data: " + a + " (ads)"
                                )
                              : (c[_x8302[1e3]]["setEncodedFrameRate"](a),
                                c["_logger"]["info"]("onEncodedFrameRateChange(): Received encoded frame rate data: " + a))
                            : c["_logger"]["warning"]("onEncodedFrameRateChange(): Ignored invalid encoded frame rate data: " + a));
                    }),
                    (this["onContentLengthChange"] = function (a) {
                      c["_logger"]["debug"]("onContentLengthChange(): " + a),
                        c["_contentMetadata"]["duration"] > 0 ||
                          (a > 0
                            ? c["_ignoreEncodedFrameRateAndDuration"]
                              ? c["_logger"]["info"](
                                  "setContentLength(): Ignored content length data: " + a + " (ads)"
                                )
                              : (c[_x8302[1e3]]["setContentLength"](a),
                                c["_logger"]["info"]("setContentLength(): Received content length data: " + a))
                            : c["_logger"]["warning"]("setContentLength(): Ignored invalid content length data: " + a));
                    }),
                    (this["onStreamUrlChange"] = function (a) {
                      c["_logger"]["debug"]("onStreamUrlChange(): " + a),
                        null == c["_contentMetadata"]["streamUrl"] &&
                          c[_x8302[1e3]]["setStreamUrl"](a);
                    }),
                    (this["onStreamResolutionWidthChange"] = function (a) {
                      c["_logger"]["debug"]("onStreamResolutionWidthChange(): " + a),
                        c[_x8302[1e3]]["setStreamResolutionWidth"](a);
                    }),
                    (this["onStreamResolutionHeightChange"] = function (a) {
                      c["_logger"]["debug"]("onStreamResolutionHeightChange(): " + a),
                        c[_x8302[1e3]]["setStreamResolutionHeight"](a);
                    }),
                    (this["onConnectionTypeChange"] = function (a) {
                      c["_logger"]["debug"]("onConnectionTypeChange(): " + a),
                        c[_x8302[1e3]]["setConnectionType"](a);
                    }),
                    (this["onLinkEncryptionChange"] = function (a) {
                      c["_logger"]["debug"]("onLinkEncryptionChange(): " + a),
                        c[_x8302[1e3]]["setLinkEncryption"](a);
                    }),
                    (this["onPlayerTypeChange"] = function (a) {
                      c["_logger"]["debug"]("onPlayerTypeChange(): " + a),
                        null == c[_x8302[1e3]]["getFrameworkName"]() &&
                          c[_x8302[1e3]]["setFrameworkName"](a);
                    }),
                    (this["onPlayerVersionChange"] = function (a) {
                      c["_logger"]["debug"]("onPlayerVersionChange(): " + a),
                        null == c[_x8302[1e3]]["getFrameworkVersion"]() &&
                          c[_x8302[1e3]]["setFrameworkVersion"](a);
                    }),
                    (this["onError"] = function (a, b) {
                      c["_logger"]["debug"](
                        "onError(): " + a + " (" + b + ")"
                      ),
                        c["reportError"](a, b);
                    }),
                    (this["onRelease"] = function () {
                      c["_logger"]["debug"]("onRelease()"),
                        c["detachPlayer"]();
                    }),
                    (this["adStart"] = function (b, d, e) {
                      return (
                        c["_logger"]["debug"](
                          "adStart(): adStream=" + b + " adPlayer=" + d + " adPosition=" + e
                        ),
                        c["_adPlaying"]
                          ? void c["_logger"]["warning"]("adStart(): multiple adStart calls, ignoring")
                          : ((c["_adPlaying"] = !0),
                            (c["_adStream"] = b),
                            (c["_adPlayer"] = d),
                            (c["_adPosition"] = e),
                            c[_x8302[1e3]]["_hasJoined"] ||
                              c[_x8302[1e3]]["togglePauseJoin"](!0),
                            void (c["_adStream"] ==
                              a["Client"]["AdStream"]["CONTENT"] ||
                            c["_adPlayer"] ==
                              a["Client"]["AdPlayer"]["SEPARATE"]
                              ? (c[_x8302[1e3]]["_playerState"] !==
                                  h["PlayerState"]["NOT_MONITORED"] &&
                                  (c["_pooledPlayerState"] =
                                    c[_x8302[1e3]]["_playerState"]),
                                c[_x8302[1e3]]["setPlayerState"](
                                  h["PlayerState"]["NOT_MONITORED"]
                                ),
                                (c["_ignorePlayerState"] = !0))
                              : c["_adStream"] ==
                                  a["Client"]["AdStream"]["SEPARATE"] &&
                                c["_adPlayer"] ==
                                  a["Client"]["AdPlayer"]["CONTENT"] &&
                                (c[_x8302[1e3]]["_playerState"] !==
                                  h["PlayerState"]["NOT_MONITORED"] &&
                                  (c["_pooledPlayerState"] =
                                    c[_x8302[1e3]]["_playerState"]),
                                c[_x8302[1e3]]["setPlayerState"](
                                  h["PlayerState"]["NOT_MONITORED"]
                                ),
                                (c["_ignorePlayerState"] = !0),
                                (c["_ignoreBitrateAndResource"] = !0),
                                (c["_ignoreEncodedFrameRateAndDuration"] = !0),
                                (c["_ignorePlayheadTimeandBufferLength"] = !0),
                                (c["_ignoreError"] = !0))))
                      );
                    }),
                    (this["adEnd"] = function () {
                      return (
                        c["_logger"]["debug"]("adEnd()"),
                        c["_adPlaying"]
                          ? (c[_x8302[1e3]]["_hasJoined"] ||
                              c[_x8302[1e3]]["togglePauseJoin"](!1),
                            c["_adStream"] ==
                              a["Client"]["AdStream"]["CONTENT"] ||
                            c["_adPlayer"] ==
                              a["Client"]["AdPlayer"]["SEPARATE"]
                              ? c["_preloading"] ||
                                ((c["_ignorePlayerState"] = !1),
                                c[_x8302[1e3]]["setPlayerState"](c["_pooledPlayerState"]))
                              : c["_adStream"] ==
                                  a["Client"]["AdStream"]["SEPARATE"] &&
                                c["_adPlayer"] ==
                                  a["Client"]["AdPlayer"]["CONTENT"] &&
                                ((c["_ignoreBitrateAndResource"] = !1),
                                (c["_ignoreEncodedFrameRateAndDuration"] = !1),
                                (c["_ignorePlayheadTimeandBufferLength"] = !1),
                                (c["_ignoreError"] = !1),
                                c["_preloading"] ||
                                  ((c["_ignorePlayerState"] = !1),
                                  c[_x8302[1e3]]["setPlayerState"](
                                    c["_pooledPlayerState"]
                                  ))),
                            (c["_adPlaying"] = !1),
                            void (c["_adStream"] = c["_adPlayer"] = c[
                              "_adPosition"
                            ] = null))
                          : void c["_logger"]["debug"]("adEnd(): called before adStart, ignoring")
                      );
                    }),
                    (this["detachPlayer"] = function () {
                      c["_logger"]["debug"]("detachPlayer()"),
                        null !== c["_playerStateManager"] &&
                          (c["_exceptionCatcher"]["runProtected"]("Session.detachPlayer", function () {
                            c["_playerStateManager"]["removeMonitoringNotifier"]();
                          }),
                          (c["_playerStateManager"] = null),
                          c[_x8302[1e3]]["setPlayerStateManager"](null),
                          c[_x8302[1e3]]["setPlayerState"](
                            h["PlayerState"]["NOT_MONITORED"]
                          ));
                    }),
                    (this["attachPlayer"] = function (a) {
                      return (
                        c["_logger"]["debug"]("attachPlayer()"),
                        null != c["_playerStateManager"]
                          ? void c["_logger"]["error"]("attachPlayer(): detach current PlayerStateManager first")
                          : void c["_exceptionCatcher"]["runProtected"](
                              "Session.attachPlayer()",
                              function () {
                                a["setMonitoringNotifier"](c, c["_id"])
                                  ? (a["pushCurrentState"](),
                                    (c["_playerStateManager"] = a),
                                    c[_x8302[1e3]]["setPlayerStateManager"](c["_playerStateManager"]))
                                  : c["_logger"]["error"]("attachPlayer(): instance of PlayerStateManager is already attached to a session");
                              }
                            )
                      );
                    }),
                    (this["getPlayerStateManager"] = function () {
                      return (
                        c["_logger"]["debug"]("getPlayerStateManager()"), c["_playerStateManager"]
                      );
                    }),
                    (this["contentPreload"] = function () {
                      return (
                        c["_logger"]["debug"]("contentPreload()"),
                        c["_preloading"]
                          ? void c["_logger"]["debug"]("contentPreload(): called twice, ignoring")
                          : ((c["_preloading"] = !0),
                            void (c["_ignorePlayerState"] = !0))
                      );
                    }),
                    (this["contentStart"] = function () {
                      return (
                        c["_logger"]["debug"]("contentStart()"),
                        c["_preloading"]
                          ? ((c["_preloading"] = !1),
                            void (
                              c["_adPlaying"] ||
                              ((c["_ignorePlayerState"] = !1),
                              c[_x8302[1e3]]["setPlayerState"](c["_pooledPlayerState"]))
                            ))
                          : void c["_logger"]["warning"]("contentStart(): called without contentPreload, ignoring")
                      );
                    }),
                    (this["reportError"] = function (b, d) {
                      if (
                        (c["_logger"]["info"]("reportError(): " + b),
                        !C["isValidString"](b))
                      )
                        return void c["_logger"]["error"]("reportError(): invalid error message string: " + b);
                      if (
                        d !== a["Client"]["ErrorSeverity"]["FATAL"] &&
                        d !== a["Client"]["ErrorSeverity"]["WARNING"]
                      )
                        return void c["_logger"]["error"]("reportError(): invalid error severity: " + d);
                      if (c["_ignoreError"])
                        return void c["_logger"]["debug"]("reportError(): ignored");
                      var e = d === a["Client"]["ErrorSeverity"]["FATAL"];
                      c[_x8302[1e3]]["sendError"](b, e);
                    }),
                    (this["updateContentMetadata"] = function (a) {
                      c["_logger"]["debug"]("updateContentMetadata(): enter"),
                        c["_exceptionCatcher"]["runProtected"]("Session.updateContentMetadata", function () {
                          c["mergeContentMetadata"](a), c["setStatesFromContentMetadata"]();
                        });
                    }),
                    (this["sendCustomEvent"] = function (a, b) {
                      c["_logger"]["info"](
                        "sendEvent(): eventName=" + a + c["sessionTypeTag"]()
                      ),
                        c[_x8302[1e3]]["enqueueCustomEvent"](a, b);
                    }),
                    (this["mergeContentMetadata"] = function (b) {
                      var d = {},
                        f = {};
                      if (
                        (C["isValidString"](b["assetName"]) &&
                          (c["_contentMetadata"]["assetName"] != b["assetName"]
                            ? (null != c["_contentMetadata"]["assetName"] &&
                                (d[r["REQUEST_KEY_ASSET_NAME"]] =
                                  c["_contentMetadata"]["assetName"]),
                              (f[r["REQUEST_KEY_ASSET_NAME"]] = b["assetName"]),
                              (c["_contentMetadata"]["assetName"] = b["assetName"]))
                            : c["_logger"]["warning"]("mergeContentMetadata(): assetName was not changed.")),
                        C["isValidString"](b["applicationName"]) &&
                          (c["_contentMetadata"]["applicationName"] != b["applicationName"]
                            ? (null != c["_contentMetadata"]["applicationName"] &&
                                ("undefined" == typeof d[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] &&
                                  (d[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] = {}),
                                (d[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]][r["REQUEST_KEY_PLAYER_NAME"]] =
                                  c["_contentMetadata"]["applicationName"])),
                              "undefined" == typeof f[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] &&
                                (f[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] = {}),
                              (f[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]][r["REQUEST_KEY_PLAYER_NAME"]] =
                                b["applicationName"]),
                              (c["_contentMetadata"]["applicationName"] = b["applicationName"]))
                            : c["_logger"]["warning"]("mergeContentMetadata(): applicationName was not changed.")),
                        C["isValidString"](b["streamUrl"]) &&
                          (c["_contentMetadata"]["streamUrl"] != b["streamUrl"]
                            ? (null != c["_contentMetadata"]["streamUrl"] &&
                                (d[r["REQUEST_KEY_STREAM_URL"]] =
                                  c["_contentMetadata"]["streamUrl"]),
                              (f[r["REQUEST_KEY_STREAM_URL"]] = b["streamUrl"]),
                              (c["_contentMetadata"]["streamUrl"] = b["streamUrl"]))
                            : c["_logger"]["warning"]("mergeContentMetadata(): streamUrl was not changed.")),
                        C["isValidString"](b["viewerId"]) &&
                          (c["_contentMetadata"]["viewerId"] != b["viewerId"]
                            ? (null != c["_contentMetadata"]["viewerId"] &&
                                ("undefined" == typeof d[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] &&
                                  (d[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] = {}),
                                (d[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]][r["REQUEST_KEY_VIEWER_ID"]] =
                                  c["_contentMetadata"]["viewerId"])),
                              "undefined" == typeof f[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] &&
                                (f[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]] = {}),
                              (f[r["REQUEST_KEY_STREAM_METADATA_CHANGE"]][r["REQUEST_KEY_VIEWER_ID"]] =
                                b["viewerId"]),
                              (c["_contentMetadata"]["viewerId"] = b["viewerId"]))
                            : c["_logger"]["warning"]("mergeContentMetadata(): viewerId was not changed.")),
                        C["isValidString"](b["defaultResource"]) &&
                          (c["_contentMetadata"]["defaultResource"] != b["defaultResource"]
                            ? (null != c["_contentMetadata"]["defaultResource"] &&
                                (d[r["REQUEST_KEY_RESOURCE"]] =
                                  c["_contentMetadata"]["defaultResource"]),
                              (f[r["REQUEST_KEY_RESOURCE"]] = b["defaultResource"]),
                              (c["_contentMetadata"]["defaultResource"] = b["defaultResource"]))
                            : c["_logger"]["warning"]("mergeContentMetadata(): defaultResource was not changed.")),
                        C["isInteger"](b["duration"]) &&
                          b["duration"] > 0 &&
                          (c["_contentMetadata"]["duration"] != b["duration"]
                            ? (c[_x8302[1e3]]["_contentLengthSec"] > 0 &&
                                (d[r["REQUEST_KEY_CONTENT_LENGTH"]] =
                                  c[_x8302[1e3]]["_contentLengthSec"]),
                              (f[r["REQUEST_KEY_CONTENT_LENGTH"]] = b["duration"]),
                              (c["_contentMetadata"]["duration"] = b["duration"]))
                            : c["_logger"]["warning"]("mergeContentMetadata(): duration was not changed.")),
                        C["isInteger"](b["encodedFrameRate"]) &&
                          b["encodedFrameRate"] > 0 &&
                          (c["_contentMetadata"]["encodedFrameRate"] != b["encodedFrameRate"]
                            ? (c["_contentMetadata"]["encodedFrameRate"] > -1 &&
                                (d[r["REQUEST_KEY_ENCODED_FRAME_RATE"]] =
                                  c["_contentMetadata"]["encodedFrameRate"]),
                              (f[r["REQUEST_KEY_ENCODED_FRAME_RATE"]] = b["encodedFrameRate"]),
                              (c["_contentMetadata"]["encodedFrameRate"] = b["encodedFrameRate"]))
                            : c["_logger"]["warning"]("mergeContentMetadata(): encodedFrameRate was not changed.")),
                        b["streamType"] != e["StreamType"]["UNKNOWN"] &&
                          (c["_contentMetadata"]["streamType"] != b["streamType"]
                            ? (c["_contentMetadata"]["streamType"] !=
                                e["StreamType"]["UNKNOWN"] &&
                                (c["_contentMetadata"]["streamType"] ==
                                a["ContentMetadata"]["StreamType"]["LIVE"]
                                  ? (d[r["REQUEST_KEY_IS_LIVE"]] = !0)
                                  : (d[r["REQUEST_KEY_IS_LIVE"]] = !1)),
                              b["streamType"] ==
                              a["ContentMetadata"]["StreamType"]["LIVE"]
                                ? (f[r["REQUEST_KEY_IS_LIVE"]] = !0)
                                : (f[r["REQUEST_KEY_IS_LIVE"]] = !1),
                              (c["_contentMetadata"]["streamType"] = b["streamType"]))
                            : c["_logger"]["warning"]("mergeContentMetadata(): streamType was not changed.")),
                        C["dictCount"](b["custom"]) > 0)
                      ) {
                        var g = {},
                          h = {};
                        for (var i in b["custom"]) {
                          var j = c["_contentMetadata"]["custom"][i];
                          j != b["custom"][i]
                            ? ((g[i] = b["custom"][i]),
                              c["_contentMetadata"]["custom"][i] &&
                                (h[i] = c["_contentMetadata"]["custom"][i]),
                              (c["_contentMetadata"]["custom"][i] =
                                b["custom"][i]))
                            : c["_logger"]["info"](
                                "mergeContentMetadata(): custom." + i + " was not changed."
                              );
                        }
                        C["dictCount"](g) > 0
                          ? (C["dictCount"](h) > 0 && (d[r["REQUEST_KEY_TAGS"]] = h),
                            (f[r["REQUEST_KEY_TAGS"]] = g))
                          : c["_logger"]["warning"]("mergeContentMetadata(): custom was not changed.");
                      }
                      C["dictCount"](f) > 0 &&
                        c[_x8302[1e3]]["declareStateChange"](f, d);
                    }),
                    (this["isGlobalSession"] = function () {
                      return c["_global"] == u["SESSION_TYPE"]["GLOBAL"];
                    }),
                    (this["isVideoSession"] = function () {
                      return c["_global"] == u["SESSION_TYPE"]["VIDEO"];
                    }),
                    (this["isAdSession"] = function () {
                      return c["_global"] == u["SESSION_TYPE"]["AD"];
                    }),
                    (this["sessionTypeTag"] = function () {
                      return c["isGlobalSession"]() ? " (global session)" : "";
                    });
                }));
              v["DEFAULT_HEARTBEAT_ERROR_MESSAGE"] = "received no response (or a bad response) to heartbeat POST request";
              var w = (b["SessionFactory"] = function () {
                  function a(a, c, d, e) {
                    (b["_client"] = a),
                      (b["_clientSettings"] = c),
                      (b["_clientConfig"] = d),
                      (b["_systemFactory"] = e),
                      (b["_logger"] = b["_systemFactory"]["buildLogger"]()),
                      b["_logger"]["setModuleName"]("SessionFactory"),
                      (b["_nextSessionKey"] = 0),
                      (b["_sessionsByKey"] = {});
                  }
                  var b = this;
                  (b["_logger"] = null),
                    (b["_logBuffer"] = null),
                    (b["_nextSessionKey"] = 0),
                    (b["_sessionsByKey"] = null),
                    a["apply"](b, arguments),
                    (this["cleanup"] = function () {
                      (b["_logger"] = null), (b["_logBuffer"] = null);
                      for (var a in b["_sessionsByKey"]) {
                        var c = b["_sessionsByKey"][a];
                        c["cleanup"]();
                      }
                      (b["_sessionsByKey"] = null), (b["_nextSessionKey"] = 0);
                    }),
                    (this["newSessionKey"] = function () {
                      var a = b["_nextSessionKey"];
                      return b["_nextSessionKey"]++, a;
                    }),
                    (this["makeVideoSession"] = function (a, c) {
                      return null == a && (a = new e()), b["makeSession"](a, c);
                    }),
                    (this["makeGlobalSession"] = function (a) {
                      return b["makeSession"](a, u["SESSION_TYPE"]["GLOBAL"]);
                    }),
                    (this["generateSessionId"] = function () {
                      return F["integer32"]();
                    }),
                    (this["makeSession"] = function (a, c) {
                      var d = a["clone"](),
                        e = b["generateSessionId"](),
                        f = b["_systemFactory"]["buildSession"](
                          b["_client"],
                          b["_clientSettings"],
                          b["_clientConfig"],
                          e,
                          c,
                          d
                        ),
                        g = b["newSessionKey"]();
                      return b["addSession"](g, f), f["start"](), g;
                    }),
                    (this["getSession"] = function (a) {
                      var c = b["_sessionsByKey"][a];
                      return (
                        null == c && b["_logger"]["error"]("Client: invalid sessionKey. Did you cleanup that session previously?"), c
                      );
                    }),
                    (this["getVideoSession"] = function (a) {
                      var c = this["getSession"](a);
                      return (
                        null != c &&
                          (c["isVideoSession"]() ||
                            c["isAdSession"]() ||
                            (b["_logger"]["error"]("Client: invalid sessionKey. Did you cleanup that session previously?"),
                            (c = null))),
                        c
                      );
                    }),
                    (this["addSession"] = function (a, c) {
                      b["_sessionsByKey"][a] = c;
                    }),
                    (this["removeSession"] = function (a) {
                      delete b["_sessionsByKey"][a];
                    }),
                    (this["cleanupSession"] = function (a) {
                      var c = b["getSession"](a);
                      b["removeSession"](a), c["cleanup"]();
                    });
                }),
                x = (b["CallbackWithTimeout"] = function (a) {
                  (this["_timer"] = a),
                    (this["getWrapperCallback"] = function (a, b, c) {
                      var d = !1,
                        e = function () {
                          d ||
                            ((d = !0),
                            a(!1, c + " (" + b + " ms)"));
                        };
                      this["_timer"]["createOnce"](e, b, "CallbackWithTimeout.wrap");
                      var f = function (b, c) {
                        d || ((d = !0), a(b, c));
                      };
                      return f;
                    });
                }),
                y = (b["Config"] = function (a, b, c) {
                  var d = this;
                  (this["_logger"] = a),
                    this["_logger"]["setModuleName"]("Config"),
                    (this["_storage"] = b),
                    (this["_jsonInterface"] = c),
                    (this["_defaultConfig"] = {
                      clientId: r["DEFAULT_CLIENT_ID"],
                      sendLogs: !1,
                      maxHbInfos: r["DEFAULT_MAX_HEARTBEAT_INFOS"],
                    }),
                    (this["_config"] = C["ObjectShallowCopy"](this["_defaultConfig"])),
                    (this["_loaded"] = !1),
                    (this["_loadedEmpty"] = !1),
                    (this["_waitingConsumers"] = []),
                    (this["isReady"] = function () {
                      return this["_loaded"];
                    }),
                    (this["load"] = function () {
                      var a = function (a, b) {
                        a
                          ? (d["_parse"](b),
                            d["_logger"]["debug"](
                              "load(): configuration successfully loaded from local storage" +
                                (d["_loadedEmpty"] ? " (was empty)" : "") +
                                "."
                            ))
                          : d["_logger"]["error"]("load(): error loading configuration from local storage: " + b),
                          (d["_loaded"] = !0),
                          d["_notify"]();
                      };
                      this["_storage"]["load"](y["STORAGE_KEY"], a);
                    }),
                    (this["_parse"] = function (a) {
                      var b = this["_jsonInterface"]["decode"](a);
                      if (null == b) return void (this["_loadedEmpty"] = !0);
                      var c = b[y["CONFIG_STORAGE_KEY_CLIENT_ID"]];
                      null != c &&
                        c != r["DEFAULT_CLIENT_ID"] &&
                        "" != c &&
                        "null" != c &&
                        ((this["_config"][y["CONFIG_KEY_CLIENT_ID"]] = c),
                        this["_logger"]["debug"](
                          "parse(): loaded clientId=" + c + " (from local storage)"
                        ));
                    }),
                    (this["_marshall"] = function () {
                      var a = {};
                      return (
                        (a[y["CONFIG_STORAGE_KEY_CLIENT_ID"]] = this["_config"]["clientId"]),
                        this["_logger"]["debug"](
                          "_marshall(): saving clientId=" +
                            this["_config"]["clientId"] +
                            " (to local storage)"
                        ),
                        this["_jsonInterface"]["encode"](a)
                      );
                    }),
                    (this["save"] = function () {
                      var a = function (a, b) {
                        a
                          ? d["_logger"]["debug"]("save(): configuration successfully saved to local storage.")
                          : d["_logger"]["error"]("save(): error saving configuration to local storage: " + b);
                      };
                      this["_storage"]["save"](
                        y["STORAGE_KEY"],
                        this["_marshall"](),
                        a
                      );
                    }),
                    (this["register"] = function (a) {
                      return this["isReady"]()
                        ? void a()
                        : void this["_waitingConsumers"]["push"](a);
                    }),
                    (this["get"] = function (a) {
                      return this["_loaded"] ? this["_config"][a] : null;
                    }),
                    (this["set"] = function (a, b) {
                      this["_loaded"] && (this["_config"][a] = b);
                    }),
                    (this["_notify"] = function () {
                      for (
                        var a;
                        null != (a = this["_waitingConsumers"]["shift"]());

                      )
                        a();
                    });
                });
              (y["STORAGE_KEY"] = "sdkConfig"),
                (y["CONFIG_STORAGE_KEY_CLIENT_ID"] = "clId"),
                (y["CONFIG_KEY_CLIENT_ID"] = "clientId"),
                (y["CONFIG_KEY_SEND_LOGS"] = "sendLogs"),
                (y["CONFIG_KEY_MAX_HEARTBEAT_INFOS"] = "maxHbInfos");
              var z = (b["EventQueue"] = function () {
                  (this["_events"] = []),
                    (this["_nextEventNumber"] = 0),
                    (this["enqueue"] = function (a) {
                      this["_events"]["push"](a);
                    }),
                    (this["getNumber"] = function () {
                      var a = this["_nextEventNumber"];
                      return this["_nextEventNumber"]++, a;
                    }),
                    (this["flush"] = function () {
                      var a = this["_events"];
                      return (this["_events"] = []), a;
                    });
                }),
                A = (b["ExceptionCatcher"] = function (a, b, c) {
                  (this["_logger"] = a),
                    this["_logger"]["setModuleName"]("ExceptionCatcher"),
                    (this["_ping"] = b),
                    (this["_systemSettings"] = c),
                    (this["runProtected"] = function (a, b, c) {
                      try {
                        b();
                      } catch (d) {
                        if (null != c) c(d);
                        else {
                          if (this["_systemSettings"]["allowUncaughtExceptions"]) throw d;
                          this["onUncaughtException"](a, d);
                        }
                      }
                    }),
                    (this["onUncaughtException"] = function (a, b) {
                      var c = "Uncaught exception: " + a + ": " + b["toString"]();
                      if (null != this["_ping"])
                        try {
                          this["_ping"]["send"](c);
                        } catch (d) {
                          this["_logger"]["error"](
                            "Caught exception while sending ping: " + d["toString"]()
                          );
                        }
                      this["_logger"]["error"](c);
                    });
                }),
                B = (b["GatewayControl"] = function (a, b, c, d) {
                  var e = this;
                  (this["_clientSettings"] = a),
                    (this["_logger"] = b),
                    this["_logger"]["setModuleName"]("GatewayControl"),
                    (this["_httpClient"] = c),
                    (this["_jsonInterface"] = d),
                    (this["send"] = function (a, b) {
                      var c = this["_jsonInterface"]["encode"](a),
                        d = this["_clientSettings"]["gatewayUrl"] + r["gatewayPath"],
                        f = function (a, c) {
                          if (a) {
                            var d = e["_jsonInterface"]["decode"](c);
                            b(a, d);
                          } else {
                            var f = c;
                            b(a, f);
                          }
                        };
                      this["_httpClient"]["request"](
                        "POST",
                        d,
                        c,
                        "application/json",
                        f
                      );
                    });
                }),
                C = (b["Lang"] = {});
              (C["isMeaningfulString"] = function (a) {
                return (
                  C["isValidString"](a) &&
                  null != a &&
                  "undefined" != a &&
                  "null" != a
                );
              }),
                (C["sanitizeStringToStringObject"] = function (a) {
                  var b = {};
                  for (var c in a)
                    if (C["isMeaningfulString"](c)) {
                      var d = a[c];
                      C["isMeaningfulString"](d) && (b[c] = d);
                    }
                  return b;
                }),
                (C["validateInterface"] = function (a, b, c) {
                  if (null == a)
                    throw new Error("Expected " + c + " implementation is null.");
                  for (var d in b)
                    if ("function" != typeof a[d])
                      throw new Error(
                        "Expected method " + d + " in " + c + " implementation."
                      );
                }),
                (C["dictCount"] = function (a) {
                  var b,
                    c = 0;
                  for (b in a) a["hasOwnProperty"](b) && c++;
                  return c;
                }),
                (C["ToString"] = function (a) {
                  return "" + a;
                }),
                (C["NumberToInt"] = function (a) {
                  return Math["floor"](a);
                }),
                (C["NumberToUnsignedInt"] = function (a) {
                  return Math["abs"](C["NumberToInt"](a));
                }),
                (C["AsBoolean"] = function (a) {
                  return Boolean(a);
                }),
                (C["isValidString"] = function (a) {
                  return "string" == typeof a && "" !== a;
                }),
                (C["stringStartsWith"] = function (a, b) {
                  return "string" != typeof a || "string" != typeof b
                    ? !1
                    : "function" == typeof a["indexOf"]
                    ? 0 === a["indexOf"](b)
                    : !1;
                }),
                (C["isBoolean"] = function (a) {
                  return "boolean" == typeof a;
                }),
                (C["UrlEncodeString"] = function (a) {
                  return escape(a);
                }),
                (C["isObject"] = function (a) {
                  return "object" == typeof a;
                }),
                (C["ObjectToString"] = function (a) {
                  var b = "";
                  for (var c in a) {
                    var d = a[c],
                      e = d;
                    b += c + "=" + e;
                  }
                  return "Object{" + b + "}";
                }),
                (C["ObjectShallowCopyOmitNull"] = function (a) {
                  var b = C["ObjectShallowCopy"](a);
                  for (var c in b) null == b[c] && delete b[c];
                  return b;
                }),
                (C["ObjectShallowCopy"] = function (a) {
                  var b = {};
                  for (var c in a) b[c] = a[c];
                  return b;
                }),
                (C["ObjectShallowEquals"] = function (a, b) {
                  if (typeof a != typeof b) return !1;
                  if (a instanceof Object && b instanceof Object) {
                    if (C["dictCount"](a) !== C["dictCount"](b)) return !1;
                    var c = !0;
                    for (var d in a) if (((c = a[d] === b[d]), !c)) return !1;
                    return !0;
                  }
                  return a === b;
                }),
                (C["isInteger"] = function (a) {
                  if ("number" != typeof a) return !1;
                  var b = Math["round"](a);
                  return b === a;
                }),
                (C["isArray"] = function (a) {
                  return (
                    "[object Array]" ===
                    Object["prototype"]["toString"]["call"](a)
                  );
                }),
                (C["ArrayEquals"] = function (a, b) {
                  if (a === b) return !0;
                  if (null == a || null == b) return !1;
                  if (a["length"] != b["length"]) return !1;
                  for (var c = 0; c < a["length"]; ++c)
                    if (C["isArray"](a[c]) && C["isArray"](b[c])) {
                      if (!C["ArrayEquals"](a[c], b[c])) return !1;
                    } else if (a[c] !== b[c]) return !1;
                  return !0;
                }),
                (C["isObjectDefinePropertyPresent"] = function () {
                  return (
                    "undefined" != typeof Object["defineProperty"] &&
                    (function () {
                      try {
                        return Object["defineProperty"]({}, "x", {}), !0;
                      } catch (a) {
                        return !1;
                      }
                    })()
                  );
                }),
                (C["defGet"] = function (a, b, c) {
                  if (C["isObjectDefinePropertyPresent"]())
                    Object["defineProperty"](a, b, {
                      configurable: !0,
                      enumerable: !0,
                      get: c,
                    });
                  else {
                    if ("undefined" == typeof a["__defineGetter__"])
                      throw new Error("JavaScript runtime must support either Object.defineProperty or __defineGetter__");
                    a["__defineGetter__"](b, c);
                  }
                }),
                (C["defSet"] = function (a, b, c) {
                  if (C["isObjectDefinePropertyPresent"]())
                    Object["defineProperty"](a, b, {
                      configurable: !0,
                      set: c,
                    });
                  else {
                    if ("undefined" == typeof a["__defineSetter__"])
                      throw new Error("JavaScript runtime must support either Object.defineProperty or __defineSetter__");
                    a["__defineSetter__"](b, c);
                  }
                }),
                (function () {
                  var a = {};
                  (a["two32"] = 4294967296),
                    (a["MaxValue"] = a["two32"] - 1),
                    (a["MinValue"] = 0),
                    (C["UInt32"] = a),
                    (C["UInt32"]["Cast"] = function (b) {
                      var c = parseInt(b, 10);
                      return (
                        c > a["MaxValue"]
                          ? (c %= a["two32"])
                          : c < a["MinValue"] &&
                            ((c = -c % a["two32"]),
                            (c = a["two32"] - c)),
                        c
                      );
                    }),
                    (C["UInt32"]["InRange"] = function (b) {
                      var c = parseInt(b, 10);
                      return c <= a["MaxValue"] && c >= a["MinValue"];
                    });
                  var b = {};
                  (b["MaxValue"] = 2147483647),
                    (b["MinValue"] = -2147483648),
                    (C["Int32"] = b),
                    (C["Int32"]["Cast"] = function (a) {
                      var c = parseInt(a, 10);
                      return (
                        c > b["MaxValue"]
                          ? (c %= b["MaxValue"])
                          : c < b["MinValue"] &&
                            ((c = -c % b["MaxValue"]),
                            (c = b["MaxValue"] - c)),
                        c
                      );
                    }),
                    (C["Int32"]["InRange"] = function (a) {
                      var c = parseInt(a, 10);
                      return c <= b["MaxValue"] && c >= b["MinValue"];
                    });
                })();
              var D = (b["LogBuffer"] = function () {
                  var a = 32;
                  (this["_buffer"] = []),
                    (this["add"] = function (b) {
                      this["_buffer"]["length"] >= a &&
                        this["_buffer"]["shift"](),
                        this["_buffer"]["push"](b);
                    }),
                    (this["flush"] = function () {
                      var a = this["_buffer"];
                      return (this["_buffer"] = []), a;
                    });
                }),
                E = (b["Ping"] = function (a, b, d) {
                  (this["_isSendingPing"] = !1),
                    (this["_cachedBasePingUrl"] = null),
                    (this["_logger"] = a),
                    this["_logger"]["setModuleName"]("Ping"),
                    (this["_httpClient"] = b),
                    (this["_clientSettings"] = d),
                    (this["send"] = function (a) {
                      if (!this["_isSendingPing"]) {
                        this["_isSendingPing"] = !0;
                        var b =
                          this["getBasePingUrl"]() +
                          "&d=" +
                          C["UrlEncodeString"](a["toString"]());
                        this["_logger"]["error"]("send(): " + b),
                          this["_httpClient"]["request"](
                            "GET",
                            b,
                            null,
                            null,
                            null
                          ),
                          (this["_isSendingPing"] = !1);
                      }
                    }),
                    (this["getBasePingUrl"] = function () {
                      if (!this["_cachedBasePingUrl"]) {
                        var a =
                          E["SERVICE_URL"] +
                          "?comp=" +
                          E["COMPONENT_NAME"] +
                          "&clv=" +
                          c["version"];
                        if (
                          (this["_clientSettings"] &&
                            (a += "&cid=" + this["_clientSettings"]["customerKey"]),
                          (a += "&sch=" + r["SDK_METADATA_SCHEMA"]),
                          !this["_clientSettings"])
                        )
                          return a;
                        this["_cachedBasePingUrl"] = a;
                      }
                      return this["_cachedBasePingUrl"];
                    });
                });
              (E["COMPONENT_NAME"] = "sdkjs"),
                (E["SERVICE_URL"] = "https://pings.conviva.com/ping.ping");
              var F = (b["Random"] = {});
              (F["maxUInt32"] = 4294967295),
                (F["maxInt32"] = 2147483647),
                (F["minInt32"] = -2147483648),
                (F["integer32"] = function () {
                  return (
                    Math["floor"](Math["random"]() * F["maxUInt32"]) +
                    F["minInt32"]
                  );
                }),
                (F["uinteger32"] = function () {
                  return Math["floor"](
                    Math["random"]() * F["maxUInt32"]
                  );
                });
              var G = (b["Sanitize"] = {});
              (G["Integer"] = function (a, b, c, d) {
                if (isNaN(a)) return d;
                if ("number" != typeof a) return d;
                if (a == d) return d;
                var e = C["NumberToInt"](a);
                return G["EnforceBoundaries"](e, b, c);
              }),
                (G["EnforceBoundaries"] = function (a, b, c) {
                  return (
                    null != c && a > c
                      ? (a = c)
                      : null != b && b > a && (a = b),
                    a
                  );
                }),
                (G["sanitizeSpecialIntegerValue"] = function (a) {
                  return -1 == a || -2 == a
                    ? a
                    : (a = G["Integer"](a, 0, null, -1));
                });
              var H =
                  ((b["StreamerError"] = function () {
                    function a(a, c) {
                      (b["errorCode"] = a), (b["severity"] = c);
                    }
                    var b = this;
                    (b["errorCode"] = null),
                      (b["severity"] = c["ErrorSeverity"]["FATAL"]),
                      a["apply"](b, arguments);
                  }),
                  (b["HttpClient"] = function (a, b, c, d) {
                    (this["_logger"] = a),
                      this["_logger"]["setModuleName"]("HttpClient"),
                      (this["_httpInterface"] = b),
                      (this["_callbackWithTimeout"] = c),
                      (this["_systemSettings"] = d),
                      (this["request"] = function (a, b, c, d, e) {
                        var f = 1e3 * this["_systemSettings"]["httpTimeout"],
                          g = this["_callbackWithTimeout"]["getWrapperCallback"](
                            e,
                            f,
                            "HTTP timeout"
                          );
                        this["_logger"]["debug"]("request(): calling HttpInterface.makeRequest"),
                          this["_httpInterface"]["makeRequest"](a, b, c, d, f, g);
                      });
                  })),
                I = (b["Logger"] = function (a, b, c, d, e) {
                  (this["_loggingInterface"] = a),
                    (this["_timeInterface"] = b),
                    (this["_settings"] = c),
                    (this["_logBuffer"] = d),
                    (this["_packageName"] = e),
                    (this["debug"] = function (a) {
                      this["log"](a, g["LogLevel"]["DEBUG"]);
                    }),
                    (this["info"] = function (a) {
                      this["log"](a, g["LogLevel"]["INFO"]);
                    }),
                    (this["warning"] = function (a) {
                      this["log"](a, g["LogLevel"]["WARNING"]);
                    }),
                    (this["error"] = function (a) {
                      this["log"](a, g["LogLevel"]["ERROR"]);
                    }),
                    (this["log"] = function (a, b) {
                      var c = this["formatMessage"](a, b);
                      this["_logBuffer"]["add"](c),
                        this["_settings"]["logLevel"] <= b &&
                          this["_loggingInterface"]["consoleLog"](c, b);
                    }),
                    (this["prependModuleName"] = function (a) {
                      var b = a;
                      return (b =
                        "[" + this["_moduleName"] + "] " + b);
                    }),
                    (this["prependPackageName"] = function (a) {
                      var b = a;
                      return (b =
                        "[" + this["_packageName"] + "] " + b);
                    }),
                    (this["prependConvivaNamespace"] = function (a) {
                      var b = a;
                      return (b = "[Conviva] " + b);
                    }),
                    (this["prependTime"] = function (a) {
                      var b = this["_timeInterface"]["getEpochTimeMs"](),
                        c = (b / 1e3)["toFixed"](3)["toString"]();
                      return "[" + c + "] " + a;
                    }),
                    (this["prependLogLevel"] = function (a, b) {
                      var c = I["getLogLevelString"](b),
                        d = a;
                      return (d = "[" + c + "] " + d);
                    }),
                    (this["prependSessionId"] = function (a) {
                      var b = a;
                      return (
                        null != this["_sessionId"] &&
                          (b =
                            "sid=" +
                            this["_sessionId"] +
                            " " +
                            b),
                        b
                      );
                    }),
                    (this["setSessionId"] = function (a) {
                      this["_sessionId"] = a;
                    }),
                    (this["setModuleName"] = function (a) {
                      this["_moduleName"] = a;
                    }),
                    (this["formatMessage"] = function (a, b) {
                      return this["prependConvivaNamespace"](
                        this["prependTime"](
                          this["prependLogLevel"](
                            this["prependPackageName"](
                              this["prependModuleName"](this["prependSessionId"](a))
                            ),
                            b
                          )
                        )
                      );
                    });
                });
              I["getLogLevelString"] = function (a) {
                var b;
                switch (a) {
                  case g["LogLevel"]["ERROR"]:
                    b = "ERROR";
                    break;
                  case g["LogLevel"]["WARNING"]:
                    b = "WARNING";
                    break;
                  case g["LogLevel"]["INFO"]:
                    b = "INFO";
                    break;
                  case g["LogLevel"]["DEBUG"]:
                    b = "DEBUG";
                }
                return b;
              };
              var J = (b["Storage"] = function (a, b, c, d) {
                (this["_logger"] = a),
                  this["_logger"]["setModuleName"]("Storage"),
                  (this["_storageInterface"] = b),
                  (this["_callbackWithTimeout"] = c),
                  (this["_systemSettings"] = d),
                  (this["load"] = function (a, b) {
                    var c = this["_callbackWithTimeout"]["getWrapperCallback"](
                      b,
                      1e3 * this["_systemSettings"]["storageTimeout"],
                      "storage load timeout"
                    );
                    this["_logger"]["debug"]("load(): calling StorageInterface.loadData"),
                      this["_storageInterface"]["loadData"](J["STORAGE_SPACE"], a, c);
                  }),
                  (this["save"] = function (a, b, c) {
                    var d = this["_callbackWithTimeout"]["getWrapperCallback"](
                      c,
                      1e3 * this["_systemSettings"]["storageTimeout"],
                      "storage save timeout"
                    );
                    this["_logger"]["debug"]("save(): calling StorageInterface.saveData"),
                      this["_storageInterface"]["saveData"](J["STORAGE_SPACE"], a, b, d);
                  });
              });
              J["STORAGE_SPACE"] = "Conviva";
              var K = (b["SystemMetadata"] = function (b, c, d) {
                (this["_logger"] = b),
                  this["_logger"]["setModuleName"]("SystemMetadata"),
                  (this["_metadataInterface"] = c),
                  (this["_exceptionCatcher"] = d),
                  (this["_cachedMetadata"] = null),
                  (this["get"] = function () {
                    return (
                      this["_cachedMetadata"] || this["retrieve"](),
                      this["_cachedMetadata"]
                    );
                  }),
                  (this["retrieve"] = function () {
                    function b(a, b) {
                      d["_exceptionCatcher"]["runProtected"]("Session.getSystemMetadataSchema(): " + a, function () {
                        var c = b[a];
                        b[a] = c["call"](d["_metadataInterface"]);
                      });
                    }
                    var c = {};
                    (c[K["BROWSER_NAME"]] = this["_metadataInterface"]["getBrowserName"]),
                      (c[K["BROWSER_VERSION"]] = this["_metadataInterface"]["getBrowserVersion"]),
                      (c[K["DEVICE_BRAND"]] = this["_metadataInterface"]["getDeviceBrand"]),
                      (c[K["DEVICE_MANUFACTURER"]] = this["_metadataInterface"]["getDeviceManufacturer"]),
                      (c[K["DEVICE_MODEL"]] = this["_metadataInterface"]["getDeviceModel"]),
                      (c[K["DEVICE_TYPE"]] = this["_metadataInterface"]["getDeviceType"]),
                      (c[K["DEVICE_VERSION"]] = this["_metadataInterface"]["getDeviceVersion"]),
                      (c[K["FRAMEWORK_NAME"]] = this["_metadataInterface"]["getFrameworkName"]),
                      (c[K["FRAMEWORK_VERSION"]] = this["_metadataInterface"]["getFrameworkVersion"]),
                      (c[K["OPERATING_SYSTEM_NAME"]] = this["_metadataInterface"]["getOperatingSystemName"]),
                      (c[K["OPERATING_SYSTEM_VERSION"]] = this["_metadataInterface"]["getOperatingSystemVersion"]),
                      (c[K["DEVICE_CATEGORY"]] = this["_metadataInterface"]["getDeviceCategory"]);
                    var d = this;
                    this["_logger"]["debug"]("retrieve(): calling MetadataInterface methods");
                    for (var e in c)
                      b(e, c), C["isValidString"](c[e]) || delete c[e];
                    var f = !1;
                    if ("undefined" != typeof c[K["DEVICE_TYPE"]]) {
                      for (var g in a["Client"]["DeviceType"])
                        if (
                          c[K["DEVICE_TYPE"]] === a["Client"]["DeviceType"][g]
                        ) {
                          f = !0;
                          break;
                        }
                      f || delete c[K["DEVICE_TYPE"]];
                    }
                    if (((f = !1), "undefined" != typeof c[K["DEVICE_CATEGORY"]])) {
                      for (var h in a["Client"]["DeviceCategory"])
                        if (
                          c[K["DEVICE_CATEGORY"]] === a["Client"]["DeviceCategory"][h]
                        ) {
                          f = !0;
                          break;
                        }
                      f || delete c[K["DEVICE_CATEGORY"]];
                    }
                    this["_cachedMetadata"] = C["ObjectShallowCopyOmitNull"](c);
                  });
              });
              (K["BROWSER_NAME"] = "browserName"),
                (K["BROWSER_VERSION"] = "browserVersion"),
                (K["DEVICE_BRAND"] = "deviceBrand"),
                (K["DEVICE_MANUFACTURER"] = "deviceManufacturer"),
                (K["DEVICE_MODEL"] = "deviceModel"),
                (K["DEVICE_TYPE"] = "deviceType"),
                (K["DEVICE_VERSION"] = "deviceVersion"),
                (K["FRAMEWORK_NAME"] = "frameworkName"),
                (K["FRAMEWORK_VERSION"] = "frameworkVersion"),
                (K["OPERATING_SYSTEM_NAME"] = "operatingSystemName"),
                (K["OPERATING_SYSTEM_VERSION"] = "operatingSystemVersion"),
                (K["DEVICE_CATEGORY"] = "deviceCategory");
              var L = (b["Time"] = function (a, b) {
                  (this["_timeInterface"] = a),
                    (this["_logger"] = b),
                    this["_logger"]["setModuleName"]("Time"),
                    (this["current"] = function () {
                      var a = this["_timeInterface"]["getEpochTimeMs"]();
                      return (
                        C["isInteger"](a) ||
                          this["_logger"]["error"](
                            "current(): TimeInterface.getEpochTimeMs() did not return an integer (" + a + ")"
                          ),
                        a
                      );
                    });
                }),
                M = (b["Timer"] = function (a, b, c) {
                  var d = this;
                  (this["_logger"] = a),
                    this["_logger"]["setModuleName"]("Timer"),
                    (this["_timerInterface"] = b),
                    (this["_exceptionCatcher"] = c),
                    (this["create"] = function (a, b, c) {
                      var e = function () {
                          d["_exceptionCatcher"]["runProtected"](c, function () {
                            a();
                          });
                        },
                        f = this["createTimer"](e, b, c);
                      return f;
                    }),
                    (this["createOnce"] = function (a, b, c) {
                      var e = {
                          cancel: null,
                        },
                        f = function () {
                          d["_exceptionCatcher"]["runProtected"](c, function () {
                            e &&
                              "function" == typeof e["cancel"] &&
                              (e["cancel"](),
                              (e["cancel"] = null),
                              (e = null)),
                              a();
                          });
                        },
                        g = this["createTimer"](f, b, c);
                      return (e["cancel"] = g), g;
                    }),
                    (this["createTimer"] = function (a, b, c) {
                      return (
                        this["_logger"]["debug"]("createTimer(): calling TimerInterface.create"),
                        this["_timerInterface"]["createTimer"](a, b, c)
                      );
                    });
                });
            })();
          })(),
          a
        );
      });
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["__esModule"] = true;
      var _defineProperty = __webpack_require__(54);
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
          if (protoProps) defineProperties(Constructor["prototype"], protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
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
    function (module, exports) {
      module["exports"] = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
    },
    function (module, exports) {
      var ceil = Math["ceil"];
      var floor = Math["floor"];
      module["exports"] = function (it) {
        return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    },
    function (module, exports, __webpack_require__) {
      var shared = __webpack_require__(26)("keys");
      var uid = __webpack_require__(17);
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
        mode: __webpack_require__(16) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (module, exports) {
      module["exports"] = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf"["split"](",");
    },
    function (module, exports) {
      exports["f"] = Object["getOwnPropertySymbols"];
    },
    function (module, exports) {
      module["exports"] = {};
    },
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(11);
      var dPs = __webpack_require__(87);
      var enumBugKeys = __webpack_require__(27);
      var IE_PROTO = __webpack_require__(25)("IE_PROTO");
      var Empty = function () {};
      var PROTOTYPE = "prototype";
      var createDict = function () {
        var iframe = __webpack_require__(36)("iframe");
        var i = enumBugKeys["length"];
        var lt = "<";
        var gt = ">";
        var iframeDocument;
        iframe["style"]["display"] = "none";
        __webpack_require__(88)["appendChild"](iframe);
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
      var def = __webpack_require__(4)["f"];
      var has = __webpack_require__(5);
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
      exports["f"] = __webpack_require__(10);
    },
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);
      var core = __webpack_require__(0);
      var LIBRARY = __webpack_require__(16);
      var wksExt = __webpack_require__(32);
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
    function (module, exports, __webpack_require__) {
      var aFunction = __webpack_require__(57);
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
      module["exports"] =
        !__webpack_require__(2) &&
        !__webpack_require__(8)(function () {
          return (
            Object["defineProperty"](
              __webpack_require__(36)("div"),
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
      var isObject = __webpack_require__(7);
      var document = __webpack_require__(1)["document"];
      var is = isObject(document) && isObject(document["createElement"]);
      module["exports"] = function (it) {
        return is ? document["createElement"](it) : {};
      };
    },
    function (module, exports, __webpack_require__) {
      var has = __webpack_require__(5);
      var toIObject = __webpack_require__(9);
      var arrayIndexOf = __webpack_require__(67)(false);
      var IE_PROTO = __webpack_require__(25)("IE_PROTO");
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
      var cof = __webpack_require__(39);
      module["exports"] = Object("z")["propertyIsEnumerable"](0)
        ? Object
        : function (it) {
            return cof(it) == "String"
              ? it["split"]("")
              : Object(it);
          };
    },
    function (module, exports) {
      var toString = {}["toString"];
      module["exports"] = function (it) {
        return toString["call"](it)["slice"](8, -1);
      };
    },
    function (module, exports, __webpack_require__) {
      var has = __webpack_require__(5);
      var toObject = __webpack_require__(19);
      var IE_PROTO = __webpack_require__(25)("IE_PROTO");
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
      exports["__esModule"] = true;
      var _iterator = __webpack_require__(82);
      var _iterator2 = _interopRequireDefault(_iterator);
      var _symbol = __webpack_require__(93);
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
              return typeof obj === "undefined" ? "undefined" : _typeof(obj);
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
      var LIBRARY = __webpack_require__(16);
      var $export = __webpack_require__(3);
      var redefine = __webpack_require__(43);
      var hide = __webpack_require__(6);
      var Iterators = __webpack_require__(29);
      var $iterCreate = __webpack_require__(86);
      var setToStringTag = __webpack_require__(31);
      var getPrototypeOf = __webpack_require__(40);
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
          IteratorPrototype = getPrototypeOf($anyNative["call"](new Base()));
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
              $export["P"] + $export["F"] * (BUGGY || VALUES_BUG),
              NAME,
              methods
            );
        }
        return methods;
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = __webpack_require__(6);
    },
    function (module, exports, __webpack_require__) {
      var $keys = __webpack_require__(37);
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
      var pIE = __webpack_require__(18);
      var createDesc = __webpack_require__(13);
      var toIObject = __webpack_require__(9);
      var toPrimitive = __webpack_require__(22);
      var has = __webpack_require__(5);
      var IE8_DOM_DEFINE = __webpack_require__(35);
      var gOPD = Object["getOwnPropertyDescriptor"];
      exports["f"] = __webpack_require__(2)
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
      __webpack_require__(47);
      __webpack_require__(48);
      __webpack_require__(49);
      __webpack_require__(50);
      __webpack_require__(51);
      __webpack_require__(52);
      var _convivaCoreSdk = __webpack_require__(20);
      var _convivaCoreSdk2 = _interopRequireDefault(_convivaCoreSdk);
      var _playbackMonitoring = __webpack_require__(53);
      var _playbackMonitoring2 = _interopRequireDefault(_playbackMonitoring);
      var _convivaFactory = __webpack_require__(111);
      var _convivaFactory2 = _interopRequireDefault(_convivaFactory);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var convivaFactory = (0, _convivaFactory2["default"])({
        Conviva: _convivaCoreSdk2["default"],
        Html5Timer: window["Html5Timer"],
        Html5Time: window["Html5Time"],
        Html5Http: window["Html5Http"],
        Html5Storage: window["Html5Storage"],
        Html5Metadata: window["Html5Metadata"],
        Html5Logging: window["Html5Logging"],
      });
      window["Conviva"] = _convivaCoreSdk2["default"];
      window["PlaybackMonitoring"] = (0, _playbackMonitoring2["default"])({
        convivaFactory: convivaFactory,
      });
    },
    function (module, exports) {
      function Html5Time() {
        function _constr() {}
        _constr["apply"](this, arguments);
        this["getEpochTimeMs"] = function () {
          var d = new Date();
          return d["getTime"]();
        };
        this["release"] = function () {};
      }
      window["Html5Time"] = Html5Time;
    },
    function (module, exports) {
      function Html5Timer() {
        function _constr() {}
        _constr["apply"](this, arguments);
        this["createTimer"] = function (timerAction, intervalMs, actionName) {
          var timerId = setInterval(timerAction, intervalMs);
          var cancelTimerFunc = function () {
            if (timerId !== -1) {
              clearInterval(timerId);
              timerId = -1;
            }
          };
          return cancelTimerFunc;
        };
        this["release"] = function () {};
      }
      window["Html5Timer"] = Html5Timer;
    },
    function (module, exports) {
      function Html5Http() {
        function _constr() {}
        _constr["apply"](this, arguments);
        this["makeRequest"] = function (
          httpMethod,
          url,
          data,
          contentType,
          timeoutMs,
          callback
        ) {
          return this["makeRequestStandard"]["apply"](this, arguments);
        };
        this["makeRequestStandard"] = function (
          httpMethod,
          url,
          data,
          contentType,
          timeoutMs,
          callback
        ) {
          var xmlHttpReq = new XMLHttpRequest();
          xmlHttpReq["open"](httpMethod, url, true);
          if (contentType && xmlHttpReq["overrideMimeType"]) {
            xmlHttpReq["overrideMimeType"] = contentType;
          }
          if (contentType && xmlHttpReq["setRequestHeader"]) {
            xmlHttpReq["setRequestHeader"]("Content-Type", contentType);
          }
          if (timeoutMs > 0) {
            xmlHttpReq["timeout"] = timeoutMs;
            xmlHttpReq["ontimeout"] = function () {
              xmlHttpReq["ontimeout"] = xmlHttpReq["onreadystatechange"] = null;
              if (callback)
                callback(false, "timeout after " + timeoutMs + " ms");
            };
          }
          xmlHttpReq["onreadystatechange"] = function () {
            if (xmlHttpReq["readyState"] === 4) {
              xmlHttpReq["ontimeout"] = xmlHttpReq["onreadystatechange"] = null;
              if (xmlHttpReq["status"] == 200) {
                if (callback) callback(true, xmlHttpReq["responseText"]);
              } else {
                if (callback)
                  callback(false, "http status " + xmlHttpReq["status"]);
              }
            }
          };
          xmlHttpReq["send"](data);
          return null;
        };
        this["release"] = function () {};
      }
      window["Html5Http"] = Html5Http;
    },
    function (module, exports) {
      function Html5Storage() {
        function _constr() {}
        _constr["apply"](this, arguments);
        this["saveData"] = function (
          storageSpace,
          storageKey,
          data,
          callback
        ) {
          var localStorageKey = storageSpace + "." + storageKey;
          try {
            localStorage["setItem"](localStorageKey, data);
            callback(true, null);
          } catch (e) {
            callback(false, e["toString"]());
          }
        };
        this["loadData"] = function (storageSpace, storageKey, callback) {
          var localStorageKey = storageSpace + "." + storageKey;
          try {
            var data = localStorage["getItem"](localStorageKey);
            callback(true, data);
          } catch (e) {
            callback(false, e["toString"]());
          }
        };
        this["release"] = function () {};
      }
      window["Html5Storage"] = Html5Storage;
    },
    function (module, exports) {
      function Html5Metadata() {
        function _constr() {}
        _constr["apply"](this, arguments);
        this["getBrowserName"] = function () {
          return null;
        };
        this["getBrowserVersion"] = function () {
          return null;
        };
        this["getDeviceBrand"] = function () {
          return null;
        };
        this["getDeviceManufacturer"] = function () {
          return null;
        };
        this["getDeviceModel"] = function () {
          return null;
        };
        this["getDeviceType"] = function () {
          return null;
        };
        this["getDeviceVersion"] = function () {
          return null;
        };
        this["getFrameworkName"] = function () {
          return "HTML5";
        };
        this["getFrameworkVersion"] = function () {
          return null;
        };
        this["getOperatingSystemName"] = function () {
          return null;
        };
        this["getOperatingSystemVersion"] = function () {
          return null;
        };
        this["getDeviceCategory"] = function () {
          return Conviva["Client"]["DeviceCategory"]["WEB"];
        };
        this["release"] = function () {};
      }
      window["Html5Metadata"] = Html5Metadata;
    },
    function (module, exports) {
      function Html5Logging() {
        function _constr() {}
        _constr["apply"](this, arguments);
        this["consoleLog"] = function (message, logLevel) {
          if (typeof console === "undefined") return;
          if (
            (console["log"] &&
              logLevel === Conviva["SystemSettings"]["LogLevel"]["DEBUG"]) ||
            logLevel === Conviva["SystemSettings"]["LogLevel"]["INFO"]
          ) {
            console["log"](message);
          } else if (
            console["warn"] &&
            logLevel === Conviva["SystemSettings"]["LogLevel"]["WARNING"]
          ) {
            console["warn"](message);
          } else if (
            console["error"] &&
            logLevel === Conviva["SystemSettings"]["LogLevel"]["ERROR"]
          ) {
            console["error"](message);
          }
        };
        this["release"] = function () {};
      }
      window["Html5Logging"] = Html5Logging;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _classCallCheck2 = __webpack_require__(12);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(21);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _util = __webpack_require__(14);
      var _util2 = _interopRequireDefault(_util);
      var _eventbus = __webpack_require__(58);
      var _eventbus2 = _interopRequireDefault(_eventbus);
      var _convivaFeatureRouter = __webpack_require__(60);
      var _convivaFeatureRouter2 = _interopRequireDefault(
        _convivaFeatureRouter
      );
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      module["exports"] = function createPlaybackMonitoringClass(dependencies) {
        return (function () {
          function PlaybackMonitoring() {
            var config =
              arguments["length"] > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            (0, _classCallCheck3["default"])(this, PlaybackMonitoring);
            _util2["default"]["logging"] =
              (config["settings"] && config["settings"]["logging"]) ||
              false;
            this["eventListeners"] = [];
            this["joynConvivaManager"] = new _convivaFeatureRouter2["default"](
              config,
              dependencies
            )["convivaFeature"]();
            _util2["default"]["log"]("[PlaybackMonitoring] instantiated.");
          }
          (0, _createClass3["default"])(PlaybackMonitoring, [
            {
              key: "start",
              value: function start(contentResource) {
                this["_registerListeners"]();
                this["joynConvivaManager"]["startSession"](contentResource);
                _util2["default"]["log"]("[PlaybackMonitoring] started.");
              },
            },
            {
              key: "stop",
              value: function stop() {
                this["joynConvivaManager"]["stopSession"]();
                this["_removeListeners"]();
                _util2["default"]["log"]("[PlaybackMonitoring] stoped.");
              },
            },
            {
              key: "update",
              value: function update(contentResource) {
                this["joynConvivaManager"]["updateContentResource"](contentResource);
                _util2["default"]["log"]("[PlaybackMonitoring] updated contentResource.");
              },
            },
            {
              key: "_registerListeners",
              value: function _registerListeners() {
                var _this = this;
                this["on"]("playing", function () {
                  return _this["joynConvivaManager"]["onPlayingCallback"]();
                });
                this["on"]("pause", function () {
                  return _this["joynConvivaManager"]["onPauseCallback"]();
                });
                this["on"]("buffering", function () {
                  return _this["joynConvivaManager"]["onBufferingCallback"]();
                });
                this["on"]("ended", function () {
                  return _this["joynConvivaManager"]["onEndedCallback"]();
                });
                this["on"]("error", function (data) {
                  return _this["joynConvivaManager"]["onErrorCallback"](data);
                });
                this["on"]("bitrateswitching", function (data) {
                  return _this["joynConvivaManager"]["onBitrateSwitchingCallback"](data);
                });
                this["on"]("seeking", function (data) {
                  return _this["joynConvivaManager"]["onSeekingCallback"](data);
                });
                this["on"]("destroy", function () {
                  return _this["joynConvivaManager"]["onPlaybackCancel"]();
                });
              },
            },
            {
              key: "on",
              value: function on(eventName, callback) {
                this["eventListeners"]["push"]({
                  name: eventName,
                  callback: callback,
                });
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
              key: "_removeListeners",
              value: function _removeListeners() {
                var _this2 = this;
                this["eventListeners"]["forEach"](function (event) {
                  _this2["off"](event["name"], event["callback"]);
                });
                this["eventListeners"] = [];
              },
            },
            {
              key: "destroy",
              value: function destroy() {
                this["joynConvivaManager"]["destroy"]();
                this["joynConvivaManager"] = null;
                _util2["default"]["log"]("[PlaybackMonitoring] destroyed.");
              },
            },
          ]);
          return PlaybackMonitoring;
        })();
      };
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(55),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(56);
      var $Object = __webpack_require__(0)["Object"];
      module["exports"] = function defineProperty(it, key, desc) {
        return $Object["defineProperty"](it, key, desc);
      };
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(3);
      $export(
        $export["S"] + $export["F"] * !__webpack_require__(2),
        "Object",
        {
          defineProperty: __webpack_require__(4)["f"],
        }
      );
    },
    function (module, exports) {
      module["exports"] = function (it) {
        if (typeof it != "function") throw TypeError(it + " is not a function!");
        return it;
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object["defineProperty"](exports, "__esModule", {
        value: true,
      });
      var _events = __webpack_require__(59);
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
        if (that["_maxListeners"] === undefined) return EventEmitter["defaultMaxListeners"];
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
              (er ? " (" + er["message"] + ")" : "")
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
          return this["listener"]["apply"](this["target"], arguments);
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
        return this["_eventsCount"] > 0 ? ReflectOwnKeys(this["_events"]) : [];
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
      var _classCallCheck2 = __webpack_require__(12);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(21);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _util = __webpack_require__(14);
      var _util2 = _interopRequireDefault(_util);
      var _joynConvivaManager = __webpack_require__(61);
      var _joynConvivaManager2 = _interopRequireDefault(_joynConvivaManager);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var ConvivaFeatureRouter = (function () {
        function ConvivaFeatureRouter(config, dependencies) {
          (0, _classCallCheck3["default"])(this, ConvivaFeatureRouter);
          var _config$conviva = config["conviva"],
            conviva = _config$conviva === undefined ? {} : _config$conviva;
          this["enabled"] = Boolean(conviva["enabled"]);
          this["customerKey"] = conviva["customerKey"] || "";
          this["dependencies"] = dependencies;
        }
        (0, _createClass3["default"])(ConvivaFeatureRouter, [
          {
            key: "convivaFeature",
            value: function convivaFeature() {
              if (this["enabled"]) {
                _util2["default"]["log"]("[ConvivaFeatureRouter] Conviva is enabled");
                return new _joynConvivaManager2["default"]({
                  customerKey: this["customerKey"],
                  dependencies: this["dependencies"],
                });
              } else {
                _util2["default"]["log"]("[ConvivaFeatureRouter] Conviva is disabled");
                return {
                  isActiveSession: function isActiveSession() {
                    return false;
                  },
                  startSession: function startSession() {},
                  stopSession: function stopSession() {},
                  updateContentResource: function updateContentResource() {},
                  destroy: function destroy() {},
                  onPlayingCallback: function onPlayingCallback() {},
                  onPauseCallback: function onPauseCallback() {},
                  onBufferingCallback: function onBufferingCallback() {},
                  onEndedCallback: function onEndedCallback() {},
                  onErrorCallback: function onErrorCallback() {},
                  onBitrateSwitchingCallback: function onBitrateSwitchingCallback() {},
                  onSeekingCallback: function onSeekingCallback() {},
                  onPlaybackCancel: function onPlaybackCancel() {},
                };
              }
            },
          },
        ]);
        return ConvivaFeatureRouter;
      })();
      module["exports"] = ConvivaFeatureRouter;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _extends2 = __webpack_require__(62);
      var _extends3 = _interopRequireDefault(_extends2);
      var _classCallCheck2 = __webpack_require__(12);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _createClass2 = __webpack_require__(21);
      var _createClass3 = _interopRequireDefault(_createClass2);
      var _util = __webpack_require__(14);
      var _util2 = _interopRequireDefault(_util);
      var _convivaCoreSdk = __webpack_require__(20);
      var _convivaCoreSdk2 = _interopRequireDefault(_convivaCoreSdk);
      var _contentResourceMapper = __webpack_require__(70);
      var _contentResourceMapper2 = _interopRequireDefault(
        _contentResourceMapper
      );
      var _userException = __webpack_require__(76);
      var _userException2 = _interopRequireDefault(_userException);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var JoynConvivaManager = (function () {
        function JoynConvivaManager(config) {
          (0, _classCallCheck3["default"])(this, JoynConvivaManager);
          var customerKey = config["customerKey"] || "";
          var _config$dependencies$ = config["dependencies"]["convivaFactory"][
              "createConviva"
            ](customerKey, _util2["default"]["logging"]),
            client = _config$dependencies$["client"],
            systemFactory = _config$dependencies$["systemFactory"];
          this["client"] = client;
          this["systemFactory"] = systemFactory;
          this["sessionKey"] =
            _convivaCoreSdk2["default"]["Client"]["NO_SESSION_KEY"];
          this["playerStateManager"] = null;
          this["contentResource"] = {};
          this["isSeeking"] = false;
          this["_isActiveSession"] = false;
          _util2["default"]["log"]("[JoynConvivaManager] instantiated");
        }
        (0, _createClass3["default"])(JoynConvivaManager, [
          {
            key: "isActiveSession",
            value: function isActiveSession() {
              _util2["default"]["log"]("[JoynConvivaManager] isActiveSession");
              return (
                this["sessionKey"] !==
                  _convivaCoreSdk2["default"]["Client"]["NO_SESSION_KEY"] &&
                this["playerStateManager"] !== null &&
                this["_isActiveSession"]
              );
            },
          },
          {
            key: "startSession",
            value: function startSession(contentResource) {
              _util2["default"]["log"]("[JoynConvivaManager] startSession");
              if (this["isActiveSession"]()) {
                this["stopSession"]();
              }
              this["contentResource"] = contentResource;
              this["playerStateManager"] = this["client"]["getPlayerStateManager"]();
              this["sessionKey"] = this["client"]["createSession"](
                (0, _contentResourceMapper2["default"])(this["contentResource"])
              );
              this["_isActiveSession"] = true;
              this["client"]["attachPlayer"](
                this["sessionKey"],
                this["playerStateManager"]
              );
              _util2["default"]["log"]("[JoynConvivaManager] session started.");
            },
          },
          {
            key: "stopSession",
            value: function stopSession() {
              _util2["default"]["log"]("[JoynConvivaManager] stopSession");
              if (
                this["sessionKey"] !==
                _convivaCoreSdk2["default"]["Client"]["NO_SESSION_KEY"]
              ) {
                this["client"]["detachPlayer"](this["sessionKey"]);
                this["client"]["cleanupSession"](this["sessionKey"]);
                this["client"]["releasePlayerStateManager"](this["playerStateManager"]);
                this["sessionKey"] =
                  _convivaCoreSdk2["default"]["Client"]["NO_SESSION_KEY"];
                this["contentResource"] = {};
                this["_isActiveSession"] = false;
                this["isSeeking"] = false;
                _util2["default"]["log"]("[JoynConvivaManager] session stopped.");
              }
            },
          },
          {
            key: "updateContentResource",
            value: function updateContentResource(contentResource) {
              _util2["default"]["log"]("[JoynConvivaManager] updateContentResource");
              if (!this["isActiveSession"]()) {
                throw new _userException2["default"]("UpdateWithoutActiveSession");
              }
              this["contentResource"] = (0, _extends3["default"])(
                {},
                this["contentResource"],
                contentResource
              );
              this["client"]["updateContentMetadata"](
                this["sessionKey"],
                (0, _contentResourceMapper2["default"])(this["contentResource"])
              );
              _util2["default"]["log"]("[JoynConvivaManager] contentResource updated.");
            },
          },
          {
            key: "destroy",
            value: function destroy() {
              _util2["default"]["log"]("[JoynConvivaManager] destroy");
              this["stopSession"]();
              this["client"]["release"]();
              this["systemFactory"]["release"]();
              this["contentResource"] = null;
              this["systemFactory"] = null;
              this["client"] = null;
              this["sessionKey"] = null;
              _util2["default"]["log"]("[JoynConvivaManager] destroyed.");
            },
          },
          {
            key: "onPlayingCallback",
            value: function onPlayingCallback() {
              _util2["default"]["log"]("[JoynConvivaManager] Video playing.");
              if (this["isSeeking"]) {
                _util2["default"]["log"]("[JoynConvivaManager] Seek Ended.");
                this["isSeeking"] = false;
                this["playerStateManager"]["setPlayerSeekEnd"]();
              }
              this["playerStateManager"]["setPlayerState"](
                _convivaCoreSdk2["default"]["PlayerStateManager"]["PlayerState"][
                  "PLAYING"
                ]
              );
            },
          },
          {
            key: "onPauseCallback",
            value: function onPauseCallback() {
              _util2["default"]["log"]("[JoynConvivaManager] Video paused.");
              this["playerStateManager"]["setPlayerState"](
                _convivaCoreSdk2["default"]["PlayerStateManager"]["PlayerState"][
                  "PAUSED"
                ]
              );
            },
          },
          {
            key: "onBufferingCallback",
            value: function onBufferingCallback() {
              _util2["default"]["log"]("[JoynConvivaManager] Buffering.");
              this["playerStateManager"]["setPlayerState"](
                _convivaCoreSdk2["default"]["PlayerStateManager"]["PlayerState"][
                  "BUFFERING"
                ]
              );
            },
          },
          {
            key: "onEndedCallback",
            value: function onEndedCallback() {
              _util2["default"]["log"]("[JoynConvivaManager] Video ended.");
              this["playerStateManager"]["setPlayerState"](
                _convivaCoreSdk2["default"]["PlayerStateManager"]["PlayerState"][
                  "STOPPED"
                ]
              );
              this["stopSession"]();
            },
          },
          {
            key: "onErrorCallback",
            value: function onErrorCallback(data) {
              _util2["default"]["log"]("[JoynConvivaManager] Video playback error.");
              if (!this["isActiveSession"]()) {
                var _contentResource$stre = this["contentResource"]["streamUrl"],
                  streamUrl =
                    _contentResource$stre === undefined
                      ? ""
                      : _contentResource$stre;
                this["startSession"](streamUrl);
                this["playerStateManager"]["sendError"](
                  data["devMessage"] || data["message"],
                  _convivaCoreSdk2["default"]["Client"]["ErrorSeverity"][
                    "FATAL"
                  ]
                );
                this["stopSession"]();
              } else {
                this["playerStateManager"]["sendError"](
                  data["devMessage"] || data["message"],
                  _convivaCoreSdk2["default"]["Client"]["ErrorSeverity"][
                    "FATAL"
                  ]
                );
              }
            },
          },
          {
            key: "onBitrateSwitchingCallback",
            value: function onBitrateSwitchingCallback(data) {
              _util2["default"]["log"]("[JoynConvivaManager] Bitrates switching.");
              this["playerStateManager"]["setBitrateKbps"](data["newBitrate"] / 1e3);
            },
          },
          {
            key: "onSeekingCallback",
            value: function onSeekingCallback(data) {
              _util2["default"]["log"]("[JoynConvivaManager] Seek started.");
              this["isSeeking"] = true;
              this["playerStateManager"]["setPlayerSeekStart"](
                Math["floor"](data["timeStamp"])
              );
            },
          },
          {
            key: "onPlaybackCancel",
            value: function onPlaybackCancel() {
              _util2["default"]["log"]("[JoynConvivaManager] Player close.");
              this["onEndedCallback"]();
            },
          },
        ]);
        return JoynConvivaManager;
      })();
      module["exports"] = JoynConvivaManager;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["__esModule"] = true;
      var _assign = __webpack_require__(63);
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
        default: __webpack_require__(64),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(65);
      module["exports"] = __webpack_require__(0)["Object"]["assign"];
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(3);
      $export($export["S"] + $export["F"], "Object", {
        assign: __webpack_require__(66),
      });
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var DESCRIPTORS = __webpack_require__(2);
      var getKeys = __webpack_require__(15);
      var gOPS = __webpack_require__(28);
      var pIE = __webpack_require__(18);
      var toObject = __webpack_require__(19);
      var IObject = __webpack_require__(38);
      var $assign = Object["assign"];
      module["exports"] =
        !$assign ||
        __webpack_require__(8)(function () {
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
      var toIObject = __webpack_require__(9);
      var toLength = __webpack_require__(68);
      var toAbsoluteIndex = __webpack_require__(69);
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
      var toInteger = __webpack_require__(24);
      var min = Math["min"];
      module["exports"] = function (it) {
        return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
      };
    },
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(24);
      var max = Math["max"];
      var min = Math["min"];
      module["exports"] = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _stringify = __webpack_require__(71);
      var _stringify2 = _interopRequireDefault(_stringify);
      var _jwtDecode = __webpack_require__(73);
      var _jwtDecode2 = _interopRequireDefault(_jwtDecode);
      var _util = __webpack_require__(14);
      var _util2 = _interopRequireDefault(_util);
      var _convivaCoreSdk = __webpack_require__(20);
      var _convivaCoreSdk2 = _interopRequireDefault(_convivaCoreSdk);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      function durationInMiliseconds() {
        var _ref =
            arguments["length"] > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {},
          _ref$duration = _ref["duration"],
          duration = _ref$duration === undefined ? 0 : _ref$duration;
        return duration / 1e3;
      }
      var contentTypeToConvivaStreamType = {
        live:
          _convivaCoreSdk2["default"]["ContentMetadata"]["StreamType"]["LIVE"],
        vod:
          _convivaCoreSdk2["default"]["ContentMetadata"]["StreamType"]["VOD"],
      };
      function mapContentTypeToConvivaStreamType(contentType) {
        if (contentTypeToConvivaStreamType[contentType]) {
          return contentTypeToConvivaStreamType[contentType];
        }
        return _convivaCoreSdk2["default"]["ContentMetadata"]["StreamType"][
          "UNKNOWN"
        ];
      }
      function getStreamProtocol(streamUrl) {
        if (streamUrl !== undefined && streamUrl["includes"](".m3u8")) {
          return ["HLS", "HLS Player for Safari"];
        } else if (
          streamUrl !== undefined &&
          streamUrl["includes"](".mpd")
        ) {
          return ["MPEG-DASH", "Shaka Player"];
        } else {
          return ["Please Wait...", "Please Wait..."];
        }
      }
      function populateAssetNameFrom(segment, contentResource) {
        if (contentResource["contentType"] === "live") {
          return contentResource["id"];
        }
        var asset_title = "";
        if (
          segment &&
          segment["properties"] &&
          segment["properties"]["asset_title"]
        ) {
          asset_title = segment["properties"]["asset_title"];
        }
        var asset_subtitle = "";
        if (
          segment &&
          segment["properties"] &&
          segment["properties"]["asset_subtitle"]
        ) {
          asset_subtitle = segment["properties"]["asset_subtitle"];
        }
        return (
          asset_title +
          " - " +
          (!asset_subtitle["split"]("-")[1]
            ? asset_subtitle
            : asset_subtitle["split"]("-")[1])
        );
      }
      function getViewerID(segment, waitingMessage) {
        if (
          !segment ||
          !segment["context"] ||
          !segment["context"]["traits"]
        ) {
          return waitingMessage;
        }
        var _segment$context$trai = segment["context"]["traits"],
          anonymousId = _segment$context$trai["anonymousId"],
          userId = _segment$context$trai["userId"];
        return userId || anonymousId || waitingMessage;
      }
      function mapContentResourceToConvivaMetadata(contentResource) {
        _util2["default"]["log"]("mapContentResourceToConvivaMetadata");
        var waitingMessage = "Please Wait...";
        var _contentResource$clie = contentResource["clientData"],
          clientData =
            _contentResource$clie === undefined ? {} : _contentResource$clie,
          _contentResource$appI = contentResource["appInfo"];
        _contentResource$appI =
          _contentResource$appI === undefined ? {} : _contentResource$appI;
        var _contentResource$appI2 = _contentResource$appI["appVersion"],
          appVersion =
            _contentResource$appI2 === undefined
              ? "4.5.1"
              : _contentResource$appI2,
          _contentResource$appI3 = _contentResource$appI["applicationName"],
          applicationName =
            _contentResource$appI3 === undefined
              ? "7tv-web-player"
              : _contentResource$appI3,
          _contentResource$stre = contentResource["streamerVersion"],
          streamerVersion =
            _contentResource$stre === undefined
              ? "1.1.13"
              : _contentResource$stre,
          _contentResource$stre2 = contentResource["streamUrl"],
          streamUrl =
            _contentResource$stre2 === undefined
              ? ""
              : _contentResource$stre2,
          _contentResource$orch = contentResource["orchestratorName"],
          orchestratorName =
            _contentResource$orch === undefined
              ? ""
              : _contentResource$orch,
          _contentResource$orch2 = contentResource["orchestratorVersion"],
          orchestratorVersion =
            _contentResource$orch2 === undefined
              ? ""
              : _contentResource$orch2,
          _contentResource$enti = contentResource["entitlementToken"];
        _contentResource$enti =
          _contentResource$enti === undefined ? {} : _contentResource$enti;
        var _contentResource$enti2 = _contentResource$enti["server_token"],
          server_token =
            _contentResource$enti2 === undefined
              ? ""
              : _contentResource$enti2;
        var entitlementID = server_token
          ? (0, _jwtDecode2["default"])(server_token)["entitlement_id"]
          : waitingMessage;
        if (typeof streamUrl !== "string") {
          throw new Error(
            "Expected streamUrl to be a string, but got " +
              typeof streamUrl +
              ", " +
              (0, _stringify2["default"])(contentResource)
          );
        }
        var streamProtocol = getStreamProtocol(streamUrl);
        var metadata = new _convivaCoreSdk2["default"]["ContentMetadata"]();
        metadata["applicationName"] = applicationName;
        metadata["duration"] = durationInMiliseconds(clientData);
        metadata["streamType"] = mapContentTypeToConvivaStreamType(
          contentResource["contentType"]
        );
        metadata["assetName"] = populateAssetNameFrom(
          contentResource["clientData"]["segment"],
          contentResource
        );
        metadata["platform"] = clientData["os"];
        metadata["deviceType"] = clientData["deviceType"];
        metadata["streamUrl"] = streamUrl;
        metadata["viewerId"] = getViewerID(
          contentResource["clientData"]["segment"],
          waitingMessage
        );
        metadata["custom"] = {
          contentID: contentResource["id"],
          userAgent: clientData["userAgent"],
          playerVersion: appVersion,
          streamProtocol: streamProtocol[0],
          corePlayerFramework: streamProtocol[1],
          corePlayerVersion: streamerVersion || waitingMessage,
          playerOrchestratorName: orchestratorName,
          playerOrchestratorVersion: orchestratorVersion,
          entitlementID: entitlementID,
          connectionType: clientData["connectionType"] || waitingMessage,
        };
        return metadata;
      }
      module["exports"] = mapContentResourceToConvivaMetadata;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(72),
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
      "use strict";
      var base64_url_decode = __webpack_require__(74);
      function InvalidTokenError(message) {
        this["message"] = message;
      }
      InvalidTokenError["prototype"] = new Error();
      InvalidTokenError["prototype"]["name"] = "InvalidTokenError";
      module["exports"] = function (token, options) {
        if (typeof token !== "string") {
          throw new InvalidTokenError("Invalid token specified");
        }
        options = options || {};
        var pos = options["header"] === true ? 0 : 1;
        try {
          return JSON["parse"](
            base64_url_decode(token["split"](".")[pos])
          );
        } catch (e) {
          throw new InvalidTokenError("Invalid token specified: " + e["message"]);
        }
      };
      module["exports"]["InvalidTokenError"] = InvalidTokenError;
    },
    function (module, exports, __webpack_require__) {
      var atob = __webpack_require__(75);
      function b64DecodeUnicode(str) {
        return decodeURIComponent(
          atob(str)["replace"](/(.)/g, function (m, p) {
            var code = p["charCodeAt"](0)["toString"](16)["toUpperCase"]();
            if (code["length"] < 2) {
              code = "0" + code;
            }
            return "%" + code;
          })
        );
      }
      module["exports"] = function (str) {
        var output = str["replace"](/-/g, "+")["replace"](
          /_/g,
          "/"
        );
        switch (output["length"] % 4) {
          case 0:
            break;
          case 2:
            output += "==";
            break;
          case 3:
            output += "=";
            break;
          default:
            throw "Illegal base64url string!";
        }
        try {
          return b64DecodeUnicode(output);
        } catch (err) {
          return atob(output);
        }
      };
    },
    function (module, exports) {
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function InvalidCharacterError(message) {
        this["message"] = message;
      }
      InvalidCharacterError["prototype"] = new Error();
      InvalidCharacterError["prototype"]["name"] = "InvalidCharacterError";
      function polyfill(input) {
        var str = String(input)["replace"](/=+$/, "");
        if (str["length"] % 4 == 1) {
          throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
          var bc = 0, bs, buffer, idx = 0, output = "";
          (buffer = str["charAt"](idx++));
          ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
            ? (output += String["fromCharCode"](255 & (bs >> ((-2 * bc) & 6))))
            : 0
        ) {
          buffer = chars["indexOf"](buffer);
        }
        return output;
      }
      module["exports"] =
        (typeof window !== "undefined" &&
          window["atob"] &&
          window["atob"]["bind"](window)) ||
        polyfill;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _getPrototypeOf = __webpack_require__(77);
      var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
      var _classCallCheck2 = __webpack_require__(12);
      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
      var _possibleConstructorReturn2 = __webpack_require__(81);
      var _possibleConstructorReturn3 = _interopRequireDefault(
        _possibleConstructorReturn2
      );
      var _inherits2 = __webpack_require__(103);
      var _inherits3 = _interopRequireDefault(_inherits2);
      function _interopRequireDefault(obj) {
        return obj && obj["__esModule"]
          ? obj
          : {
              default: obj,
            };
      }
      var UserException = (function (_Error) {
        (0, _inherits3["default"])(UserException, _Error);
        function UserException(message) {
          (0, _classCallCheck3["default"])(this, UserException);
          var _this = (0, _possibleConstructorReturn3["default"])(
            this,
            (UserException["__proto__"] ||
              (0, _getPrototypeOf2["default"])(UserException))["call"](
              this,
              message
            )
          );
          _this["name"] = "UserException";
          return _this;
        }
        return UserException;
      })(Error);
      module["exports"] = UserException;
    },
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(78),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(79);
      module["exports"] = __webpack_require__(0)["Object"]["getPrototypeOf"];
    },
    function (module, exports, __webpack_require__) {
      var toObject = __webpack_require__(19);
      var $getPrototypeOf = __webpack_require__(40);
      __webpack_require__(80)("getPrototypeOf", function () {
        return function getPrototypeOf(it) {
          return $getPrototypeOf(toObject(it));
        };
      });
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(3);
      var core = __webpack_require__(0);
      var fails = __webpack_require__(8);
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
      "use strict";
      exports["__esModule"] = true;
      var _typeof2 = __webpack_require__(41);
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
      module["exports"] = {
        default: __webpack_require__(83),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(84);
      __webpack_require__(89);
      module["exports"] = __webpack_require__(32)["f"]("iterator");
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var $at = __webpack_require__(85)(true);
      __webpack_require__(42)(
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
      var toInteger = __webpack_require__(24);
      var defined = __webpack_require__(23);
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
      var create = __webpack_require__(30);
      var descriptor = __webpack_require__(13);
      var setToStringTag = __webpack_require__(31);
      var IteratorPrototype = {};
      __webpack_require__(6)(
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
      var dP = __webpack_require__(4);
      var anObject = __webpack_require__(11);
      var getKeys = __webpack_require__(15);
      module["exports"] = __webpack_require__(2)
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
      var document = __webpack_require__(1)["document"];
      module["exports"] = document && document["documentElement"];
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(90);
      var global = __webpack_require__(1);
      var hide = __webpack_require__(6);
      var Iterators = __webpack_require__(29);
      var TO_STRING_TAG = __webpack_require__(10)("toStringTag");
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
      "use strict";
      var addToUnscopables = __webpack_require__(91);
      var step = __webpack_require__(92);
      var Iterators = __webpack_require__(29);
      var toIObject = __webpack_require__(9);
      module["exports"] = __webpack_require__(42)(
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
      module["exports"] = {
        default: __webpack_require__(94),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(95);
      __webpack_require__(100);
      __webpack_require__(101);
      __webpack_require__(102);
      module["exports"] = __webpack_require__(0)["Symbol"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var global = __webpack_require__(1);
      var has = __webpack_require__(5);
      var DESCRIPTORS = __webpack_require__(2);
      var $export = __webpack_require__(3);
      var redefine = __webpack_require__(43);
      var META = __webpack_require__(96)["KEY"];
      var $fails = __webpack_require__(8);
      var shared = __webpack_require__(26);
      var setToStringTag = __webpack_require__(31);
      var uid = __webpack_require__(17);
      var wks = __webpack_require__(10);
      var wksExt = __webpack_require__(32);
      var wksDefine = __webpack_require__(33);
      var enumKeys = __webpack_require__(97);
      var isArray = __webpack_require__(98);
      var anObject = __webpack_require__(11);
      var isObject = __webpack_require__(7);
      var toObject = __webpack_require__(19);
      var toIObject = __webpack_require__(9);
      var toPrimitive = __webpack_require__(22);
      var createDesc = __webpack_require__(13);
      var _create = __webpack_require__(30);
      var gOPNExt = __webpack_require__(99);
      var $GOPD = __webpack_require__(45);
      var $GOPS = __webpack_require__(28);
      var $DP = __webpack_require__(4);
      var $keys = __webpack_require__(15);
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
        __webpack_require__(44)["f"] = gOPNExt[
          "f"
        ] = $getOwnPropertyNames;
        __webpack_require__(18)["f"] = $propertyIsEnumerable;
        $GOPS["f"] = $getOwnPropertySymbols;
        if (DESCRIPTORS && !__webpack_require__(16)) {
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
        __webpack_require__(6)(
          $Symbol[PROTOTYPE],
          TO_PRIMITIVE,
          $Symbol[PROTOTYPE]["valueOf"]
        );
      setToStringTag($Symbol, "Symbol");
      setToStringTag(Math, "Math", true);
      setToStringTag(global["JSON"], "JSON", true);
    },
    function (module, exports, __webpack_require__) {
      var META = __webpack_require__(17)("meta");
      var isObject = __webpack_require__(7);
      var has = __webpack_require__(5);
      var setDesc = __webpack_require__(4)["f"];
      var id = 0;
      var isExtensible =
        Object["isExtensible"] ||
        function () {
          return true;
        };
      var FREEZE = !__webpack_require__(8)(function () {
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
      var getKeys = __webpack_require__(15);
      var gOPS = __webpack_require__(28);
      var pIE = __webpack_require__(18);
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
      var cof = __webpack_require__(39);
      module["exports"] =
        Array["isArray"] ||
        function isArray(arg) {
          return cof(arg) == "Array";
        };
    },
    function (module, exports, __webpack_require__) {
      var toIObject = __webpack_require__(9);
      var gOPN = __webpack_require__(44)["f"];
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
    function (module, exports) {},
    function (module, exports, __webpack_require__) {
      __webpack_require__(33)("asyncIterator");
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(33)("observable");
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["__esModule"] = true;
      var _setPrototypeOf = __webpack_require__(104);
      var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
      var _create = __webpack_require__(108);
      var _create2 = _interopRequireDefault(_create);
      var _typeof2 = __webpack_require__(41);
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
    function (module, exports, __webpack_require__) {
      module["exports"] = {
        default: __webpack_require__(105),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(106);
      module["exports"] = __webpack_require__(0)["Object"]["setPrototypeOf"];
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(3);
      $export($export["S"], "Object", {
        setPrototypeOf: __webpack_require__(107)["set"],
      });
    },
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(7);
      var anObject = __webpack_require__(11);
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
                  set = __webpack_require__(34)(
                    Function["call"],
                    __webpack_require__(45)["f"](
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
        default: __webpack_require__(109),
        __esModule: true,
      };
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(110);
      var $Object = __webpack_require__(0)["Object"];
      module["exports"] = function create(P, D) {
        return $Object["create"](P, D);
      };
    },
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(3);
      $export($export["S"], "Object", {
        create: __webpack_require__(30),
      });
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      module["exports"] = function factory(dependencies) {
        var Conviva = dependencies["Conviva"],
          Html5Time = dependencies["Html5Time"],
          Html5Timer = dependencies["Html5Timer"],
          Html5Http = dependencies["Html5Http"],
          Html5Storage = dependencies["Html5Storage"],
          Html5Metadata = dependencies["Html5Metadata"],
          Html5Logging = dependencies["Html5Logging"];
        return {
          createConviva: function createConviva(customerKey, isLoggingEnabled) {
            var systemInterface = new Conviva["SystemInterface"](
              new Html5Time(),
              new Html5Timer(),
              new Html5Http(),
              new Html5Storage(),
              new Html5Metadata(),
              new Html5Logging()
            );
            var systemSettings = new Conviva["SystemSettings"]();
            if (isLoggingEnabled) {
              systemSettings["logLevel"] =
                Conviva["SystemSettings"]["LogLevel"]["DEBUG"];
            }
            var systemFactory = new Conviva["SystemFactory"](
              systemInterface,
              systemSettings
            );
            var clientSettings = new Conviva["ClientSettings"](customerKey);
            clientSettings["gatewayUrl"] = isLoggingEnabled
              ? "https://7tv-test.testonly.conviva.com"
              : "";
            var client = new Conviva["Client"](clientSettings, systemFactory);
            return {
              client: client,
              systemFactory: systemFactory,
            };
          },
        };
      };
    },
  ]);
