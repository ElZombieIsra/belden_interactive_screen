$ = require('jquery');
require('bootstrap');

// $(function() {
//     $('a').off().on('click', function(e) {
//         console.log('nope');
        
//         e.preventDefault()
//         redirectTo($(this).attr('href'))
//     })
// })

// function redirectTo(url) {
//     let pre = location.search !== '' ? '?' : '&';
//     location.href = url + pre + 'pastUrl=' + location.href
// }

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}