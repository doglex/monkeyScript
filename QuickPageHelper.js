// ==UserScript==
// @name        QuickPageHelper
// @namespace   Violentmonkey Scripts
// @match       https://apachecn.gitee.io/ailearning/
// @match       https://ailearning.apachecn.org/
// @grant       none
// @version     1.0
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/3.3.1/jquery.js
// @author      -
// @description 2020/11/26 下午9:26:14
// ==/UserScript==

setTimeout(() => {
        console.log("insalling <Qucik Page>")

        var links = []
        $(".sidebar-nav a").each(function () {
            // console.log(this.href)
            links.push(this.href)
        })

        var button = document.createElement("button");
        button.id = "pre_page_botton"
        button.innerHTML = "👈";
        button.style = "position:fixed;top:5%;z-index:999;width:50px;height:50px;left:300px;background-color: transparent;font-size:50px;border:0;outline:none;color: rgba(0, 0, 0, 0.1);"
        button.addEventListener('click', function () {
            window.location = links[links.indexOf($(".active a")[0].href) - 1]
        }, false);

        document.body.appendChild(button);

        var button = document.createElement("button");
        button.id = "post_page_botton"
        button.innerHTML = "👉";
        button.style = "position:fixed;bottom:10%;z-index:999;width:50px;height:50px;right:20px;background-color: transparent;font-size:50px;border:0;outline:none;color: rgba(0, 0, 0, 0.5);"
        button.addEventListener('click', function () {
            window.location = links[links.indexOf($(".active a")[0].href) + 1]
        }, false);

        document.body.appendChild(button);

    }
    , 2000)
