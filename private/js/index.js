$(document).ready(function(){
	
    $("#filterAll a").click(function(){
    	$(this).addClass("bj").siblings("a").removeClass("bj");
    });
    
    
   
   
   
   
   var num=0;
	var banner_num=1;
	setInterval(function(){
		var banner=$("#banner")
		banner.fadeOut(1000);
		if(banner_num>2){
			banner_num=1;
		}else{
			
		banner_num++;
		}
		banner.attr("src",function(){
			return "http://cdn2.dameicdn.com/private-tour/img/bigbg"+banner_num+".jpg"
		})
		banner.fadeIn(1000)
	},20000)
	$(".right_jiantou").click(function(){
		if(num>= (-2100)){
			num-=1100;
		}else{
			num=0
		}
		$(".info_content").animate({marginLeft:num},500)
	})
	$(".left_jiantou").click(function(){
		if(num<= (-1100)){
			num+=1100;
		}else{
			num=-2200
		}
		$(".info_content").animate({marginLeft:num},500);
	})
	if($(".filter>a").index()>8){
		$("#more").show();
	}
	$("#more").click(function(){
		$(".filter").removeAttr("style");
		$(this).hide();
		$("#less").show();
	})
	$("#less").click(function(){
		$(".filter").height(30);
		$(this).hide();
		$("#more").show();
	})
	$(".info .bg,.bg .content").mouseenter(function(){
		$(".left_jiantou").css({"background-color":"rgba(197,197,197,0.5)","color":"rgba(256,256,256,1)"});
		$(".right_jiantou").css({"background-color":"rgba(197,197,197,0.5)","color":"rgba(256,256,256,1)"});
	})
	$(".info .bg>img:first-child").mouseout(function(){
		$(".left_jiantou").css({"background-color":"rgba(197,197,197,0.2)","color":"rgba(256,256,256,0.2)"});
		$(".right_jiantou").css({"background-color":"rgba(197,197,197,0.2)","color":"rgba(256,256,256,0.2)"});
	})
	$(".search_item").hover(function(){
		var $this=$(this);
		$this.css("overflow","initial")
		$this.stop().animate({
			width:"162px"
		},500).css("borderColor","#ccc");
		$this.children("input").width("125px");
		
	},function(){
		var $this=$(this),
			input=$this.find("input"),
			n=input.val();
		input.is(":focus")||""!=n||$this.stop().animate({
			width:"25px"
		},500).css("borderColor","transparent");
		input.val()==''&&input.width("0");
		
	});
$(".search_item").find("input").on("focus",function(){
	$("#searchContent").show();
});
$(".search_item").find("input").on("keyup",function(){
	$("#searchContent").hide();
});
	$(".search_item").find("input").on("blur",function(){
		var e=$(this),t=$.trim(e.val()),
		n=e.parent();
		""==t&&n.stop().animate({
			width:"25px"},500
			,function(){
				n.css("borderColor","transparent");
		})
		$("#searchContent").hide();
	})
	$("#filterAll a").hover(function(){
		var $this=$(this),
			num=$this.index()+1;
		$this.css("color","#FFFFFF");
		$this.children().attr("style","background:url(http://cdn2.dameicdn.com/private-tour/img/private_tour_collum_list"+num+"_2.png) no-repeat")
	},function(){
		var $this=$(this),
			num=$this.index()+1;
		$this.css("color","#000000");
		$this.children().attr("style","background:url(http://cdn2.dameicdn.com/private-tour/img/private_tour_collum_list"+num+"_1.png) no-repeat")
	})
	$("#dmw-tencent").click(function(){
		 BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 4008853344, selector: 'dmw-tencent'});
	})
	$("#dmw-contract").click(function(){
		$("#feedbackPanel").show()
		$("#feedbackPanel1").show()
	})
   
   
 $("#filterAll a").mouseover(function(){
	$(this).css("color","#ccc");
 })

//var scrollTop=$(window).scrollTop();
// $top=$(".flipper").top;
//if(scrollTop>600&&scrollTop<3190)
//{
//	$top.css("positon","fixed");
//}
//else{
//	$top==-1000+'px';
//}



})