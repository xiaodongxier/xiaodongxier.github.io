console.clear()
// var list = document.querySelectorAll(".index-card");
// for(var i=0;i<list.length;i++){
//   var random = '?'+Math.random();
//   var item_img = list[i].children[0].children[0].children[0];
//   var item_img_src = item_img.getAttribute("src");
//   if(item_img_src == 'https://api.wangyongjie.cn/github_hexo_random_img/') {
//     item_img.setAttribute("src",item_img_src+random)
//     console.log(item_img_src)
//   }
// }

var list = document.querySelectorAll(".index-card");
for(var i=0;i<list.length;i++){
  var random = '?'+Math.random();
  var item_img = list[i].children[0].children[0].children[0];
  var item_img_src = item_img.getAttribute("src");
  if(item_img_src == 'https://api.wangyongjie.cn/github_hexo_random_img/') {
    item_img.setAttribute("src",'https://api.ddkjt.com/api/img_2.php?'+random)
    // console.log(item_img_src)
  }
}