(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{53:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",function(){return c}),n.d(a,"rightToc",function(){return s}),n.d(a,"default",function(){return u});n(0);var l=n(82);function t(){return(t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c={id:"Internationalization",title:"Internationalization",sidebar_label:"Internationalization"},s=[{value:"API",id:"api",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Customize",id:"customize",children:[]}],r={rightToc:s},i="wrapper";function u(e){var a=e.components,n=o(e,["components"]);return Object(l.b)(i,t({},r,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Day.js has great support for internationalization."),Object(l.b)("p",null,"But none of them will be included in your build unless you use that."),Object(l.b)("p",null,"By default, Day.js comes with English (United States) locale."),Object(l.b)("p",null,"You can load multiple locales and switch between them easily."),Object(l.b)("p",null,Object(l.b)("a",t({parentName:"p"},{href:"https://github.com/iamkun/dayjs/tree/dev/src/locale"}),"List of supported locales")),Object(l.b)("p",null,"You are super welcome to add a locale by opening a pull request. 👍"),Object(l.b)("h2",null,Object(l.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"api"})),Object(l.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#api"}),"#"),"API"),Object(l.b)("h4",null,Object(l.b)("a",t({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"changing-locale-globally"})),Object(l.b)("a",t({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#changing-locale-globally"}),"#"),"Changing locale globally"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Returns locale string")),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-js"}),"import 'dayjs/locale/es'\nimport de from 'dayjs/locale/de'\ndayjs.locale('es') // use loaded locale globally\ndayjs.locale('de-german', de) // use locale and update default name string\nconst customizedLocaleObject = { ... } // More details can be found in Customize section below.\ndayjs.locale(customizedLocaleObject) // use customize locale\ndayjs.locale('en') // switch back to default English locale globally\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Changing the global locale doesn't affect existing instances.")),Object(l.b)("h4",null,Object(l.b)("a",t({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"changing-locales-locally"})),Object(l.b)("a",t({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#changing-locales-locally"}),"#"),"Changing locales locally"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Returns a new ",Object(l.b)("inlineCode",{parentName:"li"},"Dayjs")," object by switching to new locale.")),Object(l.b)("p",null,"Exactly the same as ",Object(l.b)("inlineCode",{parentName:"p"},"dayjs#locale"),", but only use locale in a specific instance."),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-js"}),"import 'dayjs/locale/es'\ndayjs()\n  .locale('es')\n  .format() // use loaded locale locally\ndayjs('2018-4-28', { locale: 'es' }) // through constructor\n")),Object(l.b)("h2",null,Object(l.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"installation"})),Object(l.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#installation"}),"#"),"Installation"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Via NPM:")),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-javascript"}),"import 'dayjs/locale/es' // load on demand\n// require('dayjs/locale/es') // CommonJS\n// import locale_es from 'dayjs/locale/es' -> load and get locale_es locale object\n\ndayjs.locale('es') // use locale globally\ndayjs()\n  .locale('es')\n  .format() // use locale in a specific instance\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Via CDN:")),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-html"}),"<script src=\"https://unpkg.com/dayjs\"><\/script>\n\x3c!-- Load locale as window.dayjs_locale_NAME --\x3e\n<script src=\"https://unpkg.com/dayjs/locale/zh-cn\"><\/script>\n<script>\n  dayjs.locale('zh-cn')\n  dayjs()\n    .locale('zh-cn')\n    .format()\n  // get locale object\n  var customLocale = window.dayjs_locale_zh_cn // zh-cn -> zh_cn\n<\/script>\n")),Object(l.b)("h2",null,Object(l.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"customize"})),Object(l.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#customize"}),"#"),"Customize"),Object(l.b)("p",null,"You could create your own locale."),Object(l.b)("p",null,"Feel free to open a pull request to share your locale."),Object(l.b)("p",null,"Template of a Day.js locale Object."),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-javascript"}),"const localeObject = {\n  name: 'es', // name String\n  weekdays: 'Domingo_Lunes ...'.split('_'), // weekdays Array\n  weekdaysShort: 'Sun_M'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided\n  weekdaysMin: 'Su_Mo'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided\n  weekStart: 1, // OPTIONAL, set the start of a week. If the value is 1, Monday will be the start of week instead of Sunday。\n  months: 'Enero_Febrero ... '.split('_'), // months Array\n  monthsShort: 'Jan_F'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided\n  ordinal: n => `${n}º`, // ordinal Function (number) => return number + output\n  formats: {\n    // abbreviated format options allowing localization\n    LTS: 'h:mm:ss A',\n    LT: 'h:mm A',\n    L: 'MM/DD/YYYY',\n    LL: 'MMMM D, YYYY',\n    LLL: 'MMMM D, YYYY h:mm A',\n    LLLL: 'dddd, MMMM D, YYYY h:mm A',\n    // lowercase/short, optional formats for localization\n    l: 'D/M/YYYY',\n    ll: 'D MMM, YYYY',\n    lll: 'D MMM, YYYY h:mm A',\n    llll: 'ddd, MMM D, YYYY h:mm A'\n  },\n  relativeTime: {\n    // relative time format strings, keep %s %d as the same\n    future: 'in %s', // e.g. in 2 hours, %s been replaced with 2hours\n    past: '%s ago',\n    s: 'a few seconds',\n    m: 'a minute',\n    mm: '%d minutes',\n    h: 'an hour',\n    hh: '%d hours', // e.g. 2 hours, %d been replaced with 2\n    d: 'a day',\n    dd: '%d days',\n    M: 'a month',\n    MM: '%d months',\n    y: 'a year',\n    yy: '%d years'\n  },\n  meridiem: (hour, minute, isLowercase) => {\n    // OPTIONAL, AM/PM\n    return hour > 12 ? 'PM' : 'AM'\n  }\n}\n")),Object(l.b)("p",null,"Template of a Day.js locale file."),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-javascript"}),"import dayjs from 'dayjs'\n\nconst locale = { ... } // Your Day.js locale Object.\n\ndayjs.locale(locale, null, true) // load locale for later use\n\nexport default locale\n")))}u.isMDXComponent=!0}}]);