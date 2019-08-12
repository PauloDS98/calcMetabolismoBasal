var mulher = false;
var homem = false;

$(document).ready(function(){
    
    $(".confirmMulher").hide();
    $('.btnCancel').hide();
    $(".confirmHomem").hide();
    $(".img-mulher").hide();
    $(".img-homem").hide();
    $(".cancelAtv").hide();

    

    

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
      $("body").css("background-color", "#d86565");
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

    $(document).on("click", ".confirmMulher", function(){
      mulher = true;
      $(location).attr("href", "atividade.html");
    })

    $(document).on("click", ".confirmHomem", function(){
      homem = true;
      $(location).attr("href", "atividade.html");
    })

    $(document).on("click", ".btnSedentario", function(){
      $(".btnSedentario").hide();
      $(".confirmSedentario").show();         
      $(".btn2").hide();
      $(".btn3").hide();
      $(".btn4").hide();
      $(".btnEAtivo").hide();
      $(".cancelAtv").show();
      $(".quadro").css("background-color", "white");
      $(".quadro").css("position", "fixed");
      $(".quadro").css("width", "70%");
      $(".quadro").css("height", "50%");
      $(".quadro").css("top", "30vh");
      $(".quadro").css("left", "8.5vh");
      $(".quadro").css("border-radius", "20px");
      $(".textoAuxiliarAtv").text("Fazem pouco ou nenhum exercício");
      $(".textoAuxiliar").show();  
      $(".textoAuxiliar").text("Sedentário");    
    })

    $(document).on("click", ".btnLAtivo", function(){
      $(".escolha").hide();
      $(".confirmLevemente").show();         
      $(".btnEAtivo").hide();
      $(".cancelAtv").show();
      $(".quadro").css("background-color", "white");
      $(".quadro").css("position", "fixed");
      $(".quadro").css("width", "70%");
      $(".quadro").css("height", "50%");
      $(".quadro").css("top", "30vh");
      $(".quadro").css("left", "8.5vh");
      $(".quadro").css("border-radius", "20px");
      $(".textoAuxiliarAtv").text("Exercícios leves, 1 a 3 dias por semana");
      $(".textoAuxiliar").show();  
      $(".textoAuxiliar").text("Levemente Ativo");    
    })

    $(document).on("click", ".cancelAtv", function(){
      $(".btnSedentario").show();
      $(".btn2").show();
      $(".btn3").show();
      $(".btn4").show();
      $(".btnEAtivo").show();
      $(".cancelAtv").hide();
      $(".quadro").css("background-color", "");
      $(".quadro").css("position", "");
      $(".quadro").css("width", "");
      $(".quadro").css("height", "");
      $(".quadro").css("top", "");
      $(".quadro").css("left", "");
      $(".quadro").css("border-radius", "");
      $(".textoAuxiliarAtv").text("");
      $(".textoAuxiliar").hide();
      $(".confirmSedentario").hide();
      $(".confirmLevemente").hide();       
    })



 
});
  

