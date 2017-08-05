// JavaScript Document
$(document).ready(function() {
	 Nav();
	 Login();
	 HomePage();
	 PolicyReglations();
	 
	 Search();
	 
});

//二级菜单
function Nav(){

	//关于协会
    $('.nav_li1').mouseover(function(){
	   $('.second1').show();
	});
    $('.nav_li1').mouseout(function(){
	   $('.second1').hide();
	});
	//服务大厅
	$('.nav_li5').mouseover(function(){
	   $('.second2').show();
	});
    $('.nav_li5').mouseout(function(){
	   $('.second2').hide();
	});
//服务大厅三级菜单
	 //信息查询
	$('.second2_li1').mouseover(function(){
	   $('.third1').show();
	});
    $('.second2_li1').mouseout(function(){
	   $('.third1').hide();
	});
		
	//协会服务
	$('.second2_li2').mouseover(function(){
	   $('.third2').show();
	});
    $('.second2_li2').mouseout(function(){
	   $('.third2').hide();
	});
		  
    //会员中心
	$('.nav_li6').mouseover(function(){
	   $('.second3').show();
	});
    $('.nav_li6').mouseout(function(){
	   $('.second3').hide();
	});
}

// 首页
function HomePage(){
 //轮播器
	//初始化
	$('#pic img').hide();
	$('#pic img').eq(0).show();
	$('#dot li').eq(0).css('color','#fff');
	$('#banner strong').html($('#pic img').eq(0).attr('alt'));
	//手动点击黑点显示
	$('#dot li').hover(function(){
		clearInterval(banner_timer);
		$('#pic img').hide();
		$('#pic img').eq($(this).index()).show();
		$('#dot li').css('color','#333');
		$('#dot li').eq($(this).index()).css('color','#fff');
		$('#banner strong').html($('#banner img').eq($(this).index()).attr('alt'));
	},function(){
	    banner_index=$(this).index()+1;
		setInterval(banner_fn,2000);
	});
	//自动播放
	var banner_index=1;//索引计数器（因为初始化时第一张图片已经显示，故从第二张开始播放12 012 012）
	var len=$('#pic img').length;//轮播的总图片数
	
	var banner_timer=setInterval(banner_fn,2000);
	function banner(){//图片基本显示
		$('#pic img').hide();
		$('#pic img').eq(banner_index).show();
		$('#dot li').css('color','#333');
		$('#dot li').eq(banner_index).css('color','#fff');
		$('#banner strong').html($('#banner img').eq(banner_index).attr('alt'));
	}
	function banner_fn(){//判断索引
		if(banner_index>=len)
		banner_index=0;
		banner();
	    banner_index++;
	}
	
	
	
    //友情链接
	$('#link_list1').mouseover(function(){
	   $('#link_second1').show();
	});
    $('#link_list1').mouseout(function(){
	   $('#link_second1').hide();
	});
	
	$('#link_list2').mouseover(function(){
	   $('#link_second2').show();
	});
    $('#link_list2').mouseout(function(){
	   $('#link_second2').hide();
	});
	
	$('#link_list3').mouseover(function(){
	   $('#link_second3').show();
	});
    $('#link_list3').mouseout(function(){
	   $('#link_second3').hide();
	});
	
	$('#link_list4').mouseover(function(){
	   $('#link_second4').show();
	});
    $('#link_list4').mouseout(function(){
	   $('#link_second4').hide();
	});
	
	
	//首页  政策法规和行业动态
	$('#news_first1').mouseover(function(){
	   $('#news_second1').show();
	   $('#news_first1').css('background','#FFF');
	});
    $('#news_first1').mouseout(function(){
	    
	});

	$('#news_first2').mouseover(function(){
	   $('#news_second2').show();
	   $('#news_first1').css('background','#CCC');
	});
    $('#news_first2').mouseout(function(){
	   $('#news_second2').hide();
	    $('#news_first1').css('background','#FFF');
	});
	   
}

 //政策法规
function PolicyReglations(){
	$('#left_list1').mouseover(function(){
	   $('#right1').show();
	});
    $('#left_list1').mouseout(function(){
	   $('#right1').hide();
	});
	
	$('#left_list2').mouseover(function(){
	   $('#right2').show();
	});
    $('#left_list2').mouseout(function(){
	   $('#right2').hide();
	});
}

//资料下载
function Download(){
	$('#down_first1').mouseover(function(){
	   $('#down_left').show();
	});
    $('#down_first1').mouseout(function(){
	  
	});
	$('#down_first2').mouseover(function(){
	   $('#down_right').show();
	});
    $('#down_first2').mouseout(function(){
	   $('#down_right').hide();
	});
} 

//登录框
function Login(){
	$('.login').click(function () {
		$('#login').show();
	});
	$('.close').click(function(){$('#login').hide()});
}
//搜索功能
function Search(){
	 var data = '{"result":[{"Infvalue":"政策"},{"Infvalue":"法规"},{"Infvalue":"表格下载"},{"Infvalue":"会员"},{"Infvalue":"协会工作"},{"Infvalue":"协会简介"}]}';
	 var inform=JSON.parse(data);
	$('#searchBtn').click(function(){
		
        var string=($('.search_text').val());
		if(string==inform.result[0].Infvalue){
		     $('#searchBtn').attr('href','PolicyReglations.html');
		}else if(string==inform.result[1].Infvalue){
		     $('#searchBtn').attr('href','PolicyReglations.html');
		}else if(string==inform.result[2].Infvalue){
		     $('#searchBtn').attr('href','Download.html');
		}else if(string==inform.result[3].Infvalue){
		     $('#searchBtn').attr('href','MemberShow.html');
		}else if(string==inform.result[4].Infvalue){
		     $('#searchBtn').attr('href','AboutAssociation.html');
		}else if(string==inform.result[5].Infvalue){
		     $('#searchBtn').attr('href','Assoociation_intro.html');
		}else{
		   alert('对不起，数据库没有匹配的数据！');
		}
	});

}


