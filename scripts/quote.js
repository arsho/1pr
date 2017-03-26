$(document).ready(function() {
  $("#res").hide();
  function generate_quote() {
    $api_link = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON($api_link, function(data) {
      $quote = data.quoteText;
      $quote_author = data.quoteAuthor;
      $("#quote").html($quote);
      $("#quote_author").html($quote_author);
    });
  }
  $("#generate_quote").on("click", function() {
    $("#res").show('slow');
    generate_quote();
  });
$("#res").show('slow');
generate_quote();
})