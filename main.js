const cerrarmenu = document.querySelector("#cerrarmenu")


let logoportada = document.querySelector('#logoportada')

    $("#logoportada").fadeOut(10)
    $("#logoportada").fadeIn(1500)






    //////// GALERÍA DE IMÁGENES - LA HOSTERÍA ////////
    const galeria1 = document.querySelector('#galeria1')
    const galeria2 = document.querySelector('#galeria2')
    const galeria3 = document.querySelector('#galeria3')
    const galeria4 = document.querySelector('#galeria4')
    const galeria5 = document.querySelector('#galeria5')

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




//////// GALERÍA DE IMÁGENES - LAS HABITACIONES ////////
const galeriahab1 = document.querySelector('#galeriahab1')
const galeriahab2 = document.querySelector('#galeriahab2')
const galeriahab3 = document.querySelector('#galeriahab3')
const galeriahab4 = document.querySelector('#galeriahab4')
const galeriahab5 = document.querySelector('#galeriahab5')


galeriahab1.addEventListener('click', function () {

  let galeriahab1check = galeriahab1.classList.contains('img-inact')
  let galeriahab2check = galeriahab2.classList.contains('img-inact')
  let galeriahab3check = galeriahab3.classList.contains('img-inact')
  let galeriahab4check = galeriahab4.classList.contains('img-inact')
  let galeriahab5check = galeriahab5.classList.contains('img-inact')
console.log(galeriahab1check)
console.log(galeriahab2check)
console.log(galeriahab3check)
console.log(galeriahab4check)
console.log(galeriahab5check)
 if (galeriahab1check == true) {
     galeriahab1.classList.remove('img-inact');
     galeriahab2.classList.add('img-inact');
     galeriahab3.classList.add('img-inact');
     galeriahab4.classList.add('img-inact');
     galeriahab5.classList.add('img-inact');
 }
})

galeriahab2.addEventListener('click', function () {

  let galeriahab1check = galeriahab1.classList.contains('img-inact')
  let galeriahab2check = galeriahab2.classList.contains('img-inact')
  let galeriahab3check = galeriahab3.classList.contains('img-inact')
  let galeriahab4check = galeriahab4.classList.contains('img-inact')
  let galeriahab5check = galeriahab5.classList.contains('img-inact')
console.log(galeriahab1check)
console.log(galeriahab2check)
console.log(galeriahab3check)
console.log(galeriahab4check)
console.log(galeriahab5check)
 if (galeriahab2check == true) {
     galeriahab2.classList.remove('img-inact');
     galeriahab1.classList.add('img-inact');
     galeriahab3.classList.add('img-inact');
     galeriahab4.classList.add('img-inact');
     galeriahab5.classList.add('img-inact');
 }
})


galeriahab3.addEventListener('click', function () {

  let galeriahab1check = galeriahab1.classList.contains('img-inact')
  let galeriahab2check = galeriahab2.classList.contains('img-inact')
  let galeriahab3check = galeriahab3.classList.contains('img-inact')
  let galeriahab4check = galeriahab4.classList.contains('img-inact')
  let galeriahab5check = galeriahab5.classList.contains('img-inact')
console.log(galeriahab1check)
console.log(galeriahab2check)
console.log(galeriahab3check)
console.log(galeriahab4check)
console.log(galeriahab5check)
 if (galeriahab3check == true) {
     galeriahab3.classList.remove('img-inact');
     galeriahab2.classList.add('img-inact');
     galeriahab1.classList.add('img-inact');
     galeriahab4.classList.add('img-inact');
     galeriahab5.classList.add('img-inact');
 }
})


galeriahab4.addEventListener('click', function () {

  let galeriahab1check = galeriahab1.classList.contains('img-inact')
  let galeriahab2check = galeriahab2.classList.contains('img-inact')
  let galeriahab3check = galeriahab3.classList.contains('img-inact')
  let galeriahab4check = galeriahab4.classList.contains('img-inact')
  let galeriahab5check = galeriahab5.classList.contains('img-inact')
console.log(galeriahab1check)
console.log(galeriahab2check)
console.log(galeriahab3check)
console.log(galeriahab4check)
console.log(galeriahab5check)
 if (galeriahab4check == true) {
     galeriahab4.classList.remove('img-inact');
     galeriahab2.classList.add('img-inact');
     galeriahab3.classList.add('img-inact');
     galeriahab1.classList.add('img-inact');
     galeriahab5.classList.add('img-inact');
 }
})


