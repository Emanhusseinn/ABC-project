

	

var myQs = [{Q:"1.which letter does the word 'apple' starts with?:",
                  A:"choice3",
                  S : ["1.C","2.B","3.A","4.M"]},

                  {Q:"2.which letter does the word 'butterfly' starts with?:",
                  A:"choice1",
                  S : [ "1.B", "2.K","3.O","4.P"]},

                  {Q:"3.which letter does the word 'corn' starts with?:",
                  A:"choice4",
                  S : ["1.F","2.Z","3.I","4.C"]},

                  {Q:"4.which letter does the word 'donuts' starts with?",
                  A:"choice3",
                  S : ["1.C","2.U","3.D","4.Z"]},

                  {Q:"5.which letter does the word 'elephants' starts with?:",
                  A:"choice3",
                  S : ["1.B","2.N","3.E","4.Q"]}
                  ];




$("#mistakes").click(function(){
    $("#quiz").css("display", "block");

      $("input").css("display", "none");
     
      $("#form1 .cc").css("display", "block");
      $("#form2 .cc").css("display", "block");
      $("#form3 .cc").css("display", "block");
      $("#form4 .cc").css("display", "block");
      $("#form5 .cc").css("display", "block");

      $(".correct").css("display", "block");
     

      $("#P1").css("display", "none");

       $("#mistakes").css("display", "none")
      
})


$("#q1").text(myQs[0].Q);
$("#q2").text(myQs[1].Q);
$("#q3").text(myQs[2].Q);
$("#q4").text(myQs[3].Q);
$("#q5").text(myQs[4].Q);


$("#labelsId1").text((myQs[0].S)[0]);
$("#labelsId2").text((myQs[0].S)[1]);
$("#labelsId3").text((myQs[0].S)[2]);
$("#labelsId4").text((myQs[0].S)[3]);
$("#labelsId5").text((myQs[1].S)[0]);
$("#labelsId6").text((myQs[1].S)[1]);
$("#labelsId7").text((myQs[1].S)[2]);
$("#labelsId8").text((myQs[1].S)[3]);
$("#labelsId9").text((myQs[2].S)[0]);
$("#labelsId10").text((myQs[2].S)[1]);
$("#labelsId11").text((myQs[2].S)[2]);
$("#labelsId12").text((myQs[2].S)[3]);
$("#labelsId13").text((myQs[3].S)[0]);
$("#labelsId14").text((myQs[3].S)[1]);
$("#labelsId15").text((myQs[3].S)[2]);
$("#labelsId16").text((myQs[3].S)[3]);
$("#labelsId17").text((myQs[4].S)[0]);
$("#labelsId18").text((myQs[4].S)[1]);
$("#labelsId19").text((myQs[4].S)[2]);
$("#labelsId20").text((myQs[4].S)[3]);


$("#firstBu").click(function(){

       $("#quiz").css("display", "block");
       $("#end").css("display", "block");
       $("#startdiv").css("display", "none");
       $("body").css("background-image","url(images/yal.jpg)")

 })


$("#finish").click(function resultsCounter(){
      var c = 0;
      var choice1 = $("#form1 :checked").val();
      var choice2 = $("#form2 :checked").val();
      var choice3 = $("#form3 :checked").val();
      var choice4 = $("#form4 :checked").val();
      var choice5 = $("#form5 :checked").val();
      var results;

      if(!choice1||!choice2||!choice3||!choice4||!choice5)
            alert('Oopsie, it seems like you forgot to answer a question, check again!');
      else {  
             $("#quiz").css("display", "none");
             $("#startdiv").css("display", "none");
             $("#end").css("display", "none");
             $("#result").css("display", "block");
             // $("img").css("display","none")
             $("#mistakes").css("display", "block");

            for (var i = 0; i<5;i++){
                  if ($(`#form${i+1} :checked`).val() === myQs[i].A){
                    c++;
                    $(`#form${i+1} .cc`).css("background-color", " #00cc00");
                  }
            }
            results = (c/5)*100;

            if(results === 100 || results >= 90){
                  $('#result').text("your results:"+ results + '%, Awsome, You did great.');}
                   else if(results >= 70 && results < 90){
                  $('#result').text('your results:' + results + "%, That's very good.");} 
                  else if(results >= 40 && results < 70){ 
                  $('#result').text('your results:' + results + "%, That's good.");
                  $('a').css("display", "inline");}
                   else{
                  $('#result').text('your results:' + results + '%, Hmmm!, you need some pract');
                  $('a').css("display", "inline");
                
            } 

             $("#form1 .cc").text("Your answer is :" + ($("#form1 label[for=" + choice1 + "]").text()));
             $("#form2 .cc").text("Your answer is :" + ($("#form2 label[for=" + choice2 + "]").text()));
             $("#form3 .cc").text("Your answer is :" + ($("#form3 label[for=" + choice3 + "]").text()));
             $("#form4 .cc").text("Your answer is :" + ($("#form4 label[for=" + choice4 + "]").text()));
             $("#form5 .cc").text("Your answer is :" + ($("#form5 label[for=" + choice5 + "]").text()));
      }
 });

