let comensal1, comensal2, comensal3,comensales;

//FUNCIONES
function numeroComensales(numero){
    numero=parseInt(prompt("Ingrese la cantidad de comensales:"));
    while(isNaN(numero) || numero < 1 || numero > 3){
        if (isNaN(numero)){
            numero=parseInt(prompt ("Ingresa nuevamente el número de comensales"));
        }else if(numero < 1 || numero > 3){
            numero=parseInt(prompt ("Ingresa un numero dentro del rango de tres comensales"));
        } else {
            break;
        };
    };
    return numero;
};

function cortes(numero,corte,nombre){
    numero=parseInt(prompt ("Ingresa cuantos kilos de "+corte+" va a comer "+nombre));
    while(isNaN(numero)){
            numero=parseInt(prompt ("Ingresa los kilos en numeros:"));
    };
    return numero;
};

//CLASE CON METODO
class Comensal{
    constructor(nombre,vacio,bondiola,chorizo,morcilla){
        this.nombre=nombre;
        this.vacio=vacio;
        this.bondiola=bondiola;
        this.chorizo=chorizo;
        this.morcilla=morcilla;
    }
    vegetariano(){
        if(this.vacio==0 && this.bondiola == 0 && this.chorizo==0 && this.morcilla==0 ){
            console.log(this.nombre+", ¿Es vegetarian@?");
        }else{
            console.log(this.nombre+", es mas carnivor@ que un T-Rex.");
        }
    }
}
//USO DE METODO//
comensales=numeroComensales(comensales);
if (comensales==1){
    comensal1=new Comensal (
        this.nombre=prompt("Ingrese el nombre del primer comensal:"),
        cortes(this.vacio,"Vacio",this.nombre),
        cortes(this.bondiola,"Bondiola",this.nombre),
        cortes(this.chorizo,"Chorizo",this.nombre),
        cortes(this.morcilla,"Morcilla",this.nombre)
        );
    comensal1.vegetariano();
    console.log(comensal1);
}else if(comensales==2){
    comensal1=new Comensal (
        this.nombre=prompt("Ingrese el nombre del primer comensal:"),
        cortes(this.vacio,"Vacio",this.nombre),
        cortes(this.bondiola,"Bondiola",this.nombre),
        cortes(this.chorizo,"Chorizo",this.nombre),
        cortes(this.morcilla,"Morcilla",this.nombre)
        );
    alert("Ahora ingresa los datos del segundo comensal");
    comensal2=new Comensal (
        this.nombre=prompt("Ingrese el nombre del segundo comensal:"),
        cortes(this.vacio,"Vacio",this.nombre),
        cortes(this.bondiola,"Bondiola",this.nombre),
        cortes(this.chorizo,"Chorizo",this.nombre),
        cortes(this.morcilla,"Morcilla",this.nombre)
        );
        console.log(comensal1);
        comensal1.vegetariano();
        console.log(comensal2);
        comensal2.vegetariano();
}else{
    comensal1=new Comensal (
        this.nombre=prompt("Ingrese el nombre del primer comensal:"),
        cortes(this.vacio,"Vacio",this.nombre),
        cortes(this.bondiola,"Bondiola",this.nombre),
        cortes(this.chorizo,"Chorizo",this.nombre),
        cortes(this.morcilla,"Morcilla",this.nombre)
        );
    alert("Ahora ingresa los datos del segundo comensal");
    comensal2=new Comensal (
        this.nombre=prompt("Ingrese el nombre del segundo comensal:"),
        cortes(this.vacio,"Vacio",this.nombre),
        cortes(this.bondiola,"Bondiola",this.nombre),
        cortes(this.chorizo,"Chorizo",this.nombre),
        cortes(this.morcilla,"Morcilla",this.nombre)
        );
    alert("Ahora ingresa los datos del tercer comensal");
    comensal3=new Comensal (
        this.nombre=prompt("Ingrese el nombre del tercer comensal:"),
        cortes(this.vacio,"Vacio",this.nombre),
        cortes(this.bondiola,"Bondiola",this.nombre),
        cortes(this.chorizo,"Chorizo",this.nombre),
        cortes(this.morcilla,"Morcilla",this.nombre)
        );
        console.log(comensal1);
        comensal1.vegetariano();
        console.log(comensal2);
        comensal2.vegetariano();
        console.log(comensal3);
        comensal3.vegetariano();
}


