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

var PostsIndex = function (_Component) {
    _inherits(PostsIndex, _Component);

    function PostsIndex() {
        _classCallCheck(this, PostsIndex);

        return _possibleConstructorReturn(this, (PostsIndex.__proto__ || Object.getPrototypeOf(PostsIndex)).apply(this, arguments));
    }

    _createClass(PostsIndex, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.fetchPosts();
        }
    }, {
        key: 'renderPosts',
        value: function renderPosts() {
            return this.props.posts.map(function (post) {
                return _react2.default.createElement(
                    'li',
                    { className: 'list-group-item', key: post.id },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: "posts/" + post.id },
                        _react2.default.createElement(
                            'span',
                            { className: 'pull-xs-right' },
                            post.categories
                        ),
                        _react2.default.createElement(
                            'strong',
                            null,
                            post.title
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'text-xs-right' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/posts/new', className: 'btn btn-primary' },
                        'Add a Post'
                    )
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    'Posts'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'list-group' },
                    this.renderPosts()
                )
            );
        }
    }]);

    return PostsIndex;
}(_react.Component);

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _index.fetchPosts })(PostsIndex);

//# sourceMappingURL=posts_index-compiled.js.map