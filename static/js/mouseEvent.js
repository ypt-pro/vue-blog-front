
//定义获取词语下标
var a_idx = 0;
jQuery(document).ready(function ($) {
  //body时触发
  $("body").click(function (e) {
    //需要显示的词语
    var a = new Array("A", "B", "C", "D°", "E", "F", "G", "h", "I", "J", "K", "L");
    //设置词语给span标签
    var $i = $("<span/>").text(a[a_idx]);
    //下标等于原来下标+1 ，对总数取余
    a_idx = (a_idx + 1) % a.length;
    //获取鼠标指针位置，
    //读取x和f的指针坐标
    var x = e.pageX, y = e.pageY;
    //å在鼠标的指针的位置给$i定义的span标签添加css样式
    $i.css({
      "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "font-size" : "18px",
      "color": "orange"
    });
    //body中追加
    $("body").append($i);
    //animate() 执行css自定义动画
    $i.animate({
      //将原来的位置向上移动180
      "top": y - 180,
      "opacity": 0
      //1500速度
    }, 1500, function () {
      //时间到了删除
      $i.remove();
    });
  });
})
;
