# Frame-animation-js

帧动画js实现，依赖jQuery。

原代码引自：http://www.cnblogs.com/minakata/archive/2012/12/20/2825784.html。

--添加了倒序播放功能。

init:

	var anim = frameAnimation.anims($('#animbg'), 720, 6, 1, 0);
  
play:

	anim.start();  //正序播放
	
	anim.start(true);  //倒序播放


option:
	var anim = frameAnimation.anims($('#animbg'), 720, 6, 1, 0);
	
	obj        需要执行背景动画的对象；
	width      图片的总宽度
	steps      需要的帧数；
	eachtime   一次完整动画需要的时间(单位：秒)；
	times      动画执行的次数   0表示无限反复
	isReverse  是否倒序播放

demo:
https://zhangdaren.github.io/Frame-animation-js/demo/index.html
