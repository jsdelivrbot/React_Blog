'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FETCH_POSTS = undefined;
exports.fetchPosts = fetchPosts;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_POSTS = exports.FETCH_POSTS = 'RETCH_POSTS';

var ROOT_URL = 'http://reduxblog.herokuapp.com/api';
var API_KEY = '?key=dexstaar';

function fetchPosts() {
    var request = _axios2.default.get(ROOT_URL + '/posts' + API_KEY);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

//# sourceMappingURL=index-compiled.js.map