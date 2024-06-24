$(function(){
	
	$('.barbtn').click(function(){
		$(this).toggleClass('on');
		$('.subnav').toggleClass('on');
		$('#page').toggleClass('on');
		$('#menu').toggleClass('on');
	})	
	
	//input		
		$('input[type=text]').bind({
			focus:function(){
			if (this.value == this.defaultValue){
				this.value="";
			}
			},blur:function(){
			if (this.value == ""){
				this.value = this.defaultValue;
			}
			}
		});		
	
	
		$('.subnav li>a').click(function(){		
			$(this).next('dl').stop().slideToggle().parents('li').siblings().find('dl').slideUp()
		})	
	
		var canvas = document.body.querySelector('canvas'),
		    ctx = canvas.getContext('2d'),
		    W = canvas.width = $('.index-sec2 .div1-wrap').width(),
		    H = canvas.height = $('.index-sec2 .div1-wrap').height(),
		    pixels = [];
		
		for (var x = -400; x < 1600; x += 5) {
		  for (var z = -1500; z < 1600; z += 5) {
		    pixels.push({x: x, y: 0, z: z});
		  }  
		}
		
	 function render(ts) {
		  var imageData = ctx.getImageData(0, 0, W, H),
		      len = pixels.length,
		      fov = 500,
		      pixel, scale,
		      x2d, y2d, c;
		
		  for (var i = 0; i < len; i++) {
		    pixel = pixels[i];
		    scale = fov / (fov + pixel.z);
		    x2d = pixel.x * scale + W / 3;
		    y2d = pixel.y * scale + H / 3;
		    if(x2d >= 0 && x2d <= W && y2d >= 0 && y2d <= H) {
		      c = (Math.round(y2d) * imageData.width + Math.round(x2d)) * 4;
		      imageData.data[c] = 255;
		      imageData.data[c + 1] = 255;
		      imageData.data[c + 2] = 255;
		      imageData.data[c + 3] = 255;
		    }
		    pixel.z -= 0.1;
		    pixel.y = H / 10 + Math.sin(i / len * 30 + (ts / 1000)) * 20;
		    if (pixel.z < fov) pixel.z += 0 * fov;
		  }
		  ctx.putImageData(imageData, 0,-400);
		}
		
		(function drawFrame(ts){
		  requestAnimationFrame(drawFrame, canvas);
		  ctx.fillStyle = '#dab96a';	  
		  ctx.fillRect(0, 0, W, H);
		  render(ts);
		}());
	
	  $('.box1-hd li').hover(function(){			
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on')
		$('.box1-bd .div1').eq(index).addClass('on').siblings().removeClass('on');
		
	})	  
	 
	 $('.more-hd li').hover(function(){			
		var index=$(this).index();		
		$(this).addClass('on').siblings().removeClass('on');
		$('.sec4-pal').eq(index).addClass('on').siblings().removeClass('on');
		
	})
	
	 jQuery(".index-sec5").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:2});
	 jQuery(window).resize(function(){	 	
	 	 jQuery(".index-sec5").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:2});
	 
	 })	
	 

    
    $('.weixin').click(function(){
    	$('.codediv').stop().fadeToggle();
    })
    
	
})