// which nav has active
let navs = document.querySelectorAll('.nav-item');
let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
}


let spanCategorys = document.querySelectorAll('.span-category');
for(let spanCategory of spanCategorys) {
  let categoryLinks = spanCategory.getElementsByTagName('a');
  for(let categoryLink of categoryLinks) {
    let categoryLink = categoryLink.replace(/<\/?[^>]*>/g, '');
    categoryLink = categoryLink.replace(/[|]*\n/, '');
    categoryLink = categoryLink.replace(/&nbsp;/ig, '');
  }
}