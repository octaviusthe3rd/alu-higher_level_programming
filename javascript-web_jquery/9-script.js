//Script that displays the value of hello from using fetch
$(function () {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function (data, textStatus) {
    $('#hello').text(data.hello);
  });
});
