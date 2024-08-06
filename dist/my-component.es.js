import j from "react";
import E from "react-dom";
var A, S = E;
A = S.createRoot, S.hydrateRoot;
var $ = Object.defineProperty, P = (t, r, e) => r in t ? $(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, w = (t, r, e) => (P(t, typeof r != "symbol" ? r + "" : r, e), e);
const T = {
  stringify: (t) => t,
  parse: (t) => t
}, J = {
  stringify: (t) => `${t}`,
  parse: (t) => parseFloat(t)
}, N = {
  stringify: (t) => t ? "true" : "false",
  parse: (t) => /^[ty1-9]/i.test(t)
}, L = {
  stringify: (t) => t.name,
  parse: (t, r, e) => {
    const s = (() => {
      if (typeof window < "u" && t in window)
        return window[t];
      if (typeof global < "u" && t in global)
        return global[t];
    })();
    return typeof s == "function" ? s.bind(e) : void 0;
  }
}, q = {
  stringify: (t) => JSON.stringify(t),
  parse: (t) => JSON.parse(t)
}, O = {
  string: T,
  number: J,
  boolean: N,
  function: L,
  json: q
};
function F(t) {
  return t.replace(
    /([a-z0-9])([A-Z])/g,
    (r, e, s) => `${e}-${s.toLowerCase()}`
  );
}
const v = Symbol.for("r2wc.render"), R = Symbol.for("r2wc.connected"), m = Symbol.for("r2wc.context"), h = Symbol.for("r2wc.props");
function I(t, r, e) {
  var s, y, _;
  r.props || (r.props = t.propTypes ? Object.keys(t.propTypes) : []);
  const d = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), c = {}, i = {}, b = {};
  for (const n of d) {
    c[n] = Array.isArray(r.props) ? "string" : r.props[n];
    const o = F(n);
    i[n] = o, b[o] = n;
  }
  class a extends HTMLElement {
    constructor() {
      super(), w(this, s, !0), w(this, y), w(this, _, {}), w(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[h].container = this.container;
      for (const o of d) {
        const p = i[o], f = this.getAttribute(p), u = c[o], l = u ? O[u] : null;
        l != null && l.parse && f && (this[h][o] = l.parse(f, p, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(b);
    }
    connectedCallback() {
      this[R] = !0, this[v]();
    }
    disconnectedCallback() {
      this[R] = !1, this[m] && e.unmount(this[m]), delete this[m];
    }
    attributeChangedCallback(o, p, f) {
      const u = b[o], l = c[u], x = l ? O[l] : null;
      u in c && x != null && x.parse && f && (this[h][u] = x.parse(f, o, this), this[v]());
    }
    [(s = R, y = m, _ = h, v)]() {
      this[R] && (this[m] ? e.update(this[m], this[h]) : this[m] = e.mount(
        this.container,
        t,
        this[h]
      ));
    }
  }
  for (const n of d) {
    const o = i[n], p = c[n];
    Object.defineProperty(a.prototype, n, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[h][n];
      },
      set(f) {
        this[h][n] = f;
        const u = p ? O[p] : null;
        if (u != null && u.stringify) {
          const l = u.stringify(f, o, this);
          this.getAttribute(o) !== l && this.setAttribute(o, l);
        } else
          this[v]();
      }
    });
  }
  return a;
}
function D(t, r, e) {
  const s = A(t), y = j.createElement(r, e);
  return s.render(y), {
    root: s,
    ReactComponent: r
  };
}
function U({ root: t, ReactComponent: r }, e) {
  const s = j.createElement(r, e);
  t.render(s);
}
function W({ root: t }) {
  t.unmount();
}
function z(t, r = {}) {
  return I(t, r, { mount: D, update: U, unmount: W });
}
var C = { exports: {} }, g = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k;
function B() {
  if (k) return g;
  k = 1;
  var t = j, r = Symbol.for("react.element"), e = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, i, b) {
    var a, n = {}, o = null, p = null;
    b !== void 0 && (o = "" + b), i.key !== void 0 && (o = "" + i.key), i.ref !== void 0 && (p = i.ref);
    for (a in i) s.call(i, a) && !_.hasOwnProperty(a) && (n[a] = i[a]);
    if (c && c.defaultProps) for (a in i = c.defaultProps, i) n[a] === void 0 && (n[a] = i[a]);
    return { $$typeof: r, type: c, key: o, ref: p, props: n, _owner: y.current };
  }
  return g.Fragment = e, g.jsx = d, g.jsxs = d, g;
}
C.exports = B();
var G = C.exports;
const H = ({ text: t }) => /* @__PURE__ */ G.jsxs("p", { children: [
  "こんにちは。ここは WebComponents の中です。text: ",
  t
] });
customElements.define(
  "c-greeting",
  z(H, {
    props: { text: "string" }
  })
);
