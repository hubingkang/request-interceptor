!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        ((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).TTGCaptcha = {})
      )
})(this, function (e) {
  'use strict'
  var t = function () {
    return (
      (t =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          return e
        }),
      t.apply(this, arguments)
    )
  }
  function n(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, o = 0, i = t.length; o < i; o++)
        (!r && o in t) ||
          (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
    return e.concat(r || Array.prototype.slice.call(t))
  }
  'function' == typeof SuppressedError && SuppressedError
  var r =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {}
  function o(e, t, n) {
    return (
      (n = {
        path: t,
        exports: {},
        require: function (e, t) {
          return (function () {
            throw new Error(
              'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
            )
          })(null == t && n.path)
        },
      }),
      e(n, n.exports),
      n.exports
    )
  }
  var i,
    a,
    u = function (e) {
      return e && e.Math == Math && e
    },
    s =
      u('object' == typeof globalThis && globalThis) ||
      u('object' == typeof window && window) ||
      u('object' == typeof self && self) ||
      u('object' == typeof r && r) ||
      (function () {
        return this
      })() ||
      Function('return this')(),
    c = Function.prototype,
    f = c.apply,
    l = c.bind,
    p = c.call,
    h =
      ('object' == typeof Reflect && Reflect.apply) ||
      (l
        ? p.bind(f)
        : function () {
            return p.apply(f, arguments)
          }),
    d = Function.prototype,
    v = d.bind,
    g = d.call,
    m = v && v.bind(g),
    y = v
      ? function (e) {
          return e && m(g, e)
        }
      : function (e) {
          return (
            e &&
            function () {
              return g.apply(e, arguments)
            }
          )
        },
    b = function (e) {
      return 'function' == typeof e
    },
    w = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    },
    _ = !w(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    }),
    S = Function.prototype.call,
    O = S.bind
      ? S.bind(S)
      : function () {
          return S.apply(S, arguments)
        },
    E = {}.propertyIsEnumerable,
    R = Object.getOwnPropertyDescriptor,
    j = {
      f:
        R &&
        !E.call(
          {
            1: 2,
          },
          1
        )
          ? function (e) {
              var t = R(this, e)
              return !!t && t.enumerable
            }
          : E,
    },
    P = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      }
    },
    x = y({}.toString),
    L = y(''.slice),
    T = function (e) {
      return L(x(e), 8, -1)
    },
    k = s.Object,
    C = y(''.split),
    A = w(function () {
      return !k('z').propertyIsEnumerable(0)
    })
      ? function (e) {
          return 'String' == T(e) ? C(e, '') : k(e)
        }
      : k,
    I = s.TypeError,
    U = function (e) {
      if (null == e) throw I("Can't call method on " + e)
      return e
    },
    D = function (e) {
      return A(U(e))
    },
    N = function (e) {
      return 'object' == typeof e ? null !== e : b(e)
    },
    M = {},
    F = function (e) {
      return b(e) ? e : void 0
    },
    H = function (e, t) {
      return arguments.length < 2
        ? F(M[e]) || F(s[e])
        : (M[e] && M[e][t]) || (s[e] && s[e][t])
    },
    q = y({}.isPrototypeOf),
    B = H('navigator', 'userAgent') || '',
    z = s.process,
    G = s.Deno,
    V = (z && z.versions) || (G && G.version),
    J = V && V.v8
  J && (a = (i = J.split('.'))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
    !a &&
      B &&
      (!(i = B.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
      (i = B.match(/Chrome\/(\d+)/)) &&
      (a = +i[1])
  var K,
    X = a,
    W =
      !!Object.getOwnPropertySymbols &&
      !w(function () {
        var e = Symbol()
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && X && X < 41)
        )
      }),
    Y = W && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    Q = s.Object,
    $ = Y
      ? function (e) {
          return 'symbol' == typeof e
        }
      : function (e) {
          var t = H('Symbol')
          return b(t) && q(t.prototype, Q(e))
        },
    Z = s.String,
    ee = function (e) {
      try {
        return Z(e)
      } catch (e) {
        return 'Object'
      }
    },
    te = s.TypeError,
    ne = function (e) {
      if (b(e)) return e
      throw te(ee(e) + ' is not a function')
    },
    re = function (e, t) {
      var n = e[t]
      return null == n ? void 0 : ne(n)
    },
    oe = s.TypeError,
    ie = Object.defineProperty,
    ae = '__core-js_shared__',
    ue =
      s[ae] ||
      (function (e, t) {
        try {
          ie(s, e, {
            value: t,
            configurable: !0,
            writable: !0,
          })
        } catch (n) {
          s[e] = t
        }
        return t
      })(ae, {}),
    se = o(function (e) {
      ;(e.exports = function (e, t) {
        return ue[e] || (ue[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: '3.20.1',
        mode: 'pure',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
      })
    }),
    ce = s.Object,
    fe = function (e) {
      return ce(U(e))
    },
    le = y({}.hasOwnProperty),
    pe =
      Object.hasOwn ||
      function (e, t) {
        return le(fe(e), t)
      },
    he = 0,
    de = Math.random(),
    ve = y((1).toString),
    ge = function (e) {
      return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + ve(++he + de, 36)
    },
    me = se('wks'),
    ye = s.Symbol,
    be = ye && ye.for,
    we = Y ? ye : (ye && ye.withoutSetter) || ge,
    _e = function (e) {
      if (!pe(me, e) || (!W && 'string' != typeof me[e])) {
        var t = 'Symbol.' + e
        W && pe(ye, e) ? (me[e] = ye[e]) : (me[e] = Y && be ? be(t) : we(t))
      }
      return me[e]
    },
    Se = s.TypeError,
    Oe = _e('toPrimitive'),
    Ee = function (e, t) {
      if (!N(e) || $(e)) return e
      var n,
        r = re(e, Oe)
      if (r) {
        if ((void 0 === t && (t = 'default'), (n = O(r, e, t)), !N(n) || $(n)))
          return n
        throw Se("Can't convert object to primitive value")
      }
      return (
        void 0 === t && (t = 'number'),
        (function (e, t) {
          var n, r
          if ('string' === t && b((n = e.toString)) && !N((r = O(n, e))))
            return r
          if (b((n = e.valueOf)) && !N((r = O(n, e)))) return r
          if ('string' !== t && b((n = e.toString)) && !N((r = O(n, e))))
            return r
          throw oe("Can't convert object to primitive value")
        })(e, t)
      )
    },
    Re = function (e) {
      var t = Ee(e, 'string')
      return $(t) ? t : t + ''
    },
    je = s.document,
    Pe = N(je) && N(je.createElement),
    xe = function (e) {
      return Pe ? je.createElement(e) : {}
    },
    Le =
      !_ &&
      !w(function () {
        return (
          7 !=
          Object.defineProperty(xe('div'), 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      }),
    Te = Object.getOwnPropertyDescriptor,
    ke = {
      f: _
        ? Te
        : function (e, t) {
            if (((e = D(e)), (t = Re(t)), Le))
              try {
                return Te(e, t)
              } catch (e) {}
            if (pe(e, t)) return P(!O(j.f, e, t), e[t])
          },
    },
    Ce = /#|\.prototype\./,
    Ae = function (e, t) {
      var n = Ue[Ie(e)]
      return n == Ne || (n != De && (b(t) ? w(t) : !!t))
    },
    Ie = (Ae.normalize = function (e) {
      return String(e).replace(Ce, '.').toLowerCase()
    }),
    Ue = (Ae.data = {}),
    De = (Ae.NATIVE = 'N'),
    Ne = (Ae.POLYFILL = 'P'),
    Me = Ae,
    Fe = y(y.bind),
    He = function (e, t) {
      return (
        ne(e),
        void 0 === t
          ? e
          : Fe
          ? Fe(e, t)
          : function () {
              return e.apply(t, arguments)
            }
      )
    },
    qe = s.String,
    Be = s.TypeError,
    ze = function (e) {
      if (N(e)) return e
      throw Be(qe(e) + ' is not an object')
    },
    Ge = s.TypeError,
    Ve = Object.defineProperty,
    Je = {
      f: _
        ? Ve
        : function (e, t, n) {
            if ((ze(e), (t = Re(t)), ze(n), Le))
              try {
                return Ve(e, t, n)
              } catch (e) {}
            if ('get' in n || 'set' in n) throw Ge('Accessors not supported')
            return 'value' in n && (e[t] = n.value), e
          },
    },
    Ke = _
      ? function (e, t, n) {
          return Je.f(e, t, P(1, n))
        }
      : function (e, t, n) {
          return (e[t] = n), e
        },
    Xe = ke.f,
    We = function (e) {
      var t = function (n, r, o) {
        if (this instanceof t) {
          switch (arguments.length) {
            case 0:
              return new e()
            case 1:
              return new e(n)
            case 2:
              return new e(n, r)
          }
          return new e(n, r, o)
        }
        return h(e, this, arguments)
      }
      return (t.prototype = e.prototype), t
    },
    Ye = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u,
        c,
        f,
        l = e.target,
        p = e.global,
        h = e.stat,
        d = e.proto,
        v = p ? s : h ? s[l] : (s[l] || {}).prototype,
        g = p ? M : M[l] || Ke(M, l, {})[l],
        m = g.prototype
      for (o in t)
        (n = !Me(p ? o : l + (h ? '.' : '#') + o, e.forced) && v && pe(v, o)),
          (a = g[o]),
          n && (u = e.noTargetGet ? (f = Xe(v, o)) && f.value : v[o]),
          (i = n && u ? u : t[o]),
          (n && typeof a == typeof i) ||
            ((c =
              e.bind && n
                ? He(i, s)
                : e.wrap && n
                ? We(i)
                : d && b(i)
                ? y(i)
                : i),
            (e.sham || (i && i.sham) || (a && a.sham)) && Ke(c, 'sham', !0),
            Ke(g, o, c),
            d &&
              (pe(M, (r = l + 'Prototype')) || Ke(M, r, {}),
              Ke(M[r], o, i),
              e.real && m && !m[o] && Ke(m, o, i)))
    },
    Qe = se('keys'),
    $e = function (e) {
      return Qe[e] || (Qe[e] = ge(e))
    },
    Ze = !w(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      )
    }),
    et = $e('IE_PROTO'),
    tt = s.Object,
    nt = tt.prototype,
    rt = Ze
      ? tt.getPrototypeOf
      : function (e) {
          var t = fe(e)
          if (pe(t, et)) return t[et]
          var n = t.constructor
          return b(n) && t instanceof n
            ? n.prototype
            : t instanceof tt
            ? nt
            : null
        },
    ot = s.String,
    it = s.TypeError,
    at =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var e,
              t = !1,
              n = {}
            try {
              ;(e = y(
                Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
                  .set
              ))(n, []),
                (t = n instanceof Array)
            } catch (e) {}
            return function (n, r) {
              return (
                ze(n),
                (function (e) {
                  if ('object' == typeof e || b(e)) return e
                  throw it("Can't set " + ot(e) + ' as a prototype')
                })(r),
                t ? e(n, r) : (n.__proto__ = r),
                n
              )
            }
          })()
        : void 0),
    ut = Math.ceil,
    st = Math.floor,
    ct = function (e) {
      var t = +e
      return t != t || 0 === t ? 0 : (t > 0 ? st : ut)(t)
    },
    ft = Math.max,
    lt = Math.min,
    pt = function (e, t) {
      var n = ct(e)
      return n < 0 ? ft(n + t, 0) : lt(n, t)
    },
    ht = Math.min,
    dt = function (e) {
      return (t = e.length) > 0 ? ht(ct(t), 9007199254740991) : 0
      var t
    },
    vt = function (e) {
      return function (t, n, r) {
        var o,
          i = D(t),
          a = dt(i),
          u = pt(r, a)
        if (e && n != n) {
          for (; a > u; ) if ((o = i[u++]) != o) return !0
        } else
          for (; a > u; u++) if ((e || u in i) && i[u] === n) return e || u || 0
        return !e && -1
      }
    },
    gt = {
      includes: vt(!0),
      indexOf: vt(!1),
    },
    mt = {},
    yt = gt.indexOf,
    bt = y([].push),
    wt = function (e, t) {
      var n,
        r = D(e),
        o = 0,
        i = []
      for (n in r) !pe(mt, n) && pe(r, n) && bt(i, n)
      for (; t.length > o; ) pe(r, (n = t[o++])) && (~yt(i, n) || bt(i, n))
      return i
    },
    _t = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ],
    St = _t.concat('length', 'prototype'),
    Ot = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return wt(e, St)
        },
    },
    Et = {
      f: Object.getOwnPropertySymbols,
    },
    Rt = y([].concat),
    jt =
      H('Reflect', 'ownKeys') ||
      function (e) {
        var t = Ot.f(ze(e)),
          n = Et.f
        return n ? Rt(t, n(e)) : t
      },
    Pt =
      Object.keys ||
      function (e) {
        return wt(e, _t)
      },
    xt = _
      ? Object.defineProperties
      : function (e, t) {
          ze(e)
          for (var n, r = D(t), o = Pt(t), i = o.length, a = 0; i > a; )
            Je.f(e, (n = o[a++]), r[n])
          return e
        },
    Lt = H('document', 'documentElement'),
    Tt = 'prototype',
    kt = 'script',
    Ct = $e('IE_PROTO'),
    At = function () {},
    It = function (e) {
      return '<' + kt + '>' + e + '</' + kt + '>'
    },
    Ut = function (e) {
      e.write(It('')), e.close()
      var t = e.parentWindow.Object
      return (e = null), t
    },
    Dt = function () {
      try {
        K = new ActiveXObject('htmlfile')
      } catch (e) {}
      var e, t, n
      Dt =
        'undefined' != typeof document
          ? document.domain && K
            ? Ut(K)
            : ((t = xe('iframe')),
              (n = 'java' + kt + ':'),
              (t.style.display = 'none'),
              Lt.appendChild(t),
              (t.src = String(n)),
              (e = t.contentWindow.document).open(),
              e.write(It('document.F=Object')),
              e.close(),
              e.F)
          : Ut(K)
      for (var r = _t.length; r--; ) delete Dt[Tt][_t[r]]
      return Dt()
    }
  mt[Ct] = !0
  var Nt =
      Object.create ||
      function (e, t) {
        var n
        return (
          null !== e
            ? ((At[Tt] = ze(e)), (n = new At()), (At[Tt] = null), (n[Ct] = e))
            : (n = Dt()),
          void 0 === t ? n : xt(n, t)
        )
      },
    Mt = y(''.replace),
    Ft = String(Error('zxcasd').stack),
    Ht = /\n\s*at [^:]*:[^\n]*/,
    qt = Ht.test(Ft),
    Bt = {},
    zt = _e('iterator'),
    Gt = Array.prototype,
    Vt = function (e) {
      return void 0 !== e && (Bt.Array === e || Gt[zt] === e)
    },
    Jt = {}
  Jt[_e('toStringTag')] = 'z'
  var Kt = '[object z]' === String(Jt),
    Xt = _e('toStringTag'),
    Wt = s.Object,
    Yt =
      'Arguments' ==
      T(
        (function () {
          return arguments
        })()
      ),
    Qt = Kt
      ? T
      : function (e) {
          var t, n, r
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t]
                } catch (e) {}
              })((t = Wt(e)), Xt))
            ? n
            : Yt
            ? T(t)
            : 'Object' == (r = T(t)) && b(t.callee)
            ? 'Arguments'
            : r
        },
    $t = _e('iterator'),
    Zt = function (e) {
      if (null != e) return re(e, $t) || re(e, '@@iterator') || Bt[Qt(e)]
    },
    en = s.TypeError,
    tn = function (e, t) {
      var n = arguments.length < 2 ? Zt(e) : t
      if (ne(n)) return ze(O(n, e))
      throw en(ee(e) + ' is not iterable')
    },
    nn = function (e, t, n) {
      var r, o
      ze(e)
      try {
        if (!(r = re(e, 'return'))) {
          if ('throw' === t) throw n
          return n
        }
        r = O(r, e)
      } catch (e) {
        ;(o = !0), (r = e)
      }
      if ('throw' === t) throw n
      if (o) throw r
      return ze(r), n
    },
    rn = s.TypeError,
    on = function (e, t) {
      ;(this.stopped = e), (this.result = t)
    },
    an = on.prototype,
    un = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u,
        s,
        c,
        f = n && n.that,
        l = !(!n || !n.AS_ENTRIES),
        p = !(!n || !n.IS_ITERATOR),
        h = !(!n || !n.INTERRUPTED),
        d = He(t, f),
        v = function (e) {
          return r && nn(r, 'normal', e), new on(!0, e)
        },
        g = function (e) {
          return l
            ? (ze(e), h ? d(e[0], e[1], v) : d(e[0], e[1]))
            : h
            ? d(e, v)
            : d(e)
        }
      if (p) r = e
      else {
        if (!(o = Zt(e))) throw rn(ee(e) + ' is not iterable')
        if (Vt(o)) {
          for (i = 0, a = dt(e); a > i; i++)
            if ((u = g(e[i])) && q(an, u)) return u
          return new on(!1)
        }
        r = tn(e, o)
      }
      for (s = r.next; !(c = O(s, r)).done; ) {
        try {
          u = g(c.value)
        } catch (e) {
          nn(r, 'throw', e)
        }
        if ('object' == typeof u && u && q(an, u)) return u
      }
      return new on(!1)
    },
    sn = s.String,
    cn = function (e) {
      if ('Symbol' === Qt(e))
        throw TypeError('Cannot convert a Symbol value to a string')
      return sn(e)
    },
    fn = !w(function () {
      var e = Error('a')
      return (
        !('stack' in e) ||
        (Object.defineProperty(e, 'stack', P(1, 7)), 7 !== e.stack)
      )
    }),
    ln = _e('toStringTag'),
    pn = s.Error,
    hn = [].push,
    dn = function (e, t) {
      var n,
        r = arguments.length > 2 ? arguments[2] : void 0,
        o = q(vn, this)
      at
        ? (n = at(new pn(), o ? rt(this) : vn))
        : ((n = o ? this : Nt(vn)), Ke(n, ln, 'Error')),
        void 0 !== t &&
          Ke(
            n,
            'message',
            (function (e, t) {
              return void 0 === e ? (arguments.length < 2 ? '' : t) : cn(e)
            })(t)
          ),
        fn &&
          Ke(
            n,
            'stack',
            (function (e, t) {
              if (qt && 'string' == typeof e) for (; t--; ) e = Mt(e, Ht, '')
              return e
            })(n.stack, 1)
          ),
        (function (e, t) {
          N(t) && 'cause' in t && Ke(e, 'cause', t.cause)
        })(n, r)
      var i = []
      return (
        un(e, hn, {
          that: i,
        }),
        Ke(n, 'errors', i),
        n
      )
    }
  at
    ? at(dn, pn)
    : (function (e, t, n) {
        for (var r = jt(t), o = Je.f, i = ke.f, a = 0; a < r.length; a++) {
          var u = r[a]
          pe(e, u) || (n && pe(n, u)) || o(e, u, i(t, u))
        }
      })(dn, pn, {
        name: !0,
      })
  var vn = (dn.prototype = Nt(pn.prototype, {
    constructor: P(1, dn),
    message: P(1, ''),
    name: P(1, 'AggregateError'),
  }))
  Ye(
    {
      global: !0,
    },
    {
      AggregateError: dn,
    }
  )
  var gn = y(Function.toString)
  b(ue.inspectSource) ||
    (ue.inspectSource = function (e) {
      return gn(e)
    })
  var mn,
    yn,
    bn,
    wn = ue.inspectSource,
    _n = s.WeakMap,
    Sn = b(_n) && /native code/.test(wn(_n)),
    On = 'Object already initialized',
    En = s.TypeError,
    Rn = s.WeakMap
  if (Sn || ue.state) {
    var jn = ue.state || (ue.state = new Rn()),
      Pn = y(jn.get),
      xn = y(jn.has),
      Ln = y(jn.set)
    ;(mn = function (e, t) {
      if (xn(jn, e)) throw new En(On)
      return (t.facade = e), Ln(jn, e, t), t
    }),
      (yn = function (e) {
        return Pn(jn, e) || {}
      }),
      (bn = function (e) {
        return xn(jn, e)
      })
  } else {
    var Tn = $e('state')
    ;(mt[Tn] = !0),
      (mn = function (e, t) {
        if (pe(e, Tn)) throw new En(On)
        return (t.facade = e), Ke(e, Tn, t), t
      }),
      (yn = function (e) {
        return pe(e, Tn) ? e[Tn] : {}
      }),
      (bn = function (e) {
        return pe(e, Tn)
      })
  }
  var kn,
    Cn,
    An,
    In = {
      set: mn,
      get: yn,
      has: bn,
      enforce: function (e) {
        return bn(e) ? yn(e) : mn(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var n
          if (!N(t) || (n = yn(t)).type !== e)
            throw En('Incompatible receiver, ' + e + ' required')
          return n
        }
      },
    },
    Un = Function.prototype,
    Dn = _ && Object.getOwnPropertyDescriptor,
    Nn = pe(Un, 'name'),
    Mn = {
      EXISTS: Nn,
      PROPER: Nn && 'something' === function () {}.name,
      CONFIGURABLE: Nn && (!_ || (_ && Dn(Un, 'name').configurable)),
    },
    Fn = function (e, t, n, r) {
      r && r.enumerable ? (e[t] = n) : Ke(e, t, n)
    },
    Hn = _e('iterator'),
    qn = !1
  ;[].keys &&
    ('next' in (An = [].keys())
      ? (Cn = rt(rt(An))) !== Object.prototype && (kn = Cn)
      : (qn = !0))
  var Bn =
    null == kn ||
    w(function () {
      var e = {}
      return kn[Hn].call(e) !== e
    })
  ;(kn = Bn ? {} : Nt(kn)),
    b(kn[Hn]) ||
      Fn(kn, Hn, function () {
        return this
      })
  var zn = {
      IteratorPrototype: kn,
      BUGGY_SAFARI_ITERATORS: qn,
    },
    Gn = Kt
      ? {}.toString
      : function () {
          return '[object ' + Qt(this) + ']'
        },
    Vn = Je.f,
    Jn = _e('toStringTag'),
    Kn = function (e, t, n, r) {
      if (e) {
        var o = n ? e : e.prototype
        pe(o, Jn) ||
          Vn(o, Jn, {
            configurable: !0,
            value: t,
          }),
          r && !Kt && Ke(o, 'toString', Gn)
      }
    },
    Xn = zn.IteratorPrototype,
    Wn = function () {
      return this
    },
    Yn = function (e, t, n, r) {
      var o = t + ' Iterator'
      return (
        (e.prototype = Nt(Xn, {
          next: P(+!r, n),
        })),
        Kn(e, o, !1, !0),
        (Bt[o] = Wn),
        e
      )
    },
    Qn = Mn.PROPER,
    $n = zn.BUGGY_SAFARI_ITERATORS,
    Zn = _e('iterator'),
    er = 'keys',
    tr = 'values',
    nr = 'entries',
    rr = function () {
      return this
    },
    or = function (e, t, n, r, o, i, a) {
      Yn(n, t, r)
      var u,
        s,
        c,
        f = function (e) {
          if (e === o && v) return v
          if (!$n && e in h) return h[e]
          switch (e) {
            case er:
            case tr:
            case nr:
              return function () {
                return new n(this, e)
              }
          }
          return function () {
            return new n(this)
          }
        },
        l = t + ' Iterator',
        p = !1,
        h = e.prototype,
        d = h[Zn] || h['@@iterator'] || (o && h[o]),
        v = (!$n && d) || f(o),
        g = ('Array' == t && h.entries) || d
      if (
        (g &&
          (u = rt(g.call(new e()))) !== Object.prototype &&
          u.next &&
          (Kn(u, l, !0, !0), (Bt[l] = rr)),
        Qn &&
          o == tr &&
          d &&
          d.name !== tr &&
          ((p = !0),
          (v = function () {
            return O(d, this)
          })),
        o)
      )
        if (
          ((s = {
            values: f(tr),
            keys: i ? v : f(er),
            entries: f(nr),
          }),
          a)
        )
          for (c in s) ($n || p || !(c in h)) && Fn(h, c, s[c])
        else
          Ye(
            {
              target: t,
              proto: !0,
              forced: $n || p,
            },
            s
          )
      return (
        a &&
          h[Zn] !== v &&
          Fn(h, Zn, v, {
            name: o,
          }),
        (Bt[t] = v),
        s
      )
    }
  Je.f
  var ir = 'Array Iterator',
    ar = In.set,
    ur = In.getterFor(ir)
  or(
    Array,
    'Array',
    function (e, t) {
      ar(this, {
        type: ir,
        target: D(e),
        index: 0,
        kind: t,
      })
    },
    function () {
      var e = ur(this),
        t = e.target,
        n = e.kind,
        r = e.index++
      return !t || r >= t.length
        ? ((e.target = void 0),
          {
            value: void 0,
            done: !0,
          })
        : 'keys' == n
        ? {
            value: r,
            done: !1,
          }
        : 'values' == n
        ? {
            value: t[r],
            done: !1,
          }
        : {
            value: [r, t[r]],
            done: !1,
          }
    },
    'values'
  ),
    (Bt.Arguments = Bt.Array)
  var sr = s.Promise,
    cr = function (e, t, n) {
      for (var r in t) n && n.unsafe && e[r] ? (e[r] = t[r]) : Fn(e, r, t[r], n)
      return e
    },
    fr = _e('species'),
    lr = s.TypeError,
    pr = function (e, t) {
      if (q(t, e)) return e
      throw lr('Incorrect invocation')
    },
    hr = _e('iterator'),
    dr = !1
  try {
    var vr = 0,
      gr = {
        next: function () {
          return {
            done: !!vr++,
          }
        },
        return: function () {
          dr = !0
        },
      }
    ;(gr[hr] = function () {
      return this
    }),
      Array.from(gr, function () {
        throw 2
      })
  } catch (e) {}
  var mr = function () {},
    yr = [],
    br = H('Reflect', 'construct'),
    wr = /^\s*(?:class|function)\b/,
    _r = y(wr.exec),
    Sr = !wr.exec(mr),
    Or = function (e) {
      if (!b(e)) return !1
      try {
        return br(mr, yr, e), !0
      } catch (e) {
        return !1
      }
    },
    Er = function (e) {
      if (!b(e)) return !1
      switch (Qt(e)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
          return !1
      }
      try {
        return Sr || !!_r(wr, wn(e))
      } catch (e) {
        return !0
      }
    }
  Er.sham = !0
  var Rr,
    jr,
    Pr,
    xr,
    Lr =
      !br ||
      w(function () {
        var e
        return (
          Or(Or.call) ||
          !Or(Object) ||
          !Or(function () {
            e = !0
          }) ||
          e
        )
      })
        ? Er
        : Or,
    Tr = s.TypeError,
    kr = _e('species'),
    Cr = function (e, t) {
      var n,
        r = ze(e).constructor
      return void 0 === r || null == (n = ze(r)[kr])
        ? t
        : (function (e) {
            if (Lr(e)) return e
            throw Tr(ee(e) + ' is not a constructor')
          })(n)
    },
    Ar = y([].slice),
    Ir = /(?:ipad|iphone|ipod).*applewebkit/i.test(B),
    Ur = 'process' == T(s.process),
    Dr = s.setImmediate,
    Nr = s.clearImmediate,
    Mr = s.process,
    Fr = s.Dispatch,
    Hr = s.Function,
    qr = s.MessageChannel,
    Br = s.String,
    zr = 0,
    Gr = {},
    Vr = 'onreadystatechange'
  try {
    Rr = s.location
  } catch (e) {}
  var Jr = function (e) {
      if (pe(Gr, e)) {
        var t = Gr[e]
        delete Gr[e], t()
      }
    },
    Kr = function (e) {
      return function () {
        Jr(e)
      }
    },
    Xr = function (e) {
      Jr(e.data)
    },
    Wr = function (e) {
      s.postMessage(Br(e), Rr.protocol + '//' + Rr.host)
    }
  ;(Dr && Nr) ||
    ((Dr = function (e) {
      var t = Ar(arguments, 1)
      return (
        (Gr[++zr] = function () {
          h(b(e) ? e : Hr(e), void 0, t)
        }),
        jr(zr),
        zr
      )
    }),
    (Nr = function (e) {
      delete Gr[e]
    }),
    Ur
      ? (jr = function (e) {
          Mr.nextTick(Kr(e))
        })
      : Fr && Fr.now
      ? (jr = function (e) {
          Fr.now(Kr(e))
        })
      : qr && !Ir
      ? ((xr = (Pr = new qr()).port2),
        (Pr.port1.onmessage = Xr),
        (jr = He(xr.postMessage, xr)))
      : s.addEventListener &&
        b(s.postMessage) &&
        !s.importScripts &&
        Rr &&
        'file:' !== Rr.protocol &&
        !w(Wr)
      ? ((jr = Wr), s.addEventListener('message', Xr, !1))
      : (jr =
          Vr in xe('script')
            ? function (e) {
                Lt.appendChild(xe('script'))[Vr] = function () {
                  Lt.removeChild(this), Jr(e)
                }
              }
            : function (e) {
                setTimeout(Kr(e), 0)
              }))
  var Yr,
    Qr,
    $r,
    Zr,
    eo,
    to,
    no,
    ro,
    oo = {
      set: Dr,
      clear: Nr,
    },
    io = /ipad|iphone|ipod/i.test(B) && void 0 !== s.Pebble,
    ao = /web0s(?!.*chrome)/i.test(B),
    uo = ke.f,
    so = oo.set,
    co = s.MutationObserver || s.WebKitMutationObserver,
    fo = s.document,
    lo = s.process,
    po = s.Promise,
    ho = uo(s, 'queueMicrotask'),
    vo = ho && ho.value
  vo ||
    ((Yr = function () {
      var e, t
      for (Ur && (e = lo.domain) && e.exit(); Qr; ) {
        ;(t = Qr.fn), (Qr = Qr.next)
        try {
          t()
        } catch (e) {
          throw (Qr ? Zr() : ($r = void 0), e)
        }
      }
      ;($r = void 0), e && e.enter()
    }),
    Ir || Ur || ao || !co || !fo
      ? !io && po && po.resolve
        ? (((no = po.resolve(void 0)).constructor = po),
          (ro = He(no.then, no)),
          (Zr = function () {
            ro(Yr)
          }))
        : Ur
        ? (Zr = function () {
            lo.nextTick(Yr)
          })
        : ((so = He(so, s)),
          (Zr = function () {
            so(Yr)
          }))
      : ((eo = !0),
        (to = fo.createTextNode('')),
        new co(Yr).observe(to, {
          characterData: !0,
        }),
        (Zr = function () {
          to.data = eo = !eo
        })))
  var go =
      vo ||
      function (e) {
        var t = {
          fn: e,
          next: void 0,
        }
        $r && ($r.next = t), Qr || ((Qr = t), Zr()), ($r = t)
      },
    mo = function (e) {
      var t, n
      ;(this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError('Bad Promise constructor')
        ;(t = e), (n = r)
      })),
        (this.resolve = ne(t)),
        (this.reject = ne(n))
    },
    yo = {
      f: function (e) {
        return new mo(e)
      },
    },
    bo = function (e, t) {
      if ((ze(e), N(t) && t.constructor === e)) return t
      var n = yo.f(e)
      return (0, n.resolve)(t), n.promise
    },
    wo = function (e) {
      try {
        return {
          error: !1,
          value: e(),
        }
      } catch (e) {
        return {
          error: !0,
          value: e,
        }
      }
    },
    _o = function () {
      ;(this.head = null), (this.tail = null)
    }
  _o.prototype = {
    add: function (e) {
      var t = {
        item: e,
        next: null,
      }
      this.head ? (this.tail.next = t) : (this.head = t), (this.tail = t)
    },
    get: function () {
      var e = this.head
      if (e)
        return (
          (this.head = e.next), this.tail === e && (this.tail = null), e.item
        )
    },
  }
  var So,
    Oo,
    Eo,
    Ro = _o,
    jo = 'object' == typeof window,
    Po = oo.set,
    xo = _e('species'),
    Lo = 'Promise',
    To = In.getterFor(Lo),
    ko = In.set,
    Co = In.getterFor(Lo),
    Ao = sr && sr.prototype,
    Io = sr,
    Uo = Ao,
    Do = s.TypeError,
    No = s.document,
    Mo = s.process,
    Fo = yo.f,
    Ho = Fo,
    qo = !!(No && No.createEvent && s.dispatchEvent),
    Bo = b(s.PromiseRejectionEvent),
    zo = 'unhandledrejection',
    Go = Me(Lo, function () {
      var e = wn(Io),
        t = e !== String(Io)
      if (!t && 66 === X) return !0
      if (!Uo.finally) return !0
      if (X >= 51 && /native code/.test(e)) return !1
      var n = new Io(function (e) {
          e(1)
        }),
        r = function (e) {
          e(
            function () {},
            function () {}
          )
        }
      return (
        ((n.constructor = {})[xo] = r),
        !(n.then(function () {}) instanceof r) || (!t && jo && !Bo)
      )
    }),
    Vo =
      Go ||
      !(function (e, t) {
        if (!t && !dr) return !1
        var n = !1
        try {
          var r = {}
          ;(r[hr] = function () {
            return {
              next: function () {
                return {
                  done: (n = !0),
                }
              },
            }
          }),
            e(r)
        } catch (e) {}
        return n
      })(function (e) {
        Io.all(e).catch(function () {})
      }),
    Jo = function (e) {
      var t
      return !(!N(e) || !b((t = e.then))) && t
    },
    Ko = function (e, t) {
      var n,
        r,
        o,
        i = t.value,
        a = 1 == t.state,
        u = a ? e.ok : e.fail,
        s = e.resolve,
        c = e.reject,
        f = e.domain
      try {
        u
          ? (a || (2 === t.rejection && $o(t), (t.rejection = 1)),
            !0 === u
              ? (n = i)
              : (f && f.enter(), (n = u(i)), f && (f.exit(), (o = !0))),
            n === e.promise
              ? c(Do('Promise-chain cycle'))
              : (r = Jo(n))
              ? O(r, n, s, c)
              : s(n))
          : c(i)
      } catch (e) {
        f && !o && f.exit(), c(e)
      }
    },
    Xo = function (e, t) {
      e.notified ||
        ((e.notified = !0),
        go(function () {
          for (var n, r = e.reactions; (n = r.get()); ) Ko(n, e)
          ;(e.notified = !1), t && !e.rejection && Yo(e)
        }))
    },
    Wo = function (e, t, n) {
      var r, o
      qo
        ? (((r = No.createEvent('Event')).promise = t),
          (r.reason = n),
          r.initEvent(e, !1, !0),
          s.dispatchEvent(r))
        : (r = {
            promise: t,
            reason: n,
          }),
        !Bo && (o = s['on' + e])
          ? o(r)
          : e === zo &&
            (function (e, t) {
              var n = s.console
              n &&
                n.error &&
                (1 == arguments.length ? n.error(e) : n.error(e, t))
            })('Unhandled promise rejection', n)
    },
    Yo = function (e) {
      O(Po, s, function () {
        var t,
          n = e.facade,
          r = e.value
        if (
          Qo(e) &&
          ((t = wo(function () {
            Ur ? Mo.emit('unhandledRejection', r, n) : Wo(zo, n, r)
          })),
          (e.rejection = Ur || Qo(e) ? 2 : 1),
          t.error)
        )
          throw t.value
      })
    },
    Qo = function (e) {
      return 1 !== e.rejection && !e.parent
    },
    $o = function (e) {
      O(Po, s, function () {
        var t = e.facade
        Ur ? Mo.emit('rejectionHandled', t) : Wo('rejectionhandled', t, e.value)
      })
    },
    Zo = function (e, t, n) {
      return function (r) {
        e(t, r, n)
      }
    },
    ei = function (e, t, n) {
      e.done ||
        ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), Xo(e, !0))
    },
    ti = function (e, t, n) {
      if (!e.done) {
        ;(e.done = !0), n && (e = n)
        try {
          if (e.facade === t) throw Do("Promise can't be resolved itself")
          var r = Jo(t)
          r
            ? go(function () {
                var n = {
                  done: !1,
                }
                try {
                  O(r, t, Zo(ti, n, e), Zo(ei, n, e))
                } catch (t) {
                  ei(n, t, e)
                }
              })
            : ((e.value = t), (e.state = 1), Xo(e, !1))
        } catch (t) {
          ei(
            {
              done: !1,
            },
            t,
            e
          )
        }
      }
    }
  Go &&
    ((Uo = (Io = function (e) {
      pr(this, Uo), ne(e), O(So, this)
      var t = To(this)
      try {
        e(Zo(ti, t), Zo(ei, t))
      } catch (e) {
        ei(t, e)
      }
    }).prototype),
    ((So = function (e) {
      ko(this, {
        type: Lo,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new Ro(),
        rejection: !1,
        state: 0,
        value: void 0,
      })
    }).prototype = cr(Uo, {
      then: function (e, t) {
        var n = Co(this),
          r = Fo(Cr(this, Io))
        return (
          (n.parent = !0),
          (r.ok = !b(e) || e),
          (r.fail = b(t) && t),
          (r.domain = Ur ? Mo.domain : void 0),
          0 == n.state
            ? n.reactions.add(r)
            : go(function () {
                Ko(r, n)
              }),
          r.promise
        )
      },
      catch: function (e) {
        return this.then(void 0, e)
      },
    })),
    (Oo = function () {
      var e = new So(),
        t = To(e)
      ;(this.promise = e), (this.resolve = Zo(ti, t)), (this.reject = Zo(ei, t))
    }),
    (yo.f = Fo =
      function (e) {
        return e === Io || e === Eo ? new Oo(e) : Ho(e)
      })),
    Ye(
      {
        global: !0,
        wrap: !0,
        forced: Go,
      },
      {
        Promise: Io,
      }
    ),
    Kn(Io, Lo, !1, !0),
    (function (e) {
      var t = H(e),
        n = Je.f
      _ &&
        t &&
        !t[fr] &&
        n(t, fr, {
          configurable: !0,
          get: function () {
            return this
          },
        })
    })(Lo),
    (Eo = H(Lo)),
    Ye(
      {
        target: Lo,
        stat: !0,
        forced: Go,
      },
      {
        reject: function (e) {
          var t = Fo(this)
          return O(t.reject, void 0, e), t.promise
        },
      }
    ),
    Ye(
      {
        target: Lo,
        stat: !0,
        forced: true,
      },
      {
        resolve: function (e) {
          return bo(this === Eo ? Io : this, e)
        },
      }
    ),
    Ye(
      {
        target: Lo,
        stat: !0,
        forced: Vo,
      },
      {
        all: function (e) {
          var t = this,
            n = Fo(t),
            r = n.resolve,
            o = n.reject,
            i = wo(function () {
              var n = ne(t.resolve),
                i = [],
                a = 0,
                u = 1
              un(e, function (e) {
                var s = a++,
                  c = !1
                u++,
                  O(n, t, e).then(function (e) {
                    c || ((c = !0), (i[s] = e), --u || r(i))
                  }, o)
              }),
                --u || r(i)
            })
          return i.error && o(i.value), n.promise
        },
        race: function (e) {
          var t = this,
            n = Fo(t),
            r = n.reject,
            o = wo(function () {
              var o = ne(t.resolve)
              un(e, function (e) {
                O(o, t, e).then(n.resolve, r)
              })
            })
          return o.error && r(o.value), n.promise
        },
      }
    ),
    Ye(
      {
        target: 'Promise',
        stat: !0,
      },
      {
        allSettled: function (e) {
          var t = this,
            n = yo.f(t),
            r = n.resolve,
            o = n.reject,
            i = wo(function () {
              var n = ne(t.resolve),
                o = [],
                i = 0,
                a = 1
              un(e, function (e) {
                var u = i++,
                  s = !1
                a++,
                  O(n, t, e).then(
                    function (e) {
                      s ||
                        ((s = !0),
                        (o[u] = {
                          status: 'fulfilled',
                          value: e,
                        }),
                        --a || r(o))
                    },
                    function (e) {
                      s ||
                        ((s = !0),
                        (o[u] = {
                          status: 'rejected',
                          reason: e,
                        }),
                        --a || r(o))
                    }
                  )
              }),
                --a || r(o)
            })
          return i.error && o(i.value), n.promise
        },
      }
    )
  var ni = 'No one promise resolved'
  Ye(
    {
      target: 'Promise',
      stat: !0,
    },
    {
      any: function (e) {
        var t = this,
          n = H('AggregateError'),
          r = yo.f(t),
          o = r.resolve,
          i = r.reject,
          a = wo(function () {
            var r = ne(t.resolve),
              a = [],
              u = 0,
              s = 1,
              c = !1
            un(e, function (e) {
              var f = u++,
                l = !1
              s++,
                O(r, t, e).then(
                  function (e) {
                    l || c || ((c = !0), o(e))
                  },
                  function (e) {
                    l || c || ((l = !0), (a[f] = e), --s || i(new n(a, ni)))
                  }
                )
            }),
              --s || i(new n(a, ni))
          })
        return a.error && i(a.value), r.promise
      },
    }
  )
  var ri =
    !!sr &&
    w(function () {
      sr.prototype.finally.call(
        {
          then: function () {},
        },
        function () {}
      )
    })
  Ye(
    {
      target: 'Promise',
      proto: !0,
      real: !0,
      forced: ri,
    },
    {
      finally: function (e) {
        var t = Cr(this, H('Promise')),
          n = b(e)
        return this.then(
          n
            ? function (n) {
                return bo(t, e()).then(function () {
                  return n
                })
              }
            : e,
          n
            ? function (n) {
                return bo(t, e()).then(function () {
                  throw n
                })
              }
            : e
        )
      },
    }
  )
  var oi = y(''.charAt),
    ii = y(''.charCodeAt),
    ai = y(''.slice),
    ui = function (e) {
      return function (t, n) {
        var r,
          o,
          i = cn(U(t)),
          a = ct(n),
          u = i.length
        return a < 0 || a >= u
          ? e
            ? ''
            : void 0
          : (r = ii(i, a)) < 55296 ||
            r > 56319 ||
            a + 1 === u ||
            (o = ii(i, a + 1)) < 56320 ||
            o > 57343
          ? e
            ? oi(i, a)
            : r
          : e
          ? ai(i, a, a + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536
      }
    },
    si = {
      codeAt: ui(!1),
      charAt: ui(!0),
    },
    ci = si.charAt,
    fi = 'String Iterator',
    li = In.set,
    pi = In.getterFor(fi)
  or(
    String,
    'String',
    function (e) {
      li(this, {
        type: fi,
        string: cn(e),
        index: 0,
      })
    },
    function () {
      var e,
        t = pi(this),
        n = t.string,
        r = t.index
      return r >= n.length
        ? {
            value: void 0,
            done: !0,
          }
        : ((e = ci(n, r)),
          (t.index += e.length),
          {
            value: e,
            done: !1,
          })
    }
  )
  var hi = M.Promise,
    di = _e('toStringTag')
  for (var vi in {
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
  }) {
    var gi = s[vi],
      mi = gi && gi.prototype
    mi && Qt(mi) !== di && Ke(mi, di, vi), (Bt[vi] = Bt.Array)
  }
  var yi = hi,
    bi = 's_v_web_id',
    wi = '/vc/setting',
    _i = function (e) {
      var t = e.url,
        n = e.method,
        r = e.data,
        o = e.config,
        i = null == o ? void 0 : o.slardar
      return new yi(function (a, u) {
        var s = new XMLHttpRequest(),
          c = Date.now(),
          f = function () {
            i &&
              -1 !== e.url.indexOf(wi) &&
              i.reportHttp({
                url: t,
                method: n,
                duration: Date.now() - c,
                status: s.status,
              })
          }
        ;(s.onreadystatechange = function () {
          if (s.readyState === s.DONE) {
            if (s.status >= 200 && s.status < 300) {
              var e = {},
                t = s.response || s.responseText,
                n =
                  s.getResponseHeader('Content-Type') ||
                  s.getResponseHeader('content-type')
              if (n && -1 !== n.indexOf('application/json'))
                try {
                  e = JSON.parse(t)
                } catch (e) {}
              else e = t
              setTimeout(function () {
                a(e)
              }, 0)
            } else
              u(
                new TypeError(
                  'Network request failed, status: '.concat(s.status)
                )
              )
            f()
          }
        }),
          (s.onerror = function () {
            setTimeout(function () {
              u(new TypeError('Network request failed, occur error'))
            }, 0),
              f()
          }),
          (s.ontimeout = function () {
            setTimeout(function () {
              u(new TypeError('Network request failed, timeout'))
            }, 0),
              f()
          }),
          (s.onabort = function () {
            setTimeout(function () {
              u(new DOMException('Aborted', 'AbortError'))
            }, 0),
              f()
          })
        var l = t
        if (
          ((null == o ? void 0 : o.params) &&
            (l = ''.concat(l, '?').concat(
              (function (e) {
                for (var t = Object.keys(e), n = '', r = 0; r < t.length; r++) {
                  var o = t[r],
                    i = e[o],
                    a = ''
                      .concat(encodeURIComponent(o), '=')
                      .concat(encodeURIComponent(i))
                  n = r >= 1 ? ''.concat(n, '&').concat(a) : a
                }
                return n
              })(o.params)
            )),
          s.open(n, l, !0),
          (null == o ? void 0 : o.timeout) && 'number' == typeof o.timeout
            ? (s.timeout = o.timeout)
            : (s.timeout = 5e3),
          null == o ? void 0 : o.headers)
        )
          for (
            var p = o.headers, h = 0, d = Object.keys(p);
            h < d.length;
            h++
          ) {
            var v = d[h]
            s.setRequestHeader(v, p[v])
          }
        ;(null == o ? void 0 : o.withCredentials) &&
          (s.withCredentials = o.withCredentials),
          'POST' === n.toUpperCase() && r
            ? s.send(JSON.stringify(r))
            : s.send(null)
      })
    },
    Si = function (e, t) {
      return (
        void 0 === t && (t = {}),
        _i({
          url: e,
          method: 'GET',
          config: t,
        })
      )
    },
    Oi = function (e, n, r) {
      void 0 === r && (r = {})
      var o = r.headers
        ? t(
            {
              'Content-Type': 'application/json',
            },
            r.headers
          )
        : {
            'Content-Type': 'application/json',
          }
      return _i({
        url: e,
        method: 'POST',
        data: n,
        config: t(t({}, r), {
          headers: o,
        }),
      })
    },
    Ei = o(function (e, t) {
      var n
      ;(n = function () {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n) t[r] = n[r]
          }
          return t
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return (function n(r) {
          function o() {}
          function i(t, n, i) {
            if ('undefined' != typeof document) {
              'number' ==
                typeof (i = e(
                  {
                    path: '/',
                  },
                  o.defaults,
                  i
                )).expires &&
                (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
                (i.expires = i.expires ? i.expires.toUTCString() : '')
              try {
                var a = JSON.stringify(n)
                ;/^[\{\[]/.test(a) && (n = a)
              } catch (e) {}
              ;(n = r.write
                ? r.write(n, t)
                : encodeURIComponent(String(n)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (t = encodeURIComponent(String(t))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape))
              var u = ''
              for (var s in i)
                i[s] &&
                  ((u += '; ' + s),
                  !0 !== i[s] && (u += '=' + i[s].split(';')[0]))
              return (document.cookie = t + '=' + n + u)
            }
          }
          function a(e, n) {
            if ('undefined' != typeof document) {
              for (
                var o = {},
                  i = document.cookie ? document.cookie.split('; ') : [],
                  a = 0;
                a < i.length;
                a++
              ) {
                var u = i[a].split('='),
                  s = u.slice(1).join('=')
                n || '"' !== s.charAt(0) || (s = s.slice(1, -1))
                try {
                  var c = t(u[0])
                  if (((s = (r.read || r)(s, c) || t(s)), n))
                    try {
                      s = JSON.parse(s)
                    } catch (e) {}
                  if (((o[c] = s), e === c)) break
                } catch (e) {}
              }
              return e ? o[e] : o
            }
          }
          return (
            (o.set = i),
            (o.get = function (e) {
              return a(e, !1)
            }),
            (o.getJSON = function (e) {
              return a(e, !0)
            }),
            (o.remove = function (t, n) {
              i(
                t,
                '',
                e(n, {
                  expires: -1,
                })
              )
            }),
            (o.defaults = {}),
            (o.withConverter = n),
            o
          )
        })(function () {})
      }),
        (e.exports = n())
    })
  var Ri = function () {
      return (
        Ei.get(bi) ||
        (null === localStorage || void 0 === localStorage
          ? void 0
          : localStorage.getItem(bi)) ||
        (function () {
          var e =
              '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
                ''
              ),
            t = e.length,
            n = Date.now().toString(36),
            r = []
          ;(r[8] = r[13] = r[18] = r[23] = '_'), (r[14] = '4')
          for (var o = 0, i = void 0; o < 36; o++)
            r[o] ||
              ((i = 0 | (Math.random() * t)),
              (r[o] = e[19 == o ? (3 & i) | 8 : i]))
          return 'verify_' + n + '_' + r.join('')
        })()
      )
    },
    ji = o(function (e, t) {
      Object.defineProperty(t, '__esModule', {
        value: !0,
      })
      var n = 10,
        r = 1e3,
        o = function (e) {
          return JSON.stringify({
            ev_type: 'batch',
            list: e,
          })
        }
      /*! *****************************************************************************
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
***************************************************************************** */
      var i = function () {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }),
          i.apply(this, arguments)
        )
      }
      function a(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator]
        if (!n) return e
        var r,
          o,
          i = n.call(e),
          a = []
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value)
        } catch (e) {
          o = {
            error: e,
          }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }
      function u(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
        return e.concat(r || Array.prototype.slice.call(t))
      }
      var s = [
          'init',
          'start',
          'config',
          'beforeDestroy',
          'provide',
          'report',
          'beforeBuild',
          'build',
          'beforeSend',
          'send',
          'beforeConfig',
        ],
        c = function () {}
      function f(e) {
        return e
      }
      function l(e) {
        return 'object' == typeof e && null !== e
      }
      var p = Object.prototype
      function h(e) {
        return '[object Array]' === p.toString.call(e)
      }
      function d(e) {
        return 'number' == typeof e
      }
      function v(e) {
        return 'string' == typeof e
      }
      function g(e, t) {
        if (!h(e)) return !1
        if (0 === e.length) return !1
        for (var n = 0; n < e.length; ) {
          if (e[n] === t) return !0
          n++
        }
        return !1
      }
      function m(e) {
        try {
          return v(e) ? e : JSON.stringify(e)
        } catch (e) {
          return '[FAILED_TO_STRINGIFY]:' + String(e)
        }
      }
      var y = 0,
        b = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          console.error.apply(
            console,
            u(['[SDK]', Date.now(), ('' + y++).padStart(8, ' ')], a(e), !1)
          )
        },
        w = 0,
        _ = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          console.warn.apply(
            console,
            u(['[SDK]', Date.now(), ('' + w++).padStart(8, ' ')], a(e), !1)
          )
        },
        S = function (e) {
          return Math.random() < Number(e)
        },
        O = function (e, t) {
          return e < Number(t)
        },
        E = function (e) {
          return function (t) {
            for (var n = t, r = 0; r < e.length && n; r++)
              try {
                n = e[r](n)
              } catch (e) {
                b(e)
              }
            return n
          }
        }
      function R() {
        var e = (function () {
          for (var e = new Array(16), t = 0, n = 0; n < 16; n++)
            0 == (3 & n) && (t = 4294967296 * Math.random()),
              (e[n] = (t >>> ((3 & n) << 3)) & 255)
          return e
        })()
        return (
          (e[6] = (15 & e[6]) | 64),
          (e[8] = (63 & e[8]) | 128),
          (function (e) {
            for (var t = [], n = 0; n < 256; ++n)
              t[n] = (n + 256).toString(16).substr(1)
            var r = 0,
              o = t
            return [
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              '-',
              o[e[r++]],
              o[e[r++]],
              '-',
              o[e[r++]],
              o[e[r++]],
              '-',
              o[e[r++]],
              o[e[r++]],
              '-',
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
            ].join('')
          })(e)
        )
      }
      function j(e) {
        var t,
          n,
          r = e.builder,
          o = e.createSender,
          i = e.createDefaultConfig,
          c = e.createConfigManager,
          f = e.userConfigNormalizer,
          p = e.initConfigNormalizer,
          d = e.validateInitConfig,
          v = {}
        s.forEach(function (e) {
          return (v[e] = [])
        })
        var m = !1,
          y = !1,
          b = [],
          w = [],
          S = {
            getBuilder: function () {
              return r
            },
            getSender: function () {
              return t
            },
            getPreStartQueue: function () {
              return b
            },
            init: function (e) {
              if (m) _('already inited')
              else {
                if (!(e && l(e) && d(e)))
                  throw new Error('invalid InitConfig, init failed')
                var r = i(e)
                if (!r) throw new Error('defaultConfig missing')
                var a = p(e)
                if (
                  ((n = c(r)).setConfig(a),
                  n.onChange(function () {
                    O('config')
                  }),
                  !(t = o(n.getConfig())))
                )
                  throw new Error('sender missing')
                ;(m = !0), O('init', !0)
              }
            },
            set: function (e) {
              m &&
                e &&
                l(e) &&
                (O('beforeConfig', !1, e), null == n || n.setConfig(e))
            },
            config: function (e) {
              if (m)
                return (
                  e &&
                    l(e) &&
                    (O('beforeConfig', !1, e), null == n || n.setConfig(f(e))),
                  null == n ? void 0 : n.getConfig()
                )
            },
            provide: function (e, t) {
              g(w, e)
                ? _('cannot provide ' + e + ', reserved')
                : ((S[e] = t), O('provide', !1, e))
            },
            start: function () {
              var e = this
              m &&
                (y ||
                  null == n ||
                  n.onReady(function () {
                    ;(y = !0),
                      O('start', !0),
                      b.forEach(function (t) {
                        return e.build(t)
                      }),
                      (b = [])
                  }))
            },
            report: function (e) {
              if (e) {
                var t = E(v.report)(e)
                t && (y ? this.build(t) : b.push(t))
              }
            },
            build: function (e) {
              if (y) {
                var t = E(v.beforeBuild)(e)
                if (t) {
                  var n = r.build(t)
                  if (n) {
                    var o = E(v.build)(n)
                    o && this.send(o)
                  }
                }
              }
            },
            send: function (e) {
              if (y) {
                var n = E(v.beforeSend)(e)
                n && (t.send(n), O('send', !1, n))
              }
            },
            destroy: function () {
              O('beforeDestroy', !0)
            },
            on: function (e, t) {
              ;('init' === e && m) || ('start' === e && y)
                ? t()
                : v[e] && v[e].push(t)
            },
            off: function (e, t) {
              v[e] &&
                (v[e] = (function (e, t) {
                  if (!h(e)) return e
                  var n = e.indexOf(t)
                  if (n >= 0) {
                    var r = e.slice()
                    return r.splice(n, 1), r
                  }
                  return e
                })(v[e], t))
            },
          }
        return (w = Object.keys(S)), S
        function O(e, t) {
          void 0 === t && (t = !1)
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r]
          v[e].forEach(function (e) {
            try {
              e.apply(void 0, u([], a(n), !1))
            } catch (e) {}
          }),
            t && (v[e].length = 0)
        }
      }
      var P = function (e) {
        var t = (function () {
          var e = {},
            t = {},
            n = {
              set: function (r, o) {
                return (e[r] = o), (t[r] = m(o)), n
              },
              merge: function (r) {
                return (
                  (e = i(i({}, e), r)),
                  Object.keys(r).forEach(function (e) {
                    t[e] = m(r[e])
                  }),
                  n
                )
              },
              delete: function (r) {
                return delete e[r], delete t[r], n
              },
              clear: function () {
                return (e = {}), (t = {}), n
              },
              get: function (e) {
                return t[e]
              },
              toString: function () {
                return i({}, t)
              },
            }
          return n
        })()
        e.provide('context', t),
          e.on('report', function (e) {
            return (
              e.extra || (e.extra = {}), (e.extra.context = t.toString()), e
            )
          })
      }
      var x = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          var n = (function (e) {
            if (e)
              return (
                e.__SLARDAR_REGISTRY__ ||
                  (e.__SLARDAR_REGISTRY__ = {
                    Slardar: {
                      plugins: [],
                      errors: [],
                    },
                  }),
                e.__SLARDAR_REGISTRY__.Slardar
              )
          })(
            (function () {
              if ('object' == typeof window && l(window)) return window
            })()
          )
          n && (n.errors || (n.errors = []), n.errors.push(e))
        },
        L = 'custom',
        T = function (e) {
          e.provide('sendEvent', function (t) {
            var n = (function (e) {
              if (e && l(e) && e.name && v(e.name)) {
                var t = {
                  name: e.name,
                  type: 'event',
                }
                if ('metrics' in e && l(e.metrics)) {
                  var n = e.metrics,
                    r = {}
                  for (var o in n) d(n[o]) && (r[o] = n[o])
                  t.metrics = r
                }
                if ('categories' in e && l(e.categories)) {
                  var i = e.categories,
                    a = {}
                  for (var o in i) a[o] = m(i[o])
                  t.categories = a
                }
                return t
              }
            })(t)
            n &&
              e.report({
                ev_type: L,
                payload: n,
                extra: {
                  timestamp: Date.now(),
                },
              })
          }),
            e.provide('sendLog', function (t) {
              var n = (function (e) {
                if (e && l(e) && e.content && v(e.content)) {
                  var t = {
                    content: m(e.content),
                    type: 'log',
                    level: 'info',
                  }
                  if (
                    ('level' in e && (t.level = e.level),
                    'extra' in e && l(e.extra))
                  ) {
                    var n = e.extra,
                      r = {},
                      o = {}
                    for (var i in n) d(n[i]) ? (r[i] = n[i]) : (o[i] = m(n[i]))
                    ;(t.metrics = r), (t.categories = o)
                  }
                  return t
                }
              })(t)
              n &&
                e.report({
                  ev_type: L,
                  payload: n,
                  extra: {
                    timestamp: Date.now(),
                  },
                })
            })
        },
        k = function (e, t) {
          var n = e.common || {}
          return (n.sample_rate = t), (e.common = n), e
        },
        C = function (e, t, n, r, o) {
          return e
            ? ((i = o(r, t)),
              function () {
                return i
              })
            : function () {
                return n(t)
              }
          var i
        },
        A = function (e, t, n, r) {
          var o = (function (e, t, n) {
            for (
              var r, o = a(t.split('.')), i = o[0], u = o.slice(1);
              e && u.length > 0;

            )
              (e = e[i]), (i = (r = a(u))[0]), (u = r.slice(1))
            if (e) return n(e, i)
          })(e, t, function (e, t) {
            return e[t]
          })
          return (
            void 0 !== o &&
            (function (e, t, n) {
              switch (n) {
                case 'eq':
                  return g(t, e)
                case 'neq':
                  return !g(t, e)
                case 'gt':
                  return e > t[0]
                case 'gte':
                  return e >= t[0]
                case 'lt':
                  return e < t[0]
                case 'lte':
                  return e <= t[0]
                case 'regex':
                  return Boolean(e.match(new RegExp(t.join('|'))))
                case 'not_regex':
                  return !e.match(new RegExp(t.join('|')))
                default:
                  return !1
              }
            })(
              o,
              (function (e, t) {
                return e.map(function (e) {
                  switch (t) {
                    case 'number':
                      return Number(e)
                    case 'boolean':
                      return '1' === e
                    default:
                      return String(e)
                  }
                })
              })(
                r,
                'boolean' == typeof o ? 'bool' : d(o) ? 'number' : 'string'
              ),
              n
            )
          )
        },
        I = function (e, t) {
          try {
            return 'rule' === t.type
              ? A(e, t.field, t.op, t.values)
              : 'and' === t.type
              ? t.children.every(function (t) {
                  return I(e, t)
                })
              : t.children.some(function (t) {
                  return I(e, t)
                })
          } catch (e) {
            return x(e), !1
          }
        },
        U = function (e, t, n, r) {
          if (!t) return f
          var o = t.sample_rate,
            i = t.include_users,
            a = t.sample_granularity,
            u = t.rules,
            s = t.r,
            c = void 0 === s ? Math.random() : s
          if (g(i, e))
            return function (e) {
              return k(e, 1)
            }
          var l = 'session' === a,
            p = C(l, o, n, c, r),
            h = (function (e, t, n, r, o, i) {
              var a = {}
              return (
                Object.keys(e).forEach(function (u) {
                  var s = e[u],
                    c = s.enable,
                    f = s.sample_rate,
                    l = s.conditional_sample_rules
                  c
                    ? ((a[u] = {
                        enable: c,
                        sample_rate: f,
                        effectiveSampleRate: f * n,
                        hit: C(t, f, r, o, i),
                      }),
                      l &&
                        (a[u].conditional_hit_rules = l.map(function (e) {
                          var a = e.sample_rate,
                            u = e.filter
                          return {
                            sample_rate: a,
                            hit: C(t, a, r, o, i),
                            effectiveSampleRate: a * n,
                            filter: u,
                          }
                        })))
                    : (a[u] = {
                        enable: c,
                        hit: function () {
                          return !1
                        },
                        sample_rate: 0,
                        effectiveSampleRate: 0,
                      })
                }),
                a
              )
            })(u, l, o, n, c, r)
          return function (e) {
            var t
            if (!p()) return !1
            if (!(e.ev_type in h)) return k(e, o)
            if (!h[e.ev_type].enable) return !1
            if (
              null === (t = e.common) || void 0 === t ? void 0 : t.sample_rate
            )
              return e
            var n = h[e.ev_type],
              r = n.conditional_hit_rules
            if (r)
              for (var i = 0; i < r.length; i++)
                if (I(e, r[i].filter))
                  return !!r[i].hit() && k(e, r[i].effectiveSampleRate)
            return !!n.hit() && k(e, n.effectiveSampleRate)
          }
        },
        D = {
          build: function (e) {
            return {
              ev_type: e.ev_type,
              payload: e.payload,
              common: i(i({}, e.extra || {}), e.overrides || {}),
            }
          },
        },
        N = function (e) {
          var t,
            n = e,
            r = {},
            o = c,
            a = c
          return {
            getConfig: function () {
              return n
            },
            setConfig: function (u) {
              var s
              return (
                (r = i(i({}, r), u || {})),
                ((s = i(i({}, e), r)).sample = M(e.sample, r.sample)),
                (n = s),
                a(),
                t || ((t = u), o()),
                n
              )
            },
            onChange: function (e) {
              a = e
            },
            onReady: function (e) {
              ;(o = e), t && o()
            },
          }
        }
      function M(e, t) {
        if (!e || !t) return e || t
        var n = i(i({}, e), t)
        return (
          (n.include_users = u(
            u([], a(e.include_users || []), !1),
            a(t.include_users || []),
            !1
          )),
          (n.rules = u(
            u([], a(Object.keys(e.rules || {})), !1),
            a(Object.keys(t.rules || {})),
            !1
          ).reduce(function (n, r) {
            var o, s
            return (
              r in n ||
                (r in (e.rules || {}) && r in (t.rules || {})
                  ? ((n[r] = i(i({}, e.rules[r]), t.rules[r])),
                    (n[r].conditional_sample_rules = u(
                      u([], a(e.rules[r].conditional_sample_rules || []), !1),
                      a(t.rules[r].conditional_sample_rules || []),
                      !1
                    )))
                  : (n[r] =
                      (null === (o = e.rules) || void 0 === o
                        ? void 0
                        : o[r]) ||
                      (null === (s = t.rules) || void 0 === s
                        ? void 0
                        : s[r]))),
              n
            )
          }, {})),
          n
        )
      }
      var F = 'mon.zijieapi.com',
        H = F,
        q = '1.0.2',
        B = 'SDK_BASE',
        z = '/monitor_web/settings/browser-settings',
        G = '/monitor_browser/collect/batch/',
        V = {
          sample_rate: 1,
          include_users: [],
          sample_granularity: 'session',
          rules: {},
        }
      function J(e) {
        return i({}, e)
      }
      function K(e) {
        return l(e) && 'bid' in e && 'transport' in e
      }
      function X(e) {
        return i({}, e)
      }
      var W = function (e, t) {
          var n = {
            url: '',
            protocol: '',
            domain: '',
            path: '',
            query: '',
            timestamp: Date.now(),
            sdk_version: t.version || q,
            sdk_name: t.name || B,
          }
          return i(i({}, e), {
            extra: i(i({}, n), e.extra || {}),
          })
        },
        Y = function (e) {
          e.on('report', function (t) {
            return W(t, e.config())
          })
        },
        Q = function (e, t) {
          var n = {}
          return (
            (n.bid = t.bid),
            (n.pid = t.pid),
            (n.view_id = t.viewId),
            (n.user_id = t.userId),
            (n.device_id = t.deviceId),
            (n.session_id = t.sessionId),
            (n.release = t.release),
            (n.env = t.env),
            i(i({}, e), {
              extra: i(i({}, n), e.extra || {}),
            })
          )
        },
        $ = function (e) {
          e.on('beforeBuild', function (t) {
            return Q(t, e.config())
          })
        }
      function Z(e) {
        return (function (e) {
          var t = e.transport,
            i = e.endpoint,
            a = e.size,
            u = void 0 === a ? n : a,
            s = e.wait,
            c = void 0 === s ? r : s,
            f = [],
            l = 0
          function p() {
            f.length &&
              (t.post({
                url: i,
                data: this.getBatchData(),
              }),
              (f = []))
          }
          return {
            getSize: function () {
              return u
            },
            getWait: function () {
              return c
            },
            setSize: function (e) {
              u = e
            },
            setWait: function (e) {
              c = e
            },
            getEndpoint: function () {
              return i
            },
            setEndpoint: function (e) {
              i = e
            },
            send: function (e) {
              f.push(e),
                f.length >= u && p.call(this),
                clearTimeout(l),
                (l = setTimeout(p.bind(this), c))
            },
            flush: function () {
              clearTimeout(l), p.call(this)
            },
            getBatchData: function () {
              return f.length ? o(f) : ''
            },
            clear: function () {
              clearTimeout(l), (f = [])
            },
          }
        })(e)
      }
      var ee = function (e, t) {
          return (
            void 0 === t && (t = G),
            (e && e.indexOf('//') >= 0 ? '' : 'https://') + e + t
          )
        },
        te = function () {
          return R()
        },
        ne = function () {
          return R()
        },
        re = function (e) {
          return e + '_' + Date.now()
        },
        oe = function () {
          return R()
        },
        ie = function (e) {
          return {
            bid: '',
            pid: '',
            viewId: re('_'),
            userId: te(),
            deviceId: ne(),
            sessionId: oe(),
            domain: F,
            release: '',
            env: 'production',
            sample: V,
            plugins: {},
            transport: {
              get: c,
              post: c,
            },
          }
        },
        ae = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.createSender,
            r =
              void 0 === n
                ? function (e) {
                    return Z({
                      size: 20,
                      endpoint: ee(e.domain),
                      transport: e.transport,
                    })
                  }
                : n,
            o = t.builder,
            i = void 0 === o ? D : o,
            a = t.createDefaultConfig,
            u = j({
              validateInitConfig: K,
              initConfigNormalizer: J,
              userConfigNormalizer: X,
              createSender: r,
              builder: i,
              createDefaultConfig: void 0 === a ? ie : a,
              createConfigManager: N,
            })
          return (
            P(u),
            $(u),
            Y(u),
            (function (e) {
              e.on('init', function () {
                var t = [],
                  n = e.config()
                n &&
                  n.integrations &&
                  n.integrations.forEach(function (n) {
                    g(t, n.name) ||
                      (t.push(n.name),
                      n.setup(e),
                      n.tearDown && e.on('beforeDestroy', n.tearDown))
                  })
              })
            })(u),
            u
          )
        },
        ue = function (e) {
          void 0 === e && (e = {})
          var t = ae(e)
          return (
            (function (e) {
              e.on('start', function () {
                var t = e.config(),
                  n = t.userId,
                  r = t.sample,
                  o = U(n, r, S, O)
                e.on('build', o)
              })
            })(t),
            T(t),
            t
          )
        },
        se = ue()
      ;(t.BATCH_REPORT_PATH = G),
        (t.CustomPlugin = T),
        (t.DEFAULT_SAMPLE_CONFIG = V),
        (t.DEFAULT_SENDER_SIZE = 20),
        (t.InjectConfigPlugin = $),
        (t.InjectEnvPlugin = Y),
        (t.REPORT_DOMAIN = F),
        (t.SDK_NAME = B),
        (t.SDK_VERSION = q),
        (t.SETTINGS_DOMAIN = H),
        (t.SETTINGS_PATH = z),
        (t.addConfigToReportEvent = Q),
        (t.addEnvToSendEvent = W),
        (t.builder = D),
        (t.createBaseClient = ue),
        (t.createConfigManager = N),
        (t.createMinimalClient = ae),
        (t.default = se),
        (t.getDefaultConfig = ie),
        (t.getDefaultDeviceId = ne),
        (t.getDefaultSessionId = oe),
        (t.getDefaultUserId = te),
        (t.getReportUrl = ee),
        (t.getSettingsUrl = function (e, t) {
          return (
            void 0 === t && (t = z),
            (e && e.indexOf('//') >= 0 ? '' : 'https://') + e + t
          )
        }),
        (t.getViewId = re),
        (t.mergeSampleConfig = M),
        (t.normalizeInitConfig = J),
        (t.normalizeUserConfig = X),
        (t.validateInitConfig = K)
    }),
    Pi = (function () {
      function e() {
        ;(this.isInit = !1), (this.pid = '0'), (this.filename = '')
      }
      return (
        (e.prototype.init = function (e, t) {
          var n, r, o, i, a
          if (!this.isInit) {
            var u =
                null === (n = null == t ? void 0 : t.commonOptions) ||
                void 0 === n
                  ? void 0
                  : n.aid,
              s =
                (null === (r = null == t ? void 0 : t.commonOptions) ||
                void 0 === r
                  ? void 0
                  : r.repoId) ||
                (null === (o = null == t ? void 0 : t.commonOptions) ||
                void 0 === o
                  ? void 0
                  : o.pageId),
              c =
                (null === (i = null == t ? void 0 : t.captchaOptions) ||
                void 0 === i
                  ? void 0
                  : i.logConfig) || {},
              f = c.domain,
              l = c.sample_rate || 0.01,
              p = c.uid
            ;(this.isInit = !0),
              (this.pid = '2385'),
              (this.browserSlardar = ji.createBaseClient())
            var h = {
              transport: {
                get: function () {},
                post: function (t) {
                  var n = t.url,
                    r = t.data
                  e(n, JSON.parse(r)).catch(function (e) {
                    console.log('err: ', e)
                  })
                },
              },
              bid: 'verify_center_cn',
              pid: this.pid,
              release: '4.0.10',
              sample: {
                sample_rate: 1,
                include_users: [],
                sample_granularity: 'session',
                rules: {
                  pageview: {
                    enable: !0,
                    sample_rate: l,
                  },
                  js_error: {
                    enable: !0,
                    sample_rate: 1,
                  },
                  resource_error: {
                    enable: !0,
                    sample_rate: l,
                  },
                  http: {
                    enable: !0,
                    sample_rate: l,
                  },
                  resource: {
                    enable: !0,
                    sample_rate: l,
                  },
                },
              },
            }
            f && (h.domain = f)
            var d =
              null === (a = null == t ? void 0 : t.commonOptions) ||
              void 0 === a
                ? void 0
                : a.did
            d && '0' !== d && (h.deviceId = d),
              p && (h.userId = p),
              this.browserSlardar.init(h),
              this.browserSlardar.context.merge({
                belong: 'hotsdk',
                appId: u ? String(u) : 'unknown',
                itemId: s ? String(s) : '0',
                host: window.location.host,
                path: window.location.pathname,
              })
          }
        }),
        (e.prototype.report = function (e, t) {
          var n = this.browserSlardar.context
          t && n.set('mark', t),
            this.browserSlardar.report(e),
            t && n.delete('mark')
        }),
        (e.prototype.start = function (e) {
          var t = this
          this.browserSlardar.start(),
            e ||
              (this.reportPageview(),
              (window.__VC_LOG__REPORT__ = this),
              window.addEventListener(
                'error',
                function (e) {
                  var n, r
                  e &&
                    'ErrorEvent' ===
                      ((r = e),
                      Object.prototype.toString.call(r).slice(8, -1)) &&
                    t.filename &&
                    e.filename === t.filename &&
                    t.reportJsError(
                      {
                        message: e.message,
                        stack:
                          null === (n = e.error) || void 0 === n
                            ? void 0
                            : n.stack,
                        filename: e.filename,
                      },
                      'global-error'
                    )
                },
                !0
              ))
        }),
        (e.prototype.destroy = function () {
          this.browserSlardar.destroy()
        }),
        (e.prototype.reportPageview = function () {
          this.report(
            {
              ev_type: 'pageview',
              payload: {
                pid: this.pid,
                source: 'init',
              },
            },
            'slardar-init'
          )
        }),
        (e.prototype.reportJsError = function (e, t) {
          this.report(
            {
              ev_type: 'js_error',
              payload: {
                error: {
                  name: 'JS ERROR',
                  message: e.message,
                  stack: e.stack,
                  filename: e.filename || this.filename,
                },
                breadcrumbs: [],
              },
            },
            t
          )
        }),
        (e.prototype.reportHttp = function (e, t) {
          this.report(
            {
              ev_type: 'http',
              payload: {
                api: 'xhr',
                request: {
                  method: e.method,
                  url: e.url,
                },
                response: {
                  status: e.status,
                  is_custom_error: !1,
                  timestamp: Date.now(),
                  timing: {
                    duration: e.duration,
                  },
                },
                duration: e.duration,
              },
            },
            t
          )
        }),
        (e.prototype.reportResourceError = function (e, t) {
          this.report(
            {
              ev_type: 'resource_error',
              payload: {
                type: 'script',
                url: e,
              },
            },
            t
          )
        }),
        (e.prototype.reportResource = function (e, t) {
          var n = {
            entryType: 'resource',
            name: e.url,
            duration: e.duration,
            startTime: e.startTime,
          }
          try {
            for (
              var r = performance.getEntriesByType('resource'), o = 0;
              o < r.length;
              o++
            )
              if (r[o].name === e.url) {
                n = r[o]
                break
              }
          } catch (e) {}
          this.report(
            {
              ev_type: 'resource',
              payload: n,
            },
            t
          )
        }),
        (e.prototype.setFileName = function (e) {
          this.filename = e
        }),
        (e.prototype.setContext = function (e, t) {
          var n
          this.browserSlardar.context.merge((((n = {})[e] = t), n))
        }),
        e
      )
    })(),
    xi = new Pi(),
    Li = {
      back_up_js_v2: {
        cn: [
          'https://lf-rc2.yhgfb-cn-static.com/obj/rc-verifycenter/verifycenter/@latest/index.js',
          'https://lf-cdn-tos.bytescm.com/obj/rc-verifycenter/verifycenter/@latest/index.js',
        ],
      },
      js_v2: {
        cn: 'https://lf-rc1.yhgfb-cn-static.com/obj/rc-verifycenter/verifycenter/@latest/index.js',
      },
    },
    Ti = function (e) {
      var t = this
      ;(this.config = {
        setting_host: '',
        static_domain: '',
        executor: 'script',
      }),
        (this.domain = ''),
        (this.scene_level = ''),
        (this.set = function (e) {
          ;(null == e ? void 0 : e.setting_host) &&
            (t.config.setting_host = e.setting_host),
            (null == e ? void 0 : e.static_domain) &&
              (t.config.static_domain = e.static_domain),
            (null == e ? void 0 : e.executor) &&
              (t.config.executor = e.executor)
        }),
        (this.load = function (e) {
          return t.loadSetting(e).then(function (n) {
            return t.loadSDK(n, e)
          })
        }),
        (this.loadSetting = function (e) {
          var n = t.config,
            r = e.setting_host,
            o = e.commonOptions
          return (function (e, t, n) {
            return Oi(
              ''.concat(e || 'https://vcs.zijieapi.com').concat(wi),
              {},
              {
                slardar: n,
                params: t,
                headers: {
                  'X-Setting-Flag': 1,
                },
              }
            )
          })(r || n.setting_host, o, t.slardar)
            .then(function (e) {
              var n, r
              return (
                null ===
                  (r =
                    null === (n = null == e ? void 0 : e.verify) || void 0 === n
                      ? void 0
                      : n.js_v2) || void 0 === r
                  ? void 0
                  : r.cn
              )
                ? ((t.scene_level = e.verify.scene_level || 'p2'), e.verify)
                : Li
            })
            .catch(function () {
              return Li
            })
        }),
        (this.loadSDK = function (e, n) {
          var r,
            o = t.config,
            i = e.js_v2.cn,
            a =
              (null === (r = e.back_up_js_v2) || void 0 === r
                ? void 0
                : r.cn) || [],
            u = i.match(/\/\/([\w-]+(\.[\w-]+)+)/)[1]
          t.domain = u
          var s = o.static_domain || n.static_domain
          s && u && (i = i.replace(u, s)),
            n.rmc_version &&
              (i = i.replace(/\/[\d.]+\//, '/'.concat(n.rmc_version, '/')))
          var c = [i].concat(a),
            f = '',
            l = function (e) {
              if (e.length > 0) {
                var r = e.shift()
                return (
                  (f = r),
                  t.loadScript(r, n.isPrefetch).catch(function () {
                    return l(e)
                  })
                )
              }
              return yi.reject(n.isPrefetch ? f : 'failed to load sdk')
            }
          return l(c)
        }),
        (this.prefetchCaptchaCdn = function () {
          var e = '',
            n = function (r) {
              if (0 === r.length) return yi.reject(e)
              var o = r.pop()
              return (
                (e = 'https://'.concat(
                  o,
                  '/obj/rc-verifycenter/rmc-captcha/@latest/captcha.js'
                )),
                t.loadScript(e, !0).catch(function () {
                  return n(r)
                })
              )
            }
          return n([
            'lf-rc2.yhgfb-cn-static.com',
            'lf-rc1.yhgfb-cn-static.com',
            'lf-cdn-tos.bytescm.com',
          ])
        }),
        (this.loadScript = function (e, n) {
          if (n) return Si(e)
          t.slardar.setFileName(e)
          var r,
            o,
            i = t.config,
            a = i.static_domain,
            u = i.executor,
            s = t.domain,
            c = Date.now()
          return (
            (r =
              'script' !== u || a
                ? Si(e, {
                    timeout: 2e4,
                  }).then(function (e) {
                    if (a && a !== s) {
                      var n = new RegExp(s, 'g')
                      e = e.replace(n, a)
                    }
                    var r = (function (e, t) {
                      var n = {
                          exports: {},
                        },
                        r = new Function('exports', 'module', e)
                      try {
                        r(n.exports, n)
                      } catch (e) {
                        t.reportJsError({
                          message: null == e ? void 0 : e.message,
                          stack: null == e ? void 0 : e.stack,
                          filename: null == e ? void 0 : e.filename,
                        })
                      }
                      return n
                    })(e, t.slardar)
                    return r.exports
                  })
                : ((o = e),
                  new yi(function (e, t) {
                    var n = document.getElementsByTagName('head')[0],
                      r = document.createElement('script')
                    r.setAttribute('crossorigin', 'anonymous'),
                      r.setAttribute('src', o),
                      n.appendChild(r)
                    var i = setTimeout(function () {
                      t(new Error('LoadJSSDKMoreTan4000ms'))
                    }, 4e3)
                    ;(r.onload = function () {
                      clearTimeout(i), e(0)
                    }),
                      (r.onerror = function () {
                        clearTimeout(i), t(new Error('Failed to load SDK!'))
                      })
                  })).then(function () {
                    return window.verifySDK
                  })),
            r
              .then(function (n) {
                return (
                  t.slardar.reportResource(
                    {
                      url: e,
                      startTime: Date.now(),
                      duration: Date.now() - c,
                    },
                    'verifycenter-load'
                  ),
                  n
                )
              })
              .catch(function (n) {
                return (
                  t.slardar.reportResourceError(e, 'verifycenter-load'),
                  yi.reject(n)
                )
              })
          )
        }),
        (this.slardar = e.slardar)
    },
    ki = new Ti({
      slardar: xi,
    }),
    Ci = function (e) {
      var n = this
      ;(this.getFp = function () {
        if (n.options.captchaOptions) return n.options.captchaOptions.fp
      }),
        (this.get = function () {
          return n.options
        })
      var r = e.captchaOptions
      if (r) {
        var o = t(t({}, r), {
          h5_check_version: '4.0.10',
        })
        e = t(t({}, e), {
          captchaOptions: o,
        })
      }
      this.options = e
    },
    Ai = _e('iterator'),
    Ii = !w(function () {
      var e = new URL('b?a=1&b=2&c=3', 'http://a'),
        t = e.searchParams,
        n = ''
      return (
        (e.pathname = 'c%20d'),
        t.forEach(function (e, r) {
          t.delete('b'), (n += r + e)
        }),
        !e.toJSON ||
          !t.sort ||
          'http://a/c%20d?a=1&c=3' !== e.href ||
          '3' !== t.get('c') ||
          'a=1' !== String(new URLSearchParams('?a=1')) ||
          !t[Ai] ||
          'a' !== new URL('https://a@b').username ||
          'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
          'xn--e1aybc' !== new URL('http://тест').host ||
          '#%D0%B1' !== new URL('http://a#б').hash ||
          'a1c3' !== n ||
          'x' !== new URL('http://x', void 0).host
      )
    }),
    Ui = Object.assign,
    Di = Object.defineProperty,
    Ni = y([].concat),
    Mi =
      !Ui ||
      w(function () {
        if (
          _ &&
          1 !==
            Ui(
              {
                b: 1,
              },
              Ui(
                Di({}, 'a', {
                  enumerable: !0,
                  get: function () {
                    Di(this, 'b', {
                      value: 3,
                      enumerable: !1,
                    })
                  },
                }),
                {
                  b: 2,
                }
              )
            ).b
        )
          return !0
        var e = {},
          t = {},
          n = Symbol(),
          r = 'abcdefghijklmnopqrst'
        return (
          (e[n] = 7),
          r.split('').forEach(function (e) {
            t[e] = e
          }),
          7 != Ui({}, e)[n] || Pt(Ui({}, t)).join('') != r
        )
      })
        ? function (e, t) {
            for (
              var n = fe(e), r = arguments.length, o = 1, i = Et.f, a = j.f;
              r > o;

            )
              for (
                var u,
                  s = A(arguments[o++]),
                  c = i ? Ni(Pt(s), i(s)) : Pt(s),
                  f = c.length,
                  l = 0;
                f > l;

              )
                (u = c[l++]), (_ && !O(a, s, u)) || (n[u] = s[u])
            return n
          }
        : Ui,
    Fi = function (e, t, n, r) {
      try {
        return r ? t(ze(n)[0], n[1]) : t(n)
      } catch (t) {
        nn(e, 'throw', t)
      }
    },
    Hi = function (e, t, n) {
      var r = Re(t)
      r in e ? Je.f(e, r, P(0, n)) : (e[r] = n)
    },
    qi = s.Array,
    Bi = function (e) {
      var t = fe(e),
        n = Lr(this),
        r = arguments.length,
        o = r > 1 ? arguments[1] : void 0,
        i = void 0 !== o
      i && (o = He(o, r > 2 ? arguments[2] : void 0))
      var a,
        u,
        s,
        c,
        f,
        l,
        p = Zt(t),
        h = 0
      if (!p || (this == qi && Vt(p)))
        for (a = dt(t), u = n ? new this(a) : qi(a); a > h; h++)
          (l = i ? o(t[h], h) : t[h]), Hi(u, h, l)
      else
        for (
          f = (c = tn(t, p)).next, u = n ? new this() : [];
          !(s = O(f, c)).done;
          h++
        )
          (l = i ? Fi(c, o, [s.value, h], !0) : s.value), Hi(u, h, l)
      return (u.length = h), u
    },
    zi = s.Array,
    Gi = Math.max,
    Vi = function (e, t, n) {
      for (
        var r = dt(e),
          o = pt(t, r),
          i = pt(void 0 === n ? r : n, r),
          a = zi(Gi(i - o, 0)),
          u = 0;
        o < i;
        o++, u++
      )
        Hi(a, u, e[o])
      return (a.length = u), a
    },
    Ji = 2147483647,
    Ki = /[^\0-\u007E]/,
    Xi = /[.\u3002\uFF0E\uFF61]/g,
    Wi = 'Overflow: input needs wider integers to process',
    Yi = s.RangeError,
    Qi = y(Xi.exec),
    $i = Math.floor,
    Zi = String.fromCharCode,
    ea = y(''.charCodeAt),
    ta = y([].join),
    na = y([].push),
    ra = y(''.replace),
    oa = y(''.split),
    ia = y(''.toLowerCase),
    aa = function (e) {
      return e + 22 + 75 * (e < 26)
    },
    ua = function (e, t, n) {
      var r = 0
      for (e = n ? $i(e / 700) : e >> 1, e += $i(e / t); e > 455; )
        (e = $i(e / 35)), (r += 36)
      return $i(r + (36 * e) / (e + 38))
    },
    sa = function (e) {
      var t = []
      e = (function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
          var o = ea(e, n++)
          if (o >= 55296 && o <= 56319 && n < r) {
            var i = ea(e, n++)
            56320 == (64512 & i)
              ? na(t, ((1023 & o) << 10) + (1023 & i) + 65536)
              : (na(t, o), n--)
          } else na(t, o)
        }
        return t
      })(e)
      var n,
        r,
        o = e.length,
        i = 128,
        a = 0,
        u = 72
      for (n = 0; n < e.length; n++) (r = e[n]) < 128 && na(t, Zi(r))
      var s = t.length,
        c = s
      for (s && na(t, '-'); c < o; ) {
        var f = Ji
        for (n = 0; n < e.length; n++) (r = e[n]) >= i && r < f && (f = r)
        var l = c + 1
        if (f - i > $i((Ji - a) / l)) throw Yi(Wi)
        for (a += (f - i) * l, i = f, n = 0; n < e.length; n++) {
          if ((r = e[n]) < i && ++a > Ji) throw Yi(Wi)
          if (r == i) {
            for (var p = a, h = 36; ; ) {
              var d = h <= u ? 1 : h >= u + 26 ? 26 : h - u
              if (p < d) break
              var v = p - d,
                g = 36 - d
              na(t, Zi(aa(d + (v % g)))), (p = $i(v / g)), (h += 36)
            }
            na(t, Zi(aa(p))), (u = ua(a, l, c == s)), (a = 0), c++
          }
        }
        a++, i++
      }
      return ta(t, '')
    },
    ca = Math.floor,
    fa = function (e, t) {
      var n = e.length,
        r = ca(n / 2)
      return n < 8 ? la(e, t) : pa(e, fa(Vi(e, 0, r), t), fa(Vi(e, r), t), t)
    },
    la = function (e, t) {
      for (var n, r, o = e.length, i = 1; i < o; ) {
        for (r = i, n = e[i]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r]
        r !== i++ && (e[r] = n)
      }
      return e
    },
    pa = function (e, t, n, r) {
      for (var o = t.length, i = n.length, a = 0, u = 0; a < o || u < i; )
        e[a + u] =
          a < o && u < i
            ? r(t[a], n[u]) <= 0
              ? t[a++]
              : n[u++]
            : a < o
            ? t[a++]
            : n[u++]
      return e
    },
    ha = fa,
    da = _e('iterator'),
    va = 'URLSearchParams',
    ga = va + 'Iterator',
    ma = In.set,
    ya = In.getterFor(va),
    ba = In.getterFor(ga),
    wa = H('fetch'),
    _a = H('Request'),
    Sa = H('Headers'),
    Oa = _a && _a.prototype,
    Ea = Sa && Sa.prototype,
    Ra = s.RegExp,
    ja = s.TypeError,
    Pa = s.decodeURIComponent,
    xa = s.encodeURIComponent,
    La = y(''.charAt),
    Ta = y([].join),
    ka = y([].push),
    Ca = y(''.replace),
    Aa = y([].shift),
    Ia = y([].splice),
    Ua = y(''.split),
    Da = y(''.slice),
    Na = /\+/g,
    Ma = Array(4),
    Fa = function (e) {
      return (
        Ma[e - 1] || (Ma[e - 1] = Ra('((?:%[\\da-f]{2}){' + e + '})', 'gi'))
      )
    },
    Ha = function (e) {
      try {
        return Pa(e)
      } catch (t) {
        return e
      }
    },
    qa = function (e) {
      var t = Ca(e, Na, ' '),
        n = 4
      try {
        return Pa(t)
      } catch (e) {
        for (; n; ) t = Ca(t, Fa(n--), Ha)
        return t
      }
    },
    Ba = /[!'()~]|%20/g,
    za = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
    },
    Ga = function (e) {
      return za[e]
    },
    Va = function (e) {
      return Ca(xa(e), Ba, Ga)
    },
    Ja = function (e, t) {
      if (e < t) throw ja('Not enough arguments')
    },
    Ka = Yn(
      function (e, t) {
        ma(this, {
          type: ga,
          iterator: tn(ya(e).entries),
          kind: t,
        })
      },
      'Iterator',
      function () {
        var e = ba(this),
          t = e.kind,
          n = e.iterator.next(),
          r = n.value
        return (
          n.done ||
            (n.value =
              'keys' === t
                ? r.key
                : 'values' === t
                ? r.value
                : [r.key, r.value]),
          n
        )
      },
      !0
    ),
    Xa = function (e) {
      ;(this.entries = []),
        (this.url = null),
        void 0 !== e &&
          (N(e)
            ? this.parseObject(e)
            : this.parseQuery(
                'string' == typeof e ? ('?' === La(e, 0) ? Da(e, 1) : e) : cn(e)
              ))
    }
  Xa.prototype = {
    type: va,
    bindURL: function (e) {
      ;(this.url = e), this.update()
    },
    parseObject: function (e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        u,
        s = Zt(e)
      if (s)
        for (n = (t = tn(e, s)).next; !(r = O(n, t)).done; ) {
          if (
            ((i = (o = tn(ze(r.value))).next),
            (a = O(i, o)).done || (u = O(i, o)).done || !O(i, o).done)
          )
            throw ja('Expected sequence with length 2')
          ka(this.entries, {
            key: cn(a.value),
            value: cn(u.value),
          })
        }
      else
        for (var c in e)
          pe(e, c) &&
            ka(this.entries, {
              key: c,
              value: cn(e[c]),
            })
    },
    parseQuery: function (e) {
      if (e)
        for (var t, n, r = Ua(e, '&'), o = 0; o < r.length; )
          (t = r[o++]).length &&
            ((n = Ua(t, '=')),
            ka(this.entries, {
              key: qa(Aa(n)),
              value: qa(Ta(n, '=')),
            }))
    },
    serialize: function () {
      for (var e, t = this.entries, n = [], r = 0; r < t.length; )
        (e = t[r++]), ka(n, Va(e.key) + '=' + Va(e.value))
      return Ta(n, '&')
    },
    update: function () {
      ;(this.entries.length = 0), this.parseQuery(this.url.query)
    },
    updateURL: function () {
      this.url && this.url.update()
    },
  }
  var Wa = function () {
      pr(this, Ya),
        ma(this, new Xa(arguments.length > 0 ? arguments[0] : void 0))
    },
    Ya = Wa.prototype
  if (
    (cr(
      Ya,
      {
        append: function (e, t) {
          Ja(arguments.length, 2)
          var n = ya(this)
          ka(n.entries, {
            key: cn(e),
            value: cn(t),
          }),
            n.updateURL()
        },
        delete: function (e) {
          Ja(arguments.length, 1)
          for (
            var t = ya(this), n = t.entries, r = cn(e), o = 0;
            o < n.length;

          )
            n[o].key === r ? Ia(n, o, 1) : o++
          t.updateURL()
        },
        get: function (e) {
          Ja(arguments.length, 1)
          for (var t = ya(this).entries, n = cn(e), r = 0; r < t.length; r++)
            if (t[r].key === n) return t[r].value
          return null
        },
        getAll: function (e) {
          Ja(arguments.length, 1)
          for (
            var t = ya(this).entries, n = cn(e), r = [], o = 0;
            o < t.length;
            o++
          )
            t[o].key === n && ka(r, t[o].value)
          return r
        },
        has: function (e) {
          Ja(arguments.length, 1)
          for (var t = ya(this).entries, n = cn(e), r = 0; r < t.length; )
            if (t[r++].key === n) return !0
          return !1
        },
        set: function (e, t) {
          Ja(arguments.length, 1)
          for (
            var n,
              r = ya(this),
              o = r.entries,
              i = !1,
              a = cn(e),
              u = cn(t),
              s = 0;
            s < o.length;
            s++
          )
            (n = o[s]).key === a &&
              (i ? Ia(o, s--, 1) : ((i = !0), (n.value = u)))
          i ||
            ka(o, {
              key: a,
              value: u,
            }),
            r.updateURL()
        },
        sort: function () {
          var e = ya(this)
          ha(e.entries, function (e, t) {
            return e.key > t.key ? 1 : -1
          }),
            e.updateURL()
        },
        forEach: function (e) {
          for (
            var t,
              n = ya(this).entries,
              r = He(e, arguments.length > 1 ? arguments[1] : void 0),
              o = 0;
            o < n.length;

          )
            r((t = n[o++]).value, t.key, this)
        },
        keys: function () {
          return new Ka(this, 'keys')
        },
        values: function () {
          return new Ka(this, 'values')
        },
        entries: function () {
          return new Ka(this, 'entries')
        },
      },
      {
        enumerable: !0,
      }
    ),
    Fn(Ya, da, Ya.entries, {
      name: 'entries',
    }),
    Fn(
      Ya,
      'toString',
      function () {
        return ya(this).serialize()
      },
      {
        enumerable: !0,
      }
    ),
    Kn(Wa, va),
    Ye(
      {
        global: !0,
        forced: !Ii,
      },
      {
        URLSearchParams: Wa,
      }
    ),
    !Ii && b(Sa))
  ) {
    var Qa = y(Ea.has),
      $a = y(Ea.set),
      Za = function (e) {
        if (N(e)) {
          var t,
            n = e.body
          if (Qt(n) === va)
            return (
              (t = e.headers ? new Sa(e.headers) : new Sa()),
              Qa(t, 'content-type') ||
                $a(
                  t,
                  'content-type',
                  'application/x-www-form-urlencoded;charset=UTF-8'
                ),
              Nt(e, {
                body: P(0, cn(n)),
                headers: P(0, t),
              })
            )
        }
        return e
      }
    if (
      (b(wa) &&
        Ye(
          {
            global: !0,
            enumerable: !0,
            forced: !0,
          },
          {
            fetch: function (e) {
              return wa(e, arguments.length > 1 ? Za(arguments[1]) : {})
            },
          }
        ),
      b(_a))
    ) {
      var eu = function (e) {
        return (
          pr(this, Oa), new _a(e, arguments.length > 1 ? Za(arguments[1]) : {})
        )
      }
      ;(Oa.constructor = eu),
        (eu.prototype = Oa),
        Ye(
          {
            global: !0,
            forced: !0,
          },
          {
            Request: eu,
          }
        )
    }
  }
  var tu,
    nu = {
      URLSearchParams: Wa,
      getState: ya,
    },
    ru = si.codeAt,
    ou = In.set,
    iu = In.getterFor('URL'),
    au = nu.URLSearchParams,
    uu = nu.getState,
    su = s.URL,
    cu = s.TypeError,
    fu = s.parseInt,
    lu = Math.floor,
    pu = Math.pow,
    hu = y(''.charAt),
    du = y(/./.exec),
    vu = y([].join),
    gu = y((1).toString),
    mu = y([].pop),
    yu = y([].push),
    bu = y(''.replace),
    wu = y([].shift),
    _u = y(''.split),
    Su = y(''.slice),
    Ou = y(''.toLowerCase),
    Eu = y([].unshift),
    Ru = 'Invalid scheme',
    ju = 'Invalid host',
    Pu = 'Invalid port',
    xu = /[a-z]/i,
    Lu = /[\d+-.a-z]/i,
    Tu = /\d/,
    ku = /^0x/i,
    Cu = /^[0-7]+$/,
    Au = /^\d+$/,
    Iu = /^[\da-f]+$/i,
    Uu = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
    Du = /[\0\t\n\r #/:<>?@[\\\]^|]/,
    Nu = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
    Mu = /[\t\n\r]/g,
    Fu = function (e) {
      var t, n, r, o
      if ('number' == typeof e) {
        for (t = [], n = 0; n < 4; n++) Eu(t, e % 256), (e = lu(e / 256))
        return vu(t, '.')
      }
      if ('object' == typeof e) {
        for (
          t = '',
            r = (function (e) {
              for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++)
                0 !== e[i]
                  ? (o > n && ((t = r), (n = o)), (r = null), (o = 0))
                  : (null === r && (r = i), ++o)
              return o > n && ((t = r), (n = o)), t
            })(e),
            n = 0;
          n < 8;
          n++
        )
          (o && 0 === e[n]) ||
            (o && (o = !1),
            r === n
              ? ((t += n ? ':' : '::'), (o = !0))
              : ((t += gu(e[n], 16)), n < 7 && (t += ':')))
        return '[' + t + ']'
      }
      return e
    },
    Hu = {},
    qu = Mi({}, Hu, {
      ' ': 1,
      '"': 1,
      '<': 1,
      '>': 1,
      '`': 1,
    }),
    Bu = Mi({}, qu, {
      '#': 1,
      '?': 1,
      '{': 1,
      '}': 1,
    }),
    zu = Mi({}, Bu, {
      '/': 1,
      ':': 1,
      ';': 1,
      '=': 1,
      '@': 1,
      '[': 1,
      '\\': 1,
      ']': 1,
      '^': 1,
      '|': 1,
    }),
    Gu = function (e, t) {
      var n = ru(e, 0)
      return n > 32 && n < 127 && !pe(t, e) ? e : encodeURIComponent(e)
    },
    Vu = {
      ftp: 21,
      file: null,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443,
    },
    Ju = function (e, t) {
      var n
      return (
        2 == e.length &&
        du(xu, hu(e, 0)) &&
        (':' == (n = hu(e, 1)) || (!t && '|' == n))
      )
    },
    Ku = function (e) {
      var t
      return (
        e.length > 1 &&
        Ju(Su(e, 0, 2)) &&
        (2 == e.length ||
          '/' === (t = hu(e, 2)) ||
          '\\' === t ||
          '?' === t ||
          '#' === t)
      )
    },
    Xu = function (e) {
      return '.' === e || '%2e' === Ou(e)
    },
    Wu = {},
    Yu = {},
    Qu = {},
    $u = {},
    Zu = {},
    es = {},
    ts = {},
    ns = {},
    rs = {},
    os = {},
    is = {},
    as = {},
    us = {},
    ss = {},
    cs = {},
    fs = {},
    ls = {},
    ps = {},
    hs = {},
    ds = {},
    vs = {},
    gs = function (e, t, n) {
      var r,
        o,
        i,
        a = cn(e)
      if (t) {
        if ((o = this.parse(a))) throw cu(o)
        this.searchParams = null
      } else {
        if ((void 0 !== n && (r = new gs(n, !0)), (o = this.parse(a, null, r))))
          throw cu(o)
        ;(i = uu(new au())).bindURL(this), (this.searchParams = i)
      }
    }
  gs.prototype = {
    type: 'URL',
    parse: function (e, t, n) {
      var r,
        o,
        i,
        a,
        u,
        s = this,
        c = t || Wu,
        f = 0,
        l = '',
        p = !1,
        h = !1,
        d = !1
      for (
        e = cn(e),
          t ||
            ((s.scheme = ''),
            (s.username = ''),
            (s.password = ''),
            (s.host = null),
            (s.port = null),
            (s.path = []),
            (s.query = null),
            (s.fragment = null),
            (s.cannotBeABaseURL = !1),
            (e = bu(e, Nu, ''))),
          e = bu(e, Mu, ''),
          r = Bi(e);
        f <= r.length;

      ) {
        switch (((o = r[f]), c)) {
          case Wu:
            if (!o || !du(xu, o)) {
              if (t) return Ru
              c = Qu
              continue
            }
            ;(l += Ou(o)), (c = Yu)
            break
          case Yu:
            if (o && (du(Lu, o) || '+' == o || '-' == o || '.' == o)) l += Ou(o)
            else {
              if (':' != o) {
                if (t) return Ru
                ;(l = ''), (c = Qu), (f = 0)
                continue
              }
              if (
                t &&
                (s.isSpecial() != pe(Vu, l) ||
                  ('file' == l &&
                    (s.includesCredentials() || null !== s.port)) ||
                  ('file' == s.scheme && !s.host))
              )
                return
              if (((s.scheme = l), t))
                return void (
                  s.isSpecial() &&
                  Vu[s.scheme] == s.port &&
                  (s.port = null)
                )
              ;(l = ''),
                'file' == s.scheme
                  ? (c = ss)
                  : s.isSpecial() && n && n.scheme == s.scheme
                  ? (c = $u)
                  : s.isSpecial()
                  ? (c = ns)
                  : '/' == r[f + 1]
                  ? ((c = Zu), f++)
                  : ((s.cannotBeABaseURL = !0), yu(s.path, ''), (c = hs))
            }
            break
          case Qu:
            if (!n || (n.cannotBeABaseURL && '#' != o)) return Ru
            if (n.cannotBeABaseURL && '#' == o) {
              ;(s.scheme = n.scheme),
                (s.path = Vi(n.path)),
                (s.query = n.query),
                (s.fragment = ''),
                (s.cannotBeABaseURL = !0),
                (c = vs)
              break
            }
            c = 'file' == n.scheme ? ss : es
            continue
          case $u:
            if ('/' != o || '/' != r[f + 1]) {
              c = es
              continue
            }
            ;(c = rs), f++
            break
          case Zu:
            if ('/' == o) {
              c = os
              break
            }
            c = ps
            continue
          case es:
            if (((s.scheme = n.scheme), o == tu))
              (s.username = n.username),
                (s.password = n.password),
                (s.host = n.host),
                (s.port = n.port),
                (s.path = Vi(n.path)),
                (s.query = n.query)
            else if ('/' == o || ('\\' == o && s.isSpecial())) c = ts
            else if ('?' == o)
              (s.username = n.username),
                (s.password = n.password),
                (s.host = n.host),
                (s.port = n.port),
                (s.path = Vi(n.path)),
                (s.query = ''),
                (c = ds)
            else {
              if ('#' != o) {
                ;(s.username = n.username),
                  (s.password = n.password),
                  (s.host = n.host),
                  (s.port = n.port),
                  (s.path = Vi(n.path)),
                  s.path.length--,
                  (c = ps)
                continue
              }
              ;(s.username = n.username),
                (s.password = n.password),
                (s.host = n.host),
                (s.port = n.port),
                (s.path = Vi(n.path)),
                (s.query = n.query),
                (s.fragment = ''),
                (c = vs)
            }
            break
          case ts:
            if (!s.isSpecial() || ('/' != o && '\\' != o)) {
              if ('/' != o) {
                ;(s.username = n.username),
                  (s.password = n.password),
                  (s.host = n.host),
                  (s.port = n.port),
                  (c = ps)
                continue
              }
              c = os
            } else c = rs
            break
          case ns:
            if (((c = rs), '/' != o || '/' != hu(l, f + 1))) continue
            f++
            break
          case rs:
            if ('/' != o && '\\' != o) {
              c = os
              continue
            }
            break
          case os:
            if ('@' == o) {
              p && (l = '%40' + l), (p = !0), (i = Bi(l))
              for (var v = 0; v < i.length; v++) {
                var g = i[v]
                if (':' != g || d) {
                  var m = Gu(g, zu)
                  d ? (s.password += m) : (s.username += m)
                } else d = !0
              }
              l = ''
            } else if (
              o == tu ||
              '/' == o ||
              '?' == o ||
              '#' == o ||
              ('\\' == o && s.isSpecial())
            ) {
              if (p && '' == l) return 'Invalid authority'
              ;(f -= Bi(l).length + 1), (l = ''), (c = is)
            } else l += o
            break
          case is:
          case as:
            if (t && 'file' == s.scheme) {
              c = fs
              continue
            }
            if (':' != o || h) {
              if (
                o == tu ||
                '/' == o ||
                '?' == o ||
                '#' == o ||
                ('\\' == o && s.isSpecial())
              ) {
                if (s.isSpecial() && '' == l) return ju
                if (
                  t &&
                  '' == l &&
                  (s.includesCredentials() || null !== s.port)
                )
                  return
                if ((a = s.parseHost(l))) return a
                if (((l = ''), (c = ls), t)) return
                continue
              }
              '[' == o ? (h = !0) : ']' == o && (h = !1), (l += o)
            } else {
              if ('' == l) return ju
              if ((a = s.parseHost(l))) return a
              if (((l = ''), (c = us), t == as)) return
            }
            break
          case us:
            if (!du(Tu, o)) {
              if (
                o == tu ||
                '/' == o ||
                '?' == o ||
                '#' == o ||
                ('\\' == o && s.isSpecial()) ||
                t
              ) {
                if ('' != l) {
                  var y = fu(l, 10)
                  if (y > 65535) return Pu
                  ;(s.port = s.isSpecial() && y === Vu[s.scheme] ? null : y),
                    (l = '')
                }
                if (t) return
                c = ls
                continue
              }
              return Pu
            }
            l += o
            break
          case ss:
            if (((s.scheme = 'file'), '/' == o || '\\' == o)) c = cs
            else {
              if (!n || 'file' != n.scheme) {
                c = ps
                continue
              }
              if (o == tu)
                (s.host = n.host), (s.path = Vi(n.path)), (s.query = n.query)
              else if ('?' == o)
                (s.host = n.host),
                  (s.path = Vi(n.path)),
                  (s.query = ''),
                  (c = ds)
              else {
                if ('#' != o) {
                  Ku(vu(Vi(r, f), '')) ||
                    ((s.host = n.host), (s.path = Vi(n.path)), s.shortenPath()),
                    (c = ps)
                  continue
                }
                ;(s.host = n.host),
                  (s.path = Vi(n.path)),
                  (s.query = n.query),
                  (s.fragment = ''),
                  (c = vs)
              }
            }
            break
          case cs:
            if ('/' == o || '\\' == o) {
              c = fs
              break
            }
            n &&
              'file' == n.scheme &&
              !Ku(vu(Vi(r, f), '')) &&
              (Ju(n.path[0], !0) ? yu(s.path, n.path[0]) : (s.host = n.host)),
              (c = ps)
            continue
          case fs:
            if (o == tu || '/' == o || '\\' == o || '?' == o || '#' == o) {
              if (!t && Ju(l)) c = ps
              else if ('' == l) {
                if (((s.host = ''), t)) return
                c = ls
              } else {
                if ((a = s.parseHost(l))) return a
                if (('localhost' == s.host && (s.host = ''), t)) return
                ;(l = ''), (c = ls)
              }
              continue
            }
            l += o
            break
          case ls:
            if (s.isSpecial()) {
              if (((c = ps), '/' != o && '\\' != o)) continue
            } else if (t || '?' != o)
              if (t || '#' != o) {
                if (o != tu && ((c = ps), '/' != o)) continue
              } else (s.fragment = ''), (c = vs)
            else (s.query = ''), (c = ds)
            break
          case ps:
            if (
              o == tu ||
              '/' == o ||
              ('\\' == o && s.isSpecial()) ||
              (!t && ('?' == o || '#' == o))
            ) {
              if (
                ('..' === (u = Ou((u = l))) ||
                '%2e.' === u ||
                '.%2e' === u ||
                '%2e%2e' === u
                  ? (s.shortenPath(),
                    '/' == o || ('\\' == o && s.isSpecial()) || yu(s.path, ''))
                  : Xu(l)
                  ? '/' == o || ('\\' == o && s.isSpecial()) || yu(s.path, '')
                  : ('file' == s.scheme &&
                      !s.path.length &&
                      Ju(l) &&
                      (s.host && (s.host = ''), (l = hu(l, 0) + ':')),
                    yu(s.path, l)),
                (l = ''),
                'file' == s.scheme && (o == tu || '?' == o || '#' == o))
              )
                for (; s.path.length > 1 && '' === s.path[0]; ) wu(s.path)
              '?' == o
                ? ((s.query = ''), (c = ds))
                : '#' == o && ((s.fragment = ''), (c = vs))
            } else l += Gu(o, Bu)
            break
          case hs:
            '?' == o
              ? ((s.query = ''), (c = ds))
              : '#' == o
              ? ((s.fragment = ''), (c = vs))
              : o != tu && (s.path[0] += Gu(o, Hu))
            break
          case ds:
            t || '#' != o
              ? o != tu &&
                ("'" == o && s.isSpecial()
                  ? (s.query += '%27')
                  : (s.query += '#' == o ? '%23' : Gu(o, Hu)))
              : ((s.fragment = ''), (c = vs))
            break
          case vs:
            o != tu && (s.fragment += Gu(o, qu))
        }
        f++
      }
    },
    parseHost: function (e) {
      var t, n, r
      if ('[' == hu(e, 0)) {
        if (']' != hu(e, e.length - 1)) return ju
        if (
          ((t = (function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s = [0, 0, 0, 0, 0, 0, 0, 0],
              c = 0,
              f = null,
              l = 0,
              p = function () {
                return hu(e, l)
              }
            if (':' == p()) {
              if (':' != hu(e, 1)) return
              ;(l += 2), (f = ++c)
            }
            for (; p(); ) {
              if (8 == c) return
              if (':' != p()) {
                for (t = n = 0; n < 4 && du(Iu, p()); )
                  (t = 16 * t + fu(p(), 16)), l++, n++
                if ('.' == p()) {
                  if (0 == n) return
                  if (((l -= n), c > 6)) return
                  for (r = 0; p(); ) {
                    if (((o = null), r > 0)) {
                      if (!('.' == p() && r < 4)) return
                      l++
                    }
                    if (!du(Tu, p())) return
                    for (; du(Tu, p()); ) {
                      if (((i = fu(p(), 10)), null === o)) o = i
                      else {
                        if (0 == o) return
                        o = 10 * o + i
                      }
                      if (o > 255) return
                      l++
                    }
                    ;(s[c] = 256 * s[c] + o), (2 != ++r && 4 != r) || c++
                  }
                  if (4 != r) return
                  break
                }
                if (':' == p()) {
                  if ((l++, !p())) return
                } else if (p()) return
                s[c++] = t
              } else {
                if (null !== f) return
                l++, (f = ++c)
              }
            }
            if (null !== f)
              for (a = c - f, c = 7; 0 != c && a > 0; )
                (u = s[c]), (s[c--] = s[f + a - 1]), (s[f + --a] = u)
            else if (8 != c) return
            return s
          })(Su(e, 1, -1))),
          !t)
        )
          return ju
        this.host = t
      } else if (this.isSpecial()) {
        if (
          ((e = (function (e) {
            var t,
              n,
              r = [],
              o = oa(ra(ia(e), Xi, '.'), '.')
            for (t = 0; t < o.length; t++)
              (n = o[t]), na(r, Qi(Ki, n) ? 'xn--' + sa(n) : n)
            return ta(r, '.')
          })(e)),
          du(Uu, e))
        )
          return ju
        if (
          ((t = (function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s = _u(e, '.')
            if (
              (s.length && '' == s[s.length - 1] && s.length--,
              (t = s.length) > 4)
            )
              return e
            for (n = [], r = 0; r < t; r++) {
              if ('' == (o = s[r])) return e
              if (
                ((i = 10),
                o.length > 1 &&
                  '0' == hu(o, 0) &&
                  ((i = du(ku, o) ? 16 : 8), (o = Su(o, 8 == i ? 1 : 2))),
                '' === o)
              )
                a = 0
              else {
                if (!du(10 == i ? Au : 8 == i ? Cu : Iu, o)) return e
                a = fu(o, i)
              }
              yu(n, a)
            }
            for (r = 0; r < t; r++)
              if (((a = n[r]), r == t - 1)) {
                if (a >= pu(256, 5 - t)) return null
              } else if (a > 255) return null
            for (u = mu(n), r = 0; r < n.length; r++) u += n[r] * pu(256, 3 - r)
            return u
          })(e)),
          null === t)
        )
          return ju
        this.host = t
      } else {
        if (du(Du, e)) return ju
        for (t = '', n = Bi(e), r = 0; r < n.length; r++) t += Gu(n[r], Hu)
        this.host = t
      }
    },
    cannotHaveUsernamePasswordPort: function () {
      return !this.host || this.cannotBeABaseURL || 'file' == this.scheme
    },
    includesCredentials: function () {
      return '' != this.username || '' != this.password
    },
    isSpecial: function () {
      return pe(Vu, this.scheme)
    },
    shortenPath: function () {
      var e = this.path,
        t = e.length
      !t || ('file' == this.scheme && 1 == t && Ju(e[0], !0)) || e.length--
    },
    serialize: function () {
      var e = this,
        t = e.scheme,
        n = e.username,
        r = e.password,
        o = e.host,
        i = e.port,
        a = e.path,
        u = e.query,
        s = e.fragment,
        c = t + ':'
      return (
        null !== o
          ? ((c += '//'),
            e.includesCredentials() && (c += n + (r ? ':' + r : '') + '@'),
            (c += Fu(o)),
            null !== i && (c += ':' + i))
          : 'file' == t && (c += '//'),
        (c += e.cannotBeABaseURL ? a[0] : a.length ? '/' + vu(a, '/') : ''),
        null !== u && (c += '?' + u),
        null !== s && (c += '#' + s),
        c
      )
    },
    setHref: function (e) {
      var t = this.parse(e)
      if (t) throw cu(t)
      this.searchParams.update()
    },
    getOrigin: function () {
      var e = this.scheme,
        t = this.port
      if ('blob' == e)
        try {
          return new ms(e.path[0]).origin
        } catch (e) {
          return 'null'
        }
      return 'file' != e && this.isSpecial()
        ? e + '://' + Fu(this.host) + (null !== t ? ':' + t : '')
        : 'null'
    },
    getProtocol: function () {
      return this.scheme + ':'
    },
    setProtocol: function (e) {
      this.parse(cn(e) + ':', Wu)
    },
    getUsername: function () {
      return this.username
    },
    setUsername: function (e) {
      var t = Bi(cn(e))
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.username = ''
        for (var n = 0; n < t.length; n++) this.username += Gu(t[n], zu)
      }
    },
    getPassword: function () {
      return this.password
    },
    setPassword: function (e) {
      var t = Bi(cn(e))
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.password = ''
        for (var n = 0; n < t.length; n++) this.password += Gu(t[n], zu)
      }
    },
    getHost: function () {
      var e = this.host,
        t = this.port
      return null === e ? '' : null === t ? Fu(e) : Fu(e) + ':' + t
    },
    setHost: function (e) {
      this.cannotBeABaseURL || this.parse(e, is)
    },
    getHostname: function () {
      var e = this.host
      return null === e ? '' : Fu(e)
    },
    setHostname: function (e) {
      this.cannotBeABaseURL || this.parse(e, as)
    },
    getPort: function () {
      var e = this.port
      return null === e ? '' : cn(e)
    },
    setPort: function (e) {
      this.cannotHaveUsernamePasswordPort() ||
        ('' == (e = cn(e)) ? (this.port = null) : this.parse(e, us))
    },
    getPathname: function () {
      var e = this.path
      return this.cannotBeABaseURL ? e[0] : e.length ? '/' + vu(e, '/') : ''
    },
    setPathname: function (e) {
      this.cannotBeABaseURL || ((this.path = []), this.parse(e, ls))
    },
    getSearch: function () {
      var e = this.query
      return e ? '?' + e : ''
    },
    setSearch: function (e) {
      '' == (e = cn(e))
        ? (this.query = null)
        : ('?' == hu(e, 0) && (e = Su(e, 1)),
          (this.query = ''),
          this.parse(e, ds)),
        this.searchParams.update()
    },
    getSearchParams: function () {
      return this.searchParams.facade
    },
    getHash: function () {
      var e = this.fragment
      return e ? '#' + e : ''
    },
    setHash: function (e) {
      '' != (e = cn(e))
        ? ('#' == hu(e, 0) && (e = Su(e, 1)),
          (this.fragment = ''),
          this.parse(e, vs))
        : (this.fragment = null)
    },
    update: function () {
      this.query = this.searchParams.serialize() || null
    },
  }
  var ms = function (e) {
      var t = pr(this, ys),
        n = ou(t, new gs(e, !1, arguments.length > 1 ? arguments[1] : void 0))
      _ ||
        ((t.href = n.serialize()),
        (t.origin = n.getOrigin()),
        (t.protocol = n.getProtocol()),
        (t.username = n.getUsername()),
        (t.password = n.getPassword()),
        (t.host = n.getHost()),
        (t.hostname = n.getHostname()),
        (t.port = n.getPort()),
        (t.pathname = n.getPathname()),
        (t.search = n.getSearch()),
        (t.searchParams = n.getSearchParams()),
        (t.hash = n.getHash()))
    },
    ys = ms.prototype,
    bs = function (e, t) {
      return {
        get: function () {
          return iu(this)[e]()
        },
        set:
          t &&
          function (e) {
            return iu(this)[t](e)
          },
        configurable: !0,
        enumerable: !0,
      }
    }
  if (
    (_ &&
      xt(ys, {
        href: bs('serialize', 'setHref'),
        origin: bs('getOrigin'),
        protocol: bs('getProtocol', 'setProtocol'),
        username: bs('getUsername', 'setUsername'),
        password: bs('getPassword', 'setPassword'),
        host: bs('getHost', 'setHost'),
        hostname: bs('getHostname', 'setHostname'),
        port: bs('getPort', 'setPort'),
        pathname: bs('getPathname', 'setPathname'),
        search: bs('getSearch', 'setSearch'),
        searchParams: bs('getSearchParams'),
        hash: bs('getHash', 'setHash'),
      }),
    Fn(
      ys,
      'toJSON',
      function () {
        return iu(this).serialize()
      },
      {
        enumerable: !0,
      }
    ),
    Fn(
      ys,
      'toString',
      function () {
        return iu(this).serialize()
      },
      {
        enumerable: !0,
      }
    ),
    su)
  ) {
    var ws = su.createObjectURL,
      _s = su.revokeObjectURL
    ws && Fn(ms, 'createObjectURL', He(ws, su)),
      _s && Fn(ms, 'revokeObjectURL', He(_s, su))
  }
  Kn(ms, 'URL'),
    Ye(
      {
        global: !0,
        forced: !Ii,
        sham: !_,
      },
      {
        URL: ms,
      }
    )
  var Ss,
    Os,
    Es = M.URL,
    Rs = function (e) {
      if (!e || !e.trim()) return !1
      try {
        return btoa(atob(e)) === e
      } catch (e) {
        return !1
      }
    },
    js = function (e) {
      return e.map(function (e) {
        return new RegExp(e)
      })
    },
    Ps = function (e) {
      var t = e
      try {
        t = new Es(e, window.location.href).pathname
      } catch (e) {}
      var n = window._vc_intercepted_pathList,
        r = n.include,
        o = n.exclude,
        i = js(r)
      return (
        !js(o).some(function (e) {
          return e.test(t)
        }) &&
        i.some(function (e) {
          return e.test(t)
        })
      )
    },
    xs = function (e, t, n, r) {
      e.render({
        verify_data: t,
        captchaOptions: {
          successCb: function () {
            n()
          },
          closeCb: function () {
            r()
          },
        },
        secondVerifyWebOptions: {
          callBack: function () {
            n()
          },
          closeCallBack: function () {
            r()
          },
        },
      })
    },
    Ls = function (e, t, n) {
      var r = n.getFp(),
        o = function (t) {
          ;(e.getResponseHeader = function () {
            return t.getResponseHeader.apply(t, arguments)
          }),
            (e.getAllResponseHeaders = function () {
              return t.getAllResponseHeaders.apply(t, arguments)
            })
          for (
            var n = function (n) {
                Object.defineProperty(e, n, {
                  get: function () {
                    return t[n]
                  },
                  enumerable: !0,
                })
              },
              r = 0,
              o = [
                'readyState',
                'status',
                'statusText',
                'response',
                'responseText',
                'responseType',
                'responseURL',
                'responseXML',
              ];
            r < o.length;
            r++
          ) {
            n(o[r])
          }
        },
        i = [],
        a = !1,
        u = function () {
          ;(a = !0),
            i.forEach(function (e) {
              return e()
            })
        },
        s = function () {
          var n = new XMLHttpRequest()
          e.withCredentials && (n.withCredentials = e.withCredentials),
            e.timeout && (n.timeout = e.timeout),
            (n.onload = function () {
              o(n), u()
            }),
            (n.ontimeout = function () {
              u()
            }),
            (n.onabort = function () {
              u()
            }),
            (n.onerror = function (t) {
              var r
              o(n), null === (r = e.onerror) || void 0 === r || r.call(e, t)
            }),
            t.forEach(function (e) {
              var t = [].slice.call(e.arguments)
              'addEventListener' !== e.fnName &&
                'removeEventListener' !== e.fnName &&
                n[e.fnName].apply(n, t)
            })
        },
        c = {
          error: [],
        },
        f = function () {
          var t = e.onreadystatechange,
            r = e.onload,
            o = e.onloadend,
            f = e.onerror
          t &&
            (e.onreadystatechange = function () {
              var n = arguments,
                r = function () {
                  t.apply(e, n)
                }
              !a &&
              e.readyState === XMLHttpRequest.DONE &&
              e.status >= 200 &&
              e.status < 300
                ? i.push(r)
                : r()
            }),
            (e.onload = function () {
              var t = arguments,
                o = function () {
                  r && r.apply(e, t)
                }
              e.status >= 200 && e.status < 300
                ? (a || i.push(o),
                  (function () {
                    var t = null
                    try {
                      var r = e.getAllResponseHeaders()
                      if (r.indexOf('bdturing-verify') >= 0)
                        t = e.getResponseHeader('bdturing-verify')
                      else if (r.indexOf('x-vc-bdturing-parameters') >= 0) {
                        var o = e.getResponseHeader('x-vc-bdturing-parameters')
                        t = o && Rs(o) ? atob(o) : o
                      }
                    } catch (e) {}
                    t ? xs(n, t, s, u) : u()
                  })())
                : o()
            }),
            (e.onerror = function (t) {
              f && f.call(e, t),
                c.error.forEach(function (n) {
                  n.call(e, t)
                })
            }),
            o &&
              (e.onloadend = function () {
                var t = arguments,
                  n = function () {
                    o.apply(e, t)
                  }
                !a && e.status >= 200 && e.status < 300 ? i.push(n) : n()
              })
        },
        l = {}
      t.forEach(function (t) {
        var n,
          o,
          u = [].slice.call(t.arguments)
        switch (t.fnName) {
          case 'addEventListener':
          case 'removeEventListener':
            var s = u[0]
            ;['readystatechange', 'load', 'loadend'].indexOf(s) >= 0
              ? 'addEventListener' === t.fnName
                ? (l[s] || (l[s] = []),
                  null === (n = l[s]) ||
                    void 0 === n ||
                    n.push({
                      origin: t.origin,
                      args: u,
                    }))
                : l[s] &&
                  (l[s] =
                    null === (o = l[s]) || void 0 === o
                      ? void 0
                      : o.filter(function (e) {
                          return e.args[1] !== u[1]
                        }))
              : c[s]
              ? c[s].push(u[1])
              : t.origin.apply(e, u)
            break
          case 'open':
            var p = u[1],
              h = p.indexOf('?') >= 0,
              d = 'verifyFp='.concat(r, '&fp=').concat(r)
            ;(u[1] = h
              ? ''.concat(p, '&').concat(d)
              : ''.concat(p, '?').concat(d)),
              t.origin.apply(e, u)
            break
          case 'send':
            Object.keys(l).forEach(function (t) {
              var n
              null === (n = l[t]) ||
                void 0 === n ||
                n.forEach(function (n) {
                  var r = n.origin,
                    o = n.args,
                    u = o[1]
                  ;(o[1] = function () {
                    var n = arguments
                    switch (t) {
                      case 'readystatechange':
                        !a &&
                        e.readyState === XMLHttpRequest.DONE &&
                        e.status >= 200 &&
                        e.status < 300
                          ? i.push(function () {
                              u.apply(e, n)
                            })
                          : u.apply(e, arguments)
                        break
                      case 'load':
                      case 'loadend':
                        !a && e.status >= 200 && e.status < 300
                          ? i.push(function () {
                              u.apply(e, n)
                            })
                          : u.apply(e, arguments)
                    }
                  }),
                    r.apply(e, o)
                })
            }),
              f(),
              t.origin.apply(e, u)
            break
          default:
            t.origin.apply(e, u)
        }
      })
    },
    Ts = function (e, t) {
      !(function (e) {
        if (
          ((e = Array.isArray(e)
            ? {
                include: e,
                exclude: [],
              }
            : {
                include: (r = e.include) || [],
                exclude: (o = e.exclude) || [],
              }),
          window._vc_intercepted_pathList)
        ) {
          var t = window._vc_intercepted_pathList,
            r = t.include,
            o = t.exclude
          e = {
            include: n(n([], r, !0), e.include, !0),
            exclude: n(n([], o, !0), e.exclude, !0),
          }
        }
        window._vc_intercepted_pathList = e
      })(e),
        (function (e, t) {
          var n = window.XMLHttpRequest.prototype,
            r = n.open,
            o = n.setRequestHeader,
            i = n.overrideMimeType,
            a = n.send,
            u = n.addEventListener,
            s = n.removeEventListener
          n._vc_intercepted ||
            ((n._vc_intercepted = !0),
            (n.open = function (t, n) {
              try {
                var o = 'string' == typeof n ? n : n.toString()
                if (!e(o)) return r.apply(this, arguments)
                ;(this._vc_status = 1),
                  (this._vc_actionList = []),
                  this._vc_actionList.push({
                    origin: r,
                    fnName: 'open',
                    arguments: arguments,
                  })
              } catch (e) {
                return r.apply(this, arguments)
              }
            }),
            (n.overrideMimeType = function () {
              if (1 !== this._vc_status) return i.apply(this, arguments)
              this._vc_actionList.push({
                origin: i,
                fnName: 'overrideMimeType',
                arguments: arguments,
              })
            }),
            (n.setRequestHeader = function () {
              if (1 !== this._vc_status) return o.apply(this, arguments)
              this._vc_actionList.push({
                origin: o,
                fnName: 'setRequestHeader',
                arguments: arguments,
              })
            }),
            (n.addEventListener = function () {
              if (1 !== this._vc_status) return u.apply(this, arguments)
              this._vc_actionList.push({
                origin: u,
                fnName: 'addEventListener',
                arguments: arguments,
              })
            }),
            (n.removeEventListener = function () {
              if (1 !== this._vc_status) return s.apply(this, arguments)
              this._vc_actionList.push({
                origin: s,
                fnName: 'removeEventListener',
                arguments: arguments,
              })
            }),
            (n.send = function () {
              var e = this
              if (1 !== this._vc_status) return a.apply(this, arguments)
              this._vc_actionList.push({
                origin: a,
                fnName: 'send',
                arguments: arguments,
              })
              var n = function () {
                Ls(e, e._vc_actionList, t),
                  delete e._vc_status,
                  delete e._vc_actionList
              }
              t.xhrAsyncSend
                ? Promise.resolve()
                    .then(n)
                    .catch(function () {
                      return null
                    })
                : n()
            }))
        })(Ps, t),
        (function (e, t) {
          if (!window._vc_intercepted_fetch) {
            window._vc_intercepted_fetch = !0
            var r = window.fetch
            window.fetch = function () {
              for (var o = [], i = 0; i < arguments.length; i++)
                o[i] = arguments[i]
              var a,
                u = o[0]
              return (
                (a =
                  u instanceof Es
                    ? u.toString()
                    : u instanceof Request
                    ? u.url
                    : u),
                e(a)
                  ? new Promise(function (e, i) {
                      var u = t.getFp(),
                        s = a.indexOf('?') >= 0,
                        c = 'verifyFp='.concat(u, '&fp=').concat(u)
                      a = s
                        ? ''.concat(a, '&').concat(c)
                        : ''.concat(a, '?').concat(c)
                      var f = n([], o, !0)
                      f[0] instanceof Es
                        ? (f[0].search = new Es(a).search)
                        : f[0] instanceof Request || (f[0] = a),
                        r
                          .apply(void 0, f)
                          .then(function (n) {
                            var r = function () {
                              e(n)
                            }
                            if (n.ok)
                              try {
                                var i = null
                                n.headers.forEach(function (e, t) {
                                  'bdturing-verify' === t
                                    ? (i = e)
                                    : 'x-vc-bdturing-parameters' === t &&
                                      (i = e && Rs(e) ? atob(e) : e)
                                }),
                                  i
                                    ? xs(
                                        t,
                                        i,
                                        function () {
                                          e(window.fetch.apply(window, o))
                                        },
                                        r
                                      )
                                    : r()
                              } catch (e) {
                                r()
                              }
                            else r()
                          })
                          .catch(i)
                    })
                  : r.apply(void 0, o)
              )
            }
          }
        })(Ps, t)
    },
    ks = function (e, t) {
      ;(t || ki).set({
        executor: e.executor,
        static_domain: e.static_domain,
        setting_host: e.settingHost,
      })
    },
    Cs = function (e, t, n, r) {
      var o,
        i,
        a = (null == r ? void 0 : r.slardar) || xi,
        u = (null == r ? void 0 : r.loader) || ki,
        s = null == r ? void 0 : r.options
      a.init(Oi, e), a.start(e.isPrefetch)
      var c =
          (null === (o = e.captchaOptions) || void 0 === o
            ? void 0
            : o.hostConfig) || {},
        f = c.setting,
        l = c.static_domain,
        p = c.rmc_version
      if (
        ((Os =
          (null === (i = window.verifySDK) || void 0 === i
            ? void 0
            : i.initVerifyOptions) && !e.isPrefetch
            ? yi.resolve(window.verifySDK)
            : u.load({
                commonOptions: e.commonOptions || {},
                setting_host: f,
                static_domain: l,
                rmc_version: p,
                isPrefetch: e.isPrefetch,
                slardar: a,
              })),
        e.isPrefetch)
      )
        return Os
      s || (Ss = new Ci(e))
      var h = e.interceptPathList,
        d = e.xhrAsyncSend
      return (
        h &&
          Ts(h, {
            getFp: Is,
            render: As,
            xhrAsyncSend: d,
          }),
        Os.then(function (e) {
          var n = (s || Ss).get()
          return (
            n.commonOptions &&
              u.scene_level &&
              (n.commonOptions.pageId ||
                n.commonOptions.repoId ||
                console.error(
                  '[sec_sdk_build]commonOptions缺失repoId或pageId参数'
                ),
              (n.commonOptions.scene_level = u.scene_level),
              a.setContext('scene_level', u.scene_level)),
            s
              ? e.init(n)
              : ((null == r ? void 0 : r.isInstance)
                  ? (e = e.initVerifyCenter(n))
                  : e.initVerifyOptions(n),
                t ? void t(e) : e)
          )
        }).catch(function (e) {
          if (!n) return yi.reject(e)
          null == n || n(e)
        })
      )
    },
    As = function (e) {
      Os.then(function (t) {
        t.autoRender(e)
      }).catch(function () {})
    },
    Is = function () {
      return (null == Ss ? void 0 : Ss.getFp()) || Ri()
    },
    Us = (function () {
      function e() {
        ;(this.isLoaded = !1),
          (this.slardar = new Pi()),
          (this.loader = new Ti({
            slardar: this.slardar,
          }))
      }
      return (
        (e.prototype.config = function (e) {
          return ks(e, this.loader), this
        }),
        (e.prototype.init = function (e, t) {
          var n = this,
            r = (void 0 === t ? {} : t).errorCb
          return (
            (this.options = new Ci(e)),
            this.isLoaded ||
              ((this.isLoaded = !0),
              (this.instancePromise = Cs(e, void 0, void 0, {
                isInstanceV2: !0,
                slardar: this.slardar,
                loader: this.loader,
                options: this.options,
              }).catch(function (e) {
                return (
                  r ? r(e) : console.error(e), (n.isLoaded = !1), yi.reject(e)
                )
              }))),
            this
          )
        }),
        (e.prototype.getFp = function () {
          var e = Is()
          return yi.resolve(e)
        }),
        (e.prototype.getFpSync = function () {
          var e
          return (
            (null === (e = this.options) || void 0 === e
              ? void 0
              : e.getFp()) || Ri()
          )
        }),
        (e.prototype.render = function (e) {
          if (!this.instancePromise)
            throw new Error('[sec_sdk_build] 请先执行init初始化操作')
          return this.instancePromise
            .then(function (t) {
              t.autoRender(e)
            })
            .catch(function (e) {
              return (
                console.error('[sec_sdk_build] 验证码渲染失败'), yi.reject(e)
              )
            })
        }),
        (e.prototype.prefetch = function (e, t) {
          Ds(e, t, {
            loader: this.loader,
            slardar: this.slardar,
          })
        }),
        (e.config = function (e) {
          ks(e)
        }),
        (e.init = function (e, t, n) {
          return Cs(e, t, n, {
            isInstance: !0,
          })
        }),
        e
      )
    })()
  function Ds(e, n, r) {
    var o,
      i = (null == r ? void 0 : r.loader) || ki,
      a = (null == r ? void 0 : r.slardar) || xi,
      u = 0
    function s(e) {
      if ((1 === ++u && e && (o = e), 2 === u))
        if (o || e) {
          if ('function' == typeof (null == n ? void 0 : n.errorCb)) {
            var t =
              o && e
                ? {
                    filename: ''.concat(o.filename, ',').concat(e.filename),
                    name: 'prefetch_error',
                    message: '预加载资源失败',
                  }
                : o || e
            a.reportJsError(
              {
                filename: t.filename,
                message: t.message,
                stack: '',
              },
              'prefetch-error'
            ),
              n.errorCb(t)
          }
        } else
          'function' == typeof (null == n ? void 0 : n.successCb) &&
            n.successCb()
    }
    Cs(
      t(t({}, e), {
        isPrefetch: !0,
      }),
      void 0,
      void 0,
      r
    )
      .then(function () {
        return s()
      })
      .catch(function (e) {
        s({
          filename: e,
          name: 'init_prefetch_err',
          message: '预加载初始化资源失败',
        })
      }),
      i
        .prefetchCaptchaCdn()
        .then(function () {
          return s()
        })
        .catch(function (e) {
          s({
            filename: e,
            name: 'render_prefetch_err',
            message: '预加载验证码资源失败',
          })
        })
  }
  ;(e.TTVerifyCenter = Us),
    (e.config = ks),
    (e.getFp = function () {
      var e = Is()
      return yi.resolve(e)
    }),
    (e.getFpSync = Is),
    (e.init = Cs),
    (e.prefetch = Ds),
    (e.render = As),
    Object.defineProperty(e, '__esModule', {
      value: !0,
    })
})