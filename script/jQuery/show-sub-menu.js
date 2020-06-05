/************Show sub menu of header******************/
    $(document).ready(function(){
     /**Display none**/
      $(".show-sub").hover(function(){
        $(".sub-menu").show();
      }, function(){
      	$(".sub-menu").hide();
      });
    });