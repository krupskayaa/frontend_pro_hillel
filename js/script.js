$(document).ready(function (){
    var images = [
        {
            name: 'body_color',
            count: 6, 
        },
        {
            name: 'eyes',
            count: 4,
        },
        {
            name: 'head',
            count: 3,
        },
        {
            name: 'mouth',
            count: 3,
        },
        {
            name: 'scale',
            count: 3,
        },
        {
            name: 'spots',
            count: 4,
        },
    ];

    function createDivs (name, location) {
        var div = $('<div>').appendTo(location);
        div.addClass(name);
    }
    createDivs('wrapper-game', 'body');
    createDivs('wrapper-icons', '.wrapper-game');
    createDivs('wrapper-shows', '.wrapper-game');

    for (var i = 0; i < 6; i++) {
        var wrapCover = $('<div>').appendTo('.wrapper-icons');
        wrapCover.addClass(`wrapper-cover`);
        wrapCover.attr('id', `${i}`);
        var imgCover = $('<img/>', { 
            src: `../img/icons/${i + 1}.png`,
            class: 'cover',
        });
        imgCover.appendTo($(wrapCover));
    }

    $(`.wrapper-cover`).on('click', function (){
        var id = this.closest('.wrapper-cover').id;
        $('.wrapper-variants').remove();
        $('.wrapper-icons .active').removeClass('active');
        $(this).addClass('active');
        var selectedImage = images[id];
        var wrapVariants = $('<div/>').appendTo('.wrapper-game');
        wrapVariants.addClass(`wrapper-icons wrapper-variants`);
        for(i = 1; i <= selectedImage.count; i++) {
            var imgVariants = $('<img/>', {
                src: `../img/${selectedImage.name}/${i}.png`,
                class: 'cover cover-opt',
                id: i,
            });
            imgVariants.appendTo($('.wrapper-variants'));
        }

        $('.wrapper-variants .cover-opt').on('click', function (){
            var variantId = this.id;
            $(`.wrapper-shows .${selectedImage.name}`).remove();
            var selected = $('<img/>', {
                src: `../img/${selectedImage.name}/${variantId}.png`,
                class: `selected-img ${selectedImage.name} ${selectedImage.name}-${variantId}`,
            });
            selected.appendTo($('.wrapper-shows'));
        })
    })
})