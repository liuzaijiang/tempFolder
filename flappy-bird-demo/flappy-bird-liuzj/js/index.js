/*获取canvas上下文*/
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
	
/*画背景*/
var img={
	bg: new Image(),
    banner: new Image(),
	pipe_down:new Image(),
	pipe_top:new Image(),
}
img.bg.src="./img/bg.png";
img.bg.onload=function(){ //图片需要加载后才能画图
	//ctx.drawImage(img.bg,0,494,62,60,0,0,62,60);
	ctx.drawImage(img.bg,0,0);
};

img.pipe_down.src="./img/pie_down.png";
img.pipe_down.onload=function(){ //图片需要加载后才能画图
	//ctx.drawImage(img.bg,0,494,62,60,0,0,62,60);
	ctx.drawImage(img.pipe_down,0,0,62,100,0,323,62,100);
};

img.pipe_top.src="./img/pie_top.png";
img.pipe_top.onload=function(){ //图片需要加载后才能画图
	//ctx.drawImage(img.bg,0,494,62,60,0,0,62,60);
	ctx.drawImage(img.pipe_top,0,270,62,150,0,0,62,150);
};
