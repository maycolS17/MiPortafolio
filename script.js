let menuVisible = false;

//esta funcion hara que se muestre y se oculte el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //aqui sera la funcion de ocultar el menu cuando seleccionemos una opcion
    document.getElementById("nav").classList ="";
    menuVisible = true;
}