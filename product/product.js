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