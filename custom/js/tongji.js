$(function(){
  var newDate = new Date();
  $(".statistics").html($(".la-widget"));
  // $(".footer-inner").append(`<div class="youpaiyun"><a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank"><img src="https://upyun.xiaodongxier.com/blog/bg/upyun.png"><img src="https://api.day.app/6h8diV8qsStNHd5q4DbiX5/${$("title").html()}/我的博客被访问了${newDate.toLocaleTimeString()}?icon=https://xiaodongxier.com/favicon.ico" alt=""></a></div>`)
  $(".footer-inner").append(`<div class="youpaiyun"><a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank"><img src="https://upyun.xiaodongxier.com/blog/bg/upyun.png"></a></div>`)
})