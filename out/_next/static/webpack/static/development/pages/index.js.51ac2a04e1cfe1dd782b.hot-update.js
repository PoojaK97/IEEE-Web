webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/webPush.js":
/*!*******************************!*\
  !*** ./components/webPush.js ***!
  \*******************************/
/*! exports provided: firebaseCloudMessaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseCloudMessaging", function() { return firebaseCloudMessaging; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/messaging */ "./node_modules/firebase/messaging/dist/index.esm.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");





var firebaseCloudMessaging = {
  tokenInlocalforage: function () {
    var _tokenInlocalforage = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", localStorage.getItem('fcm_token'));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function tokenInlocalforage() {
      return _tokenInlocalforage.apply(this, arguments);
    }

    return tokenInlocalforage;
  }(),
  init: function () {
    var _init = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(type, uid) {
      var messaging, token;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp({
                  apiKey: "AIzaSyDEIW5sy8lwg8ialwvTmEqgfevaiy6ELKk",
                  authDomain: "ritb-ieee.firebaseapp.com",
                  databaseURL: "https://ritb-ieee.firebaseio.com",
                  projectId: "ritb-ieee",
                  storageBucket: "ritb-ieee.appspot.com",
                  messagingSenderId: "776351305681"
                });
              } catch (err) {} // try {
              //   if ((await this.tokenInlocalforage()) !== null) {
              //     return false
              //   }


              _context2.prev = 1;

              if (!type) {
                _context2.next = 14;
                break;
              }

              messaging = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.messaging();
              _context2.next = 6;
              return messaging.requestPermission();

            case 6:
              _context2.next = 8;
              return messaging.getToken();

            case 8:
              token = _context2.sent;
              localStorage.setItem('fcm_token', token);
              firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('users/' + uid).set({
                token: token
              });
              messaging.onTokenRefresh(function () {
                messaging.getToken().then(function (refreshedToken) {
                  firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('users/' + uid).remove();
                  firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('users/' + uid).set({
                    token: token
                  });
                }).catch(function (err) {
                  showToken('Unable to retrieve refreshed token ', err);
                });
              });
              _context2.next = 17;
              break;

            case 14:
              console.log('removing subs');
              localStorage.removeItem('fcm_token');
              firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.database().ref('users/' + uid).remove();

            case 17:
              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](1);
              console.error(_context2.t0);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 19]]);
    }));

    function init(_x, _x2) {
      return _init.apply(this, arguments);
    }

    return init;
  }()
};


/***/ })

})
//# sourceMappingURL=index.js.51ac2a04e1cfe1dd782b.hot-update.js.map