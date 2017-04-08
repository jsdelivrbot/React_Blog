'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('../actions/index');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostsShow = function (_Component) {
    _inherits(PostsShow, _Component);

    function PostsShow() {
        _classCallCheck(this, PostsShow);

        return _possibleConstructorReturn(this, (PostsShow.__proto__ || Object.getPrototypeOf(PostsShow)).apply(this, arguments));
    }

    _createClass(PostsShow, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.fetchPost(this.props.params.id);
        }
    }, {
        key: 'onDeleteClick',
        value: function onDeleteClick() {
            this.props.deletePost(this.props.params.id);
        }
    }, {
        key: 'render',
        value: function render() {
            var post = this.props.post;


            if (!post) {
                return _react2.default.createElement(
                    'div',
                    null,
                    'Loading...'
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/' },
                    'Back To Index'
                ),
                _react2.default.createElement(
                    'button',
                    {
                        className: 'btn btn-danger pull-xs-right',
                        onClick: this.onDeleteClick.bind(this) },
                    'Delete Post'
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    post.title
                ),
                _react2.default.createElement(
                    'h6',
                    null,
                    'Categories: ',
                    post.categories
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    post.content
                )
            );
        }
    }]);

    return PostsShow;
}(_react.Component);

function mapStateToProps(state) {
    return { post: state.posts.post };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPost: _index.fetchPost, deletePost: _index.deletePost })(PostsShow);

//# sourceMappingURL=posts_show-compiled.js.map