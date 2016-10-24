/*global $,u,p,alert,eid,prompt*/
var eid;
$(document).ready(function () {
    "use strict";
    $('.login').click(function () {
        eid = prompt("Enter Your Email Address Please");
        $('.statement').append("HI" + " " + $('#uname').val() + " Thank You. You Will Recieve Your User Name And Password From Admin ASAP..Feel Free To browse Using Guest Login");
        $('.login').remove();
    });
});