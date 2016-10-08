# Frame-animation-js

帧动画js实现，依赖jQuery。

原代码引自：http://www.cnblogs.com/minakata/archive/2012/12/20/2825784.html。

--添加了倒序播放功能。

init:
	var anim = frameAnimation.anims($('#animbg'), 720, 6, 1, 0);
  
play:
	anim.start();  //正序播放
	anim.start(true);  //倒序播放
