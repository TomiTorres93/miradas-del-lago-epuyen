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
const menunav = document.querySelector('#menunav')
const menutext1 = document.querySelector('#menutext1')
const menutext2 = document.querySelector('#menutext2')
const menutext3 = document.querySelector('#menutext3')
const menutext4 = document.querySelector('#menutext4')
const menutext5 = document.querySelector('#menutext5')
const menutext6 = document.querySelector('#menutext6')
const menutext7 = document.querySelector('#menutext7')


var width = $("#menunav").width()

console.log(width)

menuhotel.addEventListener('click', function () {  
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
    console.log(width2)
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











// setTimeout(function() {        
//     menutext1.classList.toggle('show')}, 500)
//     setTimeout(function() {        
//     menutext2.classList.toggle('show')}, 500)
//     setTimeout(function() {        
//     menutext3.classList.toggle('show')}, 500)
//     setTimeout(function() {        
//     menutext4.classList.toggle('show')}, 500)
//     setTimeout(function() {        
//     menutext5.classList.toggle('show')}, 500)
//     setTimeout(function() {        
//     menutext6.classList.toggle('show')}, 500) 
//     setTimeout(function() {        
//     menutext7.classList.toggle('show')}, 500)                                                             
