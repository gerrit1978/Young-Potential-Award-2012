jQuery(document).ready(function($) {

	// companies
  $('.view-partners ul.list-all.companies li').click(function() {
    var id = $(this).find('div.field-content').attr("id").replace("item-", "");

    var url = "/get-partner/" + id + "/companies";
    $.get(url, function(data) {
      $('div.item-list-solo').fadeOut("fast", function() {
        $('div.item-list-solo').html(data).fadeIn("slow");
      });
    });
  });

	// sponsors
  $('.view-partners ul.list-all.sponsors li').click(function() {
    var id = $(this).find('div.field-content').attr("id").replace("item-", "");

    var url = "/get-partner/" + id + "/sponsors";
    $.get(url, function(data) {
      $('div.item-list-solo').fadeOut("fast", function() {
        $('div.item-list-solo').html(data).fadeIn("slow");
      });
    });
  });

});