
document.addEventListener("DOMContentLoaded", function(){
  var categorySearch = localStorage.getItem("category");
  var brandSearch = localStorage.getItem("brands");

  const rootRef = firebase.database().ref(categorySearch);
   rootRef.on("value", function(data){
       var mem= data.val();
       var keys = Object.keys(mem);
       var count =0;
      for(var i=0;i<keys.length;i++)
      {
          var k= keys[i];
          var name = mem[k].brand;
          if(name===brandSearch)
          {
                var bran= document.getElementById("brands");
                bran.innerHTML= "<h1>"+name+"</h1>\
                  <p>"+mem[k].description+"</p>"
          }
          else
          { console.log(name);
             var alt= document.getElementById("alter");
            alt.innerHTML += "<div class="+ "brand1"+ ">\
                <div class="+"subbrand-loc"+">\
                <h3><strong><a href="+mem[k].link+">"+name+"</a></strong></h3>\
                <p class="+"answer"+">"+mem[k].description+"</p>\
              </div>\
            </div>"
          }
      }
 });


});
