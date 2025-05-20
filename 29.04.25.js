function leer()
{
    var nom = document.forms["formulario"].elements[0].value;
    var pass = document.getElementById("pass").value
    var programa = document.getElementsByTagName("select")[0].value;
    var gender = document.getElementsByName("genero");
    var g;
    for(i=0;i<gender.length;i++)
    {
        if(gender[i].checked)
        {
            g = gender[i].value;
        }
    }
    var ok = document.getElementById("casilla").checked;
    var okStr;
    if(ok === true)
    {
        okstr = "Aceptados";
    }
    else
    {
        okstr = "No aceptados";
    }
    document.getElementById("resultado").innerHTML = 
    "Nombre: " + nom + "\<br>Contraseña: " + pass + "\<br>Carrera: " + programa + "\<br>Genero: " + g+ "\<br>Acepto terminos: " + okstr;
}