//----------------------------序列帧动画（依赖JQ）--------------------------------
// 示例代码
//function play() {
//	var anim = frameAnimation.anims($('#animbg'), 720, 6, 1, 0);
//	anim.start();  //正序播放
//	anim.start(true);  //倒序播放
//}
(function(window) {
	window.frameAnimation = {
		anims: (function() {
			/*
			obj=>需要执行背景动画的对象；
			width:图片的总宽度
			steps=>需要的帧数；
			eachtime=>一次完整动画需要的时间；
			times=>动画执行的次数 0表示无限反复
			isReverse=>是否倒序播放
			*/
			return function(obj, width, steps, eachtime, times, callback) {
				var runing = false;
				var handler = null; //obj,width,steps,eachtime,times定时器
				var step = 0; //当前帧
				var time = 0; //当前第几轮
				var speed = eachtime * 1000 / steps; //间隔时间
				var oneStepWidth = width / steps;

				function _play(isReverse) {
					if(isReverse) {
						if(step <= 0) {
							step = steps;
							time++;
						}
					} else {
						if(step >= steps) {
							step = 0;
							time++;
						}
					}

					if(0 == times || time < times) {
						obj.css('background-position', -oneStepWidth * step + 'px 0px');

						if(isReverse) {
							step--;
						} else {
							step++;
						}
					} else {
						control.stop();
						callback && callback();
					}
				}

				var control = {
					start: function(isReverse) {
						if(!runing) {
							runing = true;
							step = time = 0;
							if(isReverse == undefined) isReverse = false;
							if(isReverse) step = steps;
							handler = setInterval(_play, speed, isReverse);
						}
						return this;
					},
					stop: function(restart) {
						if(runing) {
							runing = false;
							if(handler) {
								clearInterval(handler);
								handler = null;
							}
							if(restart) {
								obj.css('background-position', '0 0');
								step = 0;
								time = 0;
							}
						}
					},
					dispose: function() {
						this.stop();
						//console.log('anim dispose');
					}
				};
				return control;
			}
		})()
	}
})(window);
