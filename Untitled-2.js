< !DOCTYPE html >
    <
    html lang = "es" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <!--Enlace de hojas de estilo de bootstrap-->
    <
    link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-
beta2 / dist / css / bootstrap.min.css " rel="
stylesheet " integrity="
sha384 -
    BmbxuPwQa2lc / FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH / Ev + nYRRuWlolflfl "
crossorigin = "anonymous" >
    <!--Enlace google fonts--> 
    <
    link rel = "preconnect"
href = "https://fonts.gstatic.com" >
    <
    link href = "https://fonts.googleapis.com/css2?family=Pangolin&display=swap"
rel = "stylesheet" >
    <!--Enlace javascript para sweetalert--> 
    <
    script src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js" > < /script> <
title > CALCULADORA < /title> < /
    head > <
    body >
    <
    div class = "container" >
    <
    h1 > CALCULADORA DE PHP < /h1> <
hr >
    <
    form method = "POST" >
    <
    label > Numero 1 < /label>  <
input type = "number"
max = 10000 min = 0 name = "numero1"
placeholder = "0"
required autofocus >
    <
    label > Numero 2 < /label> <
input type = "number"
max = 10000 min = 0 name = "numero2"
placeholder = "0"
required autofocus >
    <
    hr >
    <
    input type = "radio"
class = "form-check-input"
name = "opcion"
value = "sumar"
required > sumar <
    input type = "radio"
class = "form-check-input"
name = "opcion"
value = "restar"
required > restar <
    input type = "radio"
class = "form-check-input"
name = "opcion"
value = "multiplicar"
required > multiplicar <
    input type = "radio"
class = "form-check-input"
name = "opcion"
value = "division"
required > division <
    input type = "radio"
class = "form-check-input"
name = "opcion"
value = "potenciacion"
required > potenciacion <
    input type = "radio"
class = "form-check-input"
name = "opcion"
value = "concatenacion"
required > concatenacion <
    hr >
    <
    input type = "submit"
class = "btn btn-success w-25"
value = "Enviar" >
    <
    input type = "reset"
class = "btn btn-danger w-25"
value = "Limpiar" >
    <
    hr >
    <
    /form> < /
    div > <
    div class = "container" >
    <?php
    if ($_POST){
        function sumar (){
            echo "La suma de los numeros es: ".
($_POST['numero1']+$_POST['numero2']);
            }
        function restar (){
        echo "La resta de los numeros es: ".
($_POST['numero1']-$_POST['numero2']);
            }
        function multiplicar (){
            echo "La multiplicacion de los numeros es: ".
($_POST['numero1']*$_POST['numero2']);
            }
        function division (){
    if ($_POST['numero2']==0)
        $d="Error: division por 0";
    else 
        $d=$_POST['numero1']/$_POST['numero2'];
        echo "La division de los numeros es: ".$d;
    }
        function potenciacion (){
        echo "La potenciacion de los numeros es: ".
(pow($_POST['numero1'],$_POST['numero2']));
    }
        function concatenacion (){
        echo "La concatenacion de los numeros es: ".
($_POST['numero1'].$_POST['numero2']);
    }
    switch($_POST['opcion']){
        case 'sumar':
            sumar();
            break;
        case 'restar':
            restar();
            break;
        case 'multiplicar':
            multiplicar();
            break;
        case 'division':
            division();
            break;
        case 'potenciacion':
            potenciacion();
            break;
        case 'concatenacion':
            concatenacion();
            break;
        default:
            echo"Resultado de la opcion seleccionada";
            break;
    }
}
    ?> <
    /div> < /
    body > <
    /html>