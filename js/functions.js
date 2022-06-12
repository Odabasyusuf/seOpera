$(document).ready(function() {
    $("#secondTab").hide();
    $("#hTagsTab").hide();
});


function getDomain(url, subdomain) {
    subdomain = subdomain || false;
    url = url.replace(/(https?:\/\/)?(www.)?/i, '');
    if (!subdomain) {
        url = url.split('.');

        url = url.slice(url.length - 2).join('.');
    }

    if (url.indexOf('/') !== -1) {
        return url.split('/')[0];
    }

    return url;
}


$("#quick-links").click(function(){
    $("#firstTab").fadeOut();
    $("#hTagsTab").fadeOut();
    $("#secondTab").fadeIn();

    $("#robots-tag").hide();
    $("#lang").hide();
    $("#footer-bar").hide();
});

$("#overview").click(function(){
    $("#firstTab").fadeIn();
    $("#secondTab").fadeOut();
    $("#hTagsTab").fadeOut();

    $("#robots-tag").show();
    $("#lang").show();
    $("#footer-bar").show();
});

$("#h-tags").click(function(){
    $("#firstTab").fadeOut();
    $("#secondTab").fadeOut();
    $("#hTagsTab").fadeIn();

    $("#robots-tag").hide();
    $("#lang").hide();
    $("#footer-bar").hide();
});