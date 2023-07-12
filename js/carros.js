let menu="Cocensionaria de Autos FORD \n Elija su carro \n";
menu+="1. Ford Fiesta\n";
menu+="2. Ford Focus\n";
menu+="3. Salir\n";

let cod=0;
do{
    cod=parseInt(prompt(menu));

    switch(cod){
        case 1: 
            document.writeln(`El carro que usted eligió fue el Ford Fiesta con 5% de descuento<br>`);
        break;
        case 2: 
            document.writeln(`El carro que usted eligió fue el Ford Focus con 10% de descuento  <br>`);
        break;
        case 3:
            document.writeln(`Gracias por visitar FORD <br>`);
        break;
        default:


    }
}while(cod!=3);