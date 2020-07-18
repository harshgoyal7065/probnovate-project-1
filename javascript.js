document.getElementById("hidden-brand").style.display="none";
$("button").on("click",function(){
  if($("#btn").text()==="Show More Brands"){
  $("#hidden-brand").slideDown();
  $("#btn").text("Show Less Brands");
}else
if($("#btn").text()==="Show Less Brands"){
  $("#hidden-brand").slideUp();
  $("#btn").text("Show More Brands");
}

});
