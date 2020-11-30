// ==UserScript==
// @name        ZhiHuPass
// @namespace   Violentmonkey Scripts
// @match       *://*zhihu*/*
// @grant       none
// @version     1.0
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/3.3.1/jquery.js
// @author      -
// @run-at document-end
// @description 2020/11/30 下午11:37:13
// ==/UserScript==

setInterval( () =>{
        console.log("免登陆功能已安装")
        $(".Modal-wrapper").remove()
        $(".Modal-enter-done").remove()
        document.documentElement.style.overflow='auto'
    }, 1000
)
