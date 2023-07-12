
let nombre=prompt("Ingrese su nombre ");
let apellido=prompt("Ingrese su apellido ");
document.writeln(`Su nombre es ${nombre} <br> Su apellido es ${apellido} <br>`);

let menu="CONOCE TU SUELDO \n Elija su cargo \n";
menu+="1. Administrativo\n";
menu+="2. Supervisor\n";
menu+="3. Operario\n";
menu+="4. Control de calidad \n ";
menu+="5. Salir\n";

let cod=0;
do{
cod=parseInt(prompt(menu));

switch(cod){
    case 1: 
        document.writeln(`Su cargo es Administrativo y su sueldo es $700,00 <br>`);
    break;
    case 2: 
        document.writeln(`Su cargo es Supervisor y su sueldo es $650,00.<br>`);
    break;
    case 3: 
        document.writeln(`Su cargo es Operario y su sueldo es $440,00<br>`);
    break;
    case 4: 
        document.writeln(`Su cargo es Control de calidad y su sueldo es $490,00.<br>`);
    break;
    case 5:
        document.writeln(`Gracias por visitar FORD <br>`);
    break;
    default:


}
}while(cod!=5);

