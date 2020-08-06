// This is to toggle the category search bar
/*  $(".search-icon").click(function(){
  $(".search").toggleClass("hidden");
  $(".search-bar").toggleClass("hidden");
});*/
// This is to toggle the category search bar


// Object of brand and categroies
var categor={
  "categories": ["TV", "Mobile","Headphones","Laptop","Washing Machine","2-wheeler","4-wheeler",
                  "Camera","Fan/AC/Cooler","Other Utility services"],
  "TV": ["Samsung","LG","Toshiba","Videocon","Sony","Panasonic","Xiaomi Mi", "Onida"],
  "Mobile": ["Vivo","Oppo","Micromax","Samsung","Apple","Xiaomi","Nokia","Lava"],
  "Headphones": ["Boat","Bose","Sony","JBL","Sennheiser","Skullcandy"],
  "Laptop": ["Lenovo","Dell","Asus","HP","Apple","Acer","Samsung","Toshiba"],
  "Washing Machine": ["Videocon","LG","Whirlpool","Godrej","Onida","Samsung"],
  "2-wheeler": ["Honda","Hero","Activa","Harley-Davidson"],
  "4-wheeler": ["Toyota","Maruti","Hyundai"],
  "Camera": ["Nikon","Sony","Erricson"],
  "Fan/AC/Cooler": ["LG","Daikin","Usha","Bajaj"],
  "Other Utility Service": ["Urban Clap"]
};

abc= document.getElementById("cat");
def= document.getElementById("brand")
var sel;
var selBrand;
for(var i=0;i<categor["categories"].length;i++)
{
  abc.innerHTML += "<option>"+categor["categories"][i]+"</option>";
}
var ghi= document.querySelectorAll(".icon-btn");
var loop= ghi.length;
for(var i=0;i<loop;i++)
{
  ghi[i].addEventListener("click",handleClick);
}

var clickId;
function handleClick(){
  clickId= this.id;
  abc.innerHTML="<option>"+clickId+"</option>";
  for(var i=0;i<categor["categories"].length;i++)
  {
    abc.innerHTML += "<option>"+categor["categories"][i]+"</option>";
  }

  categ(0);
}
var a;
function categ(a){
  if(a===1)
  {
      sel= abc.options[abc.selectedIndex].text;
  }
  else
  {
    sel=clickId;
  }
  def.innerHTML="<option>Select Brand</option>";
  for(var i=0;i<categor[sel].length;i++)
  {
    def.innerHTML += "<option>"+categor[sel][i]+"</option>";
  }

}

function brand()
{
  selBrand= def.options[def.selectedIndex].text;
}

var clik= document.getElementById("sbmt");
clik.addEventListener("click", function(){
  localStorage.setItem("category", sel);
  localStorage.setItem("brands", selBrand);
  window.document.location = "./page.html";
});
