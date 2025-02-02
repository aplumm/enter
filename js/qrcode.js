/*! qrcanvas v3.0.6 | ISC License */
! function(t, r) {
    "object" == typeof exports && "undefined" != typeof module ? r(exports) : "function" == typeof define && define.amd ? define(["exports"], r) : r((t = t || self).qrcanvas = {})
}(this, function(t) {
    "use strict";

    function r() {
        throw new Error("Not implemented")
    }
    var e, f = (function(t, r) {
            var e = function() {
                function i(t, r) {
                    function a(t, r) {
                        l = function(t) {
                            for (var r = new Array(t), e = 0; e < t; e += 1) {
                                r[e] = new Array(t);
                                for (var n = 0; n < t; n += 1) r[e][n] = null
                            }
                            return r
                        }(s = 4 * u + 17), e(0, 0), e(s - 7, 0), e(0, s - 7), i(), o(), v(t, r), 7 <= u && g(t), null == n && (n = w(u, f, c)), d(n, r)
                    }
                    var u = t,
                        f = y[r],
                        l = null,
                        s = 0,
                        n = null,
                        c = [],
                        h = {},
                        e = function(t, r) {
                            for (var e = -1; e <= 7; e += 1)
                                if (!(t + e <= -1 || s <= t + e))
                                    for (var n = -1; n <= 7; n += 1) r + n <= -1 || s <= r + n || (l[t + e][r + n] = 0 <= e && e <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= n && n <= 4)
                        },
                        o = function() {
                            for (var t = 8; t < s - 8; t += 1) null == l[t][6] && (l[t][6] = t % 2 == 0);
                            for (var r = 8; r < s - 8; r += 1) null == l[6][r] && (l[6][r] = r % 2 == 0)
                        },
                        i = function() {
                            for (var t = C.getPatternPosition(u), r = 0; r < t.length; r += 1)
                                for (var e = 0; e < t.length; e += 1) {
                                    var n = t[r],
                                        o = t[e];
                                    if (null == l[n][o])
                                        for (var i = -2; i <= 2; i += 1)
                                            for (var a = -2; a <= 2; a += 1) l[n + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a
                                }
                        },
                        g = function(t) {
                            for (var r = C.getBCHTypeNumber(u), e = 0; e < 18; e += 1) {
                                var n = !t && 1 == (r >> e & 1);
                                l[Math.floor(e / 3)][e % 3 + s - 8 - 3] = n
                            }
                            for (e = 0; e < 18; e += 1) {
                                n = !t && 1 == (r >> e & 1);
                                l[e % 3 + s - 8 - 3][Math.floor(e / 3)] = n
                            }
                        },
                        v = function(t, r) {
                            for (var e = f << 3 | r, n = C.getBCHTypeInfo(e), o = 0; o < 15; o += 1) {
                                var i = !t && 1 == (n >> o & 1);
                                o < 6 ? l[o][8] = i : o < 8 ? l[o + 1][8] = i : l[s - 15 + o][8] = i
                            }
                            for (o = 0; o < 15; o += 1) {
                                i = !t && 1 == (n >> o & 1);
                                o < 8 ? l[8][s - o - 1] = i : o < 9 ? l[8][15 - o - 1 + 1] = i : l[8][15 - o - 1] = i
                            }
                            l[s - 8][8] = !t
                        },
                        d = function(t, r) {
                            for (var e = -1, n = s - 1, o = 7, i = 0, a = C.getMaskFunction(r), u = s - 1; 0 < u; u -= 2)
                                for (6 == u && --u;;) {
                                    for (var f = 0; f < 2; f += 1)
                                        if (null == l[n][u - f]) {
                                            var c = !1;
                                            i < t.length && (c = 1 == (t[i] >>> o & 1)), a(n, u - f) && (c = !c), l[n][u - f] = c, -1 == --o && (i += 1, o = 7)
                                        } if ((n += e) < 0 || s <= n) {
                                        n -= e, e = -e;
                                        break
                                    }
                                }
                        },
                        w = function(t, r, e) {
                            for (var n = S.getRSBlocks(t, r), o = A(), i = 0; i < e.length; i += 1) {
                                var a = e[i];
                                o.put(a.getMode(), 4), o.put(a.getLength(), C.getLengthInBits(a.getMode(), t)), a.write(o)
                            }
                            var u = 0;
                            for (i = 0; i < n.length; i += 1) u += n[i].dataCount;
                            if (o.getLengthInBits() > 8 * u) throw "code length overflow. (" + o.getLengthInBits() + ">" + 8 * u + ")";
                            for (o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(!1);
                            for (; !(o.getLengthInBits() >= 8 * u || (o.put(236, 8), o.getLengthInBits() >= 8 * u));) o.put(17, 8);
                            return function(t, r) {
                                for (var e = 0, n = 0, o = 0, i = new Array(r.length), a = new Array(r.length), u = 0; u < r.length; u += 1) {
                                    var f = r[u].dataCount,
                                        c = r[u].totalCount - f;
                                    n = Math.max(n, f), o = Math.max(o, c), i[u] = new Array(f);
                                    for (var l = 0; l < i[u].length; l += 1) i[u][l] = 255 & t.getBuffer()[l + e];
                                    e += f;
                                    var s = C.getErrorCorrectPolynomial(c),
                                        g = m(i[u], s.getLength() - 1).mod(s);
                                    a[u] = new Array(s.getLength() - 1);
                                    for (l = 0; l < a[u].length; l += 1) {
                                        var h = l + g.getLength() - a[u].length;
                                        a[u][l] = 0 <= h ? g.getAt(h) : 0
                                    }
                                }
                                var v = 0;
                                for (l = 0; l < r.length; l += 1) v += r[l].totalCount;
                                var d = new Array(v),
                                    w = 0;
                                for (l = 0; l < n; l += 1)
                                    for (u = 0; u < r.length; u += 1) l < i[u].length && (d[w] = i[u][l], w += 1);
                                for (l = 0; l < o; l += 1)
                                    for (u = 0; u < r.length; u += 1) l < a[u].length && (d[w] = a[u][l], w += 1);
                                return d
                            }(o, n)
                        };
                    h.addData = function(t, r) {
                        var e = null;
                        switch (r = r || "Byte") {
                            case "Numeric":
                                e = M(t);
                                break;
                            case "Alphanumeric":
                                e = D(t);
                                break;
                            case "Byte":
                                e = L(t);
                                break;
                            case "Kanji":
                                e = z(t);
                                break;
                            default:
                                throw "mode:" + r
                        }
                        c.push(e), n = null
                    }, h.isDark = function(t, r) {
                        if (t < 0 || s <= t || r < 0 || s <= r) throw t + "," + r;
                        return l[t][r]
                    }, h.getModuleCount = function() {
                        return s
                    }, h.make = function() {
                        if (u < 1) {
                            for (var t = 1; t < 40; t++) {
                                for (var r = S.getRSBlocks(t, f), e = A(), n = 0; n < c.length; n++) {
                                    var o = c[n];
                                    e.put(o.getMode(), 4), e.put(o.getLength(), C.getLengthInBits(o.getMode(), t)), o.write(e)
                                }
                                var i = 0;
                                for (n = 0; n < r.length; n++) i += r[n].dataCount;
                                if (e.getLengthInBits() <= 8 * i) break
                            }
                            u = t
                        }
                        a(!1, function() {
                            for (var t = 0, r = 0, e = 0; e < 8; e += 1) {
                                a(!0, e);
                                var n = C.getLostPoint(h);
                                (0 == e || n < t) && (t = n, r = e)
                            }
                            return r
                        }())
                    }, h.createTableTag = function(t, r) {
                        t = t || 2;
                        var e = "";
                        e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: " + (r = void 0 === r ? 4 * t : r) + "px;", e += '">', e += "<tbody>";
                        for (var n = 0; n < h.getModuleCount(); n += 1) {
                            e += "<tr>";
                            for (var o = 0; o < h.getModuleCount(); o += 1) e += '<td style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + t + "px;", e += " height: " + t + "px;", e += " background-color: ", e += h.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
                            e += "</tr>"
                        }
                        return e += "</tbody>", e += "</table>"
                    }, h.createSvgTag = function(t, r, e, n) {
                        var o = {};
                        "object" == typeof arguments[0] && (t = (o = arguments[0]).cellSize, r = o.margin, e = o.alt, n = o.title), t = t || 2, r = void 0 === r ? 4 * t : r, (e = "string" == typeof e ? {
                            text: e
                        } : e || {}).text = e.text || null, e.id = e.text ? e.id || "qrcode-description" : null, (n = "string" == typeof n ? {
                            text: n
                        } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-title" : null;
                        var i, a, u, f, c = h.getModuleCount() * t + 2 * r,
                            l = "";
                        for (f = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", l += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', l += o.scalable ? "" : ' width="' + c + 'px" height="' + c + 'px"', l += ' viewBox="0 0 ' + c + " " + c + '" ', l += ' preserveAspectRatio="xMinYMin meet"', l += n.text || e.text ? ' role="img" aria-labelledby="' + p([n.id, e.id].join(" ").trim()) + '"' : "", l += ">", l += n.text ? '<title id="' + p(n.id) + '">' + p(n.text) + "</title>" : "", l += e.text ? '<description id="' + p(e.id) + '">' + p(e.text) + "</description>" : "", l += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', l += '<path d="', a = 0; a < h.getModuleCount(); a += 1)
                            for (u = a * t + r, i = 0; i < h.getModuleCount(); i += 1) h.isDark(a, i) && (l += "M" + (i * t + r) + "," + u + f);
                        return l += '" stroke="transparent" fill="black"/>', l += "</svg>"
                    }, h.createDataURL = function(o, t) {
                        o = o || 2, t = void 0 === t ? 4 * o : t;
                        var r = h.getModuleCount() * o + 2 * t,
                            i = t,
                            a = r - t;
                        return I(r, r, function(t, r) {
                            if (i <= t && t < a && i <= r && r < a) {
                                var e = Math.floor((t - i) / o),
                                    n = Math.floor((r - i) / o);
                                return h.isDark(n, e) ? 0 : 1
                            }
                            return 1
                        })
                    }, h.createImgTag = function(t, r, e) {
                        t = t || 2, r = void 0 === r ? 4 * t : r;
                        var n = h.getModuleCount() * t + 2 * r,
                            o = "";
                        return o += "<img", o += ' src="', o += h.createDataURL(t, r), o += '"', o += ' width="', o += n, o += '"', o += ' height="', o += n, o += '"', e && (o += ' alt="', o += p(e), o += '"'), o += "/>"
                    };
                    var p = function(t) {
                        for (var r = "", e = 0; e < t.length; e += 1) {
                            var n = t.charAt(e);
                            switch (n) {
                                case "<":
                                    r += "&lt;";
                                    break;
                                case ">":
                                    r += "&gt;";
                                    break;
                                case "&":
                                    r += "&amp;";
                                    break;
                                case '"':
                                    r += "&quot;";
                                    break;
                                default:
                                    r += n
                            }
                        }
                        return r
                    };
                    return h.createASCII = function(t, r) {
                        if ((t = t || 1) < 2) return function(t) {
                            t = void 0 === t ? 2 : t;
                            var r, e, n, o, i, a = 1 * h.getModuleCount() + 2 * t,
                                u = t,
                                f = a - t,
                                c = {
                                    "██": "█",
                                    "█ ": "▀",
                                    " █": "▄",
                                    "  ": " "
                                },
                                l = {
                                    "██": "▀",
                                    "█ ": "▀",
                                    " █": " ",
                                    "  ": " "
                                },
                                s = "";
                            for (r = 0; r < a; r += 2) {
                                for (n = Math.floor((r - u) / 1), o = Math.floor((r + 1 - u) / 1), e = 0; e < a; e += 1) i = "█", u <= e && e < f && u <= r && r < f && h.isDark(n, Math.floor((e - u) / 1)) && (i = " "), u <= e && e < f && u <= r + 1 && r + 1 < f && h.isDark(o, Math.floor((e - u) / 1)) ? i += " " : i += "█", s += t < 1 && f <= r + 1 ? l[i] : c[i];
                                s += "\n"
                            }
                            return a % 2 && 0 < t ? s.substring(0, s.length - a - 1) + Array(1 + a).join("▀") : s.substring(0, s.length - 1)
                        }(r);
                        --t, r = void 0 === r ? 2 * t : r;
                        var e, n, o, i, a = h.getModuleCount() * t + 2 * r,
                            u = r,
                            f = a - r,
                            c = Array(t + 1).join("██"),
                            l = Array(t + 1).join("  "),
                            s = "",
                            g = "";
                        for (e = 0; e < a; e += 1) {
                            for (o = Math.floor((e - u) / t), g = "", n = 0; n < a; n += 1) i = 1, u <= n && n < f && u <= e && e < f && h.isDark(o, Math.floor((n - u) / t)) && (i = 0), g += i ? c : l;
                            for (o = 0; o < t; o += 1) s += g + "\n"
                        }
                        return s.substring(0, s.length - 1)
                    }, h.renderTo2dContext = function(t, r) {
                        r = r || 2;
                        for (var e = h.getModuleCount(), n = 0; n < e; n++)
                            for (var o = 0; o < e; o++) t.fillStyle = h.isDark(n, o) ? "black" : "white", t.fillRect(n * r, o * r, r, r)
                    }, h
                }
                i.stringToBytes = (i.stringToBytesFuncs = {
                    default: function(t) {
                        for (var r = [], e = 0; e < t.length; e += 1) {
                            var n = t.charCodeAt(e);
                            r.push(255 & n)
                        }
                        return r
                    }
                }).default, i.createStringToBytes = function(u, f) {
                    var i = function() {
                            for (var r = T(u), t = function() {
                                    var t = r.read();
                                    if (-1 == t) throw "eof";
                                    return t
                                }, e = 0, n = {};;) {
                                var o = r.read();
                                if (-1 == o) break;
                                var i = t(),
                                    a = t() << 8 | t();
                                n[String.fromCharCode(o << 8 | i)] = a, e += 1
                            }
                            if (e != f) throw e + " != " + f;
                            return n
                        }(),
                        a = "?".charCodeAt(0);
                    return function(t) {
                        for (var r = [], e = 0; e < t.length; e += 1) {
                            var n = t.charCodeAt(e);
                            if (n < 128) r.push(n);
                            else {
                                var o = i[t.charAt(e)];
                                "number" == typeof o ? (255 & o) == o ? r.push(o) : (r.push(o >>> 8), r.push(255 & o)) : r.push(a)
                            }
                        }
                        return r
                    }
                };
                var r, t, a = 1,
                    u = 2,
                    o = 4,
                    f = 8,
                    y = {
                        L: 1,
                        M: 0,
                        Q: 3,
                        H: 2
                    },
                    e = 0,
                    n = 1,
                    c = 2,
                    l = 3,
                    s = 4,
                    g = 5,
                    h = 6,
                    v = 7,
                    C = (r = [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ], (t = {}).getBCHTypeInfo = function(t) {
                        for (var r = t << 10; 0 <= d(r) - d(1335);) r ^= 1335 << d(r) - d(1335);
                        return 21522 ^ (t << 10 | r)
                    }, t.getBCHTypeNumber = function(t) {
                        for (var r = t << 12; 0 <= d(r) - d(7973);) r ^= 7973 << d(r) - d(7973);
                        return t << 12 | r
                    }, t.getPatternPosition = function(t) {
                        return r[t - 1]
                    }, t.getMaskFunction = function(t) {
                        switch (t) {
                            case e:
                                return function(t, r) {
                                    return (t + r) % 2 == 0
                                };
                            case n:
                                return function(t, r) {
                                    return t % 2 == 0
                                };
                            case c:
                                return function(t, r) {
                                    return r % 3 == 0
                                };
                            case l:
                                return function(t, r) {
                                    return (t + r) % 3 == 0
                                };
                            case s:
                                return function(t, r) {
                                    return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0
                                };
                            case g:
                                return function(t, r) {
                                    return t * r % 2 + t * r % 3 == 0
                                };
                            case h:
                                return function(t, r) {
                                    return (t * r % 2 + t * r % 3) % 2 == 0
                                };
                            case v:
                                return function(t, r) {
                                    return (t * r % 3 + (t + r) % 2) % 2 == 0
                                };
                            default:
                                throw "bad maskPattern:" + t
                        }
                    }, t.getErrorCorrectPolynomial = function(t) {
                        for (var r = m([1], 0), e = 0; e < t; e += 1) r = r.multiply(m([1, w.gexp(e)], 0));
                        return r
                    }, t.getLengthInBits = function(t, r) {
                        if (1 <= r && r < 10) switch (t) {
                            case a:
                                return 10;
                            case u:
                                return 9;
                            case o:
                            case f:
                                return 8;
                            default:
                                throw "mode:" + t
                        } else if (r < 27) switch (t) {
                            case a:
                                return 12;
                            case u:
                                return 11;
                            case o:
                                return 16;
                            case f:
                                return 10;
                            default:
                                throw "mode:" + t
                        } else {
                            if (!(r < 41)) throw "type:" + r;
                            switch (t) {
                                case a:
                                    return 14;
                                case u:
                                    return 13;
                                case o:
                                    return 16;
                                case f:
                                    return 12;
                                default:
                                    throw "mode:" + t
                            }
                        }
                    }, t.getLostPoint = function(t) {
                        for (var r = t.getModuleCount(), e = 0, n = 0; n < r; n += 1)
                            for (var o = 0; o < r; o += 1) {
                                for (var i = 0, a = t.isDark(n, o), u = -1; u <= 1; u += 1)
                                    if (!(n + u < 0 || r <= n + u))
                                        for (var f = -1; f <= 1; f += 1) o + f < 0 || r <= o + f || 0 == u && 0 == f || a == t.isDark(n + u, o + f) && (i += 1);
                                5 < i && (e += 3 + i - 5)
                            }
                        for (n = 0; n < r - 1; n += 1)
                            for (o = 0; o < r - 1; o += 1) {
                                var c = 0;
                                t.isDark(n, o) && (c += 1), t.isDark(n + 1, o) && (c += 1), t.isDark(n, o + 1) && (c += 1), t.isDark(n + 1, o + 1) && (c += 1), 0 != c && 4 != c || (e += 3)
                            }
                        for (n = 0; n < r; n += 1)
                            for (o = 0; o < r - 6; o += 1) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (e += 40);
                        for (o = 0; o < r; o += 1)
                            for (n = 0; n < r - 6; n += 1) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (e += 40);
                        var l = 0;
                        for (o = 0; o < r; o += 1)
                            for (n = 0; n < r; n += 1) t.isDark(n, o) && (l += 1);
                        return e += Math.abs(100 * l / r / r - 50) / 5 * 10
                    }, t);

                function d(t) {
                    for (var r = 0; 0 != t;) r += 1, t >>>= 1;
                    return r
                }
                var w = function() {
                    for (var r = new Array(256), e = new Array(256), t = 0; t < 8; t += 1) r[t] = 1 << t;
                    for (t = 8; t < 256; t += 1) r[t] = r[t - 4] ^ r[t - 5] ^ r[t - 6] ^ r[t - 8];
                    for (t = 0; t < 255; t += 1) e[r[t]] = t;
                    var n = {
                        glog: function(t) {
                            if (t < 1) throw "glog(" + t + ")";
                            return e[t]
                        },
                        gexp: function(t) {
                            for (; t < 0;) t += 255;
                            for (; 256 <= t;) t -= 255;
                            return r[t]
                        }
                    };
                    return n
                }();

                function m(n, o) {
                    if (void 0 === n.length) throw n.length + "/" + o;
                    var r = function() {
                            for (var t = 0; t < n.length && 0 == n[t];) t += 1;
                            for (var r = new Array(n.length - t + o), e = 0; e < n.length - t; e += 1) r[e] = n[e + t];
                            return r
                        }(),
                        i = {
                            getAt: function(t) {
                                return r[t]
                            },
                            getLength: function() {
                                return r.length
                            },
                            multiply: function(t) {
                                for (var r = new Array(i.getLength() + t.getLength() - 1), e = 0; e < i.getLength(); e += 1)
                                    for (var n = 0; n < t.getLength(); n += 1) r[e + n] ^= w.gexp(w.glog(i.getAt(e)) + w.glog(t.getAt(n)));
                                return m(r, 0)
                            },
                            mod: function(t) {
                                if (i.getLength() - t.getLength() < 0) return i;
                                for (var r = w.glog(i.getAt(0)) - w.glog(t.getAt(0)), e = new Array(i.getLength()), n = 0; n < i.getLength(); n += 1) e[n] = i.getAt(n);
                                for (n = 0; n < t.getLength(); n += 1) e[n] ^= w.gexp(w.glog(t.getAt(n)) + r);
                                return m(e, 0).mod(t)
                            }
                        };
                    return i
                }

                function p() {
                    var e = [],
                        o = {
                            writeByte: function(t) {
                                e.push(255 & t)
                            },
                            writeShort: function(t) {
                                o.writeByte(t), o.writeByte(t >>> 8)
                            },
                            writeBytes: function(t, r, e) {
                                r = r || 0, e = e || t.length;
                                for (var n = 0; n < e; n += 1) o.writeByte(t[n + r])
                            },
                            writeString: function(t) {
                                for (var r = 0; r < t.length; r += 1) o.writeByte(t.charCodeAt(r))
                            },
                            toByteArray: function() {
                                return e
                            },
                            toString: function() {
                                var t = "";
                                t += "[";
                                for (var r = 0; r < e.length; r += 1) 0 < r && (t += ","), t += e[r];
                                return t += "]"
                            }
                        };
                    return o
                }

                function x() {
                    function e(t) {
                        a += String.fromCharCode(r(63 & t))
                    }
                    var n = 0,
                        o = 0,
                        i = 0,
                        a = "",
                        t = {},
                        r = function(t) {
                            if (!(t < 0)) {
                                if (t < 26) return 65 + t;
                                if (t < 52) return t - 26 + 97;
                                if (t < 62) return t - 52 + 48;
                                if (62 == t) return 43;
                                if (63 == t) return 47
                            }
                            throw "n:" + t
                        };
                    return t.writeByte = function(t) {
                        for (n = n << 8 | 255 & t, o += 8, i += 1; 6 <= o;) e(n >>> o - 6), o -= 6
                    }, t.flush = function() {
                        if (0 < o && (e(n << 6 - o), o = n = 0), i % 3 != 0)
                            for (var t = 3 - i % 3, r = 0; r < t; r += 1) a += "="
                    }, t.toString = function() {
                        return a
                    }, t
                }

                function k(t, r) {
                    var n = t,
                        o = r,
                        v = new Array(t * r),
                        e = {
                            setPixel: function(t, r, e) {
                                v[r * n + t] = e
                            },
                            write: function(t) {
                                t.writeString("GIF87a"), t.writeShort(n), t.writeShort(o), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(n), t.writeShort(o), t.writeByte(0);
                                var r = i(2);
                                t.writeByte(2);
                                for (var e = 0; 255 < r.length - e;) t.writeByte(255), t.writeBytes(r, e, 255), e += 255;
                                t.writeByte(r.length - e), t.writeBytes(r, e, r.length - e), t.writeByte(0), t.writeString(";")
                            }
                        },
                        i = function(t) {
                            for (var r = 1 << t, e = 1 + (1 << t), n = t + 1, o = d(), i = 0; i < r; i += 1) o.add(String.fromCharCode(i));
                            o.add(String.fromCharCode(r)), o.add(String.fromCharCode(e));
                            var a, u, f, c = p(),
                                l = (a = c, f = u = 0, {
                                    write: function(t, r) {
                                        if (t >>> r != 0) throw "length over";
                                        for (; 8 <= u + r;) a.writeByte(255 & (t << u | f)), r -= 8 - u, t >>>= 8 - u, u = f = 0;
                                        f |= t << u, u += r
                                    },
                                    flush: function() {
                                        0 < u && a.writeByte(f)
                                    }
                                });
                            l.write(r, n);
                            var s = 0,
                                g = String.fromCharCode(v[s]);
                            for (s += 1; s < v.length;) {
                                var h = String.fromCharCode(v[s]);
                                s += 1, o.contains(g + h) ? g += h : (l.write(o.indexOf(g), n), o.size() < 4095 && (o.size() == 1 << n && (n += 1), o.add(g + h)), g = h)
                            }
                            return l.write(o.indexOf(g), n), l.write(e, n), l.flush(), c.toByteArray()
                        },
                        d = function() {
                            var r = {},
                                e = 0,
                                n = {
                                    add: function(t) {
                                        if (n.contains(t)) throw "dup key:" + t;
                                        r[t] = e, e += 1
                                    },
                                    size: function() {
                                        return e
                                    },
                                    indexOf: function(t) {
                                        return r[t]
                                    },
                                    contains: function(t) {
                                        return void 0 !== r[t]
                                    }
                                };
                            return n
                        };
                    return e
                }
                var b, B, S = (b = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12, 7, 37, 13],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16]
                    ], (B = {}).getRSBlocks = function(t, r) {
                        var e = function(t, r) {
                            switch (r) {
                                case y.L:
                                    return b[4 * (t - 1) + 0];
                                case y.M:
                                    return b[4 * (t - 1) + 1];
                                case y.Q:
                                    return b[4 * (t - 1) + 2];
                                case y.H:
                                    return b[4 * (t - 1) + 3];
                                default:
                                    return
                            }
                        }(t, r);
                        if (void 0 === e) throw "bad rs block @ typeNumber:" + t + "/errorCorrectionLevel:" + r;
                        for (var n, o, i = e.length / 3, a = [], u = 0; u < i; u += 1)
                            for (var f = e[3 * u + 0], c = e[3 * u + 1], l = e[3 * u + 2], s = 0; s < f; s += 1) a.push((n = l, o = void 0, (o = {}).totalCount = c, o.dataCount = n, o));
                        return a
                    }, B),
                    A = function() {
                        var e = [],
                            n = 0,
                            o = {
                                getBuffer: function() {
                                    return e
                                },
                                getAt: function(t) {
                                    var r = Math.floor(t / 8);
                                    return 1 == (e[r] >>> 7 - t % 8 & 1)
                                },
                                put: function(t, r) {
                                    for (var e = 0; e < r; e += 1) o.putBit(1 == (t >>> r - e - 1 & 1))
                                },
                                getLengthInBits: function() {
                                    return n
                                },
                                putBit: function(t) {
                                    var r = Math.floor(n / 8);
                                    e.length <= r && e.push(0), t && (e[r] |= 128 >>> n % 8), n += 1
                                }
                            };
                        return o
                    },
                    M = function(t) {
                        var r = a,
                            n = t,
                            e = {
                                getMode: function() {
                                    return r
                                },
                                getLength: function(t) {
                                    return n.length
                                },
                                write: function(t) {
                                    for (var r = n, e = 0; e + 2 < r.length;) t.put(o(r.substring(e, e + 3)), 10), e += 3;
                                    e < r.length && (r.length - e == 1 ? t.put(o(r.substring(e, e + 1)), 4) : r.length - e == 2 && t.put(o(r.substring(e, e + 2)), 7))
                                }
                            },
                            o = function(t) {
                                for (var r = 0, e = 0; e < t.length; e += 1) r = 10 * r + i(t.charAt(e));
                                return r
                            },
                            i = function(t) {
                                if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                                throw "illegal char :" + t
                            };
                        return e
                    },
                    D = function(t) {
                        var r = u,
                            n = t,
                            e = {
                                getMode: function() {
                                    return r
                                },
                                getLength: function(t) {
                                    return n.length
                                },
                                write: function(t) {
                                    for (var r = n, e = 0; e + 1 < r.length;) t.put(45 * o(r.charAt(e)) + o(r.charAt(e + 1)), 11), e += 2;
                                    e < r.length && t.put(o(r.charAt(e)), 6)
                                }
                            },
                            o = function(t) {
                                if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                                if ("A" <= t && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10;
                                switch (t) {
                                    case " ":
                                        return 36;
                                    case "$":
                                        return 37;
                                    case "%":
                                        return 38;
                                    case "*":
                                        return 39;
                                    case "+":
                                        return 40;
                                    case "-":
                                        return 41;
                                    case ".":
                                        return 42;
                                    case "/":
                                        return 43;
                                    case ":":
                                        return 44;
                                    default:
                                        throw "illegal char :" + t
                                }
                            };
                        return e
                    },
                    L = function(t) {
                        var r = o,
                            e = i.stringToBytes(t),
                            n = {
                                getMode: function() {
                                    return r
                                },
                                getLength: function(t) {
                                    return e.length
                                },
                                write: function(t) {
                                    for (var r = 0; r < e.length; r += 1) t.put(e[r], 8)
                                }
                            };
                        return n
                    },
                    z = function(t) {
                        var r = f,
                            e = i.stringToBytesFuncs.SJIS;
                        if (!e) throw "sjis not supported.";
                        ! function() {
                            var t = e("友");
                            if (2 != t.length || 38726 != (t[0] << 8 | t[1])) throw "sjis not supported."
                        }();
                        var o = e(t),
                            n = {
                                getMode: function() {
                                    return r
                                },
                                getLength: function(t) {
                                    return ~~(o.length / 2)
                                },
                                write: function(t) {
                                    for (var r = o, e = 0; e + 1 < r.length;) {
                                        var n = (255 & r[e]) << 8 | 255 & r[e + 1];
                                        if (33088 <= n && n <= 40956) n -= 33088;
                                        else {
                                            if (!(57408 <= n && n <= 60351)) throw "illegal char at " + (e + 1) + "/" + n;
                                            n -= 49472
                                        }
                                        n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13), e += 2
                                    }
                                    if (e < r.length) throw "illegal char at " + (e + 1)
                                }
                            };
                        return n
                    },
                    T = function(t) {
                        var e = t,
                            n = 0,
                            o = 0,
                            i = 0,
                            r = {
                                read: function() {
                                    for (; i < 8;) {
                                        if (n >= e.length) {
                                            if (0 == i) return -1;
                                            throw "unexpected end of file./" + i
                                        }
                                        var t = e.charAt(n);
                                        if (n += 1, "=" == t) return i = 0, -1;
                                        t.match(/^\s$/) || (o = o << 6 | a(t.charCodeAt(0)), i += 6)
                                    }
                                    var r = o >>> i - 8 & 255;
                                    return i -= 8, r
                                }
                            },
                            a = function(t) {
                                if (65 <= t && t <= 90) return t - 65;
                                if (97 <= t && t <= 122) return t - 97 + 26;
                                if (48 <= t && t <= 57) return t - 48 + 52;
                                if (43 == t) return 62;
                                if (47 == t) return 63;
                                throw "c:" + t
                            };
                        return r
                    },
                    I = function(t, r, e) {
                        for (var n = k(t, r), o = 0; o < r; o += 1)
                            for (var i = 0; i < t; i += 1) n.setPixel(i, o, e(i, o));
                        var a = p();
                        n.write(a);
                        for (var u = x(), f = a.toByteArray(), c = 0; c < f.length; c += 1) u.writeByte(f[c]);
                        return u.flush(), "data:image/gif;base64," + u
                    };
                return i
            }();
            e.stringToBytesFuncs["UTF-8"] = function(t) {
                return function(t) {
                    for (var r = [], e = 0; e < t.length; e++) {
                        var n = t.charCodeAt(e);
                        n < 128 ? r.push(n) : n < 2048 ? r.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || 57344 <= n ? r.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(e)), r.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                    }
                    return r
                }(t)
            }, t.exports = e
        }(e = {
            exports: {}
        }, e.exports), e.exports),
        A = "#000",
        M = "#fff",
        n = [],
        T = {
            createCanvas: r,
            isCanvas: r,
            isDrawable: r,
            getCanvas: D,
            cacheCanvas: function() {
                n.push.apply(n, arguments)
            },
            drawCanvas: function(t, r, e) {
                void 0 === e && (e = {});
                var n = e.cellSize,
                    o = e.context,
                    i = e.clear,
                    a = void 0 === i || i,
                    u = t.width,
                    f = t.height,
                    c = [r],
                    l = o || t.getContext("2d");
                a && l.clearRect(0, 0, u, f);
                l.globalCompositeOperation = "source-over";
                for (; c.length;) {
                    var s = c.shift();
                    if (Array.isArray(s)) c = s.concat(c);
                    else if (s) {
                        var g = void 0,
                            h = ("col" in (g = T.isDrawable(s) ? {
                                image: s
                            } : "string" == typeof s ? {
                                style: s
                            } : s) ? g.col * n : g.x) || 0,
                            v = ("row" in g ? g.row * n : g.y) || 0;
                        h < 0 && (h += u), v < 0 && (v += u);
                        var d = ("cols" in g ? g.cols * n : g.w) || u,
                            w = ("rows" in g ? g.rows * n : g.h) || u;
                        g.image ? l.drawImage(g.image, h, v, d, w) : (l.fillStyle = g.style || "black", l.fillRect(h, v, d, w))
                    }
                }
                return t
            },
            drawText: function(t, r) {
                void 0 === r && (r = {});
                var f, e = r || {},
                    n = e.fontSize,
                    o = void 0 === n ? 64 : n,
                    i = e.fontStyle,
                    a = void 0 === i ? "" : i,
                    u = e.fontFamily,
                    c = void 0 === u ? "Cursive" : u,
                    l = e.color,
                    s = void 0 === l ? null : l,
                    g = e.pad,
                    h = void 0 === g ? 8 : g,
                    v = e.padColor,
                    d = void 0 === v ? M : v,
                    w = e.mode,
                    p = void 0 === w ? 1 : w,
                    y = D(),
                    C = y.getContext("2d");
                if (d) {
                    C.fillStyle = d, C.fillRect(0, 0, 1, 1);
                    var m = C.getImageData(0, 0, 1, 1);
                    (f = m.data)[3] || (f = null)
                }

                function x() {
                    C.textAlign = "center", C.textBaseline = "middle", C.font = b
                }
                var k = o + 2 * h,
                    b = [a, o + "px", c].filter(Boolean).join(" ");
                x();
                var B = Math.ceil(C.measureText(t).width) + 2 * h;
                y.width = B, y.height = k, x();

                function S() {
                    C.fillStyle = s || A, C.fillText(t, B / 2, k / 2)
                }
                1 === p ? (C.fillStyle = d, C.fillRect(0, 0, B, k), S()) : (S(), f && function() {
                    for (var t = C.getImageData(0, 0, B, k), o = t.data, i = B * k, a = [], u = 0, r = function() {
                            var e = [],
                                n = {};
                            a[u] = e;
                            var t = a[u = 1 - u];
                            if (!t) {
                                t = [];
                                for (var r = 0; r < i; r += 1) t.push(r)
                            }
                            t.forEach(function(t) {
                                o[4 * t + 3] && [t % B ? t - 1 : -1, (t + 1) % B ? t + 1 : -1, t - B, t + B].forEach(function(t) {
                                    var r = 4 * t;
                                    0 <= r && r <= o.length && !n[t] && (n[t] = 1, e.push(t))
                                })
                            }), e.forEach(function(t) {
                                var r = 4 * t;
                                if (!o[3 + r])
                                    for (var e = 0; e < 4; e += 1) o[r + e] = f[e]
                            })
                        }, e = 0; e < h; e += 1) r();
                    C.putImageData(t, 0, 0)
                }());
                return y
            }
        };

    function D(t) {
        var r = void 0 === t ? {} : t,
            e = r.width,
            n = r.height,
            o = r.canvas || T.createCanvas();
        return e && (o.width = e, o.height = null == n ? e : n), o
    }
    var I = {
        default: function(t) {
            var r = t.foreground,
                i = t.cellSize,
                a = t.isDark,
                e = t.count,
                n = T.getCanvas,
                o = T.drawCanvas,
                u = T.cacheCanvas,
                f = i * e,
                c = n({
                    width: f
                }),
                l = c.getContext("2d");
            l.fillStyle = A, y({
                cellSize: i,
                count: e
            }, function(t) {
                var r = t.i,
                    e = t.j,
                    n = t.x,
                    o = t.y;
                a(r, e) && l.fillRect(n, o, i, i)
            });
            var s = n({
                width: f
            });
            o(s, r, {
                cellSize: i
            });
            var g = s.getContext("2d");
            return g.globalCompositeOperation = "destination-in", g.drawImage(c, 0, 0), u(c), s
        },
        round: function(t, r) {
            var e = t.foreground,
                i = t.cellSize,
                a = t.isDark,
                n = t.count,
                o = T.getCanvas,
                u = T.drawCanvas,
                f = T.cacheCanvas,
                c = i * n,
                l = o({
                    width: c
                }),
                s = r.value,
                g = (void 0 === s ? 1 : s) * i / 2,
                h = l.getContext("2d");
            h.fillStyle = A, y({
                cellSize: i,
                count: n
            }, function(t) {
                var r = t.i,
                    e = t.j,
                    n = t.x,
                    o = t.y;
                a(r, e) && (h.beginPath(), h.moveTo(n + .5 * i, o), w(h, n + i, o, n + i, o + .5 * i, g), w(h, n + i, o + i, n + .5 * i, o + i, g), w(h, n, o + i, n, o + .5 * i, g), w(h, n, o, n + .5 * i, o, g), h.fill())
            });
            var v = o({
                width: c
            });
            u(v, e, {
                cellSize: i
            });
            var d = v.getContext("2d");
            return d.globalCompositeOperation = "destination-in", d.drawImage(l, 0, 0), f(l), v
        },
        fusion: function(t, r) {
            var e = t.foreground,
                a = t.cellSize,
                u = t.isDark,
                n = t.count,
                o = T.getCanvas,
                i = T.drawCanvas,
                f = T.cacheCanvas,
                c = a * n,
                l = o({
                    width: c
                }),
                s = l.getContext("2d");
            s.fillStyle = A;
            var g = r.value,
                h = (void 0 === g ? 1 : g) * a / 2;
            y({
                cellSize: a,
                count: n
            }, function(t) {
                var r = t.i,
                    e = t.j,
                    n = t.x,
                    o = t.y,
                    i = [0, 0, 0, 0];
                u(r - 1, e) && (i[0] += 1, i[1] += 1), u(r + 1, e) && (i[2] += 1, i[3] += 1), u(r, e - 1) && (i[0] += 1, i[3] += 1), u(r, e + 1) && (i[1] += 1, i[2] += 1), u(r, e) ? (u(r - 1, e - 1) && (i[0] += 1), u(r - 1, e + 1) && (i[1] += 1), u(r + 1, e + 1) && (i[2] += 1), u(r + 1, e - 1) && (i[3] += 1), s.beginPath(), s.moveTo(n + .5 * a, o), w(s, n + a, o, n + a, o + .5 * a, i[1] ? 0 : h), w(s, n + a, o + a, n + .5 * a, o + a, i[2] ? 0 : h), w(s, n, o + a, n, o + .5 * a, i[3] ? 0 : h), w(s, n, o, n + .5 * a, o, i[0] ? 0 : h), s.fill()) : (2 === i[0] && p(s, n, o + .5 * a, n, o, n + .5 * a, o, h), 2 === i[1] && p(s, n + .5 * a, o, n + a, o, n + a, o + .5 * a, h), 2 === i[2] && p(s, n + a, o + .5 * a, n + a, o + a, n + .5 * a, o + a, h), 2 === i[3] && p(s, n + .5 * a, o + a, n, o + a, n, o + .5 * a, h))
            });
            var v = o({
                width: c
            });
            i(v, e, {
                cellSize: a
            });
            var d = v.getContext("2d");
            return d.globalCompositeOperation = "destination-in", d.drawImage(l, 0, 0), f(l), v
        },
        spot: function(t, r) {
            var e = t.foreground,
                f = t.cellSize,
                c = t.isDark,
                l = t.count,
                n = T.getCanvas,
                o = T.drawCanvas,
                i = T.cacheCanvas,
                a = f * l,
                s = n({
                    width: a
                }),
                g = r.value,
                u = r.foregroundLight,
                h = void 0 === u ? M : u,
                v = s.getContext("2d"),
                d = n({
                    width: a
                }),
                w = n({
                    width: a
                }),
                p = d.getContext("2d");
            return [{
                dark: !0,
                foreground: e
            }, {
                dark: !1,
                foreground: h
            }].forEach(function(u) {
                v.fillStyle = A, v.clearRect(0, 0, a, a), y({
                    cellSize: f,
                    count: l
                }, function(t) {
                    var r = t.i,
                        e = t.j,
                        n = t.x,
                        o = t.y;
                    if (c(r, e) ^ +!u.dark) {
                        var i, a = (1 - (i = r <= 7 && e <= 7 || r <= 7 && l - e - 1 <= 7 || l - r - 1 <= 7 && e <= 7 || r + 5 <= l && l <= r + 9 && e + 5 <= l && l <= e + 9 || 7 === r || 7 === e ? 1 - .1 * g : .25)) / 2;
                        v.fillRect(n + a * f, o + a * f, i * f, i * f)
                    }
                }), o(d, u.foreground, {
                    cellSize: f,
                    context: p
                }), p.globalCompositeOperation = "destination-in", p.drawImage(s, 0, 0), o(w, d, {
                    cellSize: f,
                    clear: !1
                })
            }), i(s, d), w
        }
    };

    function y(t, r) {
        for (var e = t.cellSize, n = t.count, o = 0; o < n; o += 1)
            for (var i = 0; i < n; i += 1) {
                r({
                    i: o,
                    j: i,
                    x: i * e,
                    y: o * e
                })
            }
    }

    function w(t, r, e, n, o, i) {
        i ? t.arcTo(r, e, n, o, i) : (t.lineTo(r, e), t.lineTo(n, o))
    }

    function p(t, r, e, n, o, i, a, u) {
        t.beginPath(), t.moveTo(r, e), w(t, n, o, i, a, u), t.lineTo(n, o), t.lineTo(r, e), t.fill()
    }

    function j() {
        return (j = Object.assign || function(t) {
            for (var r = 1; r < arguments.length; r++) {
                var e = arguments[r];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            return t
        }).apply(this, arguments)
    }
    f.stringToBytes = f.stringToBytesFuncs["UTF-8"];
    var o = {
            background: "white",
            foreground: "black",
            typeNumber: 0,
            correctLevel: "L",
            data: "",
            padding: 0
        },
        i = function() {
            function t(t) {
                var i = this;
                this.options = j({}, o), this.cache = {}, this.isDark = function(t, r) {
                    var e = i.cache,
                        n = e.qr,
                        o = e.count;
                    return !(t < 0 || o <= t || r < 0 || o <= r) && n.isDark(t, r)
                }, this.setOptions(t)
            }
            var r = t.prototype;
            return r.render = function(t, r) {
                void 0 === r && (r = {});
                var e, n, o, i = this.options,
                    a = i.background,
                    u = i.foreground,
                    f = i.padding,
                    c = i.effect,
                    l = i.logo,
                    s = I[c.type] || I.default,
                    g = this.cache.count,
                    h = T.getCanvas,
                    v = T.drawCanvas,
                    d = T.cacheCanvas,
                    w = r.size,
                    p = r.cellSize;
                t || p || w || (p = 6), p && (w = g * p), e = w ? h({
                    canvas: t,
                    width: w
                }) : (w = t.width, t);
                var y = Math.ceil(w / g),
                    C = y * g;
                if (v(n = h({
                        width: y * g
                    }), a, {
                        cellSize: y
                    }), o = s(j({
                        foreground: u,
                        cellSize: y,
                        isDark: this.isDark
                    }, this.cache), this.options.effect), l) {
                    var m = j({}, l);
                    if (!(l.w || l.h || l.cols || l.rows)) {
                        var x = l.image,
                            k = x.width,
                            b = x.height,
                            B = k / b,
                            S = Math.min((g - 18) / g, .38),
                            A = Math.min(b, C * S, C * S / B),
                            M = A * B,
                            D = (C - M) / 2,
                            L = (C - A) / 2;
                        m.w = M, m.h = A, m.x = D, m.y = L
                    }
                    v(o, m, {
                        clear: !1
                    })
                }
                var z = w - f - f;
                return v(e, [{
                    image: n
                }, {
                    image: o,
                    x: f,
                    y: f,
                    w: z,
                    h: z
                }]), d(n, o), e
            }, r.setOptions = function(t) {
                this.options = j({}, this.options, {}, t), this.normalizeEffect(), this.normalizeLogo();
                var r = this.options,
                    e = r.typeNumber,
                    n = r.data,
                    o = r.logo,
                    i = this.options.correctLevel;
                o && ["Q", "H"].indexOf(i) < 0 && (i = "H");
                var a = f(e, i);
                a.addData(n || ""), a.make();
                var u = a.getModuleCount();
                this.cache = {
                    qr: a,
                    count: u
                }
            }, r.normalizeEffect = function() {
                var t = this.options.effect;
                "string" == typeof t && (t = {
                    type: t
                }), this.options.effect = t || {}
            }, r.normalizeLogo = function() {
                var t = T.isDrawable,
                    r = T.drawText,
                    e = this.options.logo;
                e && (t(e) ? e = {
                    image: e
                } : t(e.image) || ("string" == typeof e && (e = {
                    text: e
                }), e = "string" == typeof e.text ? {
                    image: r(e.text, e.options)
                } : null)), this.options.logo = e
            }, t
        }();

    function a(t) {
        return t instanceof HTMLCanvasElement
    }
    T.createCanvas = function() {
        return document.createElement("canvas")
    }, T.isCanvas = a, T.isDrawable = function(t) {
        return a(t) || t instanceof HTMLImageElement
    }, t.effects = I, t.helpers = T, t.qrcanvas = function(t) {
        var r = t.canvas,
            e = t.size,
            n = t.cellSize,
            o = function(t, r) {
                if (null == t) return {};
                var e, n, o = {},
                    i = Object.keys(t);
                for (n = 0; n < i.length; n++) e = i[n], 0 <= r.indexOf(e) || (o[e] = t[e]);
                return o
            }(t, ["canvas", "size", "cellSize"]);
        return new i(o).render(r, {
            size: e,
            cellSize: n
        })
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});