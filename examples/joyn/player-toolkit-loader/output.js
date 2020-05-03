
  !(function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n]["exports"];
      var i = (e[n] = {
        i: n,
        l: !1,
        exports: {},
      });
      return (
        t[n]["call"](i["exports"], i, i["exports"], r),
        (i["l"] = !0),
        i["exports"]
      );
    }
    (r["m"] = t),
      (r["c"] = e),
      (r["d"] = function (t, e, n) {
        r["o"](t, e) ||
          Object["defineProperty"](t, e, {
            enumerable: !0,
            get: n,
          });
      }),
      (r["r"] = function (t) {
        "undefined" != typeof Symbol &&
          Symbol["toStringTag"] &&
          Object["defineProperty"](t, Symbol["toStringTag"], {
            value: "Module",
          }),
          Object["defineProperty"](t, "__esModule", {
            value: !0,
          });
      }),
      (r["t"] = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t["__esModule"]) return t;
        var n = Object["create"](null);
        if (
          (r["r"](n),
          Object["defineProperty"](n, "default", {
            enumerable: !0,
            value: t,
          }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            r["d"](
              n,
              i,
              function (e) {
                return t[e];
              }["bind"](null, i)
            );
        return n;
      }),
      (r["n"] = function (t) {
        var e =
          t && t["__esModule"]
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return r["d"](e, "a", e), e;
      }),
      (r["o"] = function (t, e) {
        return Object["prototype"]["hasOwnProperty"]["call"](t, e);
      }),
      (r["p"] = ""),
      r((r["s"] = 125));
  })([
    function (t, e, r) {
      "use strict";
      var n = r(9),
        i = r(51)["f"],
        o = r(79),
        a = r(8),
        s = r(14),
        u = r(19),
        c = r(18),
        l = function (t) {
          var e = function (e, r, n) {
            if (this instanceof t) {
              switch (arguments["length"]) {
                case 0:
                  return new t();
                case 1:
                  return new t(e);
                case 2:
                  return new t(e, r);
              }
              return new t(e, r, n);
            }
            return t["apply"](this, arguments);
          };
          return (e["prototype"] = t["prototype"]), e;
        };
      t["exports"] = function (t, e) {
        var r,
          f,
          d,
          p,
          h,
          v,
          g,
          y,
          w = t["target"],
          m = t["global"],
          b = t["stat"],
          x = t["proto"],
          _ = m ? n : b ? n[w] : (n[w] || {})["prototype"],
          S = m ? a : a[w] || (a[w] = {}),
          k = S["prototype"];
        for (d in e)
          (r =
            !o(
              m ? d : w + (b ? "." : "#") + d,
              t["forced"]
            ) &&
            _ &&
            c(_, d)),
            (h = S[d]),
            r && (v = t["noTargetGet"] ? (y = i(_, d)) && y["value"] : _[d]),
            (p = r && v ? v : e[d]),
            (r && typeof h == typeof p) ||
              ((g =
                t["bind"] && r
                  ? s(p, n)
                  : t["wrap"] && r
                  ? l(p)
                  : x && "function" == typeof p
                  ? s(Function["call"], p)
                  : p),
              (t["sham"] ||
                (p && p["sham"]) ||
                (h && h["sham"])) &&
                u(g, "sham", !0),
              (S[d] = g),
              x &&
                (c(a, (f = w + "Prototype")) || u(a, f, {}),
                (a[f][d] = p),
                t["real"] && k && !k[d] && u(k, d, p)));
      };
    },
    function (t, e, r) {
      t["exports"] = r(126);
    },
    function (t, e) {
      t["exports"] = function (t) {
        return t && t["__esModule"]
          ? t
          : {
              default: t,
            };
      };
    },
    function (t, e, r) {
      var n = r(12);
      t["exports"] = function (t) {
        if (!n(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    function (t, e) {
      t["exports"] = !0;
    },
    function (t, e) {
      t["exports"] = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, e, r) {
      var n = r(3),
        i = r(96),
        o = r(27),
        a = r(14),
        s = r(68),
        u = r(97),
        c = function (t, e) {
          (this["stopped"] = t), (this["result"] = e);
        };
      (t["exports"] = function (t, e, r, l, f) {
        var d,
          p,
          h,
          v,
          g,
          y,
          w,
          m = a(e, r, l ? 2 : 1);
        if (f) d = t;
        else {
          if ("function" != typeof (p = s(t))) throw TypeError("Target is not iterable");
          if (i(p)) {
            for (h = 0, v = o(t["length"]); v > h; h++)
              if (
                (g = l ? m(n((w = t[h]))[0], w[1]) : m(t[h])) &&
                g instanceof c
              )
                return g;
            return new c(!1);
          }
          d = p["call"](t);
        }
        for (y = d["next"]; !(w = y["call"](d))["done"]; )
          if (
            "object" == typeof (g = u(d, m, w["value"], l)) &&
            g &&
            g instanceof c
          )
            return g;
        return new c(!1);
      })["stop"] = function (t) {
        return new c(!0, t);
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(161)),
        o = n(r(71)),
        a = n(r(106)),
        s = n(r(177)),
        u = r(192);
      var c = {
        logging: !1,
        isNumeric: function (t) {
          return /^-{0,1}\d*\.{0,1}\d+$/["test"](t);
        },
        getVersion: function () {
          return u["version"];
        },
        log: function (t, e) {
          this["logging"] &&
            (e ? console["log"](t, e) : console["log"](t));
        },
        getBrowser: function (t) {
          var e = new s["default"](t)["getBrowser"]()["name"];
          return e["match"]("Chrome")
            ? "Chrome"
            : e["match"](/Safari|Mobile Safari/)
            ? "Safari"
            : e["match"](/IE|Edge/)
            ? "IE"
            : "Chrome";
        },
        getDeviceType: function (t) {
          var e = new s["default"](t)["getDevice"]()["type"];
          return "mobile" === e ? "phone" : e || "desktop";
        },
        getDeviceOS: function (t) {
          var e = new s["default"](t)["getOS"]()["name"];
          return e ? e["toUpperCase"]() : "unknown";
        },
        isWebos: function (t) {
          return (
            null !== t && (0, o["default"])(t)["call"](t, "Web0S")
          );
        },
        isTizen2016: function (t) {
          var e,
            r = (0, s["default"])(t)["os"];
          return (
            "Tizen" === r["name"] &&
            (0, i["default"])((e = r["version"]))["call"](
              e,
              "2.4."
            )
          );
        },
        isSafari: function (t) {
          if (null === t) return !1;
          var e = this["getBrowser"](t),
            r = this["getDeviceOS"](t);
          return "Safari" === e && ("IOS" === r || "MAC OS" === r);
        },
        isPlaystation: function (t) {
          return (
            "PlayStation" === new s["default"](t)["getOS"]()["name"]
          );
        },
        ensureValueIsANumber: function (t) {
          return "number" == typeof t ? t : (0, a["default"])(t, 10);
        },
      };
      e["default"] = c;
    },
    function (t, e) {
      t["exports"] = {};
    },
    function (t, e, r) {
      (function (e) {
        var r = function (t) {
          return t && t["Math"] == Math && t;
        };
        t["exports"] =
          r("object" == typeof globalThis && globalThis) ||
          r("object" == typeof window && window) ||
          r("object" == typeof self && self) ||
          r("object" == typeof e && e) ||
          Function("return this")();
      }["call"](this, r(128)));
    },
    function (t, e) {
      t["exports"] = function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    function (t, e, r) {
      var n = r(9),
        i = r(83),
        o = r(18),
        a = r(59),
        s = r(86),
        u = r(135),
        c = i("wks"),
        l = n["Symbol"],
        f = u ? l : (l && l["withoutSetter"]) || a;
      t["exports"] = function (t) {
        return (
          o(c, t) ||
            (s && o(l, t) ? (c[t] = l[t]) : (c[t] = f("Symbol." + t))),
          c[t]
        );
      };
    },
    function (t, e) {
      t["exports"] = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, e, r) {
      var n = r(5);
      t["exports"] = !n(function () {
        return (
          7 !=
          Object["defineProperty"]({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    function (t, e, r) {
      var n = r(10);
      t["exports"] = function (t, e, r) {
        if ((n(t), void 0 === e)) return t;
        switch (r) {
          case 0:
            return function () {
              return t["call"](e);
            };
          case 1:
            return function (r) {
              return t["call"](e, r);
            };
          case 2:
            return function (r, n) {
              return t["call"](e, r, n);
            };
          case 3:
            return function (r, n, i) {
              return t["call"](e, r, n, i);
            };
        }
        return function () {
          return t["apply"](e, arguments);
        };
      };
    },
    function (t, e, r) {
      var n = r(111);
      t["exports"] = function (t, e) {
        (t["prototype"] = n(e["prototype"])),
          (t["prototype"]["constructor"] = t),
          (t["__proto__"] = e);
      };
    },
    function (t, e, r) {
      var n = r(8),
        i = r(9),
        o = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t["exports"] = function (t, e) {
        return arguments["length"] < 2
          ? o(n[t]) || o(i[t])
          : (n[t] && n[t][e]) || (i[t] && i[t][e]);
      };
    },
    function (t, e, r) {
      var n = r(8);
      t["exports"] = function (t) {
        return n[t + "Prototype"];
      };
    },
    function (t, e) {
      var r = {}["hasOwnProperty"];
      t["exports"] = function (t, e) {
        return r["call"](t, e);
      };
    },
    function (t, e, r) {
      var n = r(13),
        i = r(20),
        o = r(33);
      t["exports"] = n
        ? function (t, e, r) {
            return i["f"](t, e, o(1, r));
          }
        : function (t, e, r) {
            return (t[e] = r), t;
          };
    },
    function (t, e, r) {
      var n = r(13),
        i = r(78),
        o = r(3),
        a = r(54),
        s = Object["defineProperty"];
      e["f"] = n
        ? s
        : function (t, e, r) {
            if ((o(t), (e = a(e, !0)), o(r), i))
              try {
                return s(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r["value"]), t;
          };
    },
    function (t, e, r) {
      "use strict";
      t["exports"] = r(145);
    },
    function (t, e, r) {
      var n = r(146);
      function i(t, e, r, i, o, a, s) {
        try {
          var u = t[a](s),
            c = u["value"];
        } catch (t) {
          return void r(t);
        }
        u["done"] ? e(c) : n["resolve"](c)["then"](i, o);
      }
      t["exports"] = function (t) {
        return function () {
          var e = this,
            r = arguments;
          return new n(function (n, o) {
            var a = t["apply"](e, r);
            function s(t) {
              i(a, n, o, s, u, "next", t);
            }
            function u(t) {
              i(a, n, o, s, u, "throw", t);
            }
            s(void 0);
          });
        };
      };
    },
    function (t, e, r) {
      var n = r(4),
        i = r(223);
      t["exports"] = n
        ? i
        : function (t) {
            return Map["prototype"]["entries"]["call"](t);
          };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireDefault = __webpack_require__(2),
        _Object$defineProperty = __webpack_require__(1);
      _Object$defineProperty(exports, "__esModule", {
        value: !0,
      }),
        (exports["default"] = void 0);
      var _includes = _interopRequireDefault(__webpack_require__(71)),
        _regenerator = _interopRequireDefault(__webpack_require__(21)),
        _promise = _interopRequireDefault(__webpack_require__(37)),
        _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(22)),
        _scriptjs = _interopRequireDefault(__webpack_require__(267)),
        _util = _interopRequireDefault(__webpack_require__(7)),
        _httpClient = __webpack_require__(119),
        ScriptLoader = (function () {
          function ScriptLoader(t, e, r, n) {
            void 0 === n && (n = _scriptjs["default"]),
              (this["cacheBuster"] = t),
              (this["config"] = e),
              (this["name"] = r),
              (this["useCacheBuster"] = !0),
              (this["beFailSafe"] = !1),
              (_util["default"]["logging"] =
                e["settings"] && e["settings"]["logging"]),
              (this["scriptDownloader"] = n),
              (this["_httpClient"] = (0, _httpClient["createHttpClient"])({
                logger: _util["default"],
                XMLHttpRequest: window["XMLHttpRequest"],
              }));
          }
          var _proto = ScriptLoader["prototype"];
          return (
            (_proto["getUrl"] = function () {
              throw new Error("Not implemented");
            }),
            (_proto["download"] = (function () {
              var t = (0, _asyncToGenerator2["default"])(
                _regenerator["default"]["mark"](function t() {
                  var e,
                    r = this;
                  return _regenerator["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              _util["default"]["log"](
                                "[ScriptLoader]: Downloading " + this["name"] + "..."
                              ),
                              (e = this["getUrl"]()),
                              (e = this["_appendCacheBuster"](e)),
                              this["scriptDownloader"](e, this["name"]),
                              t["abrupt"](
                                "return",
                                new _promise["default"](function (t, e) {
                                  try {
                                    r["scriptDownloader"]["ready"](
                                      r["name"],
                                      function () {
                                        var n = r["checkWindowObjectExists"]();
                                        _util["default"]["log"](
                                          "[ScriptLoader]: Load result for " +
                                            r["name"] +
                                            " : '" +
                                            (n || "OK")
                                        ),
                                          !n || r["beFailSafe"]
                                            ? ((r["loadError"] = n || void 0),
                                              t())
                                            : e(n);
                                      }
                                    );
                                  } catch (t) {
                                    _util["default"]["log"](
                                      "[ScriptLoader]: Unknown error downloading " +
                                        r["name"] +
                                        ". Error : ', " +
                                        t
                                    ),
                                      e(t);
                                  }
                                })
                              )
                            );
                          case 5:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (_proto["_appendCacheBuster"] = function (t) {
              return this["useCacheBuster"]
                ? "" +
                    t +
                    (((0, _includes["default"])(t)["call"](
                      t,
                      "?"
                    )
                      ? "&"
                      : "?") +
                      "cache=" +
                      this["cacheBuster"])
                : t;
            }),
            (_proto["downloadUsingXhr"] = (function () {
              var _downloadUsingXhr = (0, _asyncToGenerator2["default"])(
                _regenerator["default"]["mark"](function _callee2() {
                  var url, responseBody;
                  return _regenerator["default"]["wrap"](
                    function _callee2$(_context2) {
                      for (;;)
                        switch (
                          (_context2["prev"] = _context2["next"])
                        ) {
                          case 0:
                            return (
                              _util["default"]["log"](
                                "[ScriptLoader]: XHR Downloading  " + this["name"] + "..."
                              ),
                              (url =
                                this["getUrl"]() +
                                "?cache=" +
                                this["cacheBuster"]),
                              (_context2["next"] = 4),
                              this["_httpClient"]["get"](url)
                            );
                          case 4:
                            (responseBody = _context2["sent"]),
                              eval(responseBody),
                              _util["default"]["log"](
                                "[ScriptLoader]: Evaluated script " + this["name"] + "..."
                              );
                          case 7:
                          case "end":
                            return _context2["stop"]();
                        }
                    },
                    _callee2,
                    this
                  );
                })
              );
              function downloadUsingXhr() {
                return _downloadUsingXhr["apply"](this, arguments);
              }
              return downloadUsingXhr;
            })()),
            (_proto["checkWindowObjectExists"] = function () {
              if (
                (_util["default"]["log"](
                  "[ScriptLoader]: Checking for window object : '" + this["name"] + "'"
                ),
                !window[this["name"]])
              ) {
                var t = new Error(this["name"] + " is not in window");
                return (t["code"] = "UNABLE_TO_LOAD_SCRIPT"), t;
              }
              return (
                _util["default"]["log"](
                  "[ScriptLoader]: " + this["name"] + " ready"
                ),
                null
              );
            }),
            ScriptLoader
          );
        })(),
        _default = ScriptLoader;
      exports["default"] = _default;
    },
    function (t, e) {
      var r = {}["toString"];
      t["exports"] = function (t) {
        return r["call"](t)["slice"](8, -1);
      };
    },
    function (t, e, r) {
      var n = r(29);
      t["exports"] = function (t) {
        return Object(n(t));
      };
    },
    function (t, e, r) {
      var n = r(62),
        i = Math["min"];
      t["exports"] = function (t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0;
      };
    },
    function (t, e, r) {
      var n = r(53),
        i = r(29);
      t["exports"] = function (t) {
        return n(i(t));
      };
    },
    function (t, e) {
      t["exports"] = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    function (t, e) {
      t["exports"] = {};
    },
    function (t, e, r) {
      var n,
        i,
        o,
        a = r(132),
        s = r(9),
        u = r(12),
        c = r(19),
        l = r(18),
        f = r(58),
        d = r(39),
        p = s["WeakMap"];
      if (a) {
        var h = new p(),
          v = h["get"],
          g = h["has"],
          y = h["set"];
        (n = function (t, e) {
          return y["call"](h, t, e), e;
        }),
          (i = function (t) {
            return v["call"](h, t) || {};
          }),
          (o = function (t) {
            return g["call"](h, t);
          });
      } else {
        var w = f("state");
        (d[w] = !0),
          (n = function (t, e) {
            return c(t, w, e), e;
          }),
          (i = function (t) {
            return l(t, w) ? t[w] : {};
          }),
          (o = function (t) {
            return l(t, w);
          });
      }
      t["exports"] = {
        set: n,
        get: i,
        has: o,
        enforce: function (t) {
          return o(t) ? i(t) : n(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var r;
            if (!u(e) || (r = i(e))["type"] !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return r;
          };
        },
      };
    },
    function (t, e, r) {
      var n = r(13),
        i = r(5),
        o = r(18),
        a = Object["defineProperty"],
        s = {},
        u = function (t) {
          throw t;
        };
      t["exports"] = function (t, e) {
        if (o(s, t)) return s[t];
        e || (e = {});
        var r = [][t],
          c = !!o(e, "ACCESSORS") && e["ACCESSORS"],
          l = o(e, 0) ? e[0] : u,
          f = o(e, 1) ? e[1] : void 0;
        return (s[t] =
          !!r &&
          !i(function () {
            if (c && !n) return !0;
            var t = {
              length: -1,
            };
            c
              ? a(t, 1, {
                  enumerable: !0,
                  get: u,
                })
              : (t[1] = 1),
              r["call"](t, l, f);
          }));
      };
    },
    function (t, e) {
      t["exports"] = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function (t, e, r) {
      var n,
        i = r(3),
        o = r(136),
        a = r(88),
        s = r(39),
        u = r(89),
        c = r(55),
        l = r(58),
        f = l("IE_PROTO"),
        d = function () {},
        p = function (t) {
          return "<script>" + t + "</script>";
        },
        h = function () {
          try {
            n = document["domain"] && new ActiveXObject("htmlfile");
          } catch (t) {}
          var t, e;
          h = n
            ? (function (t) {
                t["write"](p("")), t["close"]();
                var e = t["parentWindow"]["Object"];
                return (t = null), e;
              })(n)
            : (((e = c("iframe"))["style"]["display"] =
                "none"),
              u["appendChild"](e),
              (e["src"] = String("javascript:")),
              (t = e["contentWindow"]["document"])["open"](),
              t["write"](p("document.F=Object")),
              t["close"](),
              t["F"]);
          for (var r = a["length"]; r--; ) delete h["prototype"][a[r]];
          return h();
        };
      (s[f] = !0),
        (t["exports"] =
          Object["create"] ||
          function (t, e) {
            var r;
            return (
              null !== t
                ? ((d["prototype"] = i(t)),
                  (r = new d()),
                  (d["prototype"] = null),
                  (r[f] = t))
                : (r = h()),
              void 0 === e ? r : o(r, e)
            );
          });
    },
    function (t, e, r) {
      var n = r(3),
        i = r(10),
        o = r(11)("species");
      t["exports"] = function (t, e) {
        var r,
          a = n(t)["constructor"];
        return void 0 === a || null == (r = n(a)[o]) ? e : i(r);
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(10),
        i = function (t) {
          var e, r;
          (this["promise"] = new t(function (t, n) {
            if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
            (e = t), (r = n);
          })),
            (this["resolve"] = n(e)),
            (this["reject"] = n(r));
        };
      t["exports"]["f"] = function (t) {
        return new i(t);
      };
    },
    function (t, e, r) {
      t["exports"] = r(198);
    },
    function (t, e, r) {
      var n = r(199);
      function i() {
        return (
          (t["exports"] = i =
            n ||
            function (t) {
              for (var e = 1; e < arguments["length"]; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object["prototype"]["hasOwnProperty"]["call"](r, n) &&
                    (t[n] = r[n]);
              }
              return t;
            }),
          i["apply"](this, arguments)
        );
      }
      t["exports"] = i;
    },
    function (t, e) {
      t["exports"] = {};
    },
    function (t, e, r) {
      var n = r(18),
        i = r(26),
        o = r(58),
        a = r(85),
        s = o("IE_PROTO"),
        u = Object["prototype"];
      t["exports"] = a
        ? Object["getPrototypeOf"]
        : function (t) {
            return (
              (t = i(t)),
              n(t, s)
                ? t[s]
                : "function" == typeof t["constructor"] &&
                  t instanceof t["constructor"]
                ? t["constructor"]["prototype"]
                : t instanceof Object
                ? u
                : null
            );
          };
    },
    function (t, e, r) {
      var n = r(137),
        i = r(88);
      t["exports"] =
        Object["keys"] ||
        function (t) {
          return n(t, i);
        };
    },
    function (t, e, r) {
      var n = r(63),
        i = r(20)["f"],
        o = r(19),
        a = r(18),
        s = r(138),
        u = r(11)("toStringTag");
      t["exports"] = function (t, e, r, c) {
        if (t) {
          var l = r ? t : t["prototype"];
          a(l, u) ||
            i(l, u, {
              configurable: !0,
              value: e,
            }),
            c && !n && o(l, "toString", s);
        }
      };
    },
    function (t, e, r) {
      var n = r(63),
        i = r(25),
        o = r(11)("toStringTag"),
        a =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          );
      t["exports"] = n
        ? i
        : function (t) {
            var e, r, n;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (r = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = Object(t)), o))
              ? r
              : a
              ? i(e)
              : "Object" == (n = i(e)) &&
                "function" == typeof e["callee"]
              ? "Arguments"
              : n;
          };
    },
    function (t, e, r) {
      var n = r(19);
      t["exports"] = function (t, e, r, i) {
        i && i["enumerable"] ? (t[e] = r) : n(t, e, r);
      };
    },
    function (t, e, r) {
      var n = r(14),
        i = r(53),
        o = r(26),
        a = r(27),
        s = r(90),
        u = []["push"],
        c = function (t) {
          var e = 1 == t,
            r = 2 == t,
            c = 3 == t,
            l = 4 == t,
            f = 6 == t,
            d = 5 == t || f;
          return function (p, h, v, g) {
            for (
              var y,
                w,
                m = o(p),
                b = i(m),
                x = n(h, v, 3),
                _ = a(b["length"]),
                S = 0,
                k = g || s,
                E = e ? k(p, _) : r ? k(p, 0) : void 0;
              _ > S;
              S++
            )
              if ((d || S in b) && ((w = x((y = b[S]), S, m)), t))
                if (e) E[S] = w;
                else if (w)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return y;
                    case 6:
                      return S;
                    case 2:
                      u["call"](E, y);
                  }
                else if (l) return !1;
            return f ? -1 : c || l ? l : E;
          };
        };
      t["exports"] = {
        forEach: c(0),
        map: c(1),
        filter: c(2),
        some: c(3),
        every: c(4),
        find: c(5),
        findIndex: c(6),
      };
    },
    function (t, e, r) {
      var n = r(25);
      t["exports"] =
        Array["isArray"] ||
        function (t) {
          return "Array" == n(t);
        };
    },
    function (t, e) {
      t["exports"] = function (t) {
        try {
          return {
            error: !1,
            value: t(),
          };
        } catch (t) {
          return {
            error: !0,
            value: t,
          };
        }
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(208)),
        o = n(r(15)),
        a = (function (t) {
          function e(r, n, o) {
            var a;
            void 0 === o && (o = null);
            var s = r;
            return (
              s ||
                (s = {
                  code: "UNKNOWN_ERROR",
                  message: "",
                }),
              "string" == typeof s &&
                (s = {
                  message: s,
                }),
              ((a = t["call"](this) || this)["code"] = s["code"]
                ? s["code"]
                : "UNKNOWN_ERROR"),
              (a["message"] = e["getMessage"](a["code"])),
              (a["code"] =
                "UNKNOWN_ERROR" === a["code"] && "string" == typeof n
                  ? n + "_UNKNOWN_ERROR"
                  : a["code"]),
              (a["devMessage"] = s["message"]),
              s["stack"] && (a["stack"] = s["stack"]),
              o && o["emit"]("error", (0, i["default"])(a)),
              a
            );
          }
          return (
            (0, o["default"])(e, t),
            (e["getMessage"] = function (t) {
              switch (t || "UNKNOWN_ERROR") {
                case "UNABLE_TO_LOAD_SCRIPT":
                  return "Wer mag schon Werbung? Leider ist sie trotzdem nötig, damit wir dir Joyn kostenlos anbieten können. Du musst deinen Adblocker nicht deaktivieren. Füge joyn.de doch einfach als Ausnahme hinzu.";
                case "ENT_AssetNotAvailableInCountry":
                  return "Aus Lizenzgründen ist die Wiedergabe im Ausland leider nicht möglich.";
                case "MAX_CONCURRENT_STREAMS":
                case "MAX_CONCURRENT_CONTENT_STREAMS":
                  return "Du kannst diesen Stream nicht weiterschauen, weil mit deinem Account ein anderer Stream gestartet wurde. Du kannst nur mit einem Gerät gleichzeitig streamen.";
                case "ENT_EUMediaPortability":
                  return "Aus Lizenzgründen darfst du nichts mehr im Ausland anschauen.  Wenn du wieder in Deutschland bist und einen Stream startest, kannst du anschließend wieder im Ausland schauen.";
                case "ENT_DeviceLimitRestriction":
                  return "Du kannst das auf diesem Gerät leider nicht anschauen, weil du für PLUS+ Inhalte nur höchstens 3 Geräte nutzen darfst. Wenn du Joyn schon auf 3 Geräten nutzt, kannst du nur alle 30 Tage ein Gerät austauschen. Bis dahin kannst du hier nur die Inhalte der kostenlosen Version von Joyn anschauen.";
                case "ENT_AccountValidation":
                  return 'Du kannst das erst anschauen, wenn du deine E-Mail Adresse bestätigt hast. Klick in deiner Bestätigungs-Mail einfach auf "E-Mail bestätigen". ';
                case "ENT_VOD_AgeVerificationSetupRequired":
                  return "Dafür brauchst du eine Jugendschutz-PIN. Um Filme oder Serien mit einer Altersfreigabe ab 18 Jahren zu sehen, musst du eine Jugendschutz-PIN setzen. Damit stellen wir sicher, dass Minderjährige keine jugendschutzrelevanten Inhalte anschauen können.";
                case "ENT_LIVE_AgeVerificationSetupRequired":
                  return "Dafür brauchst du eine Jugendschutz-PIN. Auf diesem Sender kommen manchmal Sendungen, die nicht für Minderjährige geeignet sind. Wenn du diesen Sender schauen willst, musst du erst eine Jugendschutz-PIN setzen.";
                case "UNKNOWN_ERROR":
                default:
                  return "Kannst du andere Videos auch nicht mehr anschauen? Keine Panik, der Kundenservice hilft dir weiter.";
              }
            }),
            e
          );
        })((0, n(r(209))["default"])(Error));
      e["default"] = a;
    },
    function (t) {
      t["exports"] = JSON["parse"]('{"test":{"ad-tracker":{"url":"https://static.t1d-vod-playout-test.aws.route71.net/ad-tracker/dist/ad-tracker.min.js"},"ad-source-fetcher":{"url":"https://static.t1d-vod-playout-test.aws.route71.net/ad-source-fetcher/dist/ad-source-fetcher.min.js"},"playback-monitoring":{"url":"https://static.t1d-vod-playout-test.aws.route71.net/playback-monitoring/dist/playback-monitoring.min.js"},"player-heartbeat-producer":{"url":"https://static.t1d-vod-playout-test.aws.route71.net/player-heartbeat-producer/dist/player-heartbeat-producer.min.js"}},"stage":{"ad-tracker":{"url":"https://static.t1d-vod-playout-stage.aws.route71.net/ad-tracker/dist/ad-tracker.min.js"},"ad-source-fetcher":{"url":"https://static.t1d-vod-playout-stage.aws.route71.net/ad-source-fetcher/dist/ad-source-fetcher.min.js"},"playback-monitoring":{"url":"https://static.t1d-vod-playout-stage.aws.route71.net/playback-monitoring/dist/playback-monitoring.min.js"},"player-heartbeat-producer":{"url":"https://static.t1d-vod-playout-stage.aws.route71.net/player-heartbeat-producer/dist/player-heartbeat-producer.min.js"}},"prod":{"ad-tracker":{"url":"https://static.t1p-vod-playout-prod.aws.route71.net/ad-tracker/dist/ad-tracker.min.js"},"ad-source-fetcher":{"url":"https://static.t1p-vod-playout-prod.aws.route71.net/ad-source-fetcher/dist/ad-source-fetcher.min.js"},"playback-monitoring":{"url":"https://static.t1p-vod-playout-prod.aws.route71.net/playback-monitoring/dist/playback-monitoring.min.js"},"player-heartbeat-producer":{"url":"https://static.t1p-vod-playout-prod.aws.route71.net/player-heartbeat-producer/dist/player-heartbeat-producer.min.js"}}}');
    },
    function (t, e, r) {
      "use strict";
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["csaiEventOverrideMapping"] = e["PlayerMimetype"] = void 0);
      e["PlayerMimetype"] = {
        DASH: "application/dash+xml",
        HLS: "application/x-mpegURL",
      };
      e["csaiEventOverrideMapping"] = {
        playerready: "internal-playerready",
        ended: "internal-ended",
        error: "internal-error",
      };
    },
    function (t, e, r) {
      var n = r(13),
        i = r(52),
        o = r(33),
        a = r(28),
        s = r(54),
        u = r(18),
        c = r(78),
        l = Object["getOwnPropertyDescriptor"];
      e["f"] = n
        ? l
        : function (t, e) {
            if (((t = a(t)), (e = s(e, !0)), c))
              try {
                return l(t, e);
              } catch (t) {}
            if (u(t, e)) return o(!i["f"]["call"](t, e), t[e]);
          };
    },
    function (t, e, r) {
      "use strict";
      var n = {}["propertyIsEnumerable"],
        i = Object["getOwnPropertyDescriptor"],
        o =
          i &&
          !n["call"](
            {
              1: 2,
            },
            1
          );
      e["f"] = o
        ? function (t) {
            var e = i(this, t);
            return !!e && e["enumerable"];
          }
        : n;
    },
    function (t, e, r) {
      var n = r(5),
        i = r(25),
        o = ""["split"];
      t["exports"] = n(function () {
        return !Object("z")["propertyIsEnumerable"](0);
      })
        ? function (t) {
            return "String" == i(t)
              ? o["call"](t, "")
              : Object(t);
          }
        : Object;
    },
    function (t, e, r) {
      var n = r(12);
      t["exports"] = function (t, e) {
        if (!n(t)) return t;
        var r, i;
        if (
          e &&
          "function" == typeof (r = t["toString"]) &&
          !n((i = r["call"](t)))
        )
          return i;
        if (
          "function" == typeof (r = t["valueOf"]) &&
          !n((i = r["call"](t)))
        )
          return i;
        if (
          !e &&
          "function" == typeof (r = t["toString"]) &&
          !n((i = r["call"](t)))
        )
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, e, r) {
      var n = r(9),
        i = r(12),
        o = n["document"],
        a = i(o) && i(o["createElement"]);
      t["exports"] = function (t) {
        return a ? o["createElement"](t) : {};
      };
    },
    function (t, e, r) {
      t["exports"] = r(130);
    },
    function (t, e, r) {
      r(131);
      var n = r(140),
        i = r(9),
        o = r(43),
        a = r(19),
        s = r(30),
        u = r(11)("toStringTag");
      for (var c in n) {
        var l = i[c],
          f = l && l["prototype"];
        f && o(f) !== u && a(f, u, c), (s[c] = s["Array"]);
      }
    },
    function (t, e, r) {
      var n = r(83),
        i = r(59),
        o = n("keys");
      t["exports"] = function (t) {
        return o[t] || (o[t] = i(t));
      };
    },
    function (t, e) {
      var r = 0,
        n = Math["random"]();
      t["exports"] = function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++r + n)["toString"](36)
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(134),
        o = r(40),
        a = r(64),
        s = r(42),
        u = r(19),
        c = r(44),
        l = r(11),
        f = r(4),
        d = r(30),
        p = r(84),
        h = p["IteratorPrototype"],
        v = p["BUGGY_SAFARI_ITERATORS"],
        g = l("iterator"),
        y = function () {
          return this;
        };
      t["exports"] = function (t, e, r, l, p, w, m) {
        i(r, e, l);
        var b,
          x,
          _,
          S = function (t) {
            if (t === p && T) return T;
            if (!v && t in A) return A[t];
            switch (t) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new r(this, t);
                };
            }
            return function () {
              return new r(this);
            };
          },
          k = e + " Iterator",
          E = !1,
          A = t["prototype"],
          L = A[g] || A["@@iterator"] || (p && A[p]),
          T = (!v && L) || S(p),
          P = ("Array" == e && A["entries"]) || L;
        if (
          (P &&
            ((b = o(P["call"](new t()))),
            h !== Object["prototype"] &&
              b["next"] &&
              (f ||
                o(b) === h ||
                (a ? a(b, h) : "function" != typeof b[g] && u(b, g, y)),
              s(b, k, !0, !0),
              f && (d[k] = y))),
          "values" == p &&
            L &&
            "values" !== L["name"] &&
            ((E = !0),
            (T = function () {
              return L["call"](this);
            })),
          (f && !m) || A[g] === T || u(A, g, T),
          (d[e] = T),
          p)
        )
          if (
            ((x = {
              values: S("values"),
              keys: w ? T : S("keys"),
              entries: S("entries"),
            }),
            m)
          )
            for (_ in x) (!v && !E && _ in A) || c(A, _, x[_]);
          else
            n(
              {
                target: e,
                proto: !0,
                forced: v || E,
              },
              x
            );
        return x;
      };
    },
    function (t, e, r) {
      var n = r(28),
        i = r(27),
        o = r(87),
        a = function (t) {
          return function (e, r, a) {
            var s,
              u = n(e),
              c = i(u["length"]),
              l = o(a, c);
            if (t && r != r) {
              for (; c > l; ) if ((s = u[l++]) != s) return !0;
            } else
              for (; c > l; l++)
                if ((t || l in u) && u[l] === r) return t || l || 0;
            return !t && -1;
          };
        };
      t["exports"] = {
        includes: a(!0),
        indexOf: a(!1),
      };
    },
    function (t, e) {
      var r = Math["ceil"],
        n = Math["floor"];
      t["exports"] = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
      };
    },
    function (t, e, r) {
      var n = {};
      (n[r(11)("toStringTag")] = "z"),
        (t["exports"] = "[object z]" === String(n));
    },
    function (t, e, r) {
      var n = r(3),
        i = r(139);
      t["exports"] =
        Object["setPrototypeOf"] ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                r = {};
              try {
                (t = Object["getOwnPropertyDescriptor"](Object["prototype"], "__proto__")[
                  "set"
                ])["call"](r, []),
                  (e = r instanceof Array);
              } catch (t) {}
              return function (r, o) {
                return (
                  n(r), i(o), e ? t["call"](r, o) : (r["__proto__"] = o), r
                );
              };
            })()
          : void 0);
    },
    function (t, e, r) {
      "use strict";
      var n = r(5);
      t["exports"] = function (t, e) {
        var r = [][t];
        return (
          !!r &&
          n(function () {
            r["call"](
              null,
              e ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(148)["charAt"],
        i = r(31),
        o = r(60),
        a = i["set"],
        s = i["getterFor"]("String Iterator");
      o(
        String,
        "String",
        function (t) {
          a(this, {
            type: "String Iterator",
            string: String(t),
            index: 0,
          });
        },
        function () {
          var t,
            e = s(this),
            r = e["string"],
            i = e["index"];
          return i >= r["length"]
            ? {
                value: void 0,
                done: !0,
              }
            : ((t = n(r, i)),
              (e["index"] += t["length"]),
              {
                value: t,
                done: !1,
              });
        }
      );
    },
    function (t, e) {
      t["exports"] = function (t, e, r) {
        if (!(t instanceof e))
          throw TypeError(
            "Incorrect " + (r ? r + " " : "") + "invocation"
          );
        return t;
      };
    },
    function (t, e, r) {
      var n = r(43),
        i = r(30),
        o = r(11)("iterator");
      t["exports"] = function (t) {
        if (null != t) return t[o] || t["@@iterator"] || i[n(t)];
      };
    },
    function (t, e, r) {
      var n = r(16);
      t["exports"] = n("navigator", "userAgent") || "";
    },
    function (t, e, r) {
      var n,
        i,
        o = r(9),
        a = r(69),
        s = o["process"],
        u = s && s["versions"],
        c = u && u["v8"];
      c
        ? (i = (n = c["split"]("."))[0] + n[1])
        : a &&
          (!(n = a["match"](/Edge\/(\d+)/)) || n[1] >= 74) &&
          (n = a["match"](/Chrome\/(\d+)/)) &&
          (i = n[1]),
        (t["exports"] = i && +i);
    },
    function (t, e, r) {
      t["exports"] = r(167);
    },
    function (t, e) {
      t["exports"] = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    function (t, e, r) {
      t["exports"] = r(188);
    },
    function (t, e, r) {
      "use strict";
      var n = r(54),
        i = r(20),
        o = r(33);
      t["exports"] = function (t, e, r) {
        var a = n(e);
        a in t ? i["f"](t, a, o(0, r)) : (t[a] = r);
      };
    },
    function (t, e, r) {
      var n = r(5),
        i = r(11),
        o = r(70),
        a = i("species");
      t["exports"] = function (t) {
        return (
          o >= 51 ||
          !n(function () {
            var e = [];
            return (
              ((e["constructor"] = {})[a] = function () {
                return {
                  foo: 1,
                };
              }),
              1 !== e[t](Boolean)["foo"]
            );
          })
        );
      };
    },
    function (t, e, r) {
      t["exports"] = r(195);
    },
    function (t, e, r) {
      r(127);
      var n = r(8)["Object"],
        i = (t["exports"] = function (t, e, r) {
          return n["defineProperty"](t, e, r);
        });
      n["defineProperty"]["sham"] && (i["sham"] = !0);
    },
    function (t, e, r) {
      var n = r(13),
        i = r(5),
        o = r(55);
      t["exports"] =
        !n &&
        !i(function () {
          return (
            7 !=
            Object["defineProperty"](o("div"), "a", {
              get: function () {
                return 7;
              },
            })["a"]
          );
        });
    },
    function (t, e, r) {
      var n = r(5),
        i = /#|\.prototype\./,
        o = function (t, e) {
          var r = s[a(t)];
          return r == c || (r != u && ("function" == typeof e ? n(e) : !!e));
        },
        a = (o["normalize"] = function (t) {
          return String(t)["replace"](i, ".")["toLowerCase"]();
        }),
        s = (o["data"] = {}),
        u = (o["NATIVE"] = "N"),
        c = (o["POLYFILL"] = "P");
      t["exports"] = o;
    },
    function (t, e) {
      t["exports"] = function () {};
    },
    function (t, e, r) {
      var n = r(82),
        i = Function["toString"];
      "function" != typeof n["inspectSource"] &&
        (n["inspectSource"] = function (t) {
          return i["call"](t);
        }),
        (t["exports"] = n["inspectSource"]);
    },
    function (t, e, r) {
      var n = r(9),
        i = r(133),
        o = n["__core-js_shared__"] || i("__core-js_shared__", {});
      t["exports"] = o;
    },
    function (t, e, r) {
      var n = r(4),
        i = r(82);
      (t["exports"] = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })("versions", [])["push"]({
        version: "3.6.4",
        mode: n ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (t, e, r) {
      "use strict";
      var n,
        i,
        o,
        a = r(40),
        s = r(19),
        u = r(18),
        c = r(11),
        l = r(4),
        f = c("iterator"),
        d = !1;
      []["keys"] &&
        ("next" in (o = []["keys"]())
          ? (i = a(a(o))) !== Object["prototype"] && (n = i)
          : (d = !0)),
        null == n && (n = {}),
        l ||
          u(n, f) ||
          s(n, f, function () {
            return this;
          }),
        (t["exports"] = {
          IteratorPrototype: n,
          BUGGY_SAFARI_ITERATORS: d,
        });
    },
    function (t, e, r) {
      var n = r(5);
      t["exports"] = !n(function () {
        function t() {}
        return (
          (t["prototype"]["constructor"] = null),
          Object["getPrototypeOf"](new t()) !== t["prototype"]
        );
      });
    },
    function (t, e, r) {
      var n = r(5);
      t["exports"] =
        !!Object["getOwnPropertySymbols"] &&
        !n(function () {
          return !String(Symbol());
        });
    },
    function (t, e, r) {
      "use strict";
      var n = r(62),
        i = Math["max"],
        o = Math["min"];
      t["exports"] = function (t, e) {
        var r = n(t);
        return r < 0 ? i(r + e, 0) : o(r, e);
      };
    },
    function (t, e) {
      t["exports"] = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (t, e, r) {
      var n = r(16);
      t["exports"] = n("document", "documentElement");
    },
    function (t, e, r) {
      var n = r(12),
        i = r(46),
        o = r(11)("species");
      t["exports"] = function (t, e) {
        var r;
        return (
          i(t) &&
            ("function" != typeof (r = t["constructor"]) ||
            (r !== Array && !i(r["prototype"]))
              ? n(r) && null === (r = r[o]) && (r = void 0)
              : (r = void 0)),
          new (void 0 === r ? Array : r)(0 === e ? 0 : e)
        );
      };
    },
    function (t, e, r) {
      "use strict";
      r(92), r(66), r(57), r(149), r(102), r(152);
      var n = r(8);
      t["exports"] = n["Promise"];
    },
    function (t, e) {},
    function (t, e, r) {
      var n = r(9);
      t["exports"] = n["Promise"];
    },
    function (t, e, r) {
      var n = r(44);
      t["exports"] = function (t, e, r) {
        for (var i in e)
          r && r["unsafe"] && t[i] ? (t[i] = e[i]) : n(t, i, e[i], r);
        return t;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(16),
        i = r(20),
        o = r(11),
        a = r(13),
        s = o("species");
      t["exports"] = function (t) {
        var e = n(t),
          r = i["f"];
        a &&
          e &&
          !e[s] &&
          r(e, s, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, e, r) {
      var n = r(11),
        i = r(30),
        o = n("iterator"),
        a = Array["prototype"];
      t["exports"] = function (t) {
        return void 0 !== t && (i["Array"] === t || a[o] === t);
      };
    },
    function (t, e, r) {
      var n = r(3);
      t["exports"] = function (t, e, r, i) {
        try {
          return i ? e(n(r)[0], r[1]) : e(r);
        } catch (e) {
          var o = t["return"];
          throw (void 0 !== o && n(o["call"](t)), e);
        }
      };
    },
    function (t, e, r) {
      var n = r(11)("iterator"),
        i = !1;
      try {
        var o = 0,
          a = {
            next: function () {
              return {
                done: !!o++,
              };
            },
            return: function () {
              i = !0;
            },
          };
        (a[n] = function () {
          return this;
        }),
          Array["from"](a, function () {
            throw 2;
          });
      } catch (t) {}
      t["exports"] = function (t, e) {
        if (!e && !i) return !1;
        var r = !1;
        try {
          var o = {};
          (o[n] = function () {
            return {
              next: function () {
                return {
                  done: (r = !0),
                };
              },
            };
          }),
            t(o);
        } catch (t) {}
        return r;
      };
    },
    function (t, e, r) {
      var n,
        i,
        o,
        a = r(9),
        s = r(5),
        u = r(25),
        c = r(14),
        l = r(89),
        f = r(55),
        d = r(100),
        p = a["location"],
        h = a["setImmediate"],
        v = a["clearImmediate"],
        g = a["process"],
        y = a["MessageChannel"],
        w = a["Dispatch"],
        m = 0,
        b = {},
        x = function (t) {
          if (b["hasOwnProperty"](t)) {
            var e = b[t];
            delete b[t], e();
          }
        },
        _ = function (t) {
          return function () {
            x(t);
          };
        },
        S = function (t) {
          x(t["data"]);
        },
        k = function (t) {
          a["postMessage"](
            t + "",
            p["protocol"] + "//" + p["host"]
          );
        };
      (h && v) ||
        ((h = function (t) {
          for (var e = [], r = 1; arguments["length"] > r; )
            e["push"](arguments[r++]);
          return (
            (b[++m] = function () {
              ("function" == typeof t ? t : Function(t))["apply"](
                void 0,
                e
              );
            }),
            n(m),
            m
          );
        }),
        (v = function (t) {
          delete b[t];
        }),
        "process" == u(g)
          ? (n = function (t) {
              g["nextTick"](_(t));
            })
          : w && w["now"]
          ? (n = function (t) {
              w["now"](_(t));
            })
          : y && !d
          ? ((o = (i = new y())["port2"]),
            (i["port1"]["onmessage"] = S),
            (n = c(o["postMessage"], o, 1)))
          : !a["addEventListener"] ||
            "function" != typeof postMessage ||
            a["importScripts"] ||
            s(k)
          ? (n =
              "onreadystatechange" in f("script")
                ? function (t) {
                    l["appendChild"](f("script"))[
                      "onreadystatechange"
                    ] = function () {
                      l["removeChild"](this), x(t);
                    };
                  }
                : function (t) {
                    setTimeout(_(t), 0);
                  })
          : ((n = k), a["addEventListener"]("message", S, !1))),
        (t["exports"] = {
          set: h,
          clear: v,
        });
    },
    function (t, e, r) {
      var n = r(69);
      t["exports"] = /(iphone|ipod|ipad).*applewebkit/i["test"](n);
    },
    function (t, e, r) {
      var n = r(3),
        i = r(12),
        o = r(36);
      t["exports"] = function (t, e) {
        if ((n(t), i(e) && e["constructor"] === t)) return e;
        var r = o["f"](t);
        return (0, r["resolve"])(e), r["promise"];
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(10),
        o = r(36),
        a = r(47),
        s = r(6);
      n(
        {
          target: "Promise",
          stat: !0,
        },
        {
          allSettled: function (t) {
            var e = this,
              r = o["f"](e),
              n = r["resolve"],
              u = r["reject"],
              c = a(function () {
                var r = i(e["resolve"]),
                  o = [],
                  a = 0,
                  u = 1;
                s(t, function (t) {
                  var i = a++,
                    s = !1;
                  o["push"](void 0),
                    u++,
                    r["call"](e, t)["then"](
                      function (t) {
                        s ||
                          ((s = !0),
                          (o[i] = {
                            status: "fulfilled",
                            value: t,
                          }),
                          --u || n(o));
                      },
                      function (t) {
                        s ||
                          ((s = !0),
                          (o[i] = {
                            status: "rejected",
                            reason: t,
                          }),
                          --u || n(o));
                      }
                    );
                }),
                  --u || n(o);
              });
            return c["error"] && u(c["value"]), r["promise"];
          },
        }
      );
    },
    function (t, e, r) {
      var n = r(157);
      function i(t, e) {
        for (var r = 0; r < e["length"]; r++) {
          var i = e[r];
          (i["enumerable"] = i["enumerable"] || !1),
            (i["configurable"] = !0),
            "value" in i && (i["writable"] = !0),
            n(t, i["key"], i);
        }
      }
      t["exports"] = function (t, e, r) {
        return e && i(t["prototype"], e), r && i(t, r), t;
      };
    },
    function (t, e, r) {
      var n = r(166);
      t["exports"] = function (t) {
        if (n(t)) throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    },
    function (t, e, r) {
      var n = r(11)("match");
      t["exports"] = function (t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (r) {
          try {
            return (e[n] = !1), "/./"[t](e);
          } catch (t) {}
        }
        return !1;
      };
    },
    function (t, e, r) {
      t["exports"] = r(173);
    },
    function (t, e, r) {
      var n = r(29),
        i = "[" + r(72) + "]",
        o = RegExp("^" + i + i + "*"),
        a = RegExp(i + i + "*$"),
        s = function (t) {
          return function (e) {
            var r = String(n(e));
            return (
              1 & t && (r = r["replace"](o, "")),
              2 & t && (r = r["replace"](a, "")),
              r
            );
          };
        };
      t["exports"] = {
        start: s(1),
        end: s(2),
        trim: s(3),
      };
    },
    function (t, e, r) {
      var n = r(186),
        i = Array["prototype"];
      t["exports"] = function (t) {
        var e = t["indexOf"];
        return t === i || (t instanceof Array && e === i["indexOf"]) ? n : e;
      };
    },
    function (t, e, r) {
      var n = r(196),
        i = Function["prototype"];
      t["exports"] = function (t) {
        var e = t["bind"];
        return t === i || (t instanceof Function && e === i["bind"])
          ? n
          : e;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(10),
        i = r(12),
        o = []["slice"],
        a = {},
        s = function (t, e, r) {
          if (!(e in a)) {
            for (var n = [], i = 0; i < e; i++)
              n[i] = "a[" + i + "]";
            a[e] = Function(
              "C,a",
              "return new C(" + n["join"](",") + ")"
            );
          }
          return a[e](t, r);
        };
      t["exports"] =
        Function["bind"] ||
        function (t) {
          var e = n(this),
            r = o["call"](arguments, 1),
            a = function () {
              var n = r["concat"](o["call"](arguments));
              return this instanceof a
                ? s(e, n["length"], n)
                : e["apply"](t, n);
            };
          return i(e["prototype"]) && (a["prototype"] = e["prototype"]), a;
        };
    },
    function (t, e, r) {
      t["exports"] = r(205);
    },
    function (t, e, r) {
      "use strict";
      r(212), r(92), r(66), r(57);
      var n = r(8);
      t["exports"] = n["Map"];
    },
    function (t, e, r) {
      var n = r(39),
        i = r(12),
        o = r(18),
        a = r(20)["f"],
        s = r(59),
        u = r(214),
        c = s("meta"),
        l = 0,
        f =
          Object["isExtensible"] ||
          function () {
            return !0;
          },
        d = function (t) {
          a(t, c, {
            value: {
              objectID: "O" + ++l,
              weakData: {},
            },
          });
        },
        p = (t["exports"] = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!i(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, c)) {
              if (!f(t)) return "F";
              if (!e) return "E";
              d(t);
            }
            return t[c]["objectID"];
          },
          getWeakData: function (t, e) {
            if (!o(t, c)) {
              if (!f(t)) return !0;
              if (!e) return !1;
              d(t);
            }
            return t[c]["weakData"];
          },
          onFreeze: function (t) {
            return u && p["REQUIRED"] && f(t) && !o(t, c) && d(t), t;
          },
        });
      n[c] = !0;
    },
    function (t, e, r) {
      "use strict";
      var n = r(3);
      t["exports"] = function (t, e) {
        var r,
          i = n(this),
          o = arguments["length"] > 2 ? arguments[2] : void 0;
        if ("function" != typeof e && "function" != typeof o)
          throw TypeError("At least one callback required");
        return (
          i["has"](t)
            ? ((r = i["get"](t)),
              "function" == typeof e && ((r = e(r)), i["set"](t, r)))
            : "function" == typeof o && ((r = o()), i["set"](t, r)),
          r
        );
      };
    },
    function (t, e, r) {
      t["exports"] = r(245);
    },
    function (t, e, r) {
      var n = r(115);
      function i(e, r) {
        return (
          (t["exports"] = i =
            n ||
            function (t, e) {
              return (t["__proto__"] = e), t;
            }),
          i(e, r)
        );
      }
      t["exports"] = i;
    },
    function (t, e, r) {
      t["exports"] = r(249);
    },
    function (t, e, r) {
      r(266);
      var n = r(8);
      t["exports"] = n["Object"]["keys"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["createHttpClient"] = function (t) {
          var e = t["logger"],
            r = t["XMLHttpRequest"];
          function n(t) {
            for (
              var r,
                n = arguments["length"],
                i = new Array(n > 1 ? n - 1 : 0),
                a = 1;
              a < n;
              a++
            )
              i[a - 1] = arguments[a];
            e["log"]["apply"](
              e,
              (0, o["default"])((r = ["[HttpClient]: " + t]))["call"](r, i)
            );
          }
          return {
            get: function (t) {
              return (
                n("start XHR-based GET request to " + t),
                new i["default"](function (e, i) {
                  try {
                    var o = new r();
                    (o["onreadystatechange"] = function () {
                      if (
                        (function (t) {
                          return (
                            4 === a["default"]["ensureValueIsANumber"](t["readyState"])
                          );
                        })(o)
                      )
                        if (
                          (function (t) {
                            return (
                              200 ===
                              a["default"]["ensureValueIsANumber"](t["status"])
                            );
                          })(o)
                        )
                          n("request finished successfully"), e(o["responseText"]);
                        else {
                          var r =
                            "Failed request to " + t + " responded with status " + o["status"];
                          n(r, o["responseText"]), i(new Error(r));
                        }
                    }),
                      o["open"]("GET", t, !0),
                      o["send"]();
                  } catch (t) {
                    i(t);
                  }
                })
              );
            },
          };
        });
      var i = n(r(37)),
        o = n(r(73)),
        a = n(r(7));
    },
    function (t, e, r) {
      t["exports"] = r(269);
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(38)),
        o = n(r(15)),
        a = n(r(7)),
        s = n(r(49)),
        u = (function (t) {
          function e(e, r) {
            var n;
            return (
              (n = t["call"](this, e, r, "AdSourceFetcher") || this),
              (a["default"]["logging"] =
                r["settings"] && r["settings"]["logging"]),
              (n["beFailSafe"] = !0),
              n
            );
          }
          (0, o["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["getUrl"] = function () {
              return s["default"][
                this["config"]["env"]["toLowerCase"]()
              ]["ad-source-fetcher"]["url"];
            }),
            (r["createInstance"] = function () {
              return (
                (this["Instance"] = new window["AdSourceFetcher"](
                  this["config"]["settings"]
                )),
                this["Instance"]
              );
            }),
            (r["createAdSchedulerInstance"] = function (t, e) {
              var r = (0, i["default"])(
                {},
                this["config"]["adScheduler"],
                {},
                {
                  logging: a["default"]["logging"],
                }
              );
              return (
                (this["Instance"] = new window["AdScheduler"](r, t, e)),
                this["Instance"]
              );
            }),
            e
          );
        })(n(r(24))["default"]);
      e["default"] = u;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(76)),
        o = n(r(21)),
        a = n(r(22)),
        s = n(r(15)),
        u = n(r(276)),
        c = n(r(279)),
        l = n(r(7)),
        f = n(r(48)),
        d = n(r(281)),
        p = (function (t) {
          function e(e, r) {
            var n;
            return (
              ((n = t["call"](this, e, r) || this)["playerLoaderFactory"] = new c[
                "default"
              ](n["cacheBuster"], n["config"])),
              (n["playbackMonitoringLoader"] = new d["default"](
                n["cacheBuster"],
                n["config"]
              )),
              (l["default"]["logging"] =
                e["settings"] && e["settings"]["logging"]),
              (n["IEPrerollOffset"] = 2),
              n
            );
          }
          (0, s["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["_downloadAllLibs"] = (function () {
              var t = (0, a["default"])(
                o["default"]["mark"](function t() {
                  return o["default"]["wrap"](function (t) {
                    for (;;)
                      switch ((t["prev"] = t["next"])) {
                        case 0:
                          throw new Error("_downloadAllLibs not Implemented");
                        case 1:
                        case "end":
                          return t["stop"]();
                      }
                  }, t);
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_getAdSource"] = (function () {
              var t = (0, a["default"])(
                o["default"]["mark"](function t() {
                  return o["default"]["wrap"](function (t) {
                    for (;;)
                      switch ((t["prev"] = t["next"])) {
                        case 0:
                          throw new Error("_getAdSource not Implemented");
                        case 1:
                        case "end":
                          return t["stop"]();
                      }
                  }, t);
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_handleServerSideAdInsertion"] = function (t, e) {
              var r,
                n = this;
              this["WebPlayer"]["on"](
                "playerready",
                (0, i["default"])((r = this["bindAdTracker"]))["call"](
                  r,
                  this,
                  t
                )
              ),
                this["eventEmitter"]["on"]("adseektoposition", function (t) {
                  l["default"]["log"]("[BrowserStrategy]: Detected jump into ad break. Seeking to position " + t["position"]),
                    n["WebPlayer"]["seek"](t["position"]);
                }),
                this["_adjustStartTimeforIEbasedUserAgents"](t, e),
                this["_startContentPlayback"](t);
            }),
            (r["_startContentPlayback"] = function (t) {
              this["WebPlayer"]["on"]("ended", function (t) {
                return l["default"]["log"]("[BrowserStrategy]: WebPlayer ENDED event: ", t);
              }),
                "vod" !== t["contentType"] &&
                  delete this["playRequest"]["source"]["startTime"],
                this["webPlayerLoader"]["startPlayback"](
                  this["playRequest"]["source"]
                ),
                this["_updatePlaybackMonitoringParameters"]();
            }),
            (r["_start"] = (function () {
              var t = (0, a["default"])(
                o["default"]["mark"](function t(e) {
                  var r,
                    n,
                    i = this;
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              (t["prev"] = 0),
                              (this["adsTracked"] = !1),
                              e["clientData"] ||
                                (e["clientData"] = {
                                  startTime: 0,
                                }),
                              this["playbackMonitoringLoader"]["start"](e),
                              this["playerHeartbeatProducerLoader"]["init"](
                                e,
                                this["isCSAIEnabled"]
                              ),
                              (r = e["clientData"]["startTime"]),
                              l["default"]["log"]("[BrowserStrategy]: Requested start time: " + r),
                              this["isCSAIEnabled"] || this["_addPrerollOffsetForIEbasedUserAgents"](e, r),
                              (t["next"] = 10),
                              this["_getEntitlementToken"](e)
                            );
                          case 10:
                            if (
                              ((e["entitlementToken"] = t["sent"]),
                              this["_parseEntitlementToken"](e),
                              !this["_needsNoShowCheck"]())
                            ) {
                              t["next"] = 17;
                              break;
                            }
                            return (t["next"] = 15), this["_isNoShowScenario"](e);
                          case 15:
                            if (!t["sent"]) {
                              t["next"] = 17;
                              break;
                            }
                            return t["abrupt"]("return", !1);
                          case 17:
                            return (
                              this["isCSAIEnabled"] &&
                                (e["adSource"] = "false"),
                              (t["next"] = 20),
                              this["getSource"](e)
                            );
                          case 20:
                            return (
                              (this["playRequest"]["source"] =
                                t["sent"]),
                              (this["playRequest"]["source"]["startTime"] =
                                e["clientData"]["startTime"]),
                              e["webosAppId"] &&
                                (this["playRequest"]["source"][
                                  "webosAppId"
                                ] = e["webosAppId"]),
                              this["playerHeartbeatProducerLoader"]["update"]({
                                streamUrl: this["playRequest"]["source"]
                                  ? this["playRequest"]["source"][
                                      "url"
                                    ]
                                  : "",
                              }),
                              this["_initWebPlayer"](
                                this["playRequest"]["source"]["mimetype"],
                                e
                              ),
                              this["WebPlayer"]["on"](
                                "error",
                                function (t) {
                                  throw (
                                    (l["default"]["log"](
                                      "[BrowserStrategy]: WebPlayer ERROR event: ",
                                      t
                                    ),
                                    new f["default"](
                                      t,
                                      "WEB_PLAYER",
                                      i["eventEmitter"]
                                    ))
                                  );
                                }
                              ),
                              "vod" !== e["contentType"] &&
                                delete this["playRequest"]["source"][
                                  "startTime"
                                ],
                              this["isCSAIEnabled"]
                                ? ((n = this["isShowAdsForCSAI"]()),
                                  l["default"]["log"]("[BrowserStrategy]: ClientSideAdInsertion (CSAI) is activated. Show ads:", n),
                                  this["_handleClientSideAdInsertion"](e, n))
                                : this["_handleServerSideAdInsertion"](e, r),
                              t["abrupt"]("return", !0)
                            );
                          case 31:
                            throw (
                              ((t["prev"] = 31),
                              (t["t0"] = t["catch"](0)),
                              l["default"]["log"](
                                "[BrowserStrategy]: Toolkit start() error: ",
                                t["t0"]
                              ),
                              new f["default"](
                                t["t0"],
                                "BROWSER_STRATEGY",
                                this["eventEmitter"]
                              ))
                            );
                          case 35:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this,
                    [[0, 31]]
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["stop"] = function () {
              t["prototype"]["stop"]["call"](this),
                l["default"]["log"]("[BrowserStrategy]: stopping..."),
                this["playbackMonitoringLoader"]["stop"](),
                l["default"]["log"]("[BrowserStrategy]: PlaybackMonitoring stopped.");
            }),
            (r["bindAdTracker"] = (function () {
              var t = (0, a["default"])(
                o["default"]["mark"](function t(e) {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            if (
                              (l["default"]["log"]("[BrowserStrategy]: WebPlayer PLAYERREADY event: "),
                              this["adsTracked"])
                            ) {
                              t["next"] = 6;
                              break;
                            }
                            return (
                              this["_initAdTracker"](
                                this["playRequest"]["source"]["adSource"],
                                e
                              ),
                              (t["next"] = 5),
                              this["AdTracker"]["startAdTracking"]()
                            );
                          case 5:
                            this["adsTracked"] = !0;
                          case 6:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["getDurationWithoutAds"] = function () {
              return this["AdTracker"]["getDurationWithoutAds"](
                this["WebPlayer"]["getDuration"]()
              );
            }),
            (r["destroy"] = (function () {
              var e = (0, a["default"])(
                o["default"]["mark"](function e() {
                  return o["default"]["wrap"](
                    function (e) {
                      for (;;)
                        switch ((e["prev"] = e["next"])) {
                          case 0:
                            return (
                              (e["next"] = 2),
                              t["prototype"]["destroy"]["call"](this)
                            );
                          case 2:
                            l["default"]["log"]("[BrowserStrategy]: destroy"),
                              this["playbackMonitoringLoader"]["destroy"]();
                          case 4:
                          case "end":
                            return e["stop"]();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function () {
                return e["apply"](this, arguments);
              };
            })()),
            (r["_updatePlaybackMonitoringParameters"] = function () {
              this["playbackMonitoringLoader"]["addParameters"]({
                streamUrl: this["playRequest"]["source"]["url"][
                  "split"
                ]("?")[0],
                streamerVersion: this["WebPlayer"]["getStreamerVersion"](),
                orchestratorName: this["WebPlayer"]["getName"](),
                orchestratorVersion: this["WebPlayer"]["getVersion"](),
              });
            }),
            (r["_parseEntitlementToken"] = function (t) {
              var e = this["_getPremiumDataFromJWT"](t["entitlementToken"]["server_token"]),
                r = e["joynPackages"],
                n = e["businessModel"];
              l["default"]["log"]("[WebStrategy]: From entitlement token: Package: " + r + " Business Model: " + n),
                (t["clientData"]["joynPackages"] = r),
                (t["clientData"]["businessModel"] = n);
            }),
            (r["_getPremiumDataFromJWT"] = function (t) {
              var e = (0, u["default"])(t);
              return {
                joynPackages: e["joyn_packages"],
                businessModel: e["business_model"],
              };
            }),
            (r["_addPrerollOffsetForIEbasedUserAgents"] = function (t, e) {
              void 0 === e && (e = 0),
                !this["_isVod"](t) ||
                  ("IE" !== l["default"]["getBrowser"]() &&
                    "TIZEN" !== l["default"]["getDeviceOS"]()) ||
                  (e < this["IEPrerollOffset"]
                    ? (l["default"]["log"]("[BrowserStrategy]: IE/Tizen - Requesting offset for Preroll."),
                      (t["clientData"]["startTime"] = this["IEPrerollOffset"]))
                    : l["default"]["log"](
                        "[BrowserStrategy]: IE/Tizen - starttime > " + this["IEPrerollOffset"] + ". No preroll offset needed"
                      ));
            }),
            (r["_adjustStartTimeforIEbasedUserAgents"] = function (t, e) {
              var r = this;
              if (
                this["_isVod"](t) &&
                ("IE" === l["default"]["getBrowser"]() ||
                  "TIZEN" === l["default"]["getDeviceOS"]())
              ) {
                var n = 0;
                l["default"]["log"](
                  "[BrowserStrategy]: DRM from PSA: " + this["playRequest"]["source"]["drm"]
                ),
                  e < this["IEPrerollOffset"]
                    ? ((this["playRequest"]["source"]["startTime"] = 0),
                      (n = this["IEPrerollOffset"]))
                    : ((this["playRequest"]["source"]["startTime"] =
                        e - this["IEPrerollOffset"]),
                      (n = e)),
                  this["eventEmitter"]["on"]("adtrackerready", function () {
                    r["_isPrerollExists"](r["AdTracker"]["ads"], n) &&
                      (l["default"]["log"](
                        "[BrowserStrategy]: Seek to " + n + " on playerready, adtrackerready"
                      ),
                      r["WebPlayer"]["seek"](n));
                  });
              }
            }),
            (r["_isVod"] = function (t) {
              return (
                !t["contentType"] ||
                "live" !== t["contentType"]["toLowerCase"]()
              );
            }),
            (r["_isPrerollExists"] = function (t, e) {
              return (
                t[0] &&
                Math["abs"](t[0]["start"] - e) <= this["IEPrerollOffset"]
              );
            }),
            e
          );
        })(n(r(123))["default"]);
      e["default"] = p;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(124)),
        o = n(r(285)),
        a = n(r(290)),
        s = n(r(71)),
        u = n(r(21)),
        c = n(r(22)),
        l = n(r(120)),
        f = n(r(7)),
        d = n(r(294)),
        p = n(r(295)),
        h = n(r(296)),
        v = n(r(297)),
        g = n(r(48)),
        y = (function () {
          function t(t, e) {
            (this["cacheBuster"] = (0, l["default"])()["toString"]()),
              (this["eventEmitter"] = e),
              (this["config"] = t),
              (this["psfLoader"] = new d["default"](
                this["cacheBuster"],
                this["config"]
              )),
              (this["adTrackerLoader"] = new p["default"](
                this["cacheBuster"],
                this["config"]
              )),
              (this["playerHeartbeatProducerLoader"] = new h["default"](
                this["cacheBuster"],
                this["config"]
              )),
              (this["webPlayerLoader"] = {}),
              (this["psfResponse"] = []),
              (this["playerEventsProxy"] = {}),
              (this["playRequest"] = {}),
              (this["isCSAIEnabled"] = !1),
              (f["default"]["logging"] =
                t["settings"] && t["settings"]["logging"]);
          }
          var e = t["prototype"];
          return (
            (e["_downloadAllLibs"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t() {
                  return u["default"]["wrap"](function (t) {
                    for (;;)
                      switch ((t["prev"] = t["next"])) {
                        case 0:
                          throw new Error("_downloadAllLibs not Implemented");
                        case 1:
                        case "end":
                          return t["stop"]();
                      }
                  }, t);
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["_isAdSupportedContent"] = function (t) {
              var e,
                r = t["clientData"],
                n = r["businessModel"],
                i = r["joynPackages"],
                o = t["contentType"],
                a = void 0 === o ? "vod" : o,
                u = i && (0, s["default"])(i)["call"](i, "DE_PREMIUM");
              switch (
                (f["default"]["log"](
                  "[WebStrategy]: ContentType : " + a + ", Premium User: " + u + ", Business Model : " + n
                ),
                a["toUpperCase"]())
              ) {
                case "VOD":
                  return !(0, s["default"])(
                    (e = ["SVOD", "FVOD"])
                  )["call"](e, n);
                default:
                  return !u;
              }
            }),
            (e["_handleClientSideAdInsertion"] = function (t, e) {
              void 0 === e && (e = !0),
                e && this["_isAdSupportedContent"](t)
                  ? ((this["adInserter"] = this["_initAdInserter"](
                      this["playRequest"],
                      this["WebPlayer"],
                      t
                    )),
                    (this["adScheduler"] = this["asfLoader"]["createAdSchedulerInstance"](
                      t,
                      this["playRequest"]
                    )),
                    this["adScheduler"]["startPlaybackWithAds"]())
                  : this["_startContentPlayback"](t);
            }),
            (e["_start"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t() {
                  return u["default"]["wrap"](function (t) {
                    for (;;)
                      switch ((t["prev"] = t["next"])) {
                        case 0:
                          throw new Error("start() not Implemented");
                        case 1:
                        case "end":
                          return t["stop"]();
                      }
                  }, t);
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["_augmentClientData"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t() {
                  return u["default"]["wrap"](function (t) {
                    for (;;)
                      switch ((t["prev"] = t["next"])) {
                        case 0:
                        case "end":
                          return t["stop"]();
                      }
                  }, t);
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["start"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t(e, r) {
                  var n;
                  return u["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (t["next"] = 2), this["cleanup"]();
                          case 2:
                            return (
                              (n = e),
                              (this["isCSAIEnabled"] = this["isClientSideAdInsertion"](n)),
                              (t["prev"] = 4),
                              (t["next"] = 7),
                              this["_augmentClientData"](e)
                            );
                          case 7:
                            (n = t["sent"]), (t["next"] = 13);
                            break;
                          case 10:
                            (t["prev"] = 10),
                              (t["t0"] = t["catch"](4)),
                              f["default"]["log"]("[StrategyBase]: augmentClientData() failed. Possible Ad blocker");
                          case 13:
                            return (
                              (this["videoElement"] = r),
                              t["abrupt"](
                                "return",
                                this["_start"](n)
                              )
                            );
                          case 15:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this,
                    [[4, 10]]
                  );
                })
              );
              return function (e, r) {
                return t["apply"](this, arguments);
              };
            })()),
            (e["cleanup"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t() {
                  return u["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            if (!this["WebPlayer"]) {
                              t["next"] = 4;
                              break;
                            }
                            return (
                              (t["next"] = 3),
                              this["WebPlayer"]["destroy"]()
                            );
                          case 3:
                            this["WebPlayer"] = null;
                          case 4:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["stop"] = function () {
              f["default"]["log"]("[StrategyBase]: stopping..."),
                this["playerHeartbeatProducerLoader"]["stop"]();
            }),
            (e["destroy"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t() {
                  return u["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              f["default"]["log"]("[StrategyBase]: destroying..."),
                              (t["next"] = 3),
                              this["cleanup"]()
                            );
                          case 3:
                            (this["cacheBuster"] = null),
                              (this["eventEmitter"] = null),
                              (this["config"] = null),
                              (this["psfLoader"] = null),
                              (this["adTrackerLoader"] = null),
                              (this["webPlayerLoader"] = null),
                              (this["psfResponse"] = null),
                              (this["playerEventsProxy"] = null),
                              (this["playRequest"] = null),
                              (this["videoElement"] = null),
                              this["playerHeartbeatProducerLoader"]["destroy"](),
                              (f["default"]["logging"] = null);
                          case 15:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["init"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t() {
                  return u["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              (t["prev"] = 0),
                              (t["next"] = 3),
                              this["_downloadAllLibs"]()
                            );
                          case 3:
                            this["eventEmitter"]["emit"]("initialised"),
                              (t["next"] = 10);
                            break;
                          case 6:
                            throw (
                              ((t["prev"] = 6),
                              (t["t0"] = t["catch"](0)),
                              f["default"]["log"](
                                "[StrategyBase]: Toolkit init() error : ",
                                t["t0"]
                              ),
                              new g["default"](
                                t["t0"],
                                "STRATEGY_BASE",
                                this["eventEmitter"]
                              ))
                            );
                          case 10:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this,
                    [[0, 6]]
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["isClientSideAdInsertion"] = function (t) {
              var e = !1,
                r = t["userAgent"],
                n = this["config"]["settings"],
                s = function (t) {
                  var e = t["enabledFor"],
                    n = t["noAdsFor"],
                    i = !1;
                  ((0, a["default"])(e) &&
                    r &&
                    (i = (0, o["default"])(e)["call"](e, function (t) {
                      return new RegExp(t, "i")["test"](r);
                    })),
                  (0, a["default"])(n) && r) &&
                    (0, o["default"])(n)["call"](n, function (t) {
                      return new RegExp(t, "i")["test"](r);
                    }) &&
                    (i = {
                      showAds: !1,
                    });
                  return i;
                },
                u = t["contentType"],
                c =
                  u &&
                  "string" == typeof u &&
                  "live" === u["toLowerCase"]()
                    ? "live"
                    : "vod",
                l = n && n["adInsertion"] && n["adInsertion"][c];
              l && (e = s(l));
              var d = n && n["adInsertion"];
              return (
                d && (e = e || s(d)),
                e &&
                  f["default"]["log"](
                    "[BrowserStrategy]: is CSAI enabled: " + e + " for contentType " + c + " ",
                    (0, i["default"])(n["adInsertion"])
                  ),
                e
              );
            }),
            (e["getSource"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t(e) {
                  var r, n;
                  return u["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            if ("string" != typeof e) {
                              t["next"] = 5;
                              break;
                            }
                            f["default"]["log"]("[StrategyBase]: Content resource is string. Bypassing PSF."),
                              this["psfResponse"]["push"]({
                                url: e,
                                mimetype: "video/mp4",
                              }),
                              (t["next"] = 12);
                            break;
                          case 5:
                            return (
                              this["_initPsf"](),
                              f["default"]["log"](
                                "[StrategyBase]: ContentResource:" + (0, i["default"])(e)
                              ),
                              f["default"]["log"]("[StrategyBase]: Fetching Source..."),
                              (t["next"] = 10),
                              this["psfLoader"]["Instance"]["getPlaybackUrl"](e)
                            );
                          case 10:
                            (this["psfResponse"] = t["sent"]),
                              f["default"]["log"]("[StrategyBase]: Source fetched");
                          case 12:
                            return (
                              (r = new v["default"](this["psfResponse"])),
                              ((n = r["getPreferredSource"]())["videoElement"] = this[
                                "videoElement"
                              ]),
                              this["eventEmitter"]["emit"]("entitlementcomplete", {
                                entitlementJwt: n["entitlementJwt"],
                              }),
                              t["abrupt"]("return", n)
                            );
                          case 17:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (e["_getEntitlementToken"] = (function () {
              var t = (0, c["default"])(
                u["default"]["mark"](function t(e) {
                  return u["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              f["default"]["log"]("[StrategyBase]: Getting entitlement token"),
                              delete e["entitlementToken"],
                              this["_initPsf"](),
                              t["abrupt"](
                                "return",
                                this["psfLoader"]["Instance"]["getEntitlementToken"](
                                  e
                                )
                              )
                            );
                          case 4:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (e["getCurrentTimeWithoutAds"] = function () {
              return this["AdTracker"]["getCurrentTimeWithoutAds"]();
            }),
            (e["_initAdTracker"] = function (t, e) {
              f["default"]["log"]("[StrategyBase]: Initialising Ad Tracker..."),
                (this["AdTracker"] = this["adTrackerLoader"]["createInstance"](t, e));
            }),
            (e["_initAdInserter"] = function (t, e, r) {
              return (
                f["default"]["log"]("[StrategyBase]: Initialising Ad Inserter..."),
                this["adTrackerLoader"]["createAdInserterInstance"](t, e, r)
              );
            }),
            (e["_initPsf"] = function () {
              f["default"]["log"]("[StrategyBase]: Initialising PSF..."),
                this["psfLoader"]["Instance"] ||
                  this["psfLoader"]["createInstance"]();
            }),
            (e["_initWebPlayer"] = function (t, e) {
              f["default"]["log"]("[StrategyBase]: Initialising Web Player..."),
                (this["webPlayerLoader"] = this["playerLoaderFactory"]["getLoader"](t)),
                f["default"]["log"](
                  "[StrategyBase]: Using " + this["webPlayerLoader"]["name"]
                );
              var r = this["_isAdSupportedContent"](e) && this["isShowAdsForCSAI"]();
              this["WebPlayer"] = this["webPlayerLoader"]["createInstance"](
                this["eventEmitter"],
                r
              );
            }),
            (e["isShowAdsForCSAI"] = function () {
              var t = this["isCSAIEnabled"]["showAds"];
              return void 0 === t ? Boolean(this["isCSAIEnabled"]) : Boolean(t);
            }),
            (e["_needsNoShowCheck"] = function () {
              return !1;
            }),
            t
          );
        })();
      e["default"] = y;
    },
    function (t, e, r) {
      t["exports"] = r(282);
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(129));
      window["PlayerToolkit"] = i["default"];
      var o = i["default"];
      e["default"] = o;
    },
    function (t, e, r) {
      var n = r(77);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(0),
        i = r(13);
      n(
        {
          target: "Object",
          stat: !0,
          forced: !i,
          sham: !i,
        },
        {
          defineProperty: r(20)["f"],
        }
      );
    },
    function (t, e) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (r = window);
      }
      t["exports"] = r;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(56)),
        o = n(r(21)),
        a = n(r(22)),
        s = n(r(103)),
        u = n(r(159)),
        c = n(r(7)),
        l = n(r(193)),
        f = (function () {
          function t(t) {
            (this["eventEmitter"] = u["default"]),
              (c["default"]["logging"] =
                t["settings"] && t["settings"]["logging"]),
              (this["strategy"] = l["default"]["create"](
                t,
                this["eventEmitter"]
              )),
              (this["clientEventHandlers"] = []);
          }
          var e = t["prototype"];
          return (
            (e["init"] = (function () {
              var t = (0, a["default"])(
                o["default"]["mark"](function t() {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              (t["next"] = 2),
                              this["strategy"]["init"]()
                            );
                          case 2:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["on"] = function (t, e) {
              this["clientEventHandlers"]["push"]({
                name: t,
                callback: e,
              }),
                this["eventEmitter"]["on"](t, e);
            }),
            (e["off"] = function (t, e) {
              this["clientEventHandlers"]["pop"]({
                name: t,
                callback: e,
              }),
                this["eventEmitter"]["removeListener"](t, e);
            }),
            (e["removeAllListeners"] = function () {
              var t,
                e = this;
              (0, i["default"])((t = this["clientEventHandlers"]))["call"](
                t,
                function (t) {
                  e["eventEmitter"]["removeListener"](
                    t["name"],
                    t["callback"]
                  );
                }
              ),
                (this["clientEventHandlers"] = []);
            }),
            (e["destroy"] = function () {
              this["eventEmitter"]["removeAllListeners"](),
                (this["clientEventHandlers"] = []),
                this["strategy"] && this["strategy"]["destroy"](),
                (this["strategy"] = null);
            }),
            (e["start"] = (function () {
              var t = (0, a["default"])(
                o["default"]["mark"](function t(e, r) {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              void 0 === r && (r = null),
                              this["_cleanup"](),
                              (e["clientData"]["startTime"] =
                                e["clientData"]["startTime"] || 0),
                              t["abrupt"](
                                "return",
                                this["strategy"]["start"](e, r)
                              )
                            );
                          case 4:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (e["stop"] = (function () {
              var t = (0, a["default"])(
                o["default"]["mark"](function t() {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              this["close"](),
                              this["_cleanup"](),
                              (t["next"] = 4),
                              this["strategy"]["cleanup"]()
                            );
                          case 4:
                            this["strategy"]["stop"]();
                          case 5:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["close"] = function () {
              this["eventEmitter"]["emit"]("close");
            }),
            (e["getCurrentTimeWithoutAds"] = function () {
              return this["strategy"]["getCurrentTimeWithoutAds"]();
            }),
            (e["getDurationWithoutAds"] = function (t) {
              return this["strategy"]["getDurationWithoutAds"](t);
            }),
            (e["_cleanup"] = function () {
              var t,
                e = this;
              c["default"]["log"](
                "[PlayerToolkit]: Cleaning up event handlers: " + this["eventEmitter"]["_eventsCount"] + " events"
              ),
                this["eventEmitter"]["removeAllListeners"](),
                c["default"]["log"](
                  "[PlayerToolkit]: Restoring client event handlers : " + this["clientEventHandlers"]["length"] + " events"
                ),
                (0, i["default"])((t = this["clientEventHandlers"]))["call"](
                  t,
                  function (t) {
                    e["eventEmitter"]["on"](
                      t["name"],
                      t["callback"]
                    );
                  }
                );
            }),
            (0, s["default"])(t, [
              {
                key: "WebPlayer",
                get: function () {
                  return this["strategy"]["WebPlayer"];
                },
              },
              {
                key: "AdTracker",
                get: function () {
                  return this["strategy"]["AdTracker"];
                },
              },
            ]),
            t
          );
        })();
      e["default"] = f;
    },
    function (t, e, r) {
      r(57);
      var n = r(141),
        i = r(43),
        o = Array["prototype"],
        a = {
          DOMTokenList: !0,
          NodeList: !0,
        };
      t["exports"] = function (t) {
        var e = t["forEach"];
        return t === o ||
          (t instanceof Array && e === o["forEach"]) ||
          a["hasOwnProperty"](i(t))
          ? n
          : e;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(28),
        i = r(80),
        o = r(30),
        a = r(31),
        s = r(60),
        u = a["set"],
        c = a["getterFor"]("Array Iterator");
      (t["exports"] = s(
        Array,
        "Array",
        function (t, e) {
          u(this, {
            type: "Array Iterator",
            target: n(t),
            index: 0,
            kind: e,
          });
        },
        function () {
          var t = c(this),
            e = t["target"],
            r = t["kind"],
            n = t["index"]++;
          return !e || n >= e["length"]
            ? ((t["target"] = void 0),
              {
                value: void 0,
                done: !0,
              })
            : "keys" == r
            ? {
                value: n,
                done: !1,
              }
            : "values" == r
            ? {
                value: e[n],
                done: !1,
              }
            : {
                value: [n, e[n]],
                done: !1,
              };
        },
        "values"
      )),
        (o["Arguments"] = o["Array"]),
        i("keys"),
        i("values"),
        i("entries");
    },
    function (t, e, r) {
      var n = r(9),
        i = r(81),
        o = n["WeakMap"];
      t["exports"] =
        "function" == typeof o && /native code/["test"](i(o));
    },
    function (t, e, r) {
      var n = r(9),
        i = r(19);
      t["exports"] = function (t, e) {
        try {
          i(n, t, e);
        } catch (r) {
          n[t] = e;
        }
        return e;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(84)["IteratorPrototype"],
        i = r(34),
        o = r(33),
        a = r(42),
        s = r(30),
        u = function () {
          return this;
        };
      t["exports"] = function (t, e, r) {
        var c = e + " Iterator";
        return (
          (t["prototype"] = i(n, {
            next: o(1, r),
          })),
          a(t, c, !1, !0),
          (s[c] = u),
          t
        );
      };
    },
    function (t, e, r) {
      var n = r(86);
      t["exports"] =
        n &&
        !Symbol["sham"] &&
        "symbol" == typeof Symbol["iterator"];
    },
    function (t, e, r) {
      var n = r(13),
        i = r(20),
        o = r(3),
        a = r(41);
      t["exports"] = n
        ? Object["defineProperties"]
        : function (t, e) {
            o(t);
            for (var r, n = a(e), s = n["length"], u = 0; s > u; )
              i["f"](t, (r = n[u++]), e[r]);
            return t;
          };
    },
    function (t, e, r) {
      var n = r(18),
        i = r(28),
        o = r(61)["indexOf"],
        a = r(39);
      t["exports"] = function (t, e) {
        var r,
          s = i(t),
          u = 0,
          c = [];
        for (r in s) !n(a, r) && n(s, r) && c["push"](r);
        for (; e["length"] > u; )
          n(s, (r = e[u++])) && (~o(c, r) || c["push"](r));
        return c;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(63),
        i = r(43);
      t["exports"] = n
        ? {}["toString"]
        : function () {
            return "[object " + i(this) + "]";
          };
    },
    function (t, e, r) {
      var n = r(12);
      t["exports"] = function (t) {
        if (!n(t) && null !== t)
          throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    },
    function (t, e) {
      t["exports"] = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    function (t, e, r) {
      var n = r(142);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(143);
      var n = r(17);
      t["exports"] = n("Array")["forEach"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(144);
      n(
        {
          target: "Array",
          proto: !0,
          forced: []["forEach"] != i,
        },
        {
          forEach: i,
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(45)["forEach"],
        i = r(65),
        o = r(32),
        a = i("forEach"),
        s = o("forEach");
      t["exports"] =
        a && s
          ? []["forEach"]
          : function (t) {
              return n(
                this,
                t,
                arguments["length"] > 1 ? arguments[1] : void 0
              );
            };
    },
    function (t, e, r) {
      var n = (function (t) {
        "use strict";
        var e = Object["prototype"],
          r = e["hasOwnProperty"],
          n = "function" == typeof Symbol ? Symbol : {},
          i = n["iterator"] || "@@iterator",
          o = n["asyncIterator"] || "@@asyncIterator",
          a = n["toStringTag"] || "@@toStringTag";
        function s(t, e, r, n) {
          var i = e && e["prototype"] instanceof l ? e : l,
            o = Object["create"](i["prototype"]),
            a = new _(n || []);
          return (
            (o["_invoke"] = (function (t, e, r) {
              var n = "suspendedStart";
              return function (i, o) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw o;
                  return k();
                }
                for (r["method"] = i, r["arg"] = o; ; ) {
                  var a = r["delegate"];
                  if (a) {
                    var s = m(a, r);
                    if (s) {
                      if (s === c) continue;
                      return s;
                    }
                  }
                  if ("next" === r["method"])
                    r["sent"] = r["_sent"] = r["arg"];
                  else if ("throw" === r["method"]) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r["arg"]);
                    r["dispatchException"](r["arg"]);
                  } else
                    "return" === r["method"] &&
                      r["abrupt"]("return", r["arg"]);
                  n = "executing";
                  var l = u(t, e, r);
                  if ("normal" === l["type"]) {
                    if (
                      ((n = r["done"] ? "completed" : "suspendedYield"),
                      l["arg"] === c)
                    )
                      continue;
                    return {
                      value: l["arg"],
                      done: r["done"],
                    };
                  }
                  "throw" === l["type"] &&
                    ((n = "completed"),
                    (r["method"] = "throw"),
                    (r["arg"] = l["arg"]));
                }
              };
            })(t, r, a)),
            o
          );
        }
        function u(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t["call"](e, r),
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t,
            };
          }
        }
        t["wrap"] = s;
        var c = {};
        function l() {}
        function f() {}
        function d() {}
        var p = {};
        p[i] = function () {
          return this;
        };
        var h = Object["getPrototypeOf"],
          v = h && h(h(S([])));
        v && v !== e && r["call"](v, i) && (p = v);
        var g = (d["prototype"] = l["prototype"] = Object["create"](p));
        function y(t) {
          ["next", "throw", "return"]["forEach"](function (e) {
            t[e] = function (t) {
              return this["_invoke"](e, t);
            };
          });
        }
        function w(t) {
          var e;
          this["_invoke"] = function (n, i) {
            function o() {
              return new Promise(function (e, o) {
                !(function e(n, i, o, a) {
                  var s = u(t[n], t, i);
                  if ("throw" !== s["type"]) {
                    var c = s["arg"],
                      l = c["value"];
                    return l &&
                      "object" == typeof l &&
                      r["call"](l, "__await")
                      ? Promise["resolve"](l["__await"])["then"](
                          function (t) {
                            e("next", t, o, a);
                          },
                          function (t) {
                            e("throw", t, o, a);
                          }
                        )
                      : Promise["resolve"](l)["then"](
                          function (t) {
                            (c["value"] = t), o(c);
                          },
                          function (t) {
                            return e("throw", t, o, a);
                          }
                        );
                  }
                  a(s["arg"]);
                })(n, i, e, o);
              });
            }
            return (e = e ? e["then"](o, o) : o());
          };
        }
        function m(t, e) {
          var r = t["iterator"][e["method"]];
          if (void 0 === r) {
            if (((e["delegate"] = null), "throw" === e["method"])) {
              if (
                t["iterator"]["return"] &&
                ((e["method"] = "return"),
                (e["arg"] = void 0),
                m(t, e),
                "throw" === e["method"])
              )
                return c;
              (e["method"] = "throw"),
                (e["arg"] = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return c;
          }
          var n = u(r, t["iterator"], e["arg"]);
          if ("throw" === n["type"])
            return (
              (e["method"] = "throw"),
              (e["arg"] = n["arg"]),
              (e["delegate"] = null),
              c
            );
          var i = n["arg"];
          return i
            ? i["done"]
              ? ((e[t["resultName"]] = i["value"]),
                (e["next"] = t["nextLoc"]),
                "return" !== e["method"] &&
                  ((e["method"] = "next"), (e["arg"] = void 0)),
                (e["delegate"] = null),
                c)
              : i
            : ((e["method"] = "throw"),
              (e["arg"] = new TypeError("iterator result is not an object")),
              (e["delegate"] = null),
              c);
        }
        function b(t) {
          var e = {
            tryLoc: t[0],
          };
          1 in t && (e["catchLoc"] = t[1]),
            2 in t && ((e["finallyLoc"] = t[2]), (e["afterLoc"] = t[3])),
            this["tryEntries"]["push"](e);
        }
        function x(t) {
          var e = t["completion"] || {};
          (e["type"] = "normal"),
            delete e["arg"],
            (t["completion"] = e);
        }
        function _(t) {
          (this["tryEntries"] = [
            {
              tryLoc: "root",
            },
          ]),
            t["forEach"](b, this),
            this["reset"](!0);
        }
        function S(t) {
          if (t) {
            var e = t[i];
            if (e) return e["call"](t);
            if ("function" == typeof t["next"]) return t;
            if (!isNaN(t["length"])) {
              var n = -1,
                o = function e() {
                  for (; ++n < t["length"]; )
                    if (r["call"](t, n))
                      return (e["value"] = t[n]), (e["done"] = !1), e;
                  return (e["value"] = void 0), (e["done"] = !0), e;
                };
              return (o["next"] = o);
            }
          }
          return {
            next: k,
          };
        }
        function k() {
          return {
            value: void 0,
            done: !0,
          };
        }
        return (
          (f["prototype"] = g["constructor"] = d),
          (d["constructor"] = f),
          (d[a] = f["displayName"] = "GeneratorFunction"),
          (t["isGeneratorFunction"] = function (t) {
            var e = "function" == typeof t && t["constructor"];
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e["displayName"] || e["name"]))
            );
          }),
          (t["mark"] = function (t) {
            return (
              Object["setPrototypeOf"]
                ? Object["setPrototypeOf"](t, d)
                : ((t["__proto__"] = d), a in t || (t[a] = "GeneratorFunction")),
              (t["prototype"] = Object["create"](g)),
              t
            );
          }),
          (t["awrap"] = function (t) {
            return {
              __await: t,
            };
          }),
          y(w["prototype"]),
          (w["prototype"][o] = function () {
            return this;
          }),
          (t["AsyncIterator"] = w),
          (t["async"] = function (e, r, n, i) {
            var o = new w(s(e, r, n, i));
            return t["isGeneratorFunction"](r)
              ? o
              : o["next"]()["then"](function (t) {
                  return t["done"] ? t["value"] : o["next"]();
                });
          }),
          y(g),
          (g[a] = "Generator"),
          (g[i] = function () {
            return this;
          }),
          (g["toString"] = function () {
            return "[object Generator]";
          }),
          (t["keys"] = function (t) {
            var e = [];
            for (var r in t) e["push"](r);
            return (
              e["reverse"](),
              function r() {
                for (; e["length"]; ) {
                  var n = e["pop"]();
                  if (n in t)
                    return (r["value"] = n), (r["done"] = !1), r;
                }
                return (r["done"] = !0), r;
              }
            );
          }),
          (t["values"] = S),
          (_["prototype"] = {
            constructor: _,
            reset: function (t) {
              if (
                ((this["prev"] = 0),
                (this["next"] = 0),
                (this["sent"] = this["_sent"] = void 0),
                (this["done"] = !1),
                (this["delegate"] = null),
                (this["method"] = "next"),
                (this["arg"] = void 0),
                this["tryEntries"]["forEach"](x),
                !t)
              )
                for (var e in this)
                  "t" === e["charAt"](0) &&
                    r["call"](this, e) &&
                    !isNaN(+e["slice"](1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this["done"] = !0;
              var t = this["tryEntries"][0]["completion"];
              if ("throw" === t["type"]) throw t["arg"];
              return this["rval"];
            },
            dispatchException: function (t) {
              if (this["done"]) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (a["type"] = "throw"),
                  (a["arg"] = t),
                  (e["next"] = r),
                  n &&
                    ((e["method"] = "next"),
                    (e["arg"] = void 0)),
                  !!n
                );
              }
              for (var i = this["tryEntries"]["length"] - 1; i >= 0; --i) {
                var o = this["tryEntries"][i],
                  a = o["completion"];
                if ("root" === o["tryLoc"]) return n("end");
                if (o["tryLoc"] <= this["prev"]) {
                  var s = r["call"](o, "catchLoc"),
                    u = r["call"](o, "finallyLoc");
                  if (s && u) {
                    if (this["prev"] < o["catchLoc"])
                      return n(o["catchLoc"], !0);
                    if (this["prev"] < o["finallyLoc"])
                      return n(o["finallyLoc"]);
                  } else if (s) {
                    if (this["prev"] < o["catchLoc"])
                      return n(o["catchLoc"], !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this["prev"] < o["finallyLoc"])
                      return n(o["finallyLoc"]);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this["tryEntries"]["length"] - 1; n >= 0; --n) {
                var i = this["tryEntries"][n];
                if (
                  i["tryLoc"] <= this["prev"] &&
                  r["call"](i, "finallyLoc") &&
                  this["prev"] < i["finallyLoc"]
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o["tryLoc"] <= e &&
                e <= o["finallyLoc"] &&
                (o = null);
              var a = o ? o["completion"] : {};
              return (
                (a["type"] = t),
                (a["arg"] = e),
                o
                  ? ((this["method"] = "next"),
                    (this["next"] = o["finallyLoc"]),
                    c)
                  : this["complete"](a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t["type"]) throw t["arg"];
              return (
                "break" === t["type"] ||
                "continue" === t["type"]
                  ? (this["next"] = t["arg"])
                  : "return" === t["type"]
                  ? ((this["rval"] = this["arg"] =
                      t["arg"]),
                    (this["method"] = "return"),
                    (this["next"] = "end"))
                  : "normal" === t["type"] &&
                    e &&
                    (this["next"] = e),
                c
              );
            },
            finish: function (t) {
              for (var e = this["tryEntries"]["length"] - 1; e >= 0; --e) {
                var r = this["tryEntries"][e];
                if (r["finallyLoc"] === t)
                  return (
                    this["complete"](r["completion"], r["afterLoc"]),
                    x(r),
                    c
                  );
              }
            },
            catch: function (t) {
              for (var e = this["tryEntries"]["length"] - 1; e >= 0; --e) {
                var r = this["tryEntries"][e];
                if (r["tryLoc"] === t) {
                  var n = r["completion"];
                  if ("throw" === n["type"]) {
                    var i = n["arg"];
                    x(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this["delegate"] = {
                  iterator: S(t),
                  resultName: e,
                  nextLoc: r,
                }),
                "next" === this["method"] &&
                  (this["arg"] = void 0),
                c
              );
            },
          }),
          t
        );
      })(t["exports"]);
      try {
        regeneratorRuntime = n;
      } catch (t) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    },
    function (t, e, r) {
      t["exports"] = r(147);
    },
    function (t, e, r) {
      "use strict";
      var n = r(91);
      r(153), r(154), r(155), r(156), (t["exports"] = n);
    },
    function (t, e, r) {
      var n = r(62),
        i = r(29),
        o = function (t) {
          return function (e, r) {
            var o,
              a,
              s = String(i(e)),
              u = n(r),
              c = s["length"];
            return u < 0 || u >= c
              ? t
                ? ""
                : void 0
              : (o = s["charCodeAt"](u)) < 55296 ||
                o > 56319 ||
                u + 1 === c ||
                (a = s["charCodeAt"](u + 1)) < 56320 ||
                a > 57343
              ? t
                ? s["charAt"](u)
                : o
              : t
              ? s["slice"](u, u + 2)
              : a - 56320 + ((o - 55296) << 10) + 65536;
          };
        };
      t["exports"] = {
        codeAt: o(!1),
        charAt: o(!0),
      };
    },
    function (t, e, r) {
      "use strict";
      var n,
        i,
        o,
        a,
        s = r(0),
        u = r(4),
        c = r(9),
        l = r(16),
        f = r(93),
        d = r(44),
        p = r(94),
        h = r(42),
        v = r(95),
        g = r(12),
        y = r(10),
        w = r(67),
        m = r(25),
        b = r(81),
        x = r(6),
        _ = r(98),
        S = r(35),
        k = r(99)["set"],
        E = r(150),
        A = r(101),
        L = r(151),
        T = r(36),
        P = r(47),
        O = r(31),
        j = r(79),
        I = r(11),
        N = r(70),
        C = I("species"),
        M = "Promise",
        R = O["get"],
        D = O["set"],
        B = O["getterFor"](M),
        U = f,
        F = c["TypeError"],
        W = c["document"],
        q = c["process"],
        z = l("fetch"),
        H = T["f"],
        V = H,
        G = "process" == m(q),
        X = !!(W && W["createEvent"] && c["dispatchEvent"]),
        J = j(M, function () {
          if (!(b(U) !== String(U))) {
            if (66 === N) return !0;
            if (!G && "function" != typeof PromiseRejectionEvent) return !0;
          }
          if (u && !U["prototype"]["finally"]) return !0;
          if (N >= 51 && /native code/["test"](U)) return !1;
          var t = U["resolve"](1),
            e = function (t) {
              t(
                function () {},
                function () {}
              );
            };
          return (
            ((t["constructor"] = {})[C] = e),
            !(t["then"](function () {}) instanceof e)
          );
        }),
        K =
          J ||
          !_(function (t) {
            U["all"](t)["catch"](function () {});
          }),
        Y = function (t) {
          var e;
          return !(!g(t) || "function" != typeof (e = t["then"])) && e;
        },
        $ = function (t, e, r) {
          if (!e["notified"]) {
            e["notified"] = !0;
            var n = e["reactions"];
            E(function () {
              for (
                var i = e["value"], o = 1 == e["state"], a = 0;
                n["length"] > a;

              ) {
                var s,
                  u,
                  c,
                  l = n[a++],
                  f = o ? l["ok"] : l["fail"],
                  d = l["resolve"],
                  p = l["reject"],
                  h = l["domain"];
                try {
                  f
                    ? (o ||
                        (2 === e["rejection"] && et(t, e),
                        (e["rejection"] = 1)),
                      !0 === f
                        ? (s = i)
                        : (h && h["enter"](),
                          (s = f(i)),
                          h && (h["exit"](), (c = !0))),
                      s === l["promise"]
                        ? p(F("Promise-chain cycle"))
                        : (u = Y(s))
                        ? u["call"](s, d, p)
                        : d(s))
                    : p(i);
                } catch (t) {
                  h && !c && h["exit"](), p(t);
                }
              }
              (e["reactions"] = []),
                (e["notified"] = !1),
                r && !e["rejection"] && Z(t, e);
            });
          }
        },
        Q = function (t, e, r) {
          var n, i;
          X
            ? (((n = W["createEvent"]("Event"))["promise"] = e),
              (n["reason"] = r),
              n["initEvent"](t, !1, !0),
              c["dispatchEvent"](n))
            : (n = {
                promise: e,
                reason: r,
              }),
            (i = c["on" + t])
              ? i(n)
              : "unhandledrejection" === t && L("Unhandled promise rejection", r);
        },
        Z = function (t, e) {
          k["call"](c, function () {
            var r,
              n = e["value"];
            if (
              tt(e) &&
              ((r = P(function () {
                G ? q["emit"]("unhandledRejection", n, t) : Q("unhandledrejection", t, n);
              })),
              (e["rejection"] = G || tt(e) ? 2 : 1),
              r["error"])
            )
              throw r["value"];
          });
        },
        tt = function (t) {
          return 1 !== t["rejection"] && !t["parent"];
        },
        et = function (t, e) {
          k["call"](c, function () {
            G
              ? q["emit"]("rejectionHandled", t)
              : Q("rejectionhandled", t, e["value"]);
          });
        },
        rt = function (t, e, r, n) {
          return function (i) {
            t(e, r, i, n);
          };
        },
        nt = function (t, e, r, n) {
          e["done"] ||
            ((e["done"] = !0),
            n && (e = n),
            (e["value"] = r),
            (e["state"] = 2),
            $(t, e, !0));
        },
        it = function (t, e, r, n) {
          if (!e["done"]) {
            (e["done"] = !0), n && (e = n);
            try {
              if (t === r) throw F("Promise can't be resolved itself");
              var i = Y(r);
              i
                ? E(function () {
                    var n = {
                      done: !1,
                    };
                    try {
                      i["call"](r, rt(it, t, n, e), rt(nt, t, n, e));
                    } catch (r) {
                      nt(t, n, r, e);
                    }
                  })
                : ((e["value"] = r), (e["state"] = 1), $(t, e, !1));
            } catch (r) {
              nt(
                t,
                {
                  done: !1,
                },
                r,
                e
              );
            }
          }
        };
      J &&
        ((U = function (t) {
          w(this, U, M), y(t), n["call"](this);
          var e = R(this);
          try {
            t(rt(it, this, e), rt(nt, this, e));
          } catch (t) {
            nt(this, e, t);
          }
        }),
        ((n = function (t) {
          D(this, {
            type: M,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0,
          });
        })["prototype"] = p(U["prototype"], {
          then: function (t, e) {
            var r = B(this),
              n = H(S(this, U));
            return (
              (n["ok"] = "function" != typeof t || t),
              (n["fail"] = "function" == typeof e && e),
              (n["domain"] = G ? q["domain"] : void 0),
              (r["parent"] = !0),
              r["reactions"]["push"](n),
              0 != r["state"] && $(this, r, !1),
              n["promise"]
            );
          },
          catch: function (t) {
            return this["then"](void 0, t);
          },
        })),
        (i = function () {
          var t = new n(),
            e = R(t);
          (this["promise"] = t),
            (this["resolve"] = rt(it, t, e)),
            (this["reject"] = rt(nt, t, e));
        }),
        (T["f"] = H = function (t) {
          return t === U || t === o ? new i(t) : V(t);
        }),
        u ||
          "function" != typeof f ||
          ((a = f["prototype"]["then"]),
          d(
            f["prototype"],
            "then",
            function (t, e) {
              var r = this;
              return new U(function (t, e) {
                a["call"](r, t, e);
              })["then"](t, e);
            },
            {
              unsafe: !0,
            }
          ),
          "function" == typeof z &&
            s(
              {
                global: !0,
                enumerable: !0,
                forced: !0,
              },
              {
                fetch: function (t) {
                  return A(U, z["apply"](c, arguments));
                },
              }
            ))),
        s(
          {
            global: !0,
            wrap: !0,
            forced: J,
          },
          {
            Promise: U,
          }
        ),
        h(U, M, !1, !0),
        v(M),
        (o = l(M)),
        s(
          {
            target: M,
            stat: !0,
            forced: J,
          },
          {
            reject: function (t) {
              var e = H(this);
              return e["reject"]["call"](void 0, t), e["promise"];
            },
          }
        ),
        s(
          {
            target: M,
            stat: !0,
            forced: u || J,
          },
          {
            resolve: function (t) {
              return A(u && this === o ? U : this, t);
            },
          }
        ),
        s(
          {
            target: M,
            stat: !0,
            forced: K,
          },
          {
            all: function (t) {
              var e = this,
                r = H(e),
                n = r["resolve"],
                i = r["reject"],
                o = P(function () {
                  var r = y(e["resolve"]),
                    o = [],
                    a = 0,
                    s = 1;
                  x(t, function (t) {
                    var u = a++,
                      c = !1;
                    o["push"](void 0),
                      s++,
                      r["call"](e, t)["then"](function (t) {
                        c || ((c = !0), (o[u] = t), --s || n(o));
                      }, i);
                  }),
                    --s || n(o);
                });
              return o["error"] && i(o["value"]), r["promise"];
            },
            race: function (t) {
              var e = this,
                r = H(e),
                n = r["reject"],
                i = P(function () {
                  var i = y(e["resolve"]);
                  x(t, function (t) {
                    i["call"](e, t)["then"](r["resolve"], n);
                  });
                });
              return i["error"] && n(i["value"]), r["promise"];
            },
          }
        );
    },
    function (t, e, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        c,
        l,
        f = r(9),
        d = r(51)["f"],
        p = r(25),
        h = r(99)["set"],
        v = r(100),
        g = f["MutationObserver"] || f["WebKitMutationObserver"],
        y = f["process"],
        w = f["Promise"],
        m = "process" == p(y),
        b = d(f, "queueMicrotask"),
        x = b && b["value"];
      x ||
        ((n = function () {
          var t, e;
          for (m && (t = y["domain"]) && t["exit"](); i; ) {
            (e = i["fn"]), (i = i["next"]);
            try {
              e();
            } catch (t) {
              throw (i ? a() : (o = void 0), t);
            }
          }
          (o = void 0), t && t["enter"]();
        }),
        m
          ? (a = function () {
              y["nextTick"](n);
            })
          : g && !v
          ? ((s = !0),
            (u = document["createTextNode"]("")),
            new g(n)["observe"](u, {
              characterData: !0,
            }),
            (a = function () {
              u["data"] = s = !s;
            }))
          : w && w["resolve"]
          ? ((c = w["resolve"](void 0)),
            (l = c["then"]),
            (a = function () {
              l["call"](c, n);
            }))
          : (a = function () {
              h["call"](f, n);
            })),
        (t["exports"] =
          x ||
          function (t) {
            var e = {
              fn: t,
              next: void 0,
            };
            o && (o["next"] = e), i || ((i = e), a()), (o = e);
          });
    },
    function (t, e, r) {
      var n = r(9);
      t["exports"] = function (t, e) {
        var r = n["console"];
        r &&
          r["error"] &&
          (1 === arguments["length"]
            ? r["error"](t)
            : r["error"](t, e));
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(93),
        a = r(5),
        s = r(16),
        u = r(35),
        c = r(101),
        l = r(44);
      n(
        {
          target: "Promise",
          proto: !0,
          real: !0,
          forced:
            !!o &&
            a(function () {
              o["prototype"]["finally"]["call"](
                {
                  then: function () {},
                },
                function () {}
              );
            }),
        },
        {
          finally: function (t) {
            var e = u(this, s("Promise")),
              r = "function" == typeof t;
            return this["then"](
              r
                ? function (r) {
                    return c(e, t())["then"](function () {
                      return r;
                    });
                  }
                : t,
              r
                ? function (r) {
                    return c(e, t())["then"](function () {
                      throw r;
                    });
                  }
                : t
            );
          },
        }
      ),
        i ||
          "function" != typeof o ||
          o["prototype"]["finally"] ||
          l(
            o["prototype"],
            "finally",
            s("Promise")["prototype"]["finally"]
          );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(13),
        o = r(40),
        a = r(64),
        s = r(34),
        u = r(20),
        c = r(33),
        l = r(6),
        f = r(19),
        d = r(31),
        p = d["set"],
        h = d["getterFor"]("AggregateError"),
        v = function (t, e) {
          var r = this;
          if (!(r instanceof v)) return new v(t, e);
          a && (r = a(new Error(e), o(r)));
          var n = [];
          return (
            l(t, n["push"], n),
            i
              ? p(r, {
                  errors: n,
                  type: "AggregateError",
                })
              : (r["errors"] = n),
            void 0 !== e && f(r, "message", String(e)),
            r
          );
        };
      (v["prototype"] = s(Error["prototype"], {
        constructor: c(5, v),
        message: c(5, ""),
        name: c(5, "AggregateError"),
      })),
        i &&
          u["f"](v["prototype"], "errors", {
            get: function () {
              return h(this)["errors"];
            },
            configurable: !0,
          }),
        n(
          {
            global: !0,
          },
          {
            AggregateError: v,
          }
        );
    },
    function (t, e, r) {
      r(102);
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(36),
        o = r(47);
      n(
        {
          target: "Promise",
          stat: !0,
        },
        {
          try: function (t) {
            var e = i["f"](this),
              r = o(t);
            return (
              (r["error"] ? e["reject"] : e["resolve"])(
                r["value"]
              ),
              e["promise"]
            );
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(10),
        o = r(16),
        a = r(36),
        s = r(47),
        u = r(6);
      n(
        {
          target: "Promise",
          stat: !0,
        },
        {
          any: function (t) {
            var e = this,
              r = a["f"](e),
              n = r["resolve"],
              c = r["reject"],
              l = s(function () {
                var r = i(e["resolve"]),
                  a = [],
                  s = 0,
                  l = 1,
                  f = !1;
                u(t, function (t) {
                  var i = s++,
                    u = !1;
                  a["push"](void 0),
                    l++,
                    r["call"](e, t)["then"](
                      function (t) {
                        u || f || ((f = !0), n(t));
                      },
                      function (t) {
                        u ||
                          f ||
                          ((u = !0),
                          (a[i] = t),
                          --l || c(new (o("AggregateError"))(a, "No one promise resolved")));
                      }
                    );
                }),
                  --l || c(new (o("AggregateError"))(a, "No one promise resolved"));
              });
            return l["error"] && c(l["value"]), r["promise"];
          },
        }
      );
    },
    function (t, e, r) {
      t["exports"] = r(158);
    },
    function (t, e, r) {
      var n = r(77);
      t["exports"] = n;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(160));
      window["VOD_EVENT_BUS"] ||
        (window["VOD_EVENT_BUS"] = new i["default"]["EventEmitter"]()),
        window["VOD_EVENT_BUS"]["setMaxListeners"](100);
      var o = window["VOD_EVENT_BUS"];
      e["default"] = o;
    },
    function (t, e, r) {
      "use strict";
      var n,
        i = "object" == typeof Reflect ? Reflect : null,
        o =
          i && "function" == typeof i["apply"]
            ? i["apply"]
            : function (t, e, r) {
                return Function["prototype"]["apply"]["call"](t, e, r);
              };
      n =
        i && "function" == typeof i["ownKeys"]
          ? i["ownKeys"]
          : Object["getOwnPropertySymbols"]
          ? function (t) {
              return Object["getOwnPropertyNames"](t)["concat"](
                Object["getOwnPropertySymbols"](t)
              );
            }
          : function (t) {
              return Object["getOwnPropertyNames"](t);
            };
      var a =
        Number["isNaN"] ||
        function (t) {
          return t != t;
        };
      function s() {
        s["init"]["call"](this);
      }
      (t["exports"] = s),
        (s["EventEmitter"] = s),
        (s["prototype"]["_events"] = void 0),
        (s["prototype"]["_eventsCount"] = 0),
        (s["prototype"]["_maxListeners"] = void 0);
      var u = 10;
      function c(t) {
        if ("function" != typeof t)
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      }
      function l(t) {
        return void 0 === t["_maxListeners"] ? s["defaultMaxListeners"] : t["_maxListeners"];
      }
      function f(t, e, r, n) {
        var i, o, a, s;
        if (
          (c(r),
          void 0 === (o = t["_events"])
            ? ((o = t["_events"] = Object["create"](null)),
              (t["_eventsCount"] = 0))
            : (void 0 !== o["newListener"] &&
                (t["emit"](
                  "newListener",
                  e,
                  r["listener"] ? r["listener"] : r
                ),
                (o = t["_events"])),
              (a = o[e])),
          void 0 === a)
        )
          (a = o[e] = r), ++t["_eventsCount"];
        else if (
          ("function" == typeof a
            ? (a = o[e] = n ? [r, a] : [a, r])
            : n
            ? a["unshift"](r)
            : a["push"](r),
          (i = l(t)) > 0 && a["length"] > i && !a["warned"])
        ) {
          a["warned"] = !0;
          var u = new Error(
            "Possible EventEmitter memory leak detected. " +
              a["length"] +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (u["name"] = "MaxListenersExceededWarning"),
            (u["emitter"] = t),
            (u["type"] = e),
            (u["count"] = a["length"]),
            (s = u),
            console && console["warn"] && console["warn"](s);
        }
        return t;
      }
      function d() {
        if (!this["fired"])
          return (
            this["target"]["removeListener"](
              this["type"],
              this["wrapFn"]
            ),
            (this["fired"] = !0),
            0 === arguments["length"]
              ? this["listener"]["call"](this["target"])
              : this["listener"]["apply"](this["target"], arguments)
          );
      }
      function p(t, e, r) {
        var n = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: r,
          },
          i = d["bind"](n);
        return (i["listener"] = r), (n["wrapFn"] = i), i;
      }
      function h(t, e, r) {
        var n = t["_events"];
        if (void 0 === n) return [];
        var i = n[e];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? r
            ? [i["listener"] || i]
            : [i]
          : r
          ? (function (t) {
              for (
                var e = new Array(t["length"]), r = 0;
                r < e["length"];
                ++r
              )
                e[r] = t[r]["listener"] || t[r];
              return e;
            })(i)
          : g(i, i["length"]);
      }
      function v(t) {
        var e = this["_events"];
        if (void 0 !== e) {
          var r = e[t];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r["length"];
        }
        return 0;
      }
      function g(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      Object["defineProperty"](s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return u;
        },
        set: function (t) {
          if ("number" != typeof t || t < 0 || a(t))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
          u = t;
        },
      }),
        (s["init"] = function () {
          (void 0 !== this["_events"] &&
            this["_events"] !== Object["getPrototypeOf"](this)["_events"]) ||
            ((this["_events"] = Object["create"](null)),
            (this["_eventsCount"] = 0)),
            (this["_maxListeners"] = this["_maxListeners"] || void 0);
        }),
        (s["prototype"]["setMaxListeners"] = function (t) {
          if ("number" != typeof t || t < 0 || a(t))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
          return (this["_maxListeners"] = t), this;
        }),
        (s["prototype"]["getMaxListeners"] = function () {
          return l(this);
        }),
        (s["prototype"]["emit"] = function (t) {
          for (var e = [], r = 1; r < arguments["length"]; r++)
            e["push"](arguments[r]);
          var n = "error" === t,
            i = this["_events"];
          if (void 0 !== i) n = n && void 0 === i["error"];
          else if (!n) return !1;
          if (n) {
            var a;
            if ((e["length"] > 0 && (a = e[0]), a instanceof Error)) throw a;
            var s = new Error(
              "Unhandled error." +
                (a
                  ? " (" + a["message"] + ")"
                  : "")
            );
            throw ((s["context"] = a), s);
          }
          var u = i[t];
          if (void 0 === u) return !1;
          if ("function" == typeof u) o(u, this, e);
          else {
            var c = u["length"],
              l = g(u, c);
            for (r = 0; r < c; ++r) o(l[r], this, e);
          }
          return !0;
        }),
        (s["prototype"]["addListener"] = function (t, e) {
          return f(this, t, e, !1);
        }),
        (s["prototype"]["on"] = s["prototype"]["addListener"]),
        (s["prototype"]["prependListener"] = function (t, e) {
          return f(this, t, e, !0);
        }),
        (s["prototype"]["once"] = function (t, e) {
          return c(e), this["on"](t, p(this, t, e)), this;
        }),
        (s["prototype"]["prependOnceListener"] = function (t, e) {
          return c(e), this["prependListener"](t, p(this, t, e)), this;
        }),
        (s["prototype"]["removeListener"] = function (t, e) {
          var r, n, i, o, a;
          if ((c(e), void 0 === (n = this["_events"]))) return this;
          if (void 0 === (r = n[t])) return this;
          if (r === e || r["listener"] === e)
            0 == --this["_eventsCount"]
              ? (this["_events"] = Object["create"](null))
              : (delete n[t],
                n["removeListener"] &&
                  this["emit"]("removeListener", t, r["listener"] || e));
          else if ("function" != typeof r) {
            for (i = -1, o = r["length"] - 1; o >= 0; o--)
              if (r[o] === e || r[o]["listener"] === e) {
                (a = r[o]["listener"]), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r["shift"]()
              : (function (t, e) {
                  for (; e + 1 < t["length"]; e++) t[e] = t[e + 1];
                  t["pop"]();
                })(r, i),
              1 === r["length"] && (n[t] = r[0]),
              void 0 !== n["removeListener"] &&
                this["emit"]("removeListener", t, a || e);
          }
          return this;
        }),
        (s["prototype"]["off"] = s["prototype"]["removeListener"]),
        (s["prototype"]["removeAllListeners"] = function (t) {
          var e, r, n;
          if (void 0 === (r = this["_events"])) return this;
          if (void 0 === r["removeListener"])
            return (
              0 === arguments["length"]
                ? ((this["_events"] = Object["create"](null)),
                  (this["_eventsCount"] = 0))
                : void 0 !== r[t] &&
                  (0 == --this["_eventsCount"]
                    ? (this["_events"] = Object["create"](null))
                    : delete r[t]),
              this
            );
          if (0 === arguments["length"]) {
            var i,
              o = Object["keys"](r);
            for (n = 0; n < o["length"]; ++n)
              "removeListener" !== (i = o[n]) && this["removeAllListeners"](i);
            return (
              this["removeAllListeners"]("removeListener"),
              (this["_events"] = Object["create"](null)),
              (this["_eventsCount"] = 0),
              this
            );
          }
          if ("function" == typeof (e = r[t])) this["removeListener"](t, e);
          else if (void 0 !== e)
            for (n = e["length"] - 1; n >= 0; n--)
              this["removeListener"](t, e[n]);
          return this;
        }),
        (s["prototype"]["listeners"] = function (t) {
          return h(this, t, !0);
        }),
        (s["prototype"]["rawListeners"] = function (t) {
          return h(this, t, !1);
        }),
        (s["listenerCount"] = function (t, e) {
          return "function" == typeof t["listenerCount"]
            ? t["listenerCount"](e)
            : v["call"](t, e);
        }),
        (s["prototype"]["listenerCount"] = v),
        (s["prototype"]["eventNames"] = function () {
          return this["_eventsCount"] > 0 ? n(this["_events"]) : [];
        });
    },
    function (t, e, r) {
      t["exports"] = r(162);
    },
    function (t, e, r) {
      var n = r(163);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(164),
        i = String["prototype"];
      t["exports"] = function (t) {
        var e = t["startsWith"];
        return "string" == typeof t ||
          t === i ||
          (t instanceof String && e === i["startsWith"])
          ? n
          : e;
      };
    },
    function (t, e, r) {
      r(165);
      var n = r(17);
      t["exports"] = n("String")["startsWith"];
    },
    function (t, e, r) {
      "use strict";
      var n,
        i = r(0),
        o = r(51)["f"],
        a = r(27),
        s = r(104),
        u = r(29),
        c = r(105),
        l = r(4),
        f = ""["startsWith"],
        d = Math["min"],
        p = c("startsWith");
      i(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              l ||
              p ||
              ((n = o(String["prototype"], "startsWith")),
              !n || n["writable"])
            ) && !p,
        },
        {
          startsWith: function (t) {
            var e = String(u(this));
            s(t);
            var r = a(
                d(
                  arguments["length"] > 1 ? arguments[1] : void 0,
                  e["length"]
                )
              ),
              n = String(t);
            return f
              ? f["call"](e, n, r)
              : e["slice"](r, r + n["length"]) === n;
          },
        }
      );
    },
    function (t, e, r) {
      var n = r(12),
        i = r(25),
        o = r(11)("match");
      t["exports"] = function (t) {
        var e;
        return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
      };
    },
    function (t, e, r) {
      var n = r(168);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(169),
        i = r(171),
        o = Array["prototype"],
        a = String["prototype"];
      t["exports"] = function (t) {
        var e = t["includes"];
        return t === o || (t instanceof Array && e === o["includes"])
          ? n
          : "string" == typeof t ||
            t === a ||
            (t instanceof String && e === a["includes"])
          ? i
          : e;
      };
    },
    function (t, e, r) {
      r(170);
      var n = r(17);
      t["exports"] = n("Array")["includes"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(61)["includes"],
        o = r(80);
      n(
        {
          target: "Array",
          proto: !0,
          forced: !r(32)("indexOf", {
            ACCESSORS: !0,
            1: 0,
          }),
        },
        {
          includes: function (t) {
            return i(
              this,
              t,
              arguments["length"] > 1 ? arguments[1] : void 0
            );
          },
        }
      ),
        o("includes");
    },
    function (t, e, r) {
      r(172);
      var n = r(17);
      t["exports"] = n("String")["includes"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(104),
        o = r(29);
      n(
        {
          target: "String",
          proto: !0,
          forced: !r(105)("includes"),
        },
        {
          includes: function (t) {
            return !!~String(o(this))["indexOf"](
              i(t),
              arguments["length"] > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    function (t, e, r) {
      var n = r(174);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(175);
      var n = r(8);
      t["exports"] = n["parseInt"];
    },
    function (t, e, r) {
      var n = r(0),
        i = r(176);
      n(
        {
          global: !0,
          forced: parseInt != i,
        },
        {
          parseInt: i,
        }
      );
    },
    function (t, e, r) {
      var n = r(9),
        i = r(107)["trim"],
        o = r(72),
        a = n["parseInt"],
        s = /^[+-]?0[Xx]/,
        u = 8 !== a(o + "08") || 22 !== a(o + "0x16");
      t["exports"] = u
        ? function (t, e) {
            var r = i(String(t));
            return a(r, e >>> 0 || (s["test"](r) ? 16 : 10));
          }
        : a;
    },
    function (t, e, r) {
      "use strict";
      var n,
        i = r(2),
        o = i(r(178)),
        a = i(r(184)),
        s = i(r(73));
      !(function (i, u) {
        var c = "model",
          l = "name",
          f = "type",
          d = "vendor",
          p = "version",
          h = "mobile",
          v = "tablet",
          g = "smarttv",
          y = {
            extend: function (t, e) {
              var r = {};
              for (var n in t) {
                var i;
                if (e[n] && e[n]["length"] % 2 == 0)
                  r[n] = (0, s["default"])((i = e[n]))["call"](i, t[n]);
                else r[n] = t[n];
              }
              return r;
            },
            has: function (t, e) {
              var r;
              return (
                "string" == typeof t &&
                -1 !==
                  (0, a["default"])((r = e["toLowerCase"]()))["call"](
                    r,
                    t["toLowerCase"]()
                  )
              );
            },
            lowerize: function (t) {
              return t["toLowerCase"]();
            },
            major: function (t) {
              return "string" == typeof t
                ? t["replace"](/[^\d\.]/g, "")["split"](
                    "."
                  )[0]
                : void 0;
            },
            trim: function (t) {
              return t["replace"](
                /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ""
              );
            },
          },
          w = {
            rgx: function (t, e) {
              for (var r, n, i, o, a, s, u = 0; u < e["length"] && !a; ) {
                var c = e[u],
                  l = e[u + 1];
                for (r = n = 0; r < c["length"] && !a; )
                  if ((a = c[r++]["exec"](t)))
                    for (i = 0; i < l["length"]; i++)
                      (s = a[++n]),
                        "object" == typeof (o = l[i]) && o["length"] > 0
                          ? 2 == o["length"]
                            ? "function" == typeof o[1]
                              ? (this[o[0]] = o[1]["call"](this, s))
                              : (this[o[0]] = o[1])
                            : 3 == o["length"]
                            ? "function" != typeof o[1] ||
                              (o[1]["exec"] && o[1]["test"])
                              ? (this[o[0]] = s
                                  ? s["replace"](o[1], o[2])
                                  : void 0)
                              : (this[o[0]] = s
                                  ? o[1]["call"](this, s, o[2])
                                  : void 0)
                            : 4 == o["length"] &&
                              (this[o[0]] = s
                                ? o[3]["call"](
                                    this,
                                    s["replace"](o[1], o[2])
                                  )
                                : void 0)
                          : (this[o] = s || void 0);
                u += 2;
              }
            },
            str: function (t, e) {
              for (var r in e)
                if ("object" == typeof e[r] && e[r]["length"] > 0) {
                  for (var n = 0; n < e[r]["length"]; n++)
                    if (y["has"](e[r][n], t))
                      return "?" === r ? void 0 : r;
                } else if (y["has"](e[r], t))
                  return "?" === r ? void 0 : r;
              return t;
            },
          },
          m = {
            browser: {
              oldsafari: {
                version: {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              },
            },
            device: {
              amazon: {
                model: {
                  "Fire Phone": ["SD", "KF"],
                },
              },
              sprint: {
                model: {
                  "Evo Shift 4G": "7373KT",
                },
                vendor: {
                  HTC: "APA",
                  Sprint: "Sprint",
                },
              },
            },
            os: {
              windows: {
                version: {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2e3: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM",
                },
              },
            },
          },
          b = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i,
              ],
              [l, p],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [[l, "Opera Mini"], p],
              [/\s(opr)\/([\w\.]+)/i],
              [[l, "Opera"], p],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
              ],
              [l, p],
              [/(konqueror)\/([\w\.]+)/i],
              [[l, "Konqueror"], p],
              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [[l, "IE"], p],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
              [[l, "Edge"], p],
              [/(yabrowser)\/([\w\.]+)/i],
              [[l, "Yandex"], p],
              [/(Avast)\/([\w\.]+)/i],
              [[l, "Avast Secure Browser"], p],
              [/(AVG)\/([\w\.]+)/i],
              [[l, "AVG Secure Browser"], p],
              [/(puffin)\/([\w\.]+)/i],
              [[l, "Puffin"], p],
              [/(focus)\/([\w\.]+)/i],
              [[l, "Firefox Focus"], p],
              [/(opt)\/([\w\.]+)/i],
              [[l, "Opera Touch"], p],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [[l, "UCBrowser"], p],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[l, /_/g, " "], p],
              [/(windowswechat qbcore)\/([\w\.]+)/i],
              [[l, "WeChat(Win) Desktop"], p],
              [/(micromessenger)\/([\w\.]+)/i],
              [[l, "WeChat"], p],
              [/(brave)\/([\w\.]+)/i],
              [[l, "Brave"], p],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [l, p],
              [/(QQ)\/([\d\.]+)/i],
              [l, p],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [l, p],
              [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
              [l, p],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [l, p],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [l],
              [/(LBBROWSER)/i],
              [l],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [p, [l, "MIUI Browser"]],
              [/;fbav\/([\w\.]+);/i],
              [p, [l, "Facebook"]],
              [
                /safari\s(line)\/([\w\.]+)/i,
                /android.+(line)\/([\w\.]+)\/iab/i,
              ],
              [l, p],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [p, [l, "Chrome Headless"]],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[l, /(.+)/, "$1 WebView"], p],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[l, /(.+(?:g|us))(.+)/, "$1 $2"], p],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [p, [l, "Android Browser"]],
              [/(sailfishbrowser)\/([\w\.]+)/i],
              [[l, "Sailfish Browser"], p],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [l, p],
              [/(dolfin)\/([\w\.]+)/i],
              [[l, "Dolphin"], p],
              [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
              [[l, "360 Browser"]],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [[l, "Chrome"], p],
              [/(coast)\/([\w\.]+)/i],
              [[l, "Opera Coast"], p],
              [/fxios\/([\w\.-]+)/i],
              [p, [l, "Firefox"]],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              [p, [l, "Mobile Safari"]],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              [p, l],
              [
                /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
              ],
              [[l, "GSA"], p],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [
                l,
                [
                  p,
                  w["str"],
                  m["browser"]["oldsafari"]["version"],
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [l, p],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[l, "Netscape"], p],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [l, p],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [["architecture", "amd64"]],
              [/(ia32(?=;))/i],
              [["architecture", y["lowerize"]]],
              [/((?:i[346]|x)86)[;\)]/i],
              [["architecture", "ia32"]],
              [/windows\s(ce|mobile);\sppc;/i],
              [["architecture", "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [["architecture", /ower/, "", y["lowerize"]]],
              [/(sun4\w)[;\)]/i],
              [["architecture", "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
              ],
              [["architecture", y["lowerize"]]],
            ],
            device: [
              [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
              [c, d, [f, v]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [c, [d, "Apple"], [f, v]],
              [/(apple\s{0,1}tv)/i],
              [
                [c, "Apple TV"],
                [d, "Apple"],
                [f, g],
              ],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
              ],
              [d, c, [f, v]],
              [/(kf[A-z]+)\sbuild\/.+silk\//i],
              [c, [d, "Amazon"], [f, v]],
              [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
              [
                [
                  c,
                  w["str"],
                  m["device"]["amazon"]["model"],
                ],
                [d, "Amazon"],
                [f, h],
              ],
              [/android.+aft([bms])\sbuild/i],
              [c, [d, "Amazon"], [f, g]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [c, d, [f, h]],
              [/\((ip[honed|\s\w*]+);/i],
              [c, [d, "Apple"], [f, h]],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
              ],
              [d, c, [f, h]],
              [/\(bb10;\s(\w+)/i],
              [c, [d, "BlackBerry"], [f, h]],
              [
                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
              ],
              [c, [d, "Asus"], [f, v]],
              [
                /(sony)\s(tablet\s[ps])\sbuild\//i,
                /(sony)?(?:sgp.+)\sbuild\//i,
              ],
              [
                [d, "Sony"],
                [c, "Xperia Tablet"],
                [f, v],
              ],
              [
                /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [c, [d, "Sony"], [f, h]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              [d, c, [f, "console"]],
              [/android.+;\s(shield)\sbuild/i],
              [c, [d, "Nvidia"], [f, "console"]],
              [/(playstation\s[34portablevi]+)/i],
              [c, [d, "Sony"], [f, "console"]],
              [/(sprint\s(\w+))/i],
              [
                [
                  d,
                  w["str"],
                  m["device"]["sprint"]["vendor"],
                ],
                [
                  c,
                  w["str"],
                  m["device"]["sprint"]["model"],
                ],
                [f, h],
              ],
              [
                /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [d, [c, /_/g, " "], [f, h]],
              [/(nexus\s9)/i],
              [c, [d, "HTC"], [f, v]],
              [
                /d\/huawei([\w\s-]+)[;\)]/i,
                /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i,
              ],
              [c, [d, "Huawei"], [f, h]],
              [/android.+(bah2?-a?[lw]\d{2})/i],
              [c, [d, "Huawei"], [f, v]],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [d, c, [f, h]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [c, [d, "Microsoft"], [f, "console"]],
              [/(kin\.[onetw]{3})/i],
              [
                [c, /\./g, " "],
                [d, "Microsoft"],
                [f, h],
              ],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [c, [d, "Motorola"], [f, h]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [c, [d, "Motorola"], [f, v]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [d, (0, o["default"])(y)],
                [c, (0, o["default"])(y)],
                [f, g],
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [c, /^/, "SmartTV"],
                [d, "Samsung"],
                [f, g],
              ],
              [/\(dtv[\);].+(aquos)/i],
              [c, [d, "Sharp"], [f, g]],
              [
                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i,
              ],
              [[d, "Samsung"], c, [f, v]],
              [/smart-tv.+(samsung)/i],
              [d, [f, g], c],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[d, "Samsung"], c, [f, h]],
              [/sie-(\w*)/i],
              [c, [d, "Siemens"], [f, h]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
              [[d, "Nokia"], c, [f, h]],
              [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
              [c, [d, "Acer"], [f, v]],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [c, [d, "LG"], [f, v]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [[d, "LG"], c, [f, v]],
              [/(lg) netcast\.tv/i],
              [d, c, [f, g]],
              [
                /(nexus\s[45])/i,
                /lg[e;\s\/-]+(\w*)/i,
                /android.+lg(\-?[\d\w]+)\s+build/i,
              ],
              [c, [d, "LG"], [f, h]],
              [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
              [d, c, [f, v]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [c, [d, "Lenovo"], [f, v]],
              [/(lenovo)[_\s-]?([\w-]+)/i],
              [d, c, [f, h]],
              [/linux;.+((jolla));/i],
              [d, c, [f, h]],
              [/((pebble))app\/[\d\.]+\s/i],
              [d, c, [f, "wearable"]],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [d, c, [f, h]],
              [/crkey/i],
              [
                [c, "Chromecast"],
                [d, "Google"],
                [f, g],
              ],
              [/android.+;\s(glass)\s\d/i],
              [c, [d, "Google"], [f, "wearable"]],
              [/android.+;\s(pixel c)[\s)]/i],
              [c, [d, "Google"], [f, v]],
              [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
              [c, [d, "Google"], [f, h]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
              ],
              [
                [c, /_/g, " "],
                [d, "Xiaomi"],
                [f, h],
              ],
              [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
              [
                [c, /_/g, " "],
                [d, "Xiaomi"],
                [f, v],
              ],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [c, [d, "Meizu"], [f, h]],
              [/(mz)-([\w-]{2,})/i],
              [[d, "Meizu"], c, [f, h]],
              [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
              [c, [d, "OnePlus"], [f, h]],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [c, [d, "RCA"], [f, v]],
              [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
              [c, [d, "Dell"], [f, v]],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [c, [d, "Verizon"], [f, v]],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [[d, "Barnes & Noble"], c, [f, v]],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [c, [d, "NuVision"], [f, v]],
              [/android.+;\s(k88)\sbuild/i],
              [c, [d, "ZTE"], [f, v]],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [c, [d, "Swiss"], [f, h]],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [c, [d, "Swiss"], [f, v]],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [c, [d, "Zeki"], [f, v]],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
              ],
              [[d, "Dragon Touch"], c, [f, v]],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [c, [d, "Insignia"], [f, v]],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [c, [d, "NextBook"], [f, v]],
              [
                /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
              ],
              [[d, "Voice"], c, [f, h]],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [[d, "LvTel"], c, [f, h]],
              [/android.+;\s(PH-1)\s/i],
              [c, [d, "Essential"], [f, h]],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [c, [d, "Envizen"], [f, v]],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [d, c, [f, v]],
              [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
              [c, [d, "MachSpeed"], [f, v]],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [d, c, [f, v]],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [c, [d, "Rotor"], [f, v]],
              [/android.+(KS(.+))\s+build/i],
              [c, [d, "Amazon"], [f, v]],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [d, c, [f, v]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[f, y["lowerize"]], d, c],
              [/[\s\/\(](smart-?tv)[;\)]/i],
              [[f, g]],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [c, [d, "Generic"]],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [p, [l, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [l, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [l, p],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [p, l],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [l, p],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [
                l,
                [p, w["str"], m["os"]["windows"]["version"]],
              ],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [l, "Windows"],
                [p, w["str"], m["os"]["windows"]["version"]],
              ],
              [/\((bb)(10);/i],
              [[l, "BlackBerry"], p],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen|kaios)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
              ],
              [l, p],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [[l, "Symbian"], p],
              [/\((series40);/i],
              [l],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[l, "Firefox OS"], p],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
              ],
              [l, p],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[l, "Chromium OS"], p],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[l, "Solaris"], p],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [l, p],
              [/(haiku)\s(\w+)/i],
              [l, p],
              [
                /cfnetwork\/.+darwin/i,
                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
              ],
              [
                [p, /_/g, "."],
                [l, "iOS"],
              ],
              [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
              [
                [l, "Mac OS"],
                [p, /_/g, "."],
              ],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [l, p],
            ],
          },
          x = function t(e, r) {
            if (
              ("object" == typeof e && ((r = e), (e = void 0)),
              !(this instanceof t))
            )
              return new t(e, r)["getResult"]();
            var n =
                e ||
                (i && i["navigator"] && i["navigator"]["userAgent"]
                  ? i["navigator"]["userAgent"]
                  : ""),
              o = r ? y["extend"](b, r) : b;
            return (
              (this["getBrowser"] = function () {
                var t = {
                  name: void 0,
                  version: void 0,
                };
                return (
                  w["rgx"]["call"](t, n, o["browser"]),
                  (t["major"] = y["major"](t["version"])),
                  t
                );
              }),
              (this["getCPU"] = function () {
                var t = {
                  architecture: void 0,
                };
                return w["rgx"]["call"](t, n, o["cpu"]), t;
              }),
              (this["getDevice"] = function () {
                var t = {
                  vendor: void 0,
                  model: void 0,
                  type: void 0,
                };
                return w["rgx"]["call"](t, n, o["device"]), t;
              }),
              (this["getEngine"] = function () {
                var t = {
                  name: void 0,
                  version: void 0,
                };
                return w["rgx"]["call"](t, n, o["engine"]), t;
              }),
              (this["getOS"] = function () {
                var t = {
                  name: void 0,
                  version: void 0,
                };
                return w["rgx"]["call"](t, n, o["os"]), t;
              }),
              (this["getResult"] = function () {
                return {
                  ua: this["getUA"](),
                  browser: this["getBrowser"](),
                  engine: this["getEngine"](),
                  os: this["getOS"](),
                  device: this["getDevice"](),
                  cpu: this["getCPU"](),
                };
              }),
              (this["getUA"] = function () {
                return n;
              }),
              (this["setUA"] = function (t) {
                return (n = t), this;
              }),
              this
            );
          };
        (x["VERSION"] = "0.7.21"),
          (x["BROWSER"] = {
            NAME: l,
            MAJOR: "major",
            VERSION: p,
          }),
          (x["CPU"] = {
            ARCHITECTURE: "architecture",
          }),
          (x["DEVICE"] = {
            MODEL: c,
            VENDOR: d,
            TYPE: f,
            CONSOLE: "console",
            MOBILE: h,
            SMARTTV: g,
            TABLET: v,
            WEARABLE: "wearable",
            EMBEDDED: "embedded",
          }),
          (x["ENGINE"] = {
            NAME: l,
            VERSION: p,
          }),
          (x["OS"] = {
            NAME: l,
            VERSION: p,
          }),
          void 0 !== e
            ? (void 0 !== t && t["exports"] && (e = t["exports"] = x),
              (e["UAParser"] = x))
            : void 0 ===
                (n = function () {
                  return x;
                }["call"](e, r, e, t)) || (t["exports"] = n);
        var _ = i && (i["jQuery"] || i["Zepto"]);
        if (_ && !_["ua"]) {
          var S = new x();
          (_["ua"] = S["getResult"]()),
            (_["ua"]["get"] = function () {
              return S["getUA"]();
            }),
            (_["ua"]["set"] = function (t) {
              S["setUA"](t);
              var e = S["getResult"]();
              for (var r in e) _["ua"][r] = e[r];
            });
        }
      })("object" == typeof window ? window : void 0);
    },
    function (t, e, r) {
      t["exports"] = r(179);
    },
    function (t, e, r) {
      var n = r(180);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(181),
        i = String["prototype"];
      t["exports"] = function (t) {
        var e = t["trim"];
        return "string" == typeof t ||
          t === i ||
          (t instanceof String && e === i["trim"])
          ? n
          : e;
      };
    },
    function (t, e, r) {
      r(182);
      var n = r(17);
      t["exports"] = n("String")["trim"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(107)["trim"];
      n(
        {
          target: "String",
          proto: !0,
          forced: r(183)("trim"),
        },
        {
          trim: function () {
            return i(this);
          },
        }
      );
    },
    function (t, e, r) {
      var n = r(5),
        i = r(72);
      t["exports"] = function (t) {
        return n(function () {
          return (
            !!i[t]() ||
            "​᠎" != "​᠎"[t]() ||
            i[t]["name"] !== t
          );
        });
      };
    },
    function (t, e, r) {
      t["exports"] = r(185);
    },
    function (t, e, r) {
      var n = r(108);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(187);
      var n = r(17);
      t["exports"] = n("Array")["indexOf"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(61)["indexOf"],
        o = r(65),
        a = r(32),
        s = []["indexOf"],
        u = !!s && 1 / [1]["indexOf"](1, -0) < 0,
        c = o("indexOf"),
        l = a("indexOf", {
          ACCESSORS: !0,
          1: 0,
        });
      n(
        {
          target: "Array",
          proto: !0,
          forced: u || !c || !l,
        },
        {
          indexOf: function (t) {
            return u
              ? s["apply"](this, arguments) || 0
              : i(this, t, arguments["length"] > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (t, e, r) {
      var n = r(189);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(190),
        i = Array["prototype"];
      t["exports"] = function (t) {
        var e = t["concat"];
        return t === i || (t instanceof Array && e === i["concat"]) ? n : e;
      };
    },
    function (t, e, r) {
      r(191);
      var n = r(17);
      t["exports"] = n("Array")["concat"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(5),
        o = r(46),
        a = r(12),
        s = r(26),
        u = r(27),
        c = r(74),
        l = r(90),
        f = r(75),
        d = r(11),
        p = r(70),
        h = d("isConcatSpreadable"),
        v =
          p >= 51 ||
          !i(function () {
            var t = [];
            return (t[h] = !1), t["concat"]()[0] !== t;
          }),
        g = f("concat"),
        y = function (t) {
          if (!a(t)) return !1;
          var e = t[h];
          return void 0 !== e ? !!e : o(t);
        };
      n(
        {
          target: "Array",
          proto: !0,
          forced: !v || !g,
        },
        {
          concat: function (t) {
            var e,
              r,
              n,
              i,
              o,
              a = s(this),
              f = l(a, 0),
              d = 0;
            for (e = -1, n = arguments["length"]; e < n; e++)
              if (((o = -1 === e ? a : arguments[e]), y(o))) {
                if (d + (i = u(o["length"])) > 9007199254740991)
                  throw TypeError("Maximum allowed index exceeded");
                for (r = 0; r < i; r++, d++) r in o && c(f, d, o[r]);
              } else {
                if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                c(f, d++, o);
              }
            return (f["length"] = d), f;
          },
        }
      );
    },
    function (t) {
      t["exports"] = JSON["parse"]('{"name":"@vod/player-toolkit-loader","version":"0.0.136","description":"A library that loads PSF and optionally other player libraries like mxd-web-player (streamer) and ad libraries","main":"index.js","private":true,"devDependencies":{"@babel/core":"^7.4.5","@babel/plugin-transform-runtime":"^7.4.4","@babel/preset-env":"^7.4.5","@babel/register":"^7.4.4","@babel/runtime-corejs3":"^7.8.4","babel-loader":"^8.0.6","chai":"3.5.0","chai-as-promised":"^7.1.1","confusion":"^0.1.1","core-js":"^3.6.4","eslint":"^6.8.0","eslint-config-joyn":"^0.4.1","eslint-plugin-array-func":"^3.1.3","eslint-plugin-eslint-comments":"^3.1.2","eslint-plugin-import":"^2.20.0","eslint-plugin-mocha":"^6.2.2","eslint-plugin-no-secrets":"^0.6.5","eslint-plugin-node":"^11.0.0","eslint-plugin-optimize-regex":"^1.1.7","eslint-plugin-prettier":"^3.1.2","eslint-plugin-promise":"^4.2.1","eslint-plugin-unicorn":"^17.2.0","istanbul":"1.0.0-alpha.2","jsdom":"^9.12.0","jsdom-global":"2.1.0","mocha":"3.0.2","mocha-jsdom":"^1.1.0","nock":"9.3.2","prettier":"^2.0.2","sinon":"^7.2.7","sinon-chai":"^3.3.0","uglify-js":"^3.4.0","unminified-webpack-plugin":"^2.0.0","webpack":"^4.32.2","webpack-cli":"^3.3.2","xmlhttprequest":"^1.8.0"},"dependencies":{"jwt-decode":"^2.2.0","scriptjs":"2.5.9","ua-parser-js":"~0.7.21"},"scripts":{"test":"npm run lint && istanbul cover _mocha","lint":"eslint .","lint:fix":"eslint . --fix","build":"webpack -p","postbuild":"sh ./postbuild.sh","version":"npm run build && git add -A dist","postversion":"git push && git push --tags","release":"npm version patch --force"},"author":"Oscar Prabhakar <oscar.prabhakar@7-tv.de>","engines":{"node":"^12"}}');
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(7)),
        o = n(r(194)),
        a = n(r(306)),
        s = n(r(320)),
        u = (function () {
          function t() {}
          return (
            (t["create"] = function (t, e) {
              if (t["platform"])
                switch (t["platform"]["toLowerCase"]()) {
                  case "chromecast":
                  case "ott":
                    return new s["default"](t, e);
                  case "native":
                    return new a["default"](t, e);
                  case "web":
                    return new o["default"](t, e);
                  default:
                    i["default"]["log"](
                      "Wrongly configured platform " + t["platform"] + ", falling back to WebStrategy"
                    );
                }
              return new o["default"](t, e);
            }),
            t
          );
        })();
      e["default"] = u;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(76)),
        o = n(r(21)),
        a = n(r(37)),
        s = n(r(22)),
        u = n(r(38)),
        c = n(r(15)),
        l = n(r(7)),
        f = n(r(48)),
        d = n(r(257)),
        p = n(r(258)),
        h = n(r(121)),
        v = n(r(275)),
        g = (function (t) {
          function e(e, r) {
            var n;
            return (
              ((n = t["call"](this, e, r) || this)["agofLoader"] = new v[
                "default"
              ](n["cacheBuster"], n["config"])),
              (n["asfLoader"] = new h["default"](
                n["cacheBuster"],
                n["config"]
              )),
              (n["nielsenLoader"] = new p["default"](
                n["cacheBuster"],
                n["config"],
                r
              )),
              (n["_noShowHandler"] = new d["default"](
                (0, u["default"])(
                  {
                    logging: e["settings"] && e["settings"]["logging"],
                  },
                  e["AdTracker"]
                )
              )),
              (l["default"]["logging"] =
                e["settings"] && e["settings"]["logging"]),
              n
            );
          }
          (0, c["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["_downloadAllLibs"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t() {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              l["default"]["log"]("[WebStrategy]: Downloading all libs"),
                              (t["next"] = 3),
                              a["default"]["all"]([
                                this["asfLoader"]["download"](),
                                this["psfLoader"]["download"](),
                                this["playerLoaderFactory"]["download"](),
                                this["adTrackerLoader"]["download"](),
                                this["agofLoader"]["download"](),
                                this["nielsenLoader"]["download"](),
                                this["playbackMonitoringLoader"]["download"](),
                                this["playerHeartbeatProducerLoader"]["download"](),
                              ])
                            );
                          case 3:
                            l["default"]["log"]("[WebStrategy]: All libs downloaded");
                          case 4:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_getAdSource"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t(e) {
                  var r;
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            if (
                              (this["_initAsf"](),
                              l["default"]["log"]("[WebStrategy]: Executing Ad Source Fetcher..."),
                              (e["clientData"]["os"] = "web"),
                              (e["clientData"]["deviceType"] = l["default"][
                                "getDeviceType"
                              ]()),
                              "live" !== e["contentType"])
                            ) {
                              t["next"] = 10;
                              break;
                            }
                            return (
                              (t["next"] = 7),
                              this["asfLoader"]["Instance"]["getVast"](
                                e["clientData"]
                              )
                            );
                          case 7:
                            (r = t["sent"]), (t["next"] = 13);
                            break;
                          case 10:
                            return (
                              (t["next"] = 12),
                              this["asfLoader"]["Instance"]["getVmap"](
                                e["clientData"]
                              )
                            );
                          case 12:
                            r = t["sent"];
                          case 13:
                            return t["abrupt"]("return", r);
                          case 14:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_start"] = (function () {
              var e = (0, s["default"])(
                o["default"]["mark"](function e(r) {
                  var n;
                  return o["default"]["wrap"](
                    function (e) {
                      for (;;)
                        switch ((e["prev"] = e["next"])) {
                          case 0:
                            return (
                              (e["next"] = 2),
                              t["prototype"]["_start"]["call"](this, r)
                            );
                          case 2:
                            if (!e["sent"]) {
                              e["next"] = 8;
                              break;
                            }
                            l["default"]["log"]("[WebStrategy]: Executing AGOF..."),
                              this["agofLoader"]["track"](r),
                              this["_initNielsen"](),
                              l["default"]["log"]("[WebStrategy]: Executing Nielsen..."),
                              this["nielsenLoader"]["track"](
                                r,
                                (0, i["default"])((n = this["getCurrentTimeWithoutAds"]))[
                                  "call"
                                ](n, this)
                              );
                          case 8:
                          case "end":
                            return e["stop"]();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e["apply"](this, arguments);
              };
            })()),
            (r["_initAsf"] = function () {
              l["default"]["log"]("[WebStrategy]: Initialising ASF..."),
                this["asfLoader"]["createInstance"]();
            }),
            (r["_initNielsen"] = function () {
              l["default"]["log"]("[WebStrategy]: Initialising Nielsen..."),
                this["nielsenLoader"]["createInstance"]();
            }),
            (r["_needsNoShowCheck"] = function () {
              return !0;
            }),
            (r["_augmentClientData"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t(e) {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return t["abrupt"](
                              "return",
                              window["AdTracker"]["augmentClientData"](
                                e,
                                this["config"],
                                {
                                  augmentNuggVars: !0,
                                }
                              )
                            );
                          case 1:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_isNoShowScenario"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t(e) {
                  var r;
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            if (!this["_isAdSupportedContent"](e)) {
                              t["next"] = 17;
                              break;
                            }
                            return (
                              l["default"]["log"]("[WebStrategy]: Needs No Show check"),
                              (t["prev"] = 2),
                              (t["next"] = 5),
                              this["_checkAdblockerAndFetchAdSource"](e)
                            );
                          case 5:
                            if (!(r = t["sent"])) {
                              t["next"] = 9;
                              break;
                            }
                            return (
                              new f["default"](
                                r,
                                "WEB_STRATEGY",
                                this["eventEmitter"]
                              ),
                              t["abrupt"]("return", !0)
                            );
                          case 9:
                            l["default"]["log"]("[BrowserStrategy]: No Show check OK"),
                              (t["next"] = 15);
                            break;
                          case 12:
                            (t["prev"] = 12),
                              (t["t0"] = t["catch"](2)),
                              l["default"]["log"](
                                "[BrowserStrategy]: Unknown error during Adblock check. Will try to play content anyway. Error: " + t["t0"]
                              );
                          case 15:
                            t["next"] = 18;
                            break;
                          case 17:
                            l["default"]["log"]("[BrowserStrategy]: Premium content");
                          case 18:
                            return t["abrupt"]("return", !1);
                          case 19:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this,
                    [[2, 12]]
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_checkAdblockerAndFetchAdSource"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t(e) {
                  var r, n;
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              (r = {
                                adTrackerLoader: this["adTrackerLoader"],
                                asfLoader: this["asfLoader"],
                              }),
                              l["default"]["log"]("[WebStrategy]: Checking No-Show ..."),
                              (t["next"] = 4),
                              this["_noShowHandler"]["check"](r)
                            );
                          case 4:
                            if (
                              ((n = t["sent"]),
                              l["default"]["log"]("[WebStrategy]: No-Show check response " + n),
                              !n)
                            ) {
                              t["next"] = 8;
                              break;
                            }
                            return t["abrupt"]("return", n);
                          case 8:
                            return (
                              l["default"]["log"]("[WebStrategy]: Fetching Ad Source"),
                              (t["next"] = 11),
                              this["_getAdSource"](e)
                            );
                          case 11:
                            return (
                              (e["adSource"] = t["sent"]),
                              t["abrupt"]("return", void 0)
                            );
                          case 13:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["stop"] = function () {
              t["prototype"]["stop"]["call"](this),
                this["nielsenLoader"]["stopTracking"]();
            }),
            (r["destroy"] = function () {
              t["prototype"]["destroy"]["call"](this),
                (this["asfLoader"] = null),
                (this["agofLoader"] = null),
                (this["nielsenLoader"] = null);
            }),
            e
          );
        })(n(r(122))["default"]);
      e["default"] = g;
    },
    function (t, e, r) {
      var n = r(109);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(197);
      var n = r(17);
      t["exports"] = n("Function")["bind"];
    },
    function (t, e, r) {
      r(0)(
        {
          target: "Function",
          proto: !0,
        },
        {
          bind: r(110),
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(91);
      t["exports"] = n;
    },
    function (t, e, r) {
      t["exports"] = r(200);
    },
    function (t, e, r) {
      var n = r(201);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(202);
      var n = r(8);
      t["exports"] = n["Object"]["assign"];
    },
    function (t, e, r) {
      var n = r(0),
        i = r(203);
      n(
        {
          target: "Object",
          stat: !0,
          forced: Object["assign"] !== i,
        },
        {
          assign: i,
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(13),
        i = r(5),
        o = r(41),
        a = r(204),
        s = r(52),
        u = r(26),
        c = r(53),
        l = Object["assign"],
        f = Object["defineProperty"];
      t["exports"] =
        !l ||
        i(function () {
          if (
            n &&
            1 !==
              l(
                {
                  b: 1,
                },
                l(
                  f({}, "a", {
                    enumerable: !0,
                    get: function () {
                      f(this, "b", {
                        value: 3,
                        enumerable: !1,
                      });
                    },
                  }),
                  {
                    b: 2,
                  }
                )
              )["b"]
          )
            return !0;
          var t = {},
            e = {},
            r = Symbol();
          return (
            (t[r] = 7),
            "abcdefghijklmnopqrst"["split"]("")["forEach"](function (t) {
              e[t] = t;
            }),
            7 != l({}, t)[r] ||
              "abcdefghijklmnopqrst" != o(l({}, e))["join"]("")
          );
        })
          ? function (t, e) {
              for (
                var r = u(t),
                  i = arguments["length"],
                  l = 1,
                  f = a["f"],
                  d = s["f"];
                i > l;

              )
                for (
                  var p,
                    h = c(arguments[l++]),
                    v = f ? o(h)["concat"](f(h)) : o(h),
                    g = v["length"],
                    y = 0;
                  g > y;

                )
                  (p = v[y++]), (n && !d["call"](h, p)) || (r[p] = h[p]);
              return r;
            }
          : l;
    },
    function (t, e) {
      e["f"] = Object["getOwnPropertySymbols"];
    },
    function (t, e, r) {
      var n = r(206);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(207);
      var n = r(8)["Object"];
      t["exports"] = function (t, e) {
        return n["create"](t, e);
      };
    },
    function (t, e, r) {
      r(0)(
        {
          target: "Object",
          stat: !0,
          sham: !r(13),
        },
        {
          create: r(34),
        }
      );
    },
    function (t, e) {
      t["exports"] = function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      };
    },
    function (t, e, r) {
      var n = r(111),
        i = r(210),
        o = r(240),
        a = r(116),
        s = r(248),
        u = r(250);
      function c(e) {
        var r = "function" == typeof i ? new i() : void 0;
        return (
          (t["exports"] = c = function (t) {
            if (null === t || !s(t)) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== r) {
              if (r["has"](t)) return r["get"](t);
              r["set"](t, e);
            }
            function e() {
              return u(t, arguments, o(this)["constructor"]);
            }
            return (
              (e["prototype"] = n(t["prototype"], {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              a(e, t)
            );
          }),
          c(e)
        );
      }
      t["exports"] = c;
    },
    function (t, e, r) {
      t["exports"] = r(211);
    },
    function (t, e, r) {
      "use strict";
      var n = r(112);
      r(216),
        r(218),
        r(220),
        r(222),
        r(224),
        r(225),
        r(226),
        r(227),
        r(228),
        r(230),
        r(231),
        r(232),
        r(233),
        r(234),
        r(235),
        r(236),
        r(237),
        r(238),
        r(239),
        (t["exports"] = n);
    },
    function (t, e, r) {
      "use strict";
      var n = r(213),
        i = r(215);
      t["exports"] = n(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments["length"] ? arguments[0] : void 0);
          };
        },
        i
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(9),
        o = r(113),
        a = r(5),
        s = r(19),
        u = r(6),
        c = r(67),
        l = r(12),
        f = r(42),
        d = r(20)["f"],
        p = r(45)["forEach"],
        h = r(13),
        v = r(31),
        g = v["set"],
        y = v["getterFor"];
      t["exports"] = function (t, e, r) {
        var v,
          w = -1 !== t["indexOf"]("Map"),
          m = -1 !== t["indexOf"]("Weak"),
          b = w ? "set" : "add",
          x = i[t],
          _ = x && x["prototype"],
          S = {};
        if (
          h &&
          "function" == typeof x &&
          (m ||
            (_["forEach"] &&
              !a(function () {
                new x()["entries"]()["next"]();
              })))
        ) {
          v = e(function (e, r) {
            g(c(e, v, t), {
              type: t,
              collection: new x(),
            }),
              null != r && u(r, e[b], e, w);
          });
          var k = y(t);
          p(
            [
              "add",
              "clear",
              "delete",
              "forEach",
              "get",
              "has",
              "set",
              "keys",
              "values",
              "entries",
            ],
            function (t) {
              var e = "add" == t || "set" == t;
              t in _ &&
                (!m || "clear" != t) &&
                s(v["prototype"], t, function (r, n) {
                  var i = k(this)["collection"];
                  if (!e && m && !l(r)) return "get" == t && void 0;
                  var o = i[t](0 === r ? 0 : r, n);
                  return e ? this : o;
                });
            }
          ),
            m ||
              d(v["prototype"], "size", {
                configurable: !0,
                get: function () {
                  return k(this)["collection"]["size"];
                },
              });
        } else (v = r["getConstructor"](e, t, w, b)), (o["REQUIRED"] = !0);
        return (
          f(v, t, !1, !0),
          (S[t] = v),
          n(
            {
              global: !0,
              forced: !0,
            },
            S
          ),
          m || r["setStrong"](v, t, w),
          v
        );
      };
    },
    function (t, e, r) {
      var n = r(5);
      t["exports"] = !n(function () {
        return Object["isExtensible"](Object["preventExtensions"]({}));
      });
    },
    function (t, e, r) {
      "use strict";
      var n = r(20)["f"],
        i = r(34),
        o = r(94),
        a = r(14),
        s = r(67),
        u = r(6),
        c = r(60),
        l = r(95),
        f = r(13),
        d = r(113)["fastKey"],
        p = r(31),
        h = p["set"],
        v = p["getterFor"];
      t["exports"] = {
        getConstructor: function (t, e, r, c) {
          var l = t(function (t, n) {
              s(t, l, e),
                h(t, {
                  type: e,
                  index: i(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                f || (t["size"] = 0),
                null != n && u(n, t[c], t, r);
            }),
            p = v(e),
            g = function (t, e, r) {
              var n,
                i,
                o = p(t),
                a = y(t, e);
              return (
                a
                  ? (a["value"] = r)
                  : ((o["last"] = a = {
                      index: (i = d(e, !0)),
                      key: e,
                      value: r,
                      previous: (n = o["last"]),
                      next: void 0,
                      removed: !1,
                    }),
                    o["first"] || (o["first"] = a),
                    n && (n["next"] = a),
                    f ? o["size"]++ : t["size"]++,
                    "F" !== i && (o["index"][i] = a)),
                t
              );
            },
            y = function (t, e) {
              var r,
                n = p(t),
                i = d(e);
              if ("F" !== i) return n["index"][i];
              for (r = n["first"]; r; r = r["next"])
                if (r["key"] == e) return r;
            };
          return (
            o(l["prototype"], {
              clear: function () {
                for (
                  var t = p(this), e = t["index"], r = t["first"];
                  r;

                )
                  (r["removed"] = !0),
                    r["previous"] &&
                      (r["previous"] = r["previous"]["next"] = void 0),
                    delete e[r["index"]],
                    (r = r["next"]);
                (t["first"] = t["last"] = void 0),
                  f ? (t["size"] = 0) : (this["size"] = 0);
              },
              delete: function (t) {
                var e = p(this),
                  r = y(this, t);
                if (r) {
                  var n = r["next"],
                    i = r["previous"];
                  delete e["index"][r["index"]],
                    (r["removed"] = !0),
                    i && (i["next"] = n),
                    n && (n["previous"] = i),
                    e["first"] == r && (e["first"] = n),
                    e["last"] == r && (e["last"] = i),
                    f ? e["size"]-- : this["size"]--;
                }
                return !!r;
              },
              forEach: function (t) {
                for (
                  var e,
                    r = p(this),
                    n = a(
                      t,
                      arguments["length"] > 1 ? arguments[1] : void 0,
                      3
                    );
                  (e = e ? e["next"] : r["first"]);

                )
                  for (
                    n(e["value"], e["key"], this);
                    e && e["removed"];

                  )
                    e = e["previous"];
              },
              has: function (t) {
                return !!y(this, t);
              },
            }),
            o(
              l["prototype"],
              r
                ? {
                    get: function (t) {
                      var e = y(this, t);
                      return e && e["value"];
                    },
                    set: function (t, e) {
                      return g(this, 0 === t ? 0 : t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return g(this, (t = 0 === t ? 0 : t), t);
                    },
                  }
            ),
            f &&
              n(l["prototype"], "size", {
                get: function () {
                  return p(this)["size"];
                },
              }),
            l
          );
        },
        setStrong: function (t, e, r) {
          var n = e + " Iterator",
            i = v(e),
            o = v(n);
          c(
            t,
            e,
            function (t, e) {
              h(this, {
                type: n,
                target: t,
                state: i(t),
                kind: e,
                last: void 0,
              });
            },
            function () {
              for (
                var t = o(this), e = t["kind"], r = t["last"];
                r && r["removed"];

              )
                r = r["previous"];
              return t["target"] &&
                (t["last"] = r = r
                  ? r["next"]
                  : t["state"]["first"])
                ? "keys" == e
                  ? {
                      value: r["key"],
                      done: !1,
                    }
                  : "values" == e
                  ? {
                      value: r["value"],
                      done: !1,
                    }
                  : {
                      value: [r["key"], r["value"]],
                      done: !1,
                    }
                : ((t["target"] = void 0),
                  {
                    value: void 0,
                    done: !0,
                  });
            },
            r ? "entries" : "values",
            !r,
            !0
          ),
            l(e);
        },
      };
    },
    function (t, e, r) {
      r(0)(
        {
          target: "Map",
          stat: !0,
        },
        {
          from: r(217),
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(10),
        i = r(14),
        o = r(6);
      t["exports"] = function (t) {
        var e,
          r,
          a,
          s,
          u = arguments["length"],
          c = u > 1 ? arguments[1] : void 0;
        return (
          n(this),
          (e = void 0 !== c) && n(c),
          null == t
            ? new this()
            : ((r = []),
              e
                ? ((a = 0),
                  (s = i(c, u > 2 ? arguments[2] : void 0, 2)),
                  o(t, function (t) {
                    r["push"](s(t, a++));
                  }))
                : o(t, r["push"], r),
              new this(r))
        );
      };
    },
    function (t, e, r) {
      r(0)(
        {
          target: "Map",
          stat: !0,
        },
        {
          of: r(219),
        }
      );
    },
    function (t, e, r) {
      "use strict";
      t["exports"] = function () {
        for (var t = arguments["length"], e = new Array(t); t--; )
          e[t] = arguments[t];
        return new this(e);
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(221);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          deleteAll: function () {
            return o["apply"](this, arguments);
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(3),
        i = r(10);
      t["exports"] = function () {
        for (
          var t,
            e = n(this),
            r = i(e["delete"]),
            o = !0,
            a = 0,
            s = arguments["length"];
          a < s;
          a++
        )
          (t = r["call"](e, arguments[a])), (o = o && t);
        return !!o;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(14),
        s = r(23),
        u = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          every: function (t) {
            var e = o(this),
              r = s(e),
              n = a(t, arguments["length"] > 1 ? arguments[1] : void 0, 3);
            return !u(
              r,
              function (t, r) {
                if (!n(r, t, e)) return u["stop"]();
              },
              void 0,
              !0,
              !0
            )["stopped"];
          },
        }
      );
    },
    function (t, e, r) {
      var n = r(3),
        i = r(68);
      t["exports"] = function (t) {
        var e = i(t);
        if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
        return n(e["call"](t));
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(16),
        a = r(3),
        s = r(10),
        u = r(14),
        c = r(35),
        l = r(23),
        f = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          filter: function (t) {
            var e = a(this),
              r = l(e),
              n = u(t, arguments["length"] > 1 ? arguments[1] : void 0, 3),
              i = new (c(e, o("Map")))(),
              d = s(i["set"]);
            return (
              f(
                r,
                function (t, r) {
                  n(r, t, e) && d["call"](i, t, r);
                },
                void 0,
                !0,
                !0
              ),
              i
            );
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(14),
        s = r(23),
        u = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          find: function (t) {
            var e = o(this),
              r = s(e),
              n = a(t, arguments["length"] > 1 ? arguments[1] : void 0, 3);
            return u(
              r,
              function (t, r) {
                if (n(r, t, e)) return u["stop"](r);
              },
              void 0,
              !0,
              !0
            )["result"];
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(14),
        s = r(23),
        u = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          findKey: function (t) {
            var e = o(this),
              r = s(e),
              n = a(t, arguments["length"] > 1 ? arguments[1] : void 0, 3);
            return u(
              r,
              function (t, r) {
                if (n(r, t, e)) return u["stop"](t);
              },
              void 0,
              !0,
              !0
            )["result"];
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(6),
        o = r(10);
      n(
        {
          target: "Map",
          stat: !0,
        },
        {
          groupBy: function (t, e) {
            var r = new this();
            o(e);
            var n = o(r["has"]),
              a = o(r["get"]),
              s = o(r["set"]);
            return (
              i(t, function (t) {
                var i = e(t);
                n["call"](r, i)
                  ? a["call"](r, i)["push"](t)
                  : s["call"](r, i, [t]);
              }),
              r
            );
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(23),
        s = r(229),
        u = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          includes: function (t) {
            return u(
              a(o(this)),
              function (e, r) {
                if (s(r, t)) return u["stop"]();
              },
              void 0,
              !0,
              !0
            )["stopped"];
          },
        }
      );
    },
    function (t, e) {
      t["exports"] = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(6),
        o = r(10);
      n(
        {
          target: "Map",
          stat: !0,
        },
        {
          keyBy: function (t, e) {
            var r = new this();
            o(e);
            var n = o(r["set"]);
            return (
              i(t, function (t) {
                n["call"](r, e(t), t);
              }),
              r
            );
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(23),
        s = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          keyOf: function (t) {
            return s(
              a(o(this)),
              function (e, r) {
                if (r === t) return s["stop"](e);
              },
              void 0,
              !0,
              !0
            )["result"];
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(16),
        a = r(3),
        s = r(10),
        u = r(14),
        c = r(35),
        l = r(23),
        f = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          mapKeys: function (t) {
            var e = a(this),
              r = l(e),
              n = u(t, arguments["length"] > 1 ? arguments[1] : void 0, 3),
              i = new (c(e, o("Map")))(),
              d = s(i["set"]);
            return (
              f(
                r,
                function (t, r) {
                  d["call"](i, n(r, t, e), r);
                },
                void 0,
                !0,
                !0
              ),
              i
            );
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(16),
        a = r(3),
        s = r(10),
        u = r(14),
        c = r(35),
        l = r(23),
        f = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          mapValues: function (t) {
            var e = a(this),
              r = l(e),
              n = u(t, arguments["length"] > 1 ? arguments[1] : void 0, 3),
              i = new (c(e, o("Map")))(),
              d = s(i["set"]);
            return (
              f(
                r,
                function (t, r) {
                  d["call"](i, t, n(r, t, e));
                },
                void 0,
                !0,
                !0
              ),
              i
            );
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(10),
        s = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          merge: function (t) {
            for (
              var e = o(this), r = a(e["set"]), n = 0;
              n < arguments["length"];

            )
              s(arguments[n++], r, e, !0);
            return e;
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(10),
        s = r(23),
        u = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          reduce: function (t) {
            var e = o(this),
              r = s(e),
              n = arguments["length"] < 2,
              i = n ? void 0 : arguments[1];
            if (
              (a(t),
              u(
                r,
                function (r, o) {
                  n ? ((n = !1), (i = o)) : (i = t(i, o, r, e));
                },
                void 0,
                !0,
                !0
              ),
              n)
            )
              throw TypeError("Reduce of empty map with no initial value");
            return i;
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(14),
        s = r(23),
        u = r(6);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          some: function (t) {
            var e = o(this),
              r = s(e),
              n = a(t, arguments["length"] > 1 ? arguments[1] : void 0, 3);
            return u(
              r,
              function (t, r) {
                if (n(r, t, e)) return u["stop"]();
              },
              void 0,
              !0,
              !0
            )["stopped"];
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(4),
        o = r(3),
        a = r(10);
      n(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: i,
        },
        {
          update: function (t, e) {
            var r = o(this),
              n = arguments["length"];
            a(e);
            var i = r["has"](t);
            if (!i && n < 3) throw TypeError("Updating absent value");
            var s = i
              ? r["get"](t)
              : a(n > 2 ? arguments[2] : void 0)(t, r);
            return r["set"](t, e(s, t, r)), r;
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      r(0)(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: r(4),
        },
        {
          upsert: r(114),
        }
      );
    },
    function (t, e, r) {
      "use strict";
      r(0)(
        {
          target: "Map",
          proto: !0,
          real: !0,
          forced: r(4),
        },
        {
          updateOrInsert: r(114),
        }
      );
    },
    function (t, e, r) {
      var n = r(241),
        i = r(115);
      function o(e) {
        return (
          (t["exports"] = o = i
            ? n
            : function (t) {
                return t["__proto__"] || n(t);
              }),
          o(e)
        );
      }
      t["exports"] = o;
    },
    function (t, e, r) {
      t["exports"] = r(242);
    },
    function (t, e, r) {
      var n = r(243);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(244);
      var n = r(8);
      t["exports"] = n["Object"]["getPrototypeOf"];
    },
    function (t, e, r) {
      var n = r(0),
        i = r(5),
        o = r(26),
        a = r(40),
        s = r(85);
      n(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            a(1);
          }),
          sham: !s,
        },
        {
          getPrototypeOf: function (t) {
            return a(o(t));
          },
        }
      );
    },
    function (t, e, r) {
      var n = r(246);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(247);
      var n = r(8);
      t["exports"] = n["Object"]["setPrototypeOf"];
    },
    function (t, e, r) {
      r(0)(
        {
          target: "Object",
          stat: !0,
        },
        {
          setPrototypeOf: r(64),
        }
      );
    },
    function (t, e, r) {
      var n = r(117);
      t["exports"] = function (t) {
        var e;
        return (
          -1 !==
          n((e = Function["toString"]["call"](t)))["call"](
            e,
            "[native code]"
          )
        );
      };
    },
    function (t, e, r) {
      var n = r(108);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(251),
        i = r(253),
        o = r(116);
      function a() {
        if ("undefined" == typeof Reflect || !i) return !1;
        if (i["sham"]) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date["prototype"]["toString"]["call"](
              i(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function s(e, r, u) {
        return (
          a()
            ? (t["exports"] = s = i)
            : (t["exports"] = s = function (t, e, r) {
                var i = [null];
                i["push"]["apply"](i, e);
                var a = new (n(Function)["apply"](t, i))();
                return r && o(a, r["prototype"]), a;
              }),
          s["apply"](null, arguments)
        );
      }
      t["exports"] = s;
    },
    function (t, e, r) {
      t["exports"] = r(252);
    },
    function (t, e, r) {
      var n = r(109);
      t["exports"] = n;
    },
    function (t, e, r) {
      t["exports"] = r(254);
    },
    function (t, e, r) {
      var n = r(255);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(256);
      var n = r(8);
      t["exports"] = n["Reflect"]["construct"];
    },
    function (t, e, r) {
      var n = r(0),
        i = r(16),
        o = r(10),
        a = r(3),
        s = r(12),
        u = r(34),
        c = r(110),
        l = r(5),
        f = i("Reflect", "construct"),
        d = l(function () {
          function t() {}
          return !(f(function () {}, [], t) instanceof t);
        }),
        p = !l(function () {
          f(function () {});
        }),
        h = d || p;
      n(
        {
          target: "Reflect",
          stat: !0,
          forced: h,
          sham: h,
        },
        {
          construct: function (t, e) {
            o(t), a(e);
            var r = arguments["length"] < 3 ? t : o(arguments[2]);
            if (p && !d) return f(t, e, r);
            if (t == r) {
              switch (e["length"]) {
                case 0:
                  return new t();
                case 1:
                  return new t(e[0]);
                case 2:
                  return new t(e[0], e[1]);
                case 3:
                  return new t(e[0], e[1], e[2]);
                case 4:
                  return new t(e[0], e[1], e[2], e[3]);
              }
              var n = [null];
              return (
                n["push"]["apply"](n, e), new (c["apply"](t, n))()
              );
            }
            var i = r["prototype"],
              l = u(s(i) ? i : Object["prototype"]),
              h = Function["apply"]["call"](t, l, e);
            return s(h) ? h : l;
          },
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(21)),
        o = n(r(22)),
        a = n(r(7)),
        s = (function () {
          function t(t) {
            (this["_config"] = t),
              (a["default"]["logging"] =
                t["settings"] && t["settings"]["logging"]);
          }
          var e = t["prototype"];
          return (
            (e["check"] = (function () {
              var t = (0, o["default"])(
                i["default"]["mark"](function t(e) {
                  var r;
                  return i["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            if (
                              (this["_parseAdScriptLoaders"](e),
                              (r = this["_checkAdScriptsLoaded"]()))
                            ) {
                              t["next"] = 6;
                              break;
                            }
                            return (t["next"] = 5), this["_checkTrackingUrls"]();
                          case 5:
                            r = t["sent"];
                          case 6:
                            return t["abrupt"]("return", r);
                          case 7:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (e["_parseAdScriptLoaders"] = function (t) {
              a["default"]["log"]("[NoShowHandler]: Parsing Script loaders");
              var e = t["adTrackerLoader"],
                r = void 0 === e ? {} : e,
                n = t["asfLoader"],
                i = void 0 === n ? {} : n;
              (this["_adTrackerLoader"] = r), (this["_asfLoader"] = i);
            }),
            (e["_checkAdScriptsLoaded"] = function () {
              return this["_adTrackerLoader"]["loadError"]
                ? (a["default"]["log"]("[NoShowHandler]: AdTracker failed to load"),
                  this["_adTrackerLoader"]["loadError"])
                : this["_asfLoader"]["loadError"]
                ? (a["default"]["log"]("[NoShowHandler]: AdSourceFetcher failed to load"),
                  this["_asfLoader"]["loadError"])
                : void 0;
            }),
            (e["_checkTrackingUrls"] = (function () {
              var t = (0, o["default"])(
                i["default"]["mark"](function t() {
                  var e;
                  return i["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              this["_adTrackerLoader"]["createInstance"](
                                "",
                                this["_config"]
                              ),
                              (t["next"] = 3),
                              this["_adTrackerLoader"]["Instance"]["areTrackingUrlsReachable"]()
                            );
                          case 3:
                            if (t["sent"]) {
                              t["next"] = 9;
                              break;
                            }
                            return (
                              a["default"]["log"]("[NoShowHandler]: Ad tracking url(s) NOT reachable"),
                              ((e = new Error("Tracking URLs not reachable"))["code"] =
                                "UNABLE_TO_LOAD_SCRIPT"),
                              t["abrupt"]("return", e)
                            );
                          case 9:
                            return (
                              a["default"]["log"]("[NoShowHandler]: Ad tracking url(s) reachable"),
                              t["abrupt"]("return", void 0)
                            );
                          case 11:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            t
          );
        })();
      e["default"] = s;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(259)),
        o = n(r(73)),
        a = n(r(264)),
        s = n(r(56)),
        u = n(r(38)),
        c = n(r(15)),
        l = n(r(7)),
        f = n(r(24)),
        d = n(r(268)),
        p = (function (t) {
          function e(e, r, n) {
            var i,
              o = (0, u["default"])({}, r, {
                nielsenAppId: "PE11049E8-C897-4B29-877D-0650D19B6972",
              });
            return (
              (i = t["call"](this, e, o, "NOLBUNDLE") || this),
              (l["default"]["logging"] =
                o["settings"] && o["settings"]["logging"]),
              (i["eventEmitter"] = n),
              (i["islive"] = !1),
              (i["useCacheBuster"] = !1),
              (i["beFailSafe"] = !0),
              (window["NOLBUNDLE"] && window["NOLBUNDLE"]["nlsnInstance"]) ||
                (window["NOLBUNDLE"] = {
                  nlsnInstance: {},
                }),
              i
            );
          }
          (0, c["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["getUrl"] = function () {
              return window["NOLBUNDLE"] &&
                window["NOLBUNDLE"]["nlsnInstance"] &&
                window["NOLBUNDLE"]["nlsnInstance"]["ggPM"]
                ? ""
                : "https://cdn-gl.imrworldwide.com/conf/" + this["config"]["nielsenAppId"] + ".js#name=nlsnInstance&ns=NOLBUNDLE";
            }),
            (r["createInstance"] = function () {
              return (
                (this["instance"] = window["NOLBUNDLE"]["nlsnInstance"]),
                this["instance"] || l["default"]["log"]("[NielsenLoader]: Instance creation failed"),
                this["instance"]
              );
            }),
            (r["track"] = function (t, e) {
              var r,
                n = this;
              if (!this["instance"]["ggPM"])
                return l["default"]["log"]("[NielsenLoader]: this.instance.ggPM not in window"), this;
              l["default"]["log"]("[NielsenLoader]: contentResource", t),
                (this["timeWithoutAds"] = e),
                (this["contentResource"] = t);
              var i = this["_mediator"]();
              return (
                (this["eventListeners"] = {}),
                (0, s["default"])(
                  (r = [
                    "adcomplete",
                    "adstart",
                    "buffering",
                    "close",
                    "ended",
                    "pause",
                    "play",
                    "timeupdate",
                  ])
                )["call"](r, function (t) {
                  (n["eventListeners"][t] = function (e) {
                    return i(t, e);
                  }),
                    n["eventEmitter"]["on"](t, n["eventListeners"][t]);
                }),
                this
              );
            }),
            (r["_mediator"] = function () {
              var t = this,
                e = new d["default"](
                  this["instance"]["ggPM"],
                  this["_getMeta"](),
                  this["islive"],
                  this["timeWithoutAds"],
                  this["contentResource"]["clientData"]["startTime"]
                );
              return (
                e["setLogger"](l["default"]["logging"]),
                function (r, n) {
                  l["default"]["log"]("[NielsenLoader]: event '" + r + "'");
                  var i = e["state"]["constructor"]["name"];
                  return (
                    "CLOSE" === e["state"][r](n) && t["stopTracking"](),
                    i !== e["state"]["constructor"]["name"] &&
                      l["default"]["log"](
                        "[NielsenLoader]: state change '" +
                          i +
                          "' => '" +
                          e["state"]["constructor"]["name"] +
                          "'"
                      ),
                    !0
                  );
                }
              );
            }),
            (r["stopTracking"] = function () {
              if (
                (l["default"]["log"]("[NielsenLoader]: stopTracking"),
                "object" == typeof this["eventListeners"])
              )
                for (
                  var t = 0, e = (0, a["default"])(this["eventListeners"]);
                  t < e["length"];
                  t++
                ) {
                  var r = e[t];
                  this["eventEmitter"]["off"](r, this["eventListeners"][r]);
                }
            }),
            (r["_getMeta"] = function () {
              var t = this["contentResource"];
              this["islive"] = t && "live" === t["contentType"];
              var e = this["_replaceSpecialChars"](t["externalAssetId"]),
                r = t["clientData"]["duration"] || 0,
                n = this["islive"] ? 86400 : r / 1e3,
                i = this["_getProgram"](t, this["islive"]);
              return {
                type: "content",
                assetid: t["id"],
                program: i,
                title: this["_replaceSpecialChars"](
                  this["_getTitle"](t, this["islive"], t["id"])
                ),
                length: n,
                nol_c0: "p0,0",
                nol_c2: "p2,N",
                nol_c7: "p7," + t["id"],
                nol_c8: "p8," + n,
                nol_c9:
                  "p9," +
                  this["_replaceSpecialChars"](this["_getTitle"](t, this["islive"])),
                nol_c10:
                  "p10," +
                  (t["clientData"]["brand"] || "joyn"),
                nol_c12: "p12,Content",
                nol_c15: "p15," + e,
                nol_c16: "p16," + t["clientData"]["agofCode"],
                nol_c18:
                  "p18," +
                  (this["islive"] ? "Y" : "N"),
              };
            }),
            (r["_replaceSpecialChars"] = function (t) {
              return (
                void 0 === t && (t = ""),
                t
                  ? t["replace"](/-/g, " ")["replace"](
                      /[^\w |]/g,
                      ""
                    )
                  : ""
              );
            }),
            (r["_getTitle"] = function (t, e, r) {
              if ((void 0 === r && (r = ""), e))
                return this["_getLiveName"](t);
              var n,
                i = this["_getTitleFromUrl"]();
              r && (i = (0, o["default"])((n = [r]))["call"](n, i));
              return i["join"]("|");
            }),
            (r["_getLiveName"] = function (t) {
              return ["livestream", t["clientData"]["brand"]][
                "join"
              ]("|");
            }),
            (r["_getProgram"] = function (t, e) {
              if (
                t["clientData"]["brand"] &&
                "joyn" === t["clientData"]["brand"]["toLowerCase"]()
              )
                return "joyn";
              var r;
              e ? (r = this["_getLiveName"](t)) : (r = this["_getTitleFromUrl"]()[0]);
              return this["_replaceSpecialChars"](r || "joyn");
            }),
            (r["_getTitleFromUrl"] = function () {
              var t;
              return (0, i["default"])(
                (t = window["location"]["pathname"]["split"](
                  "/"
                ))
              )["call"](t, 3, 5);
            }),
            e
          );
        })(f["default"]);
      e["default"] = p;
    },
    function (t, e, r) {
      t["exports"] = r(260);
    },
    function (t, e, r) {
      var n = r(261);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(262),
        i = Array["prototype"];
      t["exports"] = function (t) {
        var e = t["slice"];
        return t === i || (t instanceof Array && e === i["slice"]) ? n : e;
      };
    },
    function (t, e, r) {
      r(263);
      var n = r(17);
      t["exports"] = n("Array")["slice"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(12),
        o = r(46),
        a = r(87),
        s = r(27),
        u = r(28),
        c = r(74),
        l = r(11),
        f = r(75),
        d = r(32),
        p = f("slice"),
        h = d("slice", {
          ACCESSORS: !0,
          0: 0,
          1: 2,
        }),
        v = l("species"),
        g = []["slice"],
        y = Math["max"];
      n(
        {
          target: "Array",
          proto: !0,
          forced: !p || !h,
        },
        {
          slice: function (t, e) {
            var r,
              n,
              l,
              f = u(this),
              d = s(f["length"]),
              p = a(t, d),
              h = a(void 0 === e ? d : e, d);
            if (
              o(f) &&
              ("function" != typeof (r = f["constructor"]) ||
              (r !== Array && !o(r["prototype"]))
                ? i(r) && null === (r = r[v]) && (r = void 0)
                : (r = void 0),
              r === Array || void 0 === r)
            )
              return g["call"](f, p, h);
            for (
              n = new (void 0 === r ? Array : r)(y(h - p, 0)), l = 0;
              p < h;
              p++, l++
            )
              p in f && c(n, l, f[p]);
            return (n["length"] = l), n;
          },
        }
      );
    },
    function (t, e, r) {
      t["exports"] = r(265);
    },
    function (t, e, r) {
      var n = r(118);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(0),
        i = r(26),
        o = r(41);
      n(
        {
          target: "Object",
          stat: !0,
          forced: r(5)(function () {
            o(1);
          }),
        },
        {
          keys: function (t) {
            return o(i(t));
          },
        }
      );
    },
    function (t, e, r) {
      var n, i, o;
      (o = function () {
        var t,
          e,
          r = document,
          n = r["getElementsByTagName"]("head")[0],
          i = {},
          o = {},
          a = {},
          s = {};
        function u(t, e) {
          for (var r = 0, n = t["length"]; r < n; ++r)
            if (!e(t[r])) return !1;
          return 1;
        }
        function c(t, e) {
          u(t, function (t) {
            return e(t), 1;
          });
        }
        function l(e, r, n) {
          e = e["push"] ? e : [e];
          var d = r && r["call"],
            p = d ? r : n,
            h = d ? e["join"]("") : r,
            v = e["length"];
          function g(t) {
            return t["call"] ? t() : i[t];
          }
          function y() {
            if (!--v)
              for (var t in ((i[h] = 1), p && p(), a))
                u(t["split"]("|"), g) &&
                  !c(a[t], g) &&
                  (a[t] = []);
          }
          return (
            setTimeout(function () {
              c(e, function e(r, n) {
                return null === r
                  ? y()
                  : (n ||
                      /^https?:\/\//["test"](r) ||
                      !t ||
                      (r =
                        -1 === r["indexOf"](".js")
                          ? t + r + ".js"
                          : t + r),
                    s[r]
                      ? (h && (o[h] = 1),
                        2 == s[r]
                          ? y()
                          : setTimeout(function () {
                              e(r, !0);
                            }, 0))
                      : ((s[r] = 1), h && (o[h] = 1), void f(r, y)));
              });
            }, 0),
            l
          );
        }
        function f(t, i) {
          var o,
            a = r["createElement"]("script");
          (a["onload"] = a["onerror"] = a["onreadystatechange"] = function () {
            (a["readyState"] && !/^c|loade/["test"](a["readyState"])) ||
              o ||
              ((a["onload"] = a["onreadystatechange"] = null),
              (o = 1),
              (s[t] = 2),
              i());
          }),
            (a["async"] = 1),
            (a["src"] = e
              ? t +
                (-1 === t["indexOf"]("?")
                  ? "?"
                  : "&") +
                e
              : t),
            n["insertBefore"](a, n["lastChild"]);
        }
        return (
          (l["get"] = f),
          (l["order"] = function (t, e, r) {
            !(function n(i) {
              (i = t["shift"]()), t["length"] ? l(i, n) : l(i, e, r);
            })();
          }),
          (l["path"] = function (e) {
            t = e;
          }),
          (l["urlArgs"] = function (t) {
            e = t;
          }),
          (l["ready"] = function (t, e, r) {
            t = t["push"] ? t : [t];
            var n,
              o = [];
            return (
              !c(t, function (t) {
                i[t] || o["push"](t);
              }) &&
              u(t, function (t) {
                return i[t];
              })
                ? e()
                : ((n = t["join"]("|")),
                  (a[n] = a[n] || []),
                  a[n]["push"](e),
                  r && r(o)),
              l
            );
          }),
          (l["done"] = function (t) {
            l([null], t);
          }),
          l
        );
      }),
        t["exports"]
          ? (t["exports"] = o())
          : void 0 ===
              (i =
                "function" == typeof (n = o)
                  ? n["call"](e, r, e, t)
                  : n) || (t["exports"] = i);
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(106)),
        o = n(r(120)),
        a = n(r(76)),
        s = n(r(272)),
        u = n(r(15)),
        c = n(r(7)),
        l = (function () {
          function t(t) {
            (this["session"] = t), (this["delayTimoutCallback"] = null);
          }
          var e = t["prototype"];
          return (
            (e["adcomplete"] = function () {}),
            (e["adstart"] = function () {}),
            (e["buffering"] = function () {}),
            (e["close"] = function () {}),
            (e["ended"] = function () {}),
            (e["pause"] = function () {}),
            (e["play"] = function () {}),
            (e["timeupdate"] = function () {}),
            (e["_clean"] = function () {
              clearTimeout(this["delayTimoutCallback"]), (this["delayTimoutCallback"] = null);
            }),
            t
          );
        })(),
        f = (function (t) {
          function e() {
            return t["apply"](this, arguments) || this;
          }
          (0, u["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["adstart"] = function () {
              this["_clean"](),
                (this["session"]["state"] = this["session"][
                  "adState"
                ]);
            }),
            (r["buffering"] = function () {
              var t;
              this["delayTimoutCallback"] ||
                (this["delayTimoutCallback"] = (0, s["default"])(
                  (0, a["default"])((t = this["_switchBufferState"]))["call"](
                    t,
                    this
                  ),
                  300
                ));
            }),
            (r["_switchBufferState"] = function () {
              var t = this["session"]["state"]["constructor"][
                "name"
              ];
              (this["session"]["state"] = this["session"][
                "bufferingState"
              ]),
                c["default"]["log"](
                  "[NielsenLoader]: InitialisedState delayed state change '" +
                    t +
                    "' => '" +
                    this["session"]["state"]["constructor"]["name"] +
                    "'"
                ),
                this["_clean"]();
            }),
            e
          );
        })(l),
        d = (function (t) {
          function e() {
            return t["apply"](this, arguments) || this;
          }
          (0, u["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["adstart"] = function () {
              this["session"]["sendStop"](),
                (this["session"]["state"] = this["session"][
                  "adState"
                ]);
            }),
            (r["buffering"] = function () {
              this["session"]["sendStop"](),
                (this["session"]["state"] = this["session"][
                  "bufferingState"
                ]);
            }),
            (r["close"] = function () {
              return (
                this["session"]["islive"]
                  ? this["session"]["sendEnd"]()
                  : this["session"]["sendStop"](),
                "CLOSE"
              );
            }),
            (r["timeupdate"] = function (t) {
              var e = t["currentTime"];
              this["session"]["sendPlayhead"](e);
            }),
            (r["pause"] = function () {
              (this["session"]["state"] = this["session"][
                "pauseState"
              ]),
                this["session"]["state"]["pause"]();
            }),
            e
          );
        })(l),
        p = (function (t) {
          function e() {
            return t["apply"](this, arguments) || this;
          }
          (0, u["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["ended"] = function () {
              this["_clean"](), this["session"]["sendEnd"]();
            }),
            (r["play"] = function () {
              this["delayTimoutCallback"] || this["session"]["sendMetadata"](),
                this["_clean"](),
                (this["session"]["state"] = this["session"][
                  "playingState"
                ]);
            }),
            (r["pause"] = function () {
              var t;
              this["delayTimoutCallback"] ||
                (this["delayTimoutCallback"] = (0, s["default"])(
                  (0, a["default"])((t = this["_sendStop"]))["call"](
                    t,
                    this
                  ),
                  300
                ));
            }),
            (r["_sendStop"] = function () {
              c["default"]["log"]("[NielsenLoader]: PauseState delayed"),
                this["session"]["sendStop"](),
                this["_clean"]();
            }),
            e
          );
        })(l),
        h = (function (t) {
          function e() {
            return t["apply"](this, arguments) || this;
          }
          (0, u["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["adstart"] = function () {
              this["_clean"](),
                (this["session"]["state"] = this["session"][
                  "adState"
                ]);
            }),
            (r["timeupdate"] = function (t) {
              var e,
                r = t["currentTime"];
              this["session"]["isJump"](r) &&
                !this["delayTimoutCallback"] &&
                (this["delayTimoutCallback"] = (0, s["default"])(
                  (0, a["default"])((e = this["_switchPlayingState"]))["call"](
                    e,
                    this
                  ),
                  300
                ));
            }),
            (r["_switchPlayingState"] = function () {
              this["_clean"]();
              var t = this["session"]["state"]["constructor"][
                "name"
              ];
              (this["session"]["state"] = this["session"][
                "playingState"
              ]),
                c["default"]["log"](
                  "[NielsenLoader]: BufferingState delayed state change '" +
                    t +
                    "' => '" +
                    this["session"]["state"]["constructor"]["name"] +
                    "'"
                ),
                this["session"]["sendMetadata"]();
            }),
            e
          );
        })(l),
        v = (function (t) {
          function e() {
            return t["apply"](this, arguments) || this;
          }
          return (
            (0, u["default"])(e, t),
            (e["prototype"]["adcomplete"] = function () {
              (this["session"]["state"] = this["session"][
                "initialisedState"
              ]),
                this["session"]["state"]["buffering"]();
            }),
            e
          );
        })(l),
        g = (function () {
          function t(t, e, r, n, i) {
            void 0 === i && (i = 0),
              (this["initialisedState"] = new f(this)),
              (this["playingState"] = new d(this)),
              (this["bufferingState"] = new h(this)),
              (this["pauseState"] = new p(this)),
              (this["adState"] = new v(this)),
              (this["state"] = this["initialisedState"]),
              (this["sender"] = t),
              (this["metaData"] = e),
              (this["islive"] = r),
              (this["timeWithoutAds"] = n),
              (this["currentPosition"] = i);
          }
          var e = t["prototype"];
          return (
            (e["setLogger"] = function (t) {
              c["default"]["logging"] = t;
            }),
            (e["delta"] = function (t) {
              var e = this["_getRealtime"](t),
                r = Math["abs"](
                  this["currentPosition"] - Math["floor"](e)
                );
              return (
                0 === e && (r = 0),
                c["default"]["log"](
                  "[NielsenLoader]: delta between " +
                    this["currentPosition"] +
                    " and " +
                    e +
                    " is " +
                    r
                ),
                r
              );
            }),
            (e["isJump"] = function (t) {
              return this["delta"](t) >= 1;
            }),
            (e["send"] = function (t, e) {
              return (
                c["default"]["log"](
                  "[NielsenLoader]: sending '" + t + "' with " + e
                ),
                this["sender"](t, e)
              );
            }),
            (e["sendPlayhead"] = function (t) {
              var e = this["_getRealtime"](t),
                r = this["delta"](t);
              return (
                this["islive"] &&
                  e <= 15e8 &&
                  (this["timestamp"] ||
                    (this["timestamp"] = Math["floor"](
                      (0, o["default"])() / 1e3
                    )),
                  (e = this["timestamp"] + e),
                  c["default"]["log"]("[NielsenLoader]: current live time is " + e),
                  (r = this["delta"](e))),
                r >= 1 &&
                  ((this["currentPosition"] = e),
                  c["default"]["log"]("[NielsenLoader]: delta is " + r),
                  this["send"]("setPlayheadPosition", this["_seconds"](e))),
                this["state"]
              );
            }),
            (e["sendStop"] = function () {
              this["send"](
                "stop",
                this["_seconds"](this["currentPosition"])
              );
            }),
            (e["sendEnd"] = function () {
              this["send"](
                "end",
                this["_seconds"](this["currentPosition"])
              );
            }),
            (e["sendMetadata"] = function () {
              this["send"]("loadMetadata", this["metaData"]);
            }),
            (e["_seconds"] = function (t) {
              return 0 === t ? 0 : t - 1;
            }),
            (e["_getRealtime"] = function (t) {
              void 0 === t && (t = 0);
              var e = 0;
              try {
                (e = (0, i["default"])(this["timeWithoutAds"](), 10)),
                  c["default"]["log"]("[NielsenLoader]: time without ads is " + e);
              } catch (r) {
                e = t;
              }
              return this["islive"] && (e = (0, i["default"])(t, 10)), e;
            }),
            t
          );
        })();
      e["default"] = g;
    },
    function (t, e, r) {
      var n = r(270);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(271);
      var n = r(8);
      t["exports"] = n["Date"]["now"];
    },
    function (t, e, r) {
      r(0)(
        {
          target: "Date",
          stat: !0,
        },
        {
          now: function () {
            return new Date()["getTime"]();
          },
        }
      );
    },
    function (t, e, r) {
      t["exports"] = r(273);
    },
    function (t, e, r) {
      r(274);
      var n = r(8);
      t["exports"] = n["setTimeout"];
    },
    function (t, e, r) {
      var n = r(0),
        i = r(9),
        o = r(69),
        a = []["slice"],
        s = function (t) {
          return function (e, r) {
            var n = arguments["length"] > 2,
              i = n ? a["call"](arguments, 2) : void 0;
            return t(
              n
                ? function () {
                    ("function" == typeof e ? e : Function(e))["apply"](
                      this,
                      i
                    );
                  }
                : e,
              r
            );
          };
        };
      n(
        {
          global: !0,
          bind: !0,
          forced: /MSIE .\./["test"](o),
        },
        {
          setTimeout: s(i["setTimeout"]),
          setInterval: s(i["setInterval"]),
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(15)),
        o = n(r(7)),
        a = (function (t) {
          function e(e, r) {
            var n;
            return (
              (n = t["call"](this, e, r, "iom") || this),
              (o["default"]["logging"] =
                r["settings"] && r["settings"]["logging"]),
              (n["useCacheBuster"] = !1),
              (n["beFailSafe"] = !0),
              n
            );
          }
          (0, i["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["getUrl"] = function () {
              return "https://script.ioam.de/iam.js?m=1";
            }),
            (r["track"] = function (t) {
              if ("object" == typeof window["iom"]) {
                o["default"]["log"]("[AgofLoader]: AGOF tracking ...");
                var e = {
                  st: this["config"]["agofSiteId"] || "7tv",
                  cp: t["clientData"]["agofCode"],
                  sv: "ke",
                };
                o["default"]["log"]("[AgofLoader]: AGOF IOM data:  ", e),
                  window["iom"]["c"](e, 1),
                  o["default"]["log"]("[AgofLoader]: AGOF tracking done");
              } else o["default"]["log"]("[AgofLoader]: iom object not found in window. Not tracked.");
            }),
            e
          );
        })(n(r(24))["default"]);
      e["default"] = a;
    },
    function (t, e, r) {
      "use strict";
      var n = r(277);
      function i(t) {
        this["message"] = t;
      }
      (i["prototype"] = new Error()),
        (i["prototype"]["name"] = "InvalidTokenError"),
        (t["exports"] = function (t, e) {
          if ("string" != typeof t) throw new i("Invalid token specified");
          var r = !0 === (e = e || {})["header"] ? 0 : 1;
          try {
            return JSON["parse"](n(t["split"](".")[r]));
          } catch (t) {
            throw new i("Invalid token specified: " + t["message"]);
          }
        }),
        (t["exports"]["InvalidTokenError"] = i);
    },
    function (t, e, r) {
      var n = r(278);
      t["exports"] = function (t) {
        var e = t["replace"](/-/g, "+")["replace"](
          /_/g,
          "/"
        );
        switch (e["length"] % 4) {
          case 0:
            break;
          case 2:
            e += "==";
            break;
          case 3:
            e += "=";
            break;
          default:
            throw "Illegal base64url string!";
        }
        try {
          return (function (t) {
            return decodeURIComponent(
              n(t)["replace"](/(.)/g, function (t, e) {
                var r = e["charCodeAt"](0)["toString"](16)["toUpperCase"]();
                return (
                  r["length"] < 2 && (r = "0" + r), "%" + r
                );
              })
            );
          })(e);
        } catch (t) {
          return n(e);
        }
      };
    },
    function (t, e) {
      function r(t) {
        this["message"] = t;
      }
      (r["prototype"] = new Error()),
        (r["prototype"]["name"] = "InvalidCharacterError"),
        (t["exports"] =
          ("undefined" != typeof window &&
            window["atob"] &&
            window["atob"]["bind"](window)) ||
          function (t) {
            var e = String(t)["replace"](/=+$/, "");
            if (e["length"] % 4 == 1) throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
            for (
              var n, i, o = 0, a = 0, s = "";
              (i = e["charAt"](a++));
              ~i && ((n = o % 4 ? 64 * n + i : i), o++ % 4)
                ? (s += String["fromCharCode"](255 & (n >> ((-2 * o) & 6))))
                : 0
            )
              i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="["indexOf"](i);
            return s;
          });
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(21)),
        o = n(r(22)),
        a = n(r(280)),
        s = r(50),
        u = n(r(7)),
        c = (function () {
          function t(t, e) {
            (this["dashPlayerLoader"] = new a["default"](t, e, "DashPlayer")),
              (this["webosPlayerLoader"] = new a["default"](t, e, "WebosPlayer")),
              (this["tizenPlayerLoader"] = new a["default"](t, e, "TizenPlayer")),
              (this["hlsPlayerLoader"] = new a["default"](t, e, "HlsPlayer")),
              (this["webmafPlayerLoader"] = new a["default"](t, e, _x31886[1e3]));
          }
          var e = t["prototype"];
          return (
            (e["download"] = (function () {
              var t = (0, o["default"])(
                i["default"]["mark"](function t() {
                  var e, r;
                  return i["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            if (
                              ((e = navigator),
                              (r = e["userAgent"]),
                              !u["default"]["isTizen2016"](r))
                            ) {
                              t["next"] = 6;
                              break;
                            }
                            return (
                              (t["next"] = 4),
                              this["tizenPlayerLoader"]["downloadUsingXhr"]()
                            );
                          case 4:
                            t["next"] = 23;
                            break;
                          case 6:
                            if (!u["default"]["isSafari"](r)) {
                              t["next"] = 11;
                              break;
                            }
                            return (
                              (t["next"] = 9),
                              this["hlsPlayerLoader"]["downloadUsingXhr"]()
                            );
                          case 9:
                            t["next"] = 23;
                            break;
                          case 11:
                            if (!u["default"]["isWebos"](r)) {
                              t["next"] = 16;
                              break;
                            }
                            return (
                              (t["next"] = 14),
                              this["webosPlayerLoader"]["downloadUsingXhr"]()
                            );
                          case 14:
                            t["next"] = 23;
                            break;
                          case 16:
                            if (!u["default"]["isPlaystation"](r)) {
                              t["next"] = 21;
                              break;
                            }
                            return (
                              (t["next"] = 19),
                              this["webmafPlayerLoader"]["downloadUsingXhr"]()
                            );
                          case 19:
                            t["next"] = 23;
                            break;
                          case 21:
                            return (
                              (t["next"] = 23),
                              this["dashPlayerLoader"]["downloadUsingXhr"]()
                            );
                          case 23:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (e["getLoader"] = function (t) {
              var e = navigator["userAgent"];
              if (u["default"]["isWebos"](e)) return this["webosPlayerLoader"];
              if (u["default"]["isPlaystation"](e)) return this["webmafPlayerLoader"];
              switch (t) {
                case s["PlayerMimetype"]["DASH"]:
                  return u["default"]["isTizen2016"](e)
                    ? this["tizenPlayerLoader"]
                    : this["dashPlayerLoader"];
                case s["PlayerMimetype"]["HLS"]:
                  return this["hlsPlayerLoader"];
                default:
                  throw new Error("Unsupported MIME type " + t + ", no suitable player exists");
              }
            }),
            t
          );
        })();
      e["default"] = c;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(38)),
        o = n(r(56)),
        a = n(r(15)),
        s = n(r(7)),
        u = r(50),
        c = (function (t) {
          function e(e, r, n) {
            var i;
            return (
              ((i = t["call"](this, e, r, n) || this)["urlTemplate"] = i[
                "getUrlTemplateByPlayerType"
              ]()),
              (s["default"]["logging"] =
                r["settings"] && r["settings"]["logging"]),
              i
            );
          }
          (0, a["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["getUrlTemplateByPlayerType"] = function () {
              var t = "https://static.<prefix>-vod-playout-<env>.aws.route71.net/mxd-web-player/dist";
              switch (this["name"]) {
                case "DashPlayer":
                  return t + "/dash-player.min.js";
                case "HlsPlayer":
                  return t + "/hls-player.min.js";
                case "TizenPlayer":
                  return t + "/tizen-player.min.js";
                case "WebosPlayer":
                  return t + "/webos-player.min.js";
                case _x31886[1e3]:
                  return t + "/webmaf-player.min.js";
                default:
                  throw new Error("Unknown player type " + this["name"]);
              }
            }),
            (r["getUrl"] = function () {
              var t = this["config"]["env"]["toLowerCase"](),
                e = "prod" === t ? "t1p" : "t1d";
              return this["urlTemplate"]
                ["replace"]("<env>", t)
                ["replace"]("<prefix>", e);
            }),
            (r["createInstance"] = function (t, e) {
              void 0 === e && (e = !1),
                s["default"]["log"]("[WebPlayerLoader]: Loading " + this["name"]);
              var r = window[this["name"]];
              return (
                s["default"]["log"]("[WebPlayerLoader]: Config: ", this["config"]),
                (this["Instance"] = new r()),
                (this["eventEmitter"] = t),
                this["registerPlayerEvents"](e),
                this["Instance"]
              );
            }),
            (r["registerPlayerEvents"] = function (t) {
              var e,
                r = this;
              void 0 === t && (t = !1),
                (0, o["default"])(
                  (e = [
                    "destroy",
                    "fullscreen",
                    "muted",
                    "started",
                    "playerready",
                    "bitrateswitching",
                    "timeupdate",
                    "buffering",
                    "pause",
                    "play",
                    "playing",
                    "seeking",
                    "ended",
                    "playbackLanguageSelected",
                    "subtitleCueEntered",
                    "subtitleCueExited",
                  ])
                )["call"](e, function (e) {
                  r["Instance"]["on"](e, function (n) {
                    t
                      ? r["eventEmitter"]["emit"](r["remapEventNames"](e), n)
                      : r["eventEmitter"]["emit"](e, n);
                  });
                });
            }),
            (r["remapEventNames"] = function (t) {
              return u["csaiEventOverrideMapping"][t] || t;
            }),
            (r["startPlayback"] = function (t) {
              s["default"]["log"]("[WebPlayerLoader]: source: ", t),
                this["Instance"]["init"](this["buildPlayerSource"](t));
            }),
            (r["buildPlayerSource"] = function (t) {
              var e = this["config"]["webPlayer"]
                ? (0, i["default"])({}, this["config"]["webPlayer"])
                : {};
              return (
                (e["manifestUrl"] = t["url"]),
                (e["licenseUrl"] = t["licenseUrl"]),
                (e["startTime"] = t["startTime"]),
                (e["mimetype"] = t["mimetype"]),
                (e["certificateUrl"] = t["certificateUrl"]),
                "WebosPlayer" === this["name"] &&
                  (e["webosAppId"] = t["webosAppId"]),
                s["default"]["log"]("[WebPlayerLoader]: playerSource", e),
                e
              );
            }),
            e
          );
        })(n(r(24))["default"]);
      e["default"] = c;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(103)),
        o = n(r(15)),
        a = n(r(7)),
        s = n(r(49)),
        u = (function (t) {
          function e(e, r) {
            var n;
            return (
              (n = t["call"](this, e, r, "PlaybackMonitoring") || this),
              (a["default"]["logging"] =
                r["settings"] && r["settings"]["logging"]),
              (n["useCacheBuster"] = !1),
              (n["beFailSafe"] = !0),
              n
            );
          }
          (0, o["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["getUrl"] = function () {
              return s["default"][
                this["config"]["env"]["toLowerCase"]()
              ]["playback-monitoring"]["url"];
            }),
            (r["start"] = function (t) {
              this["instance"]["start"](t);
            }),
            (r["update"] = function (t) {
              this["instance"]["update"](t);
            }),
            (r["stop"] = function () {
              this["instance"]["stop"]();
            }),
            (r["addParameters"] = function (t) {
              this["instance"]["update"](t);
            }),
            (r["destroy"] = function () {
              this["instance"] &&
                (this["instance"]["destroy"](),
                (this["_instance"] = null));
            }),
            (0, i["default"])(e, [
              {
                key: "instance",
                get: function () {
                  return (
                    this["_instance"] ||
                      (this["_instance"] = new window["PlaybackMonitoring"](
                        this["config"]
                      )),
                    this["_instance"]
                  );
                },
              },
            ]),
            e
          );
        })(n(r(24))["default"]);
      e["default"] = u;
    },
    function (t, e, r) {
      var n = r(283);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(284);
      var n = r(8);
      n["JSON"] ||
        (n["JSON"] = {
          stringify: JSON["stringify"],
        }),
        (t["exports"] = function (t, e, r) {
          return n["JSON"]["stringify"]["apply"](null, arguments);
        });
    },
    function (t, e, r) {
      var n = r(0),
        i = r(16),
        o = r(5),
        a = i("JSON", "stringify"),
        s = /[\uD800-\uDFFF]/g,
        u = /^[\uD800-\uDBFF]$/,
        c = /^[\uDC00-\uDFFF]$/,
        l = function (t, e, r) {
          var n = r["charAt"](e - 1),
            i = r["charAt"](e + 1);
          return (u["test"](t) && !c["test"](i)) ||
            (c["test"](t) && !u["test"](n))
            ? "\\u" + t["charCodeAt"](0)["toString"](16)
            : t;
        },
        f = o(function () {
          return (
            '"\\udf06\\ud834"' !== a("\udf06\ud834") ||
            '"\\udead"' !== a("\udead")
          );
        });
      a &&
        n(
          {
            target: "JSON",
            stat: !0,
            forced: f,
          },
          {
            stringify: function (t, e, r) {
              var n = a["apply"](null, arguments);
              return "string" == typeof n ? n["replace"](s, l) : n;
            },
          }
        );
    },
    function (t, e, r) {
      t["exports"] = r(286);
    },
    function (t, e, r) {
      var n = r(287);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(288),
        i = Array["prototype"];
      t["exports"] = function (t) {
        var e = t["some"];
        return t === i || (t instanceof Array && e === i["some"])
          ? n
          : e;
      };
    },
    function (t, e, r) {
      r(289);
      var n = r(17);
      t["exports"] = n("Array")["some"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(45)["some"],
        o = r(65),
        a = r(32),
        s = o("some"),
        u = a("some");
      n(
        {
          target: "Array",
          proto: !0,
          forced: !s || !u,
        },
        {
          some: function (t) {
            return i(
              this,
              t,
              arguments["length"] > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    function (t, e, r) {
      t["exports"] = r(291);
    },
    function (t, e, r) {
      var n = r(292);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(293);
      var n = r(8);
      t["exports"] = n["Array"]["isArray"];
    },
    function (t, e, r) {
      r(0)(
        {
          target: "Array",
          stat: !0,
        },
        {
          isArray: r(46),
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(15)),
        o = n(r(7)),
        a = n(r(24)),
        s = (function (t) {
          function e(e, r) {
            var n;
            return (
              (n = t["call"](this, e, r, "PlaybackSourceFetcher") || this),
              (o["default"]["logging"] =
                r["settings"] && r["settings"]["logging"]),
              n
            );
          }
          (0, i["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["getUrl"] = function () {
              var t = this["config"]["env"]["toLowerCase"](),
                e = "prod" === t ? "t1p" : "t1d";
              return "https://static.<prefix>-vod-playout-<env>.aws.route71.net/playback-source-fetcher/dist/playback-source-fetcher.min.js"
                ["replace"]("<env>", t)
                ["replace"]("<prefix>", e);
            }),
            (r["createInstance"] = function () {
              var t = window["PlaybackSourceFetcher"];
              return (
                (this["Instance"] = new t(
                  this["config"]["psf"],
                  this["config"]["env"]
                )),
                this["Instance"]
              );
            }),
            e
          );
        })(a["default"]);
      e["default"] = s;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(15)),
        o = n(r(7)),
        a = n(r(49)),
        s = r(50),
        u = (function (t) {
          function e(e, r) {
            var n;
            return (
              (n = t["call"](this, e, r, "AdTracker") || this),
              (o["default"]["logging"] =
                r["settings"] && r["settings"]["logging"]),
              (n["beFailSafe"] = !0),
              n
            );
          }
          (0, i["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["getUrl"] = function () {
              return a["default"][
                this["config"]["env"]["toLowerCase"]()
              ]["ad-tracker"]["url"];
            }),
            (r["createInstance"] = function (t, e) {
              var r = this["config"]["AdTracker"] || {};
              return (
                (r["logging"] =
                  this["config"]["settings"] &&
                  this["config"]["settings"]["logging"]),
                (this["Instance"] = new window["AdTracker"](
                  this["config"]["adSource"] || t,
                  r,
                  e
                )),
                this["Instance"]
              );
            }),
            (r["createAdInserterInstance"] = function (t, e, r) {
              var n = this["_buildConfigForAdInserter"]();
              return (
                (this["Instance"] = new window["AdInserter"](
                  n,
                  s["csaiEventOverrideMapping"]
                )),
                this["Instance"]["init"](t, e, r),
                this["Instance"]
              );
            }),
            (r["_buildConfigForAdInserter"] = function () {
              var t = this["config"]["AdInserter"] || {};
              return (
                (t["logging"] =
                  this["config"]["settings"] &&
                  this["config"]["settings"]["logging"]),
                (t["webPlayer"] = this["config"]["webPlayer"]),
                t
              );
            }),
            e
          );
        })(n(r(24))["default"]);
      e["default"] = u;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(21)),
        o = n(r(22)),
        a = n(r(15)),
        s = n(r(7)),
        u = n(r(49));
      function c(t) {
        return Object["prototype"]["hasOwnProperty"]["call"](t, "heartbeat");
      }
      var l = (function (t) {
        function e(e, r) {
          var n;
          return (
            (n = t["call"](this, e, r, "PlayerHeartbeatProducer") || this),
            (s["default"]["logging"] =
              r["settings"] && r["settings"]["logging"]),
            (n["useCacheBuster"] = !1),
            (n["beFailSafe"] = !0),
            (n["config"] = r),
            n
          );
        }
        (0, a["default"])(e, t);
        var r = e["prototype"];
        return (
          (r["download"] = (function () {
            var e = (0, o["default"])(
              i["default"]["mark"](function e() {
                return i["default"]["wrap"](
                  function (e) {
                    for (;;)
                      switch ((e["prev"] = e["next"])) {
                        case 0:
                          if (c(this["config"])) {
                            e["next"] = 3;
                            break;
                          }
                          return (
                            s["default"]["log"]("[PlayerHeartbeatProducerLoader]: Missing heartbeat config, skipping download"),
                            e["abrupt"]("return")
                          );
                        case 3:
                          return (
                            (e["next"] = 5),
                            t["prototype"]["download"]["call"](this)
                          );
                        case 5:
                        case "end":
                          return e["stop"]();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function () {
              return e["apply"](this, arguments);
            };
          })()),
          (r["downloadUsingXhr"] = (function () {
            var e = (0, o["default"])(
              i["default"]["mark"](function e() {
                return i["default"]["wrap"](
                  function (e) {
                    for (;;)
                      switch ((e["prev"] = e["next"])) {
                        case 0:
                          if (c(this["config"])) {
                            e["next"] = 3;
                            break;
                          }
                          return (
                            s["default"]["log"]("[PlayerHeartbeatProducerLoader]: Missing heartbeat config, skipping XHR download"),
                            e["abrupt"]("return")
                          );
                        case 3:
                          return (
                            (e["next"] = 5),
                            t["prototype"]["downloadUsingXhr"]["call"](this)
                          );
                        case 5:
                        case "end":
                          return e["stop"]();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function () {
              return e["apply"](this, arguments);
            };
          })()),
          (r["getUrl"] = function () {
            return u["default"][
              this["config"]["env"]["toLowerCase"]()
            ]["player-heartbeat-producer"]["url"];
          }),
          (r["createInstance"] = function () {
            return c(this["config"])
              ? (this["instance"] ||
                  (this["instance"] = new window["PlayerHeartbeatProducer"](
                    this["config"]
                  )),
                this["instance"])
              : null;
          }),
          (r["destroy"] = function () {
            this["instance"] &&
              (this["instance"]["destroy"](), (this["instance"] = null));
          }),
          (r["init"] = function (t) {
            void 0 === t && (t = {}),
              s["default"]["log"]("[PlayerHeartbeatProducerLoader]: Initialising PlayerHeartbeatProducer");
            var e = this["createInstance"]();
            e &&
              (e["init"](t), s["default"]["log"]("[PlayerHeartbeatProducerLoader]: PlayerHeartbeatProducer initialised"));
          }),
          (r["update"] = function (t) {
            void 0 === t && (t = {}),
              this["instance"] &&
                this["instance"]["update"] &&
                "function" == typeof this["instance"]["update"] &&
                this["instance"]["update"](t);
          }),
          (r["stop"] = function () {
            this["instance"] &&
              (s["default"]["log"]("[PlayerHeartbeatProducerLoader]: Stop PlayerHeartbeatProducer..."),
              this["instance"]["stop"]());
          }),
          e
        );
      })(n(r(24))["default"]);
      e["default"] = l;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(38)),
        o = n(r(298)),
        a = n(r(303)),
        s = (function () {
          function t(t) {
            this["psfSources"] = t;
          }
          return (
            (t["prototype"]["getPreferredSource"] = function () {
              var t = this["psfSources"][0],
                e = t["drm"],
                r = (0, a["default"])(t, ["drm"]),
                n = (0, o["default"])(e)[0],
                s = n[0],
                u = n[1];
              return (0, i["default"])(
                {
                  drm: s,
                  licenseUrl: u["licenseUrl"],
                  certificateUrl: u["certificateUrl"],
                },
                r
              );
            }),
            t
          );
        })();
      e["default"] = s;
    },
    function (t, e, r) {
      t["exports"] = r(299);
    },
    function (t, e, r) {
      var n = r(300);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(301);
      var n = r(8);
      t["exports"] = n["Object"]["entries"];
    },
    function (t, e, r) {
      var n = r(0),
        i = r(302)["entries"];
      n(
        {
          target: "Object",
          stat: !0,
        },
        {
          entries: function (t) {
            return i(t);
          },
        }
      );
    },
    function (t, e, r) {
      var n = r(13),
        i = r(41),
        o = r(28),
        a = r(52)["f"],
        s = function (t) {
          return function (e) {
            for (
              var r, s = o(e), u = i(s), c = u["length"], l = 0, f = [];
              c > l;

            )
              (r = u[l++]),
                (n && !a["call"](s, r)) ||
                  f["push"](t ? [r, s[r]] : s[r]);
            return f;
          };
        };
      t["exports"] = {
        entries: s(!0),
        values: s(!1),
      };
    },
    function (t, e, r) {
      var n = r(117),
        i = r(304);
      t["exports"] = function (t, e) {
        if (null == t) return {};
        var r,
          o,
          a = {},
          s = i(t);
        for (o = 0; o < s["length"]; o++)
          (r = s[o]), n(e)["call"](e, r) >= 0 || (a[r] = t[r]);
        return a;
      };
    },
    function (t, e, r) {
      t["exports"] = r(305);
    },
    function (t, e, r) {
      var n = r(118);
      t["exports"] = n;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(124)),
        o = n(r(21)),
        a = n(r(37)),
        s = n(r(22)),
        u = n(r(15)),
        c = n(r(7)),
        l = r(307),
        f = r(50),
        d = n(r(48)),
        p = r(119),
        h = (function (t) {
          function e(e, r) {
            var n;
            return (
              (n = t["call"](this, e, r) || this),
              (c["default"]["logging"] =
                e["settings"] && e["settings"]["logging"]),
              (0, l["applySimpleCookiePolyfill"])(window["document"]),
              (n["_httpClient"] = (0, p["createHttpClient"])({
                logger: c["default"],
                XMLHttpRequest: window["XMLHttpRequest"],
              })),
              n
            );
          }
          (0, u["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["_downloadAllLibs"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t() {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              c["default"]["log"]("[NativeStrategy]: Downloading all libs"),
                              (t["next"] = 3),
                              a["default"]["all"]([
                                this["psfLoader"]["downloadUsingXhr"](),
                                this["adTrackerLoader"]["downloadUsingXhr"](),
                                this["playerHeartbeatProducerLoader"]["downloadUsingXhr"](),
                              ])
                            );
                          case 3:
                            c["default"]["log"]("[NativeStrategy]: All libs downloaded");
                          case 4:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_start"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t(e) {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              (t["prev"] = 0),
                              c["default"]["log"](
                                "[NativeStrategy] contentResource: " + (0, i["default"])(e)
                              ),
                              this["playerHeartbeatProducerLoader"]["init"](
                                e,
                                this["isCSAIEnabled"]
                              ),
                              (e["adSource"] = "server"),
                              (t["next"] = 6),
                              this["getSource"](e)
                            );
                          case 6:
                            return (
                              (this["playRequest"]["source"] =
                                t["sent"]),
                              this["playerHeartbeatProducerLoader"]["update"]({
                                streamUrl: this["playRequest"]["source"]
                                  ? this["playRequest"]["source"][
                                      "url"
                                    ]
                                  : "",
                              }),
                              (t["next"] = 10),
                              this["_triggerAdStitching"]()
                            );
                          case 10:
                            return (t["next"] = 12), this["bindAdTracker"](e);
                          case 12:
                            return t["abrupt"](
                              "return",
                              this["playRequest"]["source"]
                            );
                          case 15:
                            throw (
                              ((t["prev"] = 15),
                              (t["t0"] = t["catch"](0)),
                              c["default"]["log"](
                                "[NativeStrategy]: Toolkit fetchSource() error: ",
                                t["t0"]
                              ),
                              new d["default"](
                                t["t0"],
                                "NATIVE_STRATEGY",
                                this["eventEmitter"]
                              ))
                            );
                          case 19:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this,
                    [[0, 15]]
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_triggerAdStitching"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t() {
                  var e, r;
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            if (
                              (c["default"]["log"]("[NativeStrategy]: Triggering ad stitching..."),
                              !this["playRequest"]["source"]["adSource"])
                            ) {
                              t["next"] = 14;
                              break;
                            }
                            if (
                              this["playRequest"]["source"]["mimetype"] !==
                              f["PlayerMimetype"]["DASH"]
                            ) {
                              t["next"] = 6;
                              break;
                            }
                            c["default"]["log"]("[NativeStrategy]: DASH...Bypass ad stitching trigger"),
                              (t["next"] = 14);
                            break;
                          case 6:
                            return (
                              c["default"]["log"](
                                "[NativeStrategy]: HLS - Requesting master manifest " +
                                  this["playRequest"]["source"]["url"]
                              ),
                              (t["next"] = 9),
                              this["_downloadFile"](
                                this["playRequest"]["source"]["url"]
                              )
                            );
                          case 9:
                            return (
                              (e = t["sent"]),
                              (r = e["match"](/^http.*$/gm)),
                              c["default"]["log"]("[NativeStrategy]: HLS - Requesting bitrate ", r[0]),
                              (t["next"] = 14),
                              this["_downloadFile"](r[0])
                            );
                          case 14:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_downloadFile"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t(e) {
                  var r;
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              c["default"]["log"](
                                "[NativeStrategy]: XHR Downloading file " + e + "..."
                              ),
                              (t["next"] = 3),
                              this["_httpClient"]["get"](e)
                            );
                          case 3:
                            return (
                              (r = t["sent"]),
                              c["default"]["log"](
                                "[NativeStrategy]: Downloaded " + e + "..."
                              ),
                              t["abrupt"]("return", r)
                            );
                          case 6:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["bindAdTracker"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t(e) {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              this["_initAdTracker"](
                                this["playRequest"]["source"]["adSource"],
                                e
                              ),
                              (t["next"] = 3),
                              this["AdTracker"]["startAdTracking"]()
                            );
                          case 3:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            (r["getDurationWithoutAds"] = function (t) {
              return this["AdTracker"]["getDurationWithoutAds"](t);
            }),
            (r["_augmentClientData"] = (function () {
              var t = (0, s["default"])(
                o["default"]["mark"](function t(e) {
                  return o["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return t["abrupt"](
                              "return",
                              window["AdTracker"]["augmentClientData"](
                                e,
                                this["config"],
                                {
                                  augmentNuggVars: !1,
                                }
                              )
                            );
                          case 1:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            e
          );
        })(n(r(123))["default"]);
      e["default"] = h;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["applySimpleCookiePolyfill"] = function (t) {
          if (void 0 !== t["cookie"]) return;
          var e = new s["default"]();
          (0, a["default"])(t, "cookie", {
            get: function () {
              var t = (0, o["default"])(e);
              return (0, i["default"])(t)
                ["call"](t, c)
                ["join"]("; ");
            },
            set: function (t) {
              var r = u["exec"](t),
                n = r[1],
                i = r[2];
              e["set"](n, i);
            },
          });
        });
      var i = n(r(308)),
        o = n(r(313)),
        a = n(r(1)),
        s = n(r(318)),
        u = /^(.*?)=(.*?)($|; .*$)/;
      function c(t) {
        return t[0] + "=" + t[1];
      }
    },
    function (t, e, r) {
      t["exports"] = r(309);
    },
    function (t, e, r) {
      var n = r(310);
      t["exports"] = n;
    },
    function (t, e, r) {
      var n = r(311),
        i = Array["prototype"];
      t["exports"] = function (t) {
        var e = t["map"];
        return t === i || (t instanceof Array && e === i["map"])
          ? n
          : e;
      };
    },
    function (t, e, r) {
      r(312);
      var n = r(17);
      t["exports"] = n("Array")["map"];
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        i = r(45)["map"],
        o = r(75),
        a = r(32),
        s = o("map"),
        u = a("map");
      n(
        {
          target: "Array",
          proto: !0,
          forced: !s || !u,
        },
        {
          map: function (t) {
            return i(
              this,
              t,
              arguments["length"] > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    function (t, e, r) {
      t["exports"] = r(314);
    },
    function (t, e, r) {
      var n = r(315);
      t["exports"] = n;
    },
    function (t, e, r) {
      r(66), r(316);
      var n = r(8);
      t["exports"] = n["Array"]["from"];
    },
    function (t, e, r) {
      var n = r(0),
        i = r(317);
      n(
        {
          target: "Array",
          stat: !0,
          forced: !r(98)(function (t) {
            Array["from"](t);
          }),
        },
        {
          from: i,
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(14),
        i = r(26),
        o = r(97),
        a = r(96),
        s = r(27),
        u = r(74),
        c = r(68);
      t["exports"] = function (t) {
        var e,
          r,
          l,
          f,
          d,
          p,
          h = i(t),
          v = "function" == typeof this ? this : Array,
          g = arguments["length"],
          y = g > 1 ? arguments[1] : void 0,
          w = void 0 !== y,
          m = c(h),
          b = 0;
        if (
          (w && (y = n(y, g > 2 ? arguments[2] : void 0, 2)),
          null == m || (v == Array && a(m)))
        )
          for (r = new v((e = s(h["length"]))); e > b; b++)
            (p = w ? y(h[b], b) : h[b]), u(r, b, p);
        else
          for (
            d = (f = m["call"](h))["next"], r = new v();
            !(l = d["call"](f))["done"];
            b++
          )
            (p = w ? o(f, y, [l["value"], b], !0) : l["value"]),
              u(r, b, p);
        return (r["length"] = b), r;
      };
    },
    function (t, e, r) {
      t["exports"] = r(319);
    },
    function (t, e, r) {
      "use strict";
      var n = r(112);
      t["exports"] = n;
    },
    function (t, e, r) {
      "use strict";
      var n = r(2);
      r(1)(e, "__esModule", {
        value: !0,
      }),
        (e["default"] = void 0);
      var i = n(r(21)),
        o = n(r(37)),
        a = n(r(22)),
        s = n(r(15)),
        u = n(r(7)),
        c = n(r(121)),
        l = (function (t) {
          function e(e, r) {
            var n;
            return (
              ((n = t["call"](this, e, r) || this)["asfLoader"] = new c[
                "default"
              ](n["cacheBuster"], n["config"])),
              n
            );
          }
          (0, s["default"])(e, t);
          var r = e["prototype"];
          return (
            (r["_downloadAllLibs"] = (function () {
              var t = (0, a["default"])(
                i["default"]["mark"](function t() {
                  return i["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return (
                              u["default"]["log"]("[OTTStrategy]: Downloading all libs"),
                              (t["next"] = 3),
                              o["default"]["all"]([
                                this["psfLoader"]["downloadUsingXhr"](),
                                this["playerLoaderFactory"]["download"](),
                                this["adTrackerLoader"]["downloadUsingXhr"](),
                                this["playerHeartbeatProducerLoader"]["downloadUsingXhr"](),
                                this["playbackMonitoringLoader"]["downloadUsingXhr"](),
                                this["asfLoader"]["download"](),
                              ])
                            );
                          case 3:
                            u["default"]["log"]("[OTTStrategy]: All libs downloaded");
                          case 4:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_getAdSource"] = (function () {
              var t = (0, a["default"])(
                i["default"]["mark"](function t() {
                  return i["default"]["wrap"](function (t) {
                    for (;;)
                      switch ((t["prev"] = t["next"])) {
                        case 0:
                          u["default"]["log"]("[OTTStrategy]: no ad source fetching needed");
                        case 1:
                        case "end":
                          return t["stop"]();
                      }
                  }, t);
                })
              );
              return function () {
                return t["apply"](this, arguments);
              };
            })()),
            (r["_augmentClientData"] = (function () {
              var t = (0, a["default"])(
                i["default"]["mark"](function t(e) {
                  return i["default"]["wrap"](
                    function (t) {
                      for (;;)
                        switch ((t["prev"] = t["next"])) {
                          case 0:
                            return t["abrupt"](
                              "return",
                              window["AdTracker"]["augmentClientData"](
                                e,
                                this["config"],
                                {
                                  augmentNuggVars: !1,
                                }
                              )
                            );
                          case 1:
                          case "end":
                            return t["stop"]();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t["apply"](this, arguments);
              };
            })()),
            e
          );
        })(n(r(122))["default"]);
      e["default"] = l;
    },
  ]);
