
$(function() {


	$("#toContacts").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 350);
	});

	$("#toUs").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 350);
	});

	$("#toCatalog").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 350);
	});

	$("#toGallery").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 350);
	});

	$('.humb').on('click', function () {
		$('#nav2').slideToggle(300)
		if ( $(this).hasClass("active") ) {
			$(this).html('<i class="far fa-bars"></i>');
			$(this).removeClass('active')
		} else {
			$(this).addClass('active')
			$(this).html('<i class="far fa-times"></i>');
		}
	})

});
