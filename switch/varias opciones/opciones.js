let menu =prompt("ingrese a que menu desea ingresar");
switch (menu) {
    case "aplicaciones":
        console.log("aca encontrara las aplicaciones ");       
        break;
     case "recomendaciones":
        console.log("aqui encontrara las opciones que le recomienda el sistema");
        break;
    case"buscador":
    console.log("aqui encontrara el apartado del buscador donde puede buscar lo que necesite");
        break;
     case"perfil":   
        console.log("aqui encontrara el contenido de su perfil");
        break;
     case "configuracion":   
        console.log("aqui encontrara la configuracion del sistema");
        break;
    default:
        console.log("ingrese un menu valido");
        break;
}