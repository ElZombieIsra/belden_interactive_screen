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
    } else if (option == 03) {
        config = {
            title: 'Interior Smart Building',
            subtitle: 'Selection Scene',
            video: 'SLIDE 03.mp4',
            buttons: [
                {
                    size: 55,
                    top: '44%',
                    left: '9%',
                    url: './scene_detail.html?option=04'
                },
                {
                    size: 40,
                    top: '47.5%',
                    left: '19.3%',
                    url: './scene_detail.html?option=04'
                },
                {
                    size: 55,
                    top: '58%',
                    left: '23.5%',
                    url: './scene_detail.html?option=06'
                },
                {
                    size: 65,
                    top: '33%',
                    left: '48%',
                    url: './scene_detail.html?option=05'
                },
                {
                    size: 55,
                    top: '45%',
                    left: '46.5%',
                    url: './scene_detail.html?option=09'
                },
                {
                    size: 45,
                    top: '54.5%',
                    left: '49%',
                    url: './scene_detail.html?option=13'
                }
            ]
        }
    } else if (option == 10) {
        config = {
            title: 'Collaboration Room',
            subtitle: 'Selection Scene',
            video: 'SLIDE 10.mp4',
            buttons: [
                {
                    size: 75,
                    top: '44%',
                    left: '27%',
                    url: './scene_detail.html?option=11'
                },
                {
                    size: 50,
                    top: '40%',
                    left: '50%',
                    url: './scene_detail.html?option=07'
                },
                {
                    size: 35,
                    top: '47%',
                    left: '57%',
                    url: './scene_detail.html?option=06'
                },
                {
                    size: 45,
                    top: '22%',
                    left: '66%',
                    url: './scene_detail.html?option=05'
                },
                {
                    size: 70,
                    top: '49%',
                    left: '66%',
                    url: './scene_detail.html?option=13'
                },
                {
                    size: 120,
                    top: '6%',
                    left: '76%',
                    url: './scene_detail.html?option=09'
                }
            ]
        }
    }
    return config;
}