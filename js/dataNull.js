;(function (win, undefined) {
  function dataNull(options) {
    var $dataNullBox = document.getElementById(options.eleId);
    var settings = {}
    if (typeof options.img != 'undefined') {
      if (typeof options.img !== 'string') {
        options.img = 'http://hackbinimg.luokangyuan.com/datanull/datanull(' + options.img + ').png';
      }
    } else {
      options.img = 'http://hackbinimg.luokangyuan.com/datanull/datanull(1).png';
    }
    // 设置默认参数
    settings.text = typeof (options.text) == 'undefined' ? '暂无数据' : options.text;
    settings.width = typeof (options.width) == 'undefined' ? '100%' : options.width;
    settings.height = typeof (options.height) == 'undefined' ? '100%' : options.height;
    settings.imgWidth = typeof (options.imgWidth) == 'undefined' ? '100px' : options.imgWidth;
    settings.top = typeof (options.top) == 'undefined' ? '50px' : options.top;
    settings.img = typeof (options.img) == 'undefined' ? 'http://hackbinimg.luokangyuan.com/datanull/datanull(1).png' : options.img;
    settings.bgColor = typeof (options.bgColor) == 'undefined' ? '#fff' : options.bgColor;
    settings.txtColor = typeof (options.txtColor) == 'undefined' ? '#3e3e3e' : options.txtColor;
    settings.txtSize = typeof (options.txtSize) == 'undefined' ? '24px' : options.txtSize;
    settings.txtTop = typeof (options.txtTop) == 'undefined' ? '10px' : options.txtTop;
    settings.txtWeight = typeof (options.txtWeight) == 'undefined' ? 'bold' : options.txtWeight;
    settings.outerWidth = typeof (options.outerWidth) == 'undefined' ? '' : options.outerWidth;
    settings.outerHeight = typeof (options.outerHeight) == 'undefined' ? '' : options.outerHeight;

    var $dataNullEle = document.createElement('div');
    var $textEl = document.createElement('div');
    var $imgEl = document.createElement('img');

    // 空数据容器
    $dataNullEle.setAttribute('class','datanull-content');
    $dataNullEle.style.width = settings.width;
    $dataNullEle.style.height = settings.height;
    $dataNullEle.style.marginTop = settings.top;
    $dataNullEle.style.backgroundColor = settings.bgColor;
    $dataNullEle.style.textAlign = 'center';
    
    //文本
    $textEl.innerText = settings.text;
    $textEl.style.fontWeight = settings.txtWeight;
    $textEl.style.fontSize = settings.txtSize;
    $textEl.style.color = settings.txtColor;
    $textEl.style.marginTop = settings.txtTop;
    
    // 图片
    $imgEl.src = settings.img;
    $imgEl.style.width = settings.imgWidth;
    
    // 外部容器宽高
    $dataNullBox.style.overflow = 'hidden';
    if (typeof settings.outerHeight != 'undefined') {
      $dataNullBox.style.height = settings.height;
    }
    if (typeof settings.outerWidth != 'undefined') {
      $dataNullBox.style.width = settings.outerWidth;
    }

    $dataNullBox.innerHTML = '';
    $dataNullEle.appendChild($imgEl);
    $dataNullEle.appendChild($textEl);
    $dataNullBox.appendChild($dataNullEle);

    // 清空方法
    this.empty = function(){
      $dataNullEle.remove();
    }
  }

  window.dataNull = dataNull;
})(window);