(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8417: function (D, F, B) {
      "use strict";
      function sheetForTag(D) {
        if (D.sheet) return D.sheet;
        for (var F = 0; F < document.styleSheets.length; F++)
          if (document.styleSheets[F].ownerNode === D)
            return document.styleSheets[F];
      }
      function createStyleElement(D) {
        var F = document.createElement("style");
        return (
          F.setAttribute("data-emotion", D.key),
          void 0 !== D.nonce && F.setAttribute("nonce", D.nonce),
          F.appendChild(document.createTextNode("")),
          F.setAttribute("data-s", ""),
          F
        );
      }
      B.d(F, {
        Z: function () {
          return createCache;
        },
      });
      var _ = (function () {
          function StyleSheet(D) {
            var F = this;
            (this._insertTag = function (D) {
              var B;
              (B =
                0 === F.tags.length
                  ? F.insertionPoint
                    ? F.insertionPoint.nextSibling
                    : F.prepend
                    ? F.container.firstChild
                    : F.before
                  : F.tags[F.tags.length - 1].nextSibling),
                F.container.insertBefore(D, B),
                F.tags.push(D);
            }),
              (this.isSpeedy = void 0 === D.speedy || D.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = D.nonce),
              (this.key = D.key),
              (this.container = D.container),
              (this.prepend = D.prepend),
              (this.insertionPoint = D.insertionPoint),
              (this.before = null);
          }
          var D = StyleSheet.prototype;
          return (
            (D.hydrate = function (D) {
              D.forEach(this._insertTag);
            }),
            (D.insert = function (D) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                this._insertTag(createStyleElement(this));
              var F = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var B = sheetForTag(F);
                try {
                  B.insertRule(D, B.cssRules.length);
                } catch (D) {}
              } else F.appendChild(document.createTextNode(D));
              this.ctr++;
            }),
            (D.flush = function () {
              this.tags.forEach(function (D) {
                return D.parentNode && D.parentNode.removeChild(D);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            StyleSheet
          );
        })(),
        R = Math.abs,
        N = String.fromCharCode,
        U = Object.assign;
      function hash(D, F) {
        return 45 ^ Utility_charat(D, 0)
          ? (((((((F << 2) ^ Utility_charat(D, 0)) << 2) ^
              Utility_charat(D, 1)) <<
              2) ^
              Utility_charat(D, 2)) <<
              2) ^
              Utility_charat(D, 3)
          : 0;
      }
      function trim(D) {
        return D.trim();
      }
      function Utility_match(D, F) {
        return (D = F.exec(D)) ? D[0] : D;
      }
      function Utility_replace(D, F, B) {
        return D.replace(F, B);
      }
      function indexof(D, F) {
        return D.indexOf(F);
      }
      function Utility_charat(D, F) {
        return 0 | D.charCodeAt(F);
      }
      function Utility_substr(D, F, B) {
        return D.slice(F, B);
      }
      function Utility_strlen(D) {
        return D.length;
      }
      function Utility_sizeof(D) {
        return D.length;
      }
      function Utility_append(D, F) {
        return F.push(D), D;
      }
      function Utility_combine(D, F) {
        return D.map(F).join("");
      }
      var H = 1,
        V = 1,
        W = 0,
        K = 0,
        J = 0,
        Z = "";
      function node(D, F, B, _, R, N, U) {
        return {
          value: D,
          root: F,
          parent: B,
          type: _,
          props: R,
          children: N,
          line: H,
          column: V,
          length: U,
          return: "",
        };
      }
      function Tokenizer_copy(D, F) {
        return U(
          node("", null, null, "", null, null, 0),
          D,
          { length: -D.length },
          F
        );
      }
      function Tokenizer_char() {
        return J;
      }
      function prev() {
        return (
          (J = K > 0 ? Utility_charat(Z, --K) : 0),
          V--,
          10 === J && ((V = 1), H--),
          J
        );
      }
      function next() {
        return (
          (J = K < W ? Utility_charat(Z, K++) : 0),
          V++,
          10 === J && ((V = 1), H++),
          J
        );
      }
      function peek() {
        return Utility_charat(Z, K);
      }
      function caret() {
        return K;
      }
      function slice(D, F) {
        return Utility_substr(Z, D, F);
      }
      function token(D) {
        switch (D) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function alloc(D) {
        return (H = V = 1), (W = Utility_strlen((Z = D))), (K = 0), [];
      }
      function dealloc(D) {
        return (Z = ""), D;
      }
      function delimit(D) {
        return trim(
          slice(K - 1, delimiter(91 === D ? D + 2 : 40 === D ? D + 1 : D))
        );
      }
      function whitespace(D) {
        for (; (J = peek()); )
          if (J < 33) next();
          else break;
        return token(D) > 2 || token(J) > 3 ? "" : " ";
      }
      function escaping(D, F) {
        for (
          ;
          --F &&
          next() &&
          !(J < 48) &&
          !(J > 102) &&
          (!(J > 57) || !(J < 65)) &&
          (!(J > 70) || !(J < 97));

        );
        return slice(D, caret() + (F < 6 && 32 == peek() && 32 == next()));
      }
      function delimiter(D) {
        for (; next(); )
          switch (J) {
            case D:
              return K;
            case 34:
            case 39:
              34 !== D && 39 !== D && delimiter(J);
              break;
            case 40:
              41 === D && delimiter(D);
              break;
            case 92:
              next();
          }
        return K;
      }
      function commenter(D, F) {
        for (; next(); )
          if (D + J === 57) break;
          else if (D + J === 84 && 47 === peek()) break;
        return "/*" + slice(F, K - 1) + "*" + N(47 === D ? D : next());
      }
      function identifier(D) {
        for (; !token(peek()); ) next();
        return slice(D, K);
      }
      var X = "-ms-",
        Y = "-moz-",
        G = "-webkit-",
        Q = "comm",
        ee = "rule",
        et = "decl",
        er = "@import",
        en = "@keyframes",
        ei = "@layer";
      function Serializer_serialize(D, F) {
        for (var B = "", _ = Utility_sizeof(D), R = 0; R < _; R++)
          B += F(D[R], R, D, F) || "";
        return B;
      }
      function stringify(D, F, B, _) {
        switch (D.type) {
          case ei:
            if (D.children.length) break;
          case er:
          case et:
            return (D.return = D.return || D.value);
          case Q:
            return "";
          case en:
            return (D.return =
              D.value + "{" + Serializer_serialize(D.children, _) + "}");
          case ee:
            D.value = D.props.join(",");
        }
        return Utility_strlen((B = Serializer_serialize(D.children, _)))
          ? (D.return = D.value + "{" + B + "}")
          : "";
      }
      function middleware(D) {
        var F = Utility_sizeof(D);
        return function (B, _, R, N) {
          for (var U = "", H = 0; H < F; H++) U += D[H](B, _, R, N) || "";
          return U;
        };
      }
      function rulesheet(D) {
        return function (F) {
          !F.root && (F = F.return) && D(F);
        };
      }
      function compile(D) {
        return dealloc(
          parse("", null, null, null, [""], (D = alloc(D)), 0, [0], D)
        );
      }
      function parse(D, F, B, _, R, U, H, V, W) {
        for (
          var K = 0,
            J = 0,
            Z = H,
            X = 0,
            Y = 0,
            G = 0,
            Q = 1,
            ee = 1,
            et = 1,
            er = 0,
            en = "",
            ei = R,
            eo = U,
            eu = _,
            ea = en;
          ee;

        )
          switch (((G = er), (er = next()))) {
            case 40:
              if (108 != G && 58 == Utility_charat(ea, Z - 1)) {
                -1 !=
                  indexof(
                    (ea += Utility_replace(delimit(er), "&", "&\f")),
                    "&\f"
                  ) && (et = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              ea += delimit(er);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              ea += whitespace(G);
              break;
            case 92:
              ea += escaping(caret() - 1, 7);
              continue;
            case 47:
              switch (peek()) {
                case 42:
                case 47:
                  Utility_append(comment(commenter(next(), caret()), F, B), W);
                  break;
                default:
                  ea += "/";
              }
              break;
            case 123 * Q:
              V[K++] = Utility_strlen(ea) * et;
            case 125 * Q:
            case 59:
            case 0:
              switch (er) {
                case 0:
                case 125:
                  ee = 0;
                case 59 + J:
                  -1 == et && (ea = Utility_replace(ea, /\f/g, "")),
                    Y > 0 &&
                      Utility_strlen(ea) - Z &&
                      Utility_append(
                        Y > 32
                          ? declaration(ea + ";", _, B, Z - 1)
                          : declaration(
                              Utility_replace(ea, " ", "") + ";",
                              _,
                              B,
                              Z - 2
                            ),
                        W
                      );
                  break;
                case 59:
                  ea += ";";
                default:
                  if (
                    (Utility_append(
                      (eu = ruleset(
                        ea,
                        F,
                        B,
                        K,
                        J,
                        R,
                        V,
                        en,
                        (ei = []),
                        (eo = []),
                        Z
                      )),
                      U
                    ),
                    123 === er)
                  ) {
                    if (0 === J) parse(ea, F, eu, eu, ei, U, Z, V, eo);
                    else
                      switch (
                        99 === X && 110 === Utility_charat(ea, 3) ? 100 : X
                      ) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          parse(
                            D,
                            eu,
                            eu,
                            _ &&
                              Utility_append(
                                ruleset(
                                  D,
                                  eu,
                                  eu,
                                  0,
                                  0,
                                  R,
                                  V,
                                  en,
                                  R,
                                  (ei = []),
                                  Z
                                ),
                                eo
                              ),
                            R,
                            eo,
                            Z,
                            V,
                            _ ? ei : eo
                          );
                          break;
                        default:
                          parse(ea, eu, eu, eu, [""], eo, 0, V, eo);
                      }
                  }
              }
              (K = J = Y = 0), (Q = et = 1), (en = ea = ""), (Z = H);
              break;
            case 58:
              (Z = 1 + Utility_strlen(ea)), (Y = G);
            default:
              if (Q < 1) {
                if (123 == er) --Q;
                else if (125 == er && 0 == Q++ && 125 == prev()) continue;
              }
              switch (((ea += N(er)), er * Q)) {
                case 38:
                  et = J > 0 ? 1 : ((ea += "\f"), -1);
                  break;
                case 44:
                  (V[K++] = (Utility_strlen(ea) - 1) * et), (et = 1);
                  break;
                case 64:
                  45 === peek() && (ea += delimit(next())),
                    (X = peek()),
                    (J = Z = Utility_strlen((en = ea += identifier(caret())))),
                    er++;
                  break;
                case 45:
                  45 === G && 2 == Utility_strlen(ea) && (Q = 0);
              }
          }
        return U;
      }
      function ruleset(D, F, B, _, N, U, H, V, W, K, J) {
        for (
          var Z = N - 1,
            X = 0 === N ? U : [""],
            Y = Utility_sizeof(X),
            G = 0,
            Q = 0,
            et = 0;
          G < _;
          ++G
        )
          for (
            var er = 0,
              en = Utility_substr(D, Z + 1, (Z = R((Q = H[G])))),
              ei = D;
            er < Y;
            ++er
          )
            (ei = trim(
              Q > 0 ? X[er] + " " + en : Utility_replace(en, /&\f/g, X[er])
            )) && (W[et++] = ei);
        return node(D, F, B, 0 === N ? ee : V, W, K, J);
      }
      function comment(D, F, B) {
        return node(
          D,
          F,
          B,
          Q,
          N(Tokenizer_char()),
          Utility_substr(D, 2, -2),
          0
        );
      }
      function declaration(D, F, B, _) {
        return node(
          D,
          F,
          B,
          et,
          Utility_substr(D, 0, _),
          Utility_substr(D, _ + 1, -1),
          _
        );
      }
      var identifierWithPointTracking = function (D, F, B) {
          for (
            var _ = 0, R = 0;
            (_ = R),
              (R = peek()),
              38 === _ && 12 === R && (F[B] = 1),
              !token(R);

          )
            next();
          return slice(D, K);
        },
        toRules = function (D, F) {
          var B = -1,
            _ = 44;
          do
            switch (token(_)) {
              case 0:
                38 === _ && 12 === peek() && (F[B] = 1),
                  (D[B] += identifierWithPointTracking(K - 1, F, B));
                break;
              case 2:
                D[B] += delimit(_);
                break;
              case 4:
                if (44 === _) {
                  (D[++B] = 58 === peek() ? "&\f" : ""), (F[B] = D[B].length);
                  break;
                }
              default:
                D[B] += N(_);
            }
          while ((_ = next()));
          return D;
        },
        getRules = function (D, F) {
          return dealloc(toRules(alloc(D), F));
        },
        eo = new WeakMap(),
        compat = function (D) {
          if ("rule" === D.type && D.parent && !(D.length < 1)) {
            for (
              var F = D.value,
                B = D.parent,
                _ = D.column === B.column && D.line === B.line;
              "rule" !== B.type;

            )
              if (!(B = B.parent)) return;
            if (
              (1 !== D.props.length || 58 === F.charCodeAt(0) || eo.get(B)) &&
              !_
            ) {
              eo.set(D, !0);
              for (
                var R = [], N = getRules(F, R), U = B.props, H = 0, V = 0;
                H < N.length;
                H++
              )
                for (var W = 0; W < U.length; W++, V++)
                  D.props[V] = R[H]
                    ? N[H].replace(/&\f/g, U[W])
                    : U[W] + " " + N[H];
            }
          }
        },
        removeLabel = function (D) {
          if ("decl" === D.type) {
            var F = D.value;
            108 === F.charCodeAt(0) &&
              98 === F.charCodeAt(2) &&
              ((D.return = ""), (D.value = ""));
          }
        };
      function emotion_cache_browser_esm_prefix(D, F) {
        switch (hash(D, F)) {
          case 5103:
            return G + "print-" + D + D;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return G + D + D;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return G + D + Y + D + X + D + D;
          case 6828:
          case 4268:
            return G + D + X + D + D;
          case 6165:
            return G + D + X + "flex-" + D + D;
          case 5187:
            return (
              G +
              D +
              Utility_replace(
                D,
                /(\w+).+(:[^]+)/,
                G + "box-$1$2" + X + "flex-$1$2"
              ) +
              D
            );
          case 5443:
            return (
              G +
              D +
              X +
              "flex-item-" +
              Utility_replace(D, /flex-|-self/, "") +
              D
            );
          case 4675:
            return (
              G +
              D +
              X +
              "flex-line-pack" +
              Utility_replace(D, /align-content|flex-|-self/, "") +
              D
            );
          case 5548:
            return G + D + X + Utility_replace(D, "shrink", "negative") + D;
          case 5292:
            return (
              G + D + X + Utility_replace(D, "basis", "preferred-size") + D
            );
          case 6060:
            return (
              G +
              "box-" +
              Utility_replace(D, "-grow", "") +
              G +
              D +
              X +
              Utility_replace(D, "grow", "positive") +
              D
            );
          case 4554:
            return (
              G + Utility_replace(D, /([^-])(transform)/g, "$1" + G + "$2") + D
            );
          case 6187:
            return (
              Utility_replace(
                Utility_replace(
                  Utility_replace(D, /(zoom-|grab)/, G + "$1"),
                  /(image-set)/,
                  G + "$1"
                ),
                D,
                ""
              ) + D
            );
          case 5495:
          case 3959:
            return Utility_replace(D, /(image-set\([^]*)/, G + "$1$`$1");
          case 4968:
            return (
              Utility_replace(
                Utility_replace(
                  D,
                  /(.+:)(flex-)?(.*)/,
                  G + "box-pack:$3" + X + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              G +
              D +
              D
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return Utility_replace(D, /(.+)-inline(.+)/, G + "$1$2") + D;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (Utility_strlen(D) - 1 - F > 6)
              switch (Utility_charat(D, F + 1)) {
                case 109:
                  if (45 !== Utility_charat(D, F + 4)) break;
                case 102:
                  return (
                    Utility_replace(
                      D,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        G +
                        "$2-$3$1" +
                        Y +
                        (108 == Utility_charat(D, F + 3) ? "$3" : "$2-$3")
                    ) + D
                  );
                case 115:
                  return ~indexof(D, "stretch")
                    ? emotion_cache_browser_esm_prefix(
                        Utility_replace(D, "stretch", "fill-available"),
                        F
                      ) + D
                    : D;
              }
            break;
          case 4949:
            if (115 !== Utility_charat(D, F + 1)) break;
          case 6444:
            switch (
              Utility_charat(
                D,
                Utility_strlen(D) - 3 - (~indexof(D, "!important") && 10)
              )
            ) {
              case 107:
                return Utility_replace(D, ":", ":" + G) + D;
              case 101:
                return (
                  Utility_replace(
                    D,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      G +
                      (45 === Utility_charat(D, 14) ? "inline-" : "") +
                      "box$3$1" +
                      G +
                      "$2$3$1" +
                      X +
                      "$2box$3"
                  ) + D
                );
            }
            break;
          case 5936:
            switch (Utility_charat(D, F + 11)) {
              case 114:
                return (
                  G + D + X + Utility_replace(D, /[svh]\w+-[tblr]{2}/, "tb") + D
                );
              case 108:
                return (
                  G +
                  D +
                  X +
                  Utility_replace(D, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                  D
                );
              case 45:
                return (
                  G + D + X + Utility_replace(D, /[svh]\w+-[tblr]{2}/, "lr") + D
                );
            }
            return G + D + X + D + D;
        }
        return D;
      }
      var eu = [
          function (D, F, B, _) {
            if (D.length > -1 && !D.return)
              switch (D.type) {
                case et:
                  D.return = emotion_cache_browser_esm_prefix(
                    D.value,
                    D.length
                  );
                  break;
                case en:
                  return Serializer_serialize(
                    [
                      Tokenizer_copy(D, {
                        value: Utility_replace(D.value, "@", "@" + G),
                      }),
                    ],
                    _
                  );
                case ee:
                  if (D.length)
                    return Utility_combine(D.props, function (F) {
                      switch (Utility_match(F, /(::plac\w+|:read-\w+)/)) {
                        case ":read-only":
                        case ":read-write":
                          return Serializer_serialize(
                            [
                              Tokenizer_copy(D, {
                                props: [
                                  Utility_replace(
                                    F,
                                    /:(read-\w+)/,
                                    ":" + Y + "$1"
                                  ),
                                ],
                              }),
                            ],
                            _
                          );
                        case "::placeholder":
                          return Serializer_serialize(
                            [
                              Tokenizer_copy(D, {
                                props: [
                                  Utility_replace(
                                    F,
                                    /:(plac\w+)/,
                                    ":" + G + "input-$1"
                                  ),
                                ],
                              }),
                              Tokenizer_copy(D, {
                                props: [
                                  Utility_replace(
                                    F,
                                    /:(plac\w+)/,
                                    ":" + Y + "$1"
                                  ),
                                ],
                              }),
                              Tokenizer_copy(D, {
                                props: [
                                  Utility_replace(
                                    F,
                                    /:(plac\w+)/,
                                    X + "input-$1"
                                  ),
                                ],
                              }),
                            ],
                            _
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        createCache = function (D) {
          var F,
            B,
            R,
            N = D.key;
          if ("css" === N) {
            var U = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(U, function (D) {
              -1 !== D.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(D), D.setAttribute("data-s", ""));
            });
          }
          var H = D.stylisPlugins || eu,
            V = {},
            W = [];
          (F = D.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + N + ' "]'),
              function (D) {
                for (
                  var F = D.getAttribute("data-emotion").split(" "), B = 1;
                  B < F.length;
                  B++
                )
                  V[F[B]] = !0;
                W.push(D);
              }
            );
          var K = middleware(
              [compat, removeLabel].concat(H, [
                stringify,
                rulesheet(function (D) {
                  R.insert(D);
                }),
              ])
            ),
            stylis = function (D) {
              return Serializer_serialize(compile(D), K);
            };
          B = function (D, F, B, _) {
            (R = B),
              stylis(D ? D + "{" + F.styles + "}" : F.styles),
              _ && (J.inserted[F.name] = !0);
          };
          var J = {
            key: N,
            sheet: new _({
              key: N,
              container: F,
              nonce: D.nonce,
              speedy: D.speedy,
              prepend: D.prepend,
              insertionPoint: D.insertionPoint,
            }),
            nonce: D.nonce,
            inserted: V,
            registered: {},
            insert: B,
          };
          return J.sheet.hydrate(W), J;
        };
    },
    1965: function (D, F, B) {
      "use strict";
      B.d(F, {
        tZ: function () {
          return jsx;
        },
        BX: function () {
          return jsxs;
        },
      });
      var _ = B(5893),
        R = B(7294),
        N = B(8417),
        U = !0;
      function getRegisteredStyles(D, F, B) {
        var _ = "";
        return (
          B.split(" ").forEach(function (B) {
            void 0 !== D[B] ? F.push(D[B] + ";") : (_ += B + " ");
          }),
          _
        );
      }
      var registerStyles = function (D, F, B) {
          var _ = D.key + "-" + F.name;
          (!1 === B || !1 === U) &&
            void 0 === D.registered[_] &&
            (D.registered[_] = F.styles);
        },
        insertStyles = function (D, F, B) {
          registerStyles(D, F, B);
          var _ = D.key + "-" + F.name;
          if (void 0 === D.inserted[F.name]) {
            var R = F;
            do D.insert(F === R ? "." + _ : "", R, D.sheet, !0), (R = R.next);
            while (void 0 !== R);
          }
        },
        H = B(7906),
        V = B(7278),
        W = !0,
        K = {}.hasOwnProperty,
        J = R.createContext(
          "undefined" != typeof HTMLElement ? (0, N.Z)({ key: "css" }) : null
        );
      J.Provider;
      var withEmotionCache = function (D) {
        return (0, R.forwardRef)(function (F, B) {
          return D(F, (0, R.useContext)(J), B);
        });
      };
      W ||
        (withEmotionCache = function (D) {
          return function (F) {
            var B = (0, R.useContext)(J);
            return null === B
              ? ((B = (0, N.Z)({ key: "css" })),
                R.createElement(J.Provider, { value: B }, D(F, B)))
              : D(F, B);
          };
        });
      var Z = R.createContext({}),
        X = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        createEmotionProps = function (D, F) {
          var B = {};
          for (var _ in F) K.call(F, _) && (B[_] = F[_]);
          return (B[X] = D), B;
        },
        Insertion = function (D) {
          var F = D.cache,
            B = D.serialized,
            _ = D.isStringTag;
          return (
            registerStyles(F, B, _),
            (0, V.L)(function () {
              return insertStyles(F, B, _);
            }),
            null
          );
        },
        Y = withEmotionCache(function (D, F, B) {
          var _ = D.css;
          "string" == typeof _ &&
            void 0 !== F.registered[_] &&
            (_ = F.registered[_]);
          var N = D[X],
            U = [_],
            V = "";
          "string" == typeof D.className
            ? (V = getRegisteredStyles(F.registered, U, D.className))
            : null != D.className && (V = D.className + " ");
          var W = (0, H.O)(U, void 0, R.useContext(Z));
          V += F.key + "-" + W.name;
          var J = {};
          for (var Y in D)
            K.call(D, Y) && "css" !== Y && Y !== X && (J[Y] = D[Y]);
          return (
            (J.ref = B),
            (J.className = V),
            R.createElement(
              R.Fragment,
              null,
              R.createElement(Insertion, {
                cache: F,
                serialized: W,
                isStringTag: "string" == typeof N,
              }),
              R.createElement(N, J)
            )
          );
        });
      function jsx(D, F, B) {
        return K.call(F, "css")
          ? _.jsx(Y, createEmotionProps(D, F), B)
          : _.jsx(D, F, B);
      }
      function jsxs(D, F, B) {
        return K.call(F, "css")
          ? _.jsxs(Y, createEmotionProps(D, F), B)
          : _.jsxs(D, F, B);
      }
      B(8679), _.Fragment;
    },
    7906: function (D, F, B) {
      "use strict";
      function murmur2(D) {
        for (var F, B = 0, _ = 0, R = D.length; R >= 4; ++_, R -= 4)
          (F =
            (65535 &
              (F =
                (255 & D.charCodeAt(_)) |
                ((255 & D.charCodeAt(++_)) << 8) |
                ((255 & D.charCodeAt(++_)) << 16) |
                ((255 & D.charCodeAt(++_)) << 24))) *
              1540483477 +
            (((F >>> 16) * 59797) << 16)),
            (F ^= F >>> 24),
            (B =
              ((65535 & F) * 1540483477 + (((F >>> 16) * 59797) << 16)) ^
              ((65535 & B) * 1540483477 + (((B >>> 16) * 59797) << 16)));
        switch (R) {
          case 3:
            B ^= (255 & D.charCodeAt(_ + 2)) << 16;
          case 2:
            B ^= (255 & D.charCodeAt(_ + 1)) << 8;
          case 1:
            (B ^= 255 & D.charCodeAt(_)),
              (B = (65535 & B) * 1540483477 + (((B >>> 16) * 59797) << 16));
        }
        return (
          (B ^= B >>> 13),
          (
            ((B = (65535 & B) * 1540483477 + (((B >>> 16) * 59797) << 16)) ^
              (B >>> 15)) >>>
            0
          ).toString(36)
        );
      }
      B.d(F, {
        O: function () {
          return serializeStyles;
        },
      });
      var _,
        R = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        N = /[A-Z]|^ms/g,
        U = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        isCustomProperty = function (D) {
          return 45 === D.charCodeAt(1);
        },
        isProcessableValue = function (D) {
          return null != D && "boolean" != typeof D;
        },
        H = (function (D) {
          var F = Object.create(null);
          return function (B) {
            return void 0 === F[B] && (F[B] = D(B)), F[B];
          };
        })(function (D) {
          return isCustomProperty(D) ? D : D.replace(N, "-$&").toLowerCase();
        }),
        processStyleValue = function (D, F) {
          switch (D) {
            case "animation":
            case "animationName":
              if ("string" == typeof F)
                return F.replace(U, function (D, F, B) {
                  return (_ = { name: F, styles: B, next: _ }), F;
                });
          }
          return 1 === R[D] ||
            isCustomProperty(D) ||
            "number" != typeof F ||
            0 === F
            ? F
            : F + "px";
        };
      function handleInterpolation(D, F, B) {
        if (null == B) return "";
        if (void 0 !== B.__emotion_styles) return B;
        switch (typeof B) {
          case "boolean":
            return "";
          case "object":
            if (1 === B.anim)
              return (_ = { name: B.name, styles: B.styles, next: _ }), B.name;
            if (void 0 !== B.styles) {
              var R = B.next;
              if (void 0 !== R)
                for (; void 0 !== R; )
                  (_ = { name: R.name, styles: R.styles, next: _ }),
                    (R = R.next);
              return B.styles + ";";
            }
            return createStringFromObject(D, F, B);
          case "function":
            if (void 0 !== D) {
              var N = _,
                U = B(D);
              return (_ = N), handleInterpolation(D, F, U);
            }
        }
        if (null == F) return B;
        var H = F[B];
        return void 0 !== H ? H : B;
      }
      function createStringFromObject(D, F, B) {
        var _ = "";
        if (Array.isArray(B))
          for (var R = 0; R < B.length; R++)
            _ += handleInterpolation(D, F, B[R]) + ";";
        else
          for (var N in B) {
            var U = B[N];
            if ("object" != typeof U)
              null != F && void 0 !== F[U]
                ? (_ += N + "{" + F[U] + "}")
                : isProcessableValue(U) &&
                  (_ += H(N) + ":" + processStyleValue(N, U) + ";");
            else if (
              Array.isArray(U) &&
              "string" == typeof U[0] &&
              (null == F || void 0 === F[U[0]])
            )
              for (var V = 0; V < U.length; V++)
                isProcessableValue(U[V]) &&
                  (_ += H(N) + ":" + processStyleValue(N, U[V]) + ";");
            else {
              var W = handleInterpolation(D, F, U);
              switch (N) {
                case "animation":
                case "animationName":
                  _ += H(N) + ":" + W + ";";
                  break;
                default:
                  _ += N + "{" + W + "}";
              }
            }
          }
        return _;
      }
      var V = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        serializeStyles = function (D, F, B) {
          if (
            1 === D.length &&
            "object" == typeof D[0] &&
            null !== D[0] &&
            void 0 !== D[0].styles
          )
            return D[0];
          var R,
            N = !0,
            U = "";
          _ = void 0;
          var H = D[0];
          null == H || void 0 === H.raw
            ? ((N = !1), (U += handleInterpolation(B, F, H)))
            : (U += H[0]);
          for (var W = 1; W < D.length; W++)
            (U += handleInterpolation(B, F, D[W])), N && (U += H[W]);
          V.lastIndex = 0;
          for (var K = ""; null !== (R = V.exec(U)); ) K += "-" + R[1];
          return { name: murmur2(U) + K, styles: U, next: _ };
        };
    },
    7278: function (D, F, B) {
      "use strict";
      B.d(F, {
        L: function () {
          return U;
        },
      });
      var _,
        R = B(7294),
        syncFallback = function (D) {
          return D();
        },
        N =
          !!(_ || (_ = B.t(R, 2))).useInsertionEffect &&
          (_ || (_ = B.t(R, 2))).useInsertionEffect,
        U = N || syncFallback;
      N || R.useLayoutEffect;
    },
    9940: function (D, F, B) {
      "use strict";
      B.d(F, {
        Hb: function () {
          return N;
        },
        P_: function () {
          return R;
        },
        Zi: function () {
          return radixGetMatchingGrayScale;
        },
        aV: function () {
          return U;
        },
        bm: function () {
          return _;
        },
        mO: function () {
          return V;
        },
        n: function () {
          return W;
        },
        o: function () {
          return H;
        },
      });
      let _ = [
          "tomato",
          "red",
          "ruby",
          "crimson",
          "pink",
          "plum",
          "purple",
          "violet",
          "iris",
          "indigo",
          "blue",
          "cyan",
          "teal",
          "jade",
          "green",
          "grass",
          "brown",
          "orange",
        ],
        R = ["sky", "mint", "lime", "yellow", "amber"],
        N = ["gold", "bronze"],
        U = [..._, ...R, ...N],
        H = "gray",
        V = ["mauve", "slate", "sage", "olive", "sand"],
        W = [H, ...V];
      function radixGetMatchingGrayScale(D) {
        switch (D) {
          case "tomato":
          case "red":
          case "ruby":
          case "crimson":
          case "pink":
          case "plum":
          case "purple":
          case "violet":
            return "mauve";
          case "iris":
          case "indigo":
          case "blue":
          case "sky":
          case "cyan":
            return "slate";
          case "teal":
          case "jade":
          case "mint":
          case "green":
            return "sage";
          case "grass":
          case "lime":
            return "olive";
          case "yellow":
          case "amber":
          case "orange":
          case "brown":
          case "gold":
          case "bronze":
            return "sand";
        }
      }
    },
    3502: function (D, F, B) {
      "use strict";
      B.d(F, {
        Eu: function () {
          return J;
        },
        Gh: function () {
          return getMatchingGrayColor;
        },
        yT: function () {
          return K;
        },
      });
      var _ = B(9940);
      let R = ["inherit", "light", "dark"],
        N = [..._.aV, "gray"],
        U = [..._.n, "auto"],
        H = ["solid", "translucent"],
        V = ["none", "small", "medium", "large", "full"],
        W = ["90%", "95%", "100%", "105%", "110%"],
        K = {
          hasBackground: { type: "boolean", default: !0 },
          appearance: { type: "enum", values: R, default: "inherit" },
          accentColor: { type: "enum", values: N, default: "indigo" },
          grayColor: { type: "enum", values: U, default: "auto" },
          panelBackground: { type: "enum", values: H, default: "translucent" },
          radius: { type: "enum", values: V, default: "medium" },
          scaling: { type: "enum", values: W, default: "100%" },
        };
      [..._.bm], [..._.P_], [..._.Hb];
      let J = [
        "gray",
        "gold",
        "bronze",
        "brown",
        "yellow",
        "amber",
        "orange",
        "tomato",
        "red",
        "ruby",
        "crimson",
        "pink",
        "plum",
        "purple",
        "violet",
        "iris",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "jade",
        "green",
        "grass",
        "lime",
        "mint",
        "sky",
      ];
      function getMatchingGrayColor(D) {
        return "gray" === D ? "gray" : (0, _.Zi)(D);
      }
      _.o, [..._.mO];
    },
    2465: function (D, F, B) {
      "use strict";
      B.d(F, {
        Eh: function () {
          return updateThemeAppearanceClass;
        },
        Q2: function () {
          return J;
        },
        TC: function () {
          return useThemeContext;
        },
      });
      var _ = B(7294),
        R = B(3967),
        N = B.n(R),
        U = B(6192),
        H = B(8990),
        V = B(8426),
        W = B(3502);
      let noop = () => {},
        K = _.createContext(void 0);
      function useThemeContext() {
        let D = _.useContext(K);
        if (void 0 === D)
          throw Error("`useThemeContext` must be used within a `Theme`");
        return D;
      }
      let J = _.forwardRef((D, F) => {
        let B = _.useContext(K),
          R = void 0 === B;
        return R
          ? _.createElement(
              U.zt,
              null,
              _.createElement(
                H._9,
                { dir: "ltr" },
                _.createElement(Z, { ...D, ref: F })
              )
            )
          : _.createElement(X, { ...D, ref: F });
      });
      J.displayName = "Theme";
      let Z = _.forwardRef((D, F) => {
        let {
            appearance: B = W.yT.appearance.default,
            accentColor: R = W.yT.accentColor.default,
            grayColor: N = W.yT.grayColor.default,
            panelBackground: U = W.yT.panelBackground.default,
            radius: H = W.yT.radius.default,
            scaling: V = W.yT.scaling.default,
            hasBackground: K = W.yT.hasBackground.default,
            ...J
          } = D,
          [Z, Y] = _.useState(B);
        _.useEffect(() => Y(B), [B]);
        let [G, Q] = _.useState(R);
        _.useEffect(() => Q(R), [R]);
        let [ee, et] = _.useState(N);
        _.useEffect(() => et(N), [N]);
        let [er, en] = _.useState(U);
        _.useEffect(() => en(U), [U]);
        let [ei, eo] = _.useState(H);
        _.useEffect(() => eo(H), [H]);
        let [eu, ea] = _.useState(V);
        _.useEffect(() => ea(V), [V]);
        let es = _.memo(
          ({ appearance: D }) =>
            _.createElement("script", {
              dangerouslySetInnerHTML: {
                __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${D}';c.add('${D}');}catch(e){}})();`,
              },
            }),
          () => !0
        );
        (es.displayName = "ExplicitRootAppearanceScript"),
          _.useEffect(() => updateThemeAppearanceClass(B), [B]);
        let ec = "auto" === ee ? (0, W.Gh)(G) : ee;
        return _.createElement(
          _.Fragment,
          null,
          "inherit" !== Z && _.createElement(es, { appearance: Z }),
          K &&
            _.createElement("style", {
              dangerouslySetInnerHTML: {
                __html: `
:root, .light, .light-theme { --color-page-background: white; }
.dark, .dark-theme { --color-page-background: var(--${ec}-1); }
body { background-color: var(--color-page-background); }
`,
              },
            }),
          _.createElement(X, {
            ...J,
            ref: F,
            isRoot: !0,
            hasBackground: K,
            appearance: Z,
            accentColor: G,
            grayColor: ee,
            panelBackground: er,
            radius: ei,
            scaling: eu,
            onAppearanceChange: Y,
            onAccentColorChange: Q,
            onGrayColorChange: et,
            onPanelBackgroundChange: en,
            onRadiusChange: eo,
            onScalingChange: ea,
          })
        );
      });
      Z.displayName = "ThemeRoot";
      let X = _.forwardRef((D, F) => {
        var B, R, U, H, J, Z;
        let X = _.useContext(K),
          {
            asChild: Y,
            isRoot: G,
            hasBackground: Q,
            appearance: ee = null !== (B = null == X ? void 0 : X.appearance) &&
            void 0 !== B
              ? B
              : W.yT.appearance.default,
            accentColor: et = null !==
              (R = null == X ? void 0 : X.accentColor) && void 0 !== R
              ? R
              : W.yT.accentColor.default,
            grayColor: er = null !==
              (U = null == X ? void 0 : X.resolvedGrayColor) && void 0 !== U
              ? U
              : W.yT.grayColor.default,
            panelBackground: en = null !==
              (H = null == X ? void 0 : X.panelBackground) && void 0 !== H
              ? H
              : W.yT.panelBackground.default,
            radius: ei = null !== (J = null == X ? void 0 : X.radius) &&
            void 0 !== J
              ? J
              : W.yT.radius.default,
            scaling: eo = null !== (Z = null == X ? void 0 : X.scaling) &&
            void 0 !== Z
              ? Z
              : W.yT.scaling.default,
            onAppearanceChange: eu = noop,
            onAccentColorChange: ea = noop,
            onGrayColorChange: es = noop,
            onPanelBackgroundChange: ec = noop,
            onRadiusChange: ef = noop,
            onScalingChange: ed = noop,
            ...eh
          } = D,
          ep = Y ? V.g7 : "div",
          eg = "auto" === er ? (0, W.Gh)(et) : er,
          em = void 0 !== D.appearance && "inherit" !== D.appearance,
          ey = void 0 !== D.grayColor,
          eD = !G && (!0 === Q || (!1 !== Q && (em || ey)));
        return _.createElement(
          K.Provider,
          {
            value: _.useMemo(
              () => ({
                appearance: ee,
                accentColor: et,
                grayColor: er,
                resolvedGrayColor: eg,
                panelBackground: en,
                radius: ei,
                scaling: eo,
                onAppearanceChange: eu,
                onAccentColorChange: ea,
                onGrayColorChange: es,
                onPanelBackgroundChange: ec,
                onRadiusChange: ef,
                onScalingChange: ed,
              }),
              [ee, et, er, eg, en, ei, eo, eu, ea, es, ec, ef, ed]
            ),
          },
          _.createElement(ep, {
            "data-is-root-theme": G ? "true" : "false",
            "data-accent-color": et,
            "data-gray-color": eg,
            "data-has-background": eD ? "true" : "false",
            "data-panel-background": en,
            "data-radius": ei,
            "data-scaling": eo,
            ref: F,
            ...eh,
            className: N()(
              "radix-themes",
              { light: !G && "light" === ee, dark: !G && "dark" === ee },
              eh.className
            ),
          })
        );
      });
      function updateThemeAppearanceClass(D) {
        if ("inherit" === D) return;
        let F = document.documentElement;
        (F.classList.contains("light-theme") ||
          F.classList.contains("dark-theme")) &&
          (F.classList.remove("light-theme", "dark-theme"),
          (F.style.colorScheme = D),
          F.classList.add(`${D}-theme`)),
          (F.classList.contains("light") || F.classList.contains("dark")) &&
            (F.classList.remove("light", "dark"),
            (F.style.colorScheme = D),
            F.classList.add(D));
      }
      X.displayName = "ThemeImpl";
    },
    6489: function (D, F) {
      "use strict";
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ (F.Q = parse), (F.q = serialize);
      var B = decodeURIComponent,
        _ = encodeURIComponent,
        R = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function parse(D, F) {
        if ("string" != typeof D)
          throw TypeError("argument str must be a string");
        for (
          var _ = {}, R = F || {}, N = D.split(";"), U = R.decode || B, H = 0;
          H < N.length;
          H++
        ) {
          var V = N[H],
            W = V.indexOf("=");
          if (!(W < 0)) {
            var K = V.substring(0, W).trim();
            if (void 0 == _[K]) {
              var J = V.substring(W + 1, V.length).trim();
              '"' === J[0] && (J = J.slice(1, -1)), (_[K] = tryDecode(J, U));
            }
          }
        }
        return _;
      }
      function serialize(D, F, B) {
        var N = B || {},
          U = N.encode || _;
        if ("function" != typeof U) throw TypeError("option encode is invalid");
        if (!R.test(D)) throw TypeError("argument name is invalid");
        var H = U(F);
        if (H && !R.test(H)) throw TypeError("argument val is invalid");
        var V = D + "=" + H;
        if (null != N.maxAge) {
          var W = N.maxAge - 0;
          if (isNaN(W) || !isFinite(W))
            throw TypeError("option maxAge is invalid");
          V += "; Max-Age=" + Math.floor(W);
        }
        if (N.domain) {
          if (!R.test(N.domain)) throw TypeError("option domain is invalid");
          V += "; Domain=" + N.domain;
        }
        if (N.path) {
          if (!R.test(N.path)) throw TypeError("option path is invalid");
          V += "; Path=" + N.path;
        }
        if (N.expires) {
          if ("function" != typeof N.expires.toUTCString)
            throw TypeError("option expires is invalid");
          V += "; Expires=" + N.expires.toUTCString();
        }
        if (
          (N.httpOnly && (V += "; HttpOnly"),
          N.secure && (V += "; Secure"),
          N.sameSite)
        )
          switch (
            "string" == typeof N.sameSite
              ? N.sameSite.toLowerCase()
              : N.sameSite
          ) {
            case !0:
            case "strict":
              V += "; SameSite=Strict";
              break;
            case "lax":
              V += "; SameSite=Lax";
              break;
            case "none":
              V += "; SameSite=None";
              break;
            default:
              throw TypeError("option sameSite is invalid");
          }
        return V;
      }
      function tryDecode(D, F) {
        try {
          return F(D);
        } catch (F) {
          return D;
        }
      }
    },
    8679: function (D, F, B) {
      "use strict";
      var _ = B(9864),
        R = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        N = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        U = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        H = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        V = {};
      function getStatics(D) {
        return _.isMemo(D) ? H : V[D.$$typeof] || R;
      }
      (V[_.ForwardRef] = U), (V[_.Memo] = H);
      var W = Object.defineProperty,
        K = Object.getOwnPropertyNames,
        J = Object.getOwnPropertySymbols,
        Z = Object.getOwnPropertyDescriptor,
        X = Object.getPrototypeOf,
        Y = Object.prototype;
      function hoistNonReactStatics(D, F, B) {
        if ("string" != typeof F) {
          if (Y) {
            var _ = X(F);
            _ && _ !== Y && hoistNonReactStatics(D, _, B);
          }
          var R = K(F);
          J && (R = R.concat(J(F)));
          for (
            var U = getStatics(D), H = getStatics(F), V = 0;
            V < R.length;
            ++V
          ) {
            var G = R[V];
            if (!N[G] && !(B && B[G]) && !(H && H[G]) && !(U && U[G])) {
              var Q = Z(F, G);
              try {
                W(D, G, Q);
              } catch (D) {}
            }
          }
        }
        return D;
      }
      D.exports = hoistNonReactStatics;
    },
    1142: function (D) {
      !(function (F, B) {
        D.exports = B();
      })(0, function () {
        "use strict";
        function createCommonjsModule(D, F) {
          return D((F = { exports: {} }), F.exports), F.exports;
        }
        var D,
          F,
          B,
          _,
          R,
          N,
          U,
          H,
          V,
          W,
          K,
          J,
          Z,
          X,
          Y = createCommonjsModule(function (D) {
            var F = (D.exports =
              "undefined" != typeof window && window.Math == Math
                ? window
                : "undefined" != typeof self && self.Math == Math
                ? self
                : Function("return this")());
            "number" == typeof __g && (__g = F);
          }),
          G = createCommonjsModule(function (D) {
            var F = (D.exports = { version: "2.6.5" });
            "number" == typeof __e && (__e = F);
          });
        G.version;
        var _isObject = function (D) {
            return "object" == typeof D ? null !== D : "function" == typeof D;
          },
          _anObject = function (D) {
            if (!_isObject(D)) throw TypeError(D + " is not an object!");
            return D;
          },
          _fails = function (D) {
            try {
              return !!D();
            } catch (D) {
              return !0;
            }
          },
          Q = !_fails(function () {
            return (
              7 !=
              Object.defineProperty({}, "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          }),
          ee = Y.document,
          et = _isObject(ee) && _isObject(ee.createElement),
          _domCreate = function (D) {
            return et ? ee.createElement(D) : {};
          },
          er =
            !Q &&
            !_fails(function () {
              return (
                7 !=
                Object.defineProperty(_domCreate("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            }),
          _toPrimitive = function (D, F) {
            var B, _;
            if (!_isObject(D)) return D;
            if (
              (F &&
                "function" == typeof (B = D.toString) &&
                !_isObject((_ = B.call(D)))) ||
              ("function" == typeof (B = D.valueOf) &&
                !_isObject((_ = B.call(D)))) ||
              (!F &&
                "function" == typeof (B = D.toString) &&
                !_isObject((_ = B.call(D))))
            )
              return _;
            throw TypeError("Can't convert object to primitive value");
          },
          en = Object.defineProperty,
          ei = {
            f: Q
              ? Object.defineProperty
              : function (D, F, B) {
                  if (
                    (_anObject(D), (F = _toPrimitive(F, !0)), _anObject(B), er)
                  )
                    try {
                      return en(D, F, B);
                    } catch (D) {}
                  if ("get" in B || "set" in B)
                    throw TypeError("Accessors not supported!");
                  return "value" in B && (D[F] = B.value), D;
                },
          },
          _propertyDesc = function (D, F) {
            return {
              enumerable: !(1 & D),
              configurable: !(2 & D),
              writable: !(4 & D),
              value: F,
            };
          },
          eo = Q
            ? function (D, F, B) {
                return ei.f(D, F, _propertyDesc(1, B));
              }
            : function (D, F, B) {
                return (D[F] = B), D;
              },
          eu = {}.hasOwnProperty,
          _has = function (D, F) {
            return eu.call(D, F);
          },
          ea = 0,
          es = Math.random(),
          _uid = function (D) {
            return "Symbol(".concat(
              void 0 === D ? "" : D,
              ")_",
              (++ea + es).toString(36)
            );
          },
          ec = !1,
          ef = createCommonjsModule(function (D) {
            var F = "__core-js_shared__",
              B = Y[F] || (Y[F] = {});
            (D.exports = function (D, F) {
              return B[D] || (B[D] = void 0 !== F ? F : {});
            })("versions", []).push({
              version: G.version,
              mode: ec ? "pure" : "global",
              copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)",
            });
          })("native-function-to-string", Function.toString),
          ed = createCommonjsModule(function (D) {
            var F = _uid("src"),
              B = "toString",
              _ = ("" + ef).split(B);
            (G.inspectSource = function (D) {
              return ef.call(D);
            }),
              (D.exports = function (D, B, R, N) {
                var U = "function" == typeof R;
                U && (_has(R, "name") || eo(R, "name", B)),
                  D[B] !== R &&
                    (U &&
                      (_has(R, F) ||
                        eo(R, F, D[B] ? "" + D[B] : _.join(String(B)))),
                    D === Y
                      ? (D[B] = R)
                      : N
                      ? D[B]
                        ? (D[B] = R)
                        : eo(D, B, R)
                      : (delete D[B], eo(D, B, R)));
              })(Function.prototype, B, function () {
                return ("function" == typeof this && this[F]) || ef.call(this);
              });
          }),
          _aFunction = function (D) {
            if ("function" != typeof D)
              throw TypeError(D + " is not a function!");
            return D;
          },
          _ctx = function (D, F, B) {
            if ((_aFunction(D), void 0 === F)) return D;
            switch (B) {
              case 1:
                return function (B) {
                  return D.call(F, B);
                };
              case 2:
                return function (B, _) {
                  return D.call(F, B, _);
                };
              case 3:
                return function (B, _, R) {
                  return D.call(F, B, _, R);
                };
            }
            return function () {
              return D.apply(F, arguments);
            };
          },
          eh = "prototype",
          $export = function (D, F, B) {
            var _,
              R,
              N,
              U,
              H = D & $export.F,
              V = D & $export.G,
              W = D & $export.S,
              K = D & $export.P,
              J = D & $export.B,
              Z = V ? Y : W ? Y[F] || (Y[F] = {}) : (Y[F] || {})[eh],
              X = V ? G : G[F] || (G[F] = {}),
              Q = X[eh] || (X[eh] = {});
            for (_ in (V && (B = F), B))
              (N = ((R = !H && Z && void 0 !== Z[_]) ? Z : B)[_]),
                (U =
                  J && R
                    ? _ctx(N, Y)
                    : K && "function" == typeof N
                    ? _ctx(Function.call, N)
                    : N),
                Z && ed(Z, _, N, D & $export.U),
                X[_] != N && eo(X, _, U),
                K && Q[_] != N && (Q[_] = N);
          };
        (Y.core = G),
          ($export.F = 1),
          ($export.G = 2),
          ($export.S = 4),
          ($export.P = 8),
          ($export.B = 16),
          ($export.W = 32),
          ($export.U = 64),
          ($export.R = 128);
        var ep = $export,
          eg = Math.ceil,
          em = Math.floor,
          _toInteger = function (D) {
            return isNaN((D = +D)) ? 0 : (D > 0 ? em : eg)(D);
          },
          _defined = function (D) {
            if (void 0 == D) throw TypeError("Can't call method on  " + D);
            return D;
          },
          ey = (function (D) {
            return function (F, B) {
              var _,
                R,
                N = String(_defined(F)),
                U = _toInteger(B),
                H = N.length;
              return U < 0 || U >= H
                ? D
                  ? ""
                  : void 0
                : (_ = N.charCodeAt(U)) < 55296 ||
                  _ > 56319 ||
                  U + 1 === H ||
                  (R = N.charCodeAt(U + 1)) < 56320 ||
                  R > 57343
                ? D
                  ? N.charAt(U)
                  : _
                : D
                ? N.slice(U, U + 2)
                : ((_ - 55296) << 10) + (R - 56320) + 65536;
            };
          })(!1);
        ep(ep.P, "String", {
          codePointAt: function (D) {
            return ey(this, D);
          },
        }),
          G.String.codePointAt;
        var eD = Math.max,
          eE = Math.min,
          _toAbsoluteIndex = function (D, F) {
            return (D = _toInteger(D)) < 0 ? eD(D + F, 0) : eE(D, F);
          },
          eC = String.fromCharCode,
          eb = String.fromCodePoint;
        ep(ep.S + ep.F * (!!eb && 1 != eb.length), "String", {
          fromCodePoint: function (D) {
            for (
              var F, B = arguments, _ = [], R = arguments.length, N = 0;
              R > N;

            ) {
              if (_toAbsoluteIndex((F = +B[N++]), 1114111) !== F)
                throw RangeError(F + " is not a valid code point");
              _.push(
                F < 65536
                  ? eC(F)
                  : eC(((F -= 65536) >> 10) + 55296, (F % 1024) + 56320)
              );
            }
            return _.join("");
          },
        }),
          G.String.fromCodePoint;
        var eA = {
            Space_Separator: /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
            ID_Start:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
            ID_Continue:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
          },
          ew = {
            isSpaceSeparator: function (D) {
              return "string" == typeof D && eA.Space_Separator.test(D);
            },
            isIdStartChar: function (D) {
              return (
                "string" == typeof D &&
                ((D >= "a" && D <= "z") ||
                  (D >= "A" && D <= "Z") ||
                  "$" === D ||
                  "_" === D ||
                  eA.ID_Start.test(D))
              );
            },
            isIdContinueChar: function (D) {
              return (
                "string" == typeof D &&
                ((D >= "a" && D <= "z") ||
                  (D >= "A" && D <= "Z") ||
                  (D >= "0" && D <= "9") ||
                  "$" === D ||
                  "_" === D ||
                  "‌" === D ||
                  "‍" === D ||
                  eA.ID_Continue.test(D))
              );
            },
            isDigit: function (D) {
              return "string" == typeof D && /[0-9]/.test(D);
            },
            isHexDigit: function (D) {
              return "string" == typeof D && /[0-9A-Fa-f]/.test(D);
            },
          };
        function internalize(D, F, B) {
          var _ = D[F];
          if (null != _ && "object" == typeof _) {
            if (Array.isArray(_))
              for (var R = 0; R < _.length; R++) {
                var N = String(R),
                  U = internalize(_, N, B);
                void 0 === U
                  ? delete _[N]
                  : Object.defineProperty(_, N, {
                      value: U,
                      writable: !0,
                      enumerable: !0,
                      configurable: !0,
                    });
              }
            else
              for (var H in _) {
                var V = internalize(_, H, B);
                void 0 === V
                  ? delete _[H]
                  : Object.defineProperty(_, H, {
                      value: V,
                      writable: !0,
                      enumerable: !0,
                      configurable: !0,
                    });
              }
          }
          return B.call(D, F, _);
        }
        function lex() {
          for (W = "default", K = "", J = !1, Z = 1; ; ) {
            X = peek();
            var D = eF[W]();
            if (D) return D;
          }
        }
        function peek() {
          if (D[_]) return String.fromCodePoint(D.codePointAt(_));
        }
        function read() {
          var D = peek();
          return (
            "\n" === D ? (R++, (N = 0)) : D ? (N += D.length) : N++,
            D && (_ += D.length),
            D
          );
        }
        var eF = {
          default: function () {
            switch (X) {
              case "	":
              case "\v":
              case "\f":
              case " ":
              case "\xa0":
              case "\uFEFF":
              case "\n":
              case "\r":
              case "\u2028":
              case "\u2029":
                read();
                return;
              case "/":
                read(), (W = "comment");
                return;
              case void 0:
                return read(), newToken("eof");
            }
            if (ew.isSpaceSeparator(X)) {
              read();
              return;
            }
            return eF[F]();
          },
          comment: function () {
            switch (X) {
              case "*":
                read(), (W = "multiLineComment");
                return;
              case "/":
                read(), (W = "singleLineComment");
                return;
            }
            throw invalidChar(read());
          },
          multiLineComment: function () {
            switch (X) {
              case "*":
                read(), (W = "multiLineCommentAsterisk");
                return;
              case void 0:
                throw invalidChar(read());
            }
            read();
          },
          multiLineCommentAsterisk: function () {
            switch (X) {
              case "*":
                read();
                return;
              case "/":
                read(), (W = "default");
                return;
              case void 0:
                throw invalidChar(read());
            }
            read(), (W = "multiLineComment");
          },
          singleLineComment: function () {
            switch (X) {
              case "\n":
              case "\r":
              case "\u2028":
              case "\u2029":
                read(), (W = "default");
                return;
              case void 0:
                return read(), newToken("eof");
            }
            read();
          },
          value: function () {
            switch (X) {
              case "{":
              case "[":
                return newToken("punctuator", read());
              case "n":
                return read(), literal("ull"), newToken("null", null);
              case "t":
                return read(), literal("rue"), newToken("boolean", !0);
              case "f":
                return read(), literal("alse"), newToken("boolean", !1);
              case "-":
              case "+":
                "-" === read() && (Z = -1), (W = "sign");
                return;
              case ".":
                (K = read()), (W = "decimalPointLeading");
                return;
              case "0":
                (K = read()), (W = "zero");
                return;
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                (K = read()), (W = "decimalInteger");
                return;
              case "I":
                return read(), literal("nfinity"), newToken("numeric", 1 / 0);
              case "N":
                return read(), literal("aN"), newToken("numeric", NaN);
              case '"':
              case "'":
                (J = '"' === read()), (K = ""), (W = "string");
                return;
            }
            throw invalidChar(read());
          },
          identifierNameStartEscape: function () {
            if ("u" !== X) throw invalidChar(read());
            read();
            var D = unicodeEscape();
            switch (D) {
              case "$":
              case "_":
                break;
              default:
                if (!ew.isIdStartChar(D)) throw invalidIdentifier();
            }
            (K += D), (W = "identifierName");
          },
          identifierName: function () {
            switch (X) {
              case "$":
              case "_":
              case "‌":
              case "‍":
                K += read();
                return;
              case "\\":
                read(), (W = "identifierNameEscape");
                return;
            }
            if (ew.isIdContinueChar(X)) {
              K += read();
              return;
            }
            return newToken("identifier", K);
          },
          identifierNameEscape: function () {
            if ("u" !== X) throw invalidChar(read());
            read();
            var D = unicodeEscape();
            switch (D) {
              case "$":
              case "_":
              case "‌":
              case "‍":
                break;
              default:
                if (!ew.isIdContinueChar(D)) throw invalidIdentifier();
            }
            (K += D), (W = "identifierName");
          },
          sign: function () {
            switch (X) {
              case ".":
                (K = read()), (W = "decimalPointLeading");
                return;
              case "0":
                (K = read()), (W = "zero");
                return;
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                (K = read()), (W = "decimalInteger");
                return;
              case "I":
                return (
                  read(), literal("nfinity"), newToken("numeric", Z * (1 / 0))
                );
              case "N":
                return read(), literal("aN"), newToken("numeric", NaN);
            }
            throw invalidChar(read());
          },
          zero: function () {
            switch (X) {
              case ".":
                (K += read()), (W = "decimalPoint");
                return;
              case "e":
              case "E":
                (K += read()), (W = "decimalExponent");
                return;
              case "x":
              case "X":
                (K += read()), (W = "hexadecimal");
                return;
            }
            return newToken("numeric", 0 * Z);
          },
          decimalInteger: function () {
            switch (X) {
              case ".":
                (K += read()), (W = "decimalPoint");
                return;
              case "e":
              case "E":
                (K += read()), (W = "decimalExponent");
                return;
            }
            if (ew.isDigit(X)) {
              K += read();
              return;
            }
            return newToken("numeric", Z * Number(K));
          },
          decimalPointLeading: function () {
            if (ew.isDigit(X)) {
              (K += read()), (W = "decimalFraction");
              return;
            }
            throw invalidChar(read());
          },
          decimalPoint: function () {
            switch (X) {
              case "e":
              case "E":
                (K += read()), (W = "decimalExponent");
                return;
            }
            if (ew.isDigit(X)) {
              (K += read()), (W = "decimalFraction");
              return;
            }
            return newToken("numeric", Z * Number(K));
          },
          decimalFraction: function () {
            switch (X) {
              case "e":
              case "E":
                (K += read()), (W = "decimalExponent");
                return;
            }
            if (ew.isDigit(X)) {
              K += read();
              return;
            }
            return newToken("numeric", Z * Number(K));
          },
          decimalExponent: function () {
            switch (X) {
              case "+":
              case "-":
                (K += read()), (W = "decimalExponentSign");
                return;
            }
            if (ew.isDigit(X)) {
              (K += read()), (W = "decimalExponentInteger");
              return;
            }
            throw invalidChar(read());
          },
          decimalExponentSign: function () {
            if (ew.isDigit(X)) {
              (K += read()), (W = "decimalExponentInteger");
              return;
            }
            throw invalidChar(read());
          },
          decimalExponentInteger: function () {
            if (ew.isDigit(X)) {
              K += read();
              return;
            }
            return newToken("numeric", Z * Number(K));
          },
          hexadecimal: function () {
            if (ew.isHexDigit(X)) {
              (K += read()), (W = "hexadecimalInteger");
              return;
            }
            throw invalidChar(read());
          },
          hexadecimalInteger: function () {
            if (ew.isHexDigit(X)) {
              K += read();
              return;
            }
            return newToken("numeric", Z * Number(K));
          },
          string: function () {
            switch (X) {
              case "\\":
                read(), (K += escape());
                return;
              case '"':
                if (J) return read(), newToken("string", K);
                K += read();
                return;
              case "'":
                if (!J) return read(), newToken("string", K);
                K += read();
                return;
              case "\n":
              case "\r":
              case void 0:
                throw invalidChar(read());
              case "\u2028":
              case "\u2029":
                separatorChar(X);
            }
            K += read();
          },
          start: function () {
            switch (X) {
              case "{":
              case "[":
                return newToken("punctuator", read());
            }
            W = "value";
          },
          beforePropertyName: function () {
            switch (X) {
              case "$":
              case "_":
                (K = read()), (W = "identifierName");
                return;
              case "\\":
                read(), (W = "identifierNameStartEscape");
                return;
              case "}":
                return newToken("punctuator", read());
              case '"':
              case "'":
                (J = '"' === read()), (W = "string");
                return;
            }
            if (ew.isIdStartChar(X)) {
              (K += read()), (W = "identifierName");
              return;
            }
            throw invalidChar(read());
          },
          afterPropertyName: function () {
            if (":" === X) return newToken("punctuator", read());
            throw invalidChar(read());
          },
          beforePropertyValue: function () {
            W = "value";
          },
          afterPropertyValue: function () {
            switch (X) {
              case ",":
              case "}":
                return newToken("punctuator", read());
            }
            throw invalidChar(read());
          },
          beforeArrayValue: function () {
            if ("]" === X) return newToken("punctuator", read());
            W = "value";
          },
          afterArrayValue: function () {
            switch (X) {
              case ",":
              case "]":
                return newToken("punctuator", read());
            }
            throw invalidChar(read());
          },
          end: function () {
            throw invalidChar(read());
          },
        };
        function newToken(D, F) {
          return { type: D, value: F, line: R, column: N };
        }
        function literal(D) {
          for (var F = 0, B = D; F < B.length; F += 1) {
            var _ = B[F];
            if (peek() !== _) throw invalidChar(read());
            read();
          }
        }
        function escape() {
          switch (peek()) {
            case "b":
              return read(), "\b";
            case "f":
              return read(), "\f";
            case "n":
              return read(), "\n";
            case "r":
              return read(), "\r";
            case "t":
              return read(), "	";
            case "v":
              return read(), "\v";
            case "0":
              if ((read(), ew.isDigit(peek()))) throw invalidChar(read());
              return "\x00";
            case "x":
              return read(), hexEscape();
            case "u":
              return read(), unicodeEscape();
            case "\n":
            case "\u2028":
            case "\u2029":
              return read(), "";
            case "\r":
              return read(), "\n" === peek() && read(), "";
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case void 0:
              throw invalidChar(read());
          }
          return read();
        }
        function hexEscape() {
          var D = "",
            F = peek();
          if (
            !ew.isHexDigit(F) ||
            ((D += read()), (F = peek()), !ew.isHexDigit(F))
          )
            throw invalidChar(read());
          return String.fromCodePoint(parseInt((D += read()), 16));
        }
        function unicodeEscape() {
          for (var D = "", F = 4; F-- > 0; ) {
            var B = peek();
            if (!ew.isHexDigit(B)) throw invalidChar(read());
            D += read();
          }
          return String.fromCodePoint(parseInt(D, 16));
        }
        var eB = {
          start: function () {
            if ("eof" === U.type) throw invalidEOF();
            push();
          },
          beforePropertyName: function () {
            switch (U.type) {
              case "identifier":
              case "string":
                (H = U.value), (F = "afterPropertyName");
                return;
              case "punctuator":
                pop();
                return;
              case "eof":
                throw invalidEOF();
            }
          },
          afterPropertyName: function () {
            if ("eof" === U.type) throw invalidEOF();
            F = "beforePropertyValue";
          },
          beforePropertyValue: function () {
            if ("eof" === U.type) throw invalidEOF();
            push();
          },
          beforeArrayValue: function () {
            if ("eof" === U.type) throw invalidEOF();
            if ("punctuator" === U.type && "]" === U.value) {
              pop();
              return;
            }
            push();
          },
          afterPropertyValue: function () {
            if ("eof" === U.type) throw invalidEOF();
            switch (U.value) {
              case ",":
                F = "beforePropertyName";
                return;
              case "}":
                pop();
            }
          },
          afterArrayValue: function () {
            if ("eof" === U.type) throw invalidEOF();
            switch (U.value) {
              case ",":
                F = "beforeArrayValue";
                return;
              case "]":
                pop();
            }
          },
          end: function () {},
        };
        function push() {
          var D;
          switch (U.type) {
            case "punctuator":
              switch (U.value) {
                case "{":
                  D = {};
                  break;
                case "[":
                  D = [];
              }
              break;
            case "null":
            case "boolean":
            case "numeric":
            case "string":
              D = U.value;
          }
          if (void 0 === V) V = D;
          else {
            var _ = B[B.length - 1];
            Array.isArray(_)
              ? _.push(D)
              : Object.defineProperty(_, H, {
                  value: D,
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                });
          }
          if (null !== D && "object" == typeof D)
            B.push(D),
              (F = Array.isArray(D)
                ? "beforeArrayValue"
                : "beforePropertyName");
          else {
            var R = B[B.length - 1];
            F =
              null == R
                ? "end"
                : Array.isArray(R)
                ? "afterArrayValue"
                : "afterPropertyValue";
          }
        }
        function pop() {
          B.pop();
          var D = B[B.length - 1];
          F =
            null == D
              ? "end"
              : Array.isArray(D)
              ? "afterArrayValue"
              : "afterPropertyValue";
        }
        function invalidChar(D) {
          return void 0 === D
            ? syntaxError("JSON5: invalid end of input at " + R + ":" + N)
            : syntaxError(
                "JSON5: invalid character '" +
                  formatChar(D) +
                  "' at " +
                  R +
                  ":" +
                  N
              );
        }
        function invalidEOF() {
          return syntaxError("JSON5: invalid end of input at " + R + ":" + N);
        }
        function invalidIdentifier() {
          return (
            (N -= 5),
            syntaxError("JSON5: invalid identifier character at " + R + ":" + N)
          );
        }
        function separatorChar(D) {
          console.warn(
            "JSON5: '" +
              formatChar(D) +
              "' in strings is not valid ECMAScript; consider escaping"
          );
        }
        function formatChar(D) {
          var F = {
            "'": "\\'",
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "\v": "\\v",
            "\x00": "\\0",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
          };
          if (F[D]) return F[D];
          if (D < " ") {
            var B = D.charCodeAt(0).toString(16);
            return "\\x" + ("00" + B).substring(B.length);
          }
          return D;
        }
        function syntaxError(D) {
          var F = SyntaxError(D);
          return (F.lineNumber = R), (F.columnNumber = N), F;
        }
        return {
          parse: function (W, K) {
            (D = String(W)),
              (F = "start"),
              (B = []),
              (_ = 0),
              (R = 1),
              (N = 0),
              (U = void 0),
              (H = void 0),
              (V = void 0);
            do (U = lex()), eB[F]();
            while ("eof" !== U.type);
            return "function" == typeof K ? internalize({ "": V }, "", K) : V;
          },
          stringify: function (D, F, B) {
            var _,
              R,
              N,
              U = [],
              H = "",
              V = "";
            if (
              (null == F ||
                "object" != typeof F ||
                Array.isArray(F) ||
                ((B = F.space), (N = F.quote), (F = F.replacer)),
              "function" == typeof F)
            )
              R = F;
            else if (Array.isArray(F)) {
              _ = [];
              for (var W = 0, K = F; W < K.length; W += 1) {
                var J = K[W],
                  Z = void 0;
                "string" == typeof J
                  ? (Z = J)
                  : ("number" == typeof J ||
                      J instanceof String ||
                      J instanceof Number) &&
                    (Z = String(J)),
                  void 0 !== Z && 0 > _.indexOf(Z) && _.push(Z);
              }
            }
            return (
              B instanceof Number
                ? (B = Number(B))
                : B instanceof String && (B = String(B)),
              "number" == typeof B
                ? B > 0 &&
                  ((B = Math.min(10, Math.floor(B))),
                  (V = "          ".substr(0, B)))
                : "string" == typeof B && (V = B.substr(0, 10)),
              serializeProperty("", { "": D })
            );
            function serializeProperty(D, F) {
              var B = F[D];
              switch (
                (null != B &&
                  ("function" == typeof B.toJSON5
                    ? (B = B.toJSON5(D))
                    : "function" == typeof B.toJSON && (B = B.toJSON(D))),
                R && (B = R.call(F, D, B)),
                B instanceof Number
                  ? (B = Number(B))
                  : B instanceof String
                  ? (B = String(B))
                  : B instanceof Boolean && (B = B.valueOf()),
                B)
              ) {
                case null:
                  return "null";
                case !0:
                  return "true";
                case !1:
                  return "false";
              }
              return "string" == typeof B
                ? quoteString(B, !1)
                : "number" == typeof B
                ? String(B)
                : "object" == typeof B
                ? Array.isArray(B)
                  ? serializeArray(B)
                  : serializeObject(B)
                : void 0;
            }
            function quoteString(D) {
              for (
                var F = { "'": 0.1, '"': 0.2 },
                  B = {
                    "'": "\\'",
                    '"': '\\"',
                    "\\": "\\\\",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "	": "\\t",
                    "\v": "\\v",
                    "\x00": "\\0",
                    "\u2028": "\\u2028",
                    "\u2029": "\\u2029",
                  },
                  _ = "",
                  R = 0;
                R < D.length;
                R++
              ) {
                var U = D[R];
                switch (U) {
                  case "'":
                  case '"':
                    F[U]++, (_ += U);
                    continue;
                  case "\x00":
                    if (ew.isDigit(D[R + 1])) {
                      _ += "\\x00";
                      continue;
                    }
                }
                if (B[U]) {
                  _ += B[U];
                  continue;
                }
                if (U < " ") {
                  var H = U.charCodeAt(0).toString(16);
                  _ += "\\x" + ("00" + H).substring(H.length);
                  continue;
                }
                _ += U;
              }
              var V =
                N ||
                Object.keys(F).reduce(function (D, B) {
                  return F[D] < F[B] ? D : B;
                });
              return (_ = _.replace(RegExp(V, "g"), B[V])), V + _ + V;
            }
            function serializeObject(D) {
              if (U.indexOf(D) >= 0)
                throw TypeError("Converting circular structure to JSON5");
              U.push(D);
              var F,
                B,
                R = H;
              H += V;
              for (
                var N = _ || Object.keys(D), W = [], K = 0, J = N;
                K < J.length;
                K += 1
              ) {
                var Z = J[K],
                  X = serializeProperty(Z, D);
                if (void 0 !== X) {
                  var Y = serializeKey(Z) + ":";
                  "" !== V && (Y += " "), (Y += X), W.push(Y);
                }
              }
              if (0 === W.length) F = "{}";
              else if ("" === V) F = "{" + (B = W.join(",")) + "}";
              else {
                var G = ",\n" + H;
                (B = W.join(G)), (F = "{\n" + H + B + ",\n" + R + "}");
              }
              return U.pop(), (H = R), F;
            }
            function serializeKey(D) {
              if (0 === D.length) return quoteString(D, !0);
              var F = String.fromCodePoint(D.codePointAt(0));
              if (!ew.isIdStartChar(F)) return quoteString(D, !0);
              for (var B = F.length; B < D.length; B++)
                if (
                  !ew.isIdContinueChar(String.fromCodePoint(D.codePointAt(B)))
                )
                  return quoteString(D, !0);
              return D;
            }
            function serializeArray(D) {
              if (U.indexOf(D) >= 0)
                throw TypeError("Converting circular structure to JSON5");
              U.push(D);
              var F,
                B = H;
              H += V;
              for (var _ = [], R = 0; R < D.length; R++) {
                var N = serializeProperty(String(R), D);
                _.push(void 0 !== N ? N : "null");
              }
              if (0 === _.length) F = "[]";
              else if ("" === V) F = "[" + _.join(",") + "]";
              else {
                var W = ",\n" + H,
                  K = _.join(W);
                F = "[\n" + H + K + ",\n" + B + "]";
              }
              return U.pop(), (H = B), F;
            }
          },
        };
      });
    },
    1118: function (D, F, B) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return B(4522);
        },
      ]);
    },
    4522: function (D, F, B) {
      "use strict";
      B.r(F),
        B.d(F, {
          default: function () {
            return MyApp;
          },
        });
      var _ = B(1965);
      B(6363);
      var R = B(5893),
        N = B(7294);
      let U = ["light", "dark"],
        H = "(prefers-color-scheme: dark)",
        V = "undefined" == typeof window,
        W = (0, N.createContext)(void 0),
        K = { setTheme: (D) => {}, themes: [] },
        y = () => {
          var D;
          return null !== (D = (0, N.useContext)(W)) && void 0 !== D ? D : K;
        },
        $ = (D) =>
          (0, N.useContext)(W)
            ? N.createElement(N.Fragment, null, D.children)
            : N.createElement(f, D),
        J = ["light", "dark"],
        f = ({
          forcedTheme: D,
          disableTransitionOnChange: F = !1,
          enableSystem: B = !0,
          enableColorScheme: _ = !0,
          storageKey: R = "theme",
          themes: V = J,
          defaultTheme: K = B ? "system" : "light",
          attribute: X = "data-theme",
          value: Y,
          children: G,
          nonce: Q,
        }) => {
          let [ee, et] = (0, N.useState)(() => S(R, K)),
            [er, en] = (0, N.useState)(() => S(R)),
            ei = Y ? Object.values(Y) : V,
            eo = (0, N.useCallback)((D) => {
              let R = D;
              if (!R) return;
              "system" === D && B && (R = p());
              let N = Y ? Y[R] : R,
                H = F ? b() : null,
                V = document.documentElement;
              if (
                ("class" === X
                  ? (V.classList.remove(...ei), N && V.classList.add(N))
                  : N
                  ? V.setAttribute(X, N)
                  : V.removeAttribute(X),
                _)
              ) {
                let D = U.includes(K) ? K : null,
                  F = U.includes(R) ? R : D;
                V.style.colorScheme = F;
              }
              null == H || H();
            }, []),
            eu = (0, N.useCallback)(
              (D) => {
                et(D);
                try {
                  localStorage.setItem(R, D);
                } catch (D) {}
              },
              [D]
            ),
            ea = (0, N.useCallback)(
              (F) => {
                let _ = p(F);
                en(_), "system" === ee && B && !D && eo("system");
              },
              [ee, D]
            );
          (0, N.useEffect)(() => {
            let D = window.matchMedia(H);
            return D.addListener(ea), ea(D), () => D.removeListener(ea);
          }, [ea]),
            (0, N.useEffect)(() => {
              let e = (D) => {
                D.key === R && eu(D.newValue || K);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [eu]),
            (0, N.useEffect)(() => {
              eo(null != D ? D : ee);
            }, [D, ee]);
          let es = (0, N.useMemo)(
            () => ({
              theme: ee,
              setTheme: eu,
              forcedTheme: D,
              resolvedTheme: "system" === ee ? er : ee,
              themes: B ? [...V, "system"] : V,
              systemTheme: B ? er : void 0,
            }),
            [ee, eu, D, er, B, V]
          );
          return N.createElement(
            W.Provider,
            { value: es },
            N.createElement(Z, {
              forcedTheme: D,
              disableTransitionOnChange: F,
              enableSystem: B,
              enableColorScheme: _,
              storageKey: R,
              themes: V,
              defaultTheme: K,
              attribute: X,
              value: Y,
              children: G,
              attrs: ei,
              nonce: Q,
            }),
            G
          );
        },
        Z = (0, N.memo)(
          ({
            forcedTheme: D,
            storageKey: F,
            attribute: B,
            enableSystem: _,
            enableColorScheme: R,
            defaultTheme: V,
            value: W,
            attrs: K,
            nonce: J,
          }) => {
            let Z = "system" === V,
              X =
                "class" === B
                  ? `var d=document.documentElement,c=d.classList;c.remove(${K.map(
                      (D) => `'${D}'`
                    ).join(",")});`
                  : `var d=document.documentElement,n='${B}',s='setAttribute';`,
              Y = R
                ? U.includes(V) && V
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${V}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              $ = (D, F = !1, _ = !0) => {
                let N = W ? W[D] : D,
                  H = F ? D + "|| ''" : `'${N}'`,
                  V = "";
                return (
                  R &&
                    _ &&
                    !F &&
                    U.includes(D) &&
                    (V += `d.style.colorScheme = '${D}';`),
                  "class" === B
                    ? (V += F || N ? `c.add(${H})` : "null")
                    : N && (V += `d[s](n,${H})`),
                  V
                );
              },
              G = D
                ? `!function(){${X}${$(D)}}()`
                : _
                ? `!function(){try{${X}var e=localStorage.getItem('${F}');if('system'===e||(!e&&${Z})){var t='${H}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$(
                    "dark"
                  )}}else{${$("light")}}}else if(e){${
                    W ? `var x=${JSON.stringify(W)};` : ""
                  }${$(W ? "x[e]" : "e", !0)}}${
                    Z ? "" : "else{" + $(V, !1, !1) + "}"
                  }${Y}}catch(e){}}()`
                : `!function(){try{${X}var e=localStorage.getItem('${F}');if(e){${
                    W ? `var x=${JSON.stringify(W)};` : ""
                  }${$(W ? "x[e]" : "e", !0)}}else{${$(
                    V,
                    !1,
                    !1
                  )};}${Y}}catch(t){}}();`;
            return N.createElement("script", {
              nonce: J,
              dangerouslySetInnerHTML: { __html: G },
            });
          },
          () => !0
        ),
        S = (D, F) => {
          let B;
          if (!V) {
            try {
              B = localStorage.getItem(D) || void 0;
            } catch (D) {}
            return B || F;
          }
        },
        b = () => {
          let D = document.createElement("style");
          return (
            D.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(D),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(D);
                }, 1);
            }
          );
        },
        p = (D) => (
          D || (D = window.matchMedia(H)), D.matches ? "dark" : "light"
        );
      var X = B(687);
      function RadixThemesColorModeProvider(D) {
        let { children: F } = D,
          { theme: B, setTheme: _ } = y(),
          [U, H] = (0, N.useState)(X.NR);
        (0, N.useEffect)(() => {
          H(B);
        }, [B]);
        let toggleColorMode = () => {
          _("light" === B ? "dark" : "light");
        };
        return (0, R.jsx)(X.kc.Provider, {
          value: [U, toggleColorMode],
          children: F,
        });
      }
      var Y = B(2465);
      B(4627);
      var G = { styles: { global: { ":root": {}, body: {} } } };
      function AppWrap(D) {
        let { children: F } = D;
        return (0, _.tZ)(RadixThemesColorModeProvider, {
          children: (0, _.tZ)(Y.Q2, {
            accentColor: "blue",
            css: { ...G.styles.global[":root"], ...G.styles.global.body },
            children: (0, _.tZ)(N.Fragment, { children: F }),
          }),
        });
      }
      function MyApp(D) {
        let { Component: F, pageProps: B } = D;
        return (0, _.tZ)($, {
          defaultTheme: X.NR,
          storageKey: "chakra-ui-color-mode",
          attribute: "class",
          children: (0, _.tZ)(AppWrap, {
            children: (0, _.tZ)(X.X9, {
              children: (0, _.tZ)(X.sO, { children: (0, _.tZ)(F, { ...B }) }),
            }),
          }),
        });
      }
    },
    687: function (D, F, B) {
      "use strict";
      B.d(F, {
        DR: function () {
          return J;
        },
        E3: function () {
          return U;
        },
        Jd: function () {
          return onLoadInternalEvent;
        },
        M4: function () {
          return K;
        },
        NR: function () {
          return H;
        },
        X9: function () {
          return StateProvider;
        },
        Xs: function () {
          return initialEvents;
        },
        kc: function () {
          return V;
        },
        sO: function () {
          return EventLoopProvider;
        },
        wh: function () {
          return X;
        },
      });
      var _ = B(5893),
        R = B(7294),
        N = B(6608);
      let U = {
          state: {
            is_hydrated: !1,
            router: {
              session: { client_token: "", client_ip: "", session_id: "" },
              headers: {
                host: "",
                origin: "",
                upgrade: "",
                connection: "",
                pragma: "",
                cache_control: "",
                user_agent: "",
                sec_websocket_version: "",
                sec_websocket_key: "",
                sec_websocket_extensions: "",
                accept_encoding: "",
                accept_language: "",
              },
              page: {
                host: "",
                path: "",
                raw_path: "",
                full_path: "",
                full_raw_path: "",
                params: {},
              },
            },
          },
          "state.state": {},
          "state.update_vars_internal_state": {},
          "state.on_load_internal_state": {},
        },
        H = "light",
        V = (0, R.createContext)(null),
        W = (0, R.createContext)(null),
        K = {
          state: (0, R.createContext)(null),
          state__state: (0, R.createContext)(null),
          state__update_vars_internal_state: (0, R.createContext)(null),
          state__on_load_internal_state: (0, R.createContext)(null),
        },
        J = (0, R.createContext)(null),
        Z = { cookies: {}, local_storage: {} },
        X = "state",
        onLoadInternalEvent = () => {
          let D = [],
            F = (0, N.QG)(Z);
          return (
            F &&
              0 !== Object.keys(F).length &&
              D.push(
                (0, N.ju)(
                  "state.update_vars_internal_state.update_vars_internal",
                  { vars: F }
                )
              ),
            D.push((0, N.ju)("state.on_load_internal_state.on_load_internal")),
            D
          );
        },
        initialEvents = () => [
          (0, N.ju)("state.hydrate"),
          ...onLoadInternalEvent(),
        ];
      function EventLoopProvider(D) {
        let { children: F } = D,
          B = (0, R.useContext)(W),
          [U, H] = (0, N.ef)(B, initialEvents, Z);
        return (0, _.jsx)(J.Provider, { value: [U, H], children: F });
      }
      function StateProvider(D) {
        let { children: F } = D,
          [B, H] = (0, R.useReducer)(N.Bf, U.state),
          [V, J] = (0, R.useReducer)(N.Bf, U["state.state"]),
          [Z, X] = (0, R.useReducer)(
            N.Bf,
            U["state.update_vars_internal_state"]
          ),
          [Y, G] = (0, R.useReducer)(N.Bf, U["state.on_load_internal_state"]),
          Q = (0, R.useMemo)(
            () => ({
              state: H,
              "state.state": J,
              "state.update_vars_internal_state": X,
              "state.on_load_internal_state": G,
            }),
            []
          );
        return (0, _.jsx)(K.state.Provider, {
          value: B,
          children: (0, _.jsx)(K.state__state.Provider, {
            value: V,
            children: (0, _.jsx)(K.state__update_vars_internal_state.Provider, {
              value: Z,
              children: (0, _.jsx)(K.state__on_load_internal_state.Provider, {
                value: Y,
                children: (0, _.jsx)(W.Provider, { value: Q, children: F }),
              }),
            }),
          }),
        });
      }
    },
    6608: function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      let token;
      __webpack_require__.d(__webpack_exports__, {
        Bf: function () {
          return applyDelta;
        },
        LH: function () {
          return getBackendURL;
        },
        QG: function () {
          return hydrateClientStorage;
        },
        ef: function () {
          return useEventLoop;
        },
        ju: function () {
          return Event;
        },
        oA: function () {
          return isTrue;
        },
      });
      var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6154),
        socket_io_client__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(9367),
        json5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1142),
        json5__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          json5__WEBPACK_IMPORTED_MODULE_1__
        ),
        _env_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3954),
        universal_cookie__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(5885),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7294),
        next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1163),
        next_router__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__),
        utils_context_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(687);
      let EVENTURL = _env_json__WEBPACK_IMPORTED_MODULE_2__.Ks,
        UPLOADURL = _env_json__WEBPACK_IMPORTED_MODULE_2__.uk,
        SAME_DOMAIN_HOSTNAMES = [
          "localhost",
          "0.0.0.0",
          "::",
          "0:0:0:0:0:0:0:0",
        ],
        TOKEN_KEY = "token",
        cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6__.Z(),
        refs = {},
        event_processing = !1,
        event_queue = [],
        upload_controllers = {},
        generateUUID = () => {
          let D = new Date().getTime(),
            F =
              (performance && performance.now && 1e3 * performance.now()) || 0;
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            (B) => {
              let _ = 16 * Math.random();
              return (
                D > 0
                  ? ((_ = (D + _) % 16 | 0), (D = Math.floor(D / 16)))
                  : ((_ = (F + _) % 16 | 0), (F = Math.floor(F / 16))),
                ("x" == B ? _ : (7 & _) | 8).toString(16)
              );
            }
          );
        },
        getToken = () =>
          token ||
          (window.sessionStorage.getItem(TOKEN_KEY) ||
            window.sessionStorage.setItem(TOKEN_KEY, generateUUID()),
          (token = window.sessionStorage.getItem(TOKEN_KEY))),
        getBackendURL = (D) => {
          let F = new URL(D);
          if (SAME_DOMAIN_HOSTNAMES.includes(F.hostname)) {
            let D = window.location.hostname;
            (F.hostname = D),
              "https:" === window.location.protocol &&
                ("ws:" === F.protocol
                  ? (F.protocol = "wss:")
                  : "http:" === F.protocol && (F.protocol = "https:"),
                (F.port = ""));
          }
          return F;
        },
        applyDelta = (D, F) => ({ ...D, ...F }),
        applyEvent = async (event, socket) => {
          if ("_redirect" == event.name)
            return (
              event.payload.external
                ? window.open(event.payload.path, "_blank")
                : next_router__WEBPACK_IMPORTED_MODULE_4___default().push(
                    event.payload.path
                  ),
              !1
            );
          if ("_console" == event.name)
            return console.log(event.payload.message), !1;
          if ("_remove_cookie" == event.name)
            return (
              cookies.remove(event.payload.key, { ...event.payload.options }),
              queueEvents(
                (0, utils_context_js__WEBPACK_IMPORTED_MODULE_5__.Xs)(),
                socket
              ),
              !1
            );
          if ("_clear_local_storage" == event.name)
            return (
              localStorage.clear(),
              queueEvents(
                (0, utils_context_js__WEBPACK_IMPORTED_MODULE_5__.Xs)(),
                socket
              ),
              !1
            );
          if ("_remove_local_storage" == event.name)
            return (
              localStorage.removeItem(event.payload.key),
              queueEvents(
                (0, utils_context_js__WEBPACK_IMPORTED_MODULE_5__.Xs)(),
                socket
              ),
              !1
            );
          if ("_set_clipboard" == event.name) {
            let content = event.payload.content;
            return navigator.clipboard.writeText(content), !1;
          }
          if ("_download" == event.name) {
            let a = document.createElement("a");
            return (
              (a.hidden = !0),
              (a.href = event.payload.url.replace(
                "${getBackendURL(env.UPLOAD)}",
                getBackendURL(_env_json__WEBPACK_IMPORTED_MODULE_2__.uk)
              )),
              (a.download = event.payload.filename),
              a.click(),
              a.remove(),
              !1
            );
          }
          if ("_alert" == event.name) return alert(event.payload.message), !1;
          if ("_set_focus" == event.name) {
            let ref =
              event.payload.ref in refs
                ? refs[event.payload.ref]
                : event.payload.ref;
            return ref.current.focus(), !1;
          }
          if ("_set_value" == event.name) {
            let ref =
              event.payload.ref in refs
                ? refs[event.payload.ref]
                : event.payload.ref;
            return ref.current && (ref.current.value = event.payload.value), !1;
          }
          if ("_call_script" == event.name) {
            try {
              let eval_result = eval(event.payload.javascript_code);
              event.payload.callback &&
                (eval_result && "function" == typeof eval_result.then
                  ? eval(event.payload.callback)(await eval_result)
                  : eval(event.payload.callback)(eval_result));
            } catch (e) {
              console.log("_call_script", e);
            }
            return !1;
          }
          return (
            (event.token = getToken()),
            (void 0 === event.router_data ||
              0 === Object.keys(event.router_data).length) &&
              (event.router_data = ((D) => {
                let { pathname: F, query: B, asPath: _ } = D;
                return { pathname: F, query: B, asPath: _ };
              })(next_router__WEBPACK_IMPORTED_MODULE_4___default())),
            !!socket &&
              (socket.emit(
                "event",
                JSON.stringify(event, (D, F) => (void 0 === F ? null : F))
              ),
              !0)
          );
        },
        applyRestEvent = async (D, F) => {
          let B = !1;
          return "uploadFiles" == D.handler
            ? (uploadFiles(
                D.name,
                D.payload.files,
                D.payload.upload_id,
                D.payload.on_upload_progress,
                F
              ),
              !1)
            : B;
        },
        queueEvents = async (D, F) => {
          event_queue.push(...D), await processEvent(F.current);
        },
        processEvent = async (D) => {
          if (!D || 0 === event_queue.length || event_processing) return;
          event_processing = !0;
          let F = event_queue.shift(),
            B = !1;
          (B = F.handler
            ? await applyRestEvent(F, D)
            : await applyEvent(F, D)) ||
            ((event_processing = !1), await processEvent(D));
        },
        connect = async function (D, F, B, _) {
          let R =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {},
            N = getBackendURL(EVENTURL);
          function checkVisibility1() {
            "visible" === document.visibilityState &&
              (D.current.connected
                ? console.log("Socket is reconnected ")
                : (console.log(
                    "Socket is disconnected, attempting to reconnect "
                  ),
                  D.current.connect()));
          }
          (D.current = (0, socket_io_client__WEBPACK_IMPORTED_MODULE_0__.ZP)(
            N.href,
            { path: N.pathname, transports: B, autoUnref: !1 }
          )),
            D.current.on("connect", () => {
              _([]);
            }),
            D.current.on("connect_error", (D) => {
              _((F) => [F.slice(-9), D]);
            }),
            D.current.on("event", (B) => {
              let _ = json5__WEBPACK_IMPORTED_MODULE_1___default().parse(B);
              for (let D in _.delta) F[D](_.delta[D]);
              applyClientStorageDelta(R, _.delta),
                (event_processing = !_.final),
                _.events && queueEvents(_.events, D);
            }),
            document.addEventListener("visibilitychange", checkVisibility1);
        },
        uploadFiles = async (D, F, B, _, R) => {
          if (void 0 === F || 0 === F.length) return !1;
          if (upload_controllers[B])
            return console.log("Upload already in progress for ", B), !1;
          let N = 0,
            eventHandler1 = (D) => {
              let F = D.event.target.responseText.trim().split("\n");
              F.slice(N).map((F) => {
                try {
                  R._callbacks.$event.map((D) => {
                    D(F);
                  }),
                    (N += 1);
                } catch (B) {
                  1 === D.progress && console.log("Error parsing chunk", F, B);
                  return;
                }
              });
            },
            U = new AbortController(),
            H = {
              headers: {
                "Reflex-Client-Token": getToken(),
                "Reflex-Event-Handler": D,
              },
              signal: U.signal,
              onDownloadProgress: eventHandler1,
            };
          _ && (H.onUploadProgress = _);
          let V = new FormData();
          F.forEach((D) => {
            V.append("files", D, D.path || D.name);
          }),
            (upload_controllers[B] = U);
          try {
            return await axios__WEBPACK_IMPORTED_MODULE_7__.Z.post(
              getBackendURL(UPLOADURL),
              V,
              H
            );
          } catch (D) {
            return (
              D.response
                ? console.log(D.response.data)
                : D.request
                ? console.log(D.request)
                : console.log(D.message),
              !1
            );
          } finally {
            delete upload_controllers[B];
          }
        },
        Event = function (D) {
          let F =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            B =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          return { name: D, payload: F, handler: B };
        },
        hydrateClientStorage = (D) => {
          let F = {};
          if (D.cookies)
            for (let B in D.cookies) {
              let _ = D.cookies[B],
                R = _.name || B,
                N = cookies.get(R);
              void 0 !== N && (F[B] = cookies.get(R));
            }
          if (D.local_storage)
            for (let B in D.local_storage) {
              let _ = D.local_storage[B],
                R = localStorage.getItem(_.name || B);
              null !== R && (F[B] = R);
            }
          return D.cookies || D.local_storage ? F : {};
        },
        applyClientStorageDelta = (D, F) => {
          let B = Object.keys(F).filter((D) => 1 === D.split(".").length);
          if (1 === B.length) {
            let D = F[B[0]];
            if (void 0 !== D.is_hydrated && !D.is_hydrated) return;
          }
          for (let B in F)
            for (let _ in F[B]) {
              let R = "".concat(B, ".").concat(_);
              if (D.cookies && R in D.cookies) {
                let N = { ...D.cookies[R] },
                  U = N.name || R;
                delete N.name, cookies.set(U, F[B][_], N);
              } else if (D.local_storage && R in D.local_storage) {
                let N = D.local_storage[R];
                localStorage.setItem(N.name || R, F[B][_]);
              }
            }
        },
        useEventLoop = function (D) {
          let F =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : () => [],
            B =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            _ = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),
            R = (0, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),
            [N, U] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
            addEvents1 = (D, F, B) => {
              (null == B ? void 0 : B.preventDefault) &&
                (null == F ? void 0 : F.preventDefault) &&
                F.preventDefault(),
                (null == B ? void 0 : B.stopPropagation) &&
                  (null == F ? void 0 : F.stopPropagation) &&
                  F.stopPropagation(),
                queueEvents(D, _);
            },
            H = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(!1);
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
              if (R.isReady && !H.current) {
                let D = F();
                addEvents1(
                  D.map((D) => ({
                    ...D,
                    router_data: ((D) => {
                      let { pathname: F, query: B, asPath: _ } = D;
                      return { pathname: F, query: B, asPath: _ };
                    })(R),
                  }))
                ),
                  (H.current = !0);
              }
            }, [R.isReady]),
            (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
              R.isReady &&
                Object.keys(utils_context_js__WEBPACK_IMPORTED_MODULE_5__.E3)
                  .length > 1 &&
                (_.current || connect(_, D, ["websocket", "polling"], U, B),
                (async () => {
                  for (; event_queue.length > 0 && !event_processing; )
                    await processEvent(_.current);
                })());
            }),
            (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
              let D = {};
              if (B.local_storage)
                for (let F in B.local_storage) {
                  let _ = B.local_storage[F];
                  if (_.sync) {
                    let B = _.name || F;
                    D[B] = F;
                  }
                }
              let handleStorage1 = (F) => {
                if (D[F.key]) {
                  let B = {};
                  B[D[F.key]] = F.newValue;
                  let _ = Event(
                    "".concat(
                      utils_context_js__WEBPACK_IMPORTED_MODULE_5__.wh,
                      ".update_vars_internal_state.update_vars_internal"
                    ),
                    { vars: B }
                  );
                  addEvents1([_], F);
                }
              };
              return (
                window.addEventListener("storage", handleStorage1),
                () => window.removeEventListener("storage", handleStorage1)
              );
            }),
            (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
              let change_complete1 = () =>
                addEvents1(
                  (0, utils_context_js__WEBPACK_IMPORTED_MODULE_5__.Jd)()
                );
              return (
                R.events.on("routeChangeComplete", change_complete1),
                () => {
                  R.events.off("routeChangeComplete", change_complete1);
                }
              );
            }, [R]),
            [addEvents1, N]
          );
        },
        isTrue = (D) => (Array.isArray(D) ? D.length > 0 : !!D),
        getRefValue = (D) => {
          var F, B, _, R, N;
          if (D && D.current)
            return "checkbox" == D.current.type
              ? D.current.checked
              : (null === (F = D.current.className) || void 0 === F
                  ? void 0
                  : F.includes("rt-CheckboxButton")) ||
                (null === (B = D.current.className) || void 0 === B
                  ? void 0
                  : B.includes("rt-SwitchButton"))
              ? "true" == D.current.ariaChecked
              : (
                  null === (_ = D.current.className) || void 0 === _
                    ? void 0
                    : _.includes("rt-SliderRoot")
                )
              ? null === (R = D.current.querySelector(".rt-SliderThumb")) ||
                void 0 === R
                ? void 0
                : R.ariaValueNow
              : D.current.value ||
                (D.current.querySelector &&
                  D.current.querySelector(":checked") &&
                  (null === (N = D.current.querySelector(":checked")) ||
                  void 0 === N
                    ? void 0
                    : N.value));
        },
        getRefValues = (D) => {
          if (D)
            return D.map((D) =>
              D.current
                ? D.current.value || D.current.getAttribute("aria-valuenow")
                : null
            );
        },
        spreadArraysOrObjects = (D, F) => {
          if (Array.isArray(D) && Array.isArray(F)) return [...D, ...F];
          if ("object" == typeof D && "object" == typeof F)
            return { ...D, ...F };
          throw Error("Both parameters must be either arrays or objects.");
        };
    },
    1876: function (D) {
      var F = "/";
      !(function () {
        var B = {
            675: function (D, F) {
              "use strict";
              (F.byteLength = byteLength),
                (F.toByteArray = toByteArray),
                (F.fromByteArray = fromByteArray);
              for (
                var B = [],
                  _ = [],
                  R = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  N =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  U = 0,
                  H = N.length;
                U < H;
                ++U
              )
                (B[U] = N[U]), (_[N.charCodeAt(U)] = U);
              function getLens(D) {
                var F = D.length;
                if (F % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var B = D.indexOf("=");
                -1 === B && (B = F);
                var _ = B === F ? 0 : 4 - (B % 4);
                return [B, _];
              }
              function byteLength(D) {
                var F = getLens(D),
                  B = F[0],
                  _ = F[1];
                return ((B + _) * 3) / 4 - _;
              }
              function _byteLength(D, F, B) {
                return ((F + B) * 3) / 4 - B;
              }
              function toByteArray(D) {
                var F,
                  B,
                  N = getLens(D),
                  U = N[0],
                  H = N[1],
                  V = new R(_byteLength(D, U, H)),
                  W = 0,
                  K = H > 0 ? U - 4 : U;
                for (B = 0; B < K; B += 4)
                  (F =
                    (_[D.charCodeAt(B)] << 18) |
                    (_[D.charCodeAt(B + 1)] << 12) |
                    (_[D.charCodeAt(B + 2)] << 6) |
                    _[D.charCodeAt(B + 3)]),
                    (V[W++] = (F >> 16) & 255),
                    (V[W++] = (F >> 8) & 255),
                    (V[W++] = 255 & F);
                return (
                  2 === H &&
                    ((F =
                      (_[D.charCodeAt(B)] << 2) |
                      (_[D.charCodeAt(B + 1)] >> 4)),
                    (V[W++] = 255 & F)),
                  1 === H &&
                    ((F =
                      (_[D.charCodeAt(B)] << 10) |
                      (_[D.charCodeAt(B + 1)] << 4) |
                      (_[D.charCodeAt(B + 2)] >> 2)),
                    (V[W++] = (F >> 8) & 255),
                    (V[W++] = 255 & F)),
                  V
                );
              }
              function tripletToBase64(D) {
                return (
                  B[(D >> 18) & 63] +
                  B[(D >> 12) & 63] +
                  B[(D >> 6) & 63] +
                  B[63 & D]
                );
              }
              function encodeChunk(D, F, B) {
                for (var _ = [], R = F; R < B; R += 3)
                  _.push(
                    tripletToBase64(
                      ((D[R] << 16) & 16711680) +
                        ((D[R + 1] << 8) & 65280) +
                        (255 & D[R + 2])
                    )
                  );
                return _.join("");
              }
              function fromByteArray(D) {
                for (
                  var F,
                    _ = D.length,
                    R = _ % 3,
                    N = [],
                    U = 16383,
                    H = 0,
                    V = _ - R;
                  H < V;
                  H += U
                )
                  N.push(encodeChunk(D, H, H + U > V ? V : H + U));
                return (
                  1 === R
                    ? N.push(B[(F = D[_ - 1]) >> 2] + B[(F << 4) & 63] + "==")
                    : 2 === R &&
                      N.push(
                        B[(F = (D[_ - 2] << 8) + D[_ - 1]) >> 10] +
                          B[(F >> 4) & 63] +
                          B[(F << 2) & 63] +
                          "="
                      ),
                  N.join("")
                );
              }
              (_["-".charCodeAt(0)] = 62), (_["_".charCodeAt(0)] = 63);
            },
            72: function (D, F, B) {
              "use strict";
              /*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */ var _ = B(675),
                R = B(783),
                N =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              (F.Buffer = Buffer),
                (F.SlowBuffer = SlowBuffer),
                (F.INSPECT_MAX_BYTES = 50);
              var U = 2147483647;
              function typedArraySupport() {
                try {
                  var D = new Uint8Array(1),
                    F = {
                      foo: function () {
                        return 42;
                      },
                    };
                  return (
                    Object.setPrototypeOf(F, Uint8Array.prototype),
                    Object.setPrototypeOf(D, F),
                    42 === D.foo()
                  );
                } catch (D) {
                  return !1;
                }
              }
              function createBuffer(D) {
                if (D > U)
                  throw RangeError(
                    'The value "' + D + '" is invalid for option "size"'
                  );
                var F = new Uint8Array(D);
                return Object.setPrototypeOf(F, Buffer.prototype), F;
              }
              function Buffer(D, F, B) {
                if ("number" == typeof D) {
                  if ("string" == typeof F)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return allocUnsafe(D);
                }
                return from(D, F, B);
              }
              function from(D, F, B) {
                if ("string" == typeof D) return fromString(D, F);
                if (ArrayBuffer.isView(D)) return fromArrayLike(D);
                if (null == D)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof D
                  );
                if (
                  isInstance(D, ArrayBuffer) ||
                  (D && isInstance(D.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (isInstance(D, SharedArrayBuffer) ||
                      (D && isInstance(D.buffer, SharedArrayBuffer))))
                )
                  return fromArrayBuffer(D, F, B);
                if ("number" == typeof D)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var _ = D.valueOf && D.valueOf();
                if (null != _ && _ !== D) return Buffer.from(_, F, B);
                var R = fromObject(D);
                if (R) return R;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof D[Symbol.toPrimitive]
                )
                  return Buffer.from(D[Symbol.toPrimitive]("string"), F, B);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof D
                );
              }
              function assertSize(D) {
                if ("number" != typeof D)
                  throw TypeError('"size" argument must be of type number');
                if (D < 0)
                  throw RangeError(
                    'The value "' + D + '" is invalid for option "size"'
                  );
              }
              function alloc(D, F, B) {
                return (assertSize(D), D <= 0)
                  ? createBuffer(D)
                  : void 0 !== F
                  ? "string" == typeof B
                    ? createBuffer(D).fill(F, B)
                    : createBuffer(D).fill(F)
                  : createBuffer(D);
              }
              function allocUnsafe(D) {
                return assertSize(D), createBuffer(D < 0 ? 0 : 0 | checked(D));
              }
              function fromString(D, F) {
                if (
                  (("string" != typeof F || "" === F) && (F = "utf8"),
                  !Buffer.isEncoding(F))
                )
                  throw TypeError("Unknown encoding: " + F);
                var B = 0 | byteLength(D, F),
                  _ = createBuffer(B),
                  R = _.write(D, F);
                return R !== B && (_ = _.slice(0, R)), _;
              }
              function fromArrayLike(D) {
                for (
                  var F = D.length < 0 ? 0 : 0 | checked(D.length),
                    B = createBuffer(F),
                    _ = 0;
                  _ < F;
                  _ += 1
                )
                  B[_] = 255 & D[_];
                return B;
              }
              function fromArrayBuffer(D, F, B) {
                var _;
                if (F < 0 || D.byteLength < F)
                  throw RangeError('"offset" is outside of buffer bounds');
                if (D.byteLength < F + (B || 0))
                  throw RangeError('"length" is outside of buffer bounds');
                return (
                  Object.setPrototypeOf(
                    (_ =
                      void 0 === F && void 0 === B
                        ? new Uint8Array(D)
                        : void 0 === B
                        ? new Uint8Array(D, F)
                        : new Uint8Array(D, F, B)),
                    Buffer.prototype
                  ),
                  _
                );
              }
              function fromObject(D) {
                if (Buffer.isBuffer(D)) {
                  var F = 0 | checked(D.length),
                    B = createBuffer(F);
                  return 0 === B.length || D.copy(B, 0, 0, F), B;
                }
                return void 0 !== D.length
                  ? "number" != typeof D.length || numberIsNaN(D.length)
                    ? createBuffer(0)
                    : fromArrayLike(D)
                  : "Buffer" === D.type && Array.isArray(D.data)
                  ? fromArrayLike(D.data)
                  : void 0;
              }
              function checked(D) {
                if (D >= U)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x" +
                      U.toString(16) +
                      " bytes"
                  );
                return 0 | D;
              }
              function SlowBuffer(D) {
                return +D != D && (D = 0), Buffer.alloc(+D);
              }
              function byteLength(D, F) {
                if (Buffer.isBuffer(D)) return D.length;
                if (ArrayBuffer.isView(D) || isInstance(D, ArrayBuffer))
                  return D.byteLength;
                if ("string" != typeof D)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof D
                  );
                var B = D.length,
                  _ = arguments.length > 2 && !0 === arguments[2];
                if (!_ && 0 === B) return 0;
                for (var R = !1; ; )
                  switch (F) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return B;
                    case "utf8":
                    case "utf-8":
                      return utf8ToBytes(D).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * B;
                    case "hex":
                      return B >>> 1;
                    case "base64":
                      return base64ToBytes(D).length;
                    default:
                      if (R) return _ ? -1 : utf8ToBytes(D).length;
                      (F = ("" + F).toLowerCase()), (R = !0);
                  }
              }
              function slowToString(D, F, B) {
                var _ = !1;
                if (
                  ((void 0 === F || F < 0) && (F = 0),
                  F > this.length ||
                    ((void 0 === B || B > this.length) && (B = this.length),
                    B <= 0 || (B >>>= 0) <= (F >>>= 0)))
                )
                  return "";
                for (D || (D = "utf8"); ; )
                  switch (D) {
                    case "hex":
                      return hexSlice(this, F, B);
                    case "utf8":
                    case "utf-8":
                      return utf8Slice(this, F, B);
                    case "ascii":
                      return asciiSlice(this, F, B);
                    case "latin1":
                    case "binary":
                      return latin1Slice(this, F, B);
                    case "base64":
                      return base64Slice(this, F, B);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return utf16leSlice(this, F, B);
                    default:
                      if (_) throw TypeError("Unknown encoding: " + D);
                      (D = (D + "").toLowerCase()), (_ = !0);
                  }
              }
              function swap(D, F, B) {
                var _ = D[F];
                (D[F] = D[B]), (D[B] = _);
              }
              function bidirectionalIndexOf(D, F, B, _, R) {
                if (0 === D.length) return -1;
                if (
                  ("string" == typeof B
                    ? ((_ = B), (B = 0))
                    : B > 2147483647
                    ? (B = 2147483647)
                    : B < -2147483648 && (B = -2147483648),
                  numberIsNaN((B = +B)) && (B = R ? 0 : D.length - 1),
                  B < 0 && (B = D.length + B),
                  B >= D.length)
                ) {
                  if (R) return -1;
                  B = D.length - 1;
                } else if (B < 0) {
                  if (!R) return -1;
                  B = 0;
                }
                if (
                  ("string" == typeof F && (F = Buffer.from(F, _)),
                  Buffer.isBuffer(F))
                )
                  return 0 === F.length ? -1 : arrayIndexOf(D, F, B, _, R);
                if ("number" == typeof F)
                  return ((F &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? R
                      ? Uint8Array.prototype.indexOf.call(D, F, B)
                      : Uint8Array.prototype.lastIndexOf.call(D, F, B)
                    : arrayIndexOf(D, [F], B, _, R);
                throw TypeError("val must be string, number or Buffer");
              }
              function arrayIndexOf(D, F, B, _, R) {
                var N,
                  U = 1,
                  H = D.length,
                  V = F.length;
                if (
                  void 0 !== _ &&
                  ("ucs2" === (_ = String(_).toLowerCase()) ||
                    "ucs-2" === _ ||
                    "utf16le" === _ ||
                    "utf-16le" === _)
                ) {
                  if (D.length < 2 || F.length < 2) return -1;
                  (U = 2), (H /= 2), (V /= 2), (B /= 2);
                }
                function read(D, F) {
                  return 1 === U ? D[F] : D.readUInt16BE(F * U);
                }
                if (R) {
                  var W = -1;
                  for (N = B; N < H; N++)
                    if (read(D, N) === read(F, -1 === W ? 0 : N - W)) {
                      if ((-1 === W && (W = N), N - W + 1 === V)) return W * U;
                    } else -1 !== W && (N -= N - W), (W = -1);
                } else
                  for (B + V > H && (B = H - V), N = B; N >= 0; N--) {
                    for (var K = !0, J = 0; J < V; J++)
                      if (read(D, N + J) !== read(F, J)) {
                        K = !1;
                        break;
                      }
                    if (K) return N;
                  }
                return -1;
              }
              function hexWrite(D, F, B, _) {
                B = Number(B) || 0;
                var R = D.length - B;
                _ ? (_ = Number(_)) > R && (_ = R) : (_ = R);
                var N = F.length;
                _ > N / 2 && (_ = N / 2);
                for (var U = 0; U < _; ++U) {
                  var H = parseInt(F.substr(2 * U, 2), 16);
                  if (numberIsNaN(H)) break;
                  D[B + U] = H;
                }
                return U;
              }
              function utf8Write(D, F, B, _) {
                return blitBuffer(utf8ToBytes(F, D.length - B), D, B, _);
              }
              function asciiWrite(D, F, B, _) {
                return blitBuffer(asciiToBytes(F), D, B, _);
              }
              function latin1Write(D, F, B, _) {
                return asciiWrite(D, F, B, _);
              }
              function base64Write(D, F, B, _) {
                return blitBuffer(base64ToBytes(F), D, B, _);
              }
              function ucs2Write(D, F, B, _) {
                return blitBuffer(utf16leToBytes(F, D.length - B), D, B, _);
              }
              function base64Slice(D, F, B) {
                return 0 === F && B === D.length
                  ? _.fromByteArray(D)
                  : _.fromByteArray(D.slice(F, B));
              }
              function utf8Slice(D, F, B) {
                B = Math.min(D.length, B);
                for (var _ = [], R = F; R < B; ) {
                  var N,
                    U,
                    H,
                    V,
                    W = D[R],
                    K = null,
                    J = W > 239 ? 4 : W > 223 ? 3 : W > 191 ? 2 : 1;
                  if (R + J <= B)
                    switch (J) {
                      case 1:
                        W < 128 && (K = W);
                        break;
                      case 2:
                        (192 & (N = D[R + 1])) == 128 &&
                          (V = ((31 & W) << 6) | (63 & N)) > 127 &&
                          (K = V);
                        break;
                      case 3:
                        (N = D[R + 1]),
                          (U = D[R + 2]),
                          (192 & N) == 128 &&
                            (192 & U) == 128 &&
                            (V =
                              ((15 & W) << 12) | ((63 & N) << 6) | (63 & U)) >
                              2047 &&
                            (V < 55296 || V > 57343) &&
                            (K = V);
                        break;
                      case 4:
                        (N = D[R + 1]),
                          (U = D[R + 2]),
                          (H = D[R + 3]),
                          (192 & N) == 128 &&
                            (192 & U) == 128 &&
                            (192 & H) == 128 &&
                            (V =
                              ((15 & W) << 18) |
                              ((63 & N) << 12) |
                              ((63 & U) << 6) |
                              (63 & H)) > 65535 &&
                            V < 1114112 &&
                            (K = V);
                    }
                  null === K
                    ? ((K = 65533), (J = 1))
                    : K > 65535 &&
                      ((K -= 65536),
                      _.push(((K >>> 10) & 1023) | 55296),
                      (K = 56320 | (1023 & K))),
                    _.push(K),
                    (R += J);
                }
                return decodeCodePointsArray(_);
              }
              (F.kMaxLength = U),
                (Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()),
                Buffer.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(Buffer.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (Buffer.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(Buffer.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (Buffer.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (Buffer.poolSize = 8192),
                (Buffer.from = function (D, F, B) {
                  return from(D, F, B);
                }),
                Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(Buffer, Uint8Array),
                (Buffer.alloc = function (D, F, B) {
                  return alloc(D, F, B);
                }),
                (Buffer.allocUnsafe = function (D) {
                  return allocUnsafe(D);
                }),
                (Buffer.allocUnsafeSlow = function (D) {
                  return allocUnsafe(D);
                }),
                (Buffer.isBuffer = function (D) {
                  return (
                    null != D && !0 === D._isBuffer && D !== Buffer.prototype
                  );
                }),
                (Buffer.compare = function (D, F) {
                  if (
                    (isInstance(D, Uint8Array) &&
                      (D = Buffer.from(D, D.offset, D.byteLength)),
                    isInstance(F, Uint8Array) &&
                      (F = Buffer.from(F, F.offset, F.byteLength)),
                    !Buffer.isBuffer(D) || !Buffer.isBuffer(F))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (D === F) return 0;
                  for (
                    var B = D.length, _ = F.length, R = 0, N = Math.min(B, _);
                    R < N;
                    ++R
                  )
                    if (D[R] !== F[R]) {
                      (B = D[R]), (_ = F[R]);
                      break;
                    }
                  return B < _ ? -1 : _ < B ? 1 : 0;
                }),
                (Buffer.isEncoding = function (D) {
                  switch (String(D).toLowerCase()) {
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
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (Buffer.concat = function (D, F) {
                  if (!Array.isArray(D))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === D.length) return Buffer.alloc(0);
                  if (void 0 === F)
                    for (B = 0, F = 0; B < D.length; ++B) F += D[B].length;
                  var B,
                    _ = Buffer.allocUnsafe(F),
                    R = 0;
                  for (B = 0; B < D.length; ++B) {
                    var N = D[B];
                    if (
                      (isInstance(N, Uint8Array) && (N = Buffer.from(N)),
                      !Buffer.isBuffer(N))
                    )
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    N.copy(_, R), (R += N.length);
                  }
                  return _;
                }),
                (Buffer.byteLength = byteLength),
                (Buffer.prototype._isBuffer = !0),
                (Buffer.prototype.swap16 = function () {
                  var D = this.length;
                  if (D % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var F = 0; F < D; F += 2) swap(this, F, F + 1);
                  return this;
                }),
                (Buffer.prototype.swap32 = function () {
                  var D = this.length;
                  if (D % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var F = 0; F < D; F += 4)
                    swap(this, F, F + 3), swap(this, F + 1, F + 2);
                  return this;
                }),
                (Buffer.prototype.swap64 = function () {
                  var D = this.length;
                  if (D % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var F = 0; F < D; F += 8)
                    swap(this, F, F + 7),
                      swap(this, F + 1, F + 6),
                      swap(this, F + 2, F + 5),
                      swap(this, F + 3, F + 4);
                  return this;
                }),
                (Buffer.prototype.toString = function () {
                  var D = this.length;
                  return 0 === D
                    ? ""
                    : 0 == arguments.length
                    ? utf8Slice(this, 0, D)
                    : slowToString.apply(this, arguments);
                }),
                (Buffer.prototype.toLocaleString = Buffer.prototype.toString),
                (Buffer.prototype.equals = function (D) {
                  if (!Buffer.isBuffer(D))
                    throw TypeError("Argument must be a Buffer");
                  return this === D || 0 === Buffer.compare(this, D);
                }),
                (Buffer.prototype.inspect = function () {
                  var D = "",
                    B = F.INSPECT_MAX_BYTES;
                  return (
                    (D = this.toString("hex", 0, B)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > B && (D += " ... "),
                    "<Buffer " + D + ">"
                  );
                }),
                N && (Buffer.prototype[N] = Buffer.prototype.inspect),
                (Buffer.prototype.compare = function (D, F, B, _, R) {
                  if (
                    (isInstance(D, Uint8Array) &&
                      (D = Buffer.from(D, D.offset, D.byteLength)),
                    !Buffer.isBuffer(D))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof D
                    );
                  if (
                    (void 0 === F && (F = 0),
                    void 0 === B && (B = D ? D.length : 0),
                    void 0 === _ && (_ = 0),
                    void 0 === R && (R = this.length),
                    F < 0 || B > D.length || _ < 0 || R > this.length)
                  )
                    throw RangeError("out of range index");
                  if (_ >= R && F >= B) return 0;
                  if (_ >= R) return -1;
                  if (F >= B) return 1;
                  if (
                    ((F >>>= 0), (B >>>= 0), (_ >>>= 0), (R >>>= 0), this === D)
                  )
                    return 0;
                  for (
                    var N = R - _,
                      U = B - F,
                      H = Math.min(N, U),
                      V = this.slice(_, R),
                      W = D.slice(F, B),
                      K = 0;
                    K < H;
                    ++K
                  )
                    if (V[K] !== W[K]) {
                      (N = V[K]), (U = W[K]);
                      break;
                    }
                  return N < U ? -1 : U < N ? 1 : 0;
                }),
                (Buffer.prototype.includes = function (D, F, B) {
                  return -1 !== this.indexOf(D, F, B);
                }),
                (Buffer.prototype.indexOf = function (D, F, B) {
                  return bidirectionalIndexOf(this, D, F, B, !0);
                }),
                (Buffer.prototype.lastIndexOf = function (D, F, B) {
                  return bidirectionalIndexOf(this, D, F, B, !1);
                }),
                (Buffer.prototype.write = function (D, F, B, _) {
                  if (void 0 === F) (_ = "utf8"), (B = this.length), (F = 0);
                  else if (void 0 === B && "string" == typeof F)
                    (_ = F), (B = this.length), (F = 0);
                  else if (isFinite(F))
                    (F >>>= 0),
                      isFinite(B)
                        ? ((B >>>= 0), void 0 === _ && (_ = "utf8"))
                        : ((_ = B), (B = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var R = this.length - F;
                  if (
                    ((void 0 === B || B > R) && (B = R),
                    (D.length > 0 && (B < 0 || F < 0)) || F > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  _ || (_ = "utf8");
                  for (var N = !1; ; )
                    switch (_) {
                      case "hex":
                        return hexWrite(this, D, F, B);
                      case "utf8":
                      case "utf-8":
                        return utf8Write(this, D, F, B);
                      case "ascii":
                        return asciiWrite(this, D, F, B);
                      case "latin1":
                      case "binary":
                        return latin1Write(this, D, F, B);
                      case "base64":
                        return base64Write(this, D, F, B);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return ucs2Write(this, D, F, B);
                      default:
                        if (N) throw TypeError("Unknown encoding: " + _);
                        (_ = ("" + _).toLowerCase()), (N = !0);
                    }
                }),
                (Buffer.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                });
              var H = 4096;
              function decodeCodePointsArray(D) {
                var F = D.length;
                if (F <= H) return String.fromCharCode.apply(String, D);
                for (var B = "", _ = 0; _ < F; )
                  B += String.fromCharCode.apply(String, D.slice(_, (_ += H)));
                return B;
              }
              function asciiSlice(D, F, B) {
                var _ = "";
                B = Math.min(D.length, B);
                for (var R = F; R < B; ++R)
                  _ += String.fromCharCode(127 & D[R]);
                return _;
              }
              function latin1Slice(D, F, B) {
                var _ = "";
                B = Math.min(D.length, B);
                for (var R = F; R < B; ++R) _ += String.fromCharCode(D[R]);
                return _;
              }
              function hexSlice(D, F, B) {
                var _ = D.length;
                (!F || F < 0) && (F = 0), (!B || B < 0 || B > _) && (B = _);
                for (var R = "", N = F; N < B; ++N) R += W[D[N]];
                return R;
              }
              function utf16leSlice(D, F, B) {
                for (var _ = D.slice(F, B), R = "", N = 0; N < _.length; N += 2)
                  R += String.fromCharCode(_[N] + 256 * _[N + 1]);
                return R;
              }
              function checkOffset(D, F, B) {
                if (D % 1 != 0 || D < 0) throw RangeError("offset is not uint");
                if (D + F > B)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function checkInt(D, F, B, _, R, N) {
                if (!Buffer.isBuffer(D))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (F > R || F < N)
                  throw RangeError('"value" argument is out of bounds');
                if (B + _ > D.length) throw RangeError("Index out of range");
              }
              function checkIEEE754(D, F, B, _, R, N) {
                if (B + _ > D.length || B < 0)
                  throw RangeError("Index out of range");
              }
              function writeFloat(D, F, B, _, N) {
                return (
                  (F = +F),
                  (B >>>= 0),
                  N ||
                    checkIEEE754(
                      D,
                      F,
                      B,
                      4,
                      34028234663852886e22,
                      -34028234663852886e22
                    ),
                  R.write(D, F, B, _, 23, 4),
                  B + 4
                );
              }
              function writeDouble(D, F, B, _, N) {
                return (
                  (F = +F),
                  (B >>>= 0),
                  N ||
                    checkIEEE754(
                      D,
                      F,
                      B,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  R.write(D, F, B, _, 52, 8),
                  B + 8
                );
              }
              (Buffer.prototype.slice = function (D, F) {
                var B = this.length;
                (D = ~~D),
                  (F = void 0 === F ? B : ~~F),
                  D < 0 ? (D += B) < 0 && (D = 0) : D > B && (D = B),
                  F < 0 ? (F += B) < 0 && (F = 0) : F > B && (F = B),
                  F < D && (F = D);
                var _ = this.subarray(D, F);
                return Object.setPrototypeOf(_, Buffer.prototype), _;
              }),
                (Buffer.prototype.readUIntLE = function (D, F, B) {
                  (D >>>= 0), (F >>>= 0), B || checkOffset(D, F, this.length);
                  for (var _ = this[D], R = 1, N = 0; ++N < F && (R *= 256); )
                    _ += this[D + N] * R;
                  return _;
                }),
                (Buffer.prototype.readUIntBE = function (D, F, B) {
                  (D >>>= 0), (F >>>= 0), B || checkOffset(D, F, this.length);
                  for (var _ = this[D + --F], R = 1; F > 0 && (R *= 256); )
                    _ += this[D + --F] * R;
                  return _;
                }),
                (Buffer.prototype.readUInt8 = function (D, F) {
                  return (
                    (D >>>= 0), F || checkOffset(D, 1, this.length), this[D]
                  );
                }),
                (Buffer.prototype.readUInt16LE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 2, this.length),
                    this[D] | (this[D + 1] << 8)
                  );
                }),
                (Buffer.prototype.readUInt16BE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 2, this.length),
                    (this[D] << 8) | this[D + 1]
                  );
                }),
                (Buffer.prototype.readUInt32LE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 4, this.length),
                    (this[D] | (this[D + 1] << 8) | (this[D + 2] << 16)) +
                      16777216 * this[D + 3]
                  );
                }),
                (Buffer.prototype.readUInt32BE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 4, this.length),
                    16777216 * this[D] +
                      ((this[D + 1] << 16) | (this[D + 2] << 8) | this[D + 3])
                  );
                }),
                (Buffer.prototype.readIntLE = function (D, F, B) {
                  (D >>>= 0), (F >>>= 0), B || checkOffset(D, F, this.length);
                  for (var _ = this[D], R = 1, N = 0; ++N < F && (R *= 256); )
                    _ += this[D + N] * R;
                  return _ >= (R *= 128) && (_ -= Math.pow(2, 8 * F)), _;
                }),
                (Buffer.prototype.readIntBE = function (D, F, B) {
                  (D >>>= 0), (F >>>= 0), B || checkOffset(D, F, this.length);
                  for (
                    var _ = F, R = 1, N = this[D + --_];
                    _ > 0 && (R *= 256);

                  )
                    N += this[D + --_] * R;
                  return N >= (R *= 128) && (N -= Math.pow(2, 8 * F)), N;
                }),
                (Buffer.prototype.readInt8 = function (D, F) {
                  return ((D >>>= 0),
                  F || checkOffset(D, 1, this.length),
                  128 & this[D])
                    ? -((255 - this[D] + 1) * 1)
                    : this[D];
                }),
                (Buffer.prototype.readInt16LE = function (D, F) {
                  (D >>>= 0), F || checkOffset(D, 2, this.length);
                  var B = this[D] | (this[D + 1] << 8);
                  return 32768 & B ? 4294901760 | B : B;
                }),
                (Buffer.prototype.readInt16BE = function (D, F) {
                  (D >>>= 0), F || checkOffset(D, 2, this.length);
                  var B = this[D + 1] | (this[D] << 8);
                  return 32768 & B ? 4294901760 | B : B;
                }),
                (Buffer.prototype.readInt32LE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 4, this.length),
                    this[D] |
                      (this[D + 1] << 8) |
                      (this[D + 2] << 16) |
                      (this[D + 3] << 24)
                  );
                }),
                (Buffer.prototype.readInt32BE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 4, this.length),
                    (this[D] << 24) |
                      (this[D + 1] << 16) |
                      (this[D + 2] << 8) |
                      this[D + 3]
                  );
                }),
                (Buffer.prototype.readFloatLE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 4, this.length),
                    R.read(this, D, !0, 23, 4)
                  );
                }),
                (Buffer.prototype.readFloatBE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 4, this.length),
                    R.read(this, D, !1, 23, 4)
                  );
                }),
                (Buffer.prototype.readDoubleLE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 8, this.length),
                    R.read(this, D, !0, 52, 8)
                  );
                }),
                (Buffer.prototype.readDoubleBE = function (D, F) {
                  return (
                    (D >>>= 0),
                    F || checkOffset(D, 8, this.length),
                    R.read(this, D, !1, 52, 8)
                  );
                }),
                (Buffer.prototype.writeUIntLE = function (D, F, B, _) {
                  if (((D = +D), (F >>>= 0), (B >>>= 0), !_)) {
                    var R = Math.pow(2, 8 * B) - 1;
                    checkInt(this, D, F, B, R, 0);
                  }
                  var N = 1,
                    U = 0;
                  for (this[F] = 255 & D; ++U < B && (N *= 256); )
                    this[F + U] = (D / N) & 255;
                  return F + B;
                }),
                (Buffer.prototype.writeUIntBE = function (D, F, B, _) {
                  if (((D = +D), (F >>>= 0), (B >>>= 0), !_)) {
                    var R = Math.pow(2, 8 * B) - 1;
                    checkInt(this, D, F, B, R, 0);
                  }
                  var N = B - 1,
                    U = 1;
                  for (this[F + N] = 255 & D; --N >= 0 && (U *= 256); )
                    this[F + N] = (D / U) & 255;
                  return F + B;
                }),
                (Buffer.prototype.writeUInt8 = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 1, 255, 0),
                    (this[F] = 255 & D),
                    F + 1
                  );
                }),
                (Buffer.prototype.writeUInt16LE = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 2, 65535, 0),
                    (this[F] = 255 & D),
                    (this[F + 1] = D >>> 8),
                    F + 2
                  );
                }),
                (Buffer.prototype.writeUInt16BE = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 2, 65535, 0),
                    (this[F] = D >>> 8),
                    (this[F + 1] = 255 & D),
                    F + 2
                  );
                }),
                (Buffer.prototype.writeUInt32LE = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 4, 4294967295, 0),
                    (this[F + 3] = D >>> 24),
                    (this[F + 2] = D >>> 16),
                    (this[F + 1] = D >>> 8),
                    (this[F] = 255 & D),
                    F + 4
                  );
                }),
                (Buffer.prototype.writeUInt32BE = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 4, 4294967295, 0),
                    (this[F] = D >>> 24),
                    (this[F + 1] = D >>> 16),
                    (this[F + 2] = D >>> 8),
                    (this[F + 3] = 255 & D),
                    F + 4
                  );
                }),
                (Buffer.prototype.writeIntLE = function (D, F, B, _) {
                  if (((D = +D), (F >>>= 0), !_)) {
                    var R = Math.pow(2, 8 * B - 1);
                    checkInt(this, D, F, B, R - 1, -R);
                  }
                  var N = 0,
                    U = 1,
                    H = 0;
                  for (this[F] = 255 & D; ++N < B && (U *= 256); )
                    D < 0 && 0 === H && 0 !== this[F + N - 1] && (H = 1),
                      (this[F + N] = (((D / U) >> 0) - H) & 255);
                  return F + B;
                }),
                (Buffer.prototype.writeIntBE = function (D, F, B, _) {
                  if (((D = +D), (F >>>= 0), !_)) {
                    var R = Math.pow(2, 8 * B - 1);
                    checkInt(this, D, F, B, R - 1, -R);
                  }
                  var N = B - 1,
                    U = 1,
                    H = 0;
                  for (this[F + N] = 255 & D; --N >= 0 && (U *= 256); )
                    D < 0 && 0 === H && 0 !== this[F + N + 1] && (H = 1),
                      (this[F + N] = (((D / U) >> 0) - H) & 255);
                  return F + B;
                }),
                (Buffer.prototype.writeInt8 = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 1, 127, -128),
                    D < 0 && (D = 255 + D + 1),
                    (this[F] = 255 & D),
                    F + 1
                  );
                }),
                (Buffer.prototype.writeInt16LE = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 2, 32767, -32768),
                    (this[F] = 255 & D),
                    (this[F + 1] = D >>> 8),
                    F + 2
                  );
                }),
                (Buffer.prototype.writeInt16BE = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 2, 32767, -32768),
                    (this[F] = D >>> 8),
                    (this[F + 1] = 255 & D),
                    F + 2
                  );
                }),
                (Buffer.prototype.writeInt32LE = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 4, 2147483647, -2147483648),
                    (this[F] = 255 & D),
                    (this[F + 1] = D >>> 8),
                    (this[F + 2] = D >>> 16),
                    (this[F + 3] = D >>> 24),
                    F + 4
                  );
                }),
                (Buffer.prototype.writeInt32BE = function (D, F, B) {
                  return (
                    (D = +D),
                    (F >>>= 0),
                    B || checkInt(this, D, F, 4, 2147483647, -2147483648),
                    D < 0 && (D = 4294967295 + D + 1),
                    (this[F] = D >>> 24),
                    (this[F + 1] = D >>> 16),
                    (this[F + 2] = D >>> 8),
                    (this[F + 3] = 255 & D),
                    F + 4
                  );
                }),
                (Buffer.prototype.writeFloatLE = function (D, F, B) {
                  return writeFloat(this, D, F, !0, B);
                }),
                (Buffer.prototype.writeFloatBE = function (D, F, B) {
                  return writeFloat(this, D, F, !1, B);
                }),
                (Buffer.prototype.writeDoubleLE = function (D, F, B) {
                  return writeDouble(this, D, F, !0, B);
                }),
                (Buffer.prototype.writeDoubleBE = function (D, F, B) {
                  return writeDouble(this, D, F, !1, B);
                }),
                (Buffer.prototype.copy = function (D, F, B, _) {
                  if (!Buffer.isBuffer(D))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (B || (B = 0),
                    _ || 0 === _ || (_ = this.length),
                    F >= D.length && (F = D.length),
                    F || (F = 0),
                    _ > 0 && _ < B && (_ = B),
                    _ === B || 0 === D.length || 0 === this.length)
                  )
                    return 0;
                  if (F < 0) throw RangeError("targetStart out of bounds");
                  if (B < 0 || B >= this.length)
                    throw RangeError("Index out of range");
                  if (_ < 0) throw RangeError("sourceEnd out of bounds");
                  _ > this.length && (_ = this.length),
                    D.length - F < _ - B && (_ = D.length - F + B);
                  var R = _ - B;
                  if (
                    this === D &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(F, B, _);
                  else if (this === D && B < F && F < _)
                    for (var N = R - 1; N >= 0; --N) D[N + F] = this[N + B];
                  else Uint8Array.prototype.set.call(D, this.subarray(B, _), F);
                  return R;
                }),
                (Buffer.prototype.fill = function (D, F, B, _) {
                  if ("string" == typeof D) {
                    if (
                      ("string" == typeof F
                        ? ((_ = F), (F = 0), (B = this.length))
                        : "string" == typeof B && ((_ = B), (B = this.length)),
                      void 0 !== _ && "string" != typeof _)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof _ && !Buffer.isEncoding(_))
                      throw TypeError("Unknown encoding: " + _);
                    if (1 === D.length) {
                      var R,
                        N = D.charCodeAt(0);
                      (("utf8" === _ && N < 128) || "latin1" === _) && (D = N);
                    }
                  } else
                    "number" == typeof D
                      ? (D &= 255)
                      : "boolean" == typeof D && (D = Number(D));
                  if (F < 0 || this.length < F || this.length < B)
                    throw RangeError("Out of range index");
                  if (B <= F) return this;
                  if (
                    ((F >>>= 0),
                    (B = void 0 === B ? this.length : B >>> 0),
                    D || (D = 0),
                    "number" == typeof D)
                  )
                    for (R = F; R < B; ++R) this[R] = D;
                  else {
                    var U = Buffer.isBuffer(D) ? D : Buffer.from(D, _),
                      H = U.length;
                    if (0 === H)
                      throw TypeError(
                        'The value "' + D + '" is invalid for argument "value"'
                      );
                    for (R = 0; R < B - F; ++R) this[R + F] = U[R % H];
                  }
                  return this;
                });
              var V = /[^+/0-9A-Za-z-_]/g;
              function base64clean(D) {
                if (
                  (D = (D = D.split("=")[0]).trim().replace(V, "")).length < 2
                )
                  return "";
                for (; D.length % 4 != 0; ) D += "=";
                return D;
              }
              function utf8ToBytes(D, F) {
                F = F || 1 / 0;
                for (var B, _ = D.length, R = null, N = [], U = 0; U < _; ++U) {
                  if ((B = D.charCodeAt(U)) > 55295 && B < 57344) {
                    if (!R) {
                      if (B > 56319 || U + 1 === _) {
                        (F -= 3) > -1 && N.push(239, 191, 189);
                        continue;
                      }
                      R = B;
                      continue;
                    }
                    if (B < 56320) {
                      (F -= 3) > -1 && N.push(239, 191, 189), (R = B);
                      continue;
                    }
                    B = (((R - 55296) << 10) | (B - 56320)) + 65536;
                  } else R && (F -= 3) > -1 && N.push(239, 191, 189);
                  if (((R = null), B < 128)) {
                    if ((F -= 1) < 0) break;
                    N.push(B);
                  } else if (B < 2048) {
                    if ((F -= 2) < 0) break;
                    N.push((B >> 6) | 192, (63 & B) | 128);
                  } else if (B < 65536) {
                    if ((F -= 3) < 0) break;
                    N.push(
                      (B >> 12) | 224,
                      ((B >> 6) & 63) | 128,
                      (63 & B) | 128
                    );
                  } else if (B < 1114112) {
                    if ((F -= 4) < 0) break;
                    N.push(
                      (B >> 18) | 240,
                      ((B >> 12) & 63) | 128,
                      ((B >> 6) & 63) | 128,
                      (63 & B) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return N;
              }
              function asciiToBytes(D) {
                for (var F = [], B = 0; B < D.length; ++B)
                  F.push(255 & D.charCodeAt(B));
                return F;
              }
              function utf16leToBytes(D, F) {
                for (
                  var B, _, R = [], N = 0;
                  N < D.length && !((F -= 2) < 0);
                  ++N
                )
                  (_ = (B = D.charCodeAt(N)) >> 8), R.push(B % 256), R.push(_);
                return R;
              }
              function base64ToBytes(D) {
                return _.toByteArray(base64clean(D));
              }
              function blitBuffer(D, F, B, _) {
                for (
                  var R = 0;
                  R < _ && !(R + B >= F.length) && !(R >= D.length);
                  ++R
                )
                  F[R + B] = D[R];
                return R;
              }
              function isInstance(D, F) {
                return (
                  D instanceof F ||
                  (null != D &&
                    null != D.constructor &&
                    null != D.constructor.name &&
                    D.constructor.name === F.name)
                );
              }
              function numberIsNaN(D) {
                return D != D;
              }
              var W = (function () {
                for (
                  var D = "0123456789abcdef", F = Array(256), B = 0;
                  B < 16;
                  ++B
                )
                  for (var _ = 16 * B, R = 0; R < 16; ++R)
                    F[_ + R] = D[B] + D[R];
                return F;
              })();
            },
            783: function (D, F) {
              /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (F.read =
                function (D, F, B, _, R) {
                  var N,
                    U,
                    H = 8 * R - _ - 1,
                    V = (1 << H) - 1,
                    W = V >> 1,
                    K = -7,
                    J = B ? R - 1 : 0,
                    Z = B ? -1 : 1,
                    X = D[F + J];
                  for (
                    J += Z, N = X & ((1 << -K) - 1), X >>= -K, K += H;
                    K > 0;
                    N = 256 * N + D[F + J], J += Z, K -= 8
                  );
                  for (
                    U = N & ((1 << -K) - 1), N >>= -K, K += _;
                    K > 0;
                    U = 256 * U + D[F + J], J += Z, K -= 8
                  );
                  if (0 === N) N = 1 - W;
                  else {
                    if (N === V) return U ? NaN : (X ? -1 : 1) * (1 / 0);
                    (U += Math.pow(2, _)), (N -= W);
                  }
                  return (X ? -1 : 1) * U * Math.pow(2, N - _);
                }),
                (F.write = function (D, F, B, _, R, N) {
                  var U,
                    H,
                    V,
                    W = 8 * N - R - 1,
                    K = (1 << W) - 1,
                    J = K >> 1,
                    Z = 23 === R ? 5960464477539062e-23 : 0,
                    X = _ ? 0 : N - 1,
                    Y = _ ? 1 : -1,
                    G = F < 0 || (0 === F && 1 / F < 0) ? 1 : 0;
                  for (
                    isNaN((F = Math.abs(F))) || F === 1 / 0
                      ? ((H = isNaN(F) ? 1 : 0), (U = K))
                      : ((U = Math.floor(Math.log(F) / Math.LN2)),
                        F * (V = Math.pow(2, -U)) < 1 && (U--, (V *= 2)),
                        U + J >= 1
                          ? (F += Z / V)
                          : (F += Z * Math.pow(2, 1 - J)),
                        F * V >= 2 && (U++, (V /= 2)),
                        U + J >= K
                          ? ((H = 0), (U = K))
                          : U + J >= 1
                          ? ((H = (F * V - 1) * Math.pow(2, R)), (U += J))
                          : ((H = F * Math.pow(2, J - 1) * Math.pow(2, R)),
                            (U = 0)));
                    R >= 8;
                    D[B + X] = 255 & H, X += Y, H /= 256, R -= 8
                  );
                  for (
                    U = (U << R) | H, W += R;
                    W > 0;
                    D[B + X] = 255 & U, X += Y, U /= 256, W -= 8
                  );
                  D[B + X - Y] |= 128 * G;
                });
            },
          },
          _ = {};
        function __nccwpck_require__(D) {
          var F = _[D];
          if (void 0 !== F) return F.exports;
          var R = (_[D] = { exports: {} }),
            N = !0;
          try {
            B[D](R, R.exports, __nccwpck_require__), (N = !1);
          } finally {
            N && delete _[D];
          }
          return R.exports;
        }
        __nccwpck_require__.ab = F + "/";
        var R = __nccwpck_require__(72);
        D.exports = R;
      })();
    },
    4627: function () {},
    6363: function () {},
    1163: function (D, F, B) {
      D.exports = B(9974);
    },
    9921: function (D, F) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var B = "function" == typeof Symbol && Symbol.for,
        _ = B ? Symbol.for("react.element") : 60103,
        R = B ? Symbol.for("react.portal") : 60106,
        N = B ? Symbol.for("react.fragment") : 60107,
        U = B ? Symbol.for("react.strict_mode") : 60108,
        H = B ? Symbol.for("react.profiler") : 60114,
        V = B ? Symbol.for("react.provider") : 60109,
        W = B ? Symbol.for("react.context") : 60110,
        K = B ? Symbol.for("react.async_mode") : 60111,
        J = B ? Symbol.for("react.concurrent_mode") : 60111,
        Z = B ? Symbol.for("react.forward_ref") : 60112,
        X = B ? Symbol.for("react.suspense") : 60113,
        Y = B ? Symbol.for("react.suspense_list") : 60120,
        G = B ? Symbol.for("react.memo") : 60115,
        Q = B ? Symbol.for("react.lazy") : 60116,
        ee = B ? Symbol.for("react.block") : 60121,
        et = B ? Symbol.for("react.fundamental") : 60117,
        er = B ? Symbol.for("react.responder") : 60118,
        en = B ? Symbol.for("react.scope") : 60119;
      function z(D) {
        if ("object" == typeof D && null !== D) {
          var F = D.$$typeof;
          switch (F) {
            case _:
              switch ((D = D.type)) {
                case K:
                case J:
                case N:
                case H:
                case U:
                case X:
                  return D;
                default:
                  switch ((D = D && D.$$typeof)) {
                    case W:
                    case Z:
                    case Q:
                    case G:
                    case V:
                      return D;
                    default:
                      return F;
                  }
              }
            case R:
              return F;
          }
        }
      }
      function A(D) {
        return z(D) === J;
      }
      (F.AsyncMode = K),
        (F.ConcurrentMode = J),
        (F.ContextConsumer = W),
        (F.ContextProvider = V),
        (F.Element = _),
        (F.ForwardRef = Z),
        (F.Fragment = N),
        (F.Lazy = Q),
        (F.Memo = G),
        (F.Portal = R),
        (F.Profiler = H),
        (F.StrictMode = U),
        (F.Suspense = X),
        (F.isAsyncMode = function (D) {
          return A(D) || z(D) === K;
        }),
        (F.isConcurrentMode = A),
        (F.isContextConsumer = function (D) {
          return z(D) === W;
        }),
        (F.isContextProvider = function (D) {
          return z(D) === V;
        }),
        (F.isElement = function (D) {
          return "object" == typeof D && null !== D && D.$$typeof === _;
        }),
        (F.isForwardRef = function (D) {
          return z(D) === Z;
        }),
        (F.isFragment = function (D) {
          return z(D) === N;
        }),
        (F.isLazy = function (D) {
          return z(D) === Q;
        }),
        (F.isMemo = function (D) {
          return z(D) === G;
        }),
        (F.isPortal = function (D) {
          return z(D) === R;
        }),
        (F.isProfiler = function (D) {
          return z(D) === H;
        }),
        (F.isStrictMode = function (D) {
          return z(D) === U;
        }),
        (F.isSuspense = function (D) {
          return z(D) === X;
        }),
        (F.isValidElementType = function (D) {
          return (
            "string" == typeof D ||
            "function" == typeof D ||
            D === N ||
            D === J ||
            D === H ||
            D === U ||
            D === X ||
            D === Y ||
            ("object" == typeof D &&
              null !== D &&
              (D.$$typeof === Q ||
                D.$$typeof === G ||
                D.$$typeof === V ||
                D.$$typeof === W ||
                D.$$typeof === Z ||
                D.$$typeof === et ||
                D.$$typeof === er ||
                D.$$typeof === en ||
                D.$$typeof === ee))
          );
        }),
        (F.typeOf = z);
    },
    9864: function (D, F, B) {
      "use strict";
      D.exports = B(9921);
    },
    5885: function (D, F, B) {
      "use strict";
      B.d(F, {
        Z: function () {
          return R;
        },
      });
      var _ = B(6489);
      function hasDocumentCookie() {
        return (
          "object" == typeof document && "string" == typeof document.cookie
        );
      }
      function parseCookies(D, F) {
        return "string" == typeof D
          ? _.Q(D, F)
          : "object" == typeof D && null !== D
          ? D
          : {};
      }
      function isParsingCookie(D, F) {
        return (
          void 0 === F &&
            (F = !D || ("{" !== D[0] && "[" !== D[0] && '"' !== D[0])),
          !F
        );
      }
      function readCookie(D, F) {
        void 0 === F && (F = {});
        var B = cleanupCookieValue(D);
        if (isParsingCookie(B, F.doNotParse))
          try {
            return JSON.parse(B);
          } catch (D) {}
        return D;
      }
      function cleanupCookieValue(D) {
        return D && "j" === D[0] && ":" === D[1] ? D.substr(2) : D;
      }
      var __assign = function () {
          return (__assign =
            Object.assign ||
            function (D) {
              for (var F, B = 1, _ = arguments.length; B < _; B++)
                for (var R in (F = arguments[B]))
                  Object.prototype.hasOwnProperty.call(F, R) && (D[R] = F[R]);
              return D;
            }).apply(this, arguments);
        },
        R = (function () {
          function Cookies(D, F) {
            var B = this;
            (this.changeListeners = []),
              (this.HAS_DOCUMENT_COOKIE = !1),
              (this.cookies = parseCookies(D, F)),
              new Promise(function () {
                B.HAS_DOCUMENT_COOKIE = hasDocumentCookie();
              }).catch(function () {});
          }
          return (
            (Cookies.prototype._updateBrowserValues = function (D) {
              this.HAS_DOCUMENT_COOKIE &&
                (this.cookies = _.Q(document.cookie, D));
            }),
            (Cookies.prototype._emitChange = function (D) {
              for (var F = 0; F < this.changeListeners.length; ++F)
                this.changeListeners[F](D);
            }),
            (Cookies.prototype.get = function (D, F, B) {
              return (
                void 0 === F && (F = {}),
                this._updateBrowserValues(B),
                readCookie(this.cookies[D], F)
              );
            }),
            (Cookies.prototype.getAll = function (D, F) {
              void 0 === D && (D = {}), this._updateBrowserValues(F);
              var B = {};
              for (var _ in this.cookies) B[_] = readCookie(this.cookies[_], D);
              return B;
            }),
            (Cookies.prototype.set = function (D, F, B) {
              var R;
              "object" == typeof F && (F = JSON.stringify(F)),
                (this.cookies = __assign(
                  __assign({}, this.cookies),
                  (((R = {})[D] = F), R)
                )),
                this.HAS_DOCUMENT_COOKIE && (document.cookie = _.q(D, F, B)),
                this._emitChange({ name: D, value: F, options: B });
            }),
            (Cookies.prototype.remove = function (D, F) {
              var B = (F = __assign(__assign({}, F), {
                expires: new Date(1970, 1, 1, 0, 0, 1),
                maxAge: 0,
              }));
              (this.cookies = __assign({}, this.cookies)),
                delete this.cookies[D],
                this.HAS_DOCUMENT_COOKIE && (document.cookie = _.q(D, "", B)),
                this._emitChange({ name: D, value: void 0, options: F });
            }),
            (Cookies.prototype.addChangeListener = function (D) {
              this.changeListeners.push(D);
            }),
            (Cookies.prototype.removeChangeListener = function (D) {
              var F = this.changeListeners.indexOf(D);
              F >= 0 && this.changeListeners.splice(F, 1);
            }),
            Cookies
          );
        })();
    },
    3967: function (D, F) {
      var B;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var _ = {}.hasOwnProperty;
        function classNames() {
          for (var D = "", F = 0; F < arguments.length; F++) {
            var B = arguments[F];
            B && (D = appendClass(D, parseValue(B)));
          }
          return D;
        }
        function parseValue(D) {
          if ("string" == typeof D || "number" == typeof D) return D;
          if ("object" != typeof D) return "";
          if (Array.isArray(D)) return classNames.apply(null, D);
          if (
            D.toString !== Object.prototype.toString &&
            !D.toString.toString().includes("[native code]")
          )
            return D.toString();
          var F = "";
          for (var B in D) _.call(D, B) && D[B] && (F = appendClass(F, B));
          return F;
        }
        function appendClass(D, F) {
          return F ? (D ? D + " " + F : D + F) : D;
        }
        D.exports
          ? ((classNames.default = classNames), (D.exports = classNames))
          : void 0 !==
              (B = function () {
                return classNames;
              }.apply(F, [])) && (D.exports = B);
      })();
    },
    7462: function (D, F, B) {
      "use strict";
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (D) {
              for (var F = 1; F < arguments.length; F++) {
                var B = arguments[F];
                for (var _ in B)
                  Object.prototype.hasOwnProperty.call(B, _) && (D[_] = B[_]);
              }
              return D;
            }).apply(this, arguments);
      }
      B.d(F, {
        Z: function () {
          return _extends;
        },
      });
    },
    6206: function (D, F, B) {
      "use strict";
      function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        D,
        F,
        { checkForDefaultPrevented: B = !0 } = {}
      ) {
        return function (_) {
          if ((null == D || D(_), !1 === B || !_.defaultPrevented))
            return null == F ? void 0 : F(_);
        };
      }
      B.d(F, {
        M: function () {
          return $e42e1063c40fb3ef$export$b9ecd428b558ff10;
        },
      });
    },
    8771: function (D, F, B) {
      "use strict";
      B.d(F, {
        F: function () {
          return $6ed0406888f73fc4$export$43e446d32b3d21af;
        },
        e: function () {
          return $6ed0406888f73fc4$export$c7b2cbe3552a0d05;
        },
      });
      var _ = B(7294);
      function $6ed0406888f73fc4$var$setRef(D, F) {
        "function" == typeof D ? D(F) : null != D && (D.current = F);
      }
      function $6ed0406888f73fc4$export$43e446d32b3d21af(...D) {
        return (F) => D.forEach((D) => $6ed0406888f73fc4$var$setRef(D, F));
      }
      function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...D) {
        return (0, _.useCallback)(
          $6ed0406888f73fc4$export$43e446d32b3d21af(...D),
          D
        );
      }
    },
    5360: function (D, F, B) {
      "use strict";
      B.d(F, {
        b: function () {
          return $c512c27ab02ef895$export$50c7b4e9d9f19c1;
        },
        k: function () {
          return $c512c27ab02ef895$export$fd42f52fd3ae1109;
        },
      });
      var _ = B(7294);
      function $c512c27ab02ef895$export$fd42f52fd3ae1109(D, F) {
        let B = (0, _.createContext)(F);
        function Provider(D) {
          let { children: F, ...R } = D,
            N = (0, _.useMemo)(() => R, Object.values(R));
          return (0, _.createElement)(B.Provider, { value: N }, F);
        }
        function useContext(R) {
          let N = (0, _.useContext)(B);
          if (N) return N;
          if (void 0 !== F) return F;
          throw Error(`\`${R}\` must be used within \`${D}\``);
        }
        return (Provider.displayName = D + "Provider"), [Provider, useContext];
      }
      function $c512c27ab02ef895$export$50c7b4e9d9f19c1(D, F = []) {
        let B = [];
        function $c512c27ab02ef895$export$fd42f52fd3ae1109(F, R) {
          let N = (0, _.createContext)(R),
            U = B.length;
          function Provider(F) {
            let { scope: B, children: R, ...H } = F,
              V = (null == B ? void 0 : B[D][U]) || N,
              W = (0, _.useMemo)(() => H, Object.values(H));
            return (0, _.createElement)(V.Provider, { value: W }, R);
          }
          function useContext(B, H) {
            let V = (null == H ? void 0 : H[D][U]) || N,
              W = (0, _.useContext)(V);
            if (W) return W;
            if (void 0 !== R) return R;
            throw Error(`\`${B}\` must be used within \`${F}\``);
          }
          return (
            (B = [...B, R]),
            (Provider.displayName = F + "Provider"),
            [Provider, useContext]
          );
        }
        let createScope = () => {
          let F = B.map((D) => (0, _.createContext)(D));
          return function (B) {
            let R = (null == B ? void 0 : B[D]) || F;
            return (0, _.useMemo)(
              () => ({ [`__scope${D}`]: { ...B, [D]: R } }),
              [B, R]
            );
          };
        };
        return (
          (createScope.scopeName = D),
          [
            $c512c27ab02ef895$export$fd42f52fd3ae1109,
            $c512c27ab02ef895$var$composeContextScopes(createScope, ...F),
          ]
        );
      }
      function $c512c27ab02ef895$var$composeContextScopes(...D) {
        let F = D[0];
        if (1 === D.length) return F;
        let createScope1 = () => {
          let B = D.map((D) => ({ useScope: D(), scopeName: D.scopeName }));
          return function (D) {
            let R = B.reduce((F, { useScope: B, scopeName: _ }) => {
              let R = B(D),
                N = R[`__scope${_}`];
              return { ...F, ...N };
            }, {});
            return (0, _.useMemo)(
              () => ({ [`__scope${F.scopeName}`]: R }),
              [R]
            );
          };
        };
        return (createScope1.scopeName = F.scopeName), createScope1;
      }
    },
    8990: function (D, F, B) {
      "use strict";
      B.d(F, {
        _9: function () {
          return $f631663db3294ace$export$c760c09fdd558351;
        },
        gm: function () {
          return $f631663db3294ace$export$b39126d51d94e6f3;
        },
      });
      var _ = B(7294);
      let R = (0, _.createContext)(void 0),
        $f631663db3294ace$export$c760c09fdd558351 = (D) => {
          let { dir: F, children: B } = D;
          return (0, _.createElement)(R.Provider, { value: F }, B);
        };
      function $f631663db3294ace$export$b39126d51d94e6f3(D) {
        let F = (0, _.useContext)(R);
        return D || F || "ltr";
      }
    },
    8083: function (D, F, B) {
      "use strict";
      let _;
      B.d(F, {
        XB: function () {
          return Y;
        },
      });
      var R = B(7462),
        N = B(7294),
        U = B(6206),
        H = B(5320),
        V = B(8771),
        W = B(9698);
      function $addc16e1bbe58fd0$export$3a72a57244d6e765(
        D,
        F = null == globalThis ? void 0 : globalThis.document
      ) {
        let B = (0, W.W)(D);
        (0, N.useEffect)(() => {
          let handleKeyDown = (D) => {
            "Escape" === D.key && B(D);
          };
          return (
            F.addEventListener("keydown", handleKeyDown),
            () => F.removeEventListener("keydown", handleKeyDown)
          );
        }, [B, F]);
      }
      let K = "dismissableLayer.update",
        J = "dismissableLayer.pointerDownOutside",
        Z = "dismissableLayer.focusOutside",
        X = (0, N.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        Y = (0, N.forwardRef)((D, F) => {
          var B;
          let {
              disableOutsidePointerEvents: W = !1,
              onEscapeKeyDown: J,
              onPointerDownOutside: Z,
              onFocusOutside: Y,
              onInteractOutside: G,
              onDismiss: Q,
              ...ee
            } = D,
            et = (0, N.useContext)(X),
            [er, en] = (0, N.useState)(null),
            ei =
              null !== (B = null == er ? void 0 : er.ownerDocument) &&
              void 0 !== B
                ? B
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, eo] = (0, N.useState)({}),
            eu = (0, V.e)(F, (D) => en(D)),
            ea = Array.from(et.layers),
            [es] = [...et.layersWithOutsidePointerEventsDisabled].slice(-1),
            ec = ea.indexOf(es),
            ef = er ? ea.indexOf(er) : -1,
            ed = et.layersWithOutsidePointerEventsDisabled.size > 0,
            eh = ef >= ec,
            ep = $5cb92bef7577960e$var$usePointerDownOutside((D) => {
              let F = D.target,
                B = [...et.branches].some((D) => D.contains(F));
              !eh ||
                B ||
                (null == Z || Z(D),
                null == G || G(D),
                D.defaultPrevented || null == Q || Q());
            }, ei),
            eg = $5cb92bef7577960e$var$useFocusOutside((D) => {
              let F = D.target,
                B = [...et.branches].some((D) => D.contains(F));
              B ||
                (null == Y || Y(D),
                null == G || G(D),
                D.defaultPrevented || null == Q || Q());
            }, ei);
          return (
            $addc16e1bbe58fd0$export$3a72a57244d6e765((D) => {
              let F = ef === et.layers.size - 1;
              F &&
                (null == J || J(D),
                !D.defaultPrevented && Q && (D.preventDefault(), Q()));
            }, ei),
            (0, N.useEffect)(() => {
              if (er)
                return (
                  W &&
                    (0 === et.layersWithOutsidePointerEventsDisabled.size &&
                      ((_ = ei.body.style.pointerEvents),
                      (ei.body.style.pointerEvents = "none")),
                    et.layersWithOutsidePointerEventsDisabled.add(er)),
                  et.layers.add(er),
                  $5cb92bef7577960e$var$dispatchUpdate(),
                  () => {
                    W &&
                      1 === et.layersWithOutsidePointerEventsDisabled.size &&
                      (ei.body.style.pointerEvents = _);
                  }
                );
            }, [er, ei, W, et]),
            (0, N.useEffect)(
              () => () => {
                er &&
                  (et.layers.delete(er),
                  et.layersWithOutsidePointerEventsDisabled.delete(er),
                  $5cb92bef7577960e$var$dispatchUpdate());
              },
              [er, et]
            ),
            (0, N.useEffect)(() => {
              let handleUpdate = () => eo({});
              return (
                document.addEventListener(K, handleUpdate),
                () => document.removeEventListener(K, handleUpdate)
              );
            }, []),
            (0, N.createElement)(
              H.WV.div,
              (0, R.Z)({}, ee, {
                ref: eu,
                style: {
                  pointerEvents: ed ? (eh ? "auto" : "none") : void 0,
                  ...D.style,
                },
                onFocusCapture: (0, U.M)(D.onFocusCapture, eg.onFocusCapture),
                onBlurCapture: (0, U.M)(D.onBlurCapture, eg.onBlurCapture),
                onPointerDownCapture: (0, U.M)(
                  D.onPointerDownCapture,
                  ep.onPointerDownCapture
                ),
              })
            )
          );
        });
      function $5cb92bef7577960e$var$usePointerDownOutside(
        D,
        F = null == globalThis ? void 0 : globalThis.document
      ) {
        let B = (0, W.W)(D),
          _ = (0, N.useRef)(!1),
          R = (0, N.useRef)(() => {});
        return (
          (0, N.useEffect)(() => {
            let handlePointerDown = (D) => {
                if (D.target && !_.current) {
                  let _ = { originalEvent: D };
                  function handleAndDispatchPointerDownOutsideEvent() {
                    $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                      J,
                      B,
                      _,
                      { discrete: !0 }
                    );
                  }
                  "touch" === D.pointerType
                    ? (F.removeEventListener("click", R.current),
                      (R.current = handleAndDispatchPointerDownOutsideEvent),
                      F.addEventListener("click", R.current, { once: !0 }))
                    : handleAndDispatchPointerDownOutsideEvent();
                } else F.removeEventListener("click", R.current);
                _.current = !1;
              },
              D = window.setTimeout(() => {
                F.addEventListener("pointerdown", handlePointerDown);
              }, 0);
            return () => {
              window.clearTimeout(D),
                F.removeEventListener("pointerdown", handlePointerDown),
                F.removeEventListener("click", R.current);
            };
          }, [F, B]),
          { onPointerDownCapture: () => (_.current = !0) }
        );
      }
      function $5cb92bef7577960e$var$useFocusOutside(
        D,
        F = null == globalThis ? void 0 : globalThis.document
      ) {
        let B = (0, W.W)(D),
          _ = (0, N.useRef)(!1);
        return (
          (0, N.useEffect)(() => {
            let handleFocus = (D) => {
              if (D.target && !_.current) {
                let F = { originalEvent: D };
                $5cb92bef7577960e$var$handleAndDispatchCustomEvent(Z, B, F, {
                  discrete: !1,
                });
              }
            };
            return (
              F.addEventListener("focusin", handleFocus),
              () => F.removeEventListener("focusin", handleFocus)
            );
          }, [F, B]),
          {
            onFocusCapture: () => (_.current = !0),
            onBlurCapture: () => (_.current = !1),
          }
        );
      }
      function $5cb92bef7577960e$var$dispatchUpdate() {
        let D = new CustomEvent(K);
        document.dispatchEvent(D);
      }
      function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
        D,
        F,
        B,
        { discrete: _ }
      ) {
        let R = B.originalEvent.target,
          N = new CustomEvent(D, { bubbles: !1, cancelable: !0, detail: B });
        F && R.addEventListener(D, F, { once: !0 }),
          _ ? (0, H.jH)(R, N) : R.dispatchEvent(N);
      }
    },
    1276: function (D, F, B) {
      "use strict";
      B.d(F, {
        M: function () {
          return $1746a345f3d73bb7$export$f680877a34711e37;
        },
      });
      var _,
        R = B(7294),
        N = B(9981);
      let U = (_ || (_ = B.t(R, 2)))["useId".toString()] || (() => void 0),
        H = 0;
      function $1746a345f3d73bb7$export$f680877a34711e37(D) {
        let [F, B] = R.useState(U());
        return (
          (0, N.b)(() => {
            D || B((D) => (null != D ? D : String(H++)));
          }, [D]),
          D || (F ? `radix-${F}` : "")
        );
      }
    },
    7324: function (D, F, B) {
      "use strict";
      B.d(F, {
        ee: function () {
          return ek;
        },
        Eh: function () {
          return eT;
        },
        VY: function () {
          return eO;
        },
        fC: function () {
          return eS;
        },
        D7: function () {
          return em;
        },
      });
      var _ = B(7462),
        R = B(7294);
      let N = ["top", "right", "bottom", "left"],
        U = Math.min,
        H = Math.max,
        V = Math.round,
        W = Math.floor,
        createCoords = (D) => ({ x: D, y: D }),
        K = { left: "right", right: "left", bottom: "top", top: "bottom" },
        J = { start: "end", end: "start" };
      function clamp(D, F, B) {
        return H(D, U(F, B));
      }
      function floating_ui_utils_evaluate(D, F) {
        return "function" == typeof D ? D(F) : D;
      }
      function floating_ui_utils_getSide(D) {
        return D.split("-")[0];
      }
      function floating_ui_utils_getAlignment(D) {
        return D.split("-")[1];
      }
      function getOppositeAxis(D) {
        return "x" === D ? "y" : "x";
      }
      function getAxisLength(D) {
        return "y" === D ? "height" : "width";
      }
      function floating_ui_utils_getSideAxis(D) {
        return ["top", "bottom"].includes(floating_ui_utils_getSide(D))
          ? "y"
          : "x";
      }
      function getAlignmentAxis(D) {
        return getOppositeAxis(floating_ui_utils_getSideAxis(D));
      }
      function floating_ui_utils_getAlignmentSides(D, F, B) {
        void 0 === B && (B = !1);
        let _ = floating_ui_utils_getAlignment(D),
          R = getAlignmentAxis(D),
          N = getAxisLength(R),
          U =
            "x" === R
              ? _ === (B ? "end" : "start")
                ? "right"
                : "left"
              : "start" === _
              ? "bottom"
              : "top";
        return (
          F.reference[N] > F.floating[N] && (U = getOppositePlacement(U)),
          [U, getOppositePlacement(U)]
        );
      }
      function getExpandedPlacements(D) {
        let F = getOppositePlacement(D);
        return [
          floating_ui_utils_getOppositeAlignmentPlacement(D),
          F,
          floating_ui_utils_getOppositeAlignmentPlacement(F),
        ];
      }
      function floating_ui_utils_getOppositeAlignmentPlacement(D) {
        return D.replace(/start|end/g, (D) => J[D]);
      }
      function getSideList(D, F, B) {
        let _ = ["left", "right"],
          R = ["right", "left"],
          N = ["top", "bottom"],
          U = ["bottom", "top"];
        switch (D) {
          case "top":
          case "bottom":
            if (B) return F ? R : _;
            return F ? _ : R;
          case "left":
          case "right":
            return F ? N : U;
          default:
            return [];
        }
      }
      function getOppositeAxisPlacements(D, F, B, _) {
        let R = floating_ui_utils_getAlignment(D),
          N = getSideList(floating_ui_utils_getSide(D), "start" === B, _);
        return (
          R &&
            ((N = N.map((D) => D + "-" + R)),
            F &&
              (N = N.concat(
                N.map(floating_ui_utils_getOppositeAlignmentPlacement)
              ))),
          N
        );
      }
      function getOppositePlacement(D) {
        return D.replace(/left|right|bottom|top/g, (D) => K[D]);
      }
      function expandPaddingObject(D) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...D };
      }
      function floating_ui_utils_getPaddingObject(D) {
        return "number" != typeof D
          ? expandPaddingObject(D)
          : { top: D, right: D, bottom: D, left: D };
      }
      function floating_ui_utils_rectToClientRect(D) {
        return {
          ...D,
          top: D.y,
          left: D.x,
          right: D.x + D.width,
          bottom: D.y + D.height,
        };
      }
      function computeCoordsFromPlacement(D, F, B) {
        let _,
          { reference: R, floating: N } = D,
          U = floating_ui_utils_getSideAxis(F),
          H = getAlignmentAxis(F),
          V = getAxisLength(H),
          W = floating_ui_utils_getSide(F),
          K = "y" === U,
          J = R.x + R.width / 2 - N.width / 2,
          Z = R.y + R.height / 2 - N.height / 2,
          X = R[V] / 2 - N[V] / 2;
        switch (W) {
          case "top":
            _ = { x: J, y: R.y - N.height };
            break;
          case "bottom":
            _ = { x: J, y: R.y + R.height };
            break;
          case "right":
            _ = { x: R.x + R.width, y: Z };
            break;
          case "left":
            _ = { x: R.x - N.width, y: Z };
            break;
          default:
            _ = { x: R.x, y: R.y };
        }
        switch (floating_ui_utils_getAlignment(F)) {
          case "start":
            _[H] -= X * (B && K ? -1 : 1);
            break;
          case "end":
            _[H] += X * (B && K ? -1 : 1);
        }
        return _;
      }
      let computePosition = async (D, F, B) => {
        let {
            placement: _ = "bottom",
            strategy: R = "absolute",
            middleware: N = [],
            platform: U,
          } = B,
          H = N.filter(Boolean),
          V = await (null == U.isRTL ? void 0 : U.isRTL(F)),
          W = await U.getElementRects({
            reference: D,
            floating: F,
            strategy: R,
          }),
          { x: K, y: J } = computeCoordsFromPlacement(W, _, V),
          Z = _,
          X = {},
          Y = 0;
        for (let B = 0; B < H.length; B++) {
          let { name: N, fn: G } = H[B],
            {
              x: Q,
              y: ee,
              data: et,
              reset: er,
            } = await G({
              x: K,
              y: J,
              initialPlacement: _,
              placement: Z,
              strategy: R,
              middlewareData: X,
              rects: W,
              platform: U,
              elements: { reference: D, floating: F },
            });
          (K = null != Q ? Q : K),
            (J = null != ee ? ee : J),
            (X = { ...X, [N]: { ...X[N], ...et } }),
            er &&
              Y <= 50 &&
              (Y++,
              "object" == typeof er &&
                (er.placement && (Z = er.placement),
                er.rects &&
                  (W =
                    !0 === er.rects
                      ? await U.getElementRects({
                          reference: D,
                          floating: F,
                          strategy: R,
                        })
                      : er.rects),
                ({ x: K, y: J } = computeCoordsFromPlacement(W, Z, V))),
              (B = -1));
        }
        return { x: K, y: J, placement: Z, strategy: R, middlewareData: X };
      };
      async function detectOverflow(D, F) {
        var B;
        void 0 === F && (F = {});
        let { x: _, y: R, platform: N, rects: U, elements: H, strategy: V } = D,
          {
            boundary: W = "clippingAncestors",
            rootBoundary: K = "viewport",
            elementContext: J = "floating",
            altBoundary: Z = !1,
            padding: X = 0,
          } = floating_ui_utils_evaluate(F, D),
          Y = floating_ui_utils_getPaddingObject(X),
          G = "floating" === J ? "reference" : "floating",
          Q = H[Z ? G : J],
          ee = floating_ui_utils_rectToClientRect(
            await N.getClippingRect({
              element:
                null ==
                  (B = await (null == N.isElement ? void 0 : N.isElement(Q))) ||
                B
                  ? Q
                  : Q.contextElement ||
                    (await (null == N.getDocumentElement
                      ? void 0
                      : N.getDocumentElement(H.floating))),
              boundary: W,
              rootBoundary: K,
              strategy: V,
            })
          ),
          et = "floating" === J ? { ...U.floating, x: _, y: R } : U.reference,
          er = await (null == N.getOffsetParent
            ? void 0
            : N.getOffsetParent(H.floating)),
          en = ((await (null == N.isElement ? void 0 : N.isElement(er))) &&
            (await (null == N.getScale ? void 0 : N.getScale(er)))) || {
            x: 1,
            y: 1,
          },
          ei = floating_ui_utils_rectToClientRect(
            N.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await N.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: H,
                  rect: et,
                  offsetParent: er,
                  strategy: V,
                })
              : et
          );
        return {
          top: (ee.top - ei.top + Y.top) / en.y,
          bottom: (ei.bottom - ee.bottom + Y.bottom) / en.y,
          left: (ee.left - ei.left + Y.left) / en.x,
          right: (ei.right - ee.right + Y.right) / en.x,
        };
      }
      let arrow = (D) => ({
          name: "arrow",
          options: D,
          async fn(F) {
            let {
                x: B,
                y: _,
                placement: R,
                rects: N,
                platform: H,
                elements: V,
                middlewareData: W,
              } = F,
              { element: K, padding: J = 0 } =
                floating_ui_utils_evaluate(D, F) || {};
            if (null == K) return {};
            let Z = floating_ui_utils_getPaddingObject(J),
              X = { x: B, y: _ },
              Y = getAlignmentAxis(R),
              G = getAxisLength(Y),
              Q = await H.getDimensions(K),
              ee = "y" === Y,
              et = ee ? "top" : "left",
              er = ee ? "bottom" : "right",
              en = ee ? "clientHeight" : "clientWidth",
              ei = N.reference[G] + N.reference[Y] - X[Y] - N.floating[G],
              eo = X[Y] - N.reference[Y],
              eu = await (null == H.getOffsetParent
                ? void 0
                : H.getOffsetParent(K)),
              ea = eu ? eu[en] : 0;
            (ea && (await (null == H.isElement ? void 0 : H.isElement(eu)))) ||
              (ea = V.floating[en] || N.floating[G]);
            let es = ei / 2 - eo / 2,
              ec = ea / 2 - Q[G] / 2 - 1,
              ef = U(Z[et], ec),
              ed = U(Z[er], ec),
              eh = ef,
              ep = ea - Q[G] - ed,
              eg = ea / 2 - Q[G] / 2 + es,
              em = clamp(eh, eg, ep),
              ey =
                !W.arrow &&
                null != floating_ui_utils_getAlignment(R) &&
                eg !== em &&
                N.reference[G] / 2 - (eg < eh ? ef : ed) - Q[G] / 2 < 0,
              eD = ey ? (eg < eh ? eg - eh : eg - ep) : 0;
            return {
              [Y]: X[Y] + eD,
              data: {
                [Y]: em,
                centerOffset: eg - em - eD,
                ...(ey && { alignmentOffset: eD }),
              },
              reset: ey,
            };
          },
        }),
        flip = function (D) {
          return (
            void 0 === D && (D = {}),
            {
              name: "flip",
              options: D,
              async fn(F) {
                var B, _, R, N, U;
                let {
                    placement: H,
                    middlewareData: V,
                    rects: W,
                    initialPlacement: K,
                    platform: J,
                    elements: Z,
                  } = F,
                  {
                    mainAxis: X = !0,
                    crossAxis: Y = !0,
                    fallbackPlacements: G,
                    fallbackStrategy: Q = "bestFit",
                    fallbackAxisSideDirection: ee = "none",
                    flipAlignment: et = !0,
                    ...er
                  } = floating_ui_utils_evaluate(D, F);
                if (null != (B = V.arrow) && B.alignmentOffset) return {};
                let en = floating_ui_utils_getSide(H),
                  ei = floating_ui_utils_getSide(K) === K,
                  eo = await (null == J.isRTL ? void 0 : J.isRTL(Z.floating)),
                  eu =
                    G ||
                    (ei || !et
                      ? [getOppositePlacement(K)]
                      : getExpandedPlacements(K));
                G ||
                  "none" === ee ||
                  eu.push(...getOppositeAxisPlacements(K, et, ee, eo));
                let ea = [K, ...eu],
                  es = await detectOverflow(F, er),
                  ec = [],
                  ef = (null == (_ = V.flip) ? void 0 : _.overflows) || [];
                if ((X && ec.push(es[en]), Y)) {
                  let D = floating_ui_utils_getAlignmentSides(H, W, eo);
                  ec.push(es[D[0]], es[D[1]]);
                }
                if (
                  ((ef = [...ef, { placement: H, overflows: ec }]),
                  !ec.every((D) => D <= 0))
                ) {
                  let D = ((null == (R = V.flip) ? void 0 : R.index) || 0) + 1,
                    F = ea[D];
                  if (F)
                    return {
                      data: { index: D, overflows: ef },
                      reset: { placement: F },
                    };
                  let B =
                    null ==
                    (N = ef
                      .filter((D) => D.overflows[0] <= 0)
                      .sort((D, F) => D.overflows[1] - F.overflows[1])[0])
                      ? void 0
                      : N.placement;
                  if (!B)
                    switch (Q) {
                      case "bestFit": {
                        let D =
                          null ==
                          (U = ef
                            .map((D) => [
                              D.placement,
                              D.overflows
                                .filter((D) => D > 0)
                                .reduce((D, F) => D + F, 0),
                            ])
                            .sort((D, F) => D[1] - F[1])[0])
                            ? void 0
                            : U[0];
                        D && (B = D);
                        break;
                      }
                      case "initialPlacement":
                        B = K;
                    }
                  if (H !== B) return { reset: { placement: B } };
                }
                return {};
              },
            }
          );
        };
      function getSideOffsets(D, F) {
        return {
          top: D.top - F.height,
          right: D.right - F.width,
          bottom: D.bottom - F.height,
          left: D.left - F.width,
        };
      }
      function isAnySideFullyClipped(D) {
        return N.some((F) => D[F] >= 0);
      }
      let hide = function (D) {
        return (
          void 0 === D && (D = {}),
          {
            name: "hide",
            options: D,
            async fn(F) {
              let { rects: B } = F,
                { strategy: _ = "referenceHidden", ...R } =
                  floating_ui_utils_evaluate(D, F);
              switch (_) {
                case "referenceHidden": {
                  let D = await detectOverflow(F, {
                      ...R,
                      elementContext: "reference",
                    }),
                    _ = getSideOffsets(D, B.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: _,
                      referenceHidden: isAnySideFullyClipped(_),
                    },
                  };
                }
                case "escaped": {
                  let D = await detectOverflow(F, { ...R, altBoundary: !0 }),
                    _ = getSideOffsets(D, B.floating);
                  return {
                    data: {
                      escapedOffsets: _,
                      escaped: isAnySideFullyClipped(_),
                    },
                  };
                }
                default:
                  return {};
              }
            },
          }
        );
      };
      async function convertValueToCoords(D, F) {
        let { placement: B, platform: _, elements: R } = D,
          N = await (null == _.isRTL ? void 0 : _.isRTL(R.floating)),
          U = floating_ui_utils_getSide(B),
          H = floating_ui_utils_getAlignment(B),
          V = "y" === floating_ui_utils_getSideAxis(B),
          W = ["left", "top"].includes(U) ? -1 : 1,
          K = N && V ? -1 : 1,
          J = floating_ui_utils_evaluate(F, D),
          {
            mainAxis: Z,
            crossAxis: X,
            alignmentAxis: Y,
          } = "number" == typeof J
            ? { mainAxis: J, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...J };
        return (
          H && "number" == typeof Y && (X = "end" === H ? -1 * Y : Y),
          V ? { x: X * K, y: Z * W } : { x: Z * W, y: X * K }
        );
      }
      let offset = function (D) {
          return (
            void 0 === D && (D = 0),
            {
              name: "offset",
              options: D,
              async fn(F) {
                var B, _;
                let { x: R, y: N, placement: U, middlewareData: H } = F,
                  V = await convertValueToCoords(F, D);
                return U === (null == (B = H.offset) ? void 0 : B.placement) &&
                  null != (_ = H.arrow) &&
                  _.alignmentOffset
                  ? {}
                  : { x: R + V.x, y: N + V.y, data: { ...V, placement: U } };
              },
            }
          );
        },
        shift = function (D) {
          return (
            void 0 === D && (D = {}),
            {
              name: "shift",
              options: D,
              async fn(F) {
                let { x: B, y: _, placement: R } = F,
                  {
                    mainAxis: N = !0,
                    crossAxis: U = !1,
                    limiter: H = {
                      fn: (D) => {
                        let { x: F, y: B } = D;
                        return { x: F, y: B };
                      },
                    },
                    ...V
                  } = floating_ui_utils_evaluate(D, F),
                  W = { x: B, y: _ },
                  K = await detectOverflow(F, V),
                  J = floating_ui_utils_getSideAxis(
                    floating_ui_utils_getSide(R)
                  ),
                  Z = getOppositeAxis(J),
                  X = W[Z],
                  Y = W[J];
                if (N) {
                  let D = "y" === Z ? "top" : "left",
                    F = "y" === Z ? "bottom" : "right",
                    B = X + K[D],
                    _ = X - K[F];
                  X = clamp(B, X, _);
                }
                if (U) {
                  let D = "y" === J ? "top" : "left",
                    F = "y" === J ? "bottom" : "right",
                    B = Y + K[D],
                    _ = Y - K[F];
                  Y = clamp(B, Y, _);
                }
                let G = H.fn({ ...F, [Z]: X, [J]: Y });
                return { ...G, data: { x: G.x - B, y: G.y - _ } };
              },
            }
          );
        },
        limitShift = function (D) {
          return (
            void 0 === D && (D = {}),
            {
              options: D,
              fn(F) {
                let {
                    x: B,
                    y: _,
                    placement: R,
                    rects: N,
                    middlewareData: U,
                  } = F,
                  {
                    offset: H = 0,
                    mainAxis: V = !0,
                    crossAxis: W = !0,
                  } = floating_ui_utils_evaluate(D, F),
                  K = { x: B, y: _ },
                  J = floating_ui_utils_getSideAxis(R),
                  Z = getOppositeAxis(J),
                  X = K[Z],
                  Y = K[J],
                  G = floating_ui_utils_evaluate(H, F),
                  Q =
                    "number" == typeof G
                      ? { mainAxis: G, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...G };
                if (V) {
                  let D = "y" === Z ? "height" : "width",
                    F = N.reference[Z] - N.floating[D] + Q.mainAxis,
                    B = N.reference[Z] + N.reference[D] - Q.mainAxis;
                  X < F ? (X = F) : X > B && (X = B);
                }
                if (W) {
                  var ee, et;
                  let D = "y" === Z ? "width" : "height",
                    F = ["top", "left"].includes(floating_ui_utils_getSide(R)),
                    B =
                      N.reference[J] -
                      N.floating[D] +
                      ((F && (null == (ee = U.offset) ? void 0 : ee[J])) || 0) +
                      (F ? 0 : Q.crossAxis),
                    _ =
                      N.reference[J] +
                      N.reference[D] +
                      (F
                        ? 0
                        : (null == (et = U.offset) ? void 0 : et[J]) || 0) -
                      (F ? Q.crossAxis : 0);
                  Y < B ? (Y = B) : Y > _ && (Y = _);
                }
                return { [Z]: X, [J]: Y };
              },
            }
          );
        },
        size = function (D) {
          return (
            void 0 === D && (D = {}),
            {
              name: "size",
              options: D,
              async fn(F) {
                let B, _;
                let { placement: R, rects: N, platform: V, elements: W } = F,
                  { apply: K = () => {}, ...J } = floating_ui_utils_evaluate(
                    D,
                    F
                  ),
                  Z = await detectOverflow(F, J),
                  X = floating_ui_utils_getSide(R),
                  Y = floating_ui_utils_getAlignment(R),
                  G = "y" === floating_ui_utils_getSideAxis(R),
                  { width: Q, height: ee } = N.floating;
                "top" === X || "bottom" === X
                  ? ((B = X),
                    (_ =
                      Y ===
                      ((await (null == V.isRTL ? void 0 : V.isRTL(W.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((_ = X), (B = "end" === Y ? "top" : "bottom"));
                let et = ee - Z[B],
                  er = Q - Z[_],
                  en = !F.middlewareData.shift,
                  ei = et,
                  eo = er;
                if (G) {
                  let D = Q - Z.left - Z.right;
                  eo = Y || en ? U(er, D) : D;
                } else {
                  let D = ee - Z.top - Z.bottom;
                  ei = Y || en ? U(et, D) : D;
                }
                if (en && !Y) {
                  let D = H(Z.left, 0),
                    F = H(Z.right, 0),
                    B = H(Z.top, 0),
                    _ = H(Z.bottom, 0);
                  G
                    ? (eo =
                        Q -
                        2 * (0 !== D || 0 !== F ? D + F : H(Z.left, Z.right)))
                    : (ei =
                        ee -
                        2 * (0 !== B || 0 !== _ ? B + _ : H(Z.top, Z.bottom)));
                }
                await K({ ...F, availableWidth: eo, availableHeight: ei });
                let eu = await V.getDimensions(W.floating);
                return Q !== eu.width || ee !== eu.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        };
      function getNodeName(D) {
        return isNode(D) ? (D.nodeName || "").toLowerCase() : "#document";
      }
      function getWindow(D) {
        var F;
        return (
          (null == D || null == (F = D.ownerDocument)
            ? void 0
            : F.defaultView) || window
        );
      }
      function getDocumentElement(D) {
        var F;
        return null ==
          (F = (isNode(D) ? D.ownerDocument : D.document) || window.document)
          ? void 0
          : F.documentElement;
      }
      function isNode(D) {
        return D instanceof Node || D instanceof getWindow(D).Node;
      }
      function isElement(D) {
        return D instanceof Element || D instanceof getWindow(D).Element;
      }
      function isHTMLElement(D) {
        return (
          D instanceof HTMLElement || D instanceof getWindow(D).HTMLElement
        );
      }
      function isShadowRoot(D) {
        return (
          "undefined" != typeof ShadowRoot &&
          (D instanceof ShadowRoot || D instanceof getWindow(D).ShadowRoot)
        );
      }
      function isOverflowElement(D) {
        let {
          overflow: F,
          overflowX: B,
          overflowY: _,
          display: R,
        } = getComputedStyle(D);
        return (
          /auto|scroll|overlay|hidden|clip/.test(F + _ + B) &&
          !["inline", "contents"].includes(R)
        );
      }
      function isTableElement(D) {
        return ["table", "td", "th"].includes(getNodeName(D));
      }
      function isContainingBlock(D) {
        let F = isWebKit(),
          B = getComputedStyle(D);
        return (
          "none" !== B.transform ||
          "none" !== B.perspective ||
          (!!B.containerType && "normal" !== B.containerType) ||
          (!F && !!B.backdropFilter && "none" !== B.backdropFilter) ||
          (!F && !!B.filter && "none" !== B.filter) ||
          ["transform", "perspective", "filter"].some((D) =>
            (B.willChange || "").includes(D)
          ) ||
          ["paint", "layout", "strict", "content"].some((D) =>
            (B.contain || "").includes(D)
          )
        );
      }
      function getContainingBlock(D) {
        let F = getParentNode(D);
        for (; isHTMLElement(F) && !isLastTraversableNode(F); ) {
          if (isContainingBlock(F)) return F;
          F = getParentNode(F);
        }
        return null;
      }
      function isWebKit() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function isLastTraversableNode(D) {
        return ["html", "body", "#document"].includes(getNodeName(D));
      }
      function getComputedStyle(D) {
        return getWindow(D).getComputedStyle(D);
      }
      function getNodeScroll(D) {
        return isElement(D)
          ? { scrollLeft: D.scrollLeft, scrollTop: D.scrollTop }
          : { scrollLeft: D.pageXOffset, scrollTop: D.pageYOffset };
      }
      function getParentNode(D) {
        if ("html" === getNodeName(D)) return D;
        let F =
          D.assignedSlot ||
          D.parentNode ||
          (isShadowRoot(D) && D.host) ||
          getDocumentElement(D);
        return isShadowRoot(F) ? F.host : F;
      }
      function getNearestOverflowAncestor(D) {
        let F = getParentNode(D);
        return isLastTraversableNode(F)
          ? D.ownerDocument
            ? D.ownerDocument.body
            : D.body
          : isHTMLElement(F) && isOverflowElement(F)
          ? F
          : getNearestOverflowAncestor(F);
      }
      function getOverflowAncestors(D, F, B) {
        var _;
        void 0 === F && (F = []), void 0 === B && (B = !0);
        let R = getNearestOverflowAncestor(D),
          N = R === (null == (_ = D.ownerDocument) ? void 0 : _.body),
          U = getWindow(R);
        return N
          ? F.concat(
              U,
              U.visualViewport || [],
              isOverflowElement(R) ? R : [],
              U.frameElement && B ? getOverflowAncestors(U.frameElement) : []
            )
          : F.concat(R, getOverflowAncestors(R, [], B));
      }
      function getCssDimensions(D) {
        let F = getComputedStyle(D),
          B = parseFloat(F.width) || 0,
          _ = parseFloat(F.height) || 0,
          R = isHTMLElement(D),
          N = R ? D.offsetWidth : B,
          U = R ? D.offsetHeight : _,
          H = V(B) !== N || V(_) !== U;
        return H && ((B = N), (_ = U)), { width: B, height: _, $: H };
      }
      function unwrapElement(D) {
        return isElement(D) ? D : D.contextElement;
      }
      function getScale(D) {
        let F = unwrapElement(D);
        if (!isHTMLElement(F)) return createCoords(1);
        let B = F.getBoundingClientRect(),
          { width: _, height: R, $: N } = getCssDimensions(F),
          U = (N ? V(B.width) : B.width) / _,
          H = (N ? V(B.height) : B.height) / R;
        return (
          (U && Number.isFinite(U)) || (U = 1),
          (H && Number.isFinite(H)) || (H = 1),
          { x: U, y: H }
        );
      }
      let Z = createCoords(0);
      function getVisualOffsets(D) {
        let F = getWindow(D);
        return isWebKit() && F.visualViewport
          ? { x: F.visualViewport.offsetLeft, y: F.visualViewport.offsetTop }
          : Z;
      }
      function shouldAddVisualOffsets(D, F, B) {
        return void 0 === F && (F = !1), !!B && (!F || B === getWindow(D)) && F;
      }
      function getBoundingClientRect(D, F, B, _) {
        void 0 === F && (F = !1), void 0 === B && (B = !1);
        let R = D.getBoundingClientRect(),
          N = unwrapElement(D),
          U = createCoords(1);
        F && (_ ? isElement(_) && (U = getScale(_)) : (U = getScale(D)));
        let H = shouldAddVisualOffsets(N, B, _)
            ? getVisualOffsets(N)
            : createCoords(0),
          V = (R.left + H.x) / U.x,
          W = (R.top + H.y) / U.y,
          K = R.width / U.x,
          J = R.height / U.y;
        if (N) {
          let D = getWindow(N),
            F = _ && isElement(_) ? getWindow(_) : _,
            B = D,
            R = B.frameElement;
          for (; R && _ && F !== B; ) {
            let D = getScale(R),
              F = R.getBoundingClientRect(),
              _ = getComputedStyle(R),
              N = F.left + (R.clientLeft + parseFloat(_.paddingLeft)) * D.x,
              U = F.top + (R.clientTop + parseFloat(_.paddingTop)) * D.y;
            (V *= D.x),
              (W *= D.y),
              (K *= D.x),
              (J *= D.y),
              (V += N),
              (W += U),
              (R = (B = getWindow(R)).frameElement);
          }
        }
        return floating_ui_utils_rectToClientRect({
          width: K,
          height: J,
          x: V,
          y: W,
        });
      }
      let X = [":popover-open", ":modal"];
      function isTopLayer(D) {
        return X.some((F) => {
          try {
            return D.matches(F);
          } catch (D) {
            return !1;
          }
        });
      }
      function convertOffsetParentRelativeRectToViewportRelativeRect(D) {
        let { elements: F, rect: B, offsetParent: _, strategy: R } = D,
          N = "fixed" === R,
          U = getDocumentElement(_),
          H = !!F && isTopLayer(F.floating);
        if (_ === U || (H && N)) return B;
        let V = { scrollLeft: 0, scrollTop: 0 },
          W = createCoords(1),
          K = createCoords(0),
          J = isHTMLElement(_);
        if (
          (J || (!J && !N)) &&
          (("body" !== getNodeName(_) || isOverflowElement(U)) &&
            (V = getNodeScroll(_)),
          isHTMLElement(_))
        ) {
          let D = getBoundingClientRect(_);
          (W = getScale(_)),
            (K.x = D.x + _.clientLeft),
            (K.y = D.y + _.clientTop);
        }
        return {
          width: B.width * W.x,
          height: B.height * W.y,
          x: B.x * W.x - V.scrollLeft * W.x + K.x,
          y: B.y * W.y - V.scrollTop * W.y + K.y,
        };
      }
      function getClientRects(D) {
        return Array.from(D.getClientRects());
      }
      function getWindowScrollBarX(D) {
        return (
          getBoundingClientRect(getDocumentElement(D)).left +
          getNodeScroll(D).scrollLeft
        );
      }
      function getDocumentRect(D) {
        let F = getDocumentElement(D),
          B = getNodeScroll(D),
          _ = D.ownerDocument.body,
          R = H(F.scrollWidth, F.clientWidth, _.scrollWidth, _.clientWidth),
          N = H(F.scrollHeight, F.clientHeight, _.scrollHeight, _.clientHeight),
          U = -B.scrollLeft + getWindowScrollBarX(D),
          V = -B.scrollTop;
        return (
          "rtl" === getComputedStyle(_).direction &&
            (U += H(F.clientWidth, _.clientWidth) - R),
          { width: R, height: N, x: U, y: V }
        );
      }
      function getViewportRect(D, F) {
        let B = getWindow(D),
          _ = getDocumentElement(D),
          R = B.visualViewport,
          N = _.clientWidth,
          U = _.clientHeight,
          H = 0,
          V = 0;
        if (R) {
          (N = R.width), (U = R.height);
          let D = isWebKit();
          (!D || (D && "fixed" === F)) &&
            ((H = R.offsetLeft), (V = R.offsetTop));
        }
        return { width: N, height: U, x: H, y: V };
      }
      function getInnerBoundingClientRect(D, F) {
        let B = getBoundingClientRect(D, !0, "fixed" === F),
          _ = B.top + D.clientTop,
          R = B.left + D.clientLeft,
          N = isHTMLElement(D) ? getScale(D) : createCoords(1),
          U = D.clientWidth * N.x,
          H = D.clientHeight * N.y,
          V = R * N.x,
          W = _ * N.y;
        return { width: U, height: H, x: V, y: W };
      }
      function getClientRectFromClippingAncestor(D, F, B) {
        let _;
        if ("viewport" === F) _ = getViewportRect(D, B);
        else if ("document" === F) _ = getDocumentRect(getDocumentElement(D));
        else if (isElement(F)) _ = getInnerBoundingClientRect(F, B);
        else {
          let B = getVisualOffsets(D);
          _ = { ...F, x: F.x - B.x, y: F.y - B.y };
        }
        return floating_ui_utils_rectToClientRect(_);
      }
      function hasFixedPositionAncestor(D, F) {
        let B = getParentNode(D);
        return (
          !(B === F || !isElement(B) || isLastTraversableNode(B)) &&
          ("fixed" === getComputedStyle(B).position ||
            hasFixedPositionAncestor(B, F))
        );
      }
      function getClippingElementAncestors(D, F) {
        let B = F.get(D);
        if (B) return B;
        let _ = getOverflowAncestors(D, [], !1).filter(
            (D) => isElement(D) && "body" !== getNodeName(D)
          ),
          R = null,
          N = "fixed" === getComputedStyle(D).position,
          U = N ? getParentNode(D) : D;
        for (; isElement(U) && !isLastTraversableNode(U); ) {
          let F = getComputedStyle(U),
            B = isContainingBlock(U);
          B || "fixed" !== F.position || (R = null);
          let H = N
            ? !B && !R
            : (!B &&
                "static" === F.position &&
                !!R &&
                ["absolute", "fixed"].includes(R.position)) ||
              (isOverflowElement(U) && !B && hasFixedPositionAncestor(D, U));
          H ? (_ = _.filter((D) => D !== U)) : (R = F), (U = getParentNode(U));
        }
        return F.set(D, _), _;
      }
      function getClippingRect(D) {
        let { element: F, boundary: B, rootBoundary: _, strategy: R } = D,
          N =
            "clippingAncestors" === B
              ? getClippingElementAncestors(F, this._c)
              : [].concat(B),
          V = [...N, _],
          W = V[0],
          K = V.reduce((D, B) => {
            let _ = getClientRectFromClippingAncestor(F, B, R);
            return (
              (D.top = H(_.top, D.top)),
              (D.right = U(_.right, D.right)),
              (D.bottom = U(_.bottom, D.bottom)),
              (D.left = H(_.left, D.left)),
              D
            );
          }, getClientRectFromClippingAncestor(F, W, R));
        return {
          width: K.right - K.left,
          height: K.bottom - K.top,
          x: K.left,
          y: K.top,
        };
      }
      function getDimensions(D) {
        let { width: F, height: B } = getCssDimensions(D);
        return { width: F, height: B };
      }
      function getRectRelativeToOffsetParent(D, F, B) {
        let _ = isHTMLElement(F),
          R = getDocumentElement(F),
          N = "fixed" === B,
          U = getBoundingClientRect(D, !0, N, F),
          H = { scrollLeft: 0, scrollTop: 0 },
          V = createCoords(0);
        if (_ || (!_ && !N)) {
          if (
            (("body" !== getNodeName(F) || isOverflowElement(R)) &&
              (H = getNodeScroll(F)),
            _)
          ) {
            let D = getBoundingClientRect(F, !0, N, F);
            (V.x = D.x + F.clientLeft), (V.y = D.y + F.clientTop);
          } else R && (V.x = getWindowScrollBarX(R));
        }
        let W = U.left + H.scrollLeft - V.x,
          K = U.top + H.scrollTop - V.y;
        return { x: W, y: K, width: U.width, height: U.height };
      }
      function getTrueOffsetParent(D, F) {
        return isHTMLElement(D) && "fixed" !== getComputedStyle(D).position
          ? F
            ? F(D)
            : D.offsetParent
          : null;
      }
      function getOffsetParent(D, F) {
        let B = getWindow(D);
        if (!isHTMLElement(D) || isTopLayer(D)) return B;
        let _ = getTrueOffsetParent(D, F);
        for (
          ;
          _ && isTableElement(_) && "static" === getComputedStyle(_).position;

        )
          _ = getTrueOffsetParent(_, F);
        return _ &&
          ("html" === getNodeName(_) ||
            ("body" === getNodeName(_) &&
              "static" === getComputedStyle(_).position &&
              !isContainingBlock(_)))
          ? B
          : _ || getContainingBlock(D) || B;
      }
      let getElementRects = async function (D) {
        let F = this.getOffsetParent || getOffsetParent,
          B = this.getDimensions;
        return {
          reference: getRectRelativeToOffsetParent(
            D.reference,
            await F(D.floating),
            D.strategy
          ),
          floating: { x: 0, y: 0, ...(await B(D.floating)) },
        };
      };
      function isRTL(D) {
        return "rtl" === getComputedStyle(D).direction;
      }
      let Y = {
        convertOffsetParentRelativeRectToViewportRelativeRect,
        getDocumentElement: getDocumentElement,
        getClippingRect,
        getOffsetParent,
        getElementRects,
        getClientRects,
        getDimensions,
        getScale,
        isElement: isElement,
        isRTL,
      };
      function observeMove(D, F) {
        let B,
          _ = null,
          R = getDocumentElement(D);
        function cleanup() {
          var D;
          clearTimeout(B), null == (D = _) || D.disconnect(), (_ = null);
        }
        function refresh(N, V) {
          void 0 === N && (N = !1), void 0 === V && (V = 1), cleanup();
          let {
            left: K,
            top: J,
            width: Z,
            height: X,
          } = D.getBoundingClientRect();
          if ((N || F(), !Z || !X)) return;
          let Y = W(J),
            G = W(R.clientWidth - (K + Z)),
            Q = W(R.clientHeight - (J + X)),
            ee = W(K),
            et = -Y + "px " + -G + "px " + -Q + "px " + -ee + "px",
            er = { rootMargin: et, threshold: H(0, U(1, V)) || 1 },
            en = !0;
          function handleObserve(D) {
            let F = D[0].intersectionRatio;
            if (F !== V) {
              if (!en) return refresh();
              F
                ? refresh(!1, F)
                : (B = setTimeout(() => {
                    refresh(!1, 1e-7);
                  }, 100));
            }
            en = !1;
          }
          try {
            _ = new IntersectionObserver(handleObserve, {
              ...er,
              root: R.ownerDocument,
            });
          } catch (D) {
            _ = new IntersectionObserver(handleObserve, er);
          }
          _.observe(D);
        }
        return refresh(!0), cleanup;
      }
      function autoUpdate(D, F, B, _) {
        let R;
        void 0 === _ && (_ = {});
        let {
            ancestorScroll: N = !0,
            ancestorResize: U = !0,
            elementResize: H = "function" == typeof ResizeObserver,
            layoutShift: V = "function" == typeof IntersectionObserver,
            animationFrame: W = !1,
          } = _,
          K = unwrapElement(D),
          J =
            N || U
              ? [
                  ...(K ? getOverflowAncestors(K) : []),
                  ...getOverflowAncestors(F),
                ]
              : [];
        J.forEach((D) => {
          N && D.addEventListener("scroll", B, { passive: !0 }),
            U && D.addEventListener("resize", B);
        });
        let Z = K && V ? observeMove(K, B) : null,
          X = -1,
          Y = null;
        H &&
          ((Y = new ResizeObserver((D) => {
            let [_] = D;
            _ &&
              _.target === K &&
              Y &&
              (Y.unobserve(F),
              cancelAnimationFrame(X),
              (X = requestAnimationFrame(() => {
                var D;
                null == (D = Y) || D.observe(F);
              }))),
              B();
          })),
          K && !W && Y.observe(K),
          Y.observe(F));
        let G = W ? getBoundingClientRect(D) : null;
        function frameLoop() {
          let F = getBoundingClientRect(D);
          G &&
            (F.x !== G.x ||
              F.y !== G.y ||
              F.width !== G.width ||
              F.height !== G.height) &&
            B(),
            (G = F),
            (R = requestAnimationFrame(frameLoop));
        }
        return (
          W && frameLoop(),
          B(),
          () => {
            var D;
            J.forEach((D) => {
              N && D.removeEventListener("scroll", B),
                U && D.removeEventListener("resize", B);
            }),
              null == Z || Z(),
              null == (D = Y) || D.disconnect(),
              (Y = null),
              W && cancelAnimationFrame(R);
          }
        );
      }
      let G = shift,
        Q = flip,
        ee = size,
        et = hide,
        er = arrow,
        en = limitShift,
        floating_ui_dom_computePosition = (D, F, B) => {
          let _ = new Map(),
            R = { platform: Y, ...B },
            N = { ...R.platform, _c: _ };
          return computePosition(D, F, { ...R, platform: N });
        };
      var ei = B(3935);
      let floating_ui_react_dom_arrow = (D) => {
        function isRef(D) {
          return {}.hasOwnProperty.call(D, "current");
        }
        return {
          name: "arrow",
          options: D,
          fn(F) {
            let { element: B, padding: _ } = "function" == typeof D ? D(F) : D;
            return B && isRef(B)
              ? null != B.current
                ? er({ element: B.current, padding: _ }).fn(F)
                : {}
              : B
              ? er({ element: B, padding: _ }).fn(F)
              : {};
          },
        };
      };
      var eo = "undefined" != typeof document ? R.useLayoutEffect : R.useEffect;
      function deepEqual(D, F) {
        let B, _, R;
        if (D === F) return !0;
        if (typeof D != typeof F) return !1;
        if ("function" == typeof D && D.toString() === F.toString()) return !0;
        if (D && F && "object" == typeof D) {
          if (Array.isArray(D)) {
            if ((B = D.length) !== F.length) return !1;
            for (_ = B; 0 != _--; ) if (!deepEqual(D[_], F[_])) return !1;
            return !0;
          }
          if ((B = (R = Object.keys(D)).length) !== Object.keys(F).length)
            return !1;
          for (_ = B; 0 != _--; )
            if (!{}.hasOwnProperty.call(F, R[_])) return !1;
          for (_ = B; 0 != _--; ) {
            let B = R[_];
            if (("_owner" !== B || !D.$$typeof) && !deepEqual(D[B], F[B]))
              return !1;
          }
          return !0;
        }
        return D != D && F != F;
      }
      function getDPR(D) {
        if ("undefined" == typeof window) return 1;
        let F = D.ownerDocument.defaultView || window;
        return F.devicePixelRatio || 1;
      }
      function roundByDPR(D, F) {
        let B = getDPR(D);
        return Math.round(F * B) / B;
      }
      function useLatestRef(D) {
        let F = R.useRef(D);
        return (
          eo(() => {
            F.current = D;
          }),
          F
        );
      }
      function useFloating(D) {
        void 0 === D && (D = {});
        let {
            placement: F = "bottom",
            strategy: B = "absolute",
            middleware: _ = [],
            platform: N,
            elements: { reference: U, floating: H } = {},
            transform: V = !0,
            whileElementsMounted: W,
            open: K,
          } = D,
          [J, Z] = R.useState({
            x: 0,
            y: 0,
            strategy: B,
            placement: F,
            middlewareData: {},
            isPositioned: !1,
          }),
          [X, Y] = R.useState(_);
        deepEqual(X, _) || Y(_);
        let [G, Q] = R.useState(null),
          [ee, et] = R.useState(null),
          er = R.useCallback((D) => {
            D !== es.current && ((es.current = D), Q(D));
          }, []),
          en = R.useCallback((D) => {
            D !== ec.current && ((ec.current = D), et(D));
          }, []),
          eu = U || G,
          ea = H || ee,
          es = R.useRef(null),
          ec = R.useRef(null),
          ef = R.useRef(J),
          ed = null != W,
          eh = useLatestRef(W),
          ep = useLatestRef(N),
          eg = R.useCallback(() => {
            if (!es.current || !ec.current) return;
            let D = { placement: F, strategy: B, middleware: X };
            ep.current && (D.platform = ep.current),
              floating_ui_dom_computePosition(es.current, ec.current, D).then(
                (D) => {
                  let F = { ...D, isPositioned: !0 };
                  em.current &&
                    !deepEqual(ef.current, F) &&
                    ((ef.current = F),
                    ei.flushSync(() => {
                      Z(F);
                    }));
                }
              );
          }, [X, F, B, ep]);
        eo(() => {
          !1 === K &&
            ef.current.isPositioned &&
            ((ef.current.isPositioned = !1),
            Z((D) => ({ ...D, isPositioned: !1 })));
        }, [K]);
        let em = R.useRef(!1);
        eo(
          () => (
            (em.current = !0),
            () => {
              em.current = !1;
            }
          ),
          []
        ),
          eo(() => {
            if ((eu && (es.current = eu), ea && (ec.current = ea), eu && ea)) {
              if (eh.current) return eh.current(eu, ea, eg);
              eg();
            }
          }, [eu, ea, eg, eh, ed]);
        let ey = R.useMemo(
            () => ({
              reference: es,
              floating: ec,
              setReference: er,
              setFloating: en,
            }),
            [er, en]
          ),
          eD = R.useMemo(() => ({ reference: eu, floating: ea }), [eu, ea]),
          eE = R.useMemo(() => {
            let D = { position: B, left: 0, top: 0 };
            if (!eD.floating) return D;
            let F = roundByDPR(eD.floating, J.x),
              _ = roundByDPR(eD.floating, J.y);
            return V
              ? {
                  ...D,
                  transform: "translate(" + F + "px, " + _ + "px)",
                  ...(getDPR(eD.floating) >= 1.5 && {
                    willChange: "transform",
                  }),
                }
              : { position: B, left: F, top: _ };
          }, [B, V, eD.floating, J.x, J.y]);
        return R.useMemo(
          () => ({
            ...J,
            update: eg,
            refs: ey,
            elements: eD,
            floatingStyles: eE,
          }),
          [J, eg, ey, eD, eE]
        );
      }
      var eu = B(5320);
      let ea = (0, R.forwardRef)((D, F) => {
          let { children: B, width: N = 10, height: U = 5, ...H } = D;
          return (0, R.createElement)(
            eu.WV.svg,
            (0, _.Z)({}, H, {
              ref: F,
              width: N,
              height: U,
              viewBox: "0 0 30 10",
              preserveAspectRatio: "none",
            }),
            D.asChild
              ? B
              : (0, R.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        }),
        es = ea;
      var ec = B(8771),
        ef = B(5360),
        ed = B(9698),
        eh = B(9981);
      function $db6c3485150b8e66$export$1ab7ae714698c4b8(D) {
        let [F, B] = (0, R.useState)(void 0);
        return (
          (0, eh.b)(() => {
            if (D) {
              B({ width: D.offsetWidth, height: D.offsetHeight });
              let F = new ResizeObserver((F) => {
                let _, R;
                if (!Array.isArray(F) || !F.length) return;
                let N = F[0];
                if ("borderBoxSize" in N) {
                  let D = N.borderBoxSize,
                    F = Array.isArray(D) ? D[0] : D;
                  (_ = F.inlineSize), (R = F.blockSize);
                } else (_ = D.offsetWidth), (R = D.offsetHeight);
                B({ width: _, height: R });
              });
              return F.observe(D, { box: "border-box" }), () => F.unobserve(D);
            }
            B(void 0);
          }, [D]),
          F
        );
      }
      let ep = "Popper",
        [eg, em] = (0, ef.b)(ep),
        [ey, eD] = eg(ep),
        $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (D) => {
          let { __scopePopper: F, children: B } = D,
            [_, N] = (0, R.useState)(null);
          return (0, R.createElement)(
            ey,
            { scope: F, anchor: _, onAnchorChange: N },
            B
          );
        },
        eE = "PopperAnchor",
        eC = (0, R.forwardRef)((D, F) => {
          let { __scopePopper: B, virtualRef: N, ...U } = D,
            H = eD(eE, B),
            V = (0, R.useRef)(null),
            W = (0, ec.e)(F, V);
          return (
            (0, R.useEffect)(() => {
              H.onAnchorChange((null == N ? void 0 : N.current) || V.current);
            }),
            N
              ? null
              : (0, R.createElement)(eu.WV.div, (0, _.Z)({}, U, { ref: W }))
          );
        }),
        eb = "PopperContent",
        [eA, ew] = eg(eb),
        eF = (0, R.forwardRef)((D, F) => {
          var B, N, U, H, V, W, K, J;
          let {
              __scopePopper: Z,
              side: X = "bottom",
              sideOffset: Y = 0,
              align: er = "center",
              alignOffset: ei = 0,
              arrowPadding: eo = 0,
              avoidCollisions: ea = !0,
              collisionBoundary: es = [],
              collisionPadding: ef = 0,
              sticky: ep = "partial",
              hideWhenDetached: eg = !1,
              updatePositionStrategy: em = "optimized",
              onPlaced: ey,
              ...eE
            } = D,
            eC = eD(eb, Z),
            [ew, eF] = (0, R.useState)(null),
            eB = (0, ec.e)(F, (D) => eF(D)),
            [e_, ex] = (0, R.useState)(null),
            eS = $db6c3485150b8e66$export$1ab7ae714698c4b8(e_),
            ek =
              null !== (B = null == eS ? void 0 : eS.width) && void 0 !== B
                ? B
                : 0,
            eO =
              null !== (N = null == eS ? void 0 : eS.height) && void 0 !== N
                ? N
                : 0,
            eT = X + ("center" !== er ? "-" + er : ""),
            eR =
              "number" == typeof ef
                ? ef
                : { top: 0, right: 0, bottom: 0, left: 0, ...ef },
            eP = Array.isArray(es) ? es : [es],
            e$ = eP.length > 0,
            eN = {
              padding: eR,
              boundary: eP.filter($cf1ac5d9fe0e8206$var$isNotNull),
              altBoundary: e$,
            },
            {
              refs: eL,
              floatingStyles: eU,
              placement: ej,
              isPositioned: eI,
              middlewareData: eM,
            } = useFloating({
              strategy: "fixed",
              placement: eT,
              whileElementsMounted: (...D) => {
                let F = autoUpdate(...D, { animationFrame: "always" === em });
                return F;
              },
              elements: { reference: eC.anchor },
              middleware: [
                offset({ mainAxis: Y + eO, alignmentAxis: ei }),
                ea &&
                  G({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === ep ? en() : void 0,
                    ...eN,
                  }),
                ea && Q({ ...eN }),
                ee({
                  ...eN,
                  apply: ({
                    elements: D,
                    rects: F,
                    availableWidth: B,
                    availableHeight: _,
                  }) => {
                    let { width: R, height: N } = F.reference,
                      U = D.floating.style;
                    U.setProperty("--radix-popper-available-width", `${B}px`),
                      U.setProperty(
                        "--radix-popper-available-height",
                        `${_}px`
                      ),
                      U.setProperty("--radix-popper-anchor-width", `${R}px`),
                      U.setProperty("--radix-popper-anchor-height", `${N}px`);
                  },
                }),
                e_ && floating_ui_react_dom_arrow({ element: e_, padding: eo }),
                $cf1ac5d9fe0e8206$var$transformOrigin({
                  arrowWidth: ek,
                  arrowHeight: eO,
                }),
                eg && et({ strategy: "referenceHidden", ...eN }),
              ],
            }),
            [ez, eq] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(ej),
            eH = (0, ed.W)(ey);
          (0, eh.b)(() => {
            eI && (null == eH || eH());
          }, [eI, eH]);
          let eV = null === (U = eM.arrow) || void 0 === U ? void 0 : U.x,
            eW = null === (H = eM.arrow) || void 0 === H ? void 0 : H.y,
            eK =
              (null === (V = eM.arrow) || void 0 === V
                ? void 0
                : V.centerOffset) !== 0,
            [eJ, eZ] = (0, R.useState)();
          return (
            (0, eh.b)(() => {
              ew && eZ(window.getComputedStyle(ew).zIndex);
            }, [ew]),
            (0, R.createElement)(
              "div",
              {
                ref: eL.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...eU,
                  transform: eI ? eU.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eJ,
                  "--radix-popper-transform-origin": [
                    null === (W = eM.transformOrigin) || void 0 === W
                      ? void 0
                      : W.x,
                    null === (K = eM.transformOrigin) || void 0 === K
                      ? void 0
                      : K.y,
                  ].join(" "),
                },
                dir: D.dir,
              },
              (0, R.createElement)(
                eA,
                {
                  scope: Z,
                  placedSide: ez,
                  onArrowChange: ex,
                  arrowX: eV,
                  arrowY: eW,
                  shouldHideArrow: eK,
                },
                (0, R.createElement)(
                  eu.WV.div,
                  (0, _.Z)({ "data-side": ez, "data-align": eq }, eE, {
                    ref: eB,
                    style: {
                      ...eE.style,
                      animation: eI ? void 0 : "none",
                      opacity:
                        null !== (J = eM.hide) &&
                        void 0 !== J &&
                        J.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        eB = "PopperArrow",
        e_ = { top: "bottom", right: "left", bottom: "top", left: "right" },
        ex = (0, R.forwardRef)(function (D, F) {
          let { __scopePopper: B, ...N } = D,
            U = ew(eB, B),
            H = e_[U.placedSide];
          return (0,
          R.createElement)("span", { ref: U.onArrowChange, style: { position: "absolute", left: U.arrowX, top: U.arrowY, [H]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[U.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[U.placedSide], visibility: U.shouldHideArrow ? "hidden" : void 0 } }, (0, R.createElement)(es, (0, _.Z)({}, N, { ref: F, style: { ...N.style, display: "block" } })));
        });
      function $cf1ac5d9fe0e8206$var$isNotNull(D) {
        return null !== D;
      }
      let $cf1ac5d9fe0e8206$var$transformOrigin = (D) => ({
        name: "transformOrigin",
        options: D,
        fn(F) {
          var B, _, R, N, U;
          let { placement: H, rects: V, middlewareData: W } = F,
            K =
              (null === (B = W.arrow) || void 0 === B
                ? void 0
                : B.centerOffset) !== 0,
            J = K,
            Z = J ? 0 : D.arrowWidth,
            X = J ? 0 : D.arrowHeight,
            [Y, G] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(H),
            Q = { start: "0%", center: "50%", end: "100%" }[G],
            ee =
              (null !==
                (_ = null === (R = W.arrow) || void 0 === R ? void 0 : R.x) &&
              void 0 !== _
                ? _
                : 0) +
              Z / 2,
            et =
              (null !==
                (N = null === (U = W.arrow) || void 0 === U ? void 0 : U.y) &&
              void 0 !== N
                ? N
                : 0) +
              X / 2,
            er = "",
            en = "";
          return (
            "bottom" === Y
              ? ((er = J ? Q : `${ee}px`), (en = `${-X}px`))
              : "top" === Y
              ? ((er = J ? Q : `${ee}px`), (en = `${V.floating.height + X}px`))
              : "right" === Y
              ? ((er = `${-X}px`), (en = J ? Q : `${et}px`))
              : "left" === Y &&
                ((er = `${V.floating.width + X}px`), (en = J ? Q : `${et}px`)),
            { data: { x: er, y: en } }
          );
        },
      });
      function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(D) {
        let [F, B = "center"] = D.split("-");
        return [F, B];
      }
      let eS = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9,
        ek = eC,
        eO = eF,
        eT = ex;
    },
    2651: function (D, F, B) {
      "use strict";
      B.d(F, {
        h: function () {
          return H;
        },
      });
      var _ = B(7462),
        R = B(7294),
        N = B(3935),
        U = B(5320);
      let H = (0, R.forwardRef)((D, F) => {
        var B;
        let {
          container: H = null == globalThis
            ? void 0
            : null === (B = globalThis.document) || void 0 === B
            ? void 0
            : B.body,
          ...V
        } = D;
        return H
          ? N.createPortal(
              (0, R.createElement)(U.WV.div, (0, _.Z)({}, V, { ref: F })),
              H
            )
          : null;
      });
    },
    9115: function (D, F, B) {
      "use strict";
      B.d(F, {
        z: function () {
          return $921a889cee6df7e8$export$99c2b779aa4e8b8b;
        },
      });
      var _ = B(7294),
        R = B(3935),
        N = B(8771),
        U = B(9981);
      function $fe963b355347cc68$export$3e6543de14f8614f(D, F) {
        return (0, _.useReducer)((D, B) => {
          let _ = F[D][B];
          return null != _ ? _ : D;
        }, D);
      }
      let $921a889cee6df7e8$export$99c2b779aa4e8b8b = (D) => {
        let { present: F, children: B } = D,
          R = $921a889cee6df7e8$var$usePresence(F),
          U =
            "function" == typeof B
              ? B({ present: R.isPresent })
              : _.Children.only(B),
          H = (0, N.e)(R.ref, U.ref),
          V = "function" == typeof B;
        return V || R.isPresent ? (0, _.cloneElement)(U, { ref: H }) : null;
      };
      function $921a889cee6df7e8$var$usePresence(D) {
        let [F, B] = (0, _.useState)(),
          N = (0, _.useRef)({}),
          H = (0, _.useRef)(D),
          V = (0, _.useRef)("none"),
          W = D ? "mounted" : "unmounted",
          [K, J] = $fe963b355347cc68$export$3e6543de14f8614f(W, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended",
            },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
          });
        return (
          (0, _.useEffect)(() => {
            let D = $921a889cee6df7e8$var$getAnimationName(N.current);
            V.current = "mounted" === K ? D : "none";
          }, [K]),
          (0, U.b)(() => {
            let F = N.current,
              B = H.current,
              _ = B !== D;
            if (_) {
              let _ = V.current,
                R = $921a889cee6df7e8$var$getAnimationName(F);
              if (D) J("MOUNT");
              else if (
                "none" === R ||
                (null == F ? void 0 : F.display) === "none"
              )
                J("UNMOUNT");
              else {
                let D = _ !== R;
                B && D ? J("ANIMATION_OUT") : J("UNMOUNT");
              }
              H.current = D;
            }
          }, [D, J]),
          (0, U.b)(() => {
            if (F) {
              let handleAnimationEnd = (D) => {
                  let B = $921a889cee6df7e8$var$getAnimationName(N.current),
                    _ = B.includes(D.animationName);
                  D.target === F &&
                    _ &&
                    (0, R.flushSync)(() => J("ANIMATION_END"));
                },
                handleAnimationStart = (D) => {
                  D.target === F &&
                    (V.current = $921a889cee6df7e8$var$getAnimationName(
                      N.current
                    ));
                };
              return (
                F.addEventListener("animationstart", handleAnimationStart),
                F.addEventListener("animationcancel", handleAnimationEnd),
                F.addEventListener("animationend", handleAnimationEnd),
                () => {
                  F.removeEventListener("animationstart", handleAnimationStart),
                    F.removeEventListener(
                      "animationcancel",
                      handleAnimationEnd
                    ),
                    F.removeEventListener("animationend", handleAnimationEnd);
                }
              );
            }
            J("ANIMATION_END");
          }, [F, J]),
          {
            isPresent: ["mounted", "unmountSuspended"].includes(K),
            ref: (0, _.useCallback)((D) => {
              D && (N.current = getComputedStyle(D)), B(D);
            }, []),
          }
        );
      }
      function $921a889cee6df7e8$var$getAnimationName(D) {
        return (null == D ? void 0 : D.animationName) || "none";
      }
      $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
    },
    5320: function (D, F, B) {
      "use strict";
      B.d(F, {
        WV: function () {
          return V;
        },
        jH: function () {
          return $8927f6f2acc4f386$export$6d1a0317bde7de7f;
        },
      });
      var _ = B(7462),
        R = B(7294),
        N = B(3935),
        U = B(8426);
      let H = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ],
        V = H.reduce((D, F) => {
          let B = (0, R.forwardRef)((D, B) => {
            let { asChild: N, ...H } = D,
              V = N ? U.g7 : F;
            return (
              (0, R.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, R.createElement)(V, (0, _.Z)({}, H, { ref: B }))
            );
          });
          return (B.displayName = `Primitive.${F}`), { ...D, [F]: B };
        }, {});
      function $8927f6f2acc4f386$export$6d1a0317bde7de7f(D, F) {
        D && (0, N.flushSync)(() => D.dispatchEvent(F));
      }
    },
    8426: function (D, F, B) {
      "use strict";
      B.d(F, {
        A4: function () {
          return $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
        },
        g7: function () {
          return U;
        },
      });
      var _ = B(7462),
        R = B(7294),
        N = B(8771);
      let U = (0, R.forwardRef)((D, F) => {
        let { children: B, ...N } = D,
          U = R.Children.toArray(B),
          V = U.find($5e63c961fc1ce211$var$isSlottable);
        if (V) {
          let D = V.props.children,
            B = U.map((F) =>
              F !== V
                ? F
                : R.Children.count(D) > 1
                ? R.Children.only(null)
                : (0, R.isValidElement)(D)
                ? D.props.children
                : null
            );
          return (0, R.createElement)(
            H,
            (0, _.Z)({}, N, { ref: F }),
            (0, R.isValidElement)(D) ? (0, R.cloneElement)(D, void 0, B) : null
          );
        }
        return (0, R.createElement)(H, (0, _.Z)({}, N, { ref: F }), B);
      });
      U.displayName = "Slot";
      let H = (0, R.forwardRef)((D, F) => {
        let { children: B, ..._ } = D;
        return (0, R.isValidElement)(B)
          ? (0, R.cloneElement)(B, {
              ...$5e63c961fc1ce211$var$mergeProps(_, B.props),
              ref: F ? (0, N.F)(F, B.ref) : B.ref,
            })
          : R.Children.count(B) > 1
          ? R.Children.only(null)
          : null;
      });
      H.displayName = "SlotClone";
      let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: D }) =>
        (0, R.createElement)(R.Fragment, null, D);
      function $5e63c961fc1ce211$var$isSlottable(D) {
        return (
          (0, R.isValidElement)(D) &&
          D.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
        );
      }
      function $5e63c961fc1ce211$var$mergeProps(D, F) {
        let B = { ...F };
        for (let _ in F) {
          let R = D[_],
            N = F[_],
            U = /^on[A-Z]/.test(_);
          U
            ? R && N
              ? (B[_] = (...D) => {
                  N(...D), R(...D);
                })
              : R && (B[_] = R)
            : "style" === _
            ? (B[_] = { ...R, ...N })
            : "className" === _ && (B[_] = [R, N].filter(Boolean).join(" "));
        }
        return { ...D, ...B };
      }
    },
    6192: function (D, F, B) {
      "use strict";
      B.d(F, {
        Eh: function () {
          return eO;
        },
        VY: function () {
          return ek;
        },
        fC: function () {
          return e_;
        },
        h_: function () {
          return eS;
        },
        xz: function () {
          return ex;
        },
        zt: function () {
          return eB;
        },
      });
      var _ = B(7462),
        R = B(7294),
        N = B(6206),
        U = B(8771),
        H = B(5360),
        V = B(8083),
        W = B(1276),
        K = B(7324),
        J = B(2651),
        Z = B(9115),
        X = B(5320),
        Y = B(8426),
        G = B(7342),
        Q = B(6219);
      let [ee, et] = (0, H.b)("Tooltip", [K.D7]),
        er = (0, K.D7)(),
        en = "TooltipProvider",
        ei = 700,
        eo = "tooltip.open",
        [eu, ea] = ee(en),
        $a093c7e1ec25a057$export$f78649fb9ca566b8 = (D) => {
          let {
              __scopeTooltip: F,
              delayDuration: B = ei,
              skipDelayDuration: _ = 300,
              disableHoverableContent: N = !1,
              children: U,
            } = D,
            [H, V] = (0, R.useState)(!0),
            W = (0, R.useRef)(!1),
            K = (0, R.useRef)(0);
          return (
            (0, R.useEffect)(() => {
              let D = K.current;
              return () => window.clearTimeout(D);
            }, []),
            (0, R.createElement)(
              eu,
              {
                scope: F,
                isOpenDelayed: H,
                delayDuration: B,
                onOpen: (0, R.useCallback)(() => {
                  window.clearTimeout(K.current), V(!1);
                }, []),
                onClose: (0, R.useCallback)(() => {
                  window.clearTimeout(K.current),
                    (K.current = window.setTimeout(() => V(!0), _));
                }, [_]),
                isPointerInTransitRef: W,
                onPointerInTransitChange: (0, R.useCallback)((D) => {
                  W.current = D;
                }, []),
                disableHoverableContent: N,
              },
              U
            )
          );
        },
        es = "Tooltip",
        [ec, ef] = ee(es),
        $a093c7e1ec25a057$export$28c660c63b792dea = (D) => {
          let {
              __scopeTooltip: F,
              children: B,
              open: _,
              defaultOpen: N = !1,
              onOpenChange: U,
              disableHoverableContent: H,
              delayDuration: V,
            } = D,
            J = ea(es, D.__scopeTooltip),
            Z = er(F),
            [X, Y] = (0, R.useState)(null),
            Q = (0, W.M)(),
            ee = (0, R.useRef)(0),
            et = null != H ? H : J.disableHoverableContent,
            en = null != V ? V : J.delayDuration,
            ei = (0, R.useRef)(!1),
            [eu = !1, ef] = (0, G.T)({
              prop: _,
              defaultProp: N,
              onChange: (D) => {
                D
                  ? (J.onOpen(), document.dispatchEvent(new CustomEvent(eo)))
                  : J.onClose(),
                  null == U || U(D);
              },
            }),
            ed = (0, R.useMemo)(
              () =>
                eu ? (ei.current ? "delayed-open" : "instant-open") : "closed",
              [eu]
            ),
            eh = (0, R.useCallback)(() => {
              window.clearTimeout(ee.current), (ei.current = !1), ef(!0);
            }, [ef]),
            ep = (0, R.useCallback)(() => {
              window.clearTimeout(ee.current), ef(!1);
            }, [ef]),
            eg = (0, R.useCallback)(() => {
              window.clearTimeout(ee.current),
                (ee.current = window.setTimeout(() => {
                  (ei.current = !0), ef(!0);
                }, en));
            }, [en, ef]);
          return (
            (0, R.useEffect)(() => () => window.clearTimeout(ee.current), []),
            (0, R.createElement)(
              K.fC,
              Z,
              (0, R.createElement)(
                ec,
                {
                  scope: F,
                  contentId: Q,
                  open: eu,
                  stateAttribute: ed,
                  trigger: X,
                  onTriggerChange: Y,
                  onTriggerEnter: (0, R.useCallback)(() => {
                    J.isOpenDelayed ? eg() : eh();
                  }, [J.isOpenDelayed, eg, eh]),
                  onTriggerLeave: (0, R.useCallback)(() => {
                    et ? ep() : window.clearTimeout(ee.current);
                  }, [ep, et]),
                  onOpen: eh,
                  onClose: ep,
                  disableHoverableContent: et,
                },
                B
              )
            )
          );
        },
        ed = "TooltipTrigger",
        eh = (0, R.forwardRef)((D, F) => {
          let { __scopeTooltip: B, ...H } = D,
            V = ef(ed, B),
            W = ea(ed, B),
            J = er(B),
            Z = (0, R.useRef)(null),
            Y = (0, U.e)(F, Z, V.onTriggerChange),
            G = (0, R.useRef)(!1),
            Q = (0, R.useRef)(!1),
            ee = (0, R.useCallback)(() => (G.current = !1), []);
          return (
            (0, R.useEffect)(
              () => () => document.removeEventListener("pointerup", ee),
              [ee]
            ),
            (0, R.createElement)(
              K.ee,
              (0, _.Z)({ asChild: !0 }, J),
              (0, R.createElement)(
                X.WV.button,
                (0, _.Z)(
                  {
                    "aria-describedby": V.open ? V.contentId : void 0,
                    "data-state": V.stateAttribute,
                  },
                  H,
                  {
                    ref: Y,
                    onPointerMove: (0, N.M)(D.onPointerMove, (D) => {
                      "touch" === D.pointerType ||
                        Q.current ||
                        W.isPointerInTransitRef.current ||
                        (V.onTriggerEnter(), (Q.current = !0));
                    }),
                    onPointerLeave: (0, N.M)(D.onPointerLeave, () => {
                      V.onTriggerLeave(), (Q.current = !1);
                    }),
                    onPointerDown: (0, N.M)(D.onPointerDown, () => {
                      (G.current = !0),
                        document.addEventListener("pointerup", ee, {
                          once: !0,
                        });
                    }),
                    onFocus: (0, N.M)(D.onFocus, () => {
                      G.current || V.onOpen();
                    }),
                    onBlur: (0, N.M)(D.onBlur, V.onClose),
                    onClick: (0, N.M)(D.onClick, V.onClose),
                  }
                )
              )
            )
          );
        }),
        ep = "TooltipPortal",
        [eg, em] = ee(ep, { forceMount: void 0 }),
        $a093c7e1ec25a057$export$7b36b8f925ab7497 = (D) => {
          let {
              __scopeTooltip: F,
              forceMount: B,
              children: _,
              container: N,
            } = D,
            U = ef(ep, F);
          return (0, R.createElement)(
            eg,
            { scope: F, forceMount: B },
            (0, R.createElement)(
              Z.z,
              { present: B || U.open },
              (0, R.createElement)(J.h, { asChild: !0, container: N }, _)
            )
          );
        },
        ey = "TooltipContent",
        eD = (0, R.forwardRef)((D, F) => {
          let B = em(ey, D.__scopeTooltip),
            { forceMount: N = B.forceMount, side: U = "top", ...H } = D,
            V = ef(ey, D.__scopeTooltip);
          return (0, R.createElement)(
            Z.z,
            { present: N || V.open },
            V.disableHoverableContent
              ? (0, R.createElement)(eA, (0, _.Z)({ side: U }, H, { ref: F }))
              : (0, R.createElement)(eE, (0, _.Z)({ side: U }, H, { ref: F }))
          );
        }),
        eE = (0, R.forwardRef)((D, F) => {
          let B = ef(ey, D.__scopeTooltip),
            N = ea(ey, D.__scopeTooltip),
            H = (0, R.useRef)(null),
            V = (0, U.e)(F, H),
            [W, K] = (0, R.useState)(null),
            { trigger: J, onClose: Z } = B,
            X = H.current,
            { onPointerInTransitChange: Y } = N,
            G = (0, R.useCallback)(() => {
              K(null), Y(!1);
            }, [Y]),
            Q = (0, R.useCallback)(
              (D, F) => {
                let B = D.currentTarget,
                  _ = { x: D.clientX, y: D.clientY },
                  R = $a093c7e1ec25a057$var$getExitSideFromRect(
                    _,
                    B.getBoundingClientRect()
                  ),
                  N = $a093c7e1ec25a057$var$getPaddedExitPoints(_, R),
                  U = $a093c7e1ec25a057$var$getPointsFromRect(
                    F.getBoundingClientRect()
                  ),
                  H = $a093c7e1ec25a057$var$getHull([...N, ...U]);
                K(H), Y(!0);
              },
              [Y]
            );
          return (
            (0, R.useEffect)(() => () => G(), [G]),
            (0, R.useEffect)(() => {
              if (J && X) {
                let handleTriggerLeave = (D) => Q(D, X),
                  handleContentLeave = (D) => Q(D, J);
                return (
                  J.addEventListener("pointerleave", handleTriggerLeave),
                  X.addEventListener("pointerleave", handleContentLeave),
                  () => {
                    J.removeEventListener("pointerleave", handleTriggerLeave),
                      X.removeEventListener("pointerleave", handleContentLeave);
                  }
                );
              }
            }, [J, X, Q, G]),
            (0, R.useEffect)(() => {
              if (W) {
                let handleTrackPointerGrace = (D) => {
                  let F = D.target,
                    B = { x: D.clientX, y: D.clientY },
                    _ =
                      (null == J ? void 0 : J.contains(F)) ||
                      (null == X ? void 0 : X.contains(F)),
                    R = !$a093c7e1ec25a057$var$isPointInPolygon(B, W);
                  _ ? G() : R && (G(), Z());
                };
                return (
                  document.addEventListener(
                    "pointermove",
                    handleTrackPointerGrace
                  ),
                  () =>
                    document.removeEventListener(
                      "pointermove",
                      handleTrackPointerGrace
                    )
                );
              }
            }, [J, X, W, Z, G]),
            (0, R.createElement)(eA, (0, _.Z)({}, D, { ref: V }))
          );
        }),
        [eC, eb] = ee(es, { isInside: !1 }),
        eA = (0, R.forwardRef)((D, F) => {
          let {
              __scopeTooltip: B,
              children: N,
              "aria-label": U,
              onEscapeKeyDown: H,
              onPointerDownOutside: W,
              ...J
            } = D,
            Z = ef(ey, B),
            X = er(B),
            { onClose: G } = Z;
          return (
            (0, R.useEffect)(
              () => (
                document.addEventListener(eo, G),
                () => document.removeEventListener(eo, G)
              ),
              [G]
            ),
            (0, R.useEffect)(() => {
              if (Z.trigger) {
                let handleScroll = (D) => {
                  let F = D.target;
                  null != F && F.contains(Z.trigger) && G();
                };
                return (
                  window.addEventListener("scroll", handleScroll, {
                    capture: !0,
                  }),
                  () =>
                    window.removeEventListener("scroll", handleScroll, {
                      capture: !0,
                    })
                );
              }
            }, [Z.trigger, G]),
            (0, R.createElement)(
              V.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: H,
                onPointerDownOutside: W,
                onFocusOutside: (D) => D.preventDefault(),
                onDismiss: G,
              },
              (0, R.createElement)(
                K.VY,
                (0, _.Z)({ "data-state": Z.stateAttribute }, X, J, {
                  ref: F,
                  style: {
                    ...J.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
                (0, R.createElement)(Y.A4, null, N),
                (0, R.createElement)(
                  eC,
                  { scope: B, isInside: !0 },
                  (0, R.createElement)(
                    Q.f,
                    { id: Z.contentId, role: "tooltip" },
                    U || N
                  )
                )
              )
            )
          );
        }),
        ew = "TooltipArrow",
        eF = (0, R.forwardRef)((D, F) => {
          let { __scopeTooltip: B, ...N } = D,
            U = er(B),
            H = eb(ew, B);
          return H.isInside
            ? null
            : (0, R.createElement)(K.Eh, (0, _.Z)({}, U, N, { ref: F }));
        });
      function $a093c7e1ec25a057$var$getExitSideFromRect(D, F) {
        let B = Math.abs(F.top - D.y),
          _ = Math.abs(F.bottom - D.y),
          R = Math.abs(F.right - D.x),
          N = Math.abs(F.left - D.x);
        switch (Math.min(B, _, R, N)) {
          case N:
            return "left";
          case R:
            return "right";
          case B:
            return "top";
          case _:
            return "bottom";
          default:
            throw Error("unreachable");
        }
      }
      function $a093c7e1ec25a057$var$getPaddedExitPoints(D, F, B = 5) {
        let _ = [];
        switch (F) {
          case "top":
            _.push({ x: D.x - B, y: D.y + B }, { x: D.x + B, y: D.y + B });
            break;
          case "bottom":
            _.push({ x: D.x - B, y: D.y - B }, { x: D.x + B, y: D.y - B });
            break;
          case "left":
            _.push({ x: D.x + B, y: D.y - B }, { x: D.x + B, y: D.y + B });
            break;
          case "right":
            _.push({ x: D.x - B, y: D.y - B }, { x: D.x - B, y: D.y + B });
        }
        return _;
      }
      function $a093c7e1ec25a057$var$getPointsFromRect(D) {
        let { top: F, right: B, bottom: _, left: R } = D;
        return [
          { x: R, y: F },
          { x: B, y: F },
          { x: B, y: _ },
          { x: R, y: _ },
        ];
      }
      function $a093c7e1ec25a057$var$isPointInPolygon(D, F) {
        let { x: B, y: _ } = D,
          R = !1;
        for (let D = 0, N = F.length - 1; D < F.length; N = D++) {
          let U = F[D].x,
            H = F[D].y,
            V = F[N].x,
            W = F[N].y,
            K = H > _ != W > _ && B < ((V - U) * (_ - H)) / (W - H) + U;
          K && (R = !R);
        }
        return R;
      }
      function $a093c7e1ec25a057$var$getHull(D) {
        let F = D.slice();
        return (
          F.sort((D, F) =>
            D.x < F.x ? -1 : D.x > F.x ? 1 : D.y < F.y ? -1 : D.y > F.y ? 1 : 0
          ),
          $a093c7e1ec25a057$var$getHullPresorted(F)
        );
      }
      function $a093c7e1ec25a057$var$getHullPresorted(D) {
        if (D.length <= 1) return D.slice();
        let F = [];
        for (let B = 0; B < D.length; B++) {
          let _ = D[B];
          for (; F.length >= 2; ) {
            let D = F[F.length - 1],
              B = F[F.length - 2];
            if ((D.x - B.x) * (_.y - B.y) >= (D.y - B.y) * (_.x - B.x)) F.pop();
            else break;
          }
          F.push(_);
        }
        F.pop();
        let B = [];
        for (let F = D.length - 1; F >= 0; F--) {
          let _ = D[F];
          for (; B.length >= 2; ) {
            let D = B[B.length - 1],
              F = B[B.length - 2];
            if ((D.x - F.x) * (_.y - F.y) >= (D.y - F.y) * (_.x - F.x)) B.pop();
            else break;
          }
          B.push(_);
        }
        return (B.pop(),
        1 === F.length &&
          1 === B.length &&
          F[0].x === B[0].x &&
          F[0].y === B[0].y)
          ? F
          : F.concat(B);
      }
      let eB = $a093c7e1ec25a057$export$f78649fb9ca566b8,
        e_ = $a093c7e1ec25a057$export$28c660c63b792dea,
        ex = eh,
        eS = $a093c7e1ec25a057$export$7b36b8f925ab7497,
        ek = eD,
        eO = eF;
    },
    9698: function (D, F, B) {
      "use strict";
      B.d(F, {
        W: function () {
          return $b1b2314f5f9a1d84$export$25bec8c6f54ee79a;
        },
      });
      var _ = B(7294);
      function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(D) {
        let F = (0, _.useRef)(D);
        return (
          (0, _.useEffect)(() => {
            F.current = D;
          }),
          (0, _.useMemo)(
            () =>
              (...D) => {
                var B;
                return null === (B = F.current) || void 0 === B
                  ? void 0
                  : B.call(F, ...D);
              },
            []
          )
        );
      }
    },
    7342: function (D, F, B) {
      "use strict";
      B.d(F, {
        T: function () {
          return $71cd76cc60e0454e$export$6f32135080cb4c3;
        },
      });
      var _ = B(7294),
        R = B(9698);
      function $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: D,
        defaultProp: F,
        onChange: B = () => {},
      }) {
        let [N, U] = $71cd76cc60e0454e$var$useUncontrolledState({
            defaultProp: F,
            onChange: B,
          }),
          H = void 0 !== D,
          V = H ? D : N,
          W = (0, R.W)(B),
          K = (0, _.useCallback)(
            (F) => {
              if (H) {
                let B = F,
                  _ = "function" == typeof F ? B(D) : F;
                _ !== D && W(_);
              } else U(F);
            },
            [H, D, U, W]
          );
        return [V, K];
      }
      function $71cd76cc60e0454e$var$useUncontrolledState({
        defaultProp: D,
        onChange: F,
      }) {
        let B = (0, _.useState)(D),
          [N] = B,
          U = (0, _.useRef)(N),
          H = (0, R.W)(F);
        return (
          (0, _.useEffect)(() => {
            U.current !== N && (H(N), (U.current = N));
          }, [N, U, H]),
          B
        );
      }
    },
    9981: function (D, F, B) {
      "use strict";
      B.d(F, {
        b: function () {
          return R;
        },
      });
      var _ = B(7294);
      let R = (null == globalThis ? void 0 : globalThis.document)
        ? _.useLayoutEffect
        : () => {};
    },
    6219: function (D, F, B) {
      "use strict";
      B.d(F, {
        f: function () {
          return H;
        },
      });
      var _ = B(7462),
        R = B(7294),
        N = B(5320);
      let U = (0, R.forwardRef)((D, F) =>
          (0, R.createElement)(
            N.WV.span,
            (0, _.Z)({}, D, {
              ref: F,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...D.style,
              },
            })
          )
        ),
        H = U;
    },
    6154: function (D, F, B) {
      "use strict";
      function bind(D, F) {
        return function () {
          return D.apply(F, arguments);
        };
      }
      B.d(F, {
        Z: function () {
          return eG;
        },
      });
      let { toString: _ } = Object.prototype,
        { getPrototypeOf: R } = Object,
        N =
          ((ec = Object.create(null)),
          (D) => {
            let F = _.call(D);
            return ec[F] || (ec[F] = F.slice(8, -1).toLowerCase());
          }),
        kindOfTest = (D) => ((D = D.toLowerCase()), (F) => N(F) === D),
        typeOfTest = (D) => (F) => typeof F === D,
        { isArray: U } = Array,
        H = typeOfTest("undefined");
      function isBuffer(D) {
        return (
          null !== D &&
          !H(D) &&
          null !== D.constructor &&
          !H(D.constructor) &&
          K(D.constructor.isBuffer) &&
          D.constructor.isBuffer(D)
        );
      }
      let V = kindOfTest("ArrayBuffer");
      function isArrayBufferView(D) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(D)
          : D && D.buffer && V(D.buffer);
      }
      let W = typeOfTest("string"),
        K = typeOfTest("function"),
        J = typeOfTest("number"),
        isObject = (D) => null !== D && "object" == typeof D,
        isBoolean = (D) => !0 === D || !1 === D,
        isPlainObject = (D) => {
          if ("object" !== N(D)) return !1;
          let F = R(D);
          return (
            (null === F ||
              F === Object.prototype ||
              null === Object.getPrototypeOf(F)) &&
            !(Symbol.toStringTag in D) &&
            !(Symbol.iterator in D)
          );
        },
        Z = kindOfTest("Date"),
        X = kindOfTest("File"),
        Y = kindOfTest("Blob"),
        G = kindOfTest("FileList"),
        isStream = (D) => isObject(D) && K(D.pipe),
        isFormData = (D) => {
          let F;
          return (
            D &&
            (("function" == typeof FormData && D instanceof FormData) ||
              (K(D.append) &&
                ("formdata" === (F = N(D)) ||
                  ("object" === F &&
                    K(D.toString) &&
                    "[object FormData]" === D.toString()))))
          );
        },
        Q = kindOfTest("URLSearchParams"),
        trim = (D) =>
          D.trim
            ? D.trim()
            : D.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      function forEach(D, F, { allOwnKeys: B = !1 } = {}) {
        let _, R;
        if (null != D) {
          if (("object" != typeof D && (D = [D]), U(D)))
            for (_ = 0, R = D.length; _ < R; _++) F.call(null, D[_], _, D);
          else {
            let R;
            let N = B ? Object.getOwnPropertyNames(D) : Object.keys(D),
              U = N.length;
            for (_ = 0; _ < U; _++) (R = N[_]), F.call(null, D[R], R, D);
          }
        }
      }
      function findKey(D, F) {
        let B;
        F = F.toLowerCase();
        let _ = Object.keys(D),
          R = _.length;
        for (; R-- > 0; ) if (F === (B = _[R]).toLowerCase()) return B;
        return null;
      }
      let ee =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        isContextDefined = (D) => !H(D) && D !== ee;
      function merge() {
        let { caseless: D } = (isContextDefined(this) && this) || {},
          F = {},
          assignValue = (B, _) => {
            let R = (D && findKey(F, _)) || _;
            isPlainObject(F[R]) && isPlainObject(B)
              ? (F[R] = merge(F[R], B))
              : isPlainObject(B)
              ? (F[R] = merge({}, B))
              : U(B)
              ? (F[R] = B.slice())
              : (F[R] = B);
          };
        for (let D = 0, F = arguments.length; D < F; D++)
          arguments[D] && forEach(arguments[D], assignValue);
        return F;
      }
      let extend = (D, F, B, { allOwnKeys: _ } = {}) => (
          forEach(
            F,
            (F, _) => {
              B && K(F) ? (D[_] = bind(F, B)) : (D[_] = F);
            },
            { allOwnKeys: _ }
          ),
          D
        ),
        stripBOM = (D) => (65279 === D.charCodeAt(0) && (D = D.slice(1)), D),
        inherits = (D, F, B, _) => {
          (D.prototype = Object.create(F.prototype, _)),
            (D.prototype.constructor = D),
            Object.defineProperty(D, "super", { value: F.prototype }),
            B && Object.assign(D.prototype, B);
        },
        toFlatObject = (D, F, B, _) => {
          let N, U, H;
          let V = {};
          if (((F = F || {}), null == D)) return F;
          do {
            for (U = (N = Object.getOwnPropertyNames(D)).length; U-- > 0; )
              (H = N[U]),
                (!_ || _(H, D, F)) && !V[H] && ((F[H] = D[H]), (V[H] = !0));
            D = !1 !== B && R(D);
          } while (D && (!B || B(D, F)) && D !== Object.prototype);
          return F;
        },
        endsWith = (D, F, B) => {
          (D = String(D)),
            (void 0 === B || B > D.length) && (B = D.length),
            (B -= F.length);
          let _ = D.indexOf(F, B);
          return -1 !== _ && _ === B;
        },
        toArray = (D) => {
          if (!D) return null;
          if (U(D)) return D;
          let F = D.length;
          if (!J(F)) return null;
          let B = Array(F);
          for (; F-- > 0; ) B[F] = D[F];
          return B;
        },
        et =
          ((ef = "undefined" != typeof Uint8Array && R(Uint8Array)),
          (D) => ef && D instanceof ef),
        forEachEntry = (D, F) => {
          let B;
          let _ = D && D[Symbol.iterator],
            R = _.call(D);
          for (; (B = R.next()) && !B.done; ) {
            let _ = B.value;
            F.call(D, _[0], _[1]);
          }
        },
        matchAll = (D, F) => {
          let B;
          let _ = [];
          for (; null !== (B = D.exec(F)); ) _.push(B);
          return _;
        },
        er = kindOfTest("HTMLFormElement"),
        toCamelCase = (D) =>
          D.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (D, F, B) {
            return F.toUpperCase() + B;
          }),
        en = (
          ({ hasOwnProperty: D }) =>
          (F, B) =>
            D.call(F, B)
        )(Object.prototype),
        ei = kindOfTest("RegExp"),
        reduceDescriptors = (D, F) => {
          let B = Object.getOwnPropertyDescriptors(D),
            _ = {};
          forEach(B, (B, R) => {
            let N;
            !1 !== (N = F(B, R, D)) && (_[R] = N || B);
          }),
            Object.defineProperties(D, _);
        },
        freezeMethods = (D) => {
          reduceDescriptors(D, (F, B) => {
            if (K(D) && -1 !== ["arguments", "caller", "callee"].indexOf(B))
              return !1;
            let _ = D[B];
            if (K(_)) {
              if (((F.enumerable = !1), "writable" in F)) {
                F.writable = !1;
                return;
              }
              F.set ||
                (F.set = () => {
                  throw Error("Can not rewrite read-only method '" + B + "'");
                });
            }
          });
        },
        toObjectSet = (D, F) => {
          let B = {},
            define = (D) => {
              D.forEach((D) => {
                B[D] = !0;
              });
            };
          return define(U(D) ? D : String(D).split(F)), B;
        },
        noop = () => {},
        toFiniteNumber = (D, F) => (Number.isFinite((D = +D)) ? D : F),
        eo = "abcdefghijklmnopqrstuvwxyz",
        eu = "0123456789",
        ea = { DIGIT: eu, ALPHA: eo, ALPHA_DIGIT: eo + eo.toUpperCase() + eu },
        generateString = (D = 16, F = ea.ALPHA_DIGIT) => {
          let B = "",
            { length: _ } = F;
          for (; D--; ) B += F[(Math.random() * _) | 0];
          return B;
        };
      function isSpecCompliantForm(D) {
        return !!(
          D &&
          K(D.append) &&
          "FormData" === D[Symbol.toStringTag] &&
          D[Symbol.iterator]
        );
      }
      let toJSONObject = (D) => {
          let F = Array(10),
            visit = (D, B) => {
              if (isObject(D)) {
                if (F.indexOf(D) >= 0) return;
                if (!("toJSON" in D)) {
                  F[B] = D;
                  let _ = U(D) ? [] : {};
                  return (
                    forEach(D, (D, F) => {
                      let R = visit(D, B + 1);
                      H(R) || (_[F] = R);
                    }),
                    (F[B] = void 0),
                    _
                  );
                }
              }
              return D;
            };
          return visit(D, 0);
        },
        es = kindOfTest("AsyncFunction"),
        isThenable = (D) =>
          D && (isObject(D) || K(D)) && K(D.then) && K(D.catch);
      var ec,
        ef,
        ed = {
          isArray: U,
          isArrayBuffer: V,
          isBuffer,
          isFormData,
          isArrayBufferView,
          isString: W,
          isNumber: J,
          isBoolean,
          isObject,
          isPlainObject,
          isUndefined: H,
          isDate: Z,
          isFile: X,
          isBlob: Y,
          isRegExp: ei,
          isFunction: K,
          isStream,
          isURLSearchParams: Q,
          isTypedArray: et,
          isFileList: G,
          forEach,
          merge,
          extend,
          trim,
          stripBOM,
          inherits,
          toFlatObject,
          kindOf: N,
          kindOfTest,
          endsWith,
          toArray,
          forEachEntry,
          matchAll,
          isHTMLForm: er,
          hasOwnProperty: en,
          hasOwnProp: en,
          reduceDescriptors,
          freezeMethods,
          toObjectSet,
          toCamelCase,
          noop,
          toFiniteNumber,
          findKey,
          global: ee,
          isContextDefined,
          ALPHABET: ea,
          generateString,
          isSpecCompliantForm,
          toJSONObject,
          isAsyncFn: es,
          isThenable,
        };
      function AxiosError(D, F, B, _, R) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = D),
          (this.name = "AxiosError"),
          F && (this.code = F),
          B && (this.config = B),
          _ && (this.request = _),
          R && (this.response = R);
      }
      ed.inherits(AxiosError, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: ed.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      let eh = AxiosError.prototype,
        ep = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((D) => {
        ep[D] = { value: D };
      }),
        Object.defineProperties(AxiosError, ep),
        Object.defineProperty(eh, "isAxiosError", { value: !0 }),
        (AxiosError.from = (D, F, B, _, R, N) => {
          let U = Object.create(eh);
          return (
            ed.toFlatObject(
              D,
              U,
              function (D) {
                return D !== Error.prototype;
              },
              (D) => "isAxiosError" !== D
            ),
            AxiosError.call(U, D.message, F, B, _, R),
            (U.cause = D),
            (U.name = D.name),
            N && Object.assign(U, N),
            U
          );
        });
      var eg = AxiosError,
        em = null,
        ey = B(1876).Buffer;
      function isVisitable(D) {
        return ed.isPlainObject(D) || ed.isArray(D);
      }
      function removeBrackets(D) {
        return ed.endsWith(D, "[]") ? D.slice(0, -2) : D;
      }
      function renderKey(D, F, B) {
        return D
          ? D.concat(F)
              .map(function (D, F) {
                return (D = removeBrackets(D)), !B && F ? "[" + D + "]" : D;
              })
              .join(B ? "." : "")
          : F;
      }
      function isFlatArray(D) {
        return ed.isArray(D) && !D.some(isVisitable);
      }
      let eD = ed.toFlatObject(ed, {}, null, function (D) {
        return /^is[A-Z]/.test(D);
      });
      var helpers_toFormData = function (D, F, B) {
        if (!ed.isObject(D)) throw TypeError("target must be an object");
        (F = F || new (em || FormData)()),
          (B = ed.toFlatObject(
            B,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (D, F) {
              return !ed.isUndefined(F[D]);
            }
          ));
        let _ = B.metaTokens,
          R = B.visitor || defaultVisitor,
          N = B.dots,
          U = B.indexes,
          H = B.Blob || ("undefined" != typeof Blob && Blob),
          V = H && ed.isSpecCompliantForm(F);
        if (!ed.isFunction(R)) throw TypeError("visitor must be a function");
        function convertValue(D) {
          if (null === D) return "";
          if (ed.isDate(D)) return D.toISOString();
          if (!V && ed.isBlob(D))
            throw new eg("Blob is not supported. Use a Buffer instead.");
          return ed.isArrayBuffer(D) || ed.isTypedArray(D)
            ? V && "function" == typeof Blob
              ? new Blob([D])
              : ey.from(D)
            : D;
        }
        function defaultVisitor(D, B, R) {
          let H = D;
          if (D && !R && "object" == typeof D) {
            if (ed.endsWith(B, "{}"))
              (B = _ ? B : B.slice(0, -2)), (D = JSON.stringify(D));
            else if (
              (ed.isArray(D) && isFlatArray(D)) ||
              ((ed.isFileList(D) || ed.endsWith(B, "[]")) &&
                (H = ed.toArray(D)))
            )
              return (
                (B = removeBrackets(B)),
                H.forEach(function (D, _) {
                  ed.isUndefined(D) ||
                    null === D ||
                    F.append(
                      !0 === U
                        ? renderKey([B], _, N)
                        : null === U
                        ? B
                        : B + "[]",
                      convertValue(D)
                    );
                }),
                !1
              );
          }
          return (
            !!isVisitable(D) ||
            (F.append(renderKey(R, B, N), convertValue(D)), !1)
          );
        }
        let W = [],
          K = Object.assign(eD, { defaultVisitor, convertValue, isVisitable });
        function build(D, B) {
          if (!ed.isUndefined(D)) {
            if (-1 !== W.indexOf(D))
              throw Error("Circular reference detected in " + B.join("."));
            W.push(D),
              ed.forEach(D, function (D, _) {
                let N =
                  !(ed.isUndefined(D) || null === D) &&
                  R.call(F, D, ed.isString(_) ? _.trim() : _, B, K);
                !0 === N && build(D, B ? B.concat(_) : [_]);
              }),
              W.pop();
          }
        }
        if (!ed.isObject(D)) throw TypeError("data must be an object");
        return build(D), F;
      };
      function encode(D) {
        let F = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\x00",
        };
        return encodeURIComponent(D).replace(/[!'()~]|%20|%00/g, function (D) {
          return F[D];
        });
      }
      function AxiosURLSearchParams(D, F) {
        (this._pairs = []), D && helpers_toFormData(D, this, F);
      }
      let eE = AxiosURLSearchParams.prototype;
      (eE.append = function (D, F) {
        this._pairs.push([D, F]);
      }),
        (eE.toString = function (D) {
          let F = D
            ? function (F) {
                return D.call(this, F, encode);
              }
            : encode;
          return this._pairs
            .map(function (D) {
              return F(D[0]) + "=" + F(D[1]);
            }, "")
            .join("&");
        });
      var eC = AxiosURLSearchParams;
      function buildURL_encode(D) {
        return encodeURIComponent(D)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function buildURL(D, F, B) {
        let _;
        if (!F) return D;
        let R = (B && B.encode) || buildURL_encode,
          N = B && B.serialize;
        if (
          (_ = N
            ? N(F, B)
            : ed.isURLSearchParams(F)
            ? F.toString()
            : new eC(F, B).toString(R))
        ) {
          let F = D.indexOf("#");
          -1 !== F && (D = D.slice(0, F)),
            (D += (-1 === D.indexOf("?") ? "?" : "&") + _);
        }
        return D;
      }
      let InterceptorManager = class InterceptorManager {
        constructor() {
          this.handlers = [];
        }
        use(D, F, B) {
          return (
            this.handlers.push({
              fulfilled: D,
              rejected: F,
              synchronous: !!B && B.synchronous,
              runWhen: B ? B.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(D) {
          this.handlers[D] && (this.handlers[D] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(D) {
          ed.forEach(this.handlers, function (F) {
            null !== F && D(F);
          });
        }
      };
      var eb = InterceptorManager,
        eA = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        ew = "undefined" != typeof URLSearchParams ? URLSearchParams : eC,
        eF = "undefined" != typeof FormData ? FormData : null,
        eB = "undefined" != typeof Blob ? Blob : null;
      let e_ = (() => {
          let D;
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== (D = navigator.product) &&
                "NativeScript" !== D &&
                "NS" !== D)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        })(),
        ex =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts;
      var eS = {
        classes: { URLSearchParams: ew, FormData: eF, Blob: eB },
        isStandardBrowserEnv: e_,
        isStandardBrowserWebWorkerEnv: ex,
        protocols: ["http", "https", "file", "blob", "url", "data"],
      };
      function toURLEncodedForm(D, F) {
        return helpers_toFormData(
          D,
          new eS.classes.URLSearchParams(),
          Object.assign(
            {
              visitor: function (D, F, B, _) {
                return eS.isNode && ed.isBuffer(D)
                  ? (this.append(F, D.toString("base64")), !1)
                  : _.defaultVisitor.apply(this, arguments);
              },
            },
            F
          )
        );
      }
      function parsePropPath(D) {
        return ed
          .matchAll(/\w+|\[(\w*)]/g, D)
          .map((D) => ("[]" === D[0] ? "" : D[1] || D[0]));
      }
      function arrayToObject(D) {
        let F, B;
        let _ = {},
          R = Object.keys(D),
          N = R.length;
        for (F = 0; F < N; F++) _[(B = R[F])] = D[B];
        return _;
      }
      var helpers_formDataToJSON = function (D) {
        function buildPath(D, F, B, _) {
          let R = D[_++],
            N = Number.isFinite(+R),
            U = _ >= D.length;
          if (((R = !R && ed.isArray(B) ? B.length : R), U))
            return ed.hasOwnProp(B, R) ? (B[R] = [B[R], F]) : (B[R] = F), !N;
          (B[R] && ed.isObject(B[R])) || (B[R] = []);
          let H = buildPath(D, F, B[R], _);
          return H && ed.isArray(B[R]) && (B[R] = arrayToObject(B[R])), !N;
        }
        if (ed.isFormData(D) && ed.isFunction(D.entries)) {
          let F = {};
          return (
            ed.forEachEntry(D, (D, B) => {
              buildPath(parsePropPath(D), B, F, 0);
            }),
            F
          );
        }
        return null;
      };
      function stringifySafely(D, F, B) {
        if (ed.isString(D))
          try {
            return (F || JSON.parse)(D), ed.trim(D);
          } catch (D) {
            if ("SyntaxError" !== D.name) throw D;
          }
        return (B || JSON.stringify)(D);
      }
      let ek = {
        transitional: eA,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (D, F) {
            let B;
            let _ = F.getContentType() || "",
              R = _.indexOf("application/json") > -1,
              N = ed.isObject(D);
            N && ed.isHTMLForm(D) && (D = new FormData(D));
            let U = ed.isFormData(D);
            if (U)
              return R && R ? JSON.stringify(helpers_formDataToJSON(D)) : D;
            if (
              ed.isArrayBuffer(D) ||
              ed.isBuffer(D) ||
              ed.isStream(D) ||
              ed.isFile(D) ||
              ed.isBlob(D)
            )
              return D;
            if (ed.isArrayBufferView(D)) return D.buffer;
            if (ed.isURLSearchParams(D))
              return (
                F.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                D.toString()
              );
            if (N) {
              if (_.indexOf("application/x-www-form-urlencoded") > -1)
                return toURLEncodedForm(D, this.formSerializer).toString();
              if (
                (B = ed.isFileList(D)) ||
                _.indexOf("multipart/form-data") > -1
              ) {
                let F = this.env && this.env.FormData;
                return helpers_toFormData(
                  B ? { "files[]": D } : D,
                  F && new F(),
                  this.formSerializer
                );
              }
            }
            return N || R
              ? (F.setContentType("application/json", !1), stringifySafely(D))
              : D;
          },
        ],
        transformResponse: [
          function (D) {
            let F = this.transitional || ek.transitional,
              B = F && F.forcedJSONParsing,
              _ = "json" === this.responseType;
            if (D && ed.isString(D) && ((B && !this.responseType) || _)) {
              let B = F && F.silentJSONParsing,
                R = !B && _;
              try {
                return JSON.parse(D);
              } catch (D) {
                if (R) {
                  if ("SyntaxError" === D.name)
                    throw eg.from(
                      D,
                      eg.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw D;
                }
              }
            }
            return D;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: eS.classes.FormData, Blob: eS.classes.Blob },
        validateStatus: function (D) {
          return D >= 200 && D < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      ed.forEach(["delete", "get", "head", "post", "put", "patch"], (D) => {
        ek.headers[D] = {};
      });
      var eO = ek;
      let eT = ed.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]);
      var parseHeaders = (D) => {
        let F, B, _;
        let R = {};
        return (
          D &&
            D.split("\n").forEach(function (D) {
              (_ = D.indexOf(":")),
                (F = D.substring(0, _).trim().toLowerCase()),
                (B = D.substring(_ + 1).trim()),
                !F ||
                  (R[F] && eT[F]) ||
                  ("set-cookie" === F
                    ? R[F]
                      ? R[F].push(B)
                      : (R[F] = [B])
                    : (R[F] = R[F] ? R[F] + ", " + B : B));
            }),
          R
        );
      };
      let eR = Symbol("internals");
      function normalizeHeader(D) {
        return D && String(D).trim().toLowerCase();
      }
      function normalizeValue(D) {
        return !1 === D || null == D
          ? D
          : ed.isArray(D)
          ? D.map(normalizeValue)
          : String(D);
      }
      function parseTokens(D) {
        let F;
        let B = Object.create(null),
          _ = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        for (; (F = _.exec(D)); ) B[F[1]] = F[2];
        return B;
      }
      let isValidHeaderName = (D) =>
        /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(D.trim());
      function matchHeaderValue(D, F, B, _, R) {
        if (ed.isFunction(_)) return _.call(this, F, B);
        if ((R && (F = B), ed.isString(F))) {
          if (ed.isString(_)) return -1 !== F.indexOf(_);
          if (ed.isRegExp(_)) return _.test(F);
        }
      }
      function formatHeader(D) {
        return D.trim()
          .toLowerCase()
          .replace(/([a-z\d])(\w*)/g, (D, F, B) => F.toUpperCase() + B);
      }
      function buildAccessors(D, F) {
        let B = ed.toCamelCase(" " + F);
        ["get", "set", "has"].forEach((_) => {
          Object.defineProperty(D, _ + B, {
            value: function (D, B, R) {
              return this[_].call(this, F, D, B, R);
            },
            configurable: !0,
          });
        });
      }
      let AxiosHeaders = class AxiosHeaders {
        constructor(D) {
          D && this.set(D);
        }
        set(D, F, B) {
          let _ = this;
          function setHeader(D, F, B) {
            let R = normalizeHeader(F);
            if (!R) throw Error("header name must be a non-empty string");
            let N = ed.findKey(_, R);
            (N &&
              void 0 !== _[N] &&
              !0 !== B &&
              (void 0 !== B || !1 === _[N])) ||
              (_[N || F] = normalizeValue(D));
          }
          let setHeaders = (D, F) =>
            ed.forEach(D, (D, B) => setHeader(D, B, F));
          return (
            ed.isPlainObject(D) || D instanceof this.constructor
              ? setHeaders(D, F)
              : ed.isString(D) && (D = D.trim()) && !isValidHeaderName(D)
              ? setHeaders(parseHeaders(D), F)
              : null != D && setHeader(F, D, B),
            this
          );
        }
        get(D, F) {
          if ((D = normalizeHeader(D))) {
            let B = ed.findKey(this, D);
            if (B) {
              let D = this[B];
              if (!F) return D;
              if (!0 === F) return parseTokens(D);
              if (ed.isFunction(F)) return F.call(this, D, B);
              if (ed.isRegExp(F)) return F.exec(D);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(D, F) {
          if ((D = normalizeHeader(D))) {
            let B = ed.findKey(this, D);
            return !!(
              B &&
              void 0 !== this[B] &&
              (!F || matchHeaderValue(this, this[B], B, F))
            );
          }
          return !1;
        }
        delete(D, F) {
          let B = this,
            _ = !1;
          function deleteHeader(D) {
            if ((D = normalizeHeader(D))) {
              let R = ed.findKey(B, D);
              R &&
                (!F || matchHeaderValue(B, B[R], R, F)) &&
                (delete B[R], (_ = !0));
            }
          }
          return ed.isArray(D) ? D.forEach(deleteHeader) : deleteHeader(D), _;
        }
        clear(D) {
          let F = Object.keys(this),
            B = F.length,
            _ = !1;
          for (; B--; ) {
            let R = F[B];
            (!D || matchHeaderValue(this, this[R], R, D, !0)) &&
              (delete this[R], (_ = !0));
          }
          return _;
        }
        normalize(D) {
          let F = this,
            B = {};
          return (
            ed.forEach(this, (_, R) => {
              let N = ed.findKey(B, R);
              if (N) {
                (F[N] = normalizeValue(_)), delete F[R];
                return;
              }
              let U = D ? formatHeader(R) : String(R).trim();
              U !== R && delete F[R], (F[U] = normalizeValue(_)), (B[U] = !0);
            }),
            this
          );
        }
        concat(...D) {
          return this.constructor.concat(this, ...D);
        }
        toJSON(D) {
          let F = Object.create(null);
          return (
            ed.forEach(this, (B, _) => {
              null != B &&
                !1 !== B &&
                (F[_] = D && ed.isArray(B) ? B.join(", ") : B);
            }),
            F
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([D, F]) => D + ": " + F)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(D) {
          return D instanceof this ? D : new this(D);
        }
        static concat(D, ...F) {
          let B = new this(D);
          return F.forEach((D) => B.set(D)), B;
        }
        static accessor(D) {
          let F = (this[eR] = this[eR] = { accessors: {} }),
            B = F.accessors,
            _ = this.prototype;
          function defineAccessor(D) {
            let F = normalizeHeader(D);
            B[F] || (buildAccessors(_, D), (B[F] = !0));
          }
          return (
            ed.isArray(D) ? D.forEach(defineAccessor) : defineAccessor(D), this
          );
        }
      };
      AxiosHeaders.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        ed.reduceDescriptors(AxiosHeaders.prototype, ({ value: D }, F) => {
          let B = F[0].toUpperCase() + F.slice(1);
          return {
            get: () => D,
            set(D) {
              this[B] = D;
            },
          };
        }),
        ed.freezeMethods(AxiosHeaders);
      var eP = AxiosHeaders;
      function transformData(D, F) {
        let B = this || eO,
          _ = F || B,
          R = eP.from(_.headers),
          N = _.data;
        return (
          ed.forEach(D, function (D) {
            N = D.call(B, N, R.normalize(), F ? F.status : void 0);
          }),
          R.normalize(),
          N
        );
      }
      function isCancel(D) {
        return !!(D && D.__CANCEL__);
      }
      function CanceledError(D, F, B) {
        eg.call(this, null == D ? "canceled" : D, eg.ERR_CANCELED, F, B),
          (this.name = "CanceledError");
      }
      ed.inherits(CanceledError, eg, { __CANCEL__: !0 });
      var e$ = CanceledError;
      function settle(D, F, B) {
        let _ = B.config.validateStatus;
        !B.status || !_ || _(B.status)
          ? D(B)
          : F(
              new eg(
                "Request failed with status code " + B.status,
                [eg.ERR_BAD_REQUEST, eg.ERR_BAD_RESPONSE][
                  Math.floor(B.status / 100) - 4
                ],
                B.config,
                B.request,
                B
              )
            );
      }
      var eN = eS.isStandardBrowserEnv
        ? (function () {
            return {
              write: function (D, F, B, _, R, N) {
                let U = [];
                U.push(D + "=" + encodeURIComponent(F)),
                  ed.isNumber(B) &&
                    U.push("expires=" + new Date(B).toGMTString()),
                  ed.isString(_) && U.push("path=" + _),
                  ed.isString(R) && U.push("domain=" + R),
                  !0 === N && U.push("secure"),
                  (document.cookie = U.join("; "));
              },
              read: function (D) {
                let F = document.cookie.match(
                  RegExp("(^|;\\s*)(" + D + ")=([^;]*)")
                );
                return F ? decodeURIComponent(F[3]) : null;
              },
              remove: function (D) {
                this.write(D, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
      function isAbsoluteURL(D) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(D);
      }
      function combineURLs(D, F) {
        return F ? D.replace(/\/+$/, "") + "/" + F.replace(/^\/+/, "") : D;
      }
      function buildFullPath(D, F) {
        return D && !isAbsoluteURL(F) ? combineURLs(D, F) : F;
      }
      var eL = eS.isStandardBrowserEnv
        ? (function () {
            let D;
            let F = /(msie|trident)/i.test(navigator.userAgent),
              B = document.createElement("a");
            function resolveURL(D) {
              let _ = D;
              return (
                F && (B.setAttribute("href", _), (_ = B.href)),
                B.setAttribute("href", _),
                {
                  href: B.href,
                  protocol: B.protocol ? B.protocol.replace(/:$/, "") : "",
                  host: B.host,
                  search: B.search ? B.search.replace(/^\?/, "") : "",
                  hash: B.hash ? B.hash.replace(/^#/, "") : "",
                  hostname: B.hostname,
                  port: B.port,
                  pathname:
                    "/" === B.pathname.charAt(0)
                      ? B.pathname
                      : "/" + B.pathname,
                }
              );
            }
            return (
              (D = resolveURL(window.location.href)),
              function (F) {
                let B = ed.isString(F) ? resolveURL(F) : F;
                return B.protocol === D.protocol && B.host === D.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
      function parseProtocol(D) {
        let F = /^([-+\w]{1,25})(:?\/\/|:)/.exec(D);
        return (F && F[1]) || "";
      }
      var helpers_speedometer = function (D, F) {
        let B;
        D = D || 10;
        let _ = Array(D),
          R = Array(D),
          N = 0,
          U = 0;
        return (
          (F = void 0 !== F ? F : 1e3),
          function (H) {
            let V = Date.now(),
              W = R[U];
            B || (B = V), (_[N] = H), (R[N] = V);
            let K = U,
              J = 0;
            for (; K !== N; ) (J += _[K++]), (K %= D);
            if (((N = (N + 1) % D) === U && (U = (U + 1) % D), V - B < F))
              return;
            let Z = W && V - W;
            return Z ? Math.round((1e3 * J) / Z) : void 0;
          }
        );
      };
      function progressEventReducer(D, F) {
        let B = 0,
          _ = helpers_speedometer(50, 250);
        return (R) => {
          let N = R.loaded,
            U = R.lengthComputable ? R.total : void 0,
            H = N - B,
            V = _(H),
            W = N <= U;
          B = N;
          let K = {
            loaded: N,
            total: U,
            progress: U ? N / U : void 0,
            bytes: H,
            rate: V || void 0,
            estimated: V && U && W ? (U - N) / V : void 0,
            event: R,
          };
          (K[F ? "download" : "upload"] = !0), D(K);
        };
      }
      let eU = "undefined" != typeof XMLHttpRequest;
      var ej =
        eU &&
        function (D) {
          return new Promise(function (F, B) {
            let _,
              R,
              N = D.data,
              U = eP.from(D.headers).normalize(),
              H = D.responseType;
            function done() {
              D.cancelToken && D.cancelToken.unsubscribe(_),
                D.signal && D.signal.removeEventListener("abort", _);
            }
            ed.isFormData(N) &&
              (eS.isStandardBrowserEnv || eS.isStandardBrowserWebWorkerEnv
                ? U.setContentType(!1)
                : U.getContentType(/^\s*multipart\/form-data/)
                ? ed.isString((R = U.getContentType())) &&
                  U.setContentType(
                    R.replace(/^\s*(multipart\/form-data);+/, "$1")
                  )
                : U.setContentType("multipart/form-data"));
            let V = new XMLHttpRequest();
            if (D.auth) {
              let F = D.auth.username || "",
                B = D.auth.password
                  ? unescape(encodeURIComponent(D.auth.password))
                  : "";
              U.set("Authorization", "Basic " + btoa(F + ":" + B));
            }
            let W = buildFullPath(D.baseURL, D.url);
            function onloadend() {
              if (!V) return;
              let _ = eP.from(
                  "getAllResponseHeaders" in V && V.getAllResponseHeaders()
                ),
                R =
                  H && "text" !== H && "json" !== H
                    ? V.response
                    : V.responseText,
                N = {
                  data: R,
                  status: V.status,
                  statusText: V.statusText,
                  headers: _,
                  config: D,
                  request: V,
                };
              settle(
                function (D) {
                  F(D), done();
                },
                function (D) {
                  B(D), done();
                },
                N
              ),
                (V = null);
            }
            if (
              (V.open(
                D.method.toUpperCase(),
                buildURL(W, D.params, D.paramsSerializer),
                !0
              ),
              (V.timeout = D.timeout),
              "onloadend" in V
                ? (V.onloadend = onloadend)
                : (V.onreadystatechange = function () {
                    V &&
                      4 === V.readyState &&
                      (0 !== V.status ||
                        (V.responseURL &&
                          0 === V.responseURL.indexOf("file:"))) &&
                      setTimeout(onloadend);
                  }),
              (V.onabort = function () {
                V &&
                  (B(new eg("Request aborted", eg.ECONNABORTED, D, V)),
                  (V = null));
              }),
              (V.onerror = function () {
                B(new eg("Network Error", eg.ERR_NETWORK, D, V)), (V = null);
              }),
              (V.ontimeout = function () {
                let F = D.timeout
                    ? "timeout of " + D.timeout + "ms exceeded"
                    : "timeout exceeded",
                  _ = D.transitional || eA;
                D.timeoutErrorMessage && (F = D.timeoutErrorMessage),
                  B(
                    new eg(
                      F,
                      _.clarifyTimeoutError ? eg.ETIMEDOUT : eg.ECONNABORTED,
                      D,
                      V
                    )
                  ),
                  (V = null);
              }),
              eS.isStandardBrowserEnv)
            ) {
              let F = eL(W) && D.xsrfCookieName && eN.read(D.xsrfCookieName);
              F && U.set(D.xsrfHeaderName, F);
            }
            void 0 === N && U.setContentType(null),
              "setRequestHeader" in V &&
                ed.forEach(U.toJSON(), function (D, F) {
                  V.setRequestHeader(F, D);
                }),
              ed.isUndefined(D.withCredentials) ||
                (V.withCredentials = !!D.withCredentials),
              H && "json" !== H && (V.responseType = D.responseType),
              "function" == typeof D.onDownloadProgress &&
                V.addEventListener(
                  "progress",
                  progressEventReducer(D.onDownloadProgress, !0)
                ),
              "function" == typeof D.onUploadProgress &&
                V.upload &&
                V.upload.addEventListener(
                  "progress",
                  progressEventReducer(D.onUploadProgress)
                ),
              (D.cancelToken || D.signal) &&
                ((_ = (F) => {
                  V &&
                    (B(!F || F.type ? new e$(null, D, V) : F),
                    V.abort(),
                    (V = null));
                }),
                D.cancelToken && D.cancelToken.subscribe(_),
                D.signal &&
                  (D.signal.aborted
                    ? _()
                    : D.signal.addEventListener("abort", _)));
            let K = parseProtocol(W);
            if (K && -1 === eS.protocols.indexOf(K)) {
              B(
                new eg("Unsupported protocol " + K + ":", eg.ERR_BAD_REQUEST, D)
              );
              return;
            }
            V.send(N || null);
          });
        };
      let eI = { http: em, xhr: ej };
      ed.forEach(eI, (D, F) => {
        if (D) {
          try {
            Object.defineProperty(D, "name", { value: F });
          } catch (D) {}
          Object.defineProperty(D, "adapterName", { value: F });
        }
      });
      let renderReason = (D) => `- ${D}`,
        isResolvedHandle = (D) => ed.isFunction(D) || null === D || !1 === D;
      var eM = {
        getAdapter: (D) => {
          let F, B;
          D = ed.isArray(D) ? D : [D];
          let { length: _ } = D,
            R = {};
          for (let N = 0; N < _; N++) {
            let _;
            if (
              ((B = F = D[N]),
              !isResolvedHandle(F) &&
                void 0 === (B = eI[(_ = String(F)).toLowerCase()]))
            )
              throw new eg(`Unknown adapter '${_}'`);
            if (B) break;
            R[_ || "#" + N] = B;
          }
          if (!B) {
            let D = Object.entries(R).map(
              ([D, F]) =>
                `adapter ${D} ` +
                (!1 === F
                  ? "is not supported by the environment"
                  : "is not available in the build")
            );
            throw new eg(
              "There is no suitable adapter to dispatch the request " +
                (_
                  ? D.length > 1
                    ? "since :\n" + D.map(renderReason).join("\n")
                    : " " + renderReason(D[0])
                  : "as no adapter specified"),
              "ERR_NOT_SUPPORT"
            );
          }
          return B;
        },
        adapters: eI,
      };
      function throwIfCancellationRequested(D) {
        if (
          (D.cancelToken && D.cancelToken.throwIfRequested(),
          D.signal && D.signal.aborted)
        )
          throw new e$(null, D);
      }
      function dispatchRequest(D) {
        throwIfCancellationRequested(D),
          (D.headers = eP.from(D.headers)),
          (D.data = transformData.call(D, D.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(D.method) &&
            D.headers.setContentType("application/x-www-form-urlencoded", !1);
        let F = eM.getAdapter(D.adapter || eO.adapter);
        return F(D).then(
          function (F) {
            return (
              throwIfCancellationRequested(D),
              (F.data = transformData.call(D, D.transformResponse, F)),
              (F.headers = eP.from(F.headers)),
              F
            );
          },
          function (F) {
            return (
              !isCancel(F) &&
                (throwIfCancellationRequested(D),
                F &&
                  F.response &&
                  ((F.response.data = transformData.call(
                    D,
                    D.transformResponse,
                    F.response
                  )),
                  (F.response.headers = eP.from(F.response.headers)))),
              Promise.reject(F)
            );
          }
        );
      }
      let headersToObject = (D) => (D instanceof eP ? D.toJSON() : D);
      function mergeConfig(D, F) {
        F = F || {};
        let B = {};
        function getMergedValue(D, F, B) {
          return ed.isPlainObject(D) && ed.isPlainObject(F)
            ? ed.merge.call({ caseless: B }, D, F)
            : ed.isPlainObject(F)
            ? ed.merge({}, F)
            : ed.isArray(F)
            ? F.slice()
            : F;
        }
        function mergeDeepProperties(D, F, B) {
          return ed.isUndefined(F)
            ? ed.isUndefined(D)
              ? void 0
              : getMergedValue(void 0, D, B)
            : getMergedValue(D, F, B);
        }
        function valueFromConfig2(D, F) {
          if (!ed.isUndefined(F)) return getMergedValue(void 0, F);
        }
        function defaultToConfig2(D, F) {
          return ed.isUndefined(F)
            ? ed.isUndefined(D)
              ? void 0
              : getMergedValue(void 0, D)
            : getMergedValue(void 0, F);
        }
        function mergeDirectKeys(B, _, R) {
          return R in F
            ? getMergedValue(B, _)
            : R in D
            ? getMergedValue(void 0, B)
            : void 0;
        }
        let _ = {
          url: valueFromConfig2,
          method: valueFromConfig2,
          data: valueFromConfig2,
          baseURL: defaultToConfig2,
          transformRequest: defaultToConfig2,
          transformResponse: defaultToConfig2,
          paramsSerializer: defaultToConfig2,
          timeout: defaultToConfig2,
          timeoutMessage: defaultToConfig2,
          withCredentials: defaultToConfig2,
          adapter: defaultToConfig2,
          responseType: defaultToConfig2,
          xsrfCookieName: defaultToConfig2,
          xsrfHeaderName: defaultToConfig2,
          onUploadProgress: defaultToConfig2,
          onDownloadProgress: defaultToConfig2,
          decompress: defaultToConfig2,
          maxContentLength: defaultToConfig2,
          maxBodyLength: defaultToConfig2,
          beforeRedirect: defaultToConfig2,
          transport: defaultToConfig2,
          httpAgent: defaultToConfig2,
          httpsAgent: defaultToConfig2,
          cancelToken: defaultToConfig2,
          socketPath: defaultToConfig2,
          responseEncoding: defaultToConfig2,
          validateStatus: mergeDirectKeys,
          headers: (D, F) =>
            mergeDeepProperties(headersToObject(D), headersToObject(F), !0),
        };
        return (
          ed.forEach(Object.keys(Object.assign({}, D, F)), function (R) {
            let N = _[R] || mergeDeepProperties,
              U = N(D[R], F[R], R);
            (ed.isUndefined(U) && N !== mergeDirectKeys) || (B[R] = U);
          }),
          B
        );
      }
      let ez = "1.6.0",
        eq = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (D, F) => {
          eq[D] = function (B) {
            return typeof B === D || "a" + (F < 1 ? "n " : " ") + D;
          };
        }
      );
      let eH = {};
      eq.transitional = function (D, F, B) {
        function formatMessage(D, F) {
          return (
            "[Axios v" +
            ez +
            "] Transitional option '" +
            D +
            "'" +
            F +
            (B ? ". " + B : "")
          );
        }
        return (B, _, R) => {
          if (!1 === D)
            throw new eg(
              formatMessage(_, " has been removed" + (F ? " in " + F : "")),
              eg.ERR_DEPRECATED
            );
          return (
            F &&
              !eH[_] &&
              ((eH[_] = !0),
              console.warn(
                formatMessage(
                  _,
                  " has been deprecated since v" +
                    F +
                    " and will be removed in the near future"
                )
              )),
            !D || D(B, _, R)
          );
        };
      };
      var eV = {
        assertOptions: function (D, F, B) {
          if ("object" != typeof D)
            throw new eg("options must be an object", eg.ERR_BAD_OPTION_VALUE);
          let _ = Object.keys(D),
            R = _.length;
          for (; R-- > 0; ) {
            let N = _[R],
              U = F[N];
            if (U) {
              let F = D[N],
                B = void 0 === F || U(F, N, D);
              if (!0 !== B)
                throw new eg(
                  "option " + N + " must be " + B,
                  eg.ERR_BAD_OPTION_VALUE
                );
              continue;
            }
            if (!0 !== B)
              throw new eg("Unknown option " + N, eg.ERR_BAD_OPTION);
          }
        },
        validators: eq,
      };
      let eW = eV.validators;
      let Axios = class Axios {
        constructor(D) {
          (this.defaults = D),
            (this.interceptors = { request: new eb(), response: new eb() });
        }
        request(D, F) {
          let B, _;
          "string" == typeof D ? ((F = F || {}).url = D) : (F = D || {}),
            (F = mergeConfig(this.defaults, F));
          let { transitional: R, paramsSerializer: N, headers: U } = F;
          void 0 !== R &&
            eV.assertOptions(
              R,
              {
                silentJSONParsing: eW.transitional(eW.boolean),
                forcedJSONParsing: eW.transitional(eW.boolean),
                clarifyTimeoutError: eW.transitional(eW.boolean),
              },
              !1
            ),
            null != N &&
              (ed.isFunction(N)
                ? (F.paramsSerializer = { serialize: N })
                : eV.assertOptions(
                    N,
                    { encode: eW.function, serialize: eW.function },
                    !0
                  )),
            (F.method = (
              F.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let H = U && ed.merge(U.common, U[F.method]);
          U &&
            ed.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (D) => {
                delete U[D];
              }
            ),
            (F.headers = eP.concat(H, U));
          let V = [],
            W = !0;
          this.interceptors.request.forEach(function (D) {
            ("function" != typeof D.runWhen || !1 !== D.runWhen(F)) &&
              ((W = W && D.synchronous), V.unshift(D.fulfilled, D.rejected));
          });
          let K = [];
          this.interceptors.response.forEach(function (D) {
            K.push(D.fulfilled, D.rejected);
          });
          let J = 0;
          if (!W) {
            let D = [dispatchRequest.bind(this), void 0];
            for (
              D.unshift.apply(D, V),
                D.push.apply(D, K),
                _ = D.length,
                B = Promise.resolve(F);
              J < _;

            )
              B = B.then(D[J++], D[J++]);
            return B;
          }
          _ = V.length;
          let Z = F;
          for (J = 0; J < _; ) {
            let D = V[J++],
              F = V[J++];
            try {
              Z = D(Z);
            } catch (D) {
              F.call(this, D);
              break;
            }
          }
          try {
            B = dispatchRequest.call(this, Z);
          } catch (D) {
            return Promise.reject(D);
          }
          for (J = 0, _ = K.length; J < _; ) B = B.then(K[J++], K[J++]);
          return B;
        }
        getUri(D) {
          D = mergeConfig(this.defaults, D);
          let F = buildFullPath(D.baseURL, D.url);
          return buildURL(F, D.params, D.paramsSerializer);
        }
      };
      ed.forEach(["delete", "get", "head", "options"], function (D) {
        Axios.prototype[D] = function (F, B) {
          return this.request(
            mergeConfig(B || {}, { method: D, url: F, data: (B || {}).data })
          );
        };
      }),
        ed.forEach(["post", "put", "patch"], function (D) {
          function generateHTTPMethod(F) {
            return function (B, _, R) {
              return this.request(
                mergeConfig(R || {}, {
                  method: D,
                  headers: F ? { "Content-Type": "multipart/form-data" } : {},
                  url: B,
                  data: _,
                })
              );
            };
          }
          (Axios.prototype[D] = generateHTTPMethod()),
            (Axios.prototype[D + "Form"] = generateHTTPMethod(!0));
        });
      var eK = Axios;
      let CancelToken = class CancelToken {
        constructor(D) {
          let F;
          if ("function" != typeof D)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (D) {
            F = D;
          });
          let B = this;
          this.promise.then((D) => {
            if (!B._listeners) return;
            let F = B._listeners.length;
            for (; F-- > 0; ) B._listeners[F](D);
            B._listeners = null;
          }),
            (this.promise.then = (D) => {
              let F;
              let _ = new Promise((D) => {
                B.subscribe(D), (F = D);
              }).then(D);
              return (
                (_.cancel = function () {
                  B.unsubscribe(F);
                }),
                _
              );
            }),
            D(function (D, _, R) {
              B.reason || ((B.reason = new e$(D, _, R)), F(B.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(D) {
          if (this.reason) {
            D(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(D) : (this._listeners = [D]);
        }
        unsubscribe(D) {
          if (!this._listeners) return;
          let F = this._listeners.indexOf(D);
          -1 !== F && this._listeners.splice(F, 1);
        }
        static source() {
          let D;
          let F = new CancelToken(function (F) {
            D = F;
          });
          return { token: F, cancel: D };
        }
      };
      var eJ = CancelToken;
      function spread(D) {
        return function (F) {
          return D.apply(null, F);
        };
      }
      function isAxiosError(D) {
        return ed.isObject(D) && !0 === D.isAxiosError;
      }
      let eZ = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(eZ).forEach(([D, F]) => {
        eZ[F] = D;
      });
      var eX = eZ;
      function createInstance(D) {
        let F = new eK(D),
          B = bind(eK.prototype.request, F);
        return (
          ed.extend(B, eK.prototype, F, { allOwnKeys: !0 }),
          ed.extend(B, F, null, { allOwnKeys: !0 }),
          (B.create = function (F) {
            return createInstance(mergeConfig(D, F));
          }),
          B
        );
      }
      let eY = createInstance(eO);
      (eY.Axios = eK),
        (eY.CanceledError = e$),
        (eY.CancelToken = eJ),
        (eY.isCancel = isCancel),
        (eY.VERSION = ez),
        (eY.toFormData = helpers_toFormData),
        (eY.AxiosError = eg),
        (eY.Cancel = eY.CanceledError),
        (eY.all = function (D) {
          return Promise.all(D);
        }),
        (eY.spread = spread),
        (eY.isAxiosError = isAxiosError),
        (eY.mergeConfig = mergeConfig),
        (eY.AxiosHeaders = eP),
        (eY.formToJSON = (D) =>
          helpers_formDataToJSON(ed.isHTMLForm(D) ? new FormData(D) : D)),
        (eY.getAdapter = eM.getAdapter),
        (eY.HttpStatusCode = eX),
        (eY.default = eY);
      var eG = eY;
    },
    9367: function (D, F, B) {
      "use strict";
      B.d(F, {
        ZP: function () {
          return esm_lookup;
        },
      });
      var _,
        R = {};
      B.r(R),
        B.d(R, {
          Decoder: function () {
            return Decoder;
          },
          Encoder: function () {
            return Encoder;
          },
          PacketType: function () {
            return _;
          },
          protocol: function () {
            return eS;
          },
        });
      let N = Object.create(null);
      (N.open = "0"),
        (N.close = "1"),
        (N.ping = "2"),
        (N.pong = "3"),
        (N.message = "4"),
        (N.upgrade = "5"),
        (N.noop = "6");
      let U = Object.create(null);
      Object.keys(N).forEach((D) => {
        U[N[D]] = D;
      });
      let H = { type: "error", data: "parser error" },
        V =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        W = "function" == typeof ArrayBuffer,
        isView = (D) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(D)
            : D && D.buffer instanceof ArrayBuffer,
        encodePacket = ({ type: D, data: F }, B, _) =>
          V && F instanceof Blob
            ? B
              ? _(F)
              : encodeBlobAsBase64(F, _)
            : W && (F instanceof ArrayBuffer || isView(F))
            ? B
              ? _(F)
              : encodeBlobAsBase64(new Blob([F]), _)
            : _(N[D] + (F || "")),
        encodeBlobAsBase64 = (D, F) => {
          let B = new FileReader();
          return (
            (B.onload = function () {
              let D = B.result.split(",")[1];
              F("b" + (D || ""));
            }),
            B.readAsDataURL(D)
          );
        };
      var K = encodePacket;
      let J =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Z = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
      for (let D = 0; D < J.length; D++) Z[J.charCodeAt(D)] = D;
      let decode = (D) => {
          let F = 0.75 * D.length,
            B = D.length,
            _,
            R = 0,
            N,
            U,
            H,
            V;
          "=" === D[D.length - 1] && (F--, "=" === D[D.length - 2] && F--);
          let W = new ArrayBuffer(F),
            K = new Uint8Array(W);
          for (_ = 0; _ < B; _ += 4)
            (N = Z[D.charCodeAt(_)]),
              (U = Z[D.charCodeAt(_ + 1)]),
              (H = Z[D.charCodeAt(_ + 2)]),
              (V = Z[D.charCodeAt(_ + 3)]),
              (K[R++] = (N << 2) | (U >> 4)),
              (K[R++] = ((15 & U) << 4) | (H >> 2)),
              (K[R++] = ((3 & H) << 6) | (63 & V));
          return W;
        },
        X = "function" == typeof ArrayBuffer,
        decodePacket = (D, F) => {
          if ("string" != typeof D)
            return { type: "message", data: mapBinary(D, F) };
          let B = D.charAt(0);
          if ("b" === B)
            return {
              type: "message",
              data: decodeBase64Packet(D.substring(1), F),
            };
          let _ = U[B];
          return _
            ? D.length > 1
              ? { type: U[B], data: D.substring(1) }
              : { type: U[B] }
            : H;
        },
        decodeBase64Packet = (D, F) => {
          if (!X) return { base64: !0, data: D };
          {
            let B = decode(D);
            return mapBinary(B, F);
          }
        },
        mapBinary = (D, F) =>
          "blob" === F && D instanceof ArrayBuffer ? new Blob([D]) : D;
      var Y = decodePacket;
      let G = "\x1e",
        encodePayload = (D, F) => {
          let B = D.length,
            _ = Array(B),
            R = 0;
          D.forEach((D, N) => {
            K(D, !1, (D) => {
              (_[N] = D), ++R === B && F(_.join(G));
            });
          });
        },
        decodePayload = (D, F) => {
          let B = D.split(G),
            _ = [];
          for (let D = 0; D < B.length; D++) {
            let R = Y(B[D], F);
            if ((_.push(R), "error" === R.type)) break;
          }
          return _;
        },
        Q = 4;
      function Emitter(D) {
        if (D) return mixin(D);
      }
      function mixin(D) {
        for (var F in Emitter.prototype) D[F] = Emitter.prototype[F];
        return D;
      }
      (Emitter.prototype.on = Emitter.prototype.addEventListener =
        function (D, F) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + D] = this._callbacks["$" + D] || []).push(F),
            this
          );
        }),
        (Emitter.prototype.once = function (D, F) {
          function on() {
            this.off(D, on), F.apply(this, arguments);
          }
          return (on.fn = F), this.on(D, on), this;
        }),
        (Emitter.prototype.off =
          Emitter.prototype.removeListener =
          Emitter.prototype.removeAllListeners =
          Emitter.prototype.removeEventListener =
            function (D, F) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var B,
                _ = this._callbacks["$" + D];
              if (!_) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + D], this;
              for (var R = 0; R < _.length; R++)
                if ((B = _[R]) === F || B.fn === F) {
                  _.splice(R, 1);
                  break;
                }
              return 0 === _.length && delete this._callbacks["$" + D], this;
            }),
        (Emitter.prototype.emit = function (D) {
          this._callbacks = this._callbacks || {};
          for (
            var F = Array(arguments.length - 1),
              B = this._callbacks["$" + D],
              _ = 1;
            _ < arguments.length;
            _++
          )
            F[_ - 1] = arguments[_];
          if (B) {
            B = B.slice(0);
            for (var _ = 0, R = B.length; _ < R; ++_) B[_].apply(this, F);
          }
          return this;
        }),
        (Emitter.prototype.emitReserved = Emitter.prototype.emit),
        (Emitter.prototype.listeners = function (D) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + D] || []
          );
        }),
        (Emitter.prototype.hasListeners = function (D) {
          return !!this.listeners(D).length;
        });
      let ee =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : Function("return this")();
      function pick(D, ...F) {
        return F.reduce(
          (F, B) => (D.hasOwnProperty(B) && (F[B] = D[B]), F),
          {}
        );
      }
      let et = ee.setTimeout,
        er = ee.clearTimeout;
      function installTimerFunctions(D, F) {
        F.useNativeTimers
          ? ((D.setTimeoutFn = et.bind(ee)), (D.clearTimeoutFn = er.bind(ee)))
          : ((D.setTimeoutFn = ee.setTimeout.bind(ee)),
            (D.clearTimeoutFn = ee.clearTimeout.bind(ee)));
      }
      let en = 1.33;
      function byteLength(D) {
        return "string" == typeof D
          ? utf8Length(D)
          : Math.ceil((D.byteLength || D.size) * en);
      }
      function utf8Length(D) {
        let F = 0,
          B = 0;
        for (let _ = 0, R = D.length; _ < R; _++)
          (F = D.charCodeAt(_)) < 128
            ? (B += 1)
            : F < 2048
            ? (B += 2)
            : F < 55296 || F >= 57344
            ? (B += 3)
            : (_++, (B += 4));
        return B;
      }
      let TransportError = class TransportError extends Error {
        constructor(D, F, B) {
          super(D),
            (this.description = F),
            (this.context = B),
            (this.type = "TransportError");
        }
      };
      let Transport = class Transport extends Emitter {
        constructor(D) {
          super(),
            (this.writable = !1),
            installTimerFunctions(this, D),
            (this.opts = D),
            (this.query = D.query),
            (this.socket = D.socket);
        }
        onError(D, F, B) {
          return super.emitReserved("error", new TransportError(D, F, B)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" === this.readyState || "open" === this.readyState) &&
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(D) {
          "open" === this.readyState && this.write(D);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(D) {
          let F = Y(D, this.socket.binaryType);
          this.onPacket(F);
        }
        onPacket(D) {
          super.emitReserved("packet", D);
        }
        onClose(D) {
          (this.readyState = "closed"), super.emitReserved("close", D);
        }
        pause(D) {}
      };
      let ei =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        eo = 64,
        eu = {},
        ea = 0,
        es = 0,
        ec;
      function yeast_encode(D) {
        let F = "";
        do (F = ei[D % eo] + F), (D = Math.floor(D / eo));
        while (D > 0);
        return F;
      }
      function yeast() {
        let D = yeast_encode(+new Date());
        return D !== ec ? ((ea = 0), (ec = D)) : D + "." + yeast_encode(ea++);
      }
      for (; es < eo; es++) eu[ei[es]] = es;
      function parseqs_encode(D) {
        let F = "";
        for (let B in D)
          D.hasOwnProperty(B) &&
            (F.length && (F += "&"),
            (F += encodeURIComponent(B) + "=" + encodeURIComponent(D[B])));
        return F;
      }
      function parseqs_decode(D) {
        let F = {},
          B = D.split("&");
        for (let D = 0, _ = B.length; D < _; D++) {
          let _ = B[D].split("=");
          F[decodeURIComponent(_[0])] = decodeURIComponent(_[1]);
        }
        return F;
      }
      let ef = !1;
      try {
        ef =
          "undefined" != typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (D) {}
      let ed = ef;
      function XHR(D) {
        let F = D.xdomain;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!F || ed))
            return new XMLHttpRequest();
        } catch (D) {}
        if (!F)
          try {
            return new ee[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (D) {}
      }
      function empty() {}
      let eh = (function () {
        let D = new XHR({ xdomain: !1 });
        return null != D.responseType;
      })();
      let Polling = class Polling extends Transport {
        constructor(D) {
          if ((super(D), (this.polling = !1), "undefined" != typeof location)) {
            let F = "https:" === location.protocol,
              B = location.port;
            B || (B = F ? "443" : "80"),
              (this.xd =
                ("undefined" != typeof location &&
                  D.hostname !== location.hostname) ||
                B !== D.port),
              (this.xs = D.secure !== F);
          }
          let F = D && D.forceBase64;
          this.supportsBinary = eh && !F;
        }
        get name() {
          return "polling";
        }
        doOpen() {
          this.poll();
        }
        pause(D) {
          this.readyState = "pausing";
          let pause = () => {
            (this.readyState = "paused"), D();
          };
          if (this.polling || !this.writable) {
            let D = 0;
            this.polling &&
              (D++,
              this.once("pollComplete", function () {
                --D || pause();
              })),
              this.writable ||
                (D++,
                this.once("drain", function () {
                  --D || pause();
                }));
          } else pause();
        }
        poll() {
          (this.polling = !0), this.doPoll(), this.emitReserved("poll");
        }
        onData(D) {
          let callback = (D) => {
            if (
              ("opening" === this.readyState &&
                "open" === D.type &&
                this.onOpen(),
              "close" === D.type)
            )
              return (
                this.onClose({ description: "transport closed by the server" }),
                !1
              );
            this.onPacket(D);
          };
          decodePayload(D, this.socket.binaryType).forEach(callback),
            "closed" !== this.readyState &&
              ((this.polling = !1),
              this.emitReserved("pollComplete"),
              "open" === this.readyState && this.poll());
        }
        doClose() {
          let close = () => {
            this.write([{ type: "close" }]);
          };
          "open" === this.readyState ? close() : this.once("open", close);
        }
        write(D) {
          (this.writable = !1),
            encodePayload(D, (D) => {
              this.doWrite(D, () => {
                (this.writable = !0), this.emitReserved("drain");
              });
            });
        }
        uri() {
          let D = this.query || {},
            F = this.opts.secure ? "https" : "http",
            B = "";
          !1 !== this.opts.timestampRequests &&
            (D[this.opts.timestampParam] = yeast()),
            this.supportsBinary || D.sid || (D.b64 = 1),
            this.opts.port &&
              (("https" === F && 443 !== Number(this.opts.port)) ||
                ("http" === F && 80 !== Number(this.opts.port))) &&
              (B = ":" + this.opts.port);
          let _ = parseqs_encode(D),
            R = -1 !== this.opts.hostname.indexOf(":");
          return (
            F +
            "://" +
            (R ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            B +
            this.opts.path +
            (_.length ? "?" + _ : "")
          );
        }
        request(D = {}) {
          return (
            Object.assign(D, { xd: this.xd, xs: this.xs }, this.opts),
            new Request(this.uri(), D)
          );
        }
        doWrite(D, F) {
          let B = this.request({ method: "POST", data: D });
          B.on("success", F),
            B.on("error", (D, F) => {
              this.onError("xhr post error", D, F);
            });
        }
        doPoll() {
          let D = this.request();
          D.on("data", this.onData.bind(this)),
            D.on("error", (D, F) => {
              this.onError("xhr poll error", D, F);
            }),
            (this.pollXhr = D);
        }
      };
      let Request = class Request extends Emitter {
        constructor(D, F) {
          super(),
            installTimerFunctions(this, F),
            (this.opts = F),
            (this.method = F.method || "GET"),
            (this.uri = D),
            (this.async = !1 !== F.async),
            (this.data = void 0 !== F.data ? F.data : null),
            this.create();
        }
        create() {
          let D = pick(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          (D.xdomain = !!this.opts.xd), (D.xscheme = !!this.opts.xs);
          let F = (this.xhr = new XHR(D));
          try {
            F.open(this.method, this.uri, this.async);
            try {
              if (this.opts.extraHeaders)
                for (let D in (F.setDisableHeaderCheck &&
                  F.setDisableHeaderCheck(!0),
                this.opts.extraHeaders))
                  this.opts.extraHeaders.hasOwnProperty(D) &&
                    F.setRequestHeader(D, this.opts.extraHeaders[D]);
            } catch (D) {}
            if ("POST" === this.method)
              try {
                F.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (D) {}
            try {
              F.setRequestHeader("Accept", "*/*");
            } catch (D) {}
            "withCredentials" in F &&
              (F.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout &&
                (F.timeout = this.opts.requestTimeout),
              (F.onreadystatechange = () => {
                4 === F.readyState &&
                  (200 === F.status || 1223 === F.status
                    ? this.onLoad()
                    : this.setTimeoutFn(() => {
                        this.onError(
                          "number" == typeof F.status ? F.status : 0
                        );
                      }, 0));
              }),
              F.send(this.data);
          } catch (D) {
            this.setTimeoutFn(() => {
              this.onError(D);
            }, 0);
            return;
          }
          "undefined" != typeof document &&
            ((this.index = Request.requestsCount++),
            (Request.requests[this.index] = this));
        }
        onError(D) {
          this.emitReserved("error", D, this.xhr), this.cleanup(!0);
        }
        cleanup(D) {
          if (void 0 !== this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = empty), D))
              try {
                this.xhr.abort();
              } catch (D) {}
            "undefined" != typeof document &&
              delete Request.requests[this.index],
              (this.xhr = null);
          }
        }
        onLoad() {
          let D = this.xhr.responseText;
          null !== D &&
            (this.emitReserved("data", D),
            this.emitReserved("success"),
            this.cleanup());
        }
        abort() {
          this.cleanup();
        }
      };
      if (
        ((Request.requestsCount = 0),
        (Request.requests = {}),
        "undefined" != typeof document)
      ) {
        if ("function" == typeof attachEvent)
          attachEvent("onunload", unloadHandler);
        else if ("function" == typeof addEventListener) {
          let D = "onpagehide" in ee ? "pagehide" : "unload";
          addEventListener(D, unloadHandler, !1);
        }
      }
      function unloadHandler() {
        for (let D in Request.requests)
          Request.requests.hasOwnProperty(D) && Request.requests[D].abort();
      }
      let ep = (() => {
          let D =
            "function" == typeof Promise &&
            "function" == typeof Promise.resolve;
          return D ? (D) => Promise.resolve().then(D) : (D, F) => F(D, 0);
        })(),
        eg = ee.WebSocket || ee.MozWebSocket,
        em = !0,
        ey = "arraybuffer";
      var eD = B(1876).Buffer;
      let eE =
        "undefined" != typeof navigator &&
        "string" == typeof navigator.product &&
        "reactnative" === navigator.product.toLowerCase();
      let WS = class WS extends Transport {
        constructor(D) {
          super(D), (this.supportsBinary = !D.forceBase64);
        }
        get name() {
          return "websocket";
        }
        doOpen() {
          if (!this.check()) return;
          let D = this.uri(),
            F = this.opts.protocols,
            B = eE
              ? {}
              : pick(
                  this.opts,
                  "agent",
                  "perMessageDeflate",
                  "pfx",
                  "key",
                  "passphrase",
                  "cert",
                  "ca",
                  "ciphers",
                  "rejectUnauthorized",
                  "localAddress",
                  "protocolVersion",
                  "origin",
                  "maxPayload",
                  "family",
                  "checkServerIdentity"
                );
          this.opts.extraHeaders && (B.headers = this.opts.extraHeaders);
          try {
            this.ws =
              em && !eE ? (F ? new eg(D, F) : new eg(D)) : new eg(D, F, B);
          } catch (D) {
            return this.emitReserved("error", D);
          }
          (this.ws.binaryType = this.socket.binaryType || ey),
            this.addEventListeners();
        }
        addEventListeners() {
          (this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
          }),
            (this.ws.onclose = (D) =>
              this.onClose({
                description: "websocket connection closed",
                context: D,
              })),
            (this.ws.onmessage = (D) => this.onData(D.data)),
            (this.ws.onerror = (D) => this.onError("websocket error", D));
        }
        write(D) {
          this.writable = !1;
          for (let F = 0; F < D.length; F++) {
            let B = D[F],
              _ = F === D.length - 1;
            K(B, this.supportsBinary, (D) => {
              let F = {};
              if (
                !em &&
                (B.options && (F.compress = B.options.compress),
                this.opts.perMessageDeflate)
              ) {
                let B = "string" == typeof D ? eD.byteLength(D) : D.length;
                B < this.opts.perMessageDeflate.threshold && (F.compress = !1);
              }
              try {
                em ? this.ws.send(D) : this.ws.send(D, F);
              } catch (D) {}
              _ &&
                ep(() => {
                  (this.writable = !0), this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          void 0 !== this.ws && (this.ws.close(), (this.ws = null));
        }
        uri() {
          let D = this.query || {},
            F = this.opts.secure ? "wss" : "ws",
            B = "";
          this.opts.port &&
            (("wss" === F && 443 !== Number(this.opts.port)) ||
              ("ws" === F && 80 !== Number(this.opts.port))) &&
            (B = ":" + this.opts.port),
            this.opts.timestampRequests &&
              (D[this.opts.timestampParam] = yeast()),
            this.supportsBinary || (D.b64 = 1);
          let _ = parseqs_encode(D),
            R = -1 !== this.opts.hostname.indexOf(":");
          return (
            F +
            "://" +
            (R ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            B +
            this.opts.path +
            (_.length ? "?" + _ : "")
          );
        }
        check() {
          return !!eg;
        }
      };
      let eC = { websocket: WS, polling: Polling },
        eb =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        eA = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function parse(D) {
        let F = D,
          B = D.indexOf("["),
          _ = D.indexOf("]");
        -1 != B &&
          -1 != _ &&
          (D =
            D.substring(0, B) +
            D.substring(B, _).replace(/:/g, ";") +
            D.substring(_, D.length));
        let R = eb.exec(D || ""),
          N = {},
          U = 14;
        for (; U--; ) N[eA[U]] = R[U] || "";
        return (
          -1 != B &&
            -1 != _ &&
            ((N.source = F),
            (N.host = N.host
              .substring(1, N.host.length - 1)
              .replace(/;/g, ":")),
            (N.authority = N.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (N.ipv6uri = !0)),
          (N.pathNames = pathNames(N, N.path)),
          (N.queryKey = queryKey(N, N.query)),
          N
        );
      }
      function pathNames(D, F) {
        let B = /\/{2,9}/g,
          _ = F.replace(B, "/").split("/");
        return (
          ("/" == F.slice(0, 1) || 0 === F.length) && _.splice(0, 1),
          "/" == F.slice(-1) && _.splice(_.length - 1, 1),
          _
        );
      }
      function queryKey(D, F) {
        let B = {};
        return (
          F.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (D, F, _) {
            F && (B[F] = _);
          }),
          B
        );
      }
      let Socket = class Socket extends Emitter {
        constructor(D, F = {}) {
          super(),
            (this.writeBuffer = []),
            D && "object" == typeof D && ((F = D), (D = null)),
            D
              ? ((D = parse(D)),
                (F.hostname = D.host),
                (F.secure = "https" === D.protocol || "wss" === D.protocol),
                (F.port = D.port),
                D.query && (F.query = D.query))
              : F.host && (F.hostname = parse(F.host).host),
            installTimerFunctions(this, F),
            (this.secure =
              null != F.secure
                ? F.secure
                : "undefined" != typeof location &&
                  "https:" === location.protocol),
            F.hostname && !F.port && (F.port = this.secure ? "443" : "80"),
            (this.hostname =
              F.hostname ||
              ("undefined" != typeof location
                ? location.hostname
                : "localhost")),
            (this.port =
              F.port ||
              ("undefined" != typeof location && location.port
                ? location.port
                : this.secure
                ? "443"
                : "80")),
            (this.transports = F.transports || ["polling", "websocket"]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !0,
              },
              F
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "")),
            "string" == typeof this.opts.query &&
              (this.opts.query = parseqs_decode(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            "function" == typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                )),
              "localhost" !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                addEventListener("offline", this.offlineEventListener, !1))),
            this.open();
        }
        createTransport(D) {
          let F = Object.assign({}, this.opts.query);
          (F.EIO = Q), (F.transport = D), this.id && (F.sid = this.id);
          let B = Object.assign({}, this.opts.transportOptions[D], this.opts, {
            query: F,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
          });
          return new eC[D](B);
        }
        open() {
          let D;
          if (
            this.opts.rememberUpgrade &&
            Socket.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
          )
            D = "websocket";
          else if (0 === this.transports.length) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          } else D = this.transports[0];
          this.readyState = "opening";
          try {
            D = this.createTransport(D);
          } catch (D) {
            this.transports.shift(), this.open();
            return;
          }
          D.open(), this.setTransport(D);
        }
        setTransport(D) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = D),
            D.on("drain", this.onDrain.bind(this))
              .on("packet", this.onPacket.bind(this))
              .on("error", this.onError.bind(this))
              .on("close", (D) => this.onClose("transport close", D));
        }
        probe(D) {
          let F = this.createTransport(D),
            B = !1;
          Socket.priorWebsocketSuccess = !1;
          let onTransportOpen = () => {
            B ||
              (F.send([{ type: "ping", data: "probe" }]),
              F.once("packet", (D) => {
                if (!B) {
                  if ("pong" === D.type && "probe" === D.data)
                    (this.upgrading = !0),
                      this.emitReserved("upgrading", F),
                      F &&
                        ((Socket.priorWebsocketSuccess =
                          "websocket" === F.name),
                        this.transport.pause(() => {
                          B ||
                            "closed" === this.readyState ||
                            (cleanup(),
                            this.setTransport(F),
                            F.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", F),
                            (F = null),
                            (this.upgrading = !1),
                            this.flush());
                        }));
                  else {
                    let D = Error("probe error");
                    (D.transport = F.name),
                      this.emitReserved("upgradeError", D);
                  }
                }
              }));
          };
          function freezeTransport() {
            B || ((B = !0), cleanup(), F.close(), (F = null));
          }
          let onerror = (D) => {
            let B = Error("probe error: " + D);
            (B.transport = F.name),
              freezeTransport(),
              this.emitReserved("upgradeError", B);
          };
          function onTransportClose() {
            onerror("transport closed");
          }
          function onclose() {
            onerror("socket closed");
          }
          function onupgrade(D) {
            F && D.name !== F.name && freezeTransport();
          }
          let cleanup = () => {
            F.removeListener("open", onTransportOpen),
              F.removeListener("error", onerror),
              F.removeListener("close", onTransportClose),
              this.off("close", onclose),
              this.off("upgrading", onupgrade);
          };
          F.once("open", onTransportOpen),
            F.once("error", onerror),
            F.once("close", onTransportClose),
            this.once("close", onclose),
            this.once("upgrading", onupgrade),
            F.open();
        }
        onOpen() {
          if (
            ((this.readyState = "open"),
            (Socket.priorWebsocketSuccess =
              "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush(),
            "open" === this.readyState && this.opts.upgrade)
          ) {
            let D = 0,
              F = this.upgrades.length;
            for (; D < F; D++) this.probe(this.upgrades[D]);
          }
        }
        onPacket(D) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (this.emitReserved("packet", D),
              this.emitReserved("heartbeat"),
              D.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(D.data));
                break;
              case "ping":
                this.resetPingTimeout(),
                  this.sendPacket("pong"),
                  this.emitReserved("ping"),
                  this.emitReserved("pong");
                break;
              case "error":
                let F = Error("server error");
                (F.code = D.data), this.onError(F);
                break;
              case "message":
                this.emitReserved("data", D.data),
                  this.emitReserved("message", D.data);
            }
        }
        onHandshake(D) {
          this.emitReserved("handshake", D),
            (this.id = D.sid),
            (this.transport.query.sid = D.sid),
            (this.upgrades = this.filterUpgrades(D.upgrades)),
            (this.pingInterval = D.pingInterval),
            (this.pingTimeout = D.pingTimeout),
            (this.maxPayload = D.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved("drain")
              : this.flush();
        }
        flush() {
          if (
            "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            let D = this.getWritablePackets();
            this.transport.send(D),
              (this.prevBufferLen = D.length),
              this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          let D =
            this.maxPayload &&
            "polling" === this.transport.name &&
            this.writeBuffer.length > 1;
          if (!D) return this.writeBuffer;
          let F = 1;
          for (let D = 0; D < this.writeBuffer.length; D++) {
            let B = this.writeBuffer[D].data;
            if ((B && (F += byteLength(B)), D > 0 && F > this.maxPayload))
              return this.writeBuffer.slice(0, D);
            F += 2;
          }
          return this.writeBuffer;
        }
        write(D, F, B) {
          return this.sendPacket("message", D, F, B), this;
        }
        send(D, F, B) {
          return this.sendPacket("message", D, F, B), this;
        }
        sendPacket(D, F, B, _) {
          if (
            ("function" == typeof F && ((_ = F), (F = void 0)),
            "function" == typeof B && ((_ = B), (B = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (B = B || {}).compress = !1 !== B.compress;
          let R = { type: D, data: F, options: B };
          this.emitReserved("packetCreate", R),
            this.writeBuffer.push(R),
            _ && this.once("flush", _),
            this.flush();
        }
        close() {
          let close = () => {
              this.onClose("forced close"), this.transport.close();
            },
            cleanupAndClose = () => {
              this.off("upgrade", cleanupAndClose),
                this.off("upgradeError", cleanupAndClose),
                close();
            },
            waitForUpgrade = () => {
              this.once("upgrade", cleanupAndClose),
                this.once("upgradeError", cleanupAndClose);
            };
          return (
            ("opening" === this.readyState || "open" === this.readyState) &&
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? waitForUpgrade() : close();
                  })
                : this.upgrading
                ? waitForUpgrade()
                : close()),
            this
          );
        }
        onError(D) {
          (Socket.priorWebsocketSuccess = !1),
            this.emitReserved("error", D),
            this.onClose("transport error", D);
        }
        onClose(D, F) {
          ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) &&
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            "function" == typeof removeEventListener &&
              (removeEventListener(
                "beforeunload",
                this.beforeunloadEventListener,
                !1
              ),
              removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", D, F),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
        }
        filterUpgrades(D) {
          let F = [],
            B = 0,
            _ = D.length;
          for (; B < _; B++) ~this.transports.indexOf(D[B]) && F.push(D[B]);
          return F;
        }
      };
      function url(D, F = "", B) {
        let _ = D;
        (B = B || ("undefined" != typeof location && location)),
          null == D && (D = B.protocol + "//" + B.host),
          "string" == typeof D &&
            ("/" === D.charAt(0) &&
              (D = "/" === D.charAt(1) ? B.protocol + D : B.host + D),
            /^(https?|wss?):\/\//.test(D) ||
              (D = void 0 !== B ? B.protocol + "//" + D : "https://" + D),
            (_ = parse(D))),
          !_.port &&
            (/^(http|ws)$/.test(_.protocol)
              ? (_.port = "80")
              : /^(http|ws)s$/.test(_.protocol) && (_.port = "443")),
          (_.path = _.path || "/");
        let R = -1 !== _.host.indexOf(":"),
          N = R ? "[" + _.host + "]" : _.host;
        return (
          (_.id = _.protocol + "://" + N + ":" + _.port + F),
          (_.href =
            _.protocol +
            "://" +
            N +
            (B && B.port === _.port ? "" : ":" + _.port)),
          _
        );
      }
      (Socket.protocol = Q), Socket.protocol;
      let ew = "function" == typeof ArrayBuffer,
        is_binary_isView = (D) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(D)
            : D.buffer instanceof ArrayBuffer,
        eF = Object.prototype.toString,
        eB =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === eF.call(Blob)),
        e_ =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === eF.call(File));
      function isBinary(D) {
        return (
          (ew && (D instanceof ArrayBuffer || is_binary_isView(D))) ||
          (eB && D instanceof Blob) ||
          (e_ && D instanceof File)
        );
      }
      function hasBinary(D, F) {
        if (!D || "object" != typeof D) return !1;
        if (Array.isArray(D)) {
          for (let F = 0, B = D.length; F < B; F++)
            if (hasBinary(D[F])) return !0;
          return !1;
        }
        if (isBinary(D)) return !0;
        if (D.toJSON && "function" == typeof D.toJSON && 1 == arguments.length)
          return hasBinary(D.toJSON(), !0);
        for (let F in D)
          if (Object.prototype.hasOwnProperty.call(D, F) && hasBinary(D[F]))
            return !0;
        return !1;
      }
      function deconstructPacket(D) {
        let F = [],
          B = D.data,
          _ = D;
        return (
          (_.data = _deconstructPacket(B, F)),
          (_.attachments = F.length),
          { packet: _, buffers: F }
        );
      }
      function _deconstructPacket(D, F) {
        if (!D) return D;
        if (isBinary(D)) {
          let B = { _placeholder: !0, num: F.length };
          return F.push(D), B;
        }
        if (Array.isArray(D)) {
          let B = Array(D.length);
          for (let _ = 0; _ < D.length; _++) B[_] = _deconstructPacket(D[_], F);
          return B;
        }
        if ("object" == typeof D && !(D instanceof Date)) {
          let B = {};
          for (let _ in D)
            Object.prototype.hasOwnProperty.call(D, _) &&
              (B[_] = _deconstructPacket(D[_], F));
          return B;
        }
        return D;
      }
      function reconstructPacket(D, F) {
        return (
          (D.data = _reconstructPacket(D.data, F)), delete D.attachments, D
        );
      }
      function _reconstructPacket(D, F) {
        if (!D) return D;
        if (D && !0 === D._placeholder) {
          let B = "number" == typeof D.num && D.num >= 0 && D.num < F.length;
          if (B) return F[D.num];
          throw Error("illegal attachments");
        }
        if (Array.isArray(D))
          for (let B = 0; B < D.length; B++) D[B] = _reconstructPacket(D[B], F);
        else if ("object" == typeof D)
          for (let B in D)
            Object.prototype.hasOwnProperty.call(D, B) &&
              (D[B] = _reconstructPacket(D[B], F));
        return D;
      }
      let ex = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        eS = 5;
      !(function (D) {
        (D[(D.CONNECT = 0)] = "CONNECT"),
          (D[(D.DISCONNECT = 1)] = "DISCONNECT"),
          (D[(D.EVENT = 2)] = "EVENT"),
          (D[(D.ACK = 3)] = "ACK"),
          (D[(D.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (D[(D.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (D[(D.BINARY_ACK = 6)] = "BINARY_ACK");
      })(_ || (_ = {}));
      let Encoder = class Encoder {
        constructor(D) {
          this.replacer = D;
        }
        encode(D) {
          return (D.type === _.EVENT || D.type === _.ACK) && hasBinary(D)
            ? this.encodeAsBinary({
                type: D.type === _.EVENT ? _.BINARY_EVENT : _.BINARY_ACK,
                nsp: D.nsp,
                data: D.data,
                id: D.id,
              })
            : [this.encodeAsString(D)];
        }
        encodeAsString(D) {
          let F = "" + D.type;
          return (
            (D.type === _.BINARY_EVENT || D.type === _.BINARY_ACK) &&
              (F += D.attachments + "-"),
            D.nsp && "/" !== D.nsp && (F += D.nsp + ","),
            null != D.id && (F += D.id),
            null != D.data && (F += JSON.stringify(D.data, this.replacer)),
            F
          );
        }
        encodeAsBinary(D) {
          let F = deconstructPacket(D),
            B = this.encodeAsString(F.packet),
            _ = F.buffers;
          return _.unshift(B), _;
        }
      };
      function isObject(D) {
        return "[object Object]" === Object.prototype.toString.call(D);
      }
      let Decoder = class Decoder extends Emitter {
        constructor(D) {
          super(), (this.reviver = D);
        }
        add(D) {
          let F;
          if ("string" == typeof D) {
            if (this.reconstructor)
              throw Error("got plaintext data when reconstructing a packet");
            F = this.decodeString(D);
            let B = F.type === _.BINARY_EVENT;
            B || F.type === _.BINARY_ACK
              ? ((F.type = B ? _.EVENT : _.ACK),
                (this.reconstructor = new BinaryReconstructor(F)),
                0 === F.attachments && super.emitReserved("decoded", F))
              : super.emitReserved("decoded", F);
          } else if (isBinary(D) || D.base64) {
            if (this.reconstructor)
              (F = this.reconstructor.takeBinaryData(D)) &&
                ((this.reconstructor = null), super.emitReserved("decoded", F));
            else
              throw Error("got binary data when not reconstructing a packet");
          } else throw Error("Unknown type: " + D);
        }
        decodeString(D) {
          let F = 0,
            B = { type: Number(D.charAt(0)) };
          if (void 0 === _[B.type])
            throw Error("unknown packet type " + B.type);
          if (B.type === _.BINARY_EVENT || B.type === _.BINARY_ACK) {
            let _ = F + 1;
            for (; "-" !== D.charAt(++F) && F != D.length; );
            let R = D.substring(_, F);
            if (R != Number(R) || "-" !== D.charAt(F))
              throw Error("Illegal attachments");
            B.attachments = Number(R);
          }
          if ("/" === D.charAt(F + 1)) {
            let _ = F + 1;
            for (; ++F; ) {
              let B = D.charAt(F);
              if ("," === B || F === D.length) break;
            }
            B.nsp = D.substring(_, F);
          } else B.nsp = "/";
          let R = D.charAt(F + 1);
          if ("" !== R && Number(R) == R) {
            let _ = F + 1;
            for (; ++F; ) {
              let B = D.charAt(F);
              if (null == B || Number(B) != B) {
                --F;
                break;
              }
              if (F === D.length) break;
            }
            B.id = Number(D.substring(_, F + 1));
          }
          if (D.charAt(++F)) {
            let _ = this.tryParse(D.substr(F));
            if (Decoder.isPayloadValid(B.type, _)) B.data = _;
            else throw Error("invalid payload");
          }
          return B;
        }
        tryParse(D) {
          try {
            return JSON.parse(D, this.reviver);
          } catch (D) {
            return !1;
          }
        }
        static isPayloadValid(D, F) {
          switch (D) {
            case _.CONNECT:
              return isObject(F);
            case _.DISCONNECT:
              return void 0 === F;
            case _.CONNECT_ERROR:
              return "string" == typeof F || isObject(F);
            case _.EVENT:
            case _.BINARY_EVENT:
              return (
                Array.isArray(F) &&
                ("number" == typeof F[0] ||
                  ("string" == typeof F[0] && -1 === ex.indexOf(F[0])))
              );
            case _.ACK:
            case _.BINARY_ACK:
              return Array.isArray(F);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      };
      let BinaryReconstructor = class BinaryReconstructor {
        constructor(D) {
          (this.packet = D), (this.buffers = []), (this.reconPack = D);
        }
        takeBinaryData(D) {
          if (
            (this.buffers.push(D),
            this.buffers.length === this.reconPack.attachments)
          ) {
            let D = reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), D;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      };
      function on(D, F, B) {
        return (
          D.on(F, B),
          function () {
            D.off(F, B);
          }
        );
      }
      let ek = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      let socket_Socket = class socket_Socket extends Emitter {
        constructor(D, F, B) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = D),
            (this.nsp = F),
            B && B.auth && (this.auth = B.auth),
            (this._opts = Object.assign({}, B)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          let D = this.io;
          this.subs = [
            on(D, "open", this.onopen.bind(this)),
            on(D, "packet", this.onpacket.bind(this)),
            on(D, "error", this.onerror.bind(this)),
            on(D, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send(...D) {
          return D.unshift("message"), this.emit.apply(this, D), this;
        }
        emit(D, ...F) {
          if (ek.hasOwnProperty(D))
            throw Error('"' + D.toString() + '" is a reserved event name');
          if (
            (F.unshift(D),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(F), this;
          let B = { type: _.EVENT, data: F };
          if (
            ((B.options = {}),
            (B.options.compress = !1 !== this.flags.compress),
            "function" == typeof F[F.length - 1])
          ) {
            let D = this.ids++,
              _ = F.pop();
            this._registerAckCallback(D, _), (B.id = D);
          }
          let R =
              this.io.engine &&
              this.io.engine.transport &&
              this.io.engine.transport.writable,
            N = this.flags.volatile && (!R || !this.connected);
          return (
            N ||
              (this.connected
                ? (this.notifyOutgoingListeners(B), this.packet(B))
                : this.sendBuffer.push(B)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(D, F) {
          var B;
          let _ =
            null !== (B = this.flags.timeout) && void 0 !== B
              ? B
              : this._opts.ackTimeout;
          if (void 0 === _) {
            this.acks[D] = F;
            return;
          }
          let R = this.io.setTimeoutFn(() => {
            delete this.acks[D];
            for (let F = 0; F < this.sendBuffer.length; F++)
              this.sendBuffer[F].id === D && this.sendBuffer.splice(F, 1);
            F.call(this, Error("operation has timed out"));
          }, _);
          this.acks[D] = (...D) => {
            this.io.clearTimeoutFn(R), F.apply(this, [null, ...D]);
          };
        }
        emitWithAck(D, ...F) {
          let B =
            void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
          return new Promise((_, R) => {
            F.push((D, F) => (B ? (D ? R(D) : _(F)) : _(D))),
              this.emit(D, ...F);
          });
        }
        _addToQueue(D) {
          let F;
          "function" == typeof D[D.length - 1] && (F = D.pop());
          let B = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: D,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          D.push((D, ..._) => {
            if (B !== this._queue[0]) return;
            let R = null !== D;
            return (
              R
                ? B.tryCount > this._opts.retries &&
                  (this._queue.shift(), F && F(D))
                : (this._queue.shift(), F && F(null, ..._)),
              (B.pending = !1),
              this._drainQueue()
            );
          }),
            this._queue.push(B),
            this._drainQueue();
        }
        _drainQueue(D = !1) {
          if (!this.connected || 0 === this._queue.length) return;
          let F = this._queue[0];
          (!F.pending || D) &&
            ((F.pending = !0),
            F.tryCount++,
            (this.flags = F.flags),
            this.emit.apply(this, F.args));
        }
        packet(D) {
          (D.nsp = this.nsp), this.io._packet(D);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((D) => {
                this._sendConnectPacket(D);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(D) {
          this.packet({
            type: _.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, D)
              : D,
          });
        }
        onerror(D) {
          this.connected || this.emitReserved("connect_error", D);
        }
        onclose(D, F) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", D, F);
        }
        onpacket(D) {
          let F = D.nsp === this.nsp;
          if (F)
            switch (D.type) {
              case _.CONNECT:
                D.data && D.data.sid
                  ? this.onconnect(D.data.sid, D.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case _.EVENT:
              case _.BINARY_EVENT:
                this.onevent(D);
                break;
              case _.ACK:
              case _.BINARY_ACK:
                this.onack(D);
                break;
              case _.DISCONNECT:
                this.ondisconnect();
                break;
              case _.CONNECT_ERROR:
                this.destroy();
                let B = Error(D.data.message);
                (B.data = D.data.data), this.emitReserved("connect_error", B);
            }
        }
        onevent(D) {
          let F = D.data || [];
          null != D.id && F.push(this.ack(D.id)),
            this.connected
              ? this.emitEvent(F)
              : this.receiveBuffer.push(Object.freeze(F));
        }
        emitEvent(D) {
          if (this._anyListeners && this._anyListeners.length) {
            let F = this._anyListeners.slice();
            for (let B of F) B.apply(this, D);
          }
          super.emit.apply(this, D),
            this._pid &&
              D.length &&
              "string" == typeof D[D.length - 1] &&
              (this._lastOffset = D[D.length - 1]);
        }
        ack(D) {
          let F = this,
            B = !1;
          return function (...R) {
            B || ((B = !0), F.packet({ type: _.ACK, id: D, data: R }));
          };
        }
        onack(D) {
          let F = this.acks[D.id];
          "function" == typeof F &&
            (F.apply(this, D.data), delete this.acks[D.id]);
        }
        onconnect(D, F) {
          (this.id = D),
            (this.recovered = F && this._pid === F),
            (this._pid = F),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((D) => this.emitEvent(D)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((D) => {
              this.notifyOutgoingListeners(D), this.packet(D);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((D) => D()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: _.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(D) {
          return (this.flags.compress = D), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(D) {
          return (this.flags.timeout = D), this;
        }
        onAny(D) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(D),
            this
          );
        }
        prependAny(D) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(D),
            this
          );
        }
        offAny(D) {
          if (!this._anyListeners) return this;
          if (D) {
            let F = this._anyListeners;
            for (let B = 0; B < F.length; B++)
              if (D === F[B]) {
                F.splice(B, 1);
                break;
              }
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(D) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(D),
            this
          );
        }
        prependAnyOutgoing(D) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(D),
            this
          );
        }
        offAnyOutgoing(D) {
          if (!this._anyOutgoingListeners) return this;
          if (D) {
            let F = this._anyOutgoingListeners;
            for (let B = 0; B < F.length; B++)
              if (D === F[B]) {
                F.splice(B, 1);
                break;
              }
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(D) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            let F = this._anyOutgoingListeners.slice();
            for (let B of F) B.apply(this, D.data);
          }
        }
      };
      function Backoff(D) {
        (D = D || {}),
          (this.ms = D.min || 100),
          (this.max = D.max || 1e4),
          (this.factor = D.factor || 2),
          (this.jitter = D.jitter > 0 && D.jitter <= 1 ? D.jitter : 0),
          (this.attempts = 0);
      }
      (Backoff.prototype.duration = function () {
        var D = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var F = Math.random(),
            B = Math.floor(F * this.jitter * D);
          D = (1 & Math.floor(10 * F)) == 0 ? D - B : D + B;
        }
        return 0 | Math.min(D, this.max);
      }),
        (Backoff.prototype.reset = function () {
          this.attempts = 0;
        }),
        (Backoff.prototype.setMin = function (D) {
          this.ms = D;
        }),
        (Backoff.prototype.setMax = function (D) {
          this.max = D;
        }),
        (Backoff.prototype.setJitter = function (D) {
          this.jitter = D;
        });
      let Manager = class Manager extends Emitter {
        constructor(D, F) {
          var B;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            D && "object" == typeof D && ((F = D), (D = void 0)),
            ((F = F || {}).path = F.path || "/socket.io"),
            (this.opts = F),
            installTimerFunctions(this, F),
            this.reconnection(!1 !== F.reconnection),
            this.reconnectionAttempts(F.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(F.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(F.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (B = F.randomizationFactor) && void 0 !== B ? B : 0.5
            ),
            (this.backoff = new Backoff({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == F.timeout ? 2e4 : F.timeout),
            (this._readyState = "closed"),
            (this.uri = D);
          let _ = F.parser || R;
          (this.encoder = new _.Encoder()),
            (this.decoder = new _.Decoder()),
            (this._autoConnect = !1 !== F.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(D) {
          return arguments.length
            ? ((this._reconnection = !!D), this)
            : this._reconnection;
        }
        reconnectionAttempts(D) {
          return void 0 === D
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = D), this);
        }
        reconnectionDelay(D) {
          var F;
          return void 0 === D
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = D),
              null === (F = this.backoff) || void 0 === F || F.setMin(D),
              this);
        }
        randomizationFactor(D) {
          var F;
          return void 0 === D
            ? this._randomizationFactor
            : ((this._randomizationFactor = D),
              null === (F = this.backoff) || void 0 === F || F.setJitter(D),
              this);
        }
        reconnectionDelayMax(D) {
          var F;
          return void 0 === D
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = D),
              null === (F = this.backoff) || void 0 === F || F.setMax(D),
              this);
        }
        timeout(D) {
          return arguments.length ? ((this._timeout = D), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(D) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new Socket(this.uri, this.opts);
          let F = this.engine,
            B = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          let _ = on(F, "open", function () {
              B.onopen(), D && D();
            }),
            R = on(F, "error", (F) => {
              B.cleanup(),
                (B._readyState = "closed"),
                this.emitReserved("error", F),
                D ? D(F) : B.maybeReconnectOnOpen();
            });
          if (!1 !== this._timeout) {
            let D = this._timeout;
            0 === D && _();
            let B = this.setTimeoutFn(() => {
              _(), F.close(), F.emit("error", Error("timeout"));
            }, D);
            this.opts.autoUnref && B.unref(),
              this.subs.push(function () {
                clearTimeout(B);
              });
          }
          return this.subs.push(_), this.subs.push(R), this;
        }
        connect(D) {
          return this.open(D);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          let D = this.engine;
          this.subs.push(
            on(D, "ping", this.onping.bind(this)),
            on(D, "data", this.ondata.bind(this)),
            on(D, "error", this.onerror.bind(this)),
            on(D, "close", this.onclose.bind(this)),
            on(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(D) {
          try {
            this.decoder.add(D);
          } catch (D) {
            this.onclose("parse error", D);
          }
        }
        ondecoded(D) {
          ep(() => {
            this.emitReserved("packet", D);
          }, this.setTimeoutFn);
        }
        onerror(D) {
          this.emitReserved("error", D);
        }
        socket(D, F) {
          let B = this.nsps[D];
          return (
            B
              ? this._autoConnect && !B.active && B.connect()
              : ((B = new socket_Socket(this, D, F)), (this.nsps[D] = B)),
            B
          );
        }
        _destroy(D) {
          let F = Object.keys(this.nsps);
          for (let D of F) {
            let F = this.nsps[D];
            if (F.active) return;
          }
          this._close();
        }
        _packet(D) {
          let F = this.encoder.encode(D);
          for (let B = 0; B < F.length; B++) this.engine.write(F[B], D.options);
        }
        cleanup() {
          this.subs.forEach((D) => D()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(D, F) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", D, F),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          let D = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            let F = this.backoff.duration();
            this._reconnecting = !0;
            let B = this.setTimeoutFn(() => {
              !D.skipReconnect &&
                (this.emitReserved("reconnect_attempt", D.backoff.attempts),
                D.skipReconnect ||
                  D.open((F) => {
                    F
                      ? ((D._reconnecting = !1),
                        D.reconnect(),
                        this.emitReserved("reconnect_error", F))
                      : D.onreconnect();
                  }));
            }, F);
            this.opts.autoUnref && B.unref(),
              this.subs.push(function () {
                clearTimeout(B);
              });
          }
        }
        onreconnect() {
          let D = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", D);
        }
      };
      let eO = {};
      function esm_lookup(D, F) {
        let B;
        "object" == typeof D && ((F = D), (D = void 0)), (F = F || {});
        let _ = url(D, F.path || "/socket.io"),
          R = _.source,
          N = _.id,
          U = _.path,
          H = eO[N] && U in eO[N].nsps,
          V =
            F.forceNew || F["force new connection"] || !1 === F.multiplex || H;
        return (
          V
            ? (B = new Manager(R, F))
            : (eO[N] || (eO[N] = new Manager(R, F)), (B = eO[N])),
          _.query && !F.query && (F.query = _.queryKey),
          B.socket(_.path, F)
        );
      }
      Object.assign(esm_lookup, {
        Manager: Manager,
        Socket: socket_Socket,
        io: esm_lookup,
        connect: esm_lookup,
      });
    },
    3954: function (D) {
      "use strict";
      D.exports = JSON.parse(
        '{"Ks":"ws://reflex-hello-world-backend.vercel.app:8000/_event","uk":"https://reflex-hello-world-backend.vercel.app:8000/_upload"}'
      );
    },
  },
  function (D) {
    var __webpack_exec__ = function (F) {
      return D((D.s = F));
    };
    D.O(0, [774, 179], function () {
      return __webpack_exec__(1118), __webpack_exec__(9974);
    }),
      (_N_E = D.O());
  },
]);
