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
