/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
/******/ })
/************************************************************************/
/******/ ({

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// displays a list of books and their quantity in the shopping cart
// uses 'cartItems' to get the list of books and their quantity
var Cart = function (_React$Component) {
    _inherits(Cart, _React$Component);

    function Cart() {
        _classCallCheck(this, Cart);

        return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
    }

    _createClass(Cart, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                Object.keys(this.props.route.cartItems).length == 0 ? _react2.default.createElement(
                    'p',
                    null,
                    'Your cart is empty'
                ) : "",
                _react2.default.createElement(
                    'ul',
                    null,
                    Object.keys(this.props.route.cartItems).map(function (item, index, list) {
                        return _react2.default.createElement(
                            'li',
                            { key: item },
                            _this2.props.route.products[item].title,
                            '- ',
                            _this2.props.route.cartItems[item]
                        );
                    })
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    {
                        to: '/checkout',
                        className: 'btn btn-primary' },
                    'checkout'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    {
                        to: '/',
                        className: 'btn btn-info' },
                    'Home'
                )
            );
        }
    }]);

    return Cart;
}(_react2.default.Component);

exports.Cart = Cart;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkout = function (_React$Component) {
    _inherits(Checkout, _React$Component);

    function Checkout() {
        _classCallCheck(this, Checkout);

        return _possibleConstructorReturn(this, (Checkout.__proto__ || Object.getPrototypeOf(Checkout)).apply(this, arguments));
    }

    _createClass(Checkout, [{
        key: 'return',
        value: function _return() {
            var _this2 = this;

            var count = 0;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Invoice'
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table table-bordered' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        Object.keys(this.props.route.cartItems).map(function (item, index, list) {
                            count += _this2.props.route.cartItems[item];
                            return _react2.default.createElement(
                                'tr',
                                { key: item },
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _this2.props.route.products[item].title
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _this2.props.route.cartItems[item]
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Total: ',
                    count
                )
            );
        }
    }]);

    return Checkout;
}(_react2.default.Component);

exports.Checkout = Checkout;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Modal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Displays individual 'Product' component because thats what nested 
// under 'App' in routing and because Product route has the UR
var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.style = {
            position: 'fixed',
            top: '20%',
            right: '20%',
            bottom: '20%',
            left: '20%',
            width: 450,
            height: 400,
            padding: 20,
            boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
            overflow: 'auto',
            background: '#fff'
        };
        return _this;
    }

    _createClass(Modal, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.styles },
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: this.props.returnTo },
                        'Back'
                    )
                ),
                this.props.children
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

exports.Modal = Modal;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Product = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // uses property from its route to trigger actions
// this.props.route.addToCart() add 


var Product = function (_React$Componnet) {
    _inherits(Product, _React$Componnet);

    function Product(props) {
        _classCallCheck(this, Product);

        var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));

        _this.handleBuy = _this.handleBuy.bind(_this);
        return _this;
    }

    _createClass(Product, [{
        key: 'handleBuy',
        value: function handleBuy(event) {
            this.props.route.addToCart(this.props.params.id);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('img', { src: this.props.route.products[this.props.params.id].src,
                    style: { heigh: '80%' } }),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.route.products[this.props.params.id].title
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    {
                        to: {
                            pathname: '/cart',
                            state: { productId: this.props.params.id }
                        },
                        onClick: this.handleBuy,
                        className: 'btn btn-primary' },
                    'Buy'
                )
            );
        }
    }]);

    return Product;
}(_react2.default.Componnet);

exports.Product = Product;

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\tuyen\\Desktop\\Projects\\studies-react\\book-store\\node_modules\\react-dom\\index.js'");

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(125);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(29);

var _modal = __webpack_require__(123);

var _modal2 = _interopRequireDefault(_modal);

var _cart = __webpack_require__(121);

var _cart2 = _interopRequireDefault(_cart);

var _checkout = __webpack_require__(122);

