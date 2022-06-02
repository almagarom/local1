//creamos la primera variable
puntu = 0;

//creamos la funcion para actualizar la puntuacion
function actualizar(){
    //para mostrar 
    puntu = puntu + 1;
    document.getElementById("puntuacion").innerHTML = "Puntuación: " + puntu;

}

//funcion para guardar los datos en el local sotrage
function guardar(){
    //le damos un nombre a la variable donde se guardará el valor
    //le decimos lo que queremos guardar
    localStorage.setItem("puntuacionGuardada", puntu);
}

///prueba ////
function siguiente(){
    //Crearemos la proxima clase la activity_2
    window.location = "activity_2.html";
}

////Empezamos el siguiente archivo