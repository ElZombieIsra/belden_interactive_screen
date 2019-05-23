let option = getUrlParameter('option'),
    videoUrl = './media/videos/covers/',
    config = getConfig(option);

$(function() {

    // Sets scene title, subtitle and video
    $('.scene-title').text(config.title);
    $('.scene-subtitle').text(config.subtitle);
    $('.video').attr('src', videoUrl + config.video);

    let container = $('.video-container');
    config.buttons.forEach(function(btn, i) {
        container.append(`
            <a href="${btn.url}" class="btn-invisible" style="width: ${btn.size}px; height: ${btn.size}px; top: ${btn.top}; left: ${btn.left}"></a>
        `)
    })

    $('.arrow.left').on('click', function() {
        history.back();
    })
})

function getConfig(option) {
    let config;
    if (option == 12) {
        config = {
            title: 'Collaboration Room',
            subtitle: 'Selection Scene',
            video: 'SLIDE 12.mp4',
            buttons: [
                {
                    size: 80,
                    top: '7%',
                    left: '49%',
                    url: './scene_detail.html?option=05'
                },
                {
                    size: 60,
                    top: '20%',
                    left: '31%',
                    url: './scene_detail.html?option=09'
                },
                {
                    size: 130,
                    top: '53%',
                    left: '19%',
                    url: './scene_detail.html?option=13'
                }
            ]
        }
    }
    return config;
}