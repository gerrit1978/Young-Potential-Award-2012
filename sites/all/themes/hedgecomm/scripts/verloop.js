jQuery(document).ready(function($) {

	if ($('#block-block-5').length > 0) {
	  window.setTimeout(switchSteps, 3500);
	} 
});





function switchSteps() {
  setTimeout(switchSteps,3500);

	var id = jQuery('#block-block-5 ul li.active').attr('id');
	var delta = id.replace("step", "");

	if (delta < 4) {
	  var deltaInt = parseInt(delta);
	  var newDelta = deltaInt + 1;
	  var newId = "#step" + newDelta;
		jQuery('#block-block-5 ul li').removeClass('active');
		jQuery(newId).addClass('active');
	} else {
		jQuery('#block-block-5 ul li').removeClass('active');
		jQuery('#step1').addClass('active');
	}

}