// This is to toggle the category search bar
/*  $(".search-icon").click(function(){
  $(".search").toggleClass("hidden");
  $(".search-bar").toggleClass("hidden");
});*/
// This is to toggle the category search bar


//************************************************* Object of brand and categroies*****************************************
var categor={
  "categories": ["TV", "Mobile","Headphones","Laptop","Washing Machine","2-wheeler","4-wheeler",
                  "Camera","Fan/AC/Cooler","Other Utility services"],
};


// ***********************************Element selector for category and brand search bar********************************
abc= document.getElementById("cat");
def= document.getElementById("brand")

var sel;    //Selected category
var selBrand;  //Selected Brand
var clickId;  //ID of clicked buttons


// *****************************************Element selector for icon buttons*******************************************
var ghi= document.querySelectorAll(".icon-btn");
var loop= ghi.length;


//**********************************************Creating menu of category***********************************************
for(var i=0;i<categor["categories"].length;i++)
{
  abc.innerHTML += "<option>"+categor["categories"][i]+"</option>";
}


//*******************************************Adding click on icon buttons************************************************
for(var i=0;i<loop;i++)
{
  ghi[i].addEventListener("click",handleClick);
}


//*******************************Function to add category list after a button is clicked**********************************
function handleClick(){
  clickId= this.id;
  abc.innerHTML="<option>"+clickId+"</option>";
  for(var i=0;i<categor["categories"].length;i++)
  {
    abc.innerHTML += "<option>"+categor["categories"][i]+"</option>";
  }
  categ(0);
}


//********************************Function to add option list as per selected category************************************
var a;
function categ(a){
  if(a===1)
  {
      sel= abc.options[abc.selectedIndex].text;   // Get the value of selected category
  }
  else
  {
    sel=clickId;
  }
  def.innerHTML="<option>Select Brand</option>";
  const rootRef = firebase.database().ref(sel);
   rootRef.on("value", function(data){
       var mem= data.val();
       var keys = Object.keys(mem);
       var count =0;
      for(var i=0;i<keys.length;i++)
      {
        var k=keys[i];
        def.innerHTML += "<option>"+mem[k].brand+"</option>";
      }
    });  // Altering option list
}


//*****************************************Function to get value of selected brand****************************************
function brand()
{
  selBrand= def.options[def.selectedIndex].text;
}


 //*************************************************To tranfer data from one page to other*****************************
var clik= document.getElementById("sbmt");       //Checking Click
clik.addEventListener("click", function(){
  localStorage.setItem("category", sel);         //Transferring data
  localStorage.setItem("brands", selBrand);
  window.document.location = "./page.html";       //Connecting Second page
});

//Change
document.getElementById("hide").style.display="none";
$("#feed").on("click",function(){
  document.getElementById("feed").style.display="none";
  document.getElementById("hide").style.display="block";
  
});
$("#redir").on("click",function(){
  document.getElementById("feed").style.display="none";
  document.getElementById("hide").style.display="block";
});

//change
document.getElementById("hide2").style.display="none";
$("#new").on("click",function(){
  document.getElementById("new").style.display="none";
  document.getElementById("hide2").style.display="block";

});
$("#apply").on("click",function(){
  document.getElementById("new").style.display="none";
  document.getElementById("hide2").style.display="block";
});
