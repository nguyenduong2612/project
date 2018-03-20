$("#description").click(function() {
	$(".reviews").removeClass("active deactive");
	$(".description").removeClass("active deactive");
	$(".reviews").addClass("deactive");
	$(".description").addClass("active");
	// $(".description").toggleClass("active");
});
$("#reviews").click(function() {
	$(".reviews").removeClass("active deactive");
	$(".description").removeClass("active deactive");
	$(".description").addClass("deactive");
	$(".reviews").addClass("active");
});
