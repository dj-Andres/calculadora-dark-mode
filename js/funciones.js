function limpiar(){
    document.getElementById("resultado").value="";    
}
function envivo(value){
    document.getElementById("resultado").value +=value;
}
function cambio_tema(){
    let modo_oscuro=document.getElementById("modo-oscuro");
    let tema=document.getElementById("tema");
    if(tema.getAttribute("href")=="css/estilos.css"){
        tema.href="css/oscuro.css";
        modo_oscuro.innerHTML="Modo Normal";
    }else{
        tema.href="css/estilos.css";
        modo_oscuro.innerHTML="Modo Oscuro";
    }
}