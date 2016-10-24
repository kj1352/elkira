/*global $,alert*/
$(document).ready(function () {
    'use strict';
    
    $('#el').click(function () {
        $('.bdy').attr("id", "blu");
        $('.modal').show(300);
        $(".posts").remove();
        $(".modal").append('<fieldset class="posts" id="elpost"></fieldset>');
        $.getJSON("1.json", function (result) {
            $.each(result, function (i, field) {
                for (i = 0; i <= field.length; i += 1) {
                    $("#elpost").append("<fieldset>" + field[i].blog + "</fieldset><br>");
                }
            });
        });
 
    });
    
    $('#spnTop').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
        });
    });
    
    $('#timestamp').append("Last Post on " + document.lastModified);
    
    $('#close').click(function () {
        $('.modal').fadeOut(300);
        $('.bdy').removeAttr("id");
    });

    
    
    $('#kira').click(function () {
        $('.bdy').attr("id", "blu");
        $('.modal').slideDown(300);
        $(".posts").remove();
        $(".modal").append('<fieldset class="posts" id="kirapost"></fieldset>');
        $.getJSON("2.json", function (result) {
            $.each(result, function (j, field) {
                for (j = 0; j <= field.length; j += 1) {
                    $("#kirapost").append("<fieldset>" + field[j].blog + "</fieldset><br>");
                }
            });
        });
    });
    
    
    $('#ryuk').click(function () {
        $('.bdy').attr("id", "blu");
        $('.modal').fadeIn(300);
        $(".posts").remove();
        $(".modal").append('<fieldset class="posts" id="ryukpost"></fieldset>');
        $.getJSON("3.json", function (result) {
            $.each(result, function (k, field) {
                for (k = 0; k <= field.length; k += 1) {
                    $("#ryukpost").append("<fieldset>" + field[k].blog + "</fieldset><br>");
                }
            });
        });
    });

    $('#about').click(function () {
        $('.about').show(400);
    });
    
});