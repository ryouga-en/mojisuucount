$(function() {
 
 
  $('.reset').click(function() {
 
    $('#contents').val("");
 
    $('#none').text(0);
 
    $('#space').text(0);
 
    $('#deditalnote').text(0);
 
    $('#note').text(0);
  });
 
 
 
 
  $('.count').click(function() {
 
    var selectedlanguage = $('#Select1').val();
    var nonespace = $('#contents').val().replace(/\s+/g, "").length;
    var countspace = $('#contents').val().length;
    var dedital = countspace / 1440;
 
    var deditalresult = Math.floor(dedital);
 
    var dedital = countspace / 1440;
 
    var deditalresult = Math.floor(dedital);
 
    var old = countspace / 400;
 
    var oldresult = Math.floor(old);
 
    function countWords(text) {
      return (text+=".").replace(/(\,|\.|:|;|\!|\?|\s)+/g, " ").split(" ").length - 1;
    }
 
    var englishcontents = $('#contents').val();
    var englishcalucurate = countWords(englishcontents);
 
    $('#deditalnote').text(deditalresult);
 
 
    $('#note').text(oldresult);
    if(selectedlanguage === "japanese"){
 
      $('#none').text(nonespace);
 
 
      $('#space').text(countspace);
 
 
 
 
 
    }else{
 
      $('#none').text(englishcalucurate);
 
      $('#space').text(nonespace);
 
 
    }
    if(document.getElementById('contents').value == "" ){
      $('#none').text(0);
      $('#space').text(0);
      $('#deditalnote').text(0);
      $('#note').text(0);
 
    }
  });
});
