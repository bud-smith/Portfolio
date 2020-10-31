module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AcademicProjects.tsx":
/*!*****************************************!*\
  !*** ./components/AcademicProjects.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AcademicProjectsCardContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AcademicProjectsCardContainer */ "./components/AcademicProjectsCardContainer.tsx");

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\AcademicProjects.tsx";



class AcademicProjects extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      academic_projects_list: [{
        id: 0,
        name: "N-Queens",
        category: "Artificial Intelligence",
        description: "N-Queens is the problem of placing n number of queens on a chessboard of size n×n in which no queens can attack each other. This implementation uses an uninformed search strategy to find all solutions being breadth-first search (BFS), and two local search strategies to find a single solution being hill-climbing search and simulated annealing (SA) search.",
        technologies: ["C++"],
        demo: "https://n-queens.buds1.repl.run/",
        source: "https://github.com/bud-smith/University-Projects/tree/main/N-Queens"
      }, {
        id: 1,
        name: "Alarm Surgo",
        category: "Hybrid Mobile Application",
        description: "Alarm Surgo is a hybrid mobile application. The apps features include creating, editing, and deleting alarms, checking the latest news and weather using various public API's, and choosing a personalised location to view the news and weather from anywhere in the world.",
        technologies: ["Angular", "Ionic", "TypeScript", "HTML5", "CSS"],
        demo: "https://appetize.io/app/dadcbhk6xkj3p3gf5cv35xxjfc?device=pixel4xl&scale=75&orientation=portrait&osVersion=10.0&deviceColor=black",
        source: "https://github.com/bud-smith/University-Projects/tree/main/Alarm-Surgo"
      }]
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "academic-projects",
      className: "project-div",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "centre-text",
        children: "Academic Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "centre-text",
        children: "This is a set of my notable academic projects/assignments."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AcademicProjectsCardContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        academic_projects_list_prop: this.state
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AcademicProjects);

/***/ }),

/***/ "./components/AcademicProjectsCardContainer.tsx":
/*!******************************************************!*\
  !*** ./components/AcademicProjectsCardContainer.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalProjectsCardContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\AcademicProjectsCardContainer.tsx";

class PersonalProjectsCardContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return this.props.academic_projects_list_prop.academic_projects_list.map(academic_projects_list => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card text-white bg-primary mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-header",
        children: academic_projects_list.category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          width: "100%",
          height: "100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "card-title",
          children: academic_projects_list.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "card-text",
          children: academic_projects_list.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, this));
  }

}

/***/ }),

/***/ "./components/Contact.tsx":
/*!********************************!*\
  !*** ./components/Contact.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\Contact.tsx";


class Contact extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "project-div",
      id: "contact",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "centre-text",
        children: "Contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "centre-text",
        children: "Link with me here..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Entry.tsx":
/*!******************************!*\
  !*** ./components/Entry.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\Entry.tsx";



class Entry extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1378514088" + " " + "entry-div parallax",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "jsx-1378514088" + " " + "text-stroke entry-div-text",
        children: "BUD SMITH"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "jsx-1378514088" + " " + "text-stroke entry-div-text",
        children: "SOFTWARE DEVELOPER"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "1378514088",
        children: ".entry-div.jsx-1378514088{min-height:25vh;padding:5.8vh 0;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.parallax.jsx-1378514088{background-image:url(\"../images/background.jpg\");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;}.entry-div-text.jsx-1378514088{font-family:\"Open Sans\";font-size:56px;}.text-stroke.jsx-1378514088{color:white;text-shadow:1px 1px 2px black,0 0 1em black, 0 0 0.2em black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnVkXFxEZXNrdG9wXFx0ZXN0MDAxXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXEVudHJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZNEIsQUFHeUMsQUFRaUMsQUFRekIsQUFLWixZQUVPLElBdEJILFFBZ0JELFFBZkcsT0FnQnRCLFVBVGdDLENBTkwsdUJBcUIzQixJQWQrQiwyQkFDQyw0QkFDTixpQkFSSCxLQVN2Qix3RkFSQSIsImZpbGUiOiJDOlxcVXNlcnNcXEJ1ZFxcRGVza3RvcFxcdGVzdDAwMVxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxFbnRyeS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEVudHJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LWRpdiBwYXJhbGxheFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc3Ryb2tlIGVudHJ5LWRpdi10ZXh0XCI+QlVEIFNNSVRIPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXN0cm9rZSBlbnRyeS1kaXYtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNPRlRXQVJFIERFVkVMT1BFUlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmVudHJ5LWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUuOHZoIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucGFyYWxsYXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5lbnRyeS1kaXYtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1zdHJva2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaywgMCAwIDFlbSBibGFjayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwLjJlbSBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudHJ5O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Bud\\\\Desktop\\\\test001\\\\portfolio\\\\components\\\\Entry.tsx */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Entry);

