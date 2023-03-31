let password = prompt("ingrese su contraseña")
if (password.length >=8 && password.length <=15 || password.includes(" ") ) {
    console.log("su contraseña ingresada  tiene los caracteres propuestos");
}else {
    console.log("su contraseña no cumple con las expextativas");
    

}