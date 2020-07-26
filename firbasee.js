var categories= document.getElementById("category");
var brands= document.getElementById("brands");
var description= document.getElementById("description");
var origin =document.getElementById("origin");
var link= document.getElementById("link");

var chk= document.getElementById("btn")



  chk.addEventListener("click", (e) =>{
    e.preventDefault();
    const datab= firebase.database();
    const rootRef = datab.ref(categories.value);
    const autoId= rootRef.push().key
     rootRef.child(autoId).set({
       brand: brands.value,
       origin: origin.value,
       description: description.value,
       link: link.value,
  })
  });
