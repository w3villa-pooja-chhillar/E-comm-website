 function showmore(){
  let a= document.getElementById('low-opacity-content');
  a.style.opacity="unset";
  let b = document.getElementById('hidden-description');
  b.style.display="block";
  let c =  document.getElementById('show-more');
  c.style.display="none";
  let d = document.getElementById('show-less');
  d.style.display="block";
 }
 function showless(){
    let a= document.getElementById('low-opacity-content');
    a.style.opacity="0.6";
    let b = document.getElementById('hidden-description');
    b.style.display="none";
    let c =  document.getElementById('show-more');
    c.style.display="block";
    let d = document.getElementById('show-less');
    d.style.display="none";
 }
// show content of custom specific review
  function description(){
   document.getElementById('product-description').style.display="block"
   document.getElementById('specification-description').style.display="none"
   document.getElementById('reviews-description').style.display="none"
   document.getElementById('custom-description').style.display="none"
   document.getElementById('description-line').style.width="130px"
   document.getElementById('description-line').style.left="10px"
   document.getElementById('custom').style.color="grey"
   document.getElementById('review').style.color="grey"
   document.getElementById('specification').style.color="grey"
   document.getElementById('description').style.color="black"
  }
function specification(){
   document.getElementById('product-description').style.display="none"
   document.getElementById('specification-description').style.display="block"
   document.getElementById('reviews-description').style.display="none"
   document.getElementById('custom-description').style.display="none"
   document.getElementById('description-line').style.left="160px"
   document.getElementById('description-line').style.width="130px"
   document.getElementById('specification').style.color="black"
   document.getElementById('custom').style.color="grey"
   document.getElementById('review').style.color="grey"
   document.getElementById('description').style.color="grey"
}
function reviews(){
   document.getElementById('reviews-description').style.display="block";
   document.getElementById('product-description').style.display="none"
   document.getElementById('specification-description').style.display="none"
   document.getElementById('custom-description').style.display="none"
   document.getElementById('description-line').style.left="343px"
   document.getElementById('description-line').style.width="70px"
   document.getElementById('review').style.color="black"
   document.getElementById('custom').style.color="grey"
   document.getElementById('specification').style.color="grey"
   document.getElementById('description').style.color="grey"
}
function custom_tab(){
   document.getElementById('reviews-description').style.display="none";
   document.getElementById('product-description').style.display="none"
   document.getElementById('specification-description').style.display="none"
   document.getElementById('custom-description').style.display="block"
   document.getElementById('description-line').style.right="60px"
   document.getElementById('description-line').style.left="unset"
   document.getElementById('description-line').style.width="130px"
   document.getElementById('custom').style.color="black"
   document.getElementById('review').style.color="grey"
   document.getElementById('specification').style.color="grey"
   document.getElementById('description').style.color="grey"
}

// related product aand people also bought product
function relatedproduct(){
   document.getElementById('related-images').style.display="flex"
   document.getElementById('people-bought-images').style.display="none"
   document.getElementById('people-bought').style.color="grey"
   document.getElementById('people-bought-line').style.marginLeft="10px"
   document.getElementById('related-product-item').style.color="black"
}
function peoplebought(){
   document.getElementById('related-images').style.display="none"
   document.getElementById('people-bought-images').style.display="flex"
   document.getElementById('people-bought').style.color="black"
   document.getElementById('people-bought-line').style.marginLeft="230px"
   document.getElementById('related-product-item').style.color="grey"
}

// recently view and mostly view
function mostview(){
document.getElementById('most-view-cards').style.display="none"
document.getElementById('most-view-item').style.display="flex"
document.getElementById('most-view-grey').style.color="white"
document.getElementById('most-view-white').style.color="grey"
document.getElementById('most-view-line').style.marginLeft="190px"
document.getElementById('most-view-line').style.width="118px"
}
function recentview(){
   document.getElementById('most-view-cards').style.display="flex"
   document.getElementById('most-view-item').style.display="none"
   document.getElementById('most-view-grey').style.color="grey"
   document.getElementById('most-view-white').style.color="white"
   document.getElementById('most-view-line').style.marginLeft="6px"
   document.getElementById('most-view-line').style.width="140px" 
}
// show corresponding product on product page after clicking on search page
 async function showproduct(){
let a = localStorage.getItem('search-product')
const res1 = await fetch('../search-item.json');
const data1 = await res1.json();
let product_img = document.getElementById('product-img');
let small_img = document.getElementById('main_img');
let price = document.getElementById('red-price');
data1.items.forEach(element => {
   if(element.id==a){
   product_img.innerHTML =`
   <img src="${element.img}">
   <div class="img-sticker">-10%</div>
   <div class="img-hot-sticker">HOT</div>`
   small_img.innerHTML =`<img src= ${element.img}>`
   price.innerHTML =`${element.price}`
   }
});
}
showproduct();