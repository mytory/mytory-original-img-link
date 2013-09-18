jQuery(document).ready(function($){
    $('.content img').each(function(){
        $(this).load(function(){
            var scale_ratio = this.clientWidth / this.naturalWidth;
            if(scale_ratio <= 0.8){
                var original_img_link__a = $('<a />', {
                    href: this.src,
                    text: ' ▷이미지 ' + Math.round(1 / scale_ratio * 10) / 10 + '배 확대',
                    'class': 'original-img-link__a',
                    title: '현재 이 이미지는 ' + Math.round(scale_ratio * 100) + '%로 축소된 상태입니다.',
                    target: '_blank'
                });
                var container = $('<span />', {
                    'class': 'original-img-link'
                });
                container.append(original_img_link__a);

                if($(this).next().is('.wp-caption-text')){
                    $(this).next().append(container);
                }else{
                    $(this).after(container);
                }
            }
        });
    });
});