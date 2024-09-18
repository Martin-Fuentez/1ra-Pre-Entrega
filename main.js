// CALCULADORA

while(true){
    let act= prompt('Que Accion desea hacer Suma, Resta, Multiplicación o División?').toLowerCase()
    let num1= Number(prompt('Ingrese el primer numero'))
    let num2= Number(prompt('Ingrese el segundo numero'))
    let total

    if(act == ('suma').toLowerCase()){
        total = num1+num2
        alert('El Resultado de suma es de '+total)
    }else if(act == ('resta').toLowerCase()){
        total = num1-num2
        alert('El Resltado de la resta es de '+total)
    }else if(act == ('multiplicacion').toLowerCase()){
        total = num1*num2
        alert('El Resultado de la Multiplicación es de '+total)
    }else if(act == ('division').toLowerCase()){
        total= num1/num2
        alert('El Resultado de la División es de '+total)
    }else{
        alert('Opción de Acción Incorrecta')
    }

    let salir= confirm('Deseas seguir utilizando la calculadora?')
    if(salir==true){
        continue
    }else if(salir==false){
        break
    }else{
    }
}