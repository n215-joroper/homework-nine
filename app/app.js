// import * as MODEL from "../model/model.js"

import {loadPage } from "../model/model.js";


function changeRoute() {
let hashTag = window.location.hash;
let pageID = hashTag.replace('#', '');
// console.log(hashTag + ' ' + pageID);
    loadPage(pageID);


}

function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

$(document).ready(function () {
    loadPage("home")
    initURLListener();
    //initListeners();
});
/**
 * The `initListeners` function adds click event listeners to all anchor elements within the
 * navigation, logging the clicked element's ID and calling the `loadPage` function with that ID.
 */
// function initListeners() {
//     $("nav a").on("click", (e) => {
//         let btnId = e.currentTarget.id
//         // console.log(btnId)

//        loadPage(btnId)
        
//     })
// }
 