/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\Footer.tsx";



class Footer extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://github.com/bud-smith/",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Copyright \xA9 2020. All rights reserved."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.tsx");

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\Layout.tsx";



const Layout = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Bud Smith Portfolio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      href: "/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://bootswatch.com/4/slate/bootstrap.min.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined), props.children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\Navbar.tsx";


class Navbar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-dark",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "navbar-brand",
        href: "#",
        children: "Bud Smith"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarColor02",
        "aria-controls": "navbarColor02",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "navbar-toggler-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "collapse navbar-collapse",
        id: "navbarColor02",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "navbar-nav mr-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "/#",
              children: ["Home", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "sr-only",
                children: "(current)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "#personal-projects",
              children: "Personal Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "#academic-projects",
              children: "Academic Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "#contact",
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: "form-inline my-2 my-lg-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "form-control mr-sm-2",
            type: "text",
            placeholder: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-secondary my-2 my-sm-0",
            type: "submit",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/PersonalProjects.tsx":
/*!*****************************************!*\
  !*** ./components/PersonalProjects.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PersonalProjectsCardContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonalProjectsCardContainer */ "./components/PersonalProjectsCardContainer.tsx");

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\PersonalProjects.tsx";



class PersonalProjects extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      personal_projects_list: [{
        id: 0,
        name: "Portfolio",
        category: "Front-end Web Development",
        description: "Personal portfolio that showcases my notable software projects.",
        technologies: ["next.js", "react.js", "JSX", "TypeScript", "HTML5", "CSS", "Git", "GitHub"],
        source: "https://github.com/bud-smith/Portfolio"
      }]
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "personal-projects",
      className: "project-div",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "centre-text",
        children: "Personal Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "centre-text",
        children: "This is a set of my notable personal projects. Due to grow soon."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PersonalProjectsCardContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        personal_projects_list_prop: this.state
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PersonalProjects);

/***/ }),

/***/ "./components/PersonalProjectsCardContainer.tsx":
/*!******************************************************!*\
  !*** ./components/PersonalProjectsCardContainer.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalProjectsCardContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\components\\PersonalProjectsCardContainer.tsx";

class PersonalProjectsCardContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return this.props.personal_projects_list_prop.personal_projects_list.map(personal_projects_list => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card text-white bg-primary mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-header",
        children: personal_projects_list.category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          width: "100%",
          height: "100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "card-title",
          children: personal_projects_list.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "card-text",
          children: personal_projects_list.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, this));
  }

}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.tsx");
/* harmony import */ var _components_PersonalProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PersonalProjects */ "./components/PersonalProjects.tsx");
/* harmony import */ var _components_AcademicProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AcademicProjects */ "./components/AcademicProjects.tsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");

var _jsxFileName = "C:\\Users\\Bud\\Desktop\\test001\\portfolio\\pages\\index.tsx";






