module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AchievementPane/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/jmaddox/projects/wow/components/AchievementPane/Header.js";


var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, "Header");
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/AchievementPane/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SideNav__ = __webpack_require__("./components/SideNav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/AchievementPane/Header.js");
var _jsxFileName = "/Users/jmaddox/projects/wow/components/AchievementPane/index.js";

// import sidebar component



var MainLayout = function MainLayout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SideNav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (MainLayout);

/***/ }),

/***/ "./components/Character/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/jmaddox/projects/wow/components/Character/index.js";


var Character = function Character(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "character-" + props.location,
    className: "character " + props.action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ }),

/***/ "./components/Content/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_achievements__ = __webpack_require__("./data/achievements.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_achievements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_achievements__);
var _jsxFileName = "/Users/jmaddox/projects/wow/components/Content/index.js";



var Content = function Content(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, props.page);
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "./components/Hud/ActionBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/jmaddox/projects/wow/components/Hud/ActionBar.js";


var ActionBar = function ActionBar(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "actionbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "Action Bar");
};

/* harmony default export */ __webpack_exports__["a"] = (ActionBar);

/***/ }),

/***/ "./components/Hud/Chat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/jmaddox/projects/wow/components/Hud/Chat.js";


var Chat = function Chat(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "chat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, "Chat");
};

/* harmony default export */ __webpack_exports__["a"] = (Chat);

/***/ }),

/***/ "./components/Hud/MiniMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/jmaddox/projects/wow/components/Hud/MiniMap.js";


var MiniMap = function MiniMap(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minimap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, "Mini Map");
};

/* harmony default export */ __webpack_exports__["a"] = (MiniMap);

/***/ }),

/***/ "./components/Hud/Player.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/jmaddox/projects/wow/components/Hud/Player.js";


var Player = function Player(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, "Player Frame");
};

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),

/***/ "./components/Hud/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player__ = __webpack_require__("./components/Hud/Player.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MiniMap__ = __webpack_require__("./components/Hud/MiniMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Chat__ = __webpack_require__("./components/Hud/Chat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ActionBar__ = __webpack_require__("./components/Hud/ActionBar.js");
var _jsxFileName = "/Users/jmaddox/projects/wow/components/Hud/index.js";






var Hud = function Hud(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "hud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Player__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MiniMap__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Chat__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ActionBar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Hud);

/***/ }),

/***/ "./components/SideNav/SideNavLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sideNavLink_scss__ = __webpack_require__("./components/SideNav/sideNavLink.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sideNavLink_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__sideNavLink_scss__);
var _jsxFileName = "/Users/jmaddox/projects/wow/components/SideNav/SideNavLink.js";




var SideNavLink = function SideNavLink(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "sidenav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    as: "/".concat(props.page, "/"),
    href: "/?page=".concat(props.page),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.title)));
};

/* harmony default export */ __webpack_exports__["a"] = (SideNavLink);

/***/ }),

/***/ "./components/SideNav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SideNavLink__ = __webpack_require__("./components/SideNav/SideNavLink.js");
var _jsxFileName = "/Users/jmaddox/projects/wow/components/SideNav/index.js";



var SideNav = function SideNav(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "side-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SideNavLink__["a" /* default */], {
    title: "Summary",
    page: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SideNavLink__["a" /* default */], {
    title: "Professions",
    page: "professions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SideNavLink__["a" /* default */], {
    title: "Exploration",
    page: "exploration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SideNavLink__["a" /* default */], {
    title: "Reputation",
    page: "reputation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (SideNav);

/***/ }),

/***/ "./components/SideNav/sideNavLink.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./data/achievements.json":
/***/ (function(module, exports) {

module.exports = [{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true},{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true},{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true},{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true},{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true},{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true},{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true},{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true},{"title":"A thing","icon":"an icon","date":"some date","isSpecial":true}]

/***/ }),

/***/ "./pages/global.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AchievementPane__ = __webpack_require__("./components/AchievementPane/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Content__ = __webpack_require__("./components/Content/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Character__ = __webpack_require__("./components/Character/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Hud__ = __webpack_require__("./components/Hud/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_scss__ = __webpack_require__("./pages/global.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__global_scss__);
var _jsxFileName = "/Users/jmaddox/projects/wow/pages/index.js";







 //import achievements from '../data/achievements'

var Index = Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Character__["a" /* default */], {
    location: "main",
    action: "cheer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Hud__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_AchievementPane__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Content__["a" /* default */], {
    page: props.router.query.page ? props.router.query.page : 'summary',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map