var _checkout2 = _interopRequireDefault(_checkout);

var _product = __webpack_require__(124);

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Setting up main imports, booking information and routes */


// Array of book data for the time being to avoid using server.
// it is an imitation of a server's data.
var PRODUCTS = [{
    id: 0,
    src: 'images/proexpress-cover.jpg',
    title: 'Pro Express.js',
    url: 'http://amzn.to/1D6qiqk'
}, {
    id: 1,
    src: 'images/practicalnode-cover.jpeg',
    title: 'Practical Node.js',
    url: 'http://amzn.to/NuQ0fM' }, {
    id: 2,
    src: 'images/expressapiref-cover.jpg',
    title: 'Express API Reference',
    url: 'http://amzn.to/1xcHanf' }, {
    id: 3,
    src: 'images/reactquickly-cover.jpg',
    title: 'React Quickly',
    url: 'https://www.manning.com/books/react-quickly'
}, {
    id: 4,
    src: 'images/fullstack-cover.png',
    title: 'Full Stack JavaScript',
    url: 'http://www.apress.com/9781484217504'
}];

// Stateless components
var Heading = function Heading() {
    return _react2.default.createElement(
        'h1',
        null,
        'Tuyen Book Store'
    );
};

var Copy = function Copy() {
    return _react2.default.createElement(
        'p',
        null,
        'Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link wil lopen the book on a seperate page.'
    );
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentWillReceiveProps',

        // takes following properties as its argument
        // good place to determine whether this view is a modal
        value: function componentWillReceiveProps(nextProps) {
            this.isModal = nextProps.location.state && nextProps.location.state.modal;

            // Checks whether youre on modal screen or nonmodal
            // if modal, assign children as previous children
            if (this.isModal && nextProps.location.key !== this.props.location.key) {
                this.previousChildren = this.props.children;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('Modal: ', this.isModal);
            return _react2.default.createElement(
                'div',
                { className: 'well' },
                _react2.default.createElement(Heading, null),
                _react2.default.createElement(
                    'div',
                    null,
                    this.isModal ? this.previousChildren : this.props.children,
                    this.isModal ? _react2.default.createElement(
                        _modal2.default,
                        {
                            isOpen: true,
                            returnTo: this.props.location.state.returnTo },
                        this.props.children
                    ) : ""
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

// Home Page, shows full list of books


var Index = function (_React$Component2) {
    _inherits(Index, _React$Component2);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Copy, null),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/cart', className: 'btn btn-danger' },
                        'Cart'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    PRODUCTS.map(function (picture) {
                        return _react2.default.createElement(
                            _reactRouter.Link,
                            { key: picture.id,
                                to: { pathname: '/products/' + picture.id,
                                    state: {
                                        modal: true,
                                        returnTo: _this3.props.location.pathname
                                    }
                                } },
                            _react2.default.createElement('img', { style: { margin: 10 }, src: picture.src, height: '100' })
                        );
                    })
                )
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

var cartItems = {};
var addToCart = function addToCart(id) {
    if (cartItems[id]) cartItems[id] += 1;else cartItems[id] = 1;
};

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: App },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: Index }),
        _react2.default.createElement(_reactRouter.Route, { path: '/products/:id',
            component: _product2.default,
            addToCart: addToCart,
            products: PRODUCTS }),
        _react2.default.createElement(_reactRouter.Route, { path: '/cart',
            component: _cart2.default,
            cartItem: cartItems,
            products: PRODUCTS })
    ),
    _react2.default.createElement(_reactRouter.Route, { path: '/checkout',
        component: _checkout2.default,
        cartItems: cartItems,
        products: PRODUCTS })
), document.getElementById('content'));

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\tuyen\\Desktop\\Projects\\studies-react\\book-store\\node_modules\\react-router\\lib\\index.js'");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\tuyen\\Desktop\\Projects\\studies-react\\book-store\\node_modules\\react\\react.js'");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map