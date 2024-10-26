const phone = document.querySelector('.phone')
const box = document.querySelectorAll('.list .box')
const list = document.querySelector('.list')
console.log(box);
let h = window.innerHeight
// console.log(h);
box.forEach((val)=>{
    val.setAttribute('data-off', val.offsetTop)
    
})

// window.addEventListener('scroll', (e)=>{
//     let st = window.scrollY
//     console.log(st);
//   box.forEach((val) => {
//     if(st>=210){
//         phone.classList.add('fix')
//     }
//     if(st>=val.getAttribute('data-off')){
        
//         val.classList.add('transform')
//         val.classList.add('transform')
//     }
//   });

// })
phone.addEventListener('wheel',(e)=>{
    
    if(e.deltaY==100){
     
        list.classList.add('transform')
    }else{
        
        list.classList.remove('transform')
    }
})