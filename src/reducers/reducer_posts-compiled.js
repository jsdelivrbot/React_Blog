'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_POSTS:
            return _extends({}, state, { all: action.payload.data });
        default:
            return state;
    }
};

var _index = require('../actions/index');

var INITIAL_STATE = { all: [], post: null };

//# sourceMappingURL=reducer_posts-compiled.js.map