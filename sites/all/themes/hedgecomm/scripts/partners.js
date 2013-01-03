jQuery(document).ready(function($) {
  $('.view-partners ul.list-all li').click(function() {
    var id = $(this).find('div.field-content').attr("id").replace("item-", "");

    var url = "/get-partner/" + id;
    $.get(url, function(data) {
      $('div.item-list-solo').html(data);
    });

  });
});