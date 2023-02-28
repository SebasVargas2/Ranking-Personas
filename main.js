//Ranking Original
const Ranking=[{nombre: "Leidy", puntuacion:80},{nombre: "Andrea", puntuacion: 63},{nombre: "Valentina", puntuacion: 55},{nombre: "Sergio", puntuacion: 42},{nombre: "Ronald", puntuacion: 38},{nombre: "Luis", puntuacion: 30}]

//Ranking Actualizado
var ranking2=Ranking.slice(0)

//Banderas
var flag = true
var flag2 = true

const primero=document.getElementById('primero')
primero.addEventListener('click',()=>{uno(),habilitar1()})

const segundo=document.getElementById('segundo')
segundo.addEventListener('click',()=>{dos(),habilitar2()})

const tercero=document.getElementById('tercero')
tercero.addEventListener('click',tres)

const cuarto=document.getElementById('cuarto')
cuarto.addEventListener('click',cuatro)

const quinto=document.getElementById('quinto')
quinto.addEventListener('click',cinco)

const sexto=document.getElementById('sexto')
sexto.addEventListener('click',seis)

const septimo=document.getElementById('septimo')
septimo.addEventListener('click',siete)

function uno(){
    let contenedor = `<table><th>Nombre</th><th>Puntuación</th>`
    Ranking.forEach(jugador => {
        contenedor+=`<tr><td>${jugador.nombre}</td><td>${jugador.puntuacion}</td></tr>`
    })
    contenedor += `</table>`
    document.getElementById('pantalla').innerHTML=contenedor
}

function dos(){
    let indexSergio = 0
    let contenedor = ``

    //Modificar Puntuación
    ranking2.forEach(i =>{
        if (i.nombre=="Sergio"){
            indexSergio=ranking2.indexOf(i)
        }
    })
    ranking2[indexSergio].puntuacion=42+14

    //Bandera
    if(flag == true){
        //Eliminar Luis
        ranking2.pop()
        
        //Agregar
        ranking2.push({nombre:"Gustavo",puntuacion:77},{nombre:"Jamile",puntuacion:77},{nombre:"Yanires",puntuacion:93})
    }flag = false

    //Ordenadar
    ranking2.sort((a,b)=> (b.puntuacion-a.puntuacion))

    //Tabla
    contenedor += `<table><th>Nombre</th><th>Puntuación</th>`
    ranking2.forEach(jugador => {
        contenedor+=`<tr><td>${jugador.nombre}</td><td>${jugador.puntuacion}</td></tr>`
    })
    contenedor += `</table>`
    document.getElementById('pantalla').innerHTML=contenedor 
}

function tres(){
    //Ordenar Inversa
    let contenedor = ``
    ranking2.sort((a,b)=> (a.puntuacion-b.puntuacion))

    //Tabla
    contenedor += `<table><th>Nombre</th><th>Puntuación</th>`
    ranking2.forEach(jugador => {
        contenedor+=`<tr><td>${jugador.nombre}</td><td>${jugador.puntuacion}</td></tr>`
    })
    contenedor += `</table>`
    document.getElementById('pantalla').innerHTML=contenedor
}

function cuatro(){
    //Promedio
    let promedio = 0    
    ranking2.forEach(i =>{
        promedio+=i.puntuacion
    })
    let prom=promedio/ranking2.length
    document.getElementById('pantalla').innerHTML=`<b>Pomedio:</b> ${prom.toFixed(2)}`
}

function cinco(){
    //Filtrado
    let all = ranking2.filter(i=> i.puntuacion>=50)
    let contenedor = ``
    contenedor += `<h3>Participantes con mayor puntiación a 50</h3><table><th>Nombre</th><th>Puntuación</th>`
    all.forEach(jugador => {
        contenedor+=`<tr><td>${jugador.nombre}</td><td>${jugador.puntuacion}</td></tr>`
    })
    contenedor += `</table>`
    document.getElementById('pantalla').innerHTML=contenedor
}

function seis () {
    let contenedor=''
    //Bandera
    if(flag2 == true){
        let indexluis = 0
        Ranking.forEach(i =>{
            if (i.nombre=="Luis"){
                indexluis=Ranking.indexOf(i)
            }
        })
        ranking2.push({nombre: `${Ranking[indexluis].nombre}`, puntuacion: (parseInt(`${Ranking[indexluis].puntuacion}`)*1.3)})
    }flag2 = false

    //Ordenar
    ranking2.sort((a,b)=> (b.puntuacion-a.puntuacion))
    console.log(ranking2)

    //Tabla
    contenedor += `<table><th>Nombre</th><th>Puntuación</th>`
    ranking2.forEach(jugador => {
        contenedor+=`<tr><td>${jugador.nombre}</td><td>${jugador.puntuacion}</td></tr>`
    })
    contenedor += `</table>`
    document.getElementById('pantalla').innerHTML=contenedor
}

function siete(){
    //Participantes
    let contenedor=''
    contenedor+=`<h3>Desarrollado por:</h3>`
    contenedor+=`Lady Katherine Quintero López<br> `
    contenedor+=`Brayan Steven León Martinez<br>`
    contenedor+=`Sebastian Andres Vargas Paez<br>`
    document.getElementById('pantalla').innerHTML=contenedor
}

function habilitar1(){
    document.getElementById('segundo').disabled = false;
}

function habilitar2(){
    document.getElementById('tercero').disabled = false;
    document.getElementById('cuarto').disabled = false;
    document.getElementById('quinto').disabled = false;
    document.getElementById('sexto').disabled = false;
}