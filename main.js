var objetos = ['CADEIRA' , 'IMPRESSORA' , 'GARFO']

function adicionar(elemento){
    elemento = document.getElementById('adicionar').value

    elemento = elemento.toUpperCase()

    document.getElementById('adicionar').value = ''

    if(elemento == ''){
        alert('Informe um valor válido')
    }else if(objetos.indexOf(elemento) === -1){
        objetos.push(elemento)
        console.log(objetos)
    }else{
        alert('Objeto já foi adicionado')
    } 
    
}

function ordenarObjetos(){
   objetos.sort()
   console.log(objetos)
}

function palavrasArmazenadas(){
    alert(objetos)
}







