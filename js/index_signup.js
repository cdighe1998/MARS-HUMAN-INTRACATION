 $(document).ready(function() {
    Materialize.updateTextFields();
   
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

$("#form").submit(function(event){
 
  event.preventDefault();  
  $("#form").fadeOut("slow", function(){
      $("#form").submit();
  });

  var date = $("#datepicker").val();
  var fullName = $("#full_name").val();
  var email = $("#email").val();
  var phoneNumber = $("#phone_number").val();

  
  $(".user-date").html("");
  $(".user-date").html(date);
  
  $(".user-name").html("");
  $(".user-name").html(fullName);
  
  $(".user-email").html("");
  $(".user-email").html(email);
  
  $(".congratz").fadeIn("slow");


  
  
});
  
  
}); // DOM Handler