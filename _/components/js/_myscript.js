$(function() {

	//activate the tabs

	var hash = window.location.hash;
	hash && $('ul.nav a[href="' + hash + '"]').tab('show');

	//Controlling Accordion
	$('#monday.accordion-body').addClass('in');

	$('#artists #tuesday.accordion-body').addClass('in');
	$('#artists #wednesday.accordion-body').addClass('in');
	$('#artists #thursday.accordion-body').addClass('in');
	$('#artists #friday.accordion-body').addClass('in');


	//adding Images class
	$('.abouttheartists img').addClass('img-circle');
	$('aside.photosfromlastyear img').addClass('img-thumbnail');
	$('.artistinfo img').addClass('img-circle');

	//Highlight Current Navigation
	$("#home a:contains('Home')").parent().addClass('active');
	$("#about a:contains('Venue/Travel')").parent().addClass('active');
	$("#artists a:contains('Artists')").parent().addClass('active');
	$("#register a:contains('Register')").parent().addClass('active');
	$("#schedule a:contains('Schedule')").parent().addClass('active');
	$("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');

	//make menu dropdown automatic
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//Hover

	//Show Tooltip
	$("[data-toggle='tooltip']").tooltip({animation: true});

	//Show Modals

	$('.modalphotos img').on('click', function() {
		$('#modal').modal({
			show: true,
		})

		var mysrc = this.src.substr(0, this.src.length-7) + '.jpg';
		$('#modalimage').attr('src', mysrc);
		$('#modalimage').on('click', function() {
			$('#modal').modal('hide');
		});
	});
}); //jQuery ends Here