$(document).ready(function () {
    'use strict';
    var iframe = $('#resource-iframe');
    var modal = $('#resource-modal');

    $('a.resource-link').on('click', function (event) {
        var resourceUrl = $(this).attr('data-target');

        if (!$(this).hasClass("file")){
            modal.modal('show');
            
            if ($('#resource-iframe').attr('src') != resourceUrl){
                iframe.contents().find("body").html('');
                iframe.attr('src', resourceUrl);
            }
        } else { $(this).attr("href",resourceUrl); }
    });

    iframe.on('load', function () {
        resizeIframe($(this));
    });

});

function resizeIframe(frame){
    var modale = frame.parents('.modal-content').first();
    var frameHeight = frame.contents().find("#wrap > .container").height();
    frame.animate({ height: frameHeight }, 200, function() {});
    modale.animate({ height: frameHeight + 150}, 200, function() {});
}