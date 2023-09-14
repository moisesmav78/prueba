/*Una emprendedora fabrica volantines para el 18, no logra realizar todos los que tiene que entregar dentro del mismo día. Realice un programa en JavaScript que pida cuantos logra hacer cada día durante 7 días, asuma que no hay un máximo de volantines a fabricar, tiene conversado con 3 colegios de la zona y todos los que logre hacer se los van a comprar
Además, al final de estos días realice un informe:
1- Calcular el promedio de volantines por día
2- Cuantos volantines alcanzó a fabricar.
3- Cual fue el día que fabrico menos
4- Restricción de uso de arreglos o listas.
*/
const prompt = require("prompt-sync")();

let totalVolantines = 0; 
let diaMenosVolantines = 1;
let volantinesMenos = 0;

for (let dia = 1; dia<= 7; dia++) {
    let volantinesDia = parseInt(prompt('Dia ' +dia+ ': ¿Cuantos volantines fabricaste?'));
    totalVolantines += volantinesDia;
    if (volantinesDia < volantinesMenos) {
        volantinesMenos = volantinesDia;
        diaMenosVolantines = dia;
    }
}

const promedioVolantinesPorDia = totalVolantines / 7;


console.log('Promedio de volantines por dia:  ' +promedioVolantinesPorDia);
console.log('Total de volantines fabricados:  ' +totalVolantines);
console.log('Dia en el que fabrico menos volantines:  ' +diaMenosVolantines);