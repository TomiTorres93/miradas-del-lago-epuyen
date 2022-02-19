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