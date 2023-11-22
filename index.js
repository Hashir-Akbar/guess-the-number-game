$(document).ready(function () {
   $(".fromToNum").hide();
   $(".guess-btn").hide()
   $(".input").prop("disabled", true);
   $(".input").val("");

   let regExp = new RegExp("^([1-9]|1[0-9]|2[0-5])$");



   let randomNum = randomNumber();

   $(".start").on("click", () => {
      $(".fromToNum").show();
      $(".guess-btn").show()
      $(".start").hide()
      $(".input").removeAttr("disabled");
      randomNum;

   })

   function randomNumber() {
      let randomNum = Math.floor(Math.random() * 25) + 1;
      return randomNum;
   }




   $(".guess-btn").on("click", () => {

      if ($(".input").val().match(regExp)) {

         $(".check").css("font-size", "1.4rem");
         let inputVal = $(".input").val();
         if (inputVal == randomNum) {
            $(".check").html("Congrats, you won");

         } else if (inputVal == "") {
            $(".check").html("");

         } else if (inputVal > randomNum) {
            $(".check").html("Guess Low");

         }
         else if (inputVal < randomNum) {
            $(".check").html("Guess high");

         }

      }
      else {
         $(".check").html("Only input numbers between 1-25");

         $(".check").css("font-size", "1.9rem");
      }


   })



});