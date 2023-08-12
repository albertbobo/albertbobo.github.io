// fancybox js
let fancyTimer = setInterval(function(){
  if(!window.$){
    return;
  }
  $(document).ready(function() {
    $(".markdown-body img").each(function () {
      if($(this).parent().get(0).tagName.toLowerCase() === "a") {
        return;
      }
      // $(this).attr("data-fancybox", "gallery"); // if you add 'data-fancybox', img will display after showed
      var element = document.createElement("a");
      $(element).attr("data-fancybox", "gallery");
      $(element).attr("style", "text-decoration: none; outline: none; border: 0px none transparent;");
      // 判断是否启用了lazyload图片懒加载
      if ($(this).attr("data-original")) {
        $(element).attr("href", $(this).attr("data-original"));
      } else {
        $(element).attr("href", $(this).attr("src"));
      }
      $(this).wrap(element);
    });

    clearInterval(fancyTimer);
  });
}, 10);


// 去除html标签以及空格
let spanCategorys = document.querySelectorAll('.span-category');
for(let spanCategory of spanCategorys) {
  let categoryLinks = spanCategory.getElementsByTagName('a').innerText.toString();
  for(let categoryLink of categoryLinks) {
    // let categoryLink = categoryLink.replace(/<\/?[^>]*>/g, '');
    // categoryLink = categoryLink.replace(/[|]*\n/, '');
    categoryLink = categoryLink.replace(/&nbsp;/ig, '');
    window.alert(categoryLink);
  }
}