galeriahab5.addEventListener('click', function () {

  let galeriahab1check = galeriahab1.classList.contains('img-inact')
  let galeriahab2check = galeriahab2.classList.contains('img-inact')
  let galeriahab3check = galeriahab3.classList.contains('img-inact')
  let galeriahab4check = galeriahab4.classList.contains('img-inact')
  let galeriahab5check = galeriahab5.classList.contains('img-inact')
console.log(galeriahab1check)
console.log(galeriahab2check)
console.log(galeriahab3check)
console.log(galeriahab4check)
console.log(galeriahab5check)
 if (galeriahab5check == true) {
     galeriahab5.classList.remove('img-inact');
     galeriahab2.classList.add('img-inact');
     galeriahab3.classList.add('img-inact');
     galeriahab4.classList.add('img-inact');
     galeriahab1.classList.add('img-inact');
 }
})


//////// GALERÍA DE IMÁGENES - RESTAURANT ////////
const galeriares1 = document.querySelector('#galeriares1')
const galeriares2 = document.querySelector('#galeriares2')
const galeriares3 = document.querySelector('#galeriares3')
const galeriares4 = document.querySelector('#galeriares4')
const galeriares5 = document.querySelector('#galeriares5')


galeriares1.addEventListener('click', function () {

  let galeriares1check = galeriares1.classList.contains('img-inact')
  let galeriares2check = galeriares2.classList.contains('img-inact')
  let galeriares3check = galeriares3.classList.contains('img-inact')
  let galeriares4check = galeriares4.classList.contains('img-inact')
  let galeriares5check = galeriares5.classList.contains('img-inact')
console.log(galeriares1check)
console.log(galeriares2check)
console.log(galeriares3check)
console.log(galeriares4check)
console.log(galeriares5check)
 if (galeriares1check == true) {
     galeriares1.classList.remove('img-inact');
     galeriares2.classList.add('img-inact');
     galeriares3.classList.add('img-inact');
     galeriares4.classList.add('img-inact');
     galeriares5.classList.add('img-inact');
 }
})

galeriares2.addEventListener('click', function () {

  let galeriares1check = galeriares1.classList.contains('img-inact')
  let galeriares2check = galeriares2.classList.contains('img-inact')
  let galeriares3check = galeriares3.classList.contains('img-inact')
  let galeriares4check = galeriares4.classList.contains('img-inact')
  let galeriares5check = galeriares5.classList.contains('img-inact')
console.log(galeriares1check)
console.log(galeriares2check)
console.log(galeriares3check)
console.log(galeriares4check)
console.log(galeriares5check)
 if (galeriares2check == true) {
     galeriares2.classList.remove('img-inact');
     galeriares1.classList.add('img-inact');
     galeriares3.classList.add('img-inact');
     galeriares4.classList.add('img-inact');
     galeriares5.classList.add('img-inact');
 }
})


galeriares3.addEventListener('click', function () {

  let galeriares1check = galeriares1.classList.contains('img-inact')
  let galeriares2check = galeriares2.classList.contains('img-inact')
  let galeriares3check = galeriares3.classList.contains('img-inact')
  let galeriares4check = galeriares4.classList.contains('img-inact')
  let galeriares5check = galeriares5.classList.contains('img-inact')
console.log(galeriares1check)
console.log(galeriares2check)
console.log(galeriares3check)
console.log(galeriares4check)
console.log(galeriares5check)
 if (galeriares3check == true) {
     galeriares3.classList.remove('img-inact');
     galeriares2.classList.add('img-inact');
     galeriares1.classList.add('img-inact');
     galeriares4.classList.add('img-inact');
     galeriares5.classList.add('img-inact');
 }
})


