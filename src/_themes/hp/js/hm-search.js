!(function(e) {
	if ('object' == typeof exports && 'undefined' != typeof module)
		module.exports = e();
	else if ('function' == typeof define && define.amd) define([], e);
	else {
		var t;
		(t =
			'undefined' != typeof window
				? window
				: 'undefined' != typeof global
				? global
				: 'undefined' != typeof self
				? self
				: this),
			(t.horsey = e());
	}
})(function() {
	return (function e(t, n, r) {
		function o(a, u) {
			if (!n[a]) {
				if (!t[a]) {
					var c = 'function' == typeof require && require;
					if (!u && c) return c(a, !0);
					if (i) return i(a, !0);
					var f = new Error("Cannot find module '" + a + "'");
					throw ((f.code = 'MODULE_NOT_FOUND'), f);
				}
				var l = (n[a] = { exports: {} });
				t[a][0].call(
					l.exports,
					function(e) {
						var n = t[a][1][e];
						return o(n ? n : e);
					},
					l,
					l.exports,
					e,
					t,
					n,
					r
				);
			}
			return n[a].exports;
		}
		for (
			var i = 'function' == typeof require && require, a = 0;
			a < r.length;
			a++
		)
			o(r[a]);
		return o;
	})(
		{
			1: [
				function(e, t) {
					'use strict';
					function n(e) {
						return e && e.__esModule ? e : { default: e };
					}
					function r(e) {
						if (Array.isArray(e)) {
							for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
							return n;
						}
						return Array.from(e);
					}
					function o(e) {
						function t(e) {
							return r.noMatches ? e.query.length : !1;
						}
						function n(t, n) {
							function o(t, r) {
								t && (console.log('Autocomplete source error.', t, e), n(t, []));
								var o = Array.isArray(r) ? r : [];
								b && (l[u] = { created: new Date(), items: o }),
									(S = o),
									n(null, o.slice());
							}
							var i = t.query,
								a = t.limit;
							if (!r.blankSearch && 0 === i.length) return void n(null, [], !0);
							O && O.emit('beforeUpdate');
							var u = d['default'](i);
							if (b) {
								var c = l[u];
								if (c) {
									var f = c.created.getTime(),
										s = l.duration || 86400,
										v = 1e3 * s,
										g = new Date(f + v) > new Date();
									if (g) return void n(null, c.items.slice());
								}
							}
							var y = {
								previousSuggestions: S.slice(),
								previousSelection: E,
								input: i,
								renderItem: h,
								renderCategory: p,
								limit: a,
							};
							'function' == typeof r.source ? r.source(y, o) : o(null, r.source);
						}
						var r =
								arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
							o = r.setAppends,
							a = r.set,
							u = r.filter,
							c = r.source,
							f = r.cache,
							l = void 0 === f ? {} : f,
							s = r.predictNextSearch,
							h = r.renderItem,
							p = r.renderCategory,
							v = r.blankSearch,
							g = r.appendTo,
							y = r.anchor,
							m = r.debounce,
							b = r.cache !== !1;
						if (c) {
							var w = r.getText,
								x = r.getValue,
								C =
									'string' == typeof w
										? function(e) {
												return e[w];
										  }
										: 'function' == typeof w
										? w
										: function(e) {
												return e.toString();
										  },
								T =
									'string' == typeof x
										? function(e) {
												return e[x];
										  }
										: 'function' == typeof x
										? x
										: function(e) {
												return e;
										  },
								S = [],
								E = null,
								N = Number(r.limit) || 1 / 0,
								O = i(e, {
									source: n,
									limit: N,
									getText: C,
									getValue: T,
									setAppends: o,
									predictNextSearch: s,
									renderItem: h,
									renderCategory: p,
									appendTo: g,
									anchor: y,
									noMatches: t,
									noMatchesText: r.noMatches,
									blankSearch: v,
									debounce: m,
									set: function(t) {
										o !== !0 && (e.value = ''),
											(E = t),
											(a || O.defaultSetter)(C(t), t),
											O.emit('afterSet');
									},
									filter: u,
								});
							return O;
						}
					}
					function i(e) {
						function t(e) {
							tt(!0),
								(qt = Jt.attachment = e),
								(zt = 'INPUT' === qt.tagName || 'TEXTAREA' === qt.tagName),
								(Ft = zt || l(qt)),
								tt();
						}
						function n() {
							Bt && Bt.refresh();
						}
						function o(e) {
							function t(t, n, o) {
								Dt.counter === r && (i(n, e), (t || o) && (Gt = !1));
							}
							if ('function' == typeof bt) {
								C['default'].remove(qt, 'focus', o);
								var n = d();
								if (n !== Dt.query) {
									(Gt = !1), (Dt.query = n);
									var r = ++Dt.counter;
									bt({ query: n, limit: Lt }, t);
								}
							}
						}
						function i(e, t) {
							s(),
								(Gt = !0),
								(Jt.source = []),
								e.forEach(function(e) {
									return e.list.forEach(function(t) {
										return v(t, e);
									});
								}),
								t && U(),
								Y();
						}
						function s() {
							for (W(); Mt.lastChild; ) Mt.removeChild(Mt.lastChild);
							(Ut = Object.create(null)), (Gt = !1);
						}
						function d() {
							return (zt ? e.value : e.innerHTML).trim();
						}
						function h(e) {
							function t() {
								var t = u('div', 'sey-category'),
									n = u('ul', 'sey-list');
								return (
									At(t, e), t.appendChild(n), Mt.appendChild(t), { data: e, ul: n }
								);
							}
							return (
								e.id || (e.id = 'default'), Ut[e.id] || (Ut[e.id] = t()), Ut[e.id]
							);
						}
						function v(t, n) {
							function r() {
								q(f);
							}
							function o() {
								var n = gt(t);
								T(t),
									F(),
									qt.focus(),
									($t =
										(pt.predictNextSearch &&
											pt.predictNextSearch({
												input: n,
												source: Jt.source.slice(),
												selection: t,
											})) ||
										''),
									$t && ((e.value = $t), e.select(), U(), Y());
							}
							function i() {
								var e = d();
								E(e, t)
									? (f.className = f.className.replace(/ sey-hide/g, ''))
									: C['default'].fabricate(f, 'horsey-hide');
							}
							function a() {
								D(f) || ((f.className += ' sey-hide'), Pt === f && W());
							}
							var c = h(n),
								f = u('li', 'sey-item');
							return (
								Ot(f, t),
								Tt && y(f),
								C['default'].add(f, 'mouseenter', r),
								C['default'].add(f, 'click', o),
								C['default'].add(f, 'horsey-filter', i),
								C['default'].add(f, 'horsey-hide', a),
								c.ul.appendChild(f),
								Jt.source.push(t),
								f
							);
						}
						function y(e) {
							x(e).forEach(function(e) {
								function t(e) {
									var t = j.createElement('span');
									return (
										(t.className = 'sey-char'), (t.textContent = t.innerText = e), t
									);
								}
								var n = e.parentElement,
									r = e.textContent || e.nodeValue || '';
								if (0 !== r.length) {
									var o = !0,
										i = !1,
										a = void 0;
									try {
										for (
											var u, c = r[Symbol.iterator]();
											!(o = (u = c.next()).done);
											o = !0
										) {
											var f = u.value;
											n.insertBefore(t(f), e);
										}
									} catch (l) {
										(i = !0), (a = l);
									} finally {
										try {
											!o && c['return'] && c['return']();
										} finally {
											if (i) throw a;
										}
									}
									n.removeChild(e);
								}
							});
						}
						function b(e, t) {
							function n() {
								d = s.map(function(e) {
									return e.innerText || e.textContent;
								});
							}
							function o() {
								var e = !0,
									r = !1,
									o = void 0;
								try {
									for (
										var i, a = l[Symbol.iterator]();
										!(e = (i = a.next()).done);
										e = !0
									) {
										var c = i.value,
											f = h;
										e: for (; -1 !== f; ) {
											var p = !0,
												v = f,
												g = !0,
												y = !1,
												m = void 0;
											try {
												for (
													var b, w = c[Symbol.iterator]();
													!(g = (b = w.next()).done);
													g = !0
												) {
													var x = b.value,
														C = d.indexOf(x, v + 1),
														T = -1 === C || (!p && v + 1 !== C);
													if ((p && ((p = !1), (f = C)), T)) continue e;
													v = C;
												}
											} catch (S) {
												(y = !0), (m = S);
											} finally {
												try {
													!g && w['return'] && w['return']();
												} finally {
													if (y) throw m;
												}
											}
											var E = !0,
												N = !1,
												O = void 0;
											try {
												for (
													var R, A = s.splice(f, 1 + v - f)[Symbol.iterator]();
													!(E = (R = A.next()).done);
													E = !0
												) {
													var k = R.value;
													u(k);
												}
											} catch (S) {
												(N = !0), (O = S);
											} finally {
												try {
													!E && A['return'] && A['return']();
												} finally {
													if (N) throw O;
												}
											}
											n(), (t = t.replace(c, ''));
											break;
										}
									}
								} catch (S) {
									(r = !0), (o = S);
								} finally {
									try {
										!e && a['return'] && a['return']();
									} finally {
										if (r) throw o;
									}
								}
							}
							function i() {
								var e = !0,
									n = !1,
									r = void 0;
								try {
									for (
										var o, i = t[Symbol.iterator]();
										!(e = (o = i.next()).done);
										e = !0
									)
										for (var a = o.value; s.length; ) {
											var f = s.shift();
											if ((f.innerText || f.textContent) === a) {
												u(f);
												break;
											}
											c(f);
										}
								} catch (l) {
									(n = !0), (r = l);
								} finally {
									try {
										!e && i['return'] && i['return']();
									} finally {
										if (n) throw r;
									}
								}
							}
							function a() {
								for (; s.length; ) c(s.shift());
							}
							function u(e) {
								e.classList.add('sey-char-highlight');
							}
							function c(e) {
								e.classList.remove('sey-char-highlight');
							}
							var f = /[\s,._\[\]{}()-]/g,
								l = t.split(f).filter(function(e) {
									return e.length;
								}),
								s = [].concat(r(e.querySelectorAll('.sey-char'))),
								d = void 0,
								h = 0;
							n(), Et && o(), i(), a();
						}
						function x(e) {
							for (
								var t = [],
									n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1),
									r = void 0;
								(r = n.nextNode());

							)
								t.push(r);
							return t;
						}
						function T(e) {
							return pt.anchor
								? (I() ? Jt.appendText : Jt.appendHTML)(yt(e))
								: void jt(e);
						}
						function E(e, t) {
							if (pt.anchor) {
								var n = (I() ? Jt.filterAnchoredText : Jt.filterAnchoredHTML)(e, t);
								return n ? _t(n.input, n.suggestion) : !1;
							}
							return _t(e, t);
						}
						function I() {
							return a(qt);
						}
						function H() {
							return -1 !== It.className.indexOf('sey-show');
						}
						function D(e) {
							return -1 !== e.className.indexOf('sey-hide');
						}
						function U() {
							Bt.refresh(),
								H() ||
									((It.className += ' sey-show'),
									C['default'].fabricate(qt, 'horsey-show'));
						}
						function P(e) {
							var t = 1 === e.which && !e.metaKey && !e.ctrlKey;
							t !== !1 && B();
						}
						function B() {
							H() ? F() : U();
						}
						function q(e) {
							W(), e && ((Pt = e), (Pt.className += ' sey-selected'));
						}
						function W() {
							Pt &&
								((Pt.className = Pt.className.replace(/ sey-selected/g, '')),
								(Pt = null));
						}
						function z(e, t) {
							function n(e) {
								for (; e; ) {
									if (g['default'].matchesSelector(e.parentElement, '.sey-category'))
										return e.parentElement;
									e = e.parentElement;
								}
								return null;
							}
							function r() {
								if (Pt) {
									if (Pt[u]) return Pt[u];
									if (i[u] && dt(i[u])[a]) return dt(i[u])[a];
								}
								return dt(Mt[a])[a];
							}
							var o = Jt.source.length;
							if (0 !== o) {
								if (t > o) return void W();
								var i = n(Pt) || Mt.firstChild,
									a = e ? 'lastChild' : 'firstChild',
									u = e ? 'previousSibling' : 'nextSibling',
									c = r();
								q(c), D(c) && z(e, t ? t + 1 : 1);
							}
						}
						function F() {
							Bt.sleep(),
								(It.className = It.className.replace(/ sey-show/g, '')),
								W(),
								C['default'].fabricate(qt, 'horsey-hide'),
								e.value === $t && (e.value = '');
						}
						function X(e) {
							var t = H(),
								n = e.which || e.keyCode;
							n === L
								? (Ft && pt.autoShowOnUpDown && U(), t && (z(), V(e)))
								: n === k
								? (Ft && pt.autoShowOnUpDown && U(), t && (z(!0), V(e)))
								: n === O
								? Ft && pt.autoShowOnUpDown && U()
								: t &&
								  (n === R
										? (Pt ? C['default'].fabricate(Pt, 'click') : F(), V(e))
										: n === A && (F(), V(e)));
						}
						function V(e) {
							e.stopPropagation(), e.preventDefault();
						}
						function $() {
							Wt && Wt.classList.remove('sey-hide');
						}
						function K() {
							Wt && Wt.classList.add('sey-hide');
						}
						function Y() {
							function e() {
								for (var e = Mt.firstChild, n = 0; e; ) {
									var r = dt(e),
										o = t(r);
									0 === o ? e.classList.add('sey-hide') : e.classList.remove('sey-hide'),
										(n += o),
										(e = e.nextSibling);
								}
								return n;
							}
							function t(e) {
								for (var t = e.firstChild, r = 0; t; )
									r >= Lt
										? C['default'].fabricate(t, 'horsey-hide')
										: (C['default'].fabricate(t, 'horsey-filter'),
										  -1 === t.className.indexOf('sey-hide') && (r++, Tt && b(t, n))),
										(t = t.nextSibling);
								return r;
							}
							if (H()) {
								Yt(!0), C['default'].fabricate(qt, 'horsey-filter');
								var n = d();
								if (!pt.blankSearch && !n) return void F();
								var r = wt({ query: n }),
									o = e();
								0 === o && r && Gt ? $() : K(), Pt || z(), Pt || r || F();
							}
						}
						function G(e) {
							var t = e.which || e.keyCode;
							t !== R && Ht();
						}
						function J(e) {
							var t = e.which || e.keyCode;
							t !== R && t !== _ && setTimeout(U, 0);
						}
						function Q(e) {
							var t = e.target;
							if (t === qt) return !0;
							for (; t; ) {
								if (t === It || t === qt) return !0;
								t = t.parentNode;
							}
						}
						function Z(e) {
							var t = e.which || e.keyCode;
							t === _ && F();
						}
						function et(e) {
							Q(e) || F();
						}
						function tt(e) {
							var t = e ? 'remove' : 'add';
							Bt && (Bt.destroy(), (Bt = null)),
								e ||
									((Bt = w['default'](It, qt, {
										caret: Ft && 'INPUT' !== qt.tagName,
										context: pt.appendTo,
									})),
									H() || Bt.sleep()),
								e || (Ft && j.activeElement !== qt)
									? C['default'][t](qt, 'focus', o)
									: o(),
								Ft
									? (C['default'][t](qt, 'keypress', J),
									  C['default'][t](qt, 'keypress', Ht),
									  C['default'][t](qt, 'keydown', G),
									  C['default'][t](qt, 'paste', Ht),
									  C['default'][t](qt, 'keydown', X),
									  pt.autoHideOnBlur && C['default'][t](qt, 'keydown', Z))
									: (C['default'][t](qt, 'click', P), C['default'][t](M, 'keydown', X)),
								pt.autoHideOnClick && C['default'][t](j, 'click', et),
								mt && C['default'][t](mt, 'submit', F);
						}
						function nt() {
							tt(!0), vt.contains(It) && vt.removeChild(It);
						}
						function rt(t) {
							zt
								? kt === !0
									? (e.value += ' ' + t)
									: (e.value = t)
								: kt === !0
								? (e.innerHTML += ' ' + t)
								: (e.innerHTML = t);
						}
						function ot(e, t) {
							f(e, gt(t));
						}
						function it(e, t) {
							if ('default' !== t.id) {
								var n = u('div', 'sey-category-id');
								e.appendChild(n), f(n, t.id);
							}
						}
						function at(e, t) {
							var n = e.toLowerCase(),
								r = gt(t) || '';
							if (S['default'](n, r.toLowerCase())) return !0;
							var o = yt(t) || '';
							return 'string' != typeof o ? !1 : S['default'](n, o.toLowerCase());
						}
						function ut(e, t) {
							for (var n = '', r = !1, o = t.start; r === !1 && o >= 0; )
								(n = e.substr(o - 1, t.start - o + 1)), (r = Xt.test(n)), o--;
							return { text: r ? n : null, start: o };
						}
						function ct(t, n) {
							var r = p['default'](e),
								o = ut(t, r).text;
							return o ? { input: o, suggestion: n } : void 0;
						}
						function ft(t) {
							var n = e.value,
								r = p['default'](e),
								o = ut(n, r),
								i = n.substr(0, o.start),
								a = n.substr(o.start + o.text.length + (r.end - r.start)),
								u = i + t + ' ';
							(e.value = u + a), p['default'](e, { start: u.length, end: u.length });
						}
						function lt() {
							throw new Error(
								'Anchoring in editable elements is disabled by default.'
							);
						}
						function st() {
							throw new Error(
								'Anchoring in editable elements is disabled by default.'
							);
						}
						function dt(e) {
							return g['default']('.sey-list', e)[0];
						}
						var ht =
								arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
							pt = ht,
							vt = pt.appendTo || j.body,
							gt = pt.getText,
							yt = pt.getValue,
							mt = pt.form,
							bt = pt.source,
							wt = pt.noMatches,
							xt = pt.noMatchesText,
							Ct = pt.highlighter,
							Tt = void 0 === Ct ? !0 : Ct,
							St = pt.highlightCompleteWords,
							Et = void 0 === St ? !0 : St,
							Nt = pt.renderItem,
							Ot = void 0 === Nt ? ot : Nt,
							Rt = pt.renderCategory,
							At = void 0 === Rt ? it : Rt,
							kt = pt.setAppends,
							Lt = 'number' == typeof pt.limit ? pt.limit : 1 / 0,
							_t = pt.filter || at,
							jt = pt.set || rt,
							Mt = u('div', 'sey-categories'),
							It = u('div', 'sey-container'),
							Ht = c(Y),
							Dt = { counter: 0, query: null },
							Ut = Object.create(null),
							Pt = null,
							Bt = void 0,
							qt = e,
							Wt = void 0,
							zt = void 0,
							Ft = void 0,
							Xt = void 0,
							Vt = void 0,
							$t = '',
							Kt = pt.debounce || 300,
							Yt = N['default'](o, Kt);
						void 0 === pt.autoHideOnBlur && (pt.autoHideOnBlur = !0),
							void 0 === pt.autoHideOnClick && (pt.autoHideOnClick = !0),
							void 0 === pt.autoShowOnUpDown &&
								(pt.autoShowOnUpDown = 'INPUT' === e.tagName),
							pt.anchor &&
								((Xt = new RegExp('^' + pt.anchor)),
								(Vt = new RegExp(pt.anchor + '$')));
						var Gt = !1,
							Jt = m['default']({
								anchor: pt.anchor,
								clear: s,
								show: U,
								hide: F,
								toggle: B,
								destroy: nt,
								refreshPosition: n,
								appendText: ft,
								appendHTML: st,
								filterAnchoredText: ct,
								filterAnchoredHTML: lt,
								defaultAppendText: ft,
								defaultFilter: at,
								defaultItemRenderer: ot,
								defaultCategoryRenderer: it,
								defaultSetter: rt,
								retarget: t,
								attachment: qt,
								source: [],
							});
						return (
							t(e),
							It.appendChild(Mt),
							wt &&
								xt &&
								((Wt = u('div', 'sey-empty sey-hide')), f(Wt, xt), It.appendChild(Wt)),
							vt.appendChild(It),
							e.setAttribute('autocomplete', 'off'),
							Array.isArray(bt) && i(bt, !1),
							Jt
						);
					}
					function a(e) {
						return 'INPUT' === e.tagName || 'TEXTAREA' === e.tagName;
					}
					function u(e, t) {
						var n = j.createElement(e);
						return (n.className = t), n;
					}
					function c(e) {
						return function() {
							setTimeout(e, 0);
						};
					}
					function f(e, t) {
						e.innerText = e.textContent = t;
					}
					function l(e) {
						var t = e.getAttribute('contentEditable');
						return 'false' === t
							? !1
							: 'true' === t
							? !0
							: e.parentElement
							? l(e.parentElement)
							: !1;
					}
					var s = e('hash-sum'),
						d = n(s),
						h = e('sell'),
						p = n(h),
						v = e('sektor'),
						g = n(v),
						y = e('contra/emitter'),
						m = n(y),
						b = e('bullseye'),
						w = n(b),
						x = e('crossvent'),
						C = n(x),
						T = e('fuzzysearch'),
						S = n(T),
						E = e('lodash/debounce'),
						N = n(E),
						O = 8,
						R = 13,
						A = 27,
						k = 38,
						L = 40,
						_ = 9,
						j = document,
						M = j.documentElement;
					t.exports = o;
				},
				{
					bullseye: 3,
					'contra/emitter': 7,
					crossvent: 8,
					fuzzysearch: 11,
					'hash-sum': 12,
					'lodash/debounce': 13,
					sektor: 20,
					sell: 29,
				},
			],
			2: [
				function(e, t) {
					t.exports = function(e, t) {
						return Array.prototype.slice.call(e, t);
					};
				},
				{},
			],
			3: [
				function(e, t) {
					'use strict';
					function n(e, t, n) {
						function a() {
							g.sleeping = !0;
						}
						function u() {
							return c();
						}
						function c(e) {
							var n = t.getBoundingClientRect(),
								r = document.body.scrollTop || document.documentElement.scrollTop;
							return y
								? ((e = y.read()),
								  {
										x: (e.absolute ? 0 : n.left) + e.x,
										y: (e.absolute ? 0 : n.top) + r + e.y + 20,
								  })
								: { x: n.left, y: n.top + r };
						}
						function f(e) {
							l(e);
						}
						function l(n) {
							if (p)
								throw new Error(
									"Bullseye can't refresh after being destroyed. Create another instance instead."
								);
							if (y && !n) return (g.sleeping = !1), void y.refresh();
							var r = c(n);
							y || t === e || (r.y += t.offsetHeight);
							var o = d.context;
							(e.style.left = r.x + 'px'),
								(e.style.top = (o ? o.offsetHeight : r.y) + 'px');
						}
						function s() {
							y && y.destroy(), r.remove(window, 'resize', v), (p = !0);
						}
						var d = n,
							h = t && t.tagName;
						h || 2 !== arguments.length || (d = t), h || (t = e), d || (d = {});
						var p = !1,
							v = o(l, 30),
							g = { update: d.autoupdateToCaret !== !1 && f },
							y = d.caret && i(t, g);
						return (
							l(),
							d.tracking !== !1 && r.add(window, 'resize', v),
							{ read: u, refresh: l, destroy: s, sleep: a }
						);
					}
					var r = e('crossvent'),
						o = e('./throttle'),
						i = e('./tailormade');
					t.exports = n;
				},
				{ './tailormade': 4, './throttle': 5, crossvent: 8 },
			],
			4: [
				function(e, t) {
					(function(n) {
						'use strict';
						function r(e, t) {
							function n() {}
							function r() {
								return (x ? h : p)();
							}
							function a() {
								return T.sleeping ? void 0 : (T.update || n)(r());
							}
							function h() {
								var t = o(e),
									n = y(),
									r = v(n, t.start);
								return s.body.removeChild(n.mirror), r;
							}
							function p() {
								var e = c();
								if (e.rangeCount) {
									var t = e.getRangeAt(0),
										n = 'P' === t.startContainer.nodeName && 0 === t.startOffset;
									if (n)
										return {
											x: t.startContainer.offsetLeft,
											y: t.startContainer.offsetTop,
											absolute: !0,
										};
									if (t.getClientRects) {
										var r = t.getClientRects();
										if (r.length > 0) return { x: r[0].left, y: r[0].top, absolute: !0 };
									}
								}
								return { x: 0, y: 0 };
							}
							function v(t, n) {
								var r = s.createElement('span'),
									o = t.mirror,
									i = t.computed;
								return (
									m(o, g(e).substring(0, n)),
									'INPUT' === e.tagName &&
										(o.textContent = o.textContent.replace(/\s/g, ' ')),
									m(r, g(e).substring(n) || '.'),
									o.appendChild(r),
									{
										x: r.offsetLeft + parseInt(i.borderLeftWidth),
										y: r.offsetTop + parseInt(i.borderTopWidth),
									}
								);
							}
							function g(e) {
								return x ? e.value : e.innerHTML;
							}
							function y() {
								function t(e) {
									o[e] = n[e];
								}
								var n = l.getComputedStyle ? getComputedStyle(e) : e.currentStyle,
									r = s.createElement('div'),
									o = r.style;
								return (
									s.body.appendChild(r),
									'INPUT' !== e.tagName && (o.wordWrap = 'break-word'),
									(o.whiteSpace = 'pre-wrap'),
									(o.position = 'absolute'),
									(o.visibility = 'hidden'),
									f.forEach(t),
									d
										? ((o.width = parseInt(n.width) - 2 + 'px'),
										  e.scrollHeight > parseInt(n.height) && (o.overflowY = 'scroll'))
										: (o.overflow = 'hidden'),
									{ mirror: r, computed: n }
								);
							}
							function m(e, t) {
								x ? (e.textContent = t) : (e.innerHTML = t);
							}
							function b(t) {
								var n = t ? 'remove' : 'add';
								i[n](e, 'keydown', C),
									i[n](e, 'keyup', C),
									i[n](e, 'input', C),
									i[n](e, 'paste', C),
									i[n](e, 'change', C);
							}
							function w() {
								b(!0);
							}
							var x = 'INPUT' === e.tagName || 'TEXTAREA' === e.tagName,
								C = u(a, 30),
								T = t || {};
							return b(), { read: r, refresh: C, destroy: w };
						}
						var o = e('sell'),
							i = e('crossvent'),
							a = e('seleccion'),
							u = e('./throttle'),
							c = a.get,
							f = [
								'direction',
								'boxSizing',
								'width',
								'height',
								'overflowX',
								'overflowY',
								'borderTopWidth',
								'borderRightWidth',
								'borderBottomWidth',
								'borderLeftWidth',
								'paddingTop',
								'paddingRight',
								'paddingBottom',
								'paddingLeft',
								'fontStyle',
								'fontVariant',
								'fontWeight',
								'fontStretch',
								'fontSize',
								'fontSizeAdjust',
								'lineHeight',
								'fontFamily',
								'textAlign',
								'textTransform',
								'textIndent',
								'textDecoration',
								'letterSpacing',
								'wordSpacing',
							],
							l = n,
							s = document,
							d = null !== l.mozInnerScreenX && void 0 !== l.mozInnerScreenX;
						t.exports = r;
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{ './throttle': 5, crossvent: 8, seleccion: 27, sell: 29 },
			],
			5: [
				function(e, t) {
					'use strict';
					function n(e, t) {
						var n,
							r = -1 / 0;
						return function() {
							function o() {
								clearTimeout(n), (n = null);
								var i = r + t,
									a = Date.now();
								a > i ? ((r = a), e()) : (n = setTimeout(o, i - a));
							}
							n || o();
						};
					}
					t.exports = n;
				},
				{},
			],
			6: [
				function(e, t) {
					'use strict';
					var n = e('ticky');
					t.exports = function(e, t, r) {
						e &&
							n(function() {
								e.apply(r || null, t || []);
							});
					};
				},
				{ ticky: 30 },
			],
			7: [
				function(e, t) {
					'use strict';
					var n = e('atoa'),
						r = e('./debounce');
					t.exports = function(e, t) {
						var o = t || {},
							i = {};
						return (
							void 0 === e && (e = {}),
							(e.on = function(t, n) {
								return i[t] ? i[t].push(n) : (i[t] = [n]), e;
							}),
							(e.once = function(t, n) {
								return (n._once = !0), e.on(t, n), e;
							}),
							(e.off = function(t, n) {
								var r = arguments.length;
								if (1 === r) delete i[t];
								else if (0 === r) i = {};
								else {
									var o = i[t];
									if (!o) return e;
									o.splice(o.indexOf(n), 1);
								}
								return e;
							}),
							(e.emit = function() {
								var t = n(arguments);
								return e.emitterSnapshot(t.shift()).apply(this, t);
							}),
							(e.emitterSnapshot = function(t) {
								var a = (i[t] || []).slice(0);
								return function() {
									var i = n(arguments),
										u = this || e;
									if ('error' === t && o['throws'] !== !1 && !a.length)
										throw 1 === i.length ? i[0] : i;
									return (
										a.forEach(function(n) {
											o.async ? r(n, i, u) : n.apply(u, i), n._once && e.off(t, n);
										}),
										e
									);
								};
							}),
							e
						);
					};
				},
				{ './debounce': 6, atoa: 2 },
			],
			8: [
				function(e, t) {
					(function(n) {
						'use strict';
						function r(e, t, n, r) {
							return e.addEventListener(t, n, r);
						}
						function o(e, t, n) {
							return e.attachEvent('on' + t, f(e, t, n));
						}
						function i(e, t, n, r) {
							return e.removeEventListener(t, n, r);
						}
						function a(e, t, n) {
							var r = l(e, t, n);
							return r ? e.detachEvent('on' + t, r) : void 0;
						}
						function u(e, t, n) {
							function r() {
								var e;
								return (
									p.createEvent
										? ((e = p.createEvent('Event')), e.initEvent(t, !0, !0))
										: p.createEventObject && (e = p.createEventObject()),
									e
								);
							}
							function o() {
								return new d(t, { detail: n });
							}
							var i = -1 === h.indexOf(t) ? o() : r();
							e.dispatchEvent ? e.dispatchEvent(i) : e.fireEvent('on' + t, i);
						}
						function c(e, t, r) {
							return function(t) {
								var o = t || n.event;
								(o.target = o.target || o.srcElement),
									(o.preventDefault =
										o.preventDefault ||
										function() {
											o.returnValue = !1;
										}),
									(o.stopPropagation =
										o.stopPropagation ||
										function() {
											o.cancelBubble = !0;
										}),
									(o.which = o.which || o.keyCode),
									r.call(e, o);
							};
						}
						function f(e, t, n) {
							var r = l(e, t, n) || c(e, t, n);
							return y.push({ wrapper: r, element: e, type: t, fn: n }), r;
						}
						function l(e, t, n) {
							var r = s(e, t, n);
							if (r) {
								var o = y[r].wrapper;
								return y.splice(r, 1), o;
							}
						}
						function s(e, t, n) {
							var r, o;
							for (r = 0; r < y.length; r++)
								if (((o = y[r]), o.element === e && o.type === t && o.fn === n))
									return r;
						}
						var d = e('custom-event'),
							h = e('./eventmap'),
							p = n.document,
							v = r,
							g = i,
							y = [];
						n.addEventListener || ((v = o), (g = a)),
							(t.exports = { add: v, remove: g, fabricate: u });
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{ './eventmap': 9, 'custom-event': 10 },
			],
			9: [
				function(e, t) {
					(function(e) {
						'use strict';
						var n = [],
							r = '',
							o = /^on/;
						for (r in e) o.test(r) && n.push(r.slice(2));
						t.exports = n;
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{},
			],
			10: [
				function(e, t) {
					(function(e) {
						function n() {
							try {
								var e = new r('cat', { detail: { foo: 'bar' } });
								return 'cat' === e.type && 'bar' === e.detail.foo;
							} catch (t) {}
							return !1;
						}
						var r = e.CustomEvent;
						t.exports = n()
							? r
							: 'function' == typeof document.createEvent
							? function(e, t) {
									var n = document.createEvent('CustomEvent');
									return (
										t
											? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
											: n.initCustomEvent(e, !1, !1, void 0),
										n
									);
							  }
							: function(e, t) {
									var n = document.createEventObject();
									return (
										(n.type = e),
										t
											? ((n.bubbles = Boolean(t.bubbles)),
											  (n.cancelable = Boolean(t.cancelable)),
											  (n.detail = t.detail))
											: ((n.bubbles = !1), (n.cancelable = !1), (n.detail = void 0)),
										n
									);
							  };
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{},
			],
			11: [
				function(e, t) {
					'use strict';
					function n(e, t) {
						var n = t.length,
							r = e.length;
						if (r > n) return !1;
						if (r === n) return e === t;
						e: for (var o = 0, i = 0; r > o; o++) {
							for (var a = e.charCodeAt(o); n > i; )
								if (t.charCodeAt(i++) === a) continue e;
							return !1;
						}
						return !0;
					}
					t.exports = n;
				},
				{},
			],
			12: [
				function(e, t) {
					'use strict';
					function n(e, t) {
						for (; e.length < t; ) e = '0' + e;
						return e;
					}
					function r(e, t) {
						var n, r, o;
						if (0 === t.length) return e;
						for (n = 0, o = t.length; o > n; n++)
							(r = t.charCodeAt(n)), (e = (e << 5) - e + r), (e |= 0);
						return 0 > e ? -2 * e : e;
					}
					function o(e, t, n) {
						function r(e, r) {
							return i(e, t[r], r, n);
						}
						return Object.keys(t)
							.sort()
							.reduce(r, e);
					}
					function i(e, t, n, i) {
						var u = r(r(r(e, n), a(t)), typeof t);
						return null === t
							? r(u, 'null')
							: void 0 === t
							? r(u, 'undefined')
							: 'object' == typeof t
							? -1 !== i.indexOf(t)
								? r(u, '[Circular]' + n)
								: (i.push(t), o(u, t, i))
							: r(u, t.toString());
					}
					function a(e) {
						return Object.prototype.toString.call(e);
					}
					function u(e) {
						return n(i(0, e, '', []).toString(16), 8);
					}
					t.exports = u;
				},
				{},
			],
			13: [
				function(e, t) {
					function n(e, t, n) {
						function f(t) {
							var n = m,
								r = b;
							return (m = b = void 0), (S = t), (x = e.apply(r, n));
						}
						function l(e) {
							return (S = e), (C = setTimeout(h, t)), E ? f(e) : x;
						}
						function s(e) {
							var n = e - T,
								r = e - S,
								o = t - n;
							return N ? c(o, w - r) : o;
						}
						function d(e) {
							var n = e - T,
								r = e - S;
							return void 0 === T || n >= t || 0 > n || (N && r >= w);
						}
						function h() {
							var e = o();
							return d(e) ? p(e) : void (C = setTimeout(h, s(e)));
						}
						function p(e) {
							return (C = void 0), O && m ? f(e) : ((m = b = void 0), x);
						}
						function v() {
							(S = 0), (m = T = b = C = void 0);
						}
						function g() {
							return void 0 === C ? x : p(o());
						}
						function y() {
							var e = o(),
								n = d(e);
							if (((m = arguments), (b = this), (T = e), n)) {
								if (void 0 === C) return l(T);
								if (N) return (C = setTimeout(h, t)), f(T);
							}
							return void 0 === C && (C = setTimeout(h, t)), x;
						}
						var m,
							b,
							w,
							x,
							C,
							T,
							S = 0,
							E = !1,
							N = !1,
							O = !0;
						if ('function' != typeof e) throw new TypeError(a);
						return (
							(t = i(t) || 0),
							r(n) &&
								((E = !!n.leading),
								(N = 'maxWait' in n),
								(w = N ? u(i(n.maxWait) || 0, t) : w),
								(O = 'trailing' in n ? !!n.trailing : O)),
							(y.cancel = v),
							(y.flush = g),
							y
						);
					}
					var r = e('./isObject'),
						o = e('./now'),
						i = e('./toNumber'),
						a = 'Expected a function',
						u = Math.max,
						c = Math.min;
					t.exports = n;
				},
				{ './isObject': 15, './now': 18, './toNumber': 19 },
			],
			14: [
				function(e, t) {
					function n(e) {
						var t = r(e) ? u.call(e) : '';
						return t == o || t == i;
					}
					var r = e('./isObject'),
						o = '[object Function]',
						i = '[object GeneratorFunction]',
						a = Object.prototype,
						u = a.toString;
					t.exports = n;
				},
				{ './isObject': 15 },
			],
			15: [
				function(e, t) {
					function n(e) {
						var t = typeof e;
						return !!e && ('object' == t || 'function' == t);
					}
					t.exports = n;
				},
				{},
			],
			16: [
				function(e, t) {
					function n(e) {
						return !!e && 'object' == typeof e;
					}
					t.exports = n;
				},
				{},
			],
			17: [
				function(e, t) {
					function n(e) {
						return 'symbol' == typeof e || (r(e) && a.call(e) == o);
					}
					var r = e('./isObjectLike'),
						o = '[object Symbol]',
						i = Object.prototype,
						a = i.toString;
					t.exports = n;
				},
				{ './isObjectLike': 16 },
			],
			18: [
				function(e, t) {
					function n() {
						return Date.now();
					}
					t.exports = n;
				},
				{},
			],
			19: [
				function(e, t) {
					function n(e) {
						if ('number' == typeof e) return e;
						if (i(e)) return a;
						if (o(e)) {
							var t = r(e.valueOf) ? e.valueOf() : e;
							e = o(t) ? t + '' : t;
						}
						if ('string' != typeof e) return 0 === e ? e : +e;
						e = e.replace(u, '');
						var n = f.test(e);
						return n || l.test(e) ? s(e.slice(2), n ? 2 : 8) : c.test(e) ? a : +e;
					}
					var r = e('./isFunction'),
						o = e('./isObject'),
						i = e('./isSymbol'),
						a = 0 / 0,
						u = /^\s+|\s+$/g,
						c = /^[-+]0x[0-9a-f]+$/i,
						f = /^0b[01]+$/i,
						l = /^0o[0-7]+$/i,
						s = parseInt;
					t.exports = n;
				},
				{ './isFunction': 14, './isObject': 15, './isSymbol': 17 },
			],
			20: [
				function(e, t) {
					(function(e) {
						'use strict';
						function n(e, t) {
							var n,
								r,
								o,
								i,
								a,
								l = t !== f;
							l &&
								((n = t.getAttribute('id')),
								(r = n || u),
								(o = '#' + r + ' '),
								(i = o + e.replace(/,/g, ',' + o)),
								(a = c.test(e) && t.parentNode),
								n || t.setAttribute('id', r));
							try {
								return (a || t).querySelectorAll(i || e);
							} catch (s) {
								return [];
							} finally {
								null === n && t.removeAttribute('id');
							}
						}
						function r(e, t, r, o) {
							var a,
								u = t || f,
								c = r || [],
								l = 0;
							if ('string' != typeof e) return c;
							if (1 !== u.nodeType && 9 !== u.nodeType) return [];
							if (o) for (; (a = o[l++]); ) i(a, e) && c.push(a);
							else c.push.apply(c, n(e, u));
							return c;
						}
						function o(e, t) {
							return r(e, null, null, t);
						}
						function i(e, t) {
							return s.call(e, t);
						}
						function a() {
							return !1;
						}
						var u = 'sektor-' + Date.now(),
							c = /[+~]/,
							f = e.document,
							l = f.documentElement || {},
							s =
								l.matches ||
								l.webkitMatchesSelector ||
								l.mozMatchesSelector ||
								l.oMatchesSelector ||
								l.msMatchesSelector ||
								a;
						(t.exports = r), (r.matches = o), (r.matchesSelector = i);
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{},
			],
			21: [
				function(e, t) {
					(function(n) {
						'use strict';
						var r,
							o = n.document,
							i = e('./getSelectionRaw'),
							a = e('./getSelectionNullOp'),
							u = e('./getSelectionSynthetic'),
							c = e('./isHost');
						(r = c.method(n, 'getSelection')
							? i
							: 'object' == typeof o.selection && o.selection
							? u
							: a),
							(t.exports = r);
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{
					'./getSelectionNullOp': 22,
					'./getSelectionRaw': 23,
					'./getSelectionSynthetic': 24,
					'./isHost': 25,
				},
			],
			22: [
				function(e, t) {
					'use strict';
					function n() {}
					function r() {
						return { removeAllRanges: n, addRange: n };
					}
					t.exports = r;
				},
				{},
			],
			23: [
				function(e, t) {
					(function(e) {
						'use strict';
						function n() {
							return e.getSelection();
						}
						t.exports = n;
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{},
			],
			24: [
				function(e, t) {
					(function(n) {
						'use strict';
						function r(e) {
							var t = this,
								n = e.createRange();
							(this._selection = e),
								(this._ranges = []),
								'Control' === e.type ? d(t) : l(n) ? s(t, n) : u(t);
						}
						function o(e, t) {
							for (
								var n, r = b.createControlRange(), o = 0, i = t.length;
								i > o;
								++o
							) {
								n = f(t[o]);
								try {
									r.add(n);
								} catch (a) {
									throw new Error(
										'setRanges(): Element could not be added to control selection'
									);
								}
							}
							r.select(), d(e);
						}
						function i(e, t) {
							var n = e.getAllRanges();
							e.removeAllRanges();
							for (var r = 0, o = n.length; o > r; ++r) p(t, n[r]) || e.addRange(n[r]);
							e.rangeCount || u(e);
						}
						function a(e, t) {
							var n = 'start',
								r = 'end';
							(e.anchorNode = t[n + 'Container']),
								(e.anchorOffset = t[n + 'Offset']),
								(e.focusNode = t[r + 'Container']),
								(e.focusOffset = t[r + 'Offset']);
						}
						function u(e) {
							(e.anchorNode = e.focusNode = null),
								(e.anchorOffset = e.focusOffset = 0),
								(e.rangeCount = 0),
								(e.isCollapsed = !0),
								(e._ranges.length = 0);
						}
						function c(e) {
							if (!e.length || 1 !== e[0].nodeType) return !1;
							for (var t = 1, n = e.length; n > t; ++t) if (!v(e[0], e[t])) return !1;
							return !0;
						}
						function f(e) {
							var t = e.getNodes();
							if (!c(t))
								throw new Error(
									'getSingleElementFromRange(): range did not consist of a single element'
								);
							return t[0];
						}
						function l(e) {
							return e && void 0 !== e.text;
						}
						function s(e, t) {
							(e._ranges = [t]),
								a(e, t, !1),
								(e.rangeCount = 1),
								(e.isCollapsed = t.collapsed);
						}
						function d(e) {
							if (((e._ranges.length = 0), 'None' === e._selection.type)) u(e);
							else {
								var t = e._selection.createRange();
								if (l(t)) s(e, t);
								else {
									e.rangeCount = t.length;
									for (var n, r = 0; r < e.rangeCount; ++r)
										(n = m.createRange()), n.selectNode(t.item(r)), e._ranges.push(n);
									(e.isCollapsed = 1 === e.rangeCount && e._ranges[0].collapsed),
										a(e, e._ranges[e.rangeCount - 1], !1);
								}
							}
						}
						function h(e, t) {
							for (
								var n = e._selection.createRange(),
									r = f(t),
									o = b.createControlRange(),
									i = 0,
									a = n.length;
								a > i;
								++i
							)
								o.add(n.item(i));
							try {
								o.add(r);
							} catch (u) {
								throw new Error(
									'addRange(): Element could not be added to control selection'
								);
							}
							o.select(), d(e);
						}
						function p(e, t) {
							return (
								e.startContainer === t.startContainer &&
								e.startOffset === t.startOffset &&
								e.endContainer === t.endContainer &&
								e.endOffset === t.endOffset
							);
						}
						function v(e, t) {
							for (var n = t; n.parentNode; ) {
								if (n.parentNode === e) return !0;
								n = n.parentNode;
							}
							return !1;
						}
						function g() {
							return new r(n.document.selection);
						}
						var y = e('./rangeToTextRange'),
							m = n.document,
							b = m.body,
							w = r.prototype;
						(w.removeAllRanges = function() {
							var e;
							try {
								this._selection.empty(),
									'None' !== this._selection.type &&
										((e = b.createTextRange()), e.select(), this._selection.empty());
							} catch (t) {}
							u(this);
						}),
							(w.addRange = function(e) {
								'Control' === this._selection.type
									? h(this, e)
									: (y(e).select(),
									  (this._ranges[0] = e),
									  (this.rangeCount = 1),
									  (this.isCollapsed = this._ranges[0].collapsed),
									  a(this, e, !1));
							}),
							(w.setRanges = function(e) {
								this.removeAllRanges();
								var t = e.length;
								t > 1 ? o(this, e) : t && this.addRange(e[0]);
							}),
							(w.getRangeAt = function(e) {
								if (0 > e || e >= this.rangeCount)
									throw new Error('getRangeAt(): index out of bounds');
								return this._ranges[e].cloneRange();
							}),
							(w.removeRange = function(e) {
								if ('Control' !== this._selection.type) return void i(this, e);
								for (
									var t,
										n = this._selection.createRange(),
										r = f(e),
										o = b.createControlRange(),
										a = !1,
										u = 0,
										c = n.length;
									c > u;
									++u
								)
									(t = n.item(u)), t !== r || a ? o.add(n.item(u)) : (a = !0);
								o.select(), d(this);
							}),
							(w.eachRange = function(e, t) {
								var n = 0,
									r = this._ranges.length;
								for (n = 0; r > n; ++n) if (e(this.getRangeAt(n))) return t;
							}),
							(w.getAllRanges = function() {
								var e = [];
								return (
									this.eachRange(function(t) {
										e.push(t);
									}),
									e
								);
							}),
							(w.setSingleRange = function(e) {
								this.removeAllRanges(), this.addRange(e);
							}),
							(t.exports = g);
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{ './rangeToTextRange': 26 },
			],
			25: [
				function(e, t) {
					'use strict';
					function n(e, t) {
						var n = typeof e[t];
						return 'function' === n || !('object' !== n || !e[t]) || 'unknown' === n;
					}
					function r(e, t) {
						return 'undefined' != typeof e[t];
					}
					function o(e) {
						return function(t, n) {
							for (var r = n.length; r--; ) if (!e(t, n[r])) return !1;
							return !0;
						};
					}
					t.exports = { method: n, methods: o(n), property: r, properties: o(r) };
				},
				{},
			],
			26: [
				function(e, t) {
					(function(e) {
						'use strict';
						function n(e) {
							if (e.collapsed)
								return o({ node: e.startContainer, offset: e.startOffset }, !0);
							var t = o({ node: e.startContainer, offset: e.startOffset }, !0),
								n = o({ node: e.endContainer, offset: e.endOffset }, !1),
								r = a.createTextRange();
							return r.setEndPoint('StartToStart', t), r.setEndPoint('EndToEnd', n), r;
						}
						function r(e) {
							var t = e.nodeType;
							return 3 === t || 4 === t || 8 === t;
						}
						function o(e, t) {
							var n,
								o,
								u,
								c,
								f = e.offset,
								l = a.createTextRange(),
								s = r(e.node);
							return (
								s
									? ((n = e.node), (o = n.parentNode))
									: ((c = e.node.childNodes),
									  (n = f < c.length ? c[f] : null),
									  (o = e.node)),
								(u = i.createElement('span')),
								(u.innerHTML = '&#feff;'),
								n ? o.insertBefore(u, n) : o.appendChild(u),
								l.moveToElementText(u),
								l.collapse(!t),
								o.removeChild(u),
								s && l[t ? 'moveStart' : 'moveEnd']('character', f),
								l
							);
						}
						var i = e.document,
							a = i.body;
						t.exports = n;
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{},
			],
			27: [
				function(e, t) {
					'use strict';
					var n = e('./getSelection'),
						r = e('./setSelection');
					t.exports = { get: n, set: r };
				},
				{ './getSelection': 21, './setSelection': 28 },
			],
			28: [
				function(e, t) {
					(function(n) {
						'use strict';
						function r(e) {
							function t() {
								var t = o(),
									n = a.createRange();
								e.startContainer &&
									(e.endContainer
										? n.setEnd(e.endContainer, e.endOffset)
										: n.setEnd(e.startContainer, e.startOffset),
									n.setStart(e.startContainer, e.startOffset),
									t.removeAllRanges(),
									t.addRange(n));
							}
							function n() {
								i(e).select();
							}
							a.createRange ? t() : n();
						}
						var o = e('./getSelection'),
							i = e('./rangeToTextRange'),
							a = n.document;
						t.exports = r;
					}.call(
						this,
						'undefined' != typeof global
							? global
							: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
							? window
							: {}
					));
				},
				{ './getSelection': 21, './rangeToTextRange': 26 },
			],
			29: [
				function(e, t) {
					'use strict';
					function n(e) {
						return { start: e.selectionStart, end: e.selectionEnd };
					}
					function r(e) {
						function t(t, r) {
							return n !== e && (n ? n.focus() : e.blur()), { start: t, end: r };
						}
						var n = document.activeElement;
						n !== e && e.focus();
						var r = document.selection.createRange(),
							a = r.getBookmark(),
							u = e.value,
							c = o(u),
							f = r.parentElement();
						if (null === f || !i(f)) return t(0, 0);
						r.text = c + r.text + c;
						var l = e.value;
						return (
							(e.value = u),
							r.moveToBookmark(a),
							r.select(),
							t(l.indexOf(c), l.lastIndexOf(c) - c.length)
						);
					}
					function o(e) {
						var t;
						do t = '@@marker.' + Math.random() * new Date();
						while (-1 !== e.indexOf(t));
						return t;
					}
					function i(e) {
						return (
							('INPUT' === e.tagName && 'text' === e.type) || 'TEXTAREA' === e.tagName
						);
					}
					function a(e, t) {
						(e.selectionStart = c(e, t.start)), (e.selectionEnd = c(e, t.end));
					}
					function u(e, t) {
						var n = e.createTextRange();
						'end' === t.start && 'end' === t.end
							? (n.collapse(!1), n.select())
							: (n.collapse(!0),
							  n.moveEnd('character', c(e, t.end)),
							  n.moveStart('character', c(e, t.start)),
							  n.select());
					}
					function c(e, t) {
						return 'end' === t ? e.value.length : t || 0;
					}
					function f(e, t) {
						return 2 === arguments.length && s(e, t), l(e);
					}
					var l = n,
						s = a;
					document.selection && document.selection.createRange && ((l = r), (s = u)),
						(t.exports = f);
				},
				{},
			],
			30: [
				function(e, t) {
					var n,
						r = 'function' == typeof setImmediate;
					(n = r
						? function(e) {
								setImmediate(e);
						  }
						: function(e) {
								setTimeout(e, 0);
						  }),
						(t.exports = n);
				},
				{},
			],
		},
		{},
		[1]
	)(1);
});

horsey(document.querySelector('.searchform__input'), {
	source: [
		{
			list: [
				{
					value: 'admissions undergraduate future',
					text: 'Undergraduate Admissions',
					url: 'https://admissions.carleton.ca/',
				},
				{
					value: 'admissions graduate',
					text: 'Graduate Admissions',
					url: 'https://graduate.carleton.ca/',
				},
				{
					value: 'cuLearn LMS',
					text: 'cuLearn LMS',
					url: 'https://carleton.ca/culearn/',
				},
				{
					value: 'IT CCS',
					text: 'Information Technology Services (ITS)',
					url: 'https://carleton.ca/its/',
				},
				{
					value: 'Academic Advising Centre',
					text: 'Academic Advising Centre',
					url: 'https://carleton.ca/academicadvising/',
				},
				{
					value: 'Co-op',
					text: 'Co-operative Education',
					url: 'https://carleton.ca/academicadvising/',
				},
				{
					value: 'Proctor exam invigilator',
					text: 'Proctoring services',
					url: 'https://carleton.ca/proctoring-services/',
				},
				{
					value: 'Future Fund Donate Giving',
					text: 'FutureFunder',
					url: 'https://futurefunder.carleton.ca',
				},
				{
					value: 'Faculty Sci',
					text: 'Faculty of Science',
					url: 'https://carleton.ca/science/',
				},
				{
					value: 'indigenous aboriginal',
					text: 'Indigenous Initiatives, Centre for',
					url: 'https://carleton.ca/indigenous/',
				},
				{
					value: 'Academic Success Centre, Student',
					text: 'Academic Success Centre, Student',
					url: 'https://carleton.ca/sasc/',
				},
				{
					value: 'Aerospace Engineering MAE',
					text: 'Aerospace Engineering, Department of Mechanical and',
					url: 'https://carleton.ca/mae/',
				},
				{
					value: 'African',
					text: 'African Studies, Department',
					url: 'https://carleton.ca/africanstudies/',
				},
				{
					value: 'Anthropology',
					text: 'Anthropology, Department of Sociology and',
					url: 'https://carleton.ca/socanth',
				},
				{
					value: 'Pathways transition start graduate',
					text: 'Pathways to Graduate',
					url: 'https://carleton.ca/socanth',
				},
			],
		},
	],
	getText: 'text',
	getValue: 'value',
	getUrl: 'url',
	renderItem: function(li, suggestion) {
		var url = '<a href="' + suggestion.url + '">' + suggestion.text + '</a>';
		li.innerHTML = url;
	},
});