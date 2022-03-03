let logoportada = document.querySelector('#logoportada')




    $("#logoportada").fadeOut(10)
    $("#logoportada").fadeIn(1500)






    //////// GALERÍA DE IMÁGENES ////////
    const galeria1 = document.querySelector('#galeria1')
    const galeria2 = document.querySelector('#galeria2')
    const galeria3 = document.querySelector('#galeria3')
    const galeria4 = document.querySelector('#galeria4')
    const galeria5 = document.querySelector('#galeria5')

 

// function galeria (a,b,c,d,e,f) {
//     a.addEventListener('click', function () {

        
//         console.log(galeria1check)
//         console.log(galeria2check)
//         console.log(galeria3check)
//         console.log(galeria4check)
//         console.log(galeria5check)
    
//         if (f == true) {
//             a.classList.remove('img-inact');
//             b.classList.add('img-inact');
//             c.classList.add('img-inact');
//             d.classList.add('img-inact');
//             e.classList.add('img-inact');
//         }
    
//     })
// }

// const galeria1check = galeria1.classList.contains('img-inact')
// const galeria2check = galeria2.classList.contains('img-inact')
// const galeria3check = galeria3.classList.contains('img-inact')
// const galeria4check = galeria4.classList.contains('img-inact')
// const galeria5check = galeria5.classList.contains('img-inact')




// let fgaleria1 = galeria (galeria1, galeria2, galeria3, galeria4, galeria5, galeria1check);
// let fgaleria2 = galeria (galeria2, galeria1, galeria3, galeria4, galeria5, galeria2check);
// let fgaleria3 = galeria (galeria3, galeria2, galeria1, galeria4, galeria5, galeria3check);
// let fgaleria4 = galeria (galeria4, galeria2, galeria3, galeria1, galeria5,
//     galeria4check);
// let fgaleria5 = galeria (galeria5, galeria2, galeria3, galeria4, galeria1, 
//     galeria5check);


  galeria1.addEventListener('click', function () {

      let galeria1check = galeria1.classList.contains('img-inact')
      let galeria2check = galeria2.classList.contains('img-inact')
      let galeria3check = galeria3.classList.contains('img-inact')
      let galeria4check = galeria4.classList.contains('img-inact')
      let galeria5check = galeria5.classList.contains('img-inact')
 console.log(galeria1check)
 console.log(galeria2check)
 console.log(galeria3check)
 console.log(galeria4check)
 console.log(galeria5check)
     if (galeria1check == true) {
         galeria1.classList.remove('img-inact');
         galeria2.classList.add('img-inact');
         galeria3.classList.add('img-inact');
         galeria4.classList.add('img-inact');
         galeria5.classList.add('img-inact');
     }
 })

 
 galeria2.addEventListener('click', function () {

    let galeria1check = galeria1.classList.contains('img-inact')
    let galeria2check = galeria2.classList.contains('img-inact')
    let galeria3check = galeria3.classList.contains('img-inact')
    let galeria4check = galeria4.classList.contains('img-inact')
    let galeria5check = galeria5.classList.contains('img-inact')
console.log(galeria1check)
console.log(galeria2check)
console.log(galeria3check)
console.log(galeria4check)
console.log(galeria5check)
   if (galeria2check == true) {
       galeria2.classList.remove('img-inact');
       galeria1.classList.add('img-inact');
       galeria3.classList.add('img-inact');
       galeria4.classList.add('img-inact');
       galeria5.classList.add('img-inact');
   }
})


galeria3.addEventListener('click', function () {

    let galeria1check = galeria1.classList.contains('img-inact')
    let galeria2check = galeria2.classList.contains('img-inact')
    let galeria3check = galeria3.classList.contains('img-inact')
    let galeria4check = galeria4.classList.contains('img-inact')
    let galeria5check = galeria5.classList.contains('img-inact')
console.log(galeria1check)
console.log(galeria2check)
console.log(galeria3check)
console.log(galeria4check)
console.log(galeria5check)
   if (galeria3check == true) {
       galeria3.classList.remove('img-inact');
       galeria2.classList.add('img-inact');
       galeria1.classList.add('img-inact');
       galeria4.classList.add('img-inact');
       galeria5.classList.add('img-inact');
   }
})


