var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb2, mod) => function __require2() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-5ItRe7/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-5ItRe7/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS({
  "node_modules/@prisma/client/runtime/edge.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var la = Object.create;
    var nr = Object.defineProperty;
    var ca2 = Object.getOwnPropertyDescriptor;
    var pa = Object.getOwnPropertyNames;
    var fa = Object.getPrototypeOf;
    var ma = Object.prototype.hasOwnProperty;
    var be2 = (e2, t2) => () => (e2 && (t2 = e2(e2 = 0)), t2);
    var Se = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
    var vt = (e2, t2) => {
      for (var r2 in t2)
        nr(e2, r2, { get: t2[r2], enumerable: true });
    };
    var zn = (e2, t2, r2, n2) => {
      if (t2 && typeof t2 == "object" || typeof t2 == "function")
        for (let i2 of pa(t2))
          !ma.call(e2, i2) && i2 !== r2 && nr(e2, i2, { get: () => t2[i2], enumerable: !(n2 = ca2(t2, i2)) || n2.enumerable });
      return e2;
    };
    var Ue = (e2, t2, r2) => (r2 = e2 != null ? la(fa(e2)) : {}, zn(t2 || !e2 || !e2.__esModule ? nr(r2, "default", { value: e2, enumerable: true }) : r2, e2));
    var Gr = (e2) => zn(nr({}, "__esModule", { value: true }), e2);
    var y2;
    var c2 = be2(() => {
      "use strict";
      y2 = { nextTick: (e2, ...t2) => {
        setTimeout(() => {
          e2(...t2);
        }, 0);
      }, env: {}, version: "", cwd: () => "/", stderr: {}, argv: ["/bin/node"] };
    });
    var Yn;
    var b2;
    var p2 = be2(() => {
      "use strict";
      b2 = (Yn = globalThis.performance) != null ? Yn : (() => {
        let e2 = Date.now();
        return { now: () => Date.now() - e2 };
      })();
    });
    var E2;
    var f2 = be2(() => {
      "use strict";
      E2 = () => {
      };
      E2.prototype = E2;
    });
    var m2 = be2(() => {
      "use strict";
    });
    var hi = Se((rt) => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      var ri = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports), da = ri((e2) => {
        "use strict";
        e2.byteLength = u2, e2.toByteArray = g2, e2.fromByteArray = S2;
        var t2 = [], r2 = [], n2 = typeof Uint8Array < "u" ? Uint8Array : Array, i2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (o2 = 0, s2 = i2.length; o2 < s2; ++o2)
          t2[o2] = i2[o2], r2[i2.charCodeAt(o2)] = o2;
        var o2, s2;
        r2[45] = 62, r2[95] = 63;
        function a2(C2) {
          var A2 = C2.length;
          if (A2 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var k2 = C2.indexOf("=");
          k2 === -1 && (k2 = A2);
          var O2 = k2 === A2 ? 0 : 4 - k2 % 4;
          return [k2, O2];
        }
        function u2(C2) {
          var A2 = a2(C2), k2 = A2[0], O2 = A2[1];
          return (k2 + O2) * 3 / 4 - O2;
        }
        function l2(C2, A2, k2) {
          return (A2 + k2) * 3 / 4 - k2;
        }
        function g2(C2) {
          var A2, k2 = a2(C2), O2 = k2[0], B2 = k2[1], M2 = new n2(l2(C2, O2, B2)), I2 = 0, X2 = B2 > 0 ? O2 - 4 : O2, L2;
          for (L2 = 0; L2 < X2; L2 += 4)
            A2 = r2[C2.charCodeAt(L2)] << 18 | r2[C2.charCodeAt(L2 + 1)] << 12 | r2[C2.charCodeAt(L2 + 2)] << 6 | r2[C2.charCodeAt(L2 + 3)], M2[I2++] = A2 >> 16 & 255, M2[I2++] = A2 >> 8 & 255, M2[I2++] = A2 & 255;
          return B2 === 2 && (A2 = r2[C2.charCodeAt(L2)] << 2 | r2[C2.charCodeAt(L2 + 1)] >> 4, M2[I2++] = A2 & 255), B2 === 1 && (A2 = r2[C2.charCodeAt(L2)] << 10 | r2[C2.charCodeAt(L2 + 1)] << 4 | r2[C2.charCodeAt(L2 + 2)] >> 2, M2[I2++] = A2 >> 8 & 255, M2[I2++] = A2 & 255), M2;
        }
        function h2(C2) {
          return t2[C2 >> 18 & 63] + t2[C2 >> 12 & 63] + t2[C2 >> 6 & 63] + t2[C2 & 63];
        }
        function x2(C2, A2, k2) {
          for (var O2, B2 = [], M2 = A2; M2 < k2; M2 += 3)
            O2 = (C2[M2] << 16 & 16711680) + (C2[M2 + 1] << 8 & 65280) + (C2[M2 + 2] & 255), B2.push(h2(O2));
          return B2.join("");
        }
        function S2(C2) {
          for (var A2, k2 = C2.length, O2 = k2 % 3, B2 = [], M2 = 16383, I2 = 0, X2 = k2 - O2; I2 < X2; I2 += M2)
            B2.push(x2(C2, I2, I2 + M2 > X2 ? X2 : I2 + M2));
          return O2 === 1 ? (A2 = C2[k2 - 1], B2.push(t2[A2 >> 2] + t2[A2 << 4 & 63] + "==")) : O2 === 2 && (A2 = (C2[k2 - 2] << 8) + C2[k2 - 1], B2.push(t2[A2 >> 10] + t2[A2 >> 4 & 63] + t2[A2 << 2 & 63] + "=")), B2.join("");
        }
      }), ga = ri((e2) => {
        e2.read = function(t2, r2, n2, i2, o2) {
          var s2, a2, u2 = o2 * 8 - i2 - 1, l2 = (1 << u2) - 1, g2 = l2 >> 1, h2 = -7, x2 = n2 ? o2 - 1 : 0, S2 = n2 ? -1 : 1, C2 = t2[r2 + x2];
          for (x2 += S2, s2 = C2 & (1 << -h2) - 1, C2 >>= -h2, h2 += u2; h2 > 0; s2 = s2 * 256 + t2[r2 + x2], x2 += S2, h2 -= 8)
            ;
          for (a2 = s2 & (1 << -h2) - 1, s2 >>= -h2, h2 += i2; h2 > 0; a2 = a2 * 256 + t2[r2 + x2], x2 += S2, h2 -= 8)
            ;
          if (s2 === 0)
            s2 = 1 - g2;
          else {
            if (s2 === l2)
              return a2 ? NaN : (C2 ? -1 : 1) * (1 / 0);
            a2 = a2 + Math.pow(2, i2), s2 = s2 - g2;
          }
          return (C2 ? -1 : 1) * a2 * Math.pow(2, s2 - i2);
        }, e2.write = function(t2, r2, n2, i2, o2, s2) {
          var a2, u2, l2, g2 = s2 * 8 - o2 - 1, h2 = (1 << g2) - 1, x2 = h2 >> 1, S2 = o2 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C2 = i2 ? 0 : s2 - 1, A2 = i2 ? 1 : -1, k2 = r2 < 0 || r2 === 0 && 1 / r2 < 0 ? 1 : 0;
          for (r2 = Math.abs(r2), isNaN(r2) || r2 === 1 / 0 ? (u2 = isNaN(r2) ? 1 : 0, a2 = h2) : (a2 = Math.floor(Math.log(r2) / Math.LN2), r2 * (l2 = Math.pow(2, -a2)) < 1 && (a2--, l2 *= 2), a2 + x2 >= 1 ? r2 += S2 / l2 : r2 += S2 * Math.pow(2, 1 - x2), r2 * l2 >= 2 && (a2++, l2 /= 2), a2 + x2 >= h2 ? (u2 = 0, a2 = h2) : a2 + x2 >= 1 ? (u2 = (r2 * l2 - 1) * Math.pow(2, o2), a2 = a2 + x2) : (u2 = r2 * Math.pow(2, x2 - 1) * Math.pow(2, o2), a2 = 0)); o2 >= 8; t2[n2 + C2] = u2 & 255, C2 += A2, u2 /= 256, o2 -= 8)
            ;
          for (a2 = a2 << o2 | u2, g2 += o2; g2 > 0; t2[n2 + C2] = a2 & 255, C2 += A2, a2 /= 256, g2 -= 8)
            ;
          t2[n2 + C2 - A2] |= k2 * 128;
        };
      }), Hr = da(), et = ga(), Zn = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      rt.Buffer = T2;
      rt.SlowBuffer = xa;
      rt.INSPECT_MAX_BYTES = 50;
      var ir = 2147483647;
      rt.kMaxLength = ir;
      T2.TYPED_ARRAY_SUPPORT = ha();
      !T2.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function ha() {
        try {
          let e2 = new Uint8Array(1), t2 = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(t2, Uint8Array.prototype), Object.setPrototypeOf(e2, t2), e2.foo() === 42;
        } catch (e2) {
          return false;
        }
      }
      Object.defineProperty(T2.prototype, "parent", { enumerable: true, get: function() {
        if (T2.isBuffer(this))
          return this.buffer;
      } });
      Object.defineProperty(T2.prototype, "offset", { enumerable: true, get: function() {
        if (T2.isBuffer(this))
          return this.byteOffset;
      } });
      function xe(e2) {
        if (e2 > ir)
          throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
        let t2 = new Uint8Array(e2);
        return Object.setPrototypeOf(t2, T2.prototype), t2;
      }
      function T2(e2, t2, r2) {
        if (typeof e2 == "number") {
          if (typeof t2 == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return zr(e2);
        }
        return ni(e2, t2, r2);
      }
      T2.poolSize = 8192;
      function ni(e2, t2, r2) {
        if (typeof e2 == "string")
          return wa(e2, t2);
        if (ArrayBuffer.isView(e2))
          return Ea(e2);
        if (e2 == null)
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
        if (me(e2, ArrayBuffer) || e2 && me(e2.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(e2, SharedArrayBuffer) || e2 && me(e2.buffer, SharedArrayBuffer)))
          return oi(e2, t2, r2);
        if (typeof e2 == "number")
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n2 = e2.valueOf && e2.valueOf();
        if (n2 != null && n2 !== e2)
          return T2.from(n2, t2, r2);
        let i2 = ba2(e2);
        if (i2)
          return i2;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e2[Symbol.toPrimitive] == "function")
          return T2.from(e2[Symbol.toPrimitive]("string"), t2, r2);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
      }
      T2.from = function(e2, t2, r2) {
        return ni(e2, t2, r2);
      };
      Object.setPrototypeOf(T2.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(T2, Uint8Array);
      function ii2(e2) {
        if (typeof e2 != "number")
          throw new TypeError('"size" argument must be of type number');
        if (e2 < 0)
          throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
      }
      function ya(e2, t2, r2) {
        return ii2(e2), e2 <= 0 ? xe(e2) : t2 !== void 0 ? typeof r2 == "string" ? xe(e2).fill(t2, r2) : xe(e2).fill(t2) : xe(e2);
      }
      T2.alloc = function(e2, t2, r2) {
        return ya(e2, t2, r2);
      };
      function zr(e2) {
        return ii2(e2), xe(e2 < 0 ? 0 : Yr(e2) | 0);
      }
      T2.allocUnsafe = function(e2) {
        return zr(e2);
      };
      T2.allocUnsafeSlow = function(e2) {
        return zr(e2);
      };
      function wa(e2, t2) {
        if ((typeof t2 != "string" || t2 === "") && (t2 = "utf8"), !T2.isEncoding(t2))
          throw new TypeError("Unknown encoding: " + t2);
        let r2 = si(e2, t2) | 0, n2 = xe(r2), i2 = n2.write(e2, t2);
        return i2 !== r2 && (n2 = n2.slice(0, i2)), n2;
      }
      function Wr(e2) {
        let t2 = e2.length < 0 ? 0 : Yr(e2.length) | 0, r2 = xe(t2);
        for (let n2 = 0; n2 < t2; n2 += 1)
          r2[n2] = e2[n2] & 255;
        return r2;
      }
      function Ea(e2) {
        if (me(e2, Uint8Array)) {
          let t2 = new Uint8Array(e2);
          return oi(t2.buffer, t2.byteOffset, t2.byteLength);
        }
        return Wr(e2);
      }
      function oi(e2, t2, r2) {
        if (t2 < 0 || e2.byteLength < t2)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e2.byteLength < t2 + (r2 || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n2;
        return t2 === void 0 && r2 === void 0 ? n2 = new Uint8Array(e2) : r2 === void 0 ? n2 = new Uint8Array(e2, t2) : n2 = new Uint8Array(e2, t2, r2), Object.setPrototypeOf(n2, T2.prototype), n2;
      }
      function ba2(e2) {
        if (T2.isBuffer(e2)) {
          let t2 = Yr(e2.length) | 0, r2 = xe(t2);
          return r2.length === 0 || e2.copy(r2, 0, 0, t2), r2;
        }
        if (e2.length !== void 0)
          return typeof e2.length != "number" || Xr(e2.length) ? xe(0) : Wr(e2);
        if (e2.type === "Buffer" && Array.isArray(e2.data))
          return Wr(e2.data);
      }
      function Yr(e2) {
        if (e2 >= ir)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ir.toString(16) + " bytes");
        return e2 | 0;
      }
      function xa(e2) {
        return +e2 != e2 && (e2 = 0), T2.alloc(+e2);
      }
      T2.isBuffer = function(e2) {
        return e2 != null && e2._isBuffer === true && e2 !== T2.prototype;
      };
      T2.compare = function(e2, t2) {
        if (me(e2, Uint8Array) && (e2 = T2.from(e2, e2.offset, e2.byteLength)), me(t2, Uint8Array) && (t2 = T2.from(t2, t2.offset, t2.byteLength)), !T2.isBuffer(e2) || !T2.isBuffer(t2))
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e2 === t2)
          return 0;
        let r2 = e2.length, n2 = t2.length;
        for (let i2 = 0, o2 = Math.min(r2, n2); i2 < o2; ++i2)
          if (e2[i2] !== t2[i2]) {
            r2 = e2[i2], n2 = t2[i2];
            break;
          }
        return r2 < n2 ? -1 : n2 < r2 ? 1 : 0;
      };
      T2.isEncoding = function(e2) {
        switch (String(e2).toLowerCase()) {
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
      T2.concat = function(e2, t2) {
        if (!Array.isArray(e2))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (e2.length === 0)
          return T2.alloc(0);
        let r2;
        if (t2 === void 0)
          for (t2 = 0, r2 = 0; r2 < e2.length; ++r2)
            t2 += e2[r2].length;
        let n2 = T2.allocUnsafe(t2), i2 = 0;
        for (r2 = 0; r2 < e2.length; ++r2) {
          let o2 = e2[r2];
          if (me(o2, Uint8Array))
            i2 + o2.length > n2.length ? (T2.isBuffer(o2) || (o2 = T2.from(o2)), o2.copy(n2, i2)) : Uint8Array.prototype.set.call(n2, o2, i2);
          else if (T2.isBuffer(o2))
            o2.copy(n2, i2);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          i2 += o2.length;
        }
        return n2;
      };
      function si(e2, t2) {
        if (T2.isBuffer(e2))
          return e2.length;
        if (ArrayBuffer.isView(e2) || me(e2, ArrayBuffer))
          return e2.byteLength;
        if (typeof e2 != "string")
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e2);
        let r2 = e2.length, n2 = arguments.length > 2 && arguments[2] === true;
        if (!n2 && r2 === 0)
          return 0;
        let i2 = false;
        for (; ; )
          switch (t2) {
            case "ascii":
            case "latin1":
            case "binary":
              return r2;
            case "utf8":
            case "utf-8":
              return Kr(e2).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return r2 * 2;
            case "hex":
              return r2 >>> 1;
            case "base64":
              return gi(e2).length;
            default:
              if (i2)
                return n2 ? -1 : Kr(e2).length;
              t2 = ("" + t2).toLowerCase(), i2 = true;
          }
      }
      T2.byteLength = si;
      function Pa(e2, t2, r2) {
        let n2 = false;
        if ((t2 === void 0 || t2 < 0) && (t2 = 0), t2 > this.length || ((r2 === void 0 || r2 > this.length) && (r2 = this.length), r2 <= 0) || (r2 >>>= 0, t2 >>>= 0, r2 <= t2))
          return "";
        for (e2 || (e2 = "utf8"); ; )
          switch (e2) {
            case "hex":
              return Oa(this, t2, r2);
            case "utf8":
            case "utf-8":
              return ui(this, t2, r2);
            case "ascii":
              return Da(this, t2, r2);
            case "latin1":
            case "binary":
              return ka(this, t2, r2);
            case "base64":
              return Sa(this, t2, r2);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ma(this, t2, r2);
            default:
              if (n2)
                throw new TypeError("Unknown encoding: " + e2);
              e2 = (e2 + "").toLowerCase(), n2 = true;
          }
      }
      T2.prototype._isBuffer = true;
      function Ve(e2, t2, r2) {
        let n2 = e2[t2];
        e2[t2] = e2[r2], e2[r2] = n2;
      }
      T2.prototype.swap16 = function() {
        let e2 = this.length;
        if (e2 % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t2 = 0; t2 < e2; t2 += 2)
          Ve(this, t2, t2 + 1);
        return this;
      };
      T2.prototype.swap32 = function() {
        let e2 = this.length;
        if (e2 % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t2 = 0; t2 < e2; t2 += 4)
          Ve(this, t2, t2 + 3), Ve(this, t2 + 1, t2 + 2);
        return this;
      };
      T2.prototype.swap64 = function() {
        let e2 = this.length;
        if (e2 % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t2 = 0; t2 < e2; t2 += 8)
          Ve(this, t2, t2 + 7), Ve(this, t2 + 1, t2 + 6), Ve(this, t2 + 2, t2 + 5), Ve(this, t2 + 3, t2 + 4);
        return this;
      };
      T2.prototype.toString = function() {
        let e2 = this.length;
        return e2 === 0 ? "" : arguments.length === 0 ? ui(this, 0, e2) : Pa.apply(this, arguments);
      };
      T2.prototype.toLocaleString = T2.prototype.toString;
      T2.prototype.equals = function(e2) {
        if (!T2.isBuffer(e2))
          throw new TypeError("Argument must be a Buffer");
        return this === e2 ? true : T2.compare(this, e2) === 0;
      };
      T2.prototype.inspect = function() {
        let e2 = "", t2 = rt.INSPECT_MAX_BYTES;
        return e2 = this.toString("hex", 0, t2).replace(/(.{2})/g, "$1 ").trim(), this.length > t2 && (e2 += " ... "), "<Buffer " + e2 + ">";
      };
      Zn && (T2.prototype[Zn] = T2.prototype.inspect);
      T2.prototype.compare = function(e2, t2, r2, n2, i2) {
        if (me(e2, Uint8Array) && (e2 = T2.from(e2, e2.offset, e2.byteLength)), !T2.isBuffer(e2))
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e2);
        if (t2 === void 0 && (t2 = 0), r2 === void 0 && (r2 = e2 ? e2.length : 0), n2 === void 0 && (n2 = 0), i2 === void 0 && (i2 = this.length), t2 < 0 || r2 > e2.length || n2 < 0 || i2 > this.length)
          throw new RangeError("out of range index");
        if (n2 >= i2 && t2 >= r2)
          return 0;
        if (n2 >= i2)
          return -1;
        if (t2 >= r2)
          return 1;
        if (t2 >>>= 0, r2 >>>= 0, n2 >>>= 0, i2 >>>= 0, this === e2)
          return 0;
        let o2 = i2 - n2, s2 = r2 - t2, a2 = Math.min(o2, s2), u2 = this.slice(n2, i2), l2 = e2.slice(t2, r2);
        for (let g2 = 0; g2 < a2; ++g2)
          if (u2[g2] !== l2[g2]) {
            o2 = u2[g2], s2 = l2[g2];
            break;
          }
        return o2 < s2 ? -1 : s2 < o2 ? 1 : 0;
      };
      function ai2(e2, t2, r2, n2, i2) {
        if (e2.length === 0)
          return -1;
        if (typeof r2 == "string" ? (n2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), r2 = +r2, Xr(r2) && (r2 = i2 ? 0 : e2.length - 1), r2 < 0 && (r2 = e2.length + r2), r2 >= e2.length) {
          if (i2)
            return -1;
          r2 = e2.length - 1;
        } else if (r2 < 0)
          if (i2)
            r2 = 0;
          else
            return -1;
        if (typeof t2 == "string" && (t2 = T2.from(t2, n2)), T2.isBuffer(t2))
          return t2.length === 0 ? -1 : Xn(e2, t2, r2, n2, i2);
        if (typeof t2 == "number")
          return t2 = t2 & 255, typeof Uint8Array.prototype.indexOf == "function" ? i2 ? Uint8Array.prototype.indexOf.call(e2, t2, r2) : Uint8Array.prototype.lastIndexOf.call(e2, t2, r2) : Xn(e2, [t2], r2, n2, i2);
        throw new TypeError("val must be string, number or Buffer");
      }
      function Xn(e2, t2, r2, n2, i2) {
        let o2 = 1, s2 = e2.length, a2 = t2.length;
        if (n2 !== void 0 && (n2 = String(n2).toLowerCase(), n2 === "ucs2" || n2 === "ucs-2" || n2 === "utf16le" || n2 === "utf-16le")) {
          if (e2.length < 2 || t2.length < 2)
            return -1;
          o2 = 2, s2 /= 2, a2 /= 2, r2 /= 2;
        }
        function u2(g2, h2) {
          return o2 === 1 ? g2[h2] : g2.readUInt16BE(h2 * o2);
        }
        let l2;
        if (i2) {
          let g2 = -1;
          for (l2 = r2; l2 < s2; l2++)
            if (u2(e2, l2) === u2(t2, g2 === -1 ? 0 : l2 - g2)) {
              if (g2 === -1 && (g2 = l2), l2 - g2 + 1 === a2)
                return g2 * o2;
            } else
              g2 !== -1 && (l2 -= l2 - g2), g2 = -1;
        } else
          for (r2 + a2 > s2 && (r2 = s2 - a2), l2 = r2; l2 >= 0; l2--) {
            let g2 = true;
            for (let h2 = 0; h2 < a2; h2++)
              if (u2(e2, l2 + h2) !== u2(t2, h2)) {
                g2 = false;
                break;
              }
            if (g2)
              return l2;
          }
        return -1;
      }
      T2.prototype.includes = function(e2, t2, r2) {
        return this.indexOf(e2, t2, r2) !== -1;
      };
      T2.prototype.indexOf = function(e2, t2, r2) {
        return ai2(this, e2, t2, r2, true);
      };
      T2.prototype.lastIndexOf = function(e2, t2, r2) {
        return ai2(this, e2, t2, r2, false);
      };
      function va(e2, t2, r2, n2) {
        r2 = Number(r2) || 0;
        let i2 = e2.length - r2;
        n2 ? (n2 = Number(n2), n2 > i2 && (n2 = i2)) : n2 = i2;
        let o2 = t2.length;
        n2 > o2 / 2 && (n2 = o2 / 2);
        let s2;
        for (s2 = 0; s2 < n2; ++s2) {
          let a2 = parseInt(t2.substr(s2 * 2, 2), 16);
          if (Xr(a2))
            return s2;
          e2[r2 + s2] = a2;
        }
        return s2;
      }
      function Ta(e2, t2, r2, n2) {
        return or(Kr(t2, e2.length - r2), e2, r2, n2);
      }
      function Ca(e2, t2, r2, n2) {
        return or(La(t2), e2, r2, n2);
      }
      function Aa(e2, t2, r2, n2) {
        return or(gi(t2), e2, r2, n2);
      }
      function Ra(e2, t2, r2, n2) {
        return or(Ba(t2, e2.length - r2), e2, r2, n2);
      }
      T2.prototype.write = function(e2, t2, r2, n2) {
        if (t2 === void 0)
          n2 = "utf8", r2 = this.length, t2 = 0;
        else if (r2 === void 0 && typeof t2 == "string")
          n2 = t2, r2 = this.length, t2 = 0;
        else if (isFinite(t2))
          t2 = t2 >>> 0, isFinite(r2) ? (r2 = r2 >>> 0, n2 === void 0 && (n2 = "utf8")) : (n2 = r2, r2 = void 0);
        else
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let i2 = this.length - t2;
        if ((r2 === void 0 || r2 > i2) && (r2 = i2), e2.length > 0 && (r2 < 0 || t2 < 0) || t2 > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        n2 || (n2 = "utf8");
        let o2 = false;
        for (; ; )
          switch (n2) {
            case "hex":
              return va(this, e2, t2, r2);
            case "utf8":
            case "utf-8":
              return Ta(this, e2, t2, r2);
            case "ascii":
            case "latin1":
            case "binary":
              return Ca(this, e2, t2, r2);
            case "base64":
              return Aa(this, e2, t2, r2);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ra(this, e2, t2, r2);
            default:
              if (o2)
                throw new TypeError("Unknown encoding: " + n2);
              n2 = ("" + n2).toLowerCase(), o2 = true;
          }
      };
      T2.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function Sa(e2, t2, r2) {
        return t2 === 0 && r2 === e2.length ? Hr.fromByteArray(e2) : Hr.fromByteArray(e2.slice(t2, r2));
      }
      function ui(e2, t2, r2) {
        r2 = Math.min(e2.length, r2);
        let n2 = [], i2 = t2;
        for (; i2 < r2; ) {
          let o2 = e2[i2], s2 = null, a2 = o2 > 239 ? 4 : o2 > 223 ? 3 : o2 > 191 ? 2 : 1;
          if (i2 + a2 <= r2) {
            let u2, l2, g2, h2;
            switch (a2) {
              case 1:
                o2 < 128 && (s2 = o2);
                break;
              case 2:
                u2 = e2[i2 + 1], (u2 & 192) === 128 && (h2 = (o2 & 31) << 6 | u2 & 63, h2 > 127 && (s2 = h2));
                break;
              case 3:
                u2 = e2[i2 + 1], l2 = e2[i2 + 2], (u2 & 192) === 128 && (l2 & 192) === 128 && (h2 = (o2 & 15) << 12 | (u2 & 63) << 6 | l2 & 63, h2 > 2047 && (h2 < 55296 || h2 > 57343) && (s2 = h2));
                break;
              case 4:
                u2 = e2[i2 + 1], l2 = e2[i2 + 2], g2 = e2[i2 + 3], (u2 & 192) === 128 && (l2 & 192) === 128 && (g2 & 192) === 128 && (h2 = (o2 & 15) << 18 | (u2 & 63) << 12 | (l2 & 63) << 6 | g2 & 63, h2 > 65535 && h2 < 1114112 && (s2 = h2));
            }
          }
          s2 === null ? (s2 = 65533, a2 = 1) : s2 > 65535 && (s2 -= 65536, n2.push(s2 >>> 10 & 1023 | 55296), s2 = 56320 | s2 & 1023), n2.push(s2), i2 += a2;
        }
        return Ia(n2);
      }
      var ei = 4096;
      function Ia(e2) {
        let t2 = e2.length;
        if (t2 <= ei)
          return String.fromCharCode.apply(String, e2);
        let r2 = "", n2 = 0;
        for (; n2 < t2; )
          r2 += String.fromCharCode.apply(String, e2.slice(n2, n2 += ei));
        return r2;
      }
      function Da(e2, t2, r2) {
        let n2 = "";
        r2 = Math.min(e2.length, r2);
        for (let i2 = t2; i2 < r2; ++i2)
          n2 += String.fromCharCode(e2[i2] & 127);
        return n2;
      }
      function ka(e2, t2, r2) {
        let n2 = "";
        r2 = Math.min(e2.length, r2);
        for (let i2 = t2; i2 < r2; ++i2)
          n2 += String.fromCharCode(e2[i2]);
        return n2;
      }
      function Oa(e2, t2, r2) {
        let n2 = e2.length;
        (!t2 || t2 < 0) && (t2 = 0), (!r2 || r2 < 0 || r2 > n2) && (r2 = n2);
        let i2 = "";
        for (let o2 = t2; o2 < r2; ++o2)
          i2 += $a[e2[o2]];
        return i2;
      }
      function Ma(e2, t2, r2) {
        let n2 = e2.slice(t2, r2), i2 = "";
        for (let o2 = 0; o2 < n2.length - 1; o2 += 2)
          i2 += String.fromCharCode(n2[o2] + n2[o2 + 1] * 256);
        return i2;
      }
      T2.prototype.slice = function(e2, t2) {
        let r2 = this.length;
        e2 = ~~e2, t2 = t2 === void 0 ? r2 : ~~t2, e2 < 0 ? (e2 += r2, e2 < 0 && (e2 = 0)) : e2 > r2 && (e2 = r2), t2 < 0 ? (t2 += r2, t2 < 0 && (t2 = 0)) : t2 > r2 && (t2 = r2), t2 < e2 && (t2 = e2);
        let n2 = this.subarray(e2, t2);
        return Object.setPrototypeOf(n2, T2.prototype), n2;
      };
      function W2(e2, t2, r2) {
        if (e2 % 1 !== 0 || e2 < 0)
          throw new RangeError("offset is not uint");
        if (e2 + t2 > r2)
          throw new RangeError("Trying to access beyond buffer length");
      }
      T2.prototype.readUintLE = T2.prototype.readUIntLE = function(e2, t2, r2) {
        e2 = e2 >>> 0, t2 = t2 >>> 0, r2 || W2(e2, t2, this.length);
        let n2 = this[e2], i2 = 1, o2 = 0;
        for (; ++o2 < t2 && (i2 *= 256); )
          n2 += this[e2 + o2] * i2;
        return n2;
      };
      T2.prototype.readUintBE = T2.prototype.readUIntBE = function(e2, t2, r2) {
        e2 = e2 >>> 0, t2 = t2 >>> 0, r2 || W2(e2, t2, this.length);
        let n2 = this[e2 + --t2], i2 = 1;
        for (; t2 > 0 && (i2 *= 256); )
          n2 += this[e2 + --t2] * i2;
        return n2;
      };
      T2.prototype.readUint8 = T2.prototype.readUInt8 = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 1, this.length), this[e2];
      };
      T2.prototype.readUint16LE = T2.prototype.readUInt16LE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 2, this.length), this[e2] | this[e2 + 1] << 8;
      };
      T2.prototype.readUint16BE = T2.prototype.readUInt16BE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 2, this.length), this[e2] << 8 | this[e2 + 1];
      };
      T2.prototype.readUint32LE = T2.prototype.readUInt32LE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 4, this.length), (this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16) + this[e2 + 3] * 16777216;
      };
      T2.prototype.readUint32BE = T2.prototype.readUInt32BE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 4, this.length), this[e2] * 16777216 + (this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3]);
      };
      T2.prototype.readBigUInt64LE = Ie(function(e2) {
        e2 = e2 >>> 0, tt(e2, "offset");
        let t2 = this[e2], r2 = this[e2 + 7];
        (t2 === void 0 || r2 === void 0) && Tt(e2, this.length - 8);
        let n2 = t2 + this[++e2] * 2 ** 8 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 24, i2 = this[++e2] + this[++e2] * 2 ** 8 + this[++e2] * 2 ** 16 + r2 * 2 ** 24;
        return BigInt(n2) + (BigInt(i2) << BigInt(32));
      });
      T2.prototype.readBigUInt64BE = Ie(function(e2) {
        e2 = e2 >>> 0, tt(e2, "offset");
        let t2 = this[e2], r2 = this[e2 + 7];
        (t2 === void 0 || r2 === void 0) && Tt(e2, this.length - 8);
        let n2 = t2 * 2 ** 24 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 8 + this[++e2], i2 = this[++e2] * 2 ** 24 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 8 + r2;
        return (BigInt(n2) << BigInt(32)) + BigInt(i2);
      });
      T2.prototype.readIntLE = function(e2, t2, r2) {
        e2 = e2 >>> 0, t2 = t2 >>> 0, r2 || W2(e2, t2, this.length);
        let n2 = this[e2], i2 = 1, o2 = 0;
        for (; ++o2 < t2 && (i2 *= 256); )
          n2 += this[e2 + o2] * i2;
        return i2 *= 128, n2 >= i2 && (n2 -= Math.pow(2, 8 * t2)), n2;
      };
      T2.prototype.readIntBE = function(e2, t2, r2) {
        e2 = e2 >>> 0, t2 = t2 >>> 0, r2 || W2(e2, t2, this.length);
        let n2 = t2, i2 = 1, o2 = this[e2 + --n2];
        for (; n2 > 0 && (i2 *= 256); )
          o2 += this[e2 + --n2] * i2;
        return i2 *= 128, o2 >= i2 && (o2 -= Math.pow(2, 8 * t2)), o2;
      };
      T2.prototype.readInt8 = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 1, this.length), this[e2] & 128 ? (255 - this[e2] + 1) * -1 : this[e2];
      };
      T2.prototype.readInt16LE = function(e2, t2) {
        e2 = e2 >>> 0, t2 || W2(e2, 2, this.length);
        let r2 = this[e2] | this[e2 + 1] << 8;
        return r2 & 32768 ? r2 | 4294901760 : r2;
      };
      T2.prototype.readInt16BE = function(e2, t2) {
        e2 = e2 >>> 0, t2 || W2(e2, 2, this.length);
        let r2 = this[e2 + 1] | this[e2] << 8;
        return r2 & 32768 ? r2 | 4294901760 : r2;
      };
      T2.prototype.readInt32LE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 4, this.length), this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16 | this[e2 + 3] << 24;
      };
      T2.prototype.readInt32BE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 4, this.length), this[e2] << 24 | this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3];
      };
      T2.prototype.readBigInt64LE = Ie(function(e2) {
        e2 = e2 >>> 0, tt(e2, "offset");
        let t2 = this[e2], r2 = this[e2 + 7];
        (t2 === void 0 || r2 === void 0) && Tt(e2, this.length - 8);
        let n2 = this[e2 + 4] + this[e2 + 5] * 2 ** 8 + this[e2 + 6] * 2 ** 16 + (r2 << 24);
        return (BigInt(n2) << BigInt(32)) + BigInt(t2 + this[++e2] * 2 ** 8 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 24);
      });
      T2.prototype.readBigInt64BE = Ie(function(e2) {
        e2 = e2 >>> 0, tt(e2, "offset");
        let t2 = this[e2], r2 = this[e2 + 7];
        (t2 === void 0 || r2 === void 0) && Tt(e2, this.length - 8);
        let n2 = (t2 << 24) + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 8 + this[++e2];
        return (BigInt(n2) << BigInt(32)) + BigInt(this[++e2] * 2 ** 24 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 8 + r2);
      });
      T2.prototype.readFloatLE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 4, this.length), et.read(this, e2, true, 23, 4);
      };
      T2.prototype.readFloatBE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 4, this.length), et.read(this, e2, false, 23, 4);
      };
      T2.prototype.readDoubleLE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 8, this.length), et.read(this, e2, true, 52, 8);
      };
      T2.prototype.readDoubleBE = function(e2, t2) {
        return e2 = e2 >>> 0, t2 || W2(e2, 8, this.length), et.read(this, e2, false, 52, 8);
      };
      function ie(e2, t2, r2, n2, i2, o2) {
        if (!T2.isBuffer(e2))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t2 > i2 || t2 < o2)
          throw new RangeError('"value" argument is out of bounds');
        if (r2 + n2 > e2.length)
          throw new RangeError("Index out of range");
      }
      T2.prototype.writeUintLE = T2.prototype.writeUIntLE = function(e2, t2, r2, n2) {
        if (e2 = +e2, t2 = t2 >>> 0, r2 = r2 >>> 0, !n2) {
          let s2 = Math.pow(2, 8 * r2) - 1;
          ie(this, e2, t2, r2, s2, 0);
        }
        let i2 = 1, o2 = 0;
        for (this[t2] = e2 & 255; ++o2 < r2 && (i2 *= 256); )
          this[t2 + o2] = e2 / i2 & 255;
        return t2 + r2;
      };
      T2.prototype.writeUintBE = T2.prototype.writeUIntBE = function(e2, t2, r2, n2) {
        if (e2 = +e2, t2 = t2 >>> 0, r2 = r2 >>> 0, !n2) {
          let s2 = Math.pow(2, 8 * r2) - 1;
          ie(this, e2, t2, r2, s2, 0);
        }
        let i2 = r2 - 1, o2 = 1;
        for (this[t2 + i2] = e2 & 255; --i2 >= 0 && (o2 *= 256); )
          this[t2 + i2] = e2 / o2 & 255;
        return t2 + r2;
      };
      T2.prototype.writeUint8 = T2.prototype.writeUInt8 = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 1, 255, 0), this[t2] = e2 & 255, t2 + 1;
      };
      T2.prototype.writeUint16LE = T2.prototype.writeUInt16LE = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 2, 65535, 0), this[t2] = e2 & 255, this[t2 + 1] = e2 >>> 8, t2 + 2;
      };
      T2.prototype.writeUint16BE = T2.prototype.writeUInt16BE = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 2, 65535, 0), this[t2] = e2 >>> 8, this[t2 + 1] = e2 & 255, t2 + 2;
      };
      T2.prototype.writeUint32LE = T2.prototype.writeUInt32LE = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 4, 4294967295, 0), this[t2 + 3] = e2 >>> 24, this[t2 + 2] = e2 >>> 16, this[t2 + 1] = e2 >>> 8, this[t2] = e2 & 255, t2 + 4;
      };
      T2.prototype.writeUint32BE = T2.prototype.writeUInt32BE = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 4, 4294967295, 0), this[t2] = e2 >>> 24, this[t2 + 1] = e2 >>> 16, this[t2 + 2] = e2 >>> 8, this[t2 + 3] = e2 & 255, t2 + 4;
      };
      function li(e2, t2, r2, n2, i2) {
        di(t2, n2, i2, e2, r2, 7);
        let o2 = Number(t2 & BigInt(4294967295));
        e2[r2++] = o2, o2 = o2 >> 8, e2[r2++] = o2, o2 = o2 >> 8, e2[r2++] = o2, o2 = o2 >> 8, e2[r2++] = o2;
        let s2 = Number(t2 >> BigInt(32) & BigInt(4294967295));
        return e2[r2++] = s2, s2 = s2 >> 8, e2[r2++] = s2, s2 = s2 >> 8, e2[r2++] = s2, s2 = s2 >> 8, e2[r2++] = s2, r2;
      }
      function ci2(e2, t2, r2, n2, i2) {
        di(t2, n2, i2, e2, r2, 7);
        let o2 = Number(t2 & BigInt(4294967295));
        e2[r2 + 7] = o2, o2 = o2 >> 8, e2[r2 + 6] = o2, o2 = o2 >> 8, e2[r2 + 5] = o2, o2 = o2 >> 8, e2[r2 + 4] = o2;
        let s2 = Number(t2 >> BigInt(32) & BigInt(4294967295));
        return e2[r2 + 3] = s2, s2 = s2 >> 8, e2[r2 + 2] = s2, s2 = s2 >> 8, e2[r2 + 1] = s2, s2 = s2 >> 8, e2[r2] = s2, r2 + 8;
      }
      T2.prototype.writeBigUInt64LE = Ie(function(e2, t2 = 0) {
        return li(this, e2, t2, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T2.prototype.writeBigUInt64BE = Ie(function(e2, t2 = 0) {
        return ci2(this, e2, t2, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T2.prototype.writeIntLE = function(e2, t2, r2, n2) {
        if (e2 = +e2, t2 = t2 >>> 0, !n2) {
          let a2 = Math.pow(2, 8 * r2 - 1);
          ie(this, e2, t2, r2, a2 - 1, -a2);
        }
        let i2 = 0, o2 = 1, s2 = 0;
        for (this[t2] = e2 & 255; ++i2 < r2 && (o2 *= 256); )
          e2 < 0 && s2 === 0 && this[t2 + i2 - 1] !== 0 && (s2 = 1), this[t2 + i2] = (e2 / o2 >> 0) - s2 & 255;
        return t2 + r2;
      };
      T2.prototype.writeIntBE = function(e2, t2, r2, n2) {
        if (e2 = +e2, t2 = t2 >>> 0, !n2) {
          let a2 = Math.pow(2, 8 * r2 - 1);
          ie(this, e2, t2, r2, a2 - 1, -a2);
        }
        let i2 = r2 - 1, o2 = 1, s2 = 0;
        for (this[t2 + i2] = e2 & 255; --i2 >= 0 && (o2 *= 256); )
          e2 < 0 && s2 === 0 && this[t2 + i2 + 1] !== 0 && (s2 = 1), this[t2 + i2] = (e2 / o2 >> 0) - s2 & 255;
        return t2 + r2;
      };
      T2.prototype.writeInt8 = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 1, 127, -128), e2 < 0 && (e2 = 255 + e2 + 1), this[t2] = e2 & 255, t2 + 1;
      };
      T2.prototype.writeInt16LE = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 2, 32767, -32768), this[t2] = e2 & 255, this[t2 + 1] = e2 >>> 8, t2 + 2;
      };
      T2.prototype.writeInt16BE = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 2, 32767, -32768), this[t2] = e2 >>> 8, this[t2 + 1] = e2 & 255, t2 + 2;
      };
      T2.prototype.writeInt32LE = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 4, 2147483647, -2147483648), this[t2] = e2 & 255, this[t2 + 1] = e2 >>> 8, this[t2 + 2] = e2 >>> 16, this[t2 + 3] = e2 >>> 24, t2 + 4;
      };
      T2.prototype.writeInt32BE = function(e2, t2, r2) {
        return e2 = +e2, t2 = t2 >>> 0, r2 || ie(this, e2, t2, 4, 2147483647, -2147483648), e2 < 0 && (e2 = 4294967295 + e2 + 1), this[t2] = e2 >>> 24, this[t2 + 1] = e2 >>> 16, this[t2 + 2] = e2 >>> 8, this[t2 + 3] = e2 & 255, t2 + 4;
      };
      T2.prototype.writeBigInt64LE = Ie(function(e2, t2 = 0) {
        return li(this, e2, t2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      T2.prototype.writeBigInt64BE = Ie(function(e2, t2 = 0) {
        return ci2(this, e2, t2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function pi(e2, t2, r2, n2, i2, o2) {
        if (r2 + n2 > e2.length)
          throw new RangeError("Index out of range");
        if (r2 < 0)
          throw new RangeError("Index out of range");
      }
      function fi(e2, t2, r2, n2, i2) {
        return t2 = +t2, r2 = r2 >>> 0, i2 || pi(e2, t2, r2, 4, 34028234663852886e22, -34028234663852886e22), et.write(e2, t2, r2, n2, 23, 4), r2 + 4;
      }
      T2.prototype.writeFloatLE = function(e2, t2, r2) {
        return fi(this, e2, t2, true, r2);
      };
      T2.prototype.writeFloatBE = function(e2, t2, r2) {
        return fi(this, e2, t2, false, r2);
      };
      function mi(e2, t2, r2, n2, i2) {
        return t2 = +t2, r2 = r2 >>> 0, i2 || pi(e2, t2, r2, 8, 17976931348623157e292, -17976931348623157e292), et.write(e2, t2, r2, n2, 52, 8), r2 + 8;
      }
      T2.prototype.writeDoubleLE = function(e2, t2, r2) {
        return mi(this, e2, t2, true, r2);
      };
      T2.prototype.writeDoubleBE = function(e2, t2, r2) {
        return mi(this, e2, t2, false, r2);
      };
      T2.prototype.copy = function(e2, t2, r2, n2) {
        if (!T2.isBuffer(e2))
          throw new TypeError("argument should be a Buffer");
        if (r2 || (r2 = 0), !n2 && n2 !== 0 && (n2 = this.length), t2 >= e2.length && (t2 = e2.length), t2 || (t2 = 0), n2 > 0 && n2 < r2 && (n2 = r2), n2 === r2 || e2.length === 0 || this.length === 0)
          return 0;
        if (t2 < 0)
          throw new RangeError("targetStart out of bounds");
        if (r2 < 0 || r2 >= this.length)
          throw new RangeError("Index out of range");
        if (n2 < 0)
          throw new RangeError("sourceEnd out of bounds");
        n2 > this.length && (n2 = this.length), e2.length - t2 < n2 - r2 && (n2 = e2.length - t2 + r2);
        let i2 = n2 - r2;
        return this === e2 && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t2, r2, n2) : Uint8Array.prototype.set.call(e2, this.subarray(r2, n2), t2), i2;
      };
      T2.prototype.fill = function(e2, t2, r2, n2) {
        if (typeof e2 == "string") {
          if (typeof t2 == "string" ? (n2 = t2, t2 = 0, r2 = this.length) : typeof r2 == "string" && (n2 = r2, r2 = this.length), n2 !== void 0 && typeof n2 != "string")
            throw new TypeError("encoding must be a string");
          if (typeof n2 == "string" && !T2.isEncoding(n2))
            throw new TypeError("Unknown encoding: " + n2);
          if (e2.length === 1) {
            let o2 = e2.charCodeAt(0);
            (n2 === "utf8" && o2 < 128 || n2 === "latin1") && (e2 = o2);
          }
        } else
          typeof e2 == "number" ? e2 = e2 & 255 : typeof e2 == "boolean" && (e2 = Number(e2));
        if (t2 < 0 || this.length < t2 || this.length < r2)
          throw new RangeError("Out of range index");
        if (r2 <= t2)
          return this;
        t2 = t2 >>> 0, r2 = r2 === void 0 ? this.length : r2 >>> 0, e2 || (e2 = 0);
        let i2;
        if (typeof e2 == "number")
          for (i2 = t2; i2 < r2; ++i2)
            this[i2] = e2;
        else {
          let o2 = T2.isBuffer(e2) ? e2 : T2.from(e2, n2), s2 = o2.length;
          if (s2 === 0)
            throw new TypeError('The value "' + e2 + '" is invalid for argument "value"');
          for (i2 = 0; i2 < r2 - t2; ++i2)
            this[i2 + t2] = o2[i2 % s2];
        }
        return this;
      };
      var Xe = {};
      function Zr(e2, t2, r2) {
        Xe[e2] = class extends r2 {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t2.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e2}]`, this.stack, delete this.name;
          }
          get code() {
            return e2;
          }
          set code(n2) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n2, writable: true });
          }
          toString() {
            return `${this.name} [${e2}]: ${this.message}`;
          }
        };
      }
      Zr("ERR_BUFFER_OUT_OF_BOUNDS", function(e2) {
        return e2 ? `${e2} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      Zr("ERR_INVALID_ARG_TYPE", function(e2, t2) {
        return `The "${e2}" argument must be of type number. Received type ${typeof t2}`;
      }, TypeError);
      Zr("ERR_OUT_OF_RANGE", function(e2, t2, r2) {
        let n2 = `The value of "${e2}" is out of range.`, i2 = r2;
        return Number.isInteger(r2) && Math.abs(r2) > 2 ** 32 ? i2 = ti(String(r2)) : typeof r2 == "bigint" && (i2 = String(r2), (r2 > BigInt(2) ** BigInt(32) || r2 < -(BigInt(2) ** BigInt(32))) && (i2 = ti(i2)), i2 += "n"), n2 += ` It must be ${t2}. Received ${i2}`, n2;
      }, RangeError);
      function ti(e2) {
        let t2 = "", r2 = e2.length, n2 = e2[0] === "-" ? 1 : 0;
        for (; r2 >= n2 + 4; r2 -= 3)
          t2 = `_${e2.slice(r2 - 3, r2)}${t2}`;
        return `${e2.slice(0, r2)}${t2}`;
      }
      function Na(e2, t2, r2) {
        tt(t2, "offset"), (e2[t2] === void 0 || e2[t2 + r2] === void 0) && Tt(t2, e2.length - (r2 + 1));
      }
      function di(e2, t2, r2, n2, i2, o2) {
        if (e2 > r2 || e2 < t2) {
          let s2 = typeof t2 == "bigint" ? "n" : "", a2;
          throw o2 > 3 ? t2 === 0 || t2 === BigInt(0) ? a2 = `>= 0${s2} and < 2${s2} ** ${(o2 + 1) * 8}${s2}` : a2 = `>= -(2${s2} ** ${(o2 + 1) * 8 - 1}${s2}) and < 2 ** ${(o2 + 1) * 8 - 1}${s2}` : a2 = `>= ${t2}${s2} and <= ${r2}${s2}`, new Xe.ERR_OUT_OF_RANGE("value", a2, e2);
        }
        Na(n2, i2, o2);
      }
      function tt(e2, t2) {
        if (typeof e2 != "number")
          throw new Xe.ERR_INVALID_ARG_TYPE(t2, "number", e2);
      }
      function Tt(e2, t2, r2) {
        throw Math.floor(e2) !== e2 ? (tt(e2, r2), new Xe.ERR_OUT_OF_RANGE(r2 || "offset", "an integer", e2)) : t2 < 0 ? new Xe.ERR_BUFFER_OUT_OF_BOUNDS() : new Xe.ERR_OUT_OF_RANGE(r2 || "offset", `>= ${r2 ? 1 : 0} and <= ${t2}`, e2);
      }
      var _a = /[^+/0-9A-Za-z-_]/g;
      function Fa(e2) {
        if (e2 = e2.split("=")[0], e2 = e2.trim().replace(_a, ""), e2.length < 2)
          return "";
        for (; e2.length % 4 !== 0; )
          e2 = e2 + "=";
        return e2;
      }
      function Kr(e2, t2) {
        t2 = t2 || 1 / 0;
        let r2, n2 = e2.length, i2 = null, o2 = [];
        for (let s2 = 0; s2 < n2; ++s2) {
          if (r2 = e2.charCodeAt(s2), r2 > 55295 && r2 < 57344) {
            if (!i2) {
              if (r2 > 56319) {
                (t2 -= 3) > -1 && o2.push(239, 191, 189);
                continue;
              } else if (s2 + 1 === n2) {
                (t2 -= 3) > -1 && o2.push(239, 191, 189);
                continue;
              }
              i2 = r2;
              continue;
            }
            if (r2 < 56320) {
              (t2 -= 3) > -1 && o2.push(239, 191, 189), i2 = r2;
              continue;
            }
            r2 = (i2 - 55296 << 10 | r2 - 56320) + 65536;
          } else
            i2 && (t2 -= 3) > -1 && o2.push(239, 191, 189);
          if (i2 = null, r2 < 128) {
            if ((t2 -= 1) < 0)
              break;
            o2.push(r2);
          } else if (r2 < 2048) {
            if ((t2 -= 2) < 0)
              break;
            o2.push(r2 >> 6 | 192, r2 & 63 | 128);
          } else if (r2 < 65536) {
            if ((t2 -= 3) < 0)
              break;
            o2.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, r2 & 63 | 128);
          } else if (r2 < 1114112) {
            if ((t2 -= 4) < 0)
              break;
            o2.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, r2 & 63 | 128);
          } else
            throw new Error("Invalid code point");
        }
        return o2;
      }
      function La(e2) {
        let t2 = [];
        for (let r2 = 0; r2 < e2.length; ++r2)
          t2.push(e2.charCodeAt(r2) & 255);
        return t2;
      }
      function Ba(e2, t2) {
        let r2, n2, i2, o2 = [];
        for (let s2 = 0; s2 < e2.length && !((t2 -= 2) < 0); ++s2)
          r2 = e2.charCodeAt(s2), n2 = r2 >> 8, i2 = r2 % 256, o2.push(i2), o2.push(n2);
        return o2;
      }
      function gi(e2) {
        return Hr.toByteArray(Fa(e2));
      }
      function or(e2, t2, r2, n2) {
        let i2;
        for (i2 = 0; i2 < n2 && !(i2 + r2 >= t2.length || i2 >= e2.length); ++i2)
          t2[i2 + r2] = e2[i2];
        return i2;
      }
      function me(e2, t2) {
        return e2 instanceof t2 || e2 != null && e2.constructor != null && e2.constructor.name != null && e2.constructor.name === t2.name;
      }
      function Xr(e2) {
        return e2 !== e2;
      }
      var $a = function() {
        let e2 = "0123456789abcdef", t2 = new Array(256);
        for (let r2 = 0; r2 < 16; ++r2) {
          let n2 = r2 * 16;
          for (let i2 = 0; i2 < 16; ++i2)
            t2[n2 + i2] = e2[r2] + e2[i2];
        }
        return t2;
      }();
      function Ie(e2) {
        return typeof BigInt > "u" ? qa : e2;
      }
      function qa() {
        throw new Error("BigInt not supported");
      }
    });
    var w2;
    var d2 = be2(() => {
      "use strict";
      w2 = Ue(hi());
    });
    function Ua() {
      return false;
    }
    var Va;
    var ja;
    var bi2;
    var xi = be2(() => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      Va = {}, ja = { existsSync: Ua, promises: Va }, bi2 = ja;
    });
    var Mi = Se((df, Oi) => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      Oi.exports = (on(), Gr(nn)).format;
    });
    var nn = {};
    vt(nn, { default: () => Ga, deprecate: () => _i, format: () => Li, inspect: () => Fi, promisify: () => Ni });
    function Ni(e2) {
      return (...t2) => new Promise((r2, n2) => {
        e2(...t2, (i2, o2) => {
          i2 ? n2(i2) : r2(o2);
        });
      });
    }
    function _i(e2, t2) {
      return (...r2) => (console.warn(t2), e2(...r2));
    }
    function Fi(e2) {
      return JSON.stringify(e2, (t2, r2) => typeof r2 == "function" ? r2.toString() : typeof r2 == "bigint" ? `${r2}n` : r2 instanceof Error ? { ...r2, message: r2.message, stack: r2.stack } : r2);
    }
    var Li;
    var Qa;
    var Ga;
    var on = be2(() => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      Li = Mi(), Qa = { promisify: Ni, deprecate: _i, inspect: Fi, format: Li }, Ga = Qa;
    });
    function Ya(...e2) {
      return e2.join("/");
    }
    function Za(...e2) {
      return e2.join("/");
    }
    var Ji;
    var Xa;
    var eu;
    var At;
    var Qi = be2(() => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      Ji = "/", Xa = { sep: Ji }, eu = { resolve: Ya, posix: Xa, join: Za, sep: Ji }, At = eu;
    });
    var lr;
    var Hi = be2(() => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      lr = class {
        constructor() {
          this.events = {};
        }
        on(t2, r2) {
          return this.events[t2] || (this.events[t2] = []), this.events[t2].push(r2), this;
        }
        emit(t2, ...r2) {
          return this.events[t2] ? (this.events[t2].forEach((n2) => {
            n2(...r2);
          }), true) : false;
        }
      };
    });
    var Ki = Se((Em, Wi) => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      Wi.exports = (e2, t2 = 1, r2) => {
        if (r2 = { indent: " ", includeEmptyLines: false, ...r2 }, typeof e2 != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e2}\``);
        if (typeof t2 != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t2}\``);
        if (typeof r2.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r2.indent}\``);
        if (t2 === 0)
          return e2;
        let n2 = r2.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e2.replace(n2, r2.indent.repeat(t2));
      };
    });
    var Zi = Se((km, Yi) => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      Yi.exports = ({ onlyFirst: e2 = false } = {}) => {
        let t2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t2, e2 ? void 0 : "g");
      };
    });
    var eo = Se((Lm, Xi) => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      var su = Zi();
      Xi.exports = (e2) => typeof e2 == "string" ? e2.replace(su(), "") : e2;
    });
    var io = Se((Mh, cu) => {
      cu.exports = { name: "@prisma/engines-version", version: "5.15.0-29.12e25d8d06f6ea5a0252864dd9a03b1bb51f3022", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.33", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var oo = Se(() => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
    });
    var Un = Se((aR2, ys) => {
      "use strict";
      d2();
      c2();
      p2();
      f2();
      m2();
      ys.exports = function() {
        function e2(t2, r2, n2, i2, o2) {
          return t2 < r2 || n2 < r2 ? t2 > n2 ? n2 + 1 : t2 + 1 : i2 === o2 ? r2 : r2 + 1;
        }
        return function(t2, r2) {
          if (t2 === r2)
            return 0;
          if (t2.length > r2.length) {
            var n2 = t2;
            t2 = r2, r2 = n2;
          }
          for (var i2 = t2.length, o2 = r2.length; i2 > 0 && t2.charCodeAt(i2 - 1) === r2.charCodeAt(o2 - 1); )
            i2--, o2--;
          for (var s2 = 0; s2 < i2 && t2.charCodeAt(s2) === r2.charCodeAt(s2); )
            s2++;
          if (i2 -= s2, o2 -= s2, i2 === 0 || o2 < 3)
            return o2;
          var a2 = 0, u2, l2, g2, h2, x2, S2, C2, A2, k2, O2, B2, M2, I2 = [];
          for (u2 = 0; u2 < i2; u2++)
            I2.push(u2 + 1), I2.push(t2.charCodeAt(s2 + u2));
          for (var X2 = I2.length - 1; a2 < o2 - 3; )
            for (k2 = r2.charCodeAt(s2 + (l2 = a2)), O2 = r2.charCodeAt(s2 + (g2 = a2 + 1)), B2 = r2.charCodeAt(s2 + (h2 = a2 + 2)), M2 = r2.charCodeAt(s2 + (x2 = a2 + 3)), S2 = a2 += 4, u2 = 0; u2 < X2; u2 += 2)
              C2 = I2[u2], A2 = I2[u2 + 1], l2 = e2(C2, l2, g2, k2, A2), g2 = e2(l2, g2, h2, O2, A2), h2 = e2(g2, h2, x2, B2, A2), S2 = e2(h2, x2, S2, M2, A2), I2[u2] = S2, x2 = h2, h2 = g2, g2 = l2, l2 = C2;
          for (; a2 < o2; )
            for (k2 = r2.charCodeAt(s2 + (l2 = a2)), S2 = ++a2, u2 = 0; u2 < X2; u2 += 2)
              C2 = I2[u2], I2[u2] = S2 = e2(C2, l2, S2, k2, I2[u2 + 1]), l2 = C2;
          return S2;
        };
      }();
    });
    var Hc = {};
    vt(Hc, { Debug: () => an2, Decimal: () => ye, Extensions: () => en, MetricsClient: () => st, NotFoundError: () => Pe, PrismaClientInitializationError: () => G2, PrismaClientKnownRequestError: () => K2, PrismaClientRustPanicError: () => ve, PrismaClientUnknownRequestError: () => oe, PrismaClientValidationError: () => Y2, Public: () => tn, Sql: () => se, defineDmmfProperty: () => no, empty: () => ao2, getPrismaClient: () => sa, getRuntime: () => Mr, join: () => so, makeStrictEnum: () => aa2, objectEnumValues: () => pr, raw: () => yn, sqltag: () => wn, warnEnvConflicts: () => void 0, warnOnce: () => It });
    module.exports = Gr(Hc);
    d2();
    c2();
    p2();
    f2();
    m2();
    var en = {};
    vt(en, { defineExtension: () => yi, getExtensionContext: () => wi });
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function yi(e2) {
      return typeof e2 == "function" ? e2 : (t2) => t2.$extends(e2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function wi(e2) {
      return e2;
    }
    var tn = {};
    vt(tn, { validator: () => Ei });
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function Ei(...e2) {
      return (t2) => t2;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var rn;
    var Pi;
    var vi;
    var Ti;
    var Ci = true;
    typeof y2 != "undefined" && ({ FORCE_COLOR: rn, NODE_DISABLE_COLORS: Pi, NO_COLOR: vi, TERM: Ti } = y2.env || {}, Ci = y2.stdout && y2.stdout.isTTY);
    var Ja = { enabled: !Pi && vi == null && Ti !== "dumb" && (rn != null && rn !== "0" || Ci) };
    function V2(e2, t2) {
      let r2 = new RegExp(`\\x1b\\[${t2}m`, "g"), n2 = `\x1B[${e2}m`, i2 = `\x1B[${t2}m`;
      return function(o2) {
        return !Ja.enabled || o2 == null ? o2 : n2 + (~("" + o2).indexOf(i2) ? o2.replace(r2, i2 + n2) : o2) + i2;
      };
    }
    var Jp = V2(0, 0);
    var sr = V2(1, 22);
    var ar2 = V2(2, 22);
    var Qp = V2(3, 23);
    var Ai = V2(4, 24);
    var Gp = V2(7, 27);
    var Hp = V2(8, 28);
    var Wp = V2(9, 29);
    var Kp = V2(30, 39);
    var nt = V2(31, 39);
    var Ri = V2(32, 39);
    var Si = V2(33, 39);
    var Ii = V2(34, 39);
    var zp = V2(35, 39);
    var Di = V2(36, 39);
    var Yp = V2(37, 39);
    var ki = V2(90, 39);
    var Zp = V2(90, 39);
    var Xp = V2(40, 49);
    var ef = V2(41, 49);
    var tf = V2(42, 49);
    var rf = V2(43, 49);
    var nf = V2(44, 49);
    var of = V2(45, 49);
    var sf = V2(46, 49);
    var af2 = V2(47, 49);
    d2();
    c2();
    p2();
    f2();
    m2();
    var Ha = 100;
    var Bi = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var ur = [];
    var $i = Date.now();
    var Wa = 0;
    var sn = typeof y2 != "undefined" ? y2.env : {};
    var qi;
    var Ui;
    (Ui = globalThis.DEBUG) != null || (globalThis.DEBUG = (qi = sn.DEBUG) != null ? qi : "");
    var Vi;
    (Vi = globalThis.DEBUG_COLORS) != null || (globalThis.DEBUG_COLORS = sn.DEBUG_COLORS ? sn.DEBUG_COLORS === "true" : true);
    var Ct = { enable(e2) {
      typeof e2 == "string" && (globalThis.DEBUG = e2);
    }, disable() {
      let e2 = globalThis.DEBUG;
      return globalThis.DEBUG = "", e2;
    }, enabled(e2) {
      let t2 = globalThis.DEBUG.split(",").map((i2) => i2.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r2 = t2.some((i2) => i2 === "" || i2[0] === "-" ? false : e2.match(RegExp(i2.split("*").join(".*") + "$"))), n2 = t2.some((i2) => i2 === "" || i2[0] !== "-" ? false : e2.match(RegExp(i2.slice(1).split("*").join(".*") + "$")));
      return r2 && !n2;
    }, log: (...e2) => {
      var o2;
      let [t2, r2, ...n2] = e2, i2;
      typeof __require == "function" && typeof y2 != "undefined" && typeof y2.stderr != "undefined" && typeof y2.stderr.write == "function" ? i2 = (...s2) => {
        var a2;
        try {
          let u2 = (on(), Gr(nn));
          y2.stderr.write(u2.format(...s2) + `
`);
        } catch (u2) {
          i2 = (a2 = console.warn) != null ? a2 : console.log;
        }
      } : i2 = (o2 = console.warn) != null ? o2 : console.log, i2(`${t2} ${r2}`, ...n2);
    }, formatters: {} };
    function Ka(e2) {
      let t2 = { color: Bi[Wa++ % Bi.length], enabled: Ct.enabled(e2), namespace: e2, log: Ct.log, extend: () => {
      } }, r2 = (...n2) => {
        let { enabled: i2, namespace: o2, color: s2, log: a2 } = t2;
        if (n2.length !== 0 && ur.push([o2, ...n2]), ur.length > Ha && ur.shift(), Ct.enabled(o2) || i2) {
          let u2 = n2.map((g2) => typeof g2 == "string" ? g2 : za(g2)), l2 = `+${Date.now() - $i}ms`;
          $i = Date.now(), a2(o2, ...u2, l2);
        }
      };
      return new Proxy(r2, { get: (n2, i2) => t2[i2], set: (n2, i2, o2) => t2[i2] = o2 });
    }
    var an2 = new Proxy(Ka, { get: (e2, t2) => Ct[t2], set: (e2, t2, r2) => Ct[t2] = r2 });
    function za(e2, t2 = 2) {
      let r2 = /* @__PURE__ */ new Set();
      return JSON.stringify(e2, (n2, i2) => {
        if (typeof i2 == "object" && i2 !== null) {
          if (r2.has(i2))
            return "[Circular *]";
          r2.add(i2);
        } else if (typeof i2 == "bigint")
          return i2.toString();
        return i2;
      }, t2);
    }
    function ji() {
      ur.length = 0;
    }
    var re = an2;
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var Gi = "library";
    function Rt(e2) {
      let t2 = tu();
      return t2 || ((e2 == null ? void 0 : e2.config.engineType) === "library" ? "library" : (e2 == null ? void 0 : e2.config.engineType) === "binary" ? "binary" : Gi);
    }
    function tu() {
      let e2 = y2.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e2 === "library" ? "library" : e2 === "binary" ? "binary" : void 0;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var De;
    ((t2) => {
      let e2;
      ((I2) => (I2.findUnique = "findUnique", I2.findUniqueOrThrow = "findUniqueOrThrow", I2.findFirst = "findFirst", I2.findFirstOrThrow = "findFirstOrThrow", I2.findMany = "findMany", I2.create = "create", I2.createMany = "createMany", I2.createManyAndReturn = "createManyAndReturn", I2.update = "update", I2.updateMany = "updateMany", I2.upsert = "upsert", I2.delete = "delete", I2.deleteMany = "deleteMany", I2.groupBy = "groupBy", I2.count = "count", I2.aggregate = "aggregate", I2.findRaw = "findRaw", I2.aggregateRaw = "aggregateRaw"))(e2 = t2.ModelAction || (t2.ModelAction = {}));
    })(De || (De = {}));
    var it = {};
    vt(it, { error: () => iu, info: () => nu, log: () => ru, query: () => ou, should: () => zi, tags: () => St, warn: () => un });
    d2();
    c2();
    p2();
    f2();
    m2();
    var St = { error: nt("prisma:error"), warn: Si("prisma:warn"), info: Di("prisma:info"), query: Ii("prisma:query") };
    var zi = { warn: () => !y2.env.PRISMA_DISABLE_WARNINGS };
    function ru(...e2) {
      console.log(...e2);
    }
    function un(e2, ...t2) {
      zi.warn() && console.warn(`${St.warn} ${e2}`, ...t2);
    }
    function nu(e2, ...t2) {
      console.info(`${St.info} ${e2}`, ...t2);
    }
    function iu(e2, ...t2) {
      console.error(`${St.error} ${e2}`, ...t2);
    }
    function ou(e2, ...t2) {
      console.log(`${St.query} ${e2}`, ...t2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function je(e2, t2) {
      throw new Error(t2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function ln(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var cn2 = (e2, t2) => e2.reduce((r2, n2) => (r2[t2(n2)] = n2, r2), {});
    d2();
    c2();
    p2();
    f2();
    m2();
    function ot(e2, t2) {
      let r2 = {};
      for (let n2 of Object.keys(e2))
        r2[n2] = t2(e2[n2], n2);
      return r2;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function pn(e2, t2) {
      if (e2.length === 0)
        return;
      let r2 = e2[0];
      for (let n2 = 1; n2 < e2.length; n2++)
        t2(r2, e2[n2]) < 0 && (r2 = e2[n2]);
      return r2;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function _(e2, t2) {
      Object.defineProperty(e2, "name", { value: t2, configurable: true });
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var to = /* @__PURE__ */ new Set();
    var It = (e2, t2, ...r2) => {
      to.has(e2) || (to.add(e2), un(t2, ...r2));
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var K2 = class extends Error {
      constructor(t2, { code: r2, clientVersion: n2, meta: i2, batchRequestIdx: o2 }) {
        super(t2), this.name = "PrismaClientKnownRequestError", this.code = r2, this.clientVersion = n2, this.meta = i2, Object.defineProperty(this, "batchRequestIdx", { value: o2, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    _(K2, "PrismaClientKnownRequestError");
    var Pe = class extends K2 {
      constructor(t2, r2) {
        super(t2, { code: "P2025", clientVersion: r2 }), this.name = "NotFoundError";
      }
    };
    _(Pe, "NotFoundError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var G2 = class e2 extends Error {
      constructor(t2, r2, n2) {
        super(t2), this.name = "PrismaClientInitializationError", this.clientVersion = r2, this.errorCode = n2, Error.captureStackTrace(e2);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    _(G2, "PrismaClientInitializationError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var ve = class extends Error {
      constructor(t2, r2) {
        super(t2), this.name = "PrismaClientRustPanicError", this.clientVersion = r2;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    _(ve, "PrismaClientRustPanicError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var oe = class extends Error {
      constructor(t2, { clientVersion: r2, batchRequestIdx: n2 }) {
        super(t2), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r2, Object.defineProperty(this, "batchRequestIdx", { value: n2, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    _(oe, "PrismaClientUnknownRequestError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var Y2 = class extends Error {
      constructor(r2, { clientVersion: n2 }) {
        super(r2);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n2;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    _(Y2, "PrismaClientValidationError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var st = class {
      constructor(t2) {
        this._engine = t2;
      }
      prometheus(t2) {
        return this._engine.metrics({ format: "prometheus", ...t2 });
      }
      json(t2) {
        return this._engine.metrics({ format: "json", ...t2 });
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function Dt(e2) {
      let t2;
      return { get() {
        return t2 || (t2 = { value: e2() }), t2.value;
      } };
    }
    function no(e2, t2) {
      let r2 = Dt(() => au2(t2));
      Object.defineProperty(e2, "dmmf", { get: () => r2.get() });
    }
    function au2(e2) {
      return { datamodel: { models: fn(e2.models), enums: fn(e2.enums), types: fn(e2.types) } };
    }
    function fn(e2) {
      return Object.entries(e2).map(([t2, r2]) => ({ name: t2, ...r2 }));
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var cr2 = Symbol();
    var mn = /* @__PURE__ */ new WeakMap();
    var Te = class {
      constructor(t2) {
        t2 === cr2 ? mn.set(this, `Prisma.${this._getName()}`) : mn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return mn.get(this);
      }
    };
    var kt = class extends Te {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var Ot = class extends kt {
    };
    dn(Ot, "DbNull");
    var Mt = class extends kt {
    };
    dn(Mt, "JsonNull");
    var Nt = class extends kt {
    };
    dn(Nt, "AnyNull");
    var pr = { classes: { DbNull: Ot, JsonNull: Mt, AnyNull: Nt }, instances: { DbNull: new Ot(cr2), JsonNull: new Mt(cr2), AnyNull: new Nt(cr2) } };
    function dn(e2, t2) {
      Object.defineProperty(e2, "name", { value: t2, configurable: true });
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function _t(e2) {
      return { ok: false, error: e2, map() {
        return _t(e2);
      }, flatMap() {
        return _t(e2);
      } };
    }
    var gn = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t2) {
        return this.registeredErrors[t2];
      }
      registerNewError(t2) {
        let r2 = 0;
        for (; this.registeredErrors[r2] !== void 0; )
          r2++;
        return this.registeredErrors[r2] = { error: t2 }, r2;
      }
    };
    var hn = (e2) => {
      let t2 = new gn(), r2 = Je(t2, e2.startTransaction.bind(e2)), n2 = { adapterName: e2.adapterName, errorRegistry: t2, queryRaw: Je(t2, e2.queryRaw.bind(e2)), executeRaw: Je(t2, e2.executeRaw.bind(e2)), provider: e2.provider, startTransaction: async (...i2) => (await r2(...i2)).map((s2) => uu(t2, s2)) };
      return e2.getConnectionInfo && (n2.getConnectionInfo = lu(t2, e2.getConnectionInfo.bind(e2))), n2;
    };
    var uu = (e2, t2) => ({ adapterName: t2.adapterName, provider: t2.provider, options: t2.options, queryRaw: Je(e2, t2.queryRaw.bind(t2)), executeRaw: Je(e2, t2.executeRaw.bind(t2)), commit: Je(e2, t2.commit.bind(t2)), rollback: Je(e2, t2.rollback.bind(t2)) });
    function Je(e2, t2) {
      return async (...r2) => {
        try {
          return await t2(...r2);
        } catch (n2) {
          let i2 = e2.registerNewError(n2);
          return _t({ kind: "GenericJs", id: i2 });
        }
      };
    }
    function lu(e2, t2) {
      return (...r2) => {
        try {
          return t2(...r2);
        } catch (n2) {
          let i2 = e2.registerNewError(n2);
          return _t({ kind: "GenericJs", id: i2 });
        }
      };
    }
    var oa = Ue(io());
    var gk = Ue(oo());
    Hi();
    xi();
    Qi();
    d2();
    c2();
    p2();
    f2();
    m2();
    var se = class e2 {
      constructor(t2, r2) {
        if (t2.length - 1 !== r2.length)
          throw t2.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t2.length} strings to have ${t2.length - 1} values`);
        let n2 = r2.reduce((s2, a2) => s2 + (a2 instanceof e2 ? a2.values.length : 1), 0);
        this.values = new Array(n2), this.strings = new Array(n2 + 1), this.strings[0] = t2[0];
        let i2 = 0, o2 = 0;
        for (; i2 < r2.length; ) {
          let s2 = r2[i2++], a2 = t2[i2];
          if (s2 instanceof e2) {
            this.strings[o2] += s2.strings[0];
            let u2 = 0;
            for (; u2 < s2.values.length; )
              this.values[o2++] = s2.values[u2++], this.strings[o2] = s2.strings[u2];
            this.strings[o2] += a2;
          } else
            this.values[o2++] = s2, this.strings[o2] = a2;
        }
      }
      get sql() {
        let t2 = this.strings.length, r2 = 1, n2 = this.strings[0];
        for (; r2 < t2; )
          n2 += `?${this.strings[r2++]}`;
        return n2;
      }
      get statement() {
        let t2 = this.strings.length, r2 = 1, n2 = this.strings[0];
        for (; r2 < t2; )
          n2 += `:${r2}${this.strings[r2++]}`;
        return n2;
      }
      get text() {
        let t2 = this.strings.length, r2 = 1, n2 = this.strings[0];
        for (; r2 < t2; )
          n2 += `$${r2}${this.strings[r2++]}`;
        return n2;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function so(e2, t2 = ",", r2 = "", n2 = "") {
      if (e2.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new se([r2, ...Array(e2.length - 1).fill(t2), n2], e2);
    }
    function yn(e2) {
      return new se([e2], []);
    }
    var ao2 = yn("");
    function wn(e2, ...t2) {
      return new se(e2, t2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function Ft(e2) {
      return { getKeys() {
        return Object.keys(e2);
      }, getPropertyValue(t2) {
        return e2[t2];
      } };
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function ne(e2, t2) {
      return { getKeys() {
        return [e2];
      }, getPropertyValue() {
        return t2();
      } };
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var de = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t2) {
        var r2;
        return (r2 = this._map.get(t2)) == null ? void 0 : r2.value;
      }
      set(t2, r2) {
        this._map.set(t2, { value: r2 });
      }
      getOrCreate(t2, r2) {
        let n2 = this._map.get(t2);
        if (n2)
          return n2.value;
        let i2 = r2();
        return this.set(t2, i2), i2;
      }
    };
    function Qe(e2) {
      let t2 = new de();
      return { getKeys() {
        return e2.getKeys();
      }, getPropertyValue(r2) {
        return t2.getOrCreate(r2, () => e2.getPropertyValue(r2));
      }, getPropertyDescriptor(r2) {
        var n2;
        return (n2 = e2.getPropertyDescriptor) == null ? void 0 : n2.call(e2, r2);
      } };
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var fr = { enumerable: true, configurable: true, writable: true };
    function mr(e2) {
      let t2 = new Set(e2);
      return { getOwnPropertyDescriptor: () => fr, has: (r2, n2) => t2.has(n2), set: (r2, n2, i2) => t2.add(n2) && Reflect.set(r2, n2, i2), ownKeys: () => [...t2] };
    }
    var uo = Symbol.for("nodejs.util.inspect.custom");
    function ge(e2, t2) {
      let r2 = pu(t2), n2 = /* @__PURE__ */ new Set(), i2 = new Proxy(e2, { get(o2, s2) {
        if (n2.has(s2))
          return o2[s2];
        let a2 = r2.get(s2);
        return a2 ? a2.getPropertyValue(s2) : o2[s2];
      }, has(o2, s2) {
        var u2, l2;
        if (n2.has(s2))
          return true;
        let a2 = r2.get(s2);
        return a2 ? (l2 = (u2 = a2.has) == null ? void 0 : u2.call(a2, s2)) != null ? l2 : true : Reflect.has(o2, s2);
      }, ownKeys(o2) {
        let s2 = lo(Reflect.ownKeys(o2), r2), a2 = lo(Array.from(r2.keys()), r2);
        return [.../* @__PURE__ */ new Set([...s2, ...a2, ...n2])];
      }, set(o2, s2, a2) {
        var l2, g2;
        let u2 = r2.get(s2);
        return ((g2 = (l2 = u2 == null ? void 0 : u2.getPropertyDescriptor) == null ? void 0 : l2.call(u2, s2)) == null ? void 0 : g2.writable) === false ? false : (n2.add(s2), Reflect.set(o2, s2, a2));
      }, getOwnPropertyDescriptor(o2, s2) {
        let a2 = Reflect.getOwnPropertyDescriptor(o2, s2);
        if (a2 && !a2.configurable)
          return a2;
        let u2 = r2.get(s2);
        return u2 ? u2.getPropertyDescriptor ? { ...fr, ...u2 == null ? void 0 : u2.getPropertyDescriptor(s2) } : fr : a2;
      }, defineProperty(o2, s2, a2) {
        return n2.add(s2), Reflect.defineProperty(o2, s2, a2);
      } });
      return i2[uo] = function() {
        let o2 = { ...this };
        return delete o2[uo], o2;
      }, i2;
    }
    function pu(e2) {
      let t2 = /* @__PURE__ */ new Map();
      for (let r2 of e2) {
        let n2 = r2.getKeys();
        for (let i2 of n2)
          t2.set(i2, r2);
      }
      return t2;
    }
    function lo(e2, t2) {
      return e2.filter((r2) => {
        var i2, o2;
        let n2 = t2.get(r2);
        return (o2 = (i2 = n2 == null ? void 0 : n2.has) == null ? void 0 : i2.call(n2, r2)) != null ? o2 : true;
      });
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function at2(e2) {
      return { getKeys() {
        return e2;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function dr(e2, t2) {
      return { batch: e2, transaction: (t2 == null ? void 0 : t2.kind) === "batch" ? { isolationLevel: t2.options.isolationLevel } : void 0 };
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var ut = class {
      constructor(t2 = 0, r2) {
        this.context = r2;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t2;
      }
      write(t2) {
        return typeof t2 == "string" ? this.currentLine += t2 : t2.write(this), this;
      }
      writeJoined(t2, r2) {
        let n2 = r2.length - 1;
        for (let i2 = 0; i2 < r2.length; i2++)
          this.write(r2[i2]), i2 !== n2 && this.write(t2);
        return this;
      }
      writeLine(t2) {
        return this.write(t2).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t2 = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t2 == null || t2(), this;
      }
      withIndent(t2) {
        return this.indent(), t2(this), this.unindent(), this;
      }
      afterNextNewline(t2) {
        return this.afterNextNewLineCallback = t2, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t2) {
        return this.marginSymbol = t2, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t2 = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t2.slice(1) : t2;
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function co2(e2) {
      return e2.substring(0, 1).toLowerCase() + e2.substring(1);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function lt(e2) {
      return e2 instanceof Date || Object.prototype.toString.call(e2) === "[object Date]";
    }
    function gr(e2) {
      return e2.toString() !== "Invalid Date";
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var ct2 = 9e15;
    var Ne = 1e9;
    var En = "0123456789abcdef";
    var yr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var wr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var bn2 = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -ct2, maxE: ct2, crypto: false };
    var go;
    var Ce;
    var F2 = true;
    var br2 = "[DecimalError] ";
    var Me = br2 + "Invalid argument: ";
    var ho = br2 + "Precision limit exceeded";
    var yo = br2 + "crypto unavailable";
    var wo = "[object Decimal]";
    var te = Math.floor;
    var H2 = Math.pow;
    var fu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var mu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var du = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Eo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var pe = 1e7;
    var N2 = 7;
    var gu = 9007199254740991;
    var hu = yr.length - 1;
    var xn = wr.length - 1;
    var R2 = { toStringTag: wo };
    R2.absoluteValue = R2.abs = function() {
      var e2 = new this.constructor(this);
      return e2.s < 0 && (e2.s = 1), D2(e2);
    };
    R2.ceil = function() {
      return D2(new this.constructor(this), this.e + 1, 2);
    };
    R2.clampedTo = R2.clamp = function(e2, t2) {
      var r2, n2 = this, i2 = n2.constructor;
      if (e2 = new i2(e2), t2 = new i2(t2), !e2.s || !t2.s)
        return new i2(NaN);
      if (e2.gt(t2))
        throw Error(Me + t2);
      return r2 = n2.cmp(e2), r2 < 0 ? e2 : n2.cmp(t2) > 0 ? t2 : new i2(n2);
    };
    R2.comparedTo = R2.cmp = function(e2) {
      var t2, r2, n2, i2, o2 = this, s2 = o2.d, a2 = (e2 = new o2.constructor(e2)).d, u2 = o2.s, l2 = e2.s;
      if (!s2 || !a2)
        return !u2 || !l2 ? NaN : u2 !== l2 ? u2 : s2 === a2 ? 0 : !s2 ^ u2 < 0 ? 1 : -1;
      if (!s2[0] || !a2[0])
        return s2[0] ? u2 : a2[0] ? -l2 : 0;
      if (u2 !== l2)
        return u2;
      if (o2.e !== e2.e)
        return o2.e > e2.e ^ u2 < 0 ? 1 : -1;
      for (n2 = s2.length, i2 = a2.length, t2 = 0, r2 = n2 < i2 ? n2 : i2; t2 < r2; ++t2)
        if (s2[t2] !== a2[t2])
          return s2[t2] > a2[t2] ^ u2 < 0 ? 1 : -1;
      return n2 === i2 ? 0 : n2 > i2 ^ u2 < 0 ? 1 : -1;
    };
    R2.cosine = R2.cos = function() {
      var e2, t2, r2 = this, n2 = r2.constructor;
      return r2.d ? r2.d[0] ? (e2 = n2.precision, t2 = n2.rounding, n2.precision = e2 + Math.max(r2.e, r2.sd()) + N2, n2.rounding = 1, r2 = yu(n2, To(n2, r2)), n2.precision = e2, n2.rounding = t2, D2(Ce == 2 || Ce == 3 ? r2.neg() : r2, e2, t2, true)) : new n2(1) : new n2(NaN);
    };
    R2.cubeRoot = R2.cbrt = function() {
      var e2, t2, r2, n2, i2, o2, s2, a2, u2, l2, g2 = this, h2 = g2.constructor;
      if (!g2.isFinite() || g2.isZero())
        return new h2(g2);
      for (F2 = false, o2 = g2.s * H2(g2.s * g2, 1 / 3), !o2 || Math.abs(o2) == 1 / 0 ? (r2 = Z2(g2.d), e2 = g2.e, (o2 = (e2 - r2.length + 1) % 3) && (r2 += o2 == 1 || o2 == -2 ? "0" : "00"), o2 = H2(r2, 1 / 3), e2 = te((e2 + 1) / 3) - (e2 % 3 == (e2 < 0 ? -1 : 2)), o2 == 1 / 0 ? r2 = "5e" + e2 : (r2 = o2.toExponential(), r2 = r2.slice(0, r2.indexOf("e") + 1) + e2), n2 = new h2(r2), n2.s = g2.s) : n2 = new h2(o2.toString()), s2 = (e2 = h2.precision) + 3; ; )
        if (a2 = n2, u2 = a2.times(a2).times(a2), l2 = u2.plus(g2), n2 = q2(l2.plus(g2).times(a2), l2.plus(u2), s2 + 2, 1), Z2(a2.d).slice(0, s2) === (r2 = Z2(n2.d)).slice(0, s2))
          if (r2 = r2.slice(s2 - 3, s2 + 1), r2 == "9999" || !i2 && r2 == "4999") {
            if (!i2 && (D2(a2, e2 + 1, 0), a2.times(a2).times(a2).eq(g2))) {
              n2 = a2;
              break;
            }
            s2 += 4, i2 = 1;
          } else {
            (!+r2 || !+r2.slice(1) && r2.charAt(0) == "5") && (D2(n2, e2 + 1, 1), t2 = !n2.times(n2).times(n2).eq(g2));
            break;
          }
      return F2 = true, D2(n2, e2, h2.rounding, t2);
    };
    R2.decimalPlaces = R2.dp = function() {
      var e2, t2 = this.d, r2 = NaN;
      if (t2) {
        if (e2 = t2.length - 1, r2 = (e2 - te(this.e / N2)) * N2, e2 = t2[e2], e2)
          for (; e2 % 10 == 0; e2 /= 10)
            r2--;
        r2 < 0 && (r2 = 0);
      }
      return r2;
    };
    R2.dividedBy = R2.div = function(e2) {
      return q2(this, new this.constructor(e2));
    };
    R2.dividedToIntegerBy = R2.divToInt = function(e2) {
      var t2 = this, r2 = t2.constructor;
      return D2(q2(t2, new r2(e2), 0, 1, 1), r2.precision, r2.rounding);
    };
    R2.equals = R2.eq = function(e2) {
      return this.cmp(e2) === 0;
    };
    R2.floor = function() {
      return D2(new this.constructor(this), this.e + 1, 3);
    };
    R2.greaterThan = R2.gt = function(e2) {
      return this.cmp(e2) > 0;
    };
    R2.greaterThanOrEqualTo = R2.gte = function(e2) {
      var t2 = this.cmp(e2);
      return t2 == 1 || t2 === 0;
    };
    R2.hyperbolicCosine = R2.cosh = function() {
      var e2, t2, r2, n2, i2, o2 = this, s2 = o2.constructor, a2 = new s2(1);
      if (!o2.isFinite())
        return new s2(o2.s ? 1 / 0 : NaN);
      if (o2.isZero())
        return a2;
      r2 = s2.precision, n2 = s2.rounding, s2.precision = r2 + Math.max(o2.e, o2.sd()) + 4, s2.rounding = 1, i2 = o2.d.length, i2 < 32 ? (e2 = Math.ceil(i2 / 3), t2 = (1 / Pr(4, e2)).toString()) : (e2 = 16, t2 = "2.3283064365386962890625e-10"), o2 = pt(s2, 1, o2.times(t2), new s2(1), true);
      for (var u2, l2 = e2, g2 = new s2(8); l2--; )
        u2 = o2.times(o2), o2 = a2.minus(u2.times(g2.minus(u2.times(g2))));
      return D2(o2, s2.precision = r2, s2.rounding = n2, true);
    };
    R2.hyperbolicSine = R2.sinh = function() {
      var e2, t2, r2, n2, i2 = this, o2 = i2.constructor;
      if (!i2.isFinite() || i2.isZero())
        return new o2(i2);
      if (t2 = o2.precision, r2 = o2.rounding, o2.precision = t2 + Math.max(i2.e, i2.sd()) + 4, o2.rounding = 1, n2 = i2.d.length, n2 < 3)
        i2 = pt(o2, 2, i2, i2, true);
      else {
        e2 = 1.4 * Math.sqrt(n2), e2 = e2 > 16 ? 16 : e2 | 0, i2 = i2.times(1 / Pr(5, e2)), i2 = pt(o2, 2, i2, i2, true);
        for (var s2, a2 = new o2(5), u2 = new o2(16), l2 = new o2(20); e2--; )
          s2 = i2.times(i2), i2 = i2.times(a2.plus(s2.times(u2.times(s2).plus(l2))));
      }
      return o2.precision = t2, o2.rounding = r2, D2(i2, t2, r2, true);
    };
    R2.hyperbolicTangent = R2.tanh = function() {
      var e2, t2, r2 = this, n2 = r2.constructor;
      return r2.isFinite() ? r2.isZero() ? new n2(r2) : (e2 = n2.precision, t2 = n2.rounding, n2.precision = e2 + 7, n2.rounding = 1, q2(r2.sinh(), r2.cosh(), n2.precision = e2, n2.rounding = t2)) : new n2(r2.s);
    };
    R2.inverseCosine = R2.acos = function() {
      var e2, t2 = this, r2 = t2.constructor, n2 = t2.abs().cmp(1), i2 = r2.precision, o2 = r2.rounding;
      return n2 !== -1 ? n2 === 0 ? t2.isNeg() ? ce2(r2, i2, o2) : new r2(0) : new r2(NaN) : t2.isZero() ? ce2(r2, i2 + 4, o2).times(0.5) : (r2.precision = i2 + 6, r2.rounding = 1, t2 = t2.asin(), e2 = ce2(r2, i2 + 4, o2).times(0.5), r2.precision = i2, r2.rounding = o2, e2.minus(t2));
    };
    R2.inverseHyperbolicCosine = R2.acosh = function() {
      var e2, t2, r2 = this, n2 = r2.constructor;
      return r2.lte(1) ? new n2(r2.eq(1) ? 0 : NaN) : r2.isFinite() ? (e2 = n2.precision, t2 = n2.rounding, n2.precision = e2 + Math.max(Math.abs(r2.e), r2.sd()) + 4, n2.rounding = 1, F2 = false, r2 = r2.times(r2).minus(1).sqrt().plus(r2), F2 = true, n2.precision = e2, n2.rounding = t2, r2.ln()) : new n2(r2);
    };
    R2.inverseHyperbolicSine = R2.asinh = function() {
      var e2, t2, r2 = this, n2 = r2.constructor;
      return !r2.isFinite() || r2.isZero() ? new n2(r2) : (e2 = n2.precision, t2 = n2.rounding, n2.precision = e2 + 2 * Math.max(Math.abs(r2.e), r2.sd()) + 6, n2.rounding = 1, F2 = false, r2 = r2.times(r2).plus(1).sqrt().plus(r2), F2 = true, n2.precision = e2, n2.rounding = t2, r2.ln());
    };
    R2.inverseHyperbolicTangent = R2.atanh = function() {
      var e2, t2, r2, n2, i2 = this, o2 = i2.constructor;
      return i2.isFinite() ? i2.e >= 0 ? new o2(i2.abs().eq(1) ? i2.s / 0 : i2.isZero() ? i2 : NaN) : (e2 = o2.precision, t2 = o2.rounding, n2 = i2.sd(), Math.max(n2, e2) < 2 * -i2.e - 1 ? D2(new o2(i2), e2, t2, true) : (o2.precision = r2 = n2 - i2.e, i2 = q2(i2.plus(1), new o2(1).minus(i2), r2 + e2, 1), o2.precision = e2 + 4, o2.rounding = 1, i2 = i2.ln(), o2.precision = e2, o2.rounding = t2, i2.times(0.5))) : new o2(NaN);
    };
    R2.inverseSine = R2.asin = function() {
      var e2, t2, r2, n2, i2 = this, o2 = i2.constructor;
      return i2.isZero() ? new o2(i2) : (t2 = i2.abs().cmp(1), r2 = o2.precision, n2 = o2.rounding, t2 !== -1 ? t2 === 0 ? (e2 = ce2(o2, r2 + 4, n2).times(0.5), e2.s = i2.s, e2) : new o2(NaN) : (o2.precision = r2 + 6, o2.rounding = 1, i2 = i2.div(new o2(1).minus(i2.times(i2)).sqrt().plus(1)).atan(), o2.precision = r2, o2.rounding = n2, i2.times(2)));
    };
    R2.inverseTangent = R2.atan = function() {
      var e2, t2, r2, n2, i2, o2, s2, a2, u2, l2 = this, g2 = l2.constructor, h2 = g2.precision, x2 = g2.rounding;
      if (l2.isFinite()) {
        if (l2.isZero())
          return new g2(l2);
        if (l2.abs().eq(1) && h2 + 4 <= xn)
          return s2 = ce2(g2, h2 + 4, x2).times(0.25), s2.s = l2.s, s2;
      } else {
        if (!l2.s)
          return new g2(NaN);
        if (h2 + 4 <= xn)
          return s2 = ce2(g2, h2 + 4, x2).times(0.5), s2.s = l2.s, s2;
      }
      for (g2.precision = a2 = h2 + 10, g2.rounding = 1, r2 = Math.min(28, a2 / N2 + 2 | 0), e2 = r2; e2; --e2)
        l2 = l2.div(l2.times(l2).plus(1).sqrt().plus(1));
      for (F2 = false, t2 = Math.ceil(a2 / N2), n2 = 1, u2 = l2.times(l2), s2 = new g2(l2), i2 = l2; e2 !== -1; )
        if (i2 = i2.times(u2), o2 = s2.minus(i2.div(n2 += 2)), i2 = i2.times(u2), s2 = o2.plus(i2.div(n2 += 2)), s2.d[t2] !== void 0)
          for (e2 = t2; s2.d[e2] === o2.d[e2] && e2--; )
            ;
      return r2 && (s2 = s2.times(2 << r2 - 1)), F2 = true, D2(s2, g2.precision = h2, g2.rounding = x2, true);
    };
    R2.isFinite = function() {
      return !!this.d;
    };
    R2.isInteger = R2.isInt = function() {
      return !!this.d && te(this.e / N2) > this.d.length - 2;
    };
    R2.isNaN = function() {
      return !this.s;
    };
    R2.isNegative = R2.isNeg = function() {
      return this.s < 0;
    };
    R2.isPositive = R2.isPos = function() {
      return this.s > 0;
    };
    R2.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    R2.lessThan = R2.lt = function(e2) {
      return this.cmp(e2) < 0;
    };
    R2.lessThanOrEqualTo = R2.lte = function(e2) {
      return this.cmp(e2) < 1;
    };
    R2.logarithm = R2.log = function(e2) {
      var t2, r2, n2, i2, o2, s2, a2, u2, l2 = this, g2 = l2.constructor, h2 = g2.precision, x2 = g2.rounding, S2 = 5;
      if (e2 == null)
        e2 = new g2(10), t2 = true;
      else {
        if (e2 = new g2(e2), r2 = e2.d, e2.s < 0 || !r2 || !r2[0] || e2.eq(1))
          return new g2(NaN);
        t2 = e2.eq(10);
      }
      if (r2 = l2.d, l2.s < 0 || !r2 || !r2[0] || l2.eq(1))
        return new g2(r2 && !r2[0] ? -1 / 0 : l2.s != 1 ? NaN : r2 ? 0 : 1 / 0);
      if (t2)
        if (r2.length > 1)
          o2 = true;
        else {
          for (i2 = r2[0]; i2 % 10 === 0; )
            i2 /= 10;
          o2 = i2 !== 1;
        }
      if (F2 = false, a2 = h2 + S2, s2 = Oe(l2, a2), n2 = t2 ? Er(g2, a2 + 10) : Oe(e2, a2), u2 = q2(s2, n2, a2, 1), Lt(u2.d, i2 = h2, x2))
        do
          if (a2 += 10, s2 = Oe(l2, a2), n2 = t2 ? Er(g2, a2 + 10) : Oe(e2, a2), u2 = q2(s2, n2, a2, 1), !o2) {
            +Z2(u2.d).slice(i2 + 1, i2 + 15) + 1 == 1e14 && (u2 = D2(u2, h2 + 1, 0));
            break;
          }
        while (Lt(u2.d, i2 += 10, x2));
      return F2 = true, D2(u2, h2, x2);
    };
    R2.minus = R2.sub = function(e2) {
      var t2, r2, n2, i2, o2, s2, a2, u2, l2, g2, h2, x2, S2 = this, C2 = S2.constructor;
      if (e2 = new C2(e2), !S2.d || !e2.d)
        return !S2.s || !e2.s ? e2 = new C2(NaN) : S2.d ? e2.s = -e2.s : e2 = new C2(e2.d || S2.s !== e2.s ? S2 : NaN), e2;
      if (S2.s != e2.s)
        return e2.s = -e2.s, S2.plus(e2);
      if (l2 = S2.d, x2 = e2.d, a2 = C2.precision, u2 = C2.rounding, !l2[0] || !x2[0]) {
        if (x2[0])
          e2.s = -e2.s;
        else if (l2[0])
          e2 = new C2(S2);
        else
          return new C2(u2 === 3 ? -0 : 0);
        return F2 ? D2(e2, a2, u2) : e2;
      }
      if (r2 = te(e2.e / N2), g2 = te(S2.e / N2), l2 = l2.slice(), o2 = g2 - r2, o2) {
        for (h2 = o2 < 0, h2 ? (t2 = l2, o2 = -o2, s2 = x2.length) : (t2 = x2, r2 = g2, s2 = l2.length), n2 = Math.max(Math.ceil(a2 / N2), s2) + 2, o2 > n2 && (o2 = n2, t2.length = 1), t2.reverse(), n2 = o2; n2--; )
          t2.push(0);
        t2.reverse();
      } else {
        for (n2 = l2.length, s2 = x2.length, h2 = n2 < s2, h2 && (s2 = n2), n2 = 0; n2 < s2; n2++)
          if (l2[n2] != x2[n2]) {
            h2 = l2[n2] < x2[n2];
            break;
          }
        o2 = 0;
      }
      for (h2 && (t2 = l2, l2 = x2, x2 = t2, e2.s = -e2.s), s2 = l2.length, n2 = x2.length - s2; n2 > 0; --n2)
        l2[s2++] = 0;
      for (n2 = x2.length; n2 > o2; ) {
        if (l2[--n2] < x2[n2]) {
          for (i2 = n2; i2 && l2[--i2] === 0; )
            l2[i2] = pe - 1;
          --l2[i2], l2[n2] += pe;
        }
        l2[n2] -= x2[n2];
      }
      for (; l2[--s2] === 0; )
        l2.pop();
      for (; l2[0] === 0; l2.shift())
        --r2;
      return l2[0] ? (e2.d = l2, e2.e = xr(l2, r2), F2 ? D2(e2, a2, u2) : e2) : new C2(u2 === 3 ? -0 : 0);
    };
    R2.modulo = R2.mod = function(e2) {
      var t2, r2 = this, n2 = r2.constructor;
      return e2 = new n2(e2), !r2.d || !e2.s || e2.d && !e2.d[0] ? new n2(NaN) : !e2.d || r2.d && !r2.d[0] ? D2(new n2(r2), n2.precision, n2.rounding) : (F2 = false, n2.modulo == 9 ? (t2 = q2(r2, e2.abs(), 0, 3, 1), t2.s *= e2.s) : t2 = q2(r2, e2, 0, n2.modulo, 1), t2 = t2.times(e2), F2 = true, r2.minus(t2));
    };
    R2.naturalExponential = R2.exp = function() {
      return Pn(this);
    };
    R2.naturalLogarithm = R2.ln = function() {
      return Oe(this);
    };
    R2.negated = R2.neg = function() {
      var e2 = new this.constructor(this);
      return e2.s = -e2.s, D2(e2);
    };
    R2.plus = R2.add = function(e2) {
      var t2, r2, n2, i2, o2, s2, a2, u2, l2, g2, h2 = this, x2 = h2.constructor;
      if (e2 = new x2(e2), !h2.d || !e2.d)
        return !h2.s || !e2.s ? e2 = new x2(NaN) : h2.d || (e2 = new x2(e2.d || h2.s === e2.s ? h2 : NaN)), e2;
      if (h2.s != e2.s)
        return e2.s = -e2.s, h2.minus(e2);
      if (l2 = h2.d, g2 = e2.d, a2 = x2.precision, u2 = x2.rounding, !l2[0] || !g2[0])
        return g2[0] || (e2 = new x2(h2)), F2 ? D2(e2, a2, u2) : e2;
      if (o2 = te(h2.e / N2), n2 = te(e2.e / N2), l2 = l2.slice(), i2 = o2 - n2, i2) {
        for (i2 < 0 ? (r2 = l2, i2 = -i2, s2 = g2.length) : (r2 = g2, n2 = o2, s2 = l2.length), o2 = Math.ceil(a2 / N2), s2 = o2 > s2 ? o2 + 1 : s2 + 1, i2 > s2 && (i2 = s2, r2.length = 1), r2.reverse(); i2--; )
          r2.push(0);
        r2.reverse();
      }
      for (s2 = l2.length, i2 = g2.length, s2 - i2 < 0 && (i2 = s2, r2 = g2, g2 = l2, l2 = r2), t2 = 0; i2; )
        t2 = (l2[--i2] = l2[i2] + g2[i2] + t2) / pe | 0, l2[i2] %= pe;
      for (t2 && (l2.unshift(t2), ++n2), s2 = l2.length; l2[--s2] == 0; )
        l2.pop();
      return e2.d = l2, e2.e = xr(l2, n2), F2 ? D2(e2, a2, u2) : e2;
    };
    R2.precision = R2.sd = function(e2) {
      var t2, r2 = this;
      if (e2 !== void 0 && e2 !== !!e2 && e2 !== 1 && e2 !== 0)
        throw Error(Me + e2);
      return r2.d ? (t2 = bo2(r2.d), e2 && r2.e + 1 > t2 && (t2 = r2.e + 1)) : t2 = NaN, t2;
    };
    R2.round = function() {
      var e2 = this, t2 = e2.constructor;
      return D2(new t2(e2), e2.e + 1, t2.rounding);
    };
    R2.sine = R2.sin = function() {
      var e2, t2, r2 = this, n2 = r2.constructor;
      return r2.isFinite() ? r2.isZero() ? new n2(r2) : (e2 = n2.precision, t2 = n2.rounding, n2.precision = e2 + Math.max(r2.e, r2.sd()) + N2, n2.rounding = 1, r2 = Eu(n2, To(n2, r2)), n2.precision = e2, n2.rounding = t2, D2(Ce > 2 ? r2.neg() : r2, e2, t2, true)) : new n2(NaN);
    };
    R2.squareRoot = R2.sqrt = function() {
      var e2, t2, r2, n2, i2, o2, s2 = this, a2 = s2.d, u2 = s2.e, l2 = s2.s, g2 = s2.constructor;
      if (l2 !== 1 || !a2 || !a2[0])
        return new g2(!l2 || l2 < 0 && (!a2 || a2[0]) ? NaN : a2 ? s2 : 1 / 0);
      for (F2 = false, l2 = Math.sqrt(+s2), l2 == 0 || l2 == 1 / 0 ? (t2 = Z2(a2), (t2.length + u2) % 2 == 0 && (t2 += "0"), l2 = Math.sqrt(t2), u2 = te((u2 + 1) / 2) - (u2 < 0 || u2 % 2), l2 == 1 / 0 ? t2 = "5e" + u2 : (t2 = l2.toExponential(), t2 = t2.slice(0, t2.indexOf("e") + 1) + u2), n2 = new g2(t2)) : n2 = new g2(l2.toString()), r2 = (u2 = g2.precision) + 3; ; )
        if (o2 = n2, n2 = o2.plus(q2(s2, o2, r2 + 2, 1)).times(0.5), Z2(o2.d).slice(0, r2) === (t2 = Z2(n2.d)).slice(0, r2))
          if (t2 = t2.slice(r2 - 3, r2 + 1), t2 == "9999" || !i2 && t2 == "4999") {
            if (!i2 && (D2(o2, u2 + 1, 0), o2.times(o2).eq(s2))) {
              n2 = o2;
              break;
            }
            r2 += 4, i2 = 1;
          } else {
            (!+t2 || !+t2.slice(1) && t2.charAt(0) == "5") && (D2(n2, u2 + 1, 1), e2 = !n2.times(n2).eq(s2));
            break;
          }
      return F2 = true, D2(n2, u2, g2.rounding, e2);
    };
    R2.tangent = R2.tan = function() {
      var e2, t2, r2 = this, n2 = r2.constructor;
      return r2.isFinite() ? r2.isZero() ? new n2(r2) : (e2 = n2.precision, t2 = n2.rounding, n2.precision = e2 + 10, n2.rounding = 1, r2 = r2.sin(), r2.s = 1, r2 = q2(r2, new n2(1).minus(r2.times(r2)).sqrt(), e2 + 10, 0), n2.precision = e2, n2.rounding = t2, D2(Ce == 2 || Ce == 4 ? r2.neg() : r2, e2, t2, true)) : new n2(NaN);
    };
    R2.times = R2.mul = function(e2) {
      var t2, r2, n2, i2, o2, s2, a2, u2, l2, g2 = this, h2 = g2.constructor, x2 = g2.d, S2 = (e2 = new h2(e2)).d;
      if (e2.s *= g2.s, !x2 || !x2[0] || !S2 || !S2[0])
        return new h2(!e2.s || x2 && !x2[0] && !S2 || S2 && !S2[0] && !x2 ? NaN : !x2 || !S2 ? e2.s / 0 : e2.s * 0);
      for (r2 = te(g2.e / N2) + te(e2.e / N2), u2 = x2.length, l2 = S2.length, u2 < l2 && (o2 = x2, x2 = S2, S2 = o2, s2 = u2, u2 = l2, l2 = s2), o2 = [], s2 = u2 + l2, n2 = s2; n2--; )
        o2.push(0);
      for (n2 = l2; --n2 >= 0; ) {
        for (t2 = 0, i2 = u2 + n2; i2 > n2; )
          a2 = o2[i2] + S2[n2] * x2[i2 - n2 - 1] + t2, o2[i2--] = a2 % pe | 0, t2 = a2 / pe | 0;
        o2[i2] = (o2[i2] + t2) % pe | 0;
      }
      for (; !o2[--s2]; )
        o2.pop();
      return t2 ? ++r2 : o2.shift(), e2.d = o2, e2.e = xr(o2, r2), F2 ? D2(e2, h2.precision, h2.rounding) : e2;
    };
    R2.toBinary = function(e2, t2) {
      return Tn(this, 2, e2, t2);
    };
    R2.toDecimalPlaces = R2.toDP = function(e2, t2) {
      var r2 = this, n2 = r2.constructor;
      return r2 = new n2(r2), e2 === void 0 ? r2 : (ae2(e2, 0, Ne), t2 === void 0 ? t2 = n2.rounding : ae2(t2, 0, 8), D2(r2, e2 + r2.e + 1, t2));
    };
    R2.toExponential = function(e2, t2) {
      var r2, n2 = this, i2 = n2.constructor;
      return e2 === void 0 ? r2 = he(n2, true) : (ae2(e2, 0, Ne), t2 === void 0 ? t2 = i2.rounding : ae2(t2, 0, 8), n2 = D2(new i2(n2), e2 + 1, t2), r2 = he(n2, true, e2 + 1)), n2.isNeg() && !n2.isZero() ? "-" + r2 : r2;
    };
    R2.toFixed = function(e2, t2) {
      var r2, n2, i2 = this, o2 = i2.constructor;
      return e2 === void 0 ? r2 = he(i2) : (ae2(e2, 0, Ne), t2 === void 0 ? t2 = o2.rounding : ae2(t2, 0, 8), n2 = D2(new o2(i2), e2 + i2.e + 1, t2), r2 = he(n2, false, e2 + n2.e + 1)), i2.isNeg() && !i2.isZero() ? "-" + r2 : r2;
    };
    R2.toFraction = function(e2) {
      var t2, r2, n2, i2, o2, s2, a2, u2, l2, g2, h2, x2, S2 = this, C2 = S2.d, A2 = S2.constructor;
      if (!C2)
        return new A2(S2);
      if (l2 = r2 = new A2(1), n2 = u2 = new A2(0), t2 = new A2(n2), o2 = t2.e = bo2(C2) - S2.e - 1, s2 = o2 % N2, t2.d[0] = H2(10, s2 < 0 ? N2 + s2 : s2), e2 == null)
        e2 = o2 > 0 ? t2 : l2;
      else {
        if (a2 = new A2(e2), !a2.isInt() || a2.lt(l2))
          throw Error(Me + a2);
        e2 = a2.gt(t2) ? o2 > 0 ? t2 : l2 : a2;
      }
      for (F2 = false, a2 = new A2(Z2(C2)), g2 = A2.precision, A2.precision = o2 = C2.length * N2 * 2; h2 = q2(a2, t2, 0, 1, 1), i2 = r2.plus(h2.times(n2)), i2.cmp(e2) != 1; )
        r2 = n2, n2 = i2, i2 = l2, l2 = u2.plus(h2.times(i2)), u2 = i2, i2 = t2, t2 = a2.minus(h2.times(i2)), a2 = i2;
      return i2 = q2(e2.minus(r2), n2, 0, 1, 1), u2 = u2.plus(i2.times(l2)), r2 = r2.plus(i2.times(n2)), u2.s = l2.s = S2.s, x2 = q2(l2, n2, o2, 1).minus(S2).abs().cmp(q2(u2, r2, o2, 1).minus(S2).abs()) < 1 ? [l2, n2] : [u2, r2], A2.precision = g2, F2 = true, x2;
    };
    R2.toHexadecimal = R2.toHex = function(e2, t2) {
      return Tn(this, 16, e2, t2);
    };
    R2.toNearest = function(e2, t2) {
      var r2 = this, n2 = r2.constructor;
      if (r2 = new n2(r2), e2 == null) {
        if (!r2.d)
          return r2;
        e2 = new n2(1), t2 = n2.rounding;
      } else {
        if (e2 = new n2(e2), t2 === void 0 ? t2 = n2.rounding : ae2(t2, 0, 8), !r2.d)
          return e2.s ? r2 : e2;
        if (!e2.d)
          return e2.s && (e2.s = r2.s), e2;
      }
      return e2.d[0] ? (F2 = false, r2 = q2(r2, e2, 0, t2, 1).times(e2), F2 = true, D2(r2)) : (e2.s = r2.s, r2 = e2), r2;
    };
    R2.toNumber = function() {
      return +this;
    };
    R2.toOctal = function(e2, t2) {
      return Tn(this, 8, e2, t2);
    };
    R2.toPower = R2.pow = function(e2) {
      var t2, r2, n2, i2, o2, s2, a2 = this, u2 = a2.constructor, l2 = +(e2 = new u2(e2));
      if (!a2.d || !e2.d || !a2.d[0] || !e2.d[0])
        return new u2(H2(+a2, l2));
      if (a2 = new u2(a2), a2.eq(1))
        return a2;
      if (n2 = u2.precision, o2 = u2.rounding, e2.eq(1))
        return D2(a2, n2, o2);
      if (t2 = te(e2.e / N2), t2 >= e2.d.length - 1 && (r2 = l2 < 0 ? -l2 : l2) <= gu)
        return i2 = xo(u2, a2, r2, n2), e2.s < 0 ? new u2(1).div(i2) : D2(i2, n2, o2);
      if (s2 = a2.s, s2 < 0) {
        if (t2 < e2.d.length - 1)
          return new u2(NaN);
        if (e2.d[t2] & 1 || (s2 = 1), a2.e == 0 && a2.d[0] == 1 && a2.d.length == 1)
          return a2.s = s2, a2;
      }
      return r2 = H2(+a2, l2), t2 = r2 == 0 || !isFinite(r2) ? te(l2 * (Math.log("0." + Z2(a2.d)) / Math.LN10 + a2.e + 1)) : new u2(r2 + "").e, t2 > u2.maxE + 1 || t2 < u2.minE - 1 ? new u2(t2 > 0 ? s2 / 0 : 0) : (F2 = false, u2.rounding = a2.s = 1, r2 = Math.min(12, (t2 + "").length), i2 = Pn(e2.times(Oe(a2, n2 + r2)), n2), i2.d && (i2 = D2(i2, n2 + 5, 1), Lt(i2.d, n2, o2) && (t2 = n2 + 10, i2 = D2(Pn(e2.times(Oe(a2, t2 + r2)), t2), t2 + 5, 1), +Z2(i2.d).slice(n2 + 1, n2 + 15) + 1 == 1e14 && (i2 = D2(i2, n2 + 1, 0)))), i2.s = s2, F2 = true, u2.rounding = o2, D2(i2, n2, o2));
    };
    R2.toPrecision = function(e2, t2) {
      var r2, n2 = this, i2 = n2.constructor;
      return e2 === void 0 ? r2 = he(n2, n2.e <= i2.toExpNeg || n2.e >= i2.toExpPos) : (ae2(e2, 1, Ne), t2 === void 0 ? t2 = i2.rounding : ae2(t2, 0, 8), n2 = D2(new i2(n2), e2, t2), r2 = he(n2, e2 <= n2.e || n2.e <= i2.toExpNeg, e2)), n2.isNeg() && !n2.isZero() ? "-" + r2 : r2;
    };
    R2.toSignificantDigits = R2.toSD = function(e2, t2) {
      var r2 = this, n2 = r2.constructor;
      return e2 === void 0 ? (e2 = n2.precision, t2 = n2.rounding) : (ae2(e2, 1, Ne), t2 === void 0 ? t2 = n2.rounding : ae2(t2, 0, 8)), D2(new n2(r2), e2, t2);
    };
    R2.toString = function() {
      var e2 = this, t2 = e2.constructor, r2 = he(e2, e2.e <= t2.toExpNeg || e2.e >= t2.toExpPos);
      return e2.isNeg() && !e2.isZero() ? "-" + r2 : r2;
    };
    R2.truncated = R2.trunc = function() {
      return D2(new this.constructor(this), this.e + 1, 1);
    };
    R2.valueOf = R2.toJSON = function() {
      var e2 = this, t2 = e2.constructor, r2 = he(e2, e2.e <= t2.toExpNeg || e2.e >= t2.toExpPos);
      return e2.isNeg() ? "-" + r2 : r2;
    };
    function Z2(e2) {
      var t2, r2, n2, i2 = e2.length - 1, o2 = "", s2 = e2[0];
      if (i2 > 0) {
        for (o2 += s2, t2 = 1; t2 < i2; t2++)
          n2 = e2[t2] + "", r2 = N2 - n2.length, r2 && (o2 += ke(r2)), o2 += n2;
        s2 = e2[t2], n2 = s2 + "", r2 = N2 - n2.length, r2 && (o2 += ke(r2));
      } else if (s2 === 0)
        return "0";
      for (; s2 % 10 === 0; )
        s2 /= 10;
      return o2 + s2;
    }
    function ae2(e2, t2, r2) {
      if (e2 !== ~~e2 || e2 < t2 || e2 > r2)
        throw Error(Me + e2);
    }
    function Lt(e2, t2, r2, n2) {
      var i2, o2, s2, a2;
      for (o2 = e2[0]; o2 >= 10; o2 /= 10)
        --t2;
      return --t2 < 0 ? (t2 += N2, i2 = 0) : (i2 = Math.ceil((t2 + 1) / N2), t2 %= N2), o2 = H2(10, N2 - t2), a2 = e2[i2] % o2 | 0, n2 == null ? t2 < 3 ? (t2 == 0 ? a2 = a2 / 100 | 0 : t2 == 1 && (a2 = a2 / 10 | 0), s2 = r2 < 4 && a2 == 99999 || r2 > 3 && a2 == 49999 || a2 == 5e4 || a2 == 0) : s2 = (r2 < 4 && a2 + 1 == o2 || r2 > 3 && a2 + 1 == o2 / 2) && (e2[i2 + 1] / o2 / 100 | 0) == H2(10, t2 - 2) - 1 || (a2 == o2 / 2 || a2 == 0) && (e2[i2 + 1] / o2 / 100 | 0) == 0 : t2 < 4 ? (t2 == 0 ? a2 = a2 / 1e3 | 0 : t2 == 1 ? a2 = a2 / 100 | 0 : t2 == 2 && (a2 = a2 / 10 | 0), s2 = (n2 || r2 < 4) && a2 == 9999 || !n2 && r2 > 3 && a2 == 4999) : s2 = ((n2 || r2 < 4) && a2 + 1 == o2 || !n2 && r2 > 3 && a2 + 1 == o2 / 2) && (e2[i2 + 1] / o2 / 1e3 | 0) == H2(10, t2 - 3) - 1, s2;
    }
    function hr(e2, t2, r2) {
      for (var n2, i2 = [0], o2, s2 = 0, a2 = e2.length; s2 < a2; ) {
        for (o2 = i2.length; o2--; )
          i2[o2] *= t2;
        for (i2[0] += En.indexOf(e2.charAt(s2++)), n2 = 0; n2 < i2.length; n2++)
          i2[n2] > r2 - 1 && (i2[n2 + 1] === void 0 && (i2[n2 + 1] = 0), i2[n2 + 1] += i2[n2] / r2 | 0, i2[n2] %= r2);
      }
      return i2.reverse();
    }
    function yu(e2, t2) {
      var r2, n2, i2;
      if (t2.isZero())
        return t2;
      n2 = t2.d.length, n2 < 32 ? (r2 = Math.ceil(n2 / 3), i2 = (1 / Pr(4, r2)).toString()) : (r2 = 16, i2 = "2.3283064365386962890625e-10"), e2.precision += r2, t2 = pt(e2, 1, t2.times(i2), new e2(1));
      for (var o2 = r2; o2--; ) {
        var s2 = t2.times(t2);
        t2 = s2.times(s2).minus(s2).times(8).plus(1);
      }
      return e2.precision -= r2, t2;
    }
    var q2 = function() {
      function e2(n2, i2, o2) {
        var s2, a2 = 0, u2 = n2.length;
        for (n2 = n2.slice(); u2--; )
          s2 = n2[u2] * i2 + a2, n2[u2] = s2 % o2 | 0, a2 = s2 / o2 | 0;
        return a2 && n2.unshift(a2), n2;
      }
      function t2(n2, i2, o2, s2) {
        var a2, u2;
        if (o2 != s2)
          u2 = o2 > s2 ? 1 : -1;
        else
          for (a2 = u2 = 0; a2 < o2; a2++)
            if (n2[a2] != i2[a2]) {
              u2 = n2[a2] > i2[a2] ? 1 : -1;
              break;
            }
        return u2;
      }
      function r2(n2, i2, o2, s2) {
        for (var a2 = 0; o2--; )
          n2[o2] -= a2, a2 = n2[o2] < i2[o2] ? 1 : 0, n2[o2] = a2 * s2 + n2[o2] - i2[o2];
        for (; !n2[0] && n2.length > 1; )
          n2.shift();
      }
      return function(n2, i2, o2, s2, a2, u2) {
        var l2, g2, h2, x2, S2, C2, A2, k2, O2, B2, M2, I2, X2, L2, Ye, Be, fe, $e, Q2, Re, qe = n2.constructor, Ze = n2.s == i2.s ? 1 : -1, ee = n2.d, U2 = i2.d;
        if (!ee || !ee[0] || !U2 || !U2[0])
          return new qe(!n2.s || !i2.s || (ee ? U2 && ee[0] == U2[0] : !U2) ? NaN : ee && ee[0] == 0 || !U2 ? Ze * 0 : Ze / 0);
        for (u2 ? (S2 = 1, g2 = n2.e - i2.e) : (u2 = pe, S2 = N2, g2 = te(n2.e / S2) - te(i2.e / S2)), Q2 = U2.length, fe = ee.length, O2 = new qe(Ze), B2 = O2.d = [], h2 = 0; U2[h2] == (ee[h2] || 0); h2++)
          ;
        if (U2[h2] > (ee[h2] || 0) && g2--, o2 == null ? (L2 = o2 = qe.precision, s2 = qe.rounding) : a2 ? L2 = o2 + (n2.e - i2.e) + 1 : L2 = o2, L2 < 0)
          B2.push(1), C2 = true;
        else {
          if (L2 = L2 / S2 + 2 | 0, h2 = 0, Q2 == 1) {
            for (x2 = 0, U2 = U2[0], L2++; (h2 < fe || x2) && L2--; h2++)
              Ye = x2 * u2 + (ee[h2] || 0), B2[h2] = Ye / U2 | 0, x2 = Ye % U2 | 0;
            C2 = x2 || h2 < fe;
          } else {
            for (x2 = u2 / (U2[0] + 1) | 0, x2 > 1 && (U2 = e2(U2, x2, u2), ee = e2(ee, x2, u2), Q2 = U2.length, fe = ee.length), Be = Q2, M2 = ee.slice(0, Q2), I2 = M2.length; I2 < Q2; )
              M2[I2++] = 0;
            Re = U2.slice(), Re.unshift(0), $e = U2[0], U2[1] >= u2 / 2 && ++$e;
            do
              x2 = 0, l2 = t2(U2, M2, Q2, I2), l2 < 0 ? (X2 = M2[0], Q2 != I2 && (X2 = X2 * u2 + (M2[1] || 0)), x2 = X2 / $e | 0, x2 > 1 ? (x2 >= u2 && (x2 = u2 - 1), A2 = e2(U2, x2, u2), k2 = A2.length, I2 = M2.length, l2 = t2(A2, M2, k2, I2), l2 == 1 && (x2--, r2(A2, Q2 < k2 ? Re : U2, k2, u2))) : (x2 == 0 && (l2 = x2 = 1), A2 = U2.slice()), k2 = A2.length, k2 < I2 && A2.unshift(0), r2(M2, A2, I2, u2), l2 == -1 && (I2 = M2.length, l2 = t2(U2, M2, Q2, I2), l2 < 1 && (x2++, r2(M2, Q2 < I2 ? Re : U2, I2, u2))), I2 = M2.length) : l2 === 0 && (x2++, M2 = [0]), B2[h2++] = x2, l2 && M2[0] ? M2[I2++] = ee[Be] || 0 : (M2 = [ee[Be]], I2 = 1);
            while ((Be++ < fe || M2[0] !== void 0) && L2--);
            C2 = M2[0] !== void 0;
          }
          B2[0] || B2.shift();
        }
        if (S2 == 1)
          O2.e = g2, go = C2;
        else {
          for (h2 = 1, x2 = B2[0]; x2 >= 10; x2 /= 10)
            h2++;
          O2.e = h2 + g2 * S2 - 1, D2(O2, a2 ? o2 + O2.e + 1 : o2, s2, C2);
        }
        return O2;
      };
    }();
    function D2(e2, t2, r2, n2) {
      var i2, o2, s2, a2, u2, l2, g2, h2, x2, S2 = e2.constructor;
      e:
        if (t2 != null) {
          if (h2 = e2.d, !h2)
            return e2;
          for (i2 = 1, a2 = h2[0]; a2 >= 10; a2 /= 10)
            i2++;
          if (o2 = t2 - i2, o2 < 0)
            o2 += N2, s2 = t2, g2 = h2[x2 = 0], u2 = g2 / H2(10, i2 - s2 - 1) % 10 | 0;
          else if (x2 = Math.ceil((o2 + 1) / N2), a2 = h2.length, x2 >= a2)
            if (n2) {
              for (; a2++ <= x2; )
                h2.push(0);
              g2 = u2 = 0, i2 = 1, o2 %= N2, s2 = o2 - N2 + 1;
            } else
              break e;
          else {
            for (g2 = a2 = h2[x2], i2 = 1; a2 >= 10; a2 /= 10)
              i2++;
            o2 %= N2, s2 = o2 - N2 + i2, u2 = s2 < 0 ? 0 : g2 / H2(10, i2 - s2 - 1) % 10 | 0;
          }
          if (n2 = n2 || t2 < 0 || h2[x2 + 1] !== void 0 || (s2 < 0 ? g2 : g2 % H2(10, i2 - s2 - 1)), l2 = r2 < 4 ? (u2 || n2) && (r2 == 0 || r2 == (e2.s < 0 ? 3 : 2)) : u2 > 5 || u2 == 5 && (r2 == 4 || n2 || r2 == 6 && (o2 > 0 ? s2 > 0 ? g2 / H2(10, i2 - s2) : 0 : h2[x2 - 1]) % 10 & 1 || r2 == (e2.s < 0 ? 8 : 7)), t2 < 1 || !h2[0])
            return h2.length = 0, l2 ? (t2 -= e2.e + 1, h2[0] = H2(10, (N2 - t2 % N2) % N2), e2.e = -t2 || 0) : h2[0] = e2.e = 0, e2;
          if (o2 == 0 ? (h2.length = x2, a2 = 1, x2--) : (h2.length = x2 + 1, a2 = H2(10, N2 - o2), h2[x2] = s2 > 0 ? (g2 / H2(10, i2 - s2) % H2(10, s2) | 0) * a2 : 0), l2)
            for (; ; )
              if (x2 == 0) {
                for (o2 = 1, s2 = h2[0]; s2 >= 10; s2 /= 10)
                  o2++;
                for (s2 = h2[0] += a2, a2 = 1; s2 >= 10; s2 /= 10)
                  a2++;
                o2 != a2 && (e2.e++, h2[0] == pe && (h2[0] = 1));
                break;
              } else {
                if (h2[x2] += a2, h2[x2] != pe)
                  break;
                h2[x2--] = 0, a2 = 1;
              }
          for (o2 = h2.length; h2[--o2] === 0; )
            h2.pop();
        }
      return F2 && (e2.e > S2.maxE ? (e2.d = null, e2.e = NaN) : e2.e < S2.minE && (e2.e = 0, e2.d = [0])), e2;
    }
    function he(e2, t2, r2) {
      if (!e2.isFinite())
        return vo(e2);
      var n2, i2 = e2.e, o2 = Z2(e2.d), s2 = o2.length;
      return t2 ? (r2 && (n2 = r2 - s2) > 0 ? o2 = o2.charAt(0) + "." + o2.slice(1) + ke(n2) : s2 > 1 && (o2 = o2.charAt(0) + "." + o2.slice(1)), o2 = o2 + (e2.e < 0 ? "e" : "e+") + e2.e) : i2 < 0 ? (o2 = "0." + ke(-i2 - 1) + o2, r2 && (n2 = r2 - s2) > 0 && (o2 += ke(n2))) : i2 >= s2 ? (o2 += ke(i2 + 1 - s2), r2 && (n2 = r2 - i2 - 1) > 0 && (o2 = o2 + "." + ke(n2))) : ((n2 = i2 + 1) < s2 && (o2 = o2.slice(0, n2) + "." + o2.slice(n2)), r2 && (n2 = r2 - s2) > 0 && (i2 + 1 === s2 && (o2 += "."), o2 += ke(n2))), o2;
    }
    function xr(e2, t2) {
      var r2 = e2[0];
      for (t2 *= N2; r2 >= 10; r2 /= 10)
        t2++;
      return t2;
    }
    function Er(e2, t2, r2) {
      if (t2 > hu)
        throw F2 = true, r2 && (e2.precision = r2), Error(ho);
      return D2(new e2(yr), t2, 1, true);
    }
    function ce2(e2, t2, r2) {
      if (t2 > xn)
        throw Error(ho);
      return D2(new e2(wr), t2, r2, true);
    }
    function bo2(e2) {
      var t2 = e2.length - 1, r2 = t2 * N2 + 1;
      if (t2 = e2[t2], t2) {
        for (; t2 % 10 == 0; t2 /= 10)
          r2--;
        for (t2 = e2[0]; t2 >= 10; t2 /= 10)
          r2++;
      }
      return r2;
    }
    function ke(e2) {
      for (var t2 = ""; e2--; )
        t2 += "0";
      return t2;
    }
    function xo(e2, t2, r2, n2) {
      var i2, o2 = new e2(1), s2 = Math.ceil(n2 / N2 + 4);
      for (F2 = false; ; ) {
        if (r2 % 2 && (o2 = o2.times(t2), fo(o2.d, s2) && (i2 = true)), r2 = te(r2 / 2), r2 === 0) {
          r2 = o2.d.length - 1, i2 && o2.d[r2] === 0 && ++o2.d[r2];
          break;
        }
        t2 = t2.times(t2), fo(t2.d, s2);
      }
      return F2 = true, o2;
    }
    function po(e2) {
      return e2.d[e2.d.length - 1] & 1;
    }
    function Po(e2, t2, r2) {
      for (var n2, i2 = new e2(t2[0]), o2 = 0; ++o2 < t2.length; )
        if (n2 = new e2(t2[o2]), n2.s)
          i2[r2](n2) && (i2 = n2);
        else {
          i2 = n2;
          break;
        }
      return i2;
    }
    function Pn(e2, t2) {
      var r2, n2, i2, o2, s2, a2, u2, l2 = 0, g2 = 0, h2 = 0, x2 = e2.constructor, S2 = x2.rounding, C2 = x2.precision;
      if (!e2.d || !e2.d[0] || e2.e > 17)
        return new x2(e2.d ? e2.d[0] ? e2.s < 0 ? 0 : 1 / 0 : 1 : e2.s ? e2.s < 0 ? 0 : e2 : NaN);
      for (t2 == null ? (F2 = false, u2 = C2) : u2 = t2, a2 = new x2(0.03125); e2.e > -2; )
        e2 = e2.times(a2), h2 += 5;
      for (n2 = Math.log(H2(2, h2)) / Math.LN10 * 2 + 5 | 0, u2 += n2, r2 = o2 = s2 = new x2(1), x2.precision = u2; ; ) {
        if (o2 = D2(o2.times(e2), u2, 1), r2 = r2.times(++g2), a2 = s2.plus(q2(o2, r2, u2, 1)), Z2(a2.d).slice(0, u2) === Z2(s2.d).slice(0, u2)) {
          for (i2 = h2; i2--; )
            s2 = D2(s2.times(s2), u2, 1);
          if (t2 == null)
            if (l2 < 3 && Lt(s2.d, u2 - n2, S2, l2))
              x2.precision = u2 += 10, r2 = o2 = a2 = new x2(1), g2 = 0, l2++;
            else
              return D2(s2, x2.precision = C2, S2, F2 = true);
          else
            return x2.precision = C2, s2;
        }
        s2 = a2;
      }
    }
    function Oe(e2, t2) {
      var r2, n2, i2, o2, s2, a2, u2, l2, g2, h2, x2, S2 = 1, C2 = 10, A2 = e2, k2 = A2.d, O2 = A2.constructor, B2 = O2.rounding, M2 = O2.precision;
      if (A2.s < 0 || !k2 || !k2[0] || !A2.e && k2[0] == 1 && k2.length == 1)
        return new O2(k2 && !k2[0] ? -1 / 0 : A2.s != 1 ? NaN : k2 ? 0 : A2);
      if (t2 == null ? (F2 = false, g2 = M2) : g2 = t2, O2.precision = g2 += C2, r2 = Z2(k2), n2 = r2.charAt(0), Math.abs(o2 = A2.e) < 15e14) {
        for (; n2 < 7 && n2 != 1 || n2 == 1 && r2.charAt(1) > 3; )
          A2 = A2.times(e2), r2 = Z2(A2.d), n2 = r2.charAt(0), S2++;
        o2 = A2.e, n2 > 1 ? (A2 = new O2("0." + r2), o2++) : A2 = new O2(n2 + "." + r2.slice(1));
      } else
        return l2 = Er(O2, g2 + 2, M2).times(o2 + ""), A2 = Oe(new O2(n2 + "." + r2.slice(1)), g2 - C2).plus(l2), O2.precision = M2, t2 == null ? D2(A2, M2, B2, F2 = true) : A2;
      for (h2 = A2, u2 = s2 = A2 = q2(A2.minus(1), A2.plus(1), g2, 1), x2 = D2(A2.times(A2), g2, 1), i2 = 3; ; ) {
        if (s2 = D2(s2.times(x2), g2, 1), l2 = u2.plus(q2(s2, new O2(i2), g2, 1)), Z2(l2.d).slice(0, g2) === Z2(u2.d).slice(0, g2))
          if (u2 = u2.times(2), o2 !== 0 && (u2 = u2.plus(Er(O2, g2 + 2, M2).times(o2 + ""))), u2 = q2(u2, new O2(S2), g2, 1), t2 == null)
            if (Lt(u2.d, g2 - C2, B2, a2))
              O2.precision = g2 += C2, l2 = s2 = A2 = q2(h2.minus(1), h2.plus(1), g2, 1), x2 = D2(A2.times(A2), g2, 1), i2 = a2 = 1;
            else
              return D2(u2, O2.precision = M2, B2, F2 = true);
          else
            return O2.precision = M2, u2;
        u2 = l2, i2 += 2;
      }
    }
    function vo(e2) {
      return String(e2.s * e2.s / 0);
    }
    function vn(e2, t2) {
      var r2, n2, i2;
      for ((r2 = t2.indexOf(".")) > -1 && (t2 = t2.replace(".", "")), (n2 = t2.search(/e/i)) > 0 ? (r2 < 0 && (r2 = n2), r2 += +t2.slice(n2 + 1), t2 = t2.substring(0, n2)) : r2 < 0 && (r2 = t2.length), n2 = 0; t2.charCodeAt(n2) === 48; n2++)
        ;
      for (i2 = t2.length; t2.charCodeAt(i2 - 1) === 48; --i2)
        ;
      if (t2 = t2.slice(n2, i2), t2) {
        if (i2 -= n2, e2.e = r2 = r2 - n2 - 1, e2.d = [], n2 = (r2 + 1) % N2, r2 < 0 && (n2 += N2), n2 < i2) {
          for (n2 && e2.d.push(+t2.slice(0, n2)), i2 -= N2; n2 < i2; )
            e2.d.push(+t2.slice(n2, n2 += N2));
          t2 = t2.slice(n2), n2 = N2 - t2.length;
        } else
          n2 -= i2;
        for (; n2--; )
          t2 += "0";
        e2.d.push(+t2), F2 && (e2.e > e2.constructor.maxE ? (e2.d = null, e2.e = NaN) : e2.e < e2.constructor.minE && (e2.e = 0, e2.d = [0]));
      } else
        e2.e = 0, e2.d = [0];
      return e2;
    }
    function wu(e2, t2) {
      var r2, n2, i2, o2, s2, a2, u2, l2, g2;
      if (t2.indexOf("_") > -1) {
        if (t2 = t2.replace(/(\d)_(?=\d)/g, "$1"), Eo.test(t2))
          return vn(e2, t2);
      } else if (t2 === "Infinity" || t2 === "NaN")
        return +t2 || (e2.s = NaN), e2.e = NaN, e2.d = null, e2;
      if (mu.test(t2))
        r2 = 16, t2 = t2.toLowerCase();
      else if (fu.test(t2))
        r2 = 2;
      else if (du.test(t2))
        r2 = 8;
      else
        throw Error(Me + t2);
      for (o2 = t2.search(/p/i), o2 > 0 ? (u2 = +t2.slice(o2 + 1), t2 = t2.substring(2, o2)) : t2 = t2.slice(2), o2 = t2.indexOf("."), s2 = o2 >= 0, n2 = e2.constructor, s2 && (t2 = t2.replace(".", ""), a2 = t2.length, o2 = a2 - o2, i2 = xo(n2, new n2(r2), o2, o2 * 2)), l2 = hr(t2, r2, pe), g2 = l2.length - 1, o2 = g2; l2[o2] === 0; --o2)
        l2.pop();
      return o2 < 0 ? new n2(e2.s * 0) : (e2.e = xr(l2, g2), e2.d = l2, F2 = false, s2 && (e2 = q2(e2, i2, a2 * 4)), u2 && (e2 = e2.times(Math.abs(u2) < 54 ? H2(2, u2) : Ge.pow(2, u2))), F2 = true, e2);
    }
    function Eu(e2, t2) {
      var r2, n2 = t2.d.length;
      if (n2 < 3)
        return t2.isZero() ? t2 : pt(e2, 2, t2, t2);
      r2 = 1.4 * Math.sqrt(n2), r2 = r2 > 16 ? 16 : r2 | 0, t2 = t2.times(1 / Pr(5, r2)), t2 = pt(e2, 2, t2, t2);
      for (var i2, o2 = new e2(5), s2 = new e2(16), a2 = new e2(20); r2--; )
        i2 = t2.times(t2), t2 = t2.times(o2.plus(i2.times(s2.times(i2).minus(a2))));
      return t2;
    }
    function pt(e2, t2, r2, n2, i2) {
      var o2, s2, a2, u2, l2 = 1, g2 = e2.precision, h2 = Math.ceil(g2 / N2);
      for (F2 = false, u2 = r2.times(r2), a2 = new e2(n2); ; ) {
        if (s2 = q2(a2.times(u2), new e2(t2++ * t2++), g2, 1), a2 = i2 ? n2.plus(s2) : n2.minus(s2), n2 = q2(s2.times(u2), new e2(t2++ * t2++), g2, 1), s2 = a2.plus(n2), s2.d[h2] !== void 0) {
          for (o2 = h2; s2.d[o2] === a2.d[o2] && o2--; )
            ;
          if (o2 == -1)
            break;
        }
        o2 = a2, a2 = n2, n2 = s2, s2 = o2, l2++;
      }
      return F2 = true, s2.d.length = h2 + 1, s2;
    }
    function Pr(e2, t2) {
      for (var r2 = e2; --t2; )
        r2 *= e2;
      return r2;
    }
    function To(e2, t2) {
      var r2, n2 = t2.s < 0, i2 = ce2(e2, e2.precision, 1), o2 = i2.times(0.5);
      if (t2 = t2.abs(), t2.lte(o2))
        return Ce = n2 ? 4 : 1, t2;
      if (r2 = t2.divToInt(i2), r2.isZero())
        Ce = n2 ? 3 : 2;
      else {
        if (t2 = t2.minus(r2.times(i2)), t2.lte(o2))
          return Ce = po(r2) ? n2 ? 2 : 3 : n2 ? 4 : 1, t2;
        Ce = po(r2) ? n2 ? 1 : 4 : n2 ? 3 : 2;
      }
      return t2.minus(i2).abs();
    }
    function Tn(e2, t2, r2, n2) {
      var i2, o2, s2, a2, u2, l2, g2, h2, x2, S2 = e2.constructor, C2 = r2 !== void 0;
      if (C2 ? (ae2(r2, 1, Ne), n2 === void 0 ? n2 = S2.rounding : ae2(n2, 0, 8)) : (r2 = S2.precision, n2 = S2.rounding), !e2.isFinite())
        g2 = vo(e2);
      else {
        for (g2 = he(e2), s2 = g2.indexOf("."), C2 ? (i2 = 2, t2 == 16 ? r2 = r2 * 4 - 3 : t2 == 8 && (r2 = r2 * 3 - 2)) : i2 = t2, s2 >= 0 && (g2 = g2.replace(".", ""), x2 = new S2(1), x2.e = g2.length - s2, x2.d = hr(he(x2), 10, i2), x2.e = x2.d.length), h2 = hr(g2, 10, i2), o2 = u2 = h2.length; h2[--u2] == 0; )
          h2.pop();
        if (!h2[0])
          g2 = C2 ? "0p+0" : "0";
        else {
          if (s2 < 0 ? o2-- : (e2 = new S2(e2), e2.d = h2, e2.e = o2, e2 = q2(e2, x2, r2, n2, 0, i2), h2 = e2.d, o2 = e2.e, l2 = go), s2 = h2[r2], a2 = i2 / 2, l2 = l2 || h2[r2 + 1] !== void 0, l2 = n2 < 4 ? (s2 !== void 0 || l2) && (n2 === 0 || n2 === (e2.s < 0 ? 3 : 2)) : s2 > a2 || s2 === a2 && (n2 === 4 || l2 || n2 === 6 && h2[r2 - 1] & 1 || n2 === (e2.s < 0 ? 8 : 7)), h2.length = r2, l2)
            for (; ++h2[--r2] > i2 - 1; )
              h2[r2] = 0, r2 || (++o2, h2.unshift(1));
          for (u2 = h2.length; !h2[u2 - 1]; --u2)
            ;
          for (s2 = 0, g2 = ""; s2 < u2; s2++)
            g2 += En.charAt(h2[s2]);
          if (C2) {
            if (u2 > 1)
              if (t2 == 16 || t2 == 8) {
                for (s2 = t2 == 16 ? 4 : 3, --u2; u2 % s2; u2++)
                  g2 += "0";
                for (h2 = hr(g2, i2, t2), u2 = h2.length; !h2[u2 - 1]; --u2)
                  ;
                for (s2 = 1, g2 = "1."; s2 < u2; s2++)
                  g2 += En.charAt(h2[s2]);
              } else
                g2 = g2.charAt(0) + "." + g2.slice(1);
            g2 = g2 + (o2 < 0 ? "p" : "p+") + o2;
          } else if (o2 < 0) {
            for (; ++o2; )
              g2 = "0" + g2;
            g2 = "0." + g2;
          } else if (++o2 > u2)
            for (o2 -= u2; o2--; )
              g2 += "0";
          else
            o2 < u2 && (g2 = g2.slice(0, o2) + "." + g2.slice(o2));
        }
        g2 = (t2 == 16 ? "0x" : t2 == 2 ? "0b" : t2 == 8 ? "0o" : "") + g2;
      }
      return e2.s < 0 ? "-" + g2 : g2;
    }
    function fo(e2, t2) {
      if (e2.length > t2)
        return e2.length = t2, true;
    }
    function bu2(e2) {
      return new this(e2).abs();
    }
    function xu(e2) {
      return new this(e2).acos();
    }
    function Pu(e2) {
      return new this(e2).acosh();
    }
    function vu(e2, t2) {
      return new this(e2).plus(t2);
    }
    function Tu(e2) {
      return new this(e2).asin();
    }
    function Cu(e2) {
      return new this(e2).asinh();
    }
    function Au(e2) {
      return new this(e2).atan();
    }
    function Ru(e2) {
      return new this(e2).atanh();
    }
    function Su(e2, t2) {
      e2 = new this(e2), t2 = new this(t2);
      var r2, n2 = this.precision, i2 = this.rounding, o2 = n2 + 4;
      return !e2.s || !t2.s ? r2 = new this(NaN) : !e2.d && !t2.d ? (r2 = ce2(this, o2, 1).times(t2.s > 0 ? 0.25 : 0.75), r2.s = e2.s) : !t2.d || e2.isZero() ? (r2 = t2.s < 0 ? ce2(this, n2, i2) : new this(0), r2.s = e2.s) : !e2.d || t2.isZero() ? (r2 = ce2(this, o2, 1).times(0.5), r2.s = e2.s) : t2.s < 0 ? (this.precision = o2, this.rounding = 1, r2 = this.atan(q2(e2, t2, o2, 1)), t2 = ce2(this, o2, 1), this.precision = n2, this.rounding = i2, r2 = e2.s < 0 ? r2.minus(t2) : r2.plus(t2)) : r2 = this.atan(q2(e2, t2, o2, 1)), r2;
    }
    function Iu(e2) {
      return new this(e2).cbrt();
    }
    function Du(e2) {
      return D2(e2 = new this(e2), e2.e + 1, 2);
    }
    function ku(e2, t2, r2) {
      return new this(e2).clamp(t2, r2);
    }
    function Ou(e2) {
      if (!e2 || typeof e2 != "object")
        throw Error(br2 + "Object expected");
      var t2, r2, n2, i2 = e2.defaults === true, o2 = ["precision", 1, Ne, "rounding", 0, 8, "toExpNeg", -ct2, 0, "toExpPos", 0, ct2, "maxE", 0, ct2, "minE", -ct2, 0, "modulo", 0, 9];
      for (t2 = 0; t2 < o2.length; t2 += 3)
        if (r2 = o2[t2], i2 && (this[r2] = bn2[r2]), (n2 = e2[r2]) !== void 0)
          if (te(n2) === n2 && n2 >= o2[t2 + 1] && n2 <= o2[t2 + 2])
            this[r2] = n2;
          else
            throw Error(Me + r2 + ": " + n2);
      if (r2 = "crypto", i2 && (this[r2] = bn2[r2]), (n2 = e2[r2]) !== void 0)
        if (n2 === true || n2 === false || n2 === 0 || n2 === 1)
          if (n2)
            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r2] = true;
            else
              throw Error(yo);
          else
            this[r2] = false;
        else
          throw Error(Me + r2 + ": " + n2);
      return this;
    }
    function Mu(e2) {
      return new this(e2).cos();
    }
    function Nu(e2) {
      return new this(e2).cosh();
    }
    function Co(e2) {
      var t2, r2, n2;
      function i2(o2) {
        var s2, a2, u2, l2 = this;
        if (!(l2 instanceof i2))
          return new i2(o2);
        if (l2.constructor = i2, mo(o2)) {
          l2.s = o2.s, F2 ? !o2.d || o2.e > i2.maxE ? (l2.e = NaN, l2.d = null) : o2.e < i2.minE ? (l2.e = 0, l2.d = [0]) : (l2.e = o2.e, l2.d = o2.d.slice()) : (l2.e = o2.e, l2.d = o2.d ? o2.d.slice() : o2.d);
          return;
        }
        if (u2 = typeof o2, u2 === "number") {
          if (o2 === 0) {
            l2.s = 1 / o2 < 0 ? -1 : 1, l2.e = 0, l2.d = [0];
            return;
          }
          if (o2 < 0 ? (o2 = -o2, l2.s = -1) : l2.s = 1, o2 === ~~o2 && o2 < 1e7) {
            for (s2 = 0, a2 = o2; a2 >= 10; a2 /= 10)
              s2++;
            F2 ? s2 > i2.maxE ? (l2.e = NaN, l2.d = null) : s2 < i2.minE ? (l2.e = 0, l2.d = [0]) : (l2.e = s2, l2.d = [o2]) : (l2.e = s2, l2.d = [o2]);
            return;
          } else if (o2 * 0 !== 0) {
            o2 || (l2.s = NaN), l2.e = NaN, l2.d = null;
            return;
          }
          return vn(l2, o2.toString());
        } else if (u2 !== "string")
          throw Error(Me + o2);
        return (a2 = o2.charCodeAt(0)) === 45 ? (o2 = o2.slice(1), l2.s = -1) : (a2 === 43 && (o2 = o2.slice(1)), l2.s = 1), Eo.test(o2) ? vn(l2, o2) : wu(l2, o2);
      }
      if (i2.prototype = R2, i2.ROUND_UP = 0, i2.ROUND_DOWN = 1, i2.ROUND_CEIL = 2, i2.ROUND_FLOOR = 3, i2.ROUND_HALF_UP = 4, i2.ROUND_HALF_DOWN = 5, i2.ROUND_HALF_EVEN = 6, i2.ROUND_HALF_CEIL = 7, i2.ROUND_HALF_FLOOR = 8, i2.EUCLID = 9, i2.config = i2.set = Ou, i2.clone = Co, i2.isDecimal = mo, i2.abs = bu2, i2.acos = xu, i2.acosh = Pu, i2.add = vu, i2.asin = Tu, i2.asinh = Cu, i2.atan = Au, i2.atanh = Ru, i2.atan2 = Su, i2.cbrt = Iu, i2.ceil = Du, i2.clamp = ku, i2.cos = Mu, i2.cosh = Nu, i2.div = _u, i2.exp = Fu, i2.floor = Lu, i2.hypot = Bu, i2.ln = $u, i2.log = qu, i2.log10 = Vu, i2.log2 = Uu, i2.max = ju, i2.min = Ju, i2.mod = Qu, i2.mul = Gu, i2.pow = Hu, i2.random = Wu, i2.round = Ku, i2.sign = zu, i2.sin = Yu, i2.sinh = Zu, i2.sqrt = Xu, i2.sub = el, i2.sum = tl, i2.tan = rl, i2.tanh = nl, i2.trunc = il, e2 === void 0 && (e2 = {}), e2 && e2.defaults !== true)
        for (n2 = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t2 = 0; t2 < n2.length; )
          e2.hasOwnProperty(r2 = n2[t2++]) || (e2[r2] = this[r2]);
      return i2.config(e2), i2;
    }
    function _u(e2, t2) {
      return new this(e2).div(t2);
    }
    function Fu(e2) {
      return new this(e2).exp();
    }
    function Lu(e2) {
      return D2(e2 = new this(e2), e2.e + 1, 3);
    }
    function Bu() {
      var e2, t2, r2 = new this(0);
      for (F2 = false, e2 = 0; e2 < arguments.length; )
        if (t2 = new this(arguments[e2++]), t2.d)
          r2.d && (r2 = r2.plus(t2.times(t2)));
        else {
          if (t2.s)
            return F2 = true, new this(1 / 0);
          r2 = t2;
        }
      return F2 = true, r2.sqrt();
    }
    function mo(e2) {
      return e2 instanceof Ge || e2 && e2.toStringTag === wo || false;
    }
    function $u(e2) {
      return new this(e2).ln();
    }
    function qu(e2, t2) {
      return new this(e2).log(t2);
    }
    function Uu(e2) {
      return new this(e2).log(2);
    }
    function Vu(e2) {
      return new this(e2).log(10);
    }
    function ju() {
      return Po(this, arguments, "lt");
    }
    function Ju() {
      return Po(this, arguments, "gt");
    }
    function Qu(e2, t2) {
      return new this(e2).mod(t2);
    }
    function Gu(e2, t2) {
      return new this(e2).mul(t2);
    }
    function Hu(e2, t2) {
      return new this(e2).pow(t2);
    }
    function Wu(e2) {
      var t2, r2, n2, i2, o2 = 0, s2 = new this(1), a2 = [];
      if (e2 === void 0 ? e2 = this.precision : ae2(e2, 1, Ne), n2 = Math.ceil(e2 / N2), this.crypto)
        if (crypto.getRandomValues)
          for (t2 = crypto.getRandomValues(new Uint32Array(n2)); o2 < n2; )
            i2 = t2[o2], i2 >= 429e7 ? t2[o2] = crypto.getRandomValues(new Uint32Array(1))[0] : a2[o2++] = i2 % 1e7;
        else if (crypto.randomBytes) {
          for (t2 = crypto.randomBytes(n2 *= 4); o2 < n2; )
            i2 = t2[o2] + (t2[o2 + 1] << 8) + (t2[o2 + 2] << 16) + ((t2[o2 + 3] & 127) << 24), i2 >= 214e7 ? crypto.randomBytes(4).copy(t2, o2) : (a2.push(i2 % 1e7), o2 += 4);
          o2 = n2 / 4;
        } else
          throw Error(yo);
      else
        for (; o2 < n2; )
          a2[o2++] = Math.random() * 1e7 | 0;
      for (n2 = a2[--o2], e2 %= N2, n2 && e2 && (i2 = H2(10, N2 - e2), a2[o2] = (n2 / i2 | 0) * i2); a2[o2] === 0; o2--)
        a2.pop();
      if (o2 < 0)
        r2 = 0, a2 = [0];
      else {
        for (r2 = -1; a2[0] === 0; r2 -= N2)
          a2.shift();
        for (n2 = 1, i2 = a2[0]; i2 >= 10; i2 /= 10)
          n2++;
        n2 < N2 && (r2 -= N2 - n2);
      }
      return s2.e = r2, s2.d = a2, s2;
    }
    function Ku(e2) {
      return D2(e2 = new this(e2), e2.e + 1, this.rounding);
    }
    function zu(e2) {
      return e2 = new this(e2), e2.d ? e2.d[0] ? e2.s : 0 * e2.s : e2.s || NaN;
    }
    function Yu(e2) {
      return new this(e2).sin();
    }
    function Zu(e2) {
      return new this(e2).sinh();
    }
    function Xu(e2) {
      return new this(e2).sqrt();
    }
    function el(e2, t2) {
      return new this(e2).sub(t2);
    }
    function tl() {
      var e2 = 0, t2 = arguments, r2 = new this(t2[e2]);
      for (F2 = false; r2.s && ++e2 < t2.length; )
        r2 = r2.plus(t2[e2]);
      return F2 = true, D2(r2, this.precision, this.rounding);
    }
    function rl(e2) {
      return new this(e2).tan();
    }
    function nl(e2) {
      return new this(e2).tanh();
    }
    function il(e2) {
      return D2(e2 = new this(e2), e2.e + 1, 1);
    }
    R2[Symbol.for("nodejs.util.inspect.custom")] = R2.toString;
    R2[Symbol.toStringTag] = "Decimal";
    var Ge = R2.constructor = Co(bn2);
    yr = new Ge(yr);
    wr = new Ge(wr);
    var ye = Ge;
    function ft(e2) {
      return Ge.isDecimal(e2) ? true : e2 !== null && typeof e2 == "object" && typeof e2.s == "number" && typeof e2.e == "number" && typeof e2.toFixed == "function" && Array.isArray(e2.d);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var Bt = class {
      constructor(t2, r2, n2, i2, o2) {
        this.modelName = t2, this.name = r2, this.typeName = n2, this.isList = i2, this.isEnum = o2;
      }
      _toGraphQLInputType() {
        let t2 = this.isList ? "List" : "", r2 = this.isEnum ? "Enum" : "";
        return `${t2}${r2}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function mt(e2) {
      return e2 instanceof Bt;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var vr = class {
      constructor(t2) {
        this.value = t2;
      }
      write(t2) {
        t2.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var Tr = (e2) => e2;
    var Cr = { bold: Tr, red: Tr, green: Tr, dim: Tr, enabled: false };
    var Ao = { bold: sr, red: nt, green: Ri, dim: ar2, enabled: true };
    var dt = { write(e2) {
      e2.writeLine(",");
    } };
    d2();
    c2();
    p2();
    f2();
    m2();
    var we = class {
      constructor(t2) {
        this.contents = t2;
        this.isUnderlined = false;
        this.color = (t3) => t3;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t2) {
        return this.color = t2, this;
      }
      write(t2) {
        let r2 = t2.getCurrentLineLength();
        t2.write(this.color(this.contents)), this.isUnderlined && t2.afterNextNewline(() => {
          t2.write(" ".repeat(r2)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var _e2 = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var gt = class extends _e2 {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r2) {
        return this.items.push(new vr(r2)), this;
      }
      getField(r2) {
        return this.items[r2];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n2) => n2.value.getPrintWidth())) + 2;
      }
      write(r2) {
        if (this.items.length === 0) {
          this.writeEmpty(r2);
          return;
        }
        this.writeWithItems(r2);
      }
      writeEmpty(r2) {
        let n2 = new we("[]");
        this.hasError && n2.setColor(r2.context.colors.red).underline(), r2.write(n2);
      }
      writeWithItems(r2) {
        let { colors: n2 } = r2.context;
        r2.writeLine("[").withIndent(() => r2.writeJoined(dt, this.items).newLine()).write("]"), this.hasError && r2.afterNextNewline(() => {
          r2.writeLine(n2.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var Ro = ": ";
    var Ar = class {
      constructor(t2, r2) {
        this.name = t2;
        this.value = r2;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Ro.length;
      }
      write(t2) {
        let r2 = new we(this.name);
        this.hasError && r2.underline().setColor(t2.context.colors.red), t2.write(r2).write(Ro).write(this.value);
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var Rr = class e2 extends _e2 {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r2) {
        this.fields[r2.name] = r2;
      }
      addSuggestion(r2) {
        this.suggestions.push(r2);
      }
      getField(r2) {
        return this.fields[r2];
      }
      getDeepField(r2) {
        let [n2, ...i2] = r2, o2 = this.getField(n2);
        if (!o2)
          return;
        let s2 = o2;
        for (let a2 of i2) {
          let u2;
          if (s2.value instanceof e2 ? u2 = s2.value.getField(a2) : s2.value instanceof gt && (u2 = s2.value.getField(Number(a2))), !u2)
            return;
          s2 = u2;
        }
        return s2;
      }
      getDeepFieldValue(r2) {
        var n2;
        return r2.length === 0 ? this : (n2 = this.getDeepField(r2)) == null ? void 0 : n2.value;
      }
      hasField(r2) {
        return !!this.getField(r2);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r2) {
        delete this.fields[r2];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r2) {
        var n2;
        return (n2 = this.getField(r2)) == null ? void 0 : n2.value;
      }
      getDeepSubSelectionValue(r2) {
        let n2 = this;
        for (let i2 of r2) {
          if (!(n2 instanceof e2))
            return;
          let o2 = n2.getSubSelectionValue(i2);
          if (!o2)
            return;
          n2 = o2;
        }
        return n2;
      }
      getDeepSelectionParent(r2) {
        let n2 = this.getSelectionParent();
        if (!n2)
          return;
        let i2 = n2;
        for (let o2 of r2) {
          let s2 = i2.value.getFieldValue(o2);
          if (!s2 || !(s2 instanceof e2))
            return;
          let a2 = s2.getSelectionParent();
          if (!a2)
            return;
          i2 = a2;
        }
        return i2;
      }
      getSelectionParent() {
        var i2, o2;
        let r2 = (i2 = this.getField("select")) == null ? void 0 : i2.value.asObject();
        if (r2)
          return { kind: "select", value: r2 };
        let n2 = (o2 = this.getField("include")) == null ? void 0 : o2.value.asObject();
        if (n2)
          return { kind: "include", value: n2 };
      }
      getSubSelectionValue(r2) {
        var n2;
        return (n2 = this.getSelectionParent()) == null ? void 0 : n2.value.fields[r2].value;
      }
      getPrintWidth() {
        let r2 = Object.values(this.fields);
        return r2.length == 0 ? 2 : Math.max(...r2.map((i2) => i2.getPrintWidth())) + 2;
      }
      write(r2) {
        let n2 = Object.values(this.fields);
        if (n2.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r2);
          return;
        }
        this.writeWithContents(r2, n2);
      }
      asObject() {
        return this;
      }
      writeEmpty(r2) {
        let n2 = new we("{}");
        this.hasError && n2.setColor(r2.context.colors.red).underline(), r2.write(n2);
      }
      writeWithContents(r2, n2) {
        r2.writeLine("{").withIndent(() => {
          r2.writeJoined(dt, [...n2, ...this.suggestions]).newLine();
        }), r2.write("}"), this.hasError && r2.afterNextNewline(() => {
          r2.writeLine(r2.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var z2 = class extends _e2 {
      constructor(r2) {
        super();
        this.text = r2;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r2) {
        let n2 = new we(this.text);
        this.hasError && n2.underline().setColor(r2.context.colors.red), r2.write(n2);
      }
      asObject() {
      }
    };
    var Cn = class {
      constructor(t2) {
        this.errorMessages = [];
        this.arguments = t2;
      }
      write(t2) {
        t2.write(this.arguments);
      }
      addErrorMessage(t2) {
        this.errorMessages.push(t2);
      }
      renderAllMessages(t2) {
        return this.errorMessages.map((r2) => r2(t2)).join(`
`);
      }
    };
    function Sr(e2) {
      return new Cn(So(e2));
    }
    function So(e2) {
      let t2 = new Rr();
      for (let [r2, n2] of Object.entries(e2)) {
        let i2 = new Ar(r2, Io(n2));
        t2.addField(i2);
      }
      return t2;
    }
    function Io(e2) {
      if (typeof e2 == "string")
        return new z2(JSON.stringify(e2));
      if (typeof e2 == "number" || typeof e2 == "boolean")
        return new z2(String(e2));
      if (typeof e2 == "bigint")
        return new z2(`${e2}n`);
      if (e2 === null)
        return new z2("null");
      if (e2 === void 0)
        return new z2("undefined");
      if (ft(e2))
        return new z2(`new Prisma.Decimal("${e2.toFixed()}")`);
      if (e2 instanceof Uint8Array)
        return w2.Buffer.isBuffer(e2) ? new z2(`Buffer.alloc(${e2.byteLength})`) : new z2(`new Uint8Array(${e2.byteLength})`);
      if (e2 instanceof Date) {
        let t2 = gr(e2) ? e2.toISOString() : "Invalid Date";
        return new z2(`new Date("${t2}")`);
      }
      return e2 instanceof Te ? new z2(`Prisma.${e2._getName()}`) : mt(e2) ? new z2(`prisma.${co2(e2.modelName)}.$fields.${e2.name}`) : Array.isArray(e2) ? sl(e2) : typeof e2 == "object" ? So(e2) : new z2(Object.prototype.toString.call(e2));
    }
    function sl(e2) {
      let t2 = new gt();
      for (let r2 of e2)
        t2.addItem(Io(r2));
      return t2;
    }
    function Do(e2) {
      if (e2 === void 0)
        return "";
      let t2 = Sr(e2);
      return new ut(0, { colors: Cr }).write(t2).toString();
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var al2 = "P2037";
    function $t({ error: e2, user_facing_error: t2 }, r2, n2) {
      return t2.error_code ? new K2(ul(t2, n2), { code: t2.error_code, clientVersion: r2, meta: t2.meta, batchRequestIdx: t2.batch_request_idx }) : new oe(e2, { clientVersion: r2, batchRequestIdx: t2.batch_request_idx });
    }
    function ul(e2, t2) {
      let r2 = e2.message;
      return (t2 === "postgresql" || t2 === "postgres" || t2 === "mysql") && e2.error_code === al2 && (r2 += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r2;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var An = class {
      getLocation() {
        return null;
      }
    };
    function Fe(e2) {
      return typeof $EnabledCallSite == "function" && e2 !== "minimal" ? new $EnabledCallSite() : new An();
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var ko = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function ht(e2 = {}) {
      let t2 = cl2(e2);
      return Object.entries(t2).reduce((n2, [i2, o2]) => (ko[i2] !== void 0 ? n2.select[i2] = { select: o2 } : n2[i2] = o2, n2), { select: {} });
    }
    function cl2(e2 = {}) {
      return typeof e2._count == "boolean" ? { ...e2, _count: { _all: e2._count } } : e2;
    }
    function Ir(e2 = {}) {
      return (t2) => (typeof e2._count == "boolean" && (t2._count = t2._count._all), t2);
    }
    function Oo(e2, t2) {
      let r2 = Ir(e2);
      return t2({ action: "aggregate", unpacker: r2, argsMapper: ht })(e2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function pl(e2 = {}) {
      let { select: t2, ...r2 } = e2;
      return typeof t2 == "object" ? ht({ ...r2, _count: t2 }) : ht({ ...r2, _count: { _all: true } });
    }
    function fl(e2 = {}) {
      return typeof e2.select == "object" ? (t2) => Ir(e2)(t2)._count : (t2) => Ir(e2)(t2)._count._all;
    }
    function Mo(e2, t2) {
      return t2({ action: "count", unpacker: fl(e2), argsMapper: pl })(e2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function ml(e2 = {}) {
      let t2 = ht(e2);
      if (Array.isArray(t2.by))
        for (let r2 of t2.by)
          typeof r2 == "string" && (t2.select[r2] = true);
      else
        typeof t2.by == "string" && (t2.select[t2.by] = true);
      return t2;
    }
    function dl(e2 = {}) {
      return (t2) => (typeof (e2 == null ? void 0 : e2._count) == "boolean" && t2.forEach((r2) => {
        r2._count = r2._count._all;
      }), t2);
    }
    function No(e2, t2) {
      return t2({ action: "groupBy", unpacker: dl(e2), argsMapper: ml })(e2);
    }
    function _o(e2, t2, r2) {
      if (t2 === "aggregate")
        return (n2) => Oo(n2, r2);
      if (t2 === "count")
        return (n2) => Mo(n2, r2);
      if (t2 === "groupBy")
        return (n2) => No(n2, r2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function Fo(e2, t2) {
      let r2 = t2.fields.filter((i2) => !i2.relationName), n2 = cn2(r2, (i2) => i2.name);
      return new Proxy({}, { get(i2, o2) {
        if (o2 in i2 || typeof o2 == "symbol")
          return i2[o2];
        let s2 = n2[o2];
        if (s2)
          return new Bt(e2, o2, s2.type, s2.isList, s2.kind === "enum");
      }, ...mr(Object.keys(n2)) });
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var Lo = (e2) => Array.isArray(e2) ? e2 : e2.split(".");
    var Rn = (e2, t2) => Lo(t2).reduce((r2, n2) => r2 && r2[n2], e2);
    var Bo = (e2, t2, r2) => Lo(t2).reduceRight((n2, i2, o2, s2) => Object.assign({}, Rn(e2, s2.slice(0, o2)), { [i2]: n2 }), r2);
    function gl(e2, t2) {
      return e2 === void 0 || t2 === void 0 ? [] : [...t2, "select", e2];
    }
    function hl(e2, t2, r2) {
      return t2 === void 0 ? e2 != null ? e2 : {} : Bo(t2, r2, e2 || true);
    }
    function Sn(e2, t2, r2, n2, i2, o2) {
      let a2 = e2._runtimeDataModel.models[t2].fields.reduce((u2, l2) => ({ ...u2, [l2.name]: l2 }), {});
      return (u2) => {
        let l2 = Fe(e2._errorFormat), g2 = gl(n2, i2), h2 = hl(u2, o2, g2), x2 = r2({ dataPath: g2, callsite: l2 })(h2), S2 = yl(e2, t2);
        return new Proxy(x2, { get(C2, A2) {
          if (!S2.includes(A2))
            return C2[A2];
          let O2 = [a2[A2].type, r2, A2], B2 = [g2, h2];
          return Sn(e2, ...O2, ...B2);
        }, ...mr([...S2, ...Object.getOwnPropertyNames(x2)]) });
      };
    }
    function yl(e2, t2) {
      return e2._runtimeDataModel.models[t2].fields.filter((r2) => r2.kind === "object").map((r2) => r2.name);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var wl = Ue(Ki());
    var El = { red: nt, gray: ki, dim: ar2, bold: sr, underline: Ai, highlightSource: (e2) => e2.highlight() };
    var bl2 = { red: (e2) => e2, gray: (e2) => e2, dim: (e2) => e2, bold: (e2) => e2, underline: (e2) => e2, highlightSource: (e2) => e2 };
    function xl({ message: e2, originalMethod: t2, isPanic: r2, callArguments: n2 }) {
      return { functionName: `prisma.${t2}()`, message: e2, isPanic: r2 != null ? r2 : false, callArguments: n2 };
    }
    function Pl({ functionName: e2, location: t2, message: r2, isPanic: n2, contextLines: i2, callArguments: o2 }, s2) {
      let a2 = [""], u2 = t2 ? " in" : ":";
      if (n2 ? (a2.push(s2.red(`Oops, an unknown error occurred! This is ${s2.bold("on us")}, you did nothing wrong.`)), a2.push(s2.red(`It occurred in the ${s2.bold(`\`${e2}\``)} invocation${u2}`))) : a2.push(s2.red(`Invalid ${s2.bold(`\`${e2}\``)} invocation${u2}`)), t2 && a2.push(s2.underline(vl(t2))), i2) {
        a2.push("");
        let l2 = [i2.toString()];
        o2 && (l2.push(o2), l2.push(s2.dim(")"))), a2.push(l2.join("")), o2 && a2.push("");
      } else
        a2.push(""), o2 && a2.push(o2), a2.push("");
      return a2.push(r2), a2.join(`
`);
    }
    function vl(e2) {
      let t2 = [e2.fileName];
      return e2.lineNumber && t2.push(String(e2.lineNumber)), e2.columnNumber && t2.push(String(e2.columnNumber)), t2.join(":");
    }
    function yt(e2) {
      let t2 = e2.showColors ? El : bl2, r2;
      return typeof $getTemplateParameters != "undefined" ? r2 = $getTemplateParameters(e2, t2) : r2 = xl(e2), Pl(r2, t2);
    }
    function $o(e2, t2, r2, n2) {
      return e2 === De.ModelAction.findFirstOrThrow || e2 === De.ModelAction.findUniqueOrThrow ? Tl(t2, r2, n2) : n2;
    }
    function Tl(e2, t2, r2) {
      return async (n2) => {
        if ("rejectOnNotFound" in n2.args) {
          let o2 = yt({ originalMethod: n2.clientMethod, callsite: n2.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new Y2(o2, { clientVersion: t2 });
        }
        return await r2(n2).catch((o2) => {
          throw o2 instanceof K2 && o2.code === "P2025" ? new Pe(`No ${e2} found`, t2) : o2;
        });
      };
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function Ee(e2) {
      return e2.replace(/^./, (t2) => t2.toLowerCase());
    }
    var Cl = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Al = ["aggregate", "count", "groupBy"];
    function In(e2, t2) {
      var i2;
      let r2 = (i2 = e2._extensions.getAllModelExtensions(t2)) != null ? i2 : {}, n2 = [Rl(e2, t2), Il(e2, t2), Ft(r2), ne("name", () => t2), ne("$name", () => t2), ne("$parent", () => e2._appliedParent)];
      return ge({}, n2);
    }
    function Rl(e2, t2) {
      let r2 = Ee(t2), n2 = Object.keys(De.ModelAction).concat("count");
      return { getKeys() {
        return n2;
      }, getPropertyValue(i2) {
        let o2 = i2, s2 = (u2) => e2._request(u2);
        s2 = $o(o2, t2, e2._clientVersion, s2);
        let a2 = (u2) => (l2) => {
          let g2 = Fe(e2._errorFormat);
          return e2._createPrismaPromise((h2) => {
            let x2 = { args: l2, dataPath: [], action: o2, model: t2, clientMethod: `${r2}.${i2}`, jsModelName: r2, transaction: h2, callsite: g2 };
            return s2({ ...x2, ...u2 });
          });
        };
        return Cl.includes(o2) ? Sn(e2, t2, a2) : Sl(i2) ? _o(e2, i2, a2) : a2({});
      } };
    }
    function Sl(e2) {
      return Al.includes(e2);
    }
    function Il(e2, t2) {
      return Qe(ne("fields", () => {
        let r2 = e2._runtimeDataModel.models[t2];
        return Fo(t2, r2);
      }));
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function qo(e2) {
      return e2.replace(/^./, (t2) => t2.toUpperCase());
    }
    var Dn = Symbol();
    function qt(e2) {
      let t2 = [Dl(e2), ne(Dn, () => e2), ne("$parent", () => e2._appliedParent)], r2 = e2._extensions.getAllClientExtensions();
      return r2 && t2.push(Ft(r2)), ge(e2, t2);
    }
    function Dl(e2) {
      let t2 = Object.keys(e2._runtimeDataModel.models), r2 = t2.map(Ee), n2 = [...new Set(t2.concat(r2))];
      return Qe({ getKeys() {
        return n2;
      }, getPropertyValue(i2) {
        let o2 = qo(i2);
        if (e2._runtimeDataModel.models[o2] !== void 0)
          return In(e2, o2);
        if (e2._runtimeDataModel.models[i2] !== void 0)
          return In(e2, i2);
      }, getPropertyDescriptor(i2) {
        if (!r2.includes(i2))
          return { enumerable: false };
      } });
    }
    function Uo(e2) {
      return e2[Dn] ? e2[Dn] : e2;
    }
    function Vo(e2) {
      var r2;
      if (typeof e2 == "function")
        return e2(this);
      if ((r2 = e2.client) != null && r2.__AccelerateEngine) {
        let n2 = e2.client.__AccelerateEngine;
        this._originalClient._engine = new n2(this._originalClient._accelerateEngineConfig);
      }
      let t2 = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e2) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return qt(t2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function jo({ result: e2, modelName: t2, select: r2, omit: n2, extensions: i2 }) {
      let o2 = i2.getAllComputedFields(t2);
      if (!o2)
        return e2;
      let s2 = [], a2 = [];
      for (let u2 of Object.values(o2)) {
        if (n2) {
          if (n2[u2.name])
            continue;
          let l2 = u2.needs.filter((g2) => n2[g2]);
          l2.length > 0 && a2.push(at2(l2));
        } else if (r2) {
          if (!r2[u2.name])
            continue;
          let l2 = u2.needs.filter((g2) => !r2[g2]);
          l2.length > 0 && a2.push(at2(l2));
        }
        kl(e2, u2.needs) && s2.push(Ol(u2, ge(e2, s2)));
      }
      return s2.length > 0 || a2.length > 0 ? ge(e2, [...s2, ...a2]) : e2;
    }
    function kl(e2, t2) {
      return t2.every((r2) => ln(e2, r2));
    }
    function Ol(e2, t2) {
      return Qe(ne(e2.name, () => e2.compute(t2)));
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function Dr({ visitor: e2, result: t2, args: r2, runtimeDataModel: n2, modelName: i2 }) {
      var s2;
      if (Array.isArray(t2)) {
        for (let a2 = 0; a2 < t2.length; a2++)
          t2[a2] = Dr({ result: t2[a2], args: r2, modelName: i2, runtimeDataModel: n2, visitor: e2 });
        return t2;
      }
      let o2 = (s2 = e2(t2, i2, r2)) != null ? s2 : t2;
      return r2.include && Jo({ includeOrSelect: r2.include, result: o2, parentModelName: i2, runtimeDataModel: n2, visitor: e2 }), r2.select && Jo({ includeOrSelect: r2.select, result: o2, parentModelName: i2, runtimeDataModel: n2, visitor: e2 }), o2;
    }
    function Jo({ includeOrSelect: e2, result: t2, parentModelName: r2, runtimeDataModel: n2, visitor: i2 }) {
      for (let [o2, s2] of Object.entries(e2)) {
        if (!s2 || t2[o2] == null)
          continue;
        let u2 = n2.models[r2].fields.find((g2) => g2.name === o2);
        if (!u2 || u2.kind !== "object" || !u2.relationName)
          continue;
        let l2 = typeof s2 == "object" ? s2 : {};
        t2[o2] = Dr({ visitor: i2, result: t2[o2], args: l2, modelName: u2.type, runtimeDataModel: n2 });
      }
    }
    function Qo({ result: e2, modelName: t2, args: r2, extensions: n2, runtimeDataModel: i2 }) {
      return n2.isEmpty() || e2 == null || typeof e2 != "object" || !i2.models[t2] ? e2 : Dr({ result: e2, args: r2 != null ? r2 : {}, modelName: t2, runtimeDataModel: i2, visitor: (s2, a2, u2) => jo({ result: s2, modelName: Ee(a2), select: u2.select, omit: u2.omit, extensions: n2 }) });
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function Go(e2) {
      if (e2 instanceof se)
        return Ml(e2);
      if (Array.isArray(e2)) {
        let r2 = [e2[0]];
        for (let n2 = 1; n2 < e2.length; n2++)
          r2[n2] = Ut(e2[n2]);
        return r2;
      }
      let t2 = {};
      for (let r2 in e2)
        t2[r2] = Ut(e2[r2]);
      return t2;
    }
    function Ml(e2) {
      return new se(e2.strings, e2.values);
    }
    function Ut(e2) {
      if (typeof e2 != "object" || e2 == null || e2 instanceof Te || mt(e2))
        return e2;
      if (ft(e2))
        return new ye(e2.toFixed());
      if (lt(e2))
        return /* @__PURE__ */ new Date(+e2);
      if (ArrayBuffer.isView(e2))
        return e2.slice(0);
      if (Array.isArray(e2)) {
        let t2 = e2.length, r2;
        for (r2 = Array(t2); t2--; )
          r2[t2] = Ut(e2[t2]);
        return r2;
      }
      if (typeof e2 == "object") {
        let t2 = {};
        for (let r2 in e2)
          r2 === "__proto__" ? Object.defineProperty(t2, r2, { value: Ut(e2[r2]), configurable: true, enumerable: true, writable: true }) : t2[r2] = Ut(e2[r2]);
        return t2;
      }
      je(e2, "Unknown value");
    }
    function Wo(e2, t2, r2, n2 = 0) {
      return e2._createPrismaPromise((i2) => {
        var s2, a2;
        let o2 = t2.customDataProxyFetch;
        return "transaction" in t2 && i2 !== void 0 && (((s2 = t2.transaction) == null ? void 0 : s2.kind) === "batch" && t2.transaction.lock.then(), t2.transaction = i2), n2 === r2.length ? e2._executeRequest(t2) : r2[n2]({ model: t2.model, operation: t2.model ? t2.action : t2.clientMethod, args: Go((a2 = t2.args) != null ? a2 : {}), __internalParams: t2, query: (u2, l2 = t2) => {
          let g2 = l2.customDataProxyFetch;
          return l2.customDataProxyFetch = Zo(o2, g2), l2.args = u2, Wo(e2, l2, r2, n2 + 1);
        } });
      });
    }
    function Ko(e2, t2) {
      let { jsModelName: r2, action: n2, clientMethod: i2 } = t2, o2 = r2 ? n2 : i2;
      if (e2._extensions.isEmpty())
        return e2._executeRequest(t2);
      let s2 = e2._extensions.getAllQueryCallbacks(r2 != null ? r2 : "$none", o2);
      return Wo(e2, t2, s2);
    }
    function zo(e2) {
      return (t2) => {
        let r2 = { requests: t2 }, n2 = t2[0].extensions.getAllBatchQueryCallbacks();
        return n2.length ? Yo(r2, n2, 0, e2) : e2(r2);
      };
    }
    function Yo(e2, t2, r2, n2) {
      if (r2 === t2.length)
        return n2(e2);
      let i2 = e2.customDataProxyFetch, o2 = e2.requests[0].transaction;
      return t2[r2]({ args: { queries: e2.requests.map((s2) => ({ model: s2.modelName, operation: s2.action, args: s2.args })), transaction: o2 ? { isolationLevel: o2.kind === "batch" ? o2.isolationLevel : void 0 } : void 0 }, __internalParams: e2, query(s2, a2 = e2) {
        let u2 = a2.customDataProxyFetch;
        return a2.customDataProxyFetch = Zo(i2, u2), Yo(a2, t2, r2 + 1, n2);
      } });
    }
    var Ho = (e2) => e2;
    function Zo(e2 = Ho, t2 = Ho) {
      return (r2) => e2(t2(r2));
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function es(e2, t2, r2) {
      let n2 = Ee(r2);
      return !t2.result || !(t2.result.$allModels || t2.result[n2]) ? e2 : Nl({ ...e2, ...Xo(t2.name, e2, t2.result.$allModels), ...Xo(t2.name, e2, t2.result[n2]) });
    }
    function Nl(e2) {
      let t2 = new de(), r2 = (n2, i2) => t2.getOrCreate(n2, () => i2.has(n2) ? [n2] : (i2.add(n2), e2[n2] ? e2[n2].needs.flatMap((o2) => r2(o2, i2)) : [n2]));
      return ot(e2, (n2) => ({ ...n2, needs: r2(n2.name, /* @__PURE__ */ new Set()) }));
    }
    function Xo(e2, t2, r2) {
      return r2 ? ot(r2, ({ needs: n2, compute: i2 }, o2) => ({ name: o2, needs: n2 ? Object.keys(n2).filter((s2) => n2[s2]) : [], compute: _l(t2, o2, i2) })) : {};
    }
    function _l(e2, t2, r2) {
      var i2;
      let n2 = (i2 = e2 == null ? void 0 : e2[t2]) == null ? void 0 : i2.compute;
      return n2 ? (o2) => r2({ ...o2, [t2]: n2(o2) }) : r2;
    }
    function ts(e2, t2) {
      if (!t2)
        return e2;
      let r2 = { ...e2 };
      for (let n2 of Object.values(t2))
        if (e2[n2.name])
          for (let i2 of n2.needs)
            r2[i2] = true;
      return r2;
    }
    function rs(e2, t2) {
      if (!t2)
        return e2;
      let r2 = { ...e2 };
      for (let n2 of Object.values(t2))
        if (!e2[n2.name])
          for (let i2 of n2.needs)
            delete r2[i2];
      return r2;
    }
    var kr = class {
      constructor(t2, r2) {
        this.extension = t2;
        this.previous = r2;
        this.computedFieldsCache = new de();
        this.modelExtensionsCache = new de();
        this.queryCallbacksCache = new de();
        this.clientExtensions = Dt(() => {
          var t3, r3;
          return this.extension.client ? { ...(r3 = this.previous) == null ? void 0 : r3.getAllClientExtensions(), ...this.extension.client } : (t3 = this.previous) == null ? void 0 : t3.getAllClientExtensions();
        });
        this.batchCallbacks = Dt(() => {
          var n2, i2, o2;
          let t3 = (i2 = (n2 = this.previous) == null ? void 0 : n2.getAllBatchQueryCallbacks()) != null ? i2 : [], r3 = (o2 = this.extension.query) == null ? void 0 : o2.$__internalBatch;
          return r3 ? t3.concat(r3) : t3;
        });
      }
      getAllComputedFields(t2) {
        return this.computedFieldsCache.getOrCreate(t2, () => {
          var r2;
          return es((r2 = this.previous) == null ? void 0 : r2.getAllComputedFields(t2), this.extension, t2);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t2) {
        return this.modelExtensionsCache.getOrCreate(t2, () => {
          var n2, i2;
          let r2 = Ee(t2);
          return !this.extension.model || !(this.extension.model[r2] || this.extension.model.$allModels) ? (n2 = this.previous) == null ? void 0 : n2.getAllModelExtensions(t2) : { ...(i2 = this.previous) == null ? void 0 : i2.getAllModelExtensions(t2), ...this.extension.model.$allModels, ...this.extension.model[r2] };
        });
      }
      getAllQueryCallbacks(t2, r2) {
        return this.queryCallbacksCache.getOrCreate(`${t2}:${r2}`, () => {
          var s2, a2;
          let n2 = (a2 = (s2 = this.previous) == null ? void 0 : s2.getAllQueryCallbacks(t2, r2)) != null ? a2 : [], i2 = [], o2 = this.extension.query;
          return !o2 || !(o2[t2] || o2.$allModels || o2[r2] || o2.$allOperations) ? n2 : (o2[t2] !== void 0 && (o2[t2][r2] !== void 0 && i2.push(o2[t2][r2]), o2[t2].$allOperations !== void 0 && i2.push(o2[t2].$allOperations)), t2 !== "$none" && o2.$allModels !== void 0 && (o2.$allModels[r2] !== void 0 && i2.push(o2.$allModels[r2]), o2.$allModels.$allOperations !== void 0 && i2.push(o2.$allModels.$allOperations)), o2[r2] !== void 0 && i2.push(o2[r2]), o2.$allOperations !== void 0 && i2.push(o2.$allOperations), n2.concat(i2));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Or = class e2 {
      constructor(t2) {
        this.head = t2;
      }
      static empty() {
        return new e2();
      }
      static single(t2) {
        return new e2(new kr(t2));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t2) {
        return new e2(new kr(t2, this.head));
      }
      getAllComputedFields(t2) {
        var r2;
        return (r2 = this.head) == null ? void 0 : r2.getAllComputedFields(t2);
      }
      getAllClientExtensions() {
        var t2;
        return (t2 = this.head) == null ? void 0 : t2.getAllClientExtensions();
      }
      getAllModelExtensions(t2) {
        var r2;
        return (r2 = this.head) == null ? void 0 : r2.getAllModelExtensions(t2);
      }
      getAllQueryCallbacks(t2, r2) {
        var n2, i2;
        return (i2 = (n2 = this.head) == null ? void 0 : n2.getAllQueryCallbacks(t2, r2)) != null ? i2 : [];
      }
      getAllBatchQueryCallbacks() {
        var t2, r2;
        return (r2 = (t2 = this.head) == null ? void 0 : t2.getAllBatchQueryCallbacks()) != null ? r2 : [];
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var ns = re("prisma:client");
    var is = { Vercel: "vercel", "Netlify CI": "netlify" };
    function os({ postinstall: e2, ciName: t2, clientVersion: r2 }) {
      if (ns("checkPlatformCaching:postinstall", e2), ns("checkPlatformCaching:ciName", t2), e2 === true && t2 && t2 in is) {
        let n2 = `Prisma has detected that this project was built on ${t2}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${is[t2]}-build`;
        throw console.error(n2), new G2(n2, r2);
      }
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function ss(e2, t2) {
      return e2 ? e2.datasources ? e2.datasources : e2.datasourceUrl ? { [t2[0]]: { url: e2.datasourceUrl } } : {} : {};
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var Fl = "Cloudflare-Workers";
    var Ll = "node";
    function as2() {
      var e2, t2, r2;
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((e2 = globalThis.navigator) == null ? void 0 : e2.userAgent) === Fl ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((r2 = (t2 = globalThis.process) == null ? void 0 : t2.release) == null ? void 0 : r2.name) === Ll ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    var Bl = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Vercel Edge Functions or Edge Middleware" };
    function Mr() {
      let e2 = as2();
      return { id: e2, prettyName: Bl[e2] || e2, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e2) };
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function wt({ inlineDatasources: e2, overrideDatasources: t2, env: r2, clientVersion: n2 }) {
      var u2, l2;
      let i2, o2 = Object.keys(e2)[0], s2 = (u2 = e2[o2]) == null ? void 0 : u2.url, a2 = (l2 = t2[o2]) == null ? void 0 : l2.url;
      if (o2 === void 0 ? i2 = void 0 : a2 ? i2 = a2 : s2 != null && s2.value ? i2 = s2.value : s2 != null && s2.fromEnvVar && (i2 = r2[s2.fromEnvVar]), (s2 == null ? void 0 : s2.fromEnvVar) !== void 0 && i2 === void 0)
        throw Mr().id === "workerd" ? new G2(`error: Environment variable not found: ${s2.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n2) : new G2(`error: Environment variable not found: ${s2.fromEnvVar}.`, n2);
      if (i2 === void 0)
        throw new G2("error: Missing URL environment variable, value, or override.", n2);
      return i2;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var Nr = class extends Error {
      constructor(t2, r2) {
        super(t2), this.clientVersion = r2.clientVersion, this.cause = r2.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var ue = class extends Nr {
      constructor(t2, r2) {
        var n2;
        super(t2, r2), this.isRetryable = (n2 = r2.isRetryable) != null ? n2 : true;
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    function $(e2, t2) {
      return { ...e2, isRetryable: t2 };
    }
    var Et = class extends ue {
      constructor(r2) {
        super("This request must be retried", $(r2, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    _(Et, "ForcedRetryError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var He = class extends ue {
      constructor(r2, n2) {
        super(r2, $(n2, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    _(He, "InvalidDatasourceError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var We = class extends ue {
      constructor(r2, n2) {
        super(r2, $(n2, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    _(We, "NotImplementedYetError");
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var j2 = class extends ue {
      constructor(t2, r2) {
        super(t2, r2), this.response = r2.response;
        let n2 = this.response.headers.get("prisma-request-id");
        if (n2) {
          let i2 = `(The request id was: ${n2})`;
          this.message = this.message + " " + i2;
        }
      }
    };
    var Ke = class extends j2 {
      constructor(r2) {
        super("Schema needs to be uploaded", $(r2, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    _(Ke, "SchemaMissingError");
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var kn = "This request could not be understood by the server";
    var Vt = class extends j2 {
      constructor(r2, n2, i2) {
        super(n2 || kn, $(r2, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i2 && (this.code = i2);
      }
    };
    _(Vt, "BadRequestError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var jt = class extends j2 {
      constructor(r2, n2) {
        super("Engine not started: healthcheck timeout", $(r2, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n2;
      }
    };
    _(jt, "HealthcheckTimeoutError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var Jt = class extends j2 {
      constructor(r2, n2, i2) {
        super(n2, $(r2, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i2;
      }
    };
    _(Jt, "EngineStartupError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var Qt = class extends j2 {
      constructor(r2) {
        super("Engine version is not supported", $(r2, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    _(Qt, "EngineVersionNotSupportedError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var On = "Request timed out";
    var Gt = class extends j2 {
      constructor(r2, n2 = On) {
        super(n2, $(r2, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    _(Gt, "GatewayTimeoutError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var $l = "Interactive transaction error";
    var Ht = class extends j2 {
      constructor(r2, n2 = $l) {
        super(n2, $(r2, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    _(Ht, "InteractiveTransactionError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var ql = "Request parameters are invalid";
    var Wt = class extends j2 {
      constructor(r2, n2 = ql) {
        super(n2, $(r2, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    _(Wt, "InvalidRequestError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var Mn = "Requested resource does not exist";
    var Kt = class extends j2 {
      constructor(r2, n2 = Mn) {
        super(n2, $(r2, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    _(Kt, "NotFoundError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var Nn = "Unknown server error";
    var bt2 = class extends j2 {
      constructor(r2, n2, i2) {
        super(n2 || Nn, $(r2, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i2;
      }
    };
    _(bt2, "ServerError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var _n = "Unauthorized, check your connection string";
    var zt = class extends j2 {
      constructor(r2, n2 = _n) {
        super(n2, $(r2, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    _(zt, "UnauthorizedError");
    d2();
    c2();
    p2();
    f2();
    m2();
    var Fn = "Usage exceeded, retry again later";
    var Yt = class extends j2 {
      constructor(r2, n2 = Fn) {
        super(n2, $(r2, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    _(Yt, "UsageExceededError");
    async function Ul(e2) {
      let t2;
      try {
        t2 = await e2.text();
      } catch (r2) {
        return { type: "EmptyError" };
      }
      try {
        let r2 = JSON.parse(t2);
        if (typeof r2 == "string")
          switch (r2) {
            case "InternalDataProxyError":
              return { type: "DataProxyError", body: r2 };
            default:
              return { type: "UnknownTextError", body: r2 };
          }
        if (typeof r2 == "object" && r2 !== null) {
          if ("is_panic" in r2 && "message" in r2 && "error_code" in r2)
            return { type: "QueryEngineError", body: r2 };
          if ("EngineNotStarted" in r2 || "InteractiveTransactionMisrouted" in r2 || "InvalidRequestError" in r2) {
            let n2 = Object.values(r2)[0].reason;
            return typeof n2 == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n2) ? { type: "UnknownJsonError", body: r2 } : { type: "DataProxyError", body: r2 };
          }
        }
        return { type: "UnknownJsonError", body: r2 };
      } catch (r2) {
        return t2 === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t2 };
      }
    }
    async function Zt(e2, t2) {
      if (e2.ok)
        return;
      let r2 = { clientVersion: t2, response: e2 }, n2 = await Ul(e2);
      if (n2.type === "QueryEngineError")
        throw new K2(n2.body.message, { code: n2.body.error_code, clientVersion: t2 });
      if (n2.type === "DataProxyError") {
        if (n2.body === "InternalDataProxyError")
          throw new bt2(r2, "Internal Data Proxy error");
        if ("EngineNotStarted" in n2.body) {
          if (n2.body.EngineNotStarted.reason === "SchemaMissing")
            return new Ke(r2);
          if (n2.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new Qt(r2);
          if ("EngineStartupError" in n2.body.EngineNotStarted.reason) {
            let { msg: i2, logs: o2 } = n2.body.EngineNotStarted.reason.EngineStartupError;
            throw new Jt(r2, i2, o2);
          }
          if ("KnownEngineStartupError" in n2.body.EngineNotStarted.reason) {
            let { msg: i2, error_code: o2 } = n2.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new G2(i2, t2, o2);
          }
          if ("HealthcheckTimeout" in n2.body.EngineNotStarted.reason) {
            let { logs: i2 } = n2.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new jt(r2, i2);
          }
        }
        if ("InteractiveTransactionMisrouted" in n2.body) {
          let i2 = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Ht(r2, i2[n2.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n2.body)
          throw new Wt(r2, n2.body.InvalidRequestError.reason);
      }
      if (e2.status === 401 || e2.status === 403)
        throw new zt(r2, xt(_n, n2));
      if (e2.status === 404)
        return new Kt(r2, xt(Mn, n2));
      if (e2.status === 429)
        throw new Yt(r2, xt(Fn, n2));
      if (e2.status === 504)
        throw new Gt(r2, xt(On, n2));
      if (e2.status >= 500)
        throw new bt2(r2, xt(Nn, n2));
      if (e2.status >= 400)
        throw new Vt(r2, xt(kn, n2));
    }
    function xt(e2, t2) {
      return t2.type === "EmptyError" ? e2 : `${e2}: ${JSON.stringify(t2)}`;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function us(e2) {
      let t2 = Math.pow(2, e2) * 50, r2 = Math.ceil(Math.random() * t2) - Math.ceil(t2 / 2), n2 = t2 + r2;
      return new Promise((i2) => setTimeout(() => i2(n2), n2));
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function ls(e2) {
      let t2 = new TextEncoder().encode(e2), r2 = "", n2 = t2.byteLength, i2 = n2 % 3, o2 = n2 - i2, s2, a2, u2, l2, g2;
      for (let h2 = 0; h2 < o2; h2 = h2 + 3)
        g2 = t2[h2] << 16 | t2[h2 + 1] << 8 | t2[h2 + 2], s2 = (g2 & 16515072) >> 18, a2 = (g2 & 258048) >> 12, u2 = (g2 & 4032) >> 6, l2 = g2 & 63, r2 += Ae[s2] + Ae[a2] + Ae[u2] + Ae[l2];
      return i2 == 1 ? (g2 = t2[o2], s2 = (g2 & 252) >> 2, a2 = (g2 & 3) << 4, r2 += Ae[s2] + Ae[a2] + "==") : i2 == 2 && (g2 = t2[o2] << 8 | t2[o2 + 1], s2 = (g2 & 64512) >> 10, a2 = (g2 & 1008) >> 4, u2 = (g2 & 15) << 2, r2 += Ae[s2] + Ae[a2] + Ae[u2] + "="), r2;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function cs2(e2) {
      var r2;
      if (!!((r2 = e2.generator) != null && r2.previewFeatures.some((n2) => n2.toLowerCase().includes("metrics"))))
        throw new G2("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e2.clientVersion);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function Vl(e2) {
      return e2[0] * 1e3 + e2[1] / 1e6;
    }
    function ps(e2) {
      return new Date(Vl(e2));
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var fs = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.15.0-29.12e25d8d06f6ea5a0252864dd9a03b1bb51f3022", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var Xt = class extends ue {
      constructor(r2, n2) {
        super(`Cannot fetch data from service:
${r2}`, $(n2, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    _(Xt, "RequestError");
    async function ze(e2, t2, r2 = (n2) => n2) {
      var i2;
      let n2 = t2.clientVersion;
      try {
        return typeof fetch == "function" ? await r2(fetch)(e2, t2) : await r2(Ln)(e2, t2);
      } catch (o2) {
        let s2 = (i2 = o2.message) != null ? i2 : "Unknown error";
        throw new Xt(s2, { clientVersion: n2 });
      }
    }
    function Jl(e2) {
      return { ...e2.headers, "Content-Type": "application/json" };
    }
    function Ql(e2) {
      return { method: e2.method, headers: Jl(e2) };
    }
    function Gl(e2, t2) {
      return { text: () => Promise.resolve(w2.Buffer.concat(e2).toString()), json: () => Promise.resolve().then(() => JSON.parse(w2.Buffer.concat(e2).toString())), ok: t2.statusCode >= 200 && t2.statusCode <= 299, status: t2.statusCode, url: t2.url, headers: new Bn(t2.headers) };
    }
    async function Ln(e2, t2 = {}) {
      let r2 = Hl("https"), n2 = Ql(t2), i2 = [], { origin: o2 } = new URL(e2);
      return new Promise((s2, a2) => {
        var l2;
        let u2 = r2.request(e2, n2, (g2) => {
          let { statusCode: h2, headers: { location: x2 } } = g2;
          h2 >= 301 && h2 <= 399 && x2 && (x2.startsWith("http") === false ? s2(Ln(`${o2}${x2}`, t2)) : s2(Ln(x2, t2))), g2.on("data", (S2) => i2.push(S2)), g2.on("end", () => s2(Gl(i2, g2))), g2.on("error", a2);
        });
        u2.on("error", a2), u2.end((l2 = t2.body) != null ? l2 : "");
      });
    }
    var Hl = typeof __require != "undefined" ? __require : () => {
    };
    var Bn = class {
      constructor(t2 = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r2, n2] of Object.entries(t2))
          if (typeof n2 == "string")
            this.headers.set(r2, n2);
          else if (Array.isArray(n2))
            for (let i2 of n2)
              this.headers.set(r2, i2);
      }
      append(t2, r2) {
        this.headers.set(t2, r2);
      }
      delete(t2) {
        this.headers.delete(t2);
      }
      get(t2) {
        var r2;
        return (r2 = this.headers.get(t2)) != null ? r2 : null;
      }
      has(t2) {
        return this.headers.has(t2);
      }
      set(t2, r2) {
        this.headers.set(t2, r2);
      }
      forEach(t2, r2) {
        for (let [n2, i2] of this.headers)
          t2.call(r2, i2, n2, this);
      }
    };
    var Wl = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var ms = re("prisma:client:dataproxyEngine");
    async function Kl(e2, t2) {
      var s2, a2, u2;
      let r2 = fs["@prisma/engines-version"], n2 = (s2 = t2.clientVersion) != null ? s2 : "unknown";
      if (y2.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return y2.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e2.includes("accelerate") && n2 !== "0.0.0" && n2 !== "in-memory")
        return n2;
      let [i2, o2] = (a2 = n2 == null ? void 0 : n2.split("-")) != null ? a2 : [];
      if (o2 === void 0 && Wl.test(i2))
        return i2;
      if (o2 !== void 0 || n2 === "0.0.0" || n2 === "in-memory") {
        if (e2.startsWith("localhost") || e2.startsWith("127.0.0.1"))
          return "0.0.0";
        let [l2] = (u2 = r2.split("-")) != null ? u2 : [], [g2, h2, x2] = l2.split("."), S2 = zl(`<=${g2}.${h2}.${x2}`), C2 = await ze(S2, { clientVersion: n2 });
        if (!C2.ok)
          throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${C2.status} ${C2.statusText}, response body: ${await C2.text() || "<empty body>"}`);
        let A2 = await C2.text();
        ms("length of body fetched from unpkg.com", A2.length);
        let k2;
        try {
          k2 = JSON.parse(A2);
        } catch (O2) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", A2), O2;
        }
        return k2.version;
      }
      throw new We("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n2 });
    }
    async function ds(e2, t2) {
      let r2 = await Kl(e2, t2);
      return ms("version", r2), r2;
    }
    function zl(e2) {
      return encodeURI(`https://unpkg.com/prisma@${e2}/package.json`);
    }
    var gs = 3;
    var $n = re("prisma:client:dataproxyEngine");
    var qn = class {
      constructor({ apiKey: t2, tracingHelper: r2, logLevel: n2, logQueries: i2, engineHash: o2 }) {
        this.apiKey = t2, this.tracingHelper = r2, this.logLevel = n2, this.logQueries = i2, this.engineHash = o2;
      }
      build({ traceparent: t2, interactiveTransaction: r2 } = {}) {
        let n2 = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n2.traceparent = t2 != null ? t2 : this.tracingHelper.getTraceParent()), r2 && (n2["X-transaction-id"] = r2.id);
        let i2 = this.buildCaptureSettings();
        return i2.length > 0 && (n2["X-capture-telemetry"] = i2.join(", ")), n2;
      }
      buildCaptureSettings() {
        let t2 = [];
        return this.tracingHelper.isEnabled() && t2.push("tracing"), this.logLevel && t2.push(this.logLevel), this.logQueries && t2.push("query"), t2;
      }
    };
    var er = class {
      constructor(t2) {
        this.name = "DataProxyEngine";
        cs2(t2), this.config = t2, this.env = { ...t2.env, ...typeof y2 != "undefined" ? y2.env : {} }, this.inlineSchema = ls(t2.inlineSchema), this.inlineDatasources = t2.inlineDatasources, this.inlineSchemaHash = t2.inlineSchemaHash, this.clientVersion = t2.clientVersion, this.engineHash = t2.engineVersion, this.logEmitter = t2.logEmitter, this.tracingHelper = t2.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [t2, r2] = this.extractHostAndApiKey();
          this.host = t2, this.headerBuilder = new qn({ apiKey: r2, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await ds(t2, this.config), $n("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t2) {
        var r2, n2;
        (r2 = t2 == null ? void 0 : t2.logs) != null && r2.length && t2.logs.forEach((i2) => {
          switch (i2.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let o2 = typeof i2.attributes.query == "string" ? i2.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [s2] = o2.split("/* traceparent");
                o2 = s2;
              }
              this.logEmitter.emit("query", { query: o2, timestamp: ps(i2.timestamp), duration: Number(i2.attributes.duration_ms), params: i2.attributes.params, target: i2.attributes.target });
            }
          }
        }), (n2 = t2 == null ? void 0 : t2.traces) != null && n2.length && this.tracingHelper.createEngineSpan({ span: true, spans: t2.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t2) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t2}`;
      }
      async uploadSchema() {
        let t2 = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t2, async () => {
          let r2 = await ze(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r2.ok || $n("schema response status", r2.status);
          let n2 = await Zt(r2, this.clientVersion);
          if (n2)
            throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n2.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n2;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t2, { traceparent: r2, interactiveTransaction: n2, customDataProxyFetch: i2 }) {
        return this.requestInternal({ body: t2, traceparent: r2, interactiveTransaction: n2, customDataProxyFetch: i2 });
      }
      async requestBatch(t2, { traceparent: r2, transaction: n2, customDataProxyFetch: i2 }) {
        let o2 = (n2 == null ? void 0 : n2.kind) === "itx" ? n2.options : void 0, s2 = dr(t2, n2), { batchResult: a2, elapsed: u2 } = await this.requestInternal({ body: s2, customDataProxyFetch: i2, interactiveTransaction: o2, traceparent: r2 });
        return a2.map((l2) => "errors" in l2 && l2.errors.length > 0 ? $t(l2.errors[0], this.clientVersion, this.config.activeProvider) : { data: l2, elapsed: u2 });
      }
      requestInternal({ body: t2, traceparent: r2, customDataProxyFetch: n2, interactiveTransaction: i2 }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o2 }) => {
          let s2 = i2 ? `${i2.payload.endpoint}/graphql` : await this.url("graphql");
          o2(s2);
          let a2 = await ze(s2, { method: "POST", headers: this.headerBuilder.build({ traceparent: r2, interactiveTransaction: i2 }), body: JSON.stringify(t2), clientVersion: this.clientVersion }, n2);
          a2.ok || $n("graphql response status", a2.status), await this.handleError(await Zt(a2, this.clientVersion));
          let u2 = await a2.json(), l2 = u2.extensions;
          if (l2 && this.propagateResponseExtensions(l2), u2.errors)
            throw u2.errors.length === 1 ? $t(u2.errors[0], this.config.clientVersion, this.config.activeProvider) : new oe(u2.errors, { clientVersion: this.config.clientVersion });
          return u2;
        } });
      }
      async transaction(t2, r2, n2) {
        let i2 = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i2[t2]} transaction`, callback: async ({ logHttpCall: o2 }) => {
          if (t2 === "start") {
            let s2 = JSON.stringify({ max_wait: n2.maxWait, timeout: n2.timeout, isolation_level: n2.isolationLevel }), a2 = await this.url("transaction/start");
            o2(a2);
            let u2 = await ze(a2, { method: "POST", headers: this.headerBuilder.build({ traceparent: r2.traceparent }), body: s2, clientVersion: this.clientVersion });
            await this.handleError(await Zt(u2, this.clientVersion));
            let l2 = await u2.json(), g2 = l2.extensions;
            g2 && this.propagateResponseExtensions(g2);
            let h2 = l2.id, x2 = l2["data-proxy"].endpoint;
            return { id: h2, payload: { endpoint: x2 } };
          } else {
            let s2 = `${n2.payload.endpoint}/${t2}`;
            o2(s2);
            let a2 = await ze(s2, { method: "POST", headers: this.headerBuilder.build({ traceparent: r2.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await Zt(a2, this.clientVersion));
            let l2 = (await a2.json()).extensions;
            l2 && this.propagateResponseExtensions(l2);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let t2 = { clientVersion: this.clientVersion }, r2 = Object.keys(this.inlineDatasources)[0], n2 = wt({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i2;
        try {
          i2 = new URL(n2);
        } catch (l2) {
          throw new He(`Error validating datasource \`${r2}\`: the URL must start with the protocol \`prisma://\``, t2);
        }
        let { protocol: o2, host: s2, searchParams: a2 } = i2;
        if (o2 !== "prisma:")
          throw new He(`Error validating datasource \`${r2}\`: the URL must start with the protocol \`prisma://\``, t2);
        let u2 = a2.get("api_key");
        if (u2 === null || u2.length < 1)
          throw new He(`Error validating datasource \`${r2}\`: the URL must contain a valid API key`, t2);
        return [s2, u2];
      }
      metrics() {
        throw new We("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t2) {
        var r2;
        for (let n2 = 0; ; n2++) {
          let i2 = (o2) => {
            this.logEmitter.emit("info", { message: `Calling ${o2} (n=${n2})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          };
          try {
            return await t2.callback({ logHttpCall: i2 });
          } catch (o2) {
            if (!(o2 instanceof ue) || !o2.isRetryable)
              throw o2;
            if (n2 >= gs)
              throw o2 instanceof Et ? o2.cause : o2;
            this.logEmitter.emit("warn", { message: `Attempt ${n2 + 1}/${gs} failed for ${t2.actionGerund}: ${(r2 = o2.message) != null ? r2 : "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let s2 = await us(n2);
            this.logEmitter.emit("warn", { message: `Retrying after ${s2}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t2) {
        if (t2 instanceof Ke)
          throw await this.uploadSchema(), new Et({ clientVersion: this.clientVersion, cause: t2 });
        if (t2)
          throw t2;
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    function hs({ copyEngine: e2 = true }, t2) {
      let r2;
      try {
        r2 = wt({ inlineDatasources: t2.inlineDatasources, overrideDatasources: t2.overrideDatasources, env: { ...t2.env, ...y2.env }, clientVersion: t2.clientVersion });
      } catch (u2) {
      }
      e2 && (r2 != null && r2.startsWith("prisma://")) && It("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n2 = Rt(t2.generator), i2 = !!(r2 != null && r2.startsWith("prisma://") || !e2), o2 = !!t2.adapter, s2 = n2 === "library", a2 = n2 === "binary";
      if (i2 && o2 || o2) {
        let u2;
        throw u2 = ["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."], new Y2(u2.join(`
`), { clientVersion: t2.clientVersion });
      }
      if (i2)
        return new er(t2);
      throw new Y2("Invalid client engine type, please use `library` or `binary`", { clientVersion: t2.clientVersion });
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function _r({ generator: e2 }) {
      var t2;
      return (t2 = e2 == null ? void 0 : e2.previewFeatures) != null ? t2 : [];
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var Ps = Ue(Un());
    d2();
    c2();
    p2();
    f2();
    m2();
    function bs2(e2, t2) {
      let r2 = xs(e2), n2 = Yl(r2), i2 = Xl(n2);
      i2 ? Fr(i2, t2) : t2.addErrorMessage(() => "Unknown error");
    }
    function xs(e2) {
      return e2.errors.flatMap((t2) => t2.kind === "Union" ? xs(t2) : [t2]);
    }
    function Yl(e2) {
      let t2 = /* @__PURE__ */ new Map(), r2 = [];
      for (let n2 of e2) {
        if (n2.kind !== "InvalidArgumentType") {
          r2.push(n2);
          continue;
        }
        let i2 = `${n2.selectionPath.join(".")}:${n2.argumentPath.join(".")}`, o2 = t2.get(i2);
        o2 ? t2.set(i2, { ...n2, argument: { ...n2.argument, typeNames: Zl(o2.argument.typeNames, n2.argument.typeNames) } }) : t2.set(i2, n2);
      }
      return r2.push(...t2.values()), r2;
    }
    function Zl(e2, t2) {
      return [...new Set(e2.concat(t2))];
    }
    function Xl(e2) {
      return pn(e2, (t2, r2) => {
        let n2 = ws(t2), i2 = ws(r2);
        return n2 !== i2 ? n2 - i2 : Es(t2) - Es(r2);
      });
    }
    function ws(e2) {
      let t2 = 0;
      return Array.isArray(e2.selectionPath) && (t2 += e2.selectionPath.length), Array.isArray(e2.argumentPath) && (t2 += e2.argumentPath.length), t2;
    }
    function Es(e2) {
      switch (e2.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var le = class {
      constructor(t2, r2) {
        this.name = t2;
        this.value = r2;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t2) {
        let { colors: { green: r2 } } = t2.context;
        t2.addMarginSymbol(r2(this.isRequired ? "+" : "?")), t2.write(r2(this.name)), this.isRequired || t2.write(r2("?")), t2.write(r2(": ")), typeof this.value == "string" ? t2.write(r2(this.value)) : t2.write(this.value);
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var Lr = class {
      constructor() {
        this.fields = [];
      }
      addField(t2, r2) {
        return this.fields.push({ write(n2) {
          let { green: i2, dim: o2 } = n2.context.colors;
          n2.write(i2(o2(`${t2}: ${r2}`))).addMarginSymbol(i2(o2("+")));
        } }), this;
      }
      write(t2) {
        let { colors: { green: r2 } } = t2.context;
        t2.writeLine(r2("{")).withIndent(() => {
          t2.writeJoined(dt, this.fields).newLine();
        }).write(r2("}")).addMarginSymbol(r2("+"));
      }
    };
    function Fr(e2, t2) {
      switch (e2.kind) {
        case "MutuallyExclusiveFields":
          ec(e2, t2);
          break;
        case "IncludeOnScalar":
          tc(e2, t2);
          break;
        case "EmptySelection":
          rc(e2, t2);
          break;
        case "UnknownSelectionField":
          oc(e2, t2);
          break;
        case "UnknownArgument":
          sc(e2, t2);
          break;
        case "UnknownInputField":
          ac2(e2, t2);
          break;
        case "RequiredArgumentMissing":
          uc(e2, t2);
          break;
        case "InvalidArgumentType":
          lc(e2, t2);
          break;
        case "InvalidArgumentValue":
          cc2(e2, t2);
          break;
        case "ValueTooLarge":
          pc(e2, t2);
          break;
        case "SomeFieldsMissing":
          fc(e2, t2);
          break;
        case "TooManyFieldsGiven":
          mc(e2, t2);
          break;
        case "Union":
          bs2(e2, t2);
          break;
        default:
          throw new Error("not implemented: " + e2.kind);
      }
    }
    function ec(e2, t2) {
      var n2, i2, o2;
      let r2 = (n2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : n2.asObject();
      r2 && ((i2 = r2.getField(e2.firstField)) == null || i2.markAsError(), (o2 = r2.getField(e2.secondField)) == null || o2.markAsError()), t2.addErrorMessage((s2) => `Please ${s2.bold("either")} use ${s2.green(`\`${e2.firstField}\``)} or ${s2.green(`\`${e2.secondField}\``)}, but ${s2.red("not both")} at the same time.`);
    }
    function tc(e2, t2) {
      var s2, a2;
      let [r2, n2] = Br(e2.selectionPath), i2 = e2.outputType, o2 = (s2 = t2.arguments.getDeepSelectionParent(r2)) == null ? void 0 : s2.value;
      if (o2 && ((a2 = o2.getField(n2)) == null || a2.markAsError(), i2))
        for (let u2 of i2.fields)
          u2.isRelation && o2.addSuggestion(new le(u2.name, "true"));
      t2.addErrorMessage((u2) => {
        let l2 = `Invalid scalar field ${u2.red(`\`${n2}\``)} for ${u2.bold("include")} statement`;
        return i2 ? l2 += ` on model ${u2.bold(i2.name)}. ${tr(u2)}` : l2 += ".", l2 += `
Note that ${u2.bold("include")} statements only accept relation fields.`, l2;
      });
    }
    function rc(e2, t2) {
      var n2, i2;
      let r2 = (n2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : n2.asObject();
      if (r2) {
        let o2 = (i2 = r2.getField("omit")) == null ? void 0 : i2.value.asObject();
        if (o2) {
          nc(e2, t2, o2);
          return;
        }
      }
      ic(e2, t2);
    }
    function nc(e2, t2, r2) {
      r2.removeAllFields();
      for (let n2 of e2.outputType.fields)
        r2.addSuggestion(new le(n2.name, "false"));
      t2.addErrorMessage((n2) => `The ${n2.red("omit")} statement includes every field of the model ${n2.bold(e2.outputType.name)}. At least one field must be included in the result`);
    }
    function ic(e2, t2) {
      var o2, s2;
      let r2 = e2.outputType, n2 = (o2 = t2.arguments.getDeepSelectionParent(e2.selectionPath)) == null ? void 0 : o2.value, i2 = (s2 = n2 == null ? void 0 : n2.isEmpty()) != null ? s2 : false;
      n2 && (n2.removeAllFields(), Cs(n2, r2)), t2.addErrorMessage((a2) => i2 ? `The ${a2.red("`select`")} statement for type ${a2.bold(r2.name)} must not be empty. ${tr(a2)}` : `The ${a2.red("`select`")} statement for type ${a2.bold(r2.name)} needs ${a2.bold("at least one truthy value")}.`);
    }
    function oc(e2, t2) {
      var s2, a2, u2, l2, g2, h2, x2;
      let [r2, n2] = Br(e2.selectionPath), i2 = (s2 = t2.arguments.getDeepSubSelectionValue(r2)) == null ? void 0 : s2.asObject(), o2;
      if (i2) {
        let S2 = (a2 = i2.getFieldValue("select")) == null ? void 0 : a2.asObject(), C2 = (u2 = i2.getFieldValue("include")) == null ? void 0 : u2.asObject(), A2 = (l2 = i2.getFieldValue("omit")) == null ? void 0 : l2.asObject();
        S2 != null && S2.hasField(n2) ? (o2 = "select", (g2 = S2.getField(n2)) == null || g2.markAsError(), Cs(S2, e2.outputType)) : C2 != null && C2.hasField(n2) ? (o2 = "include", (h2 = C2.getField(n2)) == null || h2.markAsError(), dc(C2, e2.outputType)) : A2 != null && A2.hasField(n2) && (o2 = "omit", (x2 = A2.getField(n2)) == null || x2.markAsError(), gc(A2, e2.outputType));
      }
      t2.addErrorMessage((S2) => {
        let C2 = [`Unknown field ${S2.red(`\`${n2}\``)}`];
        return o2 && C2.push(`for ${S2.bold(o2)} statement`), C2.push(`on model ${S2.bold(`\`${e2.outputType.name}\``)}.`), C2.push(tr(S2)), C2.join(" ");
      });
    }
    function sc(e2, t2) {
      var i2, o2;
      let r2 = e2.argumentPath[0], n2 = (i2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : i2.asObject();
      n2 && ((o2 = n2.getField(r2)) == null || o2.markAsError(), hc(n2, e2.arguments)), t2.addErrorMessage((s2) => vs(s2, r2, e2.arguments.map((a2) => a2.name)));
    }
    function ac2(e2, t2) {
      var o2, s2, a2;
      let [r2, n2] = Br(e2.argumentPath), i2 = (o2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : o2.asObject();
      if (i2) {
        (s2 = i2.getDeepField(e2.argumentPath)) == null || s2.markAsError();
        let u2 = (a2 = i2.getDeepFieldValue(r2)) == null ? void 0 : a2.asObject();
        u2 && As(u2, e2.inputType);
      }
      t2.addErrorMessage((u2) => vs(u2, n2, e2.inputType.fields.map((l2) => l2.name)));
    }
    function vs(e2, t2, r2) {
      let n2 = [`Unknown argument \`${e2.red(t2)}\`.`], i2 = wc(t2, r2);
      return i2 && n2.push(`Did you mean \`${e2.green(i2)}\`?`), r2.length > 0 && n2.push(tr(e2)), n2.join(" ");
    }
    function uc(e2, t2) {
      var u2, l2;
      let r2;
      t2.addErrorMessage((g2) => (r2 == null ? void 0 : r2.value) instanceof z2 && r2.value.text === "null" ? `Argument \`${g2.green(o2)}\` must not be ${g2.red("null")}.` : `Argument \`${g2.green(o2)}\` is missing.`);
      let n2 = (u2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : u2.asObject();
      if (!n2)
        return;
      let [i2, o2] = Br(e2.argumentPath), s2 = new Lr(), a2 = (l2 = n2.getDeepFieldValue(i2)) == null ? void 0 : l2.asObject();
      if (a2)
        if (r2 = a2.getField(o2), r2 && a2.removeField(o2), e2.inputTypes.length === 1 && e2.inputTypes[0].kind === "object") {
          for (let g2 of e2.inputTypes[0].fields)
            s2.addField(g2.name, g2.typeNames.join(" | "));
          a2.addSuggestion(new le(o2, s2).makeRequired());
        } else {
          let g2 = e2.inputTypes.map(Ts).join(" | ");
          a2.addSuggestion(new le(o2, g2).makeRequired());
        }
    }
    function Ts(e2) {
      return e2.kind === "list" ? `${Ts(e2.elementType)}[]` : e2.name;
    }
    function lc(e2, t2) {
      var i2, o2;
      let r2 = e2.argument.name, n2 = (i2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : i2.asObject();
      n2 && ((o2 = n2.getDeepFieldValue(e2.argumentPath)) == null || o2.markAsError()), t2.addErrorMessage((s2) => {
        let a2 = $r("or", e2.argument.typeNames.map((u2) => s2.green(u2)));
        return `Argument \`${s2.bold(r2)}\`: Invalid value provided. Expected ${a2}, provided ${s2.red(e2.inferredType)}.`;
      });
    }
    function cc2(e2, t2) {
      var i2, o2;
      let r2 = e2.argument.name, n2 = (i2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : i2.asObject();
      n2 && ((o2 = n2.getDeepFieldValue(e2.argumentPath)) == null || o2.markAsError()), t2.addErrorMessage((s2) => {
        let a2 = [`Invalid value for argument \`${s2.bold(r2)}\``];
        if (e2.underlyingError && a2.push(`: ${e2.underlyingError}`), a2.push("."), e2.argument.typeNames.length > 0) {
          let u2 = $r("or", e2.argument.typeNames.map((l2) => s2.green(l2)));
          a2.push(` Expected ${u2}.`);
        }
        return a2.join("");
      });
    }
    function pc(e2, t2) {
      var o2;
      let r2 = e2.argument.name, n2 = (o2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : o2.asObject(), i2;
      if (n2) {
        let s2 = n2.getDeepField(e2.argumentPath), a2 = s2 == null ? void 0 : s2.value;
        a2 == null || a2.markAsError(), a2 instanceof z2 && (i2 = a2.text);
      }
      t2.addErrorMessage((s2) => {
        let a2 = ["Unable to fit value"];
        return i2 && a2.push(s2.red(i2)), a2.push(`into a 64-bit signed integer for field \`${s2.bold(r2)}\``), a2.join(" ");
      });
    }
    function fc(e2, t2) {
      var i2, o2;
      let r2 = e2.argumentPath[e2.argumentPath.length - 1], n2 = (i2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : i2.asObject();
      if (n2) {
        let s2 = (o2 = n2.getDeepFieldValue(e2.argumentPath)) == null ? void 0 : o2.asObject();
        s2 && As(s2, e2.inputType);
      }
      t2.addErrorMessage((s2) => {
        let a2 = [`Argument \`${s2.bold(r2)}\` of type ${s2.bold(e2.inputType.name)} needs`];
        return e2.constraints.minFieldCount === 1 ? e2.constraints.requiredFields ? a2.push(`${s2.green("at least one of")} ${$r("or", e2.constraints.requiredFields.map((u2) => `\`${s2.bold(u2)}\``))} arguments.`) : a2.push(`${s2.green("at least one")} argument.`) : a2.push(`${s2.green(`at least ${e2.constraints.minFieldCount}`)} arguments.`), a2.push(tr(s2)), a2.join(" ");
      });
    }
    function mc(e2, t2) {
      var o2, s2;
      let r2 = e2.argumentPath[e2.argumentPath.length - 1], n2 = (o2 = t2.arguments.getDeepSubSelectionValue(e2.selectionPath)) == null ? void 0 : o2.asObject(), i2 = [];
      if (n2) {
        let a2 = (s2 = n2.getDeepFieldValue(e2.argumentPath)) == null ? void 0 : s2.asObject();
        a2 && (a2.markAsError(), i2 = Object.keys(a2.getFields()));
      }
      t2.addErrorMessage((a2) => {
        let u2 = [`Argument \`${a2.bold(r2)}\` of type ${a2.bold(e2.inputType.name)} needs`];
        return e2.constraints.minFieldCount === 1 && e2.constraints.maxFieldCount == 1 ? u2.push(`${a2.green("exactly one")} argument,`) : e2.constraints.maxFieldCount == 1 ? u2.push(`${a2.green("at most one")} argument,`) : u2.push(`${a2.green(`at most ${e2.constraints.maxFieldCount}`)} arguments,`), u2.push(`but you provided ${$r("and", i2.map((l2) => a2.red(l2)))}. Please choose`), e2.constraints.maxFieldCount === 1 ? u2.push("one.") : u2.push(`${e2.constraints.maxFieldCount}.`), u2.join(" ");
      });
    }
    function Cs(e2, t2) {
      for (let r2 of t2.fields)
        e2.hasField(r2.name) || e2.addSuggestion(new le(r2.name, "true"));
    }
    function dc(e2, t2) {
      for (let r2 of t2.fields)
        r2.isRelation && !e2.hasField(r2.name) && e2.addSuggestion(new le(r2.name, "true"));
    }
    function gc(e2, t2) {
      for (let r2 of t2.fields)
        !e2.hasField(r2.name) && !r2.isRelation && e2.addSuggestion(new le(r2.name, "true"));
    }
    function hc(e2, t2) {
      for (let r2 of t2)
        e2.hasField(r2.name) || e2.addSuggestion(new le(r2.name, r2.typeNames.join(" | ")));
    }
    function As(e2, t2) {
      if (t2.kind === "object")
        for (let r2 of t2.fields)
          e2.hasField(r2.name) || e2.addSuggestion(new le(r2.name, r2.typeNames.join(" | ")));
    }
    function Br(e2) {
      let t2 = [...e2], r2 = t2.pop();
      if (!r2)
        throw new Error("unexpected empty path");
      return [t2, r2];
    }
    function tr({ green: e2, enabled: t2 }) {
      return "Available options are " + (t2 ? `listed in ${e2("green")}` : "marked with ?") + ".";
    }
    function $r(e2, t2) {
      if (t2.length === 1)
        return t2[0];
      let r2 = [...t2], n2 = r2.pop();
      return `${r2.join(", ")} ${e2} ${n2}`;
    }
    var yc = 3;
    function wc(e2, t2) {
      let r2 = 1 / 0, n2;
      for (let i2 of t2) {
        let o2 = (0, Ps.default)(e2, i2);
        o2 > yc || o2 < r2 && (r2 = o2, n2 = i2);
      }
      return n2;
    }
    function qr({ args: e2, errors: t2, errorFormat: r2, callsite: n2, originalMethod: i2, clientVersion: o2 }) {
      let s2 = Sr(e2);
      for (let h2 of t2)
        Fr(h2, s2);
      let a2 = r2 === "pretty" ? Ao : Cr, u2 = s2.renderAllMessages(a2), l2 = new ut(0, { colors: a2 }).write(s2).toString(), g2 = yt({ message: u2, callsite: n2, originalMethod: i2, showColors: r2 === "pretty", callArguments: l2 });
      throw new Y2(g2, { clientVersion: o2 });
    }
    var Ec = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Rs({ modelName: e2, action: t2, args: r2, runtimeDataModel: n2, extensions: i2, callsite: o2, clientMethod: s2, errorFormat: a2, clientVersion: u2, previewFeatures: l2 }) {
      let g2 = new Vn({ runtimeDataModel: n2, modelName: e2, action: t2, rootArgs: r2, callsite: o2, extensions: i2, selectionPath: [], argumentPath: [], originalMethod: s2, errorFormat: a2, clientVersion: u2, previewFeatures: l2 });
      return { modelName: e2, action: Ec[t2], query: jn(r2, g2) };
    }
    function jn({ select: e2, include: t2, ...r2 } = {}, n2) {
      let i2;
      return n2.isPreviewFeatureOn("omitApi") && (i2 = r2.omit, delete r2.omit), { arguments: Is(r2, n2), selection: bc2(e2, t2, i2, n2) };
    }
    function bc2(e2, t2, r2, n2) {
      return e2 ? (t2 ? n2.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n2.getSelectionPath() }) : r2 && n2.isPreviewFeatureOn("omitApi") && n2.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n2.getSelectionPath() }), Tc(e2, n2)) : xc(n2, t2, r2);
    }
    function xc(e2, t2, r2) {
      let n2 = {};
      return e2.model && !e2.isRawAction() && (n2.$composites = true, n2.$scalars = true), t2 && Pc(n2, t2, e2), r2 && e2.isPreviewFeatureOn("omitApi") && vc(n2, r2, e2), n2;
    }
    function Pc(e2, t2, r2) {
      for (let [n2, i2] of Object.entries(t2)) {
        let o2 = r2.findField(n2);
        o2 && (o2 == null ? void 0 : o2.kind) !== "object" && r2.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r2.getSelectionPath().concat(n2), outputType: r2.getOutputTypeDescription() }), i2 === true ? e2[n2] = true : typeof i2 == "object" && (e2[n2] = jn(i2, r2.nestSelection(n2)));
      }
    }
    function vc(e2, t2, r2) {
      let n2 = r2.getComputedFields(), i2 = rs(t2, n2);
      for (let [o2, s2] of Object.entries(i2)) {
        let a2 = r2.findField(o2);
        n2 != null && n2[o2] && !a2 || (e2[o2] = !s2);
      }
    }
    function Tc(e2, t2) {
      let r2 = {}, n2 = t2.getComputedFields(), i2 = ts(e2, n2);
      for (let [o2, s2] of Object.entries(i2)) {
        let a2 = t2.findField(o2);
        n2 != null && n2[o2] && !a2 || (s2 === true ? r2[o2] = true : typeof s2 == "object" && (r2[o2] = jn(s2, t2.nestSelection(o2))));
      }
      return r2;
    }
    function Ss(e2, t2) {
      if (e2 === null)
        return null;
      if (typeof e2 == "string" || typeof e2 == "number" || typeof e2 == "boolean")
        return e2;
      if (typeof e2 == "bigint")
        return { $type: "BigInt", value: String(e2) };
      if (lt(e2)) {
        if (gr(e2))
          return { $type: "DateTime", value: e2.toISOString() };
        t2.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t2.getSelectionPath(), argumentPath: t2.getArgumentPath(), argument: { name: t2.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (mt(e2))
        return { $type: "FieldRef", value: { _ref: e2.name, _container: e2.modelName } };
      if (Array.isArray(e2))
        return Cc(e2, t2);
      if (ArrayBuffer.isView(e2))
        return { $type: "Bytes", value: w2.Buffer.from(e2).toString("base64") };
      if (Ac(e2))
        return e2.values;
      if (ft(e2))
        return { $type: "Decimal", value: e2.toFixed() };
      if (e2 instanceof Te) {
        if (e2 !== pr.instances[e2._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e2._getName() };
      }
      if (Rc(e2))
        return e2.toJSON();
      if (typeof e2 == "object")
        return Is(e2, t2);
      t2.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t2.getSelectionPath(), argumentPath: t2.getArgumentPath(), argument: { name: t2.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e2)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Is(e2, t2) {
      if (e2.$type)
        return { $type: "Raw", value: e2 };
      let r2 = {};
      for (let n2 in e2) {
        let i2 = e2[n2];
        i2 !== void 0 && (r2[n2] = Ss(i2, t2.nestArgument(n2)));
      }
      return r2;
    }
    function Cc(e2, t2) {
      let r2 = [];
      for (let n2 = 0; n2 < e2.length; n2++) {
        let i2 = t2.nestArgument(String(n2)), o2 = e2[n2];
        o2 === void 0 && t2.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i2.getSelectionPath(), argumentPath: i2.getArgumentPath(), argument: { name: `${t2.getArgumentName()}[${n2}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r2.push(Ss(o2, i2));
      }
      return r2;
    }
    function Ac(e2) {
      return typeof e2 == "object" && e2 !== null && e2.__prismaRawParameters__ === true;
    }
    function Rc(e2) {
      return typeof e2 == "object" && e2 !== null && typeof e2.toJSON == "function";
    }
    var Vn = class e2 {
      constructor(t2) {
        this.params = t2;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t2) {
        var r2;
        qr({ errors: [t2], originalMethod: this.params.originalMethod, args: (r2 = this.params.rootArgs) != null ? r2 : {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t2) => ({ name: t2.name, typeName: "boolean", isRelation: t2.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t2) {
        return this.params.previewFeatures.includes(t2);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t2) {
        var r2;
        return (r2 = this.model) == null ? void 0 : r2.fields.find((n2) => n2.name === t2);
      }
      nestSelection(t2) {
        let r2 = this.findField(t2), n2 = (r2 == null ? void 0 : r2.kind) === "object" ? r2.type : void 0;
        return new e2({ ...this.params, modelName: n2, selectionPath: this.params.selectionPath.concat(t2) });
      }
      nestArgument(t2) {
        return new e2({ ...this.params, argumentPath: this.params.argumentPath.concat(t2) });
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var Ds = (e2) => ({ command: e2 });
    d2();
    c2();
    p2();
    f2();
    m2();
    d2();
    c2();
    p2();
    f2();
    m2();
    var ks = (e2) => e2.strings.reduce((t2, r2, n2) => `${t2}@P${n2}${r2}`);
    d2();
    c2();
    p2();
    f2();
    m2();
    function rr(e2) {
      try {
        return Os(e2, "fast");
      } catch (t2) {
        return Os(e2, "slow");
      }
    }
    function Os(e2, t2) {
      return JSON.stringify(e2.map((r2) => Sc(r2, t2)));
    }
    function Sc(e2, t2) {
      return typeof e2 == "bigint" ? { prisma__type: "bigint", prisma__value: e2.toString() } : lt(e2) ? { prisma__type: "date", prisma__value: e2.toJSON() } : ye.isDecimal(e2) ? { prisma__type: "decimal", prisma__value: e2.toJSON() } : w2.Buffer.isBuffer(e2) ? { prisma__type: "bytes", prisma__value: e2.toString("base64") } : Ic(e2) || ArrayBuffer.isView(e2) ? { prisma__type: "bytes", prisma__value: w2.Buffer.from(e2).toString("base64") } : typeof e2 == "object" && t2 === "slow" ? Ns(e2) : e2;
    }
    function Ic(e2) {
      return e2 instanceof ArrayBuffer || e2 instanceof SharedArrayBuffer ? true : typeof e2 == "object" && e2 !== null ? e2[Symbol.toStringTag] === "ArrayBuffer" || e2[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function Ns(e2) {
      if (typeof e2 != "object" || e2 === null)
        return e2;
      if (typeof e2.toJSON == "function")
        return e2.toJSON();
      if (Array.isArray(e2))
        return e2.map(Ms);
      let t2 = {};
      for (let r2 of Object.keys(e2))
        t2[r2] = Ms(e2[r2]);
      return t2;
    }
    function Ms(e2) {
      return typeof e2 == "bigint" ? e2.toString() : Ns(e2);
    }
    var Dc = /^(\s*alter\s)/i;
    var _s2 = re("prisma:client");
    function Jn(e2, t2, r2, n2) {
      if (!(e2 !== "postgresql" && e2 !== "cockroachdb") && r2.length > 0 && Dc.exec(t2))
        throw new Error(`Running ALTER using ${n2} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Qn = ({ clientMethod: e2, activeProvider: t2 }) => (r2) => {
      let n2 = "", i2;
      if (Array.isArray(r2)) {
        let [o2, ...s2] = r2;
        n2 = o2, i2 = { values: rr(s2 || []), __prismaRawParameters__: true };
      } else
        switch (t2) {
          case "sqlite":
          case "mysql": {
            n2 = r2.sql, i2 = { values: rr(r2.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            n2 = r2.text, i2 = { values: rr(r2.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n2 = ks(r2), i2 = { values: rr(r2.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t2} provider does not support ${e2}`);
        }
      return i2 != null && i2.values ? _s2(`prisma.${e2}(${n2}, ${i2.values})`) : _s2(`prisma.${e2}(${n2})`), { query: n2, parameters: i2 };
    };
    var Fs = { requestArgsToMiddlewareArgs(e2) {
      return [e2.strings, ...e2.values];
    }, middlewareArgsToRequestArgs(e2) {
      let [t2, ...r2] = e2;
      return new se(t2, r2);
    } };
    var Ls = { requestArgsToMiddlewareArgs(e2) {
      return [e2];
    }, middlewareArgsToRequestArgs(e2) {
      return e2[0];
    } };
    d2();
    c2();
    p2();
    f2();
    m2();
    function Gn(e2) {
      return function(r2) {
        let n2, i2 = (o2 = e2) => {
          try {
            return o2 === void 0 || (o2 == null ? void 0 : o2.kind) === "itx" ? n2 != null ? n2 : n2 = Bs(r2(o2)) : Bs(r2(o2));
          } catch (s2) {
            return Promise.reject(s2);
          }
        };
        return { then(o2, s2) {
          return i2().then(o2, s2);
        }, catch(o2) {
          return i2().catch(o2);
        }, finally(o2) {
          return i2().finally(o2);
        }, requestTransaction(o2) {
          let s2 = i2(o2);
          return s2.requestTransaction ? s2.requestTransaction(o2) : s2;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function Bs(e2) {
      return typeof e2.then == "function" ? e2 : Promise.resolve(e2);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var $s = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e2, t2) {
      return t2();
    } };
    var Hn = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t2) {
        return this.getGlobalTracingHelper().getTraceParent(t2);
      }
      createEngineSpan(t2) {
        return this.getGlobalTracingHelper().createEngineSpan(t2);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t2, r2) {
        return this.getGlobalTracingHelper().runInChildSpan(t2, r2);
      }
      getGlobalTracingHelper() {
        var t2, r2;
        return (r2 = (t2 = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : t2.helper) != null ? r2 : $s;
      }
    };
    function qs(e2) {
      return e2.includes("tracing") ? new Hn() : $s;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function Us(e2, t2 = () => {
    }) {
      let r2, n2 = new Promise((i2) => r2 = i2);
      return { then(i2) {
        return --e2 === 0 && r2(t2()), i2 == null ? void 0 : i2(n2);
      } };
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var kc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Vs = kc;
    d2();
    c2();
    p2();
    f2();
    m2();
    function js(e2) {
      return typeof e2 == "string" ? e2 : e2.reduce((t2, r2) => {
        let n2 = typeof r2 == "string" ? r2 : r2.level;
        return n2 === "query" ? t2 : t2 && (r2 === "info" || t2 === "info") ? "info" : n2;
      }, void 0);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var Ur = class {
      constructor() {
        this._middlewares = [];
      }
      use(t2) {
        this._middlewares.push(t2);
      }
      get(t2) {
        return this._middlewares[t2];
      }
      has(t2) {
        return !!this._middlewares[t2];
      }
      length() {
        return this._middlewares.length;
      }
    };
    d2();
    c2();
    p2();
    f2();
    m2();
    var Qs = Ue(eo());
    d2();
    c2();
    p2();
    f2();
    m2();
    function Vr(e2) {
      return typeof e2.batchRequestIdx == "number";
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function jr(e2) {
      return e2 === null ? e2 : Array.isArray(e2) ? e2.map(jr) : typeof e2 == "object" ? Oc(e2) ? Mc(e2) : ot(e2, jr) : e2;
    }
    function Oc(e2) {
      return e2 !== null && typeof e2 == "object" && typeof e2.$type == "string";
    }
    function Mc({ $type: e2, value: t2 }) {
      switch (e2) {
        case "BigInt":
          return BigInt(t2);
        case "Bytes":
          return w2.Buffer.from(t2, "base64");
        case "DateTime":
          return new Date(t2);
        case "Decimal":
          return new ye(t2);
        case "Json":
          return JSON.parse(t2);
        default:
          je(t2, "Unknown tagged value");
      }
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function Js(e2) {
      if (e2.action !== "findUnique" && e2.action !== "findUniqueOrThrow")
        return;
      let t2 = [];
      return e2.modelName && t2.push(e2.modelName), e2.query.arguments && t2.push(Wn(e2.query.arguments)), t2.push(Wn(e2.query.selection)), t2.join("");
    }
    function Wn(e2) {
      return `(${Object.keys(e2).sort().map((r2) => {
        let n2 = e2[r2];
        return typeof n2 == "object" && n2 !== null ? `(${r2} ${Wn(n2)})` : r2;
      }).join(" ")})`;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var Nc = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function Kn(e2) {
      return Nc[e2];
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var Jr = class {
      constructor(t2) {
        this.options = t2;
        this.tickActive = false;
        this.batches = {};
      }
      request(t2) {
        let r2 = this.options.batchBy(t2);
        return r2 ? (this.batches[r2] || (this.batches[r2] = [], this.tickActive || (this.tickActive = true, y2.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n2, i2) => {
          this.batches[r2].push({ request: t2, resolve: n2, reject: i2 });
        })) : this.options.singleLoader(t2);
      }
      dispatchBatches() {
        for (let t2 in this.batches) {
          let r2 = this.batches[t2];
          delete this.batches[t2], r2.length === 1 ? this.options.singleLoader(r2[0].request).then((n2) => {
            n2 instanceof Error ? r2[0].reject(n2) : r2[0].resolve(n2);
          }).catch((n2) => {
            r2[0].reject(n2);
          }) : (r2.sort((n2, i2) => this.options.batchOrder(n2.request, i2.request)), this.options.batchLoader(r2.map((n2) => n2.request)).then((n2) => {
            if (n2 instanceof Error)
              for (let i2 = 0; i2 < r2.length; i2++)
                r2[i2].reject(n2);
            else
              for (let i2 = 0; i2 < r2.length; i2++) {
                let o2 = n2[i2];
                o2 instanceof Error ? r2[i2].reject(o2) : r2[i2].resolve(o2);
              }
          }).catch((n2) => {
            for (let i2 = 0; i2 < r2.length; i2++)
              r2[i2].reject(n2);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var _c = re("prisma:client:request_handler");
    var Qr = class {
      constructor(t2, r2) {
        this.logEmitter = r2, this.client = t2, this.dataloader = new Jr({ batchLoader: zo(async ({ requests: n2, customDataProxyFetch: i2 }) => {
          let { transaction: o2, otelParentCtx: s2 } = n2[0], a2 = n2.map((h2) => h2.protocolQuery), u2 = this.client._tracingHelper.getTraceParent(s2), l2 = n2.some((h2) => Kn(h2.protocolQuery.action));
          return (await this.client._engine.requestBatch(a2, { traceparent: u2, transaction: Fc(o2), containsWrite: l2, customDataProxyFetch: i2 })).map((h2, x2) => {
            if (h2 instanceof Error)
              return h2;
            try {
              return this.mapQueryEngineResult(n2[x2], h2);
            } catch (S2) {
              return S2;
            }
          });
        }), singleLoader: async (n2) => {
          var s2;
          let i2 = ((s2 = n2.transaction) == null ? void 0 : s2.kind) === "itx" ? Gs(n2.transaction) : void 0, o2 = await this.client._engine.request(n2.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i2, isWrite: Kn(n2.protocolQuery.action), customDataProxyFetch: n2.customDataProxyFetch });
          return this.mapQueryEngineResult(n2, o2);
        }, batchBy: (n2) => {
          var i2;
          return (i2 = n2.transaction) != null && i2.id ? `transaction-${n2.transaction.id}` : Js(n2.protocolQuery);
        }, batchOrder(n2, i2) {
          var o2, s2;
          return ((o2 = n2.transaction) == null ? void 0 : o2.kind) === "batch" && ((s2 = i2.transaction) == null ? void 0 : s2.kind) === "batch" ? n2.transaction.index - i2.transaction.index : 0;
        } });
      }
      async request(t2) {
        try {
          return await this.dataloader.request(t2);
        } catch (r2) {
          let { clientMethod: n2, callsite: i2, transaction: o2, args: s2, modelName: a2 } = t2;
          this.handleAndLogRequestError({ error: r2, clientMethod: n2, callsite: i2, transaction: o2, args: s2, modelName: a2 });
        }
      }
      mapQueryEngineResult({ dataPath: t2, unpacker: r2 }, n2) {
        let i2 = n2 == null ? void 0 : n2.data, o2 = n2 == null ? void 0 : n2.elapsed, s2 = this.unpack(i2, t2, r2);
        return y2.env.PRISMA_CLIENT_GET_TIME ? { data: s2, elapsed: o2 } : s2;
      }
      handleAndLogRequestError(t2) {
        try {
          this.handleRequestError(t2);
        } catch (r2) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r2.message, target: t2.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r2;
        }
      }
      handleRequestError({ error: t2, clientMethod: r2, callsite: n2, transaction: i2, args: o2, modelName: s2 }) {
        if (_c(t2), Lc(t2, i2) || t2 instanceof Pe)
          throw t2;
        if (t2 instanceof K2 && Bc(t2)) {
          let u2 = Hs(t2.meta);
          qr({ args: o2, errors: [u2], callsite: n2, errorFormat: this.client._errorFormat, originalMethod: r2, clientVersion: this.client._clientVersion });
        }
        let a2 = t2.message;
        if (n2 && (a2 = yt({ callsite: n2, originalMethod: r2, isPanic: t2.isPanic, showColors: this.client._errorFormat === "pretty", message: a2 })), a2 = this.sanitizeMessage(a2), t2.code) {
          let u2 = s2 ? { modelName: s2, ...t2.meta } : t2.meta;
          throw new K2(a2, { code: t2.code, clientVersion: this.client._clientVersion, meta: u2, batchRequestIdx: t2.batchRequestIdx });
        } else {
          if (t2.isPanic)
            throw new ve(a2, this.client._clientVersion);
          if (t2 instanceof oe)
            throw new oe(a2, { clientVersion: this.client._clientVersion, batchRequestIdx: t2.batchRequestIdx });
          if (t2 instanceof G2)
            throw new G2(a2, this.client._clientVersion);
          if (t2 instanceof ve)
            throw new ve(a2, this.client._clientVersion);
        }
        throw t2.clientVersion = this.client._clientVersion, t2;
      }
      sanitizeMessage(t2) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Qs.default)(t2) : t2;
      }
      unpack(t2, r2, n2) {
        if (!t2 || (t2.data && (t2 = t2.data), !t2))
          return t2;
        let i2 = Object.values(t2)[0], o2 = r2.filter((a2) => a2 !== "select" && a2 !== "include"), s2 = jr(Rn(i2, o2));
        return n2 ? n2(s2) : s2;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Fc(e2) {
      if (e2) {
        if (e2.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e2.isolationLevel } };
        if (e2.kind === "itx")
          return { kind: "itx", options: Gs(e2) };
        je(e2, "Unknown transaction kind");
      }
    }
    function Gs(e2) {
      return { id: e2.id, payload: e2.payload };
    }
    function Lc(e2, t2) {
      return Vr(e2) && (t2 == null ? void 0 : t2.kind) === "batch" && e2.batchRequestIdx !== t2.index;
    }
    function Bc(e2) {
      return e2.code === "P2009" || e2.code === "P2012";
    }
    function Hs(e2) {
      if (e2.kind === "Union")
        return { kind: "Union", errors: e2.errors.map(Hs) };
      if (Array.isArray(e2.selectionPath)) {
        let [, ...t2] = e2.selectionPath;
        return { ...e2, selectionPath: t2 };
      }
      return e2;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var Ws = "5.15.0";
    var Ks = Ws;
    d2();
    c2();
    p2();
    f2();
    m2();
    function zs(e2) {
      return e2.map((t2) => {
        let r2 = {};
        for (let n2 of Object.keys(t2))
          r2[n2] = Ys(t2[n2]);
        return r2;
      });
    }
    function Ys({ prisma__type: e2, prisma__value: t2 }) {
      switch (e2) {
        case "bigint":
          return BigInt(t2);
        case "bytes":
          return w2.Buffer.from(t2, "base64");
        case "decimal":
          return new ye(t2);
        case "datetime":
        case "date":
          return new Date(t2);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t2}Z`);
        case "array":
          return t2.map(Ys);
        default:
          return t2;
      }
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var ta = Ue(Un());
    d2();
    c2();
    p2();
    f2();
    m2();
    var J2 = class extends Error {
      constructor(t2) {
        super(t2 + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    _(J2, "PrismaClientConstructorValidationError");
    var Zs = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "__internal"];
    var Xs = ["pretty", "colorless", "minimal"];
    var ea = ["info", "query", "warn", "error"];
    var qc = { datasources: (e2, { datasourceNames: t2 }) => {
      if (e2) {
        if (typeof e2 != "object" || Array.isArray(e2))
          throw new J2(`Invalid value ${JSON.stringify(e2)} for "datasources" provided to PrismaClient constructor`);
        for (let [r2, n2] of Object.entries(e2)) {
          if (!t2.includes(r2)) {
            let i2 = Pt(r2, t2) || ` Available datasources: ${t2.join(", ")}`;
            throw new J2(`Unknown datasource ${r2} provided to PrismaClient constructor.${i2}`);
          }
          if (typeof n2 != "object" || Array.isArray(n2))
            throw new J2(`Invalid value ${JSON.stringify(e2)} for datasource "${r2}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n2 && typeof n2 == "object")
            for (let [i2, o2] of Object.entries(n2)) {
              if (i2 !== "url")
                throw new J2(`Invalid value ${JSON.stringify(e2)} for datasource "${r2}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o2 != "string")
                throw new J2(`Invalid value ${JSON.stringify(o2)} for datasource "${r2}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e2, t2) => {
      if (e2 === null)
        return;
      if (e2 === void 0)
        throw new J2('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!_r(t2).includes("driverAdapters"))
        throw new J2('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Rt() === "binary")
        throw new J2('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e2) => {
      if (typeof e2 != "undefined" && typeof e2 != "string")
        throw new J2(`Invalid value ${JSON.stringify(e2)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e2) => {
      if (e2) {
        if (typeof e2 != "string")
          throw new J2(`Invalid value ${JSON.stringify(e2)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Xs.includes(e2)) {
          let t2 = Pt(e2, Xs);
          throw new J2(`Invalid errorFormat ${e2} provided to PrismaClient constructor.${t2}`);
        }
      }
    }, log: (e2) => {
      if (!e2)
        return;
      if (!Array.isArray(e2))
        throw new J2(`Invalid value ${JSON.stringify(e2)} for "log" provided to PrismaClient constructor.`);
      function t2(r2) {
        if (typeof r2 == "string" && !ea.includes(r2)) {
          let n2 = Pt(r2, ea);
          throw new J2(`Invalid log level "${r2}" provided to PrismaClient constructor.${n2}`);
        }
      }
      for (let r2 of e2) {
        t2(r2);
        let n2 = { level: t2, emit: (i2) => {
          let o2 = ["stdout", "event"];
          if (!o2.includes(i2)) {
            let s2 = Pt(i2, o2);
            throw new J2(`Invalid value ${JSON.stringify(i2)} for "emit" in logLevel provided to PrismaClient constructor.${s2}`);
          }
        } };
        if (r2 && typeof r2 == "object")
          for (let [i2, o2] of Object.entries(r2))
            if (n2[i2])
              n2[i2](o2);
            else
              throw new J2(`Invalid property ${i2} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e2) => {
      if (!e2)
        return;
      let t2 = e2.maxWait;
      if (t2 != null && t2 <= 0)
        throw new J2(`Invalid value ${t2} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r2 = e2.timeout;
      if (r2 != null && r2 <= 0)
        throw new J2(`Invalid value ${r2} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, __internal: (e2) => {
      if (!e2)
        return;
      let t2 = ["debug", "engine", "configOverride"];
      if (typeof e2 != "object")
        throw new J2(`Invalid value ${JSON.stringify(e2)} for "__internal" to PrismaClient constructor`);
      for (let [r2] of Object.entries(e2))
        if (!t2.includes(r2)) {
          let n2 = Pt(r2, t2);
          throw new J2(`Invalid property ${JSON.stringify(r2)} for "__internal" provided to PrismaClient constructor.${n2}`);
        }
    } };
    function ra(e2, t2) {
      for (let [r2, n2] of Object.entries(e2)) {
        if (!Zs.includes(r2)) {
          let i2 = Pt(r2, Zs);
          throw new J2(`Unknown property ${r2} provided to PrismaClient constructor.${i2}`);
        }
        qc[r2](n2, t2);
      }
      if (e2.datasourceUrl && e2.datasources)
        throw new J2('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Pt(e2, t2) {
      if (t2.length === 0 || typeof e2 != "string")
        return "";
      let r2 = Uc(e2, t2);
      return r2 ? ` Did you mean "${r2}"?` : "";
    }
    function Uc(e2, t2) {
      if (t2.length === 0)
        return null;
      let r2 = t2.map((i2) => ({ value: i2, distance: (0, ta.default)(e2, i2) }));
      r2.sort((i2, o2) => i2.distance < o2.distance ? -1 : 1);
      let n2 = r2[0];
      return n2.distance < 3 ? n2.value : null;
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    function na(e2) {
      return e2.length === 0 ? Promise.resolve([]) : new Promise((t2, r2) => {
        let n2 = new Array(e2.length), i2 = null, o2 = false, s2 = 0, a2 = () => {
          o2 || (s2++, s2 === e2.length && (o2 = true, i2 ? r2(i2) : t2(n2)));
        }, u2 = (l2) => {
          o2 || (o2 = true, r2(l2));
        };
        for (let l2 = 0; l2 < e2.length; l2++)
          e2[l2].then((g2) => {
            n2[l2] = g2, a2();
          }, (g2) => {
            if (!Vr(g2)) {
              u2(g2);
              return;
            }
            g2.batchRequestIdx === l2 ? u2(g2) : (i2 || (i2 = g2), a2());
          });
      });
    }
    var Le = re("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Vc = { requestArgsToMiddlewareArgs: (e2) => e2, middlewareArgsToRequestArgs: (e2) => e2 };
    var jc = Symbol.for("prisma.client.transaction.id");
    var Jc = { id: 0, nextId() {
      return ++this.id;
    } };
    function sa(e2) {
      class t2 {
        constructor(n2) {
          this._originalClient = this;
          this._middlewares = new Ur();
          this._createPrismaPromise = Gn();
          this.$extends = Vo;
          var u2, l2, g2, h2, x2, S2, C2, A2, k2, O2, B2, M2, I2, X2;
          e2 = (g2 = (l2 = (u2 = n2 == null ? void 0 : n2.__internal) == null ? void 0 : u2.configOverride) == null ? void 0 : l2.call(u2, e2)) != null ? g2 : e2, os(e2), n2 && ra(n2, e2);
          let i2 = n2 != null && n2.adapter ? hn(n2.adapter) : void 0, o2 = new lr().on("error", () => {
          });
          this._extensions = Or.empty(), this._previewFeatures = _r(e2), this._clientVersion = (h2 = e2.clientVersion) != null ? h2 : Ks, this._activeProvider = e2.activeProvider, this._tracingHelper = qs(this._previewFeatures);
          let s2 = { rootEnvPath: e2.relativeEnvPaths.rootEnvPath && At.resolve(e2.dirname, e2.relativeEnvPaths.rootEnvPath), schemaEnvPath: e2.relativeEnvPaths.schemaEnvPath && At.resolve(e2.dirname, e2.relativeEnvPaths.schemaEnvPath) }, a2 = (x2 = e2.injectableEdgeEnv) == null ? void 0 : x2.call(e2);
          try {
            let L2 = n2 != null ? n2 : {}, Ye = (S2 = L2.__internal) != null ? S2 : {}, Be = Ye.debug === true;
            Be && re.enable("prisma:client");
            let fe = At.resolve(e2.dirname, e2.relativePath);
            bi2.existsSync(fe) || (fe = e2.dirname), Le("dirname", e2.dirname), Le("relativePath", e2.relativePath), Le("cwd", fe);
            let $e = Ye.engine || {};
            if (L2.errorFormat ? this._errorFormat = L2.errorFormat : y2.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y2.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e2.runtimeDataModel, this._engineConfig = { cwd: fe, dirname: e2.dirname, enableDebugLogs: Be, allowTriggerPanic: $e.allowTriggerPanic, datamodelPath: At.join(e2.dirname, (C2 = e2.filename) != null ? C2 : "schema.prisma"), prismaPath: (A2 = $e.binaryPath) != null ? A2 : void 0, engineEndpoint: $e.endpoint, generator: e2.generator, showColors: this._errorFormat === "pretty", logLevel: L2.log && js(L2.log), logQueries: L2.log && !!(typeof L2.log == "string" ? L2.log === "query" : L2.log.find((Q2) => typeof Q2 == "string" ? Q2 === "query" : Q2.level === "query")), env: (k2 = a2 == null ? void 0 : a2.parsed) != null ? k2 : {}, flags: [], engineWasm: e2.engineWasm, clientVersion: e2.clientVersion, engineVersion: e2.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e2.activeProvider, inlineSchema: e2.inlineSchema, overrideDatasources: ss(L2, e2.datasourceNames), inlineDatasources: e2.inlineDatasources, inlineSchemaHash: e2.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: (B2 = (O2 = L2.transactionOptions) == null ? void 0 : O2.maxWait) != null ? B2 : 2e3, timeout: (I2 = (M2 = L2.transactionOptions) == null ? void 0 : M2.timeout) != null ? I2 : 5e3, isolationLevel: (X2 = L2.transactionOptions) == null ? void 0 : X2.isolationLevel }, logEmitter: o2, isBundled: e2.isBundled, adapter: i2 }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: wt, getBatchRequestPayload: dr, prismaGraphQLToJSError: $t, PrismaClientUnknownRequestError: oe, PrismaClientInitializationError: G2, PrismaClientKnownRequestError: K2, debug: re("prisma:client:accelerateEngine"), engineVersion: oa.version, clientVersion: e2.clientVersion } }, Le("clientVersion", e2.clientVersion), this._engine = hs(e2, this._engineConfig), this._requestHandler = new Qr(this, o2), L2.log)
              for (let Q2 of L2.log) {
                let Re = typeof Q2 == "string" ? Q2 : Q2.emit === "stdout" ? Q2.level : null;
                Re && this.$on(Re, (qe) => {
                  var Ze;
                  it.log(`${(Ze = it.tags[Re]) != null ? Ze : ""}`, qe.message || qe.query);
                });
              }
            this._metrics = new st(this._engine);
          } catch (L2) {
            throw L2.clientVersion = this._clientVersion, L2;
          }
          return this._appliedParent = qt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n2) {
          this._middlewares.use(n2);
        }
        $on(n2, i2) {
          n2 === "beforeExit" ? this._engine.onBeforeExit(i2) : n2 && this._engineConfig.logEmitter.on(n2, i2);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n2) {
            throw n2.clientVersion = this._clientVersion, n2;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n2) {
            throw n2.clientVersion = this._clientVersion, n2;
          } finally {
            ji();
          }
        }
        $executeRawInternal(n2, i2, o2, s2) {
          let a2 = this._activeProvider;
          return this._request({ action: "executeRaw", args: o2, transaction: n2, clientMethod: i2, argsMapper: Qn({ clientMethod: i2, activeProvider: a2 }), callsite: Fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s2 });
        }
        $executeRaw(n2, ...i2) {
          return this._createPrismaPromise((o2) => {
            if (n2.raw !== void 0 || n2.sql !== void 0) {
              let [s2, a2] = ia(n2, i2);
              return Jn(this._activeProvider, s2.text, s2.values, Array.isArray(n2) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o2, "$executeRaw", s2, a2);
            }
            throw new Y2("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n2, ...i2) {
          return this._createPrismaPromise((o2) => (Jn(this._activeProvider, n2, i2, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o2, "$executeRawUnsafe", [n2, ...i2])));
        }
        $runCommandRaw(n2) {
          if (e2.activeProvider !== "mongodb")
            throw new Y2(`The ${e2.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i2) => this._request({ args: n2, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Ds, callsite: Fe(this._errorFormat), transaction: i2 }));
        }
        async $queryRawInternal(n2, i2, o2, s2) {
          let a2 = this._activeProvider;
          return this._request({ action: "queryRaw", args: o2, transaction: n2, clientMethod: i2, argsMapper: Qn({ clientMethod: i2, activeProvider: a2 }), callsite: Fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s2 }).then(zs);
        }
        $queryRaw(n2, ...i2) {
          return this._createPrismaPromise((o2) => {
            if (n2.raw !== void 0 || n2.sql !== void 0)
              return this.$queryRawInternal(o2, "$queryRaw", ...ia(n2, i2));
            throw new Y2("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n2, ...i2) {
          return this._createPrismaPromise((o2) => this.$queryRawInternal(o2, "$queryRawUnsafe", [n2, ...i2]));
        }
        _transactionWithArray({ promises: n2, options: i2 }) {
          let o2 = Jc.nextId(), s2 = Us(n2.length), a2 = n2.map((u2, l2) => {
            var x2, S2, C2;
            if ((u2 == null ? void 0 : u2[Symbol.toStringTag]) !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let g2 = (x2 = i2 == null ? void 0 : i2.isolationLevel) != null ? x2 : this._engineConfig.transactionOptions.isolationLevel, h2 = { kind: "batch", id: o2, index: l2, isolationLevel: g2, lock: s2 };
            return (C2 = (S2 = u2.requestTransaction) == null ? void 0 : S2.call(u2, h2)) != null ? C2 : u2;
          });
          return na(a2);
        }
        async _transactionWithCallback({ callback: n2, options: i2 }) {
          var l2, g2, h2;
          let o2 = { traceparent: this._tracingHelper.getTraceParent() }, s2 = { maxWait: (l2 = i2 == null ? void 0 : i2.maxWait) != null ? l2 : this._engineConfig.transactionOptions.maxWait, timeout: (g2 = i2 == null ? void 0 : i2.timeout) != null ? g2 : this._engineConfig.transactionOptions.timeout, isolationLevel: (h2 = i2 == null ? void 0 : i2.isolationLevel) != null ? h2 : this._engineConfig.transactionOptions.isolationLevel }, a2 = await this._engine.transaction("start", o2, s2), u2;
          try {
            let x2 = { kind: "itx", ...a2 };
            u2 = await n2(this._createItxClient(x2)), await this._engine.transaction("commit", o2, a2);
          } catch (x2) {
            throw await this._engine.transaction("rollback", o2, a2).catch(() => {
            }), x2;
          }
          return u2;
        }
        _createItxClient(n2) {
          return qt(ge(Uo(this), [ne("_appliedParent", () => this._appliedParent._createItxClient(n2)), ne("_createPrismaPromise", () => Gn(n2)), ne(jc, () => n2.id), at2(Vs)]));
        }
        $transaction(n2, i2) {
          var a2;
          let o2;
          typeof n2 == "function" ? ((a2 = this._engineConfig.adapter) == null ? void 0 : a2.adapterName) === "@prisma/adapter-d1" ? o2 = () => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          } : o2 = () => this._transactionWithCallback({ callback: n2, options: i2 }) : o2 = () => this._transactionWithArray({ promises: n2, options: i2 });
          let s2 = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s2, o2);
        }
        _request(n2) {
          var l2;
          n2.otelParentCtx = this._tracingHelper.getActiveContext();
          let i2 = (l2 = n2.middlewareArgsMapper) != null ? l2 : Vc, o2 = { args: i2.requestArgsToMiddlewareArgs(n2.args), dataPath: n2.dataPath, runInTransaction: !!n2.transaction, action: n2.action, model: n2.model }, s2 = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o2.action, model: o2.model, name: o2.model ? `${o2.model}.${o2.action}` : o2.action } } }, a2 = -1, u2 = async (g2) => {
            let h2 = this._middlewares.get(++a2);
            if (h2)
              return this._tracingHelper.runInChildSpan(s2.middleware, (O2) => h2(g2, (B2) => (O2 == null || O2.end(), u2(B2))));
            let { runInTransaction: x2, args: S2, ...C2 } = g2, A2 = { ...n2, ...C2 };
            S2 && (A2.args = i2.middlewareArgsToRequestArgs(S2)), n2.transaction !== void 0 && x2 === false && delete A2.transaction;
            let k2 = await Ko(this, A2);
            return A2.model ? Qo({ result: k2, modelName: A2.model, args: A2.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : k2;
          };
          return this._tracingHelper.runInChildSpan(s2.operation, () => u2(o2));
        }
        async _executeRequest({ args: n2, clientMethod: i2, dataPath: o2, callsite: s2, action: a2, model: u2, argsMapper: l2, transaction: g2, unpacker: h2, otelParentCtx: x2, customDataProxyFetch: S2 }) {
          try {
            n2 = l2 ? l2(n2) : n2;
            let C2 = { name: "serialize" }, A2 = this._tracingHelper.runInChildSpan(C2, () => Rs({ modelName: u2, runtimeDataModel: this._runtimeDataModel, action: a2, args: n2, clientMethod: i2, callsite: s2, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures }));
            return re.enabled("prisma:client") && (Le("Prisma Client call:"), Le(`prisma.${i2}(${Do(n2)})`), Le("Generated request:"), Le(JSON.stringify(A2, null, 2) + `
`)), (g2 == null ? void 0 : g2.kind) === "batch" && await g2.lock, this._requestHandler.request({ protocolQuery: A2, modelName: u2, action: a2, clientMethod: i2, dataPath: o2, callsite: s2, args: n2, extensions: this._extensions, transaction: g2, unpacker: h2, otelParentCtx: x2, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: S2 });
          } catch (C2) {
            throw C2.clientVersion = this._clientVersion, C2;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new Y2("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n2) {
          var i2;
          return !!((i2 = this._engineConfig.previewFeatures) != null && i2.includes(n2));
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      return t2;
    }
    function ia(e2, t2) {
      return Qc(e2) ? [new se(e2, t2), Fs] : [e2, Ls];
    }
    function Qc(e2) {
      return Array.isArray(e2) && Array.isArray(e2.raw);
    }
    d2();
    c2();
    p2();
    f2();
    m2();
    var Gc = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function aa2(e2) {
      return new Proxy(e2, { get(t2, r2) {
        if (r2 in t2)
          return t2[r2];
        if (!Gc.has(r2))
          throw new TypeError(`Invalid enum value: ${String(r2)}`);
      } });
    }
    d2();
    c2();
    p2();
    f2();
    m2();
  }
});

// node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS({
  "node_modules/.prisma/client/edge.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.15.0",
      engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      name: "name",
      username: "username",
      password: "password"
    };
    exports.Prisma.BlogScalarFieldEnum = {
      id: "id",
      authorId: "authorId",
      thumbnail: "thumbnail",
      content: "content",
      title: "title",
      published: "published"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Blog: "Blog"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "D:\\Medium\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../.env",
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "5.15.0",
      "engineVersion": "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id       Int     @id @default(autoincrement())\n  name     String?\n  username String  @unique\n  password String\n  blog     Blog[]\n}\n\nmodel Blog {\n  id        Int     @id @default(autoincrement())\n  authorId  Int\n  thumbnail String?\n  content   String\n  title     String\n  published Boolean @default(false)\n  author    User    @relation(fields: [authorId], references: [id])\n}\n',
      "inlineSchemaHash": "38ed05fa5ce5db07f02293f8c1cce1e7f0d1587a3c465d52fc351db46491c09b",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"blog","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Blog","relationName":"BlogToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Blog":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"thumbnail","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"BlogToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient3 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient3;
    Object.assign(exports, Prisma);
  }
});

// node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS({
  "node_modules/@prisma/client/edge.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge2()
    };
  }
});

// node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var default_index_exports = {};
    __export(default_index_exports, {
      Prisma: () => Prisma,
      PrismaClient: () => PrismaClient3,
      default: () => default_index_default
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
    };
    var version = "5.15.0";
    var clientVersion = version;
    var PrismaClient3 = class {
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    };
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client2) => client2.$extends(ext);
    }
    function getExtensionContext(that) {
      return that;
    }
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports.isExist = function(v2) {
      return typeof v2 !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a2, arrayMode) {
      if (a2) {
        const keys = Object.keys(a2);
        const len = keys.length;
        for (let i2 = 0; i2 < len; i2++) {
          if (arrayMode === "strict") {
            target[keys[i2]] = [a2[keys[i2]]];
          } else {
            target[keys[i2]] = a2[keys[i2]];
          }
        }
      }
    };
    exports.getValue = function(v2) {
      if (exports.isExist(v2)) {
        return v2;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i2 = 0; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === "<" && xmlData[i2 + 1] === "?") {
          i2 += 2;
          i2 = readPI(xmlData, i2);
          if (i2.err)
            return i2;
        } else if (xmlData[i2] === "<") {
          let tagStartPos = i2;
          i2++;
          if (xmlData[i2] === "!") {
            i2 = readCommentAndCDATA(xmlData, i2);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i2] === "/") {
              closingTag = true;
              i2++;
            }
            let tagName = "";
            for (; i2 < xmlData.length && xmlData[i2] !== ">" && xmlData[i2] !== " " && xmlData[i2] !== "	" && xmlData[i2] !== "\n" && xmlData[i2] !== "\r"; i2++) {
              tagName += xmlData[i2];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i2--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i2));
            }
            const result = readAttributeStr(xmlData, i2);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i2));
            }
            let attrStr = result.value;
            i2 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i2 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i2));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i2 - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i2));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i2++; i2 < xmlData.length; i2++) {
              if (xmlData[i2] === "<") {
                if (xmlData[i2 + 1] === "!") {
                  i2++;
                  i2 = readCommentAndCDATA(xmlData, i2);
                  continue;
                } else if (xmlData[i2 + 1] === "?") {
                  i2 = readPI(xmlData, ++i2);
                  if (i2.err)
                    return i2;
                } else {
                  break;
                }
              } else if (xmlData[i2] === "&") {
                const afterAmp = validateAmpersand(xmlData, i2);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i2));
                i2 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i2])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i2));
                }
              }
            }
            if (xmlData[i2] === "<") {
              i2--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i2])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i2] + "' is not expected.", getLineNumberForPosition(xmlData, i2));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t2) => t2.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i2) {
      const start = i2;
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] == "?" || xmlData[i2] == " ") {
          const tagname = xmlData.substr(start, i2 - start);
          if (i2 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i2));
          } else if (xmlData[i2] == "?" && xmlData[i2 + 1] == ">") {
            i2++;
            break;
          } else {
            continue;
          }
        }
      }
      return i2;
    }
    function readCommentAndCDATA(xmlData, i2) {
      if (xmlData.length > i2 + 5 && xmlData[i2 + 1] === "-" && xmlData[i2 + 2] === "-") {
        for (i2 += 3; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "-" && xmlData[i2 + 1] === "-" && xmlData[i2 + 2] === ">") {
            i2 += 2;
            break;
          }
        }
      } else if (xmlData.length > i2 + 8 && xmlData[i2 + 1] === "D" && xmlData[i2 + 2] === "O" && xmlData[i2 + 3] === "C" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "Y" && xmlData[i2 + 6] === "P" && xmlData[i2 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i2 += 8; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i2] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i2 + 9 && xmlData[i2 + 1] === "[" && xmlData[i2 + 2] === "C" && xmlData[i2 + 3] === "D" && xmlData[i2 + 4] === "A" && xmlData[i2 + 5] === "T" && xmlData[i2 + 6] === "A" && xmlData[i2 + 7] === "[") {
        for (i2 += 8; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "]" && xmlData[i2 + 1] === "]" && xmlData[i2 + 2] === ">") {
            i2 += 2;
            break;
          }
        }
      }
      return i2;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i2) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === doubleQuote || xmlData[i2] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i2];
          } else if (startChar !== xmlData[i2]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i2] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i2];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i2,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i2 = 0; i2 < matches.length; i2++) {
        if (matches[i2][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i2][2] + "' has no space in starting.", getPositionFromMatch(matches[i2]));
        } else if (matches[i2][3] !== void 0 && matches[i2][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i2][2] + "' is without value.", getPositionFromMatch(matches[i2]));
        } else if (matches[i2][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i2][2] + "' is not allowed.", getPositionFromMatch(matches[i2]));
        }
        const attrName = matches[i2][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i2]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i2]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i2) {
      let re = /\d/;
      if (xmlData[i2] === "x") {
        i2++;
        re = /[\da-fA-F]/;
      }
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === ";")
          return i2;
        if (!xmlData[i2].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i2) {
      i2++;
      if (xmlData[i2] === ";")
        return -1;
      if (xmlData[i2] === "#") {
        i2++;
        return validateNumberAmpersand(xmlData, i2);
      }
      let count = 0;
      for (; i2 < xmlData.length; i2++, count++) {
        if (xmlData[i2].match(/\w/) && count < 20)
          continue;
        if (xmlData[i2] === ";")
          break;
        return -1;
      }
      return i2;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
      // skipEmptyListItem: false
    };
    var buildOptions = function(options) {
      return Object.assign({}, defaultOptions, options);
    };
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var XmlNode2 = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__")
          key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__")
          node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module.exports = XmlNode2;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var util = require_util();
    function readDocType(xmlData, i2) {
      const entities = {};
      if (xmlData[i2 + 3] === "O" && xmlData[i2 + 4] === "C" && xmlData[i2 + 5] === "T" && xmlData[i2 + 6] === "Y" && xmlData[i2 + 7] === "P" && xmlData[i2 + 8] === "E") {
        i2 = i2 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i2)) {
              i2 += 7;
              [entityName, val, i2] = readEntityExp(xmlData, i2 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i2))
              i2 += 8;
            else if (hasBody && isAttlist(xmlData, i2))
              i2 += 8;
            else if (hasBody && isNotation(xmlData, i2))
              i2 += 9;
            else if (isComment)
              comment = true;
            else
              throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i2] === ">") {
            if (comment) {
              if (xmlData[i2 - 1] === "-" && xmlData[i2 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i2] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i2];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i2 };
    }
    function readEntityExp(xmlData, i2) {
      let entityName2 = "";
      for (; i2 < xmlData.length && (xmlData[i2] !== "'" && xmlData[i2] !== '"'); i2++) {
        entityName2 += xmlData[i2];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1)
        throw new Error("External entites are not supported");
      const startChar = xmlData[i2++];
      let val2 = "";
      for (; i2 < xmlData.length && xmlData[i2] !== startChar; i2++) {
        val2 += xmlData[i2];
      }
      return [entityName2, val2, i2];
    }
    function isComment(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "-" && xmlData[i2 + 3] === "-")
        return true;
      return false;
    }
    function isEntity(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "E" && xmlData[i2 + 3] === "N" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "I" && xmlData[i2 + 6] === "T" && xmlData[i2 + 7] === "Y")
        return true;
      return false;
    }
    function isElement(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "E" && xmlData[i2 + 3] === "L" && xmlData[i2 + 4] === "E" && xmlData[i2 + 5] === "M" && xmlData[i2 + 6] === "E" && xmlData[i2 + 7] === "N" && xmlData[i2 + 8] === "T")
        return true;
      return false;
    }
    function isAttlist(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "A" && xmlData[i2 + 3] === "T" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "L" && xmlData[i2 + 6] === "I" && xmlData[i2 + 7] === "S" && xmlData[i2 + 8] === "T")
        return true;
      return false;
    }
    function isNotation(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "N" && xmlData[i2 + 3] === "O" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "A" && xmlData[i2 + 6] === "T" && xmlData[i2 + 7] === "I" && xmlData[i2 + 8] === "O" && xmlData[i2 + 9] === "N")
        return true;
      return false;
    }
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    module.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string")
        return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
        return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign3 = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign3 && trimmedStr[2] !== ".")
            return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign3 && trimmedStr[1] !== ".")
            return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (eNotation) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "")
                return num;
              else if (numStr === numTrimmedByZeros)
                return num;
              else if (sign3 && numStr === "-" + numTrimmedByZeros)
                return num;
              else
                return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr)
                return num;
              else if (sign3 + numTrimmedByZeros === numStr)
                return num;
              else
                return str;
            }
            if (trimmedStr === numStr)
              return num;
            else if (trimmedStr === sign3 + numStr)
              return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".")
          numStr = "0";
        else if (numStr[0] === ".")
          numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".")
          numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    module.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i2 = 0; i2 < entKeys.length; i2++) {
        const ent = entKeys[i2];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities)
            val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i2 = 0; i2 < len; i2++) {
          const attrName = this.resolveNameSpace(matches[i2][1]);
          let oldVal = matches[i2][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__")
              aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i2 = 0; i2 < xmlData.length; i2++) {
        const ch2 = xmlData[i2];
        if (ch2 === "<") {
          if (xmlData[i2 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i2, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i2 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i2 = closeIndex;
          } else if (xmlData[i2 + 1] === "?") {
            let tagData = readTagExp(xmlData, i2, false, "?>");
            if (!tagData)
              throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i2 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i2 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i2 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i2 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i2 = endIndex;
          } else if (xmlData.substr(i2 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i2);
            this.docTypeEntities = result.entities;
            i2 = result.i;
          } else if (xmlData.substr(i2 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i2, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i2 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val2 == void 0)
                val2 = "";
              currentNode.add(this.options.textNodeName, val2);
            }
            i2 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i2, this.options.removeNSPrefix);
            let tagName = result.tagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i2 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i2 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                if (!result2)
                  throw new Error(`Unexpected end of ${tagName}`);
                i2 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i2 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i2];
        }
      }
      return xmlObj.child;
    };
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    var replaceEntitiesValue = function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    };
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0)
          isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
          return true;
      }
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i2, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i2; index < xmlData.length; index++) {
        let ch2 = xmlData[index];
        if (attrBoundary) {
          if (ch2 === attrBoundary)
            attrBoundary = "";
        } else if (ch2 === '"' || ch2 === "'") {
          attrBoundary = ch2;
        } else if (ch2 === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch2 === "	") {
          ch2 = " ";
        }
        tagExp += ch2;
      }
    }
    function findClosingIndex(xmlData, str, i2, errMsg) {
      const closingIndex = xmlData.indexOf(str, i2);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i2, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i2 + 1, closingChar);
      if (!result)
        return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
      }
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent
      };
    }
    function readStopNodeData(xmlData, tagName, i2) {
      const startIndex = i2;
      let openTagCount = 1;
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === "<") {
          if (xmlData[i2 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i2, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i2 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i2),
                  i: closeIndex
                };
              }
            }
            i2 = closeIndex;
          } else if (xmlData[i2 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i2 + 1, "StopNode is not closed.");
            i2 = closeIndex;
          } else if (xmlData.substr(i2 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i2 + 3, "StopNode is not closed.");
            i2 = closeIndex;
          } else if (xmlData.substr(i2 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i2, "StopNode is not closed.") - 2;
            i2 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i2, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i2 = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true")
          return true;
        else if (newval === "false")
          return false;
        else
          return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    module.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i2 = 0; i2 < arr.length; i2++) {
        const tagObj = arr[i2];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0)
          newJpath = property;
        else
          newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0)
            text = tagObj[property];
          else
            text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode)
              val2[options.textNodeName] = "";
            else
              val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0)
          compressedObj[options.textNodeName] = text;
      } else if (text !== void 0)
        compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        if (key !== ":@")
          return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i2 = 0; i2 < len; i2++) {
          const atrrName = keys[i2];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true)
            validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0)
          return orderedResult;
        else
          return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i2 = 0; i2 < arr.length; i2++) {
        const tagObj = arr[i2];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0)
          newJPath = tagName;
        else
          newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode)
            xmlStr += tagStart + ">";
          else
            xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        if (key !== ":@")
          return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
          return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i2 = 0; i2 < options.entities.length; i2++) {
          const entity = options.entities[i2];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a2) {
        return a2;
      },
      attributeValueProcessor: function(attrName, a2) {
        return a2;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          if (key[0] === "?")
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          for (let j2 = 0; j2 < arrLen; j2++) {
            const item = jObj[key][j2];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?")
                val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else
                val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                listTagVal += this.j2x(item, level + 1).val;
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              listTagVal += this.buildTextValNode(item, key, "", level);
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, "", level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L2 = Ks.length;
            for (let j2 = 0; j2 < L2; j2++) {
              attrStr += this.buildAttrPairStr(Ks[j2], "" + jObj[key][Ks[j2]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else
        return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?")
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if (attrStr && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode)
          closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i2 = 0; i2 < this.options.entities.length; i2++) {
          const entity = this.options.entities[i2];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/@aws-crypto/sha1-browser/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/@aws-crypto/sha1-browser/node_modules/tslib/tslib.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      __extends = function(d2, b2) {
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      __rest = function(s2, e2) {
        var t2 = {};
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
            t2[p2] = s2[p2];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
            if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
              t2[p2[i2]] = s2[p2[i2]];
          }
        return t2;
      };
      __decorate = function(decorators, target, key, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y2, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      };
      __exportStar = function(m2, exports2) {
        for (var p2 in m2)
          if (p2 !== "default" && !exports2.hasOwnProperty(p2))
            exports2[p2] = m2[p2];
      };
      __values = function(o2) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o2, n2) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i2 = m2.call(o2), r2, ar2 = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar2.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i2["return"]))
              m2.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar2;
      };
      __spread = function() {
        for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
          ar2 = ar2.concat(__read(arguments[i2]));
        return ar2;
      };
      __spreadArrays = function() {
        for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s2 += arguments[i2].length;
        for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
            r2[k2] = a2[j2];
        return r2;
      };
      __await = function(v2) {
        return this instanceof __await ? (this.v = v2, this) : new __await(v2);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g2[n2])
            i2[n2] = function(v2) {
              return new Promise(function(a2, b2) {
                q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e2) {
            settle(q2[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q2.shift(), q2.length)
            resume(q2[0][0], q2[0][1]);
        }
      };
      __asyncDelegator = function(o2) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f2) {
          i2[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i2;
        return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw3) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw3 });
        } else {
          cooked.raw = raw3;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (Object.hasOwnProperty.call(mod, k2))
              result[k2] = mod[k2];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// node_modules/@aws-crypto/sha1-browser/build/isEmptyData.js
var require_isEmptyData = __commonJS({
  "node_modules/@aws-crypto/sha1-browser/build/isEmptyData.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData2(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData2;
  }
});

// node_modules/@aws-crypto/sha1-browser/build/constants.js
var require_constants = __commonJS({
  "node_modules/@aws-crypto/sha1-browser/build/constants.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EMPTY_DATA_SHA_1 = exports.SHA_1_HMAC_ALGO = exports.SHA_1_HASH = void 0;
    exports.SHA_1_HASH = { name: "SHA-1" };
    exports.SHA_1_HMAC_ALGO = {
      name: "HMAC",
      hash: exports.SHA_1_HASH
    };
    exports.EMPTY_DATA_SHA_1 = new Uint8Array([
      218,
      57,
      163,
      238,
      94,
      107,
      75,
      13,
      50,
      85,
      191,
      239,
      149,
      96,
      24,
      144,
      175,
      216,
      7,
      9
    ]);
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js
var require_pureJs = __commonJS({
  "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var fromUtf83 = (input) => {
      const bytes = [];
      for (let i2 = 0, len = input.length; i2 < len; i2++) {
        const value = input.charCodeAt(i2);
        if (value < 128) {
          bytes.push(value);
        } else if (value < 2048) {
          bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i2 + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i2 + 1) & 64512) === 56320) {
          const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i2) & 1023);
          bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
          bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
      }
      return Uint8Array.from(bytes);
    };
    exports.fromUtf8 = fromUtf83;
    var toUtf82 = (input) => {
      let decoded = "";
      for (let i2 = 0, len = input.length; i2 < len; i2++) {
        const byte = input[i2];
        if (byte < 128) {
          decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
          const nextByte = input[++i2];
          decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
          const surrogatePair = [byte, input[++i2], input[++i2], input[++i2]];
          const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
          decoded += decodeURIComponent(encoded);
        } else {
          decoded += String.fromCharCode((byte & 15) << 12 | (input[++i2] & 63) << 6 | input[++i2] & 63);
        }
      }
      return decoded;
    };
    exports.toUtf8 = toUtf82;
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS({
  "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf83(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf83;
    function toUtf82(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf82;
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var pureJs_1 = require_pureJs();
    var whatwgEncodingApi_1 = require_whatwgEncodingApi();
    var fromUtf83 = (input) => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
    exports.fromUtf8 = fromUtf83;
    var toUtf82 = (input) => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
    exports.toUtf8 = toUtf82;
  }
});

// node_modules/@aws-sdk/util-locate-window/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/@aws-sdk/util-locate-window/dist-cjs/index.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports2 = {};
    __export(src_exports2, {
      locateWindow: () => locateWindow
    });
    module.exports = __toCommonJS(src_exports2);
    var fallbackWindow = {};
    function locateWindow() {
      if (typeof window !== "undefined") {
        return window;
      } else if (typeof self !== "undefined") {
        return self;
      }
      return fallbackWindow;
    }
    __name(locateWindow, "locateWindow");
  }
});

// node_modules/@aws-crypto/sha1-browser/build/ie11Sha1.js
var require_ie11Sha1 = __commonJS({
  "node_modules/@aws-crypto/sha1-browser/build/ie11Sha1.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha1 = void 0;
    var isEmptyData_1 = require_isEmptyData();
    var constants_1 = require_constants();
    var util_utf8_browser_1 = require_dist_cjs();
    var util_locate_window_1 = require_dist_cjs2();
    var Sha12 = (
      /** @class */
      function() {
        function Sha13(secret) {
          this.secret = secret;
          this.reset();
        }
        Sha13.prototype.update = function(toHash) {
          var _this = this;
          if ((0, isEmptyData_1.isEmptyData)(toHash)) {
            return;
          }
          this.operation = this.operation.then(function(operation) {
            operation.onerror = function() {
              _this.operation = Promise.reject(new Error("Error encountered updating hash"));
            };
            operation.process(toArrayBufferView(toHash));
            return operation;
          });
          this.operation.catch(function() {
          });
        };
        Sha13.prototype.digest = function() {
          return this.operation.then(function(operation) {
            return new Promise(function(resolve, reject) {
              operation.onerror = function() {
                reject(new Error("Error encountered finalizing hash"));
              };
              operation.oncomplete = function() {
                if (operation.result) {
                  resolve(new Uint8Array(operation.result));
                }
                reject(new Error("Error encountered finalizing hash"));
              };
              operation.finish();
            });
          });
        };
        Sha13.prototype.reset = function() {
          if (this.secret) {
            this.operation = getKeyPromise(this.secret).then(function(keyData) {
              return (0, util_locate_window_1.locateWindow)().msCrypto.subtle.sign(constants_1.SHA_1_HMAC_ALGO, keyData);
            });
            this.operation.catch(function() {
            });
          } else {
            this.operation = Promise.resolve((0, util_locate_window_1.locateWindow)().msCrypto.subtle.digest("SHA-1"));
          }
        };
        return Sha13;
      }()
    );
    exports.Sha1 = Sha12;
    function getKeyPromise(secret) {
      return new Promise(function(resolve, reject) {
        var keyOperation = (0, util_locate_window_1.locateWindow)().msCrypto.subtle.importKey("raw", toArrayBufferView(secret), constants_1.SHA_1_HMAC_ALGO, false, ["sign"]);
        keyOperation.oncomplete = function() {
          if (keyOperation.result) {
            resolve(keyOperation.result);
          }
          reject(new Error("ImportKey completed without importing key."));
        };
        keyOperation.onerror = function() {
          reject(new Error("ImportKey failed to import key."));
        };
      });
    }
    function toArrayBufferView(data) {
      if (typeof data === "string") {
        return (0, util_utf8_browser_1.fromUtf8)(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
  }
});

// node_modules/@aws-crypto/sha1-browser/build/webCryptoSha1.js
var require_webCryptoSha1 = __commonJS({
  "node_modules/@aws-crypto/sha1-browser/build/webCryptoSha1.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha1 = void 0;
    var util_utf8_browser_1 = require_dist_cjs();
    var isEmptyData_1 = require_isEmptyData();
    var constants_1 = require_constants();
    var util_locate_window_1 = require_dist_cjs2();
    var Sha12 = (
      /** @class */
      function() {
        function Sha13(secret) {
          this.toHash = new Uint8Array(0);
          if (secret !== void 0) {
            this.key = new Promise(function(resolve, reject) {
              (0, util_locate_window_1.locateWindow)().crypto.subtle.importKey("raw", convertToBuffer2(secret), constants_1.SHA_1_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
            });
            this.key.catch(function() {
            });
          }
        }
        Sha13.prototype.update = function(data) {
          if ((0, isEmptyData_1.isEmptyData)(data)) {
            return;
          }
          var update = convertToBuffer2(data);
          var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
          typedArray.set(this.toHash, 0);
          typedArray.set(update, this.toHash.byteLength);
          this.toHash = typedArray;
        };
        Sha13.prototype.digest = function() {
          var _this = this;
          if (this.key) {
            return this.key.then(function(key) {
              return (0, util_locate_window_1.locateWindow)().crypto.subtle.sign(constants_1.SHA_1_HMAC_ALGO, key, _this.toHash).then(function(data) {
                return new Uint8Array(data);
              });
            });
          }
          if ((0, isEmptyData_1.isEmptyData)(this.toHash)) {
            return Promise.resolve(constants_1.EMPTY_DATA_SHA_1);
          }
          return Promise.resolve().then(function() {
            return (0, util_locate_window_1.locateWindow)().crypto.subtle.digest(constants_1.SHA_1_HASH, _this.toHash);
          }).then(function(data) {
            return Promise.resolve(new Uint8Array(data));
          });
        };
        Sha13.prototype.reset = function() {
          this.toHash = new Uint8Array(0);
        };
        return Sha13;
      }()
    );
    exports.Sha1 = Sha12;
    function convertToBuffer2(data) {
      if (typeof data === "string") {
        return (0, util_utf8_browser_1.fromUtf8)(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
  }
});

// node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.js
var require_tslib2 = __commonJS({
  "node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      __extends = function(d2, b2) {
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      __rest = function(s2, e2) {
        var t2 = {};
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
            t2[p2] = s2[p2];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
            if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
              t2[p2[i2]] = s2[p2[i2]];
          }
        return t2;
      };
      __decorate = function(decorators, target, key, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y2, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      };
      __exportStar = function(m2, exports2) {
        for (var p2 in m2)
          if (p2 !== "default" && !exports2.hasOwnProperty(p2))
            exports2[p2] = m2[p2];
      };
      __values = function(o2) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o2, n2) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i2 = m2.call(o2), r2, ar2 = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar2.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i2["return"]))
              m2.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar2;
      };
      __spread = function() {
        for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
          ar2 = ar2.concat(__read(arguments[i2]));
        return ar2;
      };
      __spreadArrays = function() {
        for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s2 += arguments[i2].length;
        for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
            r2[k2] = a2[j2];
        return r2;
      };
      __await = function(v2) {
        return this instanceof __await ? (this.v = v2, this) : new __await(v2);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g2[n2])
            i2[n2] = function(v2) {
              return new Promise(function(a2, b2) {
                q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e2) {
            settle(q2[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q2.shift(), q2.length)
            resume(q2[0][0], q2[0][1]);
        }
      };
      __asyncDelegator = function(o2) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f2) {
          i2[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i2;
        return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw3) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw3 });
        } else {
          cooked.raw = raw3;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (Object.hasOwnProperty.call(mod, k2))
              result[k2] = mod[k2];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js
var require_supportsWebCrypto = __commonJS({
  "node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.supportsZeroByteGCM = exports.supportsSubtleCrypto = exports.supportsSecureRandom = exports.supportsWebCrypto = void 0;
    var tslib_1 = require_tslib2();
    var subtleCryptoMethods = [
      "decrypt",
      "digest",
      "encrypt",
      "exportKey",
      "generateKey",
      "importKey",
      "sign",
      "verify"
    ];
    function supportsWebCrypto(window2) {
      if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
        var subtle = window2.crypto.subtle;
        return supportsSubtleCrypto(subtle);
      }
      return false;
    }
    exports.supportsWebCrypto = supportsWebCrypto;
    function supportsSecureRandom(window2) {
      if (typeof window2 === "object" && typeof window2.crypto === "object") {
        var getRandomValues2 = window2.crypto.getRandomValues;
        return typeof getRandomValues2 === "function";
      }
      return false;
    }
    exports.supportsSecureRandom = supportsSecureRandom;
    function supportsSubtleCrypto(subtle) {
      return subtle && subtleCryptoMethods.every(function(methodName) {
        return typeof subtle[methodName] === "function";
      });
    }
    exports.supportsSubtleCrypto = supportsSubtleCrypto;
    function supportsZeroByteGCM(subtle) {
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        var key, zeroByteAuthTag, _a;
        return tslib_1.__generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!supportsSubtleCrypto(subtle))
                return [2, false];
              _b.label = 1;
            case 1:
              _b.trys.push([1, 4, , 5]);
              return [4, subtle.generateKey({ name: "AES-GCM", length: 128 }, false, ["encrypt"])];
            case 2:
              key = _b.sent();
              return [4, subtle.encrypt({
                name: "AES-GCM",
                iv: new Uint8Array(Array(12)),
                additionalData: new Uint8Array(Array(16)),
                tagLength: 128
              }, key, new Uint8Array(0))];
            case 3:
              zeroByteAuthTag = _b.sent();
              return [2, zeroByteAuthTag.byteLength === 16];
            case 4:
              _a = _b.sent();
              return [2, false];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    exports.supportsZeroByteGCM = supportsZeroByteGCM;
  }
});

// node_modules/@aws-crypto/supports-web-crypto/build/index.js
var require_build = __commonJS({
  "node_modules/@aws-crypto/supports-web-crypto/build/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib2();
    tslib_1.__exportStar(require_supportsWebCrypto(), exports);
  }
});

// node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.js
var require_tslib3 = __commonJS({
  "node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      __extends = function(d2, b2) {
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      __rest = function(s2, e2) {
        var t2 = {};
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
            t2[p2] = s2[p2];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
            if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
              t2[p2[i2]] = s2[p2[i2]];
          }
        return t2;
      };
      __decorate = function(decorators, target, key, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y2, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      };
      __exportStar = function(m2, exports2) {
        for (var p2 in m2)
          if (p2 !== "default" && !exports2.hasOwnProperty(p2))
            exports2[p2] = m2[p2];
      };
      __values = function(o2) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o2, n2) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i2 = m2.call(o2), r2, ar2 = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar2.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i2["return"]))
              m2.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar2;
      };
      __spread = function() {
        for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
          ar2 = ar2.concat(__read(arguments[i2]));
        return ar2;
      };
      __spreadArrays = function() {
        for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s2 += arguments[i2].length;
        for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
            r2[k2] = a2[j2];
        return r2;
      };
      __await = function(v2) {
        return this instanceof __await ? (this.v = v2, this) : new __await(v2);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g2[n2])
            i2[n2] = function(v2) {
              return new Promise(function(a2, b2) {
                q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e2) {
            settle(q2[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q2.shift(), q2.length)
            resume(q2[0][0], q2[0][1]);
        }
      };
      __asyncDelegator = function(o2) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f2) {
          i2[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i2;
        return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw3) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw3 });
        } else {
          cooked.raw = raw3;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (Object.hasOwnProperty.call(mod, k2))
              result[k2] = mod[k2];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js
var require_CryptoOperation = __commonJS({
  "node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-crypto/ie11-detection/build/Key.js
var require_Key = __commonJS({
  "node_modules/@aws-crypto/ie11-detection/build/Key.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js
var require_KeyOperation = __commonJS({
  "node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js
var require_MsSubtleCrypto = __commonJS({
  "node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-crypto/ie11-detection/build/MsWindow.js
var require_MsWindow = __commonJS({
  "node_modules/@aws-crypto/ie11-detection/build/MsWindow.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isMsWindow = void 0;
    var msSubtleCryptoMethods = [
      "decrypt",
      "digest",
      "encrypt",
      "exportKey",
      "generateKey",
      "importKey",
      "sign",
      "verify"
    ];
    function quacksLikeAnMsWindow(window2) {
      return "MSInputMethodContext" in window2 && "msCrypto" in window2;
    }
    function isMsWindow(window2) {
      if (quacksLikeAnMsWindow(window2) && window2.msCrypto.subtle !== void 0) {
        var _a = window2.msCrypto, getRandomValues2 = _a.getRandomValues, subtle_1 = _a.subtle;
        return msSubtleCryptoMethods.map(function(methodName) {
          return subtle_1[methodName];
        }).concat(getRandomValues2).every(function(method) {
          return typeof method === "function";
        });
      }
      return false;
    }
    exports.isMsWindow = isMsWindow;
  }
});

// node_modules/@aws-crypto/ie11-detection/build/index.js
var require_build2 = __commonJS({
  "node_modules/@aws-crypto/ie11-detection/build/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib3();
    tslib_1.__exportStar(require_CryptoOperation(), exports);
    tslib_1.__exportStar(require_Key(), exports);
    tslib_1.__exportStar(require_KeyOperation(), exports);
    tslib_1.__exportStar(require_MsSubtleCrypto(), exports);
    tslib_1.__exportStar(require_MsWindow(), exports);
  }
});

// node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = require_dist_cjs();
    var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer2(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf83(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    exports.convertToBuffer = convertToBuffer2;
  }
});

// node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData2 = __commonJS({
  "node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData2(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData2;
  }
});

// node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS({
  "node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numToUint8 = void 0;
    function numToUint8(num) {
      return new Uint8Array([
        (num & 4278190080) >> 24,
        (num & 16711680) >> 16,
        (num & 65280) >> 8,
        num & 255
      ]);
    }
    exports.numToUint8 = numToUint8;
  }
});

// node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
  "node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = void 0;
    function uint32ArrayFrom(a_lookUpTable) {
      if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
          return_array[a_index] = a_lookUpTable[a_index];
          a_index += 1;
        }
        return return_array;
      }
      return Uint32Array.from(a_lookUpTable);
    }
    exports.uint32ArrayFrom = uint32ArrayFrom;
  }
});

// node_modules/@aws-crypto/util/build/index.js
var require_build3 = __commonJS({
  "node_modules/@aws-crypto/util/build/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
    var convertToBuffer_1 = require_convertToBuffer();
    Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
      return convertToBuffer_1.convertToBuffer;
    } });
    var isEmptyData_1 = require_isEmptyData2();
    Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
      return isEmptyData_1.isEmptyData;
    } });
    var numToUint8_1 = require_numToUint8();
    Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
      return numToUint8_1.numToUint8;
    } });
    var uint32ArrayFrom_1 = require_uint32ArrayFrom();
    Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    } });
  }
});

// node_modules/@aws-crypto/sha1-browser/build/crossPlatformSha1.js
var require_crossPlatformSha1 = __commonJS({
  "node_modules/@aws-crypto/sha1-browser/build/crossPlatformSha1.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha1 = void 0;
    var ie11Sha1_1 = require_ie11Sha1();
    var webCryptoSha1_1 = require_webCryptoSha1();
    var supports_web_crypto_1 = require_build();
    var ie11_detection_1 = require_build2();
    var util_locate_window_1 = require_dist_cjs2();
    var util_1 = require_build3();
    var Sha12 = (
      /** @class */
      function() {
        function Sha13(secret) {
          if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
            this.hash = new webCryptoSha1_1.Sha1(secret);
          } else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
            this.hash = new ie11Sha1_1.Sha1(secret);
          } else {
            throw new Error("SHA1 not supported");
          }
        }
        Sha13.prototype.update = function(data, encoding) {
          this.hash.update((0, util_1.convertToBuffer)(data));
        };
        Sha13.prototype.digest = function() {
          return this.hash.digest();
        };
        Sha13.prototype.reset = function() {
          this.hash.reset();
        };
        return Sha13;
      }()
    );
    exports.Sha1 = Sha12;
  }
});

// node_modules/@aws-crypto/sha1-browser/build/index.js
var require_build4 = __commonJS({
  "node_modules/@aws-crypto/sha1-browser/build/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebCryptoSha1 = exports.Ie11Sha1 = void 0;
    var tslib_1 = require_tslib();
    tslib_1.__exportStar(require_crossPlatformSha1(), exports);
    var ie11Sha1_1 = require_ie11Sha1();
    Object.defineProperty(exports, "Ie11Sha1", { enumerable: true, get: function() {
      return ie11Sha1_1.Sha1;
    } });
    var webCryptoSha1_1 = require_webCryptoSha1();
    Object.defineProperty(exports, "WebCryptoSha1", { enumerable: true, get: function() {
      return webCryptoSha1_1.Sha1;
    } });
  }
});

// node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.js
var require_tslib4 = __commonJS({
  "node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      __extends = function(d2, b2) {
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      __rest = function(s2, e2) {
        var t2 = {};
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
            t2[p2] = s2[p2];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
            if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
              t2[p2[i2]] = s2[p2[i2]];
          }
        return t2;
      };
      __decorate = function(decorators, target, key, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y2, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      };
      __exportStar = function(m2, exports2) {
        for (var p2 in m2)
          if (p2 !== "default" && !exports2.hasOwnProperty(p2))
            exports2[p2] = m2[p2];
      };
      __values = function(o2) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o2, n2) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i2 = m2.call(o2), r2, ar2 = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar2.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i2["return"]))
              m2.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar2;
      };
      __spread = function() {
        for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
          ar2 = ar2.concat(__read(arguments[i2]));
        return ar2;
      };
      __spreadArrays = function() {
        for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s2 += arguments[i2].length;
        for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
            r2[k2] = a2[j2];
        return r2;
      };
      __await = function(v2) {
        return this instanceof __await ? (this.v = v2, this) : new __await(v2);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g2[n2])
            i2[n2] = function(v2) {
              return new Promise(function(a2, b2) {
                q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e2) {
            settle(q2[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q2.shift(), q2.length)
            resume(q2[0][0], q2[0][1]);
        }
      };
      __asyncDelegator = function(o2) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f2) {
          i2[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i2;
        return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw3) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw3 });
        } else {
          cooked.raw = raw3;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (Object.hasOwnProperty.call(mod, k2))
              result[k2] = mod[k2];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js
var require_isEmptyData3 = __commonJS({
  "node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData2(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData2;
  }
});

// node_modules/@aws-crypto/sha256-browser/build/constants.js
var require_constants2 = __commonJS({
  "node_modules/@aws-crypto/sha256-browser/build/constants.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EMPTY_DATA_SHA_256 = exports.SHA_256_HMAC_ALGO = exports.SHA_256_HASH = void 0;
    exports.SHA_256_HASH = { name: "SHA-256" };
    exports.SHA_256_HMAC_ALGO = {
      name: "HMAC",
      hash: exports.SHA_256_HASH
    };
    exports.EMPTY_DATA_SHA_256 = new Uint8Array([
      227,
      176,
      196,
      66,
      152,
      252,
      28,
      20,
      154,
      251,
      244,
      200,
      153,
      111,
      185,
      36,
      39,
      174,
      65,
      228,
      100,
      155,
      147,
      76,
      164,
      149,
      153,
      27,
      120,
      82,
      184,
      85
    ]);
  }
});

// node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js
var require_ie11Sha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var isEmptyData_1 = require_isEmptyData3();
    var constants_1 = require_constants2();
    var util_utf8_browser_1 = require_dist_cjs();
    var util_locate_window_1 = require_dist_cjs2();
    var Sha2562 = (
      /** @class */
      function() {
        function Sha2563(secret) {
          this.secret = secret;
          this.reset();
        }
        Sha2563.prototype.update = function(toHash) {
          var _this = this;
          if ((0, isEmptyData_1.isEmptyData)(toHash)) {
            return;
          }
          this.operation = this.operation.then(function(operation) {
            operation.onerror = function() {
              _this.operation = Promise.reject(new Error("Error encountered updating hash"));
            };
            operation.process(toArrayBufferView(toHash));
            return operation;
          });
          this.operation.catch(function() {
          });
        };
        Sha2563.prototype.digest = function() {
          return this.operation.then(function(operation) {
            return new Promise(function(resolve, reject) {
              operation.onerror = function() {
                reject(new Error("Error encountered finalizing hash"));
              };
              operation.oncomplete = function() {
                if (operation.result) {
                  resolve(new Uint8Array(operation.result));
                }
                reject(new Error("Error encountered finalizing hash"));
              };
              operation.finish();
            });
          });
        };
        Sha2563.prototype.reset = function() {
          if (this.secret) {
            this.operation = getKeyPromise(this.secret).then(function(keyData) {
              return (0, util_locate_window_1.locateWindow)().msCrypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, keyData);
            });
            this.operation.catch(function() {
            });
          } else {
            this.operation = Promise.resolve((0, util_locate_window_1.locateWindow)().msCrypto.subtle.digest("SHA-256"));
          }
        };
        return Sha2563;
      }()
    );
    exports.Sha256 = Sha2562;
    function getKeyPromise(secret) {
      return new Promise(function(resolve, reject) {
        var keyOperation = (0, util_locate_window_1.locateWindow)().msCrypto.subtle.importKey("raw", toArrayBufferView(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]);
        keyOperation.oncomplete = function() {
          if (keyOperation.result) {
            resolve(keyOperation.result);
          }
          reject(new Error("ImportKey completed without importing key."));
        };
        keyOperation.onerror = function() {
          reject(new Error("ImportKey failed to import key."));
        };
      });
    }
    function toArrayBufferView(data) {
      if (typeof data === "string") {
        return (0, util_utf8_browser_1.fromUtf8)(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
  }
});

// node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js
var require_webCryptoSha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var util_1 = require_build3();
    var constants_1 = require_constants2();
    var util_locate_window_1 = require_dist_cjs2();
    var Sha2562 = (
      /** @class */
      function() {
        function Sha2563(secret) {
          this.toHash = new Uint8Array(0);
          this.secret = secret;
          this.reset();
        }
        Sha2563.prototype.update = function(data) {
          if ((0, util_1.isEmptyData)(data)) {
            return;
          }
          var update = (0, util_1.convertToBuffer)(data);
          var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
          typedArray.set(this.toHash, 0);
          typedArray.set(update, this.toHash.byteLength);
          this.toHash = typedArray;
        };
        Sha2563.prototype.digest = function() {
          var _this = this;
          if (this.key) {
            return this.key.then(function(key) {
              return (0, util_locate_window_1.locateWindow)().crypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
                return new Uint8Array(data);
              });
            });
          }
          if ((0, util_1.isEmptyData)(this.toHash)) {
            return Promise.resolve(constants_1.EMPTY_DATA_SHA_256);
          }
          return Promise.resolve().then(function() {
            return (0, util_locate_window_1.locateWindow)().crypto.subtle.digest(constants_1.SHA_256_HASH, _this.toHash);
          }).then(function(data) {
            return Promise.resolve(new Uint8Array(data));
          });
        };
        Sha2563.prototype.reset = function() {
          var _this = this;
          this.toHash = new Uint8Array(0);
          if (this.secret && this.secret !== void 0) {
            this.key = new Promise(function(resolve, reject) {
              (0, util_locate_window_1.locateWindow)().crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(_this.secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
            });
            this.key.catch(function() {
            });
          }
        };
        return Sha2563;
      }()
    );
    exports.Sha256 = Sha2562;
  }
});

// node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.js
var require_tslib5 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      __extends = function(d2, b2) {
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      __rest = function(s2, e2) {
        var t2 = {};
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
            t2[p2] = s2[p2];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
            if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
              t2[p2[i2]] = s2[p2[i2]];
          }
        return t2;
      };
      __decorate = function(decorators, target, key, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y2, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      };
      __exportStar = function(m2, exports2) {
        for (var p2 in m2)
          if (p2 !== "default" && !exports2.hasOwnProperty(p2))
            exports2[p2] = m2[p2];
      };
      __values = function(o2) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o2, n2) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i2 = m2.call(o2), r2, ar2 = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar2.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i2["return"]))
              m2.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar2;
      };
      __spread = function() {
        for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
          ar2 = ar2.concat(__read(arguments[i2]));
        return ar2;
      };
      __spreadArrays = function() {
        for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s2 += arguments[i2].length;
        for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
            r2[k2] = a2[j2];
        return r2;
      };
      __await = function(v2) {
        return this instanceof __await ? (this.v = v2, this) : new __await(v2);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g2[n2])
            i2[n2] = function(v2) {
              return new Promise(function(a2, b2) {
                q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e2) {
            settle(q2[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q2.shift(), q2.length)
            resume(q2[0][0], q2[0][1]);
        }
      };
      __asyncDelegator = function(o2) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f2) {
          i2[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i2;
        return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw3) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw3 });
        } else {
          cooked.raw = raw3;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (Object.hasOwnProperty.call(mod, k2))
              result[k2] = mod[k2];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// node_modules/@aws-crypto/sha256-js/build/constants.js
var require_constants3 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/constants.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = void 0;
    exports.BLOCK_SIZE = 64;
    exports.DIGEST_LENGTH = 32;
    exports.KEY = new Uint32Array([
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
      3329325298
    ]);
    exports.INIT = [
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ];
    exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
  }
});

// node_modules/@aws-crypto/sha256-js/build/RawSha256.js
var require_RawSha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/RawSha256.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RawSha256 = void 0;
    var constants_1 = require_constants3();
    var RawSha256 = (
      /** @class */
      function() {
        function RawSha2562() {
          this.state = Int32Array.from(constants_1.INIT);
          this.temp = new Int32Array(64);
          this.buffer = new Uint8Array(64);
          this.bufferLength = 0;
          this.bytesHashed = 0;
          this.finished = false;
        }
        RawSha2562.prototype.update = function(data) {
          if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
          }
          var position = 0;
          var byteLength = data.byteLength;
          this.bytesHashed += byteLength;
          if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
          }
          while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === constants_1.BLOCK_SIZE) {
              this.hashBuffer();
              this.bufferLength = 0;
            }
          }
        };
        RawSha2562.prototype.digest = function() {
          if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 128);
            if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
              for (var i2 = this.bufferLength; i2 < constants_1.BLOCK_SIZE; i2++) {
                bufferView.setUint8(i2, 0);
              }
              this.hashBuffer();
              this.bufferLength = 0;
            }
            for (var i2 = this.bufferLength; i2 < constants_1.BLOCK_SIZE - 8; i2++) {
              bufferView.setUint8(i2, 0);
            }
            bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
            bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
          }
          var out = new Uint8Array(constants_1.DIGEST_LENGTH);
          for (var i2 = 0; i2 < 8; i2++) {
            out[i2 * 4] = this.state[i2] >>> 24 & 255;
            out[i2 * 4 + 1] = this.state[i2] >>> 16 & 255;
            out[i2 * 4 + 2] = this.state[i2] >>> 8 & 255;
            out[i2 * 4 + 3] = this.state[i2] >>> 0 & 255;
          }
          return out;
        };
        RawSha2562.prototype.hashBuffer = function() {
          var _a = this, buffer = _a.buffer, state = _a.state;
          var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
          for (var i2 = 0; i2 < constants_1.BLOCK_SIZE; i2++) {
            if (i2 < 16) {
              this.temp[i2] = (buffer[i2 * 4] & 255) << 24 | (buffer[i2 * 4 + 1] & 255) << 16 | (buffer[i2 * 4 + 2] & 255) << 8 | buffer[i2 * 4 + 3] & 255;
            } else {
              var u2 = this.temp[i2 - 2];
              var t1_1 = (u2 >>> 17 | u2 << 15) ^ (u2 >>> 19 | u2 << 13) ^ u2 >>> 10;
              u2 = this.temp[i2 - 15];
              var t2_1 = (u2 >>> 7 | u2 << 25) ^ (u2 >>> 18 | u2 << 14) ^ u2 >>> 3;
              this.temp[i2] = (t1_1 + this.temp[i2 - 7] | 0) + (t2_1 + this.temp[i2 - 16] | 0);
            }
            var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i2] + this.temp[i2] | 0) | 0) | 0;
            var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = state3 + t1 | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = t1 + t2 | 0;
          }
          state[0] += state0;
          state[1] += state1;
          state[2] += state2;
          state[3] += state3;
          state[4] += state4;
          state[5] += state5;
          state[6] += state6;
          state[7] += state7;
        };
        return RawSha2562;
      }()
    );
    exports.RawSha256 = RawSha256;
  }
});

// node_modules/@aws-crypto/sha256-js/build/jsSha256.js
var require_jsSha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/jsSha256.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var tslib_1 = require_tslib5();
    var constants_1 = require_constants3();
    var RawSha256_1 = require_RawSha256();
    var util_1 = require_build3();
    var Sha2562 = (
      /** @class */
      function() {
        function Sha2563(secret) {
          this.secret = secret;
          this.hash = new RawSha256_1.RawSha256();
          this.reset();
        }
        Sha2563.prototype.update = function(toHash) {
          if ((0, util_1.isEmptyData)(toHash) || this.error) {
            return;
          }
          try {
            this.hash.update((0, util_1.convertToBuffer)(toHash));
          } catch (e2) {
            this.error = e2;
          }
        };
        Sha2563.prototype.digestSync = function() {
          if (this.error) {
            throw this.error;
          }
          if (this.outer) {
            if (!this.outer.finished) {
              this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
          }
          return this.hash.digest();
        };
        Sha2563.prototype.digest = function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2, this.digestSync()];
            });
          });
        };
        Sha2563.prototype.reset = function() {
          this.hash = new RawSha256_1.RawSha256();
          if (this.secret) {
            this.outer = new RawSha256_1.RawSha256();
            var inner = bufferFromSecret(this.secret);
            var outer = new Uint8Array(constants_1.BLOCK_SIZE);
            outer.set(inner);
            for (var i2 = 0; i2 < constants_1.BLOCK_SIZE; i2++) {
              inner[i2] ^= 54;
              outer[i2] ^= 92;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            for (var i2 = 0; i2 < inner.byteLength; i2++) {
              inner[i2] = 0;
            }
          }
        };
        return Sha2563;
      }()
    );
    exports.Sha256 = Sha2562;
    function bufferFromSecret(secret) {
      var input = (0, util_1.convertToBuffer)(secret);
      if (input.byteLength > constants_1.BLOCK_SIZE) {
        var bufferHash = new RawSha256_1.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
      }
      var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
      buffer.set(input);
      return buffer;
    }
  }
});

// node_modules/@aws-crypto/sha256-js/build/index.js
var require_build5 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib5();
    tslib_1.__exportStar(require_jsSha256(), exports);
  }
});

// node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js
var require_crossPlatformSha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var ie11Sha256_1 = require_ie11Sha256();
    var webCryptoSha256_1 = require_webCryptoSha256();
    var sha256_js_1 = require_build5();
    var supports_web_crypto_1 = require_build();
    var ie11_detection_1 = require_build2();
    var util_locate_window_1 = require_dist_cjs2();
    var util_1 = require_build3();
    var Sha2562 = (
      /** @class */
      function() {
        function Sha2563(secret) {
          if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
            this.hash = new webCryptoSha256_1.Sha256(secret);
          } else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
            this.hash = new ie11Sha256_1.Sha256(secret);
          } else {
            this.hash = new sha256_js_1.Sha256(secret);
          }
        }
        Sha2563.prototype.update = function(data, encoding) {
          this.hash.update((0, util_1.convertToBuffer)(data));
        };
        Sha2563.prototype.digest = function() {
          return this.hash.digest();
        };
        Sha2563.prototype.reset = function() {
          this.hash.reset();
        };
        return Sha2563;
      }()
    );
    exports.Sha256 = Sha2562;
  }
});

// node_modules/@aws-crypto/sha256-browser/build/index.js
var require_build6 = __commonJS({
  "node_modules/@aws-crypto/sha256-browser/build/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebCryptoSha256 = exports.Ie11Sha256 = void 0;
    var tslib_1 = require_tslib4();
    tslib_1.__exportStar(require_crossPlatformSha256(), exports);
    var ie11Sha256_1 = require_ie11Sha256();
    Object.defineProperty(exports, "Ie11Sha256", { enumerable: true, get: function() {
      return ie11Sha256_1.Sha256;
    } });
    var webCryptoSha256_1 = require_webCryptoSha256();
    Object.defineProperty(exports, "WebCryptoSha256", { enumerable: true, get: function() {
      return webCryptoSha256_1.Sha256;
    } });
  }
});

// node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "node_modules/bowser/es5.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    !function(e2, t2) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define([], t2) : "object" == typeof exports ? exports.bowser = t2() : e2.bowser = t2();
    }(exports, function() {
      return function(e2) {
        var t2 = {};
        function r2(n2) {
          if (t2[n2])
            return t2[n2].exports;
          var i2 = t2[n2] = { i: n2, l: false, exports: {} };
          return e2[n2].call(i2.exports, i2, i2.exports, r2), i2.l = true, i2.exports;
        }
        return r2.m = e2, r2.c = t2, r2.d = function(e3, t3, n2) {
          r2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: n2 });
        }, r2.r = function(e3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, r2.t = function(e3, t3) {
          if (1 & t3 && (e3 = r2(e3)), 8 & t3)
            return e3;
          if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule)
            return e3;
          var n2 = /* @__PURE__ */ Object.create(null);
          if (r2.r(n2), Object.defineProperty(n2, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3)
            for (var i2 in e3)
              r2.d(n2, i2, function(t4) {
                return e3[t4];
              }.bind(null, i2));
          return n2;
        }, r2.n = function(e3) {
          var t3 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return r2.d(t3, "a", t3), t3;
        }, r2.o = function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        }, r2.p = "", r2(r2.s = 90);
      }({ 17: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2 = r2(18), i2 = function() {
          function e3() {
          }
          return e3.getFirstMatch = function(e4, t3) {
            var r3 = t3.match(e4);
            return r3 && r3.length > 0 && r3[1] || "";
          }, e3.getSecondMatch = function(e4, t3) {
            var r3 = t3.match(e4);
            return r3 && r3.length > 1 && r3[2] || "";
          }, e3.matchAndReturnConst = function(e4, t3, r3) {
            if (e4.test(t3))
              return r3;
          }, e3.getWindowsVersionName = function(e4) {
            switch (e4) {
              case "NT":
                return "NT";
              case "XP":
                return "XP";
              case "NT 5.0":
                return "2000";
              case "NT 5.1":
                return "XP";
              case "NT 5.2":
                return "2003";
              case "NT 6.0":
                return "Vista";
              case "NT 6.1":
                return "7";
              case "NT 6.2":
                return "8";
              case "NT 6.3":
                return "8.1";
              case "NT 10.0":
                return "10";
              default:
                return;
            }
          }, e3.getMacOSVersionName = function(e4) {
            var t3 = e4.split(".").splice(0, 2).map(function(e5) {
              return parseInt(e5, 10) || 0;
            });
            if (t3.push(0), 10 === t3[0])
              switch (t3[1]) {
                case 5:
                  return "Leopard";
                case 6:
                  return "Snow Leopard";
                case 7:
                  return "Lion";
                case 8:
                  return "Mountain Lion";
                case 9:
                  return "Mavericks";
                case 10:
                  return "Yosemite";
                case 11:
                  return "El Capitan";
                case 12:
                  return "Sierra";
                case 13:
                  return "High Sierra";
                case 14:
                  return "Mojave";
                case 15:
                  return "Catalina";
                default:
                  return;
              }
          }, e3.getAndroidVersionName = function(e4) {
            var t3 = e4.split(".").splice(0, 2).map(function(e5) {
              return parseInt(e5, 10) || 0;
            });
            if (t3.push(0), !(1 === t3[0] && t3[1] < 5))
              return 1 === t3[0] && t3[1] < 6 ? "Cupcake" : 1 === t3[0] && t3[1] >= 6 ? "Donut" : 2 === t3[0] && t3[1] < 2 ? "Eclair" : 2 === t3[0] && 2 === t3[1] ? "Froyo" : 2 === t3[0] && t3[1] > 2 ? "Gingerbread" : 3 === t3[0] ? "Honeycomb" : 4 === t3[0] && t3[1] < 1 ? "Ice Cream Sandwich" : 4 === t3[0] && t3[1] < 4 ? "Jelly Bean" : 4 === t3[0] && t3[1] >= 4 ? "KitKat" : 5 === t3[0] ? "Lollipop" : 6 === t3[0] ? "Marshmallow" : 7 === t3[0] ? "Nougat" : 8 === t3[0] ? "Oreo" : 9 === t3[0] ? "Pie" : void 0;
          }, e3.getVersionPrecision = function(e4) {
            return e4.split(".").length;
          }, e3.compareVersions = function(t3, r3, n3) {
            void 0 === n3 && (n3 = false);
            var i3 = e3.getVersionPrecision(t3), s2 = e3.getVersionPrecision(r3), a2 = Math.max(i3, s2), o2 = 0, u2 = e3.map([t3, r3], function(t4) {
              var r4 = a2 - e3.getVersionPrecision(t4), n4 = t4 + new Array(r4 + 1).join(".0");
              return e3.map(n4.split("."), function(e4) {
                return new Array(20 - e4.length).join("0") + e4;
              }).reverse();
            });
            for (n3 && (o2 = a2 - Math.min(i3, s2)), a2 -= 1; a2 >= o2; ) {
              if (u2[0][a2] > u2[1][a2])
                return 1;
              if (u2[0][a2] === u2[1][a2]) {
                if (a2 === o2)
                  return 0;
                a2 -= 1;
              } else if (u2[0][a2] < u2[1][a2])
                return -1;
            }
          }, e3.map = function(e4, t3) {
            var r3, n3 = [];
            if (Array.prototype.map)
              return Array.prototype.map.call(e4, t3);
            for (r3 = 0; r3 < e4.length; r3 += 1)
              n3.push(t3(e4[r3]));
            return n3;
          }, e3.find = function(e4, t3) {
            var r3, n3;
            if (Array.prototype.find)
              return Array.prototype.find.call(e4, t3);
            for (r3 = 0, n3 = e4.length; r3 < n3; r3 += 1) {
              var i3 = e4[r3];
              if (t3(i3, r3))
                return i3;
            }
          }, e3.assign = function(e4) {
            for (var t3, r3, n3 = e4, i3 = arguments.length, s2 = new Array(i3 > 1 ? i3 - 1 : 0), a2 = 1; a2 < i3; a2++)
              s2[a2 - 1] = arguments[a2];
            if (Object.assign)
              return Object.assign.apply(Object, [e4].concat(s2));
            var o2 = function() {
              var e5 = s2[t3];
              "object" == typeof e5 && null !== e5 && Object.keys(e5).forEach(function(t4) {
                n3[t4] = e5[t4];
              });
            };
            for (t3 = 0, r3 = s2.length; t3 < r3; t3 += 1)
              o2();
            return e4;
          }, e3.getBrowserAlias = function(e4) {
            return n2.BROWSER_ALIASES_MAP[e4];
          }, e3.getBrowserTypeByAlias = function(e4) {
            return n2.BROWSER_MAP[e4] || "";
          }, e3;
        }();
        t2.default = i2, e2.exports = t2.default;
      }, 18: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0;
        t2.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
        t2.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
        t2.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" };
        t2.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
        t2.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
      }, 90: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(91)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
        function a2(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var n3 = t3[r3];
            n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e3, n3.key, n3);
          }
        }
        var o2 = function() {
          function e3() {
          }
          var t3, r3, n3;
          return e3.getParser = function(e4, t4) {
            if (void 0 === t4 && (t4 = false), "string" != typeof e4)
              throw new Error("UserAgent should be a string");
            return new i2.default(e4, t4);
          }, e3.parse = function(e4) {
            return new i2.default(e4).getResult();
          }, t3 = e3, n3 = [{ key: "BROWSER_MAP", get: function() {
            return s2.BROWSER_MAP;
          } }, { key: "ENGINE_MAP", get: function() {
            return s2.ENGINE_MAP;
          } }, { key: "OS_MAP", get: function() {
            return s2.OS_MAP;
          } }, { key: "PLATFORMS_MAP", get: function() {
            return s2.PLATFORMS_MAP;
          } }], (r3 = null) && a2(t3.prototype, r3), n3 && a2(t3, n3), e3;
        }();
        t2.default = o2, e2.exports = t2.default;
      }, 91: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2 = u2(r2(92)), i2 = u2(r2(93)), s2 = u2(r2(94)), a2 = u2(r2(95)), o2 = u2(r2(17));
        function u2(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        }
        var d2 = function() {
          function e3(e4, t4) {
            if (void 0 === t4 && (t4 = false), null == e4 || "" === e4)
              throw new Error("UserAgent parameter can't be empty");
            this._ua = e4, this.parsedResult = {}, true !== t4 && this.parse();
          }
          var t3 = e3.prototype;
          return t3.getUA = function() {
            return this._ua;
          }, t3.test = function(e4) {
            return e4.test(this._ua);
          }, t3.parseBrowser = function() {
            var e4 = this;
            this.parsedResult.browser = {};
            var t4 = o2.default.find(n2.default, function(t5) {
              if ("function" == typeof t5.test)
                return t5.test(e4);
              if (t5.test instanceof Array)
                return t5.test.some(function(t6) {
                  return e4.test(t6);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t4 && (this.parsedResult.browser = t4.describe(this.getUA())), this.parsedResult.browser;
          }, t3.getBrowser = function() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
          }, t3.getBrowserName = function(e4) {
            return e4 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
          }, t3.getBrowserVersion = function() {
            return this.getBrowser().version;
          }, t3.getOS = function() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
          }, t3.parseOS = function() {
            var e4 = this;
            this.parsedResult.os = {};
            var t4 = o2.default.find(i2.default, function(t5) {
              if ("function" == typeof t5.test)
                return t5.test(e4);
              if (t5.test instanceof Array)
                return t5.test.some(function(t6) {
                  return e4.test(t6);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
          }, t3.getOSName = function(e4) {
            var t4 = this.getOS().name;
            return e4 ? String(t4).toLowerCase() || "" : t4 || "";
          }, t3.getOSVersion = function() {
            return this.getOS().version;
          }, t3.getPlatform = function() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
          }, t3.getPlatformType = function(e4) {
            void 0 === e4 && (e4 = false);
            var t4 = this.getPlatform().type;
            return e4 ? String(t4).toLowerCase() || "" : t4 || "";
          }, t3.parsePlatform = function() {
            var e4 = this;
            this.parsedResult.platform = {};
            var t4 = o2.default.find(s2.default, function(t5) {
              if ("function" == typeof t5.test)
                return t5.test(e4);
              if (t5.test instanceof Array)
                return t5.test.some(function(t6) {
                  return e4.test(t6);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
          }, t3.getEngine = function() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
          }, t3.getEngineName = function(e4) {
            return e4 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
          }, t3.parseEngine = function() {
            var e4 = this;
            this.parsedResult.engine = {};
            var t4 = o2.default.find(a2.default, function(t5) {
              if ("function" == typeof t5.test)
                return t5.test(e4);
              if (t5.test instanceof Array)
                return t5.test.some(function(t6) {
                  return e4.test(t6);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
          }, t3.parse = function() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
          }, t3.getResult = function() {
            return o2.default.assign({}, this.parsedResult);
          }, t3.satisfies = function(e4) {
            var t4 = this, r3 = {}, n3 = 0, i3 = {}, s3 = 0;
            if (Object.keys(e4).forEach(function(t5) {
              var a4 = e4[t5];
              "string" == typeof a4 ? (i3[t5] = a4, s3 += 1) : "object" == typeof a4 && (r3[t5] = a4, n3 += 1);
            }), n3 > 0) {
              var a3 = Object.keys(r3), u3 = o2.default.find(a3, function(e5) {
                return t4.isOS(e5);
              });
              if (u3) {
                var d3 = this.satisfies(r3[u3]);
                if (void 0 !== d3)
                  return d3;
              }
              var c2 = o2.default.find(a3, function(e5) {
                return t4.isPlatform(e5);
              });
              if (c2) {
                var f2 = this.satisfies(r3[c2]);
                if (void 0 !== f2)
                  return f2;
              }
            }
            if (s3 > 0) {
              var l2 = Object.keys(i3), h2 = o2.default.find(l2, function(e5) {
                return t4.isBrowser(e5, true);
              });
              if (void 0 !== h2)
                return this.compareVersion(i3[h2]);
            }
          }, t3.isBrowser = function(e4, t4) {
            void 0 === t4 && (t4 = false);
            var r3 = this.getBrowserName().toLowerCase(), n3 = e4.toLowerCase(), i3 = o2.default.getBrowserTypeByAlias(n3);
            return t4 && i3 && (n3 = i3.toLowerCase()), n3 === r3;
          }, t3.compareVersion = function(e4) {
            var t4 = [0], r3 = e4, n3 = false, i3 = this.getBrowserVersion();
            if ("string" == typeof i3)
              return ">" === e4[0] || "<" === e4[0] ? (r3 = e4.substr(1), "=" === e4[1] ? (n3 = true, r3 = e4.substr(2)) : t4 = [], ">" === e4[0] ? t4.push(1) : t4.push(-1)) : "=" === e4[0] ? r3 = e4.substr(1) : "~" === e4[0] && (n3 = true, r3 = e4.substr(1)), t4.indexOf(o2.default.compareVersions(i3, r3, n3)) > -1;
          }, t3.isOS = function(e4) {
            return this.getOSName(true) === String(e4).toLowerCase();
          }, t3.isPlatform = function(e4) {
            return this.getPlatformType(true) === String(e4).toLowerCase();
          }, t3.isEngine = function(e4) {
            return this.getEngineName(true) === String(e4).toLowerCase();
          }, t3.is = function(e4, t4) {
            return void 0 === t4 && (t4 = false), this.isBrowser(e4, t4) || this.isOS(e4) || this.isPlatform(e4);
          }, t3.some = function(e4) {
            var t4 = this;
            return void 0 === e4 && (e4 = []), e4.some(function(e5) {
              return t4.is(e5);
            });
          }, e3;
        }();
        t2.default = d2, e2.exports = t2.default;
      }, 92: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 };
        var s2 = /version\/(\d+(\.?_?\d+)+)/i, a2 = [{ test: [/googlebot/i], describe: function(e3) {
          var t3 = { name: "Googlebot" }, r3 = i2.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/opera/i], describe: function(e3) {
          var t3 = { name: "Opera" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/opr\/|opios/i], describe: function(e3) {
          var t3 = { name: "Opera" }, r3 = i2.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/SamsungBrowser/i], describe: function(e3) {
          var t3 = { name: "Samsung Internet for Android" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/Whale/i], describe: function(e3) {
          var t3 = { name: "NAVER Whale Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/MZBrowser/i], describe: function(e3) {
          var t3 = { name: "MZ Browser" }, r3 = i2.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/focus/i], describe: function(e3) {
          var t3 = { name: "Focus" }, r3 = i2.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/swing/i], describe: function(e3) {
          var t3 = { name: "Swing" }, r3 = i2.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/coast/i], describe: function(e3) {
          var t3 = { name: "Opera Coast" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e3) {
          var t3 = { name: "Opera Touch" }, r3 = i2.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/yabrowser/i], describe: function(e3) {
          var t3 = { name: "Yandex Browser" }, r3 = i2.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/ucbrowser/i], describe: function(e3) {
          var t3 = { name: "UC Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/Maxthon|mxios/i], describe: function(e3) {
          var t3 = { name: "Maxthon" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/epiphany/i], describe: function(e3) {
          var t3 = { name: "Epiphany" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/puffin/i], describe: function(e3) {
          var t3 = { name: "Puffin" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/sleipnir/i], describe: function(e3) {
          var t3 = { name: "Sleipnir" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/k-meleon/i], describe: function(e3) {
          var t3 = { name: "K-Meleon" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/micromessenger/i], describe: function(e3) {
          var t3 = { name: "WeChat" }, r3 = i2.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/qqbrowser/i], describe: function(e3) {
          var t3 = { name: /qqbrowserlite/i.test(e3) ? "QQ Browser Lite" : "QQ Browser" }, r3 = i2.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/msie|trident/i], describe: function(e3) {
          var t3 = { name: "Internet Explorer" }, r3 = i2.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/\sedg\//i], describe: function(e3) {
          var t3 = { name: "Microsoft Edge" }, r3 = i2.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/edg([ea]|ios)/i], describe: function(e3) {
          var t3 = { name: "Microsoft Edge" }, r3 = i2.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/vivaldi/i], describe: function(e3) {
          var t3 = { name: "Vivaldi" }, r3 = i2.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/seamonkey/i], describe: function(e3) {
          var t3 = { name: "SeaMonkey" }, r3 = i2.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/sailfish/i], describe: function(e3) {
          var t3 = { name: "Sailfish" }, r3 = i2.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/silk/i], describe: function(e3) {
          var t3 = { name: "Amazon Silk" }, r3 = i2.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/phantom/i], describe: function(e3) {
          var t3 = { name: "PhantomJS" }, r3 = i2.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/slimerjs/i], describe: function(e3) {
          var t3 = { name: "SlimerJS" }, r3 = i2.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
          var t3 = { name: "BlackBerry" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
          var t3 = { name: "WebOS Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/bada/i], describe: function(e3) {
          var t3 = { name: "Bada" }, r3 = i2.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/tizen/i], describe: function(e3) {
          var t3 = { name: "Tizen" }, r3 = i2.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/qupzilla/i], describe: function(e3) {
          var t3 = { name: "QupZilla" }, r3 = i2.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e3) {
          var t3 = { name: "Firefox" }, r3 = i2.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/electron/i], describe: function(e3) {
          var t3 = { name: "Electron" }, r3 = i2.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/MiuiBrowser/i], describe: function(e3) {
          var t3 = { name: "Miui" }, r3 = i2.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/chromium/i], describe: function(e3) {
          var t3 = { name: "Chromium" }, r3 = i2.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/chrome|crios|crmo/i], describe: function(e3) {
          var t3 = { name: "Chrome" }, r3 = i2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/GSA/i], describe: function(e3) {
          var t3 = { name: "Google Search" }, r3 = i2.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
          return t3 && r3;
        }, describe: function(e3) {
          var t3 = { name: "Android Browser" }, r3 = i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/playstation 4/i], describe: function(e3) {
          var t3 = { name: "PlayStation 4" }, r3 = i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/safari|applewebkit/i], describe: function(e3) {
          var t3 = { name: "Safari" }, r3 = i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/.*/i], describe: function(e3) {
          var t3 = -1 !== e3.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
          return { name: i2.default.getFirstMatch(t3, e3), version: i2.default.getSecondMatch(t3, e3) };
        } }];
        t2.default = a2, e2.exports = t2.default;
      }, 93: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
        var a2 = [{ test: [/Roku\/DVP/], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e3);
          return { name: s2.OS_MAP.Roku, version: t3 };
        } }, { test: [/windows phone/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e3);
          return { name: s2.OS_MAP.WindowsPhone, version: t3 };
        } }, { test: [/windows /i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e3), r3 = i2.default.getWindowsVersionName(t3);
          return { name: s2.OS_MAP.Windows, version: t3, versionName: r3 };
        } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e3) {
          var t3 = { name: s2.OS_MAP.iOS }, r3 = i2.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/macintosh/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e3).replace(/[_\s]/g, "."), r3 = i2.default.getMacOSVersionName(t3), n3 = { name: s2.OS_MAP.MacOS, version: t3 };
          return r3 && (n3.versionName = r3), n3;
        } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e3).replace(/[_\s]/g, ".");
          return { name: s2.OS_MAP.iOS, version: t3 };
        } }, { test: function(e3) {
          var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
          return t3 && r3;
        }, describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e3), r3 = i2.default.getAndroidVersionName(t3), n3 = { name: s2.OS_MAP.Android, version: t3 };
          return r3 && (n3.versionName = r3), n3;
        } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e3), r3 = { name: s2.OS_MAP.WebOS };
          return t3 && t3.length && (r3.version = t3), r3;
        } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e3) || i2.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e3) || i2.default.getFirstMatch(/\bbb(\d+)/i, e3);
          return { name: s2.OS_MAP.BlackBerry, version: t3 };
        } }, { test: [/bada/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e3);
          return { name: s2.OS_MAP.Bada, version: t3 };
        } }, { test: [/tizen/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e3);
          return { name: s2.OS_MAP.Tizen, version: t3 };
        } }, { test: [/linux/i], describe: function() {
          return { name: s2.OS_MAP.Linux };
        } }, { test: [/CrOS/], describe: function() {
          return { name: s2.OS_MAP.ChromeOS };
        } }, { test: [/PlayStation 4/], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e3);
          return { name: s2.OS_MAP.PlayStation4, version: t3 };
        } }];
        t2.default = a2, e2.exports = t2.default;
      }, 94: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
        var a2 = [{ test: [/googlebot/i], describe: function() {
          return { type: "bot", vendor: "Google" };
        } }, { test: [/huawei/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/(can-l01)/i, e3) && "Nova", r3 = { type: s2.PLATFORMS_MAP.mobile, vendor: "Huawei" };
          return t3 && (r3.model = t3), r3;
        } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Nexus" };
        } }, { test: [/ipad/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        } }, { test: [/kftt build/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
        } }, { test: [/silk/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Amazon" };
        } }, { test: [/tablet(?! pc)/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet };
        } }, { test: function(e3) {
          var t3 = e3.test(/ipod|iphone/i), r3 = e3.test(/like (ipod|iphone)/i);
          return t3 && !r3;
        }, describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/(ipod|iphone)/i, e3);
          return { type: s2.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
        } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile, vendor: "Nexus" };
        } }, { test: [/[^-]mobi/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile };
        } }, { test: function(e3) {
          return "blackberry" === e3.getBrowserName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
        } }, { test: function(e3) {
          return "bada" === e3.getBrowserName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile };
        } }, { test: function(e3) {
          return "windows phone" === e3.getBrowserName();
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
        } }, { test: function(e3) {
          var t3 = Number(String(e3.getOSVersion()).split(".")[0]);
          return "android" === e3.getOSName(true) && t3 >= 3;
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet };
        } }, { test: function(e3) {
          return "android" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile };
        } }, { test: function(e3) {
          return "macos" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.desktop, vendor: "Apple" };
        } }, { test: function(e3) {
          return "windows" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.desktop };
        } }, { test: function(e3) {
          return "linux" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.desktop };
        } }, { test: function(e3) {
          return "playstation 4" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.tv };
        } }, { test: function(e3) {
          return "roku" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.tv };
        } }];
        t2.default = a2, e2.exports = t2.default;
      }, 95: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
        var a2 = [{ test: function(e3) {
          return "microsoft edge" === e3.getBrowserName(true);
        }, describe: function(e3) {
          if (/\sedg\//i.test(e3))
            return { name: s2.ENGINE_MAP.Blink };
          var t3 = i2.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e3);
          return { name: s2.ENGINE_MAP.EdgeHTML, version: t3 };
        } }, { test: [/trident/i], describe: function(e3) {
          var t3 = { name: s2.ENGINE_MAP.Trident }, r3 = i2.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          return e3.test(/presto/i);
        }, describe: function(e3) {
          var t3 = { name: s2.ENGINE_MAP.Presto }, r3 = i2.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          var t3 = e3.test(/gecko/i), r3 = e3.test(/like gecko/i);
          return t3 && !r3;
        }, describe: function(e3) {
          var t3 = { name: s2.ENGINE_MAP.Gecko }, r3 = i2.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
          return { name: s2.ENGINE_MAP.Blink };
        } }, { test: [/(apple)?webkit/i], describe: function(e3) {
          var t3 = { name: s2.ENGINE_MAP.WebKit }, r3 = i2.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }];
        t2.default = a2, e2.exports = t2.default;
      } });
    });
  }
});

// node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.js
var require_tslib6 = __commonJS({
  "node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      __extends = function(d2, b2) {
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      __rest = function(s2, e2) {
        var t2 = {};
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
            t2[p2] = s2[p2];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
            if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
              t2[p2[i2]] = s2[p2[i2]];
          }
        return t2;
      };
      __decorate = function(decorators, target, key, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y2, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      };
      __exportStar = function(m2, exports2) {
        for (var p2 in m2)
          if (p2 !== "default" && !exports2.hasOwnProperty(p2))
            exports2[p2] = m2[p2];
      };
      __values = function(o2) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o2, n2) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i2 = m2.call(o2), r2, ar2 = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar2.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i2["return"]))
              m2.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar2;
      };
      __spread = function() {
        for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
          ar2 = ar2.concat(__read(arguments[i2]));
        return ar2;
      };
      __spreadArrays = function() {
        for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s2 += arguments[i2].length;
        for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
            r2[k2] = a2[j2];
        return r2;
      };
      __await = function(v2) {
        return this instanceof __await ? (this.v = v2, this) : new __await(v2);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g2[n2])
            i2[n2] = function(v2) {
              return new Promise(function(a2, b2) {
                q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e2) {
            settle(q2[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q2.shift(), q2.length)
            resume(q2[0][0], q2[0][1]);
        }
      };
      __asyncDelegator = function(o2) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f2) {
          i2[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i2;
        return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw3) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw3 });
        } else {
          cooked.raw = raw3;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (Object.hasOwnProperty.call(mod, k2))
              result[k2] = mod[k2];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// node_modules/@aws-crypto/crc32/build/aws_crc32.js
var require_aws_crc32 = __commonJS({
  "node_modules/@aws-crypto/crc32/build/aws_crc32.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = void 0;
    var tslib_1 = require_tslib6();
    var util_1 = require_build3();
    var index_1 = require_build7();
    var AwsCrc322 = (
      /** @class */
      function() {
        function AwsCrc323() {
          this.crc32 = new index_1.Crc32();
        }
        AwsCrc323.prototype.update = function(toHash) {
          if ((0, util_1.isEmptyData)(toHash))
            return;
          this.crc32.update((0, util_1.convertToBuffer)(toHash));
        };
        AwsCrc323.prototype.digest = function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2, (0, util_1.numToUint8)(this.crc32.digest())];
            });
          });
        };
        AwsCrc323.prototype.reset = function() {
          this.crc32 = new index_1.Crc32();
        };
        return AwsCrc323;
      }()
    );
    exports.AwsCrc32 = AwsCrc322;
  }
});

// node_modules/@aws-crypto/crc32/build/index.js
var require_build7 = __commonJS({
  "node_modules/@aws-crypto/crc32/build/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
    var tslib_1 = require_tslib6();
    var util_1 = require_build3();
    function crc32(data) {
      return new Crc323().update(data).digest();
    }
    exports.crc32 = crc32;
    var Crc323 = (
      /** @class */
      function() {
        function Crc324() {
          this.checksum = 4294967295;
        }
        Crc324.prototype.update = function(data) {
          var e_1, _a;
          try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
              var byte = data_1_1.value;
              this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (data_1_1 && !data_1_1.done && (_a = data_1.return))
                _a.call(data_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          return this;
        };
        Crc324.prototype.digest = function() {
          return (this.checksum ^ 4294967295) >>> 0;
        };
        return Crc324;
      }()
    );
    exports.Crc32 = Crc323;
    var a_lookUpTable = [
      0,
      1996959894,
      3993919788,
      2567524794,
      124634137,
      1886057615,
      3915621685,
      2657392035,
      249268274,
      2044508324,
      3772115230,
      2547177864,
      162941995,
      2125561021,
      3887607047,
      2428444049,
      498536548,
      1789927666,
      4089016648,
      2227061214,
      450548861,
      1843258603,
      4107580753,
      2211677639,
      325883990,
      1684777152,
      4251122042,
      2321926636,
      335633487,
      1661365465,
      4195302755,
      2366115317,
      997073096,
      1281953886,
      3579855332,
      2724688242,
      1006888145,
      1258607687,
      3524101629,
      2768942443,
      901097722,
      1119000684,
      3686517206,
      2898065728,
      853044451,
      1172266101,
      3705015759,
      2882616665,
      651767980,
      1373503546,
      3369554304,
      3218104598,
      565507253,
      1454621731,
      3485111705,
      3099436303,
      671266974,
      1594198024,
      3322730930,
      2970347812,
      795835527,
      1483230225,
      3244367275,
      3060149565,
      1994146192,
      31158534,
      2563907772,
      4023717930,
      1907459465,
      112637215,
      2680153253,
      3904427059,
      2013776290,
      251722036,
      2517215374,
      3775830040,
      2137656763,
      141376813,
      2439277719,
      3865271297,
      1802195444,
      476864866,
      2238001368,
      4066508878,
      1812370925,
      453092731,
      2181625025,
      4111451223,
      1706088902,
      314042704,
      2344532202,
      4240017532,
      1658658271,
      366619977,
      2362670323,
      4224994405,
      1303535960,
      984961486,
      2747007092,
      3569037538,
      1256170817,
      1037604311,
      2765210733,
      3554079995,
      1131014506,
      879679996,
      2909243462,
      3663771856,
      1141124467,
      855842277,
      2852801631,
      3708648649,
      1342533948,
      654459306,
      3188396048,
      3373015174,
      1466479909,
      544179635,
      3110523913,
      3462522015,
      1591671054,
      702138776,
      2966460450,
      3352799412,
      1504918807,
      783551873,
      3082640443,
      3233442989,
      3988292384,
      2596254646,
      62317068,
      1957810842,
      3939845945,
      2647816111,
      81470997,
      1943803523,
      3814918930,
      2489596804,
      225274430,
      2053790376,
      3826175755,
      2466906013,
      167816743,
      2097651377,
      4027552580,
      2265490386,
      503444072,
      1762050814,
      4150417245,
      2154129355,
      426522225,
      1852507879,
      4275313526,
      2312317920,
      282753626,
      1742555852,
      4189708143,
      2394877945,
      397917763,
      1622183637,
      3604390888,
      2714866558,
      953729732,
      1340076626,
      3518719985,
      2797360999,
      1068828381,
      1219638859,
      3624741850,
      2936675148,
      906185462,
      1090812512,
      3747672003,
      2825379669,
      829329135,
      1181335161,
      3412177804,
      3160834842,
      628085408,
      1382605366,
      3423369109,
      3138078467,
      570562233,
      1426400815,
      3317316542,
      2998733608,
      733239954,
      1555261956,
      3268935591,
      3050360625,
      752459403,
      1541320221,
      2607071920,
      3965973030,
      1969922972,
      40735498,
      2617837225,
      3943577151,
      1913087877,
      83908371,
      2512341634,
      3803740692,
      2075208622,
      213261112,
      2463272603,
      3855990285,
      2094854071,
      198958881,
      2262029012,
      4057260610,
      1759359992,
      534414190,
      2176718541,
      4139329115,
      1873836001,
      414664567,
      2282248934,
      4279200368,
      1711684554,
      285281116,
      2405801727,
      4167216745,
      1634467795,
      376229701,
      2685067896,
      3608007406,
      1308918612,
      956543938,
      2808555105,
      3495958263,
      1231636301,
      1047427035,
      2932959818,
      3654703836,
      1088359270,
      936918e3,
      2847714899,
      3736837829,
      1202900863,
      817233897,
      3183342108,
      3401237130,
      1404277552,
      615818150,
      3134207493,
      3453421203,
      1423857449,
      601450431,
      3009837614,
      3294710456,
      1567103746,
      711928724,
      3020668471,
      3272380065,
      1510334235,
      755167117
    ];
    var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
    var aws_crc32_1 = require_aws_crc32();
    Object.defineProperty(exports, "AwsCrc32", { enumerable: true, get: function() {
      return aws_crc32_1.AwsCrc32;
    } });
  }
});

// node_modules/@aws-crypto/crc32c/node_modules/tslib/tslib.js
var require_tslib7 = __commonJS({
  "node_modules/@aws-crypto/crc32c/node_modules/tslib/tslib.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      __extends = function(d2, b2) {
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      __rest = function(s2, e2) {
        var t2 = {};
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
            t2[p2] = s2[p2];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
            if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
              t2[p2[i2]] = s2[p2[i2]];
          }
        return t2;
      };
      __decorate = function(decorators, target, key, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y2, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      };
      __exportStar = function(m2, exports2) {
        for (var p2 in m2)
          if (p2 !== "default" && !exports2.hasOwnProperty(p2))
            exports2[p2] = m2[p2];
      };
      __values = function(o2) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o2, n2) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i2 = m2.call(o2), r2, ar2 = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar2.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i2["return"]))
              m2.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar2;
      };
      __spread = function() {
        for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
          ar2 = ar2.concat(__read(arguments[i2]));
        return ar2;
      };
      __spreadArrays = function() {
        for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s2 += arguments[i2].length;
        for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
            r2[k2] = a2[j2];
        return r2;
      };
      __await = function(v2) {
        return this instanceof __await ? (this.v = v2, this) : new __await(v2);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g2[n2])
            i2[n2] = function(v2) {
              return new Promise(function(a2, b2) {
                q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e2) {
            settle(q2[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q2.shift(), q2.length)
            resume(q2[0][0], q2[0][1]);
        }
      };
      __asyncDelegator = function(o2) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f2) {
          i2[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i2;
        return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw3) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw3 });
        } else {
          cooked.raw = raw3;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (Object.hasOwnProperty.call(mod, k2))
              result[k2] = mod[k2];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// node_modules/@aws-crypto/crc32c/build/aws_crc32c.js
var require_aws_crc32c = __commonJS({
  "node_modules/@aws-crypto/crc32c/build/aws_crc32c.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32c = void 0;
    var tslib_1 = require_tslib7();
    var util_1 = require_build3();
    var index_1 = require_build8();
    var AwsCrc32c2 = (
      /** @class */
      function() {
        function AwsCrc32c3() {
          this.crc32c = new index_1.Crc32c();
        }
        AwsCrc32c3.prototype.update = function(toHash) {
          if ((0, util_1.isEmptyData)(toHash))
            return;
          this.crc32c.update((0, util_1.convertToBuffer)(toHash));
        };
        AwsCrc32c3.prototype.digest = function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2, (0, util_1.numToUint8)(this.crc32c.digest())];
            });
          });
        };
        AwsCrc32c3.prototype.reset = function() {
          this.crc32c = new index_1.Crc32c();
        };
        return AwsCrc32c3;
      }()
    );
    exports.AwsCrc32c = AwsCrc32c2;
  }
});

// node_modules/@aws-crypto/crc32c/build/index.js
var require_build8 = __commonJS({
  "node_modules/@aws-crypto/crc32c/build/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32c = exports.Crc32c = exports.crc32c = void 0;
    var tslib_1 = require_tslib7();
    var util_1 = require_build3();
    function crc32c(data) {
      return new Crc32c().update(data).digest();
    }
    exports.crc32c = crc32c;
    var Crc32c = (
      /** @class */
      function() {
        function Crc32c2() {
          this.checksum = 4294967295;
        }
        Crc32c2.prototype.update = function(data) {
          var e_1, _a;
          try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
              var byte = data_1_1.value;
              this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (data_1_1 && !data_1_1.done && (_a = data_1.return))
                _a.call(data_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          return this;
        };
        Crc32c2.prototype.digest = function() {
          return (this.checksum ^ 4294967295) >>> 0;
        };
        return Crc32c2;
      }()
    );
    exports.Crc32c = Crc32c;
    var a_lookupTable = [
      0,
      4067132163,
      3778769143,
      324072436,
      3348797215,
      904991772,
      648144872,
      3570033899,
      2329499855,
      2024987596,
      1809983544,
      2575936315,
      1296289744,
      3207089363,
      2893594407,
      1578318884,
      274646895,
      3795141740,
      4049975192,
      51262619,
      3619967088,
      632279923,
      922689671,
      3298075524,
      2592579488,
      1760304291,
      2075979607,
      2312596564,
      1562183871,
      2943781820,
      3156637768,
      1313733451,
      549293790,
      3537243613,
      3246849577,
      871202090,
      3878099393,
      357341890,
      102525238,
      4101499445,
      2858735121,
      1477399826,
      1264559846,
      3107202533,
      1845379342,
      2677391885,
      2361733625,
      2125378298,
      820201905,
      3263744690,
      3520608582,
      598981189,
      4151959214,
      85089709,
      373468761,
      3827903834,
      3124367742,
      1213305469,
      1526817161,
      2842354314,
      2107672161,
      2412447074,
      2627466902,
      1861252501,
      1098587580,
      3004210879,
      2688576843,
      1378610760,
      2262928035,
      1955203488,
      1742404180,
      2511436119,
      3416409459,
      969524848,
      714683780,
      3639785095,
      205050476,
      4266873199,
      3976438427,
      526918040,
      1361435347,
      2739821008,
      2954799652,
      1114974503,
      2529119692,
      1691668175,
      2005155131,
      2247081528,
      3690758684,
      697762079,
      986182379,
      3366744552,
      476452099,
      3993867776,
      4250756596,
      255256311,
      1640403810,
      2477592673,
      2164122517,
      1922457750,
      2791048317,
      1412925310,
      1197962378,
      3037525897,
      3944729517,
      427051182,
      170179418,
      4165941337,
      746937522,
      3740196785,
      3451792453,
      1070968646,
      1905808397,
      2213795598,
      2426610938,
      1657317369,
      3053634322,
      1147748369,
      1463399397,
      2773627110,
      4215344322,
      153784257,
      444234805,
      3893493558,
      1021025245,
      3467647198,
      3722505002,
      797665321,
      2197175160,
      1889384571,
      1674398607,
      2443626636,
      1164749927,
      3070701412,
      2757221520,
      1446797203,
      137323447,
      4198817972,
      3910406976,
      461344835,
      3484808360,
      1037989803,
      781091935,
      3705997148,
      2460548119,
      1623424788,
      1939049696,
      2180517859,
      1429367560,
      2807687179,
      3020495871,
      1180866812,
      410100952,
      3927582683,
      4182430767,
      186734380,
      3756733383,
      763408580,
      1053836080,
      3434856499,
      2722870694,
      1344288421,
      1131464017,
      2971354706,
      1708204729,
      2545590714,
      2229949006,
      1988219213,
      680717673,
      3673779818,
      3383336350,
      1002577565,
      4010310262,
      493091189,
      238226049,
      4233660802,
      2987750089,
      1082061258,
      1395524158,
      2705686845,
      1972364758,
      2279892693,
      2494862625,
      1725896226,
      952904198,
      3399985413,
      3656866545,
      731699698,
      4283874585,
      222117402,
      510512622,
      3959836397,
      3280807620,
      837199303,
      582374963,
      3504198960,
      68661723,
      4135334616,
      3844915500,
      390545967,
      1230274059,
      3141532936,
      2825850620,
      1510247935,
      2395924756,
      2091215383,
      1878366691,
      2644384480,
      3553878443,
      565732008,
      854102364,
      3229815391,
      340358836,
      3861050807,
      4117890627,
      119113024,
      1493875044,
      2875275879,
      3090270611,
      1247431312,
      2660249211,
      1828433272,
      2141937292,
      2378227087,
      3811616794,
      291187481,
      34330861,
      4032846830,
      615137029,
      3603020806,
      3314634738,
      939183345,
      1776939221,
      2609017814,
      2295496738,
      2058945313,
      2926798794,
      1545135305,
      1330124605,
      3173225534,
      4084100981,
      17165430,
      307568514,
      3762199681,
      888469610,
      3332340585,
      3587147933,
      665062302,
      2042050490,
      2346497209,
      2559330125,
      1793573966,
      3190661285,
      1279665062,
      1595330642,
      2910671697
    ];
    var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookupTable);
    var aws_crc32c_1 = require_aws_crc32c();
    Object.defineProperty(exports, "AwsCrc32c", { enumerable: true, get: function() {
      return aws_crc32c_1.AwsCrc32c;
    } });
  }
});

// .wrangler/tmp/bundle-5ItRe7/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-5ItRe7/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// src/index.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c2) => c2({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map2 = {}) => {
  Object.entries(map2).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var Context = class {
  req;
  env = {};
  _var = {};
  finalized = false;
  error = void 0;
  #status = 200;
  #executionCtx;
  #headers = void 0;
  #preparedHeaders = void 0;
  #res;
  #isFresh = true;
  layout = void 0;
  renderer = (content) => this.html(content);
  notFoundHandler = () => new Response();
  constructor(req, options) {
    this.req = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      this.#res.headers.delete("content-type");
      for (const [k2, v2] of this.#res.headers.entries()) {
        if (k2 === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k2, v2);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => this.renderer(...args);
  setLayout = (layout) => this.layout = layout;
  getLayout = () => this.layout;
  setRenderer = (renderer) => {
    this.renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this._var ??= {};
    this._var[key] = value;
  };
  get = (key) => {
    return this._var ? this._var[key] : void 0;
  };
  get var() {
    return { ...this._var };
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v2, k2) => {
          if (k2 === "set-cookie") {
            header.append(k2, v2);
          } else {
            header.set(k2, v2);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v2, k2) => {
        if (k2 === "set-cookie") {
          this.#headers?.append(k2, v2);
        } else {
          this.#headers?.set(k2, v2);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k2, v2] of Object.entries(headers)) {
      if (typeof v2 === "string") {
        this.#headers.set(k2, v2);
      } else {
        this.#headers.delete(k2);
        for (const v22 of v2) {
          this.#headers.append(k2, v22);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      if (!(html instanceof Promise)) {
        html = html.toString();
      }
      if (html instanceof Promise) {
        return html.then((html2) => resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html2) => {
          return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
        });
      }
    }
    return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", location);
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    return this.notFoundHandler(this);
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i2) {
      if (i2 <= index) {
        throw new Error("next() called multiple times");
      }
      index = i2;
      let res;
      let isError = false;
      let handler;
      if (middleware[i2]) {
        handler = middleware[i2][0][0];
        if (context instanceof Context) {
          context.req.routeIndex = i2;
        }
      } else {
        handler = i2 === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i2 + 1);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType !== null && contentType.startsWith("multipart/form-data") || contentType !== null && contentType.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i2 = groups.length - 1; i2 >= 0; i2--) {
    const [mark] = groups[i2];
    for (let j2 = paths.length - 1; j2 >= 0; j2--) {
      if (paths[j2].includes(mark)) {
        paths[j2] = paths[j2].replace(mark, groups[i2][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecodeURI = (str) => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
};
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i2 = start;
  for (; i2 < url.length; i2++) {
    const charCode = url.charCodeAt(i2);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i2);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i2);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p2 = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p2[p2.length - 1] === "/") {
      p2 = p2.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p2 = `${p2}/`;
    } else if (path !== "/") {
      p2 = `${p2}${path}`;
    }
    if (path === "/" && p2 === "") {
      p2 = "/";
    }
  }
  return p2;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v2, i2, a2) => a2.indexOf(v2) === i2);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody) {
      return this.bodyCache.parsedBody;
    }
    const parsedBody = await parseBody(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  cachedBody = (key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    if (!bodyCache[key]) {
      for (const keyOfBodyCache of Object.keys(bodyCache)) {
        if (keyOfBodyCache === "parsedBody") {
          continue;
        }
        return (async () => {
          let body = await bodyCache[keyOfBodyCache];
          if (keyOfBodyCache === "json") {
            body = JSON.stringify(body);
          }
          return await new Response(body)[key]();
        })();
      }
    }
    return bodyCache[key] = raw3[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c2) => {
  return c2.text("404 Not Found", 404);
};
var errorHandler = (err, c2) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c2.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method) {
        return this;
      }
      for (const p2 of [path].flat()) {
        this.#path = p2;
        for (const m2 of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m2.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    if (!app2) {
      return subApp;
    }
    app2.routes.map((r2) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r2.handler;
      } else {
        handler = async (c2, next) => (await compose([], app2.errorHandler)(c2, () => r2.handler(c2, next))).res;
        handler[COMPOSED_HANDLER] = r2.handler;
      }
      subApp.addRoute(r2.method, r2.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c2) => {
      const options2 = optionHandler(c2);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c2) => {
      let executionContext = void 0;
      try {
        executionContext = c2.executionCtx;
      } catch {
      }
      return [c2.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = async (c2, next) => {
      const res = await applicationHandler(replaceRequest(c2.req.raw), ...getOptions(c2));
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r2 = { path, method, handler };
    this.router.add(method, path, [handler, r2]);
    this.routes.push(r2);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c2) {
    if (err instanceof Error) {
      return this.errorHandler(err, c2);
    }
    throw err;
  }
  dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.matchRoute(method, path);
    const c2 = new Context(new HonoRequest(request, path, matchResult), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c2, async () => {
          c2.res = await this.notFoundHandler(c2);
        });
      } catch (err) {
        return this.handleError(err, c2);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c2.finalized ? c2.res : this.notFoundHandler(c2))
      ).catch((err) => this.handleError(err, c2)) : res ?? this.notFoundHandler(c2);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c2);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c2);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a2, b2) {
  if (a2.length === 1) {
    return b2.length === 1 ? a2 < b2 ? -1 : 1 : -1;
  }
  if (b2.length === 1) {
    return 1;
  }
  if (a2 === ONLY_WILDCARD_REG_EXP_STR || a2 === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b2 === ONLY_WILDCARD_REG_EXP_STR || b2 === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a2 === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b2 === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a2.length === b2.length ? a2 < b2 ? -1 : 1 : b2.length - a2.length;
}
var Node = class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k2) => k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k2) => k2.length > 1 && k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k2) => {
      const c2 = this.children[k2];
      return (typeof c2.varIndex === "number" ? `(${k2})@${c2.varIndex}` : regExpMetaChars.has(k2) ? `\\${k2}` : k2) + c2.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
var Trie = class {
  context = { varIndex: 0 };
  root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i2 = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m2) => {
        const mark = `@\\${i2}`;
        groups[i2] = [mark, m2];
        i2++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i2 = groups.length - 1; i2 >= 0; i2--) {
      const [mark] = groups[i2];
      for (let j2 = tokens.length - 1; j2 >= 0; j2--) {
        if (tokens[j2].indexOf(mark) !== -1) {
          tokens[j2] = tokens[j2].replace(mark, groups[i2][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i2 = 0, j2 = -1, len = routesWithStaticPathFlag.length; i2 < len; i2++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i2];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h2]) => [h2, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j2++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j2, pathErrorCheckOnly);
    } catch (e2) {
      throw e2 === PATH_ERROR ? new UnsupportedPathError(path) : e2;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j2] = handlers.map(([h2, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h2, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i2 = 0, len = handlerData.length; i2 < len; i2++) {
    for (let j2 = 0, len2 = handlerData[i2].length; j2 < len2; j2++) {
      const map2 = handlerData[i2][j2]?.[1];
      if (!map2) {
        continue;
      }
      const keys = Object.keys(map2);
      for (let k2 = 0, len3 = keys.length; k2 < len3; k2++) {
        map2[keys[k2]] = paramReplacementMap[map2[keys[k2]]];
      }
    }
  }
  const handlerMap = [];
  for (const i2 in indexReplacementMap) {
    handlerMap[i2] = handlerData[indexReplacementMap[i2]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k2 of Object.keys(middleware).sort((a2, b2) => b2.length - a2.length)) {
    if (buildWildcardRegExp(k2).test(path)) {
      return [...middleware[k2]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p2) => {
          handlerMap[method][p2] = [...handlerMap[METHOD_NAME_ALL][p2]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m2) => {
          middleware[m2][path] ||= findMiddleware(middleware[m2], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(middleware[m2]).forEach((p2) => {
            re.test(p2) && middleware[m2][p2].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(routes[m2]).forEach(
            (p2) => re.test(p2) && routes[m2][p2].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i2 = 0, len = paths.length; i2 < len; i2++) {
      const path2 = paths[i2];
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          routes[m2][path2] ||= [
            ...findMiddleware(middleware[m2], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m2][path2].push([handler, paramCount - len + i2 + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((method) => {
      matchers[method] ||= this.buildMatcher(method);
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r2) => {
      const ownRoute = r2[method] ? Object.keys(r2[method]).map((path) => [path, r2[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r2[METHOD_NAME_ALL]).map((path) => [path, r2[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
var SmartRouter = class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i2 = 0;
    let res;
    for (; i2 < len; i2++) {
      const router = routers[i2];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e2) {
        if (e2 instanceof UnsupportedPathError) {
          continue;
        }
        throw e2;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i2 === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var Node2 = class {
  methods;
  children;
  patterns;
  order = 0;
  name;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m2 = /* @__PURE__ */ Object.create(null);
      m2[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m2];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i2 = 0, len = parts.length; i2 < len; i2++) {
      const p2 = parts[i2];
      if (Object.keys(curNode.children).includes(p2)) {
        curNode = curNode.children[p2];
        const pattern2 = getPattern(p2);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p2] = new Node2();
      const pattern = getPattern(p2);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p2];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m2 = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v2, i2, a2) => a2.indexOf(v2) === i2),
      name: this.name,
      score: this.order
    };
    m2[method] = handlerSet;
    curNode.methods.push(m2);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i2 = 0, len = node.methods.length; i2 < len; i2++) {
      const m2 = node.methods[i2];
      const handlerSet = m2[method] || m2[METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i2 = 0, len = parts.length; i2 < len; i2++) {
      const part = parts[i2];
      const isLast = i2 === len - 1;
      const tempNodes = [];
      for (let j2 = 0, len2 = curNodes.length; j2 < len2; j2++) {
        const node = curNodes[j2];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.gHSets(nextNode.children["*"], method, node.params, /* @__PURE__ */ Object.create(null))
              );
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, /* @__PURE__ */ Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k2 = 0, len3 = node.patterns.length; k2 < len3; k2++) {
          const pattern = node.patterns[k2];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, /* @__PURE__ */ Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i2).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a2, b2) => {
      return a2.score - b2.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p2 of results) {
        this.node.insert(method, p2, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// src/routes/user.ts
init_checked_fetch();
init_modules_watch_stub();
var import_edge = __toESM(require_edge3());

// node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@prisma/extension-accelerate/dist/esm/extension.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index2 = __toESM(require_default_index(), 1);

// node_modules/@prisma/extension-accelerate/dist/esm/semver.js
init_checked_fetch();
init_modules_watch_stub();
function compareSemVer(a2, b2) {
  const [major1 = 0, minor1 = 0, patch1 = 0] = a2.split(".").map(Number);
  const [major2 = 0, minor2 = 0, patch2 = 0] = b2.split(".").map(Number);
  const major = major2 - major1;
  const minor = minor2 - minor1;
  const patch = patch2 - patch1;
  return major || minor || patch;
}

// node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index = __toESM(require_default_index(), 1);
function getUserAgent() {
  const prismaVersion = import_default_index.default.Prisma.prismaVersion;
  const parts = [
    getRuntimeSegment(),
    `PrismaEngine/${prismaVersion.engine}`,
    `PrismaClient/${prismaVersion.client}`
  ];
  return parts.join(" ");
}
function getRuntimeSegment() {
  if (typeof navigator !== "undefined") {
    return "Cloudflare-Workers";
  } else if (typeof process !== "undefined" && typeof process.versions !== "undefined") {
    return `Node/${process.versions.node} (${process.platform}; ${process.arch})`;
  } else if ("EdgeRuntime" in globalThis) {
    return `Vercel-Edge-Runtime`;
  } else {
    return `UnknownRuntime`;
  }
}

// node_modules/@prisma/extension-accelerate/dist/esm/extension.js
var EXTENSION_NAME = "@prisma/extension-accelerate";
function makeWithCacheHeaders(fetcher) {
  const userAgent = getUserAgent();
  let machineHint = void 0;
  return async (params) => {
    const { args } = params;
    const { cacheStrategy, __accelerateInfo = false, ...rest } = args;
    let info = null;
    const { __internalParams, query } = params;
    __internalParams.customDataProxyFetch = () => {
      return async (url, options) => {
        const cacheControl = new Array();
        if (typeof cacheStrategy?.ttl === "number") {
          cacheControl.push(`max-age=${cacheStrategy.ttl}`);
        }
        if (typeof cacheStrategy?.swr === "number") {
          cacheControl.push(`stale-while-revalidate=${cacheStrategy.swr}`);
        }
        options.headers = {
          ...options.headers,
          "cache-control": cacheControl.length > 0 ? cacheControl.join(",") : `no-cache`,
          "user-agent": userAgent
        };
        if (machineHint) {
          options.headers["accelerate-query-engine-jwt"] = machineHint;
        }
        const response = await fetcher(url, options);
        info = {
          cacheStatus: response.headers.get("accelerate-cache-status"),
          lastModified: new Date(response.headers.get("last-modified") ?? ""),
          region: response.headers.get("cf-ray")?.split("-")[1] ?? "unspecified",
          requestId: response.headers.get("cf-ray") ?? "unspecified",
          signature: response.headers.get("accelerate-signature") ?? "unspecified"
        };
        machineHint = response.headers.get("accelerate-query-engine-jwt") ?? void 0;
        return response;
      };
    };
    if (__accelerateInfo) {
      const data = await query(rest, __internalParams);
      return { data, info };
    } else {
      return query(rest, __internalParams);
    }
  };
}
function makeAccelerateExtension(fetcher) {
  const enableCtxParent = compareSemVer("5.1.0", import_default_index2.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index2.default.Prisma.defineExtension((client2) => {
    const withCacheHeaders = makeWithCacheHeaders(fetcher);
    const xclient = client2.$extends({
      name: EXTENSION_NAME,
      query: {
        $allModels: {
          // also apply withCacheHeaders to mutations for machine hint benefit
          $allOperations: withCacheHeaders
        }
      }
    });
    return xclient.$extends({
      name: EXTENSION_NAME,
      model: {
        $allModels: {
          // TODO: these functions are repetitive. Is there a type we can use to generic this?
          // TODO: can we define these in a map that ensures query and model overrides stay in sync/
          aggregate(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.aggregate(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.aggregate({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          count(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.count(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.count({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirst(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirst(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirst({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirstOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirstOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirstOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findMany(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findMany(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findMany({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUnique(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUnique(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUnique({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUniqueOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUniqueOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUniqueOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          groupBy(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.groupBy(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.groupBy({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          }
        }
      }
    });
  });
}

// node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
function withAccelerate() {
  return makeAccelerateExtension(globalThis.fetch);
}

// node_modules/hono/dist/middleware/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/middleware/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/helper/cookie/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/cookie.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/encode.js
init_checked_fetch();
init_modules_watch_stub();
var decodeBase64Url = (str) => {
  return decodeBase64(str.replace(/_|-/g, (m2) => ({ _: "/", "-": "+" })[m2] ?? m2));
};
var encodeBase64Url = (buf) => encodeBase64(buf).replace(/\/|\+/g, (m2) => ({ "/": "_", "+": "-" })[m2] ?? m2);
var encodeBase64 = (buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i2 = 0, len = bytes.length; i2 < len; i2++) {
    binary += String.fromCharCode(bytes[i2]);
  }
  return btoa(binary);
};
var decodeBase64 = (str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i2 = 0, j2 = binary.length - 1; i2 <= half; i2++, j2--) {
    bytes[i2] = binary.charCodeAt(i2);
    bytes[j2] = binary.charCodeAt(j2);
  }
  return bytes;
};

// node_modules/hono/dist/utils/jwt/jwa.js
init_checked_fetch();
init_modules_watch_stub();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// node_modules/hono/dist/utils/jwt/jws.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/helper/adapter/index.js
init_checked_fetch();
init_modules_watch_stub();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = () => {
  const global2 = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global2?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global2?.fastly !== void 0) {
    return "fastly";
  }
  if (global2?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
};
var checkUserAgentEquals = (platform) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform);
};

// node_modules/hono/dist/utils/jwt/types.js
init_checked_fetch();
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
};
var JwtTokenInvalid = class extends Error {
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
};
var JwtTokenNotBefore = class extends Error {
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
};
var JwtTokenExpired = class extends Error {
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
};
var JwtTokenIssuedAt = class extends Error {
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
};
var JwtHeaderInvalid = class extends Error {
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
};
var JwtTokenSignatureMismatched = class extends Error {
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
};
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// node_modules/hono/dist/utils/jwt/utf8.js
init_checked_fetch();
init_modules_watch_stub();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
async function verifying(publicKey, alg, signature, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm);
  return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
}
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private") {
      throw new Error(`unexpected non private key: CryptoKey.type is ${key.type}`);
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e: e2, n: n2 } = jwk;
  const { crv, x: x2, y: y2 } = jwk;
  return { kty, alg, e: e2, n: n2, crv, x: x2, y: y2, key_ops: [CryptoKeyUsage.Verify] };
}
function getKeyAlgorithm(name) {
  switch (name) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
}
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}

// node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = (part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part))).replace(/=/g, "");
var encodeSignaturePart = (buf) => encodeBase64Url(buf).replace(/=/g, "");
var decodeJwtPart = (part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part)));
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
var sign = async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
};
var verify = async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Math.floor(Date.now() / 1e3);
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
};
var decode = (token) => {
  try {
    const [h2, p2] = token.split(".");
    const header = decodeJwtPart(h2);
    const payload = decodeJwtPart(p2);
    return {
      header,
      payload
    };
  } catch (e2) {
    throw new JwtTokenInvalid(token);
  }
};

// node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode };

// node_modules/hono/dist/middleware/jwt/jwt.js
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// src/routes/user.ts
var userRouter = new Hono2();
userRouter.post("/signup", async (c2) => {
  try {
    const body = await c2.req.json();
    const prisma = new import_edge.PrismaClient({
      datasourceUrl: c2.env.DATABASE_URL
    }).$extends(withAccelerate());
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name
      }
    });
    const jwt2 = await sign2({ id: user.id }, c2.env.JWT_SECRET);
    return c2.json({ jwt: jwt2, message: "Signup Succesfully" });
  } catch (error) {
    c2.status(411);
    return c2.json({ error: "error while signing up" });
  }
});
userRouter.post("/login", async (c2) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c2.env?.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c2.req.json();
  const user = await prisma.user.findUnique({
    where: {
      username: body.username
    }
  });
  if (!user) {
    c2.status(403);
    return c2.json({ error: "user not found" });
  }
  const jwt2 = await sign2({ id: user.id }, c2.env.JWT_SECRET);
  return c2.json({ jwt: jwt2, message: "Login Succesfully" });
});

// src/routes/blog.ts
init_checked_fetch();
init_modules_watch_stub();
var import_edge2 = __toESM(require_edge3());

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/protocol-http/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/protocol-http/dist-es/extensions/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
init_checked_fetch();
init_modules_watch_stub();
var getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
  let httpHandler = runtimeConfig.httpHandler;
  return {
    setHttpHandler(handler) {
      httpHandler = handler;
    },
    httpHandler() {
      return httpHandler;
    },
    updateHttpClientConfig(key, value) {
      httpHandler.updateHttpClientConfig(key, value);
    },
    httpHandlerConfigs() {
      return httpHandler.httpHandlerConfigs();
    }
  };
};
var resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
  return {
    httpHandler: httpHandlerExtensionConfiguration.httpHandler()
  };
};

// node_modules/@smithy/protocol-http/dist-es/Field.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/abort.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/auth/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/auth/auth.js
init_checked_fetch();
init_modules_watch_stub();
var HttpAuthLocation;
(function(HttpAuthLocation3) {
  HttpAuthLocation3["HEADER"] = "header";
  HttpAuthLocation3["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

// node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
init_checked_fetch();
init_modules_watch_stub();
var HttpApiKeyAuthLocation;
(function(HttpApiKeyAuthLocation3) {
  HttpApiKeyAuthLocation3["HEADER"] = "header";
  HttpApiKeyAuthLocation3["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

// node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/auth/HttpSigner.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/checksum.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/client.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/command.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/connection/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/connection/config.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/connection/manager.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/connection/pool.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/crypto.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/encode.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/endpoint.js
init_checked_fetch();
init_modules_watch_stub();
var EndpointURLScheme;
(function(EndpointURLScheme3) {
  EndpointURLScheme3["HTTP"] = "http";
  EndpointURLScheme3["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

// node_modules/@smithy/types/dist-es/endpoints/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/endpoints/shared.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/eventStream.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/extensions/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/extensions/checksum.js
init_checked_fetch();
init_modules_watch_stub();
var AlgorithmId;
(function(AlgorithmId3) {
  AlgorithmId3["MD5"] = "md5";
  AlgorithmId3["CRC32"] = "crc32";
  AlgorithmId3["CRC32C"] = "crc32c";
  AlgorithmId3["SHA1"] = "sha1";
  AlgorithmId3["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

// node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/http.js
init_checked_fetch();
init_modules_watch_stub();
var FieldPosition;
(function(FieldPosition3) {
  FieldPosition3[FieldPosition3["HEADER"] = 0] = "HEADER";
  FieldPosition3[FieldPosition3["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

// node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/identity/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/identity/identity.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/logger.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/middleware.js
init_checked_fetch();
init_modules_watch_stub();
var SMITHY_CONTEXT_KEY = "__smithy_context";

// node_modules/@smithy/types/dist-es/pagination.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/profile.js
init_checked_fetch();
init_modules_watch_stub();
var IniSectionType;
(function(IniSectionType3) {
  IniSectionType3["PROFILE"] = "profile";
  IniSectionType3["SSO_SESSION"] = "sso-session";
  IniSectionType3["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

// node_modules/@smithy/types/dist-es/response.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/retry.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/serde.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/shapes.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/signature.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/stream.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/transfer.js
init_checked_fetch();
init_modules_watch_stub();
var RequestHandlerProtocol;
(function(RequestHandlerProtocol3) {
  RequestHandlerProtocol3["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol3["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol3["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

// node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/transform/no-undefined.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/transform/type-transform.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/uri.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/util.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/types/dist-es/waiter.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/protocol-http/dist-es/Fields.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/protocol-http/dist-es/httpHandler.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
init_checked_fetch();
init_modules_watch_stub();
var HttpRequest = class {
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static isInstance(request) {
    if (!request)
      return false;
    const req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    const cloned = new HttpRequest({
      ...this,
      headers: { ...this.headers }
    });
    if (cloned.query)
      cloned.query = cloneQuery(cloned.query);
    return cloned;
  }
};
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
init_checked_fetch();
init_modules_watch_stub();
var HttpResponse = class {
  constructor(options) {
    this.statusCode = options.statusCode;
    this.reason = options.reason;
    this.headers = options.headers || {};
    this.body = options.body;
  }
  static isInstance(response) {
    if (!response)
      return false;
    const resp = response;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
};

// node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/protocol-http/dist-es/types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
function addExpectContinueMiddleware(options) {
  return (next) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request) && request.body && options.runtime === "node") {
      if (options.requestHandler?.constructor?.name !== "FetchHttpHandler") {
        request.headers = {
          ...request.headers,
          Expect: "100-continue"
        };
      }
    }
    return next({
      ...args,
      request
    });
  };
}
var addExpectContinueMiddlewareOptions = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware",
  override: true
};
var getAddExpectContinuePlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware = (options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const { request } = args;
  const { handlerProtocol = "" } = options.requestHandler.metadata || {};
  if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
    delete request.headers["host"];
    request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
  } else if (!request.headers["host"]) {
    let host = request.hostname;
    if (request.port != null)
      host += `:${request.port}`;
    request.headers["host"] = host;
  }
  return next(args);
};
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
init_checked_fetch();
init_modules_watch_stub();
var loggerMiddleware = () => (next, context) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger2?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata
    });
    return response;
  } catch (error) {
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    logger2?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error,
      metadata: error.$metadata
    });
    throw error;
  }
};
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
var recursionDetectionMiddleware = (options) => (next) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request) || options.runtime !== "node" || request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
    return next(args);
  }
  const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
  const traceId = process.env[ENV_TRACE_ID];
  const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
  if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
    request.headers[TRACE_ID_HEADER_NAME] = traceId;
  }
  return next({
    ...args,
    request
  });
};
var addRecursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low"
};
var getRecursionDetectionPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
init_checked_fetch();
init_modules_watch_stub();
var NoOpLogger = class {
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// node_modules/@smithy/smithy-client/dist-es/client.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-stack/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
init_checked_fetch();
init_modules_watch_stub();
var getAllAliases = (name, aliases) => {
  const _aliases = [];
  if (name) {
    _aliases.push(name);
  }
  if (aliases) {
    for (const alias of aliases) {
      _aliases.push(alias);
    }
  }
  return _aliases;
};
var getMiddlewareNameWithAliases = (name, aliases) => {
  return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
var constructStack = () => {
  let absoluteEntries = [];
  let relativeEntries = [];
  let identifyOnResolve = false;
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = (entries) => entries.sort((a2, b2) => stepWeights[b2.step] - stepWeights[a2.step] || priorityWeights[b2.priority || "normal"] - priorityWeights[a2.priority || "normal"]);
  const removeByName = (toRemove) => {
    let isRemoved = false;
    const filterCb = (entry) => {
      const aliases = getAllAliases(entry.name, entry.aliases);
      if (aliases.includes(toRemove)) {
        isRemoved = true;
        for (const alias of aliases) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };
  const removeByReference = (toRemove) => {
    let isRemoved = false;
    const filterCb = (entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        for (const alias of getAllAliases(entry.name, entry.aliases)) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };
  const cloneTo = (toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    toStack.identifyOnResolve?.(stack.identifyOnResolve());
    return toStack;
  };
  const expandRelativeMiddlewareList = (from) => {
    const expandedMiddlewareList = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddlewareList;
  };
  const getMiddlewareList = (debug = false) => {
    const normalizedAbsoluteEntries = [];
    const normalizedRelativeEntries = [];
    const normalizedEntriesNameMap = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          if (debug) {
            return;
          }
          throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
      wholeList.push(...expandedMiddlewareList);
      return wholeList;
    }, []);
    return mainChain;
  };
  const stack = {
    add: (middleware, options = {}) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        step: "initialize",
        priority: "normal",
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = absoluteEntries[toOverrideIndex];
            if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
            }
            absoluteEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: (middleware, options) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = relativeEntries[toOverrideIndex];
            if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
            }
            relativeEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      relativeEntries.push(entry);
    },
    clone: () => cloneTo(constructStack()),
    use: (plugin) => {
      plugin.applyToStack(stack);
    },
    remove: (toRemove) => {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    },
    removeByTag: (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        const { tags, name, aliases: _aliases } = entry;
        if (tags && tags.includes(toRemove)) {
          const aliases = getAllAliases(name, _aliases);
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          isRemoved = true;
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    },
    concat: (from) => {
      const cloned = cloneTo(constructStack());
      cloned.use(from);
      cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
      return cloned;
    },
    applyToStack: cloneTo,
    identify: () => {
      return getMiddlewareList(true).map((mw) => {
        const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
        return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
      });
    },
    identifyOnResolve(toggle) {
      if (typeof toggle === "boolean")
        identifyOnResolve = toggle;
      return identifyOnResolve;
    },
    resolve: (handler, context) => {
      for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
        handler = middleware(handler, context);
      }
      if (identifyOnResolve) {
        console.log(stack.identify());
      }
      return handler;
    }
  };
  return stack;
};
var stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights = {
  high: 3,
  normal: 2,
  low: 1
};

// node_modules/@smithy/smithy-client/dist-es/client.js
var Client = class {
  constructor(config) {
    this.middlewareStack = constructStack();
    this.config = config;
  }
  send(command, optionsOrCb, cb2) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb2;
    const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
    if (callback) {
      handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
      });
    } else {
      return handler(command).then((result) => result.output);
    }
  }
  destroy() {
    if (this.config.requestHandler.destroy)
      this.config.requestHandler.destroy();
  }
};

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-stream/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-base64/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-base64/dist-es/constants.browser.js
init_checked_fetch();
init_modules_watch_stub();
var alphabetByEncoding = {};
var alphabetByValue = new Array(64);
for (let i2 = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i2 + start <= limit; i2++) {
  const char = String.fromCharCode(i2 + start);
  alphabetByEncoding[char] = i2;
  alphabetByValue[i2] = char;
}
for (let i2 = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i2 + start <= limit; i2++) {
  const char = String.fromCharCode(i2 + start);
  const index = i2 + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i2 = 0; i2 < 10; i2++) {
  alphabetByEncoding[i2.toString(10)] = i2 + 52;
  const char = i2.toString(10);
  const index = i2 + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;

// node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
var fromBase64 = (input) => {
  let totalByteLength = input.length / 4 * 3;
  if (input.slice(-2) === "==") {
    totalByteLength -= 2;
  } else if (input.slice(-1) === "=") {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i2 = 0; i2 < input.length; i2 += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j2 = i2, limit = i2 + 3; j2 <= limit; j2++) {
      if (input[j2] !== "=") {
        if (!(input[j2] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j2]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j2]] << (limit - j2) * bitsPerLetter;
        bitLength += bitsPerLetter;
      } else {
        bits >>= bitsPerLetter;
      }
    }
    const chunkOffset = i2 / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k2 = 0; k2 < byteLength; k2++) {
      const offset = (byteLength - k2 - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k2, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
};

// node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-utf8/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
init_checked_fetch();
init_modules_watch_stub();
var fromUtf8 = (input) => new TextEncoder().encode(input);

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
init_checked_fetch();
init_modules_watch_stub();
var toUint8Array = (data) => {
  if (typeof data === "string") {
    return fromUtf8(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
};

// node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
init_checked_fetch();
init_modules_watch_stub();
var toUtf8 = (input) => {
  if (typeof input === "string") {
    return input;
  }
  if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
    throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
  }
  return new TextDecoder("utf-8").decode(input);
};

// node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
function toBase64(_input) {
  let input;
  if (typeof _input === "string") {
    input = fromUtf8(_input);
  } else {
    input = _input;
  }
  const isArrayLike = typeof input === "object" && typeof input.length === "number";
  const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
  if (!isArrayLike && !isUint8Array) {
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
  }
  let str = "";
  for (let i2 = 0; i2 < input.length; i2 += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j2 = i2, limit = Math.min(i2 + 3, input.length); j2 < limit; j2++) {
      bits |= input[j2] << (limit - j2 - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k2 = 1; k2 <= bitClusterCount; k2++) {
      const offset = (bitClusterCount - k2) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
    str += "==".slice(0, 4 - bitClusterCount);
  }
  return str;
}

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter = class extends Uint8Array {
  static fromString(source, encoding = "utf-8") {
    switch (typeof source) {
      case "string":
        return transformFromString(source, encoding);
      default:
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
  }
  static mutate(source) {
    Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
    return source;
  }
  transformToString(encoding = "utf-8") {
    return transformToString(this, encoding);
  }
};

// node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
init_checked_fetch();
init_modules_watch_stub();
var getAwsChunkedEncodingStream = (readableStream, options) => {
  const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
  const checksumRequired = base64Encoder !== void 0 && bodyLengthChecker !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
  const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
  const reader = readableStream.getReader();
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await reader.read();
      if (done) {
        controller.enqueue(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          controller.enqueue(`${checksumLocationName}:${checksum}\r
`);
          controller.enqueue(`\r
`);
        }
        controller.close();
      } else {
        controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r
${value}\r
`);
      }
    }
  });
};

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/querystring-builder/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-uri-escape/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
init_checked_fetch();
init_modules_watch_stub();
var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
var hexEncode = (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`;

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i2 = 0, iLen = value.length; i2 < iLen; i2++) {
        parts.push(`${key}=${escapeUri(value[i2])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
init_checked_fetch();
init_modules_watch_stub();
function requestTimeout(timeoutInMs = 0) {
  return new Promise((resolve, reject) => {
    if (timeoutInMs) {
      setTimeout(() => {
        const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var keepAliveSupport = {
  supported: Boolean(typeof Request !== "undefined" && "keepalive" in new Request("https://[::1]"))
};
var FetchHttpHandler = class {
  static create(instanceOrOptions) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new FetchHttpHandler(instanceOrOptions);
  }
  constructor(options) {
    if (typeof options === "function") {
      this.configProvider = options().then((opts) => opts || {});
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
  }
  destroy() {
  }
  async handle(request, { abortSignal } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    const requestTimeoutInMs = this.config.requestTimeout;
    const keepAlive = this.config.keepAlive === true;
    if (abortSignal?.aborted) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return Promise.reject(abortError);
    }
    let path = request.path;
    const queryString = buildQueryString(request.query || {});
    if (queryString) {
      path += `?${queryString}`;
    }
    if (request.fragment) {
      path += `#${request.fragment}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
      const username = request.username ?? "";
      const password = request.password ?? "";
      auth = `${username}:${password}@`;
    }
    const { port, method } = request;
    const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
    const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
    const requestOptions = {
      body,
      headers: new Headers(request.headers),
      method
    };
    if (body) {
      requestOptions.duplex = "half";
    }
    if (typeof AbortController !== "undefined") {
      requestOptions.signal = abortSignal;
    }
    if (keepAliveSupport.supported) {
      requestOptions.keepalive = keepAlive;
    }
    const fetchRequest = new Request(url, requestOptions);
    const raceOfPromises = [
      fetch(fetchRequest).then((response) => {
        const fetchHeaders = response.headers;
        const transformedHeaders = {};
        for (const pair of fetchHeaders.entries()) {
          transformedHeaders[pair[0]] = pair[1];
        }
        const hasReadableStream = response.body != void 0;
        if (!hasReadableStream) {
          return response.blob().then((body2) => ({
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: body2
            })
          }));
        }
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            reason: response.statusText,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(new Promise((resolve, reject) => {
        abortSignal.onabort = () => {
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        };
      }));
    }
    return Promise.race(raceOfPromises);
  }
  updateHttpClientConfig(key, value) {
    this.config = void 0;
    this.configProvider = this.configProvider.then((config) => {
      config[key] = value;
      return config;
    });
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
};

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
init_checked_fetch();
init_modules_watch_stub();
var streamCollector = (stream) => {
  if (typeof Blob === "function" && stream instanceof Blob) {
    return collectBlob(stream);
  }
  return collectStream(stream);
};
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (let i2 = 0; i2 < 256; i2++) {
  let encodedByte = i2.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX[i2] = encodedByte;
  HEX_TO_SHORT[encodedByte] = i2;
}
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i2 = 0; i2 < encoded.length; i2 += 2) {
    const encodedByte = encoded.slice(i2, i2 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i2 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2++) {
    out += SHORT_TO_HEX[bytes[i2]];
  }
  return out;
}

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
var sdkStreamMixin = (stream) => {
  if (!isBlobInstance(stream) && !isReadableStreamInstance(stream)) {
    const name = stream?.__proto__?.constructor?.name || stream;
    throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
  }
  let transformed = false;
  const transformToByteArray = async () => {
    if (transformed) {
      throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
    }
    transformed = true;
    return await streamCollector(stream);
  };
  const blobToWebStream = (blob) => {
    if (typeof blob.stream !== "function") {
      throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
    }
    return blob.stream();
  };
  return Object.assign(stream, {
    transformToByteArray,
    transformToString: async (encoding) => {
      const buf = await transformToByteArray();
      if (encoding === "base64") {
        return toBase64(buf);
      } else if (encoding === "hex") {
        return toHex(buf);
      } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
        return toUtf8(buf);
      } else if (typeof TextDecoder === "function") {
        return new TextDecoder(encoding).decode(buf);
      } else {
        throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
      }
    },
    transformToWebStream: () => {
      if (transformed) {
        throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
      }
      transformed = true;
      if (isBlobInstance(stream)) {
        return blobToWebStream(stream);
      } else if (isReadableStreamInstance(stream)) {
        return stream;
      } else {
        throw new Error(`Cannot transform payload to web stream, got ${stream}`);
      }
    }
  });
};
var isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
var isReadableStreamInstance = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var collectBody = async (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Uint8ArrayBlobAdapter.mutate(streamBody);
  }
  if (!streamBody) {
    return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
  }
  const fromContext = context.streamCollector(streamBody);
  return Uint8ArrayBlobAdapter.mutate(await fromContext);
};

// node_modules/@smithy/smithy-client/dist-es/command.js
init_checked_fetch();
init_modules_watch_stub();
var Command = class {
  constructor() {
    this.middlewareStack = constructStack();
  }
  static classBuilder() {
    return new ClassBuilder();
  }
  resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
    for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
      this.middlewareStack.use(mw);
    }
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        ...smithyContext
      },
      ...additionalContext
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
};
var ClassBuilder = class {
  constructor() {
    this._init = () => {
    };
    this._ep = {};
    this._middlewareFn = () => [];
    this._commandName = "";
    this._clientName = "";
    this._additionalContext = {};
    this._smithyContext = {};
    this._inputFilterSensitiveLog = (_) => _;
    this._outputFilterSensitiveLog = (_) => _;
    this._serializer = null;
    this._deserializer = null;
  }
  init(cb2) {
    this._init = cb2;
  }
  ep(endpointParameterInstructions) {
    this._ep = endpointParameterInstructions;
    return this;
  }
  m(middlewareSupplier) {
    this._middlewareFn = middlewareSupplier;
    return this;
  }
  s(service, operation, smithyContext = {}) {
    this._smithyContext = {
      service,
      operation,
      ...smithyContext
    };
    return this;
  }
  c(additionalContext = {}) {
    this._additionalContext = additionalContext;
    return this;
  }
  n(clientName, commandName) {
    this._clientName = clientName;
    this._commandName = commandName;
    return this;
  }
  f(inputFilter = (_) => _, outputFilter = (_) => _) {
    this._inputFilterSensitiveLog = inputFilter;
    this._outputFilterSensitiveLog = outputFilter;
    return this;
  }
  ser(serializer) {
    this._serializer = serializer;
    return this;
  }
  de(deserializer) {
    this._deserializer = deserializer;
    return this;
  }
  build() {
    const closure = this;
    let CommandRef;
    return CommandRef = class extends Command {
      static getEndpointParameterInstructions() {
        return closure._ep;
      }
      constructor(...[input]) {
        super();
        this.serialize = closure._serializer;
        this.deserialize = closure._deserializer;
        this.input = input ?? {};
        closure._init(this);
      }
      resolveMiddleware(stack, configuration, options) {
        return this.resolveMiddlewareWithContext(stack, configuration, options, {
          CommandCtor: CommandRef,
          middlewareFn: closure._middlewareFn,
          clientName: closure._clientName,
          commandName: closure._commandName,
          inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
          outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
          smithyContext: closure._smithyContext,
          additionalContext: closure._additionalContext
        });
      }
    };
  }
};

// node_modules/@smithy/smithy-client/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var SENSITIVE_STRING = "***SensitiveInformation***";

// node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/date-utils.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/parse-utils.js
init_checked_fetch();
init_modules_watch_stub();
var parseBoolean = (value) => {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      throw new Error(`Unable to parse boolean value "${value}"`);
  }
};
var expectNumber = (value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      if (String(parsed) !== String(value)) {
        logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
      }
      return parsed;
    }
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
var expectFloat32 = (value) => {
  const expected = expectNumber(value);
  if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
    if (Math.abs(expected) > MAX_FLOAT) {
      throw new TypeError(`Expected 32-bit float, got ${value}`);
    }
  }
  return expected;
};
var expectLong = (value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
var expectInt32 = (value) => expectSizedInt(value, 32);
var expectShort = (value) => expectSizedInt(value, 16);
var expectByte = (value) => expectSizedInt(value, 8);
var expectSizedInt = (value, size) => {
  const expected = expectLong(value);
  if (expected !== void 0 && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
};
var castInt = (value, size) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
};
var expectNonNull = (value, location) => {
  if (value === null || value === void 0) {
    if (location) {
      throw new TypeError(`Expected a non-null value for ${location}`);
    }
    throw new TypeError("Expected a non-null value");
  }
  return value;
};
var expectObject = (value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  const receivedType = Array.isArray(value) ? "array" : typeof value;
  throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
var expectString = (value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return value;
  }
  if (["boolean", "number", "bigint"].includes(typeof value)) {
    logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
    return String(value);
  }
  throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
var strictParseFloat32 = (value) => {
  if (typeof value == "string") {
    return expectFloat32(parseNumber(value));
  }
  return expectFloat32(value);
};
var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
var parseNumber = (value) => {
  const matches = value.match(NUMBER_REGEX);
  if (matches === null || matches[0].length !== value.length) {
    throw new TypeError(`Expected real number, got implicit NaN`);
  }
  return parseFloat(value);
};
var strictParseLong = (value) => {
  if (typeof value === "string") {
    return expectLong(parseNumber(value));
  }
  return expectLong(value);
};
var strictParseInt32 = (value) => {
  if (typeof value === "string") {
    return expectInt32(parseNumber(value));
  }
  return expectInt32(value);
};
var strictParseShort = (value) => {
  if (typeof value === "string") {
    return expectShort(parseNumber(value));
  }
  return expectShort(value);
};
var strictParseByte = (value) => {
  if (typeof value === "string") {
    return expectByte(parseNumber(value));
  }
  return expectByte(value);
};
var stackTraceWarning = (message) => {
  return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s2) => !s2.includes("stackTraceWarning")).join("\n");
};
var logger = {
  warn: console.warn
};

// node_modules/@smithy/smithy-client/dist-es/date-utils.js
var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
var parseRfc3339DateTimeWithOffset = (value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }
  const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
  const year = strictParseShort(stripLeadingZeroes(yearStr));
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);
  const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
  if (offsetStr.toUpperCase() != "Z") {
    date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
  }
  return date;
};
var IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
var parseRfc7231DateTime = (value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-7231 date-times must be expressed as strings");
  }
  let match = IMF_FIXDATE.exec(value);
  if (match) {
    const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
  }
  match = RFC_850_DATE.exec(value);
  if (match) {
    const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
      hours,
      minutes,
      seconds,
      fractionalMilliseconds
    }));
  }
  match = ASC_TIME.exec(value);
  if (match) {
    const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
    return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
  }
  throw new TypeError("Invalid RFC-7231 date-time value");
};
var buildDate = (year, month, day, time) => {
  const adjustedMonth = month - 1;
  validateDayOfMonth(year, adjustedMonth, day);
  return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
var parseTwoDigitYear = (value) => {
  const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
  const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
  if (valueInThisCentury < thisYear) {
    return valueInThisCentury + 100;
  }
  return valueInThisCentury;
};
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
var adjustRfc850Year = (input) => {
  if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
    return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
  }
  return input;
};
var parseMonthByShortName = (value) => {
  const monthIdx = MONTHS.indexOf(value);
  if (monthIdx < 0) {
    throw new TypeError(`Invalid month: ${value}`);
  }
  return monthIdx + 1;
};
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var validateDayOfMonth = (year, month, day) => {
  let maxDays = DAYS_IN_MONTH[month];
  if (month === 1 && isLeapYear(year)) {
    maxDays = 29;
  }
  if (day > maxDays) {
    throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
  }
};
var isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
var parseDateValue = (value, type, lower, upper) => {
  const dateVal = strictParseByte(stripLeadingZeroes(value));
  if (dateVal < lower || dateVal > upper) {
    throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
  }
  return dateVal;
};
var parseMilliseconds = (value) => {
  if (value === null || value === void 0) {
    return 0;
  }
  return strictParseFloat32("0." + value) * 1e3;
};
var parseOffsetToMilliseconds = (value) => {
  const directionStr = value[0];
  let direction = 1;
  if (directionStr == "+") {
    direction = 1;
  } else if (directionStr == "-") {
    direction = -1;
  } else {
    throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
  }
  const hour = Number(value.substring(1, 3));
  const minute = Number(value.substring(4, 6));
  return direction * (hour * 60 + minute) * 60 * 1e3;
};
var stripLeadingZeroes = (value) => {
  let idx = 0;
  while (idx < value.length - 1 && value.charAt(idx) === "0") {
    idx++;
  }
  if (idx === 0) {
    return value;
  }
  return value.slice(idx);
};

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
init_checked_fetch();
init_modules_watch_stub();
var ServiceException = class extends Error {
  constructor(options) {
    super(options.message);
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
};
var decorateServiceException = (exception, additions = {}) => {
  Object.entries(additions).filter(([, v2]) => v2 !== void 0).forEach(([k2, v2]) => {
    if (exception[k2] == void 0 || exception[k2] === "") {
      exception[k2] = v2;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
};

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
  const $metadata = deserializeMetadata(output);
  const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
  const response = new exceptionCtor({
    name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
    $fault: "client",
    $metadata
  });
  throw decorateServiceException(response, parsedBody);
};
var withBaseException = (ExceptionCtor) => {
  return ({ output, parsedBody, errorCode }) => {
    throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
  };
};
var deserializeMetadata = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
init_checked_fetch();
init_modules_watch_stub();
var loadConfigsForDefaultMode = (mode) => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
};

// node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/extensions/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
init_checked_fetch();
init_modules_watch_stub();
var getChecksumConfiguration2 = (runtimeConfig) => {
  const checksumAlgorithms = [];
  for (const id in AlgorithmId) {
    const algorithmId = AlgorithmId[id];
    if (runtimeConfig[algorithmId] === void 0) {
      continue;
    }
    checksumAlgorithms.push({
      algorithmId: () => algorithmId,
      checksumConstructor: () => runtimeConfig[algorithmId]
    });
  }
  return {
    _checksumAlgorithms: checksumAlgorithms,
    addChecksumAlgorithm(algo) {
      this._checksumAlgorithms.push(algo);
    },
    checksumAlgorithms() {
      return this._checksumAlgorithms;
    }
  };
};
var resolveChecksumRuntimeConfig2 = (clientConfig) => {
  const runtimeConfig = {};
  clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
    runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
  });
  return runtimeConfig;
};

// node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
init_checked_fetch();
init_modules_watch_stub();
var getRetryConfiguration = (runtimeConfig) => {
  let _retryStrategy = runtimeConfig.retryStrategy;
  return {
    setRetryStrategy(retryStrategy) {
      _retryStrategy = retryStrategy;
    },
    retryStrategy() {
      return _retryStrategy;
    }
  };
};
var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
  const runtimeConfig = {};
  runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
  return runtimeConfig;
};

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration = (runtimeConfig) => {
  return {
    ...getChecksumConfiguration2(runtimeConfig),
    ...getRetryConfiguration(runtimeConfig)
  };
};
var resolveDefaultRuntimeConfig = (config) => {
  return {
    ...resolveChecksumRuntimeConfig2(config),
    ...resolveRetryRuntimeConfig(config)
  };
};

// node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
init_checked_fetch();
init_modules_watch_stub();
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}

// node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
init_checked_fetch();
init_modules_watch_stub();
var getValueFromTextNode = (obj) => {
  const textNodeName = "#text";
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
      obj[key] = obj[key][textNodeName];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = getValueFromTextNode(obj[key]);
    }
  }
  return obj;
};

// node_modules/@smithy/smithy-client/dist-es/lazy-json.js
init_checked_fetch();
init_modules_watch_stub();
var StringWrapper = function() {
  const Class = Object.getPrototypeOf(this).constructor;
  const Constructor = Function.bind.apply(String, [null, ...arguments]);
  const instance = new Constructor();
  Object.setPrototypeOf(instance, Class.prototype);
  return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
  constructor: {
    value: StringWrapper,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
Object.setPrototypeOf(StringWrapper, String);

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
init_checked_fetch();
init_modules_watch_stub();
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
var mapWithFilter = (target, filter, instructions) => {
  return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
    if (Array.isArray(value)) {
      _instructions[key] = value;
    } else {
      if (typeof value === "function") {
        _instructions[key] = [filter, value()];
      } else {
        _instructions[key] = [filter, value];
      }
    }
    return _instructions;
  }, {}));
};
var applyInstruction = (target, source, instructions, targetKey) => {
  if (source !== null) {
    let instruction = instructions[targetKey];
    if (typeof instruction === "function") {
      instruction = [, instruction];
    }
    const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
    if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
      target[targetKey] = valueFn(source[sourceKey]);
    }
    return;
  }
  let [filter, value] = instructions[targetKey];
  if (typeof value === "function") {
    let _value;
    const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
    const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed) {
      target[targetKey] = _value;
    } else if (customFilterPassed) {
      target[targetKey] = value();
    }
  } else {
    const defaultFilterPassed = filter === void 0 && value != null;
    const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed || customFilterPassed) {
      target[targetKey] = value;
    }
  }
};
var nonNullish = (_) => _ != null;
var pass = (_) => _;

// node_modules/@smithy/smithy-client/dist-es/resolve-path.js
init_checked_fetch();
init_modules_watch_stub();
var resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
  if (input != null && input[memberName] !== void 0) {
    const labelValue = labelValueProvider();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
    }
    resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: " + memberName + ".");
  }
  return resolvedPath2;
};

// node_modules/@smithy/smithy-client/dist-es/ser-utils.js
init_checked_fetch();
init_modules_watch_stub();
var serializeDateTime = (date) => date.toISOString().replace(".000Z", "Z");

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/smithy-client/dist-es/split-every.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
var CONTENT_LENGTH_HEADER = "content-length";
function checkContentLengthHeader() {
  return (next, context) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request)) {
      if (!(CONTENT_LENGTH_HEADER in request.headers)) {
        const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
        if (typeof context?.logger?.warn === "function" && !(context.logger instanceof NoOpLogger)) {
          context.logger.warn(message);
        } else {
          console.warn(message);
        }
      }
    }
    return next({ ...args });
  };
}
var checkContentLengthHeaderMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["CHECK_CONTENT_LENGTH_HEADER"],
  name: "getCheckContentLengthHeaderPlugin",
  override: true
};
var getCheckContentLengthHeaderPlugin = (unused) => ({
  applyToStack: (clientStack) => {
    clientStack.add(checkContentLengthHeader(), checkContentLengthHeaderMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
init_checked_fetch();
init_modules_watch_stub();
var regionRedirectEndpointMiddleware = (config) => {
  return (next, context) => async (args) => {
    const originalRegion = await config.region();
    const regionProviderRef = config.region;
    if (context.__s3RegionRedirect) {
      config.region = async () => {
        config.region = regionProviderRef;
        return context.__s3RegionRedirect;
      };
    }
    const result = await next(args);
    if (context.__s3RegionRedirect) {
      const region = await config.region();
      if (originalRegion !== region) {
        throw new Error("Region was not restored following S3 region redirect.");
      }
    }
    return result;
  };
};
var regionRedirectEndpointMiddlewareOptions = {
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectEndpointMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
init_checked_fetch();
init_modules_watch_stub();
function regionRedirectMiddleware(clientConfig) {
  return (next, context) => async (args) => {
    try {
      return await next(args);
    } catch (err) {
      if (clientConfig.followRegionRedirects && err?.$metadata?.httpStatusCode === 301) {
        try {
          const actualRegion = err.$response.headers["x-amz-bucket-region"];
          context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
          context.__s3RegionRedirect = actualRegion;
        } catch (e2) {
          throw new Error("Region redirect failed: " + e2);
        }
        return next(args);
      } else {
        throw err;
      }
    }
  };
}
var regionRedirectMiddlewareOptions = {
  step: "initialize",
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectMiddleware",
  override: true
};
var getRegionRedirectMiddlewarePlugin = (clientConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
    clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
init_checked_fetch();
init_modules_watch_stub();
var s3ExpiresMiddleware = (config) => {
  return (next, context) => async (args) => {
    const result = await next(args);
    const { response } = result;
    if (HttpResponse.isInstance(response)) {
      if (response.headers.expires) {
        response.headers.expiresstring = response.headers.expires;
        try {
          parseRfc7231DateTime(response.headers.expires);
        } catch (e2) {
          context.logger?.warn(`AWS SDK Warning for ${context.clientName}::${context.commandName} response parsing (${response.headers.expires}): ${e2}`);
          delete response.headers.expires;
        }
      }
    }
    return result;
  };
};
var s3ExpiresMiddlewareOptions = {
  tags: ["S3"],
  name: "s3ExpiresMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "deserializerMiddleware"
};
var getS3ExpiresMiddlewarePlugin = (clientConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(s3ExpiresMiddleware(clientConfig), s3ExpiresMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
init_checked_fetch();
init_modules_watch_stub();
var S3ExpressIdentityCache = class {
  constructor(data = {}) {
    this.data = data;
    this.lastPurgeTime = Date.now();
  }
  get(key) {
    const entry = this.data[key];
    if (!entry) {
      return;
    }
    return entry;
  }
  set(key, entry) {
    this.data[key] = entry;
    return entry;
  }
  delete(key) {
    delete this.data[key];
  }
  async purgeExpired() {
    const now = Date.now();
    if (this.lastPurgeTime + S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
      return;
    }
    for (const key in this.data) {
      const entry = this.data[key];
      if (!entry.isRefreshing) {
        const credential = await entry.identity;
        if (credential.expiration) {
          if (credential.expiration.getTime() < now) {
            delete this.data[key];
          }
        }
      }
    }
  }
};
S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
init_checked_fetch();
init_modules_watch_stub();
var S3ExpressIdentityCacheEntry = class {
  constructor(_identity, isRefreshing = false, accessed = Date.now()) {
    this._identity = _identity;
    this.isRefreshing = isRefreshing;
    this.accessed = accessed;
  }
  get identity() {
    this.accessed = Date.now();
    return this._identity;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
init_checked_fetch();
init_modules_watch_stub();
var S3ExpressIdentityProviderImpl = class {
  constructor(createSessionFn, cache = new S3ExpressIdentityCache()) {
    this.createSessionFn = createSessionFn;
    this.cache = cache;
  }
  async getS3ExpressIdentity(awsIdentity, identityProperties) {
    const key = identityProperties.Bucket;
    const { cache } = this;
    const entry = cache.get(key);
    if (entry) {
      return entry.identity.then((identity) => {
        const isExpired = (identity.expiration?.getTime() ?? 0) < Date.now();
        if (isExpired) {
          return cache.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
        }
        const isExpiringSoon = (identity.expiration?.getTime() ?? 0) < Date.now() + S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
        if (isExpiringSoon && !entry.isRefreshing) {
          entry.isRefreshing = true;
          this.getIdentity(key).then((id) => {
            cache.set(key, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
          });
        }
        return identity;
      });
    }
    return cache.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
  }
  async getIdentity(key) {
    await this.cache.purgeExpired().catch((error) => {
      console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
    });
    const session = await this.createSessionFn(key);
    if (!session.Credentials?.AccessKeyId || !session.Credentials?.SecretAccessKey) {
      throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
    }
    const identity = {
      accessKeyId: session.Credentials.AccessKeyId,
      secretAccessKey: session.Credentials.SecretAccessKey,
      sessionToken: session.Credentials.SessionToken,
      expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : void 0
    };
    return identity;
  }
};
S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS = 6e4;

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/signature-v4/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-middleware/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
init_checked_fetch();
init_modules_watch_stub();
var getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
init_checked_fetch();
init_modules_watch_stub();
var normalizeProvider = (input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
};

// node_modules/@smithy/signature-v4/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
init_checked_fetch();
init_modules_watch_stub();
var signingKeyCache = {};
var cacheQueue = [];
var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }
  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
    key = await hmac(sha256Constructor, key, signable);
  }
  return signingKeyCache[cacheKey] = key;
};
var hmac = (ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
};

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
init_checked_fetch();
init_modules_watch_stub();
var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == void 0) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
};

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
init_checked_fetch();
init_modules_watch_stub();
var getCanonicalQuery = ({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query).sort()) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }
    keys.push(key);
    const value = query[key];
    if (typeof value === "string") {
      serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
    } else if (Array.isArray(value)) {
      serialized[key] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${escapeUri(key)}=${escapeUri(value2)}`]), []).sort().join("&");
    }
  }
  return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
};

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/is-array-buffer/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash = async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER) {
      return headers[headerName];
    }
  }
  if (body == void 0) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    const hashCtor = new hashConstructor();
    hashCtor.update(toUint8Array(body));
    return toHex(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD;
};

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
init_checked_fetch();
init_modules_watch_stub();
var HeaderFormatter = class {
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
};
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE4) {
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["short"] = 3] = "short";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["long"] = 5] = "long";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["string"] = 7] = "string";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Int64 = class {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
init_checked_fetch();
init_modules_watch_stub();
var hasHeader = (soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
init_checked_fetch();
init_modules_watch_stub();
var cloneRequest = ({ headers, query, ...rest }) => ({
  ...rest,
  headers: { ...headers },
  query: query ? cloneQuery2(query) : void 0
});
var cloneQuery2 = (query) => Object.keys(query).reduce((carry, paramName) => {
  const param = query[paramName];
  return {
    ...carry,
    [paramName]: Array.isArray(param) ? [...param] : param
  };
}, {});

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery = (request, options = {}) => {
  const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request,
    headers,
    query
  };
};

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
init_checked_fetch();
init_modules_watch_stub();
var prepareRequest = (request) => {
  request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }
  return request;
};

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
init_checked_fetch();
init_modules_watch_stub();
var iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
var toDate = (time) => {
  if (typeof time === "number") {
    return new Date(time * 1e3);
  }
  if (typeof time === "string") {
    if (Number(time)) {
      return new Date(Number(time) * 1e3);
    }
    return new Date(time);
  }
  return time;
};

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4 = class {
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.headerFormatter = new HeaderFormatter();
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    }
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
    return request;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
  }
  async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
    const promise = this.signEvent({
      headers: this.headerFormatter.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature
    });
    return promise.then((signature) => {
      return { message: signableMessage.message, signature };
    });
  }
  async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = formatDate(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request = prepareRequest(requestToSign);
    const { longDate, shortDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
    request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
    return request;
  }
  createCanonicalRequest(request, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest) {
    const hash = new this.sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = escapeUri(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
};
var formatDate = (now) => {
  const longDate = iso8601(now).replace(/[\-:]/g, "");
  return {
    longDate,
    shortDate: longDate.slice(0, 8)
  };
};
var getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-config-provider/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-config-provider/dist-es/types.js
init_checked_fetch();
init_modules_watch_stub();
var SelectorType;
(function(SelectorType2) {
  SelectorType2["ENV"] = "env";
  SelectorType2["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
var S3_EXPRESS_BUCKET_TYPE = "Directory";
var S3_EXPRESS_BACKEND = "S3Express";
var S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
var SignatureV4S3Express = class extends SignatureV4 {
  async signWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return privateAccess.signRequest(requestToSign, options ?? {});
  }
  async presignWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    delete requestToSign.headers[SESSION_TOKEN_HEADER];
    requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    requestToSign.query = requestToSign.query ?? {};
    requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return this.presign(requestToSign, options);
  }
};
function getCredentialsWithoutSessionToken(credentials) {
  const credentialsWithoutSessionToken = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration
  };
  return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
  const id = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10);
  const currentCredentialProvider = privateAccess.credentialProvider;
  const overrideCredentialsProviderOnce = () => {
    clearTimeout(id);
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  };
  privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
init_checked_fetch();
init_modules_watch_stub();
var s3ExpressMiddleware = (options) => {
  return (next, context) => async (args) => {
    if (context.endpointV2) {
      const endpoint = context.endpointV2;
      const isS3ExpressAuth = endpoint.properties?.authSchemes?.[0]?.name === S3_EXPRESS_AUTH_SCHEME;
      const isS3ExpressBucket = endpoint.properties?.backend === S3_EXPRESS_BACKEND || endpoint.properties?.bucketType === S3_EXPRESS_BUCKET_TYPE;
      if (isS3ExpressBucket) {
        context.isS3ExpressBucket = true;
      }
      if (isS3ExpressAuth) {
        const requestBucket = args.input.Bucket;
        if (requestBucket) {
          const s3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(await options.credentials(), {
            Bucket: requestBucket
          });
          context.s3ExpressIdentity = s3ExpressIdentity;
          if (HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
            args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
          }
        }
      }
    }
    return next(args);
  };
};
var s3ExpressMiddlewareOptions = {
  name: "s3ExpressMiddleware",
  step: "build",
  tags: ["S3", "S3_EXPRESS"],
  override: true
};
var getS3ExpressPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
init_checked_fetch();
init_modules_watch_stub();
var resolveS3Config = (input, { session }) => {
  const [s3ClientProvider, CreateSessionCommandCtor] = session;
  return {
    ...input,
    forcePathStyle: input.forcePathStyle ?? false,
    useAccelerateEndpoint: input.useAccelerateEndpoint ?? false,
    disableMultiregionAccessPoints: input.disableMultiregionAccessPoints ?? false,
    followRegionRedirects: input.followRegionRedirects ?? false,
    s3ExpressIdentityProvider: input.s3ExpressIdentityProvider ?? new S3ExpressIdentityProviderImpl(async (key) => s3ClientProvider().send(new CreateSessionCommandCtor({
      Bucket: key,
      SessionMode: "ReadWrite"
    }))),
    bucketEndpoint: input.bucketEndpoint ?? false
  };
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-arn-parser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
var validate = (str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
init_checked_fetch();
init_modules_watch_stub();
function bucketEndpointMiddleware(options) {
  return (next, context) => async (args) => {
    if (options.bucketEndpoint) {
      const endpoint = context.endpointV2;
      if (endpoint) {
        const bucket = args.input.Bucket;
        if (typeof bucket === "string") {
          try {
            const bucketEndpointUrl = new URL(bucket);
            endpoint.url = bucketEndpointUrl;
          } catch (e2) {
            const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
            if (context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(warning);
            } else {
              context.logger?.warn?.(warning);
            }
            throw e2;
          }
        }
      }
    }
    return next(args);
  };
}
var bucketEndpointMiddlewareOptions = {
  name: "bucketEndpointMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
function validateBucketNameMiddleware({ bucketEndpoint }) {
  return (next) => async (args) => {
    const { input: { Bucket } } = args;
    if (!bucketEndpoint && typeof Bucket === "string" && !validate(Bucket) && Bucket.indexOf("/") >= 0) {
      const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
      err.name = "InvalidBucketName";
      throw err;
    }
    return next({ ...args });
  };
}
var validateBucketNameMiddlewareOptions = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware",
  override: true
};
var getValidateBucketNamePlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
    clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-signing/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/property-provider/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/property-provider/dist-es/ProviderError.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/property-provider/dist-es/chain.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/property-provider/dist-es/fromStatic.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/property-provider/dist-es/memoize.js
init_checked_fetch();
init_modules_watch_stub();
var memoize = (provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  };
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
};

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js
var CREDENTIAL_EXPIRE_WINDOW = 3e5;
var resolveAwsAuthConfig = (input) => {
  const normalizedCreds = input.credentials ? normalizeCredentialProvider(input.credentials) : input.credentialDefaultProvider(Object.assign({}, input, {
    parentClientConfig: input
  }));
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer;
  if (input.signer) {
    signer = normalizeProvider(input.signer);
  } else if (input.regionInfoProvider) {
    signer = () => normalizeProvider(input.region)().then(async (region) => [
      await input.regionInfoProvider(region, {
        useFipsEndpoint: await input.useFipsEndpoint(),
        useDualstackEndpoint: await input.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      input.signingRegion = input.signingRegion || signingRegion || region;
      input.signingName = input.signingName || signingService || input.serviceId;
      const params = {
        ...input,
        credentials: normalizedCreds,
        region: input.signingRegion,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    });
  } else {
    signer = async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: input.signingName || input.defaultSigningName,
        signingRegion: await normalizeProvider(input.region)(),
        properties: {}
      }, authScheme);
      const isSigv4a = authScheme?.name === "sigv4a";
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      let regionForSigner;
      if (isSigv4a) {
        regionForSigner = input.signingRegion || signingRegion;
      } else {
        input.signingRegion = input.signingRegion || signingRegion;
        regionForSigner = input.signingRegion;
      }
      input.signingName = input.signingName || signingService || input.serviceId;
      const params = {
        ...input,
        credentials: normalizedCreds,
        region: regionForSigner,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    };
  }
  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer
  };
};
var normalizeCredentialProvider = (credentials) => {
  if (typeof credentials === "function") {
    return memoize(credentials, (credentials2) => credentials2.expiration !== void 0 && credentials2.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials2) => credentials2.expiration !== void 0);
  }
  return normalizeProvider(credentials);
};

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js
init_checked_fetch();
init_modules_watch_stub();
var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js
init_checked_fetch();
init_modules_watch_stub();
var isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
};

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js
var awsAuthMiddleware = (options) => (next, context) => async function(args) {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  let authScheme;
  let signer;
  const firstAuthScheme = context.endpointV2?.properties?.authSchemes?.[0];
  const secondAuthScheme = context.endpointV2?.properties?.authSchemes?.[1];
  const firstAuthSchemeIsSigv4a = firstAuthScheme?.name === "sigv4a";
  if (firstAuthSchemeIsSigv4a && secondAuthScheme) {
    signer = await options.signer(authScheme = firstAuthScheme);
    const uncheckedSigner = signer;
    const sigv4aAvailable = (() => {
      if (typeof uncheckedSigner?.getSigv4aSigner === "function") {
        if (uncheckedSigner?.signerOptions?.runtime !== "node") {
          return false;
        }
        try {
          uncheckedSigner.getSigv4aSigner();
          return true;
        } catch (e2) {
        }
      }
      return false;
    })();
    if (!sigv4aAvailable) {
      signer = await options.signer(authScheme = secondAuthScheme);
    }
  } else {
    signer = await options.signer(authScheme = firstAuthScheme);
  }
  let signedRequest;
  const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : void 0;
  const signingOptions = {
    signingDate: getSkewCorrectedDate(options.systemClockOffset),
    signingRegion: multiRegionOverride || context["signing_region"],
    signingService: context["signing_service"]
  };
  if (context.s3ExpressIdentity) {
    const sigV4MultiRegion = signer;
    signedRequest = await sigV4MultiRegion.signWithCredentials(args.request, context.s3ExpressIdentity, signingOptions);
    if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
      throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
    }
  } else {
    signedRequest = await signer.sign(args.request, signingOptions);
  }
  const output = await next({
    ...args,
    request: signedRequest
  }).catch((error) => {
    const serverTime = error.ServerTime ?? getDateHeader(error.$response);
    if (serverTime) {
      options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
    }
    throw error;
  });
  const dateHeader = getDateHeader(output.response);
  if (dateHeader) {
    options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
  }
  return output;
};
var getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;
var awsAuthMiddlewareOptions = {
  name: "awsAuthMiddleware",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true
};
var getAwsAuthPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
init_checked_fetch();
init_modules_watch_stub();
function resolveUserAgentConfig(input) {
  return {
    ...input,
    customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
  };
}

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
init_checked_fetch();
init_modules_watch_stub();
var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
var isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");

// node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
init_checked_fetch();
init_modules_watch_stub();
var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
var isValidHostLabel = (value, allowSubDomains = false) => {
  if (!allowSubDomains) {
    return VALID_HOST_LABEL_REGEX.test(value);
  }
  const labels = value.split(".");
  for (const label of labels) {
    if (!isValidHostLabel(label)) {
      return false;
    }
  }
  return true;
};

// node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
init_checked_fetch();
init_modules_watch_stub();
var customEndpointFunctions = {};

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/debug/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
init_checked_fetch();
init_modules_watch_stub();
var debugId = "endpoints";

// node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
init_checked_fetch();
init_modules_watch_stub();
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}

// node_modules/@smithy/util-endpoints/dist-es/types/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
init_checked_fetch();
init_modules_watch_stub();
var EndpointError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "EndpointError";
  }
};

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/types/shared.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/lib/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
init_checked_fetch();
init_modules_watch_stub();
var booleanEquals = (value1, value2) => value1 === value2;

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
init_checked_fetch();
init_modules_watch_stub();
var getAttrPathList = (path) => {
  const parts = path.split(".");
  const pathList = [];
  for (const part of parts) {
    const squareBracketIndex = part.indexOf("[");
    if (squareBracketIndex !== -1) {
      if (part.indexOf("]") !== part.length - 1) {
        throw new EndpointError(`Path: '${path}' does not end with ']'`);
      }
      const arrayIndex = part.slice(squareBracketIndex + 1, -1);
      if (Number.isNaN(parseInt(arrayIndex))) {
        throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
      }
      if (squareBracketIndex !== 0) {
        pathList.push(part.slice(0, squareBracketIndex));
      }
      pathList.push(arrayIndex);
    } else {
      pathList.push(part);
    }
  }
  return pathList;
};

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
  if (typeof acc !== "object") {
    throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
  } else if (Array.isArray(acc)) {
    return acc[parseInt(index)];
  }
  return acc[index];
}, value);

// node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
init_checked_fetch();
init_modules_watch_stub();
var isSet = (value) => value != null;

// node_modules/@smithy/util-endpoints/dist-es/lib/not.js
init_checked_fetch();
init_modules_watch_stub();
var not = (value) => !value;

// node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
init_checked_fetch();
init_modules_watch_stub();
var DEFAULT_PORTS = {
  [EndpointURLScheme.HTTP]: 80,
  [EndpointURLScheme.HTTPS]: 443
};
var parseURL = (value) => {
  const whatwgURL = (() => {
    try {
      if (value instanceof URL) {
        return value;
      }
      if (typeof value === "object" && "hostname" in value) {
        const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
        const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
        url.search = Object.entries(query).map(([k2, v2]) => `${k2}=${v2}`).join("&");
        return url;
      }
      return new URL(value);
    } catch (error) {
      return null;
    }
  })();
  if (!whatwgURL) {
    console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
    return null;
  }
  const urlString = whatwgURL.href;
  const { host, hostname, pathname, protocol, search } = whatwgURL;
  if (search) {
    return null;
  }
  const scheme = protocol.slice(0, -1);
  if (!Object.values(EndpointURLScheme).includes(scheme)) {
    return null;
  }
  const isIp = isIpAddress(hostname);
  const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
  const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
  return {
    scheme,
    authority,
    path: pathname,
    normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
    isIp
  };
};

// node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
init_checked_fetch();
init_modules_watch_stub();
var stringEquals = (value1, value2) => value1 === value2;

// node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
init_checked_fetch();
init_modules_watch_stub();
var substring = (input, start, stop, reverse) => {
  if (start >= stop || input.length < stop) {
    return null;
  }
  if (!reverse) {
    return input.substring(start, stop);
  }
  return input.substring(input.length - stop, input.length - start);
};

// node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
init_checked_fetch();
init_modules_watch_stub();
var uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`);

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
var endpointFunctions = {
  booleanEquals,
  getAttr,
  isSet,
  isValidHostLabel,
  not,
  parseURL,
  stringEquals,
  substring,
  uriEncode
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
init_checked_fetch();
init_modules_watch_stub();
var evaluateTemplate = (template, options) => {
  const evaluatedTemplateArr = [];
  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  let currentIndex = 0;
  while (currentIndex < template.length) {
    const openingBraceIndex = template.indexOf("{", currentIndex);
    if (openingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(currentIndex));
      break;
    }
    evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
    const closingBraceIndex = template.indexOf("}", openingBraceIndex);
    if (closingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex));
      break;
    }
    if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
      currentIndex = closingBraceIndex + 2;
    }
    const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
    if (parameterName.includes("#")) {
      const [refName, attrName] = parameterName.split("#");
      evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
    } else {
      evaluatedTemplateArr.push(templateContext[parameterName]);
    }
    currentIndex = closingBraceIndex + 1;
  }
  return evaluatedTemplateArr.join("");
};

// node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
init_checked_fetch();
init_modules_watch_stub();
var getReferenceValue = ({ ref }, options) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  return referenceRecord[ref];
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression = (obj, keyName, options) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if (obj["fn"]) {
    return callFunction(obj, options);
  } else if (obj["ref"]) {
    return getReferenceValue(obj, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
var callFunction = ({ fn, argv }, options) => {
  const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
  const fnSegments = fn.split(".");
  if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
    return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
  }
  return endpointFunctions[fn](...evaluatedArgs);
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition = ({ assign, ...fnArgs }, options) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
  return {
    result: value === "" ? true : !!value,
    ...assign != null && { toAssign: { name: assign, value } }
  };
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions = (conditions = [], options) => {
  const conditionsReferenceRecord = {};
  for (const condition of conditions) {
    const { result, toAssign } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord
      }
    });
    if (!result) {
      return { result };
    }
    if (toAssign) {
      conditionsReferenceRecord[toAssign.name] = toAssign.value;
      options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
    }
  }
  return { result: true, referenceRecord: conditionsReferenceRecord };
};

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
init_checked_fetch();
init_modules_watch_stub();
var getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
  ...acc,
  [headerKey]: headerVal.map((headerValEntry) => {
    const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
    if (typeof processedExpr !== "string") {
      throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
    }
    return processedExpr;
  })
}), {});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
init_checked_fetch();
init_modules_watch_stub();
var getEndpointProperty = (property, options) => {
  if (Array.isArray(property)) {
    return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
  }
  switch (typeof property) {
    case "string":
      return evaluateTemplate(property, options);
    case "object":
      if (property === null) {
        throw new EndpointError(`Unexpected endpoint property: ${property}`);
      }
      return getEndpointProperties(property, options);
    case "boolean":
      return property;
    default:
      throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
  }
};

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
  ...acc,
  [propertyKey]: getEndpointProperty(propertyVal, options)
}), {});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
init_checked_fetch();
init_modules_watch_stub();
var getEndpointUrl = (endpointUrl, options) => {
  const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
  if (typeof expression === "string") {
    try {
      return new URL(expression);
    } catch (error) {
      console.error(`Failed to construct URL with ${expression}`, error);
      throw error;
    }
  }
  throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule = (endpointRule, options) => {
  const { conditions, endpoint } = endpointRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  const endpointRuleOptions = {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  };
  const { url, properties, headers } = endpoint;
  options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
  return {
    ...headers != void 0 && {
      headers: getEndpointHeaders(headers, endpointRuleOptions)
    },
    ...properties != void 0 && {
      properties: getEndpointProperties(properties, endpointRuleOptions)
    },
    url: getEndpointUrl(url, endpointRuleOptions)
  };
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
init_checked_fetch();
init_modules_watch_stub();
var evaluateErrorRule = (errorRule, options) => {
  const { conditions, error } = errorRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  throw new EndpointError(evaluateExpression(error, "Error", {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  }));
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
init_checked_fetch();
init_modules_watch_stub();
var evaluateTreeRule = (treeRule, options) => {
  const { conditions, rules } = treeRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  return evaluateRules(rules, {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  });
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules = (rules, options) => {
  for (const rule of rules) {
    if (rule.type === "endpoint") {
      const endpointOrUndefined = evaluateEndpointRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else if (rule.type === "error") {
      evaluateErrorRule(rule, options);
    } else if (rule.type === "tree") {
      const endpointOrUndefined = evaluateTreeRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else {
      throw new EndpointError(`Unknown endpoint rule: ${rule}`);
    }
  }
  throw new EndpointError(`Rules evaluation failed`);
};

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint = (ruleSetObject, options) => {
  const { endpointParams, logger: logger2 } = options;
  const { parameters, rules } = ruleSetObject;
  options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
  const paramsWithDefault = Object.entries(parameters).filter(([, v2]) => v2.default != null).map(([k2, v2]) => [k2, v2.default]);
  if (paramsWithDefault.length > 0) {
    for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
      endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
    }
  }
  const requiredParams = Object.entries(parameters).filter(([, v2]) => v2.required).map(([k2]) => k2);
  for (const requiredParam of requiredParams) {
    if (endpointParams[requiredParam] == null) {
      throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
    }
  }
  const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
  if (options.endpointParams?.Endpoint) {
    try {
      const givenEndpoint = new URL(options.endpointParams.Endpoint);
      const { protocol, port } = givenEndpoint;
      endpoint.url.protocol = protocol;
      endpoint.url.port = port;
    } catch (e2) {
    }
  }
  options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
  return endpoint;
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value)) {
    return false;
  }
  if (value.length < 3 || value.length > 63) {
    return false;
  }
  if (value !== value.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value)) {
    return false;
  }
  return true;
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
init_checked_fetch();
init_modules_watch_stub();
var parseArn = (value) => {
  const segments = value.split(":");
  if (segments.length < 6)
    return null;
  const [arn, partition2, service, region, accountId, ...resourceId] = segments;
  if (arn !== "arn" || partition2 === "" || service === "" || resourceId[0] === "")
    return null;
  return {
    partition: partition2,
    service,
    region,
    accountId,
    resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
  };
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default = {
  partitions: [{
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-east-1",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
    regions: {
      "af-south-1": {
        description: "Africa (Cape Town)"
      },
      "ap-east-1": {
        description: "Asia Pacific (Hong Kong)"
      },
      "ap-northeast-1": {
        description: "Asia Pacific (Tokyo)"
      },
      "ap-northeast-2": {
        description: "Asia Pacific (Seoul)"
      },
      "ap-northeast-3": {
        description: "Asia Pacific (Osaka)"
      },
      "ap-south-1": {
        description: "Asia Pacific (Mumbai)"
      },
      "ap-south-2": {
        description: "Asia Pacific (Hyderabad)"
      },
      "ap-southeast-1": {
        description: "Asia Pacific (Singapore)"
      },
      "ap-southeast-2": {
        description: "Asia Pacific (Sydney)"
      },
      "ap-southeast-3": {
        description: "Asia Pacific (Jakarta)"
      },
      "ap-southeast-4": {
        description: "Asia Pacific (Melbourne)"
      },
      "aws-global": {
        description: "AWS Standard global region"
      },
      "ca-central-1": {
        description: "Canada (Central)"
      },
      "ca-west-1": {
        description: "Canada West (Calgary)"
      },
      "eu-central-1": {
        description: "Europe (Frankfurt)"
      },
      "eu-central-2": {
        description: "Europe (Zurich)"
      },
      "eu-north-1": {
        description: "Europe (Stockholm)"
      },
      "eu-south-1": {
        description: "Europe (Milan)"
      },
      "eu-south-2": {
        description: "Europe (Spain)"
      },
      "eu-west-1": {
        description: "Europe (Ireland)"
      },
      "eu-west-2": {
        description: "Europe (London)"
      },
      "eu-west-3": {
        description: "Europe (Paris)"
      },
      "il-central-1": {
        description: "Israel (Tel Aviv)"
      },
      "me-central-1": {
        description: "Middle East (UAE)"
      },
      "me-south-1": {
        description: "Middle East (Bahrain)"
      },
      "sa-east-1": {
        description: "South America (Sao Paulo)"
      },
      "us-east-1": {
        description: "US East (N. Virginia)"
      },
      "us-east-2": {
        description: "US East (Ohio)"
      },
      "us-west-1": {
        description: "US West (N. California)"
      },
      "us-west-2": {
        description: "US West (Oregon)"
      }
    }
  }, {
    id: "aws-cn",
    outputs: {
      dnsSuffix: "amazonaws.com.cn",
      dualStackDnsSuffix: "api.amazonwebservices.com.cn",
      implicitGlobalRegion: "cn-northwest-1",
      name: "aws-cn",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    regions: {
      "aws-cn-global": {
        description: "AWS China global region"
      },
      "cn-north-1": {
        description: "China (Beijing)"
      },
      "cn-northwest-1": {
        description: "China (Ningxia)"
      }
    }
  }, {
    id: "aws-us-gov",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-gov-west-1",
      name: "aws-us-gov",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    regions: {
      "aws-us-gov-global": {
        description: "AWS GovCloud (US) global region"
      },
      "us-gov-east-1": {
        description: "AWS GovCloud (US-East)"
      },
      "us-gov-west-1": {
        description: "AWS GovCloud (US-West)"
      }
    }
  }, {
    id: "aws-iso",
    outputs: {
      dnsSuffix: "c2s.ic.gov",
      dualStackDnsSuffix: "c2s.ic.gov",
      implicitGlobalRegion: "us-iso-east-1",
      name: "aws-iso",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-global": {
        description: "AWS ISO (US) global region"
      },
      "us-iso-east-1": {
        description: "US ISO East"
      },
      "us-iso-west-1": {
        description: "US ISO WEST"
      }
    }
  }, {
    id: "aws-iso-b",
    outputs: {
      dnsSuffix: "sc2s.sgov.gov",
      dualStackDnsSuffix: "sc2s.sgov.gov",
      implicitGlobalRegion: "us-isob-east-1",
      name: "aws-iso-b",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-b-global": {
        description: "AWS ISOB (US) global region"
      },
      "us-isob-east-1": {
        description: "US ISOB East (Ohio)"
      }
    }
  }, {
    id: "aws-iso-e",
    outputs: {
      dnsSuffix: "cloud.adc-e.uk",
      dualStackDnsSuffix: "cloud.adc-e.uk",
      implicitGlobalRegion: "eu-isoe-west-1",
      name: "aws-iso-e",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    regions: {
      "eu-isoe-west-1": {
        description: "EU ISOE West"
      }
    }
  }, {
    id: "aws-iso-f",
    outputs: {
      dnsSuffix: "csp.hci.ic.gov",
      dualStackDnsSuffix: "csp.hci.ic.gov",
      implicitGlobalRegion: "us-isof-south-1",
      name: "aws-iso-f",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    regions: {}
  }],
  version: "1.1"
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo = partitions_default;
var selectedUserAgentPrefix = "";
var partition = (value) => {
  const { partitions } = selectedPartitionsInfo;
  for (const partition2 of partitions) {
    const { regions, outputs } = partition2;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value) {
        return {
          ...outputs,
          ...regionData
        };
      }
    }
  }
  for (const partition2 of partitions) {
    const { regionRegex, outputs } = partition2;
    if (new RegExp(regionRegex).test(value)) {
      return {
        ...outputs
      };
    }
  }
  const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
  if (!DEFAULT_PARTITION) {
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  }
  return {
    ...DEFAULT_PARTITION.outputs
  };
};
var getUserAgentPrefix = () => selectedUserAgentPrefix;

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions = {
  isVirtualHostableS3Bucket,
  parseArn,
  partition
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
var UA_ESCAPE_CHAR = "-";

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware = (options) => (next, context) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request))
    return next(args);
  const { headers } = request;
  const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request
  });
};
var escapeUserAgent = (userAgentPair) => {
  const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
  const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return item;
      case 1:
        return `${acc}/${item}`;
      default:
        return `${acc}#${item}`;
    }
  }, "");
};
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  }
});

// node_modules/@smithy/config-resolver/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
init_checked_fetch();
init_modules_watch_stub();
var DEFAULT_USE_DUALSTACK_ENDPOINT = false;

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
init_checked_fetch();
init_modules_watch_stub();
var DEFAULT_USE_FIPS_ENDPOINT = false;

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
init_checked_fetch();
init_modules_watch_stub();
var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig = (input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return {
    ...input,
    region: async () => {
      if (typeof region === "string") {
        return getRealRegion(region);
      }
      const providedRegion = await region();
      return getRealRegion(providedRegion);
    },
    useFipsEndpoint: async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }
  };
};

// node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-serde-config-resolver/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
init_checked_fetch();
init_modules_watch_stub();
var resolveEventStreamSerdeConfig = (input) => ({
  ...input,
  eventStreamMarshaller: input.eventStreamSerdeProvider(input)
});

// node_modules/@smithy/middleware-content-length/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
var CONTENT_LENGTH_HEADER2 = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request = args.request;
    if (HttpRequest.isInstance(request)) {
      const { body, headers } = request;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER2) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request.headers = {
            ...request.headers,
            [CONTENT_LENGTH_HEADER2]: String(length)
          };
        } catch (error) {
        }
      }
    }
    return next({
      ...args,
      request
    });
  };
}
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true
};
var getContentLengthPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
init_checked_fetch();
init_modules_watch_stub();
var resolveParamsForS3 = async (endpointParams) => {
  const bucket = endpointParams?.Bucket || "";
  if (typeof endpointParams.Bucket === "string") {
    endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
  }
  if (isArnBucketName(bucket)) {
    if (endpointParams.ForcePathStyle === true) {
      throw new Error("Path-style addressing cannot be used with ARN buckets");
    }
  } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
    endpointParams.ForcePathStyle = true;
  }
  if (endpointParams.DisableMultiRegionAccessPoints) {
    endpointParams.disableMultiRegionAccessPoints = true;
    endpointParams.DisableMRAP = true;
  }
  return endpointParams;
};
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
var isArnBucketName = (bucketName) => {
  const [arn, partition2, service, , , bucket] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = Boolean(isArn && partition2 && service && bucket);
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return isValidArn;
};

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
init_checked_fetch();
init_modules_watch_stub();
var createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
  const configProvider = async () => {
    const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  };
  if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
    return async () => {
      const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
      const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
      return configValue;
    };
  }
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return endpoint.url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint;
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
};

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
init_checked_fetch();
init_modules_watch_stub();
var getEndpointFromConfig = async (serviceId) => void 0;

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/url-parser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/querystring-parser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl = (url) => {
  if (typeof url === "string") {
    return parseUrl(new URL(url));
  }
  const { hostname, pathname, port, protocol, search } = url;
  let query;
  if (search) {
    query = parseQueryString(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query
  };
};

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1 = (endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return parseUrl(endpoint.url);
    }
    return endpoint;
  }
  return parseUrl(endpoint);
};

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
  if (!clientConfig.endpoint) {
    const endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId || "");
    if (endpointFromConfig) {
      clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
    }
  }
  const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint = clientConfig.endpointProvider(endpointParams, context);
  return endpoint;
};
var resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
  const endpointParams = {};
  const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }
  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }
  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS3(endpointParams);
  }
  return endpointParams;
};

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
init_checked_fetch();
init_modules_watch_stub();
var endpointMiddleware = ({ config, instructions }) => {
  return (next, context) => async (args) => {
    const endpoint = await getEndpointFromInstructions(args.input, {
      getEndpointParameterInstructions() {
        return instructions;
      }
    }, { ...config }, context);
    context.endpointV2 = endpoint;
    context.authSchemes = endpoint.properties?.authSchemes;
    const authScheme = context.authSchemes?.[0];
    if (authScheme) {
      context["signing_region"] = authScheme.signingRegion;
      context["signing_service"] = authScheme.signingName;
      const smithyContext = getSmithyContext(context);
      const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
      if (httpAuthOption) {
        httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
          signing_region: authScheme.signingRegion,
          signingRegion: authScheme.signingRegion,
          signing_service: authScheme.signingName,
          signingName: authScheme.signingName,
          signingRegionSet: authScheme.signingRegionSet
        }, authScheme.properties);
      }
    }
    return next({
      ...args
    });
  };
};

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-serde/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
init_checked_fetch();
init_modules_watch_stub();
var deserializerMiddleware = (options, deserializer) => (next) => async (args) => {
  const { response } = await next(args);
  try {
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed
    };
  } catch (error) {
    Object.defineProperty(error, "$response", {
      value: response
    });
    if (!("$metadata" in error)) {
      const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
      error.message += "\n  " + hint;
      if (typeof error.$responseBodyText !== "undefined") {
        if (error.$response) {
          error.$response.body = error.$responseBodyText;
        }
      }
    }
    throw error;
  }
};

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
init_checked_fetch();
init_modules_watch_stub();
var serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
  const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
  if (!endpoint) {
    throw new Error("No valid endpoint provider available.");
  }
  const request = await serializer(args.input, { ...options, endpoint });
  return next({
    ...args,
    request
  });
};

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    }
  };
}

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};
var getEndpointPlugin = (config, instructions) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(endpointMiddleware({
      config,
      instructions
    }), endpointMiddlewareOptions);
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
init_checked_fetch();
init_modules_watch_stub();
var resolveEndpointConfig = (input) => {
  const tls = input.tls ?? true;
  const { endpoint } = input;
  const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
  const isCustomEndpoint = !!endpoint;
  return {
    ...input,
    endpoint: customEndpointProvider,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
    useFipsEndpoint: normalizeProvider(input.useFipsEndpoint ?? false)
  };
};

// node_modules/@smithy/middleware-endpoint/dist-es/types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-retry/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-retry/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-retry/dist-es/config.js
init_checked_fetch();
init_modules_watch_stub();
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/service-error-classification/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/service-error-classification/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

// node_modules/@smithy/service-error-classification/dist-es/index.js
var isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
var isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
var isTransientError = (error) => isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
var isServerError = (error) => {
  if (error.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
      return true;
    }
    return false;
  }
  return false;
};

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class {
  constructor(options) {
    this.currentCapacity = 0;
    this.enabled = false;
    this.lastMaxRate = 0;
    this.measuredTxRate = 0;
    this.requestCount = 0;
    this.lastTimestamp = 0;
    this.timeWindow = 0;
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;
    const currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    if (amount > this.currentCapacity) {
      const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    this.currentCapacity = this.currentCapacity - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    if (isThrottlingError(response)) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t2 = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t2 * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-retry/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
init_checked_fetch();
init_modules_watch_stub();
var getDefaultRetryBackoffStrategy = () => {
  let delayBase = DEFAULT_RETRY_DELAY_BASE;
  const computeNextBackoffDelay = (attempts) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  };
  const setDelayBase = (delay) => {
    delayBase = delay;
  };
  return {
    computeNextBackoffDelay,
    setDelayBase
  };
};

// node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
init_checked_fetch();
init_modules_watch_stub();
var createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
  const getRetryCount = () => retryCount;
  const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
  const getRetryCost = () => retryCost;
  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost
  };
};

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
  constructor(maxAttempts) {
    this.maxAttempts = maxAttempts;
    this.mode = RETRY_MODES.STANDARD;
    this.capacity = INITIAL_RETRY_TOKENS;
    this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return createDefaultRetryToken({
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0
    });
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
      const capacityCost = this.getCapacityCost(errorType);
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        retryCost: capacityCost
      });
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount() + 1;
    return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
  }
  getCapacityCost(errorType) {
    return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = RETRY_MODES.ADAPTIVE;
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
};

// node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-retry/dist-es/types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/uuid/dist/esm-browser/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/uuid/dist/esm-browser/rng.js
init_checked_fetch();
init_modules_watch_stub();
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/stringify.js
init_checked_fetch();
init_modules_watch_stub();
var byteToHex = [];
for (let i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// node_modules/uuid/dist/esm-browser/v4.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/uuid/dist/esm-browser/native.js
init_checked_fetch();
init_modules_watch_stub();
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i2 = 0; i2 < 16; ++i2) {
      buf[offset + i2] = rnds[i2];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-retry/dist-es/delayDecider.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-retry/dist-es/retryDecider.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-retry/dist-es/util.js
init_checked_fetch();
init_modules_watch_stub();
var asSdkError = (error) => {
  if (error instanceof Error)
    return error;
  if (error instanceof Object)
    return Object.assign(new Error(), error);
  if (typeof error === "string")
    return new Error(error);
  return new Error(`AWS SDK error wrapper for ${error}`);
};

// node_modules/@smithy/middleware-retry/dist-es/configurations.js
init_checked_fetch();
init_modules_watch_stub();
var resolveRetryConfig = (input) => {
  const { retryStrategy } = input;
  const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  return {
    ...input,
    maxAttempts,
    retryStrategy: async () => {
      if (retryStrategy) {
        return retryStrategy;
      }
      const retryMode = await normalizeProvider(input.retryMode)();
      if (retryMode === RETRY_MODES.ADAPTIVE) {
        return new AdaptiveRetryStrategy(maxAttempts);
      }
      return new StandardRetryStrategy(maxAttempts);
    }
  };
};

// node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
init_checked_fetch();
init_modules_watch_stub();
var isStreamingPayload = (request) => request?.body instanceof ReadableStream;

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware = (options) => (next, context) => async (args) => {
  let retryStrategy = await options.retryStrategy();
  const maxAttempts = await options.maxAttempts();
  if (isRetryStrategyV2(retryStrategy)) {
    retryStrategy = retryStrategy;
    let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
    let lastError = new Error();
    let attempts = 0;
    let totalRetryDelay = 0;
    const { request } = args;
    const isRequest = HttpRequest.isInstance(request);
    if (isRequest) {
      request.headers[INVOCATION_ID_HEADER] = v4_default();
    }
    while (true) {
      try {
        if (isRequest) {
          request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        const { response, output } = await next(args);
        retryStrategy.recordSuccess(retryToken);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalRetryDelay;
        return { response, output };
      } catch (e2) {
        const retryErrorInfo = getRetryErrorInfo(e2);
        lastError = asSdkError(e2);
        if (isRequest && isStreamingPayload(request)) {
          (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
          throw lastError;
        }
        try {
          retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
        } catch (refreshError) {
          if (!lastError.$metadata) {
            lastError.$metadata = {};
          }
          lastError.$metadata.attempts = attempts + 1;
          lastError.$metadata.totalRetryDelay = totalRetryDelay;
          throw lastError;
        }
        attempts = retryToken.getRetryCount();
        const delay = retryToken.getRetryDelay();
        totalRetryDelay += delay;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  } else {
    retryStrategy = retryStrategy;
    if (retryStrategy?.mode)
      context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  }
};
var isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
var getRetryErrorInfo = (error) => {
  const errorInfo = {
    error,
    errorType: getRetryErrorType(error)
  };
  const retryAfterHint = getRetryAfterHint(error.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
};
var getRetryErrorType = (error) => {
  if (isThrottlingError(error))
    return "THROTTLING";
  if (isTransientError(error))
    return "TRANSIENT";
  if (isServerError(error))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
};
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
var getRetryPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  }
});
var getRetryAfterHint = (response) => {
  if (!HttpResponse.isInstance(response))
    return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName)
    return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds))
    return new Date(retryAfterSeconds * 1e3);
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
init_checked_fetch();
init_modules_watch_stub();
var resolveClientEndpointParameters = (options) => {
  return {
    ...options,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    forcePathStyle: options.forcePathStyle ?? false,
    useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
    defaultSigningName: "s3"
  };
};
var commonParams = {
  ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
  DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
  Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
  DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
  UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
init_checked_fetch();
init_modules_watch_stub();
var S3ServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, S3ServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
var NoSuchUpload = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...opts
    });
    this.name = "NoSuchUpload";
    this.$fault = "client";
    Object.setPrototypeOf(this, NoSuchUpload.prototype);
  }
};
var ObjectNotInActiveTierError = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...opts
    });
    this.name = "ObjectNotInActiveTierError";
    this.$fault = "client";
    Object.setPrototypeOf(this, ObjectNotInActiveTierError.prototype);
  }
};
var BucketAlreadyExists = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts
    });
    this.name = "BucketAlreadyExists";
    this.$fault = "client";
    Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
  }
};
var BucketAlreadyOwnedByYou = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts
    });
    this.name = "BucketAlreadyOwnedByYou";
    this.$fault = "client";
    Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
  }
};
var NoSuchBucket = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts
    });
    this.name = "NoSuchBucket";
    this.$fault = "client";
    Object.setPrototypeOf(this, NoSuchBucket.prototype);
  }
};
var AnalyticsFilter;
(function(AnalyticsFilter2) {
  AnalyticsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AnalyticsFilter || (AnalyticsFilter = {}));
var LifecycleRuleFilter;
(function(LifecycleRuleFilter2) {
  LifecycleRuleFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.ObjectSizeGreaterThan !== void 0)
      return visitor.ObjectSizeGreaterThan(value.ObjectSizeGreaterThan);
    if (value.ObjectSizeLessThan !== void 0)
      return visitor.ObjectSizeLessThan(value.ObjectSizeLessThan);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(LifecycleRuleFilter || (LifecycleRuleFilter = {}));
var MetricsFilter;
(function(MetricsFilter2) {
  MetricsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.AccessPointArn !== void 0)
      return visitor.AccessPointArn(value.AccessPointArn);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(MetricsFilter || (MetricsFilter = {}));
var ReplicationRuleFilter;
(function(ReplicationRuleFilter2) {
  ReplicationRuleFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(ReplicationRuleFilter || (ReplicationRuleFilter = {}));
var InvalidObjectState = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidObjectState";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidObjectState.prototype);
    this.StorageClass = opts.StorageClass;
    this.AccessTier = opts.AccessTier;
  }
};
var NoSuchKey = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...opts
    });
    this.name = "NoSuchKey";
    this.$fault = "client";
    Object.setPrototypeOf(this, NoSuchKey.prototype);
  }
};
var NotFound = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "NotFound",
      $fault: "client",
      ...opts
    });
    this.name = "NotFound";
    this.$fault = "client";
    Object.setPrototypeOf(this, NotFound.prototype);
  }
};
var SessionCredentialsFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING },
  ...obj.SessionToken && { SessionToken: SENSITIVE_STRING }
});
var CreateSessionOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: SessionCredentialsFilterSensitiveLog(obj.Credentials) }
});
var GetObjectOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }
});
var GetObjectRequestFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }
});

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
init_checked_fetch();
init_modules_watch_stub();
var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: endpointMiddlewareOptions.name
};

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
init_checked_fetch();
init_modules_watch_stub();
var httpAuthSchemeMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};

// node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
init_checked_fetch();
init_modules_watch_stub();
var httpSigningMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: true,
  relation: "after",
  toMiddleware: retryMiddlewareOptions.name
};

// node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
init_checked_fetch();
init_modules_watch_stub();
var createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;

// node_modules/@smithy/core/dist-es/getSmithyContext.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/normalizeProvider.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
init_checked_fetch();
init_modules_watch_stub();
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var RequestBuilder = class {
  constructor(input, context) {
    this.input = input;
    this.context = context;
    this.query = {};
    this.method = "";
    this.headers = {};
    this.path = "";
    this.body = null;
    this.hostname = "";
    this.resolvePathStack = [];
  }
  async build() {
    const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
    this.path = basePath;
    for (const resolvePath of this.resolvePathStack) {
      resolvePath(this.path);
    }
    return new HttpRequest({
      protocol,
      hostname: this.hostname || hostname,
      port,
      method: this.method,
      path: this.path,
      query: this.query,
      body: this.body,
      headers: this.headers
    });
  }
  hn(hostname) {
    this.hostname = hostname;
    return this;
  }
  bp(uriLabel) {
    this.resolvePathStack.push((basePath) => {
      this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
    });
    return this;
  }
  p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
    this.resolvePathStack.push((path) => {
      this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
    });
    return this;
  }
  h(headers) {
    this.headers = headers;
    return this;
  }
  q(query) {
    this.query = query;
    return this;
  }
  b(body) {
    this.body = body;
    return this;
  }
  m(method) {
    this.method = method;
    return this;
  }
};

// node_modules/@smithy/core/dist-es/pagination/createPaginator.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
init_checked_fetch();
init_modules_watch_stub();
var collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
init_checked_fetch();
init_modules_watch_stub();
var import_fast_xml_parser = __toESM(require_fxp());
var parseXmlBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    const parser = new import_fast_xml_parser.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: (_, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    let parsedObj;
    try {
      parsedObj = parser.parse(encoded, true);
    } catch (e2) {
      if (e2 && typeof e2 === "object") {
        Object.defineProperty(e2, "$responseBodyText", {
          value: encoded
        });
      }
      throw e2;
    }
    const textNodeName = "#text";
    const key = Object.keys(parsedObj)[0];
    const parsedObjToReturn = parsedObj[key];
    if (parsedObjToReturn[textNodeName]) {
      parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
      delete parsedObjToReturn[textNodeName];
    }
    return getValueFromTextNode(parsedObjToReturn);
  }
  return {};
});
var parseXmlErrorBody = async (errorBody, context) => {
  const value = await parseXmlBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};
var loadRestXmlErrorCode = (output, data) => {
  if (data?.Error?.Code !== void 0) {
    return data.Error.Code;
  }
  if (data?.Code !== void 0) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};

// node_modules/@aws-sdk/xml-builder/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/xml-builder/dist-es/XmlNode.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/xml-builder/dist-es/escape-attribute.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/xml-builder/dist-es/XmlText.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/xml-builder/dist-es/escape-element.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/client-s3/dist-es/models/models_1.js
init_checked_fetch();
init_modules_watch_stub();
var ObjectAlreadyInActiveTierError = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts
    });
    this.name = "ObjectAlreadyInActiveTierError";
    this.$fault = "client";
    Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
  }
};
var SelectObjectContentEventStream;
(function(SelectObjectContentEventStream2) {
  SelectObjectContentEventStream2.visit = (value, visitor) => {
    if (value.Records !== void 0)
      return visitor.Records(value.Records);
    if (value.Stats !== void 0)
      return visitor.Stats(value.Stats);
    if (value.Progress !== void 0)
      return visitor.Progress(value.Progress);
    if (value.Cont !== void 0)
      return visitor.Cont(value.Cont);
    if (value.End !== void 0)
      return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));
var PutObjectOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
var PutObjectRequestFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING },
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
var se_CreateSessionCommand = async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xacsm]: input[_SM]
  });
  b2.bp("/");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  const query = map({
    [_s]: [, ""]
  });
  let body;
  b2.m("GET").h(headers).q(query).b(body);
  return b2.build();
};
var se_GetObjectCommand = async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM],
    [_ims]: [() => isSerializableHeaderValue(input[_IMS]), () => dateToUtcString(input[_IMS]).toString()],
    [_inm]: input[_INM],
    [_ius]: [() => isSerializableHeaderValue(input[_IUS]), () => dateToUtcString(input[_IUS]).toString()],
    [_ra]: input[_R],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xarp]: input[_RP],
    [_xaebo]: input[_EBO],
    [_xacm]: input[_CM]
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "GetObject"],
    [_rcc]: [, input[_RCC]],
    [_rcd]: [, input[_RCD]],
    [_rce]: [, input[_RCE]],
    [_rcl]: [, input[_RCL]],
    [_rct]: [, input[_RCT]],
    [_re]: [() => input.ResponseExpires !== void 0, () => dateToUtcString(input[_RE]).toString()],
    [_vI]: [, input[_VI]],
    [_pN]: [() => input.PartNumber !== void 0, () => input[_PN].toString()]
  });
  let body;
  b2.m("GET").h(headers).q(query).b(body);
  return b2.build();
};
var se_PutObjectCommand = async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_ct]: input[_CT] || "application/octet-stream",
    [_xaa]: input[_ACL],
    [_cc]: input[_CC],
    [_cd]: input[_CD],
    [_ce]: input[_CE],
    [_cl]: input[_CL],
    [_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
    [_cm]: input[_CMD],
    [_xasca]: input[_CA],
    [_xacc]: input[_CCRC],
    [_xacc_]: input[_CCRCC],
    [_xacs]: input[_CSHA],
    [_xacs_]: input[_CSHAh],
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => dateToUtcString(input[_E]).toString()],
    [_xagfc]: input[_GFC],
    [_xagr]: input[_GR],
    [_xagra]: input[_GRACP],
    [_xagwa]: input[_GWACP],
    [_xasse]: input[_SSE],
    [_xasc]: input[_SC],
    [_xawrl]: input[_WRL],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
    [_xarp]: input[_RP],
    [_xat]: input[_T],
    [_xaolm]: input[_OLM],
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => serializeDateTime(input[_OLRUD]).toString()],
    [_xaollh]: input[_OLLHS],
    [_xaebo]: input[_EBO],
    ...input.Metadata !== void 0 && Object.keys(input.Metadata).reduce((acc, suffix) => {
      acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
      return acc;
    }, {})
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "PutObject"]
  });
  let body;
  let contents;
  if (input.Body !== void 0) {
    contents = input.Body;
    body = contents;
  }
  b2.m("PUT").h(headers).q(query).b(body);
  return b2.build();
};
var de_CreateSessionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output)
  });
  const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
  if (data[_C] != null) {
    contents[_C] = de_SessionCredentials(data[_C], context);
  }
  return contents;
};
var de_GetObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => parseBoolean(output.headers[_xadm])],
    [_AR]: [, output.headers[_ar]],
    [_Exp]: [, output.headers[_xae]],
    [_Re]: [, output.headers[_xar]],
    [_LM]: [() => void 0 !== output.headers[_lm], () => expectNonNull(parseRfc7231DateTime(output.headers[_lm]))],
    [_CLo]: [() => void 0 !== output.headers[_cl_], () => strictParseLong(output.headers[_cl_])],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_MM]: [() => void 0 !== output.headers[_xamm], () => strictParseInt32(output.headers[_xamm])],
    [_VI]: [, output.headers[_xavi]],
    [_CC]: [, output.headers[_cc]],
    [_CD]: [, output.headers[_cd]],
    [_CE]: [, output.headers[_ce]],
    [_CL]: [, output.headers[_cl]],
    [_CR]: [, output.headers[_cr]],
    [_CT]: [, output.headers[_ct]],
    [_E]: [() => void 0 !== output.headers[_e], () => expectNonNull(parseRfc7231DateTime(output.headers[_e]))],
    [_ES]: [, output.headers[_ex]],
    [_WRL]: [, output.headers[_xawrl]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_SC]: [, output.headers[_xasc]],
    [_RC]: [, output.headers[_xarc]],
    [_RS]: [, output.headers[_xars]],
    [_PC]: [() => void 0 !== output.headers[_xampc], () => strictParseInt32(output.headers[_xampc])],
    [_TC]: [() => void 0 !== output.headers[_xatc], () => strictParseInt32(output.headers[_xatc])],
    [_OLM]: [, output.headers[_xaolm]],
    [_OLRUD]: [
      () => void 0 !== output.headers[_xaolrud],
      () => expectNonNull(parseRfc3339DateTimeWithOffset(output.headers[_xaolrud]))
    ],
    [_OLLHS]: [, output.headers[_xaollh]],
    Metadata: [
      ,
      Object.keys(output.headers).filter((header) => header.startsWith("x-amz-meta-")).reduce((acc, header) => {
        acc[header.substring(11)] = output.headers[header];
        return acc;
      }, {})
    ]
  });
  const data = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  return contents;
};
var de_PutObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_Exp]: [, output.headers[_xae]],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_SSE]: [, output.headers[_xasse]],
    [_VI]: [, output.headers[_xavi]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]]
  });
  await collectBody(output.body, context);
  return contents;
};
var de_CommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseXmlErrorBody(output.body, context)
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await de_NoSuchUploadRes(parsedOutput, context);
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await de_InvalidObjectStateRes(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
};
var throwDefaultError2 = withBaseException(S3ServiceException);
var de_BucketAlreadyExistsRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_BucketAlreadyOwnedByYouRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidObjectStateRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  if (data[_AT] != null) {
    contents[_AT] = expectString(data[_AT]);
  }
  if (data[_SC] != null) {
    contents[_SC] = expectString(data[_SC]);
  }
  const exception = new InvalidObjectState({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchBucketRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchKeyRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchKey({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchUploadRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchUpload({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NotFoundRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NotFound({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectAlreadyInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectAlreadyInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectNotInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectNotInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_SessionCredentials = (output, context) => {
  const contents = {};
  if (output[_AKI] != null) {
    contents[_AKI] = expectString(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = expectString(output[_SAK]);
  }
  if (output[_ST] != null) {
    contents[_ST] = expectString(output[_ST]);
  }
  if (output[_Exp] != null) {
    contents[_Exp] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_Exp]));
  }
  return contents;
};
var deserializeMetadata2 = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});
var isSerializableHeaderValue = (value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
var _ACL = "ACL";
var _AKI = "AccessKeyId";
var _AR = "AcceptRanges";
var _AT = "AccessTier";
var _BKE = "BucketKeyEnabled";
var _C = "Credentials";
var _CA = "ChecksumAlgorithm";
var _CC = "CacheControl";
var _CCRC = "ChecksumCRC32";
var _CCRCC = "ChecksumCRC32C";
var _CD = "ContentDisposition";
var _CE = "ContentEncoding";
var _CL = "ContentLanguage";
var _CLo = "ContentLength";
var _CM = "ChecksumMode";
var _CMD = "ContentMD5";
var _CR = "ContentRange";
var _CSHA = "ChecksumSHA1";
var _CSHAh = "ChecksumSHA256";
var _CT = "ContentType";
var _DM = "DeleteMarker";
var _E = "Expires";
var _EBO = "ExpectedBucketOwner";
var _ES = "ExpiresString";
var _ETa = "ETag";
var _Exp = "Expiration";
var _GFC = "GrantFullControl";
var _GR = "GrantRead";
var _GRACP = "GrantReadACP";
var _GWACP = "GrantWriteACP";
var _IM = "IfMatch";
var _IMS = "IfModifiedSince";
var _INM = "IfNoneMatch";
var _IUS = "IfUnmodifiedSince";
var _LM = "LastModified";
var _MM = "MissingMeta";
var _OLLHS = "ObjectLockLegalHoldStatus";
var _OLM = "ObjectLockMode";
var _OLRUD = "ObjectLockRetainUntilDate";
var _PC = "PartsCount";
var _PN = "PartNumber";
var _R = "Range";
var _RC = "RequestCharged";
var _RCC = "ResponseCacheControl";
var _RCD = "ResponseContentDisposition";
var _RCE = "ResponseContentEncoding";
var _RCL = "ResponseContentLanguage";
var _RCT = "ResponseContentType";
var _RE = "ResponseExpires";
var _RP = "RequestPayer";
var _RS = "ReplicationStatus";
var _Re = "Restore";
var _SAK = "SecretAccessKey";
var _SC = "StorageClass";
var _SM = "SessionMode";
var _SSE = "ServerSideEncryption";
var _SSECA = "SSECustomerAlgorithm";
var _SSECK = "SSECustomerKey";
var _SSECKMD = "SSECustomerKeyMD5";
var _SSEKMSEC = "SSEKMSEncryptionContext";
var _SSEKMSKI = "SSEKMSKeyId";
var _ST = "SessionToken";
var _T = "Tagging";
var _TC = "TagCount";
var _VI = "VersionId";
var _WRL = "WebsiteRedirectLocation";
var _ar = "accept-ranges";
var _cc = "cache-control";
var _cd = "content-disposition";
var _ce = "content-encoding";
var _cl = "content-language";
var _cl_ = "content-length";
var _cm = "content-md5";
var _cr = "content-range";
var _ct = "content-type";
var _e = "expires";
var _eta = "etag";
var _ex = "expiresstring";
var _im = "if-match";
var _ims = "if-modified-since";
var _inm = "if-none-match";
var _ius = "if-unmodified-since";
var _lm = "last-modified";
var _pN = "partNumber";
var _ra = "range";
var _rcc = "response-cache-control";
var _rcd = "response-content-disposition";
var _rce = "response-content-encoding";
var _rcl = "response-content-language";
var _rct = "response-content-type";
var _re = "response-expires";
var _s = "session";
var _vI = "versionId";
var _xaa = "x-amz-acl";
var _xacc = "x-amz-checksum-crc32";
var _xacc_ = "x-amz-checksum-crc32c";
var _xacm = "x-amz-checksum-mode";
var _xacs = "x-amz-checksum-sha1";
var _xacs_ = "x-amz-checksum-sha256";
var _xacsm = "x-amz-create-session-mode";
var _xadm = "x-amz-delete-marker";
var _xae = "x-amz-expiration";
var _xaebo = "x-amz-expected-bucket-owner";
var _xagfc = "x-amz-grant-full-control";
var _xagr = "x-amz-grant-read";
var _xagra = "x-amz-grant-read-acp";
var _xagwa = "x-amz-grant-write-acp";
var _xamm = "x-amz-missing-meta";
var _xampc = "x-amz-mp-parts-count";
var _xaollh = "x-amz-object-lock-legal-hold";
var _xaolm = "x-amz-object-lock-mode";
var _xaolrud = "x-amz-object-lock-retain-until-date";
var _xar = "x-amz-restore";
var _xarc = "x-amz-request-charged";
var _xarp = "x-amz-request-payer";
var _xars = "x-amz-replication-status";
var _xasc = "x-amz-storage-class";
var _xasca = "x-amz-sdk-checksum-algorithm";
var _xasse = "x-amz-server-side-encryption";
var _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
var _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
var _xassec = "x-amz-server-side-encryption-context";
var _xasseca = "x-amz-server-side-encryption-customer-algorithm";
var _xasseck = "x-amz-server-side-encryption-customer-key";
var _xasseckm = "x-amz-server-side-encryption-customer-key-md5";
var _xat = "x-amz-tagging";
var _xatc = "x-amz-tagging-count";
var _xavi = "x-amz-version-id";
var _xawrl = "x-amz-website-redirect-location";
var _xi = "x-id";

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
var CreateSessionCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
  ];
}).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(void 0, CreateSessionOutputFilterSensitiveLog).ser(se_CreateSessionCommand).de(de_CreateSessionCommand).build() {
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.browser.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/client-s3/package.json
var package_default = {
  name: "@aws-sdk/client-s3",
  description: "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native",
  version: "3.592.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-s3",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo s3",
    test: "yarn test:unit",
    "test:e2e": "yarn test:e2e:node && yarn test:e2e:browser",
    "test:e2e:browser": "ts-mocha test/**/*.browser.ispec.ts && karma start karma.conf.js",
    "test:e2e:node": "jest --c jest.config.e2e.js",
    "test:unit": "ts-mocha test/unit/**/*.spec.ts"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha1-browser": "3.0.0",
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/client-sso-oidc": "3.592.0",
    "@aws-sdk/client-sts": "3.592.0",
    "@aws-sdk/core": "3.592.0",
    "@aws-sdk/credential-provider-node": "3.592.0",
    "@aws-sdk/middleware-bucket-endpoint": "3.587.0",
    "@aws-sdk/middleware-expect-continue": "3.577.0",
    "@aws-sdk/middleware-flexible-checksums": "3.587.0",
    "@aws-sdk/middleware-host-header": "3.577.0",
    "@aws-sdk/middleware-location-constraint": "3.577.0",
    "@aws-sdk/middleware-logger": "3.577.0",
    "@aws-sdk/middleware-recursion-detection": "3.577.0",
    "@aws-sdk/middleware-sdk-s3": "3.587.0",
    "@aws-sdk/middleware-signing": "3.587.0",
    "@aws-sdk/middleware-ssec": "3.577.0",
    "@aws-sdk/middleware-user-agent": "3.587.0",
    "@aws-sdk/region-config-resolver": "3.587.0",
    "@aws-sdk/signature-v4-multi-region": "3.587.0",
    "@aws-sdk/types": "3.577.0",
    "@aws-sdk/util-endpoints": "3.587.0",
    "@aws-sdk/util-user-agent-browser": "3.577.0",
    "@aws-sdk/util-user-agent-node": "3.587.0",
    "@aws-sdk/xml-builder": "3.575.0",
    "@smithy/config-resolver": "^3.0.1",
    "@smithy/core": "^2.2.0",
    "@smithy/eventstream-serde-browser": "^3.0.0",
    "@smithy/eventstream-serde-config-resolver": "^3.0.0",
    "@smithy/eventstream-serde-node": "^3.0.0",
    "@smithy/fetch-http-handler": "^3.0.1",
    "@smithy/hash-blob-browser": "^3.0.0",
    "@smithy/hash-node": "^3.0.0",
    "@smithy/hash-stream-node": "^3.0.0",
    "@smithy/invalid-dependency": "^3.0.0",
    "@smithy/md5-js": "^3.0.0",
    "@smithy/middleware-content-length": "^3.0.0",
    "@smithy/middleware-endpoint": "^3.0.1",
    "@smithy/middleware-retry": "^3.0.3",
    "@smithy/middleware-serde": "^3.0.0",
    "@smithy/middleware-stack": "^3.0.0",
    "@smithy/node-config-provider": "^3.1.0",
    "@smithy/node-http-handler": "^3.0.0",
    "@smithy/protocol-http": "^4.0.0",
    "@smithy/smithy-client": "^3.1.1",
    "@smithy/types": "^3.0.0",
    "@smithy/url-parser": "^3.0.0",
    "@smithy/util-base64": "^3.0.0",
    "@smithy/util-body-length-browser": "^3.0.0",
    "@smithy/util-body-length-node": "^3.0.0",
    "@smithy/util-defaults-mode-browser": "^3.0.3",
    "@smithy/util-defaults-mode-node": "^3.0.3",
    "@smithy/util-endpoints": "^2.0.1",
    "@smithy/util-retry": "^3.0.0",
    "@smithy/util-stream": "^3.0.1",
    "@smithy/util-utf8": "^3.0.0",
    "@smithy/util-waiter": "^3.0.0",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@aws-sdk/signature-v4-crt": "3.587.0",
    "@tsconfig/node16": "16.1.3",
    "@types/chai": "^4.2.11",
    "@types/mocha": "^8.0.4",
    "@types/node": "^16.18.96",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=16.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-s3"
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.browser.js
var import_sha1_browser = __toESM(require_build4());
var import_sha256_browser = __toESM(require_build6());

// node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
var import_bowser = __toESM(require_es5());
var defaultUserAgent = ({ serviceId, clientVersion }) => async () => {
  const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
  const sections = [
    ["aws-sdk-js", clientVersion],
    ["ua", "2.0"],
    [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
    ["lang/js"],
    ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
  ];
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  return sections;
};

// node_modules/@smithy/eventstream-serde-browser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-serde-universal/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-codec/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
init_checked_fetch();
init_modules_watch_stub();
var import_crc322 = __toESM(require_build7());

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-codec/dist-es/Int64.js
init_checked_fetch();
init_modules_watch_stub();
var Int642 = class {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate2(bytes);
    }
    return new Int642(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate2(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate2(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller = class {
  constructor(toUtf82, fromUtf83) {
    this.toUtf8 = toUtf82;
    this.fromUtf8 = fromUtf83;
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = this.fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = this.fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int642.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN2.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
  parse(headers) {
    const out = {};
    let position = 0;
    while (position < headers.byteLength) {
      const nameLength = headers.getUint8(position++);
      const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name] = {
            type: LONG_TAG,
            value: new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          const binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          const stringLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name] = {
            type: UUID_TAG,
            value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
          };
          break;
        default:
          throw new Error(`Unrecognized header type tag`);
      }
    }
    return out;
  }
};
var HEADER_VALUE_TYPE2;
(function(HEADER_VALUE_TYPE4) {
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["short"] = 3] = "short";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["long"] = 5] = "long";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["string"] = 7] = "string";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE2 || (HEADER_VALUE_TYPE2 = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN2 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

// node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
init_checked_fetch();
init_modules_watch_stub();
var import_crc32 = __toESM(require_build7());
var PRELUDE_MEMBER_LENGTH = 4;
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
var CHECKSUM_LENGTH = 4;
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
  if (byteLength < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  const view = new DataView(buffer, byteOffset, byteLength);
  const messageLength = view.getUint32(0, false);
  if (byteLength !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
  const checksummer = new import_crc32.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digest()) {
    throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
  if (expectedMessageChecksum !== checksummer.digest()) {
    throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
  }
  return {
    headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
    body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
  };
}

// node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
var EventStreamCodec = class {
  constructor(toUtf82, fromUtf83) {
    this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf83);
    this.messageBuffer = [];
    this.isEndOfStream = false;
  }
  feed(message) {
    this.messageBuffer.push(this.decode(message));
  }
  endOfStream() {
    this.isEndOfStream = true;
  }
  getMessage() {
    const message = this.messageBuffer.pop();
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessage() {
        return message;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  getAvailableMessages() {
    const messages = this.messageBuffer;
    this.messageBuffer = [];
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessages() {
        return messages;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  encode({ headers: rawHeaders, body }) {
    const headers = this.headerMarshaller.format(rawHeaders);
    const length = headers.byteLength + body.byteLength + 16;
    const out = new Uint8Array(length);
    const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    const checksum = new import_crc322.Crc32();
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);
    view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
    return out;
  }
  decode(message) {
    const { headers, body } = splitMessage(message);
    return { headers: this.headerMarshaller.parse(headers), body };
  }
  formatHeaders(rawHeaders) {
    return this.headerMarshaller.format(rawHeaders);
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/Message.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
init_checked_fetch();
init_modules_watch_stub();
var MessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const bytes of this.options.inputStream) {
      const decoded = this.options.decoder.decode(bytes);
      yield decoded;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
init_checked_fetch();
init_modules_watch_stub();
var MessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const msg of this.options.messageStream) {
      const encoded = this.options.encoder.encode(msg);
      yield encoded;
    }
    if (this.options.includeEndFrame) {
      yield new Uint8Array(0);
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
init_checked_fetch();
init_modules_watch_stub();
var SmithyMessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const message of this.options.messageStream) {
      const deserialized = await this.options.deserializer(message);
      if (deserialized === void 0)
        continue;
      yield deserialized;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
init_checked_fetch();
init_modules_watch_stub();
var SmithyMessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const chunk of this.options.inputStream) {
      const payloadBuf = this.options.serializer(chunk);
      yield payloadBuf;
    }
  }
};

// node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
init_checked_fetch();
init_modules_watch_stub();
function getChunkedStream(source) {
  let currentMessageTotalLength = 0;
  let currentMessagePendingLength = 0;
  let currentMessage = null;
  let messageLengthBuffer = null;
  const allocateMessage = (size) => {
    if (typeof size !== "number") {
      throw new Error("Attempted to allocate an event message where size was not a number: " + size);
    }
    currentMessageTotalLength = size;
    currentMessagePendingLength = 4;
    currentMessage = new Uint8Array(size);
    const currentMessageView = new DataView(currentMessage.buffer);
    currentMessageView.setUint32(0, size, false);
  };
  const iterator = async function* () {
    const sourceIterator = source[Symbol.asyncIterator]();
    while (true) {
      const { value, done } = await sourceIterator.next();
      if (done) {
        if (!currentMessageTotalLength) {
          return;
        } else if (currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
        } else {
          throw new Error("Truncated event message received.");
        }
        return;
      }
      const chunkLength = value.length;
      let currentOffset = 0;
      while (currentOffset < chunkLength) {
        if (!currentMessage) {
          const bytesRemaining = chunkLength - currentOffset;
          if (!messageLengthBuffer) {
            messageLengthBuffer = new Uint8Array(4);
          }
          const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
          messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
          currentMessagePendingLength += numBytesForTotal;
          currentOffset += numBytesForTotal;
          if (currentMessagePendingLength < 4) {
            break;
          }
          allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
          messageLengthBuffer = null;
        }
        const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
        currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
        currentMessagePendingLength += numBytesToWrite;
        currentOffset += numBytesToWrite;
        if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
          currentMessage = null;
          currentMessageTotalLength = 0;
          currentMessagePendingLength = 0;
        }
      }
    }
  };
  return {
    [Symbol.asyncIterator]: iterator
  };
}

// node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
init_checked_fetch();
init_modules_watch_stub();
function getMessageUnmarshaller(deserializer, toUtf82) {
  return async function(message) {
    const { value: messageType } = message.headers[":message-type"];
    if (messageType === "error") {
      const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
      unmodeledError.name = message.headers[":error-code"].value;
      throw unmodeledError;
    } else if (messageType === "exception") {
      const code = message.headers[":exception-type"].value;
      const exception = { [code]: message };
      const deserializedException = await deserializer(exception);
      if (deserializedException.$unknown) {
        const error = new Error(toUtf82(message.body));
        error.name = code;
        throw error;
      }
      throw deserializedException[code];
    } else if (messageType === "event") {
      const event = {
        [message.headers[":event-type"].value]: message
      };
      const deserialized = await deserializer(event);
      if (deserialized.$unknown)
        return;
      return deserialized;
    } else {
      throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
    }
  };
}

// node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller = class {
  constructor({ utf8Encoder: utf8Encoder2, utf8Decoder: utf8Decoder2 }) {
    this.eventStreamCodec = new EventStreamCodec(utf8Encoder2, utf8Decoder2);
    this.utfEncoder = utf8Encoder2;
  }
  deserialize(body, deserializer) {
    const inputStream = getChunkedStream(body);
    return new SmithyMessageDecoderStream({
      messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
      deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
    });
  }
  serialize(inputStream, serializer) {
    return new MessageEncoderStream({
      messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
      encoder: this.eventStreamCodec,
      includeEndFrame: true
    });
  }
};

// node_modules/@smithy/eventstream-serde-universal/dist-es/provider.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js
init_checked_fetch();
init_modules_watch_stub();
var readableStreamtoIterable = (readableStream) => ({
  [Symbol.asyncIterator]: async function* () {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          return;
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }
});
var iterableToReadableStream = (asyncIterable) => {
  const iterator = asyncIterable[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await iterator.next();
      if (done) {
        return controller.close();
      }
      controller.enqueue(value);
    }
  });
};

// node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller2 = class {
  constructor({ utf8Encoder: utf8Encoder2, utf8Decoder: utf8Decoder2 }) {
    this.universalMarshaller = new EventStreamMarshaller({
      utf8Decoder: utf8Decoder2,
      utf8Encoder: utf8Encoder2
    });
  }
  deserialize(body, deserializer) {
    const bodyIterable = isReadableStream(body) ? readableStreamtoIterable(body) : body;
    return this.universalMarshaller.deserialize(bodyIterable, deserializer);
  }
  serialize(input, serializer) {
    const serialziedIterable = this.universalMarshaller.serialize(input, serializer);
    return typeof ReadableStream === "function" ? iterableToReadableStream(serialziedIterable) : serialziedIterable;
  }
};
var isReadableStream = (body) => typeof ReadableStream === "function" && body instanceof ReadableStream;

// node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js
init_checked_fetch();
init_modules_watch_stub();
var eventStreamSerdeProvider = (options) => new EventStreamMarshaller2(options);

// node_modules/@smithy/hash-blob-browser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/chunked-blob-reader/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
function blobReader(blob, onChunk, chunkSize = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("error", reject);
    fileReader.addEventListener("abort", reject);
    const size = blob.size;
    let totalBytesRead = 0;
    function read() {
      if (totalBytesRead >= size) {
        resolve();
        return;
      }
      fileReader.readAsArrayBuffer(blob.slice(totalBytesRead, Math.min(size, totalBytesRead + chunkSize)));
    }
    fileReader.addEventListener("load", (event) => {
      const result = event.target.result;
      onChunk(new Uint8Array(result));
      totalBytesRead += result.byteLength;
      read();
    });
    read();
  });
}

// node_modules/@smithy/hash-blob-browser/dist-es/index.js
var blobHasher = async function blobHasher2(hashCtor, blob) {
  const hash = new hashCtor();
  await blobReader(blob, (chunk) => {
    hash.update(chunk);
  });
  return hash.digest();
};

// node_modules/@smithy/invalid-dependency/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
init_checked_fetch();
init_modules_watch_stub();
var invalidProvider = (message) => () => Promise.reject(message);

// node_modules/@smithy/md5-js/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/md5-js/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 16;
var INIT = [1732584193, 4023233417, 2562383102, 271733878];

// node_modules/@smithy/md5-js/dist-es/index.js
var Md5 = class {
  constructor() {
    this.reset();
  }
  update(sourceData) {
    if (isEmptyData(sourceData)) {
      return;
    } else if (this.finished) {
      throw new Error("Attempted to update an already finished hash.");
    }
    const data = convertToBuffer(sourceData);
    let position = 0;
    let { byteLength } = data;
    this.bytesHashed += byteLength;
    while (byteLength > 0) {
      this.buffer.setUint8(this.bufferLength++, data[position++]);
      byteLength--;
      if (this.bufferLength === BLOCK_SIZE) {
        this.hashBuffer();
        this.bufferLength = 0;
      }
    }
  }
  async digest() {
    if (!this.finished) {
      const { buffer, bufferLength: undecoratedLength, bytesHashed } = this;
      const bitsHashed = bytesHashed * 8;
      buffer.setUint8(this.bufferLength++, 128);
      if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
        for (let i2 = this.bufferLength; i2 < BLOCK_SIZE; i2++) {
          buffer.setUint8(i2, 0);
        }
        this.hashBuffer();
        this.bufferLength = 0;
      }
      for (let i2 = this.bufferLength; i2 < BLOCK_SIZE - 8; i2++) {
        buffer.setUint8(i2, 0);
      }
      buffer.setUint32(BLOCK_SIZE - 8, bitsHashed >>> 0, true);
      buffer.setUint32(BLOCK_SIZE - 4, Math.floor(bitsHashed / 4294967296), true);
      this.hashBuffer();
      this.finished = true;
    }
    const out = new DataView(new ArrayBuffer(DIGEST_LENGTH));
    for (let i2 = 0; i2 < 4; i2++) {
      out.setUint32(i2 * 4, this.state[i2], true);
    }
    return new Uint8Array(out.buffer, out.byteOffset, out.byteLength);
  }
  hashBuffer() {
    const { buffer, state } = this;
    let a2 = state[0], b2 = state[1], c2 = state[2], d2 = state[3];
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(0, true), 7, 3614090360);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(4, true), 12, 3905402710);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(8, true), 17, 606105819);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(12, true), 22, 3250441966);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(16, true), 7, 4118548399);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(20, true), 12, 1200080426);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(24, true), 17, 2821735955);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(28, true), 22, 4249261313);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(32, true), 7, 1770035416);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(36, true), 12, 2336552879);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(40, true), 17, 4294925233);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(44, true), 22, 2304563134);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(48, true), 7, 1804603682);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(52, true), 12, 4254626195);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(56, true), 17, 2792965006);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(60, true), 22, 1236535329);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(4, true), 5, 4129170786);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(24, true), 9, 3225465664);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(44, true), 14, 643717713);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(0, true), 20, 3921069994);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(20, true), 5, 3593408605);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(40, true), 9, 38016083);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(60, true), 14, 3634488961);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(16, true), 20, 3889429448);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(36, true), 5, 568446438);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(56, true), 9, 3275163606);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(12, true), 14, 4107603335);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(32, true), 20, 1163531501);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(52, true), 5, 2850285829);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(8, true), 9, 4243563512);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(28, true), 14, 1735328473);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(48, true), 20, 2368359562);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(20, true), 4, 4294588738);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(32, true), 11, 2272392833);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(44, true), 16, 1839030562);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(56, true), 23, 4259657740);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(4, true), 4, 2763975236);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(16, true), 11, 1272893353);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(28, true), 16, 4139469664);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(40, true), 23, 3200236656);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(52, true), 4, 681279174);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(0, true), 11, 3936430074);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(12, true), 16, 3572445317);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(24, true), 23, 76029189);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(36, true), 4, 3654602809);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(48, true), 11, 3873151461);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(60, true), 16, 530742520);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(8, true), 23, 3299628645);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(0, true), 6, 4096336452);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(28, true), 10, 1126891415);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(56, true), 15, 2878612391);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(20, true), 21, 4237533241);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(48, true), 6, 1700485571);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(12, true), 10, 2399980690);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(40, true), 15, 4293915773);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(4, true), 21, 2240044497);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(32, true), 6, 1873313359);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(60, true), 10, 4264355552);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(24, true), 15, 2734768916);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(52, true), 21, 1309151649);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(16, true), 6, 4149444226);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(44, true), 10, 3174756917);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(8, true), 15, 718787259);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(36, true), 21, 3951481745);
    state[0] = a2 + state[0] & 4294967295;
    state[1] = b2 + state[1] & 4294967295;
    state[2] = c2 + state[2] & 4294967295;
    state[3] = d2 + state[3] & 4294967295;
  }
  reset() {
    this.state = Uint32Array.from(INIT);
    this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE));
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
  }
};
function cmn(q2, a2, b2, x2, s2, t2) {
  a2 = (a2 + q2 & 4294967295) + (x2 + t2 & 4294967295) & 4294967295;
  return (a2 << s2 | a2 >>> 32 - s2) + b2 & 4294967295;
}
function ff(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 & c2 | ~b2 & d2, a2, b2, x2, s2, t2);
}
function gg(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 & d2 | c2 & ~d2, a2, b2, x2, s2, t2);
}
function hh(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 ^ c2 ^ d2, a2, b2, x2, s2, t2);
}
function ii(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(c2 ^ (b2 | ~d2), a2, b2, x2, s2, t2);
}
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
function convertToBuffer(data) {
  if (typeof data === "string") {
    return fromUtf8(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}

// node_modules/@smithy/util-body-length-browser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
init_checked_fetch();
init_modules_watch_stub();
var TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
var calculateBodyLength = (body) => {
  if (typeof body === "string") {
    if (TEXT_ENCODER) {
      return TEXT_ENCODER.encode(body).byteLength;
    }
    let len = body.length;
    for (let i2 = len - 1; i2 >= 0; i2--) {
      const code = body.charCodeAt(i2);
      if (code > 127 && code <= 2047)
        len++;
      else if (code > 2047 && code <= 65535)
        len += 2;
      if (code >= 56320 && code <= 57343)
        i2--;
    }
    return len;
  } else if (typeof body.byteLength === "number") {
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  }
  throw new Error(`Body Length computation failed for ${body}`);
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
init_checked_fetch();
init_modules_watch_stub();
var signatureV4CrtContainer = {
  CrtSignerV4: null
};

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion = class {
  constructor(options) {
    this.sigv4Signer = new SignatureV4S3Express(options);
    this.signerOptions = options;
  }
  async sign(requestToSign, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }
  async signWithCredentials(requestToSign, credentials, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().signWithCredentials(requestToSign, credentials, options);
    }
    return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
  }
  async presign(originalRequest, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().presign(originalRequest, options);
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
  async presignWithCredentials(originalRequest, credentials, options = {}) {
    if (options.signingRegion === "*") {
      throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
    }
    return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner) {
      let CrtSignerV4 = null;
      try {
        CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
        if (typeof CrtSignerV4 !== "function")
          throw new Error();
      } catch (e2) {
        e2.message = `${e2.message}
Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`;
        throw e2;
      }
      this.sigv4aSigner = new CrtSignerV4({
        ...this.signerOptions,
        signingAlgorithm: 1
      });
    }
    return this.sigv4aSigner;
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/ruleset.js
init_checked_fetch();
init_modules_watch_stub();
var ce = "required";
var cf = "type";
var cg = "conditions";
var ch = "fn";
var ci = "argv";
var cj = "ref";
var ck = "assign";
var cl = "url";
var cm = "properties";
var cn = "backend";
var co = "authSchemes";
var cp = "disableDoubleEncoding";
var cq = "signingName";
var cr = "signingRegion";
var cs = "headers";
var ct = "signingRegionSet";
var a = false;
var b = true;
var c = "isSet";
var d = "booleanEquals";
var e = "error";
var f = "aws.partition";
var g = "stringEquals";
var h = "getAttr";
var i = "name";
var j = "substring";
var k = "bucketSuffix";
var l = "parseURL";
var m = "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}";
var n = "endpoint";
var o = "tree";
var p = "aws.isVirtualHostableS3Bucket";
var q = "{url#scheme}://{Bucket}.{url#authority}{url#path}";
var r = "not";
var s = "{url#scheme}://{url#authority}{url#path}";
var t = "hardwareType";
var u = "regionPrefix";
var v = "bucketAliasSuffix";
var w = "outpostId";
var x = "isValidHostLabel";
var y = "sigv4a";
var z = "s3-outposts";
var A = "s3";
var B = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}";
var C = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}";
var D = "https://{Bucket}.s3.{partitionResult#dnsSuffix}";
var E = "aws.parseArn";
var F = "bucketArn";
var G = "arnType";
var H = "";
var I = "s3-object-lambda";
var J = "accesspoint";
var K = "accessPointName";
var L = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}";
var M = "mrapPartition";
var N = "outpostType";
var O = "arnPrefix";
var P = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}";
var Q = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}";
var R = "https://s3.{partitionResult#dnsSuffix}";
var S = { [ce]: false, [cf]: "String" };
var T = { [ce]: true, "default": false, [cf]: "Boolean" };
var U = { [ce]: false, [cf]: "Boolean" };
var V = { [ch]: d, [ci]: [{ [cj]: "Accelerate" }, true] };
var W = { [ch]: d, [ci]: [{ [cj]: "UseFIPS" }, true] };
var X = { [ch]: d, [ci]: [{ [cj]: "UseDualStack" }, true] };
var Y = { [ch]: c, [ci]: [{ [cj]: "Endpoint" }] };
var Z = { [ch]: f, [ci]: [{ [cj]: "Region" }], [ck]: "partitionResult" };
var aa = { [ch]: g, [ci]: [{ [ch]: h, [ci]: [{ [cj]: "partitionResult" }, i] }, "aws-cn"] };
var ab = { [ch]: c, [ci]: [{ [cj]: "Bucket" }] };
var ac = { [cj]: "Bucket" };
var ad = { [ch]: l, [ci]: [{ [cj]: "Endpoint" }], [ck]: "url" };
var ae = { [ch]: d, [ci]: [{ [ch]: h, [ci]: [{ [cj]: "url" }, "isIp"] }, true] };
var af = { [cj]: "url" };
var ag = { [ch]: "uriEncode", [ci]: [ac], [ck]: "uri_encoded_bucket" };
var ah = { [cn]: "S3Express", [co]: [{ [cp]: true, [i]: "sigv4", [cq]: "s3express", [cr]: "{Region}" }] };
var ai = {};
var aj = { [ch]: p, [ci]: [ac, false] };
var ak = { [e]: "S3Express bucket name is not a valid virtual hostable name.", [cf]: e };
var al = { [cn]: "S3Express", [co]: [{ [cp]: true, [i]: "sigv4-s3express", [cq]: "s3express", [cr]: "{Region}" }] };
var am = { [ch]: c, [ci]: [{ [cj]: "UseS3ExpressControlEndpoint" }] };
var an = { [ch]: d, [ci]: [{ [cj]: "UseS3ExpressControlEndpoint" }, true] };
var ao = { [ch]: r, [ci]: [Y] };
var ap = { [e]: "Unrecognized S3Express bucket name format.", [cf]: e };
var aq = { [ch]: r, [ci]: [ab] };
var ar = { [cj]: t };
var as = { [cg]: [ao], [e]: "Expected a endpoint to be specified but no endpoint was found", [cf]: e };
var at = { [co]: [{ [cp]: true, [i]: y, [cq]: z, [ct]: ["*"] }, { [cp]: true, [i]: "sigv4", [cq]: z, [cr]: "{Region}" }] };
var au = { [ch]: d, [ci]: [{ [cj]: "ForcePathStyle" }, false] };
var av = { [cj]: "ForcePathStyle" };
var aw = { [ch]: d, [ci]: [{ [cj]: "Accelerate" }, false] };
var ax = { [ch]: g, [ci]: [{ [cj]: "Region" }, "aws-global"] };
var ay = { [co]: [{ [cp]: true, [i]: "sigv4", [cq]: A, [cr]: "us-east-1" }] };
var az = { [ch]: r, [ci]: [ax] };
var aA = { [ch]: d, [ci]: [{ [cj]: "UseGlobalEndpoint" }, true] };
var aB = { [cl]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cm]: { [co]: [{ [cp]: true, [i]: "sigv4", [cq]: A, [cr]: "{Region}" }] }, [cs]: {} };
var aC = { [co]: [{ [cp]: true, [i]: "sigv4", [cq]: A, [cr]: "{Region}" }] };
var aD = { [ch]: d, [ci]: [{ [cj]: "UseGlobalEndpoint" }, false] };
var aE = { [ch]: d, [ci]: [{ [cj]: "UseDualStack" }, false] };
var aF = { [cl]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var aG = { [ch]: d, [ci]: [{ [cj]: "UseFIPS" }, false] };
var aH = { [cl]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var aI = { [cl]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var aJ = { [ch]: d, [ci]: [{ [ch]: h, [ci]: [af, "isIp"] }, false] };
var aK = { [cl]: B, [cm]: aC, [cs]: {} };
var aL = { [cl]: q, [cm]: aC, [cs]: {} };
var aM = { [n]: aL, [cf]: n };
var aN = { [cl]: C, [cm]: aC, [cs]: {} };
var aO = { [cl]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var aP = { [e]: "Invalid region: region was not a valid DNS name.", [cf]: e };
var aQ = { [cj]: F };
var aR = { [cj]: G };
var aS = { [ch]: h, [ci]: [aQ, "service"] };
var aT = { [cj]: K };
var aU = { [cg]: [X], [e]: "S3 Object Lambda does not support Dual-stack", [cf]: e };
var aV = { [cg]: [V], [e]: "S3 Object Lambda does not support S3 Accelerate", [cf]: e };
var aW = { [cg]: [{ [ch]: c, [ci]: [{ [cj]: "DisableAccessPoints" }] }, { [ch]: d, [ci]: [{ [cj]: "DisableAccessPoints" }, true] }], [e]: "Access points are not supported for this operation", [cf]: e };
var aX = { [cg]: [{ [ch]: c, [ci]: [{ [cj]: "UseArnRegion" }] }, { [ch]: d, [ci]: [{ [cj]: "UseArnRegion" }, false] }, { [ch]: r, [ci]: [{ [ch]: g, [ci]: [{ [ch]: h, [ci]: [aQ, "region"] }, "{Region}"] }] }], [e]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`", [cf]: e };
var aY = { [ch]: h, [ci]: [{ [cj]: "bucketPartition" }, i] };
var aZ = { [ch]: h, [ci]: [aQ, "accountId"] };
var ba = { [co]: [{ [cp]: true, [i]: "sigv4", [cq]: I, [cr]: "{bucketArn#region}" }] };
var bb = { [e]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`", [cf]: e };
var bc = { [e]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`", [cf]: e };
var bd = { [e]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [cf]: e };
var be = { [e]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`", [cf]: e };
var bf = { [e]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [cf]: e };
var bg = { [e]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided", [cf]: e };
var bh = { [co]: [{ [cp]: true, [i]: "sigv4", [cq]: A, [cr]: "{bucketArn#region}" }] };
var bi = { [co]: [{ [cp]: true, [i]: y, [cq]: z, [ct]: ["*"] }, { [cp]: true, [i]: "sigv4", [cq]: z, [cr]: "{bucketArn#region}" }] };
var bj = { [ch]: E, [ci]: [ac] };
var bk = { [cl]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: aC, [cs]: {} };
var bl = { [cl]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: aC, [cs]: {} };
var bm = { [cl]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: aC, [cs]: {} };
var bn = { [cl]: P, [cm]: aC, [cs]: {} };
var bo = { [cl]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: aC, [cs]: {} };
var bp = { [cj]: "UseObjectLambdaEndpoint" };
var bq = { [co]: [{ [cp]: true, [i]: "sigv4", [cq]: I, [cr]: "{Region}" }] };
var br = { [cl]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var bs = { [cl]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var bt = { [cl]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var bu = { [cl]: s, [cm]: aC, [cs]: {} };
var bv = { [cl]: "https://s3.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var bw = [{ [cj]: "Region" }];
var bx = [{ [cj]: "Endpoint" }];
var by = [ac];
var bz = [X];
var bA = [V];
var bB = [Y, ad];
var bC = [{ [ch]: c, [ci]: [{ [cj]: "DisableS3ExpressSessionAuth" }] }, { [ch]: d, [ci]: [{ [cj]: "DisableS3ExpressSessionAuth" }, true] }];
var bD = [ae];
var bE = [ag];
var bF = [aj];
var bG = [W];
var bH = [{ [ch]: j, [ci]: [ac, 6, 14, true], [ck]: "s3expressAvailabilityZoneId" }, { [ch]: j, [ci]: [ac, 14, 16, true], [ck]: "s3expressAvailabilityZoneDelim" }, { [ch]: g, [ci]: [{ [cj]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bI = [{ [cg]: [W], [n]: { [cl]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cm]: ah, [cs]: {} }, [cf]: n }, { [n]: { [cl]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cm]: ah, [cs]: {} }, [cf]: n }];
var bJ = [{ [ch]: j, [ci]: [ac, 6, 15, true], [ck]: "s3expressAvailabilityZoneId" }, { [ch]: j, [ci]: [ac, 15, 17, true], [ck]: "s3expressAvailabilityZoneDelim" }, { [ch]: g, [ci]: [{ [cj]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bK = [{ [cg]: [W], [n]: { [cl]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cm]: al, [cs]: {} }, [cf]: n }, { [n]: { [cl]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cm]: al, [cs]: {} }, [cf]: n }];
var bL = [ab];
var bM = [{ [ch]: x, [ci]: [{ [cj]: w }, false] }];
var bN = [{ [ch]: g, [ci]: [{ [cj]: u }, "beta"] }];
var bO = ["*"];
var bP = [Z];
var bQ = [{ [ch]: x, [ci]: [{ [cj]: "Region" }, false] }];
var bR = [{ [ch]: g, [ci]: [{ [cj]: "Region" }, "us-east-1"] }];
var bS = [{ [ch]: g, [ci]: [aR, J] }];
var bT = [{ [ch]: h, [ci]: [aQ, "resourceId[1]"], [ck]: K }, { [ch]: r, [ci]: [{ [ch]: g, [ci]: [aT, H] }] }];
var bU = [aQ, "resourceId[1]"];
var bV = [{ [ch]: r, [ci]: [{ [ch]: g, [ci]: [{ [ch]: h, [ci]: [aQ, "region"] }, H] }] }];
var bW = [{ [ch]: r, [ci]: [{ [ch]: c, [ci]: [{ [ch]: h, [ci]: [aQ, "resourceId[2]"] }] }] }];
var bX = [aQ, "resourceId[2]"];
var bY = [{ [ch]: f, [ci]: [{ [ch]: h, [ci]: [aQ, "region"] }], [ck]: "bucketPartition" }];
var bZ = [{ [ch]: g, [ci]: [aY, { [ch]: h, [ci]: [{ [cj]: "partitionResult" }, i] }] }];
var ca = [{ [ch]: x, [ci]: [{ [ch]: h, [ci]: [aQ, "region"] }, true] }];
var cb = [{ [ch]: x, [ci]: [aZ, false] }];
var cc = [{ [ch]: x, [ci]: [aT, false] }];
var cd = [{ [ch]: x, [ci]: [{ [cj]: "Region" }, true] }];
var _data = { version: "1.0", parameters: { Bucket: S, Region: S, UseFIPS: T, UseDualStack: T, Endpoint: S, ForcePathStyle: T, Accelerate: T, UseGlobalEndpoint: T, UseObjectLambdaEndpoint: U, Key: S, Prefix: S, CopySource: S, DisableAccessPoints: U, DisableMultiRegionAccessPoints: T, UseArnRegion: U, UseS3ExpressControlEndpoint: U, DisableS3ExpressSessionAuth: U }, rules: [{ [cg]: [{ [ch]: c, [ci]: bw }], rules: [{ [cg]: [V, W], error: "Accelerate cannot be used with FIPS", [cf]: e }, { [cg]: [X, Y], error: "Cannot set dual-stack in combination with a custom endpoint.", [cf]: e }, { [cg]: [Y, W], error: "A custom endpoint cannot be combined with FIPS", [cf]: e }, { [cg]: [Y, V], error: "A custom endpoint cannot be combined with S3 Accelerate", [cf]: e }, { [cg]: [W, Z, aa], error: "Partition does not support FIPS", [cf]: e }, { [cg]: [ab, { [ch]: j, [ci]: [ac, 0, 6, b], [ck]: k }, { [ch]: g, [ci]: [{ [cj]: k }, "--x-s3"] }], rules: [{ [cg]: bz, error: "S3Express does not support Dual-stack.", [cf]: e }, { [cg]: bA, error: "S3Express does not support S3 Accelerate.", [cf]: e }, { [cg]: bB, rules: [{ [cg]: bC, rules: [{ [cg]: bD, rules: [{ [cg]: bE, rules: [{ endpoint: { [cl]: m, [cm]: ah, [cs]: ai }, [cf]: n }], [cf]: o }], [cf]: o }, { [cg]: bF, rules: [{ endpoint: { [cl]: q, [cm]: ah, [cs]: ai }, [cf]: n }], [cf]: o }, ak], [cf]: o }, { [cg]: bD, rules: [{ [cg]: bE, rules: [{ endpoint: { [cl]: m, [cm]: al, [cs]: ai }, [cf]: n }], [cf]: o }], [cf]: o }, { [cg]: bF, rules: [{ endpoint: { [cl]: q, [cm]: al, [cs]: ai }, [cf]: n }], [cf]: o }, ak], [cf]: o }, { [cg]: [am, an], rules: [{ [cg]: [ag, ao], rules: [{ [cg]: bG, endpoint: { [cl]: "https://s3express-control-fips.{Region}.amazonaws.com/{uri_encoded_bucket}", [cm]: ah, [cs]: ai }, [cf]: n }, { endpoint: { [cl]: "https://s3express-control.{Region}.amazonaws.com/{uri_encoded_bucket}", [cm]: ah, [cs]: ai }, [cf]: n }], [cf]: o }], [cf]: o }, { [cg]: bF, rules: [{ [cg]: bC, rules: [{ [cg]: bH, rules: bI, [cf]: o }, { [cg]: bJ, rules: bI, [cf]: o }, ap], [cf]: o }, { [cg]: bH, rules: bK, [cf]: o }, { [cg]: bJ, rules: bK, [cf]: o }, ap], [cf]: o }, ak], [cf]: o }, { [cg]: [aq, am, an], rules: [{ [cg]: bB, endpoint: { [cl]: s, [cm]: ah, [cs]: ai }, [cf]: n }, { [cg]: bG, endpoint: { [cl]: "https://s3express-control-fips.{Region}.amazonaws.com", [cm]: ah, [cs]: ai }, [cf]: n }, { endpoint: { [cl]: "https://s3express-control.{Region}.amazonaws.com", [cm]: ah, [cs]: ai }, [cf]: n }], [cf]: o }, { [cg]: [ab, { [ch]: j, [ci]: [ac, 49, 50, b], [ck]: t }, { [ch]: j, [ci]: [ac, 8, 12, b], [ck]: u }, { [ch]: j, [ci]: [ac, 0, 7, b], [ck]: v }, { [ch]: j, [ci]: [ac, 32, 49, b], [ck]: w }, { [ch]: f, [ci]: bw, [ck]: "regionPartition" }, { [ch]: g, [ci]: [{ [cj]: v }, "--op-s3"] }], rules: [{ [cg]: bM, rules: [{ [cg]: [{ [ch]: g, [ci]: [ar, "e"] }], rules: [{ [cg]: bN, rules: [as, { [cg]: bB, endpoint: { [cl]: "https://{Bucket}.ec2.{url#authority}", [cm]: at, [cs]: ai }, [cf]: n }], [cf]: o }, { endpoint: { [cl]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cm]: at, [cs]: ai }, [cf]: n }], [cf]: o }, { [cg]: [{ [ch]: g, [ci]: [ar, "o"] }], rules: [{ [cg]: bN, rules: [as, { [cg]: bB, endpoint: { [cl]: "https://{Bucket}.op-{outpostId}.{url#authority}", [cm]: at, [cs]: ai }, [cf]: n }], [cf]: o }, { endpoint: { [cl]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cm]: at, [cs]: ai }, [cf]: n }], [cf]: o }, { error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"', [cf]: e }], [cf]: o }, { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [cf]: e }], [cf]: o }, { [cg]: bL, rules: [{ [cg]: [Y, { [ch]: r, [ci]: [{ [ch]: c, [ci]: [{ [ch]: l, [ci]: bx }] }] }], error: "Custom endpoint `{Endpoint}` was not a valid URI", [cf]: e }, { [cg]: [au, aj], rules: [{ [cg]: bP, rules: [{ [cg]: bQ, rules: [{ [cg]: [V, aa], error: "S3 Accelerate cannot be used in this region", [cf]: e }, { [cg]: [X, W, aw, ao, ax], endpoint: { [cl]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [X, W, aw, ao, az, aA], rules: [{ endpoint: aB, [cf]: n }], [cf]: o }, { [cg]: [X, W, aw, ao, az, aD], endpoint: aB, [cf]: n }, { [cg]: [aE, W, aw, ao, ax], endpoint: { [cl]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aE, W, aw, ao, az, aA], rules: [{ endpoint: aF, [cf]: n }], [cf]: o }, { [cg]: [aE, W, aw, ao, az, aD], endpoint: aF, [cf]: n }, { [cg]: [X, aG, V, ao, ax], endpoint: { [cl]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [X, aG, V, ao, az, aA], rules: [{ endpoint: aH, [cf]: n }], [cf]: o }, { [cg]: [X, aG, V, ao, az, aD], endpoint: aH, [cf]: n }, { [cg]: [X, aG, aw, ao, ax], endpoint: { [cl]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [X, aG, aw, ao, az, aA], rules: [{ endpoint: aI, [cf]: n }], [cf]: o }, { [cg]: [X, aG, aw, ao, az, aD], endpoint: aI, [cf]: n }, { [cg]: [aE, aG, aw, Y, ad, ae, ax], endpoint: { [cl]: B, [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aE, aG, aw, Y, ad, aJ, ax], endpoint: { [cl]: q, [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aE, aG, aw, Y, ad, ae, az, aA], rules: [{ [cg]: bR, endpoint: aK, [cf]: n }, { endpoint: aK, [cf]: n }], [cf]: o }, { [cg]: [aE, aG, aw, Y, ad, aJ, az, aA], rules: [{ [cg]: bR, endpoint: aL, [cf]: n }, aM], [cf]: o }, { [cg]: [aE, aG, aw, Y, ad, ae, az, aD], endpoint: aK, [cf]: n }, { [cg]: [aE, aG, aw, Y, ad, aJ, az, aD], endpoint: aL, [cf]: n }, { [cg]: [aE, aG, V, ao, ax], endpoint: { [cl]: C, [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aE, aG, V, ao, az, aA], rules: [{ [cg]: bR, endpoint: aN, [cf]: n }, { endpoint: aN, [cf]: n }], [cf]: o }, { [cg]: [aE, aG, V, ao, az, aD], endpoint: aN, [cf]: n }, { [cg]: [aE, aG, aw, ao, ax], endpoint: { [cl]: D, [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aE, aG, aw, ao, az, aA], rules: [{ [cg]: bR, endpoint: { [cl]: D, [cm]: aC, [cs]: ai }, [cf]: n }, { endpoint: aO, [cf]: n }], [cf]: o }, { [cg]: [aE, aG, aw, ao, az, aD], endpoint: aO, [cf]: n }], [cf]: o }, aP], [cf]: o }], [cf]: o }, { [cg]: [Y, ad, { [ch]: g, [ci]: [{ [ch]: h, [ci]: [af, "scheme"] }, "http"] }, { [ch]: p, [ci]: [ac, b] }, au, aG, aE, aw], rules: [{ [cg]: bP, rules: [{ [cg]: bQ, rules: [aM], [cf]: o }, aP], [cf]: o }], [cf]: o }, { [cg]: [au, { [ch]: E, [ci]: by, [ck]: F }], rules: [{ [cg]: [{ [ch]: h, [ci]: [aQ, "resourceId[0]"], [ck]: G }, { [ch]: r, [ci]: [{ [ch]: g, [ci]: [aR, H] }] }], rules: [{ [cg]: [{ [ch]: g, [ci]: [aS, I] }], rules: [{ [cg]: bS, rules: [{ [cg]: bT, rules: [aU, aV, { [cg]: bV, rules: [aW, { [cg]: bW, rules: [aX, { [cg]: bY, rules: [{ [cg]: bP, rules: [{ [cg]: bZ, rules: [{ [cg]: ca, rules: [{ [cg]: [{ [ch]: g, [ci]: [aZ, H] }], error: "Invalid ARN: Missing account id", [cf]: e }, { [cg]: cb, rules: [{ [cg]: cc, rules: [{ [cg]: bB, endpoint: { [cl]: L, [cm]: ba, [cs]: ai }, [cf]: n }, { [cg]: bG, endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: ba, [cs]: ai }, [cf]: n }, { endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: ba, [cs]: ai }, [cf]: n }], [cf]: o }, bb], [cf]: o }, bc], [cf]: o }, bd], [cf]: o }, be], [cf]: o }], [cf]: o }], [cf]: o }, bf], [cf]: o }, { error: "Invalid ARN: bucket ARN is missing a region", [cf]: e }], [cf]: o }, bg], [cf]: o }, { error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`", [cf]: e }], [cf]: o }, { [cg]: bS, rules: [{ [cg]: bT, rules: [{ [cg]: bV, rules: [{ [cg]: bS, rules: [{ [cg]: bV, rules: [aW, { [cg]: bW, rules: [aX, { [cg]: bY, rules: [{ [cg]: bP, rules: [{ [cg]: [{ [ch]: g, [ci]: [aY, "{partitionResult#name}"] }], rules: [{ [cg]: ca, rules: [{ [cg]: [{ [ch]: g, [ci]: [aS, A] }], rules: [{ [cg]: cb, rules: [{ [cg]: cc, rules: [{ [cg]: bA, error: "Access Points do not support S3 Accelerate", [cf]: e }, { [cg]: [W, X], endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bh, [cs]: ai }, [cf]: n }, { [cg]: [W, aE], endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bh, [cs]: ai }, [cf]: n }, { [cg]: [aG, X], endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bh, [cs]: ai }, [cf]: n }, { [cg]: [aG, aE, Y, ad], endpoint: { [cl]: L, [cm]: bh, [cs]: ai }, [cf]: n }, { [cg]: [aG, aE], endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bh, [cs]: ai }, [cf]: n }], [cf]: o }, bb], [cf]: o }, bc], [cf]: o }, { error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}", [cf]: e }], [cf]: o }, bd], [cf]: o }, be], [cf]: o }], [cf]: o }], [cf]: o }, bf], [cf]: o }], [cf]: o }], [cf]: o }, { [cg]: [{ [ch]: x, [ci]: [aT, b] }], rules: [{ [cg]: bz, error: "S3 MRAP does not support dual-stack", [cf]: e }, { [cg]: bG, error: "S3 MRAP does not support FIPS", [cf]: e }, { [cg]: bA, error: "S3 MRAP does not support S3 Accelerate", [cf]: e }, { [cg]: [{ [ch]: d, [ci]: [{ [cj]: "DisableMultiRegionAccessPoints" }, b] }], error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.", [cf]: e }, { [cg]: [{ [ch]: f, [ci]: bw, [ck]: M }], rules: [{ [cg]: [{ [ch]: g, [ci]: [{ [ch]: h, [ci]: [{ [cj]: M }, i] }, { [ch]: h, [ci]: [aQ, "partition"] }] }], rules: [{ endpoint: { [cl]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}", [cm]: { [co]: [{ [cp]: b, name: y, [cq]: A, [ct]: bO }] }, [cs]: ai }, [cf]: n }], [cf]: o }, { error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`", [cf]: e }], [cf]: o }], [cf]: o }, { error: "Invalid Access Point Name", [cf]: e }], [cf]: o }, bg], [cf]: o }, { [cg]: [{ [ch]: g, [ci]: [aS, z] }], rules: [{ [cg]: bz, error: "S3 Outposts does not support Dual-stack", [cf]: e }, { [cg]: bG, error: "S3 Outposts does not support FIPS", [cf]: e }, { [cg]: bA, error: "S3 Outposts does not support S3 Accelerate", [cf]: e }, { [cg]: [{ [ch]: c, [ci]: [{ [ch]: h, [ci]: [aQ, "resourceId[4]"] }] }], error: "Invalid Arn: Outpost Access Point ARN contains sub resources", [cf]: e }, { [cg]: [{ [ch]: h, [ci]: bU, [ck]: w }], rules: [{ [cg]: bM, rules: [aX, { [cg]: bY, rules: [{ [cg]: bP, rules: [{ [cg]: bZ, rules: [{ [cg]: ca, rules: [{ [cg]: cb, rules: [{ [cg]: [{ [ch]: h, [ci]: bX, [ck]: N }], rules: [{ [cg]: [{ [ch]: h, [ci]: [aQ, "resourceId[3]"], [ck]: K }], rules: [{ [cg]: [{ [ch]: g, [ci]: [{ [cj]: N }, J] }], rules: [{ [cg]: bB, endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}", [cm]: bi, [cs]: ai }, [cf]: n }, { endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bi, [cs]: ai }, [cf]: n }], [cf]: o }, { error: "Expected an outpost type `accesspoint`, found {outpostType}", [cf]: e }], [cf]: o }, { error: "Invalid ARN: expected an access point name", [cf]: e }], [cf]: o }, { error: "Invalid ARN: Expected a 4-component resource", [cf]: e }], [cf]: o }, bc], [cf]: o }, bd], [cf]: o }, be], [cf]: o }], [cf]: o }], [cf]: o }, { error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`", [cf]: e }], [cf]: o }, { error: "Invalid ARN: The Outpost Id was not set", [cf]: e }], [cf]: o }, { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [cf]: e }], [cf]: o }, { error: "Invalid ARN: No ARN type specified", [cf]: e }], [cf]: o }, { [cg]: [{ [ch]: j, [ci]: [ac, 0, 4, a], [ck]: O }, { [ch]: g, [ci]: [{ [cj]: O }, "arn:"] }, { [ch]: r, [ci]: [{ [ch]: c, [ci]: [bj] }] }], error: "Invalid ARN: `{Bucket}` was not a valid ARN", [cf]: e }, { [cg]: [{ [ch]: d, [ci]: [av, b] }, bj], error: "Path-style addressing cannot be used with ARN buckets", [cf]: e }, { [cg]: bE, rules: [{ [cg]: bP, rules: [{ [cg]: [aw], rules: [{ [cg]: [X, ao, W, ax], endpoint: { [cl]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [X, ao, W, az, aA], rules: [{ endpoint: bk, [cf]: n }], [cf]: o }, { [cg]: [X, ao, W, az, aD], endpoint: bk, [cf]: n }, { [cg]: [aE, ao, W, ax], endpoint: { [cl]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aE, ao, W, az, aA], rules: [{ endpoint: bl, [cf]: n }], [cf]: o }, { [cg]: [aE, ao, W, az, aD], endpoint: bl, [cf]: n }, { [cg]: [X, ao, aG, ax], endpoint: { [cl]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [X, ao, aG, az, aA], rules: [{ endpoint: bm, [cf]: n }], [cf]: o }, { [cg]: [X, ao, aG, az, aD], endpoint: bm, [cf]: n }, { [cg]: [aE, Y, ad, aG, ax], endpoint: { [cl]: P, [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aE, Y, ad, aG, az, aA], rules: [{ [cg]: bR, endpoint: bn, [cf]: n }, { endpoint: bn, [cf]: n }], [cf]: o }, { [cg]: [aE, Y, ad, aG, az, aD], endpoint: bn, [cf]: n }, { [cg]: [aE, ao, aG, ax], endpoint: { [cl]: Q, [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aE, ao, aG, az, aA], rules: [{ [cg]: bR, endpoint: { [cl]: Q, [cm]: aC, [cs]: ai }, [cf]: n }, { endpoint: bo, [cf]: n }], [cf]: o }, { [cg]: [aE, ao, aG, az, aD], endpoint: bo, [cf]: n }], [cf]: o }, { error: "Path-style addressing cannot be used with S3 Accelerate", [cf]: e }], [cf]: o }], [cf]: o }], [cf]: o }, { [cg]: [{ [ch]: c, [ci]: [bp] }, { [ch]: d, [ci]: [bp, b] }], rules: [{ [cg]: bP, rules: [{ [cg]: cd, rules: [aU, aV, { [cg]: bB, endpoint: { [cl]: s, [cm]: bq, [cs]: ai }, [cf]: n }, { [cg]: bG, endpoint: { [cl]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", [cm]: bq, [cs]: ai }, [cf]: n }, { endpoint: { [cl]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", [cm]: bq, [cs]: ai }, [cf]: n }], [cf]: o }, aP], [cf]: o }], [cf]: o }, { [cg]: [aq], rules: [{ [cg]: bP, rules: [{ [cg]: cd, rules: [{ [cg]: [W, X, ao, ax], endpoint: { [cl]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [W, X, ao, az, aA], rules: [{ endpoint: br, [cf]: n }], [cf]: o }, { [cg]: [W, X, ao, az, aD], endpoint: br, [cf]: n }, { [cg]: [W, aE, ao, ax], endpoint: { [cl]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [W, aE, ao, az, aA], rules: [{ endpoint: bs, [cf]: n }], [cf]: o }, { [cg]: [W, aE, ao, az, aD], endpoint: bs, [cf]: n }, { [cg]: [aG, X, ao, ax], endpoint: { [cl]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aG, X, ao, az, aA], rules: [{ endpoint: bt, [cf]: n }], [cf]: o }, { [cg]: [aG, X, ao, az, aD], endpoint: bt, [cf]: n }, { [cg]: [aG, aE, Y, ad, ax], endpoint: { [cl]: s, [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aG, aE, Y, ad, az, aA], rules: [{ [cg]: bR, endpoint: bu, [cf]: n }, { endpoint: bu, [cf]: n }], [cf]: o }, { [cg]: [aG, aE, Y, ad, az, aD], endpoint: bu, [cf]: n }, { [cg]: [aG, aE, ao, ax], endpoint: { [cl]: R, [cm]: ay, [cs]: ai }, [cf]: n }, { [cg]: [aG, aE, ao, az, aA], rules: [{ [cg]: bR, endpoint: { [cl]: R, [cm]: aC, [cs]: ai }, [cf]: n }, { endpoint: bv, [cf]: n }], [cf]: o }, { [cg]: [aG, aE, ao, az, aD], endpoint: bv, [cf]: n }], [cf]: o }, aP], [cf]: o }], [cf]: o }], [cf]: o }, { error: "A region must be set when sending requests to S3.", [cf]: e }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver = (endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context.logger
  });
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = (config) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    getAwsChunkedEncodingStream: config?.getAwsChunkedEncodingStream ?? getAwsChunkedEncodingStream,
    logger: config?.logger ?? new NoOpLogger(),
    sdkStreamMixin: config?.sdkStreamMixin ?? sdkStreamMixin,
    serviceId: config?.serviceId ?? "S3",
    signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
    signingEscapePath: config?.signingEscapePath ?? false,
    urlParser: config?.urlParser ?? parseUrl,
    useArnRegion: config?.useArnRegion ?? false,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8
  };
};

// node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
init_checked_fetch();
init_modules_watch_stub();
var import_bowser2 = __toESM(require_es5());

// node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

// node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(async () => {
  const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
  switch (mode?.toLowerCase()) {
    case "auto":
      return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy":
      return Promise.resolve(mode?.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
  }
});
var isMobileBrowser = () => {
  const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser2.default.parse(window.navigator.userAgent) : void 0;
  const platform = parsedUA?.platform?.type;
  return platform === "tablet" || platform === "mobile";
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.browser.js
var getRuntimeConfig2 = (config) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    md5: config?.md5 ?? Md5,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha1: config?.sha1 ?? import_sha1_browser.Sha1,
    sha256: config?.sha256 ?? import_sha256_browser.Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? blobHasher,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
init_checked_fetch();
init_modules_watch_stub();
var getAwsRegionExtensionConfiguration = (runtimeConfig) => {
  let runtimeConfigRegion = async () => {
    if (runtimeConfig.region === void 0) {
      throw new Error("Region is missing from runtimeConfig");
    }
    const region = runtimeConfig.region;
    if (typeof region === "string") {
      return region;
    }
    return region();
  };
  return {
    setRegion(region) {
      runtimeConfigRegion = region;
    },
    region() {
      return runtimeConfigRegion;
    }
  };
};
var resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
  return {
    region: awsRegionExtensionConfiguration.region()
  };
};

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
var asPartial = (t2) => t2;
var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
  const extensionConfiguration = {
    ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
    ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
    ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig))
  };
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return {
    ...runtimeConfig,
    ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
    ...resolveHttpHandlerRuntimeConfig(extensionConfiguration)
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
var S3Client = class extends Client {
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig2(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveS3Config(_config_6, { session: [() => this, CreateSessionCommand] });
    const _config_8 = resolveUserAgentConfig(_config_7);
    const _config_9 = resolveEventStreamSerdeConfig(_config_8);
    const _config_10 = resolveRuntimeExtensions(_config_9, configuration?.extensions || []);
    super(_config_10);
    this.config = _config_10;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
    this.middlewareStack.use(getRegionRedirectMiddlewarePlugin(this.config));
    this.middlewareStack.use(getS3ExpressPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/middleware-ssec/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
function ssecMiddleware(options) {
  return (next) => async (args) => {
    const input = { ...args.input };
    const properties = [
      {
        target: "SSECustomerKey",
        hash: "SSECustomerKeyMD5"
      },
      {
        target: "CopySourceSSECustomerKey",
        hash: "CopySourceSSECustomerKeyMD5"
      }
    ];
    for (const prop of properties) {
      const value = input[prop.target];
      if (value) {
        let valueForHash;
        if (typeof value === "string") {
          if (isValidBase64EncodedSSECustomerKey(value, options)) {
            valueForHash = options.base64Decoder(value);
          } else {
            valueForHash = options.utf8Decoder(value);
            input[prop.target] = options.base64Encoder(valueForHash);
          }
        } else {
          valueForHash = ArrayBuffer.isView(value) ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength) : new Uint8Array(value);
          input[prop.target] = options.base64Encoder(valueForHash);
        }
        const hash = new options.md5();
        hash.update(valueForHash);
        input[prop.hash] = options.base64Encoder(await hash.digest());
      }
    }
    return next({
      ...args,
      input
    });
  };
}
var ssecMiddlewareOptions = {
  name: "ssecMiddleware",
  step: "initialize",
  tags: ["SSE"],
  override: true
};
var getSsecPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.add(ssecMiddleware(config), ssecMiddlewareOptions);
  }
});
function isValidBase64EncodedSSECustomerKey(str, options) {
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  if (!base64Regex.test(str))
    return false;
  try {
    const decodedBytes = options.base64Decoder(str);
    return decodedBytes.length === 32;
  } catch {
    return false;
  }
}

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var ChecksumAlgorithm;
(function(ChecksumAlgorithm2) {
  ChecksumAlgorithm2["MD5"] = "MD5";
  ChecksumAlgorithm2["CRC32"] = "CRC32";
  ChecksumAlgorithm2["CRC32C"] = "CRC32C";
  ChecksumAlgorithm2["SHA1"] = "SHA1";
  ChecksumAlgorithm2["SHA256"] = "SHA256";
})(ChecksumAlgorithm || (ChecksumAlgorithm = {}));
var ChecksumLocation;
(function(ChecksumLocation2) {
  ChecksumLocation2["HEADER"] = "header";
  ChecksumLocation2["TRAILER"] = "trailer";
})(ChecksumLocation || (ChecksumLocation = {}));
var DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.MD5;
var S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.CRC32;

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmForRequest.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/types.js
init_checked_fetch();
init_modules_watch_stub();
var CLIENT_SUPPORTED_ALGORITHMS = [
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.SHA256
];
var PRIORITY_ORDER_ALGORITHMS = [
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.SHA256
];

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmForRequest.js
var getChecksumAlgorithmForRequest = (input, { requestChecksumRequired, requestAlgorithmMember }, isS3Express) => {
  const defaultAlgorithm = isS3Express ? S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM : DEFAULT_CHECKSUM_ALGORITHM;
  if (!requestAlgorithmMember || !input[requestAlgorithmMember]) {
    return requestChecksumRequired ? defaultAlgorithm : void 0;
  }
  const checksumAlgorithm = input[requestAlgorithmMember];
  if (!CLIENT_SUPPORTED_ALGORITHMS.includes(checksumAlgorithm)) {
    throw new Error(`The checksum algorithm "${checksumAlgorithm}" is not supported by the client. Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`);
  }
  return checksumAlgorithm;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumLocationName.js
init_checked_fetch();
init_modules_watch_stub();
var getChecksumLocationName = (algorithm) => algorithm === ChecksumAlgorithm.MD5 ? "content-md5" : `x-amz-checksum-${algorithm.toLowerCase()}`;

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeader.js
init_checked_fetch();
init_modules_watch_stub();
var hasHeader2 = (header, headers) => {
  const soughtHeader = header.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isStreaming.js
init_checked_fetch();
init_modules_watch_stub();
var isStreaming = (body) => body !== void 0 && typeof body !== "string" && !ArrayBuffer.isView(body) && !isArrayBuffer(body);

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/selectChecksumAlgorithmFunction.js
init_checked_fetch();
init_modules_watch_stub();
var import_crc323 = __toESM(require_build7());
var import_crc32c = __toESM(require_build8());
var selectChecksumAlgorithmFunction = (checksumAlgorithm, config) => ({
  [ChecksumAlgorithm.MD5]: config.md5,
  [ChecksumAlgorithm.CRC32]: import_crc323.AwsCrc32,
  [ChecksumAlgorithm.CRC32C]: import_crc32c.AwsCrc32c,
  [ChecksumAlgorithm.SHA1]: config.sha1,
  [ChecksumAlgorithm.SHA256]: config.sha256
})[checksumAlgorithm];

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringHasher.js
init_checked_fetch();
init_modules_watch_stub();
var stringHasher = (checksumAlgorithmFn, body) => {
  const hash = new checksumAlgorithmFn();
  hash.update(toUint8Array(body || ""));
  return hash.digest();
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
var flexibleChecksumsMiddlewareOptions = {
  name: "flexibleChecksumsMiddleware",
  step: "build",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const { request } = args;
  const { body: requestBody, headers } = request;
  const { base64Encoder, streamHasher } = config;
  const { input, requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;
  const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
    requestChecksumRequired,
    requestAlgorithmMember
  }, !!context.isS3ExpressBucket);
  let updatedBody = requestBody;
  let updatedHeaders = headers;
  if (checksumAlgorithm) {
    const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
    const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config);
    if (isStreaming(requestBody)) {
      const { getAwsChunkedEncodingStream: getAwsChunkedEncodingStream2, bodyLengthChecker } = config;
      updatedBody = getAwsChunkedEncodingStream2(requestBody, {
        base64Encoder,
        bodyLengthChecker,
        checksumLocationName,
        checksumAlgorithmFn,
        streamHasher
      });
      updatedHeaders = {
        ...headers,
        "content-encoding": headers["content-encoding"] ? `${headers["content-encoding"]},aws-chunked` : "aws-chunked",
        "transfer-encoding": "chunked",
        "x-amz-decoded-content-length": headers["content-length"],
        "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
        "x-amz-trailer": checksumLocationName
      };
      delete updatedHeaders["content-length"];
    } else if (!hasHeader2(checksumLocationName, headers)) {
      const rawChecksum = await stringHasher(checksumAlgorithmFn, requestBody);
      updatedHeaders = {
        ...headers,
        [checksumLocationName]: base64Encoder(rawChecksum)
      };
    }
  }
  const result = await next({
    ...args,
    request: {
      ...request,
      headers: updatedHeaders,
      body: updatedBody
    }
  });
  return result;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getFlexibleChecksumsPlugin.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmListForResponse.js
init_checked_fetch();
init_modules_watch_stub();
var getChecksumAlgorithmListForResponse = (responseAlgorithms = []) => {
  const validChecksumAlgorithms = [];
  for (const algorithm of PRIORITY_ORDER_ALGORITHMS) {
    if (!responseAlgorithms.includes(algorithm) || !CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm)) {
      continue;
    }
    validChecksumAlgorithms.push(algorithm);
  }
  return validChecksumAlgorithms;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isChecksumWithPartNumber.js
init_checked_fetch();
init_modules_watch_stub();
var isChecksumWithPartNumber = (checksum) => {
  const lastHyphenIndex = checksum.lastIndexOf("-");
  if (lastHyphenIndex !== -1) {
    const numberPart = checksum.slice(lastHyphenIndex + 1);
    if (!numberPart.startsWith("0")) {
      const number = parseInt(numberPart, 10);
      if (!isNaN(number) && number >= 1 && number <= 1e4) {
        return true;
      }
    }
  }
  return false;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/streams/create-read-stream-on-buffer.browser.js
init_checked_fetch();
init_modules_watch_stub();
function createReadStreamOnBuffer(buffer) {
  return new Blob([buffer]).stream();
}

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksum.js
init_checked_fetch();
init_modules_watch_stub();
var getChecksum = async (body, { streamHasher, checksumAlgorithmFn, base64Encoder }) => {
  const digest = isStreaming(body) ? streamHasher(checksumAlgorithmFn, body) : stringHasher(checksumAlgorithmFn, body);
  return base64Encoder(await digest);
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
var validateChecksumFromResponse = async (response, { config, responseAlgorithms }) => {
  const checksumAlgorithms = getChecksumAlgorithmListForResponse(responseAlgorithms);
  const { body: responseBody, headers: responseHeaders } = response;
  for (const algorithm of checksumAlgorithms) {
    const responseHeader = getChecksumLocationName(algorithm);
    const checksumFromResponse = responseHeaders[responseHeader];
    if (checksumFromResponse) {
      const checksumAlgorithmFn = selectChecksumAlgorithmFunction(algorithm, config);
      const { streamHasher, base64Encoder } = config;
      const checksum = await getChecksum(responseBody, { streamHasher, checksumAlgorithmFn, base64Encoder });
      if (checksum === checksumFromResponse) {
        break;
      }
      throw new Error(`Checksum mismatch: expected "${checksum}" but received "${checksumFromResponse}" in response header "${responseHeader}".`);
    }
  }
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
var flexibleChecksumsResponseMiddlewareOptions = {
  name: "flexibleChecksumsResponseMiddleware",
  toMiddleware: "deserializerMiddleware",
  relation: "after",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsResponseMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const input = args.input;
  const result = await next(args);
  const response = result.response;
  let collectedStream = void 0;
  const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
  if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
    const { clientName, commandName } = context;
    const isS3WholeObjectMultipartGetResponseChecksum = clientName === "S3Client" && commandName === "GetObjectCommand" && getChecksumAlgorithmListForResponse(responseAlgorithms).every((algorithm) => {
      const responseHeader = getChecksumLocationName(algorithm);
      const checksumFromResponse = response.headers[responseHeader];
      return !checksumFromResponse || isChecksumWithPartNumber(checksumFromResponse);
    });
    if (isS3WholeObjectMultipartGetResponseChecksum) {
      return result;
    }
    const isStreamingBody = isStreaming(response.body);
    if (isStreamingBody) {
      collectedStream = await config.streamCollector(response.body);
      response.body = createReadStreamOnBuffer(collectedStream);
    }
    await validateChecksumFromResponse(result.response, {
      config,
      responseAlgorithms
    });
    if (isStreamingBody && collectedStream) {
      response.body = createReadStreamOnBuffer(collectedStream);
    }
  }
  return result;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getFlexibleChecksumsPlugin.js
var getFlexibleChecksumsPlugin = (config, middlewareConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.add(flexibleChecksumsMiddleware(config, middlewareConfig), flexibleChecksumsMiddlewareOptions);
    clientStack.addRelativeTo(flexibleChecksumsResponseMiddleware(config, middlewareConfig), flexibleChecksumsResponseMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/client-s3/dist-es/commands/GetObjectCommand.js
init_checked_fetch();
init_modules_watch_stub();
var GetObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getSsecPlugin(config),
    getS3ExpiresMiddlewarePlugin(config),
    getFlexibleChecksumsPlugin(config, {
      input: this.input,
      requestChecksumRequired: false,
      requestValidationModeMember: "ChecksumMode",
      responseAlgorithms: ["CRC32", "CRC32C", "SHA256", "SHA1"]
    })
  ];
}).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").f(GetObjectRequestFilterSensitiveLog, GetObjectOutputFilterSensitiveLog).ser(se_GetObjectCommand).de(de_GetObjectCommand).build() {
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectCommand.js
init_checked_fetch();
init_modules_watch_stub();
var PutObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getCheckContentLengthHeaderPlugin(config),
    getSsecPlugin(config),
    getFlexibleChecksumsPlugin(config, {
      input: this.input,
      requestAlgorithmMember: "ChecksumAlgorithm",
      requestChecksumRequired: false
    })
  ];
}).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").f(PutObjectRequestFilterSensitiveLog, PutObjectOutputFilterSensitiveLog).ser(se_PutObjectCommand).de(de_PutObjectCommand).build() {
};

// node_modules/@hono-storage/s3/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-format-url/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-format-url/node_modules/@smithy/querystring-builder/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-format-url/node_modules/@smithy/util-uri-escape/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-format-url/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
init_checked_fetch();
init_modules_watch_stub();
var escapeUri2 = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode2);
var hexEncode2 = (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`;

// node_modules/@aws-sdk/util-format-url/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/util-format-url/node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString2(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri2(key);
    if (Array.isArray(value)) {
      for (let i2 = 0, iLen = value.length; i2 < iLen; i2++) {
        parts.push(`${key}=${escapeUri2(value[i2])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri2(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}

// node_modules/@aws-sdk/util-format-url/dist-es/index.js
function formatUrl(request) {
  const { port, query } = request;
  let { protocol, path, hostname } = request;
  if (protocol && protocol.slice(-1) !== ":") {
    protocol += ":";
  }
  if (port) {
    hostname += `:${port}`;
  }
  if (path && path.charAt(0) !== "/") {
    path = `/${path}`;
  }
  let queryString = query ? buildQueryString2(query) : "";
  if (queryString && queryString[0] !== "?") {
    queryString = `?${queryString}`;
  }
  let auth = "";
  if (request.username != null || request.password != null) {
    const username = request.username ?? "";
    const password = request.password ?? "";
    auth = `${username}:${password}@`;
  }
  let fragment = "";
  if (request.fragment) {
    fragment = `#${request.fragment}`;
  }
  return `${protocol}//${auth}${hostname}${path}${queryString}${fragment}`;
}

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
init_checked_fetch();
init_modules_watch_stub();
var resolveParamsForS32 = async (endpointParams) => {
  const bucket = endpointParams?.Bucket || "";
  if (typeof endpointParams.Bucket === "string") {
    endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
  }
  if (isArnBucketName2(bucket)) {
    if (endpointParams.ForcePathStyle === true) {
      throw new Error("Path-style addressing cannot be used with ARN buckets");
    }
  } else if (!isDnsCompatibleBucketName2(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
    endpointParams.ForcePathStyle = true;
  }
  if (endpointParams.DisableMultiRegionAccessPoints) {
    endpointParams.disableMultiRegionAccessPoints = true;
    endpointParams.DisableMRAP = true;
  }
  return endpointParams;
};
var DOMAIN_PATTERN2 = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN2 = /(\d+\.){3}\d+/;
var DOTS_PATTERN2 = /\.\./;
var isDnsCompatibleBucketName2 = (bucketName) => DOMAIN_PATTERN2.test(bucketName) && !IP_ADDRESS_PATTERN2.test(bucketName) && !DOTS_PATTERN2.test(bucketName);
var isArnBucketName2 = (bucketName) => {
  const [arn, partition2, service, , , bucket] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = Boolean(isArn && partition2 && service && bucket);
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return isValidArn;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
init_checked_fetch();
init_modules_watch_stub();
var createConfigValueProvider2 = (configKey, canonicalEndpointParamKey, config) => {
  const configProvider = async () => {
    const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  };
  if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
    return async () => {
      const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
      const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
      return configValue;
    };
  }
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return endpoint.url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint;
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
init_checked_fetch();
init_modules_watch_stub();
var getEndpointFromConfig2 = async (serviceId) => void 0;

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/url-parser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/querystring-parser/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
function parseQueryString2(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl2 = (url) => {
  if (typeof url === "string") {
    return parseUrl2(new URL(url));
  }
  const { hostname, pathname, port, protocol, search } = url;
  let query;
  if (search) {
    query = parseQueryString2(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query
  };
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV12 = (endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return parseUrl2(endpoint.url);
    }
    return endpoint;
  }
  return parseUrl2(endpoint);
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions2 = async (commandInput, instructionsSupplier, clientConfig, context) => {
  if (!clientConfig.endpoint) {
    const endpointFromConfig = await getEndpointFromConfig2(clientConfig.serviceId || "");
    if (endpointFromConfig) {
      clientConfig.endpoint = () => Promise.resolve(toEndpointV12(endpointFromConfig));
    }
  }
  const endpointParams = await resolveParams2(commandInput, instructionsSupplier, clientConfig);
  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint = clientConfig.endpointProvider(endpointParams, context);
  return endpoint;
};
var resolveParams2 = async (commandInput, instructionsSupplier, clientConfig) => {
  const endpointParams = {};
  const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider2(instruction.name, name, clientConfig)();
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }
  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }
  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS32(endpointParams);
  }
  return endpointParams;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-middleware/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/abort.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/auth/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/auth/auth.js
init_checked_fetch();
init_modules_watch_stub();
var HttpAuthLocation2;
(function(HttpAuthLocation3) {
  HttpAuthLocation3["HEADER"] = "header";
  HttpAuthLocation3["QUERY"] = "query";
})(HttpAuthLocation2 || (HttpAuthLocation2 = {}));

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
init_checked_fetch();
init_modules_watch_stub();
var HttpApiKeyAuthLocation2;
(function(HttpApiKeyAuthLocation3) {
  HttpApiKeyAuthLocation3["HEADER"] = "header";
  HttpApiKeyAuthLocation3["QUERY"] = "query";
})(HttpApiKeyAuthLocation2 || (HttpApiKeyAuthLocation2 = {}));

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/auth/HttpSigner.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/checksum.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/client.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/command.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/connection/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/connection/config.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/connection/manager.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/connection/pool.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/crypto.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/encode.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/endpoint.js
init_checked_fetch();
init_modules_watch_stub();
var EndpointURLScheme2;
(function(EndpointURLScheme3) {
  EndpointURLScheme3["HTTP"] = "http";
  EndpointURLScheme3["HTTPS"] = "https";
})(EndpointURLScheme2 || (EndpointURLScheme2 = {}));

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/endpoints/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/endpoints/shared.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/eventStream.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/extensions/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/extensions/checksum.js
init_checked_fetch();
init_modules_watch_stub();
var AlgorithmId2;
(function(AlgorithmId3) {
  AlgorithmId3["MD5"] = "md5";
  AlgorithmId3["CRC32"] = "crc32";
  AlgorithmId3["CRC32C"] = "crc32c";
  AlgorithmId3["SHA1"] = "sha1";
  AlgorithmId3["SHA256"] = "sha256";
})(AlgorithmId2 || (AlgorithmId2 = {}));

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/http.js
init_checked_fetch();
init_modules_watch_stub();
var FieldPosition2;
(function(FieldPosition3) {
  FieldPosition3[FieldPosition3["HEADER"] = 0] = "HEADER";
  FieldPosition3[FieldPosition3["TRAILER"] = 1] = "TRAILER";
})(FieldPosition2 || (FieldPosition2 = {}));

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/identity/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/identity/identity.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/logger.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/middleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/pagination.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/profile.js
init_checked_fetch();
init_modules_watch_stub();
var IniSectionType2;
(function(IniSectionType3) {
  IniSectionType3["PROFILE"] = "profile";
  IniSectionType3["SSO_SESSION"] = "sso-session";
  IniSectionType3["SERVICES"] = "services";
})(IniSectionType2 || (IniSectionType2 = {}));

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/response.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/retry.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/serde.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/shapes.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/signature.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/stream.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/transfer.js
init_checked_fetch();
init_modules_watch_stub();
var RequestHandlerProtocol2;
(function(RequestHandlerProtocol3) {
  RequestHandlerProtocol3["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol3["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol3["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol2 || (RequestHandlerProtocol2 = {}));

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/transform/no-undefined.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/transform/type-transform.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/uri.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/util.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/types/dist-es/waiter.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
init_checked_fetch();
init_modules_watch_stub();
var normalizeProvider2 = (input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-serde/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var serializerMiddlewareOption2 = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions2 = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption2.name
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/middleware-endpoint/dist-es/types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/extensions/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/Field.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/Fields.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/httpHandler.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
init_checked_fetch();
init_modules_watch_stub();
var HttpRequest2 = class {
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static isInstance(request) {
    if (!request)
      return false;
    const req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    const cloned = new HttpRequest2({
      ...this,
      headers: { ...this.headers }
    });
    if (cloned.query)
      cloned.query = cloneQuery3(cloned.query);
    return cloned;
  }
};
function cloneQuery3(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/protocol-http/dist-es/types.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/dist-es/presigner.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-hex-encoding/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
var SHORT_TO_HEX2 = {};
var HEX_TO_SHORT2 = {};
for (let i2 = 0; i2 < 256; i2++) {
  let encodedByte = i2.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX2[i2] = encodedByte;
  HEX_TO_SHORT2[encodedByte] = i2;
}
function fromHex2(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i2 = 0; i2 < encoded.length; i2 += 2) {
    const encodedByte = encoded.slice(i2, i2 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT2) {
      out[i2 / 2] = HEX_TO_SHORT2[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex2(bytes) {
  let out = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2++) {
    out += SHORT_TO_HEX2[bytes[i2]];
  }
  return out;
}

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-uri-escape/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
init_checked_fetch();
init_modules_watch_stub();
var escapeUri3 = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode3);
var hexEncode3 = (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`;

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-utf8/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
init_checked_fetch();
init_modules_watch_stub();
var fromUtf82 = (input) => new TextEncoder().encode(input);

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
init_checked_fetch();
init_modules_watch_stub();
var toUint8Array2 = (data) => {
  if (typeof data === "string") {
    return fromUtf82(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var ALGORITHM_QUERY_PARAM2 = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM2 = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM2 = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM2 = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM2 = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM2 = "X-Amz-Signature";
var TOKEN_QUERY_PARAM2 = "X-Amz-Security-Token";
var AUTH_HEADER2 = "authorization";
var AMZ_DATE_HEADER2 = AMZ_DATE_QUERY_PARAM2.toLowerCase();
var DATE_HEADER2 = "date";
var GENERATED_HEADERS2 = [AUTH_HEADER2, AMZ_DATE_HEADER2, DATE_HEADER2];
var SIGNATURE_HEADER2 = SIGNATURE_QUERY_PARAM2.toLowerCase();
var SHA256_HEADER2 = "x-amz-content-sha256";
var TOKEN_HEADER2 = TOKEN_QUERY_PARAM2.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS2 = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN2 = /^proxy-/;
var SEC_HEADER_PATTERN2 = /^sec-/;
var ALGORITHM_IDENTIFIER2 = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER2 = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD2 = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE2 = 50;
var KEY_TYPE_IDENTIFIER2 = "aws4_request";
var MAX_PRESIGNED_TTL2 = 60 * 60 * 24 * 7;

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
init_checked_fetch();
init_modules_watch_stub();
var signingKeyCache2 = {};
var cacheQueue2 = [];
var createScope2 = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER2}`;
var getSigningKey2 = async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac2(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex2(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache2) {
    return signingKeyCache2[cacheKey];
  }
  cacheQueue2.push(cacheKey);
  while (cacheQueue2.length > MAX_CACHE_SIZE2) {
    delete signingKeyCache2[cacheQueue2.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER2]) {
    key = await hmac2(sha256Constructor, key, signable);
  }
  return signingKeyCache2[cacheKey] = key;
};
var hmac2 = (ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array2(data));
  return hash.digest();
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
init_checked_fetch();
init_modules_watch_stub();
var getCanonicalHeaders2 = ({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == void 0) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS2 || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN2.test(canonicalHeaderName) || SEC_HEADER_PATTERN2.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
init_checked_fetch();
init_modules_watch_stub();
var getCanonicalQuery2 = ({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query).sort()) {
    if (key.toLowerCase() === SIGNATURE_HEADER2) {
      continue;
    }
    keys.push(key);
    const value = query[key];
    if (typeof value === "string") {
      serialized[key] = `${escapeUri3(key)}=${escapeUri3(value)}`;
    } else if (Array.isArray(value)) {
      serialized[key] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${escapeUri3(key)}=${escapeUri3(value2)}`]), []).sort().join("&");
    }
  }
  return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/is-array-buffer/dist-es/index.js
init_checked_fetch();
init_modules_watch_stub();
var isArrayBuffer2 = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash2 = async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER2) {
      return headers[headerName];
    }
  }
  if (body == void 0) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer2(body)) {
    const hashCtor = new hashConstructor();
    hashCtor.update(toUint8Array2(body));
    return toHex2(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD2;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
init_checked_fetch();
init_modules_watch_stub();
var HeaderFormatter2 = class {
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = fromUtf82(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = fromUtf82(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int643.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN3.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex2(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
};
var HEADER_VALUE_TYPE3;
(function(HEADER_VALUE_TYPE4) {
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["short"] = 3] = "short";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["long"] = 5] = "long";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["string"] = 7] = "string";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE4[HEADER_VALUE_TYPE4["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE3 || (HEADER_VALUE_TYPE3 = {}));
var UUID_PATTERN3 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Int643 = class {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate3(bytes);
    }
    return new Int643(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate3(bytes);
    }
    return parseInt(toHex2(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate3(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/headerUtil.js
init_checked_fetch();
init_modules_watch_stub();
var hasHeader3 = (soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
init_checked_fetch();
init_modules_watch_stub();
var cloneRequest2 = ({ headers, query, ...rest }) => ({
  ...rest,
  headers: { ...headers },
  query: query ? cloneQuery4(query) : void 0
});
var cloneQuery4 = (query) => Object.keys(query).reduce((carry, paramName) => {
  const param = query[paramName];
  return {
    ...carry,
    [paramName]: Array.isArray(param) ? [...param] : param
  };
}, {});

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery2 = (request, options = {}) => {
  const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest2(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request,
    headers,
    query
  };
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
init_checked_fetch();
init_modules_watch_stub();
var prepareRequest2 = (request) => {
  request = typeof request.clone === "function" ? request.clone() : cloneRequest2(request);
  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS2.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }
  return request;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/utilDate.js
init_checked_fetch();
init_modules_watch_stub();
var iso86012 = (time) => toDate2(time).toISOString().replace(/\.\d{3}Z$/, "Z");
var toDate2 = (time) => {
  if (typeof time === "number") {
    return new Date(time * 1e3);
  }
  if (typeof time === "string") {
    if (Number(time)) {
      return new Date(Number(time) * 1e3);
    }
    return new Date(time);
  }
  return time;
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV42 = class {
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.headerFormatter = new HeaderFormatter2();
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider2(region);
    this.credentialProvider = normalizeProvider2(credentials);
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = formatDate2(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL2) {
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    }
    const scope = createScope2(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery2(prepareRequest2(originalRequest), { unhoistableHeaders });
    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM2] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM2] = ALGORITHM_IDENTIFIER2;
    request.query[CREDENTIAL_QUERY_PARAM2] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM2] = longDate;
    request.query[EXPIRES_QUERY_PARAM2] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders2(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM2] = getCanonicalHeaderList2(canonicalHeaders);
    request.query[SIGNATURE_QUERY_PARAM2] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash2(originalRequest, this.sha256)));
    return request;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = formatDate2(signingDate);
    const scope = createScope2(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash2({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex2(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER2,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
  }
  async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
    const promise = this.signEvent({
      headers: this.headerFormatter.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature
    });
    return promise.then((signature) => {
      return { message: signableMessage.message, signature };
    });
  }
  async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = formatDate2(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array2(stringToSign));
    return toHex2(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request = prepareRequest2(requestToSign);
    const { longDate, shortDate } = formatDate2(signingDate);
    const scope = createScope2(shortDate, region, signingService ?? this.service);
    request.headers[AMZ_DATE_HEADER2] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER2] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash2(request, this.sha256);
    if (!hasHeader3(SHA256_HEADER2, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER2] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders2(request, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
    request.headers[AUTH_HEADER2] = `${ALGORITHM_IDENTIFIER2} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList2(canonicalHeaders)}, Signature=${signature}`;
    return request;
  }
  createCanonicalRequest(request, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery2(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest) {
    const hash = new this.sha256();
    hash.update(toUint8Array2(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${ALGORITHM_IDENTIFIER2}
${longDate}
${credentialScope}
${toHex2(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = escapeUri3(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array2(stringToSign));
    return toHex2(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey2(this.sha256, credentials, shortDate, region, service || this.service);
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
};
var formatDate2 = (now) => {
  const longDate = iso86012(now).replace(/[\-:]/g, "");
  return {
    longDate,
    shortDate: longDate.slice(0, 8)
  };
};
var getCanonicalHeaderList2 = (headers) => Object.keys(headers).sort().join(";");

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/load-crt.browser.js
init_checked_fetch();
init_modules_watch_stub();
function loadCrt() {
}

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
init_checked_fetch();
init_modules_watch_stub();
var signatureV4CrtContainer2 = {
  CrtSignerV4: null
};

// node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion2 = class {
  constructor(options) {
    this.sigv4Signer = new SignatureV42(options);
    this.signerOptions = options;
  }
  async sign(requestToSign, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }
  async presign(originalRequest, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().presign(originalRequest, options);
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner) {
      let CrtSignerV4 = null;
      try {
        loadCrt();
        CrtSignerV4 = signatureV4CrtContainer2.CrtSignerV4;
        if (typeof CrtSignerV4 !== "function")
          throw new Error();
      } catch (e2) {
        e2.message = `${e2.message}
Please check if you have installed "@aws-sdk/signature-v4-crt" package explicitly. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`;
        throw e2;
      }
      this.sigv4aSigner = new CrtSignerV4({
        ...this.signerOptions,
        signingAlgorithm: 1
      });
    }
    return this.sigv4aSigner;
  }
};

// node_modules/@aws-sdk/s3-request-presigner/dist-es/constants.js
init_checked_fetch();
init_modules_watch_stub();
var UNSIGNED_PAYLOAD3 = "UNSIGNED-PAYLOAD";
var SHA256_HEADER3 = "X-Amz-Content-Sha256";

// node_modules/@aws-sdk/s3-request-presigner/dist-es/presigner.js
var S3RequestPresigner = class {
  constructor(options) {
    const resolvedOptions = {
      service: options.signingName || options.service || "s3",
      uriEscapePath: options.uriEscapePath || false,
      applyChecksum: options.applyChecksum || false,
      ...options
    };
    this.signer = new SignatureV4MultiRegion2(resolvedOptions);
  }
  presign(requestToSign, { unsignableHeaders = /* @__PURE__ */ new Set(), unhoistableHeaders = /* @__PURE__ */ new Set(), ...options } = {}) {
    unsignableHeaders.add("content-type");
    Object.keys(requestToSign.headers).map((header) => header.toLowerCase()).filter((header) => header.startsWith("x-amz-server-side-encryption")).forEach((header) => {
      unhoistableHeaders.add(header);
    });
    requestToSign.headers[SHA256_HEADER3] = UNSIGNED_PAYLOAD3;
    const currentHostHeader = requestToSign.headers.host;
    const port = requestToSign.port;
    const expectedHostHeader = `${requestToSign.hostname}${requestToSign.port != null ? ":" + port : ""}`;
    if (!currentHostHeader || currentHostHeader === requestToSign.hostname && requestToSign.port != null) {
      requestToSign.headers.host = expectedHostHeader;
    }
    return this.signer.presign(requestToSign, {
      expiresIn: 900,
      unsignableHeaders,
      unhoistableHeaders,
      ...options
    });
  }
};

// node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js
var getSignedUrl = async (client2, command, options = {}) => {
  let s3Presigner;
  if (typeof client2.config.endpointProvider === "function") {
    const endpointV2 = await getEndpointFromInstructions2(command.input, command.constructor, client2.config);
    const authScheme = endpointV2.properties?.authSchemes?.[0];
    s3Presigner = new S3RequestPresigner({
      ...client2.config,
      signingName: authScheme?.signingName,
      region: async () => authScheme?.signingRegion
    });
  } else {
    s3Presigner = new S3RequestPresigner(client2.config);
  }
  const presignInterceptMiddleware = (next, context) => async (args) => {
    const { request } = args;
    if (!HttpRequest2.isInstance(request)) {
      throw new Error("Request to be presigned is not an valid HTTP request.");
    }
    delete request.headers["amz-sdk-invocation-id"];
    delete request.headers["amz-sdk-request"];
    delete request.headers["x-amz-user-agent"];
    const presigned2 = await s3Presigner.presign(request, {
      ...options,
      signingRegion: options.signingRegion ?? context["signing_region"],
      signingService: options.signingService ?? context["signing_service"]
    });
    return {
      response: {},
      output: {
        $metadata: { httpStatusCode: 200 },
        presigned: presigned2
      }
    };
  };
  const middlewareName = "presignInterceptMiddleware";
  const clientStack = client2.middlewareStack.clone();
  clientStack.addRelativeTo(presignInterceptMiddleware, {
    name: middlewareName,
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true
  });
  const handler = command.resolveMiddleware(clientStack, client2.config, {});
  const { output } = await handler({ input: command.input });
  const { presigned } = output;
  return formatUrl(presigned);
};

// node_modules/@hono-storage/core/dist/index.js
init_checked_fetch();
init_modules_watch_stub();
var HonoStorageFile = class extends File {
  field;
  constructor(file, field) {
    super([file], file.name);
    this.field = field;
  }
  get originalname() {
    const name = this.name;
    const lastDot = name.lastIndexOf(".");
    if (lastDot === -1) {
      return name;
    }
    return name.substring(0, lastDot);
  }
  get extension() {
    const name = this.name;
    const lastDot = name.lastIndexOf(".");
    if (lastDot === -1) {
      return "";
    }
    return name.substring(lastDot + 1);
  }
};
var HonoStorageError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "HonoStorageError";
  }
};
var Errors = {
  TooManyFiles: new HonoStorageError("Too many files")
};
var isFile = (value) => {
  return value instanceof File;
};
var FILES_KEY = "files";
var HonoStorage = class {
  options;
  constructor(options) {
    this.options = options ?? {};
  }
  handleSingleStorage = async (c2, file, fieldName) => {
    if (this.options.storage) {
      await this.options.storage(c2, [
        new HonoStorageFile(file, {
          name: fieldName,
          type: "single"
        })
      ]);
    }
  };
  handleMultipleStorage = async (c2, files, fieldName) => {
    if (this.options.storage) {
      await this.options.storage(
        c2,
        files.map(
          (file) => new HonoStorageFile(file, {
            name: fieldName,
            type: "multiple"
          })
        )
      );
    }
  };
  single = (name, _options) => {
    return async (c2, next) => {
      const formData = await c2.req.parseBody({ all: true });
      const value = formData[name];
      if (isFile(value)) {
        await this.handleSingleStorage(c2, value, name);
      }
      c2.set(FILES_KEY, {
        ...c2.get(FILES_KEY),
        [name]: value
      });
      await next();
    };
  };
  multiple = (name, options) => {
    return async (c2, next) => {
      const formData = await c2.req.parseBody({ all: true });
      const value = formData[name];
      const filedFiles = [];
      if (Array.isArray(value)) {
        filedFiles.push(...value.filter(isFile));
      } else if (isFile(value)) {
        filedFiles.push(value);
      }
      if (options?.maxCount && filedFiles.length > options.maxCount) {
        throw new Error("Too many files");
      }
      await this.handleMultipleStorage(c2, filedFiles, name);
      c2.set(FILES_KEY, {
        ...c2.get(FILES_KEY),
        [name]: value
      });
      await next();
    };
  };
  fields = (schema) => {
    return async (c2, next) => {
      const formData = await c2.req.parseBody({ all: true });
      const uploader = [];
      const files = {};
      for (const name in schema) {
        const value = formData[name];
        const field = schema[name];
        if (field.type === "multiple") {
          const filedFiles = [];
          if (Array.isArray(value)) {
            filedFiles.push(...value.filter(isFile));
          } else if (isFile(value)) {
            filedFiles.push(value);
          }
          if (field.maxCount && filedFiles.length > field.maxCount) {
            throw Errors.TooManyFiles;
          }
          uploader.push(this.handleMultipleStorage(c2, filedFiles, name));
          files[name] = [value].flat();
          continue;
        }
        if (field.type === "single") {
          if (isFile(value)) {
            uploader.push(this.handleSingleStorage(c2, value, name));
          }
          files[name] = value;
          continue;
        }
      }
      await Promise.all(uploader);
      c2.set(FILES_KEY, {
        ...c2.get(FILES_KEY),
        ...files
      });
      await next();
    };
  };
};

// node_modules/@hono-storage/s3/dist/index.js
var SIGN_CONFIG_KEY = "hono-storage-s3:sign-config";
var SIGNED_URL_KEY = "signedURLs";
var BaseHonoS3Storage = class {
  storage;
  key;
  bucket;
  params;
  s3Repository;
  constructor(options, s3Repository) {
    this.storage = new HonoStorage({
      storage: async (c2, files) => {
        await Promise.all(
          files.map(async (file) => {
            await this.upload(c2, file);
          })
        );
      }
    });
    this.key = options.key ?? ((_, file) => file.name);
    this.bucket = options.bucket;
    this.params = options.params;
    this.s3Repository = s3Repository;
  }
  async upload(c2, file) {
    const key = this.key(c2, file);
    const bucket = typeof this.bucket === "function" ? this.bucket(c2, file) : this.bucket;
    const isBufferExists = typeof Buffer !== "undefined";
    const putCommand = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: isBufferExists ? Buffer.from(await file.arrayBuffer()) : file,
      ContentType: file.type,
      ContentLength: file.size,
      ...this.params
    });
    const getCommand = new GetObjectCommand({
      Bucket: bucket,
      Key: key
    });
    const signConfig = c2.get(SIGN_CONFIG_KEY) ?? {};
    const sign3 = signConfig[file.field.name];
    const s3Repository = typeof this.s3Repository === "function" ? this.s3Repository(c2, file) : this.s3Repository;
    await s3Repository.put(putCommand);
    if (sign3) {
      const signedURL = await s3Repository.getSingedURL(getCommand, sign3);
      const signedURLs = c2.get(SIGNED_URL_KEY) ?? {};
      c2.set(SIGNED_URL_KEY, {
        ...signedURLs,
        [file.field.name]: (() => {
          const targetSignField = signedURLs[file.field.name] ?? [];
          if (file.field.type === "single" || typeof targetSignField === "string") {
            return signedURL;
          }
          return [...targetSignField, signedURL];
        })()
      });
    }
  }
  single = (name, options) => {
    return async (c2, next) => {
      c2.set(SIGNED_URL_KEY, {
        ...c2.get(SIGNED_URL_KEY) ?? {}
      });
      if (options?.sign) {
        c2.set(SIGN_CONFIG_KEY, {
          ...c2.get(SIGN_CONFIG_KEY) ?? {},
          [name]: options.sign
        });
      }
      await this.storage.single(name)(c2, next);
    };
  };
  multiple = (name, options) => {
    return async (c2, next) => {
      c2.set(SIGNED_URL_KEY, {
        ...c2.get(SIGNED_URL_KEY) ?? {}
      });
      if (options?.sign) {
        c2.set(SIGN_CONFIG_KEY, {
          ...c2.get(SIGN_CONFIG_KEY) ?? {},
          [name]: options.sign
        });
      }
      await this.storage.multiple(name)(c2, next);
    };
  };
  fields = (schema) => {
    return async (c2, next) => {
      c2.set(SIGNED_URL_KEY, {
        ...c2.get(SIGNED_URL_KEY) ?? {}
      });
      if (Object.keys(schema).some((key) => schema[key].sign)) {
        c2.set(SIGN_CONFIG_KEY, {
          ...c2.get(SIGN_CONFIG_KEY) ?? {},
          ...Object.keys(schema).reduce(
            (acc, key) => {
              if (schema[key].sign) {
                acc[key] = schema[key].sign;
              }
              return acc;
            },
            {}
          )
        });
      }
      await this.storage.fields(schema)(c2, next);
    };
  };
};
var S3Repository = class {
  client;
  constructor(client2) {
    this.client = client2;
  }
  async put(command) {
    await this.client.send(command);
  }
  async getSingedURL(command, sign3) {
    return await getSignedUrl(this.client, command, sign3);
  }
};
var HonoS3Storage = class extends BaseHonoS3Storage {
  constructor(options) {
    const client2 = options.client;
    if (typeof client2 !== "function") {
      super(options, new S3Repository(client2));
      return;
    }
    super(
      options,
      (c2, file) => new S3Repository(client2(c2, file))
    );
  }
};

// src/routes/blog.ts
var client = (accessKeyId, secretAccessKey) => new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId,
    secretAccessKey
  }
});
var upload = new HonoS3Storage({
  key: (_, file) => `uploads/thumbnails/${file.name}-${(/* @__PURE__ */ new Date()).getTime()}.${file.type}`,
  bucket: "photoapp123",
  client: (c2) => client(c2.env.AWS_ACCESS_KEY_ID, c2.env.AWS_SECRET_ACCESS_KEY)
});
var blogRouter = new Hono2();
blogRouter.use("/*", async (c2, next) => {
  const authorization = c2.req.header("Authorization");
  if (!authorization) {
    c2.status(401);
    return c2.json({ error: "Missing Authorization header" });
  }
  const token = authorization.split(" ")[1];
  try {
    const payload = await verify2(token, c2.env.JWT_SECRET);
    c2.set("userId", payload.id);
    await next();
  } catch (error) {
    c2.status(403);
    return c2.json({ error: "Invalid token" });
  }
});
blogRouter.post("/blogs", upload.single("file"), async (c2) => {
  try {
    const prisma = new import_edge2.PrismaClient({
      datasourceUrl: c2.env.DATABASE_URL
    }).$extends(withAccelerate());
    debugger;
    const userId = c2.get("userId");
    const form = await c2.req.parseBody();
    const file = form["file"];
    if (file && file instanceof File) {
      console.log(file);
    }
    const body = await c2.req.parseBody();
    let thumbnailUrl = null;
    if (file) {
      console.log(`File name: ${file?.name}, File type: ${file?.type}, File size: ${file?.size} bytes`);
      thumbnailUrl = `https://${c2.env.BUCKET}.s3.amazonaws.com/uploads/thumbnails/${file.name}`;
    }
    const newBlog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
        thumbnail: thumbnailUrl
      }
    });
    return c2.json(newBlog);
  } catch (error) {
    console.error(error);
    return c2.json({ error: "Internal Server Error" });
  }
});
blogRouter.put("/blogs/:id", async (c2) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c2.env.DATABASE_URL
  }).$extends(withAccelerate());
  const userId = c2.get("userId");
  const blogId = c2.req.param("id");
  const body = await c2.req.json();
  const updatedBlog = await prisma.blog.updateMany({
    where: {
      id: Number(blogId),
      authorId: userId
      // Only allow updating blogs created by the current user
    },
    data: {
      title: body.title,
      content: body.content,
      authorId: userId
    }
  });
  if (updatedBlog.count === 0) {
    return c2.json({ message: "Blog not found or you do not have permission to update it" }, 404);
  }
  return c2.json(updatedBlog);
});
blogRouter.get("/blogs", async (c2) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c2.env.DATABASE_URL
  }).$extends(withAccelerate());
  const blogs = await prisma.blog.findMany({
    include: {
      author: true
    }
  });
  return c2.json(blogs);
});
blogRouter.get("/blogs/:id", async (c2) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c2.env.DATABASE_URL
  }).$extends(withAccelerate());
  const blogId = c2.req.param("id");
  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(blogId)
    },
    include: {
      author: true
      // Include the author information
    }
  });
  if (!blog) {
    return c2.json({ message: "Blog not found" }, 404);
  }
  return c2.json(blog);
});

// src/index.ts
var app = new Hono2();
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
app.get("/", async (c2) => {
  return c2.text("Hello from this Side");
});
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e2) {
      console.error("Failed to drain the unused request body.", e2);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e2) {
    const error = reduceError(e2);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-5ItRe7/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  ...void 0 ?? [],
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-5ItRe7/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

tslib/tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=index.js.map
