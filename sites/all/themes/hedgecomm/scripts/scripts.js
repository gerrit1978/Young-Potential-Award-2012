jQuery(document).ready(function($) {
  $('#wildcard').hover(function() {
    $('#wildcard').stop().animate({
      left: '+580'
    }, "slow");
  },function() {
    $('#wildcard').stop().animate({
  	  left: '260'
	  }, "slow");

  });
});