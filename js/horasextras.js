let nombre=prompt("Ingrese su nombre  ");
let apellido=prompt("Ingrese su apellido  ");
let num1 = parseInt(prompt("Digite la cantidad de horas extras realizadas")); 
let num2=(700);
let num3=(650);
let num4=(440);
let num5=(490);
let sh=(10);
let suno=num1*sh;
let result=suno+num2;
let suno1=num1*sh;
let result1=suno1+num3;
let suno2=num1*sh;
let result2=suno2+num4;
let suno3=num1*sh;
let result3=suno3+num5;

document.writeln(`Su nombre es ${nombre}<br> Su apellido es ${apellido} <br>`);

let menu="GANANCIAS DE HORAS EXTRAS \n Elija su cargo \n";
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
        document.writeln(`Su cargo es Administrativo y su sueldo con horas extras es ${result} <br>`);
    break;
    case 2: 
        document.writeln(`Su cargo es Supervisor y su sueldo con horas extras es ${result1}<br>`);
    break;
    case 3: 
        document.writeln(`Su cargo es Operario y su sueldo con horas extras es ${result2}`);
    break;
    case 4: 
        document.writeln(`Su cargo es Control de calidad y su sueldo con horas extras es ${result3}<br>`);
    break;
    case 5:
        document.writeln(`Gracias por visitar FORD <br>`);
    break;
    default:


}
}while(cod!=5);


