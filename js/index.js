$(function(){
	var audio=$('audio').get(0);
	// audio.play();
	var count=0;
	$('.xia').on('click',function(){
		if(! ($(this).hasClass("up"))){
			count++
		$('.sbig>div').eq(count).addClass('an');
		     if(count==1){
				$('.left1').addClass('ans1');
				$('.left2').addClass('ans1');
				$('.right1').addClass('ans');
				$('.right2').addClass('ans');
				$('.bottom1').addClass('ans1');
				$('.bottom2').addClass('ans');
			}
			if(count==2 || count==0){
				$('.ski').addClass('dong');
				 $('.left1').removeClass('ans1');
				$('.left2').removeClass('ans1');
				$('.right1').removeClass('ans');
				$('.right2').removeClass('ans');
				$('.bottom1').removeClass('ans1');
				$('.bottom2').removeClass('ans');
			}
			if(count==5){
				$('.l1').addClass('trans');
				$('.xia').addClass('up');
			}
		}else if($(this).hasClass("up")){
			$('.sbig>div').eq(count).removeClass('an');
			count--
			if(count==0){
				$('.l1').removeClass('trans');
				$('.xia').removeClass('up');
			}
			if(count==2 || count==0){
				$('.ski').removeClass('dong');
				$('.left1').removeClass('ans1');
				$('.left2').removeClass('ans1');
				$('.right1').removeClass('ans');
				$('.right2').removeClass('ans');
				$('.bottom1').removeClass('ans1');
				$('.bottom2').removeClass('ans');
			}
			if(count==1){
				$('.left1').addClass('ans1');
				$('.left2').addClass('ans1');
				$('.right1').addClass('ans');
				$('.right2').addClass('ans');
				$('.bottom1').addClass('ans1');
				$('.bottom2').addClass('ans');
			}
		}
		
	
		
	});
	$('.jieshao').on('click',function(){
		$('.zhezhao2').addClass('ansm');
		$('.photo').css({"display":"none"});
		$('.a').css({"display":"none"});
		$('.xia').css({"display":"none"});
		$('.jieshao').css({"display":"none"});
	});
	$('.guanbi').on('click',function(){
		$('.zhezhao2').removeClass('ansm');
		$('.photo').css({"display":"block"});
		$('.a').css({"display":"block"});
		$('.xia').css({"display":"block"});
		$('.jieshao').css({"display":"block"});
	})
	
})