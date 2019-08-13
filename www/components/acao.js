    var mulher = 0;
    var homem = 0;
    var sedentario = 0;
    var levAtivo = 0;
    var modAtivo = 0;
    var altAtivo = 0;
    var extAtivo = 0;


$(document).ready(function(){
    

    $(".confirmMulher").hide();
    $('.btnCancel').hide();
    $(".confirmHomem").hide();
    $(".img-mulher").hide();
    $(".img-homem").hide();
    $(".cancelAtv").hide();
    $(".textoAuxiliar").hide();
    $(".confirmSedentario").hide();
    $(".confirmLevemente").hide();       
    $(".confirmModeradamente").hide();
    $(".confirmAltamente").hide();
    $(".confirmExtremamente").hide();   

    

    
    //Função quando escolher o genero biologico Mulher
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

    //Função quando escolher o genero biologico Homem
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

    //Botão cancelar
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

  //Confirmação de ser Mulher
    $(document).on("click", ".confirmMulher", function(){
      mulher++;
      $(location).attr("href", "atividade.html");
    })
  //Confirmação de ser Homem
    $(document).on("click", ".confirmHomem", function(){
      homem++;
      $(location).attr("href", "atividade.html");
    })

  //Botão de escolha sedentario
    $(document).on("click", ".btnSedentario", function(){
      $(".escolha").hide();
      $(".confirmModeradamente").hide();   
      $(".confirmLevemente").hide();
      $(".confirmAltamente").hide();
      $(".confirmExtremamente").hide();
      $(".confirmSedentario").show();           
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

  //Botão de escolha levemente Ativo
    $(document).on("click", ".btnLAtivo", function(){
      $(".cancelAtv").show();
      $(".escolha").hide();
      $(".confirmModeradamente").hide();   
       $(".confirmExtremamente").hide();
      $(".confirmSedentario").hide();           
      $(".confirmLevemente").show();         
      $(".cancelAtv").show();
      $(".quadro").css("background-color", "white");
      $(".quadro").css("position", "fixed");
      $(".quadro").css("width", "70%");
      $(".quadro").css("height", "50%");
      $(".quadro").css("top", "30vh");
      $(".quadro").css("left", "8.5vh");
      $(".quadro").css("border-radius", "20px");
      $(".textoAuxiliarAtv").html("Exercícios leves, 1 a 3 dias");
      $(".textoAuxiliar").show();  
      $(".textoAuxiliar").html("Levemente Atv.");    
    })

  //Botão de escolha Moderadamente Ativo
    $(document).on("click", ".btnMAtivo", function(){
      $(".cancelAtv").show();
      $(".escolha").hide();
      $(".confirmSedentario").hide();           
      $(".confirmLevemente").hide();  
       $(".confirmExtremamente").hide();
      $(".confirmModeradamente").show();       
      $(".cancelAtv").show();
      $(".quadro").css("background-color", "white");
      $(".quadro").css("position", "fixed");
      $(".quadro").css("width", "70%");
      $(".quadro").css("height", "50%");
      $(".quadro").css("top", "30vh");
      $(".quadro").css("left", "8.5vh");
      $(".quadro").css("border-radius", "20px");
      $(".textoAuxiliarAtv").html("Exercícios moderado, faz esporte <br> de 3 a 5 dias por semana");
      $(".textoAuxiliar").show();  
      $(".textoAuxiliar").html("Moderadamente Atv.");    
    })

 //Botão de escolha Altamente Ativo
    $(document).on("click", ".btnAAtivo", function(){
      $(".cancelAtv").show();
      $(".escolha").hide();
      $(".confirmAltamente").show();
      $(".confirmExtremamente").hide();
      $(".confirmModeradamente").hide();
      $(".confirmSedentario").hide();           
      $(".confirmLevemente").hide();         
      $(".cancelAtv").show();
      $(".quadro").css("background-color", "white");
      $(".quadro").css("position", "fixed");
      $(".quadro").css("width", "70%");
      $(".quadro").css("height", "50%");
      $(".quadro").css("top", "30vh");
      $(".quadro").css("left", "8.5vh");
      $(".quadro").css("border-radius", "20px");
      $(".textoAuxiliarAtv").html("Exercicio pesado de 5 a 6 dias por <br> semana");
      $(".textoAuxiliar").show();  
      $(".textoAuxiliar").html("Altamente Atv.");    
    })

 //Botão d escolha Extremamente Ativo
    $(document).on("click", ".btnEAtivo", function(){
      $(".cancelAtv").show();
      $(".escolha").hide();
      $(".confirmExtremamente").show();
      $(".confirmAltamente").hide();
      $(".confirmModeradamente").hide();
      $(".confirmSedentario").hide();           
      $(".confirmLevemente").hide();          
      $(".cancelAtv").show();
      $(".quadro").css("background-color", "white");
      $(".quadro").css("position", "fixed");
      $(".quadro").css("width", "70%");
      $(".quadro").css("height", "50%");
      $(".quadro").css("top", "30vh");
      $(".quadro").css("left", "8.5vh");
      $(".quadro").css("border-radius", "20px");
      $(".textoAuxiliarAtv").html("Exercicio pesado diariamente e <br> até 2 vezes por dia");
      $(".textoAuxiliar").show();  
      $(".textoAuxiliar").html("Extremamente Atv.");    
    })

 //Botão para cancelar a atividade
    $(document).on("click", ".cancelAtv", function(){
      $(".escolha").show();
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
      $(".confirmModeradamente").hide();
      $(".confirmAltamente").hide();
       $(".confirmExtremamente").hide();   
    })

    $(document).on("click", ".confirmSedentario", function(){

      sedentario++;
      $(location).attr("href", "questionario.html");
    })

    $(document).on("click", ".confirmLevemente", function(){
        levAtivo++;
        $(location).attr("href", "questionario.html");
    })

    $(document).on("click", ".confirmModeradamente", function(){
        modAtivo++;
        $(location).attr("href", "questionario.html");
    })

    $(document).on("click", ".confirmAltamente", function(){

      altAtivo++;
      $(location).attr("href", "questionario.html");
    })

    $(document).on("click"), ".confirmExtremamente", function(){
      extAtivo++;
      $(location).attr("href", "questionario.html");
    }

    $(document).on("click", ".btnEnviarDados", function(){
      var altura = $("#altura").val() * 100;
      var peso = $("#peso").val();
      var idade = $("#idade").val();

      if((mulher == 1) && (sedentario == 1)){
        var resultado = "1.2 * (655 + (9.6 * peso ) + (1.8 * altura) - (4.7 * idade))";

      } else if ((mulher == 1) && (levAtivo == 1)){
        var resultado = 1.375 * (655 + (9.6 * peso ) + (1.8 * altura) - (4.7 * idade));

      } else if ((mulher == 1) && (modAtivo == 1)){
        var resultado = 1.55 * (655 + (9.6 * peso ) + (1.8 * altura) - (4.7 * idade));

      } else if ((mulher == 1) && (altAtivo == 1)){
        var resultado = 1.725 * (655 + (9.6 * peso ) + (1.8 * altura) - (4.7 * idade));

      } else if ((mulher == 1) && (extAtivo == 1)){
        var resultado = 1.9 * (655 + (9.6 * peso ) + (1.8 * altura) - (4.7 * idade));
      } 

      if((homem == 1) && (sedentario == 1)){
        var resultado = 1.2 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));

      } else if ((homem == 1) && (levAtivo == 1)){
        var resultado = 1.375 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));

      } else if ((homem == 1) && (modAtivo == 1)){
        var resultado = 1.55 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));

      } else if ((homem == 1) && (altAtivo == 1)){
        var resultado = 1.725 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));

      } else if ((homem == 1) && (extAtivo == 1)){
        var resultado = 1.9 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));
      } else {
      }

      $(".ajusteTexto").text(resultado);
      
    })

 
});
  

