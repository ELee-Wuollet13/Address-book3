$(document).ready(function() {
  $("form#input").submit(function(){
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    console.log(name);
    console.log(address)
    console.log(phone)
    console.log(email)
  });
});
