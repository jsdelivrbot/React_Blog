'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DELETE_POST = exports.FETCH_POST = exports.CREATE_POST = exports.FETCH_POSTS = undefined;
exports.fetchPosts = fetchPosts;
exports.createPost = createPost;
exports.fetchPost = fetchPost;
exports.deletePost = deletePost;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_POSTS = exports.FETCH_POSTS = 'RETCH_POSTS';
var CREATE_POST = exports.CREATE_POST = 'CREATE_POST';
var FETCH_POST = exports.FETCH_POST = 'FETCH_POST';
var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';

var ROOT_URL = 'http://reduxblog.herokuapp.com/api';
var API_KEY = '?key=dexstaar';

function fetchPosts() {
    var request = _axios2.default.get(ROOT_URL + '/posts' + API_KEY);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

function createPost(props) {
    var request = _axios2.default.post(ROOT_URL + '/posts' + API_KEY, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}

function fetchPost(id) {
    var request = _axios2.default.get(ROOT_URL + '/posts/' + id + API_KEY);

    return {
        type: FETCH_POST,
        payload: request
    };
}

function deletePost(id) {
    var request = _axios2.default.delete(ROOT_URL + '/posts/' + id + API_KEY);

    return {
        type: DELETE_POST,
        payload: request
    };
}

//# sourceMappingURL=index-compiled.js.map