galeria4.addEventListener('click', function () {

    let galeria1check = galeria1.classList.contains('img-inact')
    let galeria2check = galeria2.classList.contains('img-inact')
    let galeria3check = galeria3.classList.contains('img-inact')
    let galeria4check = galeria4.classList.contains('img-inact')
    let galeria5check = galeria5.classList.contains('img-inact')
console.log(galeria1check)
console.log(galeria2check)
console.log(galeria3check)
console.log(galeria4check)
console.log(galeria5check)
   if (galeria4check == true) {
       galeria4.classList.remove('img-inact');
       galeria2.classList.add('img-inact');
       galeria3.classList.add('img-inact');
       galeria1.classList.add('img-inact');
       galeria5.classList.add('img-inact');
   }
})


galeria5.addEventListener('click', function () {

    let galeria1check = galeria1.classList.contains('img-inact')
    let galeria2check = galeria2.classList.contains('img-inact')
    let galeria3check = galeria3.classList.contains('img-inact')
    let galeria4check = galeria4.classList.contains('img-inact')
    let galeria5check = galeria5.classList.contains('img-inact')
console.log(galeria1check)
console.log(galeria2check)
console.log(galeria3check)
console.log(galeria4check)
console.log(galeria5check)
   if (galeria5check == true) {
       galeria5.classList.remove('img-inact');
       galeria2.classList.add('img-inact');
       galeria3.classList.add('img-inact');
       galeria4.classList.add('img-inact');
       galeria1.classList.add('img-inact');
   }
})




////////// MENU

const menuhotel = document.querySelector('#menuhotel')
const menuepuyen = document.querySelector('#menuepuyen')
const menuhabitaciones = document.querySelector('#menuhabitaciones')
const menurestaurant = document.querySelector('#menurestaurant')
const menulago = document.querySelector('#menulago')
const menuhosteria = document.querySelector('#menuhosteria')
const menutrip = document.querySelector('#menutrip')


const menunav = document.querySelector('#menunav')

const menutext1 = document.querySelector('#menutext1')
const menutext2 = document.querySelector('#menutext2')
const menutext3 = document.querySelector('#menutext3')
const menutext4 = document.querySelector('#menutext4')
const menutext5 = document.querySelector('#menutext5')
const menutext6 = document.querySelector('#menutext6')
const menutext7 = document.querySelector('#menutext7')


var width = $("#menunav").width()

function navaction (a) {
    a.addEventListener('click', function () {  
        menunav.classList.toggle('extrawidthnav');
        
            var width2 = $("#menunav").width()
        
            if (width2 >= 300) {
                $("#menutext1").fadeOut(30)
                $("#menutext2").fadeOut(30)
                $("#menutext3").fadeOut(30)
                $("#menutext4").fadeOut(30)
                $("#menutext5").fadeOut(30)
                $("#menutext6").fadeOut(30)
                $("#menutext7").fadeOut(30)  
            }      
        setTimeout(function() { 
        
        var width = $("#menunav").width()
        console.log(width)
            
            setTimeout(function() { 
                if (width >= 260) {
                    $("#menutext1").fadeIn(300)
                    $("#menutext2").fadeIn(300)
                    $("#menutext3").fadeIn(300)
                    $("#menutext4").fadeIn(300)
                    $("#menutext5").fadeIn(300)
                    $("#menutext6").fadeIn(300)
                    $("#menutext7").fadeIn(300)
            }},100)
        }, 600)                     
        
        })
}


let navbutton1 = navaction(menuhotel)
let navbutton2 = navaction(menuepuyen)
let navbutton3 = navaction(menuhabitaciones)
let navbutton4 = navaction(menurestaurant)
let navbutton5 = navaction(menulago)
let navbutton6 = navaction(menuhosteria)
let navbutton7 = navaction(menutrip)



/// LEER MAS EPUYEN


const parrafoepuyen1 = document.querySelector('#parrafoepuyen1')
const parrafoepuyen2 = document.querySelector('#parrafoepuyen2')
const leermasepuyen = document.querySelector('#leermasepuyen')
const leermenosepuyen = document.querySelector('#leermenosepuyen')



leermasepuyen.addEventListener('click', function () {


    setTimeout(function() { 

        $("#parrafoepuyen1").fadeIn(300)
        $("#parrafoepuyen2").fadeIn(300)    
        
        parrafoepuyen1.classList.remove('hide');
        parrafoepuyen2.classList.remove('hide');
        leermasepuyen.classList.add('hide');
        leermenosepuyen.classList.remove('hide');
    },100)

})


