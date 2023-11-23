$(document).ready(function () {
   $(".fromToNum").hide();
   $(".guess-btn").hide()
   $(".restart-btn").hide()
   $(".input").prop("disabled", true);
   $(".input").val("");
   $(".gif").removeAttr("src")

   let regExp = new RegExp("^([1-9]|1[0-9]|2[0-5])$");



   let randomNum = randomNumber();

   function startBtn() {

      $(".start").on("click", () => {
         $(".fromToNum").show();
         $(".guess-btn").show()
         $(".start").hide()
         $(".input").removeAttr("disabled");
         randomNum;

      })
   }
   startBtn()

   $(".restart-btn").on("click", () => {
      $(".restart-btn").hide()
      $(".start").show()
      $(".input").val("");
      $(".check").html("");



      return startBtn()

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
            $(".input").prop("disabled", true);
            $(".restart-btn").show()
            $(".guess-btn").hide()
            // $(".gif").attr('src=', "img/giphy-unscreen.gif")



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