$(".c_navbar .hamb").click(function (e) {
  e.preventDefault();
  if($(".c_navbar").hasClass("c_navbar_active")){
  	$(".c_navbar").removeClass("c_navbar_active");
  }else{
  	$(".c_navbar").addClass("c_navbar_active");
  }
});