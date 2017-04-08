'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _posts_index = require('./components/posts_index');

var _posts_index2 = _interopRequireDefault(_posts_index);

var _posts_new = require('./components/posts_new');

var _posts_new2 = _interopRequireDefault(_posts_new);

var _posts_show = require('./components/posts_show');

var _posts_show2 = _interopRequireDefault(_posts_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _app2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _posts_index2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'posts/new', component: _posts_new2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'posts/:id', component: _posts_show2.default })
);

//# sourceMappingURL=routes-compiled.js.map