'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".test-component {\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n}\n.test-component .heading {\n  font-size: 64px;\n}\n.test-component.test-component-secondary {\n  background-color: black;\n  color: white;\n}";
styleInject(css_248z);

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React__default["default"].createElement("div", { "data-testid": "test-component", className: "test-component test-component-".concat(theme) },
        React__default["default"].createElement("h1", { className: "heading" }, "I'm the test component"),
        React__default["default"].createElement("h2", null, "Made with love by Harvey")));
};

exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
