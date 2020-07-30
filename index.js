// This is to toggle the category search bar
/*  $(".search-icon").click(function(){
  $(".search").toggleClass("hidden");
  $(".search-bar").toggleClass("hidden");
});*/
// This is to toggle the category search bar

var categor={
  "categories": ["TV", "Mobile", "E-commerce","Headphones","Laptop","Washing machine","2-wheeler","4-wheeler",
                  "camera","Fan/AC/Cooler","Other Utility services"],
  "TV": ["Samsung","LG","Toshiba","Videocon"],
  "Mobile": ["Vivo","Oppo","Micromax","Samsung","Apple"],
  "E-commerce": ["Amazon","Flipkart","Big-Basket","Myntra"],
  "Headphones": ["Boat","Bose","Sony","JBL"],
  "Laptop": ["Lenovo","Dell","Asus","HP","Apple"],
  "Washing Machine": ["Videocon","LG","Whirlpool"],
  "2-wheeler": ["Honda","Hero","Activa","Harley-Davidson"],
  "4-wheeler": ["Toyota","Maruti","Hyundai"],
  "Camera": ["Nikon","Sony","Erricson","Canon"],
  "Fan/AC/Cooler": ["LG","Daikin","Usha","Bajaj"],
  "Other Utility Service": ["Urban Clap"]
};

abc= document.getElementById("cat");
def= document.getElementById("brand")
var sel;
for(var i=0;i<categor["categories"].length;i++)
{
  abc.innerHTML += "<option>"+categor["categories"][i]+"</option>";
}
var ghi= document.querySelectorAll(".btn");
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
