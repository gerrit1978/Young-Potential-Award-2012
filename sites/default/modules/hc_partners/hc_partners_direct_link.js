jQuery(document).ready(function($) {
 
  var partner_nid = Drupal.settings.hc_partner.partner_nid;
  var partner_type = Drupal.settings.hc_partner.partner_type;
  
  if (partner_type == 'sponsor') {
      var url = "/get-partner/" + partner_nid + "/sponsors";
     
	    $.get(url, function(data) {
  	    $('div.item-list-solo').fadeOut(0.01, function() {
    	    $('div.item-list-solo').html(data).fadeIn(0.01);
    	    
      	});
    	});
  }

  if (partner_type == 'bedrijf') {
      var url = "/get-partner/" + partner_nid + "/companies";
     
	    $.get(url, function(data) {
  	    $('div.item-list-solo').fadeOut(0.01, function() {
    	    $('div.item-list-solo').html(data).fadeIn(0.01);
      	});
    	});
  }

	var offset = $('ul.list-dummy').offset();
	$('html, body').animate({scrollTop:offset.top}, 0);


//	console.log(Drupal.settings.partner_nid.partner_nid);
});