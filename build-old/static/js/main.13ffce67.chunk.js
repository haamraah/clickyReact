(this.webpackJsonpclicky = this.webpackJsonpclicky || []).push([
  [0],
  {
    13: function(e, t, a) {},
    14: function(e, t, a) {},
    15: function(e, t, a) {
      "use strict";
      a.r(t);
      var i = a(0),
        n = a.n(i),
        c = a(2),
        r = a.n(c),
        s = (a(13), a(14), a(3)),
        l = a(4),
        m = a(6),
        g = a(5),
        o = a(7);
      var d = function(e) {
        return n.a.createElement("img", {
          id: e.id,
          value: e.value,
          onClick: e.onClick,
          className: "img-thumbnail float-left  img-fluid w-100 h-100 ",
          src: e.value,
          alt: ""
        });
      };
      var h = function(e) {
          var t;
          return (
            e.lost &&
              (t = n.a.createElement(
                "button",
                { className: "btn btn-danger", onClick: e.reset },
                "Rest Game"
              )),
            n.a.createElement(
              "nav",
              { class: "navbar navbar-inverse" },
              n.a.createElement(
                "div",
                { class: "container-fluid" },
                n.a.createElement(
                  "div",
                  { class: "navbar-header" },
                  n.a.createElement(
                    "span",
                    { class: "navbar-brand" },
                    "Clicky Game"
                  )
                ),
                n.a.createElement(
                  "ul",
                  { class: "nav navbar-nav navbar-left" },
                  " ",
                  t
                ),
                n.a.createElement(
                  "ul",
                  { class: "nav navbar-nav navbar-right" },
                  n.a.createElement("li", null, "High Score : ", e.highScore),
                  n.a.createElement("li", null, "Score: ", e.score)
                )
              )
            )
          );
        },
        u = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var i = arguments.length, n = new Array(i), c = 0; c < i; c++)
              n[c] = arguments[c];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(n))
              )).state = {
                elements: [
                  { img: "./img/00.png", id: "a" },
                  { img: "./img/01.jpg", id: "b" },
                  { img: "./img/02.jpg", id: "c" },
                  { img: "./img/03.jpg", id: "d" },
                  { img: "./img/04.jpg", id: "e" },
                  { img: "./img/05.jpg", id: "f" },
                  { img: "./img/06.jpg", id: "g" },
                  { img: "./img/07.jpg", id: "h" },
                  { img: "./img/08.jpg", id: "i" },
                  { img: "./img/09.jpg", id: "j" },
                  { img: "./img/10.png", id: "k" },
                  { img: "./img/11.jpg", id: "l" }
                ],
                clickedElements: [],
                score: 0,
                highScore: 0,
                lost: !1
              }),
              (a.handleOnClick = function(e) {
                var t = e.target.id;
                a.state.clickedElements.forEach(function(e) {
                  t === e.id && a.setState({ lost: !0 });
                }),
                  a.state.lost ||
                    (a.setState({ score: a.state.score + 1 }),
                    a.shuffle(),
                    a.state.clickedElements.push({ id: t }));
              }),
              (a.shuffle = function() {
                for (var e = a.state.elements, t = e.length - 1; t > 0; t--) {
                  var i = Math.floor(Math.random() * (t + 1)),
                    n = [e[i], e[t]];
                  (e[t] = n[0]), (e[i] = n[1]);
                }
                return a.setState(e);
              }),
              (a.reset = function() {
                a.state.highScore < a.state.score &&
                  a.setState({ highScore: a.state.score }),
                  a.setState({
                    elements: [
                      { img: "./img/00.png", id: "a" },
                      { img: "./img/01.jpg", id: "b" },
                      { img: "./img/02.jpg", id: "c" },
                      { img: "./img/03.jpg", id: "d" },
                      { img: "./img/04.jpg", id: "e" },
                      { img: "./img/05.jpg", id: "f" },
                      { img: "./img/06.jpg", id: "g" },
                      { img: "./img/07.jpg", id: "h" },
                      { img: "./img/08.jpg", id: "i" },
                      { img: "./img/09.jpg", id: "j" },
                      { img: "./img/10.png", id: "k" },
                      { img: "./img/11.jpg", id: "l" }
                    ],
                    clickedElements: [],
                    score: 0,
                    lost: !1
                  });
              }),
              a
            );
          }
          return (
            Object(o.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e,
                    t = this;
                  return (
                    (e = this.state.lost
                      ? n.a.createElement(
                          "div",
                          { class: "card" },
                          n.a.createElement(
                            "div",
                            { class: "card-header" },
                            "Score : ",
                            this.state.score
                          ),
                          n.a.createElement(
                            "div",
                            { class: "card-header" },
                            "High Score : ",
                            this.state.highScore
                          ),
                          n.a.createElement(
                            "div",
                            { class: "card-body" },
                            n.a.createElement(
                              "button",
                              {
                                className: "btn btn-danger",
                                onClick: this.reset
                              },
                              "Rest Game"
                            )
                          )
                        )
                      : this.state.elements.map(function(e) {
                          return n.a.createElement(
                            "div",
                            {
                              style: { height: "300px", width: "25%" },
                              key: e.id
                            },
                            n.a.createElement(d, {
                              value: e.img,
                              id: e.id,
                              onClick: t.handleOnClick
                            })
                          );
                        })),
                    n.a.createElement(
                      "div",
                      { className: "row w-100 justify-content-center" },
                      n.a.createElement(
                        "div",
                        { className: "row w-100 justify-content-center" },
                        n.a.createElement(
                          "div",
                          { className: "col-12" },
                          n.a.createElement(h, {
                            lost: this.state.lost,
                            reset: this.reset,
                            highScore: this.state.highScore,
                            score: this.state.score
                          })
                        ),
                        e
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.Component);
      var v = function() {
        return n.a.createElement(
          "div",
          { className: "App" },
          n.a.createElement(
            "div",
            { className: "container-fluid" },
            n.a.createElement(u, null)
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(n.a.createElement(v, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    8: function(e, t, a) {
      e.exports = a(15);
    }
  },
  [[8, 1, 2]]
]);
//# sourceMappingURL=main.13ffce67.chunk.js.map