galeriares4.addEventListener('click', function () {

  let galeriares1check = galeriares1.classList.contains('img-inact')
  let galeriares2check = galeriares2.classList.contains('img-inact')
  let galeriares3check = galeriares3.classList.contains('img-inact')
  let galeriares4check = galeriares4.classList.contains('img-inact')
  let galeriares5check = galeriares5.classList.contains('img-inact')
console.log(galeriares1check)
console.log(galeriares2check)
console.log(galeriares3check)
console.log(galeriares4check)
console.log(galeriares5check)
 if (galeriares4check == true) {
     galeriares4.classList.remove('img-inact');
     galeriares2.classList.add('img-inact');
     galeriares3.classList.add('img-inact');
     galeriares1.classList.add('img-inact');
     galeriares5.classList.add('img-inact');
 }
})


galeriares5.addEventListener('click', function () {

  let galeriares1check = galeriares1.classList.contains('img-inact')
  let galeriares2check = galeriares2.classList.contains('img-inact')
  let galeriares3check = galeriares3.classList.contains('img-inact')
  let galeriares4check = galeriares4.classList.contains('img-inact')
  let galeriares5check = galeriares5.classList.contains('img-inact')
console.log(galeriares1check)
console.log(galeriares2check)
console.log(galeriares3check)
console.log(galeriares4check)
console.log(galeriares5check)
 if (galeriares5check == true) {
     galeriares5.classList.remove('img-inact');
     galeriares2.classList.add('img-inact');
     galeriares3.classList.add('img-inact');
     galeriares4.classList.add('img-inact');
     galeriares1.classList.add('img-inact');
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
                $("#cerrarmenu").fadeOut(300)
 
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
                    $("#cerrarmenu").fadeIn(300)
                    
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




let whatsappmessage =  "https://wa.me/+5492945589660?text=¡Hola!+Mi+nombre+es+" + `${nuevaSolicitud.nombre}` + ".+Quería+saber+si+tenían+habitación+disponible+para+la+fecha+" + `${nuevaSolicitud.fechaentrada}` + "+hasta+la+fecha+" + `${nuevaSolicitud.fechasalida}` + ".+ Somos+" + `${nuevaSolicitud.huespedes}` + "+personas.+¡Muchas+gracias!+";

console.log(whatsappmessage)

window.location.replace(whatsappmessage)

})







///////////////////////////////////////////
///// CLICK BOTON DE WHATSAPP/////////
//ENVIAR EL MENSAJE SE CAMBIA DE TEXTO A LOGO DE ENVIAR///



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



// TEXTO LAGO

// const imglago = document.querySelector("#imglago")
// const lagoepuyentextid = document.querySelector("#lagoepuyentextid")

// imglago.addEventListener('mouseenter', () => {


//     setTimeout(function() { 

//         $("#lagoepuyentextid").fadeIn(500)    
//                 lagoepuyentextid.classList.remove('hide');
//     },100)



// })

// imglago.addEventListener('mouseleave', () => {


    

//         $("#lagoepuyentextid").fadeOut(500)
//         setTimeout(function() {     
//                 lagoepuyentextid.classList.add('hide');
//     },500)

// })






/////CERRAR MENU/////////







let chequearmenu = menunav.classList.contains('extrawidthnav')

console.log(chequearmenu)


cerrarmenu.addEventListener('click', function () {


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
        $("#cerrarmenu").fadeOut(30)

    }      

})




////EPUYÉN TEXTOS - BOTONES PARA PASAR AL SIGUIENTE PÁRRAFO


const parrafoepuyen1 = document.querySelector("#parrafoepuyen1")
const parrafoepuyen2 = document.querySelector("#parrafoepuyen2")
const parrafoepuyen3 = document.querySelector("#parrafoepuyen3")




////MENU MOBILE 

const menumobile = document.querySelector("#menumobile")
const logoscont = document.querySelector("#logoscont")
const textcont = document.querySelector("#textcont")


menumobile.addEventListener('click', function () {

    let chequearhidemenu = menunav.classList.contains('hide')

    menumobile.classList.toggle('menuiconlogo2click')
    menunav.classList.toggle('navegadormobile');
    

var width2 = $("#menunav").width()
        
if (width2 >= 300) {
    $("#menutext1").fadeOut(30)
    $("#menutext2").fadeOut(30)
    $("#menutext3").fadeOut(30)
    $("#menutext4").fadeOut(30)
    $("#menutext5").fadeOut(30)
    $("#menutext6").fadeOut(30)
    $("#menutext7").fadeOut(30)
    logoscont.classList.remove('show'); 

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
        logoscont.classList.add('show');
        
}},100)
}, 600)                     

})
