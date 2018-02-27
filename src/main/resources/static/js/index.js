
// 'use strict';
$(function(){
    $(window).scroll(function(){
        var oHead=$('#navigation');
        var st=$(this).scrollTop();
        if(st>0){
            oHead.addClass('headhover');
        }
        else{
            oHead.removeClass('headhover');
        }
    })
})

$(function(){
    $('#p1').on('click',function(){
      $("#bImg1").fadeIn().siblings().hide();
})
$('#p2').on('click',function(){
      $("#bImg2").fadeIn().siblings().hide();
})
$('#p3').on('click',function(){
    $("#bImg3").fadeIn().siblings().hide();
})

 $(function(){
        $("#a1").hover(function(){
          $("#weichat").css("display","block");
        },function(){
          $("#weichat").css("display","none");
        })
      })

      $(function(){
        $("#a2").hover(function(){
          $("#weibo").css("display","block");
        },function(){
          $("#weibo").css("display","none");
        })
      })
})

