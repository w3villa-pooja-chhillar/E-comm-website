// function gridview(){
//    alert("grid-view");
// }

function addpart_price(){
   document.getElementsByClassName('add-part')[0].style.display="block";
}
function addpart_availbility(){
   document.getElementsByClassName('add-part-avail')[0].style.display="block";
}
function addpart_subcategory(){
   document.getElementsByClassName('add-part-subcat')[0].style.display="block";
}
function addpart_color(){
   document.getElementsByClassName('add-part-color')[0].style.display="block";
}
function addpart_brand(){
   document.getElementsByClassName('add-part-brand')[0].style.display="block";
}
function listview(){
   document.getElementsByClassName('list-items')[0].style.display="block";
   document.getElementsByClassName('cart-items')[0].style.display="none";
   document.getElementById('end-list').style.display="none";
}
function gridview(){
   document.getElementsByClassName('list-items')[0].style.display="none";
   document.getElementsByClassName('cart-items')[0].style.display="flex";
   document.getElementById('end-list').style.display="flex";
}
