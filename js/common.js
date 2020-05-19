var resizeHandler = function (elementString) {
    $window = $(window);
    var ratio;
    $rzObj = $(elementString);
    _wh = $window.height();
    _ww = $window.width();
    ratio = _wh/1000;
    if(_ww/_wh > 2000/1000) {
        ratio = _ww/2000;
    }
    $rzObj.css({
        "transform": "scale(" + ratio + ", " + ratio + ")"
    });
    console.log('scale');
};


$(function($) {
    // IntitContent();
    $(window).resize(function(event) { resizeHandler("#wrapper")}).resize();
});

 
  function open_video() {
    document.getElementById("popup_video").style.display = "block";
    document.getElementById("myVideo").play();
    }
    function close_video() {
    document.getElementById("popup_video").style.display = "none";
    document.getElementById("myVideo").pause();
    }

    function open_qua() {
      document.getElementById("popup_gif").style.display = "block";
      }
      function close_qua() {
      document.getElementById("popup_gif").style.display = "none";
      }

  