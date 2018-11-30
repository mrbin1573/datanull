;(function ($) {
  $.fn.dataNull = function (options) {
    if(typeof options.img != 'undefined'){
      console.log(typeof options.img )
      if(typeof options.img !== 'string'){
        options.img = 'http://hackbinimg.luokangyuan.com/datanull/datanull(' +options.img+ ').png';
      }
    }else{
      options.img = 'http://hackbinimg.luokangyuan.com/datanull/datanull(1).png';
    }

    var settings = $.extend({
      'text': '暂无数据',
      'width': '100%',
      'height': '100%',
      'imgWidth': '100px',
      'top': '50px',
      'img': 'http://hackbinimg.luokangyuan.com/datanull/datanull(1).png',
      'bgColor': '#fff !important',
      'txtAlign': 'center',
      'txtColor': '#3e3e3e',
      'txtWeight': 'bold',
      'txtSize': '24px'
    }, options);
    return this.each(function () {
      var $dataNullEle = $('<div></div>');
      var $textEl = $('<div style="margin-top:10px"></div>');
      var $imgEl = $('<img/>');
      $dataNullEle.css({
        'width': settings.width,
        'height': settings.height,
        'margin-top': settings.top,
        'background-color': settings.bgColor,
        'text-align': settings.txtAlign,
      })

      $textEl.text(settings.text).css(
        {
          'font-weight': settings.txtWeight,
          'font-size': settings.txtSize,
          'color': settings.txtColor
        }
      );

      $imgEl.attr('src', settings.img).css({
        'width': settings.imgWidth
      });

      $dataNullEle.append($imgEl, $textEl)
      $(this).append($dataNullEle);
    });
  };
})(jQuery);