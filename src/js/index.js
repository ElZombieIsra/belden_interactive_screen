let option = getUrlParameter('option'),
    videoUrl = './media/videos/',
    config = getConfig(option);

$(function () {
    // $('video').on('loadeddata', function() {
    //     window.resizeTo(1920, 1000)
    //     window.resizeTo(1920, 1080)
    // })
    // Sample {
    //     title: null,
    //     subtitle: null,
    //     video: null,
    //     master_categories: [{
    //         name: null,
    //         categories: [{
    //             name: null,
    //             items: [{
    //                 type: null,
    //                 part_number: null,
    //                 recommended: false,
    //             }]
    //         }]
    //     }],
    //     menu: ''
    // };



    // Sets scene title, subtitle and video
    $('.scene-title').text(config.title);
    $('.scene-subtitle').text(config.subtitle);
    $('.video').attr('src', videoUrl + config.video);

    // Creates the master categories buttons
    config.master_categories.forEach(function (m_cat, i) {
        let btn;

        if (m_cat.name === 'Field-Term') {
            btn = $('.btn-FT');
            btn.attr('src', './media/images/FT-OFF.png');
            btn.attr('type', 'FT');
        } else if (m_cat.name === 'Pre-Term') {
            btn = $('.btn-PT');
            btn.attr('src', './media/images/PT-OFF.png');
            btn.attr('type', 'PT');
        } else if(m_cat.name === 'UTP'){
            btn = $('.btn-FT')
            btn.attr('src', './media/images/UTP-OFF.png');
            btn.attr('type', 'UTP');
        } else if (m_cat.name === 'STP') {
            btn = $('.btn-PT');
            btn.attr('src', './media/images/STP-OFF.png');
            btn.attr('type', 'STP');
        }

        if (btn) btn.addClass('btn-infor')
    })

    // Handles button click
    let btns = $('.btn-infor');
    btns.on('click', function (e) {
        e.preventDefault();

        // Destroys overlay
        $('.btn-selected').remove();

        $('.btn-infor.active').attr('src', './media/images/' + $('.btn-infor.active').attr('type') + '-OFF.png');
        $('.btn-infor.active').removeClass('active');

        $(this).addClass('active');
        $(this).attr('src', './media/images/' + $(this).attr('type') + '-ON.png')
        $(this).parent().append(`<img src="./media/images/09ButtonSelected.png" class="w-100 btn-selected">`)

        // Centers border overlay
        if($('.exception .btn-selected').length){
            $('.exception .btn-selected').css('left', (calcPX($('.exception').css('width')) / 2) - (calcPX($('.exception .btn-selected').css('width')) / 2))
        }
        updateCategorieInfo($(this).attr('btn'));

        function calcPX(px) {
            let val = px.replace('px', '');
            return parseInt(val);
        }
    })

    if (typeof btns === 'object') {
        $(btns[0]).trigger('click');
    } else {
        btns.trigger('click')
    }

    if (config.menu) {
        $('.arrow.right').css('display', 'block');
        $('.arrow').on('click', function (e) {
            location.href = config.menu;
        })
    }

});


function updateCategorieInfo(index) {
    let container = $('.info-container');
    container.html('');
    config.master_categories[index].categories.forEach(function (cat, i) {
        let html = `<div class="info">
            <div class="row header">
                <div class="col-md-12">
                    ${cat.name}
                </div>
            </div>
            <div class="content">`;
        
        let flex = false;
        
        cat.items.forEach(function (item, i) {
            if (item.type === 'Plug') {
                html += `<div class="row">
                    <div class="col-md-12 text-center plug">Plug Options</div>
                </div>`
            } else if (item.type === 'FlexPlug') {
                flex = true;
            }
            html += `<div class="row">
                <div class="col-md-6">
                    ${item.type}
                </div>
                <div class="col-md-6">
                    ${item.part_number}
                </div>
            </div>`
        });
        html += `</div></div>`;
        container.append(html);
        
        let cont = $('.info .plug')
        if(!flex && cont.length){
            cont[cont.length - 1].remove();
        }
    })
}

