function crearTarea()
{
    var nombreTarea = document.getElementById("tarea").value;
    const nuevaTarea = document.createElement("div");
    nuevaTarea.style.display = 'flex';
    const textoTarea = document.createElement("span");
    textoTarea.innerHTML = nombreTarea + " "
    //const textoTarea = document.createTextNode(nombreTarea + " ");
    const botonTarea = document.createElement("button");
    botonTarea.style.marginLeft = '4px';
    botonTarea.innerHTML = "✓ Tarea Completada";
    botonTarea.onclick = function () 
    {
        EliminarTarea(this);
    };
    var divTareas = document.getElementById("tareas");

    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonTarea);
    divTareas.appendChild(nuevaTarea);

}

function EliminarTarea(tarea)
{
    tarea.parentElement.remove();
}