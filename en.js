jQuery(document).ready(function($){

    var add_original_img_link = function(img){
        var scale_ratio = img.clientWidth / img.naturalWidth;
        if(scale_ratio <= 0.8){
            var original_img_link__a = $('<a />', {
                href: img.src,
                text: ' ▷Enlarge image ' + Math.round(1 / scale_ratio * 10) / 10 + ' times',
                'class': 'original-img-link__a',
                title: 'This image is reduced to ' + Math.round(scale_ratio * 100) + '%.',
                target: '_blank'
            });
            var container = $('<span />', {
                'class': 'original-img-link'
            });
            container.append(original_img_link__a);

            if($(img).next().is('.wp-caption-text')){
                $(img).next().append(container);
            }else{
                $(img).after(container);
            }
        }
    };

    $('.content img').each(function(){
        $(this).load(function(){
            add_original_img_link(this);
        });
    });
    $(window).resize(function(){
        if($('.original-img-link').length > 0){
            $('.original-img-link').remove();
        }
        $('.content img').each(function(){
            add_original_img_link(this);
        });
    });
});