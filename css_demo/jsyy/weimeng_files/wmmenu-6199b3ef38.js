function menuInit(t){new wmMenu({data:t}),$('[data-menu="solutions"] a').on("click",function(){var t=$(this);if(t.attr("href").indexOf("javascript")<0){var e=$(this).text();e=e.replace(/解决方案/g,"");var n={pagename:wmDot.getPageName(),elementid:"solutions",eventtype:"tap",title:e};wmDot.sendDot(n)}}),$(".js-nav > li").hover(function(){var t=$(".js-nav").parent().offset().left,e=15,n=$(this),a=n.offset().left-t+e;$(".js-menu-act").css({left:a,width:n.width()-2*e,opacity:1})},function(){$(".js-menu-act").css({opacity:0})})}var wmMenu=function(t){this.opt={data:{},warp:"#menuContent",trigger:"[data-menu]",event:"hover",current:0,boxHeight:[],itemStyle:{3:"height: 744px",5:"height: 600px"},initCallback:function(){},menuCallBack:function(){}},$.extend(this.opt,t);var e=this.opt,n=this;n.init=function(){$(e.trigger).each(function(t,a){var i=$(a),o=i.data("menu");n.appsDataInit(),i.append(n.htmlInit(e.data[o])),i.hover(function(){e.current=t,n.menuShow()},function(){$(e.activeCls).show().css({opacity:0}),n.menuHide()})}),e.initCallback()},n.appsDataInit=function(){for(var t in e.data.apps)e.data.apps[t].style="m-mu-pro"+e.data.apps[t].id},n.menuHide=function(){var t=$(e.warp);t.children(":visible").hide()},n.menuShow=function(){var t=$(e.warp);0==t.parent().height()&&t.parent().css("height","auto"),n.menuHide(),t.children().eq(e.current).show()},n.htmlInit=function(t){return template("head_menu",{data:t})},this.init()},prefix=$("#wmmenu").data("prefix");$.post(prefix+"api/saas/pageMenu",{type:1},function(t){0==t.errcode&&menuInit(t.data)});