leermenosepuyen.addEventListener('click', function () {


    setTimeout(function() { 

        $("#parrafoepuyen1").fadeOut(300)
        $("#parrafoepuyen2").fadeOut(300)    
        
     
        leermenosepuyen.classList.add('hide');
        leermasepuyen.classList.remove('hide');

    },100)

})



  




/// WHATSAPP 


// const wainputnombre = document.querySelector('#wainputnombre')
const nombre = document.querySelector('#nombre')
const fechaentrada = document.querySelector('#fechaentrada')
const fechasalida = document.querySelector('#fechasalida')
const huespedes = document.querySelector('#huespedes')

const wanombre = document.querySelector('#wanombre')
const wafechaing = document.querySelector('#wafechaing')
const wafechasal = document.querySelector('#wafechasal')
const wacantidad = document.querySelector('#wacantidad')



let form = document.getElementById('form');

form.addEventListener("input", function(e) {
    e.preventDefault();

      nombre.addEventListener('input', () => {
        wanombre.setAttribute('data-text', nombre.value)

        wanombre.innerHTML = wanombre.getAttribute('data-text')

    if ((nombre.value).length === 0) {
        wanombre.innerHTML = 'Empty'
    }

    })

    // FECHA ENTRADA
    fechaentrada.addEventListener('input', () => {
        wafechaing.setAttribute('data-text', fechaentrada.value)

        wafechaing.innerHTML = wafechaing.getAttribute('data-text')

    if ((fechaentrada.value).length === 0) {
        wafechaing.innerHTML = 'Empty'
    }

    })

    // FECHA SALIDA

        
    fechasalida.addEventListener('input', () => {
        wafechasal.setAttribute('data-text', fechasalida.value)

        wafechasal.innerHTML = wafechasal.getAttribute('data-text')

    if ((fechasalida.value).length === 0) {
        wafechasal.innerHTML = 'Empty'
    }

    })

    //HUESPEDES

        
    huespedes.addEventListener('input', () => {
        wacantidad.setAttribute('data-text', huespedes.value)

        wacantidad.innerHTML = wacantidad.getAttribute('data-text')

    if ((huespedes.value).length === 0) {
        wacantidad.innerHTML = 'Empty'
    }

    })


})



// ARCHIVAR SOLICITUDES

let nuevasSolicitudes =  []

 

const enviarmensaje = document.querySelector('#enviarmensaje')

enviarmensaje.addEventListener('click', () => {



    let nuevaSolicitud = {
        nombre: nombre.value,
        fechaentrada: fechaentrada.value,
        fechasalida: fechasalida.value,
        huespedes: huespedes.value,
    };

    form.reset();

    localStorage.setItem("nuevasSolicitudes", JSON.stringify(nuevaSolicitud));

    nuevasSolicitudes.push(nuevaSolicitud); 

    localStorage.setItem("nuevaSolicitud", JSON.stringify(nuevasSolicitudes));

console.log(nuevasSolicitudes)




let whatsappmessage =  "https://wa.me/+5491162473003?text=¡Hola!+Mi+nombre+es+" + `${nuevaSolicitud.nombre}` + ".+Quería+saber+si+tenían+habitación+disponible+para+la+fecha+" + `${nuevaSolicitud.fechaentrada}` + "+hasta+la+fecha+" + `${nuevaSolicitud.fechasalida}` + ".+ Somos+" + `${nuevaSolicitud.huespedes}` + "+personas.+¡Muchas+gracias!+";

console.log(whatsappmessage)

window.location.replace(whatsappmessage)

})







///////////////////////////////////////////
///// MOUSEROVER BOTON DE WHATSAPP/////////
//PASA EL MOUSE POR ENCIMA Y SE CAMBIA DE TEXTO A LOGO DE ENVIAR///



const enviartext = document.querySelector("#enviartext")
const wasendlogo = document.querySelector("#wasendlogo")


enviarmensaje.addEventListener('click', () => {


    setTimeout(function() { 

        $("#enviartext").fadeOut(50)
        $("#wasendlogo").fadeIn(500)    
        
        enviartext.classList.add('hide');
        wasendlogo.classList.remove('hide');
    },100)




    


})
