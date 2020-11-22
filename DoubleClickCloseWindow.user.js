// ==UserScript==
// @name         DoubleClickCloseWindow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match      *://*/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
    document.body.ondblclick = function(){
        window.close();
    }
})();