function getConfig(option) {
    let config;
    if (option == 02) {
        config = {
            title: 'Outdoor Security',
            subtitle: 'Monitoring',
            video: 'SLIDE 02 REAL.mp4',
            master_categories: [{
                    name: 'Field-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                type: 'Cable',
                                part_number: '10GXS13 / 10GXS12',
                                recommended: true
                            }]
                        },
                        {
                            name: '6A / 6+',
                            items: [{
                                type: 'Plug',
                                part_number: 'RVAFPUBK-S1',
                                recommended: false
                            }]
                        }
                    ]
                },
                {
                    name: 'Pre-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                type: 'FlexPlug',
                                part_number: 'RVAFFPUEW36O-S1',
                                recommended: true
                            }]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413 / 2412',
                                    recommended: false
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RV6FFPUEW36O-S1',
                                    recommended: false
                                }
                            ]
                        }
                    ]
                }
            ],
            menu: 'menu.html?option=03'
        };
    } else if (option == 04) {
        config = {
            title: 'Indoor IP Security Camera Scene',
            subtitle: null,
            video: 'SLIDE 04 REAL.mp4',
            master_categories: [{
                    name: 'Field-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable',
                                    part_number: '10GXS13 / 10GXS12',
                                    recommended: true,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413 / 2412',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Pre-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN01AUCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN016UCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        }
                    ]
                }
            ],
            menu: null
        };
    } else if (option == 06) {
        config = {
            title: 'Digital Kiosk',
            subtitle: 'POS Scene',
            video: 'SLIDE 06 REAL.mp4',
            master_categories: [{
                    name: 'Field-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable',
                                    part_number: '10GXS13 / 10GXS12',
                                    recommended: true,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413 / 2412',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Pre-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN06AUCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN066UCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        }
                    ]
                }
            ],
            menu: null
        };
    } else if (option == 05) {
        config = {
            title: 'Intellent Lighting Scene',
            subtitle: null,
            video: 'SLIDE 05 REAL.mp4',
            master_categories: [{
                    name: 'Field-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable',
                                    part_number: '10GXS13 / 10GXS12',
                                    recommended: true,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '3613 / 3612',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Pre-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN01AUCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN016UCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                }
            ],
            menu: null
        };
    } else if (option == 07) {
        config = {
            title: 'AV',
            subtitle: 'Digital Signage Scene',
            video: 'SLIDE 07 REAL.mp4',
            master_categories: [{
                    name: 'UTP',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable',
                                    part_number: '10GXS13 / 10GXS12',
                                    recommended: true,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ],

                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413 / 2412',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RV6FFPUEW18-S1',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'STP',
                    categories: [{
                            name: 'HDBaseT',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2183',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPSME-S1',
                                    recommended: false,
                                }
                            ],

                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413F / 2412F',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPSME-S1',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                }
            ],
            menu: null
        };
    } else if (option == 08) {
        config = {
            title: 'BMS - Access Control',
            subtitle: 'Sensors Scene',
            video: 'SLIDE 08 REAL.mp4',
            master_categories: [{
                    name: 'Field-Term',
                    categories: [{
                        name: '6+',
                        items: [{
                                type: 'Cable',
                                part_number: '2413 / 2412',
                                recommended: true,
                            },
                            {
                                type: 'Plug',
                                part_number: 'RVAFPUBK-S1',
                                recommended: false,
                            },
                            {
                                type: 'FlexPlug',
                                part_number: 'RV6FFPUEW18-S1',
                                recommended: true,
                            }
                        ]
                    }]
                },
                {
                    name: 'Pre-Term',
                    categories: [{
                        name: '6+',
                        items: [{
                                type: 'Cable Assembly',
                                part_number: 'CN016UCTPBxxx',
                                recommended: false,
                            },
                            {
                                type: 'Plug',
                                part_number: 'RVAFPUBK-S1',
                                recommended: false,
                            },
                            {
                                type: 'FlexPlug',
                                part_number: 'RV6FFPUEW18-S1',
                                recommended: true,
                            }
                        ]
                    }]
                }
            ],
            menu: null
        };
    } else if (option == 09) {
        config = {
            title: 'WAP Scene',
            subtitle: null,
            video: 'SLIDE 09 REAL.mp4',
            master_categories: [{
                    name: 'Field-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable',
                                    part_number: '10GXS13 / 10GXS12',
                                    recommended: false,
                                },
                                {
                                    type: 'Bonded Cable',
                                    part_number: '10GXS33 / 10GXS32',
                                    recommended: true,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413 / 2412',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RV6FFPUEW18-S1',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Pre-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN02AUCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN016UCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RV6FFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        }
                    ]
                }
            ],
            menu: 'menu.html?option=10'
        };
    } else if (option == 11) {
        config = {
            title: 'Conference Room',
            subtitle: 'A/V Scene',
            video: 'SLIDE 11 REAL.mp4',
            master_categories: [{
                    name: 'UTP',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable',
                                    part_number: '10GXS13 / 10GXS12',
                                    recommended: true,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ],

                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413 / 2412',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPUBK-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'FlexPlug',
                                    part_number: 'RVAFFPUEW18-S1',
                                    recommended: true,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'STP',
                    categories: [{
                            name: '4K',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2183',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPSME-S1',
                                    recommended: false,
                                }
                            ],

                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413F / 2412F',
                                    recommended: false,
                                },
                                {
                                    type: 'Plug',
                                    part_number: 'RVAFPSME-S1',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                }
            ],
            menu: './menu.html?option=12'
        };
    } else if (option == 13) {
        config = {
            title: 'Wired LAN / Wall Outlet Scene',
            subtitle: null,
            video: 'SLIDE 13 REAL.mp4',
            master_categories: [{
                    name: 'Field-Term',
                    categories: [{
                            name: '6A',
                            items: [{
                                    type: 'Cable',
                                    part_number: '10GXS13 / 10GXS12',
                                    recommended: false,
                                },
                                {
                                    type: 'Bonded Cable',
                                    part_number: '10GXS33 / 10GXS32',
                                    recommended: true,
                                },
                                {
                                    type: 'Jacks',
                                    part_number: 'RVAMJKUxx-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'Patchcords',
                                    part_number: 'CA21106007',
                                    recommended: true,
                                }
                            ]
                        },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable',
                                    part_number: '2413 / 2412',
                                    recommended: false,
                                },
                                {
                                    type: 'Jacks',
                                    part_number: 'RV6MJKUxx-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'Patchcords',
                                    part_number: 'C601106007',
                                    recommended: false,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Pre-Term',
                    categories: [
                        // {
                        //     name: '6A',
                        //     items: [{
                        //             type: 'Cable Assembly',
                        //             part_number: 'CN06AUCTPBxxx',
                        //             recommended: false,
                        //         },
                        //         {
                        //             type: 'Jacks',
                        //             part_number: 'RVAMJKUxx-S1',
                        //             recommended: false,
                        //         },
                        //         {
                        //             type: 'Patchcords',
                        //             part_number: 'CA21106007',
                        //             recommended: true,
                        //         }
                        //     ]
                        // },
                        {
                            name: '6+',
                            items: [{
                                    type: 'Cable Assembly',
                                    part_number: 'CN066UCTPBxxx',
                                    recommended: false,
                                },
                                {
                                    type: 'Jacks',
                                    part_number: 'RV6MJKUxx-S1',
                                    recommended: false,
                                },
                                {
                                    type: 'Patchcords',
                                    part_number: 'C601106007',
                                    recommended: true,
                                }
                            ]
                        }
                    ]
                }
            ],
            menu: null
        };
    }
    return config;
}