function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Entry__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PersonalProjects__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AcademicProjects__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2FkZW1pY1Byb2plY3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjYWRlbWljUHJvamVjdHNDYXJkQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRW50cnkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVyc29uYWxQcm9qZWN0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZXJzb25hbFByb2plY3RzQ2FyZENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQWNhZGVtaWNQcm9qZWN0cyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImFjYWRlbWljX3Byb2plY3RzX2xpc3QiLCJpZCIsIm5hbWUiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwiZGVtbyIsInNvdXJjZSIsInJlbmRlciIsIlBlcnNvbmFsUHJvamVjdHNDYXJkQ29udGFpbmVyIiwiYWNhZGVtaWNfcHJvamVjdHNfbGlzdF9wcm9wIiwibWFwIiwiQ29udGFjdCIsIkVudHJ5IiwiRm9vdGVyIiwic3R5bGVzIiwiZm9vdGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJOYXZiYXIiLCJQZXJzb25hbFByb2plY3RzIiwicGVyc29uYWxfcHJvamVjdHNfbGlzdCIsInBlcnNvbmFsX3Byb2plY3RzX2xpc3RfcHJvcCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOztBQWFBLE1BQU1BLGdCQUFOLFNBQStCQywrQ0FBL0IsQ0FBeUM7QUFDckNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUErQjtBQUN0QyxVQUFNQSxLQUFOO0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLDRCQUFzQixFQUFFLENBQ3BCO0FBQ0lDLFVBQUUsRUFBRSxDQURSO0FBRUlDLFlBQUksRUFB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QUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxZQUFkO0FBQUEsb0JBQ0trQixzQkFBc0IsQ0FBQ25CO0FBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFHLG1CQUFTLEVBQUMsV0FBYjtBQUFBLG9CQUNLbUIsc0JBQXNCLENBQUNqQjtBQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELENBQVA7QUFzQkg7O0FBeEJnRSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU21CLElBQVQsR0FBZ0I7QUFDM0Isc0JBQ0kscUVBQUMsMERBQUQ7QUFBQSw0QkFDSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFRSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosZUFhSSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkosZUFlSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkgsQzs7Ozs7Ozs7Ozs7QUM1QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY2FkZW1pY1Byb2plY3RzQ2FyZENvbnRhaW5lciBmcm9tIFwiLi9BY2FkZW1pY1Byb2plY3RzQ2FyZENvbnRhaW5lclwiO1xyXG5cclxuaW50ZXJmYWNlIElBY2FkZW1pY1Byb2plY3RzTGlzdCB7XHJcbiAgICBbaW5kZXg6IG51bWJlcl06IHtcclxuICAgICAgICBpZD86IG51bWJlcjtcclxuICAgICAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgICAgIHRlY2hub2xvZ2llcz86IHN0cmluZztcclxuICAgICAgICBkZW1vPzogc3RyaW5nO1xyXG4gICAgICAgIHNvdXJjZT86IHN0cmluZztcclxuICAgIH07XHJcbn1cclxuXHJcbmNsYXNzIEFjYWRlbWljUHJvamVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElBY2FkZW1pY1Byb2plY3RzTGlzdCkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWNhZGVtaWNfcHJvamVjdHNfbGlzdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTi1RdWVlbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk4tUXVlZW5zIGlzIHRoZSBwcm9ibGVtIG9mIHBsYWNpbmcgbiBudW1iZXIgb2YgcXVlZW5zIG9uIGEgY2hlc3Nib2FyZCBvZiBzaXplIG7Dl24gaW4gd2hpY2ggbm8gcXVlZW5zIGNhbiBhdHRhY2sgZWFjaCBvdGhlci4gVGhpcyBpbXBsZW1lbnRhdGlvbiB1c2VzIGFuIHVuaW5mb3JtZWQgc2VhcmNoIHN0cmF0ZWd5IHRvIGZpbmQgYWxsIHNvbHV0aW9ucyBiZWluZyBicmVhZHRoLWZpcnN0IHNlYXJjaCAoQkZTKSwgYW5kIHR3byBsb2NhbCBzZWFyY2ggc3RyYXRlZ2llcyB0byBmaW5kIGEgc2luZ2xlIHNvbHV0aW9uIGJlaW5nIGhpbGwtY2xpbWJpbmcgc2VhcmNoIGFuZCBzaW11bGF0ZWQgYW5uZWFsaW5nIChTQSkgc2VhcmNoLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlY2hub2xvZ2llczogW1wiQysrXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbW86IFwiaHR0cHM6Ly9uLXF1ZWVucy5idWRzMS5yZXBsLnJ1bi9cIixcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2J1ZC1zbWl0aC9Vbml2ZXJzaXR5LVByb2plY3RzL3RyZWUvbWFpbi9OLVF1ZWVuc1wiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkFsYXJtIFN1cmdvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiSHlicmlkIE1vYmlsZSBBcHBsaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFsYXJtIFN1cmdvIGlzIGEgaHlicmlkIG1vYmlsZSBhcHBsaWNhdGlvbi4gVGhlIGFwcHMgZmVhdHVyZXMgaW5jbHVkZSBjcmVhdGluZywgZWRpdGluZywgYW5kIGRlbGV0aW5nIGFsYXJtcywgY2hlY2tpbmcgdGhlIGxhdGVzdCBuZXdzIGFuZCB3ZWF0aGVyIHVzaW5nIHZhcmlvdXMgcHVibGljIEFQSSdzLCBhbmQgY2hvb3NpbmcgYSBwZXJzb25hbGlzZWQgbG9jYXRpb24gdG8gdmlldyB0aGUgbmV3cyBhbmQgd2VhdGhlciBmcm9tIGFueXdoZXJlIGluIHRoZSB3b3JsZC5cIixcclxuICAgICAgICAgICAgICAgICAgICB0ZWNobm9sb2dpZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBbmd1bGFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSW9uaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUeXBlU2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSFRNTDVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDU1NcIixcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbW86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9hcHBldGl6ZS5pby9hcHAvZGFkY2JoazZ4a2ozcDNnZjVjdjM1eHhqZmM/ZGV2aWNlPXBpeGVsNHhsJnNjYWxlPTc1Jm9yaWVudGF0aW9uPXBvcnRyYWl0Jm9zVmVyc2lvbj0xMC4wJmRldmljZUNvbG9yPWJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9idWQtc21pdGgvVW5pdmVyc2l0eS1Qcm9qZWN0cy90cmVlL21haW4vQWxhcm0tU3VyZ29cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImFjYWRlbWljLXByb2plY3RzXCIgY2xhc3NOYW1lPVwicHJvamVjdC1kaXZcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjZW50cmUtdGV4dFwiPkFjYWRlbWljIFByb2plY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRyZS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIHNldCBvZiBteSBub3RhYmxlIGFjYWRlbWljIHByb2plY3RzL2Fzc2lnbm1lbnRzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPEFjYWRlbWljUHJvamVjdHNDYXJkQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgYWNhZGVtaWNfcHJvamVjdHNfbGlzdF9wcm9wPXt0aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNhZGVtaWNQcm9qZWN0cztcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbFByb2plY3RzIGZyb20gXCIuL1BlcnNvbmFsUHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbmFsUHJvamVjdHNDYXJkQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY2FkZW1pY19wcm9qZWN0c19saXN0X3Byb3AuYWNhZGVtaWNfcHJvamVjdHNfbGlzdC5tYXAoXHJcbiAgICAgICAgICAgIChhY2FkZW1pY19wcm9qZWN0c19saXN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY2FkZW1pY19wcm9qZWN0c19saXN0LmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNhZGVtaWNfcHJvamVjdHNfbGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2FkZW1pY19wcm9qZWN0c19saXN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGl2XCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudHJlLXRleHRcIj5Db250YWN0PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRyZS10ZXh0XCI+TGluayB3aXRoIG1lIGhlcmUuLi48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgRW50cnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktZGl2IHBhcmFsbGF4XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zdHJva2UgZW50cnktZGl2LXRleHRcIj5CVUQgU01JVEg8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3Ryb2tlIGVudHJ5LWRpdi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU09GVFdBUkUgREVWRUxPUEVSXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuZW50cnktZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNS44dmggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhbGxheCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmVudHJ5LWRpdi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LXN0cm9rZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMWVtIGJsYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAuMmVtIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50cnk7XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVkLXNtaXRoL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+QnVkIFNtaXRoIFBvcnRmb2xpbzwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9zbGF0ZS9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJ1ZCBTbWl0aFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyQ29sb3IwMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhckNvbG9yMDJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhckNvbG9yMDJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI3BlcnNvbmFsLXByb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWwgUHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjYWNhZGVtaWMtcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2FkZW1pYyBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtci1zbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXktMiBteS1zbS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbFByb2plY3RzQ2FyZENvbnRhaW5lciBmcm9tIFwiLi9QZXJzb25hbFByb2plY3RzQ2FyZENvbnRhaW5lclwiO1xyXG5cclxuaW50ZXJmYWNlIElQZXJzb25hbFByb2plY3RzTGlzdCB7XHJcbiAgICBbaW5kZXg6IG51bWJlcl06IHtcclxuICAgICAgICBpZD86IG51bWJlcjtcclxuICAgICAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgICAgIHRlY2hub2xvZ2llcz86IHN0cmluZztcclxuICAgICAgICBkZW1vPzogc3RyaW5nO1xyXG4gICAgICAgIHNvdXJjZT86IHN0cmluZztcclxuICAgIH07XHJcbn1cclxuXHJcbmNsYXNzIFBlcnNvbmFsUHJvamVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQZXJzb25hbFByb2plY3RzTGlzdCkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGVyc29uYWxfcHJvamVjdHNfbGlzdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUG9ydGZvbGlvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRnJvbnQtZW5kIFdlYiBEZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIHBvcnRmb2xpbyB0aGF0IHNob3djYXNlcyBteSBub3RhYmxlIHNvZnR3YXJlIHByb2plY3RzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlY2hub2xvZ2llczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5leHQuanNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFjdC5qc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkpTWFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlR5cGVTY3JpcHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJIVE1MNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNTU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdpdEh1YlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9idWQtc21pdGgvUG9ydGZvbGlvXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwZXJzb25hbC1wcm9qZWN0c1wiIGNsYXNzTmFtZT1cInByb2plY3QtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2VudHJlLXRleHRcIj5QZXJzb25hbCBQcm9qZWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjZW50cmUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBzZXQgb2YgbXkgbm90YWJsZSBwZXJzb25hbCBwcm9qZWN0cy4gRHVlIHRvIGdyb3dcclxuICAgICAgICAgICAgICAgICAgICBzb29uLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbmFsUHJvamVjdHNDYXJkQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uYWxfcHJvamVjdHNfbGlzdF9wcm9wPXt0aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxQcm9qZWN0cztcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbFByb2plY3RzIGZyb20gXCIuL1BlcnNvbmFsUHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbmFsUHJvamVjdHNDYXJkQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wZXJzb25hbF9wcm9qZWN0c19saXN0X3Byb3AucGVyc29uYWxfcHJvamVjdHNfbGlzdC5tYXAoXHJcbiAgICAgICAgICAgIChwZXJzb25hbF9wcm9qZWN0c19saXN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb25hbF9wcm9qZWN0c19saXN0LmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uYWxfcHJvamVjdHNfbGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb25hbF9wcm9qZWN0c19saXN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBFbnRyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnRyeVwiO1xuaW1wb3J0IFBlcnNvbmFsUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGVyc29uYWxQcm9qZWN0c1wiO1xuaW1wb3J0IEFjYWRlbWljUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNhZGVtaWNQcm9qZWN0c1wiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEVudHJ5IC8+XG5cbiAgICAgICAgICAgIDxQZXJzb25hbFByb2plY3RzIC8+XG5cbiAgICAgICAgICAgIHsvKiBUaGVtYXRpYyBicmVhayAqL31cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8QWNhZGVtaWNQcm9qZWN0cyAvPlxuXG4gICAgICAgICAgICB7LyogVGhlbWF0aWMgYnJlYWsgKi99XG4gICAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgICAgPENvbnRhY3QgLz5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==