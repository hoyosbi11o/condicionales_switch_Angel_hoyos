
let longitud= prompt("ingrese el numero") ;
let conversion= prompt("ingrese la conversion");
 let resultado 
   switch (conversion) {
    case "metros":
      resultado= longitud/100;
      console.log("los metros es:", resultado);
       break;
    case "kilometros":
      resultado= longitud/1000;
      console.log("los kilometros es:", resultado);
      break;
    case "centimetros":
      resultado= longitud*100;
      console.log("los centimetros son:", resultado);
      break;
    case "pulgadas":
      resultado= longitud*39.37;
      console.log("las pulgudass son:", resultado);
      break;
    default:
      resultado= longitud
      console.log("es:", resultado);
      break;
  }
 

  

  