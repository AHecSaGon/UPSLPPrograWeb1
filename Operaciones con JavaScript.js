function sumar()
{
    var A = parseInt(document.getElementById("num1").value); //parseFloat permite parsear floats
    var B = parseInt(document.getElementById("num2").value);
    //alert(A + ' + ' + B + ' = ' + (A+B));
    document.getElementById("res").innerHTML = A + ' + ' + B + ' = ' + (A+B);
}

function restar()
{
    var A = parseInt(document.getElementById("num1").value);
    var B = parseInt(document.getElementById("num2").value);
    document.getElementById("res").innerHTML = A + ' - ' + B + ' = ' + (A-B);
}

function multiplicar()
{
    var A = parseInt(document.getElementById("num1").value);
    var B = parseInt(document.getElementById("num2").value);
    document.getElementById("res").innerHTML = A + ' x ' + B + ' = ' + (A*B);
}

function dividir()
{
    var A = parseInt(document.getElementById("num1").value);
    var B = parseInt(document.getElementById("num2").value);
    document.getElementById("res").innerHTML = A + ' / ' + B + ' = ' + (A/B);
}
