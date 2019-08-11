var mulher = false;
var homem = false;

$(document).ready(function(){
    

    $(".confirmMulher").hide();
    $('.btnCancel').hide();
    $(".confirmHomem").hide();
    $(".img-mulher").hide();
    $(".img-homem").hide();

    

    $(document).on("click", ".mulher", function(){
      $("body").css("background-color", "pink");
      $(".container").css("background-color", "pink");
      $(".mulher").hide();
      $(".homem").hide();
      $(".texto").html("Você é uma mulher?")
      $(".confirmMulher").show();
      $('.btnCancel').show();
      $(".img-mulher").show();
    });

    $(document).on("click", ".homem", function(){
      $("body").css("background-color", "#528ed3");
      $(".container").css("background-color", "#528ed3");
      $(".mulher").hide();
      $(".homem").hide();
      $(".texto").html("Você é um homem?")
      $(".confirmHomem").show();
      $('.btnCancel').show();
      $(".img-homem").show();
    });

    $(document).on("click", ".btnCancel", function(){
      $("body").css("background-color", "grey");
      $(".container").css("background-color", "whitesmoke");
      $(".mulher").show();
      $(".homem").show();
      $(".texto").html("Qual é seu sexo:")
      $(".confirmHomem").hide();
      $(".confirmMulher").hide();
      $('.btnCancel').hide();
      $(".img-homem").hide();
      $(".img-mulher").hide();
    })


 
});
  

