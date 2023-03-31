let producto=prompt("ingrese el producto")

switch (producto) {
    case "crema":
        console.log("este producto paga iva");
        break;
    
    case "lentejas":
        console.log("este producto no paga iva");
        break
    case "vino":
        console.log("este producto paga iva");
        break;
    case "arroz":
        console.log("este producto no paga iva");
    default:
        console.log("producto valido ");
        break;
}