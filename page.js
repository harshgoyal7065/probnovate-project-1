
document.addEventListener("DOMContentLoaded", function(){
  var categorySearch = localStorage.getItem("category");
  var brandSearch = localStorage.getItem("brands");

  const rootRef = firebase.database().ref(categorySearch);
   rootRef.on("value", function(data){
       var mem= data.val();
       var keys = Object.keys(mem);
      for(var i=0;i<keys.length;i++)
      {
          var k= keys[i];
          var name = mem[k].brand;
          if(name==brandSearch)
          {
                var bran= document.getElementById("brands");
                bran.innerHTML= "<h1>"+name+"</h1>\
                  <p>"+mem[k].description+"</p>"
          }
      }
 });


});
