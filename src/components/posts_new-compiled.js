'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _index = require('../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostsNew = function (_Component) {
    _inherits(PostsNew, _Component);

    function PostsNew() {
        _classCallCheck(this, PostsNew);

        return _possibleConstructorReturn(this, (PostsNew.__proto__ || Object.getPrototypeOf(PostsNew)).apply(this, arguments));
    }

    _createClass(PostsNew, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$fields = _props.fields,
                title = _props$fields.title,
                categories = _props$fields.categories,
                content = _props$fields.content,
                handleSubmit = _props.handleSubmit;


            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit(this.props.createPost) },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Create A New Post'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Title'
                    ),
                    _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control' }, title))
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Categories'
                    ),
                    _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control' }, categories))
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Content'
                    ),
                    _react2.default.createElement('textarea', _extends({ type: 'text', className: 'form-control' }, content))
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                )
            );
        }
    }]);

    return PostsNew;
}(_react.Component);

exports.default = (0, _reduxForm.reduxForm)({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
}, null, { createPost: _index.createPost })(PostsNew);

//# sourceMappingURL=posts_new-compiled.js.map