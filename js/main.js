    let comensales = parseInt(prompt ('Ingrese la cantidad de comensales'));
    console.log(comensales);
    if (isNaN(comensales)){
      while (true){
        if (isNaN(comensales)){
          comensales = parseInt(prompt ('Ingrese la cantidad de comensales en numeros'));
        }else{
            break;
            }
        }
    }
    
    let vacio,bondiola,chorizo,morcilla;
    function ingresoNumero(numero,cortes) {
        numero=parseInt(prompt ('Ingrese los kilos de '+cortes+' que quiere comprar:'));
        if (isNaN(numero)){
          while (true){
            if (isNaN(numero)){
              numero = parseInt(prompt ('Ingrese los kilos de '+cortes+' en numeros'));
            }else{
                break;
                }
            }
        }
        return numero;
    }
    
    vacio=ingresoNumero(vacio,"vacio");
    bondiola=ingresoNumero(bondiola,"bondiola");
    chorizo=ingresoNumero(chorizo,"chorizo");
    morcilla=ingresoNumero(morcilla,"morcilla");

    function precioAsadoPerCapita (comensales,corte1,corte2,corte3,corte4) {
         valorFinal= (corte1*450+corte2*500+corte3*230+corte4*310)/comensales;
         return valorFinal;      
    }
    function precioAsado(corte1,corte2,corte3,corte4) {
        valorAsado= corte1*450+corte2*500+corte3*230+corte4*310;
        return valorAsado;
    }
    let precio = precioAsado(vacio,bondiola,chorizo,morcilla), precioCabeza=precioAsadoPerCapita(comensales,vacio,bondiola,chorizo,morcilla).toFixed(2);

    alert ("El Asado tendra un valor de $"+precio+"\nSerían $"+precioCabeza+" cada uno");
