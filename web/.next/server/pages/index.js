"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/check-icon.5cbb7f6a.svg","height":41,"width":40});

/***/ }),

/***/ 231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.3ce69a3f.svg","height":41,"width":213});

/***/ }),

/***/ 363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/nlw-copa-preview.601a7839.png","height":605,"width":518,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA1klEQVR42mPwD49brauj99va0moFAzpIKajqNTIx/W9uav6fQVRJRc/QZKmOrv4d3+DIpQyF9d2BNg62/83NzP+rqmqU6BkYP7I2N//v7BfxjKFl0hIVl0Dvz1a+xv9VDVXP21havXW0M/nvFhC0heH///+Mbj5BD22sbP8bGRn/t7e2+O3hrPs/OC5hEthe79DYKC//4A5XF8ctLvZW/62sjP57xWblguQYYY7T09PvsLU0+m9oZvHfO7XSCyxo5ejJBqKllPUjHBzszji4ut4Ny6lXBgCiVEbyu9c4kgAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/usersAvatarExample.cd4d6dc6.png","height":57,"width":158,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AVZ4YZswBAdYHBLE6t/fPwjp9TMAC/kA+Qn6/xXu8wqoAVyVef9qDwwAEBGjAJ2mhgAgIQUACPIHAP4D2QDT1hcAATR5XZ9jEBxY5Nyw67THNQdENCAA9e3a+fkBDBXy6xqospUo/2TKKDsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 19:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const URL = "http://localhost:3333";

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: URL
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(363);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(231);
/* harmony import */ var _assets_usersAvatarExample_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(490);
/* harmony import */ var _assets_check_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(740);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_axios__WEBPACK_IMPORTED_MODULE_6__]);
_lib_axios__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Home({ guessesCount , usersCount , poolsCount  }) {
    const [poolTitle, setPoolTitle] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    function handleChangePoolTitle(event) {
        setPoolTitle(event.target.value);
        console.log(event.target.value);
    }
    async function handleCreateNewPool(event) {
        event.preventDefault();
        try {
            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_6__/* .api.post */ .h.post("/pools", {
                title: poolTitle
            });
            const code = response.data.code;
            await navigator.clipboard.writeText(code);
            alert(`bolão ${poolTitle} criado com succesoo, o código de accesso é este ${code} o código foi copiado para á sua área de tranferência  
                `);
        } catch (error) {
            console.warn(error);
            alert("n\xe3o foi poss\xedvel realizar o bol\xe3o por favor tente novamente");
        }
        setPoolTitle("");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "max-w-6xl h-screen items-center mx-auto px-6 grid grid-cols-2 gap-28",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        alt: "logo amerela escrita nlw copa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-5xl mt-[3.75rem] leading-tight text-white font-bold",
                        children: "Crie seu pr\xf3prio bol\xe3o da copa e compartilhe entre amigos!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10 flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                quality: 100,
                                src: _assets_usersAvatarExample_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                className: "text-xl text-gray-100 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-green-500",
                                        children: usersCount.count
                                    }),
                                    " pessoas j\xe1 est\xe3o usando"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleCreateNewPool,
                        className: "flex gap-2 mt-10 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                required: true,
                                type: "text",
                                value: poolTitle,
                                onChange: handleChangePoolTitle,
                                placeholder: "Qual nome do seu bol\xe3o?",
                                className: `
                            flex-1 rounded py-4 px-6 bg-gray-500 border border-gray-600 text-gray-100 text-sm
                            placeholder:text-gray-200
                        `
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: `
                            px-6 py-5 font-bold text-sm text-gray-800 rounded bg-yellow-500 uppercase
                            hover:opacity-80 transition-opacity
                        `,
                                children: "Cria meu bol\xe3o"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-4 text-sm text-gray-400 max-w-[25rem] leading-relaxed ",
                        children: "Ap\xf3s criar seu bol\xe3o, voc\xea receber\xe1 um c\xf3digo \xfanico que poder\xe1 usar para convidar outras pessoas \uD83D\uDE80"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                        className: "mt-10 pt-10 grid grid-cols-2 border-t border-t-gray-600",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "flex-1 flex border-r border-r-gray-600 gap-6 items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: _assets_check_icon_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                className: "block text-2xl text-gray-100",
                                                children: [
                                                    "+",
                                                    poolsCount.count
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: " text-gray-100 text-base",
                                                children: "Bol\xf5es criados"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "flex-1 flex ml-16 gap-6 items-center ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: _assets_check_icon_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                        alt: "dois celulares montrando uma pr\xe9via do Nlw app Mobile",
                                        quality: 100
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                className: "block text-2xl text-gray-100",
                                                children: guessesCount.count
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: " text-gray-100 text-base",
                                                children: "Palp\xedtes Criados"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: _assets_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    width: 518,
                    height: 605,
                    alt: ""
                })
            })
        ]
    });
}
const getStaticProps = async ()=>{
    try {
        const [usersCountResponse, guessesCountResponse, poolsCountResponse] = await Promise.all([
            _lib_axios__WEBPACK_IMPORTED_MODULE_6__/* .api.get */ .h.get("/users/count"),
            _lib_axios__WEBPACK_IMPORTED_MODULE_6__/* .api.get */ .h.get("/guesses/count"),
            _lib_axios__WEBPACK_IMPORTED_MODULE_6__/* .api.get */ .h.get("/pools/count")
        ]);
        const usersCount = usersCountResponse.data;
        const guessesCount = guessesCountResponse.data;
        const poolsCount = poolsCountResponse.data;
        return {
            props: {
                usersCount,
                guessesCount,
                poolsCount
            },
            revalidate: 60 * 10 // 10 minutos 
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(970)));
module.exports = __webpack_exports__;

})();