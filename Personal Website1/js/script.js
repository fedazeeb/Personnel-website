alert("welcom") ;
let icon = document.getElementById("icon-mobile");/* متغيرات */
let ul = document.getElementById("ul-mobile"); 

icon.onclick = function () {
    ul.classList.toggle("mobile-nav1");
}